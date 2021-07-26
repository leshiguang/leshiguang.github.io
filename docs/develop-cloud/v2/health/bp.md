**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**<br />**​**<br />
<a name="sSDNN"></a>
# 1.血压上传
<a name="QDBkG"></a>
## 1.1 上传血压计血压数据
<a name="kGddp"></a>
## 1.2 上传非血压计血压数据
```bash
POST /api/bloodpressure/v2.0/upload/manualUploadBp
```
**入参**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| diastolicPressure | Integer | 舒张压(mmHg) | 必填 |
| systolicPressure | Integer | 收缩压(mmHg) | 必填 |
| heartRate | Integer | 心率 | 必填 |
| measurementTime | Long | 测量时间（时间戳ms) | 必填（必须大于2015年1月1日00:00:00） |
| temperature | Float | 体温 | 非必填 |




