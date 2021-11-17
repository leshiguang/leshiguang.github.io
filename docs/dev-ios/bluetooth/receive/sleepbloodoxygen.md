<a name="ftjpd"></a>
# 支持设备类型
乐心手环HR6、乐心手环Mambo Watch1 乐心手环Mambo Watch2
<a name="U99oQ"></a>
# 睡眠血氧
​

类名：LZA5BloodOxygenData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| reside | UInt32 | 手环剩余数据标志 |
| status | UInt32 | offset 数据间隔（秒） |
| list | <LZBloodOxygenInfo *> | 血氧监测值 |

LZBloodOxygenInfo

| 字段 | 描述 |
| --- | --- |
| utc | 测量时间 |
| state | 0正常血氧1异常血氧 |
| bloodOxygenValue | 血氧监测值 |
| heartRate | 心率值 |


