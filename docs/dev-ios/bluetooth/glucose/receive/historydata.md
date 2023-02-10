<a name="t84yk"></a>
## 历史血糖数据 LZGLHistoryData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| list | LZGLHistoryDataInfo[] | 历史数据列表 |


LZGLHistoryDataInfo的数据结构

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| glucose | double | 血糖 (单位 mmol) |
| utc | NSUInteger | 时间戳 |
| sample | NSUInteger | 样本， 0x11 为血液 0x22 为质控液 |
| dinnerState | NSUInteger | 餐前餐后状态 0x00 无状态 0x11 FPG（餐前） 0x22 PPG（餐后）(请不要参考这项数据) |


