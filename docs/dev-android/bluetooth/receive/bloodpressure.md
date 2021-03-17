<a name="o51hK"></a>
# 血压数据
血压仪上报的血压数据<br />类名：com.lifesense.android.ble.core.application.model.BloodPressureMeasureData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量时间,单位：秒 |
| unit | int | _单位 0:mmHg 1:Kpa_ |
| systolic | int | 高压数据 |
| diastolic | int | 低压数据 |
| meanPressure | int | 平均值数据 |
| bodyMovement | boolean | 体动手抖 |
| cuffFit | boolean | 袖带不适合 |
| irregularPulse | boolean | 心率不齐 |
| pulseOut | boolean | 心率超出量程 |
| measurementPosition | boolean | 位置检测 |
| reBind | boolean | 重复绑定 |
| hsd | boolean | hsd |
| pulseRate | int | 脉搏数据 |
| pulseRateFlag | boolean | 是否有脉搏1数据 |
| utcFlag | boolean | 是否有测量时间 |
| bodyMovementDetection | boolean | 是否包含体动数据 |
| cuffFitDetection | boolean | 是否包含袖带检测数据 |
| irreegularPulseeDetection | boolean | 是否包含心率不齐数据 |
| measureementPositionDetection | booleean | 是否包含位置检测数据 |


