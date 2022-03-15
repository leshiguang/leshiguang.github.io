<a name="jtQ5r"></a>
# 睡眠
levelSet中，每一个值都代表一笔数据，每笔数据5分钟生成一次，它描述的是用户在5分钟内的身体活动水平，如翻身、侧卧、站立等。您需要调用我们的算法API进行睡眠算法分析：[https://docs.leshiguang.com/develop-cloud/algorithm/sleep](https://docs.leshiguang.com/develop-cloud/algorithm/sleep)

类名：com.lifesense.android.ble.device.band.model.Sleep

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量时间 |
| reside | int | 计步器中睡眠数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| utcOffset | int | 每笔睡眠间隔 单位：s |
| levelSet | List<Integer> | 睡眠等级 _(0 ~ 127,对应从深睡眠到浅睡眠)_ |



