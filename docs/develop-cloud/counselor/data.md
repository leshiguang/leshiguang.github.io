<a name="AjE1G"></a>
## 1. 查询顾问会员的概览统计信息
URL：域名 +  /api/family/v1.0/counselorData/getMemberManagementStatistics<br />类型：GET
<a name="fLMEq"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |

<a name="qqcVO"></a>
##### 出参
| 字段 | 类型 | 描述 |
| --- | --- | --- |
| customerNum | Integer | 顾问累计会员数量 |
| healthRiskNum | Integer | 健康风险人数 |
| activeTodayCustomerNum | Integer | 今日活跃会员数量 |
| settlementAmount | String | 待结算金额(元) |

如无相关模块,忽略相应字段
```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "customerNum": 22,
        "healthRiskNum": 10,
        "settlementAmount": "0.00",
        "activeTodayCustomerNum": 9
    }
}
```
<a name="afhLq"></a>
## 2. 查询顾问下会员相关健康数据统计人数
URL：域名 +  /api/family/v1.0/counselorData/getCustomerHealthStatisticsData<br />类型：GET
<a name="byjE1"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |

<a name="j0qxD"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| weightUpCount | Integer | 体重明显上升人数 |  |
| weightContinuousUpCount | Integer | 体重连续上升人数 |  |
| weightTodayNotUploadCount | Integer | 体重今日未记录人数 |  |
| weightSevenDayNotUploadCount | Integer | 体重连续7天未记录人数 |  |
| dietBeyondCount | Integer | 膳食今日热量超标人数 |  |
| dietTodayNotUploadCount | Integer | 膳食今日未记录人数 |  |
| dietSevenDayNotUploadCount | Integer | 膳食连续7天未记录人数 |  |
| sleepLevelPoorCount | Integer | 睡眠等级差人数 |  |
| sleepLevelGeneralCount | Integer | 睡眠等级中人数 |  |
| sleepTodayNotUploadCount | Integer | 睡眠昨晚未记录人数 |  |
| sleepScoreLowerCount | Integer | 睡眠昨晚质量变差人数 |  |
| bloodPressureAbnormalCount | Integer | 血压今日数据异常人数 |  |
| bloodPressureTodayNotUploadCount | Integer | 血压今日未记录人数 |  |
| bloodPressureSevenDayNotUploadCount | Integer | 血压连续7天未记录人数 |  |
| bloodSugarAbnormalCount | Integer | 血糖今日数据异常人数 |  |
| bloodSugarTodayNotUploadCount | Integer | 血糖今日未记录人数 |  |
| bloodSugarSevenDayNotUploadCount | Integer | 血糖连续7天未记录人数 |  |

如无相关模块,忽略相应字段
```java
{
    "code": 200,
    "msg": "成功",
    "data": {
      	"weightUpCount": 0,
        "weightContinuousUpCount": 0,
        "weightTodayNotUploadCount": 2,
        "weightSevenDayNotUploadCount": 1,
        "dietBeyondCount": 0,
        "dietTodayNotUploadCount": 2,
        "dietSevenDayNotUploadCount": 2
        "sleepLevelPoorCount": 0,
        "sleepLevelGeneralCount": 0,
        "sleepTodayNotUploadCount": 2,
        "sleepScoreLowerCount": 0,
        "bloodPressureAbnormalCount": 0,
        "bloodPressureTodayNotUploadCount": 2,
        "bloodPressureSevenDayNotUploadCount": 2,
        "bloodSugarAbnormalCount": 0,
        "bloodSugarTodayNotUploadCount": 2,
        "bloodSugarSevenDayNotUploadCount": 2,

    }
}
```
<a name="JGPT6"></a>
## 3. 查询顾问下某个维度健康会员列表
URL：域名 +  /api/family/v1.0/counselorData/queryCustomerHealthData<br />类型：GET
<a name="zmT8f"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| pageNum | Integer | 页码 | 必传 |
| pageSize | Integer | 每页数量 | 必传 |
| healthType | String | 健康数据类型 | 必传 |
| problemType | String | 具体问题类型 | 必传 |

查询具体模块<br />**查询体重**

| healthType | problemType | 描述 |
| --- | --- | --- |
| weight

 | weight_up | 体重明显上升 |
|  | weight_continuous_up | 体重连续上升 |
|  | weight_today_not_upload | 体重今日未上传 |
|  | weight_seven_day_not_upload | 体重7日未上传 |

<a name="RbqKH"></a>
##### 体重出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| weightUpKg | BigDecimal | 体重明显上升kg |  |
| weightContinuousUpKg | BigDecimal | 体重连续上升kg |  |
| weightKg | weightKg | 当前体重kg |  |
| weightUpdateTime | Long | 体重最后一次更新时间 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        //体重
        {
            "customerId": 40,
            "customerName": "..test..",
             "sex": 1,
            "customerImage": "https://wx.qlogo.cn/mmopen",
            "weightUpKg": 2.00,
            "weightContinuousUpKg": 1.00,
            "weightKg": 22.00,
            "weightUpdateTime": 1594903489000
        },
      
```
**查询睡眠**

| healthType | problemType | 描述 |
| --- | --- | --- |
| sleep

 | sleep_level_poor | 睡眠等级差 |
|  | sleep_level_general | 睡眠等级中 |
|  | sleep_today_not_upload | 睡眠今日未上传 |
|  | sleep_score_lower | 睡眠分比上次低 |

<a name="oeoQX"></a>
##### 睡眠出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| sleepLevel | Integer | 当前睡眠等级 |  |
| sleepLevelDesc | String | 当前睡眠等级描述 |  |
| sleepUpdateTime | Long | 睡眠最后一次更新时间 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        //睡眠
         {
            "customerId": 40,
            "customerName": "..test..",
              "sex": 1,
            "customerImage": "https://wx.qlogo.cn/mmopen",
            "sleepLevel": 3,
            "sleepLevelDesc": "中",
            "sleepUpdateTime": 1594212411000
        }
```
**查询饮食**

| healthType | problemType | 描述 |
| --- | --- | --- |
| diet

 | diet_today_beyond | 饮食今日超标 |
|  | diet_today_not_record | 饮食今日未记录 |
|  | diet_seven_day_not_record | 饮食连续7日未记录 |

<a name="m7SUZ"></a>
##### 饮食出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| lastDietTime | Long | 膳食最后一次更新时间 |  |
| labelList | List<String> | 标签集合 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        //饮食
         {
            "customerId": 23342312,
            "customerName": "..test..",
            "sex": 1,
            "customerImage": "https://thirdwx.qlogo.cn/mmopen",
            "lastDietTime": 1609171200000,
               "labelList": [
                "早餐超标",	
                "午餐超标",
                "晚餐超标"
            ]
        }
    ]
}
```
**查询血压**

| healthType | problemType | 描述 |
| --- | --- | --- |
| blood_pressure

 | blood_pressure_today_abnormal | 血压今日异常 |
|  | blood_pressure_today_not_record | 血压今日未记录 |
|  | blood_pressure_seven_day_not_record | 血压连续7日未记录 |

<a name="g1vPo"></a>
##### 血压出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| lastBloodPressureTime | Long | 血压最后一次更新时间 |  |
| labelList | List<String> | 标签集合 |  |



```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        //血压
        {
            "customerId": 23342312,
            "customerName": "..test..",
            "sex": 1,
            "customerImage": "https://thirdwx.qlogo.cn/mmopen",
            "lastBloodPressureTime": 1610436360000,
             "labelList": [
                "收缩压波动异常",
                "舒张压波动异常"
            ]
        }
    ]
}
```
**查询血糖**

| healthType | problemType | 描述 |
| --- | --- | --- |
| blood_sugar

 | blood_sugar_today_abnormal | 血糖今日异常 |
|  | blood_sugar_today_not_record | 血糖今日未记录 |
|  | blood_sugar_seven_day_not_record | 血糖连续7日未记录 |

<a name="PvecG"></a>
##### 血糖出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| customerId | Long | 会员id |  |
| customerName | String | 会员备注名 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| customerImage | String | 会员头像 |  |
| lastBloodSugarTime | Long | 血糖最后一次更新时间 |  |
| labelList | List<String> | 标签集合 |  |



```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        //血糖
        {
            "customerId": 23342312,
            "customerName": "..test..",
            "sex": 1,
            "customerImage": "https://thirdwx.qlogo.cn/mmopen",
            "lastBloodSugarTime": 1612465500000,
            "labelList": [
                "凌晨血糖异常",
                "餐前血糖异常",
                "餐后血糖异常",
                "睡前血糖异常"
            ]
        }
      
    ]
}
```

