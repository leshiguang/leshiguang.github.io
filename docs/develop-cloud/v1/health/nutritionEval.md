**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

# 1.获取所有的健康问题列表
```bash
GET /api/nutritionEval/v1/getHealthIssues
```
##### 入参：
无
##### 出参
| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 健康问题类型列表 | healthIssues | List<String> |  |



出参示例：
```json
{
	"code":200,
	"msg":"成功",
	"data":[
		"皮肤",
		"毛发",
		"骨骼",
		"肌肉",
		"情绪",
		"睡眠",
		"消化",
		"眼睛",
		"头部",
		"记忆力",
		"精神状态",
		"口腔",
		"抗病能力",
		"生殖",
		"疾病相关",
		"心血管"
	]
}
```
# 2.基于用户选择的健康问题，获取症状问卷
```bash
POST /api/nutritionEval/v1/getSymptomQuestions
```
##### 入参



| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 健康问题类型列表 | healthIssues | List<String> |  |





##### 出参
| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 症状问题列表 | symptomQuestions | List<QuestionDTO> |  |
| 需要回答的问题数 | questionCount | Integer |  |
| 症状问题数 | symptomQuestionCount | Integer |  |
| 调查项目问题数
| surveyQuestionCount | Integer |  |



QuestionDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| ID | id | questionId |  |
| 所属分组key | groupKey | String | 默认未分类unclassified |
| 题干内容 | questionStem | String |  |
| 选项内容 | optionContent | QuestionOptionsDTO |  |
| 问题类型 | questionType | Integer | 1单选2多选 |



QuestionOptionsDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项内容列表 | options | List<SingleOption> |  |



SingleOption

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项或填空对应的key | optKey | String |  |
| 选项内容 | optContent | String |  |



**示例数据**
```json

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"id":700317,
			"groupKey":"情绪",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"铬#2",
						"optContent":"6个小时没有吃东西时感到头昏眼花或容易发怒",
						"basal":false
					},
					{
						"optKey":"维生素B5#1",
						"optContent":"感情淡漠，对大多事情没有兴趣",
						"basal":false
					},
					{
						"optKey":"维生素B1#1,
						维生素B3#2,
						维生素B5#1,
						维生素B12#2",
						"optContent":"情绪欠佳，急躁、易怒",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700318,
			"groupKey":"情绪",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素B6#2,
						叶酸#1",
						"optContent":"情绪欠佳，疲劳或抑郁，情绪低落，对很多事情没兴趣",
						"basal":false
					},
					{
						"optKey":"镁#2",
						"optContent":"抑郁或思维混乱，有时出现幻觉",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700310,
			"groupKey":"毛发",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素D#1",
						"optContent":"容易掉头发",
						"basal":false
					},
					{
						"optKey":"叶酸#1,
						生物素#2",
						"optContent":"少白头",
						"basal":false
					},
					{
						"optKey":"Omega-3脂肪酸#1,
						Omega-6脂肪酸#1",
						"optContent":"头发干燥或有头皮屑",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700311,
			"groupKey":"毛发",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素B2#1",
						"optContent":"头发过干或过油",
						"basal":false
					},
					{
						"optKey":"维生素B12#1,
						生物素#2",
						"optContent":"头发状况不好，无光泽",
						"basal":false
					},
					{
						"optKey":"维生素A#1",
						"optContent":"总是有头皮屑",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700313,
			"groupKey":"皮肤",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素B3#2",
						"optContent":"暴露于外部的皮肤，晒太阳后容易发生皮炎",
						"basal":false
					},
					{
						"optKey":"铬#2",
						"optContent":"出汗过度或冒冷汗",
						"basal":false
					},
					{
						"optKey":"维生素B12#1,
						铁#2",
						"optContent":"肤色苍白无血色",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700314,
			"groupKey":"皮肤",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素E#1,
						维生素C#1",
						"optContent":"皮肤的伤口愈合缓慢",
						"basal":false
					},
					{
						"optKey":"生物素#2,
						锌#2,
						Omega-3脂肪酸#2,
						Omega-6脂肪酸#2",
						"optContent":"皮肤干燥、有皮疹或湿疹",
						"basal":false
					},
					{
						"optKey":"维生素E#1",
						"optContent":"皮肤或肌肉缺乏弹性",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700315,
			"groupKey":"皮肤",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素A#1",
						"optContent":"皮肤容易出现痤疮",
						"basal":false
					},
					{
						"optKey":"维生素E#1,
						维生素C#2",
						"optContent":"容易发生皮下出血，皮肤常常出现青紫的瘀斑或瘀点",
						"basal":false
					},
					{
						"optKey":"维生素B1#2,
						维生素B6#2,
						维生素B12#2",
						"optContent":"下肢或上肢麻木、刺痛、灼烧、蚁行感，多见于脚、脚踝、手部",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700316,
			"groupKey":"皮肤",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素E#1",
						"optContent":"有静脉曲张，皮下的血管很容易看到突出，下肢多见",
						"basal":false
					},
					{
						"optKey":"维生素A#1",
						"optContent":"有银屑病（白癜风）",
						"basal":false
					},
					{
						"optKey":"维生素B2#2,
						维生素B6#2,
						叶酸#1",
						"optContent":"有脂溢性皮炎，常见眼、鼻、口、耳周围的皮肤出现油腻性皮疹；会阴部位潮湿、油腻",
						"basal":false
					},
					{
						"optKey":"维生素B5#2",
						"optContent":"足部出现灼烧感、麻木",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700320,
			"groupKey":"睡眠",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素B6#2",
						"optContent":"常常回忆不起梦境",
						"basal":false
					},
					{
						"optKey":"维生素B3#1,
						钙#2,
						镁#1",
						"optContent":"失眠或神经过敏",
						"basal":false
					},
					{
						"optKey":"铬#2",
						"optContent":"需要长时间睡眠，否则白天  昏昏欲睡",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700294,
			"groupKey":"肌肉",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素B1#1,
						生物素#2",
						"optContent":"肌肉松弛",
						"basal":false
					},
					{
						"optKey":"镁#1",
						"optContent":"肌肉无力，没有力量",
						"basal":false
					},
					{
						"optKey":"维生素B5#1,
						锰#2",
						"optContent":"肌肉震颤、抽搐或痉挛",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700295,
			"groupKey":"肌肉",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"铬#2",
						"optContent":"经常手脚冰冷",
						"basal":false
					},
					{
						"optKey":"维生素D#2,
						钙#2,
						镁#2",
						"optContent":"容易肌肉抽搐、痉挛，如腿抽筋",
						"basal":false
					},
					{
						"optKey":"维生素B12#1",
						"optContent":"四肢不自主震颤",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		},
		{
			"id":700293,
			"groupKey":"骨骼",
			"questionType":2,
			"answer":"",
			"questionStem":"请选择近3个月经常/长期的症状（可多选）",
			"optionContent":{
				"options":[
					{
						"optKey":"维生素D#2,
						维生素C#2,
						钙#2,
						锰#2",
						"optContent":"患有关节炎和骨质疏松症",
						"basal":false
					},
					{
						"optKey":"维生素D#2",
						"optContent":"关节疼痛或僵硬",
						"basal":false
					},
					{
						"optKey":"维生素D#1",
						"optContent":"经常腰背部疼痛",
						"basal":false
					},
					{
						"optKey":"",
						"optContent":"以上都没有",
						"basal":false
					}
				]
			}
		}
	]
}


```


# 3.提交症状问卷答案，获取相关联的调查项目问卷
```bash
POST /api/nutritionEval/v1/submitSymptomAnswerAndGetSurveyQuestions
```
##### 入参
| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 症状问题答案列表 | questionDTOS | List<QuestionDTO> |  |



QuestionDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| ID | id | questionId |  |
| 所属分组key | groupKey | String | 默认未分类unclassified |
| 题干内容 | questionStem | String |  |
| 选项内容 | optionContent | QuestionOptionsDTO |  |
| 问题类型 | questionType | Integer | 1单选2多选 |



QuestionOptionsDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项内容列表 | options | List<SingleOption> |  |



SingleOption

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项或填空对应的key | optKey | String |  |
| 选项内容 | optContent | String |  |



##### 出参
| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 评估记录ID | evaluateId | String |  |
| 需要给用户展示的问题 | notAnsweredQuestions | List<QuestionDTO> |  |
| 已知答案的问题 | answeredQuestions | List<QuestionDTO> |  |



QuestionDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| ID | id | questionId |  |
| 所属分组key | groupKey | String | 默认未分类unclassified |
| 题干内容 | questionStem | String |  |
| 选项内容 | optionContent | QuestionOptionsDTO |  |



QuestionOptionsDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项内容列表 | options | List<SingleOption> |  |



SingleOption

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项或填空对应的key | optKey | String |  |
| 选项内容 | optContent | String |  |



**示例数据**


入参
```git
{
    "questionDTOS": [
        {
            "answer": "",
            "groupKey": "抗病能力",
            "id": 700280,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "经常被感染，各种炎症易发",
                        "optKey": "Omega3脂肪酸-1,Omega6脂肪酸-1,锌-2"
                    },
                    {
                        "basal": false,
                        "optContent": "容易被感染，频繁感冒",
                        "optKey": "维生素A-2,维生素C-1"
                    },
                    {
                        "basal": false,
                        "optContent": "容易泌尿系统感染",
                        "optKey": "维生素A-1"
                    },
                    {
                        "basal": false,
                        "optContent": "容易患有各种关节炎",
                        "optKey": "Omega3脂肪酸-1,Omega6脂肪酸-1"
                    }
                ]
            },
            "questionStem": "请选择近3个月经常/长期的症状（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "皮肤",
            "id": 700278,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "暴露于外部的皮肤，晒太阳后容易发生皮炎",
                        "optKey": "维生素B3-2"
                    },
                    {
                        "basal": false,
                        "optContent": "出汗过度或冒冷汗",
                        "optKey": "铬-2"
                    },
                    {
                        "basal": false,
                        "optContent": "肤色苍白无血色",
                        "optKey": "维生素B12-1,铁-2"
                    }
                ]
            },
            "questionStem": "请选择近3个月经常/长期的症状（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "皮肤",
            "id": 700279,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "皮肤的伤口愈合缓慢",
                        "optKey": "维生素E-1,维生素C-1"
                    },
                    {
                        "basal": false,
                        "optContent": "皮肤干燥、有皮疹或湿疹",
                        "optKey": "生物素-2,锌-2,Omega3脂肪酸-2,Omega6脂肪酸-2"
                    },
                    {
                        "basal": false,
                        "optContent": "皮肤或肌肉缺乏弹性",
                        "optKey": "维生素E-1"
                    }
                ]
            },
            "questionStem": "请选择近3个月经常/长期的症状（可多选）",
            "questionType": 2
        }
    ]
}
```


出参
```git
{
    "code": 200,
    "msg": "成功",
    "data": {
        "evaluateId": "455016320210224185432",
        "notAnsweredQuestions": [
            {
                "id": 700385,
                "groupKey": "免疫",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "觉得身体感染（感冒或其他）后恢复起来比较困难",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "容易患鹅口疮或膀胱炎",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700386,
                "groupKey": "免疫",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择符合您情况的选项（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "一般每年服用抗生素两次以上",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "有过住院或急诊的经历",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "有肿瘤患病家族史",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700388,
                "groupKey": "免疫",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "切除过增生或肿块或做过活组织检查",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "患过过敏性鼻炎",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "患过其他过敏性疾病",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700379,
                "groupKey": "压力",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "当让自己闲下来的时候，会有罪恶感",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "一直都需要被别人赏识或追求功绩",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "对自己的人生目标并不明确",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700380,
                "groupKey": "压力",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "竞争意识特别强",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "工作得比大多数人都努力",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "很容易生气",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700381,
                "groupKey": "压力",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "经常同时承担2—3项任务",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "被别人或其他事情纠缠住的时候，会感到不耐烦",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "感到难以入睡，或睡得不安稳，或是在睡醒后难以保持头脑清醒",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700389,
                "groupKey": "污染",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择符合您情况的选项（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "居住在市区或繁华路段附近",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "每周花费在拥挤的交通中超辻两小时的时间",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "在拥挤的街道上进行活动（如工作、骑自行车或做运动）",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700391,
                "groupKey": "污染",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "吸烟的数量每天超过5支",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "生活或工作在充满烟尘的环境中",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "每周至少一次会购买在路边摊出售的食品",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700392,
                "groupKey": "污染",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "经常食用非有机食品",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "每天摄入1份酒精性饮料（如1杯葡萄酒、600毫升的啤酒或1份  烈酒）",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "在电视或电脑屏幕前花费很长时间",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "经常饮用未经过蒸储的自来水",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700375,
                "groupKey": "精力",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "晚上需要超过8小时的睡眠，否则第二天容易犯困",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "很少能够马上起床，或者在起床后20分钟内不想马上活功",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "在早上需要茶水、咖啡或香烟之类的提神，否则犯困",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700376,
                "groupKey": "精力",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "隔一段时间就想喝点茶水、咖啡、加糖的食物或饮料，或者抽烟",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "经常会在白天或饭后有昏昏欲睡或困乏的感觉",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "6个小时不吃东西就会感到晕眩或者变得容易发脾气",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700377,
                "groupKey": "精力",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "因为没有精力而避免参加锻炼",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "在极度口渴的情况下容易大量出汗",
                            "basal": false
                        },
                        {
                            "optKey": "1",
                            "optContent": "现在的精力不如过去",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700378,
                "groupKey": "精力",
                "questionType": 1,
                "answer": "",
                "questionStem": "近3个月是否有时注意力不集中，或者感到思维一片空白？",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "optContent": "是",
                            "basal": false
                        },
                        {
                            "optKey": "0",
                            "optContent": "否",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700382,
                "groupKey": "锻炼",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "2",
                            "optContent": "参加能使心跳显著加快的锻炼，且保证每次至少锻炼20分钟，每周达到3次以上",
                            "basal": false
                        },
                        {
                            "optKey": "2",
                            "optContent": "工作涉及耗费体力的活动，如步行、搬举物品",
                            "basal": false
                        },
                        {
                            "optKey": "2",
                            "optContent": "会定期做体育运动（如足球、篮球等竞技性的运动）",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700383,
                "groupKey": "锻炼",
                "questionType": 2,
                "answer": "",
                "questionStem": "请选择符合您情况的选项（可多选）",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "2",
                            "optContent": "有能使身体感觉劳累的业余爱好（如园艺、木工等）",
                            "basal": false
                        },
                        {
                            "optKey": "2",
                            "optContent": "接受过某种运动项目的正规训练（如足球、篮球等竞技性的运动）",
                            "basal": false
                        },
                        {
                            "optKey": "2",
                            "optContent": "觉得自己的体能不错",
                            "basal": false
                        }
                    ]
                }
            }
        ],
        "answeredQuestions": [
            {
                "id": 700384,
                "groupKey": "免疫",
                "questionType": 1,
                "answer": "",
                "questionStem": "每年感冒的次数超过3次吗？",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "basal": false
                        }
                    ]
                }
            },
            {
                "id": 700387,
                "groupKey": "免疫",
                "questionType": 1,
                "answer": "",
                "questionStem": "您是否患有炎症，如湿疹、哮喘或关节炎？",
                "optionContent": {
                    "options": [
                        {
                            "optKey": "1",
                            "basal": false
                        }
                    ]
                }
            }
        ]
    }
}
```


# 4.提交调查项目问卷答案
```bash
POST /api/nutritionEval/v1/submitSurveyAnswer
```
##### 入参



| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 评估记录ID | evaluateId | String |  |
| 症状问题答案列表 | questionDTOS | List<QuestionDTO> |  |



QuestionDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| ID | id | questionId |  |
| 所属分组key | groupKey | String | 默认未分类unclassified |
| 题干内容 | questionStem | String |  |
| 选项内容 | optionContent | QuestionOptionsDTO |  |
| 问题类型 | questionType | Integer | 1单选2多选 |



QuestionOptionsDTO

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项内容列表 | options | List<SingleOption> |  |



SingleOption

| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 选项或填空对应的key | optKey | String |  |
| 选项内容 | optContent | String |  |



##### 出参



| **参数名称** | **参数** | **类型** | **说明** |
| --- | --- | --- | --- |
| 评估记录ID | evaluateId | String |  |



**示例数据**


入参
```git
{
    "evaluateId": "2672926720210224161659",
    "questionDTOS": [
        {
            "answer": "",
            "groupKey": "免疫",
            "id": 700384,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "每年感冒的次数超过3次吗？",
            "questionType": 1
        },
        {
            "answer": "",
            "groupKey": "免疫",
            "id": 700387,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "您是否患有炎症，如湿疹、哮喘或关节炎？",
            "questionType": 1
        },
        {
            "answer": "",
            "groupKey": "免疫",
            "id": 700385,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "觉得身体感染（感冒或其他）后恢复起来比较困难",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "容易患鹅口疮或膀胱炎",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "免疫",
            "id": 700386,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "一般每年服用抗生素两次以上",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "有过住院或急诊的经历",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "有肿瘤患病家族史",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择符合您情况的选项（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "免疫",
            "id": 700388,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "切除过增生或肿块或做过活组织检查",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "患过过敏性鼻炎",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "患过其他过敏性疾病",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "压力",
            "id": 700379,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "当让自己闲下来的时候，会有罪恶感",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "一直都需要被别人赏识或追求功绩",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "对自己的人生目标并不明确",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "压力",
            "id": 700380,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "竞争意识特别强",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "工作得比大多数人都努力",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "很容易生气",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "压力",
            "id": 700381,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "经常同时承担2—3项任务",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "被别人或其他事情纠缠住的时候，会感到不耐烦",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "感到难以入睡，或睡得不安稳，或是在睡醒后难以保持头脑清醒",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "污染",
            "id": 700389,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "居住在市区或繁华路段附近",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "每周花费在拥挤的交通中超辻两小时的时间",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "在拥挤的街道上进行活动（如工作、骑自行车或做运动）",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择符合您情况的选项（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "污染",
            "id": 700391,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "吸烟的数量每天超过5支",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "生活或工作在充满烟尘的环境中",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "每周至少一次会购买在路边摊出售的食品",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "污染",
            "id": 700392,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "经常食用非有机食品",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "每天摄入1份酒精性饮料（如1杯葡萄酒、600毫升的啤酒或1份  烈酒）",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "在电视或电脑屏幕前花费很长时间",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "经常饮用未经过蒸储的自来水",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "精力",
            "id": 700375,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "晚上需要超过8小时的睡眠，否则第二天容易犯困",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "很少能够马上起床，或者在起床后20分钟内不想马上活功",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "在早上需要茶水、咖啡或香烟之类的提神，否则犯困",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "精力",
            "id": 700376,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "隔一段时间就想喝点茶水、咖啡、加糖的食物或饮料，或者抽烟",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "经常会在白天或饭后有昏昏欲睡或困乏的感觉",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "6个小时不吃东西就会感到晕眩或者变得容易发脾气",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "精力",
            "id": 700377,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "因为没有精力而避免参加锻炼",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "在极度口渴的情况下容易大量出汗",
                        "optKey": "1"
                    },
                    {
                        "basal": false,
                        "optContent": "现在的精力不如过去",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "精力",
            "id": 700378,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "是",
                        "optKey": "1"
                    }
                ]
            },
            "questionStem": "近3个月是否有时注意力不集中，或者感到思维一片空白？",
            "questionType": 1
        },
        {
            "answer": "",
            "groupKey": "锻炼",
            "id": 700382,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "参加能使心跳显著加快的锻炼，且保证每次至少锻炼20分钟，每周达到3次以上",
                        "optKey": "2"
                    },
                    {
                        "basal": false,
                        "optContent": "工作涉及耗费体力的活动，如步行、搬举物品",
                        "optKey": "2"
                    },
                    {
                        "basal": false,
                        "optContent": "会定期做体育运动（如足球、篮球等竞技性的运动）",
                        "optKey": "2"
                    }
                ]
            },
            "questionStem": "请选择您近3个月内长期/经常出现的情况（可多选）",
            "questionType": 2
        },
        {
            "answer": "",
            "groupKey": "锻炼",
            "id": 700383,
            "optionContent": {
                "options": [
                    {
                        "basal": false,
                        "optContent": "有能使身体感觉劳累的业余爱好（如园艺、木工等）",
                        "optKey": "2"
                    },
                    {
                        "basal": false,
                        "optContent": "接受过某种运动项目的正规训练（如足球、篮球等竞技性的运动）",
                        "optKey": "2"
                    },
                    {
                        "basal": false,
                        "optContent": "觉得自己的体能不错",
                        "optKey": "2"
                    }
                ]
            },
            "questionStem": "请选择符合您情况的选项（可多选）",
            "questionType": 2
        }
    ]
}
```


出参
```git
{
    "code": 200,
    "msg": "成功",
    "data": "2672926720210224161659"
}
```


# 5.获取某一次评估的评估结果


```bash
GET /api/nutritionEval/v1/getOneNutriEvalResultDetail
```
##### 入参: 
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **evalId** | String | 评估id |  |

##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **head** | NutriEvalResultHeadDTO | _头部总结数据_ |  |
| **analysis** | NutriEvalResultAnalysisDTO | _营养分析_ |  |
| **otherhealthIssueList** | List<String> | _其他可以测的健康问题_ |  |



###### NutriEvalResultHeadDTO
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **evalId** | String | _评估id_ |  |
| **evalTime** | date | _评估时间_ |  |
| **title** | String | _结果评语-主标题_ |  |
| **subTitle** | String | _结果评语-副标题_ |  |
| **healthIssueList** | List<String> | _本次评估用户选择的健康问题_ |  |
| **nutritionLackLevelCountList** | List<NutritionLackLevelCountDTO> | _缺乏的营养素_ |  |





NutriEvalResultAnalysisDTO

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **tagList** | List<NutriLackLevelAndHealthIssueTag> | _所有的标签_ |  |
| **analysisDetailList** | List<NutriEvalResultAnalysisDetail> | _分营养素分析_ |  |



NutriLackLevelAndHealthIssueTag

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **lackLevel** | string | _缺乏严重程度_ |  |
| **subTagList** | List<NutriLackLevelAndHealthIssueSubTag> | 健康问题标签 |  |



NutriLackLevelAndHealthIssueSubTag

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **lackLevel** | string | _缺乏严重程度_ |  |
| **healthIssue** | String | _健康问题_ |  |
| **nutriList** | List<String> | _关联的营养素_ |  |



NutriEvalResultAnalysisDetail

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **nutritionInfo** | NutritionInfo | _营养素信息_ |  |
| **healthIssueList** | List<String> | _健康问题_ |  |
| **dailyIntake** | String | _每日摄入量_ |  |
| **classicFood** | ClassicFood | _典型食物_ |  |
| **recommendFoodList** | List<RecommendFood> | _推荐食物_ |  |
| **recommendGoodsList** | List<RecommendGoods> | _推荐商品_ |  |



NutritionInfo



| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **nutriName** | string | _营养素名称_ |  |
| **nutriPic** | string  | _营养素图片_ |  |
| **tabooFactorList** | List<String> | _抑制因素_ |  |



ClassicFood

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **foodName** | string | _食物名称_ | 举例：猪肝 |
| **foodPic** | String  | _食物图片_ |  |
| **foodMeasureName** | String  | _食物度量单位_ | 举例：大片 |
| **foodMeasureCount** | String  | _食物度量数量_ | 举例：4 |
| **intake** | String  | _摄入量_ | 举例：60g |
| **eatHint** | String  | _食用提示_ |  |



RecommendFood

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| **foodName** | string | _食物名称_ |  |
| **foodPic** | String  | _食物图片_ |  |
| **purityPer100g** | String | _每百克含量_ |  |
| **nutriUnitName** | string | _营养素度量单位: mg/μg_ |  |
| **tabooHint** | String | _禁忌提示_ |  |



出参示例：待补充
