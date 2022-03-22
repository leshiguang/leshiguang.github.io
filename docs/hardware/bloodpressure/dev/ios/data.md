血压仪上报的血压数据<br />类名：LZA6BpMeasurementData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量时间,单位：秒 |
| unit | int | _单位 0:mmHg 1:Kpa_ |
| systolic | int | 高压数据，以mmHg上传，根据unit flag的定义进行显示 |
| diastolic | int | 低压数据，以mmHg上传，根据unit flag的定义进行显示 |
| meanPressure | int | 平均值数据，以mmHg上传，根据unit flag的定义进行显示 |
| irregularPulseDetection | boolean |  0:未检测到心率不齐 1:检测到心率不齐 |
| pulseRate | int | 脉搏数据 |



