> 心率数据，setting LZCVDataTypeHR


LZCVHeartRate

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| utc | NSUInteger | 第一笔的时间戳 |
| utcOffset | NSUInteger | 间隔时间，固定是60s |
| heartRates | NSArray <LZCVHRInfo *> * | 心率列表 |
| measurementDataType | LZCVDataType | LZCVDataTypeHR |


LZCVHRInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| utc | NSUInteger | 时间戳 |
| temperatureDisplaySwitch | BOOL | 和手环显示温度开关数据一致 |
| compensationEnable | BOOL | 温度补偿开关（可忽略） |
| wearState | NSUInteger | 佩戴状态 （可忽略） |
| temperature | NSUInteger | 温度 单位是0.1（摄氏度） 比如316 = 31.6（摄氏度） |
| hr | NSUInteger | 心率值 |


