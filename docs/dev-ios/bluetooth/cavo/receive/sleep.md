> 睡眠数据


LZCVSleep

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| sleepUtc | NSUInteger | 睡眠时间 |
| awakeUtc | NSUInteger | 醒来时间  |
| durationOfAwake | NSUInteger | 清醒时长 （分钟） |
| timeOfLightSleep | NSUInteger | 浅睡时长 （分钟） |
| timeOfDeepSleep | NSUInteger | 深睡时长 （分钟） |
| sleepList | NSMutableArray <LZCVSleepState *> * | 睡眠数据列表 |
| list | NSMutableArray <NSDictionary *> * | 这个是原始数据，请忽略 |
| measurementDataType | LZCVDataType | LZCVDataTypeSleep |


LZCVSleepState

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| startUtc | NSUInteger | 开始时间 |
| endUtc | NSUInteger | 结束时间 |
| deep | NSUInteger | 1 : 清醒2 : 浅睡 3 : 深睡 |
| duration | NSUInteger | /**分钟 */ |


