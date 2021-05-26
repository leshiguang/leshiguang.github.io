**注：如无特殊情况，以下接口都需要在header或者param参数中传递associatedId 参数**。

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

# 1.获取评估问卷题目
```bash
GET /api/healthRiskEval/v2/loadQuestions
```
##### 入参：
同：免疫力评估


**出参**：
同：免疫力评估


# 2.提交评估问卷答案


```bash
POST /api/healthRiskEval/v2/submitQuestions
```


##### 入参：
同：免疫力评估


**出参**：
同：免疫力评估
# 3.获取某个评估的评估结果


```bash
GET /api/healthRiskEval/v2/getOneEvaluateResult
```


**入参**

| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| queryId | Long | 评估id | 传空则查询最近一次评估 |

##### 出参：


##### 出参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateInfo | Object | 评估信息 |  |
| userInfo | Object | 用户信息 |  |
| moduleInfoList | List<Object> | 模块数据集合 |  |
| riskLabelList | List<Object> | 风险标签集合 |  |
| riskSuggestList | List<Object> | 风险建议集合 |  |



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
| evaScene | String | 评估场景 | first 首次评测
no_first 非首次评测
risk_change 14天风险变更评测
longtime 长时间未测 |

###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | _用户name_ |  |
| sex | Integer | 性别 | 1 男
2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |
| height | String | 身高 | cm |

###### 模块数据：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key | "sport": "运动"
"bloodpressure": "血压"
"bloodsugar": "血糖"
"diet": "膳食"
"weight": "体重"
"sleepStress": "睡眠压力" |
| moduleName | String | 模块名称 |  |
| score | Double | 模块分 | 满分10分 |
| risk | boolean | 是否有风险 |  |

###### 风险标签：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key |  |
| firstLevelLabelKey | String | 一级标签key |  |
| threeLevelLabelKey | String | 三级标签key |  |
| threeLevelLabelMsg | Double | 三级标签文本 |  |

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

###### 建议集合：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| title | String | 标题 |  |
| masterSuggest | String | 主态文案 |  |
| guestSuggest | String | 客态 |  |
| copySuggest | String | 复制 |  |

###### 
