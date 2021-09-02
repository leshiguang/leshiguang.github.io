**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="Cbj0y"></a>
# 1.运动上传


<a name="vodik"></a>
## 1.1 上传手环的运动数据


```
POST /api/exercise/v2.0/upload/uploadDeviceExerciseRecord
```

<br />**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| list | List<设备运动记录> | 运动集合 |  |


<br />**设备运动记录：**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| deviceId | String | 设备id | ​<br /> |
| startTime | Date | 开始时间 | ​<br /> |
| endTime | Date | 结束时间 | ​<br /> |
| step | Integer | 总步数，当锻炼类型为4时代表趟数 |  |
| calories | BigDecimal | 总卡路里 | ​<br /> |
| distance | BigDecimal | 总里程 | 单位：米 |
| exerciseTime | Integer | 运动时长 | 单位：秒 |
| maxHeartRate | Integer | 最大心率 | ​<br /> |
| maxStepRate | Integer | 最大步频 | ​<br /> |
| avgHeartRate | Integer | 平均心率 | ​<br /> |
| avgStepRate | Integer | 平均步频 | ​<br /> |
| dataSource | Integer | 数据来源 | 0-设备<br />1-微信<br />2-安卓app<br />3-iosApp<br />4-其他 |
| created | Date | 创建时间 | ​<br /> |
| updated | Long | 更新时间 | ​<br /> |
| requestTime | Long | 请求时间 | ​<br /> |
| dataType | Integer | 数据类型 | ​<br /> |
| avgPace | Integer | 平均配速 | 单位： s/km |
| avgSpeed | BigDecimal | 平均速度 | 单位：km/h |
| bestSpeed | BigDecimal | 最大速度 | 单位：km/h |
| exerciseType | Integer | 锻炼类型 |  |


<br />**示例数据：**
```sql

{
	"list":[
		{
			"deviceId":"00010619b68a",
			"startTime":1627816801000,
			"endTime":1627820401000,
			"step":2023,
			"calories":149.1,
			"distance":1659.17,
			"exerciseTime":720,
			"maxHeartRate":137,
			"maxStepRate":178,
			"avgHeartRate":123,
			"avgStepRate":169,
			"dataSource":0,
			"dataType":4,
			"exerciseType":7
		},
		{
      "deviceId":"0001061a0a88",
			"startTime":1627993201000,
			"endTime":1628000401000,
			"step":2023,
			"calories":149.1,
			"distance":1659.17,
			"exerciseTime":720,
			"maxHeartRate":137,
			"maxStepRate":178,
			"avgHeartRate":123,
			"avgStepRate":169,
			"dataSource":0,
			"dataType":4,
			"exerciseType":7
		}
	]
}


```
<a name="OQ9ex"></a>
## 1.2 上传非手环的运动数据


```
POST /api/exercise/v2.0/upload/uploadManualExerciseRecord
```

<br />**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| list | List<手动运动记录> | 运动集合 |  |


<br />**手动运动记录：**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| measurementDate | Date | 测量时间 |  |
| exerciseMinute | Integer | 运动时长(分钟数) |  |
| exerciseType | Integer | 运动类型 | //手动添加运动类型<br />(60, "散步"),<br />(61, "快走"),<br />(62, "慢跑"),<br />(63, "快跑"),<br />(64, "骑行（慢速）"),<br />(65, "骑行（快速）"),<br />(66, "游泳（低强度）"),<br />(67, "游泳（高强度）"),<br />(68, "高尔夫"),<br />(69, "网球"),<br />(70, "郊游"),<br />(71, "擦窗户"),<br />(72, "擦车"),<br />(73, "扫地"),<br />(74, "拖地"),<br />(75, "整理杂物"),<br />(76, "收拾房间"),<br />(77, "园艺除草"),<br />(78, "木工工作"),<br />(79, "做农活"),<br />(80, "搬家"),<br />(81, "搬重物"),<br />(82, "广场舞"),<br />(83, "爬山"),<br />(84, "帆船运动") |
| feelType | Integer | 运动感受 | 1-疲惫 <br />2-正好<br />3-轻松 |


<br />**示例数据：**
```sql

{
	"list":[
		{
			"userId":26729267,
			"measurementDate":1618997205411,
			"exerciseType":66,
			"feelType":3,
			"exerciseMinute":30
		},
		{
			"userId":26729267,
			"measurementDate":1628000401000,
			"exerciseType":66,
			"feelType":3,
			"exerciseMinute":30
		}
	]
}


```


<a name="tIk58"></a>
# 2.运动查询
<a name="JhhzL"></a>
## 2.1 获取最近30天的运动记录
```
GET /api/exercise/v2.0/query/getLastThirtyDaysExercise
```

<br />**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

​

**出参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| totalCalories | BigDecimal | 所有运动的总消耗卡路里 | ​<br /> |
| totalExerciseMinute | Long | 运动时长，单位分钟 | ​<br /> |
| dayRecordList | List<ExerciseDayListDTO>  | 锻炼记录 | ​<br /> |


<br />ExerciseDayListDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| measurementDate | Date | 日期 |  |
| recordList | List<ExerciseBriefInfoDTO> | 运动记录集合 |  |


<br />ExerciseBriefInfoDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sportId | String | 运动id |  |
| exerciseType | Integer | 运动类型 | 取值见下文 |
| exerciseName | String | 运动名称 |  |
| startTime | Date | 运动开始时间 | ​<br /> |
| exerciseMinute | Integer | 运动时长 |  |
| calories | double | 消耗卡路里 |  |
| manual | boolean | 是否是手动添加的运动数据 |  |
| icon | String | 图标 |  |

exerciseType：手环支持的运动类型如下
```sql
(1,"跑步"), //户外跑步
(2,"健走"),//户外健走
(3,"骑行"),//户外骑行
(4,"游泳"),
(5,"健身"),
(6,"篮球"),
(7,"足球"),
(8,"羽毛球"),
(9,"排球"),
(10,"乒乓球"),
(11,"瑜伽"),
(12,"电竞"),
(15,"室内跑"),//室内跑步
(16,"椭圆机"),
(19,"健身操"),
(20,"打太极"),
(21,"力量训练"),
(22,"室内骑行"),
(23,"划船机"),
(24,"自由训练")
```
还支持手动添加运动数据，手动添加的运动类型很多，不在这里列出<br />**​**

**示例数据：**
```sql

{
	"code":200,
	"msg":"成功",
	"data":{
		"totalCalories":13448.7,
		"totalExerciseMinute":1847,
		"dayRecordList":[
			{
				"measurementDate":1625500800000,
				"recordList":[
					{
						"lowIntensity":0,
						"mediumIntensity":0,
						"highIntensity":0,
						"totalIntensity":0,
						"sportId":"cdc949280e4742b6bf8a7a90a45f9916",
						"exerciseType":66,
						"exerciseName":"游泳（低强度）",
						"startTime":1625575900000,
						"exerciseMinute":999,
						"calories":7092.9,
						"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/54af30fcca724ea9b63316df48c4ed18.png",
						"manual":true,
						"oldTotalIntensity":0
					},
					{
						"lowIntensity":0,
						"mediumIntensity":0,
						"highIntensity":0,
						"totalIntensity":0,
						"sportId":"963850c6d70d4ae59408a1ebf8e758c4",
						"exerciseType":66,
						"exerciseName":"游泳（低强度）",
						"startTime":1625575872000,
						"exerciseMinute":787,
						"calories":5587.7,
						"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/54af30fcca724ea9b63316df48c4ed18.png",
						"manual":true,
						"oldTotalIntensity":0
					}
				]
			},
			{
				"measurementDate":1624291200000,
				"recordList":[
					{
						"lowIntensity":0,
						"mediumIntensity":0,
						"highIntensity":0,
						"totalIntensity":0,
						"sportId":"8f7f45e362c448898113da093defc63b",
						"exerciseType":67,
						"exerciseName":"游泳（高强度）",
						"startTime":1624356729000,
						"exerciseMinute":59,
						"calories":761.1,
						"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/9a395142b942414dae210fa54f0a6ea4.png",
						"manual":true,
						"oldTotalIntensity":0
					},
					{
						"lowIntensity":0,
						"mediumIntensity":0,
						"highIntensity":0,
						"totalIntensity":0,
						"sportId":"2d5d391f43ae4d3f8fc4197acd969e5e",
						"exerciseType":60,
						"exerciseName":"散步",
						"startTime":1624356696000,
						"exerciseMinute":2,
						"calories":7,
						"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/5fb97b1ad8de4ed0b76813a32ef5ef44.png",
						"manual":true,
						"oldTotalIntensity":0
					}
				]
			}
		]
	}
}


```


<a name="wlhNj"></a>
## 2.2  查询单条锻炼记录
```
GET /api/exercise/v2.0/query/getExerciseRecord
```
**入参:**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sportId | String | 运动记录ID |  |


<br />**出参:**<br />**​**

SaaSExerciseRecordDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | String | 运动记录ID | ​<br /> |
| userId | Long | 用户id | ​<br /> |
| deviceId | String | 设备id | ​<br /> |
| startTime | Date | 开始时间 | ​<br /> |
| endTime | Date | 结束时间 | ​<br /> |
| step | Integer | 总步数，当锻炼类型为4时代表趟数 | ​<br /> |
| calories | BigDecimal | 总卡路里 | ​<br /> |
| distance | BigDecimal | 总里程 | 单位：米 |
| exerciseMinute | Integer | 运动分钟数 | ​<br /> |
| maxHeartRate | Integer | 最大心率 | ​<br /> |
| maxStepRate | Integer | 最大步频 | ​<br /> |
| avgHeartRate | Integer | 平均心率 | ​<br /> |
| avgStepRate | Integer | 平均步频 | ​<br /> |
| dataSource | Integer | 数据来源 | ​<br /> |
| created | Date | 创建时间 | ​<br /> |
| updated | Long | 更新时间 | ​<br /> |
| requestTime | Long | 请求时间 | ​<br /> |
| dataType | Integer | 数据类型 | ​<br /> |
| speed | Integer | 配速 | 单位：km/h |
| exerciseType | Integer | 锻炼类型 | ​<br /> |
| changeStartTime | Long | 用户变更开始时间 | ​<br /> |
| changeEndTime | Long | 用户变更结束时间 | ​<br /> |
| paces | List<Integer>  | 配速信息 | 单位：秒 |
| paceInterval | Integer | 配速间隔距离 | 单位：米 |
| avgPace | Integer | 平均配速 | 单位: km/h |
| swmRounds | Integer | 游泳圈数-游泳类型 | ​<br /> |
| poolLength | Integer | 泳池长度-游泳类型 | ​<br /> |
| remark | String | 存储设备相关信息 | ​<br /> |
| avgSpeed | BigDecimal | 平均速度  | 单位：km/h |
| bestSpeed | BigDecimal | 最大速度  | 单位：km/h |
| exerciseName | String | 运动名 | ​<br /> |
| icon | String | 图标 | ​<br /> |
| feelType | Integer | 运动感受 | (1, "疲惫"),<br />(2, "正好"),<br />(3, "轻松") |
| ifManual | Boolean | 是否是手动上传 | ​<br /> |


<br />**示例数据：**
```sql

{
	"code":200,
	"msg":"成功",
	"data":{
		"id":"2334216115",
		"userId":23342161,
		"deviceId":"B404B0005E13",
		"startTime":1574061506000,
		"endTime":1574062106000,
		"step":4000,
		"calories":239.3,
		"distance":1340,
		"exerciseMinute":10,
		"maxHeartRate":60,
		"maxStepRate":60,
		"avgHeartRate":60,
		"avgStepRate":60,
		"dataSource":2,
		"created":1571932800000,
		"updated":1574336352173,
		"requestTime":1574336352169,
		"dataType":2,
		"speed":0,
		"exerciseType":1,
		"changeStartTime":0,
		"changeEndTime":0,
		"avgPace":0,
		"exerciseName":"跑步",
		"icon":"https://files.lifesense.com/other/20191120/8a3af98ca2e54bcdbba40275335b7690.png",
		"ifManual":false
	}
}


```


<a name="D4Xbf"></a>
## 2.3  批量查询锻炼记录
```
POST /api/exercise/v2.0/query/batchGetExerciseRecords
```


<a name="TQa1I"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sportIds | List<String>  | 运动记录ID列表 | ​<br /> |


<br />**出参:**<br />List<SaaSExerciseRecordDTO><br />实例数据：
```sql

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"2d5d391f43ae4d3f8fc4197acd969e5e",
			"userId":23342161,
			"startTime":1624356696000,
			"endTime":1624356696000,
			"calories":7,
			"exerciseMinute":2,
			"exerciseType":60,
			"exerciseName":"散步",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/5fb97b1ad8de4ed0b76813a32ef5ef44.png",
			"feelType":0,
			"ifManual":true
		},
		{
			"id":"40ca8f1b87184920aa26e0a527a542d1",
			"userId":23342161,
			"startTime":1619593535000,
			"endTime":1619593535000,
			"calories":282,
			"exerciseMinute":30,
			"exerciseType":62,
			"exerciseName":"慢跑",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/32d596bb6b4a421b97fc3ef5ee8f7605.png",
			"feelType":1,
			"ifManual":true
		},
		{
			"id":"8f7f45e362c448898113da093defc63b",
			"userId":23342161,
			"startTime":1624356729000,
			"endTime":1624356729000,
			"calories":761.1,
			"exerciseMinute":59,
			"exerciseType":67,
			"exerciseName":"游泳（高强度）",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/9a395142b942414dae210fa54f0a6ea4.png",
			"feelType":0,
			"ifManual":true
		},
		{
			"id":"963850c6d70d4ae59408a1ebf8e758c4",
			"userId":23342161,
			"startTime":1625575872000,
			"endTime":1625575872000,
			"calories":5587.7,
			"exerciseMinute":787,
			"exerciseType":66,
			"exerciseName":"游泳（低强度）",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/54af30fcca724ea9b63316df48c4ed18.png",
			"feelType":0,
			"ifManual":true
		},
		{
			"id":"2334216115",
			"userId":23342161,
			"deviceId":"B404B0005E13",
			"startTime":1574061506000,
			"endTime":1574062106000,
			"step":4000,
			"calories":239.3,
			"distance":1340,
			"exerciseMinute":10,
			"maxHeartRate":60,
			"maxStepRate":60,
			"avgHeartRate":60,
			"avgStepRate":60,
			"dataSource":2,
			"created":1571932800000,
			"updated":1574336352173,
			"requestTime":1574336352169,
			"dataType":2,
			"speed":0,
			"exerciseType":1,
			"changeStartTime":0,
			"changeEndTime":0,
			"avgPace":0,
			"exerciseName":"跑步",
			"icon":"https://files.lifesense.com/other/20191120/8a3af98ca2e54bcdbba40275335b7690.png",
			"ifManual":false
		}
	]
}


```


<a name="IaqCl"></a>
## 2.4 查询用户某一天的运动记录
```
GET /api/exercise/v2.0/query/getOneDayExerciseRecord
```


<a name="IL6Wf"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryTime | Long | 查询时间戳<br />eg:<br />1627355668000<br />(2021-07-27 11:14:28) | 如果指定时间当天运动记录不存在，<br />查询最近有记录的那一天的运动记录 |


<br />**出参:**<br />List<SaaSExerciseRecordDTO><br />实例：
```sql

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"2d5d391f43ae4d3f8fc4197acd969e5e",
			"userId":23342161,
			"startTime":1624356696000,
			"endTime":1624356696000,
			"calories":7,
			"exerciseMinute":2,
			"exerciseType":60,
			"exerciseName":"散步",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/5fb97b1ad8de4ed0b76813a32ef5ef44.png",
			"feelType":0,
			"ifManual":true
		},
		{
			"id":"40ca8f1b87184920aa26e0a527a542d1",
			"userId":23342161,
			"startTime":1619593535000,
			"endTime":1619593535000,
			"calories":282,
			"exerciseMinute":30,
			"exerciseType":62,
			"exerciseName":"慢跑",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/32d596bb6b4a421b97fc3ef5ee8f7605.png",
			"feelType":1,
			"ifManual":true
		},
		{
			"id":"8f7f45e362c448898113da093defc63b",
			"userId":23342161,
			"startTime":1624356729000,
			"endTime":1624356729000,
			"calories":761.1,
			"exerciseMinute":59,
			"exerciseType":67,
			"exerciseName":"游泳（高强度）",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/9a395142b942414dae210fa54f0a6ea4.png",
			"feelType":0,
			"ifManual":true
		},
		{
			"id":"963850c6d70d4ae59408a1ebf8e758c4",
			"userId":23342161,
			"startTime":1625575872000,
			"endTime":1625575872000,
			"calories":5587.7,
			"exerciseMinute":787,
			"exerciseType":66,
			"exerciseName":"游泳（低强度）",
			"icon":"https://cn-pics.leshiguang.com/management/2021/04/22/54af30fcca724ea9b63316df48c4ed18.png",
			"feelType":0,
			"ifManual":true
		},
		{
			"id":"2334216115",
			"userId":23342161,
			"deviceId":"B404B0005E13",
			"startTime":1574061506000,
			"endTime":1574062106000,
			"step":4000,
			"calories":239.3,
			"distance":1340,
			"exerciseMinute":10,
			"maxHeartRate":60,
			"maxStepRate":60,
			"avgHeartRate":60,
			"avgStepRate":60,
			"dataSource":2,
			"created":1571932800000,
			"updated":1574336352173,
			"requestTime":1574336352169,
			"dataType":2,
			"speed":0,
			"exerciseType":1,
			"changeStartTime":0,
			"changeEndTime":0,
			"avgPace":0,
			"exerciseName":"跑步",
			"icon":"https://files.lifesense.com/other/20191120/8a3af98ca2e54bcdbba40275335b7690.png",
			"ifManual":false
		}
	]
}


```



