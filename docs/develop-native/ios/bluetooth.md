<a name="1d2be86b"></a>
# 合作方式介绍
1、设备通过乐心提供的蓝牙SDK绑定设备、上传数据<br />2、数据经过SDK初步处理后， 以回调的方式给到客户APP<br />3、客户APP上传数据到自己的云平台进行数据存储<br />4、客户可在APP或云平台调用乐心开放平台提供的API进行数据分析（睡眠、体重等场景）<br />

<a name="gb7VV"></a>
# 快速集成
<a name="oZOVP"></a>
## SDK下载
下载地址： [https://docs.leshiguang.com/download/](https://docs.leshiguang.com/download/)
<a name="250a1dc2"></a>
## 项目依赖配置
1、解压缩下载的压缩文件，您将看到三个Framework

- LSDeviceBluetooth.framework: 核心的蓝牙库，用于设备绑定、连接、数据上传
- LSAuthorizationFramework.framework: 鉴权库，用于控制设备准入信息，需要用到[1.2.2](#lnH19)中申请的appId信息
- LSNetworkFramework.framework: 基础网络库，LSAuthoriaztionFramework内部需要使用

SDK目前支持的CPU架构为X86_64、arm64，新版本的xcode中，已经不支持i386和armv7、armv7s的Framework打包<br />2、在Target->BuildPhase->Link Binary with Libraries 选型卡中， 添加”1“中解压缩的3个Framework<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1602575801727-7c6fe769-15a2-4e47-bc3b-0a1227927004.png#align=left&display=inline&height=227&margin=%5Bobject%20Object%5D&name=image.png&originHeight=227&originWidth=1267&size=30854&status=done&style=none&width=1267#align=left&display=inline&height=227&margin=%5Bobject%20Object%5D&originHeight=227&originWidth=1267&status=done&style=none&width=1267)<br />注：请不要将Status状态设置为Optional，否则会带来image not found异常<br />3、如果您的Target类型为Application，需要在Target->General->Frameworks,Libraries,Embeded Content选项卡中， 将导入的Framework类型设置为Embeded & Sign 否则运行时会Crash<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1602576174613-20ad90f4-6889-4289-9d71-51e245e0783b.png#align=left&display=inline&height=227&margin=%5Bobject%20Object%5D&name=image.png&originHeight=227&originWidth=1218&size=30522&status=done&style=none&width=1218#align=left&display=inline&height=227&margin=%5Bobject%20Object%5D&originHeight=227&originWidth=1218&status=done&style=none&width=1218)
<a name="62fd5f81"></a>
## 权限声明
由于SDK中需要使用到蓝牙权限， 需要在主工程的info.plist中添加蓝牙权限使用声明：<br />NSBluetoothPeripheralUsageDescription：A message that tells the user why the app is requesting the ability to connect to Bluetooth peripherals.(告诉用户为什么需要连接蓝牙外设)<br />NSBluetoothAlwaysUsageDescription：A message that tells the user why the app needs access to Bluetooth.（告诉用户为什么需要访问蓝牙权限）<br />

<a name="d750cee6"></a>
## 接入Demo
[https://github.com/leshiguang/LSBluetoothSDK_Demo_iOS](https://github.com/leshiguang/LSBluetoothSDK_Demo_iOS)
<a name="cf2a4d11"></a>
## 添加头文件引用
#import <LSDeviceBluetooth/LSDeviceBluetooth.h>
<a name="1c6332cd"></a>
## 初始化SDK
<a name="8884a93a"></a>
### 初始化

- 功能描述：首次使用 LSBluetoothManager 这个对象实例时，必须先调用该接口初始化 CBCentralManager 的 调度队列，调度队列设置成功后，相应的蓝牙功能如搜索、连接才可用。
- 接口：LSBluetoothManager#initManagerWithDispatch
- 参数说明：dispatch_queue_t： dispatchQueue
- 调用示例：
```objectivec
    dispatch_queue_t dispatchQueue=dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    [[LSBluetoothManager defaultManager] initManagerWithDispatch:dispatchQueue];
```
<a name="05e800f9"></a>
### 注册手机蓝牙状态监听对象

- 功能描述：注册手机蓝牙状态监听对象，当状态发生改变时，可通过重写systemDidBluetoothStatusChange 方法处理相应的状态。
- 接口：LSBluetoothManager#checkingBluetoothStatus
- 参数说明：(id) bleStatusDelegate
- 返回值：boolean，true 表示已完成初始化，false 表示未完成初始化
<a name="f79e7760"></a>
### 判断手机蓝牙是否可用

- 功能描述：判断手机蓝牙是否可用（蓝牙关闭、无蓝牙权限、不支持蓝牙的情况下为不可用）
- 接口：LSBluetoothManager#isBluetoothPowerOn
- 返回值：BOOL，YES标识可用、NO表示不可用
<a name="24e4f7e5"></a>
### 查询当前工作状态

- 功能描述：获取LSBluetoothManager当前的工作状态
- 接口：LSBluetoothManager#managerStatus
- 返回值：LSBManagerStatus,参考 [LSBManagerStatus](#UnSui) 的定义
<a name="44fe50fc"></a>
# 绑定设备
<a name="04dbe45c"></a>
## 搜索绑定设备
<a name="479eab49"></a>
### 搜索设备

- 功能描述：搜索指定设备类型的广播信息
- 接口：LSBluetoothManager#searchDevice:broadcast:resultsBlock:
- 参数定义：

① NSArray *deviceTypes ,设备类型列表,可设置多个设备类型<br />② [BroadcastType](#JgPki) broadcastType ，设备广播类型,分配对广播或正常广播<br />③ SearchResultsBlock block, search results block

- 返回值：BOOL ，YES 表示设备搜索功能可用，NO 表示设备搜索功能不可用或工作状态错误
<a name="ed44234e"></a>
### 停止搜索设备

- 功能描述：中断正在进行中的搜索，一般在离开搜索页面或搜索结束时调用
- 接口：LSBluetoothManager#stopSearch
```java
void stopSearch();
```


<a name="0a548a16"></a>
### _配对或绑定设备_

- 功能描述：开始绑定用户从搜索到的设备列表中选择的设备
- 接口：LSBluetoothManager#pairingWithDevice
- 参数：

①LsDeviceInfo（目标设备信息）：[设备详细信息](#VnxQQ)<br />② id pairingDelegate, 设备配对结果或配对信息的回调对象

- 返回值：boolean，true 表示设备配对功能可用，false 表示设备配对功能不可用或工作状态错误
<a name="22eb134d"></a>
#### 绑定设备的回调LSDevicePairingDelegate
1、didProductUserlistUpdate：_接收设备发上来需要绑定的编号（硬件上的用户编号）(血压计)_<br />_2、_didOperationCommandUpdate：_返回设备在配对或绑定过程中，上传的**操作指令**信息_<br />3、didPairingStatusChange：_返回配对成功的设备信息和绑定结果（**配对状态**）_
<a name="e6cdf2f2"></a>
#### _绑定设备上的用户编号_

- 功能描述：绑定设备上的用户编号
- 接口：LSBluetoothManager#bindingDeviceUser
- 参数：

① LSDeviceInfo *lsDevice, 设备信息对象,参考 [LSDeviceInfo](#VnxQQ) 的定义<br />② int userNumber,设备的用户编号 <br />③ String username,用户姓名，长度<= 16 个字符

- 返回值：boolean，true 表示绑定用户功能可用，false 表示参数无效或工作状态错误~~
<a name="064d2f9a"></a>
### 写入配对指令

- 功能：在设备配对或绑定过程中，输入操作指令，写入时机在收到[3.2.3.1](#uPQSS)中didOperationCommandUpdate之后
- 接口：LSBluetoothManager#inputOperationCmd
- 参数：

① LSDeviceOperationCmd cmd [操作指令](#Ujzp9)<br />② id obj 指令内容<br />③ NSString *broadcastId 设备广播 ID
<a name="4795e147"></a>
### 取消配对

- 功能：取消正在执行的配对或绑定操作
- 接口：LSBluetoothManager#cancelDevicePairing
- 参数：LsDeviceInfo lsDevice,设备信息对象



<a name="bd0a064d"></a>
# 数据同步
<a name="5a8c76bd"></a>
## 添加绑定成功的设备到SDK

- 功能：SDK不会持久化绑定的设备信息，故需要接入者将设备信息设置到SDK，在内存中临时存储（app退出时会被清除， 需要在下次进入app时设置）
- 接口LSBluetoothManager#addMeasureDevice
```objectivec
-(BOOL)addMeasureDevice:(NSString *) appId andDevice:(LSDeviceInfo *)lsDevice result:(void (^)(NSUInteger)) result;
```


- 参数：

appId: 申请地址： [https://docs.leshiguang.com/develop-native/apply](https://docs.leshiguang.com/develop-native/apply)<br />lsDevice：参考 LsDeviceInfo 的定义<br />result：添加状态码：<br />UN_KNOWN = -1<br />SUCCESS = 200<br />SERVER_ERROR = 500<br />UNCERFIFIED_BUNDLE = 20001<br />PARAMETER_ERROR = 20002<br />UNCERFIFIED_MODEL = 20003<br />ACTIVATION_EXCEED = 20004<br />INVALID_SERVICE = 20005<br />INVALID_DEVICE = 20006<br />INVALID_APPID = 20007
<a name="28fe29f7"></a>
## 开启数据同步

- 功能：启动测量数据自动同步服务，服务启动后，会自动连接设备、收发设备上传的测量数据
- 接口：LSBluetoothManager#startDataReceiveService
- 参数：

① id delegate，[接收测量数据的回调对象](#fbpdS)

- 返回值：boolean,true 表示服务启动成功，false 表示服务启动失败或工作状态错误
<a name="c657f075"></a>
## 结束（停止）数据同步

- 功能：停止测量数据的自动同步服务（建议退出登录时必须调用）
- 接口：LSBluetoothManager#stopDataReceiveService
- 参数：无
- 返回值：boolean,true 表示服务停止成功，false 表示服务停止失败或工作状态错误。
<a name="70eaf7ce"></a>
## 检查设备的连接状态

- 功能：检查设备当前的连接状态
- 接口：LSBluetoothManager#checkDeviceConnectState
- 参数：NSString broadcastId,目标设备的广播ID
- 返回值：LSDeviceConnectState ,设备连接状态，CONNECTED_SUCCESS 表示已连接，返回 UNKNOWN, 表示当前设备的连接状态未知或连接已断开，详细可参考 [LSDeviceConnectState](#iy5Ws) 的定义
<a name="08aad4d3"></a>
## 删除设备

- 功能：根据设备的广播 ID,删除测量设备，设备删除的同时会断开连接
- 接口：LSBluetoothManager#**deleteMeasureDevice**
- 参数：String broadcastId ，LsDeviceInfo 设备对象的广播 ID
- 返回值：boolean,true表示删除设备成功，false表示删除设备失败或参数无效
<a name="0145f167"></a>
# 下发设置
<a name="41d2c629"></a>
## 体脂(体重)秤设置
<a name="1db56970"></a>
### 设置秤的用户信息

- 功能：设备脂肪秤或体重秤的用户信息
- 接口：LSBluetoothManager#setProductUserInfo
- 参数：LSProductUserInfo userInfo: 体重秤、脂肪秤的用户基本信息对象



<a name="3dc43200"></a>
## 手环设置
<a name="f5e8c9c9"></a>
### 设置手环用户信息

- 功能：设备脂肪秤或体重秤的用户信息
- 接口：LSBluetoothManager#setPedometerUserInfo
- 参数：LSPedometerUserInfo peUserInfo,计步器的用户基本信息对象
<a name="fe0688b5"></a>
### 设置闹钟

- 功能：设置闹钟到手环
- 接口：LSBluetoothManager#setPedometerAlarmClock
- 参数：LSPedometerAlarmClock alarmClock,计步器的闹钟对象
<a name="6ed75bd6"></a>
### 设置心率检测

- 功能：更新手环的心率检测设置信息
- 接口：LSBluetoothManager#updateHeartRateDetection
- 参数：

① LSDHeartRate _detectInfo; 心率检测设置信息对象 <br />     ② NSString _broadcastId; 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="411e5df3"></a>
### 防丢失设置

- 功能：更新手环的断开提醒设置信息（防丢设置）
- 接口：LSBluetoothManager#updateAntilostInfo
- 参数：

① LSDPreventLost _lostInfo ,断开提醒信息对象<br />      ② NSString _broadcastId; 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="529aaaab"></a>
### 久坐提醒设置

- 功能：更新手环的久坐提醒设置信息
- 接口：LSBluetoothManager#updateSedentaryInfo
- 参数：

① NSArray<LSSedentaryClock _> _sedentarys; 久坐提醒对象列表 <br />② BOOL enable;总开关 <br />③ NSString *broadcastId; 设备广播 ID <br />④ DeviceSettingBlock settingBlock,update results callback block
<a name="27469627"></a>
### 步数目标设置

- 功能：更新手环的久坐提醒设置信息
- 接口：LSBluetoothManager#updateStepGoal
- 参数：

① int stepNumber，目标步数 <br />② BOOL enable，启动开关 <br />③ NSString *broadcastId,设备广播 ID <br />④ DeviceSettingBlock settingBlock,update results callback block
<a name="d7ad89d4"></a>
### 心率区间设置

- 功能：根据用户年龄，更新手环的心率检测区间设置信息
- 接口：LSBluetoothManager#updateHeartRateRange
- 参数：

① NSUInteger userAge; 用户年龄<br />② NSString *broadcastId,广播 ID<br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="457d0e16"></a>
### 消息提醒设置

- 功能：更新手环的消息提醒设置信息
- 接口：LSBluetoothManager#updateMessageRemind
- 参数：

① LSDMessageReminder _remind，消息提醒设置 <br />     ② NSString _broadcastId，设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="8511f064"></a>
### 心率监测模式设置

- 功能：更新手环的心率检测模式
- 接口：LSBluetoothManager#updateHeartDetectionMode
- 参数：

① LSHRDetectionMode detectMode,心率检测方式 <br />② NSString *broadcastId,设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="2e1655df"></a>
### 夜间模式设置

- 功能：更新手环的夜间模式设置
- 接口：LSBluetoothManager#updateNightDisplayMode
- 参数：

① LSDNightMode _nightMode,夜间模式设置信息对象 <br />     ② NSString _broadcastId,设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="bd413576"></a>
### 佩戴方式设置

- 功能：更新手环的佩戴方式
- 接口：LSBluetoothManager#updateWearingStyles
- 参数：

① LSWearingStyle wearingStyle，佩戴方式,左手或右手 <br />② NSString *broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="d8e9f74a"></a>
### 屏幕方向设置

- 功能：更新手环的屏幕显示方式
- 接口：LSBluetoothManager#updateScreenMode
- 参数：

① LSScreenDisplayMode screenMode,屏幕显示方式，横屏或竖屏 <br />② NSString *broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="e74ca24a"></a>
### 手环页面显示顺序设置

- 功能：更新手环的页面显示顺序或页面个数
- 接口：LSBluetoothManager#updatePageSequence
- 参数：

① LSDDisplayPage _page,设备页面信息对象 <br />      ② NSString _broadcastId,自定义设备屏幕显示的顺序列表 <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="ccfc8c5e"></a>
### 设置表盘样式

- 功能：设置手环的表盘样式
- 接口：LSBluetoothManager#updateDialPeaceInfo
- 参数：

① LSDeviceDialPeaceInfo _dialInfo 表盘信息 <br />      ② NSString _broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="0e928547"></a>
### 自动识别运动模式设置

- 功能：设置手环运动模式的自动识别状态
- 接口：LSBluetoothManager#updateAutoRecognition
- 参数：

① NSArray <LSAutomaticSportstypeModel _>_)autoRecognitions，运动模式列表 <br />② NSString *broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block<br />

<a name="4caa6025"></a>
### 事件提醒设置

- 功能：设置手环的事件提醒（带标签的闹钟提醒）
- 接口：LSBluetoothManager#updateEventReminderInfo
- 参数：

① LSDeviceEventReminderInfo _eventInfo 事件提醒信息 <br />② NSString _broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="82bed059"></a>
### 鼓励设置


- 功能：更新手环的鼓励目标设置，支持不同类型的鼓励目标，包括：步数；卡路里；距离
- 接口：LSBluetoothManager#updateEncourageInfo
- 参数：

① LSDeviceEncourageInfo _encourageInfo 目标鼓励信息 <br />② NSString _broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="3d66811a"></a>
### 天气设置

- 功能：设置手环的天气信息（最多只支持最近三天的天气）
- 接口：LSBluetoothManager#updateWeatherInfo
- 参数：
- ① LSDeviceWeatherInfo *weatherInfo 天气信息
- ② NSString *broadcastId, 设备广播 ID
- ③ DeviceSettingBlock settingBlock,update results callback block
<a name="926a8111"></a>
### 心率预警设置

- 功能：设置手环在运动模式下的心率预警提示信息
- 接口：LSBluetoothManager#updateHeartRateAlertInfo
- 参数：

① LSDeviceHeartRateAlertInfo _alertInfo 心率预警信息 <br />② NSString _broadcastId, 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="7d85e4b4"></a>
### 手环功能开关

- 功能：设置设备功能开关信息
- 接口：LSBluetoothManager#updateDeviceFunctionInfo
- 参数：

① LSDeviceFunctionInfo _function 设备功能 <br />② NSString _ broadcastId 设备广播 ID <br />③ DeviceSettingBlock settingBlock,update results callback block
<a name="bc5a10ab"></a>
## 其他通用设置
<a name="c2c2a496"></a>
### 读取设备电量

- 功能：读取设备电量电压信息，读取结果将通过 bleDevice:didBatteryVoltageUpdate:接口返回
- 接口：LSBluetoothManager#readDeviceVoltage
- 参数：

① NSString *broadcastId，设备广播 ID
<a name="4ae0fc6f"></a>
### 更新手机GPS状态

- 功能：更新手机的 GPS 状态
- 接口：LSBluetoothManager#updatePhoneGpsState
- 参数：

①isWorking BOOL,YES 表示手机已开启 gps 功能，NO 表示手机 gps 功能不可用
<a name="0auG1"></a>
# 配网
<a name="680b67c6"></a>
## 开始配网

- 功能：开始配网
- 接口：LSBluetoothManager#configWifiPassword
- 参数：

① NSString _password, wifi password <br />② NSString _networksName,net works name(SSID) '<br />③ LSDeviceInfo *lsDevice, 设备信息对象,参考 LSDeviceInfo 的定义 <br />④ id configDelegate,配置结果回调对象<br />

- 返回值：BOOL,YES 表示接口功能可用，NO 表示接口功能不可用



<a name="FVSlJ"></a>
## 蓝牙wifi双模秤配网
<a name="vVrpq"></a>
### 开启wifi扫描

- 功能：秤开启扫描周围的wifi的能力
- 接口：LSBluetootthManager#scanScalesWifi
- 参数：deviceMac，设备广播 ID



<a name="u9WR0"></a>
### 通过蓝牙进行wifi配网

- 功能：输入bssid和wifi密码进行配网
- 接口：LSBluetootthManager#connectWifi:bssid:password
- 参数：

① broadcastId 设备广播 ID<br />② bssid bssid设置搜索wifi返回，和ssid对应<br />③ password wifi密码<br />

<a name="ilzRa"></a>
### 重置wifi

- 功能：重置秤wifi配置
- 接口：LSBluetootthManager#restConnectRequest
- 参数：broadcastId，设备广播 ID



<a name="oWk65"></a>
### 获取wifi连接状态

- 功能：获取wifi连接状态
- 接口：LSBluetootthManager#wifiStatusRequest
- 参数：broadcastId，设备广播 ID
<a name="d36c104b"></a>
# 固件升级
<a name="330e6a38"></a>
## 开始升级固件

- 功能：升级设备固件
- 接口：LSBluetoothManager#upgradingWithDevice
- 参数：

① LSDeviceInfo _lsDevice, 设备信息对象,参考 LSDeviceInfo 的定义 <br />② NSURL _fileUrl,升级文件路径 <br />③ id upgradingDelegate,升级结果及升级进度的回调对象 返回值：BOOL，YES 表示接口功能可用，NO 表示接口功能不可用
<a name="31d7c502"></a>
## 中断固件升级

- 功能：取消当前设备的固件升级操作；设备屏幕当前显示的内容是“Update Mode”表示设备已进入升级模式，“Updating……”表示升级过程中。
- 接口：LSBluetoothManager#cancelDeviceUpgrading
- 参数：

① NSString *broadcastId, 设备广播 ID
<a name="157430ee"></a>
# 数据回调
<a name="2c5fe7ac"></a>
## LSDevicePairingDelegate(设备配对回调)
当调用接口 pairingWithDevice 与设备进行配对操作时，配对过程中设备上传的用户列表(仅部分A3血压计、体脂秤设备)将以异步的方式通过接口 didProductUserlistUpdate 返回，配对结果将通过回调接口 didPairingStatusChange 返回。配对过程中需要开发者操作的指令通过didOperationCommandUpdate返回
<a name="49f5393c"></a>
### didProductUserlistUpdate（支持绑定的编号信息）

- 参数：

① LSDeviceInfo *lsDevice，设备信息对象，参考 LSDeviceInfo 的定义<br />② List userlist,设备的用户列表

- 详细说明：返回设备在配对过程中上传的用户列表，该接口只支持使用 A3 协议的设备，A3 协议的设备在配对过程中，会上传一组设备已存在的用户信息，如用户编号、用户名称；其他设备在配对过程中不需要重写该方法。
<a name="c76b5a2e"></a>
### didPairingStatusChange（配对状态变更）

- 参数：

① LSDeviceInfo *lsDevice,设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSDevicePairedResults status, 配对状态，参考 LSDevicePairedResults 的定义

- 详细说明：设备配对或设备绑定结果的回调接口
<a name="ce5b83f2"></a>
### onDeviceOperationCommandUpdate（操作命令）

- 参数：

① LSDeviceInfo _lsDevice,设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSDeviceOperationCmdInfostatus _cmdInfo,操作指令信息

- 详细说明：设备绑定或配对过程中，操作指令回调接口 对于支持随机码绑定的设备和互联秤，在配对或绑定过程中需要实现该方法，并根据设备上传的操作指令进行下一步操作。
<a name="b15783da"></a>
## LSDeviceDataDelegate(设备测量数据和状态回调)
当调用startDataReceiveService接口时，所有与设备相关的测量数据将以异步的方式通过回调接口返回。不同设备类型的测量数据将通过不同的接口返回。
<a name="3520e331"></a>
### didConnectStateChange（连接状态变更）

- 参数：

① LSDeviceInfo *lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSDeviceConnectState status,设备连接状态，参考 LSDeviceConnectState 的定义

- 详细说明：返回设备当前的连接状态，connectState= CONNECTED_SUCCESS 表示连接成功, connectState= CONNECTED_FAILED 表示连接失败，connectState= DISCONNECTED 表示连接断开
<a name="d18c998a"></a>
### bleDeviceDidInformationUpdate（采集到设备信息）

- 参数：

① LsDeviceInfo lsDevice,设备对象信息

- 详细说明：设备详细信息更新的回调接口，如固件版本、硬件版本、设备当前时区等信息的更新通知
<a name="39f46eca"></a>
### didProductUserInfoUpdate（用户信息）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSProductUserInfo _userInfo,秤的当前用户信息 ，参考 LSProductUserInfo 的定义 返回值：void

- 详细说明：在测量数据同步过程中，A3 产品的设备用户信息回调接口
<a name="aabe8b73"></a>
### didMeasureDataUpdateForWeight（”仅“体重测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSWeightData _weightData,体重数据

- 详细说明：体重测量数据回调接口



<a name="6fb737da"></a>
### didMeasureDataUpdateForWeightAppend（体重体脂测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义<br />② LSWeightAppendData _fatData,脂肪测量数据对象

- 详细说明：脂肪测量数据回调接口，如脂肪率、水分含量、肌肉含量等
<a name="d2a541c4"></a>
### didMeasureDataUpdateForBloodPressure（血压测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSSphygmometerData _data,血压测量数据

- 详细说明：血压测量数据回调接口
<a name="398aaf24"></a>
### onReceiveHeightData（身高测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义<br />② LSHeightData _data,身高测量数据

- 详细说明：身高测量数据回调接口
<a name="72c9ec4a"></a>
### didMeasureDataUpdateForKitchen（厨房秤测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSKitchenScaleData _data,厨房秤测量数据

- 详细说明：厨房秤测量数据回调接口
<a name="b35f8b14"></a>
### didMeasureDataUpdateForBloodGlucose（血糖测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义<br />② LSWeightAppendData _fatData,脂肪测量数据对象

- 详细说明：血糖仪测量数据回调接口，如测量单位、浓度值等
<a name="e24ac9df"></a>
### didMeasureDataUpdateForPedometer（手环测量数据）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSBloodGlucoseData_dataObj,血糖仪测量数据对象，参考 LSBloodGlucoseData 的定义

- 详细说明：手环测量数据回调接口，如步数、卡路里、距离、心率数据、睡眠数据、跑步数据等
<a name="44cf529e"></a>
### didBatteryVoltageUpdate（电池电压数据）

- 参数：

① byte[] sourceData,源数据<br />② int flag，电量状态标记位<br />③ float voltageValue,电压值 ④ int percentage,电量百分比

- 详细说明：在调用接口readDeviceVoltage读取设备的实时电量时，读取结果将以异步的方式，通过这个类的回调方法返回。flag=0x00 表示正常工作,flag=0x01 表示充电中,flag=-1 表示不支持，flag=2 表示返回的是电量百分比，没有电压；voltageValue=-1 表示不支持



<a name="uXcWS"></a>
### didMeasureDataUpdateForWifi (蓝牙wifi双模秤扫描wifi数据回调）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />      ② _LSScaleWifiModel, wifi信息的数据model，参考LSScaleWifiModel 的定义

- 详细说明：开启爆款wifi扫描的回调
<a name="zBPlv"></a>
### didConnectWifiResult （蓝牙wifi双模秤wifi配网结果回调）

- 参数

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />      ② _LSScaleConnectWifiResult, 配置wifi结果的回调，参考LSScaleConnectWifiResult的定义

- 详细说明：调用爆款秤wifi配网的回调



<a name="QVKQS"></a>
### didReconnectWifiResult （蓝牙wifi双模秤重置结果回调）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />      ② _LSScaleRestConnectWifiResult, 重置wifi信息的数据model，参考LSScaleRestConnectWifiResult 的定义

- 详细说明：调用重置wifi接口回调



<a name="elDev"></a>
### didWifiState （蓝牙wifi双模秤重置结果回调）

- 参数：

① LSDeviceInfo _lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />      ② _LSScaleWifiStateModel, 秤wifi连接信息的数据model，参考LSScaleWifiStateModel 的定义

- 详细说明：调用获取wifi连接状态接口回调
<a name="a0d75d02"></a>
## LSDeviceUpgradingDelegate（升级回调）
LSDeviceUpgradingDelegate是一个接口类，当调用upgradingWithDevice接口时，必须实现这个接口的两个回调方法，所有与设备升级状态相关的提示将以异步的方式通过回调接口返回，如升级进度、升级结果等
<a name="0ef539cd"></a>
### 8.3.1、didUpgradeStatusChange（升级状态变更）

- 参数：

① LSDeviceInfo *lsDevice, 设备对象信息, 参考 LSDeviceInfo 的定义 <br />② LSDeviceUpgradeStatus upgradeStatus, 设备升级状态 <br />③ LSErrorCode errorCode, 升级失败时返回的错码码

- 详细说明：当设备进入升级模式后，设备屏幕会显示“update mode”,会返回 ENTER_UPGRADE_MODE的回调；当设备升级成功后，会返回 status=UPGRADE_SUCCESS,errorCode=0 的回调；当设备升级失败，会返回 status=UPGRAGE_FAILURE，以及相应的错误码。
<a name="0dfca835"></a>
### 8.3.2. didUpgradeProgressUpdate（升级进度变更）

- 参数：

① LSDeviceInfo *lsDevice,设备对象信息, 参考 LSDeviceInfo 的定义 <br />② NSUInteger value,升级进度 1-99， 返回值：void

- 详细说明：返回设备当前的升级进度
<a name="322f827d"></a>
# 数据结构
<a name="27ddfdff"></a>
## 常量&枚举
<a name="5b5584dd"></a>
### LSDeviceType（设备类型}
LSDeviceTypeUnknown 表示未知类型的设备<br />LSDeviceTypeWeightScale 体重秤 <br />LSDeviceTypePedometer 手环或手表 <br />LSDeviceTypeBloodPressureMeter 血压计<br />LSDeviceTypeKitchenScale 厨房秤<br />LSDeviceTypeHeightMeter 身高测量仪<br />LSDeviceTypeFatScale 脂肪秤
<a name="58a2a3c5"></a>
### BroadcastType(广播模式）
BroadcastTypeAll 全广播，包括正常与配对广播 <br />BroadcastTypeNormal 正常广播信号 <br />BroadcastTypePair 配对广播信号 
<a name="cc52de1e"></a>
### LSMeasurementUnit（重量单位）
LSMeasurementUnitKg 以 kg 为计量单位 <br />LSMeasurementUnitLb 以 lb 为计量单位 <br />LSMeasurementUnitSt 以 st 为计量单位
<a name="8d5d421b"></a>
### LSBManagerStatus（工作状态）
ManagerStatusFree =0 空闲 <br />ManagerStatusScaning =1 设备搜索工作模式 <br />ManagerStatusPairing =2 设备配对工作模式 <br />ManagerStatusSyncing =3 设备数据同步工作模式 <br />ManagerStatusUpgrading =4 设备固件升级工作模式 
<a name="2c96bec3"></a>
### LSDeviceMessageType（消息类型）
LSDeviceMessageIncomingCall 来电消息 <br />LSDeviceMessageSMS 短信消息 <br />LSDeviceMessageWechat 微信消息 <br />LSDeviceMessageQQ QQ 消息 
<a name="a068f517"></a>
### LSDeviceConnectState（连接状态）
LSDeviceStateConnectSuccess 连接成功 <br />LSDeviceStateConnectFailure 连接失败 <br />LSDeviceStateDisconnect 连接断开 <br />LSDeviceStateConnectionTimedout 连接超时 <br />LSDeviceStateUnknown 未知
<a name="0f730f34"></a>
### LSDevicePageType(手环页面类型)
LSDevicePageTime 时间页面 <br />LSDevicePageStep 步数页面 <br />LSDevicePageCalories 卡路里页面 <br />LSDevicePageHeartRate 心率页面 <br />LSDevicePageRunning 跑步页面 <br />LSDevicePageDistance 距离页面 
<a name="9022362d"></a>
### LSVibrationMode（震动模式）
LSVibrationModeContinued 表示持续震动 <br />LSVibrationModeInterval 表示间歇震动，震动强度不变 <br />LSVibrationModeIntervalS2L 表示间歇震动，震动强度由小变大 <br />LSVibrationModeIntervalL2S 表示间歇震动，震动强度由大变小 <br />LSVibrationModeIntervalLoop 表示震动强度大小循环 
<a name="4a3c7592"></a>
### GattServiceType（蓝牙服务）
enum ALL 表示所有服务<br />CALL_SERVICE 表示来电服务<br />USER_DEFINED 表示用户自定义服务
<a name="4c326434"></a>
### LSDeviceUpgradeStatus（OTA升级状态）
LSUpgradeStatusUnknown 未知状态 <br />LSUpgradeStatusEnterUpgradeMode 进入升级模式 <br />LSUpgradeStatusUpgradeSuccess 升级成功<br />LSUpgradeStatusUpgradeFailure 升级失败 <br />LSUpgradeStatusUpgrading 升级中 
<a name="1db5df4f"></a>
### LSDeviceSportMode（运动模式）
LSSportModeRunning 运动模式-跑步<br />**LSDeviceSportSubMode**<br />LSRunningModeWithWatch mambo watch 跑步模式 <br />LSRunningModeWithAutoRecognition 自动识别跑步模式 <br />LSRunningModeWithGPS 连接 GPS 的跑步模式 <br />LSRunningModeWithoutGPS 没有连接 GPS 的跑步模式
<a name="1af08955"></a>
### LSStepFreqStatus（运动状态）
LSStepFreqStatusRunStart 跑步开始 <br />LSStepFreqStatusRunOver 跑步结束 <br />LSStepFreqStatusRunPause 跑步暂停 <br />LSStepFreqStatusRunReStart 跑步重新开始 
<a name="617f2e1b"></a>
### LSErrorCode（错误码）
ECodeUnknown = 0 未知错误 <br />ECodeParameterInvalid =1 接口参数错误 <br />ECodeUpgradeFileFormatInvalid =2 升级文件格式错误 <br />ECodeUpgradeFileNameInvalid =3 升级文件名无效 <br />ECodeWorkingStatusError =5 SDK 工作状态错误 <br />ECodeDeviceNotConnected =7 设备未连接 <br />ECodeDeviceUnsupported =8 设备不支持 <br />ECodeUpgradeFileVerifyError=9 Watch 升级文件检验失败 <br />ECodeUpgradeFileDataReceiveError=10 数据接收失败 <br />ECodeLowBattery=11 Watch 电量不足,拒绝升级 <br />ECodeCodeVersionInvalid=12 版本代码不相符，拒绝升级 <br />ECodeUpgradeFileHeaderVerifyError=13 文件头内容检验失败 <br />ECodeFlashSaveError=14 设备 flash 保存失败 <br />ECodeScanTimeout=15 扫描超时 <br />ECodeConnectionFailed=17 连接失败 <br />ECodeConnectionTimeout=21 连接超时 <br />ECodeBluetoothUnavailable=23 蓝牙不可用 <br />ECodeAbnormalDisconnect=24 异常断开 <br />ECodeWriteCharacterFailed=25 写特征失败 <br />ECodeCancelUpgrade=26 主动取消升级 
<a name="3c506cac"></a>
### LSDeviceOperationCmd（设备上报的指令）
DOperationCmdUnknown= 1 未知操作指令 <br />DOperationCmdInputRandomCode= 2 输入随机码 <br />DOperationCmdInputPairedConfirm= 3 配对确认  <br />DOperationCmdInputDeviceId= 4 输入 deviceID
<a name="ef94adb6"></a>
### LSBroadcastNameMatchWay（广播匹配方式）
LSBroadcastNameMatchPrefix= 1 前缀匹配，区分大小写 <br />LSBroadcastNameMatchPrefixIgnoreCase=2 前缀匹配，不区分大小写 <br />LSBroadcastNameMatchSuffix=3 后缀匹配，区分大小写 <br />LSBroadcastNameMatchSuffixIgnoreCase=4 后缀匹配，不区分大小写 <br />LSBroadcastNameMatchEquals=5 直接比较，区分大小写 <br />LSBroadcastNameMatchEqualsIgnoreCase=6 直接比较，不区分大小写 
<a name="52f38063"></a>
### LSDialPeaceStyle（表盘样式）
LSDialPeaceStyle1 = 1 表盘 1 <br />LSDialPeaceStyle2 = 2 表盘 2 <br />LSDialPeaceStyle3 = 3 表盘 3  <br />LSDialPeaceStyle4 = 4 表盘 4 <br />LSDialPeaceStyle5 = 5 表盘 5 <br />LSDialPeaceStyle6 = 6 表盘 6 
<a name="c9165038"></a>
### LSAutomaticSportstype（自动识别运动类型）
LSAutomaticSportstypeWalking= 1 健走 <br />LSAutomaticSportstypeRunning=2 跑步 <br />LSAutomaticSportstypeCycling=3 骑行 
<a name="d7f5bd4f"></a>
### LSDeviceFunction（设备功能类型）
LSDeviceFunctionHeartbeat = 0x0100 心跳数据采集
<a name="931e95fc"></a>
## 数据结构
SDK 接口使用的实体类定义在 com.lifesense.ble.bean 包里，使用这些实体类的时候可以在项目 里 导 入 这 个 包，如 import com.lifesense.ble.bean.*; 或 者 指 定导入 某 个 实体类，如 import <br />com.lifesense.ble.bean.LsDeviceInfo
<a name="d1a6c2a5"></a>
### LsDeviceInfo（设备基础信息）
NSString deviceId 设备 ID <br />NSString deviceSn 设备 SN 号 <br />NSString deviceName 设备名称 <br />NSString modelNumber 设备型号 <br />NSString password 设备密码 <br />NSString broadcastId 广播 ID，随机数 <br />NSString protocolType 协议类型 <br />BOOL preparePair 配对状态标记 <br />LSDeviceType deviceType 设备类型 <br />NSString softwareVersion 软件版本 <br />NSString hardwareVersion 硬件版本 <br />NSString firmwareVersion 固件版本 <br />NSString manufactureName 制造商名称 <br />NSUInteger deviceUserNumber 设备用户编号 <br />NSUInteger maxUserQuantity 最大用户数 <br />NSString macAddress 设备硬件地址 <br />NSString timezone 设备当前时区 <br />NSString peripheralIdentifier CBPeripheral’identifier <br />NSNumber rssi 信号强度 <br />Int heartRate 当前测量的心率
<a name="a1ceaad3"></a>
### LSScaleUserInfo（秤用户信息）
NSUInteger uerNumber 绑定过程中，对应选择的用户编号 <br />LSUserGender gender 用户性别 <br />NSUInteger age 用户年龄 <br />NSUInteger height 用户身高，单位 CM <br />Double weight 用户体重，单位 kg <br />BOOL isAthlete 是否运动员 <br />NSUInteger athleteLevel 运动员等级 
<a name="19d52bf3"></a>
### LSDeviceOperationCmdInfo（绑定操作命令）
id cmdObj 操作指令内容<br />LSDeviceOperationCmd operationCmd 操作指令
<a name="3dfcd23b"></a>
### LSDeviceEventReminderInfo（时间提醒）
Int index 事件序号 <br />NSString eventcontent 事件标签，提醒内容 <br />BOOL eventSwitch 是否启用 <br />int hour 提醒时间，小时 <br />int minute 提醒时间，分钟 <br />NSArray weeks 提醒周期 <br />LSVibrationMode shockType 振动类型 <br />int shockTime 振动时间 <br />int shockLevel1 振动强度 1 <br />int shockLevel2 振动强度 2 <br />LSReminderType reminderType 提醒类型
<a name="9a1a8a7c"></a>
### LSDeviceData
id dataObj 测量数据对象 <br />NSUInteger dataType 数据类型 <br />NSData sourceData 原始数据
<a name="160ed153"></a>
### LSDeviceMeasureData
NSString deviceId 设备 ID <br />NSString broadcastId 设备当前的广播 ID <br />NSString measureTime 测量时间 <br />NSString measureUnits 测量单位 <br />NSInteger battery 设备电量等级 <br />long long utc 测量时间对应的 UTC 值 <br />int batteryPercent 设备电量百分比
<a name="ac1c54d0"></a>
### LSPedometerData（手环日统计数据）
NSUInteger userNumber 用户编号 <br />NSInteger walkSteps 步行步数 <br />NSInteger runSteps 跑步步数 <br />double examount 运动量 <br />double calories 卡路里 <br />NSInteger exerciseTime 运动时间 <br />NSInteger distance 距离 <br />NSInteger sleepStatus 睡眠状态 <br />NSInteger intensityLevel 抖动等级 <br />NSInteger utc 运动等级 <br />double voltage 电压值 
<a name="e71bb45c"></a>
### LSHeightData（升高数据）
NSUInteger userNumber 用户编号 <br />double height
<a name="c0091535"></a>
### LSKitchenScaleData（厨房秤重量）
double weight 物体重量 <br />NSInteger sectionWeight 单位为 LB 和 ST 时前段的数值 
<a name="f9469969"></a>
### LSSphygmometerData（血糖数据）
Float concentration 浓度值
<a name="5e98a9bc"></a>
### LSBloodGlucoseData（血压数据）
NSUInteger userNumber 用户编号 <br />double systolic 收缩压 <br />double diastolic 舒张压 <br />double pulseRate 心率 
<a name="4d49996d"></a>
### LSWeightAppendData（体重分析数据）
NSUInteger userNumber 用户编号 <br />double basalMetabolism 基础代谢 <br />double bodyFatRatio 脂肪率 <br />double bodyWaterRatio 身体水分含量 <br />double muscleMassRatio 肌肉重量比 <br />double boneDensity 骨质密度 <br />double imp 阻抗 <br />double protein 蛋白质含量 <br />double bmi BMI 指数 <br />double visceralFat 内脏脂肪含量 
<a name="97f90b03"></a>
### LSWeightData（体重数据）
NSUInteger userNumber 用户编号 <br />double weight 体重值 <br />double resistance_1 电阻值 1 <br />double resistance_2 电阻值 2 <br />BOOL hasAppendMeasurement 是否有附加的脂肪测量数据包 <br />double voltageData 电压值 <br />double lbWeightValue 体重值（以 LB 为测量单位） <br />double stWeightValue 体重值小数部分（以 ST 为测量单位） <br />NSUInteger stSectionValue 体重值整数部分（以 ST 为测量单位） 
<a name="ecfdb81e"></a>
### LSUHearRate（心率数据）
NSArray<NSNumber *> heartRateList 心率数据的集合 <br />NSData srcData 心率原始数据 
<a name="bbb28cd3"></a>
### LSUHRSection(心率区间)
NSUInteger hrSectionTime1 心率区间 I，累计时间，单位为：s(秒) <br />NSUInteger hrSectionTime2 心率区间 II，累计时间，单位为：s(秒) <br />NSUInteger hrSectionTime3 心率区间 III，累计时间，单位为：s(秒)
<a name="483ecf18"></a>
### LSDeviceHeartRateAlertInfo（心率预警设置）
NSUInteger minHeartRate 最小心率 <br />NSUInteger maxHeartRate 最大心率 <br />BOOL isEnable 是否启用
<a name="a61003e7"></a>
### LSHeartbeatData
NSUInteger timeOffset 时间偏移量<br />NSUInteger value G-Sensor Data
<a name="9a8a7cf7"></a>
### LSDeviceHeartbeatData（心率数据）
NSUInteger unsentDataCount 未发送的心跳数据数量 <br />NSUInteger currentDataCount 当前发送的心跳数据数量 <br />NSArray<LSHeartbeatData *> heartbeatDatas 心跳数据集合 
<a name="fffd0758"></a>
### LSUSleepData（睡眠原始数据）
NSNumber sleepLevel 睡眠状态（每 5 分钟一个状态） <br />NSArray<NSNumber *> statusList 睡眠状态列表 <br />NSData srcData 睡眠原始数据 
<a name="2829293b"></a>
### LSUSportData（运动数据）
LSDeviceSportMode sportsMode 运动模式 <br />LSDeviceSportSubMode sportSubMode 运动子模式 <br />int time 跑步时间 <br />int step 跑步总步数 <br />double calories 最大卡路里 <br />int maxHR 最大心率 <br />int avgHR 平均心率 <br />int maxStepFreq 最大步频 <br />int avgStepFreq 平均步频 <br />NSArray<LSStepFreqInfo *> stateList 跑步状态，如开始、暂停、开始 
<a name="5b9c0deb"></a>
### LSUSportState(运动状态数据)
int state 运动状态，0x00 表示开始，0x01 表示结束
<a name="cf4e566c"></a>
### LSAutomaticSportstypeModel（自动识别设置）
LSAutomaticSportstype type 自动识别的运动类型 <br />BOOL isOpen 是否启用 
<a name="4a61e9b7"></a>
### LSUCaloriesData（运动卡路里数据）
NSArray<NSNumber *> calorieList 表示跑步卡路里数据的集合 <br />NSData srcData 跑步卡路里的原始数据 <br />

<a name="k1lag"></a>
### LSScaleWifiModel (蓝牙wifi双模秤扫描wifi回调Model)
NSArray <LSScaleWifiModelItem *> *wifiModelAry;   <br />LSScaleWifiModelItem sidName:wifi名称 bssid：wifi对应字段

<a name="U7ooh"></a>
### LSScaleConnectWifiResult （蓝牙wifi双模秤wifi连接结果回调）
BOOL connectState; 成功YES 失败NO

<a name="BjLc5"></a>
### LSScaleRestConnectWifiResult （蓝牙wifi双模秤wifi连接结果回调）
BOOL restConnectState; 成功YES 失败NO

<a name="hrbsO"></a>
### LSScaleWifiStateModel （蓝牙wifi双模秤wifi连接结果回调）
BOOL connectState; 成功YES 失败NO<br />NSString *ssidName; WiFi名称<br />NSString *bssid
<a name="1dfd4007"></a>
# 算法分析
<a name="5aacebc3"></a>
## 体重算法

- 描述：FDA计算公式，根据电阻值、用户身高、体重、性别、年龄、运动员等级计算身体成分数据项，如脂肪率、水分含量、骨质含量、基础代谢等
- 接口：LSBluetoothManager#calculateBodyCompositionData
- 参数：

① double resistance 电阻值<br />② LSProductUserInfo *userInfo 用户信息

- 返回值：LSWeightAppendData 身体成分数据

**想要更多身体指标算法分析数据请接入：hezuo.lifesense.com**
<a name="df1ce97d"></a>
## 睡眠分析算法
**想要更多睡眠算法分析结果请接入：hezuo.lifesense.com**

