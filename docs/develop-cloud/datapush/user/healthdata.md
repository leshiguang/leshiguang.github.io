<a name="XS3wZ"></a>
# 1.用户体重数据
<a name="Ily58"></a>
## 1.1 用户体重数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uWeightChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **weightId** | data | String | 体重记录id |

2）推送数据样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uWeightChangeE",
  "pushStatus": 1,
  "data": {
    "weightId": "00a4ec4328444ab9bcaa7e1ce49dec12"
  }
}
```
<a name="sj3kj"></a>
## 1.2 用户体重数据删除
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uWeightDeleteE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **recordIds** | data | List<String> | 删除的体重记录id |

2）推送数据样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uWeightDeleteE",
  "pushStatus": 1,
  "data": {
    "recordIds": [
      "00a4ec4328444ab9bcaa7e1ce49dec12",
      "011403cdb4d44681a01438725b5bf565"
    ]
  }
}
```
<a name="AuAdo"></a>
# 2.用户睡眠数据
<a name="oAadY"></a>
## 2.1 用户手环睡眠数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uSleepDeviceChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **sleepId** | data | String | 睡眠记录id |

2）推送数据样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uSleepDeviceChangeE",
  "pushStatus": 1,
  "data": {
    "sleepId": "bracelet42ad51d6323047128598ee18d4206b00"
  }
}
```
<a name="JotKN"></a>
## 2.2 用户睡眠日记数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | uSleepDiaryChangeE |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **sleepId** | data | String | 睡眠记录id |

2）推送数据样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uSleepDeviceChangeE",
  "pushStatus": 1,
  "data": {
    "sleepId": "diaryc0c31ed729bf4593a3c8fcf81642f37b"
  }
}
```
<a name="ceXyh"></a>
# 3.用户血压数据
| eventKey | **dataPush** |
| --- | --- |
| dataTypeKey | **uBp** |

1）推送数据格式

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

2）推送数据样例
```json
{
  "dataTypeKey": "uBp",
  "eventKey": "dataPush",
  "pushStatus": 1,
  "userId": 23807166,
  "associatedId":"xxxxxx",
  "data": {
    "dia": 220,
    "ihb": false,
    "measurementDate": 1624611480000,
    "movementError": false,
    "pul": 66,
    "sys": 220,
    "timeZone": "Asia/Shanghai",
    "userId": 23807166,
    "userNo": 0
  }
  
}
```
<a name="J53Gw"></a>
# 4.用户血糖数据
| eventKey | **dataPush** |
| --- | --- |
| dataTypeKey | uBs |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **measurementDate** | data | Long | 测量时间（毫秒值） |
| **glu** | data | Double | _血糖浓度 单位 mmol/L_ |
| **mealPeriod** | data | Integer | _用餐时段 12 餐前 13餐后2小时 16随机_ |
| **level** | data | Integer | _参考血糖等级_ |

2）推送数据样例
```json
{
  "userId": 200,
  "associatedId": "201079547",
  "dataTypeKey": "uBs",
  "eventKey": "dataPush",
  "pushStatus": 1,
  "data": {
    "glu": 23,
    "level": 4,
    "mealPeriod": 3,
    "mealPeroid": 3,
    "measurementDate": 1625121120000,
    "userId": 200
  }
  
}
```
<a name="biYUd"></a>
# 5.用户步数数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uStepChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| measurementDate | data | Long | 测量时间，13位，精确到毫秒 |

2）推送数据样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uStepChangeE",
  "pushStatus": 1,
  "data": {
    "measurementDate": 1629098641000
  }
}
```
<a name="yFL86"></a>
# 6.用户心率数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uHeartrateChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| measurementDate | data | Long | 测量时间，13位，精确到毫秒 |

2）推送数据样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uHeartrateChangeE",
  "pushStatus": 1,
  "data": {
    "measurementDate": 1629098641000
  }
}
```
<a name="Y9gef"></a>
## ​<br />



