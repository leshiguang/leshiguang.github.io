**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="yOLGu"></a>
# 1.获取评估问卷题目
```bash
GET /api/healthRiskEval/v2/loadQuestions
```
<a name="835e629fab6cc2fe77cbd2832a6be1ed"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| serialNo | String | 问卷ID |  |

示例：
```json
{
	"serialNo": "20210202AAAAAAA"
}
```
**出参**：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| drawType | Integer | 出题类型 | 1-固定列表  |
| questionConf.groups | List | 题目分组集合 |  |
| questionConf.groups.groupQuestions | List | 题目集合 |  |
| questionConf.groups.groupQuestions.id | Long | 题目id |  |
| questionConf.groups.groupQuestions.questionType | Integer | 题目选项类型 | 1-单选<br />2-多选<br />3-单项填空<br />4-多项填空 |
| questionConf.groups.groupQuestions.analysis | String | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632720295214-19770fbf-6885-4f7e-8d53-350b8dd483ae.png#clientId=u6bdfdfa1-082a-4&from=paste&height=544&id=u101c7ea1&name=image.png&originHeight=544&originWidth=267&originalType=binary&ratio=1&size=29223&status=done&style=none&taskId=u833fef99-b593-4ad9-8921-7bc4a929ef2&width=267) |  |
| questionConf.groups.groupQuestions.optionContent.options | List | 题目选项集合 | <br /> |

| 选择类型 |  |  |
| --- | --- | --- |
| 选择题 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632720631541-278c5026-32bf-40f8-b0cc-3a33686e8dff.png#clientId=u6bdfdfa1-082a-4&from=paste&height=230&id=ubd45633e&name=image.png&originHeight=230&originWidth=334&originalType=binary&ratio=1&size=17565&status=done&style=none&taskId=u14b8e815-8426-4747-939a-e01ca2fa837&width=334) | checked ：是否默认选中<br /> |
| 多个子单选题<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632720787555-62a97054-fe57-46ae-99a4-501864a78222.png#clientId=u6bdfdfa1-082a-4&from=paste&height=275&id=u8c1f7400&name=image.png&originHeight=275&originWidth=275&originalType=binary&ratio=1&size=10768&status=done&style=none&taskId=u423b1f99-8e20-4a8a-97e1-b1172c805a8&width=275) | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632721014940-deb933a2-4dba-4677-b273-7a80914a4201.png#clientId=u6bdfdfa1-082a-4&from=paste&height=1090&id=ucdf88e0d&name=image.png&originHeight=1090&originWidth=497&originalType=binary&ratio=1&size=82581&status=done&style=none&taskId=u4c52ed87-db16-4a7d-84b9-063029f98ca&width=497) | blankType：<br />   - 1-普通输入框类型<br />   - 2-范围滑动框类型<br />   - 3-选择框类型<br />   - 4-步进器<br />   - 5-日历<br />   - 6-单选框radio-group<br />
blankRule.dataType: <br />   - 1-数值类型<br />   - 2-字符串类型<br />   - 3-日期类型<br /> |
| 有范围的限定填空 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632721889381-1d5dc27d-4d2b-4972-9591-c9941be81573.png#clientId=u6bdfdfa1-082a-4&from=paste&height=493&id=u29216861&name=image.png&originHeight=493&originWidth=460&originalType=binary&ratio=1&size=47170&status=done&style=none&taskId=ua3c4db3d-2c8a-4503-8472-a01c1d39f2a&width=460) | min: 最小<br />max: 最大<br />step: 自增多少 |
| 带引用值的选项 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632722196768-b2f32c90-44f5-4a78-b40d-36f2773077e6.png#clientId=u6bdfdfa1-082a-4&from=paste&height=358&id=u935be3d3&name=image.png&originHeight=358&originWidth=388&originalType=binary&ratio=1&size=32225&status=done&style=none&taskId=u1c13f4e8-6e14-4bb3-b2f5-cef2258cff6&width=388) | refValue：提交问卷的时候要带上该值 |
| 有范围的限定填空-带单位和默认值 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/324847/1632722299059-f3728fc3-0d9b-469a-b0c2-9b697e1c67c7.png#clientId=u6bdfdfa1-082a-4&from=paste&height=373&id=u3bc0ebb1&name=image.png&originHeight=373&originWidth=371&originalType=binary&ratio=1&size=26442&status=done&style=none&taskId=ubdf5d421-bc7f-4a61-805b-e61000cc80a&width=371) |  |

```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"serialNo":"20210202AAAAAAA",
		"questionnaireName":"健康风险评估问卷",
		"drawType":1,
		"questionConf":{
			"groups":[
				{
					"groupKey":"foodHabit",
					"groupName":"饮食习惯",
					"groupQuestions":[
						{
							"id":70003,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"
							{
								 \"overview\":\"（一个中等大小碗盛着的炒熟青菜≈300克）\",
								\"srcImg\":\"https://files.lifesense.com/other/20200731/3b088dc7ad8642bdb2cfa5d063fdb1e2.png\",
								\"additional\":\"\"
							}
							",
							"questionStem":"您平均每天吃多少新鲜蔬菜？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不吃",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"少于100克",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"100-300克",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"300-500克",
										"basal":false
									},
									{
										"optKey":"E",
										"optContent":"500克以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70004,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"
							{
								 \"overview\":\"（一个中等大小苹果≈200克）\",
								\"srcImg\":\"https://files.lifesense.com/other/20200731/05ab11999ac54da188aeff920d842643.png\",
								\"additional\":\"\"
							}
							",
							"questionStem":"您平均每天吃多少新鲜水果？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不吃",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"少于100克",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"100-200克",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"200-350克",
										"basal":false
									},
									{
										"optKey":"E",
										"optContent":"350克以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70005,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"
							{
								\"overview\":\"（肉类指畜肉、禽肉，也包括内脏）\",
								\"srcImg\":\"https://files.lifesense.com/other/20210105/4d83b87d13bb44b294804df107f1ed1a.png\",
								\"additional\":\"\"
							}
							",
							"questionStem":"您平均每天吃多少肉类及其制品？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不吃",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"少于50克",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"50-75克",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"75-100克",
										"basal":false
									},
									{
										"optKey":"E",
										"optContent":"100克以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70006,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您吃菜口重（盐放得比较多）吗？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"是",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"否",
										"basal":false
									}
								]
							}
						},
						{
							"id":70007,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"
							{
								\"overview\":\"（如咸鱼、咸肉、咸榨菜）\",
								\"srcImg\":\"\",
								\"additional\":\"\"
							}
							",
							"questionStem":"您通常每周吃几次咸菜或腌渍食品？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不吃",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"1-4次",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"5-7次",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"7次以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70008,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"
							{
								\"overview\":\"（如油饼、油条、炸糕等）\",
								\"srcImg\":\"\",
								\"additional\":\"\"
							}
							",
							"questionStem":"您通常每周吃几次油炸食品？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不吃",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"1-4次",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"5-7次",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"7次以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70009,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"
							{
								\"overview\":\"（如蛋糕、巧克力、饼干及各种烘培点心等）\",
								\"srcImg\":\"\",
								\"additional\":\"\"
							}
							",
							"questionStem":"您通常每周吃几次点心或甜食？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不吃",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"1-4次",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"5-7次",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"7次以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70010,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您近一周是否喝过酒？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"是（请继续回答第9题）",
										"basal":false
									},
									{
										"optKey":"B",
										"checked":true,
										"optContent":"否",
										"basal":false
									}
								]
							}
						},
						{
							"id":70011,
							"groupKey":"healthRiskEvaluate",
							"questionType":4,
							"answer":"",
							"analysis":"",
							"questionStem":"您近一周的饮酒量？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"basal":false,
										"blank":{
											"blankType":3,
											"label":"白酒（注：1两/杯）",
											"blankRule":{
												"dataType":"1",
												"elements":"
												[
													{
														\"text\":\"0杯\",
														\"value\":0
													},
													{
														\"text\":\"男:7杯以下 女:3.5杯以下\",
														\"value\":1
													},
													{
														\"text\":\"男:7杯-10杯 女:3.5杯-5杯\",
														\"value\":2
													},
													{
														\"text\":\"男:10杯以上 女:5杯以上\",
														\"value\":3
													}
												]
												"
											}
										}
									},
									{
										"optKey":"B",
										"checked":false,
										"basal":false,
										"blank":{
											"blankType":3,
											"label":"啤酒（注：1 瓶=450ml）",
											"blankRule":{
												"dataType":"1",
												"elements":"
												[
													{
														\"text\":\"0瓶\",
														\"value\":0
													},
													{
														\"text\":\"男:10瓶以下 女:7瓶以下\",
														\"value\":1
													},
													{
														\"text\":\"男:10-15 瓶 女:7-12 瓶\",
														\"value\":2
													},
													{
														\"text\":\"男:15 瓶以上 女:12瓶以上\",
														\"value\":3
													}
												]
												"
											}
										}
									},
									{
										"optKey":"C",
										"checked":false,
										"basal":false,
										"blank":{
											"blankType":3,
											"label":"葡萄酒（注：1 瓶=750ml）",
											"blankRule":{
												"dataType":"1",
												"elements":"
												[
													{
														\"text\":\"0瓶\",
														\"value\":0
													},
													{
														\"text\":\"男:2瓶以下 女:1.5瓶以下\",
														\"value\":1
													},
													{
														\"text\":\"男:2-5 瓶 女:1.5-4瓶\",
														\"value\":2
													},
													{
														\"text\":\"男:5 瓶以上 女:4瓶以上\",
														\"value\":3
													}
												]
												"
											}
										}
									}
								]
							}
						},
						{
							"id":700002,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您吸烟吗？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"从不吸烟",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"吸烟",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"已戒烟",
										"basal":false
									}
								]
							}
						}
					]
				},
				{
					"groupKey":"sportHabit",
					"groupName":"运动习惯",
					"groupQuestions":[
						{
							"id":70012,
							"groupKey":"healthRiskEvaluate",
							"questionType":3,
							"answer":"",
							"analysis":"",
							"questionStem":"过去3个月中，通常情况下您每周的运动次数是？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"checked":true,
										"optSubContent":"每周运动次数",
										"basal":false,
										"blank":{
											"blankType":2,
											"dataType":1,
											"unit":"次",
											"defaultValue":"0",
											"blankRule":{
												"min":"0",
												"max":"7",
												"dataType":"1",
												"step":"1"
											}
										}
									}
								]
							}
						},
						{
							"id":70013,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您主要进行的是哪种运动？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"高强度（跑步、骑行、力量训练）",
										"refValue":8,
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"中等强度（健走、慢跑、健身操）",
										"refValue":4,
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"低强度（散步、瑜伽、太极）",
										"refValue":3.3,
										"basal":false
									}
								]
							}
						},
						{
							"id":70014,
							"groupKey":"healthRiskEvaluate",
							"questionType":3,
							"answer":"",
							"analysis":"",
							"questionStem":"您每次运动持续多长时间？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"checked":true,
										"optSubContent":"每次运动时长",
										"basal":false,
										"blank":{
											"blankType":2,
											"dataType":1,
											"unit":"分钟",
											"defaultValue":"30",
											"blankRule":{
												"min":"1",
												"max":"180",
												"dataType":"1",
												"step":"1"
											}
										}
									}
								]
							}
						}
					]
				},
				{
					"groupKey":"mentalStress",
					"groupName":"睡眠和精神压力",
					"groupQuestions":[
						{
							"id":70015,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"过去一个月，您平均每天睡多少小时？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"少于6小时",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"6-8小时",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"8-10小时",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"10小时以上",
										"basal":false
									}
								]
							}
						},
						{
							"id":70016,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"过去一个月，您的总体睡眠质量如何？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"非常好",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"一般",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"不好",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"非常差",
										"basal":false
									}
								]
							}
						},
						{
							"id":70017,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"过去一个月，您感到精神紧张，很难放松吗？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"没有",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"偶尔",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"经常",
										"basal":false
									}
								]
							}
						}
					]
				},
				{
					"groupKey":"healthBodyIndex",
					"groupName":"健康体检指标",
					"groupQuestions":[
						{
							"id":70018,
							"groupKey":"healthRiskEvaluate",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您的空腹血糖在下列哪个范围？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"不知道",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"＜6.1mmol/L",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"6.1-7.0mmol/L",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"≥7.0mmol/L",
										"basal":false
									}
								]
							}
						},
						{
							"id":70019,
							"groupKey":"healthRiskEvaluate",
							"questionType":4,
							"answer":"",
							"analysis":"",
							"questionStem":"您的血压是？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"basal":false,
										"blank":{
											"blankType":6,
											"label":"收缩压（高压）：",
											"blankRule":{
												"dataType":"1",
												"elements":"
												[
													{
														\"text\":\"不知道\",
														\"value\":1
													},
													{
														\"text\":\"90-119mmHg\",
														\"value\":2
													},
													{
														\"text\":\"120-139mmHg\",
														\"value\":3
													},
													{
														\"text\":\"≥140mmHg\",
														\"value\":4
													}
												]
												"
											}
										}
									},
									{
										"optKey":"B",
										"basal":false,
										"blank":{
											"blankType":6,
											"label":"舒张压（低压）：",
											"blankRule":{
												"dataType":"1",
												"elements":"
												[
													{
														\"text\":\"不知道\",
														\"value\":1
													},
													{
														\"text\":\"60-79mmHg\",
														\"value\":2
													},
													{
														\"text\":\"80-89mmHg\",
														\"value\":3
													},
													{
														\"text\":\"≥90mmHg\",
														\"value\":4
													}
												]
												"
											}
										}
									}
								]
							}
						}
					]
				}
			]
		}
	}
}


```
<a name="UioKQ"></a>
# 2.提交评估问卷答案
```bash
POST /api/healthRiskEval/v2/submitQuestions
```

<a name="MjLBu"></a>
##### 入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| questionSubmitList.questionId | Long | 题目id |  |
| questionSubmitList.submitted.key | String | 选项key |  |
| questionSubmitList.submitted.value | String | 选项值 | 如果选项没有value，则与选择key保持一致 |
| questionSubmitList.submitted.content | String | 选择内容 |  |

```json

{
	"serialNo":"20210202AAAAAAA",
	"questionSubmitList":[
		{
			"questionId":70003,
			"submitted":[
				{
					"key":"C",
					"value":"C",
					"content":"100-300克"
				}
			]
		},
		{
			"questionId":70004,
			"submitted":[
				{
					"key":"D",
					"value":"D",
					"content":"200-350克"
				}
			]
		},
		{
			"questionId":70005,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"少于50克"
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
					"key":"D",
					"value":"D",
					"content":"7次以上"
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
					"key":"D",
					"value":"D",
					"content":"7次以上"
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
					"value":2,
					"content":"男:10-15 瓶 女:7-12 瓶"
				},
				{
					"key":"C",
					"value":0,
					"content":"0瓶"
				}
			]
		},
		{
			"questionId":700002,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"吸烟"
				}
			]
		},
		{
			"questionId":70012,
			"submitted":[
				{
					"key":"A",
					"value":1,
					"content":"1次"
				}
			]
		},
		{
			"questionId":70013,
			"submitted":[
				{
					"key":"B",
					"value":"B",
					"content":"中等强度（健走、慢跑、健身操）"
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
					"key":"C",
					"value":"C",
					"content":"不好"
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
					"key":"B",
					"value":"B",
					"content":"＜6.1mmol/L"
				}
			]
		},
		{
			"questionId":70019,
			"submitted":[
				{
					"key":"A",
					"value":2,
					"content":"90-119mmHg"
				},
				{
					"key":"B",
					"value":2,
					"content":"60-79mmHg"
				}
			]
		},
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
					"value":"1995-09-18",
					"content":811353600000
				}
			]
		},
		{
			"questionId":69003,
			"submitted":[
				{
					"key":"A",
					"value":166,
					"content":"166cm"
				}
			]
		},
		{
			"questionId":69004,
			"submitted":[
				{
					"key":"A",
					"value":70,
					"content":"70kg"
				}
			]
		},
		{
			"questionId":70001,
			"submitted":[
				{
					"key":"A",
					"value":"A",
					"content":"否"
				},
				{
					"key":"C",
					"value":"C",
					"content":"高血压"
				}
			]
		}
	]
}


```

**出参**：<br />无
<a name="eAoEr"></a>
# 3.获取某个评估的评估结果

```bash
GET /api/healthRiskEval/v2/getOneEvaluateResult
```

**入参**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryId | Long | 评估id | 传空则查询最近一次评估 |

<a name="4d04866a6b9edcd847978932d37166cb"></a>
##### 出参：

<a name="ed3353d7e8e2a106111486ff2a340e73"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateInfo | Object | 评估信息 |  |
| userInfo | Object | 用户信息 |  |
| moduleInfoList | List<Object> | 模块数据集合 |  |
| riskLabelList | List<Object> | 风险标签集合 |  |
| riskSuggestList | List<Object> | 风险建议集合 |  |


<a name="1d437cff5a6f33e8cd5929a8a4426d3c"></a>
###### 评估信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateAge | Double | 评估年龄 |  |
| perfectAge | Double | 理想年龄 |  |
| age | Double | 实际年龄 |  |
| healthScore | Double | 健康分 |  |
| masterText | String | 主态评估结果文案 |  |
| guestText | String | 客态态评估结果文案 |  |
| copyText | String | 复制评估结果文案 |  |
| placeholderMap | Map | 占位符数据map |  |
| evaluateDate | Date | 评估时间 |  |
| evaScene | String | 评估场景 | first 首次评测<br />no_first 非首次评测<br />risk_change 14天风险变更评测<br />longtime 长时间未测 |

<a name="7e2019db57047448ddf1951c216da633"></a>
###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | _用户name_ |  |
| sex | Integer | 性别 | 1 男<br />2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |
| height | String | 身高 | cm |

<a name="6e6c39b54ec15eff687d9b5d9378f0da"></a>
###### 模块数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key | "sport": "运动"<br />"bloodpressure": "血压"<br />"bloodsugar": "血糖"<br />"diet": "膳食"<br />"weight": "体重"<br />"sleepStress": "睡眠压力" |
| moduleName | String | 模块名称 |  |
| score | Double | 模块分 | 满分10分 |
| risk | boolean | 是否有风险 |  |

<a name="d9c6250412974a81eea274ba4bb08820"></a>
###### 风险标签：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key |  |
| firstLevelLabelKey | String | 一级标签key |  |
| threeLevelLabelKey | String | 三级标签key |  |
| threeLevelLabelMsg | Double | 三级标签文本 |  |

<a name="8b4028492b96c8f1f0c603341f6377a1"></a>
###### 风险建议：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| title | String | 标题 |  |
| moduleKey | String | 模块key |  |
| suggestList | List<Object> | 建议集合 |  |
| recommend | String | 推荐文案 |  |
| jumpBtnText | String | 跳转按钮文本 |  |
| jumpUrl | String | 跳转链接 |  |
| productList | List<Object> | 商品信息 |  |

<a name="d1e7aaa54bb381acb09c5f735da27911"></a>
###### 建议集合：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| title | String | 标题 |  |
| masterSuggest | String | 主态文案 |  |
| guestSuggest | String | 客态 |  |
| copySuggest | String | 复制 |  |

<a name="1473194cfefc08d3994e6eb6ab5e78e3"></a>
###### 

