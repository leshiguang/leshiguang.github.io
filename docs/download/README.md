<a name="Yb1Si"></a>
# 蓝牙SDK下载
<a name="Hdjtv"></a>
## iOS
| 版本 | 下载地址 | 更新日志 |
| --- | --- | --- |
| 1.5.0 | [LSDeviceBluetooth-1.5.0](http://qi4q5rivb.hn-bkt.clouddn.com/LSDeviceBluetooth-1.5.0.zip) | 新增支持GBF-2008型号体脂秤<br />新增通过蓝牙配置设备网络能力 |
| 1.4.9 | [LSDeviceBluetooth-1.4.9](http://qi4q5rivb.hn-bkt.clouddn.com/LSDeviceFramework-1.4.9.zip?e=1602749788&attname=&token=fCj0mxPVEsXXpyTOBQ32smvgMng0P-pLEc6rpY94:zCTUd22fpNnNXnhRlNogaqOi7HI=) | 更改targetSDK版本 |
| 1.4.8 | [LSDeviceBluetooth-1.4.8](http://qi4q5rivb.hn-bkt.clouddn.com/LSDeviceBluetooth-V1.4.8.zip) | 新增下发设备时区逻辑 |
| 1.4.5 |  | 新增设备接入鉴权逻辑，对设备合法性进行校验 |
| 1.4.4 |  | 在厨房秤测量数据中，新增正值重量与负值重量状态属性 |
| 1.4.3 |  | 新增 128 位 UUID 广播数据解析支持。<br />修复设备 Web Coach Control 的连接问题 |
| 1.4.2 |  | 新修复 UTC 为 0 的问题 |
| 1.4.1 |  | 新增日本日历支持，修复日历时间转换问题 |
| 1.4.0 |  | 新增设备 UUID(e492c1fb-2466-4749-ab37-69433d2d7846)支持 |
| 1.3.9 |  | 新增 A6 血压计设备绑定、数据同步功能实现。<br />新增 A6 设备自动注册设置功能 |
| 1.3.8 |  | 修复 iOS 13 因 NSData 与 NSString 格式异常，导致的连接问题。 |
| 1.3.7 |  | 新增 mambo HR 2 喝水、加餐、睡觉提醒设置功能。<br />修改事件提醒设置对象，新增提醒类型设置 LSRminderType。 |
| 1.3.6 |  | 新增 M5/M5S 游泳运动模式支持。<br />修复 1014B 血压计在发送历史数据时，出现的频繁断连问题 |
| 1.3.5 |  | 修复 A6 互联秤广播名解析错误问题 |
| 1.3.4 |  | 修复广播名为空时出现的解析异常 |
| 1.3.3 |  | 修复闹钟设置个数>3 时，引起的内存溢出问题 |
| 1.3.2 |  | 新增设备 H-402 蓝牙广播数据包中的心率数据解析 |
| 1.3.1 |  | 新增标准协议蓝牙血压计支持 |
| 1.3.0 |  | 新增 A2\A3 血压计测量状态解析支持。 |
| 1.2.9 |  | 修复 A6 产品 UTC 转换错误的问题。<br /> 新增支持可选项设置的系统蓝牙初始化设置接口。 |
| 1.2.8 |  | 新增 BluetoothPeripheral Usage 使用设置描述 |
| 1.2.7 |  | 新增 M5 手环支持。<br />新增 M5 手环支付宝、太极拳、健身舞等页面设置功能。<br /> 新增 M5 手环的勿扰模式设置功能。<br />新增 M5 手环太极拳、健身舞运动模式支持 |
| 1.2.6 |  | 新增 Kchiing 设备四种类型的提醒设置功能（KCIAppointmentReminder、KCISimpleReminder、 KCIMessageReminder、KCIWakeupReminder） |
| 1.2.5 |  | 新增 S9 互联秤用户信息((LSScaleUserInfo.h)设置功能接口。 |
| 1.2.4 |  | 新增心情手环支持。<br /> 新增心情记录提醒设置功能。<br />新增 DMD 自定义 A3 协议产品，如 380 (GBF-1251-B), 382 (GBF-1270-B1), 385 (GBF-1270-F)。<br /> 新增 Device ID 与 Device SN 转换方法。 |
| 1.2.3 |  | 修复 428（Mambo3）设备电量百分比解析错误的问题。<br />在 GPS 连接状态下的运动中，新增运动配速、距离设置接口。 |
| 1.2.2 |  | 新增多运动模式支持，如足球、篮球、排球、电竞等。<br />新增有氧运动 12 分钟跑支持。<br />新增 A6 互联秤实时测量数据解析。<br />新增根据 deviceId 建立连接处理机制。 |
| 1.2.1 |  | 新增设备提示信息推送接口，如推送健康分数、手机拍摄信息、手环定位信息等。<br />新增远程控制命令解析。 |
| 1.2.0 |  | 修复旧固件设备电量百分比解析错误的问题。 |
| 1.1.9 |  | 在读取设备电量信息接口，新增电量百分比返回。 |
| 1.1.8 |  | 修复手环周目标类型及周目标设置错误的问题。<br />新增设备行为提醒设置功能，如喝水提醒等。<br />新增多运动模式支持，如骑行、健走等。 |
| 1.1.7 |  | 新增 addWeekDay:(LSWeek)weekDay 方法。<br />修复在 Swift 中无法调用 Objective-C 可变参数的接口方法问题 |
| 1.1.6 |  | 新增自定义 A6 秤的 Service UUID:20568521-5ACD-4C5A-9294-EB2691C8B8BF。<br />新增 A6 秤的固件升级功能 |
| 1.1.5 |  | 新增 FDA 公式计算接口 |
| 1.1.4 |  | 优化设备重连处理机制，提高连接稳定性。<br />修复设备升级失败后，无回调的问题。<br />新增血糖仪微信协议，支持使用该协议的血糖仪设备接入。<br />添加 BitCode 支持。 |
| 1.1.3 |  | 修复部分型号的设备在升级过程中，升级进度返回错误的问题<br />新增设备功能开关设置接口，支持心跳数据采集开关设置 |
| 1.1.2 |  | 修复 MamboHR、Mambo、My Mambo 升级失败的问题 |
| 1.1.1 |  | 修复微信协议初始化回包失败的问题 |
| 1.1.0 |  | 修复设备连接断开后，重连失败的问题。<br />新增互联协议(A6)设备支持。<br />新增 ziva plus 功能接口支持，如设置表盘样式、事件提醒、目标鼓励、天气、心率预警、语言、 运动信息（配速、距离）、游泳信息等 |
| 1.0.9 |  | 修复部分旧协议产品（A2、A3）deviceSn 解析错误的问题。 |
| 1.0.8 |  | 修复广播名过滤规则 LSBroadcastNameMatchEquals 无效的问题。<br />修复设备删除后，重复出现重连的问题 |
| 1.0.7 |  | 修改身体成分数据 BasalMetabolism 的解析方式，由 SFloat 转 uint16。 |
| 1.0.6 |  | 在搜索模式或数据同步模式下，新增设置设备过滤规则（如根据广播名过滤）功能接口。 |
| 1.0.5 |  | 修复 mambo2、ziva、mambo watch、Mambo HR 默认心率开关不正确的问题。<br />修复在 iOS 系统 9.0 以下，出现“Trapped fatal signal 'SIGNAL(5)'”的闪退问题。 |
| 1.0.4 |  | 修复手环历史步数测量数据无回调的问题。 |
| 1.0.3 |  | 新增设置设备 WIFI 密码的接口。 |
| 1.0.2 |  | 新增更新手机 GPS 状态的接口。 |
| 1.0.1 |  | 在 LSDeviceMeasureData 对象中新增设备电量百分比(batteryPercent)的返回 |
| 1.0.0 |  | LSDeviceBluetooth Framework 是一个全新的 SDK。新版本的 SDK 在旧版本的基础上，重新设 计了软件结构，修改了接口功能和相应的实现方式。引入了设备 log 日志记录功能、设备升级功能 等，支持 MamboCall、MamboHR、Mambo Watch 等新产品的固件升级。改进了蓝牙扫描，多设备同时 连接的处理过程，进一步提高了连接的稳定性与兼容性。 <br />新版本的 SDK 将支持公司全系列的蓝牙产品，如旧产品（A2、A3）的手环、体重秤、脂肪秤、 血压计、厨房秤等；新产品 Mambo、Mambo Call、Mambo HR、Mambo Watch、mambo2、ziva 等。 |



<a name="k0HAE"></a>
## Android
<br />

| 版本 | 下载地址 | 版本更新日志 |
| --- | --- | --- |
| 1.8.3 | [lifesense-ble-module-1.8.3](https://github.com/leshiguang/maven-repository/packages/184803?version=1.8.3) | 删除strings.xml app_name的定义<br />添加设备认证失败时,log日志打印信息 |
| 1.8.2 | [lifesense-ble-module-1.8.2](https://github.com/leshiguang/maven-repository/packages/184803?version=1.8.2) | 新增对GBF-2008型号的体脂支持逻辑<br />新增双模设备通过蓝牙配置网络功能 |
| 1.8.0 | [lifesense-ble-module-1.8.0](https://github.com/leshiguang/maven-repository/packages/184803?version=1.8.0) | 新增下发设备时区信息<br />新增检测设备活跃状态信息 |
| 1.7.9 | [lifesense-ble-module-1.7.9](https://github.com/leshiguang/maven-repository/packages/184803?version=1.7.9) | 删除对鉴权SDK、网络SDK的依赖 |
| 1.7.8 | [lifesense-ble-module-1.7.8](https://github.com/leshiguang/maven-repository/packages/184803?version=1.7.8) | 更新SDK代码混淆规则，保留SDK的包名，防止和其它混淆sdk的类型冲突 |
| 1.7.7 | [lifesense-ble-module-1.7.7](https://github.com/leshiguang/maven-repository/packages/184803?version=1.7.7) | 修改鉴权SDK， 使用ServiceLoader方式实现组件解耦，不强制依赖<br />删除A2\A3 延时断开指令下发根据UUID的判断条件<br />优化绑定结束后，因SDK状态重置的时序问题，导致数据同步失败 |
| 1.7.2 | [lifesense-ble-module-1.7.2](https://github.com/leshiguang/maven-repository/packages/184803?version=1.7.2) | 新增设备鉴权逻辑， 用于校验企业接入设备的合法性<br />新增github仓库作为SDK下载地址 |
| 1.5.9 |  | 新增设备 UUID (e492c1fb-2466-4749-ab37-69433d2d7846)支持. |
| 1.5.8 |  | 新增 A6 协议血压计设备绑定、数据同步功能实现<br />新增设备自动注册设置功能 |
| 1.5.7 |  | 优化手环发起 GPS 连接请求时，SDK 的处理逻辑（删除默认的状态缓存回复处理） |
| 1.5.6 |  | 新增 mambo HR 2 喝水、加餐、睡觉提醒设置功能<br />修改事件提醒设置对象信息，新增 ReminderType 提醒类型属性 |
| 1.5.5 |  | 修复 1014B 型号血压计，在发送历史数据时出现频繁断连的问题. |
| 1.5.4 |  | 添加 KchiingReminder 查询接口<br />修复 PHONT_STATE 广播引起的 NullPointerException. |
| 1.5.3 |  | 新增设备 H-402 蓝牙广播数据包中的心率数据解析 |
| 1.5.2 |  | 新增标准蓝牙协议血压计支持<br />新增来电信息默认设置功能支持 |
| 1.5.1 |  | 新增 A2/A3 血压计测量状态解析支持 |
| 1.5.0 |  | 修复部分 A3 产品蓝牙数据包解析错误的问题 |
| 1.4.9 |  | 新增 M5 手环支持<br />新增 M5 手环支付宝、太极拳、健身舞等页面设置功能<br />新增 M5 手环的勿扰模式设置功能<br />新增 M5 手环太极拳、健身舞运动模式支持 |
| 1.4.8 |  | 新增自定义扫描间隔设置接口. |
| 1.4.7 |  | 新增 Kchiing 设备四种类型的提醒设置信息（KAppointmentReminder、KMesssageReminder、<br />KSimpleReminder、KWakeupReminder）. |
| 1.4.6 |  | 新增 S9 互联秤用户信息设置功能接口 |
| 1.4.5 |  | 新增 DMD A3 协议产品支持，如 380(GBF-1251-B),382(GBF-1270-B1),385(GBF-1270-F)<br />新增从设备蓝牙广播数据包解析 deviceId、deviceSn |
| 1.4.4 |  | 修复 428（Mambo3）手环设备电量百分比解析错误的问题<br />新增 Moodbeam 手环支持<br />新增心情设置提醒功能 |
| 1.4.3 |  | 新增有氧运动 12 分跑运动模式，修改运动模式通知的回调接口<br />新增 A6 互联秤实时测量数据解析 |
| 1.4.2 |  | 新增寻找手环、远程拍照等设备提示信息设置功能<br />修复广播数据包中短广播名解析失败的问题（Shortened local name：0x08）. |
| 1.4.1 |  | 新增设备提示信息设置接口，如健康分数提示信息<br />修复互联秤(A6)用户信息设置失败的问题<br />新增自定义的应用消息提醒，如 iCare, instagram,woWgoHealth 等 |
| 1.4.0 |  | 在设备电量回调接口中，新增设备电量百分比的参数返回<br />修复部分型号的 A3 产品出现数据重复上传的问题 |
| 1.3.9 |  | 新增设备行为提醒设置信息接口 updateDeviceBehaviorReminder,如设置喝水提醒 |
| 1.3.8 |  | 修复旧固件协议出现协议版本解析错误的问题 |
| 1.3.7 |  | 修复部分型号的设备，出现来电提醒功能失效的问题 |
| 1.3.6 |  | 新增自定义 A6 秤的 Service UUID:20568521-5ACD-4C5A-9294-EB2691C8B8BF |
| 1.3.5 |  | 修复 A5 手环配对失败问题 |
| 1.3.4 |  | 修改 FDA 计算公式 |
| 1.3.3 |  | 修复 bug,优化设备连接稳定性<br />新增设备实时心率开关设置接口<br />新增设备心跳数据采集开关设置接口 |
| 1.3.2 |  | 优化多设备同时连接的稳定性<br />修复写 Log 日志信息时的 NullPointException<br />新增 ziva plus 功能接口支持，如设置表盘样式、事件提醒、目标鼓励、天气、心率预警、语言、 运动信息（配速、距离）、游泳信息等 |
| 1.3.1 |  | 优化连接稳定性，修复 bug<br />新增设备广播数据包 manufactureData 字段的解析。 |
| 1.3.0 |  | 优化代码,修复异常 bug<br />修复手机使用不同的系统语言时，DecimalFormat 引起的 NumberFormatException。<br />修复部分 A2、A3 设备在配对模式下，无法设置用户信息、闹钟提醒等问题。 |
| 1.2.9 |  | 修改身体成分数据 BasalMetabolism 的解析方式，由 SFloat 转 uint16。 |
| 1.2.8 |  | 修复 KakaoTalk App(com.kakao.talk)消息提醒无效的问题. 在搜索模式或数据同步模式下，新增设置设备过滤规则（如根据广播名过滤）功能接口。 |
| 1.2.7 |  | 新增支持 A6 协议产品（互联秤）。<br />新增注册设备 ID 接口（互联秤）。<br />新增更新设备设置信息接口（互联秤），如单位、目标、时间等。<br />新增清除设备数据的接口，仅互联秤支持。<br />新增在配对或绑定过程中输入操作指令的接口。<br />新增取消正在执行的配对或绑定操作接口。<br />新增 PairCallback.onDeviceOperationCommandUpdate 回调，用于返回设备在配对或绑定过程中上传的操作指令。 |
| 1.2.6 |  | 修复多设备同时使用时，旧协议产品（A2、A3）出现连接不稳定、或无法正常同步测量数据的<br />问题。 |
| 1.2.5 |  | 修复一些 bug，优化代码。<br />新增设置手环距离显示单位接口，如英制、公制。 |
| 1.2.4 |  | 新增设置设备 wifi 密码接口。<br />新增错误状态码 DEVICE_CONFIG_FAILURE。 |
| 1.2.3 |  | 在 PedometerData 对象中新增设备电量百分比(batteryPercent)的返回。<br />修复 parseDouble 引起的 NumberFormatException。 |
| 1.2.2 |  | 修复 A3 设备在数据同步过程中，出现断开后无法重新连接的问题。<br />修复旧协议设备在配对过程中，出现设备 SN 解析错误的问题。<br />修复部分型号的手机，出现无短信提醒的问题。<br />修改 DeviceUpgradeStatus 的属性定义。<br />修改 PedometerRunningStatus，新增 dataType 与 sportMode 属性<br />新增设置手机 GPS 状态的接口 updatePhoneGpsStatus(boolean isGpsWorking) |
| 1.2.1 |  | 修复调用接口 destoryAllResources 出现异常的问题。 |
| 1.2.0 |  | 新增释放对象实例资源接口 destoryAllResources()；<br />新增消息提醒服务接口 registerMessageService()、unregisterMessageService()；<br />修改打包 sdk 的 jar 时 protobuf 的脚本混淆问题；<br />修复解析扫描结果时出现的 NumberException；<br />修复部分手机出现 Mambo Watch ota 多次升级失败的问题。 |
| 1.0.0 |  | Android Bluetooth Module SDK 是在旧版本（lifesense_ble_vx.x.x）的基础上,重新设计了<br />SDK 的软件结构及模块功能。引入了设备空中升级模块，支持 MamboCall、MamboHR、Mambo Watch的固件升级；改进了蓝牙扫描，多设备同时连接的处理过程，进一步提高了连接的稳定性与兼容性。原旧版本的部分接口在新的 SDK 版本中，将由其他接口代替或弃用；如设备配对接口startPairing 将由 pairingWithDevice(LsDeviceInfo lsDevice,PairCallback pairCallback)代替；配对过程中的绑定用户接口 bindDeviceUser 将由 bindDeviceUser(String macAddress,int userNumber, String userName)代替；获取对象实例的接口 newInstance 将由 getInstance 代替；部分实体类与枚举类型的包名称也有所改动，在使用新的 sdk 时，需要对代码重新导入相关的引用。新版本的 SDK 将支持公司全系列的蓝牙产品，如旧协议的手环、体重秤、脂肪秤、血压计、厨房秤等，新协议的 Mambo、Mambo Call、Mambo HR、Mambo Watch 等。 |

<a name="FOGK8"></a>
# UI级SDK下载


<a name="4eUGG"></a>
## iOS
1、在podfile中添加source： [https://github.com/leshiguang/cocoapods.git](https://github.com/leshiguang/cocoapods.git)<br />2、添加依赖：pod 'LZUISDK'<br />

<a name="Dwh1l"></a>
## android
| 1.0 | <br />- [lifesense-android-common-service](https://github.com/leshiguang/maven-repository/packages/492041)<br />- [lifesense-android-webview-service](https://github.com/leshiguang/maven-repository/packages/492044)<br />- [lifesense-android-health-service](https://github.com/leshiguang/maven-repository/packages/492064)<br /> | 初始版本 |
| --- | --- | --- |




