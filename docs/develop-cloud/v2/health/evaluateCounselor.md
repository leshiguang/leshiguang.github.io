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
| accessToken | cookie | string | 否 |  | none |
| requestId | query | string | 否 |  | none |
| body | body | object | 否 |  | none |
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
| - code | integer | true | none |  | none |
| - msg | string | true | none |  | none |
| - data | string | true | none | 报告No | none |

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
GET /riskEva/report/query
```
<a name="gAhoz"></a>
#### 请求参数
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| reportNo | query | string | 否 |  | 报告No |

<a name="YFCry"></a>
#### 返回结果


