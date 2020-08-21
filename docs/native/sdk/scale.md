# 体脂秤SDK集成文档-Android

<a name="7bc4c412"></a>
# 一、快速集成


<a name="2d622f6d"></a>
## 1.1、依赖及初始化


<a name="e9982606"></a>
### 1.1.1、添加依赖

<br />拷贝所需的aar包到libs目录下：<br />

- lifesense-android-bluetooth-scale：体脂秤蓝牙库， 负责底层体脂秤协议解析和蓝牙连接、重连部分
- lifesense-android-simplenet: 底层网络库， 打通乐心IOT平台
- lifesense-android-device-scale：顶层设备管理库，负责设备绑定解绑、设备列表、用户登录、数据上传等


<br />在项目的build.gradle中添加依赖：<br />

```groovy
    implementation(name: 'lifesense-android-bluetooth-scale', ext:'aar')
    implementation(name: 'lifesense-android-device-scale', ext:'aar')
    implementation(name: 'lifesense-android-simplenet-service', ext:'aar')
```


<a name="90d8b7c9"></a>
### 1.1.2、初始化SDK（登录）


- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceService



```java

void login(Context context, int tenantId, int subscriptionId, String associationId, IRequestCallBack callBack);
```


- 参数说明：<br />




| 类型 | Names | 说明 |
| --- | --- | --- |
| ApplicationContext | context | 设备的硬件地址 |
| int | tenantId | 租户ID，用来隔离数据和服务，公司唯一 |
| int | subscriptionId | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| String | associationId | 第三方用户唯一标识，用来做账号打通和静默登录 |

<a name="07ded91b"></a>
# 二、绑定设备指引


<a name="66f6ef77"></a>
## 2.1、绑定流程
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1596089032233-e5c7531c-39d8-4837-840f-be6d914d8d42.png#align=left&display=inline&height=464&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=1008&size=69529&status=done&style=none&width=1008)
<a name="6ddeaa40"></a>
## 2.2、搜索绑定设备


<a name="d4d1c408"></a>
### 2.2.1、搜索设备


- 功能描述：根据目标产品信息搜索蓝牙设备，返回单个搜索到的设备，需要开发者自己聚合
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void searchDevice(DisplayProduct displayProduct, SearchResultCallback callback);
```


- 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| DisplayProduct | displayProduct | 目标设备说明  参考格式： {"broadcastNames":["LS213-B1"],"defaultBindMode":3,"deviceTypes":["FAT_SCALE"],"displayBindType":"bluetooth","displayProductId":28,"displayProductType":"weight","factoryProducts":[{"bluetoothBroadcastName":"LS213-B1","communicationType":"4","configureManne":0,"displayProductId":0,"factoryProtocal":"InterConnection","model":"LS213-B1","name":"乐心体脂秤 S11","productTypeCode":"02","randomCode":false,"transferProtocal":"InterConnection"}],"imageUrl":"[https://files.lifesense.com/other/20190923/e450017d47d344e397856e7b404c6056.png","name":"S11","productTypeCode":3,"protocolType":"A6](https://files.lifesense.com/other/20190923/e450017d47d344e397856e7b404c6056.png%22,%22name%22:%22S11%22,%22productTypeCode%22:3,%22protocolType%22:%22A6)"} |
| SearchResultCallback | callback | 搜索结果回调， 单个返回LSEDeviceInfo（设备信息）和蓝牙信号强度rssi |



<a name="ddc4f5cb"></a>
### 2.2.2、停止搜索设备（分支情况）


- 功能描述：中断正在进行中的搜索，开发者一般在离开搜索页面或搜索结束时调用，内部调用逻辑不做描述
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void stopSearch();
```


<a name="20d28fc9"></a>
### 2.2.3、 绑定搜索到的设备


- 功能描述：开始绑定用户从搜索到的设备列表中（来自1.2.1.1）选择的设备
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void bindDeviceBySearchResult(LSEDeviceInfo lseDeviceInfo, BindResultCallback callback);
```


- 参数定义：<br />1、LSEDeviceInfo（目标设备信息）
| 类型 | Names | 说明 |
| --- | --- | --- |
| String | macAddress | 设备的硬件地址 |
| String | deviceName | 设备名称 |
| String | protocolType | 协议类型，A2表示使用A2协议的设备，A3表示使用A3协议的类型 |
| LSDeviceInfo | lsDeviceInfo | 乐心设备特有字段 |
| ScanRecord[] | scanRecord | 原始的扫描数据 |


<br />2、BindResultCallback 绑定结果的回调<br />

```java
public abstract class BindResultCallback {
    public abstract void onSuccess(Device device, List<DeviceUser> deviceUsers);
    public abstract void onFailed(int errorCode, String msg);
}
```


<a name="26e7c9f8"></a>
### 2.2.4、中断绑定流程


- 功能描述：中断正在绑定中的设备，一般发生在搜索成功后， 绑定成功前用户接受进程或退出绑定页面
-
   - 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
void interruptBindDevice(LSEDeviceInfo lseDeviceInfo);
```


- 参数定义：<br />1、LSEDeviceInfo（目标设备信息）
| 类型 | Names | 说明 |
| --- | --- | --- |
| String | macAddress | 设备的硬件地址 |
| String | deviceName | 设备名称 |
| String | protocolType | 协议类型，A2表示使用A2协议的设备，A3表示使用A3协议的类型 |
| LSDeviceInfo | lsDeviceInfo | 乐心设备特有字段 |
| ScanRecord[] | scanRecord | 原始的扫描数据 |



- 调用示例：



```java
LZDeviceService.getInstance().interruptBindDevice(mCurDeviceInfoApp.getLSEDeviceInfo());
```


<a name="6cc4e1c5"></a>
## 2.3、获取用户已经绑定的设备列表


- 功能描述：根据目标产品信息搜索蓝牙设备，返回单个搜索到的设备，需要开发者自己聚合
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



```java
List<Device> getBondedDevices();
```


<a name="f7ef2051"></a>
## 2.4、解绑


- 功能描述：接触设备与当前用户的绑定关系



```java
void unBindDevice(String deviceId, OnResultCallback callback);
```


- 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| String | deviceId | 设备ID |
| OnResultCallback | callback | 解绑回调 |



<a name="c243f848"></a>
# 三、体脂秤设置


<a name="5a3dfd4a"></a>
## 3.1、单位设置


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



<a name="909fb82c"></a>
## 3.2、获取单位


- 功能描述：获取体脂秤的单位



```java
int getUnit(String deviceId);
```

<br />返回值含义：

| name | value | 说明 |
| --- | --- | --- |
| UNIT_KG | 0 | 千克 |
| UNIT_LB | 1 | 磅 |
| UNIT_ST | 2 | 英石 |
| UNIT_JIN | 3 | 斤 |
| UNIT_GONG_JIN | 4 | 公斤 |



<a name="O3ukU"></a>
# 四、OTA升级


<a name="2da42b91"></a>
## 4.1查询最新固件


```java
void checkDeviceFirmwareUpgrade(String deviceId, OnCheckUpgradeCallback callback);
```


<a name="9e696a9a"></a>
## 4.2发起固件升级


```java
void upgradeDeviceFirmware(String deviceId, String filePath, UpgradeStateListener listener);
```


<a name="615150a3"></a>
## 4.3 中断升级


```java
 void interruptUpgradeDeviceFirmware(String deviceId);
```


<a name="2b4e4b54"></a>
# 五、接收数据


<a name="e8a17748"></a>
## 5.1、订阅数据


```java
void registerDataReceiveCallBack(BleReceiveCallback receiveCallback);
```

<br />BleReceiveCallback属性定义

| 类型 | 参数 | 说明 |
| --- | --- | --- |
| OnDataReceiveListener | receiveListener | 数据监听 |
| OnDeviceConnectStateListener | connectStateListener | 连接状态监听 |



```java
public interface OnDataReceiveListener {
    void onReceiveWeightData(WeightData data);
}
```


```java
public interface OnDeviceConnectStateListener {
    void onDeviceConnectStateChange(String mac, DeviceConnectState state);
}
```
