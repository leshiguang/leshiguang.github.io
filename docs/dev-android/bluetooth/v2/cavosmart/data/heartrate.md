<a name="HbYuO"></a>
# 心率
- heartRates集合中的每个值均表示一段时间的心率数据， 时间偏移量您可以通过utcOffset区分
- 心率的最高、最低值需要您自己来计算

类名：com.lifesense.android.ble.device.cavosmart.model.HeartRate

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 心率类型（0:一般心率,1分钟记录一笔） |
| utc | int | 测量时间 |
| utcOffSet | int | 每笔心率值间隔 单位：s |
| heartRates | List<Integer> | 心率值 |

以下情况将不会产生心率数据：<br />1、电量耗尽或低电量<br />2、心率开关为关闭状态<br />3、未正确佩戴<br />4、手环背部绿灯损坏

以下情况将会产生错误的心率数据：<br />1、将手环放置在底部为白色的桌面<br />2、将手环套在柱状（如酒瓶）且对光的反射性好的物体上


