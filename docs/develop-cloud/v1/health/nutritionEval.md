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
