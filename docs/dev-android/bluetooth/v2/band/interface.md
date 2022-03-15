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

