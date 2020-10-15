<a name="7bc4c412"></a>
# 一、接入模式介绍
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1598348435320-16bc06de-8e2c-4d92-a1af-18d141879337.png#align=left&display=inline&height=474&margin=%5Bobject%20Object%5D&name=image.png&originHeight=474&originWidth=948&size=66443&status=done&style=none&width=948)<br />1、设备通过乐心提供的蓝牙SDK上传数据到乐心服务器<br />2、账号信息通过乐心提供的SDK打通<br />3、基于蓝牙SDK之上，通过乐心的SDK将数据上报给乐心IoT平台，同时将数据回调给客户APP<br />4、客户在IoT平台配置数据转发规则，乐心IoT直接将数据回调给客户云平台<br />5、客户得到数据后通过开放平台提供的算法API对数据进行分析
<a name="eBqBc"></a>
# 二、快速集成


<a name="2d622f6d"></a>
## 2.1、依赖及初始化
<a name="OK7td"></a>
### 2.1.1、添加依赖

<br />拷贝所需的aar包到libs目录下：<br />

- lifesense-android-bluetooth-core：核心蓝牙库， 处理传输层和链路层数据，维持设备连接和通信部分
- lifesense-android-simplenet: 底层网络库， 打通乐心IOT平台
- lifesense-android-device-core：设备核心库， 处理设备管理、设备设置和设备数据上传部分
- lifesense-android-bluetooth-bp: 血压计设备的连接、数据上传和应用协议解析处理逻辑
- lifesense-android-bluetooth-scale: 体脂秤设备的连接、数据上传和应用协议解析处理逻辑
- lifesense-android-bluetooth-pedometer: 手环设备的连接、数据上传和应用协议解析处理逻辑

在module的build.gradle中添加本地aar仓库地址：
```groovy
repositories {
    flatDir {
        dirs 'libs'
    }
}
```

<br />在项目的build.gradle中添加依赖：<br />

```groovy
    implementation fileTree(dir: 'libs', include: ['*.aar'])
    api "org.apache.commons:commons-lang3:$version_lang3"
    api "org.apache.commons:commons-collections4:$version_collections4"
    api 'org.greenrobot:greendao:3.3.0'
```
<a name="90d8b7c9"></a>
### 2.1.2、初始化SDK


<a name="cES0a"></a>
#### 2.1.2.1、登录
描述：第三方账号和乐心账号静默打通， 获取默认的用户ID和token信息<br />接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceService<br />

```java

void login(Context context, int tenantId, int subscriptionId, String associationId, IRequestCallBack callBack);
```


- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| ApplicationContext | context | 设备的硬件地址 |
| int | tenantId | 租户ID，用来隔离数据和服务，公司唯一 |
| int | subscriptionId | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| String | associationId | 第三方用户唯一标识，用来做账号打通和静默登录 |


<br />tenantId， subscriptionId需要走申请流程（测试接入两个值可以固定为1、6））：

- 申请接入需要的材料

准备申请材料：

1. 确定应用接入的（企业）组织名称，并说明使用场景、用途、评估应用接入的量级
1. 确定应用的bundle identifier（appid会对使用的app进行合法性校验）
1. 确定应用需要接入的设备型号列表（如果是进行设备鉴权的话必须填写）
1. 确定应用需要接入的服务（设备、算法、软件服务包）名称（用于获得服务ID和服务版本）

材料确定后，发送申请接入邮件模板如下：
```
收件人：zhihui.xiao@lifesense.com,zheng.lu@lifesense.com
抄送：chengze.wu@lifesense.com,yong.wu@lifesense.com,zhicheng.liu@lifesense.com,chuang.liu@lifesense.com,bangwei.mo@lifesense.com
主题：【健康解决方案接入申请】（企业/组织/个人名称）
邮件内容需要包含：
1、接入目的：
2、接入的设备类型和型号：
3、接入的产品服务：
4、bundleID：（ios和android的包ID， 用于备案）
```
申请成功将会收到乐心的回复，回复内容中会包含一下信息：<br />1.tenantId （对应一个应用）<br />2.subscriptionId列表 （对应授权的服务ID和服务版本）
<a name="HdRE2"></a>
#### 2.1.1.2、初始化（登录后调用）
描述：初始化SDK<br />接口：com.lifesense.device.scale.application.interfaces.ILZDeviceService#init
```java
/**
     * 初始化蓝牙SDK
     * @param context
     * @param bleReceiveCallback 数据接收回调
     */
void init(Context context, BleReceiveCallback bleReceiveCallback);

```

- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| ApplicationContext | context | 设备的硬件地址 |
| BleReceiveCallback | bleReceiveCallback | [蓝牙设备数据的回调](#YVBCV) |

<a name="Hc08o"></a>
#### 2.1.1.3 从服务器同步设备信息（登录后使用）
功能描述：从服务器同步用户绑定的设备、设备状态、设备设置信息<br />接口：com.lifesense.device.scale.application.interfaces.ILZDeviceService#syncDeviceFromService
```java
/**
     * 同步设备信息
     * @param callback
     */
void syncDeviceFromService(OnSyncDeviceCallback callback);
```
<a name="V9XGx"></a>
#### 2.1.1.4、 开启数据接收服务（登录后使用）
描述：通知sdk开启数据接收服务，开始连接设备同步数据<br />接口：com.lifesense.device.scale.application.service.LZDeviceSyncService#startDataReceive
```java
/**
     * 开始接收数据
     */
void startDataReceive();

```
<a name="GdwfH"></a>
### 2.1.2、 更新用户信息（登录后使用）
功能描述：部分场景下需要打通用户身份信息，例如: 血压、体重需要用户的年龄头像昵称，睡眠、心率需要用户的年龄等，需要调用该接口做用户信息的打通<br />接口：com.lifesense.device.scale.infrastructure.net.DeviceNetManager
```java
public void updateUser(User user, IRequestCallBack<UpdateUserResponse> callBack)；
```
示例：
```java
User user = UserManager.getInstance(MainActivity.this).getUser();
user.setWeight(73);
user.setBirthday(new Date());
user.setName("无用");
user.setImage("sedd");
DeviceNetManager.getInstance().updateUser(user, null);
```
<a name="YVBCV"></a>
### 2.1.3、 设置蓝牙设备数据的回调
功能描述：蓝牙数据通过设备上传到sdk后，会直接上传到乐智云平台，同时也会通过本地消息的方式分发给订阅者<br />接口：com.lifesense.device.scale.application.service.LZDeviceService
```java
    void registerDataReceiveCallBack(BleReceiveCallback callback);
```

- BleReceiveCallback属性定义
| 类型 | 参数 | 说明 |
| --- | --- | --- |
| OnDataReceiveListener | receiveListener | 接收设备上传的数据 |
| OnDeviceConnectStateListener | connectStateListener | 设备状态监听，包括wifi和蓝牙的信息 |



-  接收设备上传的数据
| 数据项 | 接口 | 数据类型 | 回调方法 |
| --- | --- | --- | --- |
| 体重数据 | OnDataReceiveListener | [体重数据](#tgdYc) | onReceiveWeightData |
| 血压数据 |  | [血压数据](#zpZj2) | onReceiveBpMeasureInfo |
| 手环数据 | OnDataReceiveListener | 手环测量数据 | onReceiveDeviceMeasureData |



-  接收设备状态数据
```java
public interface OnDeviceConnectStateListener {
    void onDeviceConnectStateChange(String mac, DeviceConnectState state);
}
```



| 数据项 | 接口 | 回调方法 |
| --- | --- | --- |
| 蓝牙连接状态 | OnDeviceConnectStateListener | onDeviceConnectStateChange |
| wifi连接状态 |  | onReceiveWifiConnectState |
| 蓝牙设备扫描到的wifi信息 |  | onReceiveWifiScanResult |
| 蓝牙设备处于扫描结束状态 |  | onReceiveWifiScanEnd |



<a name="DJMHz"></a>
# 三、绑定设备指引


<a name="66f6ef77"></a>
## 3.1、绑定流程
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1596089032233-e5c7531c-39d8-4837-840f-be6d914d8d42.png#align=left&display=inline&height=464&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=1008&size=69529&status=done&style=none&width=1008)
<a name="6ddeaa40"></a>
## 3.2、搜索绑定设备


<a name="d4d1c408"></a>
### 3.2.1、搜索设备


- 功能描述：根据目标产品信息搜索蓝牙设备，返回单个搜索到的设备，需要开发者自己聚合
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void searchDevice(DisplayProduct displayProduct, SearchResultCallback callback);
```


- 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| DisplayProduct | displayProduct | [displayProduct配置表](#qN5eu) |
| SearchResultCallback | callback | 搜索结果回调， 单个返回LSEDeviceInfo（设备信息）和蓝牙信号强度rssi |


<br />displayProduct配置表: [产品信息元数据](#zMo2z)<br />callback的回调参数：[搜索设备数据结构](#tgdYc)
<a name="juvi2"></a>
### 3.2.2、停止搜索设备（分支情况）


- 功能描述：中断正在进行中的搜索，开发者一般在离开搜索页面或搜索结束时调用，内部调用逻辑不做描述
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void stopSearch();
```


<a name="20d28fc9"></a>
### 3.2.3、 绑定搜索到的设备


- 功能描述：开始绑定用户从搜索到的设备列表中（来自1.2.1.1）选择的设备
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void bindDeviceBySearchResult(LSEDeviceInfo lseDeviceInfo, BindResultCallback callback);
```


- 参数定义：<br />1、LSEDeviceInfo（目标设备信息）：[设备详细信息](#LJOzk)

     2、BindResultCallback 绑定结果的回调

| 数据项 | 接口 | 回调方法 |
| --- | --- | --- |
| 绑定成功 | BindResultCallback | onSuccess |
| 绑定失败 |  | onFailed |
| 收到手环发上来的输入验证码请求 |  | onDevicePairingRequest |

<a name="ykGXN"></a>
#### 3.2.3.1 手环随机码配对

- 功能描述：收到onDevicePairingRequest回调后解析LSEPairRespondData参数中的验证码长度（6）和验证码类型（RandomNumber），提示用户输入手环上显示的6位数验证码
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
 PairRandomStatus inputCode(String code, String macAddress);
```
<a name="eM63Q"></a>
### 3.2.4、中断绑定流程


- 功能描述：中断正在绑定中的设备，一般发生在搜索成功后， 绑定成功前用户接受进程或退出绑定页面
   - 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void interruptBindDevice(LSEDeviceInfo lseDeviceInfo);
```


- 参数定义：<br />1、LSEDeviceInfo（目标设备信息）：[设备详细信息](#LJOzk)



- 调用示例：



```java
LZDeviceService.getInstance().interruptBindDevice(mCurDeviceInfoApp.getLSEDeviceInfo());
```


<a name="6cc4e1c5"></a>
## 3.3、获取用户已经绑定的设备列表


- 功能描述：根据目标产品信息搜索蓝牙设备，返回单个搜索到的设备，需要开发者自己聚合
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
List<Device> getBondedDevices();
```


- 返回值：[已绑定的设备信息](#mHaqU)



<a name="f7ef2051"></a>
## 3.4、解绑


- 功能描述：接触设备与当前用户的绑定关系



```java
void unBindDevice(String deviceId, OnResultCallback callback);
```


- 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| String | deviceId | 设备ID |
| OnResultCallback | callback | 解绑回调 |



<a name="ooXwD"></a>
# 四、配网
<a name="Cp0UA"></a>
## 4.1、通知设备扫描附近的Wifi

- 功能描述：通知设备扫描附近的Wifi，扫描到的wifi通过 “**2.1.3**”中的“onReceiveWifiScanResult”回调
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceService
```java
/**
     * 通知设备开始扫描附近的wifi
     * @param mac 蓝牙设备的mac地址
     */
void startScanWifi(String mac);
```

- 参数：
| 参数名称 | 含义 |
| --- | --- |
| mac | 蓝牙设备的mac地址 |

- 结果回调

1、收到wifi的扫描结果<br />接口：com.lifesense.android.bluetooth.core.ReceiveDataCallback#onReceiveWifiScanResult<br />回调信息：

| 参数名称 | 含义 |
| --- | --- |
| ssid | wifi名称 |
| bssid | mac地址，配网时要用 |
| status | 当前wifi的连接状态，0： not connected before，1  connected before |
| rssi | 信号强度 |
| authMode | 认证模式<br />0：Open<br />1：WEP<br />2: WPA_PSK<br />3: WPA2_PSK<br />4: WPA_WPA_2_PSK<br />5: WPA2_ENTERPRISE |

2、收到wifi扫描结束信号<br />com.lifesense.android.bluetooth.core.ReceiveDataCallback#onReceiveWifiScanEnd<br />

<a name="dBjFA"></a>
## 4.2、开始配网

- 功能描述：通过**”****4.1****“**中扫描到的wifi列表信息，选择其中一个进行配网
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceService
```java
/**
     * 开始配置wifi
     * @param mac 蓝牙设备的mac地址
     * @param password wifi密码
     * @param bssid 蓝牙设备返回的bssid
     * @param status wifi设备的状态
     */
void startConfigWifi(String mac, String password, byte[] bssid, int status);
```

- 参数：
| 参数名称 | 含义 |
| --- | --- |
| mac | 蓝牙设备的mac地址 |
| password | 密码 |
| bssid | ap的mac地址，从扫描中获得 |
| status | 当前ap的连接状态， 从ap中获得 |

- 结果回调

1、收到配网结果<br />接口：com.lifesense.device.scale.application.interfaces.listener.OnDeviceConnectStateListener#onReceiveWifiConnectState<br />回调信息：

| 参数名称 | 含义 |
| --- | --- |
| wifiState | 配网状态（枚举值） |

<a name="QMqJs"></a>
## 4.3、查询设备的网络连接状态

- 功能描述：查询蓝牙\Wifi双模设备的网络连接状态
- 接口：com.lifesense.device.scale.application.interfaces.ILZDeviceService
```java
    /**
     * 查询蓝牙、wifi双模设备的联网状态
     * @param mac
     */
    void getWifiConnectStatus(String mac);
```

- 参数：
| 参数名称 | 含义 |
| --- | --- |
| mac | 蓝牙设备的mac地址 |

- 结果回调

1、收到连接结果<br />接口：com.lifesense.device.scale.application.interfaces.listener.OnDeviceConnectStateListener#onReceiveWifiConnectState<br />回调信息：

| 参数名称 | 含义 |
| --- | --- |
| wifiState | 配网状态（枚举值） |

<a name="mphyc"></a>
## 4.4、查询设备是否配网
功能描述: 查询用户当前配置的wifi名称， 未配置的返回为空字符串， 同步返回配网信息，同时异步查询设备配网信息更新<br />接口：com.lifesense.device.scale.application.interfaces.ILZDeviceService#queryConfigedWifiSsid
```java
/**
     * 查询是否配网
     *
     * @param mac
     */
String queryConfigedWifiSsid(String mac);

```

- 结果回调（注：当前固件只有在有配网时才有回调， 未配网的设备不会回复是否配网的结果）

1、收到连接结果<br />回调接口: com.lifesense.device.scale.application.interfaces.listener.OnDeviceConnectStateListener#onReceiveWifiConfigInfo<br />回调信息：

| 参数名称 | 含义 |
| --- | --- |
| status | 连接状态 0标识成功连接 |
| ssid | 当前连接的wifi名称 |


<br />

<a name="DFH4N"></a>
## 4.5、重置Wifi
功能：重置已经配网的设备<br />接口：com.lifesense.device.scale.application.interfaces.ILZDeviceService#resetWifi
<a name="eOYih"></a>
# 五、设置
<a name="glyQl"></a>
## 5.1、体脂秤的设置
<a name="506Ys"></a>
### 5.1.1、单位设置


- 功能描述：设置体脂秤重量单位



```java
void setUnit(String deviceId, UnitType unitType, OnSettingCallBack callBack);
```

<br />UnitType定义：

| name | value | 说明 |
| --- | --- | --- |
| UNIT_KG | 0 | 千克 |
| UNIT_LB | 1 | 磅 |
| UNIT_ST | 2 | 英石 |
| UNIT_JIN | 3 | 斤 |
| UNIT_GONG_JIN | 4 | 公斤 |



<a name="Mk6p0"></a>
### 5.1.2、获取单位


- 功能描述：获取体脂秤的单位



```java
int getUnit(String deviceId);
```

<br />返回值含义：

| name | value | 说明 |
| --- | --- | --- |
| KG | 1 | 千克 |
| JIN | 2 | 斤 |
| LB | 3 | 磅 |
| ST | 4 | 英石 |



<a name="r7eQ1"></a>
## 5.3、手环的设置
<a name="ymBPk"></a>
### 5.3.1、下发设置项
接口：com.lifesense.device.scale.application.service.LZDeviceService#setDeviceSettings
```groovy
/**
     * 设置设备的各项设置
     * @param mac mac地址
     * @param config 配置类
     * @param optType
     * @param listener
     */
    void setDeviceSettings(String mac, BaseDeviceConfig config, OperateType optType, OnSettingCallBack listener);

```
参数：

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac |  | 设备的MAC地址 |
| config | BaseDeviceConfig | [手环设置类型](#WUzfn) |
| optType | OperateType | 操作类型 |
| callback | OnSettingCallBack | 设置的回调 |



<a name="9xEFj"></a>
### 5.3.2、查询设置项
接口：com.lifesense.device.scale.application.service.LZDeviceService#getDeviceSettings
```groovy
    /**
     * 获取设置信息
     * @param mac
     * @return
     */
    List<? extends BaseDeviceConfig> getDeviceSettings(String mac, Class<? extends BaseDeviceConfig> clazz);

```
参数：

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac |  | 设备的MAC地址 |
| class | Class | [手环设置类型](#WUzfn) |



<a name="eCalz"></a>
# 六、OTA升级


<a name="2da42b91"></a>
## 6.1、查询最新固件


```java
void checkDeviceFirmwareUpgrade(String deviceId, OnCheckUpgradeCallback callback);
```


<a name="9e696a9a"></a>
## 6.2、发起固件升级


```java
void upgradeDeviceFirmware(String deviceId, String filePath, UpgradeStateListener listener);
```


<a name="615150a3"></a>
## 6.3、中断升级


```java
 void interruptUpgradeDeviceFirmware(String deviceId);
```

<br />

<a name="BEaac"></a>
# 七、数据字典
<a name="gbeg6"></a>
## 7.1、设备信息数据
<a name="zMo2z"></a>
### 7.1.1、产品信息元数据
| 设备类型 | 型号 | 配置 |
| --- | --- | --- |
| 手环 | 乐心手环5S | {  <br />  "displayProductId": 5,<br />  	"name": "乐心手环 5S",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/ac0c2bcac1e04cb29587e155943e3c45.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS431-B3",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5S",<br />    "randomCode": true,<br />    "name": "乐心手环 5S"<br />  	}, {<br />    "model": "LS431-B3001",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5S",<br />    "randomCode": true,<br />    "name": "Lifesense Band 5S"<br />  	}, {<br />    "model": "LS431-B3003",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5S",<br />    "randomCode": true,<br />    "name": "乐心手环 5S"<br />  	}, {<br />    "model": "LS431-B3006",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "5S B.Duck",<br />    "randomCode": true,<br />    "name": "乐心手环 5S B.Duck"<br />  	}]<br />  } |
|  | MamboHR2 | {<br />  	"displayProductId": 28,<br />  	"name": "Mambo HR 2",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/2db92d53da1743ffb22b9fad11b024f8.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS431-B7",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "mambo HR 2",<br />    "randomCode": true,<br />    "name": "乐心手环 Mambo HR 2"<br />  	}]<br />  } |
|  | MamboHR3 | {<br />  	"displayProductId": 67,<br />  	"name": "乐心手环 HR3",<br />  	"imageUrl": "https://files.lifesense.com/other/20200728/f4b7cdbe30334b45a1e7b380254f7360.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS431-B016",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "mambo HR 2",<br />    "randomCode": true<br />  	}]<br />  } |
|  | 乐心手环5 | {<br />  	"displayProductId": 12,<br />  	"name": "乐心手环 5",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/7b803a3ef14044bb8a7d6181b1db976e.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS431-B",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5",<br />    "randomCode": true,<br />    "name": "乐心手环 5"<br />  	}, {<br />    "model": "LS431-B002",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5",<br />    "randomCode": true,<br />    "name": "Lifesense Verbena"<br />  	}, {<br />    "model": "LS431-B2",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5",<br />    "randomCode": true,<br />    "name": "乐心手环 5"<br />  	}, {<br />    "model": "LS431-B-001",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS Band 5",<br />    "randomCode": true,<br />    "name": "樂心手環 5"<br />  	}]<br />  } |
|  | 乐心手环3 | {<br />  	"displayProductId": 11,<br />  	"name": "乐心手环 3",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/5867aa4671154faaa3afca4ff6522474.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS428-B",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS band 3",<br />    "randomCode": true,<br />    "name": "乐心手环 3"<br />  	}, {<br />    "model": "LS428-B002",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "LS band 3",<br />    "randomCode": true,<br />    "name": "Lifesense Band 3"<br />  	}]<br />  } |
|  | Mambo | {<br />  	"displayProductId": 30,<br />  	"name": "Mambo",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/c7f32ca119924ddb9937c22c6da2844c.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 2,<br />  	"factoryProducts": [{<br />    "model": "LS421-B",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "My Mambo",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "乐心手环 Mambo"<br />  	}, {<br />    "model": "LS405",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "Wechat",<br />    "bluetoothBroadcastName": "My Mambo",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "乐心手环 Mambo"<br />  	}, {<br />    "model": "LS421-F001",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "My Mambo",<br />    "randomCode": false,<br />    "name": "Mambo"<br />  	}]<br />  }, |
|  | 其它手环 | {<br />  	"displayProductId": 7,<br />  	"name": "其他乐心手环",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/f32e0771e1e741fca3dd9476b928be24.png",<br />  	"productTypeCode": 1,<br />  	"defaultBindMode": 2,<br />  	"factoryProducts": [{<br />    "model": "LS415-F",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "mambo watch",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "Mambo Watch"<br />  	}, {<br />    "model": "LS415-B",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A5",<br />    "bluetoothBroadcastName": "mambo watch",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "乐心手表 Mambo Watch"<br />  	}, {<br />    "model": "LS410",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "Wechat",<br />    "bluetoothBroadcastName": "BonBonC",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "乐心手环 BonBonC"<br />  	}, {<br />    "model": "LS407",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "Wechat",<br />    "bluetoothBroadcastName": "BonBon",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "乐心手环 BonBon"<br />   }]<br />	} |
| 手表 | H1 | {<br />  	"displayProductId": 13,<br />  	"name": "H1",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/bcbdc040b95e4edc9912f667e2d7b7fc.png",<br />  	"productTypeCode": 2,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS430-B",<br />    "productTypeCode": "04",<br />    "communicationType": "4",<br />    "transferProtocal": "A6",<br />    "bluetoothBroadcastName": "LS Watch H1",<br />    "randomCode": true,<br />    "name": "H1"<br />  	}]<br /> 	} |
| 智能秤 | S12 | {<br />  	"displayProductId": 33,<br />  	"name": "S12",<br />  	"imageUrl": "https://files.lifesense.com/other/20191122/1fcd255061554db4b2e3efa09dec7f2f.png",<br />  	"productTypeCode": 3,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS215-B1",<br />    "productTypeCode": "02",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS215-B1",<br />    "randomCode": false,<br />    "name": "乐心体脂秤 S12"<br />  	}]<br />} |
|  | S11 | {<br />  	"displayProductId": 22,<br />  	"name": "S11",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/7b33f96e6f2141a3ad561e031f22c918.png",<br />  	"productTypeCode": 3,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS213-B1",<br />    "productTypeCode": "02",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS213-B1",<br />    "randomCode": false,<br />    "name": "乐心体脂秤 S11"<br />  	}]<br />  } |
|  | S9 | {<br />  	"displayProductId": 21,<br />  	"name": "S9",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/990d4e72d2e94798ac3a1bdb1a87e049.png",<br />  	"productTypeCode": 3,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS215-B",<br />    "productTypeCode": "02",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS215-B",<br />    "randomCode": false,<br />    "name": "乐心体脂秤 S9"<br />  	}]<br />} |
|  | S5 Nana | {<br />  	"displayProductId": 18,<br />  	"name": "S5 mini/NaNa",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/245fb239846c41008f3a7e57764c0771.png",<br />  	"productTypeCode": 3,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS213-B",<br />    "productTypeCode": "02",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS213-B",<br />    "randomCode": false,<br />    "name": "乐心体脂秤 S5 mini/NaNa"<br />  	}]<br />  } |
|  | A3-S | {<br />  	"displayProductId": 68,<br />  	"name": "A3-S",<br />  	"imageUrl": "https://files.lifesense.com/other/20200728/41846a901afd437390171b81e852104e.png",<br />  	"productTypeCode": 3,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS207-B3",<br />    "productTypeCode": "02",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS207-B3",<br />    "randomCode": false<br />  	}]<br />  } |
|  | A1-F | {<br />  	"displayProductId": 1,<br />  	"name": "A1-F/LS212-B",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/191a0a84408c40959348b5cb69e1b921.png",<br />  	"productTypeCode": 3,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS212-B",<br />    "productTypeCode": "02",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS212-B",<br />    "randomCode": false,<br />    "configureManne": 0,<br />    "name": "乐心体脂秤 LS212-B"<br />  	}]<br />  } |
| 血压计 | i7蓝牙版 | {<br />  	"displayProductId": 26,<br />  	"name": "i7 蓝牙版",<br />  	"imageUrl": "https://files.lifesense.com/other/20191107/7bd319e38d544a2ea4f7d96141361e83.png",<br />  	"productTypeCode": 4,<br />  	"defaultBindMode": 3,<br />  	"factoryProducts": [{<br />    "model": "LS818-B",<br />    "productTypeCode": "08",<br />    "communicationType": "4",<br />    "transferProtocal": "InterConnection",<br />    "bluetoothBroadcastName": "LS818-B",<br />    "randomCode": false,<br />    "name": "乐心双管血压计i7 蓝牙版"<br />  	}]<br />  } |

<a name="LJOzk"></a>
### 7.1.2、搜索设备信息
com.lifesense.device.scale.device.dto.device.LSEDeviceInfo

| 类型 | Names | 说明 |
| --- | --- | --- |
| String | macAddress | 设备的硬件地址 |
| String | deviceName | 设备名称 |
| String | protocolType | 协议类型，A2表示使用A2协议的设备，A3表示使用A3协议的类型 |
| LSDeviceInfo | lsDeviceInfo | 设备详细信息 |
| ScanRecord[] | scanRecord | 原始的扫描数据 |



<a name="a45wk"></a>
#### 7.1.2.1、设备详细信息
com.lifesense.android.bluetooth.core.bean.LsDeviceInfo

| 名称 | 说明 |
| --- | --- |
| deviceType |  设备类型  |
| broadcastID | 广播唯一ID， 等同于MAC地址 |
| deviceName |  设备名称  |
| **deviceId** | 设备唯⼀ID，需要第⼀次绑定时注册，否则为空  |
| **modelNumber** | ⼯⼚型号  |
| protocolType |   协议类型  |
| macAddress | mac地址  |
| rssi | 信号强度  |
| **sn** | 设备序列号  |
| manufactureName | ⼯⼚名称 |

<br />
<a name="mHaqU"></a>
### 7.1.3 已绑定的设备信息
com.lifesense.device.scale.infrastructure.entity.Device

| 参数名称 | 说明 |
| --- | --- |
| **id** | deviceId， 设备的唯一ID |
| **userId** | 用户ID |
| **name** | 设备名称 |
| **otaVersion** | 软件版本 |
| **mac** | mac地址 |
| **hardwareVersion** | 硬件版本 |
| **imageUrl** | 设备的图片 |
| **productTypeCode** | 产品类型<br />_体重秤("01"),脂肪秤("02"), 手环("04"), 血糖仪("06"), 血压计("08")_ |
| **model** | _工厂型号_ |
| **venderId** | _产商标识号_ |
| **sn** | 序列号，（唯一） |

<a name="DwJ9B"></a>
## 7.2、设备测量数据
<a name="JVc8l"></a>
### 7.2.1、体重数据
数据结构类：com.lifesense.device.scale.device.dto.receive.WeightData

| 字段名称 | 类型 | 含义及备注 |
| --- | --- | --- |
| **weight** | double | 测量的体重，体脂秤始终上传KG单位的数据，需要自己按照单位设置转换 |
| **resistance50k** | double | 电阻值 |
| **measurementTime** | long | _测量时间， 单位为秒_ |
| deviceId | string | 设备唯一ID，乐心服务器生成 |



<a name="UiemW"></a>
### 7.2.2、血压数据
数据结构类：com.lifesense.device.scale.device.dto.receive.BpRecord

| 字段名称 | 类型 | 含义及备注 |
| --- | --- | --- |
| **deviceId** | string | 设备唯一ID，乐心服务器生成 |
| **measurementDate** | double | 测量时间 |
| **systolicPressure** | int | 高压 |
| **diastolicPressure** | int | 低压 |
| **heartRate** | int | _脉搏数据_ |
| **userNo** | int | 血压计用户编号（1、2） |



<a name="Qoa2m"></a>
### 7.2.3、手环测量数据
数据类型：com.lifesense.android.bluetooth.core.enums.DataType<br />数据基类：com.lifesense.android.bluetooth.core.bean.BaseDeviceData

| 数据类型 | 含义 | 数据结构 |
| --- | --- | --- |
| PedometerInfo | 手环上报的设备信息数据 |  |
| PedometerData | 步数、距离、卡路里消耗数据 |  |
| PedometerHeartRateData | 日常心率监测、5分钟一笔 |  |
| PedometerSleepData | 睡眠原始数据 |  |
| SportsModeData | 手环通知手机进入运动模式（部分运动需要手机开启GPS收集经纬度） |  |
| PedometerSportsCalorieData | 运动消耗卡路里数据 |  |
| PedometerSportsHeartRateData | 运动心率数据（1分钟一笔） |  |
| AerobicRun12Data | 有氧运动 |  |
| BadmintonData | 羽毛球运动 |  |
| BasketballData | 篮球运动 |  |
| BodyBuildingData | 健身运动 |  |
| CyclingData | 骑行运动 |  |
| EllipticalData | 椭圆机 |  |
| FitnessDanceData | 健身舞 |  |
| FootballData | 足球 |  |
| GamingData | 电竞 |  |
| IndoorRunData | 室内跑 |  |
| StrengthTrainingData | 力量训练 |  |
| PingPongData | 乒乓球 |  |
| SwimmingData | 游泳 |  |
| TaijiData | 太极 |  |
| VolleyballData | 排球 |  |
| YogaData | 瑜伽 |  |

<a name="SS8g5"></a>
#### 7.2.3.1、设备信息
数据类：com.lifesense.android.bluetooth.pedometer.bean.PedometerInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| macAddress | String | MAC地址 |
| modelNumber | String | 型号 |
| softwareVersion | String | 固件版本 |
| hardwareVersion | String | 硬件版本 |
| currentTimeZone | String | _产品当前时区，从00到60（16进制）代表utc从-12:00到+12:00，期间每递增1代表+0:15_ |

<a name="O0G6g"></a>
#### 7.2.3.1、步数消耗
数据类：com.lifesense.android.bluetooth.pedometer.bean.PedometerData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| step | int | 总步数 |
| examount | int | _总运动量_ |
| calories | float | 总卡路里 |
| exerciseTime | int | _总运动时长（s）_ |
| distance | int | 距离（米） |
| battery | int | 电量 |
| sportLevel | int | 运动 |
| utc | long | 时间 |
| batteryPercent | int | 电量百分比 |
| sleepStatus | int | 睡眠状态 |

<a name="Hpn9K"></a>
#### 7.2.3.1、日常心率
数据类：com.lifesense.android.bluetooth.pedometer.bean.PedometerHeartRateData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **measurementTime** | long | 测量时间 |
| **utcOffSet** | int | 每个心率的时间间隔（秒） |
| **heartRates** | List<Integer> | 心率值 |
| **quantityOfHeartRate** | int | 数量 |

<a name="pR82O"></a>
#### 7.2.3.1、睡眠
数据类：com.lifesense.android.bluetooth.pedometer.bean.PedometerSleepData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **measurementTime** | long | 测量时间（起始时间） |
| **timeUnit** | int | 每比睡眠的时间间隔（秒） |
| **statusList** | List<Integer> | 睡眠原始数据值 |

如何分析睡眠结果：参考乐心开放平台算法：[https://hezuo.lifesense.com/](https://hezuo.lifesense.com/)
<a name="Wbpil"></a>
#### 
<a name="FYyi6"></a>
#### 7.2.3.1、手环通知手机进入运动模式
数据类：com.lifesense.android.bluetooth.pedometer.bean.SportsModeData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **requestType** | _int_ | _手机功能检测请求类型，0x01：GPS检测；其他：预留_ |
| **sportStatus** | int | _运动状态,0x00：开始；0x01：结束_ |
| **sportsType** | int | _运动类型_ |
| **data** | byte[] | 预留数据 |

<a name="FU3nT"></a>
#### 7.2.3.1、运动消耗卡路里
数据类：com.lifesense.android.bluetooth.pedometer.bean.PedometerRunningCalorieData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **measurementTime** | long | 测量UTC |
| **timeUnit** | int | _UTC偏移量,每个单位值代表5s，__如：12表示心率数据是60s间隔__采样一次_ |
| **remainCount** | int | _手环中卡路里数据剩余条数_ |
| **quantity** | _int_ | _当前上传卡路里数据起始条数_ |
| **calories** | List<Float> | _卡路里列表_ |

<a name="Jp6ck"></a>
#### 7.2.3.1、运动心率
数据类：com.lifesense.android.bluetooth.pedometer.bean.

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **measurementTime** | long | 测量时间 |
| **utcOffSet** | int | 每个心率的时间间隔（秒） |
| **heartRates** | List<Integer> | 心率值 |
| **quantityOfHeartRate** | int | 数量 |
| **sportsMode** | PedometerSportsType |  |
| dataType | int | 数据类型 |

<a name="0OUnj"></a>
#### 7.2.3.1、有氧
数据类：com.lifesense.android.bluetooth.pedometer.bean.AerobicRun12Data

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **aerobics** |  | 有氧能力 |
| **sportAge** |  | 身体年龄 |
| **silentHeartRate** |  | 静息心率 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |

<a name="MiNFR"></a>
#### 7.2.3.1、羽毛球
数据类：com.lifesense.android.bluetooth.pedometer.bean.BadmintonData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="9Ymkj"></a>
#### 7.2.3.1、篮球
数据类：com.lifesense.android.bluetooth.pedometer.bean.BasketballData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="LByFt"></a>
#### 7.2.3.1、健身
数据类：com.lifesense.android.bluetooth.pedometer.bean.BodyBuildingData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |



<a name="bToWs"></a>
#### 7.2.3.1、骑行
数据类：com.lifesense.android.bluetooth.pedometer.bean.CyclingData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="sn5jU"></a>
#### 7.2.3.1、椭圆机
数据类：com.lifesense.android.bluetooth.pedometer.bean.EllipticalData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="YKsnn"></a>
#### 7.2.3.1、健身舞
数据类：com.lifesense.android.bluetooth.pedometer.bean.FitnessDanceData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="TUA6S"></a>
#### 7.2.3.1、足球
数据类：com.lifesense.android.bluetooth.pedometer.bean.FootballData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="obQnO"></a>
#### 7.2.3.1、电竞
数据类：com.lifesense.android.bluetooth.pedometer.bean.GamingData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="UQd2G"></a>
#### 7.2.3.1、室内跑
数据类：com.lifesense.android.bluetooth.pedometer.bean.

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="GdfSU"></a>
#### 7.2.3.1、力量训练
数据类：com.lifesense.android.bluetooth.pedometer.bean.StrengthTrainingData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="mt9Pu"></a>
#### 7.2.3.1、乒乓球
数据类：com.lifesense.android.bluetooth.pedometer.bean.PingPongData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="5zc5Q"></a>
#### 7.2.3.1、游泳
数据类：com.lifesense.android.bluetooth.pedometer.bean.SwimmingData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |
| laps |  | 圈数 |

<a name="Rhh2r"></a>
#### 7.2.3.1、太极
数据类：com.lifesense.android.bluetooth.pedometer.bean.TaiJiData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="Rjfu7"></a>
#### 7.2.3.1、排球
数据类：com.lifesense.android.bluetooth.pedometer.bean.VolleyballData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |

<a name="i6BzC"></a>
#### 7.2.3.1、瑜伽<br />
数据类：com.lifesense.android.bluetooth.pedometer.bean.YogaData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| **maxStepRate** |  | 最大步频 |
| **avgStepRate** |  | 平均步频 |
| **exerciseTime** |  | 运动时长 |
| **calories** |  | 卡路里 |
| maxSpeed |  | 最大速度 |
| avgSpeed |  | 平均速度 |
| distance |  | 距离 |
| maxHeartRate |  | 最大心率 |
| avgHeartRate |  | 平均心率 |
| step |  | 步数 |
| **startTime** |  | 开始时间 |
| **endTime** |  | 结束时间 |



<a name="WUzfn"></a>
## 7.3、手环的设置项
| 设置类名 | 设置项名称 |
| --- | --- |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerCallReminderInfo | 来电提醒开关设置 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerDialPeaceInfo | 表盘样式设置 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerEncourage | 步数、卡路里、距离目标设置 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerEventReminder | 闹钟（事件提醒）设置 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerHeartRateAlert | 心率预警设置 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerHeartRateRange | 心率区间设置（5区间、3区间） |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerHeartRateSwitch | 连续心率监测开关 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerMessageRemind | 消息提醒设置（通知栏消息、短信） |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerNightMode | 夜间模式 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerNoDisturbMode | 勿扰模式 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerSceenContent | 设置手环展示的内容项（只支持设置3个） |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerScreenDirection | 这是屏幕方向 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerSedentaryInfo | 设置久坐提醒 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerSportsInfo | 这是运动信息 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerSwimmingInfo | 设置游泳池的长度 |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerTimeFormat | 设置时间制式（12 or 24） |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerWearingInfo | 设置佩戴习惯（左右手） |
| com.lifesense.android.bluetooth.pedometer.bean.settings.PedometerWeather | 设置天气 |

<a name="LeynF"></a>
#### 来电提醒开关设置
PedometerCallReminderInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| remindType | int | 提醒类型：<br />0x01：来电提醒<br />0x02：消息提醒<br />0x03：锻炼提醒<br />其它预留 |
| vibrationDelay | int | 震动延时时间 |
| vibrationMode |  | 震动模式：<br />CONTINUOUS_VIBRATION<br />INTERMITTENT_VIBRATION1<br />INTERMITTENT_VIBRATION2<br />INTERMITTENT_VIBRATION3<br />INTERMITTENT_VIBRATION4<br /> |
| vibrationTime | int | 震动时间 |
| vibrationIntensity1 | int | 震动等级1<br />共分10级，0～9 |
| vibrationIntensity2 | int | 震动等级2<br />共分10级，0～9 |
| enable | boolean | 是否打开 |

<a name="EbJaq"></a>
#### 表盘样式设置
PedometerDialPeaceInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| dialPeace |  | 表盘样式<br />1～6 |

<a name="WTQ9v"></a>
#### 步数、卡路里、距离目标设置
PedometerEncourage

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| pedometerEncourageType |  | 目标类型 |
| enable |  | 目标开关 |
| target | float | 目标值<br />步数：精确度1.0<br />卡路里：精确度：0.1<br />距离：精确度：1.0 |

<a name="N4Zf5"></a>
#### 闹钟（事件提醒）设置
PedometerEventReminder

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| reminderContent | String | 事件提醒的内容 |
| enable | boolean | 开关 |
| hour | int | 事件提醒的小时 |
| min | int | 事件提醒的分钟 |
| repeatDay | List | 每周的重复时间 |
| vibrationMode | VibrationMode | 震动方式 |
| vibrationntensity1 | int | 震动等级1<br />共分10级，0～9 |
| vibrationntensity2 | int | 震动等级2<br />共分10级，0～9 |

<a name="12EFD"></a>
#### 心率预警设置
PedometerHeartRateAlert

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | boolean | 心率开关 |
| minHeartRate | int | 最小心率<br />50～120 |
| maxHeartRate | int | 最大心率<br />120～200 |

<a name="yAafR"></a>
#### 连续心率监测开关
PedometerHeartRateSwitch

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| heartRateDetectionMode | HeartRateDetectionMode | 心率测量方式 |
|  |  |  |

<a name="XDjGH"></a>
#### 消息提醒设置（通知栏消息、短信）
PedometerMessageRemind

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| messageType | MessageType | 消息类型 |
| enable | boolean | 开关 |

- 所需权限

<uses-permission android:name="android.permission.READ_SMS"/>

- 使用消息提醒需要用户手动进行授权，所以使用前需要对用户进行引导设置
```java
String string = Settings.Secure.getString(getContentResolver(),
                                          "enabled_notification_listeners");
if (!string.contains(NotificationCollectorService.class.getName())) {
      startActivity(new Intent("android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS"));
}
```
<a name="egacv"></a>
#### 夜间模式
PedometerNightMode

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| startHour | int | 开始时间小时数 |
| startMinute | int | 开始时间分钟数 |
| endHour | int | 结束世界小时数 |
| endMinute | int | 结束时间分钟数 |
| enable | boolean | 开关 |

<a name="idjv8"></a>
#### 勿扰模式
PedometerNoDisturbMode

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| startHour | int | 开始时间小时数 |
| startMinute | int | 开始时间分钟数 |
| endHour | int | 结束世界小时数 |
| endMinute | int | 结束时间分钟数 |
| enable | boolean | 开关 |
| isEnableRaise | boolean | 勿扰模式下是否允许抬手亮屏 |

<a name="MPzvg"></a>
#### 设置手环展示的内容项（只支持设置3个）
PedometerSceenContent

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| pedometerPages | List<PedometerPages> | 是指手环默认显示的运动类型，最多三个 |

<a name="2ujqc"></a>
#### 设置屏幕方向
PedometerScreenDirection

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| pedometerScreenMode | PedometerScreenMode | 屏幕方向 |

<a name="5bz7N"></a>
#### 设置久坐提醒
PedometerSedentaryInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enableSedentaryReminder | boolean | 久坐提醒开关 |
| reminderStartTime | String | 久坐提醒开始时间 HH:mm |
| reminderEndTime | String | 久坐提醒结束时间 HH:mm |
| enableSedentaryTime | int | 多久不动就提醒 min |
| vibrationDuration | int | 震动持续时间 sec |
| repeatDay | List<WeekDay> | 提醒重复时间 |
| vibrationMode | VibrationMode | 震动方式 |
| vibrationIntensity1 | int | 震动等级1 范围0～9 |
| vibrationIntensity1 | int | 震动等级2 范围0～9<br />当震动方式为持续震动时，该字段无效 |

<a name="SGT92"></a>
#### 设置运动信息
PedometerSportsInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| speed | short | 配速 |
| distance | int | 距离 |

<a name="FUlCi"></a>
#### 设置游泳池长度
PedometerSwimmingInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| poolLength | int | 泳池长度 单位：m |

<a name="NpCTM"></a>
#### 设置时间制式
PedometerTimeFormat

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| hourSystem | HourSystem | 时间制式 |

<a name="EEedc"></a>
#### 设置佩戴习惯
PedometerWearingInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| wearingStyles | PedometerWearingStyles | 佩戴习惯 |

<a name="Z7QUK"></a>
#### 设置天气
PedometerWeather

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| updateTime | int | 天气更新时间 |
| weatherFutures | List<PedometerWeatherFuture> | 未来的天气预报（含当天） |

<a name="w9D5F"></a>
#### 天气预报信息
PedometerWeatherFuture

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| weatherState | WeatherState | 天气 |
| temperature1 | int | 温度1 单位：摄氏度 |
| temperature1 | int | 温度2 单位：摄氏度 |
| aqi | int | aqi |

<a name="Ja7Q2"></a>
#### 震动方式（VibrationMode）
| CONTINUOUS_VIBRATION | 持续震动 |
| --- | --- |
| INTERMITTENT_VIBRATION1 | _间歇震动，震动强度不变_ |
| INTERMITTENT_VIBRATION2 | _间歇震动，震动强度由小变大_ |
| INTERMITTENT_VIBRATION3 | _间歇震动，震动强度由大变小_ |
| INTERMITTENT_VIBRATION4 | _震动强度大小循环_ |

<a name="jtSPi"></a>
#### 心率测量（HeartRateDetectionMode）
| _CLOSE_ | 关闭 |
| --- | --- |
| _OPEN_ | 开启心率检测 |
| OPEN_INTELLIGENT | 开启智能心率检测 |

<a name="yA7o1"></a>
#### 消息类型（MessageType）
| ALL | 所有 |
| --- | --- |
| SMS | 短信 |
| WECHAT | 微信 |
| QQ | qq |

<a name="R24jM"></a>
#### 手环界面类型（PedometerPages）
| _TIME_ | 时间 |
| --- | --- |
| STEP | 步数 |
| _CALORIE_ | 卡路里 |
| _DISTANCE_ | 距离 |
| _HEARTRATE_ | 心率 |
| RUNNING | 跑步 |
| WALKING | 健走 |
| CYCLING | 骑行 |
| SWIMMING | 游泳 |
| BODY_BUILDING | 健身 |
| CLIMBING | 登山 |
| DAILY_DATA | 日常数据 |
| STOPWATCH | 秒表 |
| WEATHER | 天气 |
| BATTERY | 电量 |
| TREADMILL | 跑步机 |
| ELLIPTICAL | 椭圆机 |
| AEROBIC_WORKOUT | 有氧运动 |
| BASKETBALL | 篮球 |
| FOOTBALL | 足球 |
| BADMINTON | 羽毛球 |
| VOLLEYBALL | 排球 |
| PING_PONG | 乒乓球 |
| YOGA | 瑜伽 |
| GAMING | 电竞 |

<a name="tfhVy"></a>
#### 星期(WeekDay)
| MONDAY | 星期一 |
| --- | --- |
| TUESDAY | 星期二 |
| WENDNESDAY | 星期三 |
| THURSDAY | 星期四 |
| FRIDAY | 星期五 |
| SATURDAY | 星期六 |
| SUNDAY | 星期日 |

<a name="OCWDL"></a>
#### 屏幕方向（PedometerScreenMode）
| HORIZONTAL | 横屏 |
| --- | --- |
| VERTICAL | 竖屏 |

<a name="bMYTB"></a>
#### 时间制式（HourSystem）
| HOUR_24 | 24小时制 |
| --- | --- |
| HOUR_12 | 12小时制 |

<a name="T4JmJ"></a>
#### 佩戴习惯（PedometerWearingStyles）
| LEFT | 左手 |
| --- | --- |
| RIGHT | 右手 |

<a name="YsfC6"></a>
#### 天气（WeatherState）
| SUNNY_DAY | 晴（白天） |
| --- | --- |
| SUNNY_NIGHT | 晴（夜晚） |
| CLOUDY | 多云 |
| FINE_CLOUDY_DAY | 晴间多云（白天） |
| FINE_CLOUDY_NIGHT | 晴间多云（夜晚） |
| MOST_CLOUDY_DAY | 大部多云（白天） |
| MOST_CLOUDY_NIGHT | 大部多云（夜晚） |
| OVERCAST | 阴 |
| Shower | 阵雨 |
| THUNDER_SHOWER | 雷阵雨 |
| HAIL | 冰雹 |
| RAIN_LIGHT | 小雨 |
| RAIN_MODERATE | 中雨 |
| RAIN_HEAVY | 大雨 |
| RAIN_STORM | 暴雨 |
| RAIN_BIG_HEAVY | 大暴雨 |
| RAIN_SUPER_STORM | 特大暴雨 |
| RAIN_ICE | 冻雨 |
| RAIN_SNOW | 雨夹雪 |
| SNOW_SHOWER | 阵雪 |
| SNOW_LITTLE | 小雪 |
| SNOW_NODERATE | 中雪 |
| SNOW_HEAVY | 大雪 |
| SNOW_STORM | 暴雪 |
| DUST | 浮沉 |
| SAND_BLOWING | 扬尘 |
| SAND_STORM | 沙尘暴 |
| SAND_STRONG_STORM | 强沙尘暴 |
| FOG | 雾 |
| HAZE | 霾 |
| WIND | 风 |
| WIND_HIGH | 大风 |
| HURRICANE | 飓风 |
| TROPICAL_STORM | 热带风暴 |
| TORNADO | 龙卷风 |

<a name="0nWBg"></a>
# 八、Q&A
1、有重连单个设备的方法吗？<br />答：没有，因为SDK中会自动处理断开重连逻辑，不需要手动触发重连<br />
<br />


