<a name="WrQCS"></a>
## 1. 查询用户当前健康风险标签
**URL**：域名 +  /api/hai/v1.0/label/getUserRiskLabel<br />**类型**：GET
<a name="UaupU"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户，双方约定字段 |

<a name="WDw9F"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 标签所属业务模块 |  |
| firstLevelLabelKey | String | 标签分类 |  |
| threeLevelLabelKey | String | 标签key |  |
| threeLevelLabelMsg | String | 标签文本 |  |

示例返回报文：
```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "moduleKey": "bloodpressure",
            "firstLevelLabelKey": "highillrisk",
            "threeLevelLabelKey": "bprisk_normalHigh",
            "threeLevelLabelMsg": "血压正常高值"
        },
        {
            "moduleKey": "bloodsugar",
            "firstLevelLabelKey": "health",
            "threeLevelLabelKey": "bs_normal",
            "threeLevelLabelMsg": "血糖正常"
        },
        {
            "moduleKey": "weight",
            "firstLevelLabelKey": "highillrisk",
            "threeLevelLabelKey": "weight_fat",
            "threeLevelLabelMsg": "体重肥胖"
        },
        {
            "moduleKey": "diet",
            "firstLevelLabelKey": "subhealth",
            "threeLevelLabelKey": "fruit_seriousLack",
            "threeLevelLabelMsg": "水果摄入严重不足"
        },
        {
            "moduleKey": "mentalStress",
            "firstLevelLabelKey": "subhealth",
            "threeLevelLabelKey": "ms_mental_poor",
            "threeLevelLabelMsg": "心态不佳"
        }
    ]
}
```

