

<a name="8JcUz"></a>
## 1. 查询日全天心率 
  url： 域名 + heartrate-rest/dailyQuery/getDailyHeartRate<br />method：GET<br />  描述：查询用户在queryTimeStamp之前或之后（包含queryTimeStamp）一天的心率数据，如果查询当天没有会一直往前查找，直到找到有数据的一天。

<a name="v3FdX"></a>
##### 入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| queryTimeStamp | Long | _查询时间戳_ | 时间戳<br /> |
| queryDirection | Integer | _查询方向_ | _大于0查询大于等于queryTimeStamp某天的心率_<br />_小于0查询小于等于queryTimeStamp某天的心率_<br />_等于0指定查询queryTimeStamp当天的心率_ |
| associatedId | String | 关联账号id |  |



<a name="fk6gl"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| belongDayTimeStamp | Long | 心率所属日期时间戳 | 精确到日 |
| currentHeartRateDTO | Object | 当前心率 |  |
| dailyHeartRateBoardDTO | Object | 当前心率 | 最新一天有心率的数据数据 |
| sportHeartRateDTO | Object | 运动心率信息 |  |
| nightSleepHeartRateDTO | Object | 睡眠心率 |  |
| silentHeartRateDTO | Object | 晨脉信息 |  |
| example | Boolean | 是否是示例数据 |  |

<a name="Mesbm"></a>
###### 当前心率：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| currentHeartRate | Integer | 最新心率 |  |
| updateTimeStamp | Long | 更新时间戳 |  |

<a name="RFRPe"></a>
###### 当日心率：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dailyHeartRateList | List<Integer> | 当日心率 |  |
| dailyMaxHeartRate | Integer | 当日最大心率 |  |
| dailyMinHeartRate | Integer | 当日最小心率 |  |

<a name="7kCxA"></a>
###### 运动心率信息：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| burningHeartRate | Obj | _燃脂-_中等强度 | 见_运动心率区间_ |
| enduranceHeartRate | Obj | 耐力-较大强度 |  |
| limitHeartRate | Obj | _极限-_极限强度 |  |

<a name="pQ833"></a>
###### 运动心率区间:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| start | Integer | _区间开始值_ |  |
| end | Integer | _区间结束值_ |  |
| value | Integer | _所占分钟数_ |  |

<a name="jzXI3"></a>
###### 睡眠心率：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| standardHeartRate | Integer | 基准心率 |  |
| standardHeartRateLabel | String | 基准心率标签 | 过低<br />过高<br />正常 |
| sleepTimeStamp | Long | 入睡时间戳 |  |
| getUpTimeStamp | Long | 起床时间戳 |  |
| nightSleepHeartRateList | List<Integer> | 夜间睡眠心率集合 |  |
| maxNightSleepHeartRate | Integer | 夜间睡眠最大心率 |  |
| minNightSleepHeartRate | Integer | 夜间睡眠最小心率 |  |
| text | String | _文案_ |  |
| analysisText | String | 分析文案 |  |

<a name="NJcgU"></a>
###### 晨脉信息：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| slientHeartRate | String | 晨脉 |  |
| label | String | _标签_ | 过低<br />优<br />一般<br />较快<br />过快 |
| text | String | 晨脉描述 |  |
| analysisText | String | 分析文案 |  |
| lastSevenHeartRateList | List<Object> | _近七天的心率_ |  |

<a name="tWlFT"></a>
###### _近七天的心率_
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| silentHeartRate | String | 晨脉 |  |
| dateStamp | String | 标签 |  |

返回示例报文:
```json
{
	"code": 200,
	"msg": "成功",
	"data": {
		"heartRateId": 363430094,
		"belongDayTimeStamp": 1570982400000,
		"userId": 24987002,
		"currentHeartRateDTO": {
			"currentHeartRate": 60,
			"updateTimeStamp": 1571068800000
		},
		"dailyHeartRateBoardDTO": {
			"dailyHeartRateList": [65, 64, 62, 62, 61, 61, 64, 69, 73, 71, 71, 70, 68, 66, 67, 65, 64, 64, 63, 62, 61, 63, 63, 64, 64, 64, 65, 67, 66, 66, 67, 64, 64, 65, 71, 74, 70, 69, 71, 69, 68, 63, 68, 73, 68, 68, 70, 71, 71, 71, 68, 68, 68, 67, 64, 61, 61, 62, 62, 62, 62, 62, 67, 64, 62, 68, 65, 64, 63, 62, 60, 57, 59, 57, 57, 57, 59, 64, 63, 67, 68, 65, 60, 62, 77, 69, 73, 71, 85, 75, 73, 86, 77, 71, 80, 89, 82, 86, 83, 80, 78, 83, 75, 67, 71, 74, 75, 74, 73, 72, 72, 68, 68, 71, 72, 70, 74, 83, 85, 79, 81, 80, 80, 80, 75, 73, 75, 76, 71, 68, 74, 74, 78, 80, 79, 76, 77, 75, 69, 69, 69, 70, 69, 69, 67, 67, 72, 74, 77, 81, 97, 85, 85, 92, 90, 99, 90, 85, 78, 80, 79, 75, 73, 75, 71, 67, 67, 67, 66, 67, 67, 67, 67, 67, 75, 76, 73, 74, 73, 74, 71, 74, 72, 67, 68, 70, 75, 79, 69, 78, 79, 68, 65, 73, 67, 69, 70, 67, 65, 64, 64, 65, 68, 67, 63, 65, 67, 79, 73, 72, 72, 67, 67, 77, 75, 73, 73, 75, 74, 74, 76, 77, 72, 68, 80, 89, 89, 89, 94, 94, 96, 81, 79, 79, 80, 78, 74, 103, 92, 81, 82, 74, 86, 86, 84, 83, 83, 0, 0, 0, 0, 81, 72, 70, 71, 69, 68, 64, 69, 71, 67, 65, 64, 59, 59, 57, 60, 59, 59, 59, 62, 62, 63, 64, 64, 64, 61, 59, 58, 60, 61, 60, 65, 64, 61, 63, 65, 60],
			"dailyMaxHeartRate": 103,
			"dailyMinHeartRate": 57
		},
		"sportHeartRateDTO": {
			"burningHeartRate": {
				"value": 0,
				"start": 122,
				"end": 145
			},
			"enduranceHeartRate": {
				"value": 0,
				"start": 145,
				"end": 183
			},
			"limitHeartRate": {
				"value": 0,
				"start": 183,
				"end": 48705
			}
		},
		"nightSleepHeartRateDTO": {
			"standardHeartRate": 64,
			"standardHeartRateLabel": "正常",
			"sleepTimeStamp": 1570977900000,
			"getUpTimeStamp": 1571006400000,
			"nightSleepHeartRateList": [60, 61, 61, 64, 63, 63, 61, 61, 60, 60, 61, 59, 61, 65, 59, 65, 64, 62, 62, 61, 61, 64, 69, 73, 71, 71, 70, 68, 66, 67, 65, 64, 64, 63, 62, 61, 63, 63, 64, 64, 64, 65, 67, 66, 66, 67, 64, 64, 65, 71, 74, 70, 69, 71, 69, 68, 63, 68, 73, 68, 68, 70, 71, 71, 71, 68, 68, 68, 67, 64, 61, 61, 62, 62, 62, 62, 62, 67, 64, 62, 68, 65, 64, 63, 62, 60, 57, 59, 57, 57, 57, 59, 64, 63, 67],
			"maxNightSleepHeartRate": 74,
			"minNightSleepHeartRate": 57,
			"text": "您在本日的睡眠基准心率值64次/分",
			"analysisText": "你的心脏机能良好，负荷低，休息充足，请继续保持健康的生活习惯。"
		},
		"silentHeartRateDTO": {
			"silentHeartRate": 71,
			"label": "一般",
			"text": "环比近期均值上升1次/分",
			"analysisText": "晨脉波动平稳。说明运动负荷合适，休息充分，身体机能恢复良好，可以继续保持原来的运动量和运动强度。",
			"lastSevenHeartRateList": [{
				"silentHeartRate": 71,
				"dateStamp": 1570982400000
			}, {
				"silentHeartRate": 68,
				"dateStamp": 1570896000000
			}, {
				"silentHeartRate": 69,
				"dateStamp": 1570809600000
			}, {
				"silentHeartRate": 70,
				"dateStamp": 1570723200000
			}, {
				"silentHeartRate": 72,
				"dateStamp": 1570636800000
			}, {
				"silentHeartRate": 69,
				"dateStamp": 1570550400000
			}, {
				"silentHeartRate": 77,
				"dateStamp": 1570464000000
			}]
		},
		"example": false
	}
}
```


<a name="cc3f0ca3"></a>
## 2. 查询周/月心率 
  url：域名 + heartrate-rest/heartrate/statistics/getWeekAndMonthHeartRate<br />  method：GET<br />描述：查询用户在queryTimeStamp之前或之后（包含queryTimeStamp）一周/月的心率数据，如果查询当周/月没有会一直往前查找，直到找到有数据的一天。
<a name="oYl0l"></a>
##### 入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| timestamp | Long | 测量时间 | 时间戳<br /> |
| dateType | Integer | 时间类型 | 1 周<br />2 月 |
| queryDirection | Integer | _查询方向_ | _1：查询大于等于_timestamp日期的数据_<br />_-1：查询小于等于_timestamp日期的数据<br />0：与-1一致 |
| associatedId | String | 关联账号id |  |

<a name="0Nh1c"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dailyHeartRateInfo | Object | 心率信息 |  |
| sportHeartRateInfo | Object | 运动心率信息 |  |
| sleepHeartRateInfo | Object | 睡眠心率 |  |
| silentHeartRateInfo | Object | 晨脉信息 |  |
| startDate | Date | 开始时间 |  |
| endDate | Date | 结束时间 |  |
| example | Boolean | 是否示例 |  |
| index | String | 唯一索引 | 前端使用 |



<a name="VbNG6"></a>
###### 心率信息：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| maxHeartRate | Integer | 最高心率 |  |
| minHeartRate | Integer | 最低心率 |  |
| singleDayHeartRates | List<Object> | _心率数据集合_ | 不存在，最高/低心率都为0 |

<a name="VLEnj"></a>
###### 心率数据集合：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dailyMaxHeartRate | Integer | 最高心率 |  |
| dailyMinHeartRate | Integer | 最低心率 |  |
| measurementDate | Date | _测量日期_ |  |

<a name="RwFL6"></a>
###### 运动心率信息：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| burningHeartRate | Obj | _燃脂-_中等强度 | 见_运动心率区间_ |
| enduranceHeartRate | Obj | 耐力-较大强度 |  |
| limitHeartRate | Obj | _极限-_极限强度 |  |

<a name="76XaV"></a>
###### 运动心率区间:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| start | Integer | _区间开始值_ |  |
| end | Integer | _区间结束值_ |  |
| value | Integer | _所占分钟数_ |  |



<a name="6AuyB"></a>
###### 睡眠心率：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| standardHeartRates | List<Object> | 基准心率列表 | 一天一条，不存在默认为0 |
| normalDays | Integer | 正常天数 |  |
| highDays | Integer | 较高天数 |  |
| lowDays | Integer | 较低天数 |  |
| text | String | 文案 |  |
| analysisText | String | 分析文案 |  |

 基准心率列表：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| value | Integer | _心率值_ |  |
| warning | boolean | 心率是否超过预警值 |  |

晨脉信息：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| silentHeartRates | List<Integer> | 晨脉列表 | 一天一条，不存在默认为0 |
| avgSilentHeartRate | Integer | 晨脉均值 |  |
| levelCode | Integer | 晨脉等级 | 过低( 1, "过低"),<br />优良(2, "优良"),<br />一般(3, "一般"),<br />较快(4, "较快"),<br />过快(5, "过快"); |
| levelContent | Integer | 晨脉等级描述 |  |
| text | String | 文案 |  |
| analysisText | String | 分析文案 |  |


<br />示例：<br />

```json
{
	"code": 200,
	"msg": "成功",
	"data": {
		"dailyHeartRateInfo": {
			"maxHeartRate": 153,
			"minHeartRate": 54,
			"singleDayHeartRates": [{
				"dailyMaxHeartRate": 142,
				"dailyMinHeartRate": 54,
				"measurementDate": 1598803200000
			}, {
				"dailyMaxHeartRate": 141,
				"dailyMinHeartRate": 65,
				"measurementDate": 1598889600000
			}, {
				"dailyMaxHeartRate": 153,
				"dailyMinHeartRate": 57,
				"measurementDate": 1598976000000
			}, {
				"dailyMaxHeartRate": 0,
				"dailyMinHeartRate": 0,
				"measurementDate": 1599062400000
			}, {
				"dailyMaxHeartRate": 127,
				"dailyMinHeartRate": 56,
				"measurementDate": 1599148800000
			}, {
				"dailyMaxHeartRate": 121,
				"dailyMinHeartRate": 56,
				"measurementDate": 1599235200000
			}, {
				"dailyMaxHeartRate": 116,
				"dailyMinHeartRate": 58,
				"measurementDate": 1599321600000
			}]
		},
		"sportHeartRateInfo": {
			"burningHeartRate": {
				"value": 50,
				"start": 125,
				"end": 148
			},
			"enduranceHeartRate": {
				"value": 10,
				"start": 148,
				"end": 188
			},
			"limitHeartRate": {
				"value": 0,
				"start": 188,
				"end": 49980
			}
		},
		"sleepHeartRateInfo": {
			"normalDays": 4,
			"highDays": 0,
			"lowDays": 0,
			"standardHeartRates": [{
				"value": 0
			}, {
				"value": 61,
				"warning": false
			}, {
				"value": 0
			}, {
				"value": 0
			}, {
				"value": 63,
				"warning": false
			}, {
				"value": 61,
				"warning": false
			}, {
				"value": 64,
				"warning": false
			}],
			"text": "您在本周的睡眠基准心率均处于健康区间",
			"analysisText": "目前你的心脏机能良好，负荷低，休息充足，请继续保持健康的生活习惯。"
		},
		"silentHeartRateInfo": {
			"avgSilentHeartRate": 69,
			"levelCode": 2,
			"levelContent": "优良",
			"silentHeartRates": [68, 0, 70, 0, 0, 68, 70],
			"text": "环比上个周均值上升1次/分",
			"analysisText": "晨脉波动平稳。说明运动负荷合适，休息充分，身体机能恢复良好，可以继续保持原来的运动量和运动强度。"
		},
		"startDate": 1598803200000,
		"endDate": 1599407999000,
		"example": false,
		"index": "756d66bf83504426bb0f2a1bd6816369"
	}
}
```


<a name="216de390"></a>
## 3. 查询心率日历 
  url：域名 + heartrate-rest/dailyQuery/getCalendar<br />  method：GET<br />

<a name="hd9NI"></a>
##### 入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |
| year | Integer | 年 | 2020 |
| month | Integer | 月 | 1 |

<a name="3sA2A"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| hasHeartRateDatesInMonth | List<Long> | 有数据的日期 | 毫秒数精确到日 |

示例返回报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"hasHeartRateDatesInMonth":[
			1596384000000,
			1596470400000,
			1596556800000,
			1596643200000,
			1596902400000,
			1597075200000,
			1597161600000,
			1597248000000,
			1597334400000,
			1597593600000,
			1597766400000,
			1598457600000
		]
	}
}
```

<br />

<a name="8kESs"></a>
## 4. 获取用户某一天的心率数据
url： 域名 + heartrate-rest/dailyQuery/**getDailyHeartRateGivenSomeDay**<br />method：GET
<a name="MdKvV"></a>
##### 入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| **epochMilli** | Long | _查询时间戳_ | _某天的时间戳，当天任意时刻都可以_ |
| associatedId | String | 关联账号id |  |


<br />**出参：**<br />与 [UI级接口#查询日全天心率](#uefnz) 的返回一致<br />示例
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"heartRateId":430988028,
		"belongDayTimeStamp":1599580800000,
		"userId":23807166,
		"currentHeartRateDTO":{
			"currentHeartRate":79,
			"updateTimeStamp":1602589200000
		},
		"dailyHeartRateBoardDTO":{
			"dailyHeartRateList":[
				71,
				73,
				75,
				78,
				77,
				75,
				72,
				72,
				70,
				68,
				67,
				67,
				67,
				67,
				70,
				71,
				72,
				71,
				70,
				68,
				67,
				66,
				64,
				64,
				64,
				64,
				64,
				64,
				64,
				65,
				64,
				69,
				70,
				71,
				70,
				69,
				67,
				64,
				64,
				64,
				62,
				63,
				63,
				64,
				63,
				63,
				61,
				63,
				64,
				64,
				64,
				67,
				68,
				66,
				69,
				66,
				67,
				67,
				67,
				67,
				63,
				61,
				61,
				61,
				63,
				59,
				59,
				60,
				62,
				64,
				64,
				67,
				67,
				65,
				66,
				67,
				67,
				67,
				66,
				65,
				64,
				64,
				64,
				64,
				64,
				63,
				64,
				64,
				64,
				66,
				64,
				65,
				77,
				94,
				87,
				85,
				87,
				115,
				100,
				87,
				77,
				72,
				87,
				78,
				76,
				71,
				90,
				86,
				79,
				76,
				78,
				76,
				75,
				70,
				71,
				78,
				78,
				80,
				72,
				74,
				73,
				70,
				74,
				72,
				71,
				71,
				69,
				68,
				71,
				71,
				66,
				75,
				73,
				72,
				67,
				67,
				68,
				70,
				70,
				78,
				87,
				84,
				73,
				63,
				69,
				68,
				65,
				60,
				72,
				78,
				75,
				76,
				81,
				81,
				89,
				99,
				100,
				96,
				74,
				77,
				72,
				70,
				73,
				71,
				73,
				74,
				71,
				74,
				70,
				69,
				73,
				73,
				74,
				71,
				71,
				72,
				70,
				73,
				73,
				73,
				73,
				81,
				77,
				78,
				73,
				74,
				72,
				74,
				74,
				68,
				69,
				68,
				74,
				79,
				71,
				74,
				69,
				73,
				77,
				74,
				75,
				69,
				77,
				68,
				70,
				69,
				69,
				73,
				74,
				69,
				73,
				76,
				71,
				67,
				72,
				72,
				80,
				82,
				83,
				74,
				76,
				72,
				89,
				87,
				68,
				69,
				70,
				68,
				74,
				69,
				68,
				69,
				77,
				79,
				79,
				77,
				94,
				82,
				87,
				89,
				82,
				82,
				75,
				82,
				78,
				77,
				78,
				79,
				78,
				78,
				79,
				78,
				83,
				79,
				80,
				79,
				84,
				83,
				83,
				79,
				94,
				82,
				81,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			"dailyMaxHeartRate":115,
			"dailyMinHeartRate":59
		},
		"sportHeartRateDTO":{
			"burningHeartRate":{
				"value":0,
				"start":121,
				"end":144
			},
			"enduranceHeartRate":{
				"value":0,
				"start":144,
				"end":182
			},
			"limitHeartRate":{
				"value":0,
				"start":182,
				"end":48450
			}
		},
		"nightSleepHeartRateDTO":{
			"standardHeartRate":64,
			"standardHeartRateLabel":"正常",
			"sleepTimeStamp":1599581999000,
			"getUpTimeStamp":1599608399000,
			"nightSleepHeartRateList":[
				77,
				75,
				72,
				72,
				70,
				68,
				67,
				67,
				67,
				67,
				70,
				71,
				72,
				71,
				70,
				68,
				67,
				66,
				64,
				64,
				64,
				64,
				64,
				64,
				64,
				65,
				64,
				69,
				70,
				71,
				70,
				69,
				67,
				64,
				64,
				64,
				62,
				63,
				63,
				64,
				63,
				63,
				61,
				63,
				64,
				64,
				64,
				67,
				68,
				66,
				69,
				66,
				67,
				67,
				67,
				67,
				63,
				61,
				61,
				61,
				63,
				59,
				59,
				60,
				62,
				64,
				64,
				67,
				67,
				65,
				66,
				67,
				67,
				67,
				66,
				65,
				64,
				64,
				64,
				64,
				64,
				63,
				64,
				64,
				64,
				66,
				64,
				65
			],
			"maxNightSleepHeartRate":77,
			"minNightSleepHeartRate":59,
			"text":"您在本日的睡眠基准心率值64次/分",
			"analysisText":"你的心脏机能良好，负荷低，休息充足，请继续保持健康的生活习惯。"
		},
		"silentHeartRateDTO":{
			"silentHeartRate":73,
			"label":"一般",
			"text":"环比近期均值上升2次/分",
			"analysisText":"晨脉波动平稳。说明运动负荷合适，休息充分，身体机能恢复良好，可以继续保持原来的运动量和运动强度。",
			"lastSevenHeartRateList":[
				{
					"silentHeartRate":73,
					"dateStamp":1598457600000
				},
				{
					"silentHeartRate":77,
					"dateStamp":1598371200000
				},
				{
					"silentHeartRate":76,
					"dateStamp":1598198400000
				},
				{
					"silentHeartRate":74,
					"dateStamp":1598112000000
				},
				{
					"silentHeartRate":68,
					"dateStamp":1594137600000
				},
				{
					"silentHeartRate":67,
					"dateStamp":1593878400000
				},
				{
					"silentHeartRate":64,
					"dateStamp":1593446400000
				}
			]
		},
		"example":false
	}
}


```
<a name="1mPxe"></a>
## 5. 常规心率上传
  url：域名 + heartrate-rest/api/heart/v1.0/upload/uploadHeartRate<br />  method：POST<br />
<br />**入参:**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| list | List<Object> | 原始心率列表 |  |
| associatedId | String | 关联账号id |  |


<br />原始心率列表:

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| deviceId | String | 设备id | 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| quantityOfHeartRate | Integer | 当前上传心率数据条数 |  |
| heartRates | String | 心率数据集合 | 16进制<br />5分钟一笔 |
| measurementDate | Long | 测量开始时间 |  |

<a name="tPdvX"></a>
###### 示例报文：
```json

{
	"list":[
		{
			"deviceId":"test",
			"quantityOfHeartRate":288,
			"heartRates":"4143453f3d383838383b3f3d403e3a3b3b3c3c3d3d3e3d3b3d3c3f3e3f3c3d3d3d3d3d3d3e3f40403f3d3d3e3e3e3e3f3e3f42403b3a3a3d3d3f3c3b3b3e3f403f4040403f3f403f4040413d3e3f3d3e3d3e3d3b3d3d3c3a3e3e3e3d403e413c3d3e3e3f3d3d3d3d3e3e3f3f464646403e404042414043464043434040414449526c7174455144565c5c6f696666676e6d666b6e5a41414349006c00656b69594a607163604344637170694a443b3a43504d3e434a5661646969504b4b494d666664686f71736a733f3e3a4442604140424266666b51434242424244494c4b494b58585a63656c69656a756c6c7073767700564d514d354c4f3b394b4f4c5c554c4d4b4b4b4b4b524f5259594c626664674f4e524953494c5b66544746464645",
			"measurementDate":1604802120000
		}
	]
}
```

