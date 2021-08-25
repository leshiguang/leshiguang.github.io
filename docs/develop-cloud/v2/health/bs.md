**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**<br />**​**<br />
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
| deviceId | String | 设备ID | 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| glucoseConcentration | Double | 血糖浓度(mmol/L) | 必填 |
| mealPeriod | Integer | 测量时间段 | 必填<br />0：空腹；<br />1：早餐后；<br />2：午餐前；<br />3：午餐后；<br />4：晚餐前；<br />5：晚餐后；<br />6：睡前；<br />11: 凌晨，<br />12: 餐前，<br />13: 餐后2小时内<br />14: 运动前<br />15: 运动后<br />16: 随机 |
| measurementTime | Long | 测量时间（时间戳ms) | 必填（必须大于2015年1月1日00:00:00） |

**​**<br />
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
| data | Boolean | 上传结果 | ​<br /> |
| msg | String | 描述 | 提示信息 |
| code | Integer | 状态码 | 200是正常，<br />非200，请参照msg |
| status | Boolean | 状态 |  |

<a name="obpnN"></a>
## ​<br />

