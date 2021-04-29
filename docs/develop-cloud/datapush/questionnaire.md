**注：所有问卷测评类数据仅推送用户的评估事件，客户再通过评估Id获取详细的评估结果。**
<a name="mXsif"></a>
## 1、全面风险评估测评-评估事件
用户做完问卷后触发

| eventKey | eventPush |
| --- | --- |
| dataTypeKey | **uHealthRiskEvalE** |

1.推送data

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object |  |
| **evalId** | data | String | 评估id<br /> |

2.推送data示例
```json
{
  "userId": 23341064,
  "associatedId": "66104c5623342apsasad",
  "dataTypeKey": "uHealthRiskEvalE",
  "eventKey": "eventPush",
  "pushStatus": 1,
  "data": {
    "evalId": "111111111"
  }
}
```
<a name="CAeLM"></a>
## 2、免疫力评估测评-评估事件
用户做完问卷后触发

| eventKey | eventPush |
| --- | --- |
| dataTypeKey | **uImmuneEvalE** |

1.推送data

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object |  |
| **evalId** | data | String | 评估id<br /> |

2.推送data示例
```json
{
  "userId": 23341064,
  "associatedId": "66104c5623342apsasad",
  "dataTypeKey": "uImmuneEvalE",
  "eventKey": "eventPush",
  "pushStatus": 1,
  "data": {
    "evalId": "111111111"
  }
}
```
<a name="eW88A"></a>
## 
<a name="wdj1y"></a>
## 3、营养均衡评估测评-评估事件
用户做完问卷后触发

| eventKey | eventPush |
| --- | --- |
| dataTypeKey | **uNutritionEvalE** |

1.推送data

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object |  |
| **evalId** | data | String | 评估id<br /> |

2.推送data示例
```json
{
  "userId": 23341064,
  "associatedId": "66104c5623342apsasad",
  "dataTypeKey": "uNutritionEvalE",
  "eventKey": "eventPush",
  "pushStatus": 1,
  "data": {
    "evalId": "111111111"
  }
}
```
<a name="Mpdx6"></a>
## 

