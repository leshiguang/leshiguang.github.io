<a name="ffCxd"></a>
## 1.1 首页查询健康年龄数据
  url：域名 +  /hai-rest/eva/query/getBriefInfo

  method：get
<a name="oYuP8"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="7jtzA"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| hasData | Boolean | 是否有数据 |  |
| longTimeNotUpdate | Boolean | 是否长期未更新数据 |  |
| evaluateAge | Double | 评估年龄 |  |
| addAge | String | 评估年龄较上次评估年龄增加多少 |  |
| evaluateAgeDiffValue | Double | 评估年龄与实际年龄差值 |  |
| healthCondition | String | 健康状况 | 良好<br />及格<br />不及格 |
| evaluateDate | Date | 评估时间 |  |


<br />示例返回报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"hasData":true,
		"longTimeNotUpdate":false,
		"evaluateAge":27.6,
		"addAge":3.5,
		"evaluateAgeDiffValue":2.6,
		"healthCondition":"不及格",
		"evaluateDate":1596023100000
	}
}

```
<a name="ztOXs"></a>
## 1.2 查询健康评估结果数据
  url：域名 +  /hai-rest/eva/query/getDetailInfo**<br />  method：get<br />**  **描述：健康评估首页查询评估详情信息
<a name="D2kyy"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="W2TUC"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateInfo | Object | 评估信息 | 见[风险数据集合](#JA2nS) |
| userInfo | Object | 用户信息 | 见[风险数据集合](#VvmPl) |
| moduleInfos | List<Object> | 模块数据集合 | 见[风险数据集合](#ouCMc) |

<a name="y5BgI"></a>
###### 评估信息:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateAge | Double | 评估年龄 |  |
| perfectAge | Double | 理想年龄 |  |
| evaluateText | String | 评估文案 |  |
| healthCondition | String | 健康状况 | 良好<br />及格<br />不及格 |
| evaluateAgeDiffValue | String | 评估年龄与实际年龄差值 |  |

<a name="sA1jt"></a>
###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | _用户name_ |  |
| sex | Integer | 性别 | 1 男<br />2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |
| height | String | 身高 | cm |

<a name="lRilV"></a>
###### 模块数据集合(List)：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key | "weight": "体重"<br />"tobaccoWine": "烟酒<br />"food": "膳食"<br />"sport": "运动"<br />"sleepStress": "睡眠/压力"<br />"threeHigh": "三高指标" |
| moduleName | String | 模块名称 |  |
| score | Double | 模块分 | 满分10分 |
| risk | boolean | 是否有风险 |  |
| riskLabelInfos | List<Object> | 风险标签信息 | 见[标签信息](#vKrwN)<br />risk为true时，才会有风险标签信息 |

<a name="lYicl"></a>
###### 标签信息(List):
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| labelKey | String | 标签key |  |
| labelName | String | 标签名称 |  |
| refValue | String | 参考值 |  |
| suggest | String | 建议 |  |
|  |  |  |  |

<a name="QSDEc"></a>
###### 示例返回报文：
<a name="DAp0z"></a>
## 1.3 提交问卷
  url：域名 +  /hai-rest/eva/questionnaire/submitGetResult<br />  method：post<br />  描述：提交问卷

**header参数或者url参数**<br />**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 关联账号id | 关联账号id<br /> |

<a name="vkEi7"></a>
##### post入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| serialNo | String | 问卷序列号 | 固定：<br />20200715AAAAAAA |
| questionSubmitList | List<Object> | 问题提交记录 |  |

<a name="CF0J7"></a>
###### 问题提交记录:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| questionId | Long | 题目ID |  |
| submitted | List<Object> | 用户提交的值 |  |

<a name="kZssU"></a>
###### 用户提交的值:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| key | String | optionKey |  |
| value | Object | 对应的值 选择题时同key一致，填空题时为用户提交的值 |  |
| content | Object | 选择题时为key对应的内容，填空题时为用户提交的值 | 可为空 |

<a name="SHuiH"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| evaResult | Object | 评估结果信息 |  |
| evaResultItemDetailList | List<Object> | 评估结果项集合 |  |

<a name="BW1XA"></a>
###### 评估结果信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | Long | 主键id |  |
| userId | Long | 用户id |  |
| age | Integer | 年龄 |  |
| evaluateAge | BigDecimal | 评估年龄 |  |
| perfectAge | BigDecimal | 理想年龄 |  |
| healthScore | BigDecimal | 健康分 |  |
| sourceType | Integer | 数据来源 |  |
| evaluateDate | Date | 评估时间 |  |
| healthCondition | String | 健康状况 | 良好<br />及格<br />不及格 |
| createTime | Date | 创建时间 |  |
| updateTime | Date | 更新时间 |  |

<a name="FURDf"></a>
###### 评估结果项(List)：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | Long | 主键id |  |
| userId | Long | 用户id |  |
| scoreItemKey | String | 记分项key |  |
| scoreItemVal | BigDecimal | 记分项分值 |  |
| threeLevelLabelKey | String | 三级标签key |  |
| moduleKey | String | 所属模块 |  |
| evaluateDate | Date | 评估时间 |  |
| measurementDate | Date | 测量时间 |  |
| sourceType | Integer | 数据来源 |  |
| createTime | Date | 创建时间 |  |
| updateTime | Date | 更新时间 |  |
| secondLevelLabelKey | String | 二级标签key |  |
| firstLevelLabelKey | String | 一级标签key |  |
| threeLevelLabelMsg | String | 三级标签文本 |  |
| secondLevelLabelMsg | String | 二级标签文本 |  |
| firstLevelLabelMsg | String | 一级标签文本 |  |
| suggest | String | 建议 |  |
| refValue | String | 引用值 |  |

<a name="mrInX"></a>
###### 入参示例报文：
```json

{
	"serialNo":"20200715AAAAAAA",
	"questionSubmitList":[
		{
			"questionId":69001,
			"submitted":[
				{
					"key":"A",
					"value":1,
					"content":"男"
				}
			]
		},
		{
			"questionId":69002,
			"submitted":[
				{
					"key":"A",
					"value":"1994-12-31T16:00:00.000Z",
					"content":"Sun Jan 01 1995 00:00:00 GMT+0800 (中国标准时间)"
				}
			]
		},
		{
			"questionId":69003,
			"submitted":[
				{
					"key":"A",
					"value":170,
					"content":"170cm"
				}
			]
		},
		{
			"questionId":69004,
			"submitted":[
				{
					"key":"A",
					"value":60,
					"content":"60kg"
				}
			]
		},
		{
			"questionId":70001,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"糖尿病"
				}
			]
		},
		{
			"questionId":70002,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"吸烟"
				}
			]
		},
		{
			"questionId":70003,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"少于100克"
				}
			]
		},
		{
			"questionId":70004,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"100-200克"
				}
			]
		},
		{
			"questionId":70005,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"50-75克"
				}
			]
		},
		{
			"questionId":70006,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"否"
				}
			]
		},
		{
			"questionId":70007,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"1-4次"
				}
			]
		},
		{
			"questionId":70008,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"5-7次"
				}
			]
		},
		{
			"questionId":70009,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"5-7次"
				}
			]
		},
		{
			"questionId":70010,
			"submitted":[
				{
					"key":"A",
					"value":"A",
					"content":"是（请继续回答第9题）"
				}
			]
		},
		{
			"questionId":70011,
			"submitted":[
				{
					"key":"A",
					"value":0,
					"content":"0杯"
				},
				{
					"key":"B",
					"value":1,
					"content":"10瓶以下"
				},
				{
					"key":"C",
					"value":0,
					"content":"0瓶"
				}
			]
		},
		{
			"questionId":70012,
			"submitted":[
				{
					"key":"A",
					"value":2,
					"content":"2次"
				}
			]
		},
		{
			"questionId":70013,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"低强度（散步、瑜伽、太极）"
				}
			]
		},
		{
			"questionId":70014,
			"submitted":[
				{
					"key":"A",
					"value":30,
					"content":"30分钟"
				}
			]
		},
		{
			"questionId":70015,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"6-8小时"
				}
			]
		},
		{
			"questionId":70016,
			"submitted":[
				{
					"key":"D",
					"value":"D",
					"content":"非常差"
				}
			]
		},
		{
			"questionId":70017,
			"submitted":[
				{
					"key":"A",
					"value":"A",
					"content":"没有"
				}
			]
		},
		{
			"questionId":70018,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"6.1-7.0mmol/L"
				}
			]
		},
		{
			"questionId":70019,
			"submitted":[
				{
					"key":"A",
					"value":3,
					"content":"120-139mmHg"
				},
				{
					"key":"B",
					"value":3,
					"content":"80-89mmHg"
				}
			]
		},
		{
			"questionId":70020,
			"submitted":[
				{
					"key":"A",
					"value":2,
					"content":"偏高"
				},
				{
					"key":"B",
					"value":3,
					"content":"不知道"
				},
				{
					"key":"C",
					"value":3,
					"content":"不知道"
				},
				{
					"key":"D",
					"value":3,
					"content":"不知道"
				}
			]
		}
	]
}


```
<a name="x9A5T"></a>
###### 出参报文示例：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"evaResult":{
			"id":169,
			"userId":23342312,
			"age":25,
			"evaluateAge":25.6,
			"perfectAge":22.4,
			"healthScore":49,
			"sourceType":1,
			"evaluateDate":1604548992000,
			"healthCondition":"不及格",
			"createTime":1604548992000,
			"updateTime":1604548992000
		},
		"evaResultItemDetailList":[
			{
				"id":2400,
				"userId":23342312,
				"scoreItemKey":"stress",
				"scoreItemVal":10,
				"threeLevelLabelKey":"stress_normal",
				"moduleKey":"sleepStress",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_stress",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"压力正常",
				"secondLevelLabelMsg":"压力正常",
				"firstLevelLabelMsg":"健康"
			},
			{
				"id":2401,
				"userId":23342312,
				"scoreItemKey":"salt",
				"scoreItemVal":0,
				"threeLevelLabelKey":"salt_normal",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_salt",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"盐摄入适量",
				"secondLevelLabelMsg":"饮食合理",
				"firstLevelLabelMsg":"健康"
			},
			{
				"id":2402,
				"userId":23342312,
				"scoreItemKey":"fruit",
				"scoreItemVal":0,
				"threeLevelLabelKey":"fruit_seriousLack",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_fruit",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"水果摄入严重不足",
				"secondLevelLabelMsg":"饮食不合理",
				"firstLevelLabelMsg":"亚健康",
				"suggest":"您当前的水果摄入量严重不足。如果长期水果摄入不足，心血管病、糖尿病甚至是部分肿瘤的患病风险有可能增加，所以建议您逐渐增加水果摄入量，逐渐增加到4两至7两。",
				"refValue":"每天水果摄入350克以上"
			},
			{
				"id":2403,
				"userId":23342312,
				"scoreItemKey":"sleeptime",
				"scoreItemVal":2,
				"threeLevelLabelKey":"sleeptime_enough",
				"moduleKey":"sleepStress",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_sleeptime",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"睡眠时长充足",
				"secondLevelLabelMsg":"睡眠良好",
				"firstLevelLabelMsg":"健康"
			},
			{
				"id":2404,
				"userId":23342312,
				"scoreItemKey":"fry",
				"scoreItemVal":0,
				"threeLevelLabelKey":"fry_excessive",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_fry",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"油炸摄入过多",
				"secondLevelLabelMsg":"饮食不合理",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2405,
				"userId":23342312,
				"scoreItemKey":"vegetable",
				"scoreItemVal":1,
				"threeLevelLabelKey":"vegetable_seriousLack",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_vegetable",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"蔬菜摄入严重不足",
				"secondLevelLabelMsg":"饮食不合理",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2406,
				"userId":23342312,
				"scoreItemKey":"liquor",
				"scoreItemVal":5,
				"threeLevelLabelKey":"drink_moderate",
				"moduleKey":"tobaccoWine",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_drink",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"适量",
				"secondLevelLabelMsg":"饮酒",
				"firstLevelLabelMsg":"健康"
			},
			{
				"id":2407,
				"userId":23342312,
				"scoreItemKey":"sweetmeat",
				"scoreItemVal":0,
				"threeLevelLabelKey":"sweetmeat_excessive",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_sweetmeat",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"甜食摄入过多",
				"secondLevelLabelMsg":"饮食不合理",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2408,
				"userId":23342312,
				"scoreItemKey":"pickles",
				"scoreItemVal":1,
				"threeLevelLabelKey":"pickles_more",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_pickles",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"腌制品摄入较多",
				"secondLevelLabelMsg":"饮食合理",
				"firstLevelLabelMsg":"健康"
			},
			{
				"id":2410,
				"userId":23342312,
				"scoreItemKey":"smoking",
				"scoreItemVal":0,
				"threeLevelLabelKey":"smoking",
				"moduleKey":"tobaccoWine",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_smokeing",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"抽烟",
				"secondLevelLabelMsg":"抽烟",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2411,
				"userId":23342312,
				"scoreItemKey":"meat",
				"scoreItemVal":2,
				"threeLevelLabelKey":"meat_normal",
				"moduleKey":"food",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_meat",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"肉类摄入适量",
				"secondLevelLabelMsg":"饮食合理",
				"firstLevelLabelMsg":"健康"
			},
			{
				"id":2412,
				"userId":23342312,
				"scoreItemKey":"bloodpressure",
				"scoreItemVal":5,
				"threeLevelLabelKey":"bp_normalHigh",
				"moduleKey":"threeHigh",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_bloodpressure",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"正常血压高值",
				"secondLevelLabelMsg":"血压异常",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2413,
				"userId":23342312,
				"scoreItemKey":"sport",
				"scoreItemVal":3,
				"threeLevelLabelKey":"sport_lack",
				"moduleKey":"sport",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_sport",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"体力活动水平不足",
				"secondLevelLabelMsg":"运动不足",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2414,
				"userId":23342312,
				"scoreItemKey":"bloodsugar",
				"scoreItemVal":5,
				"threeLevelLabelKey":"bs_diabetes",
				"moduleKey":"threeHigh",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"illness_bloodsugar",
				"firstLevelLabelKey":"illness",
				"threeLevelLabelMsg":"糖尿病",
				"secondLevelLabelMsg":"血糖异常",
				"firstLevelLabelMsg":"疾病"
			},
			{
				"id":2415,
				"userId":23342312,
				"scoreItemKey":"sleepquality",
				"scoreItemVal":0,
				"threeLevelLabelKey":"sleep_veryPoor",
				"moduleKey":"sleepStress",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"subhealth_sleepquality",
				"firstLevelLabelKey":"subhealth",
				"threeLevelLabelMsg":"睡眠质量差",
				"secondLevelLabelMsg":"睡眠不好",
				"firstLevelLabelMsg":"亚健康"
			},
			{
				"id":2416,
				"userId":23342312,
				"scoreItemKey":"bmi",
				"scoreItemVal":10,
				"threeLevelLabelKey":"weight_normal",
				"moduleKey":"weight",
				"evaluateDate":1604548992000,
				"sourceType":1,
				"createTime":1604548992000,
				"updateTime":1604548992000,
				"secondLevelLabelKey":"health_weight",
				"firstLevelLabelKey":"health",
				"threeLevelLabelMsg":"体重正常",
				"secondLevelLabelMsg":"体重正常",
				"firstLevelLabelMsg":"健康"
			}
		]
	}
}

```
<a name="JF7u1"></a>
## 1.4 拉取题目列表
| POST | /api/evaluate/v1.0/loadQuestions |  |
| --- | --- | --- |
| 请求参数 | { "serialNo": "20200715AAAAAAA"} |  |
| 响应结果 | <br />{<br />    "code": 200,<br />    "msg": "success",<br />    "data": {<br />        "serialNo": "20200715AAAAAAA",<br />        "questionnaireName": "高血压风险评估",<br />        "drawType": 1,// 出题类型 1 固定列表 2随机列表 3树形关联列表<br />        "**questionConf**": {<br />            "questions": [<br />                {<br />                    "id": 60016,<br />                    "groupKey": "unclassified",<br />                    "questionType": 1, <br />                    "questionStem": "您的性别",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "optContent": "男"<br />                            },<br />                            {<br />                                "optKey": "B",<br />                                "optContent": "女"<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60017,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的年龄",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "30",<br />                                    "blankRule": {<br />                                        "unit": "岁",<br />                                        "min": "20",<br />                                        "max": "80",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60018,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的身高",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "170",<br />                                    "blankRule": {<br />                                        "unit": "cm",<br />                                        "min": "50",<br />                                        "max": "250",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60019,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的体重",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "60",<br />                                    "blankRule": {<br />                                        "unit": "kg",<br />                                        "min": "0",<br />                                        "max": "200",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60020,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的收缩压（高压）",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "120",<br />                                    "blankRule": {<br />                                        "unit": "mmHg",<br />                                        "min": "80",<br />                                        "max": "139",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                }<br />            ]<br />        }<br />    }<br />} |  |
| 说明 | **drawType定义**： 1固定题目列表 2随机题目列表 3树形关联列表<br />**questionType定义：**1单选 2多选 3单项填空 4多项填空<br />**填空题blankType定义： **1普通输入框类型 2范围滑动框类型 3选择框类型 4步进器<br />**填空题dataType定义： **1 数值类型 2 字符串类型 3日期类型 4时间戳 |  |


