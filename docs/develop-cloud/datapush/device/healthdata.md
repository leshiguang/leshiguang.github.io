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
| **measureEpochMilli** | data | Long | 测量时间（毫秒值） |
| **weight** | data | double | _体重（单位kg）_ |
| **resistance50k** | data | double | _阻抗值_ |
| **heartRate** | data | Integer | 心率 |
| **timeZone** | data | String | 时区(非必须返回) |

2）推送数据样例样例
```json
{
  "dataTypeKey": "dWeight",
  "eventKey": "dataPush",
  "pushStatus": 1,
  "data": {
    "deviceId": "00010610c37b",
    "sn": "1571237813568931",
    "heartRate": 90,
    "measureEpochMilli": 1606455623387,
    "weight": 62.5,
    "resistance50k": 511,
    "timeZone": "Asia/Shanghai"
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
    "timeZone":"Asia/Shanghai"
  }
}
```

