**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="jrQIg"></a>
## 1. 运动详情页查询
```
GET api/sportmanage/v3.0/exercise/query/detail/get
```
<a name="hEbpc"></a>
##### 入参：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| sportId | String | 运动记录id | ​<br /> |

<a name="hi8EB"></a>
##### 出参：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| recordType | Integer | 数据类型 |  1-手环设备产生数据<br /> 2-手动添加数据<br /> 3-跳绳数据 |
| exerciseInfo | Object | 锻炼详情信息 | ​<br /> |
| heartRateInfo | Object | 运动心率信息 | ​<br /> |
| productList | List | 商品信息 | ​<br /> |
| feelType | Integer | 运动感受 | (1, "疲惫"),<br />(2, "正好"),<br />(3, "轻松") |

<a name="tMJzn"></a>
###### 锻炼详情信息
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| sportId | String | 运动记录ID | 所有数据类型共有参数 |
| userId | Long | 用户id |  |
| startTime | Date | 开始时间 |  |
| endTime | Date | 结束时间 |  |
| calories | BigDecimal | 总卡路里 |  |
| exerciseTime | Integer | 运动时长 |  |
| exerciseType | Integer | 锻炼类型 |  |
| exerciseMinute | Integer | 运动分钟数 |  |
| exerciseName | String | 锻炼名称 |  |
| icon | String | 图标 |  |
| manual | Boolean | 是否手动添加的运动数据 |  |

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| paces | List | 配速信息 | 1-手环设备产生数据专属参数 |
| paceInterval | Integer | 配速间隔距离，单位米 |  |
| avgPace | Integer | 平均配速 |  |
| swmRounds | Integer | 游泳圈数-游泳类型 |  |
| poolLength | Integer | 泳池长度-游泳类型 |  |
| remark | String | 存储设备相关信息 |  |
| avgSpeed | BigDecimal | 平均速度 单位：km/h |  |
| bestSpeed | BigDecimal | 最大速度 单位：km/h |  |
| deviceId | String | 设备id |  |
| step | Integer | 总步数，当锻炼类型为4时代表趟数 |  |
| maxHeartRate | Integer | 最大心率 |  |
| maxStepRate | Integer | 最大步频 |  |
| avgHeartRate | Integer | 平均心率 |  |
| avgStepRate | Integer | 平均步频 |  |
| distance | BigDecimal | 总里程 |  |

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| measurementDate | Date | 测量时间 | 2-手动添加数据专属参数 |

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| skipRopeMode | Integer | 跳绳模式<br />1 - "自由模式"<br />2- "定时模式"<br />3- "计数模式"​<br />4- "闯关模式" | 3-跳绳数据专属参数 |
| skipCount | Integer | 跳绳个数 |  |
| skipAvgCount | Integer | 跳绳频次 |  |
| skipTripCount | Integer | 绊绳次数 |  |

<a name="MhEiI"></a>
###### 运动心率信息:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| startTime | Date | 开始运动时间 | ​<br /> |
| endTime | Date | 结束运动时间 | ​<br /> |
| maxHeartRate | Integer | 最大心率 | ​<br /> |
| minHeartRate | Integer | 最小心率 | ​<br /> |
| avgHeartRate | Integer | 平均心率 | ​<br /> |
| heartRateList | List | 心率集合 | ​<br /> |
| ~~heartRateSecondsList~~ | ~~List~~ | ~~心率运动时长秒~~ | ~~每个心率点对应的运动时长~~ |
| heartRateIntervals | List | 心率区间信息 | ​<br /> |

<a name="BEUZH"></a>
###### 心率区间信息:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| type | Integer | 区间名 | 1-热身心率区间<br />2-燃脂区间<br />3-有氧耐力区间<br />4-无氧耐力区间<br />5-极限区间 |
| start | Integer | _区间开始值_ |  |
| end | Integer | _区间结束值_ |  |
| value | Integer | 秒数 |  |
| percent | Integer | 百分比 |  |

<a name="XlCXa"></a>
###### 商品信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| itemId | Long | 标题 |  |
| title | String | 商品名称 |  |
| picture | String | 商品图片链接 |  |
| sellPoint | String | 卖点 |  |

​<br />
<a name="WuH8x"></a>
###### 设备数据示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"recordType":1,
		"exerciseInfo":{
			"sportId":"078178aa43ba054a99a8af1858669ece",
			"userId":23342312,
			"startTime":1616770208000,
			"endTime":1616791132000,
			"deviceId":"b404b0005e13",
			"calories":9.6,
			"exerciseTime":20924,
			"exerciseType":1,
			"exerciseMinute":348,
			"exerciseName":"跑步",
			"icon":"https://files.lifesense.com/other/20191120/8a3af98ca2e54bcdbba40275335b7690.png",
			"manual":false,
			"avgPace":44237,
			"step":648,
			"maxHeartRate":126,
			"maxStepRate":116,
			"avgHeartRate":68,
			"avgStepRate":2,
			"distance":473
		},
		"heartRateInfo":{
			"startTime":1616770208000,
			"endTime":1616791132000,
			"heartRateList":[
118,118,122,124,125,126,114,111,116,120,103,101,103,110,113,116,112,108,77,77,82,82,89,93,93,103,104,105,111,76,80,79,81,81,81,81,81,81,81,81,66,56,56,56,57,60,60,60,60,60,62,62,62,79,73,75,76,76,83,87,70,70,75,73,75,76,75,75,79,81,83,84,77,68,73,73,72,73,78,74,70,72,78,85,88,80,73,73,73,78,69,72,69,70,70,70,72,68,68,68,74,67,67,68,66,66,63,64,65,63,68,63,64,64,63,65,60,64,63,63,62,64,64,64,64,64,64,64,64,63,62,64,62,60,61,62,62,63,62,64,63,63,62,60,61,56,59,62,61,60,60,60,64,67,65,65,63,65,66,64,68,65,62,63,62,60,66,58,63,61,64,64,63,64,64,63,62,62,62,62,61,62,62,64,64,62,64,63,63,63,63,62,63,63,64,63,62,62,63,62,62,64,60,61,63,62,62,63,62,63,62,62,63,61,62,63,64,69,64,63,64,64,63,63,67,69,65,64,63,61,64,65,65,64,62,64,60,61,63,64,64,65,64,62,64,60,61,62,62,61,61,63,62,61,61,61,62,63,63,62,62,61,62,62,60,59,60,59,60,60,60,61,61,61,60,61,61,61,60,61,59,59,61,64,65,61,59,60,61,59,59,59,60,59,62,63,61,62,60,59,62,61,59,63,62,62,56,59,59,61,58,61,64,60,65,67,69,70,66,69,63,65,65,67,67,64,63,64,62,62,66,64,63,64,57,62,62,60,60,60,59,59,59,59,63,64,60,62,64
			],
			"maxHeartRate":126,
			"minHeartRate":56,
			"avgHeartRate":68,
			"heartRateIntervals":[
				{
					"type":1,
					"value":600,
					"start":94,
					"end":111,
					"percent":2
				},
				{
					"type":2,
					"value":712,
					"start":112,
					"end":130,
					"percent":3
				},
				{
					"type":3,
					"value":0,
					"start":131,
					"end":149,
					"percent":0
				},
				{
					"type":4,
					"value":0,
					"start":150,
					"end":168,
					"percent":0
				},
				{
					"type":5,
					"value":0,
					"start":169,
					"end":188,
					"percent":0
				}
			]
		},
		"productList":[
			{
				"itemId":201280006002,
				"title":"迪士尼每日坚果1 750g CP44",
				"picture":"https://sports-qa-files.lifesense.com/other/20200507/d45a2933ebab44b8a324d02f7cfd60f7.jpg"
			}
		],
		"feelType":3
	}
}
```
<a name="CrmOT"></a>
###### 手动数据示例报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"recordType":2,
		"exerciseInfo":{
			"sportId":"ba8930c11b3c46579a063af1821b2823",
			"userId":23342312,
			"startTime":1627299335000,
			"calories":425.1,
			"exerciseType":62,
			"exerciseMinute":39,
			"exerciseName":"慢跑",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/32d596bb6b4a421b97fc3ef5ee8f7605.png",
			"manual":true,
			"measurementDate":1627299335000
		},
		"productList":[
			{
				"itemId":201280006002,
				"title":"迪士尼每日坚果1 750g CP44",
				"picture":"https://sports-qa-files.lifesense.com/other/20200507/d45a2933ebab44b8a324d02f7cfd60f7.jpg"
			}
		],
		"feelType":3
	}
}
```
<a name="GnqQG"></a>
###### 跳绳数据示例报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"recordType":3,
		"exerciseInfo":{
			"sportId":"d44387c5d6f1499184839396903bfcd9",
			"userId":23342312,
			"startTime":1627298470000,
			"endTime":1627298470000,
			"calories":0,
			"exerciseType":25,
			"exerciseMinute":0,
			"exerciseName":"跳绳",
			"icon":"https://cn-pics.leshiguang.com/management/2021/07/26/296de75675b048698efbaa35839b56d0.png",
			"manual":false,
			"skipRopeMode":4,
			"skipCount":1,
			"skipAvgCount":1,
			"skipTripCount":1
		},
		"productList":[
			{
				"itemId":201280006002,
				"title":"迪士尼每日坚果1 750g CP44",
				"picture":"https://sports-qa-files.lifesense.com/other/20200507/d45a2933ebab44b8a324d02f7cfd60f7.jpg"
			}
		]
	}
}
```

