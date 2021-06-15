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
| firstLevelLabelKey | String | 一级标签key |  |
| firstLevelLabelMsg | String | 一级标签文本 |  |
| secondLevelLabelKey | String | 二级标签key |  |
| secondLevelLabelMsg | String | 二级标签文本 |  |
| threeLevelLabelKey | String | 三级标签key |  |
| threeLevelLabelMsg | String | 三级标签文本 |  |

示例返回报文：
```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "moduleKey": "bloodpressure",
            "firstLevelLabelKey": "health",
            "firstLevelLabelMsg": "健康人群",
			"secondLevelLabelKey": "health_threeHigh",
			"secondLevelLabelMsg": "三高指标正常",
            "threeLevelLabelKey": "bprisk_normal",
            "threeLevelLabelMsg": "血压正常"
        },
        {
            "moduleKey": "bloodsugar",
            "firstLevelLabelKey": "health",
            "firstLevelLabelMsg": "健康人群"
			"secondLevelLabelKey": "health_threeHigh",
			"secondLevelLabelMsg": "三高指标正常",
            "threeLevelLabelKey": "bs_normal",
            "threeLevelLabelMsg": "血糖正常"
        },
        {
            "moduleKey": "diet",
            "firstLevelLabelKey": "subhealth",
            "firstLevelLabelMsg": "亚健康人群",
			"secondLevelLabelKey": "subhealth_diet",
			"secondLevelLabelMsg": "饮食不合理",
            "threeLevelLabelKey": "fruit_seriousLack",
            "threeLevelLabelMsg": "水果摄入严重不足"
        }
    ]
}
```

