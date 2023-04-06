**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**

<a name="sSDNN"></a>
# 1.血糖上传
<a name="QDBkG"></a>
## 1.1 上传血糖仪血糖数据
```bash
POST /api/bloodsugar/v2.0/upload/deviceBs
```
**入参 RequestBody(JSON)**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| deviceId | String | 设备ID | 设备id获取参考：[链接](https://docs.sghealth.cn/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| glucoseConcentration | Double | 血糖浓度(mmol/L) | 必填 |
| mealPeriod | Integer | 测量时间段 | 必填<br />0：空腹；<br />1：早餐后；<br />2：午餐前；<br />3：午餐后；<br />4：晚餐前；<br />5：晚餐后；<br />6：睡前；<br />11: 凌晨，<br />12: 餐前，<br />13: 餐后2小时内<br />14: 运动前<br />15: 运动后<br />16: 随机 |
| measurementTime | Long | 测量时间（时间戳ms) | 必填（必须大于2015年1月1日00:00:00） |

<br />
<a name="kGddp"></a>
## 1.2 上传非糖仪血糖数据
```bash
POST /api/bloodsugar/v2.0/upload/manualEnteredBs
```
**入参 RequestBody(JSON)**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| glucoseConcentration | Double | 血糖浓度(mmol/L) | 必填 |
| mealPeriod | Integer | 测量时间段 | 必填<br />0：空腹；<br />1：早餐后；<br />2：午餐前；<br />3：午餐后；<br />4：晚餐前；<br />5：晚餐后；<br />6：睡前；<br />11: 凌晨，<br />12: 餐前，<br />13: 餐后2小时内<br />14: 运动前<br />15: 运动后<br />16: 随机 |
| measurementTime | Long | 测量时间（时间戳ms) | 必填（必须大于2015年1月1日00:00:00） |

**响应JSON格式**<br />正常（服务器正常响应）情况下，http code是200，<br />http code与JSON里的code字段是有不同含义的。<br />注意，调用时也请处理，http code非200的情况。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| data | Boolean | 上传结果 | <br /> |
| msg | String | 描述 | 提示信息 |
| code | Integer | 状态码 | 200是正常，<br />非200，请参照msg |
| status | Boolean | 状态 |  |


<a name="JsBKI"></a>
## 1.3 查询用户最近30天的血糖记录
```bash
GET /api/bloodsugar/v2.0/query/getLastThirtyDaysBSRecord
```
**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |


**出参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| measurementDate | Long | 测量时间 | <br /> |
| glucoseConcentration | double | 血糖浓度 | <br /> |
| mealPeroid | int | 是否有数据 | 用餐状态（0：空腹；1：早餐后；2：午餐前；3：午餐后；4：晚餐前；5：晚餐后；6：睡前； 国际版（8:空腹，9:随机时间，10:饭后2小时）；11、凌晨，12、餐前，13、餐后2小时，14、运动前，15、运动后，16、随机" |
| userNo | int | 绑定键序列 | <br /> |
| level | int | 血糖水平:(高血糖:4，偏高:3，正常:2，偏低:1，低血糖:0) | <br /> |
| levelName | String | 血糖水平对应的名称 | <br /> |


**示例数据:**
```sql

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":1376961,
			"userId":26729267,
			"measurementDate":1635995460000,
			"glucoseConcentration":5.7,
			"mealPeroid":2,
			"userNo":0,
			"deviceId":"userAdd",
			"level":1,
			"battery":0,
			"requestTime":1636600315038,
			"memo":"",
			"year":2021,
			"month":11,
			"week":45,
			"day":4,
			"created":1636600315000,
			"updated":1636600315043,
			"mealPeroidName":"餐前",
			"levelName":"达标",
			"deleted":0,
			"source":1,
			"drugStatus":0,
			"abnormalTags":""
		},
		{
			"id":1376960,
			"userId":26729267,
			"measurementDate":1636254660000,
			"glucoseConcentration":5,
			"mealPeroid":2,
			"userNo":0,
			"deviceId":"userAdd",
			"level":1,
			"battery":0,
			"requestTime":1636600301452,
			"memo":"",
			"year":2021,
			"month":11,
			"week":45,
			"day":7,
			"created":1636600301000,
			"updated":1636600301457,
			"mealPeroidName":"餐前",
			"levelName":"达标",
			"deleted":0,
			"source":1,
			"drugStatus":0,
			"abnormalTags":""
		},
		{
			"id":1376959,
			"userId":26729267,
			"measurementDate":1636513860000,
			"glucoseConcentration":6.8,
			"mealPeroid":2,
			"userNo":0,
			"deviceId":"userAdd",
			"level":1,
			"battery":0,
			"requestTime":1636600287647,
			"memo":"",
			"year":2021,
			"month":11,
			"week":46,
			"day":10,
			"created":1636600288000,
			"updated":1636600287651,
			"mealPeroidName":"餐前",
			"levelName":"达标",
			"deleted":0,
			"source":1,
			"drugStatus":0,
			"abnormalTags":""
		},
		{
			"id":1376958,
			"userId":26729267,
			"measurementDate":1636600260000,
			"glucoseConcentration":6,
			"mealPeroid":2,
			"userNo":0,
			"deviceId":"userAdd",
			"level":1,
			"battery":0,
			"requestTime":1636600271473,
			"memo":"",
			"year":2021,
			"month":11,
			"week":46,
			"day":11,
			"created":1636600271000,
			"updated":1636600271492,
			"mealPeroidName":"餐前",
			"levelName":"达标",
			"deleted":0,
			"source":1,
			"drugStatus":0,
			"abnormalTags":""
		}
	]
}

```

