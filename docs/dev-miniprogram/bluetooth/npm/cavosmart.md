<a name="JO0ZI"></a>
# 1、版本更新日志

<a name="p0Zj5"></a>
### 1.0.1

- 插件第一版

<a name="j2iJp"></a>
# 2、模块使用说明
<a name="Haub0"></a>
## 2.1 package声明

在package.json中声明sg-ble的引用

```json
{
    "dependencies": {
        "sg-ble": "^2.1.0",	
        "sg-cavosmart": "^1.0.1"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const plugin = require("sg-cavosmart");
```

<a name="G7Gpg"></a>
## 2.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 手环&手表
const cavosmart = require('sg-cavosmart');

plugin.regist(cavosmart);
```
<a name="aU86X"></a>
# 3、设置项

获取设置项目前支持<br />SyncSettingType.HeartRateSwitachSetting = 18<br />SyncSettingType.SedentaryReminderSetting = 2<br />SyncSettingType.EventReminderSetting = 4<br />SyncSettingType.TimeFormatSetting = 5<br />SyncSettingType.BloodPressureDisplaySwitch = 22<br />SyncSettingType.TemperatureDisplaySwitch = 23

<a name="aJaXp"></a>
### 3.1 鼓励目标

`Encourage` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| targetType | TargetType 枚举 | 运动心率检测 |
| value | number | 目标值 如果是calories 单位是（kcal） |


`TargetType` 的取值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| step | 1 | 步数 |
| calories | 2 | 卡路里 |


实例

```javascript

  settingInfo = new cavosmart.settingFactory.Encourage(1)
```

<a name="fyP8G"></a>
### 3.2 血压测量开关
<br />`BloodPressureSwitch`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 血压测量开关 |

实例

```javascript

let setting = new cavosmart.settingFactory.BloodPressureSwitch(true);
```

<a name="x5pzf"></a>
### 3.3 血压常驻开关
<br />`BloodPressureDisplaySwitch`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 0表示关，1表示开 |
| dataType | string | 固定值BloodPressureDisplaySwitchConfig，获取的时候区分设置项 |


实例

```javascript

let setting = new cavosmart.settingFactory.BloodPressureDisplaySwitch(1);
```

<a name="EyAjm"></a>
### 3.4 24小时显示开关设置
<br />`TimeFormat` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| timeFormat | number | 0：24小时，1： 12小时 |
| dataType | string | 固定值TimeFormatConfig |


实例

```javascript

  settingInfo = new cavosmart.settingFactory.TimeFormatConfig(1)
```

<a name="i7ZyR"></a>
### 3.5 心率开关
<br />`MessageReminderSwitch` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | number | enumMessageType {<br />CALL=0x01,<br />QQ = 0x03,<br />WECHAT = 0x05,<br />SMS=0x07,<br />LINE=0x09,<br />TWITTER =0x0B,<br />FACEBOOK = 0x0E,<br />MESSENGER = 0x10<br />} |
| enable | boolean | 1表示开 0表示关 |


实例

```javascript
  
  settingInfo = new cavosmart.settingFactory.MessageReminderSwitch(0x01, true);
```

<a name="kbWmi"></a>
### 3.6 久坐提醒
<br />`LongSit` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 是否开关 |
| startHour | number | 开始时间 小时 |
| endHour | number | 结束时间 小时 |
| duration | number | 多久不活动出发提醒 单位分钟 |
| repeatDay | number | 第0位表示星期一的开关... 第6bit表示星期日的开关，全0表示不重复 |


实例

```javascript
/** 构建函数
  constructor(
    enable:boolean = true,
    startHour:number = 8,
    endHour:number = 18,
    reepeatDay:number = RepeatTime.all,
    duration:number = 60,
  )
    */

  settingInfo = new cavosmart.settingFactory.LongSit(
     true, // enable:boolean
     8, // startHour:number
     18, // endHour:number 
     0b1111111, // reepeatDay:number
     60 // duration:number = 60
  )
```

<a name="pvcpN"></a>
### 3.7 闹钟
<br />`Clock` 的数据结构（全局替换，每次设置都要设置全）

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| events | EventInfo[] | 是否开关 |
| dataType | string | 固定值 ClockConfig |


`EventInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 是否开关 |
| index | number | 序号1～10    |
| hour | number | 开始时间 小时 |
| minute | number | 开始时间 分钟 |
| repeatTime | number | 第0位表示星期一的开关... 第6bit表示星期日的开关，全0表示不重 |


实例

```javascript
  let event = {
    index: 1,
    enable: true,
    hour: 23,
    minute: 0,
    repeatTime: 0b1111111,
  }
  settingInfo = new cavosmart.settingFactory.Clock([event]);
```

<a name="nnzQf"></a>
### 3.8 同步所有数据
<br />`SyncHistoryDataReq` 的数据结构 无参数 结束

| 属性 | 类型 | 说明 |
| --- | --- | --- |


实例

```javascript

  settingInfo = new cavosmart.settingFactory.SyncHistoryDataReq();

```

<a name="q8hXB"></a>
### 3.9 温度测量开关
<br />`TemperatureSwitch`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 血压测量开关 |

实例

```javascript

let setting = new cavosmart.settingFactory.TemperatureSwitch(true);
```

<a name="vakfR"></a>
### 3.10 温度功能常驻开关
<br />`TemperatureDisplaySwitch`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 0表示关，1表示开 |
| dataType | string | 固定值TemperatureDisplaySwitchConfig，获取的时候区分设置项 |


<a name="fPhIW"></a>
### 

<a name="jIOHo"></a>
## 4 测量数据
<a name="tUyAK"></a>
### 4.1 步数

`Step`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| stepsOf15min | number | 15分钟步数 |
| distanceOf15min | number | 15分钟距离 |
| caloriesOf15min | number | 15分钟卡路里 |
| utc | number | 时间戳 |
| step | number | 步数 |
| calories | number | 卡路里 |
| distance | number | 距离 |
| dataType | String | CAVOStep  固定值 |


<a name="DUpyL"></a>
### 4.2 心率数据 

`HeartRate` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| utc | number | 测量时间 |
| utcOffset | number | 每笔值间隔 单位：s |
| heartRates | number[] | 心率列表，每笔间隔时间为 utcOffset |
| dataType | string | 固定值 CAVOHeartRate |


<a name="h0i6r"></a>
### 4.3 睡眠报告

`SleepReportData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| sleepDay | number | 睡眠数据属于哪一天 |
| items | SleepItem | 睡眠数据（原始数据） |
| sleepUtc | number | 睡眠时间 Bed time |
| awakeUtc | number | 醒来时间 Get-up time. |
| durationOfAwake | number | 清醒时长 （分钟） |
| timeOfLightSleep | number | 浅睡时长 （分钟） |
| timeOfDeepSleep | number | 深睡时长 （分钟） |
| sleepList | SleepInfo[] | 睡眠数据，通过items转化而来 |
| dataType | string | 固定值 CAVOSleep |


`SleepInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| startUtc | number | 开始时间 |
| endUtc | number | 结束utc |
| deep | number | 4 : 眼动 1 : 清醒2 : 浅睡 3 : 深睡 |
| duration | number | 分钟 |


`SleepItem` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| utc | number | 时间戳 |
| deep | number | 1浅睡 2深睡 3清醒 |


<a name="yGpRA"></a>
### 4.4 运动记录 

`SportReportData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| list | Sport[] | 运动列表 |
| dataType | string | 固定值 CAVOSport |


`Sport` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| start | number | 开始时间 |
| end | number | 结束时间 |
| sportMode | number | 运动模式 参考 SportMode 枚举 |
| sportTime | number | 运动时长 |
| suspendTimes | number | 暂停次数 |
| step | number | 步数 |
| distance | number | 距离 |
| calories | number | 卡路里 |


`SportMode` 的取值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| run | 1 | 户外跑步 |
| walk | 0x02 | 健走 |
| cycling | 0x03 | 骑行 |
| runInDoor | 0x07 | 室内跑 |
| freeSport | 0x19 | 自由训练 |
| plank | 0x65 | 平板支撑 |

<a name="txRk7"></a>
### 4.5 数据接受完成

`SyncHistoryDataFinishRes` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| dataType | string | 固定值 CAVOSyncFinish |


