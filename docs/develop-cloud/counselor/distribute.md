<a name="mSGGu"></a>
## 1. 查询顾问会员各特征分布人数
URL：域名 +  /api/family/v1.0/counselorData/queryCustomerFeature<br />类型：GET
<a name="jK1C2"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |

<a name="x6mas"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| ageUnderThirtyCount | Integer | 年龄 30以下 |  |
| ageThirtyToFiftyCount | Integer | 年龄 30-50 |  |
| ageOverFiftyCount | Integer | 年龄 50以上 |  |
| sexBoyCount | Integer | 男 |  |
| setGirlCount | Integer | 女 |  |
| healthyAgeNormalCount | Integer | 健康年龄 正常 |  |
| healthyAgeOlderCount | Integer | 健康年龄 偏大 |  |
| healthyAgeYoungerCount | Integer | 健康年龄 偏小 |  |
| healthyAgeUnknownCount | Integer | 健康年龄 未知 |  |
| healthRisksSportsCount | Integer | 健康风险 运动 |  |
| healthRisksSleepPressureCount | Integer | 健康风险 睡眠 |  |
| healthRisksWeightCount | Integer | 健康风险 体重 |  |
| healthRisksDietCount | Integer | 健康风险 膳食 |  |
| healthRisksBloodPressureCount | Integer | 健康风险 血压 |  |
| healthRisksBloodSugarCount | Integer | 健康风险 血糖 |  |
| healthyLifeIndexGoodCount | Integer | 健康生活指数 良好 |  |
| healthyLifeIndexPassCount | Integer | 健康生活指数 及格 |  |
| healthyLifeIndexFailCount | Integer | 健康生活指数 不及格 |  |
| healthyLifeIndexUnknownCount | Integer | 健康生活指数 未知 |  |

如无相关模块,忽略相应字段
```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "ageUnderThirtyCount": 1,
        "ageThirtyToFiftyCount": 22,
        "ageOverFiftyCount": 33,
        "sexBoyCount": 44,
        "setGirlCount": 55,
        "healthyAgeNormalCount": 66,
        "healthyAgeOlderCount": 77,
        "healthyAgeYoungerCount": 88,
        "healthyAgeUnknownCount": 225,
        "healthRisksSportsCount": 999,
        "healthRisksSleepPressureCount": 77,
        "healthRisksWeightCount": 32,
        "healthRisksDietCount": 333,
        "healthRisksBloodPressureCount": 11,
        "healthRisksBloodSugarCount": 66,
        "healthyLifeIndexGoodCount": 32,
        "healthyLifeIndexPassCount": 333,
        "healthyLifeIndexFailCount": 11,
        "healthyLifeIndexUnknownCount": 66
    }
}
```
<a name="bmU6Y"></a>
## 2. 查询顾问会员活跃数据统计人数
URL：域名 +  /api/family/v1.0/counselorData/getCustomerActiveStatisticsData<br />类型：GET
<a name="oWURY"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |

<a name="svki0"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| activeTodayCount | Integer | 今日活跃人数 |  |
| moreThanYesterdayCount | Integer | 今日活跃比昨日增加人数 | 可以为负数 |
| activeSevenDayCount | Integer | 忠实会员人数 活跃7天 |  |
| activeNotSevenDayCount | Integer | 沉默会员 7天没有活跃 |  |



```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "activeTodayCount": 3,
        "moreThanYesterdayCount": 2,
        "activeSevenDayCount": 1,
        "activeNotSevenDayCount": 1
    }
}
```
<a name="a2aa3"></a>
## 3. 查询顾问关联会员活跃数据某个维度
URL：域名 +  /api/family/v1.0/counselorData/queryCustomerActiveData<br />类型：GET
<a name="xMrrV"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| pageNum | Integer | 页码 | 必传 |
| pageSize | Integer | 每页数量 | 必传 |
| activeType | String | 活跃数据类型 | active_today  今日活跃<br />active_seven_day 忠实会员<br />active_not_seven_day 沉默会员 |

<a name="uYXdd"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| lastActiveDt | String | 最后一次活跃时间 xxxx-xx-xx |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data":  [
      {
            "customerId": 40,
            "customerName": "..名称..",
            "sex": 1,
            "customerImage": "https://wx.qlogo.",
            "lastActiveDt": "2020-07-22"
        },
        {
            "customerId": 41,
            "sex": 2,
            "customerName": "..名称..",
            "customerImage": "https://wx.qlogo.cn/mmopen",
            "lastActiveDt":  "2020-07-22"
        }
      
    ]
}
```
<a name="xmGwB"></a>
## ​<br />

