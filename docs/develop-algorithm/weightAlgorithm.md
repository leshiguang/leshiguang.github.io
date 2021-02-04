<a name="v8mr1"></a>
# 1.国内
<a name="IbV2j"></a>
## 1.1 体脂18项计算
url :  域名 +  **/api/weight/algorithm/v1.0/getWeightIndexCalculateAndAnalysisResult**<br />method: post<br />

<a name="2e29u"></a>
### 入参：
| **字段** | **类型** | **描述** | **是否必传** | **备注** |
| --- | --- | --- | --- | --- |
| weight | BIgDecimal | 体重 | 是 |  |
| age | int | 年龄 | 是 | 必传 |
| sex | int | 性别 | 是 | 1-男<br />2-女 |
| height | BIgDecimal | 身高 | 是 | 单位：米 |
| resistance | BIgDecimal | 抗阻 | 否 | 不传，只会计算bmi值 |
| weightUnit | int | 单位 | 否 | 1-kg<br />2-斤<br />3-磅<br />4-英石

不传默认为1 |

入参示例
```json
{
    "age":21,
    "sex":1,
    "weightUnit":1,
    "weight":74.2,
    "height":1.76,
    "resistance":566.2
}
```
<a name="FmQec"></a>
### 出参：



| 字段 | 类型 | 描述 |
| --- | --- | --- |
| visceralFat | double | 内脏脂肪指数 |
| basalMetabolism | double | 基础代谢量 |
| protein | double | 蛋白质，单位:% |
| ageOffset | int | 身体年龄偏移，实际年龄+年龄偏移=身体年龄 |
| bodyScore | double | 身体得分，0-100分 |
| bodyStyle | String | 体型 |
| age | int | 年龄 |
| sex | int | 性别，男-1，女-2 |
| height | double | 身高，单位:米 |
| weight | double | 体重，单位:kg |
| bmi | double | 体质指数，bmi |
| pbf | double | 脂肪率， % |
| muscle | double | 肌肉量，单位:kg |
| beatPercent | double | 击败百分比 |
| water | double | 水分率 |
| bone | double | 骨骼量, 单位:kg |
| resistance50k | double | 50K 电阻值 |
| resistance5k | double | 5K 电阻值 |
| ffm | double | 去脂体重，kg |
| bfm | double | 脂肪量，kg |
| rateOfMuscle | double | 肌肉率 ，% |
| skeletonMuscle | double | 骨骼肌，kg |
| bodyAge | int | 身体年龄 |
| visceralFatLevel | int | 内脏脂肪等级，0-理想，1-偏高，2-超高 |
| fatControl | double | 脂肪控制，小于 0 表示建议增加脂肪量， 大于 0 表示应减少脂肪量 |
| muscleControl | double | 肌肉控制，0 表示理想，大于 0 表示建议 增加的肌肉量，不存在小于 0 情况 |


<br />出参示例：
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "visceralFat": 7.3,
        "basalMetabolism": 1612.9,
        "protein": 22.2,
        "ageOffset": -1,
        "bodyScore": 80.1,
        "bodyStyle": "标准型",
        "beatPercent": 83.2,
        "age": 21,
        "sex": 1,
        "height": 1.76,
        "weight": 74.2,
        "bmi": 23.95,
        "pbf": 22.45,
        "muscle": 54.53,
        "bone": 2.98,
        "water": 51.32,
        "resistance50k": 566.2,
        "resistance5k": 0.0,
        "bfm": 16.7,
        "ffm": 57.5,
        "rateOfMuscle": 73.5,
        "skeletonMuscle": 29.2,
        "bodyAge": 20,
        "muscleControl": 0.0,
        "fatControl": 0.0,
        "visceralFatLevel": 0
    }
}
```
<a name="QvKrf"></a>
## 1.2.体重指标数据分析
url :  域名 +  **/api/weight/algorithm/v1.0/getWeightIndexCalculateResult**<br />method: post
<a name="im2O8"></a>
### 入参：
同1.1入参
<a name="3EjJo"></a>
### 出参：
| **字段** | **类型** | **描述** | **备注** |
| --- | --- | --- | --- |
| weight | BigDecimal | 体重 |  |
| bodyStyleText | String | _身体类型_ | 1, "隐性肥胖型"<br />2, "偏胖型"<br />3, "结实偏胖型"<br />4, "缺乏运动型"<br />5, "标准型"<br />6, "健壮型"<br />7, "精瘦型"<br />8, "模特型"<br />9, "健美型" |
| bodyStyleCode | Integer |  |  |
| bodyAdviceText | String | _身体建议文案_ |  |
| labelList | List<WeightLabelDto> | 体重指标展示信息 |  |

<a name="CKAOR"></a>
###### labelList(_标签解读_)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| label | String | 标签名称 |  |
| labelValue | Double | 标签值 |  |
| labelUnit | String | 单位 |  |
| labelLevelName | String | 等级名称 |  |
| labelContent | String | 解读 |  |
| labelDietaryAdvice | String | 饮食建议 |  |
| labelSportsAdvice | String | 运动建议建议 |  |
| levelIntervalList | List<Object> | 等级区间 |  |

等级区间

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| levelIntervalName | String | 等级区间名称 |  |
| startValue | BigDecimal | 区间开始值 | 闭区间 |
| endValue | BigDecimal | 区间结束值 | 开区间 |

示例返回报文：
```json

{
	"bodyAdviceText":"再多点肌肉，体型会更好看哦！体脂率很理想；多多运动，有助于增强骨骼肌！",
	"bodyStyleCode":4,
	"bodyStyleText":"缺乏运动型",
	"labelList":[
		{
			"label":"BMI",
			"labelContent":"你的BMI偏高，高血压、糖尿病潜在风险成倍增加。",
			"labelDietaryAdvice":"饮食上减少300-600千卡的热量摄入，以杂粮、谷薯等富含膳食纤维的食物为主食，搭配低脂高蛋白食物与蔬菜水果，组成低热量、高营养、强饱腹感的膳食结构。",
			"labelLevelName":"偏胖",
			"labelSportsAdvice":"每周进行2-3次，每次45-60分钟的中低强度锻炼。",
			"labelUnit":"",
			"labelValue":24.8,
			"levelIntervalList":[
				{
					"endValue":18.5,
					"levelIntervalName":"偏瘦"
				},
				{
					"endValue":24,
					"levelIntervalName":"理想",
					"startValue":18.5
				},
				{
					"endValue":28,
					"levelIntervalName":"偏胖",
					"startValue":24
				},
				{
					"levelIntervalName":"肥胖",
					"startValue":28
				}
			]
		},
		{
			"label":"体脂率",
			"labelContent":"你的体脂率理想，身体匀称，疾病风险低，建议继续保持良好的生活方式。",
			"labelDietaryAdvice":"建议保持饮食平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
			"labelLevelName":"理想",
			"labelSportsAdvice":"健走、慢跑、骑行、游泳等长时间中低强度的运动，可以有效燃烧脂肪降低脂肪率。同时配合力量练习，增强肌肉，就可以拥有更明显的肌肉线条。",
			"labelUnit":"%",
			"labelValue":21.7,
			"levelIntervalList":[
				{
					"endValue":10,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":22,
					"levelIntervalName":"理想",
					"startValue":10
				},
				{
					"endValue":28,
					"levelIntervalName":"偏高",
					"startValue":22
				},
				{
					"levelIntervalName":"超高",
					"startValue":28
				}
			]
		},
		{
			"label":"肌肉量",
			"labelContent":"你的肌肉量标准，肌肉量可以反映一个人的力量水平，肌肉量越高的人，基础代谢越高，越不容易发胖。",
			"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
			"labelLevelName":"标准",
			"labelSportsAdvice":"运动上确保肌肉受到足够强度的刺激，与此同时保证足够的蛋白质用于肌肉合成，提升睡眠质量，促进生长激素分泌处帮助肌肉的修复与生长。",
			"labelUnit":"斤",
			"labelValue":106.4,
			"levelIntervalList":[
				{
					"endValue":98.8,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":119,
					"levelIntervalName":"标准",
					"startValue":98.8
				},
				{
					"levelIntervalName":"理想",
					"startValue":119
				}
			]
		},
		{
			"label":"身体年龄",
			"labelContent":"你的身体年龄比真实年龄年轻。",
			"labelDietaryAdvice":"随着年龄的增长，身体水分和基础代谢会逐渐下降。保持健康饮食和生活方式，可以使身体看起来更年轻。",
			"labelLevelName":"年轻",
			"labelSportsAdvice":"每天至少行走8000步，合理运动锻炼，增强体态健康。",
			"labelUnit":"岁",
			"labelValue":19,
			"levelIntervalList":[
				{
					"endValue":20,
					"levelIntervalName":"年轻"
				},
				{
					"levelIntervalName":"偏大",
					"startValue":20
				}
			]
		},
		{
			"label":"脂肪量",
			"labelContent":"你的脂肪量超高，容易增加高血脂症、糖尿病、冠心病、高血压的患病风险。",
			"labelDietaryAdvice":"日常饮食以蔬菜、谷类、优质蛋白类食物（鱼、牛肉、大豆等）为主，控制高糖、高脂肪含量和高热量食物的摄入量，限制酒精的摄入，保持规律的睡眠。",
			"labelLevelName":"理想",
			"labelSportsAdvice":"建议每周进行 4 到 5 次循序渐进的有氧训练，每次锻炼不少于 60 分钟。",
			"labelUnit":"斤",
			"labelValue":31,
			"levelIntervalList":[
				{
					"endValue":14.4,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":31.6,
					"levelIntervalName":"理想",
					"startValue":14.4
				},
				{
					"endValue":40.2,
					"levelIntervalName":"偏高",
					"startValue":31.6
				},
				{
					"levelIntervalName":"超高",
					"startValue":40.2
				}
			]
		},
		{
			"label":"内脏脂肪等级",
			"labelContent":"你的内脏脂肪等级理想，保持理想的内脏脂肪水平，有助于降低脂肪肝、高血压、高血脂、2型糖尿病等慢性疾病的患病风险。",
			"labelDietaryAdvice":"注意保持饮食平衡、健康，多食含有食物纤维的食物，少食碳水含量较高的食物。",
			"labelLevelName":"理想",
			"labelSportsAdvice":"每天建议步行不少于8000步",
			"labelUnit":"等级",
			"labelValue":7,
			"levelIntervalList":[
				{
					"endValue":10,
					"levelIntervalName":"理想"
				},
				{
					"endValue":15,
					"levelIntervalName":"偏高",
					"startValue":10
				},
				{
					"endValue":30,
					"levelIntervalName":"较高",
					"startValue":15
				},
				{
					"levelIntervalName":"超高",
					"startValue":30
				}
			]
		},
		{
			"label":"基础代谢量",
			"labelContent":"你的基础代谢理想，只要不多吃就可以轻松保持体重啦。",
			"labelDietaryAdvice":"调整作息早睡早起、吃好早餐、多喝水。",
			"labelLevelName":"理想",
			"labelSportsAdvice":"每周进行2-3次的力量练习与不低于150分钟中等强度的有氧训练，增加身体的肌肉含量是提升基础代谢率的秘密武器。",
			"labelUnit":"大卡",
			"labelValue":1582,
			"levelIntervalList":[
				{
					"endValue":1550,
					"levelIntervalName":"偏低"
				},
				{
					"levelIntervalName":"理想",
					"startValue":1550
				}
			]
		},
		{
			"label":"去脂体重",
			"labelLevelName":"理想",
			"labelUnit":"斤",
			"labelValue":112.3,
			"levelIntervalList":[
				{
					"endValue":103.2,
					"levelIntervalName":"超低"
				},
				{
					"endValue":111.8,
					"levelIntervalName":"偏低",
					"startValue":103.2
				},
				{
					"endValue":129,
					"levelIntervalName":"理想",
					"startValue":111.8
				},
				{
					"levelIntervalName":"偏高",
					"startValue":129
				}
			]
		},
		{
			"label":"肌肉率",
			"labelContent":"你的肌肉量标准，肌肉量可以反映一个人的力量水平，肌肉量越高的人，基础代谢越高，越不容易发胖。",
			"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
			"labelLevelName":"标准",
			"labelSportsAdvice":"运动上确保肌肉受到足够强度的刺激，与此同时保证足够的蛋白质用于肌肉合成，提升睡眠质量，促进生长激素分泌处帮助肌肉的修复与生长。",
			"labelUnit":"%",
			"labelValue":74.2,
			"levelIntervalList":[
				{
					"endValue":68.9,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":83,
					"levelIntervalName":"标准",
					"startValue":68.9
				},
				{
					"levelIntervalName":"理想",
					"startValue":83
				}
			]
		},
		{
			"label":"水分率",
			"labelContent":"你的水分率偏低，由于人体大部分新陈代谢活动都在体液中进行，所以缺水会影响身体机能的正常运作，导致新陈代谢缓慢、加快身体老化。",
			"labelDietaryAdvice":"平时要记得多喝水，运动时出汗丢失体液，要记得少量多次及时补水和电解质。",
			"labelLevelName":"偏低",
			"labelSportsAdvice":"每天至少行走8000步，每周不低于150分钟中等强度的有氧运动，促进身体代谢，及时补充水分。",
			"labelUnit":"%",
			"labelValue":52.7,
			"levelIntervalList":[
				{
					"endValue":55,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":65,
					"levelIntervalName":"标准",
					"startValue":55
				},
				{
					"levelIntervalName":"理想",
					"startValue":65
				}
			]
		},
		{
			"label":"骨量",
			"labelContent":"你的骨量含量理想，骨量的含量是反应骨骼健康情况的主要指标。",
			"labelDietaryAdvice":"饮食上注意营养搭配，多食用含钙较多的食物，如奶、蛋、鱼、豆制品、蔬菜、水果等。",
			"labelLevelName":"理想",
			"labelSportsAdvice":"每周坚持进行耐力训练与力量训练，每次不低于30分钟。运动频率以次日不感疲劳为度，运动必须持之以恒。",
			"labelUnit":"斤",
			"labelValue":5.8,
			"levelIntervalList":[
				{
					"endValue":5.8,
					"levelIntervalName":"偏低"
				},
				{
					"levelIntervalName":"理想",
					"startValue":5.8
				}
			]
		},
		{
			"label":"蛋白质",
			"labelContent":"你的蛋白质含量偏高，摄取过量会造成体内脂肪堆积，加大肾脏排泄负担。",
			"labelDietaryAdvice":"建议控制高蛋白食物的摄入量，适当增加谷类食物，绿叶蔬菜、水果的摄入，减轻肾脏代谢负担，避免钙过量丢失。",
			"labelLevelName":"偏高",
			"labelSportsAdvice":"每周进行2-3次的力量练习与不低于150分钟中等强度的有氧训练，促进体内多余的蛋白质排出，减少肾脏负荷。",
			"labelUnit":"%",
			"labelValue":21.6,
			"levelIntervalList":[
				{
					"endValue":16,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":20,
					"levelIntervalName":"标准",
					"startValue":16
				},
				{
					"levelIntervalName":"偏高",
					"startValue":20
				}
			]
		},
		{
			"label":"骨骼肌",
			"labelContent":"你的骨骼肌偏低，如果是瘦的朋友那么很有可能骨骼肌是偏低的。",
			"labelDietaryAdvice":"饮食上注意补充营养，以膳食纤维的食物为主食，搭配低脂高蛋白食物与蔬菜水果。",
			"labelLevelName":"偏低",
			"labelSportsAdvice":"注意加强体育锻炼，每周进行2-3次的力量练习，可以刺激肌肉生长，达到增肌效果。",
			"labelUnit":"斤",
			"labelValue":57.8,
			"levelIntervalList":[
				{
					"endValue":107.6,
					"levelIntervalName":"偏低"
				},
				{
					"endValue":131.6,
					"levelIntervalName":"标准",
					"startValue":107.6
				},
				{
					"levelIntervalName":"理想",
					"startValue":131.6
				}
			]
		}
	],
	"weight":143.3
}


```
<a name="XhmCy"></a>
# 2.国外
<a name="98dI2"></a>
## 2.1 体脂海外FDA算法计算


url :  域名 +  **/api/weight/algorithm/v1.0/getforeignWeightAlgorithmResult**<br />method: post<br />**
<a name="8ihdD"></a>
### 入参：
同1.1入参

<a name="MCCi9"></a>
### 出参：
| **字段** | **类型** | **描述** | **备注** |
| --- | --- | --- | --- |
| weight | BigDecimal | 体重 | 根据体重单位换算，比如kg |
| **bmi** | BigDecimal | bmi | 无单位 |
| **pbf** | BigDecimal | _体脂率_ | % |
| **bfm** | BigDecimal | _脂肪量_ | 根据体重单位换算，比如kg |
| **ffm** | BigDecimal | _去脂体重_ | 根据体重单位换算，比如kg |
| **bone** | BigDecimal | _骨量_ | 根据体重单位换算，比如kg |
| **boneRate** | BigDecimal | _骨头率_ | % |
| **rateOfMuscle** | BigDecimal | _肌肉率_ | % |
| **muscle** | BigDecimal | _肌肉量_ | 根据体重单位换算，比如kg |
| **water** | BigDecimal | _水分率_ | % |
| **basalMetabolism** | BigDecimal | _基础代谢量_ | 千卡 |


<br />出参示例：
```json
{
  "msg": null,
  "code": 200,
  "data": {
    "pbf": 23.1,
    "boneRate": 4.6,
    "rateOfMuscle": 32.9,
    "muscle": 17.3,
    "bfm": 12.2,
    "weight": 52.7,
    "bone": 2.4,
    "basalMetabolism": 1281,
    "ffm": 40.5,
    "class": "com.lifesense.soa.bodyweight.api.dto.weightindex.ForeignWeightIndexDTO",
    "water": 55.4,
    "bmi": 21.4
  },
  "class": "com.leshiguang.arch.common.api.response.ResultData",
  "status": true
}
```

<br />


