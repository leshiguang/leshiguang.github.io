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
| evalId | data | String | 评估ID |
| source | data | Integer | 来源:1-主态; 2-家人; 3-顾问 |
| sourceUserId | data | Long | 来源用户ID |

2.推送data示例
```json
{
    "userId":23341064,
    "associatedId":"66104c5623342apsasad",
    "dataTypeKey":"uHealthRiskEvalE",
    "eventKey":"eventPush",
    "pushStatus":1,
    "data":{
        "evalId":"111111111",
        "source":3,
        "sourceUserId":31056557
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
| evalId | data | String | 评估ID |
| source | data | Integer | 来源:1-主态; 2-家人; 3-顾问 |
| sourceUserId | data | Long | 来源用户ID |

2.推送data示例
```json
{
    "userId":23341064,
    "associatedId":"66104c5623342apsasad",
    "dataTypeKey":"uImmuneEvalE",
    "eventKey":"eventPush",
    "pushStatus":1,
    "data":{
        "evalId":"111111111",
        "source":3,
        "sourceUserId":31056557
    }
}
```
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
| evalId | data | String | 评估ID |
| source | data | Integer | 来源:1-主态; 2-家人; 3-顾问 |
| sourceUserId | data | Long | 来源用户ID |

2.推送data示例
```json
{
    "userId":23341064,
    "associatedId":"66104c5623342apsasad",
    "dataTypeKey":"uNutritionEvalE",
    "eventKey":"eventPush",
    "pushStatus":1,
    "data":{
        "evalId":"111111111",
        "source":3,
        "sourceUserId":31056557
    }
}
```
<a name="uCIdJ"></a>
## 4、睡眠评估测评-评估事件
用户做完问卷后触发

| eventKey | eventPush |
| --- | --- |
| dataTypeKey | **uSleepEvalE** |

1.推送data

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object |  |
| evalId | data | String | 评估ID |
| source | data | Integer | 来源:1-主态; 2-家人; 3-顾问 |
| sourceUserId | data | Long | 来源用户ID |

2.推送data示例
```json
{
    "userId":23341064,
    "associatedId":"66104c5623342apsasad",
    "dataTypeKey":"uSleepEvalE",
    "eventKey":"eventPush",
    "pushStatus":1,
    "data":{
        "evalId":"111111111",
        "source":3,
        "sourceUserId":31056557
    }
}
```
<a name="QTjgN"></a>
## 5、分享评估事件
顾问点击分享问卷后触发

| eventKey | eventPush |
| --- | --- |
| dataTypeKey | **uShareEvalE** |

1.推送data

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object |  |
| userId | data | String | 用户ID<br /> |
| evalType | data | String | 评估问卷：1-全面风险评估；2-营养均衡评估；3-免疫力评估；4-睡眠状况评估 |
| shareDate | data | Date | 分享时间 |

2.推送data示例
```json
{
    "userId":23341064,
    "associatedId":"66104c5623342apsasad",
    "dataTypeKey":"uShareEvalE",
    "eventKey":"eventPush",
    "pushStatus":1,
    "data":{
        "userId":23341064,
        "evalType":"1",
        "shareDate":1628823259000
    }
}
```
<a name="qB0u1"></a>
## ​<br />

<br />
<br />


