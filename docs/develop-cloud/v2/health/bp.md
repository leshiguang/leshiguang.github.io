**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**<br />**​**<br />
<a name="sSDNN"></a>
# 1.血压上传
<a name="QDBkG"></a>
## 1.1 上传血压计血压数据
```bash
POST /api/bloodpressure/v2.0/upload/deviceBp
```
**入参 RequestBody(JSON)**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| diastolicPressure | Integer | 舒张压(mmHg) | 必填 |
| systolicPressure | Integer | 收缩压(mmHg) | 必填 |
| heartRate | Integer | 心率 | 必填 |
| measurementTime | Long | 测量时间（时间戳ms) | 必填（必须大于2015年1月1日00:00:00） |
| temperature | Float | 体温 | 非必填 |
| deviceId | String | 设备Id | 必填 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| movementError | Integer | 抖动标识（0正常，1抖动） | 可为空 |
| userNo | Integer | 设备用户（按钮） | 可为空 |
| irregularHeartbeat | Integer | 是否心率补齐（0正常，1心率补齐） | 可为空 |

**响应JSON格式**<br />正常（服务器正常响应）情况下，http code是200<br />http code与JSON里的code字段是有不同含义的。<br />注意，调用时也请处理，http code非200的情况。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| data | Boolean | 上传结果 | ​<br /> |
| msg | String | 描述 | 提示信息 |
| code | Integer | 状态码 | 200是正常，<br />非200，请参照msg |
| status | Boolean | 状态 |  |

<a name="kGddp"></a>
## 1.2 上传非血压计血压数据
```bash
POST /api/bloodpressure/v2.0/upload/manualEnteredBp
```
**入参 RequestBody(JSON)**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| diastolicPressure | Integer | 舒张压(mmHg) | 必填 |
| systolicPressure | Integer | 收缩压(mmHg) | 必填 |
| heartRate | Integer | 心率 | 必填 |
| measurementTime | Long | 测量时间（时间戳ms) | 必填（必须大于2015年1月1日00:00:00） |
| temperature | Float | 体温 | 非必填 |

**响应JSON格式**<br />正常（服务器正常响应）情况下，http code是200，<br />http code与JSON里的code字段是有不同含义的。<br />注意，调用时也请处理，http code非200的情况。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| data | Boolean | 上传结果 | ​<br /> |
| msg | String | 描述 | 提示信息 |
| code | Integer | 状态码 | 200是正常，<br />非200，请参照msg |
| status | Boolean | 状态 |  |


