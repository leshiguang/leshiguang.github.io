<a name="zrZdN"></a>
## 1. 查询问卷题目接口
```
 GET evaluate-rest/questionnaire/loadQuestions
```
<a name="yf5Tr"></a>
##### 入参： 
```json
{
	"serialNo": "20210608JAEXO2C"
}
```
<a name="TXzzO"></a>
##### 出参：
参考：[https://lifesense.yuque.com/lifesense_tec/gbzzst/kla0c3#Zz7Rp](https://lifesense.yuque.com/lifesense_tec/gbzzst/kla0c3#Zz7Rp)
<a name="Kc13k"></a>
###### 示例出参报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"serialNo":"20210608JAEXO2C",
		"questionnaireName":"运动评估",
		"drawType":1,
		"questionConf":{
			"groups":[
				{
					"groupKey":"sportRisk",
					"groupName":"运动风险",
					"groupQuestions":[
						{
							"id":80100,
							"groupKey":"exercise",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您在日常生活中或进行体力活动时是否出现过胸痛？",
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
							"id":80101,
							"groupKey":"exercise",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您有因为改变运动而恶化的软组织、骨骼或关节疾病吗？（如肌肉、韧带或肌腱问题）",
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
							"id":80102,
							"groupKey":"exercise",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您是否需要在专业人士/医护人员的陪同下进行运动？",
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
										"optSubContent":"每周运动时长",
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
					"groupKey":"sportTarget",
					"groupName":"运动目标",
					"groupQuestions":[
						{
							"id":80103,
							"groupKey":"exercise",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您的运动目标是？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"控制慢病",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"保持身材",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"减脂减重",
										"basal":false
									},
									{
										"optKey":"D",
										"optContent":"增肌塑形",
										"basal":false
									}
								]
							}
						}
					]
				},
				{
					"groupKey":"sportIntensity",
					"groupName":"运动强度",
					"groupQuestions":[
						{
							"id":80104,
							"groupKey":"exercise",
							"questionType":1,
							"answer":"",
							"analysis":"",
							"questionStem":"您平时的身体活动强度是？",
							"optionContent":{
								"options":[
									{
										"optKey":"A",
										"optContent":"经常久坐",
										"optSubContent":"偶尔走动或站立，但很少重体力活动；如办公室职员、学生等",
										"basal":false
									},
									{
										"optKey":"B",
										"optContent":"经常站立或走动",
										"optSubContent":"偶尔走动或站立，但很少重体力活动；如办公室职员、学生等",
										"basal":false
									},
									{
										"optKey":"C",
										"optContent":"经常有重体力活动",
										"optSubContent":"偶尔走动或站立，但很少重体力活动；如办公室职员、学生等",
										"basal":false
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
<a name="FDhiw"></a>
## 2. 提交问卷
```
POST /sport-rest/api/sportmanage/v2.0/evaluate/submit
```
<a name="g3m3F"></a>
##### 入参： 
参考：[https://lifesense.yuque.com/lifesense_tec/gbzzst/kla0c3#4oEY6](https://lifesense.yuque.com/lifesense_tec/gbzzst/kla0c3#4oEY6)
<a name="o9Sty"></a>
##### 出参：
<a name="Ibe00"></a>
## 3. 查询评估结果
```
 GET /api/healthRiskEval/v2/diet/queryReport
```
<a name="jCd9v"></a>
##### 入参： 
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryUserId | Long | 查询用户id |  |

<a name="agRzP"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userInfo | Object | 用户信息 |  |
| evalResultInfo | Object | 评估结果 |  |
| schemeInfo | Object | 专属计划数据 |  |
| tipsInfo | Object | 小贴士 |  |
| productList | List<Object> | 商品推荐 |  |

<a name="X9SN7"></a>
###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | _用户name_ |  |
| sex | Integer | 性别 | 1 男<br />2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |
|  |  |  |  |

<a name="OMu9E"></a>
###### 评估结果：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| stageName | String | 阶段名 |  |
| evaluateDate | Date | 评估时间 |  |
| stageId | Integer | 所属阶段 | 0-恢复期<br />1-适应期<br />2-过渡期<br />3-达标期<br />4-稳定期 |
| weekNum | Integer | 所属周 | 1~13周 |
| explainText | String | 结果说明文本 |  |
| placeholderMap | Map | 占位符数据map |  |
|  |  |  |  |

<a name="YaDkq"></a>
###### 专属计划：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| stageWeeklyExerciseMinuteArray | Array | 阶段每周的运动时长 | 参考：<br />固定返回4个阶段的数据，<br />共13条数据 |
| heartRateStartVal | Integer | 心率开始值 | <br /> |
| heartRateEndVal | Integer | 心率结束值 |  |
| recommendExerciseTypes | String | 推荐运动类型 |  |
| recommendExerciseCount | Integer | 推荐运动次数 |  |
| tips | String | 小贴士 |  |

<a name="IE5WH"></a>
###### 小贴士：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| medicineTipsList | List<String> | 用药贴士 |  |
| strengthTipsList | List<String> | 运动贴士 |  |
| unadvisableCrowdTipsList | List<String> | 不适用人群 | <br /> |

<a name="wr3eX"></a>
###### 商品推荐：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| itemId | Long | 标题 |  |
| title | String | 商品名称 |  |
| picture | String | 商品图片链接 |  |
| sellPoint | String | 卖点 |  |

<a name="ZG3NT"></a>
###### 示例报文：
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "evalResultInfo": {
            "stageName": "运动适应期",
            "stageId": 1,
            "weekNum": 4,
            "evaluateDate": 1624341995000,
            "explainText": "您当前处于${evalStage}，想要${targetType}。建议您每周运动 ${weeklyExerciseCount}次，运动过程中感到吃力，微微出汗，喘气可以说话即可。",
            "placeholderMap": {
                "${evalStage}": "运动适应期",
                "${targetType}": "控制慢病",
                "${weeklyExerciseCount}": 3
            }
        },
        "schemeInfo": {
            "stageWeeklyExerciseMinuteArray": [
                60,
                80,
                100,
                120,
                130,
                130,
                200,
                200,
                240,
                240,
                240,
                240,
                240
            ],
            "heartRateStartVal": 112,
            "heartRateEndVal": 129,
            "recommendExerciseTypes": "健走、慢跑、游泳、椭圆机或结合",
            "recommendExerciseCount": 3,
            "tips": "在达成适应期的运动目标后，您可以按照上方推荐的计划，规划后续的有氧训练，逐步让运动成为自己日常生活的一部分吧"
        },
        "tipsInfo": {
            "strengthTipsList": [
                "日常生活中的许多身体活动都属于低强度，比如铺床、洗完、熨衣服、做饭等在闲暇时间可以去户外钓鱼、玩飞镖、演奏乐器、打打台球、画画或者做手工，也可以完成低强度的运动消耗。",
                "经常久坐的办公室群体，可以买个升降调节桌，没事可以站立办公。",
                "在运动过程中，选择身体能够适应的运动强度即可，在运动过程中微微出汗就可以。"
            ]
        },
        "productList": [
            {
                "itemId": 201280006002,
                "title": "迪士尼每日坚果1 750g CP44",
                "picture": "https://sports-qa-files.lifesense.com/other/20200507/d45a2933ebab44b8a324d02f7cfd60f7.jpg",
                "sellPoint": "9种果仁营养11"
            }
        ],
        "userInfo": {
            "userId": 23342312,
            "headImg": "https://thirdwx.qlogo.cn/mmopen/vi_32/ydVBBkofXDqpia20fs4PfhsaKrc5BicpZGEepicdnicXXDAgMZZTq1XSkdkgzDN0icdtItBELGERU3NdqANgrwkvKjw/132",
            "userName": "..test..",
            "sex": 2,
            "age": 27
        }
    }
}
```

