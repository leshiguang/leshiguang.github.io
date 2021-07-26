**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

# 1.睡眠评估


## 1.1 获取睡眠评估问卷题目
```bash
POST /api/sleep/v2.0/evaluate/loadQuestions
```
##### 入参：
同：免疫力评估


**出参**：
同：免疫力评估
## 1.2 提交睡眠评估问卷答案
```bash
POST /api/sleep/v2.0/evaluate/submit
```
##### 入参：
同：免疫力评估


**出参**：
同：免疫力评估
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
| riskLevel | List(RiskLevelDTO) | 风险等级 |  |
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
# 2 睡眠数据添加


## 2.1 上传乐心手环采集的睡眠原始数据
```bash
POST /api/sleep/v1.0/upload/bracelet/sleep
```
**入参：**
BraceletOriginUploadRequest

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| braceletOriginDTOS | List(BraceletOriginDTO) | 手环原始数据列表 |  |

BraceletOriginDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| deviceId | String | 设备ID | 设备id获取参考：[链接](https://docs.leshiguang.com/develop-cloud/health/device?id=_4%e8%8e%b7%e5%8f%96%e4%b9%90%e5%bf%83%e8%ae%be%e5%a4%87id) |
| measurementDate | Long | 测量时间 | 时间戳，单位毫秒 |
| levelSet | String | 蓝牙上传的睡眠底层数据 | 16进制字符串 |

**出参：无**
​

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
| awakeDetailList | List(Integer) | 中途清醒 |  |
|  |  |  |  |
| type | Integer | 类型 | 1-日记；2-补充 |
| queryUserId | Long | 查询用户ID | 支持家人互联 |
| belongDay | String | 所属日期(2021-04-06) | 补充数据需要知道补充的哪一天的 |

**出参：Boolean（是否提交成功）**
# 3 睡眠数据查询


## 3.1 查询某一天的睡眠数据及睡眠分析
```bash
POST /api/sleep/v2.0/data/getDaySleepReuslt
```
**入参：**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryDate | String | 查询日期(2021-04-06) | queryDate和
direction传空，则查询最近一次 |
| direction | Integer | 方向，>0正向取数据，<0反向取数据 |  |



**出参：**SleepDataViewDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| belongDay | String | 睡眠的归属日期举例：2021-04-01 |  |
| sleepTime | Long | 入睡时间戳，比如1626804000000即2021-07-21 02:00:00 |  |
| getupTime | Long | 醒来时间戳， |  |
| sleepId | String | 睡眠端标识id | ​
 |
| sleepModel | Integer | 睡眠模型 | 1-手环(4维)；
2-日记(5维)；
3-PRO(6维) |
| sleepDimensions | List(SleepDimDTO) | 6个睡眠维度指标的值，具体见SleepDimDTO的说明 |  |
| sleepScore | SleepBaseDTO | 睡眠评分的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297565353-fe6499b0-d3c6-47a9-92de-1f4764b946c7.png#clientId=u861829ea-9025-4&from=paste&height=70&id=u785f33d7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=140&originWidth=686&originalType=binary&ratio=1&size=55675&status=done&style=none&taskId=u06f47210-8125-4c74-980b-470f57b4f99&width=343) |
| sleepSummary | String | 睡眠总结文案 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/1385043/1617872391656-0ab4c030-eb85-43ac-bbd7-c1b85ed2bfa1.png#height=357&id=bYZVx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=357&originWidth=733&originalType=binary&ratio=1&size=60863&status=done&style=none&width=733) |
| sleepSegments | List(SleepStateDetail) | 深睡、浅睡、清晰的睡眠段数据 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297655879-c5ecb872-ae9e-494b-99d9-f132b7256711.png#clientId=u861829ea-9025-4&from=paste&height=303&id=ub8cfc160&margin=%5Bobject%20Object%5D&name=image.png&originHeight=606&originWidth=784&originalType=binary&ratio=1&size=124366&status=done&style=none&taskId=u1a25b83a-116b-4ea9-abbc-44819dfd6fc&width=392) |
| sleepRatios | List(SleepRatioDTO) | 深睡、浅睡、清晰的比例 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297644788-6dbc8ccd-34aa-48b6-996e-04deb17d188f.png#clientId=u861829ea-9025-4&from=paste&height=237&id=u3a86b9e7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=474&originWidth=736&originalType=binary&ratio=1&size=156511&status=done&style=none&taskId=uad8c0dd1-2498-48d6-bb6f-9480e5cfa61&width=368) |
| sleepEfficiency | SleepBaseDTO | **睡眠效率**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297500027-57399481-0f96-405f-89ea-49e80ed31e62.png#clientId=u861829ea-9025-4&from=paste&height=202&id=u973f5d16&margin=%5Bobject%20Object%5D&name=image.png&originHeight=404&originWidth=756&originalType=binary&ratio=1&size=86578&status=done&style=none&taskId=ubbfec8c0-3401-41a9-bbff-5a39efe1b9c&width=378) |
| sleepDuration | SleepBaseDTO | **睡眠时长**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297036376-6500709e-57d5-4259-94c8-c0afd5dff7ee.png#clientId=u861829ea-9025-4&from=paste&height=157&id=u6048f77a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=314&originWidth=778&originalType=binary&ratio=1&size=50162&status=done&style=none&taskId=u02653e5d-f149-42c0-825a-4d20d8860e3&width=389) |
| fallSleepDuration | SleepBaseDTO | **入睡用时**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297478549-0b19f6f2-37ad-407f-bc77-56ae7581c4fa.png#clientId=u861829ea-9025-4&from=paste&height=163&id=u2ab03b50&margin=%5Bobject%20Object%5D&name=image.png&originHeight=326&originWidth=620&originalType=binary&ratio=1&size=42681&status=done&style=none&taskId=uea155836-c010-47df-8dd0-91541ffc84c&width=310) |
| awakeTimes | SleepBaseDTO | **中途清醒次数**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297061098-b2a72e9c-421f-48e7-97f6-21602a00736a.png#clientId=u861829ea-9025-4&from=paste&height=153&id=tawtm&margin=%5Bobject%20Object%5D&name=image.png&originHeight=306&originWidth=708&originalType=binary&ratio=1&size=64958&status=done&style=none&taskId=ua30212a7-ce2e-43f8-86e7-b869f8037da&width=354) |
| awakeDuration | SleepBaseDTO | **中途清醒总时长**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297075964-d6c3a084-2b0f-4526-b661-7dc18832d7b1.png#clientId=u861829ea-9025-4&from=paste&height=154&id=OVXDj&margin=%5Bobject%20Object%5D&name=image.png&originHeight=308&originWidth=816&originalType=binary&ratio=1&size=72911&status=done&style=none&taskId=u43f8e3ef-a01f-407b-b1f7-341e4d48217&width=408) |
| fallSleepTime | SleepBaseDTO | **入睡时间**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297309164-d8ba7f1c-9c51-44d1-9e4c-70f299ea2fdd.png#clientId=u861829ea-9025-4&from=paste&height=185&id=ud998a77f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=370&originWidth=390&originalType=binary&ratio=1&size=60947&status=done&style=none&taskId=u41d139a1-c803-43c9-9b32-5bed326bd39&width=195) |
| fallSleepChange | SleepBaseDTO | **入睡时间变化**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297323113-590d2717-5964-4c47-a4f0-a8ca3bc4f98a.png#clientId=u861829ea-9025-4&from=paste&height=177&id=u5de6a4d4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=354&originWidth=356&originalType=binary&ratio=1&size=56915&status=done&style=none&taskId=u5b769164-0ab7-4c0f-899c-cef59d183ad&width=178) |
| wakeUpTime | SleepBaseDTO | **醒来时间**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297344292-2f8c369b-0ea6-4c27-95dd-ddaa8c94dca9.png#clientId=u861829ea-9025-4&from=paste&height=130&id=u384c6387&margin=%5Bobject%20Object%5D&name=image.png&originHeight=260&originWidth=476&originalType=binary&ratio=1&size=52446&status=done&style=none&taskId=u6aa2ac60-72e7-45f6-926d-6228ba1596b&width=238) |
| wakeUpChange | SleepBaseDTO | **醒来时间变化**的值和标签 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297356332-3993cb84-c1f2-499d-b05b-a6e348ff7a79.png#clientId=u861829ea-9025-4&from=paste&height=127&id=u0d1b5e88&margin=%5Bobject%20Object%5D&name=image.png&originHeight=254&originWidth=412&originalType=binary&ratio=1&size=48259&status=done&style=none&taskId=u3aba5858-c5c9-4b43-8c16-29e9f676373&width=206) |
| standardHeartRate | SleepBaseDTO | 基准心率 | [https://h5.leshiguang.com/sleep/1.2.1/questionTab.html?activeName=%25E7%259D%25A1%25E7%259C%25A0%25E5%25BF%2583%25E7%258E%2587&vconsole=1](https://h5.leshiguang.com/sleep/1.2.1/questionTab.html?activeName=%25E7%259D%25A1%25E7%259C%25A0%25E5%25BF%2583%25E7%258E%2587&vconsole=1)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297242316-ffab3be7-65c3-4f8f-bfd5-4720eb3c4c13.png#clientId=u861829ea-9025-4&from=paste&height=146&id=ue076b234&margin=%5Bobject%20Object%5D&name=image.png&originHeight=292&originWidth=618&originalType=binary&ratio=1&size=42471&status=done&style=none&taskId=uc4b3fb03-3056-4125-bf5b-31886ec9a60&width=309) |
| heartRateList | List(Integer) | 睡眠期间的心率值 |  |
| silentHeartRate | SleepBaseDTO | 晨脉 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627296301259-9c2ae7b8-bf0d-493e-a0c5-98523a0ce6e6.png#clientId=u861829ea-9025-4&from=paste&height=127&id=u9bc49e63&margin=%5Bobject%20Object%5D&name=image.png&originHeight=254&originWidth=858&originalType=binary&ratio=1&size=143295&status=done&style=none&taskId=u021b6163-7b06-4db3-9777-fc2ff04be88&width=429)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1627297216258-26330efe-c4b2-4714-8819-e1ce39063402.png#clientId=u861829ea-9025-4&from=paste&height=80&id=u97b1fdbb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=160&originWidth=436&originalType=binary&ratio=1&size=29039&status=done&style=none&taskId=u0ea5eb72-518c-4172-8ee5-f46138e3af5&width=218) |
| silentHeartRateSummary | String | 晨脉总结 | ![image.png](https://cdn.nlark.com/yuque/0/2021/png/1385043/1617872425969-4909f554-7169-4458-9ee4-ed3e24a3dd3e.png#height=252&id=IFnGx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=252&originWidth=666&originalType=binary&ratio=1&size=56299&status=done&style=none&width=666) |

SleepDimDTO：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| dimType | Integer | 维度 |  |
| dimValue | Integer | 维度值 |  |

| **dimType枚举** | **dimType语义** |
| --- | --- |
| 1 | 睡眠时长 |
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
| duration | Integer | 持续时长 | 单位: 分钟 |

SleepRatioDTO：

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| sleepStatus | Integer | 睡眠状态 | 0-rem；1-清醒；2-浅睡；3-深睡 |
| sleepRatio | Integer | 比例 | 整数值, eg: 45 |
| duration | Integer | 持续时长 | 单位: 分钟 |
| tag | String | 标签 | 偏低、偏高、正常 |



**出参示例1：手环**
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"data":{
			"sleepId":"bracelet904cb419b49e4239a5eb2ece2bdf56eb",
			"belongDay":"2021-07-20",
			"sleepTime":1626804000000,
			"getupTime":1626828300000,
			"sleepModel":1,
			"sleepDimensions":[
				{
					"dimType":4,
					"dimValue":100
				},
				{
					"dimType":1,
					"dimValue":85
				},
				{
					"dimType":2,
					"dimValue":80
				},
				{
					"dimType":3,
					"dimValue":80
				}
			],
			"sleepScore":{
				"sleepBaseValue":87,
				"sleepBaseTag":"良"
			},
			"sleepSummary":"睡眠规律性一般，可以再调整下哦。您昨晚的入睡时间为02:00，睡眠节律为中间型，赶在01:00前入睡会更好～尽量避免连续3个晚上睡眠不足，周末也要规律睡眠，避免熬夜。",
			"sleepSegments":[
				{
					"sleepStatus":2,
					"startTime":1626804000000,
					"endTime":1626806400000,
					"duration":40
				},
				{
					"sleepStatus":3,
					"startTime":1626806400000,
					"endTime":1626807000000,
					"duration":10
				},
				{
					"sleepStatus":2,
					"startTime":1626807000000,
					"endTime":1626807900000,
					"duration":15
				},
				{
					"sleepStatus":3,
					"startTime":1626807900000,
					"endTime":1626808500000,
					"duration":10
				},
				{
					"sleepStatus":2,
					"startTime":1626808500000,
					"endTime":1626810000000,
					"duration":25
				},
				{
					"sleepStatus":3,
					"startTime":1626810000000,
					"endTime":1626813600000,
					"duration":60
				},
				{
					"sleepStatus":3,
					"startTime":1626813600000,
					"endTime":1626813900000,
					"duration":5
				},
				{
					"sleepStatus":2,
					"startTime":1626813900000,
					"endTime":1626814200000,
					"duration":5
				},
				{
					"sleepStatus":1,
					"startTime":1626814200000,
					"endTime":1626814500000,
					"duration":5
				},
				{
					"sleepStatus":2,
					"startTime":1626814500000,
					"endTime":1626817200000,
					"duration":45
				},
				{
					"sleepStatus":3,
					"startTime":1626817200000,
					"endTime":1626817800000,
					"duration":10
				},
				{
					"sleepStatus":2,
					"startTime":1626817800000,
					"endTime":1626819900000,
					"duration":35
				},
				{
					"sleepStatus":3,
					"startTime":1626819900000,
					"endTime":1626820200000,
					"duration":5
				},
				{
					"sleepStatus":2,
					"startTime":1626820200000,
					"endTime":1626822900000,
					"duration":45
				},
				{
					"sleepStatus":3,
					"startTime":1626822900000,
					"endTime":1626823500000,
					"duration":10
				},
				{
					"sleepStatus":2,
					"startTime":1626823500000,
					"endTime":1626827100000,
					"duration":60
				},
				{
					"sleepStatus":2,
					"startTime":1626827100000,
					"endTime":1626828300000,
					"duration":20
				}
			],
			"sleepRatios":[
				{
					"sleepStatus":3,
					"sleepRatio":27,
					"duration":110,
					"tag":"正常"
				},
				{
					"sleepStatus":2,
					"sleepRatio":72,
					"duration":290,
					"tag":"正常"
				},
				{
					"sleepStatus":1,
					"sleepRatio":1,
					"duration":5,
					"tag":"正常"
				}
			],
			"sleepDuration":{
				"sleepBaseValue":400,
				"sleepBaseTag":"偏少"
			},
			"awakeTimes":{
				"sleepBaseValue":1,
				"sleepBaseTag":"正常"
			},
			"awakeDuration":{
				"sleepBaseValue":5,
				"sleepBaseTag":"正常"
			},
			"fallSleepTime":{
				"sleepBaseValue":120,
				"sleepBaseTag":"熬夜"
			},
			"fallSleepChange":{
				"sleepBaseValue":25,
				"sleepBaseTag":"规律"
			},
			"wakeUpTime":{
				"sleepBaseValue":525,
				"sleepBaseTag":"正常"
			},
			"wakeUpChange":{
				"sleepBaseValue":-5,
				"sleepBaseTag":"规律"
			},
			"standardHeartRate":{
				"sleepBaseValue":60,
				"sleepBaseTag":"正常"
			},
			"heartRateList":[
				59,
				59,
				59,
				60,
				61,
				61,
				60,
				60,
				60,
				61,
				60,
				59,
				61,
				60,
				62,
				66,
				63,
				62,
				60,
				60,
				60,
				61,
				61,
				60,
				60,
				61,
				60,
				59,
				60,
				61,
				61,
				61,
				61,
				65,
				65,
				60,
				61,
				61,
				64,
				60,
				59,
				58,
				58,
				58,
				58,
				58,
				58,
				59,
				58,
				58,
				58,
				58,
				58,
				59,
				62,
				62,
				61,
				61,
				59,
				58,
				58,
				58,
				58,
				58,
				58,
				59,
				59,
				58,
				60,
				60,
				61,
				63,
				60,
				61,
				60,
				59,
				58,
				57,
				57,
				60,
				65,
				70
			],
			"silentHeartRate":{
				"sleepBaseValue":68,
				"sleepBaseTag":"优"
			},
			"silentHeartRateSummary":"晨脉波动平稳。说明运动负荷合适，休息充分，身体机能恢复良好，可以继续保持原来的运动量和运动强度。",
			"createTime":1626859864000
		},
		"status":true,
		"code":200
	}
}
```
**出参示例2：日记**
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
## 3.2 查询最近30天的睡眠信息
```bash
GET /api/sleep/v2.0/query/getLastThirtyDaysSleepInfo
```
**入参：**​

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |



**出参：**List(SaaSSleepQueryDTO)
​


| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| id | String | 睡眠ID | ​
 |
| userId | Long | 用户ID | ​
 |
| deviceId | String | 设备ID | ​
 |
| sleepTime | Date | 入睡时间 | ​
 |
| awakeningTime | Date | 醒来时间 | ​
 |
| deepSleep | Integer | 深睡时长(分钟) | ​
 |
| shallowSleep | Integer | 浅睡时长(分钟) | ​
 |
| awakening | Integer | 清醒时长(分钟) | ​
 |
| awakeningCount | Integer | 醒来次数 | ​
 |
| fromDevice | Boolean | 是否来自设备 | true-设备 false-日记 |



示例数据：
```sql

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":"bracelet245239689c9b44cca0259e5133b8d410",
			"userId":26729267,
			"deviceId":"1b0405006a8c",
			"sleepTime":1626365999000,
			"awakeningTime":1626394799000,
			"deepSleep":125,
			"shallowSleep":355,
			"awakening":0,
			"awakeningCount":0,
			"fromDevice":true
		},
		{
			"id":"bracelet46c5ad552e1346749329aaa2e10bb2b6",
			"userId":26729267,
			"deviceId":"df042f00625c",
			"sleepTime":1626281099000,
			"awakeningTime":1626304199000,
			"deepSleep":110,
			"shallowSleep":270,
			"awakening":5,
			"awakeningCount":1,
			"fromDevice":true
		},
		{
			"id":"bracelet4f7084d3fd1044eb84cbebba4b8f7a16",
			"userId":26729267,
			"deviceId":"04046d00645a",
			"sleepTime":1626358499000,
			"awakeningTime":1626389399000,
			"deepSleep":35,
			"shallowSleep":475,
			"awakening":5,
			"awakeningCount":1,
			"fromDevice":true
		},
		{
			"id":"bracelet98a8bdccf69b436d96c866167cad1ba0",
			"userId":26729267,
			"deviceId":"0f0499006b06",
			"sleepTime":1626367499000,
			"awakeningTime":1626390299000,
			"deepSleep":80,
			"shallowSleep":300,
			"awakening":0,
			"awakeningCount":0,
			"fromDevice":true
		},
		{
			"id":"bracelet9c0ebf3dde074991b8d62fba5e2bd620",
			"userId":26729267,
			"deviceId":"1b0405006a8c",
			"sleepTime":1626325799000,
			"awakeningTime":1626330599000,
			"deepSleep":0,
			"shallowSleep":75,
			"awakening":5,
			"awakeningCount":1,
			"fromDevice":true
		},
		{
			"id":"braceletad1447c339f44775ae754c2955f176ed",
			"userId":26729267,
			"deviceId":"65049a0058ee",
			"sleepTime":1626362399000,
			"awakeningTime":1626388499000,
			"deepSleep":150,
			"shallowSleep":280,
			"awakening":5,
			"awakeningCount":1,
			"fromDevice":true
		},
		{
			"id":"diary4a053485eb5d4d4385c8bbda0b3f0878",
			"userId":26729267,
			"sleepTime":1626194400000,
			"awakeningTime":1626222600000,
			"fromDevice":false
		},
		{
			"id":"diary6421e1a697874b4ab8684989cc5fd97b",
			"userId":26729267,
			"sleepTime":1626273900000,
			"awakeningTime":1626300000000,
			"fromDevice":false
		},
		{
			"id":"diaryf8a8463f673f451497138fb55ef97e94",
			"userId":26729267,
			"sleepTime":1626275100000,
			"awakeningTime":1626298200000,
			"fromDevice":false
		},
		{
			"id":"diaryd849f79db3a44717a084561e72f7134f",
			"userId":26729267,
			"sleepTime":1626279300000,
			"awakeningTime":1626298200000,
			"fromDevice":false
		},
		{
			"id":"diary18e2077f3768436492ae2893eae87a1e",
			"userId":26729267,
			"sleepTime":1626273000000,
			"awakeningTime":1626298200000,
			"fromDevice":false
		},
		{
			"id":"diary641618a0214c4725ae0c32f628d20343",
			"userId":26729267,
			"sleepTime":1626278400000,
			"awakeningTime":1626309000000,
			"fromDevice":false
		},
		{
			"id":"diaryb3b930b0b226433697b710cc6b3aaac4",
			"userId":26729267,
			"sleepTime":1626276300000,
			"awakeningTime":1626309000000,
			"fromDevice":false
		}
	]
}


```
