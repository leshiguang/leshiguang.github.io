<a name="ffCxd"></a>
## 1.1 首页查询健康年龄数据
  url：域名 +  /hai-rest/eva/query/getBriefInfo<br />  method：get
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


示例返回报文：
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
  url：域名 +  /hai-rest/eva/query/getDetailInfo<br />  method：get<br />**  **描述：健康评估首页查询评估详情信息
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
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"evaluateInfo":{
			"evaluateAge":25.7,
			"perfectAge":22.4,
			"evaluateAgeDiffValue":0.7,
			"evaluateText":"您的评价健康年龄大于生理年龄，说明您目前的生活习惯不健康，减少了您的健康寿命，需要赶紧采取行动矫正自己不良的生活习惯。若您将不良生活习惯全部改掉，您可以年轻3.3岁，达到22.4岁的理想健康年龄。",
			"healthCondition":"不及格",
			"healthScore":46
		},
		"userInfo":{
			"userName":"..test..",
			"sex":1,
			"age":25,
			"headImg":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLdjibSZBoU4bsB2g6qdM8nSbD4Y05uNyLkAJaoToFzsribYAvrbcauWtDztdeRwhicZicpQFWW5ftd2w/132",
			"height":170
		},
		"moduleInfos":[
			{
				"moduleName":"睡眠/压力",
				"moduleKey":"sleepStress",
				"score":8,
				"risk":true,
				"labelInfos":[
					{
						"labelKey":"sleep_veryPoor",
						"labelName":"睡眠质量差"
					}
				]
			},
			{
				"moduleName":"运动",
				"moduleKey":"sport",
				"score":0,
				"risk":true,
				"labelInfos":[
					{
						"labelKey":"step_low",
						"labelName":"步数处于低水平"
					}
				]
			},
			{
				"moduleName":"三高指标",
				"moduleKey":"threeHigh",
				"score":3.4,
				"risk":true,
				"labelInfos":[
					{
						"labelKey":"bp_normalHigh",
						"labelName":"正常血压高值"
					},
					{
						"labelKey":"bs_diabetes",
						"labelName":"糖尿病"
					}
				]
			},
			{
				"moduleName":"膳食",
				"moduleKey":"food",
				"score":2.7,
				"risk":true,
				"labelInfos":[
					{
						"labelKey":"fruit_seriousLack",
						"labelName":"水果摄入严重不足",
						"refValue":"每天水果摄入350克以上",
						"suggest":"您当前的水果摄入量严重不足。如果长期水果摄入不足，心血管病、糖尿病甚至是部分肿瘤的患病风险有可能增加，所以建议您逐渐增加水果摄入量，逐渐增加到4两至7两。"
					},
					{
						"labelKey":"fry_excessive",
						"labelName":"油炸摄入过多"
					},
					{
						"labelKey":"vegetable_seriousLack",
						"labelName":"蔬菜摄入严重不足"
					},
					{
						"labelKey":"sweetmeat_excessive",
						"labelName":"甜食摄入过多"
					}
				]
			},
			{
				"moduleName":"烟酒",
				"moduleKey":"tobaccoWine",
				"score":3.4,
				"risk":true,
				"labelInfos":[
					{
						"labelKey":"smoking",
						"labelName":"抽烟"
					}
				]
			},
			{
				"moduleName":"体重",
				"moduleKey":"weight",
				"score":10,
				"risk":false,
				"labelInfos":[
				]
			}
		]
	}
}


```
<a name="DAp0z"></a>
## 1.3 提交问卷
  url：域名 +  /hai-rest/eva/questionnaire/submitGetResult<br />  method：post<br />  描述：提交问卷

**header参数或者url参数**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 关联账号id | 关联账号id |

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
参考[1.2 查询健康评估结果数据接口](#W2TUC)出参
<a name="UeXSL"></a>
##### 入参示例报文：
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
<a name="i32Sz"></a>
## 1.4 拉取题目列表
| POST | /api/evaluate/v1.0/loadQuestions |  |
| --- | --- | --- |
| 请求参数 | { "serialNo": "20200715AAAAAAA" } |  |
| 响应结果 | <br />{<br />    "code": 200,<br />    "msg": "success",<br />    "data": {<br />        "serialNo": "20200715AAAAAAA",<br />        "questionnaireName": "高血压风险评估",<br />        "drawType": 1,// 出题类型 1 固定列表 2随机列表 3树形关联列表<br />        "**questionConf**": {<br />            "questions": [<br />                {<br />                    "id": 60016,<br />                    "groupKey": "unclassified",<br />                    "questionType": 1, <br />                    "questionStem": "您的性别",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "optContent": "男"<br />                            },<br />                            {<br />                                "optKey": "B",<br />                                "optContent": "女"<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60017,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的年龄",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "30",<br />                                    "blankRule": {<br />                                        "unit": "岁",<br />                                        "min": "20",<br />                                        "max": "80",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60018,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的身高",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "170",<br />                                    "blankRule": {<br />                                        "unit": "cm",<br />                                        "min": "50",<br />                                        "max": "250",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60019,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的体重",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "60",<br />                                    "blankRule": {<br />                                        "unit": "kg",<br />                                        "min": "0",<br />                                        "max": "200",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                },<br />                {<br />                    "id": 60020,<br />                    "groupKey": "unclassified",<br />                    "questionType": 3,<br />                    "questionStem": "您的收缩压（高压）",<br />                    "optionContent": {<br />                        "options": [<br />                            {<br />                                "optKey": "A",<br />                                "checked": true,<br />                                "blank": {<br />                                    "blankType": 2,<br />                                    "defaultValue": "120",<br />                                    "blankRule": {<br />                                        "unit": "mmHg",<br />                                        "min": "80",<br />                                        "max": "139",<br />                                        "dataType": "1",<br />                                        "step": "1"<br />                                    }<br />                                }<br />                            }<br />                        ]<br />                    }<br />                }<br />            ]<br />        }<br />    }<br />} |  |
| 说明 | **drawType定义**： 1固定题目列表 2随机题目列表 3树形关联列表<br />**questionType定义：**1单选 2多选 3单项填空 4多项填空<br />**填空题blankType定义： **1普通输入框类型 2范围滑动框类型 3选择框类型 4步进器<br />**填空题dataType定义： **1 数值类型 2 字符串类型 3日期类型 4时间戳 |  |


<a name="kF4iu"></a>
## 1.5 拉取指定问卷的最新答题内容
  url：域名 +  /api/evaluate/v1.0/queryLastUserAnswer<br />  method：get
<a name="cgWUE"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |
| bizType | String | 问卷所属业务 | 全面风险评估： healthRisk <br />免疫力评估： immune<br />睡眠评估：sleep<br />饮食评估：diet |

<a name="XBTfi"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| questionId | Long | 题目ID |  |
| questionType | Integer | 题目类型 | 1-单选 2-多选 3-单项填空 4-多项填空 |
| submitted | Class | 用户提交内容 | List |
| submitted.key | String | 选项(非选择题默认A) |  |
| submitted.value | Object | 选择题时同key一致，填空题时为用户提交的值 |  |
| submitted.content | String | 可为空，选择题时为key对应的内容，填空题时为用户提交的展示值 | <br /> |


示例返回报文：
```json

{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "questionId": 69003,
            "questionType": 3,
            "submitted": [
                {
                    "key": "A",
                    "value": 175,
                    "content": "175cm"
                }
            ]
        },
        {
            "questionId": 70001,
            "questionType": 2,
            "submitted": [
                {
                    "key": "A",
                    "value": "A",
                    "content": "否"
                }
            ]
        },
        {
            "questionId": 70006,
            "questionType": 1,
            "submitted": [
                {
                    "key": "B",
                    "value": "B",
                    "content": "否"
                }
            ]
        }
    ]
}

```

