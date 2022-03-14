<a name="L7zPP"></a>
# 步数及日常监测数据
日常监测数据 可以根据measurementDataType判断数据类型（LZBraceletMeasurementDataTypeDay 总数据) (LZBraceletMeasurementDataTypeHour 小时数据）<br />类名：LZA5DayData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| contentDatas | NSArray <LZA5TimeContentData *> | 日常监测数据列表 |
| type | UInt32 | 0:实时<br />1:小时数据 |


类名：LZA5TimeContentData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| step | UInt32 | 步数 |
| examount | double | 运动量 （保留字段暂时没有用到） |
| calories | double | 卡路里 单位：kCal |
| exerciseTime | UInt16 | 运动时长 |
| distance | UInt16 | 距离 单位：m |
| batteryPercentage | NSInteger | 电量 |
| status | UInt8 | 睡眠、运动等级 |
| utc | UInt32 | 时间戳 、秒 |
| silenceHeartRate | UInt32 | 静息心率（结合isSilenceExist）判断是否存在 |



日常监测数据始终上报的是当前utc以前的累计步数值， 数据的上报时机有3个<br />1、步数发生变化时上报的当前时刻总数据<br />2、每小时的59分59秒上报的小时总数据<br />3、跨天时。

您可以结合iOS的StepCounter计步器技术获取手机系统的步数作为手环步数的补充，主流的计步器软件（微信运动、支付宝、QQ等）都是从StepCounter取得的步数数据：[https://developer.apple.com/documentation/coremotion/cmstepcounter](https://developer.apple.com/documentation/coremotion/cmstepcounter)

