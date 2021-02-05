<a name="IbV2j"></a>
## 睡眠数据分析
url :  域名 +  **/api/sleep/v1.0/origin/data/analysis**<br />method: post<br />
<br />入参：

| **字段** | **类型** | **描述** | **是否必传** | **备注** |
| :---: | :---: | :---: | :---: | :---: |
| levelSetStr | String | 睡眠数据，16进制字符串，5分钟两位 | 是 |  |
| startTime | Date | 分析开始时间（毫秒值） | 是 |  |
| model | String | 设备型号 | 是 |  |
| softwareVersion | String | 固件版本号 | 是 |  |

入参示例
```json
{
    "levelSetStr":"63636363635c636363634259634663634f0d1a191500180019260b00002700040000240000120a000900000000003230746f71111f181d000f0a1807000f29242b150e130012260e0d121f0d000000001d112c2e0e0d07091b21632a230d0d1e1c14002a000011231f091b0d221e5d3f044b484f0f371f394f4d1c0e51636e6e6e6e6e6e",
    "startTime":1591238124000,
    "model":"LS431-B3",
    "softwareVersion":"T302"
}
```
出参：

| **字段** | **字段类型** | **字段描述** |
| :---: | :---: | :---: |
| summary | SleepSummary | 整体总结数据 |
| first90Summary | SleepFirst90Summary | 前90分钟的总结数据 |
| statusDetails | List<SleepStateDetail> | 睡眠状态详细数据 |

返回参数SleepSummary：

| **字段** | **字段类型** | **字段描述** |
| :---: | :---: | :---: |
| beginSleepTimeUTC | Long | 开始入睡时间(单位毫秒) |
| sleepTimeSecond | Long | 入睡时间,unix时间戳(单位秒) |
| getupTimeSecond | Long | 起床时间,unix时间戳(单位秒) |
| deepSleepDuration | Long | 深睡的总时长（分钟） |
| lightSleepDuration | Long | 浅睡的总时长（分钟） |
| awakeSleepDuration | Long | 清醒的总时长（分钟） |
| remDuration | Integer | 眼动时长（分钟） |
| awakeCount | Long | 清醒次数 |
| segmentType | Integer | 1-夜间睡眠；0-日间睡眠 |

返回参数SleepFirst90Summary：

| **字段** | **字段类型** | **字段描述** |
| :---: | :---: | :---: |
| deepSleepDurationFirst90 | Integer | 深睡时长（分钟） |
| shallowSleepDurationFirst90 | Integer | 浅睡时长（分钟） |
| awakingDurationFirst90 | Integer | 清醒时长（分钟） |
| remDurationFirst90 | Integer | rem时长（分钟） |
| duration | Integer | 区间时长（分钟） |

返回参数SleepStateDetail：

| **字段** | **字段类型** | **字段描述** |
| :---: | :---: | :---: |
| sleepStatus | Integer | 0-快速眼动；1-清醒；2-浅睡；3-深睡 |
| startTime | Long | 区间开始时间（秒） |
| endTime | Long | 区间结束时间（秒） |
| duration | Integer | 区间时长（分钟） |


<br />出参示例：
```json
{
    "code":200,
    "msg":"成功",
    "data":[
        {
            "summary":{
                "awakeCount":1,
                "awakeSleepDuration":5,
                "beginSleepTimeUTC":0,
                "deepSleepDuration":60,
                "getupTimeSecond":1585178699,
                "lightSleepDuration":400,
                "remDuration":0,
                "segmentType":1,
                "sleepTimeSecond":1585150799
            },
            "first90Summary":{
                "awakingDurationFirst90":0,
                "deepSleepDurationFirst90":15,
                "remDurationFirst90":0,
                "shallowSleepDurationFirst90":75
            },
            "statusDetails":[
                {
                    "duration":50,
                    "endTime":1585153799,
                    "sleepStatus":2,
                    "startTime":1585150799
                }
                ....
            ]
        }
        ....
    ]
}
```

