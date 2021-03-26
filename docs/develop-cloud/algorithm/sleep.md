<a name="IbV2j"></a>
## 一、睡眠分析接口
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
    "levelSetStr":"63636363636363636363636363636363514d594c595d6061586363636363636363636363636363634c575063636363636363635659616363634a3e635c345721130000000000321a1c000f27051e1e0000000000002b150000100d00000200190d23000c13000015150c0000280a0000000000001d04001a0b250000040723270b00002d0012001018000e141c001700000d280000090a091f635012284e636363636363636363636363636363636363635b6363633f1763636363636363636363636363636363636313536363636363636363634f483b6363636363453b23000000001b300d2a120d001828195b5c3535342b3c636363636363636363636363636363636363636363",
    "startTime":1616666400000,
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


<a name="GtUvY"></a>
## 二、夜间/日间睡眠逻辑
![](https://cdn.nlark.com/yuque/0/2021/jpeg/1385043/1616751249306-0d70b8cb-bf96-4f2f-96de-47cb8de55a30.jpeg)[https://files.lifesense.com/other/20210326/074d0ced457e428793bd27109e006579.jpg](https://files.lifesense.com/other/20210326/074d0ced457e428793bd27109e006579.jpg)<br />

<a name="oVTFi"></a>
## 三、参数组装逻辑
手环每**5**分钟监测用户睡眠状态生成一个10进制数值，传入睡眠分析接口的levelSetStr参数为16进制，转换如下：

| 时间 | 18:00 | 18:05 | 18:10 | 18:15 | 18:20 | 18:25 | 18:30 | 18:35 | 18:40 | 18:45 | 18:50 | 18:55 | 19:00 | 19:05 | 19:10 | 19:15 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10进制 | 99 | 69 | 59 | 35 | 0 | 27 | 48 | 13 | 42 | 18 | 13 | 24 | 40 | 25 | 91 | 92 |
| 16进制 | 63 | 45 | 3b | 23 | **00** | 1b | 30 | **0d** | 2a | 12 | 0d | 18 | 28 | 19 | 5b | 5c |


<br />


