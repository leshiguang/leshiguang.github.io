<a name="X1iSl"></a>
## 1. 查询日步数批量接口
url :  域名 +  /sport-rest/step/query/getDayStepInfoList<br />method: GET
<a name="1ZQB6"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| measurementDate | long | 测量时间 | 时间戳 |
| size | int | 数据条数 | >= 1 && <= 50 |
| associatedId | String | 关联账号id |  |

<a name="QzxAa"></a>
##### 出参（List）:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| stepInfo | Object | 步数信息 | 一天一条 |
| stepTargetInfo | Object | 步数目标信息 |  |
| caloriesDistanceInfo | Object | 卡路里距离信息 | 有步数信息才会有数据 |
| stepStatisticsInfo | Object | 步数统计信息 |  |
|  |  |  |  |

<a name="oVnfn"></a>
###### 步数信息：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| step | Integer | 总步数 | 手环/手机/微信步数最大值 |
| measurementDate | Date | 测量时间 | 每天的0点0分<br />如：yyyy-MM-dd 00:00:00 |
| bandStep | Integer | 手环步数 |  |
| dataSource | Integer | 数据来源 | 1-手环<br />2-手机<br />3-微信 |

<a name="1fBlS"></a>
###### 步数目标信息：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| targetValue | Integer | 目标值 |  |
| targetType | Integer | 目标类型 | 1 步数；2 卡路里；3 距离<br />注：目前只有步数目标 |
| ~~combo~~ | ~~Integer~~ | ~~连击达标天数~~ |  |
| targetState | Integer | 是否达标 | 达标状态：0未达标，1达标 |

<a name="vkK3e"></a>
###### 卡路里距离信息:
| 字段 | 类型 | 描述 |  |
| :--- | :--- | :--- | :--- |
| calories | Double | 卡路里 |  |
| caloriesText | String | 卡路里文案 |  |
| distance | Double | 距离 | 单位：千米 |
| distanceText | String | 距离文案 |  |

<a name="PzkWR"></a>
###### 步数统计信息:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| maxStep | Integer | 步数最大值 |  |
| avgStep | Integer | 平均步数 |  |
| reachCount | Integer | 达标数 |  |

<a name="aNU6T"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"stepInfo":{
				"step":6116,
				"bandStep":0,
				"measurementDate":1599062400000,
				"dataSource":3
			},
			"stepTargetInfo":{
				"targetValue":5000,
				"targetType":1,
				"combo":0,
				"targetState":1
			},
			"caloriesDistanceInfo":{
				"calories":205,
				"caloriesText":"≈4.4根冰棒，减22.8g脂肪",
				"distance":4.6,
				"distanceText":"≈11.5圈操场，减少排碳229.4g"
			},
			"stepStatisticsInfo":{
				"maxStep":32246,
				"avgStep":7221,
				"reachCount":22
			}
		},
		{
			"stepInfo":{
				"step":5693,
				"bandStep":5693,
				"measurementDate":1599148800000,
				"dataSource":1
			},
			"stepTargetInfo":{
				"targetValue":5000,
				"targetType":1,
				"combo":0,
				"targetState":1
			},
			"caloriesDistanceInfo":{
				"calories":196,
				"caloriesText":"≈4.2根冰棒，减21.8g脂肪",
				"distance":4.2,
				"distanceText":"≈10.4圈操场，减少排碳208.5g"
			},
			"stepStatisticsInfo":{
				"maxStep":32246,
				"avgStep":7231,
				"reachCount":22
			}
		},
		{
			"stepInfo":{
				"step":2204,
				"bandStep":2182,
				"measurementDate":1599235200000,
				"dataSource":3
			},
			"stepTargetInfo":{
				"targetValue":5000,
				"targetType":1,
				"combo":0,
				"targetState":0
			},
			"caloriesDistanceInfo":{
				"calories":74,
				"caloriesText":"≈5.7块奶糖，减8.2g脂肪",
				"distance":1.7,
				"distanceText":"≈4.1圈操场，减少排碳82.7g"
			},
			"stepStatisticsInfo":{
				"maxStep":32246,
				"avgStep":7105,
				"reachCount":21
			}
		},
		{
			"stepInfo":{
				"step":1340,
				"bandStep":1340,
				"measurementDate":1599321600000,
				"dataSource":1
			},
			"stepTargetInfo":{
				"targetValue":5000,
				"targetType":1,
				"combo":0,
				"targetState":0
			},
			"caloriesDistanceInfo":{
				"calories":36,
				"caloriesText":"≈2.8块奶糖，减4.0g脂肪",
				"distance":1,
				"distanceText":"≈2.4圈操场，减少排碳48.0g"
			},
			"stepStatisticsInfo":{
				"maxStep":32246,
				"avgStep":6962,
				"reachCount":20
			}
		},
		{
			"stepInfo":{
				"step":2269,
				"bandStep":2121,
				"measurementDate":1599408000000,
				"dataSource":3
			},
			"stepTargetInfo":{
				"targetValue":5000,
				"targetType":1,
				"combo":0,
				"targetState":0
			},
			"caloriesDistanceInfo":{
				"calories":76,
				"caloriesText":"≈5.8块奶糖，减8.4g脂肪",
				"distance":1.7,
				"distanceText":"≈4.3圈操场，减少排碳85.1g"
			},
			"stepStatisticsInfo":{
				"maxStep":32246,
				"avgStep":7009,
				"reachCount":20
			}
		}
	]
}
```
<a name="vU5vU"></a>
## 2. 查询周步数接口
url :  域名 +   /sport-rest/step/query/getWeekStepInfo<br />method: GET
<a name="rNh44"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| measurementDate | long | 测量时间 | 时间戳 |
| associatedId | String | 关联账号id |  |

<a name="aAsMD"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| weekStepInfo | Object | _周步数信息_ | 一周一条<br />见[日步数接口出参](#hn9Jq) |
| caloriesDistanceInfo | Object | 卡路里距离信息 | 见[日步数接口出参](#hXPLA) |
| stepStatisticsInfo | Object | 步数统计信息 | 见[日步数接口出参](#pQU9e) |

示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"weekStepInfo":[
			{
				"step":15318,
				"measurementDate":1598198400000,
				"dataSource":1
			},
			{
				"step":7476,
				"measurementDate":1598284800000,
				"dataSource":1
			},
			{
				"step":5973,
				"measurementDate":1598371200000,
				"dataSource":1
			},
			{
				"step":5952,
				"measurementDate":1598457600000,
				"dataSource":3
			},
			{
				"step":8630,
				"measurementDate":1598544000000,
				"dataSource":1
			},
			{
				"step":3643,
				"measurementDate":1598630400000,
				"dataSource":1
			},
			{
				"step":9410,
				"measurementDate":1598716800000,
				"dataSource":3
			}
		],
		"caloriesDistanceInfo":{
			"calories":1756,
			"caloriesText":"≈4.6块蛋糕，减195.1g脂肪",
			"distance":41.1,
			"distanceText":"≈102.7圈操场，减少排碳2053.6g"
		},
		"stepStatisticsInfo":{
			"maxStep":15318,
			"avgStep":8057,
			"reachCount":6
		}
	}
}
```
<a name="Bvdms"></a>
## 3. 查询月步数接口
url :  域名 +   /sport-rest/step/query/getMonthStepInfo<br />method: GET
<a name="PAU0d"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| measurementDate | long | 测量时间 | 时间戳 |
| associatedId | String | 关联账号id |  |

<a name="mQhZU"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| monthStepInfo | Object | _月步数信息_ | 每月一条<br />见[日步数接口出参](#dJHg3) |
| caloriesDistanceInfo | Object | 卡路里距离信息 | 见[日步数接口出参](#hXPLA) |
| stepStatisticsInfo | Object | 步数统计信息 | 见[日步数接口出参](#pQU9e) |
| totalStep | Integer | _总步数_ |  |


<br />示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"totalStep":223122,
		"monthStepInfo":[
			{
				"step":35628,
				"measurementDate":1596384000000,
				"dataSource":0
			},
			{
				"step":37396,
				"measurementDate":1596988800000,
				"dataSource":0
			},
			{
				"step":53019,
				"measurementDate":1597593600000,
				"dataSource":0
			},
			{
				"step":56402,
				"measurementDate":1598198400000,
				"dataSource":0
			},
			{
				"step":60029,
				"measurementDate":1598803200000,
				"dataSource":0
			}
		],
		"caloriesDistanceInfo":{
			"calories":6671,
			"caloriesText":"≈17.6块蛋糕，减741.3g脂肪",
			"distance":163.5,
			"distanceText":"≈408.7圈操场，减少排碳8174.7g"
		},
		"stepStatisticsInfo":{
			"maxStep":20572,
			"avgStep":7197,
			"reachCount":23
		}
	}
}
```
<a name="pl5mS"></a>
## 4. 设置步数目标
url :  域名 +   /sport-rest/miniProgram/setTargetStep<br />method: POST<br />
<br />**header参数或者url参数**<br />**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 关联账号id | 关联账号id<br /> |

<a name="eNnyj"></a>
##### post入参:



| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| targetStep | Integer | 步数目标值 |  |

<a name="ZAwOG"></a>
##### 出参:
无
<a name="YxXLq"></a>
###### 示例入参：
```json
{
	"targetStep":3301
}
```
<a name="7E9gk"></a>
## 5. 查询步数目标
url :  域名 +   /sport-rest/miniProgram/getTargetStep<br />method: GET
<a name="4L43E"></a>
##### **header参数或者url参数**
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 关联账号id | 关联账号id<br /> |

<a name="naiwr"></a>
##### 
<a name="8nhd1"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| data | Integer | 目标值 | 公共参数 |


<br />示例出参:
```json
{
	"code":200,
	"msg":"成功",
	"data":3200
}
```
<a name="toZJP"></a>
## 6. 上传用户的设备步数记录（数据来源于外部）
url：域名 +  /sport-rest/step/upload/uploadPedometerFromThirdparty<br />method: POST<br />**header参数或者url参数**<br />**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 第三方关联账户id | 关联账号id<br /> |

<a name="TGCUU"></a>
##### post报文入参：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| list | List<Object> | 设备测量记录 |  |



<a name="WHRQH"></a>
###### 设备测量记录：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| deviceId | string | 设备标识id |  |
| measurementTime | Date | 测量时间 |  |
| step | Integer | 步数 |  |
| calories | Double | 卡路里 |  |
| distance | Double | 距离 |  |


