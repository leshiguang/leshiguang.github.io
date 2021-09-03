**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="cKu5w"></a>
# 1.心率上传
<a name="OQ9ex"></a>
## 1.1 常规心率上传
```
POST /api/heartrate/v2.0/upload/uploadHeartRate
```

<br />**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **list** | List<日间心率> | 心率集合 | ​<br /> |

日间心率

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| deviceId | String | 设备id |  |
| quantityOfHeartRate | Integer | 当前上传心率数据条数 |  |
| heartRates | String | 心率数据集合 | 16进制<br />5分钟一笔 |
| measurementDate | Long | 测量开始时间 |  |


<br />**示例数据：**
```sql

{
	"list":[
		{
			"heartRates":"b9928178a0887c7bb69c7286948ab494748eab8483adbb9d619272b1a48bb7a57777b670a98a7eb28e628c79b4ac9377b6b4779698a07d997b6cb7bc7f7dbbb2b87783628598ae998aa7807f9193a46e95a0ae637f93a063848da97f869cbb628dae9e6a8ba670a289697c60b17dbc6c63937f768165acaf9b8587b96e70788494bd96978d85759b916ea4aaa8797e966aa5739db48c6b6779bb70616b7e90b5ba8c8c6d79a1ac717275ac989ebc8c8d619c75826478ab738faabab39fa1a0a3a7ba9f77898b66a14649543a3854464b37395d5a4b384d553c5c4f4636505459454b4a485e3a59455150445651474d36505b4844503e3552354f4f433f5d53323255553e575a3a464f405d5c4c525b5c5a4e3343513d46323944434357574f3b",
			"quantityOfHeartRate":288,
			"measurementDate":1629469201000,
			"deviceId":"39049f006147"
		},
		{
			"heartRates":"b9928178a0887c7bb69c7286948ab494748eab8483adbb9d619272b1a48bb7a57777b670a98a7eb28e628c79b4ac9377b6b4779698a07d997b6cb7bc7f7dbbb2b87783628598ae998aa7807f9193a46e95a0ae637f93a063848da97f869cbb628dae9e6a8ba670a289697c60b17dbc6c63937f768165acaf9b8587b96e70788494bd96978d85759b916ea4aaa8797e966aa5739db48c6b6779bb70616b7e90b5ba8c8c6d79a1ac717275ac989ebc8c8d619c75826478ab738faabab39fa1a0a3a7ba9f77898b66a14649543a3854464b37395d5a4b384d553c5c4f4636505459454b4a485e3a59455150445651474d36505b4844503e3552354f4f433f5d53323255553e575a3a464f405d5c4c525b5c5a4e3343513d46323944434357574f3b",
			"quantityOfHeartRate":288,
			"measurementDate":1629901201000,
			"deviceId":"39049f006147"
		}
	]
}

```
<a name="w8lPu"></a>
# 2.心率查询
<a name="NKUiK"></a>
## 2.1 查询日全天心率 
```sql
GET /api/heartrate/v2.0/query/dailyQuery/getDailyHeartRate
```
  描述：查询用户在queryTimeStamp之前或之后（包含queryTimeStamp）一天的心率数据，如果查询当天没有会一直往前查找，直到找到有数据的一天。<br />​<br />
<a name="kmZfN"></a>
##### 入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| queryTimeStamp | Long | _查询时间戳_ | 时间戳<br /> |
| queryDirection | Integer | _查询方向_ | _大于0查询大于等于queryTimeStamp某天的心率_<br />_小于0查询小于等于queryTimeStamp某天的心率_<br />_等于0指定查询queryTimeStamp当天的心率_ |
| associatedId | String | 关联账号id |  |



<a name="njGD9"></a>
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

<a name="ZxV8S"></a>
###### 
<a name="CYSSO"></a>
###### 当前心率：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| currentHeartRate | Integer | 最新心率 |  |
| updateTimeStamp | Long | 更新时间戳 |  |

<a name="ZjTmC"></a>
###### 
当日心率：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dailyHeartRateList | List<Integer> | 当日心率 |  |
| dailyMaxHeartRate | Integer | 当日最大心率 |  |
| dailyMinHeartRate | Integer | 当日最小心率 |  |


<br />运动心率信息：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| burningHeartRate | Obj | _燃脂-_中等强度 | 见_运动心率区间_ |
| enduranceHeartRate | Obj | 耐力-较大强度 |  |
| limitHeartRate | Obj | _极限-_极限强度 |  |

<a name="cuXKX"></a>
###### 
运动心率区间:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| start | Integer | _区间开始值_ |  |
| end | Integer | _区间结束值_ |  |
| value | Integer | _所占分钟数_ |  |

<a name="V17x2"></a>
###### 
睡眠心率：

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

<a name="Hrhqu"></a>
###### 
晨脉信息：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| slientHeartRate | String | 晨脉 |  |
| label | String | _标签_ | 过低<br />优<br />一般<br />较快<br />过快 |
| text | String | 晨脉描述 |  |
| analysisText | String | 分析文案 |  |
| lastSevenHeartRateList | List<Object> | 近7天的心率： |  |


<br />近7天的心率：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| silentHeartRate | String | 晨脉 |  |
| dateStamp | String | 标签 |  |


<br />返回示例报文:
```sql
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

<br />

<a name="AdkOV"></a>
## 2.2 查询最近30天心率数据
​<br />
```sql
GET /api/heartrate/v2.0/query/getLastThirtyDaysHeartRate
```
**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

**​**

**出参:**<br />HeartRatePeriodStatisticsDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| maxHeartRate | Integer | 最高心率 | 不存在，最高/低心率都为0 |
| minHeartRate | Integer | 最低心率 | ​<br /> |
| singleDayHeartRates | List(SingleDayHeartRateStatisticsDTO) | 单日心率集合 | ​<br /> |


<br />SingleDayHeartRateStatisticsDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dailyMaxHeartRate | Integer | 最高心率 | ​<br /> |
| dailyMinHeartRate | Integer | 最低心率 | ​<br /> |
| dailyAvgHeartRate | Integer | 平均心率 | ​<br /> |
| silentHeartRate | Integer | 当天的晨脉 | ​<br /> |
| measurementDate | Date | 测量日期 | ​<br /> |


<br />实例:
```sql
{
	"code":200,
	"msg":"成功",
	"data":{
		"maxHeartRate":76,
		"minHeartRate":53,
		"singleDayHeartRates":[
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1623686400000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1623772800000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":76,
				"dailyMinHeartRate":53,
				"dailyAvgHeartRate":62,
				"measurementDate":1623859200000,
				"silentHeartRate":68
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1623945600000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":76,
				"dailyMinHeartRate":53,
				"dailyAvgHeartRate":62,
				"measurementDate":1624032000000,
				"silentHeartRate":68
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624118400000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624204800000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624291200000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624377600000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624464000000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624550400000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624636800000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624723200000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624809600000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624896000000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1624982400000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":76,
				"dailyMinHeartRate":53,
				"dailyAvgHeartRate":62,
				"measurementDate":1625068800000,
				"silentHeartRate":68
			},
			{
				"dailyMaxHeartRate":76,
				"dailyMinHeartRate":53,
				"dailyAvgHeartRate":62,
				"measurementDate":1625155200000,
				"silentHeartRate":68
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625241600000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625328000000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625414400000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625500800000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625587200000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625673600000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625760000000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":76,
				"dailyMinHeartRate":53,
				"dailyAvgHeartRate":62,
				"measurementDate":1625846400000,
				"silentHeartRate":68
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1625932800000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1626019200000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1626105600000,
				"silentHeartRate":0
			},
			{
				"dailyMaxHeartRate":76,
				"dailyMinHeartRate":53,
				"dailyAvgHeartRate":62,
				"measurementDate":1626192000000,
				"silentHeartRate":68
			},
			{
				"dailyMaxHeartRate":0,
				"dailyMinHeartRate":0,
				"dailyAvgHeartRate":0,
				"measurementDate":1626278400000,
				"silentHeartRate":0
			}
		]
	}
}


```



