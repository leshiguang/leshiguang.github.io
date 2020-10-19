<a name="2xtIV"></a>
## 1.1 查询血压信息
**Url：域名+**/**soa_bloodpressure/api/bp/v1.0/getLastSevenDayBpAndExplainInfo**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 第三方Id | <br /> |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| imgUrl | String | 用户头像地址 |  |
| unReadMsgCount | Integer | 未读消息个数 |  |
| hasData | Boolean | 是否有数据 |  |
| bpInfoList | List | 日压信息集合 |  |
| bpExplainInfo | Object | 血压说明信息 |  |
| lastBpInfo | Object | _最后一条平均bp信息_ |  |
| isBind | Boolean | 是否绑定设备 |  |
| operationGuide | String | 操作指南Url |  |


<br />lastAvgBpInfo：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| avgSystolicPressure | Integer | 收缩压（高压） |  |
| avgDiastolicPressure | Integer | 舒张压（低压） |  |
| measurementDateText | String | 测量时间文本描述 | 三种格式：<br />今天<br />昨天<br />MM/dd |
| avgHeartRate | Integer | _心率_ |  |
| level | Integer | 血压等级 | 1-正常血压<br />2-正常血压<br />3-正常高值<br />4-轻度高血压<br />5-中度高血压<br />6-高度高血压<br />7-单纯收缩期高血压 |
| levelText | String | 血压等级描述 |  |


<br />血压集合数据：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| maxSystolicPressure | Integer | 收缩压（高压） |  |
| maxDiastolicPressure | Integer | 舒张压（低压） |  |
| avgSystolicPressure | Integer | 平均收缩压（高压） |  |
| avgDiastolicPressure | Integer | 平均舒张压（低压） |  |
| measurementDate | Date | 测量时间 |  |
| measurementDateText | String | 测量时间文本描述 | 三种格式：<br />今天<br />昨天<br />MM/dd |
| count | Integer | 该日测量条数 |  |
| hasData | Boolean | 是否有数据 |  |
| warning | Boolean | 是否有异常警告 |  |


<br />血压说明信息：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| longTimeNoData | Boolean | _长时间没有数据_ |  |
| riseText | String | 近期血压变化文本描述 | 较大<br />不大<br />偏大<br />过大 |
| systolicPressureRise | Integer | 收缩压变动 |  |
| diastolicPressureRise | Integer | 舒张压变动 |  |
| irregularHeartbeat | Boolean | 是否心率不齐 |  |
| healthRiskText | String | 健康隐患文本 | <br />- 高血压潜在人群<br />- 高血压人群<br />- 高血压高危人群<br /> |
| healthSuggestText | String | 健康建议文案 |  |
|  |  |  |  |


<br />示例返回报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"dayMaxBpList":[
			{
				"measurementDate":1567094400000,
				"measurementDateText":"08/30",
				"maxSystolicPressure":130,
				"maxDiastolicPressure":130,
				"count":1
			},
			{
				"measurementDate":1569340800000,
				"measurementDateText":"09/25",
				"maxSystolicPressure":135,
				"maxDiastolicPressure":135,
				"count":1
			},
			{
				"measurementDate":1570636800000,
				"measurementDateText":"10/10",
				"maxSystolicPressure":110,
				"maxDiastolicPressure":110,
				"count":1
			},
			{
				"measurementDate":1574179200000,
				"measurementDateText":"11/20",
				"maxSystolicPressure":130,
				"maxDiastolicPressure":99,
				"count":1
			},
			{
				"measurementDate":1582819200000,
				"measurementDateText":"02/28",
				"maxSystolicPressure":90,
				"maxDiastolicPressure":90,
				"count":1
			},
			{
				"measurementDate":1583856000000,
				"measurementDateText":"昨日",
				"maxSystolicPressure":130,
				"maxDiastolicPressure":120,
				"count":1
			}
		],
		"lastAvgBpInfo":{
			"measurementDateText":"昨日",
			"systolicPressure":120,
			"level":4,
			"levelText":"建议适当减少钠盐摄入、补充钙和钾盐、增加运动、控制体重哟！",
			"avgDiastolicPressure":99,
			"avgHeartRate":100
		},
		"bpExplainInfo":{
			"warning":false,
			"longTimeNoData":false,
			"riseText":"过大",
			"systolicPressureRise":45,
			"diastolicPressureRise":75,
			"irregularHeartbeat":false,
			"healthSuggestText":"根据您个人的相关信息，建议您血压控制在130/80mmHg以下，建议适当减少钠盐摄入、补充钙和钾盐。"
		},
		"imgUrl":"http://sports-qa-files.lifesense.com/headimg/20190712/daf7f0906a3040679970946801666b47",
		"unReadMsgCount":0,
		"example":false
	}
}


```


<a name="i7jHB"></a>
## 1.2 查询血压分析信息
**Url：域名+**/**soa_bloodpressure/api/bp/v1.0/getBpAnalyzeAndCompareInfo**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | _第三方Id_ |  |
| dateType |  | 查询时间类型 | 1-近7天<br />2-近30天<br />3-近90天<br />4-近一年<br />~~5-自定义~~

 |
| year | Integer | 查询年 | dateType为4的时候有值 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bpInfoList | List | 血压信息集合 |  |
| bpExplainInfo | Object | 血压说明信息 |  |
| compareInfo | Object | 指标对比信息 |  |
| ~~example~~ | ~~Boolean~~ | ~~是否示例~~ |  |


<br />血压信息集合:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| avgSystolicPressure | Integer | 收缩压（高压） |  |
| avgDiastolicPressure | Integer | 舒张压（低压） |  |
| measurementDateText | Date | 测量时间 | 近七日：MM/dd<br />近30天：MM/dd<br />近90天：MM/dd（每周一日期）<br />近1年：X月 |
| <br />avgHeartRate | Integer | _心率_ |  |
| hasData | Boolean | 是否有数据 |  |


<br />血压说明信息:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| warningCount | Integer | 血压异常次数 |  |
| maxBpValue | String | 最大值血压 |  |
| silentHeartRateCount | Integer | 晨脉异常次数 |  |
| riseText | String | 近期血压变化文本描述 | 较大<br />不大<br />偏大<br />过大 |
| systolicPressureRise | Integer | 收缩压变动 |  |
| diastolicPressureRise | Integer | 舒张压变动 |  |
| irregularHeartbeat | Boolean | 是否心率不齐 |  |
| healthRiskText | String | 健康隐患文本 | <br />- 高血压潜在人群<br />- 高血压人群<br />- 高血压高危人群<br /> |
| healthSuggestText | String | 健康建议文案 |  |


<br />指标对比信息:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| startDate | Date | 开始时间 |  |
| endDate | Date | 结束时间 |  |
| startSystolicValue | Integer | 收缩压开始值 |  |
| endSystolicValue | Integer | 收缩压结束值 |  |
| systolicRise | Integer | 收缩压变动值 |  |
| startDiastolicValue | Integer | 舒张压开始值 |  |
| endDiastolicValue | Integer | 舒张压结束值 |  |
| diastolicRise | Integer | 舒张压变动值 |  |
| startHeartRateValue | Integer | 脉搏开始值 |  |
| endHeartRateValue | Integer | 脉搏结束值 |  |
| heartRateRise | Integer | 脉搏变动值 |  |
| startBpDiffValue | Integer | _开始脉压差值_ |  |
| endBpDiffValue | Integer | _结束脉压差值_ |  |
| bpDiffRise | Integer | 脉压差变动值 |  |


<br />示例返回报文：<br />

```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"avgBpInfoList":[
			{
				"measurementDate":1575820800000,
				"measurementDateText":"12/09",
				"hasData":false
			},
			{
				"measurementDate":1576425600000,
				"measurementDateText":"12/16",
				"hasData":false
			},
			{
				"measurementDate":1577030400000,
				"measurementDateText":"12/23",
				"hasData":false
			},
			{
				"measurementDate":1577635200000,
				"measurementDateText":"12/30",
				"hasData":false
			},
			{
				"measurementDate":1578240000000,
				"measurementDateText":"01/06",
				"hasData":false
			},
			{
				"measurementDate":1578844800000,
				"measurementDateText":"01/13",
				"hasData":false
			},
			{
				"measurementDate":1579449600000,
				"measurementDateText":"01/20",
				"hasData":false
			},
			{
				"measurementDate":1580054400000,
				"measurementDateText":"01/27",
				"hasData":false
			},
			{
				"measurementDate":1580659200000,
				"measurementDateText":"02/03",
				"hasData":false
			},
			{
				"measurementDate":1581264000000,
				"measurementDateText":"02/10",
				"hasData":false
			},
			{
				"measurementDate":1581868800000,
				"measurementDateText":"02/17",
				"hasData":false
			},
			{
				"measurementDate":1582473600000,
				"measurementDateText":"02/24",
				"heartRate":80,
				"avgSystolicPressure":90,
				"avgDiastolicPressure":60
			},
			{
				"measurementDate":1583078400000,
				"measurementDateText":"03/02",
				"hasData":false
			},
			{
				"measurementDate":1583683200000,
				"measurementDateText":"03/09",
				"heartRate":100,
				"avgSystolicPressure":120,
				"avgDiastolicPressure":99
			}
		],
		"bpExplainInfo":{
			"riseText":"过大",
			"systolicPressureRise":30,
			"diastolicPressureRise":39,
			"irregularHeartbeat":false,
			"healthSuggestText":"根据您个人的相关信息，建议您血压控制在130/80mmHg以下，建议适当减少钠盐摄入、补充钙和钾盐、增加运动、控制体重哟！",
			"warningCount":1,
			"maxBpValue":"99/80",
			"silentHeartRateCount":0
		},
		"bpCompareInfo":{
			"startDate":1582905599999,
			"endDate":1583856000000,
			"startSystolicValue":90,
			"endSystolicValue":120,
			"systolicRise":39,
			"startDiastolicValue":60,
			"endDiastolicValue":99,
			"diastolicRise":30,
			"startHeartRateValue":80,
			"endHeartRateValue":100,
			"heartRateRise":20
		}
	}
}


```


<a name="DOvCg"></a>
## 1.3 查询历史血压接口
**Url：域名+**/**soa_bloodpressure/api/bp/v1.0/getBpListOfWeek**<br />请求方式：GET<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| queryTime | Long | 查询时间戳(毫秒) |  |
| size | Integer | 查询数量 |  |
| associatedId | String | 第三方id |  |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| weekValue | String | 周名称 | 本周:本周<br />上周:上周<br />本年:1月20日-1月26日<br />其他年:2019年1月20日-1月26日 |
| bpList | List<Object> | 本周详细血压列表 |  |

bpList：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| id | Long | 用户id |  |
| measurementDate | Integer | 测量时间的时间戳 |  |
| systolicPressure | Integer | 高压(收缩压) |  |
| diastolicPressure | Integer | 低压(舒张压) |  |
| heartRate | String | 心率 |  |
| level | Integer | 血压等级 | 1-低血压，<br />2-正常血压<br />3-正常高值<br />4-轻度高血压<br />5-中度高血压<br />6-重度高血压 |
| levelText | String | 血压等级描述 |  |
| irregularHeartbeat | Integer | _心率不齐标示_ | _0为正常，1为不齐_ |
| movementError | Integer | 抖动标示 | 0为正常，1为抖动 |


<br />示例报文：<br />

```json

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"weekName":"03月11日-03月15日",
			"bpList":[
				{
					"id":"632760870ebd40399c414e7690928b5e",
					"userId":23342312,
					"measurementDate":1583895226000,
					"systolicPressure":121,
					"diastolicPressure":100,
					"heartRate":100,
					"level":5,
					"irregularHeartbeat":0,
					"remark":"11号测试2",
					"source":1
				},
				{
					"id":"a2170b386a344835bd26c5713b2be336",
					"userId":23342312,
					"measurementDate":1583895074000,
					"systolicPressure":120,
					"diastolicPressure":99,
					"heartRate":100,
					"level":4,
					"irregularHeartbeat":0,
					"remark":"11号测试",
					"source":1
				}
			]
		},
		{
			"weekName":"02月28日-03月01日",
			"bpList":[
				{
					"id":"61fdb4d7d8f6483fa8f568e653997237",
					"userId":23342312,
					"measurementDate":1582870560000,
					"systolicPressure":90,
					"diastolicPressure":60,
					"heartRate":80,
					"level":2,
					"irregularHeartbeat":0,
					"remark":"测试",
					"source":1
				}
			]
		},
		{
			"weekName":"2019年12月24日-2019年12月29日",
			"bpList":[
				{
					"id":"8db97eac36094d4a9502a126d597b8f0",
					"userId":23342312,
					"measurementDate":1577159940000,
					"systolicPressure":127,
					"diastolicPressure":87,
					"heartRate":78,
					"level":3,
					"irregularHeartbeat":0,
					"remark":"",
					"source":1
				}
			]
		}
	]
}


```


<a name="0ije3"></a>
## 1.4 查询用户最近一条血压信息
**Url：域名+**/**soa_bloodpressure/api/bp/v1.0/getLastRecord**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 第三方Id | <br /> |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| id | String | 当前数据唯一标识 |  |
| userId | Long | 用户id |  |
| measurementDate | Long | 测量时间(毫秒值) |  |
| systolicPressure | Integer | _收缩压（高压）_ |  |
| diastolicPressure | Integer | _舒张压（低压）_ |  |
| heartRate | Integer | _心率_ |  |
| level | Integer | _血压等级_ |  |
| irregularHeartbeat | Integer | _心率不齐标示（0为正常，1为不齐）_ |  |
| movementError | Integer | _抖动标示（0为正常，1为抖动）_ |  |
| remark | String | _备注_ |  |
| source | Integer | _数据来源（0:设备采集;1:手工添加）_ |  |


<br />示例报文：<br />

```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "id": "399d1bb213dc494a97d5f99637015fc3",
        "userId": 23341064,
        "measurementDate": 1597066295000,
        "systolicPressure": 137,
        "diastolicPressure": 89,
        "heartRate": 65,
        "level": 3,
        "irregularHeartbeat": 0,
        "movementError": 0,
        "remark": "",
        "source": 1
    }
}
```


<a name="Csa7S"></a>
## 1.5 _查询用户时间范围内血压记录_
**Url：域名+**/**soa_bloodpressure/api/bp/v1.0/getBpListByTime**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 第三方Id | <br /> |
| startTime | Long | 开始时间(毫秒值) |  |
| endTime | Long | 结束时间(毫秒值) |  |


<br />出参(list集合)：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| id | String | 当前数据唯一标识 |  |
| userId | Long | 用户id |  |
| measurementDate | Long | 测量时间(毫秒值) |  |
| systolicPressure | Integer | _收缩压（高压）_ |  |
| diastolicPressure | Integer | _舒张压（低压）_ |  |
| heartRate | Integer | _心率_ |  |
| level | Integer | _血压等级_ |  |
| irregularHeartbeat | Integer | _心率不齐标示（0为正常，1为不齐）_ |  |
| movementError | Integer | _抖动标示（0为正常，1为抖动）_ |  |
| remark | String | _备注_ |  |
| source | Integer | _数据来源（0:设备采集;1:手工添加）_ |  |


<br />示例报文：<br />

```json
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "id": "b3c5818f12754b7d8a5733393c6546a4",
            "userId": 23341064,
            "measurementDate": 1596448680000,
            "systolicPressure": 128,
            "diastolicPressure": 60,
            "heartRate": 65,
            "level": 3,
            "irregularHeartbeat": 0,
            "movementError": 0,
            "remark": "",
            "source": 1
          
        },
        {
            "id": "13029f0c48014c5495183cceb30605bf",
            "userId": 23341064,
            "measurementDate": 1596509940000,
            "systolicPressure": 161,
            "diastolicPressure": 120,
            "heartRate": 65,
            "level": 6,
            "irregularHeartbeat": 0,
            "movementError": 0,
            "remark": "",
            "source": 1
        },
        {
            "id": "5dbec320cba149c1a5aff4738bc9af8c",
            "userId": 23341064,
            "measurementDate": 1596534960000,
            "systolicPressure": 136,
            "diastolicPressure": 60,
            "heartRate": 73,
            "level": 3,
            "irregularHeartbeat": 0,
            "movementError": 0,
            "remark": "",
            "source": 1
        },
        {
            "id": "16164e43f6cb44f68e4ef8b8575d8598",
            "userId": 23341064,
            "measurementDate": 1596535098000,
            "systolicPressure": 90,
            "diastolicPressure": 60,
            "heartRate": 65,
            "level": 2,
            "irregularHeartbeat": 0,
            "movementError": 0,
            "remark": "",
            "source": 1
        },
        {
            "id": "ffdaa1b9522440f6bf04d091dc46ba3a",
            "userId": 23341064,
            "measurementDate": 1596701728000,
            "systolicPressure": 166,
            "diastolicPressure": 98,
            "heartRate": 69,
            "level": 5,
            "irregularHeartbeat": 0,
            "movementError": 0,
            "remark": "eeee99999",
            "source": 1
        },
        {
            "id": "399d1bb213dc494a97d5f99637015fc3",
            "userId": 23341064,
            "measurementDate": 1597066295000,
            "systolicPressure": 137,
            "diastolicPressure": 89,
            "heartRate": 65,
            "level": 3,
            "irregularHeartbeat": 0,
            "movementError": 0,
            "remark": "",
            "source": 1
        }
    ]
}
```

