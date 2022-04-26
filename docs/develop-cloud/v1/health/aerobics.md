<a name="OYMx9"></a>
## 1.1 上传有氧能力接口
**Url：**/sport-rest/run/uploadAerobics<br />请求方式：post<br />**入参:**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| list | List<Obj> | 有氧数据列表 |  |

有氧数据：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| **sportId** | String | 运动数据uuid | 必传 |
| aerobics | Double | _有氧运动值_ | 可以不传，后端会自己计算 |
| **userId** | Long | _用户id_ | 必传 |
| **deviceId** | String | _设备id_ | 必传 |
| **measurementTime** | Date | _测量时间_ | 必传 |
| **distance** | Double | _总里程(米)_ | 必传 |
| **dataSource** | Integer | 数据来源 | _0-设备；_<br />_1-微信；_<br />_2-安卓app；_<br />_3-iosApp；_<br />_4-其他_ |
| **created** | Date | 创建时间 | 必传 |
| **dataType** |  | _数据类型_ | _0:watch跑步数据,_<br />_1:自动识别跑步数据,_<br />_2:轨迹跑手环连接GPS成功产生的跑步数据,_<br />_3:轨迹跑手环连接GPS失败产生的跑步数据,4_<br />_:戴手环手机轨迹跑手动产生,_<br />_5:不戴手环手机轨迹跑手动产生_ |
| **aerobicsType** | Ingeger | _有氧能力类型_ | _1:12分钟跑_<br />_2:6分钟走_ |
| **age** | Ingeger | _用户年龄_ | 必传 |
| **sex** | Ingeger | _用户性别_ | 必传 |
| **weight** | Double | _用户体重_ | 必传 |
| **silentHeartRate** | Ingeger | _用户静息心率_ | 必传 |
| ~~**dataVersion**~~ |  |  |  |
| **heartRates** | String | _12分钟跑心率_ | 可以不传 |
| **sportAge** | Ingeger | _运动年龄_ | 可以不传，后端会自己计算 |

**出参:**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| data(公共参数) | List<Object> | 有氧能力数据列表 |  |

<a name="FivbF"></a>
## 1.2 查询有氧能力详细数据列表接口
**Url：**/sport-rest/aerobics/getAerobicsList<br />请求方式：GET<br />入参:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| size | Integer | 查询数据条数 |  |
| timestamp | Date | 测量时间 |  |
| queryDirection | Integer | _查询方向_ | _1：查询大于等于_timestamp日期的数据<br />_-1：查询小于等于_timestamp日期的数据<br />0：与-1一致 |


出参(List):

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| list | List<Obj> | 有氧数据列表 |  |
| longTimeNoData | boolean | 是否长时间没数据 | 是否超过30天没有更新数据<br />只有查询当日数据才会展示该值 |
| endPage | Boolean | 是否最后一页 |  |

有氧数据列表：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dateText | Strnig | 月日文本描述 | 示例：<br />今天<br />昨天<br />08/07<br />08/09 |
| timeText | String | 时分文本描述 | 示例：<br />12:56 |
| measurementTime | Date | 测量时间戳 |  |
| aerobics | Double | 当前有氧能力值 |  |
| maxAerobics | Double | 最大有氧能力值 | 固定75 |
| ~~intervalValues~~ | ~~List<Integer>~~ | ~~有氧等级区间值列表~~ | ~~共4个值，从小到大~~<br />~~示例：[42.2,47.5,51.1,56.2]~~<br />~~差：[0,42.2)~~<br />~~尚可：[42.2,47.5)~~<br />~~良好：[47.5,51.1)~~<br />~~很好：[51.1,56.2)~~<br />~~优秀：[56.2,+~~~~∞~~~~)~~ |
| level | Integer | 有氧等级 | 1-优秀<br />2-很好<br />3-良好<br />4-尚可<br />5-差 |
| levelContent | String | _有氧能力等级描述_ |  |
| ageText1 | String | 年龄文案1 |  |
| ageText2 | String | 年龄文案2 |  |
| ageText3 | String | 年龄文案3 |  |
| tips | String | 底部文案 |  |
| runInfo | Object | 运动数据 |  |

运动数据：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| distance | Double | _运动距离_ |  |
| avgSpeed | String | _平均配速_ |  |
| avgHeartRate | Integer | _平均心率_ |  |

```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"list":[
			{
				"dateText":"01/15",
				"timeText":"22:02",
				"measurementTime":1579096923000,
				"aerobics":35.98,
				"maxAerobics":75,
				"level":3,
				"levelContent":"良好",
				"ageText1":"对应年龄为0岁",
				"ageText2":"比实际年龄年轻137岁",
				"ageText3":"超过65%同龄用户",
				"tips":"你的有氧能力不错，不过还有不小的提升空间；跟随库珀有氧运动计划，很快就能看到成效。"
			},
			{
				"dateText":"01/15",
				"timeText":"12:02",
				"measurementTime":1579060923000,
				"aerobics":35,
				"maxAerobics":75,
				"level":3,
				"levelContent":"良好",
				"ageText1":"对应年龄为0岁",
				"ageText2":"比实际年龄年轻137岁",
				"ageText3":"超过60%同龄用户",
				"tips":"你的有氧能力不错，不过还有不小的提升空间；跟随库珀有氧运动计划，很快就能看到成效。"
			},
			{
				"dateText":"01/14",
				"timeText":"22:02",
				"measurementTime":1579010523000,
				"aerobics":23.98,
				"maxAerobics":75,
				"level":5,
				"levelContent":"差",
				"ageText1":"对应年龄为0岁",
				"ageText2":"比实际年龄年轻137岁",
				"ageText3":"超过15%同龄用户",
				"tips":"你的有氧能力有很大的提升空间，跟随库珀有氧运动计划，改善自己的健康状态吧。"
			}
		],
		"longTimeNoData":true,
		"endPage":false
	}
}
```

<a name="ofBCp"></a>
## 1.3 查询有氧能力趋势图接口
Url：/sport-rest/aerobics/getAerobicsTrendList<br />请求方式：GET

入参:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| ~~size~~ | ~~Integer~~ | ~~查询数据条数~~ |  |
| timestamp | Date | 测量时间 |  |
| queryDirection | Integer | _查询方向_ | _1：查询大于等于_timestamp日期的数据<br />_-1：查询小于等于_timestamp日期的数据<br />0：与-1一致 |

出参(list): 没有数据返回空集合

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| value | Double | 有氧数据列表 |  |
| measurementDate | Date | 测量时间 |  |

示例报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"value":33.98,
			"measurementDate":1578924123000
		},
		{
			"value":23.98,
			"measurementDate":1579010523000
		},
		{
			"value":35.98,
			"measurementDate":1579096923000
		}
	]
}
```
<a name="pbYlU"></a>
## 1.3 **查询指定月有数据的日期**
Url：/sport-rest/aerobics/getCalender<br />请求方式：GET<br />入参:

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| queryMonth | String | 指定月份 | 格式：yyyy-MM |

出参(list):

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| data(公共参数) | Date | 时间戳 | 只返回有数据的日期<br />yyyy-MM-dd |

示例报文：<br />查询入参：20200101
```json

{
	"code":200,
	"msg":"成功",
	"data":[
		1578844800000,
		1579017600000,
		1578931200000
	]
}
```

