<a name="BXDra"></a>
# 一、合作方式
<a name="z8LKC"></a>
## 1.1 合作模式介绍
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1600939459266-546e3488-92ca-4555-b104-8c30556365b6.png#align=left&display=inline&height=247&margin=%5Bobject%20Object%5D&name=image.png&originHeight=419&originWidth=893&size=44163&status=done&style=none&width=526)<br />1、设备通过乐心提供的蓝牙SDK绑定设备、上传数据<br />2、数据经过SDK初步处理后， 以回调的方式给到客户APP<br />3、客户APP上传数据到自己的云平台进行数据存储<br />4、客户可在APP或云平台调用乐心开放平台提供的API进行数据分析（睡眠、体重等场景）
<a name="ZSQgF"></a>
## 1.2、接入申请
<a name="CCJzr"></a>
### 1.2.1、接入声明
我司做接入控制的目的是为了控制设备的去处、了解出售设备的活跃状态及客户采买设备的使用场景。接入过程中， 仅存储设备和接入公司、组织的关联关系， 我司不会以任何方式存储用户身份信息及用户使用设备过程中产生的数据
<a name="lnH19"></a>
### 1.2.2、申请应用 ID
准备材料如下：<br />

- 确定应用接入的（企业）组织名称，并说明使用场景、用途、评估应用接入的量级 
- 确定应用需要接入的设备型号列表(用于控制型号滥用、标识采买设备信息) 
- 准备一个接入者公司的 github 账号(可选，用于gradle依赖管理下载aar)

将准备好的材料以邮件的方式发送：

- 邮件内容如下：
```java
收件人：zhihui.xiao@lifesense.com,zheng.lu@lifesense.com
抄送：chengze.wu@lifesense.com,yong.wu@lifesense.com,zhicheng.liu@lifesense.com,chuang.liu@lifesense.com,bangwei.mo@lifesense.com
主题：【蓝牙SDK准入申请】（企业/组织/个人名称）
邮件内容需要包含：
1、接入目的：
2、接入的设备类型和型号：
3、接入的产品服务：
4、本次期望采购的硬件设备数量（多款设备分别陈述）：
4、bundleID：（ios和android的包ID， 用于备案）
```
邮件发送后， 我们会在一个工作日内完成企业信息、订阅设备的初始化工作，并将申请的appId通过邮件的形式回复给您
<a name="jTuaD"></a>
## 1.3、SDK支持接入的设备
| 设备类型 | 型号 |
| --- | --- |
| 手环 | 乐心手环5S |
|  | MamboHR2 |
|  | MamboHR3 |
|  | 乐心手环5 |
|  | 乐心手环3 |
|  | Mambo |
|  | 其它手环 |
| 手表 | H1 |
| 智能秤 | S12 |
|  | S11 |
|  | S9 |
|  | S5 Nana |
|  | A3-S |
|  | A1-F |
| 血压计 | i7蓝牙版 |

<a name="ysJ7W"></a>
# 二、快速集成
<a name="iazCZ"></a>
## 2.1、蓝牙SDK下载
| 版本 | 下载地址 | 版本更新日志 |
| --- | --- | --- |
| 1.8.0 | [lifesense-ble-module-1.8.0](https://github.com/leshiguang/maven-repository/packages/184803?version=1.8.0) | IoT平台时区接入 |
| 1.7.9 | [lifesense-ble-module-1.7.9](https://github.com/leshiguang/maven-repository/packages/184803?version=1.7.9) | 初始版本 |

<a name="LVJNh"></a>
## 2.2、项目依赖配置
1、拷贝[2.1](#iazCZ)中下载的SDK到项目的libs文件夹中<br />2、在module的build.gradle中添加本地仓库地址：
```groovy
repositories {
    flatDir {
        dirs 'libs'
    }
}
```
3、在项目的build.gradle中添加依赖：
```groovy
    implementation fileTree(dir: 'libs', include: ['*.aar'])
```
自此，依赖配置完成<br />

<a name="7xg5U"></a>
## 2.3、权限声明
```xml
<!-- Android6.0 ble-->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
```
<a name="VdHj5"></a>
## 2.4、接入demo
[https://github.com/leshiguang/LSBluetoothDemo-Android](https://github.com/leshiguang/LSBluetoothDemo-Android)
<a name="NXgnl"></a>
## 2.5、初始化SDK
<a name="5acbt"></a>
### 2.5.1、初始化

- 功能描述：首次使用 LsBleManager 这个对象实例时，必须先执行初始化，否则其他接口将不可用
- 接口：com.lifesense.ble.LsBleManager#initialize
- 环境要求：android.os.Build.VERSION.SDK_INT > 17
```java
	/**
	 * <div class="en">init LSBleManager instance with Application Context</div>
	 * <div class="zh">对象实例初始化</div>
	 * 
	 * @since v1.0.0
	 * @param appContext Application Context
	 * @param appId identifierId for  tenants, apply this id from leshiguang portal
	 *  	@see <a href="http://leshiguang.com">http://leshiguang.com</a>
	 * @return true if the android.os.Build.VERSION.SDK_INT > 17,else return false
	 * @throws IllegalStateException  if the Instance in initializing
	 * @throws IllegalArgumentException case when if {@appId},{@appContext} null or illegal
	 * inappropriate time.
	 */
	boolean initialize(Context appContext, String appId) throws IllegalStateException, IllegalArgumentException;
```

- 参数说明：

appContext：Application上下文<br />appId：[1.2.2](#lnH19)接入申请时获得

- 返回值：boolean，true 表示初始化成功，false 表示初始化失败
- 调用示例：
```java
LsBleManager.getInstance().initialize(getApplicationContext(), "com.leshiguang.saas.rbac.demo.appid");
```
<a name="61QXx"></a>
### 2.5.2、判断SDK是否完成初始化

- 功能描述：判断SDK是否完成初始化
- 接口：com.lifesense.ble.LsBleManager#hasInitialized
```java
	/**
	 * <div class="en">Get LSBleManager instance init status</div>
	 * <div class="zh">判断对象实例是否已初始化</div>
	 * 
	 * @since v1.0.0
	 * @return
	 */
	boolean hasInitialized();
```

- 返回值：boolean，true 表示已完成初始化，false 表示未完成初始化
<a name="WmqSi"></a>
### 2.5.3、注册消息监听服务

- 功能描述：注册消息提醒服务，在使用支持消息提醒功能的设备时，如短信提醒 、微信消息提醒，需要在

初始化后，主动调用该接口，注册消息提醒服务，同时要求在 AndroidManifest.xml 注册<br />NotificationService，否则相关的消息提醒功能将不可用。

- 接口：com.lifesense.ble.LsBleManager#registerMessageService
```java
void registerMessageService ()
```


<a name="pLJFr"></a>
### 2.5.4、取消注册消息监听服务

- 接口：com.lifesense.ble.LsBleManager#registerMessageService
<a name="TtGTp"></a>
# 三、绑定设备
<a name="dtlnJ"></a>
## 3.1、绑定流程参考
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1600955727331-d3ddbfcc-5084-4ac6-a4a8-320206f5b6da.png#align=left&display=inline&height=343&margin=%5Bobject%20Object%5D&name=image.png&originHeight=343&originWidth=746&size=49296&status=done&style=none&width=746)
<a name="6ddeaa40"></a>
## 3.2、搜索绑定设备
<a name="d4d1c408"></a>
### 3.2.1、搜索设备

- 功能描述：_根据设备类型列表、设备的广播类型搜索附近的乐心设备_
- 接口：com.lifesense.ble.LsBleInterface#searchLsDevice



```java
	/**
	 * <div class="en">Search Bluetooth device with device type or broadcast type.</div>
	 * <div class="zh">根据设备类型列表、设备的广播类型搜索附近的乐心设备</div>
	 * 
	 * @since V1.0.0
	 * @param scanCallback scan resutls callback handler that will receive asynchronous callbacks.
	 * @param typelist lifesense devices type list
	 * @param broadcastType device broadcast type
	 * @return true if the parameter is valid and <code> getLsBleManagerStatus()==ManagerStatus.FREE</code>
	 */
	boolean searchLsDevice(com.lifesense.ble.SearchCallback scanCallback,
						   List<DeviceType> typelist, BroadcastType broadcastType);

```


- 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| DeviceType | deviceType | 设备类型对照表 |
| SearchCallback | scanCallback | 搜索结果回调， 单个返回LsDeviceInfo（查看数据结构） |
| BroadcastType | broadcastType | 开启的扫描模式 |



<a name="juvi2"></a>
### 3.2.2、停止搜索设备


- 功能描述：中断正在进行中的搜索，一般在离开搜索页面或搜索结束时调用
- 接口：com.lifesense.ble.LsBleInterface#stopSearch



```java
void stopSearch();
```


<a name="20d28fc9"></a>
### 3.2.3、 _配对或绑定设备_

- 功能描述：开始绑定用户从搜索到的设备列表中（来自[3.2.1](#d4d1c408)）选择的设备
- 接口：com.lifesense.ble.LsBleInterface#pairingWithDevice



```java
boolean pairingWithDevice(LsDeviceInfo lsDevice,PairCallback pairCallback)
```


- 参数：

①LsDeviceInfo（目标设备信息）：[设备详细信息](#LJOzk)<br />② [PairCallback](#uPQSS) 绑定结果的回调

- 返回值：boolean，true 表示设备配对功能可用，false 表示设备配对功能不可用或工作状态错误
<a name="uPQSS"></a>
#### 3.2.3.1、绑定设备的回调PairCallback_
1、onDiscoverUserInfo：_接收设备发上来需要绑定的编号（硬件上的用户编号）(血压计)_<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1601001048061-401dab4b-53d3-4e11-834a-899a10296250.png#align=left&display=inline&height=456&margin=%5Bobject%20Object%5D&name=image.png&originHeight=456&originWidth=838&size=217345&status=done&style=none&width=838)<br />收到指令后，调用[3.2.3.2](#OaGjl)中的接口进行绑定<br />_2、_onDeviceConfigInfoSettingSuccess：_配对过程中的用户信息设置成功回调_<br />_3、_onDeviceOperationCommandUpdate：_返回设备在配对或绑定过程中，上传的__操作指令__信息_<br />4、onPairResults：_返回配对成功的设备信息和绑定结果（__配对状态__）_
<a name="OaGjl"></a>
#### _3.2.3.2、绑定设备上的用户编号_

- 功能描述：绑定设备上的用户编号（编号来自于[3.2.3.1](#uPQSS)中的onDiscoverUserInfo）
- 接口：com.lifesense.ble.LsBleInterface#bindDeviceUser
```java
boolean bindDeviceUser(String macAddress,int,String)
```

- 参数：

① String macAddress,目标设备的 mac address<br />② int userNumber,设备的用户编号 <br />③ String username,用户姓名，长度<= 16 个字符

- 返回值：boolean，true 表示绑定用户功能可用，false 表示参数无效或工作状态错误



<a name="AnbhD"></a>
### 3.2.4、注册设备ID

- 功能：互联秤在绑定过程中，需要动态写入deviceId，写入时机在收到[3.2.3.1](#uPQSS)中的onDeviceOperationCommandUpdate指令之后
- 接口com.lifesense.ble.LsBleInterface#registerDeviceID
```java
void registeringDeviceID(String mac, String deviceId, DeviceRegisterState state)
```

- 参数：

① String macAddress,设备 MAC<br />② String deviceId, 生成的设备 ID（可直接传MAC地址）<br />③ DeviceRegisterState 状态
<a name="KzlIQ"></a>
### 3.2.5、写入配对指令

- 功能：在设备配对或绑定过程中，输入操作指令，写入时机在收到[3.2.3.1](#uPQSS)中的onDeviceOperationCommandUpdate指令之后
- 接口com.lifesense.ble.LsBleInterface#inputOperationCommand
```java
int inputOperationCommand(String macAddress,OperationCommand cmd,Object obj)
```

- 参数：

① String mac,设备 MAC<br />② OperationCommand cmd,操作指令<br />③ Object obj, 操作指令内容
<a name="6MLss"></a>
### 3.2.6、取消配对

- 功能：取消正在执行的配对或绑定操作
- 接口：com.lifesense.ble.LsBleInterface#cancelDevicePairing
```java
boolean cancelDevicePairing(LsDeviceInfo lsDevice)
```


- 参数：LsDeviceInfo lsDevice,设备信息对象
<a name="7M20L"></a>
# 四、数据同步
<a name="vRF27"></a>
## 4.1、 添加绑定成功的设备到SDK

- 功能：SDK不会持久化绑定的设备信息，故需要接入者将设备信息设置到SDK，在内存中临时存储（app退出时会被清除， 需要在下次进入app时设置）
- 接口com.lifesense.ble.LsBleInterface#addMeasureDevice
```java
boolean addMeausreDevice(LsDeviceInfo lsDevice, AuthorizationCallback callback)
```

- 参数：

LsDeviceInfo lsDevice，参考 LsDeviceInfo 的定义<br />AuthorizationCallback callback, 设备认证状态回调（每天单个设备只会校验一次， 用于记录设备的活跃状态）

- 返回值：boolean，true表示添加测量设备成功，false表示添加测量设备失败
<a name="YLxUC"></a>
## 4.2、开启数据同步

- 功能：启动测量数据自动同步服务，服务启动后，会自动连接设备、收发设备上传的测量数据
- 接口：com.lifesense.ble.LsBleInterface#**startDataReceiveService**
```java
boolean startDataReceiveService(ReceiveDataCallback dataCallback)；
```

- 参数：

① ReceiveDataCallback dataCallback，接收测量数据的回调对象

- 返回值：boolean,true 表示服务启动成功，false 表示服务启动失败或工作状态错误



<a name="z1LvW"></a>
## 4.3、结束（停止）数据同步

- 功能：停止测量数据的自动同步服务（建议退出登录时必须调用）
- 接口：com.lifesense.ble.LsBleInterface#stopDataReceiveService
```java
boolean stopDataReceiveService()；
```

- 参数：无
- 返回值：boolean,true 表示服务停止成功，false 表示服务停止失败或工作状态错误。



<a name="90sD2"></a>
## 4.4、检查设备的连接状态

- 功能：检查设备当前的连接状态
- 接口：com.lifesense.ble.LsBleInterface#checkDeviceConnectState
```java
DeviceConnectState checkDeviceConnectState(String address)
```

- 参数：String address,目标设备的 MacAddress
- 返回值：DeviceConnectState ,设备连接状态，CONNECTED_SUCCESS 表示已连接，返回 UNKNOWN,

表示当前设备的连接状态未知或连接已断开，详细可参考 DeviceConnectState 的定义<br />

<a name="nflh3"></a>
## 4.5、删除设备

- 功能：根据设备的广播 ID,删除测量设备，设备删除的同时会断开连接
- 接口：com.lifesense.ble.LsBleInterface#**deleteMeasureDevice**
```java
boolean deleteMeasureDevice(String broadcastId)
```


- 参数：String broadcastId ，LsDeviceInfo 设备对象的广播 ID
- 返回值：boolean,true表示删除设备成功，false表示删除设备失败或参数无效
<a name="HbkYS"></a>
# 五、下发设置
<a name="R10Rw"></a>
## 5.1、体脂(体重)秤设置
<a name="ZM1BA"></a>
### 5.1.1、设置秤的用户信息

- 功能：设备脂肪秤或体重秤的用户信息
- 接口：com.lifesense.ble.LsBleInterface#setProductUserInfo
```java
void setProductUserInfo(WeightUserInfo weightUserInfo)
```

- 参数：WeightUserInfo weightUserInfo,体重秤、脂肪秤的用户基本信息对象
- 返回值：boolean true代表设置成功， false代表设置失败
<a name="E8e6U"></a>
### 5.1.2、设置体脂秤声音震动强度

- 功能：更新设备（互联秤）的设置信息，如修改测量单位、修改体重目标等
- 接口：com.lifesense.ble.LsBleInterface#setVibrationVoice
```java
void setVibrationVoice(VibrationVoice vibrationVoice)
```

- 参数：VibrationVoice vibrationVoice，vibrationVoice 声音振动提示对象
<a name="iYerA"></a>
### 5.1.3、设置重量单位

- 功能：更新设备（互联秤）的设置信息，如修改测量单位、修改体重目标等
- 接口：com.lifesense.ble.LsBleInterface#updateWeightScaleSetting
```java
void updateWeightScaleSetting(String mac,DeviceConfigInfoType type,Object obj,OnSettingListener listener)
```

- 参数：

① String macAddress,设备 MAC<br />② DeviceConfigInfoType type,设置信息类型<br />③ Object obj, 具体的对象信息<br />④ OnSettingListener listener,设置回调
<a name="aQzsh"></a>
### 5.1.4、重置体脂秤

- 功能：清除设备数据，仅互联秤支持
- 接口：com.lifesense.ble.LsBleInterface#clearDeviceData
```java
void clearDeviceData(String mac,DeviceData data, OnSettingListener listener)
```

- 参数：

① String mac,设备 MAC<br />② DeviceData data,清除的数据对象<br />③ OnSettingListener listener, 信息设置状态的回调对象
<a name="6petd"></a>
## 5.2、手环设置
<a name="jMF5v"></a>
### 5.2.1、设置手环用户信息

- 功能：设备脂肪秤或体重秤的用户信息
- 接口：com.lifesense.ble.LsBleInterface#setPedometerUserInfo
```java
void setPedometerUserInfo(PedometerUserInfo peUserInfo)
```

- 参数：PedometerUserInfo peUserInfo,计步器的用户基本信息对象
<a name="1QfWa"></a>
### 5.2.2、设置闹钟

- 功能：设置闹钟到手环
- 接口：com.lifesense.ble.LsBleInterface#setPedometerAlarmClock
```java
void setPedometerAlarmClock(PedometerAlarmClock alarmClock)
```

- 参数：PedometerAlarmClock alarmClock,计步器的闹钟对象
<a name="ppBUg"></a>
### 5.2.3、设置心率检测

- 功能：更新手环的心率检测设置信息
- 接口：com.lifesense.ble.LsBleInterface#updateHeartRateDetection
```java
void updateHeartRateDetection(String,boolean,String,String,OnSettingListener)
```

- 参数：

① String address; 目标设备的 MacAddress<br />② boolean enable;启动开关<br />③ String startTime;禁用心率检测的开始时间，当启动开关=false 时，该字段才有意义<br />④ String endTime; 禁用心率检测的结束时间，当启动开关=false 时，该字段才有意义<br />⑤ OnSettingListener listener,信息设置状态的回调对象<br />

<a name="BWjDG"></a>
### 5.2.4、防丢失设置

- 功能：更新手环的断开提醒设置信息（防丢设置）
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerAntiLostInfo
```java
void updatePedometerAntiLostInfo(String,PedometerAntiLostInfo,OnSettingListener settingListener)
```

- 参数：

① String address; 目标设备的 MacAddress<br />② PedometerAntiLostInfo antilost; 防丢失设置信息<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="wmpeb"></a>
### 5.2.5、久坐提醒设置

- 功能：更新手环的久坐提醒设置信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerSedentary
```java
void updatePedometerSedentary(String,boolean,List<PedometerSedentaryInfo>,OnSettingListener)
```

- 参数：

① String address; 目标设备的 MacAddress<br />② boolean enable;启动开关<br />③ List<PedometerSedentaryInfo> sedentaryInfos; 久坐不动提醒设置列表<br />④ OnSettingListener listener,信息设置状态的回调对象<br />

<a name="QcRL8"></a>
### 5.2.6、步数目标设置

- 功能：更新手环的久坐提醒设置信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerStepGoal
```java
void updatePedometerStepGoal(String,boolean,int,OnSettingListener)
```

- 参数：

① String address，目标设备的 MacAddress<br />② boolean enable，启动开关<br />③ int stepGoal,手环的步数目标<br />④ OnSettingListener listener,信息设置状态的回调对象<br />

<a name="OahNO"></a>
### 5.2.7、心率区间设置

- 功能：根据用户年龄，更新手环的心率检测区间设置信息
- 接口：com.lifesense.ble.LsBleInterface#updateHeartRateRange
```java
void updateHeartRateRange(String,boolean,int,OnSettingListener)
```

- 参数：

① String address; 目设备的 MacAddress<br />② int userAge,用户年龄<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="WZyAj"></a>
### 5.2.8、消息提醒设置

- 功能：更新手环的消息提醒设置信息
- 接口：com.lifesense.ble.LsBleInterface#updateMessageRemind
```java
void updateMessageRemind (String, boolean, MessageType, OnSettingListener)
```

- 参数：

② boolean enable，启动开关<br />③ MessageType messageType,消息提醒类型（如 sms、微信消息）<br />④ OnSettingListener listener,信息设置状态的回调对象
<a name="M0e3e"></a>
### 5.2.9、心率区间设置

- 功能：根据用户年龄，更新手环的心率检测区间设置信息
- 接口：com.lifesense.ble.LsBleInterface#updateHeartRateRange
```java
void updateHeartRateRange(String,boolean,int,OnSettingListener)
```

- 参数：

① String address; 目设备的 MacAddress<br />② int userAge,用户年龄<br />③ OnSettingListener listener,信息设置状态的回调对象<br />

<a name="D1Kf8"></a>
### 5.2.10、心率监测模式设置

- 功能：更新手环的心率检测模式
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerHeartDetectionMode
```java
void updatePedometerHeartDetectionMode(String,HeartRateDetectionMode,OnSettingListener)
```

- 参数：

① String address,目标设备的 MacAddress<br />② HeartRateDetectionMode detectMode,心率检测方式<br />③ OnSettingListener listener, 信息设置状态的回调对象
<a name="x0w1r"></a>
### 5.2.11、夜间模式设置

- 功能：更新手环的夜间模式设置
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerNightMode
```java
void updatePedometerNightMode(String,boolean,PedometerNightMode,OnSettingListener)
```

- 参数：

① String address,目标设备的 MacAddress<br />② boolean enable,启动开关<br />③ PedometerNightMode nightMode,夜间模式<br />④ OnSettingListener listener, 信息设置状态的回调对象
<a name="F4aj4"></a>
### 5.2.12、佩戴方式设置

- 功能：更新手环的佩戴方式
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerWearingStyles    
```java
void updatePedometerWearingStyles(String,PedometerWearingStyles,OnSettingListener)
```

- 参数：

① String address，目标设备的 MacAddress<br />② PedometerWearingStyles wearingStyles，设备的佩戴方式，右手或左手<br />③ OnSettingListener listener, 信息设置状态的回调对象
<a name="ZweT0"></a>
### 5.2.13、屏幕方向设置

- 功能：更新手环的屏幕显示方式
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerScreenMode
```java
void updatePedometerScreenMode(String,PedometerScreenMode,OnSettingListener)
```

- 参数：

① String address; 目标设备的 MacAddress<br />② PedometerScreenMode screenMode,设备屏幕的显示方式，横屏或竖屏<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="w1YsT"></a>
### 5.2.14、手环页面显示顺序设置

- 功能：更新手环的页面显示顺序
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerPageSequence
```java
void updatePedometerPageSequence(String,List<PedometerPage>,OnSettingListener)
```

- 参数：

① String address,目标设备的 MacAddress<br />② List<PedometerPage> pages,自定义设备屏幕显示的顺序列表<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="hbb8n"></a>
### 5.2.15、来电提醒设置

- 功能：更新手环的来电显示设置信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerCallRemind
```java
void updatePedometerCallRemind(String,boolean,PedometerCallReminderInfo,OnSettingListener)
```

- 参数：

① String address,目标设备的 MacAddress<br />② boolean enable,启动开关<br />③ PedometerCallReminderInfo callReminderInfo,来电提醒信息<br />④ OnSettingListener listener,信息设置状态的回调对象
<a name="QgwMT"></a>
### 5.2.16、长度单位设置

- 功能：更新手环的距离显示单位
- 接口：com.lifesense.ble.LsBleInterface#updateDeviceDistanceUnit
```java
void updateDeviceDistanceUnit(String, LengthUnit,OnSettingListener)
```

- 参数：

① String macAddress<br />② LengthUnit unit,参考 LengthUnit 的定义<br />③ OnSettingListener listener, 信息设置状态的回调对象
<a name="7WEki"></a>
### 5.2.17、时间制式设置

- 功能：更新手环的时间显示格式
- 接口：com.lifesense.ble.LsBleInterface#updateDeviceTimeFormat
```java
void updateDeviceTimeFormat(String, HourSystem,OnSettingListener);
```

- 参数：

① String macAddress<br />② HourSystem timeFormat,参考 HourSystem 的定义<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="PNlqM"></a>
### 5.2.18、设置表盘样式

- 功能：设置手环的表盘样式
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerDialPeace
```java
void updatePedometerDialPeace(String,PedometerDialPeaceInfo,OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerDialPeaceInfo dialPeaceInfo,表盘样式<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="XYF4U"></a>
### 5.2.19、自动识别运动模式设置

- 功能：设置手环运动模式的自动识别状态
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerAutoRecognition
```java
Void updatePedometerAutoRecognition(String,List<PedometerAutoRecognition>,OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② List<PedometerAutoRecognition> 运动模式列表<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="bP0OE"></a>
### 5.2.20、事件提醒设置

- 功能：设置手环的事件提醒
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerEventReminder
```java
updatePedometerEventReminder(String,PedometerEventReminder,OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerEventReminder eventReminder,事件提醒<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="2iStS"></a>
### 5.2.21、鼓励设置

- 功能：设置手环的不同类型的目标鼓励信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerEncourage
```java
void updatePedometerEncourage(String,PedometerEncourage,OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerEncourage encourageInfo,鼓励信息<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="RXQS9"></a>
### 5.2.22、天气设置

- 功能：设置手环的天气信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerWeather
```java
void updatePedometerWeather(String,PedometerWeather, OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerWeather weather,天气信息<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="sDsxs"></a>
### 5.2.23、心率预警设置

- 功能：设置手环在运动模式下的心率预警提示信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerHeartRateAlert
```java
updatePedometerHeartRateAlert(String,PedometerHeartRateAlert,OnSettingListene)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerHeartRateAlert heartRateAlertInfo,心率预警信息<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="v2SYV"></a>
### 5.2.24、语言设置

- 功能：设置手环文字显示的语言方式
- 接口：com.lifesense.ble.LsBleInterface#updateDeviceLanguage
```java
void updateDeviceLanguage(String, DeviceLanguage, OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② DeviceLanguage language,语言信息<br />③ OnSettingListener listener,信息设置状态的回调对象<br />

<a name="rbMvN"></a>
### 5.2.25、运动参数设置

- 功能：设置手环的运动参数信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerSportsInfo
```java
void updatePedometerSportsInfo(String, PedometerSportsInfo, OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerSportsInfo sportsInfo,运动参数信息<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="w9GRC"></a>
### 5.2.26、游泳参数设置

- 功能：设置手环的游泳参数信息
- 接口：com.lifesense.ble.LsBleInterface#updatePedometerSwimmingInfo
```java
updatePedometerSwimmingInfo(String, PedometerSwimmingInfo, OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② PedometerSwimmingInfo swimmingInfo,游泳信息<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="9cVgF"></a>
### 5.2.27、实时心率开关

- 功能：实时心率开关（耗电，数据量大）
- 接口：com.lifesense.ble.LsBleInterface#setRealtimeHeartRateSyncState
```java
setRealtimeHeartRateSyncState (String, boolean, OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② boolean enable,true 表示打开实时心率同步，false 表示关闭实时心率同步<br />③ OnSettingListener listener,信息设置状态的回调对象
<a name="NkHIQ"></a>
### 5.2.28、手环其它功能开关

- 功能：设置设备功能开关信息
- 接口：com.lifesense.ble.LsBleInterface#updateDeviceFunctionInfo
```java
updateDeviceFunctionInfo(String, DeviceFunctionInfo, OnSettingListener)
```

- 参数：

① String macAddress,设备 macAddress<br />② DeviceFunctionInfo functionInfo,设备功能信息<br />③ OnSettingListener listener,信息设置状态的回调对象<br />

<a name="A1BIB"></a>
## 5.3、其他通用设置
<a name="CrFSs"></a>
### 5.3.1、读取设备电量

- 功能：读取设备电量
- 接口：com.lifesense.ble.LsBleInterface#readDeviceVoltage
```java
void readDeviceVoltage(String,OnDeviceReadListener)
```

- 参数：

① String address，目标设备的 MacAddress<br />② OnDeviceReadListener readListener,信息读取的回调对象
<a name="aGOwk"></a>
### 5.3.2、更新手机GPS状态

- 功能：更新手机的 GPS 状态
- 接口：com.lifesense.ble.LsBleInterface#updatePhoneGpsStatus
```java
void updatePhoneGpsStatus(boolean isGpsWorking)
```

- 参数：

①isGpsWorking boolean,true 表示手机已开启 gps 功能，false 表示手机 gps 功能不可用
<a name="OGxso"></a>
## 六、配网
<a name="PP8WZ"></a>
## 6.1、开始配网

- 功能：开始配网
- 接口：com.lifesense.ble.LsBleInterface#configDeviceWifiPassword
```java
boolean configDeviceWifiPassword(LsDeviceInfo,String,String,PairCallback)
```

- 参数：

① LsDeviceInfo lsDevice,<br />② String ssid,wifi 网络名称（SSID） ③ String wifiPassword, networks password,<br />④ PairCallback callback,配置结果回调对象

- 返回值：boolean,true 表示接口功能可用，false 表示接口功能不可用



<a name="3xw1l"></a>
# 七、固件升级
<a name="q4hNW"></a>
## 7.1、开始升级固件

- 功能：升级设备固件
- 接口：com.lifesense.ble.LsBleInterface#upgradeDeviceFirmware
```java
void upgradeDeviceFirmware(String,File,OnDeviceUpgradeListener)
```

- 参数：

① String address,目标设备的 MacAddress<br />② File upgradeFile,设备升级文件<br />③ OnDeviceUpgradeListener upgradeListener,设备升级状态的回调对象
<a name="SDLUO"></a>
## 7.2、中断固件升级

- 功能：取消当前设备的固件升级操作；设备屏幕当前显示的内容是“Update Mode”表示设备已进入升级模

式，“Updating……”表示升级过程中。

- 接口：com.lifesense.ble.LsBleInterface#interruptUpgradeProcess
```java
void interruptUpgradeProcess(String macAddress)
```

- 参数：

① String address,目标设备的 MacAddress<br />

<a name="s79v3"></a>
# 八、数据回调
<a name="H6jaF"></a>
## 8.1、SearchCallback
com.lifesense.ble.SearchCallback 是一个抽象类，当调用接口 searchLsDevice 搜索附近的<br />蓝牙设备时，符合搜索条件的设备将以异步的方式通过接口 onSearResults(LsDeviceInfo lsDevice)<br />返 回 ， 当 前 手 机 已 连接的设备将 通 过接口 onSystemConnectedDevice(String name,String <br />macAddress)返回。
<a name="nDkkF"></a>
### 8.1.1、 onSearchResults
参数：LsDeviceInfo lsDevice,乐心设备信息对象<br />详细说明：返回与搜索条件相符的设备信息对象
<a name="xTGsx"></a>
### 8.1.2、onSystemConnectedDevice
参数：<br />① String name,已连接的设备名称<br />② String address,已连接的设备 MacAddress <br />详细说明：返回手机当前已连接的蓝牙设备
<a name="EwIp2"></a>
## 8.2、PairCallback
com.lifesense.ble.PairCallback 是一个抽象类，当调用接口 pairingWithDevice 与设备进行<br />配对操作时，配对过程中设备上传的用户列表将以异步的方式通过接口 onDiscoverUserInfo 返回，<br />配对结果将通过回调接口 onPairResults 返回。
<a name="xpTFV"></a>
### 8.2.1、onDiscoverUserInfo
参数：<br />① String macAddress，设备的 mac address<br />② List<DeviceUserInfo> userlist,设备的用户列表<br />详细说明：返回设备在配对过程中上传的用户列表，该接口只支持使用 A3 协议的设备，A3 协议的设<br />备在配对过程中，会上传一组设备已存在的用户信息，如用户编号、用户名称；其他设备在配对过程中不<br />需要重写该方法。
<a name="EnlOd"></a>
### 8.2.2、onPairResults
void onPairResults(LsDeviceInfo lsDevice, int status)<br />参数：<br />① LsDeviceInfo lsDevice,设备对象信息<br />② int status, 配对状态，0 表示配对成功，-1 或非 0 表示配对失败<br />详细说明：返回设备的配对结果
<a name="K4hUR"></a>
### 8.2.3、onDeviceOperationCommandUpdate
参数：<br />① String macAddress,设备 MAC<br />② OperationCommand cmd, 操作指令<br />③ Object obj,操作指令内容<br />详细说明：对于支持随机码绑定的设备和互联秤，在配对或绑定过程中，需要重写该方法。并根据设<br />备上传的操作指令进行下一步操作。<br />

<a name="fbpdS"></a>
## 8.3、ReceiveDataCallback
com.lifesense.ble.ReceiveDataCallback是一个抽象类，当调用startDataReceiveService接<br />口时，所有与设备相关的测量数据将以异步的方式通过回调接口返回。不同设备类型的测量数据将<br />通过不同的接口返回。
<a name="V9WIF"></a>
### 8.3.1、onDeviceConnectStateChange
参数：<br />① DeviceConnectState connectState,设备连接状态<br />② String broadcastId, 设备的广播 ID<br />详细说明：返回设备当前的连接状态，connectState= CONNECTED_SUCCESS 表示连接成功，<br />connectState= CONNECTED_FAILED 表示连接失败，connectState= DISCONNECTED 表示连接断开
<a name="oSFIz"></a>
### 8.3.1、onReceiveDeviceInfo
参数：<br />① LsDeviceInfo lsDevice,设备对象信息<br />详细说明：返回当前已连接的设备信息
<a name="HhRin"></a>
### 8.3.3、onReceiveWeightDta_A2
参数：<br />① WeightData_A2 weightData,体重数据<br />详细说明：返回体重秤或脂肪秤的测量数据（A2 协议）
<a name="Qrjrm"></a>
### 8.3.4、onReceiveWeightData_A3
参数：<br />① WeightData_A3 weightData,体重（脂肪）测量数据<br />详细说明：返回体重秤或脂肪秤的测量数据（A3 协议）
<a name="Dg0E4"></a>
### 8.3.5、onReceiveBloodPressureData
参数：<br />① BloodPressureData data,血压测量数据<br />详细说明：返回血压测量数据
<a name="VDp5J"></a>
### 8.3.6、onReceivePedometerData
参数：<br />① PedometerData data,手环测量数据<br />详细说明：返回手环的测量数据（A2 协议）
<a name="j0iw9"></a>
### 8.3.7、onReceiveHeightData
参数：<br />① HeightData data,身高测量数据<br />详细说明：返回身高测量数据
<a name="kbG2h"></a>
### 8.3.8、onReceiveKitchenScaleData
参数：<br />① KitchenScaleData data,厨房秤测量数据<br />详细说明：返回厨房秤的实时测量数据
<a name="FITbY"></a>
### 8.3.9、onReceiveUserInfo
参数：<br />① WeightUserInfo userInfo,体重秤或脂肪秤的当前用户信息<br />返回值：void<br />详细说明：返回体重秤或脂肪秤的当前用户信息（A3 协议）
<a name="ReI83"></a>
### 8.3.10、onReceivePedometerMeasureData
参数：<br />① Object obj,测量数据对象<br />② PacketProfile type,测量数据对象类型<br />③ String sourceData,原始测量数据（解析前）<br />详细说明：返回手环的测量数据，该接口只支持 A5 协议或微信协议手环的测量数据返回，如 Mambo、<br />Mabo Call、Mambo HR、Mambo Watch
<a name="xG4mD"></a>
## 8.4、OnDeviceUpgradeListener
com.lifesense.ble.OnDeviceUpgradeListener是一个接口类，当调用upgradeDeviceFirmware<br />接口时，必须重写这个类的两个回调方法，所有与设备升级状态相关的提示将以异步的方式通过回<br />调接口返回，如升级进度、升级结果等<br />Added in version 1.0.0
<a name="7fpBD"></a>
### 8.4.1、onDeviceUpdradeStateChange
参数：<br />① String address,设备 MAC address<br />② DeviceUpgradeStatus status,升级状态，参考 DeviceUpgradeStatus 的定义<br />③ int errorCode,错误码，参考 ErrorCode 的定义<br />详细说明：当设备进入升级模式后，设备屏幕会显示“update mode”,会返回 ENTER_UPGRADE_MODE<br />的回调；当设备升级成功后，会返回 status=UPGRADE_SUCCESS,errorCode=0 的回调；当设备升级失<br />败，会返回 status=UPGRAGE_FAILURE，以及相应的错误码。
<a name="oEzF3"></a>
### 8.4.2. onDeviceUpgradeProcess
参数：<br />① int value,当前的升级进度，范围 1-99<br />返回值：void<br />详细说明：返回设备当前的升级进度
<a name="6wBW7"></a>
## 8.5. OnSettingListener
com.lifesense.ble.OnSettingListener是一个抽象类，在设备已连接的状态下，动态更新设<br />备的配置信息时，所有更新成功或更新失败的结果将以异步的方式，通过这个类的回调方法返回。
<a name="eJeMX"></a>
### 8.5.1. onSuccess
参数：<br />① String macAddress,设备 MAC address<br />详细说明：当更新内容成功写入设备后，会调用这个方法返回，表示更新成功<br />Added in version 1.0.0
<a name="4jNeT"></a>
### 8.5.2. onFailure
参数：<br />① int errorCode,错误码，参考 ErrorCode 的定义<br />详细说明：当更新内容写入设备失败，会调用这个方法返回，表示更新失败
<a name="AwgXR"></a>
## 8.6. OnDeviceReadListener
com.lifesense.ble.OnDeviceReadListener是一个接口类，在调用接口readDeviceVoltage读<br />取设备的实时电量时，读取结果将以异步的方式，通过这个类的回调方法返回。
<a name="t6MCd"></a>
### 8.6.1. onDeviceVoltageValue
参数：<br />① byte[] sourceData,源数据<br />② int flag，电量状态标记位<br />③ float voltageValue,电压值 ④ int percentage,电量百分比<br />详细说明：<br />flag=0x00 表示正常工作,flag=0x01 表示充电中,flag=-1 表示不支持，flag=2 表示返回的是电量百<br />分比，没有电压；<br />voltageValue=-1 表示不支持
<a name="JmX9b"></a>
# 九、数据结构
<a name="HcWL7"></a>
## 9.1、常量&枚举
SDK 接口所用到的常量定义在 com.lifesense.ble.bean.constant 包里，使用这些枚举常量的时候可 以在项目里导入这个包，如 import com.lifesense.ble.bean.constant.*;或者指定导入某个常量。 
<a name="1ny2l"></a>
### 9.1.1、DeviceType（设备类型}
 UNKNOWN 表示未知类型的设备 <br /> WEIGHT_SCALE 体重秤 <br /> PEDOMETER 手环或手表 <br /> SPHYGMOMANOMETER 血压计 <br /> KITCHEN_SCALE 厨房秤 <br /> HEIGHT_RULER 身高测量仪 <br /> FAT_SCALE 脂肪秤 
<a name="JgPki"></a>
### 9.1.2、BroadacstType(广播模式）
 ALL 全广播，包括正常与配对广播 <br /> NORMAL 正常广播信号 <br /> PAIR 配对广播信号 
<a name="lSAPl"></a>
### 9.1.3、SexType（性别）
MALE 男性 <br />FEMALE 女性 
<a name="FcS3q"></a>
### 9.1.4、UnitType（重量单位）
UNIT_KG 以 kg 为计量单位 <br />UNIT_LB 以 lb 为计量单位 <br />UNIT_ST 以 st 为计量单位 
<a name="UnSui"></a>
### 9.1.5、HourSystem（时间制式）
HOUR_24 24 小时制 <br />HOUR_12 12 小时制 
<a name="wmi3J"></a>
### 9.1.6、LengthUnit（长度单位）
KILOMETER 表示所用的计量单位为公里 <br />MILE 表示所用的计量单位为英里 
<a name="iy5Ws"></a>
### 9.1.7、DeviceConnectState（连接状态）
CONNECTED_SUCCESS 表示连接成功 <br />CONNECTED_FAILED 表示连接失败 <br />DISCONNECTED 表示连接断开 <br />UNKNOWN 未知
<a name="U9gPB"></a>
### 9.1.8、WeekDay(周)
MONDAY 表示周一<br />TUESDAY 表示周二<br />WEDNESDAY 表示周三<br />THURSDAY 表示周四<br />FRIDAY 表示周五<br />SATURDAY 表示周六<br />SUNDAY 表示周日
<a name="Xlagz"></a>
### 9.1.9．VibrationMode（震动模式）
CONTINUOUS_VIBRATION 表示持续震动<br />INTERMITTENT_VIBRATION1 表示间歇震动，震动强度不变<br />INTERMITTENT_VIBRATION2 表示间歇震动，震动强度由小变大<br />INTERMITTENT_VIBRATION3 表示间歇震动，震动强度由大变小<br />INTERMITTENT_VIBRATION4 表示震动强度大小循环
<a name="64PFH"></a>
### 9.1.10、GattServiceType（蓝牙服务）
enum ALL 表示所有服务<br />CALL_SERVICE 表示来电服务<br />USER_DEFINED 表示用户自定义服务
<a name="QWPHd"></a>
### 9.1.11、DeviceUpgradeStatus（OTA升级状态）
UNKNOWN 未知状态<br />ENTER_UPGRADE_MODE 进入升级模式<br />UPGRADE_SUCCESS 升级成功<br />UPGRADE_FAILURE 升级失败<br />UPGRADING 升级中
<a name="gDIuc"></a>
### 9.1.12、PedometerTargetState（目标类型）
enum STEP 周目标步数 V1.0.0<br />CALORIES_KAL 周目标卡路里<br />DISTANCE_M 周目标距离<br />EXERCISE_AMOUNT 周目标运动量
<a name="yPi2a"></a>
### 9.1.13、PacketProfile（指令）
PEDOMETER_DEVIE_INFO 当前的设备信息<br />DAILY_MEASUREMENT_DATA 每日运动数据<br />PER_HOUR_MEASUREMENT_DATA 每小时运动数据<br />SLEEP_DATA 睡眠数据<br />HEART_RATE_DATA 心率数据<br />SWIMMING_LAPS 游泳圈数<br />RUNNING_CALORIE_DATA 跑步卡路里<br />HEART_RATE_STATISTICS 心率区间统计数据<br />PEDOMETER_DATA_CE 睡眠数据(旧微信协议)<br />PEDOMETER_DATA_C9 每小时运动数据(旧微信协议)<br />PEDOMETER_DATA_CA 每日运动数据(旧微信协议)<br />PEDOMETER_DATA_83 睡眠数据(来电单协议)<br />PEDOMETER_DATA_8B 每小时运动数据(来电单协议)<br />PEDOMETER_DATA_82 每日运动数据(来电单协议)
<a name="C6ily"></a>
### 9.1.14、ErrorCode（错误码）
UNKNOWN_ERROR=-1 未知错误<br />UNINITIALIZED=-2 LSBleManager 对象实例未初始化<br />PARAMETER_ERROR_CODE=1 接口参数错误<br />FILE_FORMAT_ERROR_CODE=2 升级文件格式错误<br />FILE_UPDATE_MODEL_ERROR_CODE=3 升级文件更新模式错误<br />FILE_CHECK_MODEL_ERROR_CODE=4 升级文件类型错误<br />BLE_MANAGER_STATE_ERROR_CODE=5 SDK 工作状态错误 <br />DEVICE_NOT_CONNECTED=7 设备未连接<br />DEVICE_UNSUPPORTED=8 设备不支持<br />FILE_VERIFY_ERROR_CODE=9 Watch 升级文件检验失败<br />DATA_RECEIVE_ERROR_CODE=10 数据接收失败<br />LOW_BATTERY=11 Watch 电量不足,拒绝升级<br />CODE_VERSION_NOT_MATCH=12 版本代码不相符，拒绝升级<br />FILE_HEADER_CHECK_FAIL=13 文件头内容检验失败，拒绝升级<br />FLASH_SAVE_FAIL=14 设备保存数据出错,flash 保存失败<br />SCAN_ERROR=15 扫描超时<br />CONNECTION_FAILED=17 连接失败<br />CONNECTION_ERROR=21 连接超时<br />BlLUETOOTH_DISABLE=23 蓝牙不可用<br />ABNORMAL_DISCONNECT=24 异常断开WRITE_CHARACTERISTIC_FAILURE=25 写特征失败<br />CANCEL_UPGRADE=26 主动取消升级<br />DEVICE_CONFIG_FAILURE=27 设备配置 wifi 密码失败
<a name="Ujzp9"></a>
### 9.1.15、OperationCommand（设备上报的指令）
UNKNOWN 未知状态<br />CMD_RANDOM_NUMBER 随机码绑定指令<br />CMD_DEVICE_ID 请求注册 deviceID 指令<br />CMD_PAIRED_CONFIRM 绑定确认<br />CMD_UNBIND_CONFIRM 解绑确认
<a name="t2LuY"></a>
### 9.1.16、DeviceRegisterState（设备（秤）注册状态）
UNKNOWN 未知状态<br />NORMAL_UNREGISTER 正常未注册的设备<br />REGISTER 已注册<br />ILLEGAL 非法<br />OTHER 其他 V1.2.7
<a name="hAmVM"></a>
### 9.1.17、BroadcastNameMatchWay（广播匹配方式）
PREFIX 前缀匹配，区分大小写<br />SUFFIX 后缀匹配，区分大小写<br />SUFFIX_IGNORE_CASE 后缀匹配，不区分大小写 <br />EQUALS 直接比较，区分大小写<br />EQUALS_IGNORE_CASE 直接比较，不区分大小写<br />EQUALS 直接比较，区分大小写 V1.2.8<br />类型 名称 注释 版本
<a name="Z2CS5"></a>
### 9.1.18、DialPeaceStyle（表盘样式）
DialPeace2 表盘 2<br />DialPeace3 表盘 3<br />DialPeace4 表盘 4<br />DialPeace5 表盘 5<br />DialPeace6 表盘 6
<a name="CWmL0"></a>
### 9.1.19、AutoRecognitionType（自动识别运动类型）
RUNNING 跑步模式<br />WALKING 健走模式<br />CYCLING 骑行模式<br />SWIMMING 游泳模式<br />BODY_BUILDING 健身模式
<a name="6cMY3"></a>
### 9.1.20、DeviceLanguage（语言）
CHINESE_CN 中文(简体)<br />CHINESE_TW 中文(繁体)<br />ENGLISH 英语<br />JAPANESE 日语 <br />KOREAN 朝鲜语<br />FRENCH 法语
<a name="pvxNB"></a>
### 9.1.21、DeviceFunctionType（设备功能类型）
HEARTBEAT 心跳数据采集
<a name="ObUis"></a>
## 9.2、数据结构
SDK 接口使用的实体类定义在 com.lifesense.ble.bean 包里，使用这些实体类的时候可以在项目 里 导 入 这 个 包，如 import com.lifesense.ble.bean.*; 或 者 指 定导入 某 个 实体类，如 import <br />com.lifesense.ble.bean.LsDeviceInfo
<a name="VnxQQ"></a>
### 9.2.1、LsDeviceInfo（设备基础信息）
String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />String deviceName 设备名称 <br />String broadcastID 广播 ID，随机数 <br />String password 密码 <br />String deviceType 设备类型 <br />String modelNumber 设备型号 <br />String softwareVersion 软件版本 <br />String hardwareVersion 硬件版本 <br />String firmwareVersion 固件版本 <br />String manufactureName 制造商名称 <br />int deviceUserNumber 设备用户编号 <br />int pairStatus 配对状态标记 <br />int maxUserQuantity 最大用户数 <br />String protocolType 协议类型 <br />String macAddress 设备硬件地址 <br />String manufactureData 厂商自定义数据 V1.3.1 Int heartRate 当前测量的心率数据<br />Boolean delayDisconnect 延时断开状态<br />boolean autoRegister 自动注册标记
<a name="AiWKf"></a>
### 9.2.2、PedometerInfo（手环基础信息）
String macAddress 表示手环的 mac 地址 <br />String modelNumber 表示手环的型号 <br />String softwareVersion 表示手环的软件版本 <br />String hardwareVersion 表示手环的硬件版本 <br />int currentTimeZone 表示手环的当前时区 <br />boolean enableHeartRateDetection 心率检测开关 <br />String disableDetectionStartTime 表示手环的心率检测关闭起始时间 <br />String disableDetectionEndTime 表示手环的心率检测关闭结束时间 
<a name="SGCJb"></a>
### 9.2.3、DeviceUserInfo（设备用户数据）
int userNumber 设备的用户编号 <br />String userName 设备的用户名 <br />String deviceId 设备 ID 
<a name="1ajQs"></a>
### 9.2.4、HeightData（升高数据）
类型 名称 注释 启动版本<br />String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />String broadcastId 设备当前的广播 ID <br />String date 测量时间 <br />int userNo 用户编号 <br />double height 身高测量值 <br />String unit 测量单位 <br />int battery 设备电池电量级别 <br />int heightStatus 身高状态，0 表示未锁定，1 表示锁定 
<a name="febu4"></a>
### 9.2.5、KitchenScaleData（厨房秤重量）
String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />double weight 物体重量 <br />String unit 测量单位 <br />int battery 电池电量 <br />int sectionWeight 单位为 LB 和 ST 时前段的数值 <br />int countDownSeconds 倒数秒数 
<a name="GIbvw"></a>
### 9.2.6、BloodPressureData（血压数据）
String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />String broadcastId 设备当前的广播 ID <br />String date 测量时间 <br />float systolic 收缩压（计算单位:mmHg） <br />float diastolic 舒张压（计算单位:mmHg） <br />float meanArterialPressure 平均血压 <br />long utc utc 时间 <br />float pulseRate 心率 <br />int userId 用户编号 <br />int battery 设备电池电量级别 <br />String bodyMovementDetectionFlag 身体运动检测标记 <br />String cuffFitDetectionFlag 袖带检测标记 <br />String irregularPulseDetectionFlag 不规则脉冲检测标记 <br />String pulseRateRangeDetectionFlags 脉率范围检测标记 <br />String measurementPositionDetectionFlag 测量位置标记 <br />String deviceSelectedUnit 设备的测量单位 
<a name="VHQa0"></a>
### 9.2.7、WeightAppendData（体重分析数据）

<br />double basalMetabolism 基础代谢 <br />double bodyFatRatio 脂肪率 <br />double bodyWaterRatio 身体水分含量 <br />double muscleMassRatio 肌肉重量比 <br />double boneDensity 骨质密度 
<a name="pg080"></a>
### 9.2.8、WeightData_A2（体重数据A2）

<br />String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />String broadcastId 设备当前的广播 ID <br />String date 测量时间 <br />int userNo 用户编号 <br />double weight 体重值 <br />double pbf 脂肪率 <br />double resistance_1 电阻值 1 <br />double resistance_2 电阻值 2 <br />String deviceSelectedUnit 当前测量单位 <br />int flag 标志位，1 表示脂肪秤，0 表示体重秤 <br />float basalMetabolism 基础代谢 ，脂肪秤特有数据 <br />float bodyFatRatio 体脂率，脂肪秤特有数据 <br />float bodyWaterRatio 体含水率，脂肪秤特有数据 <br />float visceralFatLevel 内脏脂肪水平 ，脂肪秤特有数据 <br />float muscleMassRatio 肌肉重量比，脂肪秤特有数据 <br />float boneDensity 骨质密度，脂肪秤特有数据 <br />byte battery 电池电量共有 7 个等级 <br />int weightStatus 测量状态，0 表示不稳定，1 表示稳定 <br />int impedanceStatus 电阻状态 <br />boolean hasAppendMeasurement 是否有脂肪相关数据标志位 <br />double voltageData 电压值 <br />double lbWeightValue 体重值（以 LB 为测量单位） <br />double stWeightValue 体重值小数部分（以 ST 为测量单位） <br />int stSectionValue 体重值整数部分（以 ST 为测量单位） 
<a name="qoKyo"></a>
### 9.2.9、WeightData_A3（体重数据）
String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />String broadcastId 设备当前的广播 ID <br />String date 测量时间 <br />int userNo 用户编号 <br />double weight 体重值 <br />String weightDifferenceValue 体重差值 <br />double impedance 阻抗 <br />String deviceSelectedUnit 当前测量单位 <br />String accuracyStatus 测量数据准确性状态 <br />float basalMetabolism 基础代谢 ，脂肪秤特有数据 <br />float bodyFatRatio 脂肪率，脂肪秤特有数据 <br />float bodyWaterRatio 体含水率，脂肪秤特有数据 <br />float visceralFatLevel 内脏脂肪水平 ，脂肪秤特有数据 <br />float muscleMassRatio 肌肉重量比，脂肪秤特有数据 <br />float boneDensity 骨质密度，脂肪秤特有数据 <br />int battery 电池电量共有 7 个等级 <br />String weightStatus 体重测量值状态 <br />String impedanceStatus 电阻状态 <br />boolean appendMeasurement 是否有脂肪数据的标志位 <br />double lbWeightValue 体重值（以 LB 为测量单位） <br />double stWeightValue 体重值小数部分（以 ST 为测量单位） <br />int stSectionValue 体重值整数部分（以 ST 为测量单位） 
<a name="wCzUF"></a>
### 9.2.10、SleepData（睡眠分析数据）
long startTime 入睡时间 <br />long endTime 起床时间 <br />int deepSleep 深睡时长（分钟） <br />int somnolence 浅睡时长（分钟） <br />int wakeUp 清醒时长（分钟） <br />int timeWakeUp 清醒次数 <br />int avgLevel 睡眠等级 <br />String SleepStatus 具体睡眠状态（每 5 分钟一个状态） 
<a name="umb17"></a>
### 9.2.11、PedometerData（日统计数据）
String deviceId 设备 ID <br />String deviceSn 设备 SN 号 <br />String broadcastId 设备当前的广播 ID <br />String date 测量时间 <br />int userNo 用户编号 <br />int walkSteps 步行步数 <br />int runSteps 跑步步数 <br />double examount 运动量 <br />double calories 卡路里 <br />int exerciseTime 运动时间 <br />int distance 距离 <br />int battery 电池电压等级 <br />int sleepStatus 睡眠状态 <br />int intensityLevel 等级 <br />long utc Utc 时间 <br />float batteryVoltage 电压值 <br />int batteryPercent 电量百分比 V1.2.3
<a name="5TQFg"></a>
### 9.2.12、PedometerHeartRateData（心率数据）
String deviceId 设备 Id <br />String broadcastId 设备广播 ID <br />int sendingPeriod 表示发送周期(0：日常； 1：每小时) <br />long utc 表示第一笔心率数据的测量 utc 时间 <br />Int remainCount 表示剩下未发送的心率数据数目 <br />int deltaUtc 表示每一笔心率数据间隔的秒数 <br />List<Integer> heartRates 表示心率数据的集合 <br />Date measureTime 测量时间 
<a name="XRCAf"></a>
### 9.2.13、PedometerSleepData（睡眠原始数据）
类型 属性 注释 版本<br />String deviceId 设备 Id <br />String broadcastId 设备广播 ID <br />int sendingPeriod 表示发送周期(0：日常； 1：每小时) <br />long utc 表示第一笔心率数据的测量 utc 时间 <br />int remainCount 表示剩下未发送的睡眠数据数目 <br />int deltaUtc 表示每一笔睡眠数据间隔的秒数 <br />List<Integer> sleeps 表示睡眠数据的集合 <br />Date measureTime 测量时间 
<a name="cEluh"></a>
### 9.2.14、PedometerRunningStatus（运动状态数据）
String deviceId 设备 Id <br />String broadcastId 设备广播 ID <br />List<RunningStat> stateList 跑步状态，包含状态（跑步或暂停），开始 utc，结束 utc<br />int runningTime 跑步时间 <br />int totalSteps 跑步总步数 <br />double maxCalories 最大卡路里 <br />int maxHeartRate 最大心率 <br />int avgHeartRate 平均心率 <br />int maxPitch 最大步频 <br />int avgPitch 平均步频 <br />int dataType数据类型0:watch 跑步数据,1:自动识别跑步数据,2:轨迹跑手环连接 GPS 成功产生的 跑步数据,3:轨迹跑手环连接 GPS 失败产生的跑步数据<br />Int sportsMode 运动模式 跑步 0x01
<a name="4xZ2G"></a>
### 9.2.15、PedometerHeartRateStatisticsData（心率状态数据）
String deviceId 设备 Id <br />String broadcastId 设备广播 ID <br />long utc 表示心率区间统计起始 UTC <br />int heartRateRange1 心率区间 I，累计时间，单位为：s(秒) <br />int heartRateRange2 心率区间 II，累计时间，单位为：s(秒) <br />int heartRateRange3 心率区间 III，累计时间，单位为：s(秒) <br />Date measureTime 表示心率区间统计起始的时间 
<a name="0eVMp"></a>
### 9.2.16、PedometerRunningCalorieData（运动卡路里数据）
String deviceId 设备 Id <br />String broadcastId 设备广播 ID <br />long utc 测量起始 UTC <br />int deltaUtc UTC 偏移量,每个单位值代表 5s <br />int remainCount 手环中卡路里数据剩余条数 <br />int currentUploadingCount 当前上传卡路里数据起始条数 <br />List<Float> calories 表示卡路里数据的集合 <br />Date measureTime 测量时间 
<a name="IHsMG"></a>
### 9.2.17、DeviceFilterInfo（设备过滤信息）
String broadcastName 设备广播名称<br />BroadcastNameMatchWay broadcastId 广播名匹配方式
<a name="NDQII"></a>
### 9.2.18、PedometerHeartRateAlert（心率预警设置）
boolean enable 是否打开运动心率预警 <br />int minHeartRate 最小心率 <br />int maxHeartRate 最大心率 
<a name="Udskf"></a>
### 9.2.19、PedometerSwimmingInfo（游泳数据）
int poolLength 泳池长度 
<a name="Cc9hZ"></a>
### 9.2.20、PedometerSportsInfo
类型 属性 注释 版本<br />short speed 配速 <br />int distance 距离 
<a name="m5vdr"></a>
### 9.2.21、PedometerEventReminder（时间提醒）
类型 属性 注释 版本<br />int index 事件序号，1~5 <br />String reminderContent 提醒内容  boolean enable 是否打开 <br />Int hour 提醒时间，小时 <br />Int Minute 提醒时间，分钟 <br />List<WeekDay> repeatDay 重复星期 <br />VibrationMode vibrationMode 振动方式 <br />int vibrationDuration 振动时间 <br />int vibrationIntensity1 振动等级 1，0~9 <br />Int vibrationIntensity2 振动等级 2，0~9 <br />9.2.22、DeviceFunctionInfo<br />DeviceFunctionType type 设备功能类型  boolean enable 功能开关 
<a name="WyI5t"></a>
### 9.2.23、HeartbeatData
int offset 时间偏移量 <br />int value G-Sensor Data 
<a name="WNXzG"></a>
### 9.2.24、PedometerHeartbeatData（心率数据）
String deviceId 设备 Id <br />String broadcastId 设备广播 ID <br />long utc UTC 单位秒<br />int remainCount 剩余条数 <br />int currentUploadingCount 当前上传条数 <br />List<HeartbeatData> heartBeats 表示心跳数据采集内容集合 
<a name="CkKY7"></a>
### 9.2.25、WeightUserInfo（用户体重信息）
int productUserNumber 绑定过程中对应的用户编号<br />Int age 用户年龄 <br />float height 用户身高，单位 M <br />float weight 用户体重，单位 kg <br />SexType sex 用户性别 <br />Boolean isAthlete 是否是运动员 <br />Int athleteLevel 运动员等级 
<a name="qjb80"></a>
# 十、算法分析
<a name="oIq11"></a>
## 10.1、体重算法
描述：根据体重数据对象（WeightData_A2）里的电阻值 resistance_2，以及用户的身高、体重、年龄、 性别计算脂肪数据<br />接口：com.lifesense.ble.LsBleInterface#parseAdiposeData
```java
WeightAppendData parseAdiposeData(SexType userSex,double weight_kg,double
height_m,int age,double resistance_2,boolean isAthlete)
```

<br />参数：<br />① double resistance_2,体重测量数据对象里的电阻值 resistance_2<br />② double height_m, 以 m 为测量单位的身高值，如 1.75m<br />③ double weight_kg, 以 kg 为测量单位的体重值，如 65kg<br />④ int age， 用户的年龄，如 45 ⑤ SexType sex, 用户性别 ⑥ boolean isAthlete,是否是运动员，true 为运动员，false 为非运动员<br />返回值：WeightAppendData ，记录了与脂肪测量数据相关属性的信息对象<br />**想要更多身体指标算法分析数据请接入：hezuo.lifesense.com**
<a name="hOdh6"></a>
## 10.2 睡眠分析算法
描述：分析 A2 手环睡眠数据<br />接口：com.lifesense.ble.LsBleInterface#analysisSleep
```java
List<SleepData> analysisSleep(List<PedometerData> dataList)
```

<br />参数：<br />① List<PedometerData> dataList,一组计步器运动数据对象<br />返回值：List<SleepData>，记录了与睡眠状态信息相关属性对象，具体的属性定义参考<br />SleepData 的定义。Null 表示分析失败<br />**想要其它设备睡眠算法分析结果请接入：hezuo.lifesense.com**
<a name="RYcgs"></a>
# 十一、混淆保护规则
```java
# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-verbose
-dontoptimize
-dontpreverify
-keepattributes *Annotation*
-keep public class com.google.vending.licensing.ILicensingService
-keep public class com.android.vending.licensing.ILicensingService
-keepclasseswithmembernames class * {
    native <methods>;
}
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}
-keep class * implements android.os.Parcelable {
  public static final android.os.Parcelable$Creator *;
}
-keepclassmembers class **.R$* {
    public static <fields>;
}
-keepclassmembers class *{
    public static <fields>;
}
-dontwarn android.support.**
-dontwarn com.google.**
#打包时混淆google
-keep class com.google.**{*;}

-keep class com.android.internal.telephony.**{*;}

-keep public class com.lifesense.ble.LsBleManager{*;}
-keep public class com.lifesense.ble.message.NotificationService{*;}
-keep public class com.lifesense.ble.message.NotificationAccessService{*;}

-keep public abstract class com.lifesense.ble.OnConfigInfoListener{*;}
-keep public abstract class com.lifesense.ble.PairCallback{*;}
-keep public abstract class com.lifesense.ble.ReceiveDataCallback{*;}
-keep public abstract class com.lifesense.ble.SearchCallback{*;}
-keep public abstract class com.lifesense.ble.OnSettingListener{*;}
-keep public abstract class com.lifesense.ble.BasePushListener{*;}

-keep public interface com.lifesense.ble.LsBleInterface{*;}
-keep public interface com.lifesense.ble.OnDeviceUpgradeListener{*;}
-keep public abstract class com.lifesense.ble.OnConnectExceptionListener{*;}
-keep public interface com.lifesense.ble.OnDeviceReadListener{*;}
-keep public interface com.lifesense.ble.OnStartMeasuringListener{*;}
-keep public abstract class com.lifesense.ble.LSDeviceSettingProfiles{*;}
-keep public class com.lifesense.ble.message.MediaPlayerService{*;}

-keep class com.lifesense.ble.bean.**{*;}

-keep class com.lifesense.ble.log.report.bean.**{*;}

-dontwarn com.lifesense.**
-keeppackagenames com.lifesense.ble.**,com.google.protobuf.**

-keep public class com.lifesense.android.api.model.**{*;}
-keep public enum com.lifesense.android.api.enums.**{*;}
-keep interface com.lifesense.android.api.callback.AuthorizationCallback{*;}

-keep public class com.lifesense.weidong.lzsimplenetlibs.cookie.LZCookieManager{*;}

```


<a name="3uvLp"></a>
# 十二、Q&A

<br />
<br />

<a name="WyTC6"></a>
# 十三、技术支持群
扫码添加后会收到邀请入群信息<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1601043310118-c90f3ed4-b022-487b-a784-d945ac0f3091.png#align=left&display=inline&height=1398&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1398&originWidth=1080&size=538697&status=done&style=none&width=1080)<br />


