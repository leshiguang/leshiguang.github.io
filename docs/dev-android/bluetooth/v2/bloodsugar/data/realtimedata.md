类名：com.lifesense.android.ble.device.bloodsugar.model.BloodSugarMeasureData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| glucose | double | 血糖（单位 mmol） |
| state | State | 测量状态 |
| sample | int | 样本， 0x11 为血液 0x22 为质控液 |
| errCode | int | 错误码 |
| utc | int | 测量时间（实时数据没有） |

State

| LAST | 上一笔 |
| --- | --- |
| TEST_PAGE | 表示显示去测试 |
| WAIT_BLOOD | 等待血液 |
| ALREADY | 已经完成 |
| RESULT | 表示结果 |
| WARN | 表示警告 |


