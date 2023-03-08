**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。
<a name="K0gxT"></a>
## 1.获取用户某一天的饮食记录、热量分析、饮食结构等信息
```bash
GET /api/food/v2.0/diet/getDayFoodRecordWithAnalysis
```

<a name="N3ZZM"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryDateTime | Long | 查询日期 | 时间戳，单位ms |

<a name="Oe6Un"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| dietModelInfo | Object | 膳食模式数据 |  |
| edibleOil | Double | 食用油 |  |
| caloryInfo | Object | 热量分析数据 |  |
| dietStructInfoList | List<Obj> | 饮食结构分析数据 |  |
| recommendRecipeInfoList | List<Object> | 推荐食谱数据 |  |
| dietRecordInfoList | List<Object> | 饮食记录 |  |
| productList | List<Object> | 商品信息 |  |


<a name="Tz351"></a>
##### 膳食模式数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| dietModel | Integer | 膳食模式 | 0-经典均衡膳食 <br />1-5+2轻断食  <br />2-6+1轻断食  <br />3-限能量减重<br />4-经典均衡膳食-控糖版<br />5-限能量减重-控糖版 |
| dietModelName | String | 膳食模式 |  |
| fastDiet | boolean | 是否是轻断食 |  |
| fastDietDay | boolean | 是否是轻断食日 |  |
| fastDietDays | List<Integer> | 轻断食日 |  |

<a name="utSrS"></a>
##### 热量分析数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| totalCaloryInfo | Object | 总卡路里信息 |  |
| mealCaloryInfoList | List<Obj> | 餐次卡路里信息 |  |

<a name="Y3tJC"></a>
###### 总卡路里信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| eatCalory | Double | 已经吃了多少卡路里 |  |
| recommendCalory | Double | 推荐吃卡路里 |  |
| sportCalory | Double | 运动消耗卡路里 |  |
| haveCalory | Double | 还可以吃多少卡路里 |  |

<a name="PEtrU"></a>
###### 餐次卡路里信息(list)：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mealType | Integer | 餐次 |  |
| eatCalory | Double | 已经吃了多少卡路里 |  |
| recommendCalory | Double | 推荐吃卡路里 |  |
| desc | String |  | 偏多<br />偏少<br />正常 |

<a name="LUCiK"></a>
##### 饮食结构分析数据(List)：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| categoryType | int | 分类id | 1-主食<br />2-蔬菜类<br />3-水果类<br />4-鱼肉蛋<br />5-乳类<br />6-大豆类<br />7-坚果类 |
| categoryName | String | 分类名 |  |
| eatGram | Double | 已经吃了多少克 |  |
| recommendGram | Double | 推荐多少克 |  |
| recommendUnit | Integer | 单位 | 1-拳<br />2-个<br />3-掌心<br />4-马克杯<br />5-杯<br />6-小把 |
| recommendUnitVal | Double | 单位值 |  |
| desc | String |  | 偏多<br />偏少<br />正常 |

<a name="YXT3S"></a>
##### 推荐食谱数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mealType | String | 餐次 | 1-早餐<br />2-午餐<br />3-晚餐<br />4-加餐 |
| recommendFoodList | List<Object> | 推荐食物列表 |  |

<a name="PIvtl"></a>
###### 食物列表：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| recipe | boolean | 是否是食谱 |  |
| recipeName | String | 食谱名 |  |
| foodInfo | Object | 食物详情信息 | recipe==false |
| foodInfoList | List<Object> | 食物列表 | recipe==true |

<a name="jq1dY"></a>
###### 食物详情：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| categoryType | int | 分类id |  |
| categoryName | String | 分类名 |  |
| foodName | String | 食物 |  |
| unitName | String | 单位名 |  |
| unitVal | Double | 单位值 |  |
| weightDesc | String | 重量/容量描述 |  |

<a name="eKmsV"></a>
##### 饮食记录（List）：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mealType | Integer | 餐次 |  |
| ~~eatCalory~~ | ~~Double~~ | ~~已经吃了多少卡路里~~ |  |
| ~~recommendCalory~~ | ~~Double~~ | ~~推荐吃卡路里~~ |  |
| recommendFoods | String | 推荐食物文本 |  |
| eatFoodList | List<Object> | 吃的食物列表 |  |

<a name="Axm7I"></a>
###### 食物列表：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | Integer | id |  |
| foodTitle | String | 食物标题 |  |
| footSubTitle | String | 食物子标题 |  |
| dataSource | Integer | 数据来源 | 1-精准记录<br />2-速记 |
| calory | Double | 卡路里值 |  |
|  |  |  |  |

<a name="kEjgF"></a>
##### 
出参示例：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"edibleOil":2,
		"dietModelInfo":{
			"dietModel":3,
			"dietModelName":"限能量减重",
			"fastDiet":false,
			"fastDietDay":false
		},
		"caloryInfo":{
			"totalCaloryInfo":{
				"eatCalory":0,
				"recommendCalory":1635,
				"totalRecommendCalory":1635,
				"haveCalory":1635,
				"sportCalory":0
			},
			"mealCaloryInfoList":[
				{
					"mealType":1,
					"eatCalory":0,
					"recommendCalory":533,
					"dietCategorys":[
					],
					"desc":""
				},
				{
					"mealType":2,
					"eatCalory":0,
					"recommendCalory":641,
					"dietCategorys":[
					],
					"desc":""
				},
				{
					"mealType":3,
					"eatCalory":0,
					"recommendCalory":461,
					"dietCategorys":[
					],
					"desc":""
				}
			]
		},
		"dietStructInfoList":[
			{
				"categoryType":1,
				"categoryName":"主食",
				"recommendGram":225,
				"recommendUnitName":"拳",
				"recommendUnitVal":4.5
			},
			{
				"categoryType":2,
				"categoryName":"蔬菜类",
				"recommendGram":300,
				"recommendUnitName":"拳",
				"recommendUnitVal":3
			},
			{
				"categoryType":3,
				"categoryName":"水果类",
				"recommendGram":300,
				"recommendUnitName":"拳",
				"recommendUnitVal":1.5
			},
			{
				"categoryType":4,
				"categoryName":"鱼肉蛋",
				"recommendGram":150,
				"recommendUnitName":"掌心",
				"recommendUnitVal":4
			},
			{
				"categoryType":5,
				"categoryName":"乳类",
				"recommendGram":300,
				"recommendUnitName":"杯",
				"recommendUnitVal":1
			},
			{
				"categoryType":6,
				"categoryName":"大豆类",
				"recommendGram":60,
				"recommendUnitName":"掌心",
				"recommendUnitVal":0.6
			},
			{
				"categoryType":7,
				"categoryName":"坚果类",
				"recommendGram":9.75,
				"recommendUnitName":"小把",
				"recommendUnitVal":0.65
			}
		],
		"recommendRecipeInfoList":[
			{
				"mealType":1,
				"recommendFoodList":[
					{
						"recipe":false,
						"foodInfo":{
							"categoryType":7,
							"categoryName":"",
							"foodName":"巴旦木",
							"unitName":"小把",
							"unitVal":0.65
						}
					},
					{
						"recipe":true,
						"recipeName":"煮鸡蛋",
						"foodInfoList":[
							{
								"categoryType":4,
								"categoryName":"煮鸡蛋",
								"foodName":"鸡蛋",
								"unitName":"个",
								"unitVal":1
							}
						]
					},
					{
						"recipe":true,
						"recipeName":"牛奶泡燕麦",
						"foodInfoList":[
							{
								"categoryType":1,
								"categoryName":"牛奶泡燕麦",
								"foodName":"燕麦片",
								"unitName":"拳",
								"unitVal":1
							},
							{
								"categoryType":5,
								"categoryName":"牛奶泡燕麦",
								"foodName":"牛奶",
								"unitName":"马克杯",
								"unitVal":1
							}
						]
					}
				]
			},
			{
				"mealType":2,
				"recommendFoodList":[
					{
						"recipe":false,
						"foodInfo":{
							"categoryType":3,
							"categoryName":"",
							"foodName":"香蕉",
							"unitName":"根",
							"unitVal":1.5
						}
					},
					{
						"recipe":true,
						"recipeName":"蒜蓉菠菜",
						"foodInfoList":[
							{
								"categoryType":2,
								"categoryName":"蒜蓉菠菜",
								"foodName":"菠菜",
								"unitName":"拳",
								"unitVal":1.5
							}
						]
					},
					{
						"recipe":true,
						"recipeName":"红烧牛肉面",
						"foodInfoList":[
							{
								"categoryType":1,
								"categoryName":"红烧牛肉面",
								"foodName":"荞麦面",
								"unitName":"拳",
								"unitVal":2
							},
							{
								"categoryType":4,
								"categoryName":"红烧牛肉面",
								"foodName":"牛肉",
								"unitName":"掌心",
								"unitVal":1
							}
						]
					}
				]
			},
			{
				"mealType":3,
				"recommendFoodList":[
					{
						"recipe":true,
						"recipeName":"盐水虾",
						"foodInfoList":[
							{
								"categoryType":4,
								"categoryName":"盐水虾",
								"foodName":"虾",
								"unitName":"掌心",
								"unitVal":2
							}
						]
					},
					{
						"recipe":true,
						"recipeName":"蒸红薯",
						"foodInfoList":[
							{
								"categoryType":1,
								"categoryName":"蒸红薯",
								"foodName":"红薯",
								"unitName":"拳",
								"unitVal":1.5
							}
						]
					},
					{
						"recipe":true,
						"recipeName":"青菜炖豆腐",
						"foodInfoList":[
							{
								"categoryType":2,
								"categoryName":"青菜炖豆腐",
								"foodName":"青菜",
								"unitName":"拳",
								"unitVal":1.5
							},
							{
								"categoryType":6,
								"categoryName":"青菜炖豆腐",
								"foodName":"豆腐",
								"unitName":"掌心",
								"unitVal":0.6
							}
						]
					}
				]
			}
		],
		"dietRecordInfoList":[
			{
				"mealType":1,
				"recommendFoods":"谷薯类1拳，液态奶1马克杯，蛋类1个，坚果类0.65小把",
				"eatFoodList":[
				]
			},
			{
				"mealType":2,
				"recommendFoods":"谷薯类2拳，畜禽肉1掌心，蔬菜1.5拳，水果类1.5拳",
				"eatFoodList":[
				]
			},
			{
				"mealType":3,
				"recommendFoods":"谷薯类1.5拳，水产品2掌心，蔬菜1.5拳，嫩豆腐0.6掌心",
				"eatFoodList":[
				]
			},
			{
				"mealType":4,
				"eatFoodList":[
				]
			}
		],
		"productList":[
			{
				"itemId":210410005145,
				"title":"青源堂红豆薏米燕麦代餐饼 450克*2 CP",
				"price":6000,
				"picture":"https://cn-pics.leshiguang.com/erpcommodity/2021/03/08/49d093dd552746c290663fc972a1bb77.png",
				"sellPoint":"便携美味小包装，代餐不挨饿"
			},
			{
				"itemId":210570005151,
				"title":"善存佳维牌多种维生素片150片 CP",
				"price":14800,
				"picture":"https://cn-pics.leshiguang.com/erpcommodity/2021/03/08/8a0c36ac9649474c9f1935a647101655.png",
				"sellPoint":"每日营养一片搞定"
			}
		]
	}
}


```

<a name="usS5x"></a>
## 2.查询用户推荐食谱
```bash
GET /api/food/v2.0/diet/recipe/queryUserRecommendRecipe
```

<a name="qR3HX"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| dietModelSource | Integer | 饮食模式来源  | 1-营养均衡 <br />2-减重 <br />3-护肤控糖 |

<a name="gAYhl"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| recommendRecipeInfoList | List<Object> | 推荐食谱数据 |  |


<a name="OTxWB"></a>
##### 推荐食谱数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mealType | String | 餐次 | 1-早餐<br />2-午餐<br />3-晚餐<br />4-加餐 |
| recommendFoodList | List<Object> | 推荐食物列表 |  |

<a name="aLuAQ"></a>
###### 食物列表：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| recipe | boolean | 是否是食谱 |  |
| recipeName | String | 食谱名 |  |
| foodInfo | Object | 食物详情信息 | recipe==false |
| foodInfoList | List<Object> | 食物详情列表 | recipe==true |

<a name="qpuiu"></a>
###### 食物详情：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| categoryType | int | 分类id |  |
| categoryName | String | 分类名 |  |
| foodName | String | 食物 |  |
| unitName | String | 单位名 |  |
| unitVal | Double | 单位值 |  |
| weightDesc | String | 重量/容量描述 |  |


出参示例：
```json
{
	"code": 200,
	"msg": "成功",
	"data": {
		"recommendRecipeInfoList": [{
			"mealType": 1,
			"groupId": 5,
			"recommendCalory": 718,
			"recommendFoodList": [{
				"recipe": false,
				"foodInfo": {
					"categoryType": 1,
					"categoryName": "",
					"foodName": "吐司面包",
					"unitName": "片",
					"unitVal": 1.50
				}
			}, {
				"recipe": false,
				"foodInfo": {
					"categoryType": 5,
					"categoryName": "",
					"foodName": "无糖酸奶",
					"unitName": "马克杯",
					"unitVal": 1.00
				}
			}, {
				"recipe": false,
				"foodInfo": {
					"categoryType": 7,
					"categoryName": "",
					"foodName": "碧根果",
					"unitName": "小把",
					"unitVal": 0.65
				}
			}, {
				"recipe": true,
				"recipeName": "煮鸡蛋",
				"foodInfoList": [{
					"categoryType": 4,
					"categoryName": "煮鸡蛋",
					"foodName": "鸡蛋",
					"unitName": "个",
					"unitVal": 1.00
				}]
			}]
		}, {
			"mealType": 2,
			"groupId": 2,
			"recommendCalory": 890,
			"recommendFoodList": [{
				"recipe": false,
				"foodInfo": {
					"categoryType": 3,
					"categoryName": "",
					"foodName": "苹果",
					"unitName": "个",
					"unitVal": 1.75
				}
			}, {
				"recipe": true,
				"recipeName": "杂粮饭",
				"foodInfoList": [{
					"categoryType": 1,
					"categoryName": "杂粮饭",
					"foodName": "杂粮",
					"unitName": "拳",
					"unitVal": 2.50
				}]
			}, {
				"recipe": true,
				"recipeName": "西葫芦肉片",
				"foodInfoList": [{
					"categoryType": 4,
					"categoryName": "西葫芦肉片",
					"foodName": "猪肉",
					"unitName": "掌心",
					"unitVal": 1.00
				}, {
					"categoryType": 2,
					"categoryName": "西葫芦肉片",
					"foodName": "西葫芦",
					"unitName": "拳",
					"unitVal": 2.50
				}]
			}]
		}, {
			"mealType": 3,
			"groupId": 6,
			"recommendCalory": 756,
			"recommendFoodList": [{
				"recipe": true,
				"recipeName": "二米饭",
				"foodInfoList": [{
					"categoryType": 1,
					"categoryName": "二米饭",
					"foodName": "大米",
					"unitName": "拳",
					"unitVal": 2.00
				}, {
					"categoryType": 1,
					"categoryName": "二米饭",
					"foodName": "小米",
					"unitName": "拳",
					"unitVal": 2.00
				}]
			}, {
				"recipe": true,
				"recipeName": "油菜煎豆腐",
				"foodInfoList": [{
					"categoryType": 2,
					"categoryName": "油菜煎豆腐",
					"foodName": "油菜",
					"unitName": "拳",
					"unitVal": 2.50
				}, {
					"categoryType": 6,
					"categoryName": "油菜煎豆腐",
					"foodName": "豆腐",
					"unitName": "掌心",
					"unitVal": 1.00
				}]
			}, {
				"recipe": true,
				"recipeName": "蒸龙利鱼",
				"foodInfoList": [{
					"categoryType": 4,
					"categoryName": "蒸龙利鱼",
					"foodName": "龙利鱼",
					"unitName": "掌心",
					"unitVal": 3.00
				}]
			}]
		}]
	}
}
```
<a name="ag5yJ"></a>
# <br />

