<a name="hUobl"></a>
# 支持设备类型
乐心手环HR6、乐心手环Mambo Watch1 乐心手环Mambo Watch2
<a name="iP8Oz"></a>
# 静息心率测量数据

类名：LZA5RestingHeartRateData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| reside | int | 剩余 |
| offset | int | 偏移量 |
| list | NSArray <LZRestingHeartRateInfo *> | 数据列表 |

LZRestingHeartRateInfo

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | Uint32 | 时间戳 |
| bloodOxygenValue | Uint32 | 血氧 |
| heartRate | Uint32 | 静息心率 |


