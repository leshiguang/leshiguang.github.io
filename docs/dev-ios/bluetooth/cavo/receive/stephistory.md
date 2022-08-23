> 历史步数


LZCVStepHistory

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| list | NSArray <LZCVStepHistoryInfo *> * | 历史步数列表 |
| measurementDataType | LZCVDataType | LZCVDataTypeStepHistory |


LZCVStepHistoryInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| utc | NSUInteger | 时间戳 精度15分钟 单位：s |
| mode | NSUInteger | 模式（暂不考虑） |
| step | NSUInteger | 步数 |
| activeTime | NSUInteger | 活动时长， |
| calories | NSUInteger | 卡路里 单位：卡 |
| distance | NSUInteger | 距离 单位 ：米 |
| measurementDataType | LZCVDataType | LZCVDataTypeStep |




