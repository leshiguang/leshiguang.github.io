**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="TNiBp"></a>
# 1.睡眠评估


<a name="Ocll7"></a>
## 1.1 获取睡眠评估问卷题目
```bash
POST /api/sleep/v2.0/evaluate/loadQuestions
```
<a name="s91jI"></a>
##### 入参：
同：免疫力评估<br />
<br />**出参**：<br />同：免疫力评估
<a name="c90yn"></a>
## 1.2 提交睡眠评估问卷答案
```bash
POST /api/sleep/v2.0/evaluate/submit
```
<a name="ViTFl"></a>
##### 入参：
同：免疫力评估<br />
<br />**出参**：<br />同：免疫力评估
<a name="ZIdnY"></a>
## 1.3 获取某一次睡眠评估的分析结果
```bash
GET /api/sleep/v2.0/evaluate/getEvaluateResult
```
**入参：**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateNo | Long | 评估编号 | 传空，则查询最近一次评估的分析结果 |

**出参：**EvaluateReportDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| nickname | String | 昵称 |  |
| headPic | String | 头像 |  |
| evaluateTime | String | 评估时间 |  |
| riskLevel | List<RiskLevelDTO> | 风险等级 |  |
| sleepLabels | List<String> | 睡眠标签 |  |
| recommendAssistant | String | 推荐助手 |  |
| sleepPattern | Integer | 睡眠类型 | 1-清晨型，2-夜晚型，3-中间型 |

RiskLevelDTO：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| type | Integer | 类型 | 1-睡眠状况; 2-压力与情绪; 3-睡眠环境; 4-认知习惯 |
| value | Integer | 值 | 0-无；1-少；2-多 |
| description | String | 文案描述 |  |

出参示例：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"data":{
			"nickname":"..test..",
			"headPic":"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epNpicUCOQqNIVWzGZMYf06Iqs3XoMgVyGHqc0o3J5MAERJuyPHosp71dEyu45UZjBAU5KdYKODLuQ/132",
			"evaluateTime":"2021-03-19 16:36",
			"riskLevel":[
				{
					"type":1,
					"value":1,
					"description":"近期可能存在睡眠困扰。建议持续监测睡眠数据、定期做评估。同时可关注以下睡眠风险：",
					"copyDescription":"【睡眠状况-疑似睡眠问题】\\n近期可能存在睡眠困扰。建议持续监测睡眠数据、定期做评估。同时可关注以下睡眠风险："
				},
				{
					"type":2,
					"value":0,
					"description":"压力与情绪：近期没有明显的压力与情绪困扰，请继续保持哦~",
					"copyDescription":"【压力与情绪-无困扰】\\n压力与情绪：近期没有明显的压力与情绪困扰，请继续保持哦~"
				},
				{
					"type":3,
					"value":0,
					"description":"睡眠环境：近期没有明显的睡眠环境问题，请继续保持哦~",
					"copyDescription":"【睡眠环境-无干扰】\\n睡眠环境：近期没有明显的睡眠环境问题，请继续保持哦~"
				},
				{
					"type":4,
					"value":1,
					"description":"认知习惯：近期可能有少量的<span style=\"color:#A47DEB;font-weight:bold;\">不良认知习惯</span>和睡眠相关的误区，建议及时调整。",
					"copyDescription":"【认知习惯-少量误区】\\n认知习惯：近期可能有少量的<span style=\"color:#A47DEB;font-weight:bold;\">不良认知习惯</span>和睡眠相关的误区，建议及时调整。"
				}
			],
			"sleepLabels":[
				"多梦",
				"熬夜"
			],
			"recommendAssistant":"建议从以下方面进行改善",
			"contentList":[
				{
					"improveModule":"每天坚持记录睡眠数据",
					"contentList":[
						{
							"recommendText":"坚持每日使用手环或日记记录睡眠数据，可以更全面客观的了解睡眠真实情况和潜在风险。建议至少连续监测3天。",
							"copyRecommendText":"🌙坚持每日使用手环监测睡眠数据，可以更全面客观的了解你的睡眠真实情况和潜在风险。建议至少连续监测3天。"
						}
					]
				},
				{
					"improveModule":"适当补充助眠食物",
					"contentList":[
						{
							"recommendText":"<span style=\"color:#A47DEB;font-weight:bold;\">GABA</span>，全称γ-氨基丁酸。是我们身体里的天然氨基酸。GABA的重要作用是减少大脑和中枢神经系统中神经元的活动，进而增加放松，减轻压力，更加平静，减轻疼痛，促进睡眠。日常可以吃杏仁、坚果、糙米、香蕉、花椰菜等食物。",
							"copyRecommendText":"【GABA】\\n<span style=\"color:#A47DEB;font-weight:bold;\">GABA</span>，全称γ-氨基丁酸。是我们身体里的天然氨基酸。GABA的重要作用是减少大脑和中枢神经系统中神经元的活动，进而增加放松，减轻压力，更加平静，减轻疼痛，促进睡眠。日常可以吃杏仁、坚果、糙米、香蕉、花椰菜等食物。",
							"description":"不足时可额外补充营养素：",
							"title":"美国进口 G‘NITE晚安GABA无糖型睡眠软糖 KA",
							"subTitle":"风靡美国的无糖助眠神器",
							"picUrl":"https://cn-pics.leshiguang.com/erpcommodity/2021/03/09/a7ba4889387d46e8b6b97f3eed833da6.png",
							"jumpLink":"/pages/shopmall/goodsInfo/main?itemId=210670001032",
							"commodityLabels":[
								"放松减压",
								"促进睡眠",
								"减轻疼痛"
							]
						},
						{
							"recommendText":"失眠、精神萎靡不振与肠道菌群失调有关，<span style=\"color:#A47DEB;font-weight:bold;\">益生菌</span>大量减少，有害菌大量增加，产生的毒素会加重失眠状况。日常可以吃谷物，海藻类，豆类，酸奶等食物。",
							"copyRecommendText":"【益生菌】\\n失眠、精神萎靡不振与肠道菌群失调有关，益生菌大量减少，有害菌大量增加，产生的毒素会加重失眠状况。日常可以吃谷物，海藻类，豆类，酸奶等食物。",
							"description":"不足时可额外补充营养素：",
							"title":"华大营养 益休益生菌 KR",
							"subTitle":"复配益生菌配方，调理体质，安睡好觉",
							"picUrl":"https://cn-pics.leshiguang.com/erpcommodity/2021/03/26/b08daca888e14307a2c03d6ee53ecb92.png",
							"jumpLink":"/pages/shopmall/goodsInfo/main?itemId=210850001063",
							"commodityLabels":[
								"科学助眠",
								"舒缓情绪",
								"放松减压"
							]
						},
						{
							"recommendText":"<span style=\"color:#A47DEB;font-weight:bold;\">酸枣仁</span>，又称枣仁，为酸枣的干燥种子。现代科学研究表明酸枣仁有镇静催眠作用、抗抑郁抗焦虑、增强记忆力等作用。",
							"copyRecommendText":"【酸枣仁】\\n<span style=\"color:#A47DEB;font-weight:bold;\">酸枣仁</span>，又称枣仁，为酸枣的干燥种子。现代科学研究表明酸枣仁有镇静催眠作用、抗抑郁抗焦虑、增强记忆力等作用。",
							"description":"不足时可额外补充营养素：",
							"title":"青源堂 酸枣仁丸 300克 CP",
							"subTitle":"开启“丸”美好睡眠",
							"picUrl":"https://cn-pics.leshiguang.com/erpcommodity/2021/03/08/c5f305ce535945e8982993be2f427189.png",
							"jumpLink":"/pages/shopmall/goodsInfo/main?itemId=210670001018",
							"commodityLabels":[
								"安神养心",
								"镇静助眠"
							]
						}
					]
				},
				{
					"improveModule":"身心恢复到放松状态",
					"contentList":[
						{
							"bannerList":[
								{
									"bannerType":1,
									"title":"自然疗愈音",
									"bannerPic":"https://files.lifesense.com/other/20210428/d36ebcf2e88c49a08d425b67dcc0d87a.png",
									"jumpLink":"/pages/sleep/improve/main"
								},
								{
									"bannerType":1,
									"title":"呼吸轻练习",
									"bannerPic":"https://files.lifesense.com/other/20210428/17da915a3dd7449d90d6f0f728ed3fe3.png",
									"jumpLink":"/sleep/improveBreathe.html"
								},
								{
									"bannerType":2,
									"label":"<span style=\"color:#886DF6\">#睡眠小知识#</span>",
									"title":"SMART压力管理，如何助力好睡眠？",
									"articlePic":"https://cn-pics.leshiguang.com/overseasmobilefeedback/2021/05/07/4396a9d714c94a859e32769a38b4cb44.jpg",
									"jumpLink":"/pages/community/article/main?id=1701&type=1"
								},
								{
									"bannerType":3,
									"title":"日间放松",
									"bannerPic":"https://files.lifesense.com/other/20210505/69182aa596ab400882e7610c26df951e.png",
									"jumpLink":"/pages/sleep/relaxSleep/main?activeIndex=0"
								},
								{
									"bannerType":3,
									"title":"夜间舒眠",
									"bannerPic":"https://files.lifesense.com/other/20210505/69182aa596ab400882e7610c26df951e.png",
									"jumpLink":"/pages/sleep/relaxSleep/main?activeIndex=1"
								}
							]
						}
					]
				}
			],
			"sleepPattern":3
		},
		"status":true,
		"code":200
	}
}
```
<a name="b6Qvn"></a>
# 2 睡眠数据添加


<a name="UjIbU"></a>
## 2.1 上传乐心手环采集的睡眠原始数据
```bash
POST /api/sleep/v2.0/upload/bracelet
```
**入参：**<br />BraceletOriginUploadRequest

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| braceletOriginDTOS | List<BraceletOriginDTO> | 手环原始数据列表 |  |

BraceletOriginDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| deviceId | String | 设备ID | 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| uploadChanel | Integer | 数据上传通道 | 数据上传通道:1(ios)，2(android) |
| measurementDate | Long | 测量时间 | 时间戳，单位毫秒 |
| levelSet | String | 蓝牙上传的睡眠底层数据 | 16进制字符串 |
| timeUnit | Integer | 时长单位，分钟 | 一般填5，即5分钟一笔数据 |
| uploadNum | Integer | 一次上传的数量 | 有多少个5分钟的数据 |
| uploaded | Integer | 是否上传 | 默认传1 |
| created | Long | 创建时间 | 时间戳，单位毫秒 |
| model | String | 设备型号 | 如：LS431-B3 |
| softwareVersion | String | 固件版本号 | 如：T310 |

**出参：无**<br />​<br />
<a name="cfzy1"></a>
## 2.2 手动添加睡眠数据（睡眠日记）
```bash
POST /api/sleep/v2.0/diary/save
```
**入参：**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| goBedTime | Integer | 上床时间 |  |
| prepareSleepTime | Integer | 准备入睡时间 |  |
| prepareSleepDuration | Integer | 多久睡着 |  |
| wakeUpTime | Integer | 醒来时间 |  |
| getOutBedTime | Integer | 下床时间 |  |
| awakeDetailList | List<Integer> | 中途清醒 |  |
|  |  |  |  |
| type | Integer | 类型 | 1-日记；2-补充 |
| queryUserId | Long | 查询用户ID | 支持家人互联 |
| belongDay | String | 所属日期(2021-04-06) | 补充数据需要知道补充的哪一天的 |

**出参：Boolean（是否提交成功）**
<a name="xfoDc"></a>
# 3 睡眠数据查询


<a name="LslPv"></a>
## 3.1 查询某一天的睡眠数据及睡眠分析
```bash
POST /api/sleep/v2.0/data/getDaySleepReuslt
```
**入参：**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryDate | String | 查询日期(2021-04-06) | queryDate和<br />direction传空，则查询最近一次 |
| direction | Integer | 方向，>0正向取数据，<0反向取数据 |  |


<br />**出参：**SleepDataViewDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| belongDay | String | 日期(2021-04-01) |  |
| sleepTime | Long | 入睡时间 |  |
| getupTime | Long | 醒来时间 |  |
| sleepId | String | sleepId | 只有手环有，日记没有 |
| sleepModel | Integer | 睡眠模型 | 1-4维手环；<br />2-5维日记；<br />3-6维PRO |
| sleepDimensions | List<SleepDimDTO> | 睡眠维度指标 |  |
| sleepScore | SleepBaseDTO | 睡眠评分 |  |
| sleepSummary | String | 睡眠总结文案 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/1385043/1617872391656-0ab4c030-eb85-43ac-bbd7-c1b85ed2bfa1.png#height=357&id=bYZVx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=357&originWidth=733&originalType=binary&ratio=1&size=60863&status=done&style=none&width=733) |
| sleepSegments | List<SleepStateDetail> | 睡眠段数据 |  |
| sleepRatios | List<SleepRatioDTO> | 睡眠比例 |  |
| sleepEfficiency | SleepBaseDTO | 睡眠效率 |  |
| sleepDuration | SleepBaseDTO | 睡眠时长 |  |
| fallSleepDuration | SleepBaseDTO | 入睡用时 |  |
| awakeTimes | SleepBaseDTO | 中途清醒次数 |  |
| awakeDuration | SleepBaseDTO | 中途清醒总时长 |  |
| fallSleepTime | SleepBaseDTO | 入睡时间 |  |
| fallSleepChange | SleepBaseDTO | 入睡时间变化 |  |
| wakeUpTime | SleepBaseDTO | 醒来时间 |  |
| wakeUpChange | SleepBaseDTO | 醒来时间变化 |  |
| standardHeartRate | SleepBaseDTO | 基准心率 |  |
| heartRateList | List<Integer> | 心率值 |  |
| silentHeartRate | SleepBaseDTO | 晨脉 |  |
| silentHeartRateSummary | String | 晨脉总结 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/1385043/1617872425969-4909f554-7169-4458-9ee4-ed3e24a3dd3e.png#height=252&id=IFnGx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=252&originWidth=666&originalType=binary&ratio=1&size=56299&status=done&style=none&width=666) |

SleepDimDTO：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| dimType | Integer | 维度 |  |
| dimValue | Integer | 维度值 |  |

| 1 | 睡眠时长 |
| --- | --- |
| 2 | 中途清醒 |
| 3 | 睡眠节律 |
| 4 | 睡眠深浅 |
| 5 | 睡眠效率 |
| 6 | 入睡快慢 |

SleepBaseDTO：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sleepBaseValue | Long | 睡眠基础数据值 |  |
| sleepBaseTag | String | 睡眠基础数据标签(eg:晚睡/正常/较长/较短) |  |

SleepSegmentDetail：（同睡眠首页）

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sleepStatus | Integer | 睡眠状态 | 0-rem；1-清醒；2-浅睡；3-深睡 |
| startTime | Date | 开始时间 |  |
| endTime | Date | 结束时间 |  |
| duration | Integer | 持续时长 |  |

SleepRatioDTO：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sleepStatus | Integer | 睡眠状态 | 0-rem；1-清醒；2-浅睡；3-深睡 |
| sleepRatio | Integer | 比例(整数值, eg: 45) |  |
| duration | Integer | 持续时长(单位: 分钟) |  |
| tag | String | 标签 | 偏低、偏高、正常 |


<br />出参示例
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"data":{
			"sleepId":"diary7618c26efc22425b808264ace972f36a",
			"belongDay":"2021-04-26",
			"sleepTime":1619451360000,
			"getupTime":1619483400000,
			"sleepModel":2,
			"sleepDimensions":[
				{
					"dimType":5,
					"dimValue":95
				},
				{
					"dimType":1,
					"dimValue":70
				},
				{
					"dimType":6,
					"dimValue":100
				},
				{
					"dimType":2,
					"dimValue":100
				},
				{
					"dimType":3,
					"dimValue":80
				}
			],
			"sleepScore":{
				"sleepBaseValue":89,
				"sleepBaseTag":"良"
			},
			"sleepSummary":"睡眠时长有点长，适当缩短会更好。您昨晚睡眠已超过8.9小时，要少睡一点哦～长时间的睡眠虽有助精力恢复，也要注意适度。睡太多，容易导致大脑细胞活性下降，损伤记忆力。",
			"sleepEfficiency":{
				"sleepBaseValue":98,
				"sleepBaseTag":"你昨晚的睡眠效率为98%，非常棒！属于高效优质睡眠。继续保持吧！"
			},
			"sleepDuration":{
				"sleepBaseValue":534,
				"sleepBaseTag":"偏多"
			},
			"fallSleepDuration":{
				"sleepBaseValue":0,
				"sleepBaseTag":"正常"
			},
			"awakeTimes":{
				"sleepBaseValue":0,
				"sleepBaseTag":"正常"
			},
			"awakeDuration":{
				"sleepBaseValue":0,
				"sleepBaseTag":"正常"
			},
			"fallSleepTime":{
				"sleepBaseValue":1416,
				"sleepBaseTag":"正常"
			},
			"fallSleepChange":{
				"sleepBaseValue":-24,
				"sleepBaseTag":"不规律"
			},
			"wakeUpTime":{
				"sleepBaseValue":510,
				"sleepBaseTag":"正常"
			},
			"wakeUpChange":{
				"sleepBaseValue":0,
				"sleepBaseTag":"规律"
			}
		},
		"status":true,
		"code":200
	}
}


```

