<a name="R1PgL"></a>
# 注意
**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**
<a name="fOW2V"></a>
# 1.步数上传
```bash
POST /api/step/v2.0/upload/uploadBandDeviceStep
```
> 该校验会校验设备id的合法性



<a name="vodik"></a>
## 1.1 上传手环的步数数据

<br />**入参**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| list | List<设备测量记录> | 步数集合 |  |

**设备测量记录：**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| deviceId | string | 设备标识id | 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| measurementTime | Date | 测量时间 |  |
| step | Integer | 步数 |  |
| calories | Double | 卡路里 |  |
| distance | Double | 距离 |  |



<a name="b74s6"></a>
## 1.2 上传非手环的步数数据
```bash
POST /api/step/v2.0/upload/uploadWXStep
```
**入参:	**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| stepInfoList | List<步数测量记录> | 步数集合，一天一条 |  |

步数测量记录：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| step | int | 步数 | 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| timestamp | long | 测量时间，单位是 s |  |

<a name="Jt6Gk"></a>
##### ​<br />
<a name="sBdZM"></a>
# 2.步数查询
<a name="gRw6F"></a>
## 2.1 查询用户某一天的步数数据
```bash
GET /api/step/v2.0/query/getDayStep
```
<a name="i2J1C"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| measurementDate | long | 查询结束时间 | 时间戳 |
| size | int | 往前查询多少天的数据 | >= 1 && <= 50 |


<br />

<a name="Wakk4"></a>
##### 出参（List）:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| stepInfo | Object | 步数信息 | 一天一条 |
| stepTargetInfo | Object | 步数目标信息 |  |
| caloriesDistanceInfo | Object | 卡路里距离信息 | 有步数信息才会有数据 |
| stepStatisticsInfo | Object | 步数统计信息 |  |

<a name="XRUtg"></a>
###### 
<a name="hkauz"></a>
###### 步数信息：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| step | Integer | 总步数 | 手环/手机/微信步数最大值<br /> |
| measurementDate | Date | 测量时间 | 每天的0点0分<br />如：yyyy-MM-dd 00:00:00 |
| bandStep | Integer | 手环步数 |  |
| dataSource | Integer | 数据来源 | 1-手环<br />2-手机<br />3-微信 |

<a name="qGdpw"></a>
###### 
<a name="JxvL8"></a>
###### 步数目标信息：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| targetValue | Integer | 目标值 |  |
| targetType | Integer | 目标类型 | 1 步数；2 卡路里；3 距离<br />注：目前只有步数目标 |
| ~~combo~~ | ~~Integer~~ | ~~连击达标天数~~ |  |
| targetState | Integer | 是否达标 | 达标状态：0未达标，1达标 |

<a name="PriDp"></a>
###### 
<a name="U9pkP"></a>
###### 卡路里距离信息:
| 字段 | 类型 | 描述 |  |
| --- | --- | --- | --- |
| calories | Double | 卡路里 |  |
| caloriesText | String | 卡路里文案 |  |
| distance | Double | 距离 | 单位：千米 |
| distanceText | String | 距离文案 |  |

<a name="KJ6jY"></a>
###### 
<a name="udPx7"></a>
###### 步数统计信息:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| maxStep | Integer | 步数最大值 |  |
| avgStep | Integer | 平均步数 |  |
| reachCount | Integer | 达标数 |  |

<a name="dNGFy"></a>
###### 
<a name="M9bbh"></a>
###### 示例报文：
```sql

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


<a name="iUgX1"></a>
## 2.2 查询用户某一周的步数统计数据
```bash
GET /api/step/v2.0/query/getWeekStep
```
<a name="AXkCo"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| measurementDate | long | 查询时间戳 | 系统会根据该时间戳确定要查询的自然周 |

<a name="OPqKa"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| weekStepInfo | Object | _周步数信息_ | 一周一条<br />见[日步数接口出参](#hn9Jq) |
| caloriesDistanceInfo | Object | 卡路里距离信息 | 见[日步数接口出参](#hXPLA) |
| stepStatisticsInfo | Object | 步数统计信息 | 见[日步数接口出参](#pQU9e) |


<br />
<br />示例报文：
```sql

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
<a name="DcZ3V"></a>
## 2.3 查询用户某一个月的步数统计数据
```bash
GET /api/step/v2.0/query/getMonthStep
```
<a name="D0UQx"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| measurementDate | long | 查询时间戳 | 系统会根据该时间戳确定要查询的月 |

<a name="Geml0"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| monthStepInfo | Object | _月步数信息_ | 每月一条<br />见[日步数接口出参](#dJHg3) |
| caloriesDistanceInfo | Object | 卡路里距离信息 | 见[日步数接口出参](#hXPLA) |
| stepStatisticsInfo | Object | 步数统计信息 | 见[日步数接口出参](#pQU9e) |
| totalStep | Integer | _总步数_ |  |


<br />​

示例报文：
```sql

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
<a name="Hwvfc"></a>
## 2.4 查询用户最新的步数记录
```bash
GET /api/step/v2.0/query/getLastDayStep
```
<a name="WQwjj"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| isOnlyQueryBandStep | boolean | 是否仅查询手环步数 |  |

<a name="wMzTy"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| step | Integer | 步数 |  |
| measurementDate | Date | 测量日期 |  |
| targetStep | Integer | 步数目标值 |  |
| calories | Double | 卡路里 |  |
| caloriesText | String | 卡路里文案 |  |
| distance | Double | 距离 | 单位：千米 |
| distanceText | String | 距离文案 |  |


<br />
<br />示例报文：
```sql

{
	"code":200,
	"msg":"成功",
	"data":{
		"calories":127,
		"caloriesText":"≈2.7根冰棒，减14.1g脂肪",
		"distance":2.4,
		"distanceText":"≈6.0圈操场，减少排碳119.7g",
		"step":3193,
		"measurementDate":1622131200000,
		"targetStep":4000
	}
}
```
<a name="bV2Lk"></a>
## 
<a name="VAszz"></a>
## 2.5 查询最近30天的步数记录
```bash
GET /api/step/v2.0/query/getLastThirtyDaysStep
```
<a name="YAall"></a>
##### 入参:
无
<a name="rt4p4"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 数据id |  |
| userId | Long | 用户id |  |
| measurementDate | Date | 测量时间 | ​<br /> |
| deviceId | String | 设备id | 最大步数为手环时，才会有值 |
| step | Integer | 步数 | 该值为所有来源中的最大步数 |
| bandStep | Integer | 手环步数 |  |
| calories | double | 卡路里 | 该值取最大步数数据记录的卡路里 |
| distance | double | 距离 | 该值取最大步数数据记录的距离 |
| createTime | Date | 创建时间 |  |
| updateTime | Date | 更新时间 |  |
| dataSource | Integer | 数据涞源 | 该值取最大步数数据的来源<br />1-手环<br />3-微信 |

<a name="ebUeh"></a>
###### 
<a name="Hj4X6"></a>
###### 示例返回报文：
```sql

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"98b8d45c7edb4ac5982b98c4929f607a",
			"userId":23342312,
			"measurementDate":1626019200000,
			"deviceId":"B404B0005E13",
			"step":77777,
			"bandStep":77777,
			"calories":777,
			"distance":777,
			"createTime":1626058627000,
			"updateTime":1626058765146,
			"active":1,
			"dataSource":1
		},
		{
			"id":"14348",
			"userId":23342312,
			"measurementDate":1625932800000,
			"step":7042,
			"bandStep":6666,
			"calories":277.45,
			"distance":5281.5,
			"createTime":1626076209000,
			"updateTime":1626076209000,
			"dataSource":3
		},
		{
			"id":"14347",
			"userId":23342312,
			"measurementDate":1625846400000,
			"step":7509,
			"calories":295.85,
			"distance":5631.75,
			"createTime":1626076209000,
			"updateTime":1626076209000,
			"dataSource":3
		},
		{
			"id":"14346",
			"userId":23342312,
			"measurementDate":1625760000000,
			"step":11284,
			"calories":477.06,
			"distance":8463,
			"createTime":1625796744000,
			"updateTime":1626076209000,
			"dataSource":3
		},
		{
			"id":"14344",
			"userId":23342312,
			"measurementDate":1625673600000,
			"step":7503,
			"calories":375.15,
			"distance":5627.25,
			"createTime":1625710914000,
			"updateTime":1625796744000,
			"dataSource":3
		},
		{
			"id":"14343",
			"userId":23342312,
			"measurementDate":1625587200000,
			"step":9502,
			"calories":475.1,
			"distance":7126.5,
			"createTime":1625657687000,
			"updateTime":1625710913000,
			"dataSource":3
		},
		{
			"id":"14342",
			"userId":23342312,
			"measurementDate":1625500800000,
			"step":7887,
			"calories":394.35,
			"distance":5915.25,
			"createTime":1625657687000,
			"updateTime":1625657687000,
			"dataSource":3
		},
		{
			"id":"14341",
			"userId":23342312,
			"measurementDate":1625414400000,
			"step":8515,
			"calories":425.75,
			"distance":6386.25,
			"createTime":1625657687000,
			"updateTime":1625657687000,
			"dataSource":3
		},
		{
			"id":"14340",
			"userId":23342312,
			"measurementDate":1625328000000,
			"step":13681,
			"calories":684.05,
			"distance":10260.75,
			"createTime":1625657687000,
			"updateTime":1625657687000,
			"dataSource":3
		},
		{
			"id":"14339",
			"userId":23342312,
			"measurementDate":1625241600000,
			"step":19263,
			"calories":963.15,
			"distance":14447.25,
			"createTime":1625657687000,
			"updateTime":1625657687000,
			"dataSource":3
		},
		{
			"id":"14338",
			"userId":23342312,
			"measurementDate":1625155200000,
			"step":8768,
			"calories":438.4,
			"distance":6576,
			"createTime":1625657687000,
			"updateTime":1625657687000,
			"dataSource":3
		},
		{
			"id":"14337",
			"userId":23342312,
			"measurementDate":1625068800000,
			"step":8240,
			"calories":412,
			"distance":6180,
			"createTime":1625657687000,
			"updateTime":1625657687000,
			"dataSource":3
		},
		{
			"id":"14200",
			"userId":23342312,
			"measurementDate":1624982400000,
			"step":8757,
			"calories":437.85,
			"distance":6567.75,
			"createTime":1625050968000,
			"updateTime":1625657686000,
			"dataSource":3
		},
		{
			"id":"14199",
			"userId":23342312,
			"measurementDate":1624896000000,
			"step":9310,
			"calories":465.5,
			"distance":6982.5,
			"createTime":1625050968000,
			"updateTime":1625050968000,
			"dataSource":3
		},
		{
			"id":"14189",
			"userId":23342312,
			"measurementDate":1624809600000,
			"step":8597,
			"calories":429.85,
			"distance":6447.75,
			"createTime":1624864476000,
			"updateTime":1625050967000,
			"dataSource":3
		},
		{
			"id":"14188",
			"userId":23342312,
			"measurementDate":1624723200000,
			"step":13159,
			"calories":657.95,
			"distance":9869.25,
			"createTime":1624864476000,
			"updateTime":1624864476000,
			"dataSource":3
		},
		{
			"id":"14187",
			"userId":23342312,
			"measurementDate":1624636800000,
			"step":19655,
			"calories":982.75,
			"distance":14741.25,
			"createTime":1624864476000,
			"updateTime":1624864476000,
			"dataSource":3
		},
		{
			"id":"14186",
			"userId":23342312,
			"measurementDate":1624550400000,
			"step":7902,
			"calories":395.1,
			"distance":5926.5,
			"createTime":1624864476000,
			"updateTime":1624864476000,
			"dataSource":3
		},
		{
			"id":"14185",
			"userId":23342312,
			"measurementDate":1624464000000,
			"step":8066,
			"calories":403.3,
			"distance":6049.5,
			"createTime":1624864476000,
			"updateTime":1624864476000,
			"dataSource":3
		},
		{
			"id":"14121",
			"userId":23342312,
			"measurementDate":1624377600000,
			"step":8137,
			"calories":406.85,
			"distance":6102.75,
			"createTime":1624433242000,
			"updateTime":1624864476000,
			"dataSource":3
		},
		{
			"id":"14012",
			"userId":23342312,
			"measurementDate":1624291200000,
			"step":8262,
			"calories":413.1,
			"distance":6196.5,
			"createTime":1624329896000,
			"updateTime":1624433242000,
			"dataSource":3
		},
		{
			"id":"13998",
			"userId":23342312,
			"measurementDate":1624204800000,
			"step":8200,
			"calories":410,
			"distance":6150,
			"createTime":1624261176000,
			"updateTime":1624329895000,
			"dataSource":3
		},
		{
			"id":"13997",
			"userId":23342312,
			"measurementDate":1624118400000,
			"step":14925,
			"calories":746.25,
			"distance":11193.75,
			"createTime":1624261176000,
			"updateTime":1624261175000,
			"dataSource":3
		},
		{
			"id":"13996",
			"userId":23342312,
			"measurementDate":1624032000000,
			"step":15126,
			"calories":756.3,
			"distance":11344.5,
			"createTime":1624261176000,
			"updateTime":1624261175000,
			"dataSource":3
		},
		{
			"id":"13995",
			"userId":23342312,
			"measurementDate":1623945600000,
			"step":8547,
			"calories":427.35,
			"distance":6410.25,
			"createTime":1624261176000,
			"updateTime":1624261175000,
			"dataSource":3
		},
		{
			"id":"13994",
			"userId":23342312,
			"measurementDate":1623859200000,
			"step":8573,
			"calories":428.65,
			"distance":6429.75,
			"createTime":1624261176000,
			"updateTime":1624261175000,
			"dataSource":3
		},
		{
			"id":"13993",
			"userId":23342312,
			"measurementDate":1623772800000,
			"step":7933,
			"calories":396.65,
			"distance":5949.75,
			"createTime":1624261176000,
			"updateTime":1624261175000,
			"dataSource":3
		},
		{
			"id":"13782",
			"userId":23342312,
			"measurementDate":1623686400000,
			"step":8302,
			"calories":415.1,
			"distance":6226.5,
			"createTime":1623740108000,
			"updateTime":1624261175000,
			"dataSource":3
		},
		{
			"id":"13781",
			"userId":23342312,
			"measurementDate":1623600000000,
			"step":4796,
			"calories":239.8,
			"distance":3597,
			"createTime":1623740108000,
			"updateTime":1623740107000,
			"dataSource":3
		},
		{
			"id":"13780",
			"userId":23342312,
			"measurementDate":1623513600000,
			"step":3299,
			"calories":164.95,
			"distance":2474.25,
			"createTime":1623740108000,
			"updateTime":1623740107000,
			"dataSource":3
		}
	]
}
```
<a name="Hgptn"></a>
# ​<br />
<a name="ETgeU"></a>
# 3.步数目标
<a name="iUAfu"></a>
## 3.1 设置步数目标
```bash
POST /api/step/v2.0/target/setTargetStep
```
<a name="yuFau"></a>
##### 入参:



| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| targetStep | Integer | 步数目标值 |  |

<a name="kdfFO"></a>
##### 
<a name="yGIz9"></a>
## 3.2 查询步数目标
```bash
GET /api/step/v2.0/target/getTargetStep
```
<a name="z2en7"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| data | Integer | 目标值 | 公共参数 |


<br />示例出参:
```sql
{
	"code":200,
	"msg":"成功",
	"data":3200
}
```
<a name="Rj88r"></a>
# 

