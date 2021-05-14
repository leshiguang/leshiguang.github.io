<a name="SKh0S"></a>
## 1. 查询顾问会员各个评估填写情况 
URL：域名 +  /api/family/v1.0/counselorData/getCustomerHealthAssessStatisticsData<br />类型：GET
<a name="ZY9DB"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| notHaveDataHeadImageSize | Integer | 未进行评估的头像展示数量 | 可以为null |
| evaluateModule | String | 要查询的评估模块 | overallRisk 全面风险评估<br />immunity  免疫力评估<br />sleep  睡眠评估<br />nutrition  营养评估 |

<a name="TctWE"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| haveDataCount | Integer | 已填写人数 |  |
| notHaveDataCount | Integer | 未填写人数 |  |
| notHaveDataHeadImageList | List<String> | 未填写用户头像 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "haveDataCount": 1,
        "notHaveDataCount": 0,
        "notHaveDataHeadImageList": [
            "头像1",
            "头像2"
        ]
    }
}
```
<a name="b2NYF"></a>
## 2. 查询顾问下 问卷已填写或未填写会员列表
URL：域名 +  /api/family/v1.0/counselorData/getCustomerHealthAssessData<br />类型：GET
<a name="pEsp9"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| write | boolean | 是否填写 | 默认false |
| evaluateModule | String | 评估模块 | overallRisk 全面风险评估<br />immunity  免疫力评估<br />sleep  睡眠评估<br />nutrition  营养评估 |
| pageNum | Integer | 页码 | 必传 |
| pageSize | Integer | 每页数量 | 必传 |

<a name="QLf94"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| lastHealthRiskTime | Long | 最后一次问卷填写时间 时间戳 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "customerId": 40,
            "customerName": "..test..",
            "sex": 1,
            "customerImage": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLFicpLxq2EgkKyveGO0AMWFBc9bwXHjkibTSCUUKHd9a5JJjBSLBSK0D5x6STeYMt7UFOHVu0sveBA/132",
            "lastHealthRiskTime": 1596014252000
        },
         {
            "customerId": 40,
            "customerName": "..test..",
            "sex": 1,
            "customerImage": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLFicpLxq2EgkKyveGO0AMWFBc9bwXHjkibTSCUUKHd9a5JJjBSLBSK0D5x6STeYMt7UFOHVu0sveBA/132",
            "lastHealthRiskTime": 1596014252000
        }
    ]
}
```
<a name="UQn3b"></a>
## ​<br />

