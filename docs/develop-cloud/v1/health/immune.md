**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数。**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="V980U"></a>
# 1.查询免疫评估问卷题目
```bash
GET /api/immune/v1/loadQuestions
```
**入参**<br />无<br />**出参**<br />出参示例：
```json
{

    "code": 200,

    "msg": "success",

    "data": {

        "serialNo": "20200318TDM555D3",

        "questionnaireName": "高血压风险评估",

        "drawType": 1,// 出题类型 1 固定列表 2随机列表 3树形关联列表

        "questionConf": {

            "questions": [

                {

                    "id": 60016,

                    "groupKey": "unclassified",

                    "questionType": 1, 

                    "questionStem": "您的性别",

                    "optionContent": {

                        "options": [

                            {

                                "optKey": "A",

                                "checked": true,

                                "optContent": "男"

                            },

                            {

                                "optKey": "B",

                                "optContent": "女"

                            }

                        ]

                    }

                },

                {

                    "id": 60017,

                    "groupKey": "unclassified",

                    "questionType": 3,

                    "questionStem": "您的年龄",

                    "optionContent": {

                        "options": [

                            {

                                "optKey": "A",

                                "checked": true,

                                "blank": {

                                    "blankType": 2,

                                    "defaultValue": "30",

                                    "blankRule": {

                                        "unit": "岁",

                                        "min": "20",

                                        "max": "80",

                                        "dataType": "1",

                                        "step": "1"

                                    }

                                }

                            }

                        ]

                    }

                },

                {

                    "id": 60018,

                    "groupKey": "unclassified",

                    "questionType": 3,

                    "questionStem": "您的身高",

                    "optionContent": {

                        "options": [

                            {

                                "optKey": "A",

                                "checked": true,

                                "blank": {

                                    "blankType": 2,

                                    "defaultValue": "170",

                                    "blankRule": {

                                        "unit": "cm",

                                        "min": "50",

                                        "max": "250",

                                        "dataType": "1",

                                        "step": "1"

                                    }

                                }

                            }

                        ]

                    }

                },

                {

                    "id": 60019,

                    "groupKey": "unclassified",

                    "questionType": 3,

                    "questionStem": "您的体重",

                    "optionContent": {

                        "options": [

                            {

                                "optKey": "A",

                                "checked": true,

                                "blank": {

                                    "blankType": 2,

                                    "defaultValue": "60",

                                    "blankRule": {

                                        "unit": "kg",

                                        "min": "0",

                                        "max": "200",

                                        "dataType": "1",

                                        "step": "1"

                                    }

                                }

                            }

                        ]

                    }

                },

                {

                    "id": 60020,

                    "groupKey": "unclassified",

                    "questionType": 3,

                    "questionStem": "您的收缩压（高压）",

                    "optionContent": {

                        "options": [

                            {

                                "optKey": "A",

                                "checked": true,

                                "blank": {

                                    "blankType": 2,

                                    "defaultValue": "120",

                                    "blankRule": {

                                        "unit": "mmHg",

                                        "min": "80",

                                        "max": "139",

                                        "dataType": "1",

                                        "step": "1"

                                    }

                                }

                            }

                        ]

                    }

                }

            ]

        }

    }

}
```
<a name="YHz2m"></a>
# 2.提交免疫力评估问卷
```bash
POST /api/immune/v1/submitQuestions
```
**入参**<br />入参示例：<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1619512592041-25be53af-575b-48a2-84a1-525132a18cfc.png#clientId=u3646082f-98c2-4&from=paste&height=466&id=kJ8WU&margin=%5Bobject%20Object%5D&name=image.png&originHeight=931&originWidth=1152&originalType=binary&size=175699&status=done&style=none&taskId=u6367e73f-9ae6-4fae-a943-c43e9ddc1d2&width=576)<br />**出参**<br />出参示例：
```json
{
  "code": 200,
  "msg": "success"
}
```
<a name="KQGmW"></a>
# 3.查询某次评估的评估结果
```bash
GET /api/immune/v1/getOneEvaluateResult
```
**入参**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evalId | String | 评估id |  |

<a name="RVxP2"></a>
##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateInfo | Object | 评估信息 |  |
| moduleInfoList | List<Object> | 模块数据集合 |  |
| riskLabelList | List<Object> | 风险标签集合 |  |
| riskSuggestList | List<Object> | 风险建议集合 |  |



<a name="SQD9W"></a>
###### 评估信息：
<a name="K8J5v"></a>
###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | _用户name_ |  |
| sex | Integer | 性别 | 1 男<br />2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |
| height | String | 身高 | cm |

<a name="yaErB"></a>
###### 模块数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key | "immunityCognitive": "免疫力认知"<br />"immunityExpression": "免疫力表现"<br />"lifeStyle": "生活方式"<br />"mentalStress": "心理压力" |
| moduleName | String | 模块名称 |  |
| score | Double | 模块分 | 满分10分 |
| ~~risk~~ | ~~boolean~~ | ~~是否有风险~~ |  |

<a name="ssEZz"></a>
###### 风险标签：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key |  |
| firstLevelLabelKey | String | 一级标签key |  |
| threeLevelLabelKey | String | 三级标签key |  |
| threeLevelLabelMsg | Double | 三级标签文本 |  |

<a name="eERzK"></a>
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

<a name="fvz2o"></a>
###### 建议集合：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| title | String | 标题 |  |
| masterSuggest | String | 主态文案 |  |
| guestSuggest | String | 客态 |  |
| copySuggest | String | 复制 |  |


