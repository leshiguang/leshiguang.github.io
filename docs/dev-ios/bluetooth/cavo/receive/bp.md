> 血压数据


LZCVBPData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| list | NSMutableArray <LZCVBPInfo *> * | 血压数据列表 |
| measurementDataType | LZCVDataType | LZCVDataTypeBP |


LZCVBPInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| utc | NSUInteger | 时间戳 |
| bp_low | NSUInteger | 低压 |
| bp_high | NSUInteger | 高压 |
| heart_rate | NSUInteger | 心率 |




