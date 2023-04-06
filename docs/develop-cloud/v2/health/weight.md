**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**
<a name="A21Ds"></a>
# 1.体重上传
<a name="fmIrp"></a>
## 1.1 上传体脂秤测量的体重数据
```bash
POST /api/weight/v2.0/upload/uploadWeightFromThirdparty
```
_该校验会校验设备id的合法性_
<a name="Oc3mq"></a>
##### 入参： 
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| recordList | List(Object) | 体重记录集合 |  |

<a name="DAgXv"></a>
###### 体重记录：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 体重记录ID | 可以为空 |
| deviceId | String | 设备ID | 设备ID获取参考：[链接](https://docs.sghealth.cn/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| measurementTime | Date | 测量时间 |  |
| weight | Double | 体重 |  |
| resistance50k | Double | 50k电阻值 |  |
| heartRate | Integer | 心率 |  |

<a name="TW9Ne"></a>
###### 示例报文：
```json
{
	"recordList":[
		{
			"measurementTime":1615195409957,
			"deviceId":"a00240000d6b",
			"weight":66.6,
			"heartRate":64,
			"resistance50k":400
		}
		
	]
}
```
<a name="O2na9"></a>
## 1.2 上传用户手动添加的体重数据
```
POST /api/weight/v2.0/upload/manualUploadWeight
```
<a name="W4U7I"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| measurementTime | Date | 测量时间 |  |
| weight | Double | 体重 | 单位：kg |
| pbf | Double | 体脂率 | 可以为空 |

<a name="pQsjJ"></a>
###### 示例报文：
```json
{
	"measurementTime":1615344189239,
	"weight":68.8,
	"pbf":22.22
}
```

<a name="IJzqk"></a>
## 1.3 上传体脂秤测量的体重数据（含分配逻辑）
注：本接口上传的体重会按照分配逻辑，将体重分配给当前用户或者家人，无法分配的添加到待分配的体重列表
```bash
POST /weight-rest/upload/uploadBluetoothDeviceWeight 
```
_该校验会校验设备id的合法性_
<a name="obcXK"></a>
##### 入参： 
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| recordList | List(Object) | 体重记录集合 |  |

<a name="DHhjB"></a>
###### 体重记录：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 体重记录ID | 可以为空 |
| deviceId | String | 设备ID | 设备ID获取参考：[链接](https://docs.sghealth.cn/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| measurementTime | Date | 测量时间 |  |
| weight | Double | 体重 |  |
| resistance50k | Double | 50k电阻值 |  |
| heartRate | Integer | 心率 |  |

<a name="lF60a"></a>
###### 示例报文：
```json
{
	"recordList":[
		{
			"measurementTime":1615195409957,
			"deviceId":"a00240000d6b",
			"weight":66.6,
			"heartRate":64,
			"resistance50k":400
		}
		
	]
}
```
<a name="oLf6W"></a>
# 2.体重查询
<a name="vSZLg"></a>
## 2.1 查询用户最新一笔的体重测量数据
```
GET /api/weight/v2.0/query/getLastOne
```
<a name="NuCqV"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| onlyQueryPbf | boolean | 只查有体脂率的数据 |  |

<a name="i2dJH"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| weightId | String | 体重id |  |
| weight | Double | 体重 |  |
| bmi | Double | bmi |  |
| pbf | Double | 体脂率 |  |
| pbfValue | Double | 脂肪量 |  |
| fatLossVal | Double | 去脂体重 |  |
| muscle | Double | 肌肉量 |  |
| muscleRate | Double | 肌肉率 |  |
| water | Double | 水分率 |  |
| waterValue | Double | 水分量 |  |
| basalMetabolism | Double | 基础代谢量 |  |
| bodyAge | Integer | 身体年龄 |  |
| ageOffset | Integer | 身体年龄偏移量 |  |
| visceralFat | Integer | 内脏脂肪指数 |  |
| skeletonMuscleEnum | Double | 骨骼肌 |  |
| bone | Double | 骨量 |  |
| protein | Double | 蛋白质 |  |
| fc | Double | 脂肪控制 |  |
| mc | Double | 肌肉控制 |  |
| age | Integer | 年纪 |  |
| sex | Integer | 性别 |  |
| height | Double | 身高 | 单位：m |
| measurementDate | Date | 测量时间 |  |
| heartRate | Integer | 心率 |  |
| unit | Integer | 单位 | 1-千克;<br />2-斤;<br />3-磅; |

<a name="WeXbc"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"userId":23342312,
		"weight":135,
		"bmi":24.8,
		"pbf":26.5,
		"pbfValue":35.8,
		"fatLossVal":99.2,
		"muscle":94,
		"muscleRate":69.6,
		"water":55.3,
		"basalMetabolism":1442,
		"bodyAge":66,
		"ageOffset":1,
		"visceralFat":13,
		"skeletonMuscleEnum":57,
		"bone":5.2,
		"protein":14.3,
		"fc":-3.6,
		"mc":0,
		"age":65,
		"sex":1,
		"height":1.65,
		"measurementDate":1636715457000,
		"heartRate":80,
		"unit":2,
		"weightId":"ffb673ea33f54f1ea8ca5517bbd7a140"
	}
}


```
<a name="jVwpr"></a>
## 2.2 查询用户一段时间内的体重测量数据
```
GET /api/weight/v2.0/query/getListByTime
```
<a name="IhzhY"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| startTime | Long | 开始时间 |  |
| endTime | Long | 结束时间 |  |

<a name="NKr4e"></a>
##### 出参(List)：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | String | 主键ID |  |
| weight | Double | 体重 |  |
| bmi | Double | bmi |  |
| pbf | Double | 体脂率 |  |
| pbfValue | Double | 脂肪量 |  |
| fatLossVal | Double | 去脂体重 |  |
| muscle | Double | 肌肉量 |  |
| muscleRate | Double | 肌肉率 |  |
| water | Double | 水分率 |  |
| waterValue | Double | 水分量 |  |
| basalMetabolism | Double | 基础代谢量 |  |
| bodyAge | Integer | 身体年龄 |  |
| ageOffset | Integer | 身体年龄偏移量 |  |
| visceralFat | Integer | 内脏脂肪指数 |  |
| skeletonMuscleEnum | Double | 骨骼肌 |  |
| bone | Double | 骨量 |  |
| protein | Double | 蛋白质 |  |
| fc | Double | 脂肪控制 |  |
| mc | Double | 肌肉控制 |  |
| age | Integer | 年纪 |  |
| sex | Integer | 性别 |  |
| height | Double | 身高 | 单位：m |
| measurementDate | Date | 测量时间 |  |
| heartRate | Integer | 心率 |  |
| unit | Integer | 单位 | 1-千克;<br />2-斤;<br />3-磅; |

<a name="o5svI"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"96c90c9e61ad42c087a9c435e01988db",
			"userId":23342312,
			"weight":78,
			"bmi":26.4,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1620446598000
		},
		{
			"id":"7682033a29f74efcb819684694ba11ce",
			"userId":23342312,
			"weight":92,
			"bmi":31.1,
			"pbf":27.9,
			"pbfValue":25.7,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1620443600000
		},
		{
			"id":"446063793b564abba885276a00dc60f9",
			"userId":23342312,
			"weight":60,
			"bmi":20.3,
			"pbf":19.9,
			"pbfValue":11.9,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1619611345000
		},
		{
			"id":"5fc74d36f47b4b2cb4b7a11c17c1da83",
			"userId":23342312,
			"weight":60,
			"bmi":20.3,
			"pbf":21.9,
			"pbfValue":13.1,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1619611208000
		},
		{
			"id":"bcd76569a10a4d8a8ab675b78b643c2e",
			"userId":23342312,
			"weight":60,
			"bmi":20.3,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1619611181000
		},
		{
			"id":"bef65e1d1bf049399c40b7c22dabec1f",
			"userId":23342312,
			"weight":75,
			"bmi":25.4,
			"pbf":20.9,
			"pbfValue":15.7,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1619611149000
		},
		{
			"id":"1f5196d2ef614950b14d716961007804",
			"userId":23342312,
			"weight":85,
			"bmi":28.7,
			"pbf":20,
			"pbfValue":17,
			"age":27,
			"sex":1,
			"height":1.72,
			"measurementDate":1618055460000
		},
		{
			"id":"dd69bd40679311ebb766e32a38014345",
			"userId":23342312,
			"weight":25,
			"bmi":8.5,
			"age":25,
			"sex":1,
			"height":1.72,
			"measurementDate":1611825780000
		}
	]
}
```
<a name="PJD9X"></a>
## 2.3 根据ID查询体重详情记录
```
GET /api/weight/v2.0/query/getByWeightId
```
<a name="Y38gi"></a>
##### 入参：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 体重 | 必传 |

<a name="aZAXU"></a>
##### 出参：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| userName | String | 用户名称 |  |
| headImg | String | 用户头像 |  |
| unit | Integer | 单位 | 1-kg;2-斤;3-磅;4-英石 |
| bindBodyFatScale | boolean | 是否绑定体脂秤 |  |
| weightList | List(Object) | 体重数据List |  |
| healthLabelList | List(Object) | 风险解读标签 |  |

<a name="vFBe1"></a>
###### 体重数据：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 体重主键id |  |
| weight | Double | 体重 |  |
| sourceType | int | 数据类型 | 0-正常,1-异常数据,2-手动,3-体重数据 |
| mc | Double | 肌肉控制 |  |
| fc | Double | 脂肪控制 |  |
| bmi | Double | 体质指数 |  |
| bmiLevelName | String | bmi等级名称 |  |
| measurementDate | Date | 测量时间 |  |
| bodyStyle | String | 体型 |  |
| bodyScore | String | 身材得分名称 |  |
| topContent | String | 整体解读 |  |
| bmiLabelDto | Object | bmi标签对象 |  |
| labelList | List<Object> | 标签List |  |
| moodDto | MoodDto | 心情 |  |

<a name="Xsuhe"></a>
###### 心情：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| mood | String | 心情文字 |  |
| images | String | 图片地址 | 多张图片，使用英文逗号分隔图片地址，多张图片，使用英文逗号分隔 |

<a name="u69VI"></a>
###### 标签对象：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| label | String | 标签名称 |  |
| labelValue | Double | 标签值 |  |
| labelUnit | String | 单位 |  |
| labelDValue | Double | 差值 |  |
| labelDContent | String | 差值文案 |  |
| labelLevelName | String | 等级名称 |  |
| labelContent | String | 解读 |  |
| labelDietaryAdvice | String | 饮食建议 |  |
| labelSportsAdvice | String | 运动建议建议 |  |
| levelIntervalList | List(Object) | 等级区间 |  |

<a name="VNMUD"></a>
###### 标签等级：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| levelIntervalName | String | 等级区间名称 |  |
| startValue | BigDecimal | 区间开始值 | 最左及左右无返回 |
| endValue | BigDecimal | 区间结束值 |  |

<a name="lCD1k"></a>
###### 风险标签解读：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| healthLabelName | String | 健康风险标签名 |  |
| healthContent | String | 健康风险解读 |  |
| indexList | List(Object) | 风险对应标签对象 |  |

<a name="YOwfN"></a>
###### 风险标签对象：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexName | String | 标签名称 |  |
| indexValue | BigDecimal | 标签值 |  |
| indexUnit | String | 单位 |  |
| indexLevel | String | 指标等级 |  |

<a name="PdOZd"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"userId":35084685,
		"userName":"Jamie",
		"headImg":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKosPnLNia5iaicvJ02rjekFU8DtYU9PTia3CnpPxoBn0AITFM3ic2NvmbKibEg4xSnOiacLdvyxou3fRicvA/132",
		"unit":1,
		"bindBodyFatScale":false,
		"weightList":[
			{
				"id":"36a2bd936a82442e879cdc00c46192ec",
				"weight":50.4,
				"sourceType":0,
				"bmi":21,
				"bmiLevelName":"理想",
				"measurementDate":1623921551000,
				"bodyStyle":"缺乏运动型",
				"bodyScore":"良",
				"topContent":"再多点肌肉，体型会更好看哦！体脂率很理想；多多运动，有助于增强骨骼肌！",
				"bmiLabelDto":{
					"label":"BMI",
					"labelValue":21,
					"labelUnit":"",
					"labelDValue":0.2,
					"labelDContent":"较1天前增加了0.2",
					"labelLevelName":"理想",
					"labelContent":"你的BMI在理想范围内。很棒，建议继续保持！记得每天均衡饮食、适量运动。",
					"labelDietaryAdvice":"建议保持饮食均衡，保证每天热量摄入稳定，维持当前体重。",
					"labelSportsAdvice":"建议坚持日常活动，平均每天6000步；尽量减少久坐时间，每小时起来动一动。",
					"levelIntervalList":[
						{
							"levelIntervalName":"偏瘦",
							"endValue":18.5
						},
						{
							"levelIntervalName":"理想",
							"startValue":18.5,
							"endValue":24
						},
						{
							"levelIntervalName":"偏胖",
							"startValue":24,
							"endValue":28
						},
						{
							"levelIntervalName":"肥胖",
							"startValue":28
						}
					]
				},
				"labelList":[
					{
						"label":"体脂率",
						"labelValue":29.7,
						"labelUnit":"%",
						"labelDValue":1.2,
						"labelDContent":"较1天前增加了1.2%",
						"labelLevelName":"理想",
						"labelContent":"你的体脂率理想。很棒，建议继续保持！记得每天均衡饮食、适量运动。",
						"labelDietaryAdvice":"建议保持饮食均衡，保证每天热量摄入稳定，维持当前状态。",
						"labelSportsAdvice":"每周保持适量的有氧运动，配合力量练习，有利于将体脂率保持在理想范围内。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":20
							},
							{
								"levelIntervalName":"理想",
								"startValue":20,
								"endValue":32
							},
							{
								"levelIntervalName":"偏高",
								"startValue":32,
								"endValue":39
							},
							{
								"levelIntervalName":"超高",
								"startValue":39
							}
						]
					},
					{
						"label":"肌肉量",
						"labelValue":33.5,
						"labelUnit":"kg",
						"labelDValue":-0.3,
						"labelDContent":"较1天前减少了0.3kg",
						"labelLevelName":"标准",
						"labelContent":"你的肌肉量标准。很棒！建议继续保持。",
						"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
						"labelSportsAdvice":"力量训练（如深蹲、硬拉、俯卧撑、引体向上等）和有氧运动相结合的形式，辅以拉伸放松，增肌训练效果会更好。规律的运动训练应该至少每周3次，每次45分钟以上；但应注意预防运动损伤。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":32.9
							},
							{
								"levelIntervalName":"标准",
								"startValue":32.9,
								"endValue":37.6
							},
							{
								"levelIntervalName":"理想",
								"startValue":37.6
							}
						]
					},
					{
						"label":"身体年龄",
						"labelValue":31,
						"labelUnit":"岁",
						"labelDValue":0,
						"labelDContent":"较1天前无变化",
						"labelLevelName":"年轻",
						"labelContent":"你的身体年龄比真实年龄年轻。",
						"labelDietaryAdvice":"随着年龄的增长，身体水分和基础代谢会逐渐下降。保持健康饮食和生活方式，可以使身体看起来更年轻。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动。",
						"levelIntervalList":[
							{
								"levelIntervalName":"年轻",
								"endValue":32
							},
							{
								"levelIntervalName":"偏大",
								"startValue":32
							}
						]
					},
					{
						"label":"脂肪量",
						"labelValue":15,
						"labelUnit":"kg",
						"labelDValue":0.7,
						"labelDContent":"较1天前增加了0.7kg",
						"labelLevelName":"理想",
						"labelContent":"你的脂肪量理想，很棒，建议继续保持！记得每天均衡饮食、适量运动哦。",
						"labelDietaryAdvice":"建议保持饮食平衡，保证每天热量摄入稳定，维持当前状态。",
						"labelSportsAdvice":"每周保持适量的有氧运动，配合力量练习，有利于将脂肪量保持在理想范围内。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":10.1
							},
							{
								"levelIntervalName":"理想",
								"startValue":10.1,
								"endValue":16.1
							},
							{
								"levelIntervalName":"偏高",
								"startValue":16.1,
								"endValue":19.7
							},
							{
								"levelIntervalName":"超高",
								"startValue":19.7
							}
						]
					},
					{
						"label":"内脏脂肪等级",
						"labelValue":4,
						"labelUnit":"等级",
						"labelDValue":0,
						"labelDContent":"较1天前无变化",
						"labelLevelName":"理想",
						"labelContent":"你的内脏脂肪等级理想。保持理想的内脏脂肪水平，有助于降低脂肪肝、高血压、高血脂、2型糖尿病等慢性疾病的患病风险。",
						"labelDietaryAdvice":"推荐每日均衡摄入：适量优质蛋白质、适量碳水化合物（增加全谷物、杂豆类）、低脂肪；增加新鲜蔬菜和水果。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动。",
						"levelIntervalList":[
							{
								"levelIntervalName":"理想",
								"endValue":10
							},
							{
								"levelIntervalName":"偏高",
								"startValue":10,
								"endValue":15
							},
							{
								"levelIntervalName":"较高",
								"startValue":15,
								"endValue":30
							},
							{
								"levelIntervalName":"超高",
								"startValue":30
							}
						]
					},
					{
						"label":"基础代谢量",
						"labelValue":1135,
						"labelUnit":"大卡",
						"labelDValue":-7,
						"labelDContent":"较1天前减少了7.0大卡",
						"labelLevelName":"偏低",
						"labelContent":"你的基础代谢偏低，稍微多吃就容易发胖。容易出现减重时的平台期及反弹。",
						"labelDietaryAdvice":"建议多喝白开水，补充B族维生素，保证优质蛋白质和膳食纤维的摄入量。",
						"labelSportsAdvice":"每周进行力量训练，结合有氧运动，可以刺激肌肉生长。增加身体的肌肉含量，是提升基础代谢的秘密武器。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":1170
							},
							{
								"levelIntervalName":"理想",
								"startValue":1170
							}
						]
					},
					{
						"label":"去脂体重",
						"labelValue":35.4,
						"labelUnit":"kg",
						"labelDValue":-0.3,
						"labelDContent":"较1天前减少了0.3kg",
						"labelLevelName":"理想",
						"levelIntervalList":[
							{
								"levelIntervalName":"超低",
								"endValue":30.7
							},
							{
								"levelIntervalName":"偏低",
								"startValue":30.7,
								"endValue":34.3
							},
							{
								"levelIntervalName":"理想",
								"startValue":34.3,
								"endValue":40.3
							},
							{
								"levelIntervalName":"偏高",
								"startValue":40.3
							}
						]
					},
					{
						"label":"肌肉率",
						"labelValue":66.5,
						"labelUnit":"%",
						"labelDValue":-1.1,
						"labelDContent":"较1天前减少了1.1%",
						"labelLevelName":"标准",
						"labelContent":"你的肌肉量标准。很棒！建议继续保持。",
						"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
						"labelSportsAdvice":"力量训练（如深蹲、硬拉、俯卧撑、引体向上等）和有氧运动相结合的形式，辅以拉伸放松，增肌训练效果会更好。规律的运动训练应该至少每周3次，每次45分钟以上；但应注意预防运动损伤。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":65.3
							},
							{
								"levelIntervalName":"标准",
								"startValue":65.3,
								"endValue":74.6
							},
							{
								"levelIntervalName":"理想",
								"startValue":74.6
							}
						]
					},
					{
						"label":"水分率",
						"labelValue":48.7,
						"labelUnit":"%",
						"labelDValue":-1.2,
						"labelDContent":"较1天前减少了1.2%",
						"labelLevelName":"标准",
						"labelContent":"你的水分率标准，规律的饮食和每天八杯水就可以继续保持理想的身体水分含量啦。",
						"labelDietaryAdvice":"充足的水分可以促进新陈代谢，保持皮肤年轻，喝水时注意少量、多次地及时补充水分和电解质。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动，有利于促进身体代谢。同时需及时补充水分。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":45
							},
							{
								"levelIntervalName":"标准",
								"startValue":45,
								"endValue":60
							},
							{
								"levelIntervalName":"理想",
								"startValue":60
							}
						]
					},
					{
						"label":"骨量",
						"labelValue":1.9,
						"labelUnit":"kg",
						"labelDValue":-0.1,
						"labelDContent":"较1天前减少了0.1kg",
						"labelLevelName":"偏低",
						"labelContent":"你的骨量含量偏低。骨量减少是骨质疏松的前期重要表现和关键性原因，若未及时控制和治疗，易出现骨质疏松。",
						"labelDietaryAdvice":"提升骨量，需摄入足量的钙、蛋白质和维生素D；过量饮用酒、碳酸饮料、茶或咖啡，都可能导致钙流失或影响钙吸收，从而降低骨质量。需注意适度。",
						"labelSportsAdvice":"提升骨质，需减少久坐，避免钙沉积减少；推荐依据自身情况增加运动量尤其是力量训练，如深蹲、俯卧撑等。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":2.2
							},
							{
								"levelIntervalName":"理想",
								"startValue":2.2
							}
						]
					},
					{
						"label":"蛋白质",
						"labelValue":17.8,
						"labelUnit":"%",
						"labelDValue":0.2,
						"labelDContent":"较1天前增加了0.2%",
						"labelLevelName":"标准",
						"labelContent":"你的蛋白质含量标准。很棒！建议继续保持。",
						"labelDietaryAdvice":"建议维持营养均衡摄入。过多和过低的蛋白质对人体都有伤害。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":16
							},
							{
								"levelIntervalName":"标准",
								"startValue":16,
								"endValue":20
							},
							{
								"levelIntervalName":"偏高",
								"startValue":20
							}
						]
					},
					{
						"label":"骨骼肌",
						"labelValue":17.7,
						"labelUnit":"kg",
						"labelDValue":-0.4,
						"labelDContent":"较1天前减少了0.4kg",
						"labelLevelName":"偏低",
						"labelContent":"你的骨骼肌偏低，会影响运动表现和活动能力，需注意增肌。",
						"labelDietaryAdvice":"饮食上注意保证优质蛋白质的摄入，促进糖原恢复和肌肉合成；摄入充足的维生素D、维生素C和维生素E等，有利于减少肌肉衰减。",
						"labelSportsAdvice":"力量训练（如深蹲、硬拉、俯卧撑、引体向上等）和有氧运动相结合的形式，辅以拉伸放松，增肌训练效果会更好。规律的运动训练应该至少每周3次，每次45分钟以上；但应注意预防运动损伤。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":19.1
							},
							{
								"levelIntervalName":"标准",
								"startValue":19.1,
								"endValue":23.3
							},
							{
								"levelIntervalName":"理想",
								"startValue":23.3
							}
						]
					}
				],
				"height":0
			}
		],
		"healthLabelList":[
			{
				"healthLabelName":"肌肉量偏低",
				"healthContent":"1.肌肉量偏低，会影响人的运动表现和活动能力，增加老年人的跌倒风险；\n\n2.易引起基础代谢率低，易肥胖，或减肥后易反弹；\n\n3.影响身体机能的正常运转，如神经、消化、呼吸等。",
				"indexList":[
					{
						"indexName":"骨骼肌",
						"indexValue":17.7,
						"indexUnit":"kg",
						"indexLevel":"偏低"
					}
				]
			},
			{
				"healthLabelName":"基础代谢偏低",
				"healthContent":"基础代谢低，体重更易增加或减重后反弹。\n因1天的进食量超过“基础代谢+日常活动代谢+进食产热效应”时，多余的能量将以脂肪形式蓄积在体内。",
				"indexList":[
					{
						"indexName":"基础代谢量",
						"indexValue":1135,
						"indexUnit":"大卡",
						"indexLevel":"偏低"
					}
				]
			},
			{
				"healthLabelName":"骨量偏低",
				"healthContent":"骨量减少是骨质疏松的前期重要表现和关键性原因，若未及时控制和治疗，易出现骨质疏松；\n\n而骨质疏松则会导致骨折概率增加，我国70%~80%的中老年骨折是因骨质疏松引起的。\n\n腰酸、背疼、腿抽筋，都是骨质在向你拉响警报。",
				"indexList":[
					{
						"indexName":"骨量",
						"indexValue":1.9,
						"indexUnit":"kg",
						"indexLevel":"偏低"
					}
				]
			}
		]
	}
}
```
<a name="pS509"></a>
## 2.4 获取最近30天的体重记录
```
GET /api/weight/v2.0/query/getLastThirtyDayRecord
```
<a name="ctrBk"></a>
##### 入参：
无
<a name="TQa5c"></a>
##### 出参(List)：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | String | 主键id |  |
| weight | Double | 体重 |  |
| bmi | Double | bmi |  |
| pbf | Double | 体脂率 |  |
| pbfValue | Double | 脂肪量 |  |
| fatLossVal | Double | 去脂体重 |  |
| muscle | Double | 肌肉量 |  |
| muscleRate | Double | 肌肉率 |  |
| water | Double | 水分率 |  |
| waterValue | Double | 水分量 |  |
| basalMetabolism | Double | 基础代谢量 |  |
| bodyAge | Integer | 身体年龄 |  |
| ageOffset | Integer | 身体年龄偏移量 |  |
| visceralFat | Integer | 内脏脂肪指数 |  |
| skeletonMuscleEnum | Double | 骨骼肌 |  |
| bone | Double | 骨量 |  |
| protein | Double | 蛋白质 |  |
| fc | Double | 脂肪控制 |  |
| mc | Double | 肌肉控制 |  |
| age | Integer | 年纪 |  |
| sex | Integer | 性别 |  |
| height | Double | 身高 | 单位：m |
| measurementDate | Date | 测量时间 |  |
| heartRate | Integer | 心率 |  |
| unit | Integer | 单位 | 1-千克;<br />2-斤;<br />3-磅; |

<a name="UBrYL"></a>
##### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"b316a922f7674cdaa3eb7e4f0163c363",
			"userId":23412531,
			"weight":70.6,
			"bmi":25.6,
			"pbf":23.7,
			"pbfValue":16.7,
			"fatLossVal":53.9,
			"muscle":51,
			"muscleRate":72.2,
			"water":55.1,
			"basalMetabolism":1534,
			"bodyAge":24,
			"ageOffset":-1,
			"visceralFat":7,
			"skeletonMuscleEnum":29.8,
			"bone":2.8,
			"protein":17.2,
			"fc":-1.3,
			"mc":0,
			"age":25,
			"sex":1,
			"height":1.66,
			"measurementDate":1635940798000
		},
		{
			"id":"865d5cdf76b742eeadeebcb10911a100",
			"userId":23412531,
			"weight":70.6,
			"bmi":25.6,
			"pbf":23.3,
			"pbfValue":16.4,
			"fatLossVal":54.2,
			"muscle":51.3,
			"muscleRate":72.7,
			"water":55.6,
			"basalMetabolism":1540,
			"bodyAge":24,
			"ageOffset":-1,
			"visceralFat":7,
			"skeletonMuscleEnum":30.1,
			"bone":2.8,
			"protein":17.1,
			"fc":-1,
			"mc":0,
			"age":25,
			"sex":1,
			"height":1.66,
			"measurementDate":1635940778000
		},
    {
			"id":"9e3ac92afb0b4c7c932ff5eb085fb9d4",
			"userId":23412531,
			"weight":70.6,
			"bmi":25.6,
			"pbf":28.8,
			"pbfValue":20.3,
			"age":25,
			"sex":1,
			"height":1.66,
			"measurementDate":1635214134000
		}
	]
}


```
<a name="U3HFZ"></a>
# 3.体重分析
<a name="Lh8Cs"></a>
## 3.1 获取用户的体重趋势分析
```
POST /api/weight/v2.0/analysis/getTrendInfo
```
<a name="Vhfxk"></a>
##### 入参：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| queryDateType | Integer | 查询时间类型 | 1-按日查<br />2-按周查 |
| startTime | Date | 开始时间 |  |
| endTime | Date | 结束时间 |  |
| queryIndexType | Integer | 是否只查询有体脂率的数据 | 1-查询体重<br />2-查询体脂 |

<a name="cOMa0"></a>
##### 出参：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexInfoList | List(Object) | 信息集合 | 按时间顺序 |
| compareExplainList | List(Object) | 重要属性对比及文案 |  |
| indexCompareList | List(Object) | 首尾数据对比 |  |
| targetType | Integer | _目标类型_ | 1-减肥<br />2-增肥<br />3-保持 |

<a name="VosyF"></a>
###### indexInfoList：
| 字段 | 类型 | 描述 |  |
| --- | --- | --- | --- |
| value | String | 标签值 |  |
| unitName | string | 单位 |  |
| measurementDate | Date | 测量时间 |  |
| measurementDateText | String | _测量时间文本描述_ |  |

<a name="t2mkM"></a>
###### compareExplainList：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexCompareList | List(Object) | 指标差值对象 |  |
| title | String | 标题 |  |
| text | String | 文案 |  |

<a name="zob6L"></a>
###### indexCompareList：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| label | String | 标签名称 |  |
| labelStartValue | Double | 开始值 |  |
| labelEndValue | Double | 结束值 |  |
| labelUnit | String | 单位 |  |
| labelDValue | Double | 差值 |  |

<a name="WqPVD"></a>
###### 示例报文：
```json
// 入参：
{
	"queryUserId":"23342312",
	"queryDateType":"1",
	"startTime":"1603244948000",
	"endTime":"1611848948000",
	"queryIndexType":"1"
}

// 出参：

{
	"code":200,
	"msg":"成功",
	"data":{
		"indexInfoList":[
			{
				"value":67,
				"unitName":"kg",
				"measurementDate":1603273046000,
				"measurementDateText":"10.21"
			},
			{
				"value":68,
				"unitName":"kg",
				"measurementDate":1603900800000,
				"measurementDateText":"10.29"
			},
			{
				"value":25,
				"unitName":"kg",
				"measurementDate":1608652800000,
				"measurementDateText":"12.23"
			},
			{
				"value":25,
				"unitName":"kg",
				"measurementDate":1611825780000,
				"measurementDateText":"01.28"
			}
		],
		"compareExplainList":[
			{
				"differenceValueList":[
					{
						"label":"体重",
						"labelUnit":"kg",
						"labelDValue":-42
					}
				],
				"title":"体重反而下降了，请多多注意",
				"text":"体重反而下降了42.00kg。"
			}
		],
		"targetType":2
	}
}
```
<a name="dlLxo"></a>
## 3.2 获取用户某一条体重数据的风险解读
```
POST /api/weight/v2.0/analysis/getRiskExplain
```
<a name="l89Ld"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| weightId | Date | 体重记录ID |  |

<a name="VxEM7"></a>
##### 出参(List)：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| healthLabelName | String | 健康风险标签名 |  |
| healthContent | String | 健康风险解读 |  |
| indexList | List(Object) | 风险对应标签对象 |  |

<a name="U4DPr"></a>
###### indexList(风险对应标签对象)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexName | String | 标签名称 |  |
| indexValue | BigDecimal | 标签值 |  |
| indexUnit | String | 单位 |  |
| indexLevel | String | 指标等级 |  |

<a name="zq69k"></a>
###### 示例报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"healthLabelName":"中心型肥胖",
			"healthContent":"肥胖不止影响体型，还会影响您的健康！世界卫生组织已将肥胖列为导致疾病负担的十大危险因素之一。\n\n若脂肪主要在腹壁和腹腔内蓄积过多，则被称为\"中心型肥胖\"，具有更高的疾病风险。一般成人达到以下任一标准即可推断为中心型肥胖。\n1.腰围：男性≥85cm，女性≥80cm；\n2.腰臀比（腰围/臀围）:男性>0.9，女性>0.8；\n\n对肥胖人群而言：\n1.出现2型糖尿病、心血管病、高血压、中风和多种癌症的风险概率远高于一般健康人群；\n2.由于过多的脂肪在肝细胞内沉积，易形成脂肪肝；\n3.易出现睡眠中重度打鼾，可能引发睡眠呼吸暂停综合征；\n4.同时还易出现骨关节病、胆囊疾病等多种疾病。",
			"indexList":[
				{
					"indexName":"腰臀比",
					"indexValue":1.5
				},
				{
					"indexName":"腰围",
					"indexValue":114,
					"indexUnit":"cm"
				}
			]
		}
	]
}
```
<a name="FNKxP"></a>
## 3.3 获取用户某一条体重数据的同龄人对比
```
GET /api/weight/v2.0/analysis/getPeerWeightComparison
```
<a name="fMK6d"></a>
##### 入参： 
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 记录ID | 必传 |

<a name="g6YGy"></a>
##### 出参： 
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| sex | Integer | 性别 1：男  2：女 |  |
| peerWeightIndexDtoList | List(Object) | 指标列表 |  |

<a name="uRpd7"></a>
###### 指标列表：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexName | String | 指标名称 |  |
| indexValue | Double | 指标值 |  |
| indexUnit | String | 指标单位 |  |
| indexAvgValue | Double | 同龄人指标值 |  |

<a name="I7r3e"></a>
###### 示例报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"sex":1,
		"peerWeightIndexDtoList":[
			{
				"indexName":"BMI",
				"indexValue":25.4,
				"indexUnit":"",
				"indexAvgValue":23.37
			},
			{
				"indexName":"体脂率",
				"indexValue":20.9,
				"indexUnit":"%",
				"indexAvgValue":20.34
			}
		]
	}
}
```
<a name="gujP6"></a>
# 4.体重周报
<a name="sOriz"></a>
## 4.1 获取用户某个周的报告
```
GET /api/weight/v2.0/report/getWeekReport
```
**入参：**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| weekStartDay | String | 该周的周一 | 格式：yyyyMMdd<br />eg：20210120 |

**出参：**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| userName | String | 用户名字 |  |
| reportTime | String | 报告时间 |  |
| yyyMMdd | String | 每周的周一 |  |
| measureModuleViewDTO | ReportMeasureModuleViewDTO | 测量情况 |  |
| weightModuleViewDTO | ReportWeightModuleViewDTO | 体重变化情况 |  |
| foodCaloriesModuleViewDTO | ReportFoodCaloriesModuleViewDTO | 饮食热量 |  |
| dietaryBalanceModuleViewDTO | ReportDietaryBalanceModuleViewDTO | 膳食均衡模块 |  |
| bodyActivityModuleViewDTO | ReportBodyActivityModuleViewDTO | 身体活动模块 |  |

<a name="dajBn"></a>
###### ReportMeasureModuleViewDTO：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| canShow | Integer | 是否该展示 | * 1： 展示<br />* 0：不展示 |
| moduleName | String | 模块名字 |  |
| evaluateLableName | String | 评价标签 |  |
| emotionPicUrl | String | 情绪图标地址 |  |
| dynamicTextDesc | String | 动态的文本描述 |  |
| staticTextDesc | String | 静态的文本描述 |  |

<a name="u5D2v"></a>
###### ReportWeightModuleViewDTO：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| canShow | Integer | 是否该展示 | * 1： 展示<br />* 0：不展示 |
| moduleName | String | 模块名字 |  |
| evaluateLableName | String | 评价标签 |  |
| emotionPicUrl | String | 情绪图标地址 |  |
| dynamicTextDesc | String | 动态的文本描述 |  |
| staticTextDesc | String | 静态的文本描述 |  |
| lineChartsRecords | LineChartsRecordDTO | 折线图数据 |  |
| weightVariation | ReportIndexVariationDTO | 体重变化 |  |
| pbfVariation | ReportIndexVariationDTO | 体脂率变化 |  |

LineChartsRecordDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| weightList | List(BaseSingleRecordDTO) | 体重记录 |  |
| pbfList | List(BaseSingleRecordDTO) | 体脂率记录 |  |
| bodyRoundList | List(BaseSingleRecordDTO) | 体围记录 |  |
| lastBodyRoundRecord | BodyRoundRecordDto | 最新一条体围记录 |  |

BaseSingleRecordDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| value | BigDecimal | 标签值 |  |
| unitName | String | 单位 |  |
| measurementDate | Date | 测量时间 |  |
| measurementDateText | String | 测量时间文本描述 |  |

BodyRoundRecordDto

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| id | long | 体围id |  |
| userId | long | 用户ID |  |
| calInfo | String | 涉及计算用的信息 |  |
| updated | Date | 最后修改时间 |  |
| measurementDate | Date | 测量时间 |  |
| created | Date | 创建时间 |  |
| deleted | int | 是否删除 |  |
| waistHipRate | double | 腰臀比 |  |
| waistCircumference | double | 腰围 |  |
| hipCircumference | double | 臀围 |  |
| chestCircumference | double | 胸围 |  |
| armCircumference | double | 臂围 |  |
| thighCircumference | double | 腿围 |  |
| calfCircumference | double | 小腿围 |  |
| score | double | 得分 |  |
| scoreContent | String | 得分文案 |  |
| beatPercent | double | 击败比例 |  |
| age | int | 年龄 |  |
| sex | int | 性别 |  |
| height | double | 身高 |  |

ReportIndexVariationDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| VariationText | String | 变化文案 |  |
| VariationValue | String | 变化数值 |  |
| VariationUnit | String | 变化单位 |  |

<a name="x7STz"></a>
###### ReportFoodCaloriesModuleViewDTO：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| canShow | Integer | 是否该展示 | * 1： 展示<br />* 0：不展示 |
| moduleName | String | 模块名字 |  |
| evaluateLableName | String | 评价标签 |  |
| emotionPicUrl | String | 情绪图标地址 |  |
| dynamicTextDesc | String | 动态的文本描述 |  |
| staticTextDesc | String | 静态的文本描述 |  |
| dayFoodCaloriesDetailList | List(DayFoodCaloriesDetailDTO) |  |  |
| tips | String | 小贴士文案 |  |
| goodsRecommendText | String | 商品推荐文案 | 无商品会为空 |
| recommdGoods | RecommdGoodsDTO | 推荐商品 |  |

DayFoodCaloriesDetailDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| recommendCalories | BigDecimal | 推荐卡路里 |  |
| eatCalories | BigDecimal | 吃了的卡路里 |  |
| belongDay | Date | 哪一天 |  |
| lightFastFlag | boolean | 轻断食标记 |  |
| caloriesExceedFlag | boolean | 热量超标标志 |  |

RecommdGoodsDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| goodsId | long | 商品id |  |
| title | String | 标题 |  |
| subTitle | String | 副标题 |  |
| goodsPicUrl | String | 商品图片地址 |  |

<a name="RkDYw"></a>
###### ReportDietaryBalanceModuleViewDTO：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| canShow | Integer | 是否该展示 | * 1： 展示<br />* 0：不展示 |
| moduleName | String | 模块名字 |  |
| evaluateLableName | String | 评价标签 |  |
| emotionPicUrl | String | 情绪图标地址 |  |
| dynamicTextDesc | String | 动态的文本描述 |  |
| staticTextDesc | String | 静态的文本描述 |  |
| dietaryBalanceProblemDetailList | List(DayDietaryBalanceProblemDetailResultDTO) | 膳食均衡问题天统计 |  |
| tips | String | 小贴士文案 |  |
| goodsRecommendText | String | 商品推荐文案 | 无商品会为空 |
| recommdGoods | RecommdGoodsDTO | 推荐商品 |  |

DayDietaryBalanceProblemDetailResultDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| dietaryBalanceProblemCategory | String | 饮食问题种类 | "蔬菜"<br />"鱼肉蛋豆"<br />"主食"<br />"乳类"<br />"水果" |
| overMuchDaysCount | Integer | 过多天数 |  |
| tooLittleDaysCount | Integer | 过少天数 |  |

RecommdGoodsDTO

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| goodsId | long | 商品id |  |
| title | String | 标题 |  |
| subTitle | String | 副标题 |  |
| goodsPicUrl | String | 商品图片地址 |  |

<a name="oA5GX"></a>
###### ReportBodyActivityModuleViewDTO：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| canShow | Integer | 是否该展示 | * 1： 展示<br />* 0：不展示 |
| moduleName | String | 模块名字 |  |
| evaluateLableName | String | 评价标签 |  |
| emotionPicUrl | String | 情绪图标地址 |  |
| dynamicTextDesc | String | 动态的文本描述 |  |
| staticTextDesc | String | 静态的文本描述 |  |
| avgStep | Integer | 日均步数 |  |
| avgCalories | Integer | 日均消耗卡路里 | 产品要求保留整数 |

<a name="LQbtL"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"userName":"..test..",
		"reportTime":"2021年01月25日-01月31日",
		"yyyMMdd":"20210125",
		"measureModuleViewDTO":{
			"canShow":1,
			"moduleName":"测量情况",
			"dynamicTextDesc":"这周共测量体重3天。",
			"staticTextDesc":"还不错！大数据发现：每天测量1次，对比每周测量1次，减重成功率高36%！"
		},
		"weightModuleViewDTO":{
			"canShow":1,
			"moduleName":"测量情况",
			"evaluateLableName":"体重见长",
			"dynamicTextDesc":"这周体重上升较多。",
			"staticTextDesc":"不要掉以轻心哦！注意控制饮食摄入量，少吃高油高糖食物。",
			"weightVariation":{
				"variationText":"下降",
				"variationValue":"20.00",
				"variationUnit":"kg"
			},
			"pbfVariation":{
				"variationText":"无变化"
			}
		},
		"foodCaloriesModuleViewDTO":{
			"canShow":1,
			"moduleName":"测量情况",
			"evaluateLableName":"吃动平衡",
			"dynamicTextDesc":"这周饮食热量都没有超标。",
			"staticTextDesc":"值得表扬！再接再厉哦！",
			"dayFoodCaloriesDetailList":[
				{
					"recommendCalories":1727,
					"eatCalories":338,
					"belongDay":1611504000000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				},
				{
					"recommendCalories":2058,
					"eatCalories":837,
					"belongDay":1611590400000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				},
				{
					"recommendCalories":2017,
					"eatCalories":587,
					"belongDay":1611676800000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				},
				{
					"recommendCalories":2017,
					"eatCalories":0,
					"belongDay":1611763200000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				},
				{
					"recommendCalories":2017,
					"eatCalories":0,
					"belongDay":1611849600000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				},
				{
					"recommendCalories":2017,
					"eatCalories":0,
					"belongDay":1611936000000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				},
				{
					"recommendCalories":2017,
					"eatCalories":0,
					"belongDay":1612022400000,
					"lightFastFlag":false,
					"caloriesExceedFlag":false
				}
			]
		},
		"dietaryBalanceModuleViewDTO":{
			"canShow":1,
			"moduleName":"测量情况",
			"evaluateLableName":"鱼肉蛋豆过少",
			"dynamicTextDesc":"有2天时间鱼肉蛋豆摄入过少。",
			"staticTextDesc":"鱼肉蛋豆可提供丰富的蛋白质和矿物质，有助于骨骼和肌肉增长、从而提升基础代谢，请注意补充！",
			"dietaryBalanceProblemDetailList":[
				{
					"dietaryBalanceProblemCategory":"鱼肉蛋豆",
					"overMuchDaysCount":2
				},
				{
					"dietaryBalanceProblemCategory":"主食",
					"overMuchDaysCount":1
				}
			],
			"tips":"蛋类的营养价值很高，可作为蛋白质来源优选~",
			"goodsRecommendText":"鱼肉蛋豆总是吃不够？为您推荐营养补充方案：",
			"recommdGoods":{
				"goodsId":201280006002,
				"title":"迪士尼每日坚果1 750g CP44",
				"subTitle":"9种果仁营养11",
				"goodsPicUrl":"https://sports-qa-files.lifesense.com/other/20200507/d45a2933ebab44b8a324d02f7cfd60f7.jpg"
			}
		},
		"bodyActivityModuleViewDTO":{
			"canShow":1,
			"moduleName":"测量情况",
			"evaluateLableName":"健步达人",
			"dynamicTextDesc":"这周活动量很充足。",
			"staticTextDesc":"太棒啦！身体和灵魂，总有一个要在路上！",
			"avgStep":9005,
			"avgCalories":161
		}
	}
}

```
<a name="ZVpPX"></a>
# 5.体重目标
<a name="JXe3u"></a>
## 5.1 设置体重目标
```
POST /api/weight/v2.0/goal/set
```
<a name="siPjI"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| originWeight | Double | 设置目标时的体重 | 单位：kg |
| targetWeight | Double | 目标值 | 单位：kg |
| startTime | Date | 初始体重时间 |  |
| minWeight | Integer | 体重保持-最低值 | 体重保持必传 |
| maxWeight | Double | 体重保持-最高值 |  |
| targetType | Integer | 目标类型枚举 | 1 减肥<br />2 增肥<br />3 保持 |
| targetModel | Integer | 目标模式 | 1-健康减重<br />2-瘦出小蛮腰<br />3-瘦出天鹅臂<br />4-瘦出马甲线<br />5-减掉啤酒肚<br />6-减掉双下巴<br />7-健康增重<br />8-增肌塑形 |

<a name="vOS4h"></a>
###### 示例报文：
```json
{

	"originWeight":60,
	"targetWeight":50,
	"startTime":1547049600000,
	"targetType":1,
	"targetModel":1
}

```
<a name="VDgh9"></a>
## 5.2 查询用户的体重目标
```
GET /api/weight/v2.0/goal/getLast
```
<a name="Cfjif"></a>
##### 入参：
无
<a name="kHvCQ"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| originWeight | Double | 设置目标时的体重 |  |
| unit | Integer | 单位 | 1 kg<br />2 斤 |
| targetWeight | Double | 目标值 |  |
| startTime | Date | 初始体重时间 |  |
| startTargetWeight | Integer | 建议体重最低值 |  |
| endTargetWeight | Double | 建议体重最高值 |  |
| minWeight | Double | 体重保持-最低值 | 用户设置的体重保持-最低值 |
| maxWeight | Double | 体重保持-最高值 | 用户设置的体重保持-最高值 |
| targetType | Integer | 目标类型枚举 | -1 未设置目标<br />1 减肥<br />2 增肥<br />3 保持 |
| targetModel | Integer | 目标模式 | 1-健康减重<br />2-瘦出小蛮腰<br />3-瘦出天鹅臂<br />4-瘦出马甲线<br />5-减掉啤酒肚<br />6-减掉双下巴<br />7-健康增重<br />8-增肌塑形 |

<a name="pBvGR"></a>
###### 示例报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"id":1112,
		"userId":23342312,
		"originWeight":80,
		"unit":1,
		"targetWeight":84,
		"startTime":1620403200000,
		"startTargetWeight":62.1,
		"endTargetWeight":68,
		"minWeight":0,
		"maxWeight":0,
		"targetType":2,
		"targetModel":7
	}
}
```

