        当设备连接时， 体重数据会自动上报到sdk，数据包含了体重、身体阻抗值、测量事件信息， 您需要调用我们的算法API获得更多的分析结果：[https://docs.sghealth.cn/develop-cloud/algorithm/fat](https://docs.sghealth.cn/develop-cloud/algorithm/fat)

类：com.lifesense.android.ble.device.fatscale.model.WeightMeasureData

| utc | int | 测量时间 单位 s |
| --- | --- | --- |
| weight | double | 体重 |
| resistance50K | double | 阻抗 |


