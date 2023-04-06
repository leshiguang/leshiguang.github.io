**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**

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
| deviceId | String | 设备Id | 必填 设备id获取参考：[链接](https://docs.sghealth.cn/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| movementError | Integer | 抖动标识（0正常，1抖动） | 可为空 |
| userNo | Integer | 设备用户（按钮） | 可为空 |
| irregularHeartbeat | Integer | 是否心率补齐（0正常，1心率补齐） | 可为空 |

**响应JSON格式**<br />正常（服务器正常响应）情况下，http code是200<br />http code与JSON里的code字段是有不同含义的。<br />注意，调用时也请处理，http code非200的情况。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| data | Boolean | 上传结果 | <br /> |
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
| data | Boolean | 上传结果 | <br /> |
| msg | String | 描述 | 提示信息 |
| code | Integer | 状态码 | 200是正常，<br />非200，请参照msg |
| status | Boolean | 状态 |  |


<a name="g4acj"></a>
## 1.3 查询用户最近30天的血压记录
```bash
GET /api/bloodpressure/v2.0/query/getLastThirtyDaysBPRecord
```
**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |


**出参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | String | 当前数据唯一标识 | <br /> |
| userId | Long | 用户id | <br /> |
| measurementDate | Long | 测量时间(毫秒值) | <br /> |
| systolicPressure | Integer | 收缩压（高压） | <br /> |
| diastolicPressure | Integer | 舒张压（低压） | <br /> |
| heartRate | Integer | 心率 | <br /> |
| level | Integer | 血压等级 |  |
| irregularHeartbeat | Integer | 心率不齐标示（0为正常，1为不齐） | <br /> |
| movementError | Integer | 抖动标示（0为正常，1为抖动） | <br /> |
| remark | String | 备注 | <br /> |
| source | Integer | 数据来源（0:设备采集;1:手工添加） | <br /> |


示例数据：
```sql

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"e35fe7886c18417ab93652f561abdd1e",
			"userId":26729267,
			"measurementDate":1635992340000,
			"systolicPressure":119,
			"diastolicPressure":76,
			"heartRate":79,
			"level":2,
			"irregularHeartbeat":0,
			"movementError":0,
			"remark":"",
			"source":2,
			"userNo":0
		},
		{
			"id":"6dfdc4c89c61433f9e542e7a9a1d19b3",
			"userId":26729267,
			"measurementDate":1636185660000,
			"systolicPressure":69,
			"diastolicPressure":52,
			"heartRate":58,
			"level":2,
			"irregularHeartbeat":0,
			"movementError":0,
			"remark":"666",
			"source":2,
			"userNo":0
		},
		{
			"id":"0be9b2ab40ed4412a9d20e8d2a168794",
			"userId":26729267,
			"measurementDate":1636355340000,
			"systolicPressure":110,
			"diastolicPressure":90,
			"heartRate":70,
			"level":4,
			"irregularHeartbeat":0,
			"movementError":0,
			"remark":"",
			"source":2,
			"userNo":0
		}
	]
}

```


