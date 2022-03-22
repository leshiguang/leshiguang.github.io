<a name="7bc4c412"></a>
# 合作模式介绍
1、设备通过乐心提供的蓝牙SDK上传数据到乐心服务器<br />2、账号信息通过乐心提供的SDK打通<br />3、基于蓝牙SDK之上，通过乐心的SDK将数据上报给乐心IoT平台，同时将数据回调给客户APP<br />4、客户应用和乐心SDK对接，嵌入SDK中的页面
<a name="eBqBc"></a>
# 快速集成
<a name="LvlIQ"></a>
## SDK下载
下载地址： [https://docs.leshiguang.com/download/](https://docs.leshiguang.com/download/)
<a name="wAasu"></a>
## 添加依赖
拷贝所需的aar包到libs目录下：

- [lifesense-android-common-service](https://github.com/leshiguang/maven-repository/packages/492041): 底层的基础库， 处理文件、cookie和一些工具类
- [lifesense-android-webview-service](https://github.com/leshiguang/maven-repository/packages/492044)：webview实现部分， 处理webview的桥接口、缓存等逻辑
- [lifesense-android-health-service](https://github.com/leshiguang/maven-repository/packages/492064)：健康服务部分、主要处理UI部分，UI页面的入口

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
    api "com.nostra13.universalimageloader:universal-image-loader:$version_imageloader"
    api "com.parse.bolts:bolts-tasks:$version_bolttask"//异步任务
    api "com.alibaba:fastjson:$version_alibaba_fastjson"
    api "org.apache.commons:commons-lang3:$version_lang3"
    api "org.apache.commons:commons-collections4:$version_collections4"
    api "com.tencent.mm.opensdk:wechat-sdk-android-without-mta:$version_wechatsdk" //微信

```
<a name="NaSja"></a>
## 初始化SDK
<a name="oYHRh"></a>
### WebView初始化
描述：SDK初始化一些基础功能，应尽早的调用（建议在Application中调用）<br />接口: com.lifesense.weidong.lswebview.webview.LSWebViewManager
```java
public void init(Context context)
```
<a name="G7NSJ"></a>
### 登录
描述：第三方账号和乐心账号静默打通， 获取默认的用户ID和token信息<br />接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceService<br />

```java
login(String appKey, String appSecret, String associatedId, final String tn, final OnLoginCallback callback)
```


- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| Context | context | app上下文 |
| String | appKey | 租户ID，用来隔离数据和服务，公司唯一 |
| String | appSecret | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| String | associationId | 第三方用户唯一标识，用来做账号打通和静默登录 |
| String | tn |  |


<br />appKey， appSecret需要申请获取：[https://docs.leshiguang.com/develop-native/apply](https://docs.leshiguang.com/develop-native/apply)
<a name="bOaRr"></a>
### 设备管理初始化（登录后调用）
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

<a name="hkpq8"></a>
### 从服务器同步设备信息（登录后使用）
功能描述：从服务器同步用户绑定的设备、设备状态、设备设置信息<br />接口：com.lifesense.device.scale.application.interfaces.ILZDeviceService#syncDeviceFromService
```java
/**
     * 同步设备信息
     * @param callback
     */
void syncDeviceFromService(OnSyncDeviceCallback callback);
```
<a name="m2ERa"></a>
### 开启数据接收服务（登录后使用）
描述：通知sdk开启数据接收服务，开始连接设备同步数据<br />接口：com.lifesense.device.scale.application.service.LZDeviceSyncService#startDataReceive
```java
/**
     * 开始接收数据
     */
void startDataReceive();

```
<a name="9NwS2"></a>
### 更新用户信息（登录后使用）
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
### 设置蓝牙设备数据的回调
功能描述：蓝牙数据通过设备上传到sdk后，会直接上传到拾果云平台，同时也会通过本地消息的方式分发给订阅者<br />接口：com.lifesense.device.scale.application.service.LZDeviceService
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
| 体重数据 | OnDataReceiveListener | 体重数据 | onReceiveWeightData |
| 血压数据 |  | 血压数据 | onReceiveBpMeasureInfo |
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



<a name="zPwjK"></a>
## 内置页面打开方式
| 页面功能 | 接口类 | 方法 | 参数 |
| --- | --- | --- | --- |
| 设备列表页 | com.lifesense.android.health.service.pages.PageDispatcher | openDevicePage | Context |
| 体重首页 |  | openWeightPage |  |
| 血压首页 |  | openBloodPressurePage |  |
| 心率首页 |  | openHeartRatePage |  |
| 步数首页 |  | openStepPage |  |
| 睡眠首页 |  | openSleepPage |  |



<a name="3nY56"></a>
# 接入demo
[https://github.com/leshiguang/lifesense-android-ui-integrate-demo](https://github.com/leshiguang/lifesense-android-ui-integrate-demo)<br />


