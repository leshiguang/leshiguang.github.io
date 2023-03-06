<a name="Rh5o0"></a>
## 一、获取问卷题目
接口：域名+/evaluate-rest/api/questionnaire/v1.0/loadQuestions<br />请求方式：POST
<a name="aDUyV"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryUserId | Long | 查询用户id |  |
| bizType | String | 业务类型 | diet/healthRisk |
| version | String | 版本 | v1 |

```json
{
	"queryUserId":"23342312",
	"bizType":"diet",
	"version":"v1"
}
```
**出参：**<br />参考：[健康评估测评出参](https://docs.sghealth.cn/develop-cloud/v2/health/estimate.html#%E5%85%A5%E5%8F%82)
<a name="hqAr3"></a>
## 二、用户提交问卷
接口：域名+/food-web/api/dieteval/v1.0/submit<br />请求方式：POST
<a name="Mj8Bz"></a>
##### 入参:
参考：[https://lifesense.yuque.com/lifesense_tec/gbzzst/kla0c3#4oEY6](https://lifesense.yuque.com/lifesense_tec/gbzzst/kla0c3#4oEY6)<br />**出参：**<br />**无**
<a name="qJbGk"></a>
###### 入参示例报文：
```json

{
	"serialNo":"20210810YSPG005",
	"questionSubmitList":[
		{
			"questionId":90041,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90042,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90043,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90044,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90005,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90046,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90007,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90048,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90049,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90010,
			"submitted":[
				{
					"key":"B",
					"value":"B"
				}
			]
		},
		{
			"questionId":90091,
			"submitted":[
				{
					"key":"D",
					"value":"D"
				}
			]
		},
		{
			"questionId":90092,
			"submitted":[
				{
					"key":"A",
					"value":"A"
				},
				{
					"key":"B",
					"value":"B"
				},
				{
					"key":"C",
					"value":"C"
				},
				{
					"key":"E",
					"value":"E"
				}
			]
		}
	]
}
```

<a name="mLt41"></a>
## 三、查询饮食评估报告
接口：/api/healthRiskEval/v2/diet/queryReport<br />请求方式：GET
<a name="iNMtZ"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryUserId | Long | 查询用户id | <br /> |
| evalId | Long | 评估结果id | 不存在默认查询最新一条 |


**出参：**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userInfo | Object | 用户信息 |  |
| evalResult | Object | 评估结果 |  |
| badHabit | Object | 不良习惯 | 参考：[链接](#chwyN) |
| caloriesInfo | Object | 三餐热量摄入 |  |
| dietStructInfo | Object | 膳食结构分布 |  |
| badDiet | Object | 不良饮食 |  |

<a name="JUkH3"></a>
###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | 用户name | <br /> |
| sex | Integer | 性别 | 1 男<br />2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |

<a name="sYs8T"></a>
###### 评估结果：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| score | String | 当前评估分数 | <br /> |
| evaluateDate | Date | 评估时间 |  |
| compareScore | Integer | 对比上一次评估分数 | <br /> |
| level | Integer | 等级 | (1, "习惯良好")<br />(2, "习惯一般")<br />(3, "习惯较差") |
| levelName | String | 等级名称 |  |
| levelMsg | String | 等级描述 |  |

<a name="qeNUv"></a>
###### 三餐热量摄入：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mealCaloriesList | List<Object> | 餐次数据 | <br /> |
| labelExplainList | List<Object> | 标签解读 |  |

<a name="Ot8mw"></a>
###### 餐次数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mealType | Integer | 餐次 | 1-早餐<br />2-午餐<br />3-晚餐 |
| recommendPercent | Integer | 推荐占比百分比 |  |
| realPercent | Integer | 实际占比百分比 |  |
| desc | String | 偏多/偏少 |  |

<a name="ziEr5"></a>
###### 标签解读：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| labelKey | String | 标签key | <br /> |
| title | String | 标题 |  |
| explain | String | 标签解读 |  |
| actionList | List<String> | 行动点 |  |

<a name="KWk4e"></a>
###### 膳食结构分布：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| dietStructList | List<Object> | 膳食结构数据列表 | <br /> |
| labelExplainList | List<Object> | 标签解读 | 参考[链接](#ziEr5) |

<a name="KmLjJ"></a>
###### 膳食结构数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| categoryType | int | 分类id | 1-主食<br />2-蔬菜类<br />3-水果类<br />4-鱼肉蛋<br />5-乳类<br />6-大豆类<br />7-坚果类 |
| recommendPercent | Integer | 推荐占比百分比 |  |
| realPercent | Integer | 实际占比百分比 |  |
| desc | String | 偏多/偏少 |  |

<a name="DXrGx"></a>
###### 不良饮食：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| labelExplainList | List<Object> | 标签解读 | 参考[链接](#ziEr5) |

```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"userInfo":{
			"userId":23342312,
			"headImg":"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLkymPhh70nsRMmZMjD2NmCyny5kictbYL4e9PLrXBnMypHaMLYnoc2gS7vEmMUzzWTMkLdFvRvR2A/132",
			"userName":"djuqhkk",
			"sex":2,
			"age":27
		},
		"evalResult":{
			"score":50,
			"compareScore":0,
			"level":3,
			"levelName":"习惯较差",
			"levelMsg":"您的饮食习惯较差，不健康的饮食是健康最大的杀手，可以先从容易改变的习惯开始改善哦~"
		},
		"badHabit":{
			"labelTypeGroupList":[
				{
					"labelType":1,
					"labelInfoList":[
						{
							"labelKey":"habit_3",
							"labelName":"经常不吃早餐"
						}
					]
				},
				{
					"labelType":2,
					"labelInfoList":[
						{
							"labelKey":"egg_2",
							"labelName":"蛋类摄入不足"
						},
						{
							"labelKey":"fruit_seriousLack",
							"labelName":"水果摄入严重不足"
						},
						{
							"labelKey":"aquaticProduct_2",
							"labelName":"水产品摄入不足"
						},
						{
							"labelKey":"meat_lack",
							"labelName":"肉类摄入不足"
						},
						{
							"labelKey":"milk_2",
							"labelName":"奶类摄入严重不足"
						},
						{
							"labelKey":"nut_2",
							"labelName":"坚果摄入不足"
						},
						{
							"labelKey":"vegetable_seriousLack",
							"labelName":"蔬菜摄入严重不足"
						},
						{
							"labelKey":"bean_2",
							"labelName":"大豆及豆制品摄入不足"
						},
						{
							"labelKey":"offals_2",
							"labelName":"动物内脏摄入不足"
						},
						{
							"labelKey":"stapleFood_2",
							"labelName":"主食摄入不足"
						}
					]
				},
				{
					"labelType":3,
					"labelInfoList":[
						{
							"labelKey":"habit_1",
							"labelName":"经常每餐都吃得很饱"
						},
						{
							"labelKey":"habit_2",
							"labelName":"经常用餐时间不固定"
						},
						{
							"labelKey":"habit_5",
							"labelName":"经常吃剩饭剩菜"
						},
						{
							"labelKey":"food_4",
							"labelName":"常吃膨化食品"
						}
					]
				}
			]
		},
		"caloriesInfo":{
			"mealCaloriesList":[
				{
					"mealType":1,
					"recommendPercent":39,
					"realPercent":1,
					"desc":"偏少"
				},
				{
					"mealType":2,
					"recommendPercent":35,
					"realPercent":35
				},
				{
					"mealType":3,
					"recommendPercent":25,
					"realPercent":25
				}
			],
			"labelExplainList":[
				{
					"labelKey":"habit_3",
					"title":"经常不吃早餐",
					"explain":"流行病学调查表明不吃早餐会增加患冠心病、脑卒中、肥胖症、抑郁症等多种慢性病的风险。并且长期的不吃早餐，也可能会导致胆结石。为了健康，建议：",
					"actionList":[
						"认真吃早餐",
						"摄入牛奶、鸡蛋等优质蛋白质",
						"主食注重粗细搭配，可以考虑全谷类面包等",
						"条件允许时配上一定量的蔬果"
					]
				}
			]
		},
		"dietStructInfo":{
			"dietStructList":[
				{
					"categoryType":1,
					"recommendPercent":13,
					"realPercent":7,
					"desc":"偏少"
				},
				{
					"categoryType":2,
					"recommendPercent":27,
					"realPercent":7,
					"desc":"偏少"
				},
				{
					"categoryType":3,
					"recommendPercent":18,
					"realPercent":5,
					"desc":"偏少"
				},
				{
					"categoryType":4,
					"recommendPercent":9,
					"realPercent":5,
					"desc":"偏少"
				},
				{
					"categoryType":5,
					"recommendPercent":27,
					"realPercent":7,
					"desc":"偏少"
				},
				{
					"categoryType":6,
					"recommendPercent":5,
					"realPercent":3,
					"desc":"偏少"
				},
				{
					"categoryType":7,
					"recommendPercent":0,
					"realPercent":0,
					"desc":"偏少"
				}
			],
			"labelExplainList":[
			]
		},
		"badDietInfo":{
			"labelExplainList":[
			]
		}
	}
}


```


