类：com.lifesense.android.ble.device.band.Band
<a name="cXt4e"></a>
## 同步数据
部分手环和手表需要主动调用该接口来获取数据
```java
public public void syncData(String mac, SynchronizeData synchronizeData)
```
参数说明：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| mac | String | mac地址 |
| synchronizeData | SynchronizeData | 同步数据类 |

SynchronizeData：

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| type | Type | 同步数据类型 |

Type：

| NORMAL_HEART_RATE | 常规心率记录 |
| --- | --- |
| SLEEP_ANALYSIS_RESULT | 睡眠明细记录 |
| SPORT_PACE | 运动配速记录 |
| SPORT_HEART_RATE | 运动心率记录 |
| SPORT_CALORIES | 运动卡洛里记录 |
| REST_HEART_RATE | 静息心率记录 |
| STEP_DETAIL | 常规计步明细记录 |
| TODAY_STEP_DETAIL | 当天常规计步明细记录 |
| TODAY_HEART_RATE_DETAIL | 当天常规心率明细记录电 |
| LAST_CHARGE | 最后一次充电记录 |
| CURRENT_LIGHT | 当前亮度设定 |
| DAILY_DATA | 表盘数据记录 |
| SPORT_REPORT | 运动步频记录 |
| BLOOD_OXYGEN_SINGLE | 运动配速记录使用英制 |
| MEDITATION_REPORT | 区间心率数据 |
| SLEEP_QUALITY_REPORT | 每小时报告 |
| TODAY_BLOOD_OXYGEN_REPORT | 每天报告 |
| HEART_RATE_STATE_REPORT | 运动报告 |
| BLOOD_OXYGEN | 血氧测量报告点测 |
| SLEEP_BREATH_QUALITY | 冥想测量报告 |
| PRESSURE_REPORT | 睡眠质量报告 |
| SINGLE_HEART_RATE_REPORT | 当天血氧测量报告 |
| DAILY_REPORT_EXTRA | 状态心率数据 |
| ALL_DATA | 连续血氧报告 |

<a name="m7SMF"></a>
## 读取电量
获取手环、手表电量百分比、电压、充电状态
```java
public void readBatteryInfo(String mac, Consumer<BatteryInfo> receiver)
```
参数说明：

| mac | String | mac地址 |
| --- | --- | --- |
| receiver | Consumer<BtteryInfo> | 回调 |

BatteryInfo

| state | int | 充电状态 |
| --- | --- | --- |
| voltage | float | 电压 |
| batteryPercent | int | 电量百分比 |

<a name="OsxCG"></a>
## 输入随机数
有些手环绑定时需要输入随机数才能进行绑定
```java
public void inputRandomNumber(String mac, String randomNumber)
```
参数说明：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| mac | String | mac地址 |
| randomNumber | String | 随机数 |

<a name="BafzT"></a>
## 设置自定义表盘
设置手表、手环自定义表盘
```java
public void setDialPlate(String mac, FileDialPlate fileDialPlate, Consumer<ConfigStatus> configStatusConsumer)
```
参数说明：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| mac | String | mac地址 |
| fileDialPlate | FileDialPlate |  |
| configStatusConsumer | Consumer<ConfigStatus> |  |

<a name="wqReA"></a>
## 获取天气
获取未来天气列表，可用于设置手环天气
```java
public void getWeathers(double lng, double lat, String adCode, Consumer<Weathers> receiver)
```

