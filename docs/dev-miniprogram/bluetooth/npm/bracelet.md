
<a name="JO0ZI"></a>
# 1、版本更新日志

<a name="p0Zj5"></a>
### 1.0.0

- 对应插件1.0.15版本拆出来的模块

<a name="j2iJp"></a>
# 2、模块使用说明
<a name="Haub0"></a>
## 2.1 package声明

在package.json中声明sg-ble的引用

```json
{
    "dependencies": {
        "sg-ble": "^2.0.2",	
        "sg-bracelet": "^1.0.0"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const plugin = require("sg-bracelet");
```

<a name="G7Gpg"></a>
## 2.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 手环&手表
const bracelet = require('sg-bracelet');

plugin.regist(bracelet);
```
<a name="pGr3H"></a>
## <br />
<a name="aU86X"></a>
# 3、设置项

<a name="aJaXp"></a>
### 3.1 有个特殊的设置项集合类 获取设置大部分是这个对象，这个对象包含多种设置项，它既是可设置的对象，也是可获取的对象，具体类型具体看对应的指令

`MultipleSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| settings | setting[] | 运动心率检测 |
| dataType | string | SettingInfos |


`setting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| tag | number | 不同的tag代表着不同的类型 |
| value | number | 如果只有一个参数的情况下，value生效，如果不是，则看具体的设置类型 |


实例

```javascript
// 快捷屏幕设置
let value = {
    tag: 0x04,
    value: 2   
  };
  settingInfo = new bracelet.settingFactory.MultipleSetting([value])
```

<a name="fyP8G"></a>
### 3.2 心率检测

456支持获取<br />`HeartRateWarningSetting`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| sportHrSetting | object | 运动心率检测 |
| generalHrSetting | object | 常规心率检测 |


`sportHrSetting` 与 `generalHrSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| max | number | 上限 超过这个会提醒 |
| min | number | 下限 低于这个会提醒 |
| enable | boolean | 是否开启 |


实例

```javascript
let generalHr = {
    max: 80,
    min: 50,
    enable: true,
  };
  let sportHr = {
    max: 120,
    min: 81,
    enable: true
  }
let setting = new bracelet.settingFactory.HeartRateWarningSetting(sportHr, generalHr);
```

<a name="EyAjm"></a>
### 3.3 快捷屏幕 仅456支持

456支持获取<br />这个使用到了一个设置项的积累类 可以参考 `MultipleSetting`<br />`setting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| tag | number | 0x04 固定值 |
| value | number | 参考屏幕枚举 |


实例

```javascript
  let value = {
    tag: 0x04,
    value: 2
  };
  settingInfo = new bracelet.settingFactory.MultipleSetting([value])
```

<a name="i7ZyR"></a>
### 3.4 睡眠血氧开关 仅456支持

456支持获取<br />这个使用到了一个设置项的积累类 可以参考 `MultipleSetting`<br />`setting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| tag | number | 0x20 固定值 |
| value | number | 1表示开 0表示关 |


实例

```javascript
  let sleepOximetryInfo = {
    tag: 0x20,
    value: 1,
  }
  settingInfo = new bracelet.settingFactory.MultipleSetting([sleepOximetryInfo]);
```

<a name="kbWmi"></a>
### 3.5 久坐提醒

456可支持获取<br />`SedentaryReminderSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 是否开关 |
| startHour | number | 开始时间 小时 |
| startMinute | number | 开始时间 分钟 |
| endHour | number | 结束时间 小时 |
| endMinute | number | 结束时间 分钟 |
| frequency | number | 间隔多久时间 一般 60分钟 单位分钟 |
| repeatTime | number | 第0位表示星期一的开关... 第6bit表示星期日的开关，全0表示不重复 |
| vibrationType | number | 这个一般使用默认 0 0-always 1-interval 2-intervalS2L 3-intervalL2S 4-intervalLoop |
| vibrationTime | number | 提醒时长 一般默认5s |
| vibrationLevel1 | number | 震动强度 456无效 |
| vibrationLevel2 | number | 震动强度 456无效 |


实例

```javascript
/** 构建函数
  constructor(
        enable = true,
        startHour = 8,
        startMinute = 0,
        endHour = 18,
        endMinute = 0,
        frequency = 60,
        repeatTime = RepeatTime.all,
        vibrationType = VibrationType.always,
        vibrationTime = 5,
        vibrationLevel1 = 9,
        vibrationLevel2 = 9
    )
    */

  settingInfo = new bracelet.settingFactory.SedentaryReminderSetting()
```

<a name="pvcpN"></a>
### 3.6 睡眠提醒计划

支持获取，获取的有效值 只有开关与时间<br />只能支持一次设置一个<br />`NewEventRemindSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| events | EventInfo[] | 是否开关 |


`EventInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 是否开关 |
| index | number | 1～10   暂时只使用1就行 |
| type | number | 1: 喝水  2: 加餐  3: 睡觉 |
| desc | string | 是否开关 |
| hour | number | 开始时间 小时 |
| minute | number | 开始时间 分钟 |
| repeatTime | number | 第0位表示星期一的开关... 第6bit表示星期日的开关，全0表示不重复 456无效 |
| vibrationType | number | 这个一般使用默认 0 0-always 1-interval 2-intervalS2L 3-intervalL2S 4-intervalLoop 456无效 |
| vibrationTime | number | 提醒时长 最大60s |
| vibrationLevel1 | number | 震动强度 456无效 |
| vibrationLevel2 | number | 震动强度 456无效 |


实例

```javascript
  let event = {
    index: 1,
    type: 3,
    desc: "",
    enable: true,
    hour: 23,
    minute: 0,
    repeatTime: 0b1111111,
    vibrationType: 0,
    vibrationTime: 5,
    vibrationLevel1: 9,
    vibrationLevel2: 9,
  }
  settingInfo = new bracelet.settingFactory.NewEventRemindSetting([event]);
```

<a name="nnzQf"></a>
### 3.7 事件提醒（闹钟）

支持获取<br />只能支持一次设置一个<br />`EventReminderSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| events | EventInfo[] | 是否开关 |


`EventInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 是否开关 |
| index | number | 1～10   暂时只使用1就行   membo hr2只支持1～5 |
| type | number | 1: 喝水  2: 加餐  3: 睡觉 |
| desc | string | 是否开关 |
| hour | number | 开始时间 小时 |
| minute | number | 开始时间 分钟 |
| repeatTime | number | 第0位表示星期一的开关... 第6bit表示星期日的开关，全0表示不重复 456无效 |
| vibrationType | number | 这个一般使用默认 0 0-always 1-interval 2-intervalS2L 3-intervalL2S 4-intervalLoop 456无效 |
| vibrationTime | number | 提醒时长 最大60s |
| vibrationLevel1 | number | 震动强度 456无效 |
| vibrationLevel2 | number | 震动强度 456无效 |
| napEnable | boolean | 小睡提醒开关 456手环才可能支持 |
| lightSleepEnable | number | 浅睡提醒开关 456手环才可能支持 (又名智能唤醒) |
| isDelete | boolean | 是否删除闹钟，如果设为YES 则表示删除 |
| napAlertTime | number | 小睡提醒时长 （分钟） |
| lightSleepAlertTime | number | 浅睡提醒时长 （分钟） |


实例

```javascript
  let event = {
    napEnable: true,
    lightSleepEnable: true,
    index: 1,
    desc: `设置闹钟提醒发发发`,
    enable: true,
    isDelete: false,
    napAlertTime: 15,
    lightSleepAlertTime: 15,
    hour: 19,
    minute: 50,
    repeatTime: 1,
    vibrationType: 2,
    vibrationTime: 3,
    vibrationLevel1: 4,
    vibrationLevel2: 5,
  }

  settingInfo = new bracelet.settingFactory.EventReminderSetting(Array(event));
```

<a name="q8hXB"></a>
### 3.8 时间格式

`TimeFormatSetting` 的数据格式

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| timeFormat | number | 0表示24小时制  1表示12小时制 |


实例

```javascript
  // 0表示24小时制  1表示12小时制
  settingInfo = new bracelet.settingFactory.TimeFormatSetting(0x01);
```

<a name="fPhIW"></a>
### 3.9 表盘推送

456的表盘也不支持切换顺序 index 1、2、3、4表示本地表盘，5表示相册表盘，6与7表示云端表盘<br />`PushDialSetting`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| dialIndex | number | 0x01～0x07，表示推送表盘的位置，如果该位置非空，则表示替换，否则表示新增。 |
| id | string | 标识符 |
| dailType | number | 表盘类型 0: 在线表盘 1: 相册表盘 2: 本地表盘 255：无表盘 |
| fileName | string | 文件名 所占用的byte数最大32字节 |
| backgroundImageName | string | 背景图名称长度 最大32字节 |
| styleId | number | 样式id，用来描述表盘元素的显示内容和显示方式目前相册表盘有2个固定样式 已经无效 直接填0 |
| colorId | number | 颜色ID，用来秒速表盘上字体的颜色 已经无效直接填0 |
| fileBuf | ArrayBuffer | 文件内容 |
| onUpgradeProcess | func | 传送文件的进度 |
| onUpgradeComplete | func | 结果回调 |


实例

```javascript
  /** 构建函数
  constructor(
        dialIndex: number,
        id: string = "",
        dialType: number = 2,
        fileName: string = "",
        backgroundImageName: string = "",
        styleId: number = 0,
        colorId: number = 0,
        fileBuf: ArrayBuffer = new ArrayBuffer(0),
        onUpgradeProcess?: (process: number) => void,
        onUpgradeComplete?: (code: number, msg: string) => void)
        */

  // 相册表盘
  setting = new bracelet.settingFactory.PushDialSetting(dailIndex, id, 1, "test", "test", 0, 0, buf);

  // 云端表盘
  setting = new bracelet.settingFactory.PushDialSetting(dailIndex, id, 0, "test", "test", 0, 0, buf);
```

<a name="acWl1"></a>
### 3.10 表盘选择

表盘位置上必须有表盘表盘选择才能成功<br />`DialEnableSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| dailIndex | number | 0x01～0x07，表示表盘的位置 |
| dailNoList | number[] | 表盘的排序        456无效 |


实例

```javascript
  let setting = new bracelet.settingFactory.DialEnableSetting(dialIndex, [1, 2, 3, 4, 5, 6, 7]);
```

<a name="w8Krz"></a>
### 3.11 表盘删除

这个使用到了一个设置项的积累类 可以参考 `MultipleSetting`<br />`setting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| tag | number | 0x34 固定值 |
| list | DialInfo[] | 删除表盘的列表，目前只支持一个一个的删除，456只支持删除相册表盘与云端表盘， 即5、6、7 |


`DialInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| index | number | 0x01～0x07，表示表盘的位置 |
| dialType | numnber | 表盘类型 0: 在线表盘 1: 相册表盘 2: 本地表盘 |


实例

```javascript
  let setting = new bracelet.settingFactory.MultipleSetting([{ tag: 0x34, list: [{ index: 7, dailType: 0 }] }]);
```

<a name="TURAp"></a>
### 3.12 目标设置

`EncourageTargetSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | number | 开关 |
| targetType | number | // 步数 step = 1, 卡路里 calories = 2, distance = 3,/// 深睡眠 deepSleep = 4, /// 站立时长 standingTime = 5, /// 运动时长sportTime = 6 |
| value | number | 步数 卡路里 单位：kcal 距离 单位：m 深睡眠 站立时长 单位：小时 运动时长 单位：分钟 |


实例

```javascript
  settingInfo = new bracelet.settingFactory.EncourageTargetSetting(true, 6, 10);
```

<a name="Urfji"></a>
### 3.13 天气设置

`WeatherSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| updateTime | number | 天气更新时间戳 |
| weathers | Weather[] | 今天，明天，后天...的天气信息 |


`Weather` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| weatherCode | number | 天气气象代码 |
| minTemperature | number | 最低气温 |
| maxTemperature | number | 最高气温 |
| aqi | number | 空气质量 |


实例

```javascript
let weather = {
    weatherCode: 22,
    minTemperature: 10,
    maxTemperature: 20,
    aqi: 10,
  }
  settingInfo = new bracelet.settingFactory.WeatherSetting(166666666, [weather]);
```

<a name="NSvq0"></a>
### 3.14 新天气设置 456 支持

`NewWeatherSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| utc | number | 天气更新时间戳 |
| weathers | Weather[] | 今天，明天，后天...的天气信息 |
| cityName | string | 城市名 |


`Weather` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| weatherCode | number | 天气气象代码 |
| minTemperature | number | 最低气温 |
| maxTemperature | number | 最高气温 |
| currentTemperature | number | 当前温度 |
| windSpeed | number | 风速 |
| humidity | number | 相对湿度 |
| uvIndex | number | uv指数 |
| aqi | number | 空气质量 |
| sunriseHour | number | 日出时间 |
| sunriseMinute | number | 日出时间 |
| sunsetHour | number | 日落时间 |
| sunsetMinute | number | 日落时间 |


实例

```javascript
//0x00 晴(白天);
//0x01 晴(夜晚);
//0x02 多云;
//0x03 晴间多云(白天);
//0x04 晴间多云(夜晚);
//0x05 大部多云(白天);
//0x06 大部多云(夜晚);
//0x07 阴;
//0x08 阵雨;
//0x09 雷阵雨;
//0x0A 冰雹或雷阵雨伴有冰雹;
//0x0B 小雨;
//0x0C 中雨;
//0x0D 大雨;
//0x0E 暴雨;
//0x0F 大暴雨;
//0x10 特大暴雨;
//0x11 冻雨;
//0x12 雨夹雪;
//0x13 阵雪;
//0x14 小雪;
//0x15 中雪;
//0x16 大雪;
//0x17 暴雪;
//0x18 浮尘;
//0x19 扬沙;
//0x1A 沙尘暴;
//0x1B 强沙尘暴;
//0x1C 雾;
//0x1D 霾;
//0x1E 风;
//0x1F 大风;
//0x20 飓风;
//0x21 热带风暴;
//0x22 龙卷风;
  let weather = {
    weatherCode: 22,
    minTemperature: 10,
    maxTemperature: 20,
    currentTemperature: 5,
    windSpeed: 10,
    humidity: 11,
    uvIndex: 11,
    aqi: 10,
    sunriseHour: 6,
    sunriseMinute: 0,
    sunsetHour: 18,
    sunsetMinute: 9,
  }
  settingInfo = new bracelet.settingFactory.NewWeatherSetting(166666666, [weather]);
```

<a name="dt4fh"></a>
### 3.15 旧的表盘设置

`DialTypeSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| dialType | number | 1～6 六种样式 |


实例

```javascript
  settingInfo = new bracelet.settingFactory.DialTypeSetting(1);
```
<a name="gnm8w"></a>
### 
<a name="RW8Kh"></a>
### 3.16 自定义一级屏幕设置

`CustomPagesSetting`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| pages | number[] | 屏幕的枚举 |


旧版的屏幕比如 memboHR2 LSBand5s LSBand 的取值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| Time | 0x00 | 时间 |
| Step | 0x01 | 步数 |
| Calories | 0x02 | 卡路里 |
| Distance | 0x03 | 距离 |
| HeartRate | 0x04 | 心率 |
| Running | 0x05 | 跑步 |
| Walking | 0x06 | 健走 |
| Cycling | 0x07 | 骑行 |
| Swimming | 0x08 | 游泳 |
| BodyBuilding | 0x09 | 健身/力量训练 |
| Climbing | 0x0A | 登山 |
| DailyData | 0x0B | 日常数据 |
| Stopwatch | 0x0C | 秒表 |
| Weather | 0x0D | 天气 |
| Battery | 0x0E | 电量 |
| IndoorRunning | 0x0F | 跑步机运动 |
| Elliptical | 0x10 | 椭圆机 |
| AerobicSport | 0x11 | 有氧运动 |
| Basketball | 0x12 | 篮球 |
| Football | 0x13 | 足球 |
| Badminton | 0x14 | 羽毛球 |
| Volleyball | 0x15 | 排球 |
| PingPong | 0x16 | 乒乓球 |
| Yoga | 0x17 | 瑜伽 |
| Gaming | 0x18 | 电竞 |
| AerobicExercise12 | 0x19 | 有氧能力运动-12分钟跑 |
| AerobicExercise6 | 0x1A | 有氧能力运动-6分钟走 |
| Alipay | 0x1B | 支付宝页面 |
| FitnessDance | 0x1C | 健身舞 |
| TaiChi | 0x1D | 太极 |


456等屏幕的取值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| sport | 0 | 运动 |
| bloodO2 | 1 | 血氧 |
| heartRate | 2 | 心率 |
| sportReport | 3 | 运动记录 |
| findPhone | 4 | 找手机 |
| alarm | 5 | 闹钟 |
| photo | 6 | 拍照 |
| thinking | 7 | 冥想（呼吸） |
| sleepReport | 8 | 睡眠记录 |
| weather | 9 | 天气 |
| stopwatch | 10 | 秒表 |
| music | 11 | 音乐 |
| countdown | 12 | 倒计时 |
| setting | 13 | 设置 |
| realmeLink | 14 | LoT |
| msg | 15 | 消息 |
| tool | 16 | 工具 |
| preasure | 17 | 压力 |
| femaleHeathy | 18 | 女性健康 |
| eventReminder | 19 | 事件提醒 |
| flashlight | 20 | 手电筒 |
| todayOverview | 255 | 今日概览 |


实例

```javascript

  settingInfo = new bracelet.settingFactory.CustomPagesSetting([13, ...]);
```

<a name="P2FQg"></a>
### 3.17 实时心率开关  RealtimeHRSetting

`RealtimeHRSetting` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 实时心率开关 |


```javascript
  settingInfo = new bracelet.settingFactory.RealtimeHRSetting(false);
```



<a name="f4SA2"></a>
# 4、数据接收
<a name="tUyAK"></a>
### 4.1 总结数据 DailyData

`DailyData`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| list | Daily[] | 数据列表 |
| type | number | 数据类型(0：实时数据、1：小时数据) |
| dataType | String | a5Daily  固定值 |


`Daily` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| isSilenceExist | boolean | 静息心率是否存在 |
| step | number | 步数 |
| utc | number | 测量时间 |
| examount | number | 运动量 |
| calories | number | 卡路里（千卡） |
| exerciseTime | number | 运动时间（460上为活动时长）分钟 |
| distance | number | 距离(米) |
| status | number | 电量、运动等级 |
| batteryVoltage | number | 电量电压等级 |
| silenceHeartRate | number | 静息心率（可能不存在） |


<a name="DUpyL"></a>
### 4.2 心率数据 HeartRateData

`HeartRateData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | number | 心率类型（0:一般心率、1:实时心率、2:运动心率, 3 当天常规心率明细上传） |
| sportMode | number | 运动类型 参考 7.1.1 |
| subMode | number | 参考 7.1.2 |
| utc | number | 测量时长 |
| reside | number | 计步器中数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| utcOffset | number | 每笔值间隔 单位：s |
| heartRates | number[] | 心率列表，每笔间隔时间为 utcOffset |
| status | number | 实时心率才使用到 0、1:不支持该功能 2:未检测到心率 3:检测到心率 |
| dataType | string | 固定值 a5HR |


<a name="qeKa7"></a>
### 4.3 睡眠原始数据 SleepData

`SleepData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| utc | number | 测量时长 |
| reside | number | 计步器中数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| utcOffset | number | 每笔值间隔 单位：s |
| levelSet | number[] | 睡眠原始数据列表，每笔间隔时间为 utcOffset |
| dataType | string | 固定值 a5Sleep |


<a name="h0i6r"></a>
### 4.4 睡眠报告 SleepReportData 456支持

`SleepReportData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| sleepUtc | number | 睡眠时间 Bed time |
| awakeUtc | number | 醒来时间 Get-up time. |
| durationOfAwake | number | 清醒时长 （分钟） |
| numberOfAwake | number | 醒来次数 |
| numberOfEyeMovement | number | 眼动次数 |
| timeOfLightSleep | number | 浅睡时长 （分钟） |
| timeOfDeepSleep | number | 深睡时长 （分钟） |
| characteristicsOfSleep | number | 睡眠特征个数 |
| reside | number | 待上传睡眠报告个数 |
| offsetOfSleepReport | number | 睡眠报告偏移 |
| extFlag | number | 扩展标志 |
| totalOfSleepStruct | number | 本次睡眠结构总数 |
| offsetOfSleepStruct | number | 明细睡眠结构偏移 |
| breathScore | number | 睡眠呼吸评分      暂不支持 |
| breathLevel | number | 睡眠呼吸等级    暂不支持 |
| sleepScore | number | 睡眠评分       暂不支持 |
| sleepList | SleepInfo[] | 实时心率才使用到 0、1:不支持该功能 2:未检测到心率 3:检测到心率 |
| dataType | string | 固定值 sleepReport |


`SleepInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| startUtc | number | 开始时间 |
| endUtc | number | 结束utc |
| deep | number | 4 : 眼动 1 : 清醒2 : 浅睡 3 : 深睡 |
| duration | number | 分钟 |


<a name="eagSu"></a>
### 4.5 运动卡路里 SportCaloriesData

`SportCaloriesData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| isNew | number | 心率类型（0:一般心率、1:实时心率、2:运动心率, 3 当天常规心率明细上传） |
| sportMode | number | 运动类型 参考 7.1.1 |
| subMode | number | 参考 7.1.2 |
| utc | number | 测量时长 |
| reside | number | 计步器中数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| utcOffset | number | 每笔心率值间隔 单位：s |
| calories | number[] | 卡路里列表，每笔间隔时间为 utcOffset |
| dataType | string | 固定值 a5SportCalories |


<a name="yGpRA"></a>
### 4.6 运动记录 SportReportData

`SportReportData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| sportMode | number | 运动类型 参考 7.1.1 |
| subMode | number | 参考 7.1.2 |
| suspendTimes | number | 暂停次数 包括结束，所以默认就为1 |
| start | number | 开始时间 |
| end | number | 结束时间 |
| states | TimeState[] | 时间中间暂停的状态 |
| sportTime | number | 运动总时长 单位（秒） |
| step | number | 总步数，在游泳运动模式总步数代表 游泳圈数  laps |
| calories | number | 消耗卡路里 单位（Kcal） |
| maxHr | number | 最大心率 次/分 |
| avgHr | number | 平均心率 次/分 |
| maxStepFreq | number | 最大步频 |
| avgStepFreq | number | 平均步频 |
| maxSpeed | number | 最大速度 单位 Km/h |
| avgSpeed | number | 平均速度 单位 km/h |
| distance | number | 距离 单位 米 |
| avgStepOfFloating | number | 平均步幅 （cm） 456新增 |
| avgPace | number | 平均配速 单位 秒/公里 456 新增 |
| infoOfTarget | number | 运动目标达成情况， 0无目标，1目标达成，2目标未达成 不支持 |
| targetType | number | 运动目标类型 不支持 |
| hrSection1TimeRatio | number | 占比 % 456 新增 |
| hrSection2TimeRatio | number | 占比 % 456 新增 |
| hrSection3TimeRatio | number | 占比 % 456 新增 |
| hrSection4TimeRatio | number | 占比 % 456 新增 |
| hrSection5TimeRatio | number | 占比 % 456 新增 |
| dataType | string | 固定值 a5SportReport |


`TimeState` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| pauseUtc | number | 暂停时间 |
| reStartUtc | number | 重新开始时间 |


<a name="A8U1I"></a>
### 4.7 血氧数据与晨脉 BloodOxygenData 456支持

`BloodOxygenData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| reside | number | 计步器中数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| offset | number | 每笔心率值间隔 单位：s |
| list | BloodOxygenInfo[] | 心率列表，每笔间隔时间为 utcOffset |
| dataType | string | 固定值 bloodOxygen |


`BloodOxygenInfo` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| utc | number | 测量时间 |
| bloodOxygenValue | number | 血氧数据 |
| heartRate | number | 静息心率数据 |
| state | string | 0x00：普通血氧数据 0x01：异常血氧数据 |


<a name="QfBWX"></a>
### 4.8 运动状态 SportStatusData（发起运动）

`SportStatusData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| function | number | 心率类型（0:一般心率、1:实时心率、2:运动心率, 3 当天常规心率明细上传） |
| sportStatus | number | 当function为0x01时 0x00：开始（app需开启GPS）0x01 : 开启GPS 0x02 : 运动开始（通知app手表已开启运动） 0x03 : 关闭GPS 当function为0x02时 x01：结束 0x03：暂停 0x04：重启 |
| sportMode | number | 运动类型 参考 7.1.1 |
| dataType | string | 固定值 a5SportStatus |


<a name="bJNex"></a>
### 4.9 闹钟开关 AlarmClockSwitchData 456支持

`AlarmClockSwitchData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| index | number | 闹钟序号 |
| enable | number | 闹钟开关 |
| dataType | string | 固定值 AlarmClockSwitch |


<a name="EsUrI"></a>
### 4.10 表盘变更数据 DailReportData 456支持

`DailReportData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| index | number | 当前表盘号 |
| count | number | 表盘个数 |
| list | number[] | 表盘顺序 |
| dataType | string | 固定值 dailReport |


<a name="hFJ2y"></a>
### 4.11 表盘详情数据 DialDetailData 456 支持

`DialDetailData` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| dialIndex | number | 当前表盘号   0x01～0x07 |
| id | number | 表盘唯一id 用ASCII表示 最大32字节 |
| dailType | number | 表盘类型 0: 在线表盘 1: 相册表盘 2: 本地表盘 |
| fileName | string | 文件名 所占用的byte数最大32字节 |
| backgroundImageName | string | 背景图名称长度 最大32字节 |


