<a name="Lvop0"></a>
# 介绍
<a name="J3EzZ"></a>
## 关于mini版
mini版本是从 [android蓝牙SDK](https://docs.leshiguang.com/develop-native/android/bluetooth) 中演变过来的新版本， 是我们对代码进行了重新设计和优化后的版本，新版本删除了老版本中多种不再生产和维护的设备协议代码，降低了开发者的维护和对接成本，同时对设备的连接速度和稳定性层面有较大提升。目前mini版本仅支持A5、A6协议的设备，其它协议正在陆续支持中
<a name="fXbDw"></a>
## 支持的设备
支持设备清单：[https://docs.leshiguang.com/develop-native/apply?id=%e6%94%af%e6%8c%81%e8%ae%be%e5%a4%87](https://docs.leshiguang.com/develop-native/apply?id=%e6%94%af%e6%8c%81%e8%ae%be%e5%a4%87)
<a name="zHJbS"></a>
## 支持的功能
硬件支持功能清单： [https://docs.leshiguang.com/FAQ/devicefeature](https://docs.leshiguang.com/FAQ/devicefeature)<br />请开发者参考自身接入的设备类型进行开发，勿使用设备不支持的功能
<a name="i9Pmn"></a>
# 接入申请
接入申请方式：[https://docs.leshiguang.com/develop-native/apply](https://docs.leshiguang.com/develop-native/apply)
<a name="njsPz"></a>
# 快速集成
<a name="RHFUx"></a>
## 蓝牙SDK下载
| 版本 | 下载地址 | 更新日志 |
| --- | --- | --- |
| 1.0.0 | [bluetooth-mini-1.0.0.jar](https://github.com/leshiguang/maven-repository/packages/575505) | 初始版本 |
| 1.0.6 | [bluetooth-mini-1.0.6.jar](https://github.com/leshiguang/maven-repository/packages/575505) | 新增功能: 电量读取,退出登录释放资源, 自定义消息提醒<br />依赖删除:guava, fastjson<br />双端对齐:对齐iOS的api功能, 对齐iOS的字段名称 |
| 1.0.7 | [bluetooth-mini-1.0.7.jar](https://github.com/leshiguang/maven-repository/packages/575505) | 新增功能<br />增加天气信息获取接口 |
| 1.0.8 | [bluetooth-mini-1.0.8.jar](https://github.com/leshiguang/maven-repository/packages/575505) | 修复已知bug |
| 1.0.9 | [bluetooth-mini-1.0.9.jar](https://github.com/leshiguang/maven-repository/packages/575505) | 获取天气接口增加adCode参数<br />测量数据增加DeviceInfo对象<br />修复已知bug |
| 1.1.0 | [bluetooth-mini-1.1.0.jar](https://github.com/leshiguang/maven-repository/packages/575505) | 增加双模秤蓝牙配网接口能力 |



<a name="LVJNh"></a>
## 项目依赖配置
1、拷贝下载的SDK到项目的libs文件夹中<br />2、在module的build.gradle中添加本地仓库地址：
```groovy
repositories {
    flatDir {
        dirs 'libs'
    }
}
```
3、在项目的build.gradle中添加依赖：
```groovy
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    api 'com.annimon:stream:1.2.1' // 实现Collection的stream操作
  	api 'io.reactivex.rxjava2:rxjava:2.2.8'
    api 'io.reactivex.rxjava2:rxandroid:2.1.1'

```
4、在AndroidManifest.xml 进行权限和通知栏监听服务申明
```xml
//蓝牙通信所需权限
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission-sdk-23 android:name="android.permission.ACCESS_COARSE_LOCATION"/>

//ANCS需要的权限
 <!--  读取短信权限 -->
 <uses-permission android:name="android.permission.READ_SMS"/>
 <!--  读取联系人  -->
 <uses-permission android:name="android.permission.READ_CONTACTS"/>
 <!--  拨打电话  -->
 <uses-permission android:name="android.permission.CALL_PHONE"/>
 <!--  读取电话状态  -->
 <uses-permission android:name="android.permission.READ_PHONE_STATE"/> 
//网络相关权限
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
<application>
				<service
            android:name="com.lifesense.android.ble.core.application.service.DefaultNotificationListenerService"
            android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE" >
            <intent-filter>
                <action android:name="android.service.notification.NotificationListenerService" />
            </intent-filter>
        </service>
 <application>
```
<a name="3nb51"></a>
## SDK初始化
要使你的程序启动能正常运行SDK，必须先进行初始化。如下图所示，将你的应用 id 注册到SDK。注册函数示例如下图所示：
```java
import com.lifesense.android.ble.core.application.BleDeviceManager

private static final String APP_ID = "lx12345678";

private void initSDK() {
    //数据接收回调
     Consumer<List<AbstractMeasureData>> receiver = new Consumer<List<AbstractMeasureData>>() {
            @Override
            public void accept(List<AbstractMeasureData> abstractMeasureData) {
                Log.i("Data", JSON.toJSONString(abstractMeasureData));
            }
        };
    //初始化sdk
	 BleDeviceManager.getDefaultManager().init(this, APP_ID,PreferenceStorage.getBondedMac(),receiver);
}
```
参数说明<br />context：App上下文<br />appid：应用ID<br />bondedMacs：已经绑定设备的mac地址<br />receiver：测量数据接收回调
<a name="esHK0"></a>
## 接入demo
[https://github.com/leshiguang/bluetooth-mini-ui](https://github.com/leshiguang/bluetooth-mini-ui)
<a name="Oh4zi"></a>
# 功能使用
<a name="yKb3w"></a>
## 设备管理
<a name="Fqot8"></a>
### 发现设备
在对设备进行绑定操作前，首先需要调用search接口获取DeviceInfo对象
```java
 public void search(int timeoutMills, Consumer<DeviceInfo> consumer)；
```
参数说明：<br />timeoutMills:搜索超时时长<br />consumer:搜索结果回调<br />
<br />**DeviceInfo**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| deviceName | String | 设备名称 |
| mac | String | 设备mac地址 |
| rSSI | int | 广播信号强度 |
| deviceId | String | 设备Id |
| sn | String | 设备sn |
| modelNumber | String | 设备型号 |
| softwareVersion | String | 软件版本 |
| handwareVersion | String | 硬件版本 |
| firmwareVersion | String | 固件版本 |
| manufactureName | String | 制造商 |
| registerStatus | int | 设备注册状态（0:未注册 1:已注册） |
| manufactureId | String | 厂商Id |
| protocolType | ProtocolType | 通信协议类型 |
| dviceType | DeeviceType | 设备类型 |
| randomNumber | String | 配对过程产生的随机数 |
| batteryInfo | BatteryInfo | 电池信息 |

**<br />**ProtocolType**

| A5 | A5协议（一般是手环的协议） |
| --- | --- |
| A6 | A6协议（一般是体脂秤血压计协议） |

**DeviceType**

| Bracelet | 手环 |
| --- | --- |
| FatScale | 体脂秤 |
| BloodPressure | 血压计 |

<a name="L4xoL"></a>
### 绑定设备
绑定后设备信息建议缓存在本地，除非app卸载重装或者用户解绑否则不用再次绑定，绑定信息也可以在云端进行永久存储
```java
public void bind(DeviceInfo deviceInfo, BindReceiver bindReceiver)
```
参数说明:<br />deviceInfo:设备信息对象，从搜索接口获取<br />bindReceiver：绑定流程回调<br />
<br />**BindReceiver**：

| 回调 | 参数 | 描述 |
| --- | --- | --- |
| onReceiveRadomNumberRequest | 无 | 收到随机数配对请求回调 |
| onReceiveBindState | bindState | 绑定状态回调 |
| onReceiveDeviceIdRequest | 无 | 收到写DeviceId请求回调（A6协议有用） |

**BindState：**

| BIND_SUCCESS | 绑定成功 |
| --- | --- |
| ILLEGAL_DEVICE_RANDOM_NUMBER | 设备返回随机数非法 |
| ILLEGAL_USER_RANDOM_NUMBER | 用户输入的随机数非法 |
| INVALID_DEVICE | 无效设备 |
| AUTHORIZATION_FAILED | 鉴权失败 |
| RANDOM_NUMBER_MISS_MATCH | 随机数不匹配 |

<a name="FYCJX"></a>
#### 输入随机数
在收到绑定流程回调onReceiveRadomNumberRequest时调用
```java
public void inputRandomNumber(String mac, String randomNumber)
```
参数说明<br />mac：设备mac地址<br />randomNumber：从用户获取随机码，需要和设备上显示的匹配
<a name="nR04z"></a>
### 添加已绑定的设备MAC
从云端或者缓存同步已经绑定的设备，在初始化接口传入
<a name="V638D"></a>
### 解绑设备
解绑后会删除缓存的设备信息并断开蓝牙连接，建议在此清除本地或者云端存储的设备信息
```java
public boolean unBind(String mac)
```
参数说明：<br />macs：已绑定设备的mac地址
<a name="lpTrY"></a>
### 获取电量信息
设备绑定并连接后成功后可以在DeviceInfo中获取电量信息（上次获取的电量信息，非最新），如果要获取最新的电量信息可以在设备连接后通过下面接口主动获取
```java
public void readBatteryInfo(String mac, Consumer<BatteryInfo> receiver)
```
参数说明：<br />mac：绑定的设备mac地址<br />receiver：电量信息回调<br />
<br />BatteryInfo

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| voltage | float | 电池电压 |
| utc | long | 电量信息更新时间 |
| batteryPercent | int | 电量百分比 |

<a name="HpGjD"></a>
## 设置
<a name="WnXYf"></a>
### 更新设置
手环出厂会有默认的设置，如果需要修改默认的设置项，可以调用以下接口
```java
public void updateConfig(String mac, AbstractConfig config, Consumer<ConfigStatus> configStatusConsumer)
```
参数说明：<br />mac：设备mac地址  <br />config：具体的设置项（详见下面的表格）<br />configStatusConsumer：设置状态回调<br />
<br />ConfigStatus

| DEEVICE_NOT_CONNECTED | 设备未连接 |
| --- | --- |
| DEVICEE_NOT_FOND | 设备未找到 |
| SETTING_TIMEOUT | 设置超时 |
| FAILED | 设置异常 |
| REEJCT_BY_PREEVIOUS | 已经有一个正在设置的设置项 |
| SUCCESS | 设置成功 |

_注意：每次只能更新单个设置项，回调成功后才能更新下一设置，同时更新后面的设置会被忽略_
<a name="YTBSo"></a>
### 获取天气
从云端获取天气信息，可设置到手环(天气信息是由 "和风天气" 提供的付费接口, 超过调用次数需要收费, 请合理调用)
```java
public static void getWeathers(double lng, double lat, String adCode, Consumer<Weathers> receiver)
```
参数说明:<br />lng：经度<br />lat：纬度<br />adCode: adCode(中国地区编码, 中国以外的地区不适用), 可从高德地图,百度地图,腾讯地图等提供的api获取<br />receiver：数据回调<br />Weathers见设置项**天气**
<a name="98a2B"></a>
### 设置项
<a name="BxXFZ"></a>
#### 消息提醒
类名：com.lifesense.android.ble.core.application.model.config.Call

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| reminderType | ReminderType | 消息类型 |
| enable | booleean | 开关 |
| delay | int | 延时 |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationTime | int | 震动时长（0～60s） |
| vibrationLevel | int | 震动等级1（0 ～ 9） |
| bibrationLevel1 | int | 震动等级2（0 ～ 9，只有震动类型为间歇震动才有效） |
| appPackageName | String | 需要自定义提醒的应用包名（reminderType 为CUSTOM时有效） |

ReminderType

| CALL | 来电 |
| --- | --- |
| MESSAGE | 消息提醒（短信+微信） |
| DISCONNECT | 断连提醒 |
| SMS | 短信 |
| WECHAT | 微信 |
| QQ | qq |
| FACEBOOK | 脸书 |
| TWITTER | 推特 |
| LINE | line |
| GMAIL | 谷歌邮箱 |
| KAKAOTALK | kakao |
| WHATSAPP | whatsapp |
| SEWELLNESS | sewellness |
| CUSTOM | 自定义应用 |

<a name="M9uel"></a>
#### 自动识别
类名：com.lifesense.android.ble.core.application.model.config.AutoRecognitionSport

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| sportModes | List<Pair<Booleean,SportMode>> | 自动识别开关列表(SportMode详见公共数据类型->运动模式) |

<a name="jZCY7"></a>
#### 闹钟
类名：com.lifesense.android.ble.core.application.model.config.Clock

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 闹钟的顺序， 需要开发者自己计算，唯一ID |
| hour | int | 几点 |
| min | int | 几分 |
| repeatDays | Day | 重复日期（详见见公共数据类型->星期） |
| vibrationMode | ViibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | short | 震动时长（0～60秒） |
| vibrationLevel | short | 震动强度1（0～9） |
| vibrationLevel1 | short | 震动强度2（0～9，，只有震动类型为间歇震动才有效） |

<a name="76ZLA"></a>
#### 表盘
类名：com.lifesense.android.ble.core.application.model.config.DialPlate

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | DialPlateType | 表盘类型 |

DialPlateType

| FIRST | 表盘1 |
| --- | --- |
| SECOND | 表盘2 |
| THIRD | 表盘3 |
| FOURTH | 表盘4 |
| FIFTH | 表盘5 |
| SIXTH | 表盘6 |

_注：hr2只有5种类型，传入SIXTH和传入FIRST相同_
<a name="4UtDS"></a>
#### 佩戴方式
类名：com.lifesense.android.ble.core.application.model.config.Direction

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 佩戴方式类型（0:横，1:竖） |

<a name="wTIhS"></a>
#### 事件提醒（带标签的闹钟提醒）
类名：com.lifesense.android.ble.core.application.model.config.EventReminder

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 事件提醒的索引， 需要开发者自己计算，唯一ID （最多5个提醒） |
| content | String | 提醒内容 |
| enable | boolean | 开关 |
| hour | int | 提醒时间的小时 |
| min | int | 提醒时间的分钟 |
| repeatDays | List<Day> | 重复日期（详见见公共数据类型->星期） |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动等级1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动等级2<br />共分10级，0～9,只在震动类型为间歇震动的情况下有效 |

<a name="iZHd5"></a>
#### 心率预警
类名：com.lifesense.android.ble.core.application.model.config.HeartRateAlert

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| rangeLeft | int | 心率区间I下限 |
| rangeRight | int | 心率区间I上限 |

<a name="day7j"></a>
#### 心率区间
类名：com.lifesense.android.ble.core.application.model.config.HeartRateRange<br />_通过用户年龄计算心率区间，push 心率区间到手环_

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| age | int | 年龄 |
| rangeILeft | int | 心率区间I下限 |
| rangeIRight | int | 心率区间I上限 |
| rangeIILeft | int | 心率区间II下限 |
| rangeIIRight | int | 心率区间II上限 |
| rangeIIILeft | int | 心率区间III下限 |
| rangeIIIRight | int | 心率区间III上限 |

<a name="AdWfq"></a>
#### 智能心率监测
类名：com.lifesense.android.ble.core.application.model.config.HeartRateSmartSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| mode | Mode | 监测模式 |

Mode：

| CLOSE | 关闭 |
| --- | --- |
| ENABLE | 打开 |
| SMART | 打开智能心率监测 |

<a name="AYjcy"></a>
#### 心率开关
类名：com.lifesense.android.ble.core.application.model.config.HeartRateeSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| isSection | boolean | 是否时间段开关 |
| startHour | int | 时间段的开始时间小时 |
| startMins | int | 时间段的开始时间分钟 |
| endHour | int | 时间段的结束时间小时 |
| endMins | int | 时间段的结束时间分钟 |

<a name="Y8ytZ"></a>
#### 语言
类名：com.lifesense.android.ble.core.application.model.config.Language

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| labguageCode | LanguageCode | 语言代码（详见见公共数据类型->语言代码） |



<a name="JOpGW"></a>
#### 久坐提醒
类名：com.lifesense.android.ble.core.application.model.config.LongSit

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| index | int | 事件提醒的索引， 需要开发者自己计算，唯一ID  |
| startHour | int | 提醒开始时间的小时 |
| startMins | int | 闹钟开始时间分钟 |
| endHour | int | 闹钟开始时间的小时 |
| endMins | int | 闹钟开始时间的分钟 |
| duration | int | 多久不动提醒（分钟） |
| repeatDays | List<Day> | 重复日期（详见公共数据类型->星期） |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动强度1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动强度2<br />共分10级，0～9 |

<a name="PXf1Q"></a>
#### 防丢
类名：com.lifesense.android.ble.core.application.model.config.Lost

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |

<a name="QLaKP"></a>
#### 夜间模式
类名：com.lifesense.android.ble.core.application.model.config.NightMode

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| startHour | int | 开始时间小时 |
| startMins | int | 开始时间分钟 |
| endHour | int | 结束时间小时 |
| endMins | int | 结束时间分钟 |

<a name="FLZ3J"></a>
#### 自定义屏幕
类名：com.lifesense.android.ble.core.application.model.config.Page

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| pageTypes | List<PageType> | 页面类型（最多设置11个） |

PageType

| TIME | 时间 |
| --- | --- |
| STEP | 步数 |
| COLORIE | 卡路里 |
| DISTANCE | 距离 |
| HEARTRATE | 心率 |
| RUNNING | 跑步 |
| WALKING | 健走 |
| CYCLING | 骑行 |
| SWIMMING | 游泳 |
| _BODY_BUILDING_ | 健身 |
| CLIMBING | 登山 |
| DAILY_DATA | 日常数据（hr2 没有） |
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
| GAMING | 电竞 hr2 没有） |
| AEROBICS_RUN_12MINS | 有氧能力12分钟跑 |
| AEROBIC_WALK_6MINS | 有氧能力6分钟走 |
| ALIPAY | 支付宝 |
| FITNESSDANCE | 健身舞 |
| TAIJI | 太极 |

<a name="JkGNy"></a>
#### 勿扰模式
类名：com.lifesense.android.ble.core.application.model.config.Slience

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| isEnableRaise | boolean | 勿扰模式下是否允许抬手亮屏 |
| startHour | int | 开始小时 |
| startMins | int | 开始分钟 |
| endhour | int | 结束小时 |
| endMins | int | 结束分钟 |

<a name="TugP0"></a>
#### 运动控制
类名：com.lifesense.android.ble.core.application.model.config.SportControl

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| sportMode | SportMode | 运动模式（详见公共数据类型->运动模式） |
| start | boolean | 开始（true）结束（false） |



<a name="GgwxK"></a>
#### 运动心率区间
类名：com.lifesense.android.ble.core.application.model.config.SportHeartRange

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| left | int | 区间下限 |
| right | int | 区间上限 |

<a name="5KswH"></a>
#### 运动设置
类名：com.lifesense.android.ble.core.application.model.config.SportSetting

| 字段1 | 字段类型 | 描述 |
| --- | --- | --- |
| pace | short | 配速 （unit：s）  |
| distance | int | 距离 （单位：米） |

<a name="YkYwM"></a>
#### 步数目标
类名：com.lifesense.android.ble.core.application.model.config.StepEncourage

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| step | int | 步数目标值 |

<a name="aMEPz"></a>
#### 游泳
类名：com.lifesense.android.ble.core.application.model.config.SwimPool

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| channelLength | int | 泳道长度 （单位：米） |

<a name="np9lL"></a>
#### 目标
类名：com.lifesense.android.ble.core.application.model.config.TargetEncourage

|  |  |  |
| --- | --- | --- |
| enable | boolean | 开关 |
| targetType | int | 目标类型（1、步数 2、卡路里 3、距离） |
| target | int | 目标值 <br />单位：(步数:步、卡路里：0.1KCal、距离：米 ） |

<a name="cE1tI"></a>
#### 时间制式
类名：com.lifesense.android.ble.core.application.model.config.TimeFormat

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 制式类型 （0：24小时制<br />1：12小时制） |

<a name="xIC8o"></a>
#### 佩戴方式
类名：com.lifesense.android.ble.core.application.model.config.Wearing

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 0：左手 1：右手 |

<a name="GoNnv"></a>
#### 天气
com.lifesense.android.ble.core.application.model.config.Weathers

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| updateTime | int | 天气更新的<br />UTC(秒)（ 天气获取时刻的时间，不是手机系统的时间） |
| weatherList | List<Weather> | 天气列表 |

Weather

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| weatherState | WeatherState | 天气状态（详见下面表格） |
| temperatureLow | int | 最低温度 |
| temperatureHigh | int | 最高温度 |
| aqi | int | aqi(空气质量指数) |

WeatherState

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



<a name="hjZxr"></a>
## 数据接收


<a name="bNBbU"></a>
### 注册回调
可通过初始化时传入的consumer参数来获取设备测量数据，需要注意的是BleDeviceManager是个单例，除非主动调用releaseResource，或者进程被杀掉，否则只有首次注册的回调有效。<br />Coumuser

| 回调 | 参数 | 描述 |
| --- | --- | --- |
| accept   |  List<AbstractMeasureData> | 数据项列表 (详见下面的测量数据项) |

<a name="7FQpO"></a>
### 测量数据项
<a name="b4uQ2"></a>
#### 卡路里 
类名：com.lifesense.android.ble.core.application.model.Calorie    

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量起始时间 单位：s |
| sportMode | SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | int | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| utcOffset | int | UTC 偏移量  单位：s |
| reside | int | 手环配速数据剩余条数 |
| calories | List<Short> | 卡路里列表， utcOffset时间内消耗的卡路里 单位 cal |

<a name="hGM2u"></a>
#### 日常监测数据
类名：com.lifesense.android.ble.core.application.model.DailyMeasureData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 数据类型(1：总数据、2：小时数据) |
| step | int | 步数 |
| exerciseAmount | double | 运动量 （保留字段暂时没有用到） |
| calories | double | 卡路里 单位：kCal |
| exerciseTime | int | 运动时长 |
| distance | int | 距离 单位：m |
| voltage | int | 电压 |
| status | int | 电量、运动等级 |

<a name="cOKad"></a>
#### 心率
类名：com.lifesense.android.ble.core.application.model.HeartRate

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 心率类型（0:一般心率、1:实时心率、2:运动心率） |
| utc | int | 测量时间 |
| sportMode | SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | int | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| reside | int | 设备剩余心率的个数 |
| utcOffSet | int | 每笔心率值间隔 单位：s |
| heartRates | List<Integer> | 心率值 |

<a name="MqssK"></a>
#### 心率统计
类名：com.lifesense.android.ble.core.application.model.HeartRateStatistic

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 当天截止时间 |
| sectionITime | int | 心率区间I的统计时长 单位：s |
| sectionIITime | int | 心率区间II的统计时长 单位：s |
| sectionIIITime | int | 心率区间III的统计时长 单位：s |



<a name="DDiIZ"></a>
#### 睡眠
类名：com.lifesense.android.ble.core.application.model.Sleep

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量时间 |
| reside | int | 计步器中睡眠数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| utcOffset | int | 每笔睡眠间隔 单位：s |
| levelSet | List<Integer> | 睡眠等级 _(0 ~ 127,对应从深睡眠到浅睡眠)_ |

<a name="UZnlI"></a>
#### 配速
类名：com.lifesense.android.ble.core.application.model.Speed

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量时间 |
| sportMode | SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | int | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| utcOffset | int | 测量数据间隔时间（单位：s） |
| reside | int | 手环剩余数据 |
| speeds | List<Short> | 配速列表（_跑完1KM需要多长时间，精确到秒_） |

<a name="sbPFU"></a>
#### 运动模式状态
类名：com.lifesense.android.ble.core.application.model.SportNotify

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| requestGps | boolean | 手机功能 |
| sportStatus | int | 运动状态(0 开始 1 结束) |
| sportMode | SportMode | 运动模式(详见公共数据类型->运动模式) |

<a name="XjMXB"></a>
#### 运动报告
类名：com.lifesense.android.ble.core.application.model.SportReport

| 字段 | 字段类型 | 描述 | 支持的运动类型 |
| --- | --- | --- | --- |
| utc | int | 测量时间 |  |
| sportMode | SportMode | 运动模式(详见公共数据类型->运动模式) |  |
| subMode | int | 运动子模式（0, 手动 1 自动识别 2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |  |
| suspendTimes | int | 暂停次数 | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| states | List<SportState> | 运动状态(详见公共数据类型->跑步状态) | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| exerciseTime | int | 运动时长（不包括暂停数据）（没有测量到数据为-1） | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| step | int | 总步数（没有测量到数据为-1） | 跑步、健走、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| calories | int | 消耗卡路里（没有测量到数据为-1） | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| maxHr | int | 最大心率（没有测量到数据为-1） | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| avgHr | int | 平均心率（没有测量到数据为-1） | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| maxStepFreq | int | 最大步频（没有测量到数据为-1） | 跑步、健走、健身、跑步机、椭圆机、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| avgStepFreq | int | 平均步频（没有测量到数据为-1） | 跑步、健走、健身、跑步机、椭圆机、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| maxSpeed | int | 最大速度（没有测量到数据为-1） | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| avgSpeed | int | 平均速度（没有测量到数据为-1） | 健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| distance | int | 距离（没有测量到数据为-1） | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| laps | int | 游泳圈数（没有测量到数据为-1） | 游泳 |

<a name="pj3SU"></a>
## 
<a name="kdx5k"></a>
## 公共数据类型
<a name="VDvqn"></a>
### 语言代码(LanguageCode)
| CHINESE_CN | 中文简体 |
| --- | --- |
| CHINESE_TW | 中文繁体 |
| ENGLISH | 英语 |
| JAPANESE | 日语 |
| KOREAN | 韩语 |
| FRENCH | 法语 |

<a name="qSE03"></a>
### 运动模式(SportMode)
| RUNING | 跑步 |
| --- | --- |
| HEALTH_WALKING | 健走 |
| RADING | 骑行 |
| SWIMMING | 游泳 |
| BODYBUILDING | 健身 |
| NEW_RUNNING | 新的跑步 |
| TREADMILL | 跑步机（室内跑） |
| ELLIPTICAL | 椭圆机 |
| AEROBIC | 有氧 |
| BASKETBALL | 篮球 |
| FOOTBALL | 足球 |
| BADMINTON | 羽毛球 |
| VOLLEYBALL | 排球 |
| PINGPONG | 乒乓球 |
| YOGA | 瑜伽 |
| E_SPORT | 电竞 |
| AEROBICS_RUN_12MINS | 有氧能力12分钟跑 |
| AEROBICS_WALKING_6MINS | 有氧能力6分钟走 |
| DANCE | 健身舞 |
| TAIJI | 太极 |

<a name="vPfZX"></a>
### 震动类型(VibrationMode)
| CONTINUOUS_VIBRATION | 持续震动 |
| --- | --- |
| INTERMITTENT_VIBRATION1 | 间歇震动，震动强度不变 |
| INTERMITTENT_VIBRATION2 | 间歇震动，震动强度由小变大 |
| INTERMITTENT_VIBRATION3 | 间歇震动，震动轻度由大变小 |
| INTERMITTENT_VIBRATION4 | 间歇震动，震动强度大小循环 |

<a name="FEFs5"></a>
### 运动状态(SportState)
| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| start | int | 运动开始时间 |
| end | int | 运动暂停（结束）时间 |

<a name="sNlwC"></a>
### 星期(Day)
| MONDAY | 星期一 |
| --- | --- |
| TUESDAY | 星期二 |
| WENDNESDAY | 星期三 |
| THURSDAY | 星期四 |
| FRIDAY | 星期五 |
| SATURDAY | 星期六 |
| SUNDAY | 星期日 |

<a name="G9GRF"></a>
# 常见问题
乐智云平台蓝牙设备接入帮助地址：[https://docs.leshiguang.com/FAQ/README](https://docs.leshiguang.com/FAQ/README)<br />
<br />


