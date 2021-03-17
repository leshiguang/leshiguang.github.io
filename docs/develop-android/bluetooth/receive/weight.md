<a name="D8Xcm"></a>
# 体重
当设备连接时， 体重数据会自动上报到sdk，数据包含了体重、身体阻抗值、测量事件信息， 您需要调用我们的算法API获得更多的分析结果：[https://docs.leshiguang.com/develop-cloud/algorithm/fat](https://docs.leshiguang.com/develop-cloud/algorithm/fat)<br />
<br />类名：com.lifesense.android.ble.core.application.model.WeightMeasureData

| utc | int | 测量时间，单位：s |
| --- | --- | --- |
| weight | double | 体重 |
| resistance50K | double | 阻抗 |
| basalMetabolism | float | 基础代谢 |
| bodyFatRatio | float | 脂肪率 |
| bodyWaterRatio | float | 身体水分含量 |
| visceralFatLevel | float | 内脏脂肪含量 |
| muscleMassRatio | float | 肌肉含量 |
| boneDensity | float | 骨质密度 |
| bmi | int | BMI |
| muscleMass | int | 肌肉质量 |
| fatFreeMass | int | 无脂肪体重 |
| softLeanMass | int | 软的肌肉 |
| heartRate | int | 心率 |
| infantWeight | float | 婴儿体重 |


