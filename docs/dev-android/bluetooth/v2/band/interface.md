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
| DIAL_DATA | 表盘数据记录 |
| SPORT_PITCH | 运动步频记录 |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |


