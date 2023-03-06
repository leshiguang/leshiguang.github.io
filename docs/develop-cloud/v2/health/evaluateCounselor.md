<a name="bsy45"></a>
## 1.获取评估问卷题目
同 [健康评估V2 1.获取评估问卷题目](https://docs.sghealth.cn/develop-cloud/v2/health/estimate.html#_1-%E8%8E%B7%E5%8F%96%E8%AF%84%E4%BC%B0%E9%97%AE%E5%8D%B7%E9%A2%98%E7%9B%AE)
<a name="MYXig"></a>
## 2.提交评估问卷答案
```bash
POST /riskEva/eva/submit
```
<a name="P8yVR"></a>
#### 请求参数
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| » bizType | body | string | 是 | 业务类型 | obesityRisk(易胖风险评测)/overallRisk(全面风险评测) |
| » customerId | body | integer | 是 | 顾问id | none |
| » mobile | body | string | 是 | 会员手机号 | none |
| » serialNo | body | string | 是 | 问卷No | none |
| » reportNo | body | string | 是 | 报告No | none |
| » fillInType | body | integer | 是 | 填写方式 | none |
| » submitQuestions | body | [object] | 是 |  | none |
| »» questionId | body | integer | 是 | 问题id | none |
| »» userSubmit | body | string | 是 | 用户填写值 | none |

<a name="YgUe0"></a>
#### 请求参数示例
```json
{
  "customerId": 23924545,
  "serialNo": "20230129C40DF500",
  "fillInType": 1,
  "reportNo": "2023020100001",
  "bizType": "overallRisk",
  "mobile": "17317280128",
  "submitQuestions": [
    {
      "questionId": 700953,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700954,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700955,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700956,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700957,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700958,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700959,
      "questionType": 1,
      "userSubmit": "A"
    },
    {
      "questionId": 700960,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700961,
      "questionType": 4,
      "userSubmit": "A0,B1,C2"
    },
    {
      "questionId": 700962,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700963,
      "questionType": 3,
      "userSubmit": "7"
    },
    {
      "questionId": 700964,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700965,
      "questionType": 3,
      "userSubmit": "120"
    },
    {
      "questionId": 700966,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700967,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700968,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700969,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700970,
      "questionType": 1,
      "userSubmit": "B"
    },
    {
      "questionId": 700971,
      "questionType": 1,
      "userSubmit": "B"
    }
  ]
}
```

<a name="VR7aH"></a>
#### 返回结果
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| » code | integer | true | none |  | none |
| » msg | string | true | none |  | none |
| » data | string | true | none |  | none |

<a name="W4EBl"></a>
#### 返回结果示例
```json
{
  "code": 200,
  "msg": "成功",
  "data": "2023020100001"
}
```
<a name="kqAl8"></a>
## 3.获取某个评估的评估结果
```bash
GET /api/healthRiskEval/counselorVersion/report/query
```
<a name="gAhoz"></a>
#### 请求参数
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| reportNo | query | string | 否 |  | 报告No |

<a name="YFCry"></a>
#### 返回结果
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| » code | integer | true | none |  | none |
| » msg | string | true | none |  | none |
| » data | object | true | none |  | none |
| »» reportNo | string | true | none | 报告No | none |
| »» shared | integer | true | none | 是否分享 | none |
| »» purchaseStatus | integer | true | none | 购买意图 | none |
| »» qnSerialNo | string | true | none | 问卷No | none |
| »» evaluatedTime | integer | true | none | 报告时间 | none |
| »» potentialUserInfo | object | true | none | 潜客信息 | none |
| »»» evaUserId | integer | true | none |  | none |
| »»» counselorId | integer | true | none |  | none |
| »»» userMobile | string | true | none |  | none |
| »»» userRemarkName | string | true | none |  | none |
| »» userBaseSigns | object | true | none | 基础信息 | none |
| »»» userMobile | string | true | none |  | none |
| »»» sex | integer | true | none |  | none |
| »»» birthday | integer | true | none |  | none |
| »»» age | integer | true | none |  | none |
| »»» height | integer | true | none |  | none |
| »»» weight | integer | true | none |  | none |
| »»» labor | integer | true | none |  | none |
| »»» bmi | number | true | none |  | none |
| »» riskReportAnalysis | object | true | none | 报告分析 | none |
| »»» dimensionScores | [object] | true | none |  | none |
| »»»» dimension | string | true | none | 维度 | none |
| »»»» score | integer | true | none | 当前得分 | none |
| »»»» fullScore | integer | true | none | 满分 | none |
| »»»» percent | integer | true | none | 占比 | none |
| »»»» needImprove | boolean | true | none | 是否需要提高 | none |
| »»» highRiskLabels | [string] | true | none | 高风险标签 | none |
| »»» mediumRiskLabels | [string] | true | none | 中风险标签 | none |
| »»» lowRiskLabels | [string] | true | none | 低风险标签 | none |
| »»» healthStatusAnalysis | object | true | none | 健康状况分许 | none |
| »»»» actualAge | integer | true | none | 真实年龄 | none |
| »»»» healthAge | number | true | none | 健康年龄 | none |
| »»»» idealAge | number | true | none | 理想年龄 | none |
| »»»» lifeExtensionSpace | number | true | none | 寿命改善空间 | none |
| »»»» elapsedDays | integer | true | none | 流逝天数 | none |
| »»»» lowScoreDimensions | [string] | true | none | 低分维度 | none |
| »»»» questionLabels | [string] | true | none | 健康问题标签 | none |
| »»» riskLabelMap | object | true | none |  | none |
| »»»» 体重风险 | [object] | true | none |  | none |
| »»»»» category | string | false | none |  | none |
| »»»»» labelName | string | false | none |  | none |
| »»»»» interpretation | string | false | none |  | none |
| »»»»» riskLevel | string | false | none |  | none |
| »»»»» riskLevelLevel | integer | false | none |  | none |
| »»»» 睡眠与压力 | [object] | true | none |  | none |
| »»»»» category | string | false | none |  | none |
| »»»»» labelName | string | false | none |  | none |
| »»»»» interpretation | string | false | none |  | none |
| »»»»» riskLevel | string | false | none |  | none |
| »»»»» riskLevelLevel | integer | false | none |  | none |
| »»»» 饮食习惯 | [object] | true | none |  | none |
| »»»»» category | string | true | none |  | none |
| »»»»» labelName | string | true | none |  | none |
| »»»»» interpretation | string | true | none |  | none |
| »»»»» riskLevel | string | true | none |  | none |
| »»»»» riskLevelLevel | integer | true | none |  | none |
| »» riskInterpretations | object | true | none | 风险解读 | none |
| »»» 体重风险 | [object] | true | none |  | none |
| »»»» category | string | false | none |  | none |
| »»»» labelName | string | false | none |  | none |
| »»»» interpretation | string | false | none |  | none |
| »»»» riskLevel | string | false | none |  | none |
| »»»» riskLevelLevel | integer | false | none |  | none |
| »»» 睡眠与压力 | [object] | true | none |  | none |
| »»»» category | string | false | none |  | none |
| »»»» labelName | string | false | none |  | none |
| »»»» interpretation | string | false | none |  | none |
| »»»» riskLevel | string | false | none |  | none |
| »»»» riskLevelLevel | integer | false | none |  | none |
| »»» 饮食习惯 | [object] | true | none |  | none |
| »»»» category | string | true | none |  | none |
| »»»» labelName | string | true | none |  | none |
| »»»» interpretation | string | true | none |  | none |
| »»»» riskLevel | string | true | none |  | none |
| »»»» riskLevelLevel | integer | true | none |  | none |
| »»» 运动习惯 | string | true | none |  | none |
| »»» 血压 | string | true | none |  | none |
| »»» 血糖 | string | true | none |  | none |
| »» improvementPlan | object | true | none | 改善方案 | none |
| »»» comprehensiveHealthObjectives | object | true | none | 综合健康目标 | none |
| »»»» currentHealthAge | number | true | none | 当前健康年龄 | none |
| »»»» currentHealthScore | integer | true | none | 当前健康分数 | none |
| »»»» afterHealthAge | integer | true | none | 改善后健康年龄 | none |
| »»»» afterHealthScore | integer | true | none | 改善后健康分数 | none |
| »»»» recommendWeight | number | true | none | 推荐体重 | none |
| »»»» recommendWeightMin | number | true | none | 推荐体重下限 | none |
| »»»» recommendWeightMax | number | true | none | 推荐体重上限 | none |
| »»»» dimensionScores | [object] | true | none | 维度得分 | none |
| »»»»» dimension | string | true | none | 维度 | none |
| »»»»» score | integer | true | none | 得分 | none |
| »»»»» percent | integer | true | none | 得分占比 | none |
| »»»»» needImprove | boolean | true | none | 是否需要改善 | none |
| »»» productPlan | object | true | none | 产品计划 | none |
| »»»» commodities | [object] | true | none |  | none |
| »»»»» commodityId | integer | true | none |  | none |
| »»»»» commodityName | string | true | none |  | none |
| »»»»» commodityImage | string | true | none |  | none |
| »»»»» commoditySpecificationInfo | object | true | none |  | none |
| »»»»»» quantity | integer | true | none |  | none |
| »»»»»» unit | string | true | none |  | none |
| »»»»»» specification | string | true | none |  | none |
| »»»»» commodityNum | integer | true | none |  | none |
| »»»»» commodityTakeInfo | object | true | none |  | none |
| »»»»»» takeType | integer | true | none |  | none |
| »»»»»» dayTakeSetting | object | true | none |  | none |
| »»»»»»» dayTakeTimes | integer | true | none |  | none |
| »»»»»»» timeTakeQuantity | integer | true | none |  | none |
| »»»»»» mealTakeSettingList | [object] | false | none |  | none |
| »»»»»»» mealType | integer | true | none |  | none |
| »»»»»»» takeQuantity | integer | true | none |  | none |
| »»»»» remark | string | true | none |  | none |
| »»» productRecipe | object | true | none | 产品食谱 | none |
| »»»» breakfast | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | false | none |  | none |
| »»»»» meal | integer | false | none |  | none |
| »»»»» foodName | string | false | none |  | none |
| »»»»» foodWeight | integer | false | none |  | none |
| »»»»» unit | string | false | none |  | none |
| »»»»» remark | string | false | none |  | none |
| »»»» lunch | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | false | none |  | none |
| »»»»» meal | integer | false | none |  | none |
| »»»»» foodName | string | false | none |  | none |
| »»»»» foodWeight | integer | false | none |  | none |
| »»»»» unit | string | false | none |  | none |
| »»»»» remark | string | false | none |  | none |
| »»»» dinner | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | false | none |  | none |
| »»»»» meal | integer | false | none |  | none |
| »»»»» foodName | string | false | none |  | none |
| »»»»» foodWeight | integer | false | none |  | none |
| »»»»» unit | string | false | none |  | none |
| »»»»» remark | string | false | none |  | none |
| »»»» addMeal | [string] | true | none |  | none |
| »»»» wholeDay | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | true | none |  | none |
| »»»»» meal | integer | true | none |  | none |
| »»»»» foodName | string | true | none |  | none |
| »»»»» unit | string | true | none |  | none |
| »»»»» dayTakeTimes | integer | true | none |  | none |
| »»»»» timeTakeQuantity | integer | true | none |  | none |
| »»»»» remark | string | false | none |  | none |
| »»» recipe | object | true | none | 食谱 | none |
| »»»» breakfast | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | true | none |  | none |
| »»»»» meal | integer | true | none |  | none |
| »»»»» category | string | true | none |  | none |
| »»»»» foodName | string | true | none |  | none |
| »»»»» foodWeight | integer | true | none |  | none |
| »»»»» unit | string | true | none |  | none |
| »»»» lunch | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | true | none |  | none |
| »»»»» meal | integer | true | none |  | none |
| »»»»» category | string | true | none |  | none |
| »»»»» foodName | string | true | none |  | none |
| »»»»» foodWeight | number | true | none |  | none |
| »»»»» unit | string | true | none |  | none |
| »»»» dinner | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | true | none |  | none |
| »»»»» meal | integer | true | none |  | none |
| »»»»» category | string | true | none |  | none |
| »»»»» foodName | string | true | none |  | none |
| »»»»» foodWeight | number | true | none |  | none |
| »»»»» unit | string | true | none |  | none |
| »»»» addMeal | [object] | true | none |  | none |
| »»»»» recipeFoodType | integer | true | none |  | none |
| »»»»» meal | integer | true | none |  | none |
| »»»»» category | string | true | none |  | none |
| »»»»» foodName | string | true | none |  | none |
| »»»»» foodWeight | integer | true | none |  | none |
| »»»»» unit | string | true | none |  | none |
| »»»» wholeDay | [string] | true | none |  | none |
| »»» sportPlan | object | true | none | 运动计划 | none |
| »»»» exerciseDuration | integer | true | none |  | none |
| »»»» exerciseFrequency | integer | true | none |  | none |
| »»»» exerciseEvents | [object] | true | none |  | none |
| »»»»» exerciseName | string | true | none |  | none |
| »»»»» icon | string | true | none |  | none |
| »»» healthHabit | object | true | none | 健康习惯 | none |
| »»»» measureHabits | [string] | true | none | 测量习惯 | none |
| »»»» otherHabits | [string] | true | none | 其他习惯 | none |

<a name="gDnJ7"></a>
#### 返回结果示例
```json
{
  "code": 200,
  "msg": "成功",
  "data": {
    "reportNo": "2023020200001",
    "shared": 0,
    "qnSerialNo": "20230129C40DF500",
    "evaluatedTime": 1675331636000,
    "potentialUserInfo": {
      "evaUserId": 27728620,
      "counselorId": 23924545,
      "userMobile": "17317280128",
      "userRemarkName": "Major"
    },
    "userBaseSigns": {
      "userMobile": "17317280128",
      "sex": 1,
      "birthday": 791222400000,
      "age": 28,
      "height": 181,
      "weight": 85,
      "labor": 1,
      "bmi": 25.94548395958609
    },
    "riskReportAnalysis": {
      "healthStatusAnalysis": {
        "actualAge": 28,
        "healthAge": 28.2,
        "idealAge": 25.35,
        "lifeExtensionSpace": 2.8500004,
        "elapsedDays": 1040,
        "lowScoreDimensions": [
          "体重",
          "饮食",
          "睡眠与压力"
        ],
        "questionLabels": [
          "记忆力下降",
          "易胖",
          "脱发",
          "运动能力下降",
          "心脑血管疾病率增加"
        ]
      },
      "dimensionScores": [
        {
          "dimension": "BMI",
          "score": 3,
          "percent": 0,
          "needImprove": true
        },
        {
          "dimension": "SPORT",
          "score": 15,
          "percent": 1,
          "needImprove": false
        },
        {
          "dimension": "FOOD",
          "score": 28,
          "percent": 0,
          "needImprove": true
        },
        {
          "dimension": "SLEEP",
          "score": 10,
          "percent": 0,
          "needImprove": true
        },
        {
          "dimension": "BLOOD_PRESSURE",
          "score": 10,
          "percent": 1,
          "needImprove": false
        },
        {
          "dimension": "BLOOD_SUGAR",
          "score": 10,
          "percent": 1,
          "needImprove": false
        }
      ],
      "highRiskLabels": [
        "不吃蔬菜",
        "不吃水果",
        "不吃肉类",
        "盐摄入较多",
        "过量饮酒"
      ],
      "mediumRiskLabels": [
        "超重",
        "压力较小"
      ],
      "lowRiskLabels": [
        "睡眠时长不足",
        "睡眠质量一般"
      ],
      "riskLabelMap": {
        "体重风险": [
          {
            "category": "体重",
            "labelName": "超重",
            "interpretation": "在健康的基础上对体重进行科学管理十分重要。健康的体重指标可以帮助您避免超重肥胖导致的2型糖尿病、心血管病、高血压、中风和多种癌症的患病风险。通过合理膳食、适度运动、建立管理方案等方式可以收获健康的体重与健康的身体。",
            "riskLevel": "中风险",
            "riskLevelLevel": 2
          }
        ],
        "睡眠与压力": [
          {
            "category": "睡眠与压力",
            "labelName": "睡眠质量一般",
            "interpretation": "该问题可能是咖啡因摄入过量、晚上吃的过饱、睡前剧烈运动、压力大、睡眠环境差等，需避免不良睡眠行为。若白天精神不佳，可在上午选择咖啡、茶等食物提神，中午通过小憩调整。",
            "riskLevel": "低风险",
            "riskLevelLevel": 1
          }
        ],
        "饮食习惯": [
          {
            "category": "饮食",
            "labelName": "不吃蔬菜",
            "interpretation": "当前的蔬菜摄入量严重不足。长期不吃或少吃蔬菜易发生便秘、营养不良、免疫力下降。所以建议逐渐增加蔬菜摄入量到500克以上。",
            "riskLevel": "高风险",
            "riskLevelLevel": 3
          },
          {
            "category": "饮食",
            "labelName": "不吃水果",
            "interpretation": "当前的水果摄入量严重不足。如果长期水果摄入不足，心血管病、糖尿病甚至是部分肿瘤的患病风险有可能增加，所以建议逐渐增加水果摄入量到350克以上。",
            "riskLevel": "高风险",
            "riskLevelLevel": 3
          },
          {
            "category": "饮食",
            "labelName": "不吃肉类",
            "interpretation": "当前的肉类摄入量不达标，长此以往，免疫能力、造血能力会逐渐下降，随之而来的是发生感染、贫血、肿瘤等的风险增加，建议逐渐增加肉类摄入量，直到每天50-70克。",
            "riskLevel": "高风险",
            "riskLevelLevel": 3
          },
          {
            "category": "饮食",
            "labelName": "盐摄入较多",
            "interpretation": "当前的口味较重，说明钠盐摄入较多，这会导致心血管病的风险上升。建议逐渐减少食盐的摄入量，每日不多于6克。",
            "riskLevel": "高风险",
            "riskLevelLevel": 3
          },
          {
            "category": "饮食",
            "labelName": "过量饮酒",
            "interpretation": "酒精都会对健康造成损害。为了您和家人的健康，建议您控制饮酒量，建议成年男性每日饮用的酒精量不超过25克（约1两高度白酒），女性不超过15克（约1两中度白酒）。",
            "riskLevel": "高风险",
            "riskLevelLevel": 3
          }
        ]
      }
    },
    "riskLabelMap": {
      "体重风险": [
        {
          "category": "体重",
          "labelName": "超重",
          "interpretation": "在健康的基础上对体重进行科学管理十分重要。健康的体重指标可以帮助您避免超重肥胖导致的2型糖尿病、心血管病、高血压、中风和多种癌症的患病风险。通过合理膳食、适度运动、建立管理方案等方式可以收获健康的体重与健康的身体。",
          "riskLevel": "中风险",
          "riskLevelLevel": 2
        }
      ],
      "睡眠与压力": [
        {
          "category": "睡眠与压力",
          "labelName": "睡眠质量一般",
          "interpretation": "该问题可能是咖啡因摄入过量、晚上吃的过饱、睡前剧烈运动、压力大、睡眠环境差等，需避免不良睡眠行为。若白天精神不佳，可在上午选择咖啡、茶等食物提神，中午通过小憩调整。",
          "riskLevel": "低风险",
          "riskLevelLevel": 1
        }
      ],
      "饮食习惯": [
        {
          "category": "饮食",
          "labelName": "不吃蔬菜",
          "interpretation": "当前的蔬菜摄入量严重不足。长期不吃或少吃蔬菜易发生便秘、营养不良、免疫力下降。所以建议逐渐增加蔬菜摄入量到500克以上。",
          "riskLevel": "高风险",
          "riskLevelLevel": 3
        },
        {
          "category": "饮食",
          "labelName": "不吃水果",
          "interpretation": "当前的水果摄入量严重不足。如果长期水果摄入不足，心血管病、糖尿病甚至是部分肿瘤的患病风险有可能增加，所以建议逐渐增加水果摄入量到350克以上。",
          "riskLevel": "高风险",
          "riskLevelLevel": 3
        },
        {
          "category": "饮食",
          "labelName": "不吃肉类",
          "interpretation": "当前的肉类摄入量不达标，长此以往，免疫能力、造血能力会逐渐下降，随之而来的是发生感染、贫血、肿瘤等的风险增加，建议逐渐增加肉类摄入量，直到每天50-70克。",
          "riskLevel": "高风险",
          "riskLevelLevel": 3
        },
        {
          "category": "饮食",
          "labelName": "盐摄入较多",
          "interpretation": "当前的口味较重，说明钠盐摄入较多，这会导致心血管病的风险上升。建议逐渐减少食盐的摄入量，每日不多于6克。",
          "riskLevel": "高风险",
          "riskLevelLevel": 3
        },
        {
          "category": "饮食",
          "labelName": "过量饮酒",
          "interpretation": "酒精都会对健康造成损害。为了您和家人的健康，建议您控制饮酒量，建议成年男性每日饮用的酒精量不超过25克（约1两高度白酒），女性不超过15克（约1两中度白酒）。",
          "riskLevel": "高风险",
          "riskLevelLevel": 3
        }
      ]
    },
    "improvementPlan": {
      "comprehensiveHealthObjectives": {
        "currentHealthAge": 28.2,
        "currentHealthScore": 76,
        "afterHealthAge": 27,
        "afterHealthScore": 100,
        "recommendWeight": 69.45331999999999,
        "recommendWeightMin": 60.60785,
        "recommendWeightMax": 78.29879,
        "dimensionScores": [
          {
            "dimension": "BMI",
            "score": 3,
            "percent": 0,
            "needImprove": true
          },
          {
            "dimension": "SPORT",
            "score": 15,
            "percent": 1,
            "needImprove": false
          },
          {
            "dimension": "FOOD",
            "score": 28,
            "percent": 0,
            "needImprove": true
          },
          {
            "dimension": "SLEEP",
            "score": 10,
            "percent": 0,
            "needImprove": true
          },
          {
            "dimension": "BLOOD_PRESSURE",
            "score": 10,
            "percent": 1,
            "needImprove": false
          },
          {
            "dimension": "BLOOD_SUGAR",
            "score": 10,
            "percent": 1,
            "needImprove": false
          }
        ]
      },
      "productPlan": {
        "commodities": [
          {
            "commodityId": 19,
            "commodityName": "胶原蛋白肽--演示",
            "commodityImage": "https://cn-pics.leshiguang.com/management/2022/04/28/ba945c126f2c4bd3811211cda501fb6c.jpeg",
            "commoditySpecificationInfo": {
              "quantity": 28,
              "unit": "袋",
              "specification": "盒"
            },
            "commodityNum": 1,
            "commodityTakeInfo": {
              "takeType": 1,
              "dayTakeSetting": {
                "dayTakeTimes": 2,
                "timeTakeQuantity": 1
              }
            }
          },
          {
            "commodityId": 16,
            "commodityName": "白芸豆胶囊-演示",
            "commodityImage": "https://cn-pics.leshiguang.com/management/2022/04/28/a3a702174f934e28a9954aad4570a7da.jpeg",
            "commoditySpecificationInfo": {
              "quantity": 50,
              "unit": "颗",
              "specification": "瓶"
            },
            "commodityNum": 1,
            "commodityTakeInfo": {
              "takeType": 2,
              "mealTakeSettingList": [
                {
                  "mealType": 1,
                  "takeQuantity": 1
                },
                {
                  "mealType": 2,
                  "takeQuantity": 1
                },
                {
                  "mealType": 3,
                  "takeQuantity": 1
                }
              ]
            },
            "remark": "餐前服用"
          },
          {
            "commodityId": 13,
            "commodityName": "亦餐代谢咖啡-演示",
            "commodityImage": "https://cn-pics.leshiguang.com/management/2022/04/28/3a077d6a41eb43b182bc0bed43ec2040.jpeg",
            "commoditySpecificationInfo": {
              "quantity": 30,
              "unit": "袋",
              "specification": "盒"
            },
            "commodityNum": 1,
            "commodityTakeInfo": {
              "takeType": 1,
              "dayTakeSetting": {
                "dayTakeTimes": 1,
                "timeTakeQuantity": 1
              }
            },
            "remark": "运动前服用效果更好"
          }
        ]
      },
      "productRecipe": {
        "breakfast": [
          {
            "recipeFoodType": 2,
            "meal": 1,
            "foodName": "白芸豆胶囊-演示",
            "foodWeight": 1,
            "unit": "颗",
            "remark": "餐前服用"
          }
        ],
        "lunch": [
          {
            "recipeFoodType": 2,
            "meal": 2,
            "foodName": "白芸豆胶囊-演示",
            "foodWeight": 1,
            "unit": "颗",
            "remark": "餐前服用"
          }
        ],
        "dinner": [
          {
            "recipeFoodType": 2,
            "meal": 3,
            "foodName": "白芸豆胶囊-演示",
            "foodWeight": 1,
            "unit": "颗",
            "remark": "餐前服用"
          }
        ],
        "addMeal": [],
        "wholeDay": [
          {
            "recipeFoodType": 2,
            "meal": 0,
            "foodName": "胶原蛋白肽--演示",
            "unit": "袋",
            "dayTakeTimes": 2,
            "timeTakeQuantity": 1
          },
          {
            "recipeFoodType": 2,
            "meal": 0,
            "foodName": "亦餐代谢咖啡-演示",
            "unit": "袋",
            "dayTakeTimes": 1,
            "timeTakeQuantity": 1,
            "remark": "运动前服用效果更好"
          }
        ]
      },
      "recipe": {
        "breakfast": [
          {
            "recipeFoodType": 1,
            "meal": 1,
            "category": "薯类",
            "foodName": "山药、地瓜、土豆",
            "foodWeight": 50,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 1,
            "category": "蔬菜",
            "foodName": "生菜、油菜、胡萝卜、茼蒿、莴笋",
            "foodWeight": 80,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 1,
            "category": "蛋类",
            "foodName": "鸡蛋、鸭蛋、鹌鹑蛋、鹅蛋",
            "foodWeight": 40,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 1,
            "category": "乳制品",
            "foodName": "脱脂牛奶、酸奶、牛奶",
            "foodWeight": 300,
            "unit": "毫升"
          },
          {
            "recipeFoodType": 1,
            "meal": 1,
            "category": "大豆",
            "foodName": "豆浆、豆干、豆腐",
            "foodWeight": 15,
            "unit": "克"
          }
        ],
        "lunch": [
          {
            "recipeFoodType": 1,
            "meal": 2,
            "category": "谷类",
            "foodName": "玉米、藜麦、荞麦面、红米",
            "foodWeight": 112.5,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 2,
            "category": "蔬菜",
            "foodName": "生菜、油菜、胡萝卜、茼蒿、莴笋",
            "foodWeight": 160,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 2,
            "category": "水产品",
            "foodName": "生蚝、花蛤、海蟹、扇贝",
            "foodWeight": 50,
            "unit": "克"
          }
        ],
        "dinner": [
          {
            "recipeFoodType": 1,
            "meal": 3,
            "category": "谷类",
            "foodName": "玉米、藜麦、荞麦面、红米",
            "foodWeight": 112.5,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 3,
            "category": "蔬菜",
            "foodName": "生菜、油菜、胡萝卜、茼蒿、莴笋",
            "foodWeight": 160,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 3,
            "category": "禽畜肉",
            "foodName": "羊肉、鸡肉、鹅肉、牛肉",
            "foodWeight": 50,
            "unit": "克"
          }
        ],
        "addMeal": [
          {
            "recipeFoodType": 1,
            "meal": 4,
            "category": "水果",
            "foodName": "橙子、梨、火龙果、苹果",
            "foodWeight": 200,
            "unit": "克"
          },
          {
            "recipeFoodType": 1,
            "meal": 4,
            "category": "坚果",
            "foodName": "松子、杏仁、巴旦木、腰果",
            "foodWeight": 10,
            "unit": "克"
          }
        ],
        "wholeDay": []
      },
      "sportPlan": {
        "exerciseDuration": 30,
        "exerciseFrequency": 5,
        "exerciseEvents": [
          {
            "exerciseName": "骑行",
            "icon": "https://cn-pics.leshiguang.com/management/2021/04/22/60331a7af78f4ff5971e3eaba1a013a8.png"
          },
          {
            "exerciseName": "慢跑",
            "icon": "https://cn-pics.leshiguang.com/management/2021/04/22/32d596bb6b4a421b97fc3ef5ee8f7605.png"
          },
          {
            "exerciseName": "羽毛球",
            "icon": "https://cn-pics.leshiguang.com/management/2021/04/22/c79ad134be2340579c4574b4af116947.png"
          },
          {
            "exerciseName": "乒乓球",
            "icon": "https://cn-pics.leshiguang.com/management/2021/04/22/381d1792a29e430d820a88ccc7481f7d.png"
          },
          {
            "exerciseName": "游泳",
            "icon": "https://cn-pics.leshiguang.com/management/2021/04/22/54af30fcca724ea9b63316df48c4ed18.png"
          },
          {
            "exerciseName": "广场舞",
            "icon": "https://cn-pics.leshiguang.com/management/2021/04/22/b24e056d34f44cc294adad037961fd83.png"
          }
        ]
      },
      "healthHabit": {
        "measureHabits": [
          "测量体重",
          "记录睡眠状况"
        ],
        "otherHabits": [
          "每天喝8杯水",
          "早起称体重"
        ]
      }
    }
  }
}
```

<a name="nPM9J"></a>
## 4.获取用户提交数据
```bash
GET /api/healthRiskEval/counselorVersion/report/queryUserSubmit
```
<a name="HEgjS"></a>
#### 请求参数
| 名称 | 位置 | 类型 | 必选 | 说明 |
| --- | --- | --- | --- | --- |
| reportNo | query | string | 否 | 报告No |

<a name="IV2nN"></a>
#### 返回结果
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| » code | integer | true | none |  | none |
| » msg | string | true | none |  | none |
| » data | [object] | true | none |  | none |
| »» questionStem | string | true | none | 题目题干 | none |
| »» questionType | integer | true | none | 选项类型 | none |
| »» submitted | [object] | true | none |  | none |
| »»» key | string | true | none | 选项key | none |
| »»» value | string | true | none | 值 | none |
| »»» content | string | true | none | 选项内容 | none |

<a name="qdRWw"></a>
#### 返回结果示例
```json
{
  "code": 200,
  "msg": "成功",
  "data": [
    {
      "questionStem": "您是否患有以下疾病？",
      "questionType": 2,
      "submitted": [
        {
          "key": "E",
          "value": "E",
          "content": "肾上腺皮质功能减退"
        }
      ]
    },
    {
      "questionStem": "您的父亲或母亲是否超重/肥胖？",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "父母体重都正常"
        }
      ]
    },
    {
      "questionStem": "最近一周您平均每天摄入的谷类的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "6.5份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一周您平均每天摄入的薯类的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "3.5份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一周您平均每天摄入的水果的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "3份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一个月您平均每周摄入的蛋类的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "6.5份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一个月您平均每周摄入的乳制品的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "7.5份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一个月您平均每周摄入的禽畜肉的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "9.5份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一个月您平均每周摄入的水产品的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "9.5份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一个月您平均每周摄入的大豆及豆制品的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "6份或更少"
        }
      ]
    },
    {
      "questionStem": "最近一个月您平均每周摄入的坚果的分量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "6份或更少"
        }
      ]
    },
    {
      "questionStem": "您是否喜欢经常肥肉、油炸食品、水煮鱼等吃高油食物（含自己在家做饭及在外就餐或外卖）？",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "几乎不吃高油食物"
        }
      ]
    },
    {
      "questionStem": "您是否经常晚餐吃的过饱？",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "晚餐大吃大喝"
        }
      ]
    },
    {
      "questionStem": "最近一周，您平均每天摄入的添加糖的份量最接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "不摄入添加糖"
        }
      ]
    },
    {
      "questionStem": "最近一个月，您的运动量更接近于哪一种？",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "很少运动或不运动"
        }
      ]
    },
    {
      "questionStem": "您最近是否感到生活充满压力？",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "无压力或压力很轻"
        }
      ]
    },
    {
      "questionStem": "您最近是否经常有焦虑、忧愁痛苦的感觉？",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "几乎没有"
        }
      ]
    },
    {
      "questionStem": "最近一周，您平均每天的饮水量是",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "不怎么喝水或者用饮料来代替水"
        }
      ]
    },
    {
      "questionStem": "最近一个月，您平均每天的睡眠时长更接近",
      "questionType": 1,
      "submitted": [
        {
          "key": "A",
          "value": "A",
          "content": "不足5小时"
        }
      ]
    }
  ]
}
```


