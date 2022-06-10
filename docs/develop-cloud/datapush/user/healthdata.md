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
| **weightId** | data | String | 体重记录ID |

2）推送数据示例
```json
{
    "eventKey":"eventPush",
    "dataTypeKey":"uWeightChangeE",
    "pushStatus":1,
    "associatedId":"201079547",
    "userId":37616,
    "data":{
        "userId":37616,
        "weightId":"a50b8337ddd549499a3705bbd1ae1e34"
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
| **recordIds** | data | List(String) | 删除的体重记录ID |

2）推送数据示例
```json
{
    "eventKey":"eventPush",
    "dataTypeKey":"uWeightDeleteE",
    "pushStatus":1,
    "associatedId":"203855550",
    "userId":183333,
    "data":{
        "recordIds":[
            "e54230c9f60d4e0ebfa9523661c2c05c",
            "96a9671b48b94a74bf769182c18d5c28"
        ],
        "userId":183333
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
| **sleepId** | data | String | 睡眠记录ID |
| **userId** | data | Long | 用户ID |

2）推送数据示例
```json
{
    "eventKey":"eventPush",
    "dataTypeKey":"uSleepDeviceChangeE",
    "pushStatus":1,
    "associatedId":"200308773",
    "userId":37616,
    "data":{
        "sleepId":"bracelet42ad51d6323047128598ee18d4206b00",
        "userId":37616
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
| **sleepId** | data | String | 睡眠记录ID |
| **userId** | data | Long | 用户ID |

2）推送数据示例
```json
{
    "eventKey":"eventPush",
    "dataTypeKey":"uSleepDiaryChangeE",
    "pushStatus":1,
    "associatedId":"200308773",
    "userId":37616,
    "data":{
        "sleepId":"diary0abe2cef86dd4cf594542a74d0466e2e",
        "userId":37616
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
| **deviceId** | data | String | 设备ID |
| sn | data | String | 设备SN |
| **measurementDate** | data | Long | 测量时间（毫秒值） |
| **sys** | data | Integer | 收缩压（高压） |
| **dia** | data | Integer | 舒张压（低压） |
| **pul** | data | Integer | 心率 |
| **ihb** | data | Boolean | 心率不齐标示(true表示心率不齐) |
| **movementError** | data | Boolean | 抖动标示 |
| **timeZone** | data | String | 时区(非必须返回) |

2）推送数据示例
```json
{
    "eventKey":"dataPush",
    "dataTypeKey":"uBp",
    "pushStatus":1,
    "associatedId":"194355098",
    "userId":75155,
    "data":{
        "dia":75,
        "ihb":false,
        "measurementDate":1632955260000,
        "movementError":false,
        "pul":60,
        "sys":110,
        "timeZone":"Asia/Shanghai",
        "userId":75155,
        "userNo":0
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
| **mealPeriod** | data | Integer | _用餐时段_<br />_ _0：空腹；<br />1：早餐后；<br />2：午餐前；<br />3：午餐后；<br />4：晚餐前；<br />5：晚餐后；<br />6：睡前； <br />11：凌晨；<br />12：餐前；<br />13：餐后2小时；<br />14：运动前；<br />15：运动后；<br />16：随机 |
| **level** | data | Integer | _血糖等级:_<br />_0: 低血糖_<br />_1: 偏低_<br />_2: 正常_<br />_3: 偏高_<br />_4: 高血糖_ |

2）推送数据示例
```json
{
    "eventKey":"dataPush",
    "dataTypeKey":"uBs",
    "pushStatus":1,
    "associatedId":"203879703",
    "userId":184193,
    "data":{
        "glu":5.9,
        "level":1,
        "mealPeriod":6,
        "measurementDate":1654783140000,
        "userId":184193
    }
}
```
<a name="biYUd"></a>
# 5.用户心率数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uHeartrateChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| measurementDate | data | Long | 测量时间，13位，精确到毫秒 |

2）推送数据示例
```json
{
    "dataTypeKey":"eventPush",
    "eventKey":"uHeartrateChangeE",
    "pushStatus":1,
    "data":{
        "measurementDate":1629098641000
    }
}
```
<a name="FQ15o"></a>
# 6.用户步数数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uStepChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| measurementDate | data | Long | 测量时间，13位，精确到毫秒 |

2）推送数据示例
```json
{
    "eventKey":"eventPush",
    "dataTypeKey":"uStepChangeE",
    "pushStatus":1,
    "associatedId":"201079547",
    "userId":37616,
    "data":{
        "userId":37616,
        "measurementDate":1629098641000
    }
}
```
<a name="dcZh5"></a>
# 7.用户运动数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uSportChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方 |
| **sportId** | data | String | 运动记录ID |

2）推送数据示例
```json
{
    "eventKey":"eventPush",
    "dataTypeKey":"uSportChangeE",
    "pushStatus":1,
    "associatedId":"201079547",
    "userId":37616,
    "data":{
        "userId":37616,
        "sportId":"00a4ec4328444ab9bcaa7e1ce49dec12"
    }
}
```





