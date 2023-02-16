**注意，设备SN需要提前导入，进行数据订阅，不然无法推送！！！**
<a name="XS3wZ"></a>
# 1.WIFI体脂称

<a name="Ily58"></a>
## 1.1 体脂称测量数据推送
| eventKey | **dataPush** |
| --- | --- |
| dataTypeKey | **dWeight** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **deviceId** | data | String | 设备id |
| sn | data | String | 设备sn |
| thirdSn | data | String | 外包装sn，一般与设备sn相同，部分特殊型号的设备除外 |
| mac | data | String | 设备mac地址 |
| **measureEpochMilli** | data | Long | 测量时间（毫秒值） |
| **weight** | data | double | _体重（单位kg）_ |
| **resistance50k** | data | double | _阻抗值_ |
| **heartRate** | data | Integer | 心率 |
| **timeZone** | data | String | 时区(非必须返回) |

2）推送数据样例样例
```json
{
	"dataTypeKey": "dWeight",
	"deviceId": "ad02f1000f8a",
	"eventKey": "dataPush",
	"pushStatus": 1,
	"data": {
		"deviceId": "ad02f1000f8a",
		"sn": "1133848100003978",
		"mac": "6876270C5097",
		"measureEpochMilli": 1625716221000,
		"timeZone": "Asia/Shanghai",
		"weight": 21.75,
		"resistance50k": 0,
		"heartRate": 0
	}
}
```
<a name="yvcMW"></a>
# 2.WIFI/NB/GPRS血压计

<a name="KgoQe"></a>
## 2.1 血压数据推送
血压计测量完血压后上传数据时触发

| eventKey | **dataPush** |
| --- | --- |
| dataTypeKey | **BP** |

1.推送data

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **deviceId** | data | String | 设备id |
| sn | data | String | 设备sn |
| **measurementDate** | data | Long | 测量时间（毫秒值） |
| **sys** | data | Integer | 收缩压（高压） |
| **dia** | data | Integer | _舒张压（低压）_ |
| **pul** | data | Integer | 心率 |
| **ihb** | data | Boolean | _心率不齐标示(true表示心率不齐)_ |
| **movementError** | data | Boolean | _抖动标示_ |
| **timeZone** | data | String | 时区(非必须返回) |
| ip | data | String |  |
| port | data | String |  |

2.推送data示例
```json
{
  "dataTypeKey": "BP",
  "eventKey": "dataPush",
  "pushStatus": 1,
  "data": {
    "deviceId": "00010610c37b",
    "sn":"1571237813568931",
    "sys": 120,
    "dia": 80,
    "pul": 72,
    "ihb": false,
    "measurementDate": 1606455623387,
    "movementError": true,
    "userNo": 1,
    "timeZone":"Asia/Shanghai",
    "ip": "10.10.10.10",
    "port": 8888
  }
}
```
<a name="CqvhE"></a>
# 3 GPRS血糖仪
<a name="PH5Y8"></a>
## 3.1 血糖数据推送
| eventKey | **dataPush** |
| --- | --- |
| dataTypeKey | BS |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **deviceId** | data | String | 设备id |
| **measurementDate** | data | Long | 测量时间（毫秒值） |
| **glu** | data | Double | _血糖浓度 单位 mmol/L_ |
| mealPeriod | data | Integer | _用餐时段_<br />0：空腹；<br />1：早餐后；<br />2：午餐前；<br />3：午餐后；<br />4：晚餐前；<br />5：晚餐后；<br />6：睡前； <br />11：凌晨；<br />12：餐前；<br />13：餐后2小时；<br />14：运动前；<br />15：运动后；<br />16：随机 |

2）推送数据样例
```json
{
  "data": {
    "deviceId": "2AJ66R00812",
    "glu": 3.06,
    "mac": "2AJ66R00812",
    "mealPeriod": 16,
    "measurementDate": 1629723814000,
    "sn": "2AJ66R00812"
  },
  "dataTypeKey": "BS",
  "deviceId": "2AJ66R00812",
  "eventKey": "dataPush",
  "pushStatus": 1
}
```

