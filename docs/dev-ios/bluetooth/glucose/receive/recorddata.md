LZGLRecordData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| glucose | UInt32 | 血糖（单位 mmol） |
| state | LZGLRecordState | typedef** **NS_ENUM(NSUInteger, LZGLRecordState) {<br />///上一笔<br />LZGLRecordStateLast = 0x10,<br />///表示显示去测试<br />LZGLRecordStateTestPage = 0x11,<br />///等待血液<br />LZGLRecordStateWaitBlood = 0x22,<br />///表示已经完成<br />LZGLRecordStateAlread = 0x33,<br />///表示结果<br />LZGLRecordStateresult = 0x44,<br />///表示错误<br />LZGLRecordStateWarn = 0x55,<br />}; |
| sample | NSUInteger | 样本， 0x11 为血液 0x22 为质控液 |
| errCode | UInt32 | 错误码 |
| utc | UInt32 | （因为是实时数据，所以没有） |


