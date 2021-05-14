<a name="cbaWm"></a>
## 1. 查询顾问会员基本信息
URL：域名 +  /api/family/v1.0/counselorData/getCustomerInfo<br />类型：GET
<a name="SmMC4"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerUserId | Long | 会员id | 必传 |

<a name="Dz7Pg"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| headUrl | String | 头像 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| birthday | Long | 生日 时间戳 |  |
| customerName | Integer | 会员备注名 |  |
| userName | String | 昵称 |  |
| phoneNumber | String | 手机号 |  |
| bindingTime | Long | 绑定时间  时间戳 |  |
| cardId | String | 卡号 某些租户才有 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "headUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erz0B5K4T0e7nM6oiaFvs5ccyeeoRuDAvwdqxcIAZWuiaJzltMbK3wbSicCouastVTibORiaptfiaYu2OibA/132",
        "sex": 1,
        "birthday": 658166400000,
        "customerName": "会员备注",
        "wechatNickname": "微信昵称",
        "phoneNumber": "17301891632",
        "bindingTime":"1611212527000"
    }
}
```
<a name="RKfvy"></a>
## 2. 会员详情页查询会员 体重数据
URL：域名 +  /api/family/v1.0/customerData/getCustomerDetailWeightDataV2<br />类型：GET
<a name="Pf1LE"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerId | Long | 会员id | 必传 |

<a name="CcZGv"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| counselorAuth | Boolean | 是否授权顾问查询 |  |
| dataAnalyzeText | String | 数据解读文案 |  |
| recommendProductList | List<[ProductInfo](qac6er#yyUNB)> | 推荐商品 |  |
| weight | String | 体重 |  |
| pbf | String | 脂肪率 |  |
| muscle | String | 肌肉量 |  |
| bmi | String | bmi |  |
| measurementDate | Long | 测量日期 时间戳 |  |
| weightStatus | Integer | 体重箭头  -1-下降 0-没变 1-上升 |  |
| pbfStatus | Integer | 脂肪率箭头  -1-下降 0-没变 1-上升 |  |

<a name="zKRGN"></a>
##### 参数ProdcutInfo
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| itemId | Long | 商品id |  |
| title | String | 商品名 |  |
| price | String | 价格 |  |
| picUrl | String | 图片路径 |  |
| sellPoint | String | 商品卖点 |  |
| sellPointLabelList | List<String> | 推荐标签list |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "counselorAuth": false,  
        "dataAnalyzeText": "该会员连续76天未上传体重数据了。",  
        "lastCustomerWeightDTO": {
            "measurementDate": 1605671472000,
            "weight": "60.0",
            "pbf": "0",
            "muscle": "0",
            "bmi":"21.7",
            "weightStatus": -1,
            "pbfStatus":1
        },
          "recommendProductList": [
            {
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货",
                "sellPointLabelList":["标签1","标签2"]
            },
            {
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货"
            }
        ]
        
    }
}
```
<a name="bhvFE"></a>
## 3. 会员详情页查询会员 睡眠数据
URL：域名 +  /api/family/v1.0/customerData/getCustomerDetailSleepDataV2<br />类型：GET
<a name="HiI5Y"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerId | Long | 会员id | 必传 |

<a name="aXiWX"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| counselorAuth | Boolean | 是否授权顾问查询 |  |
| dataAnalyzeText | String | 数据解读文案 |  |
| recommendProductList | List<[ProductInfo](qac6er#yyUNB)> | 推荐商品 |  |
| sleepTotalDuration | Integer | 睡眠总时长(分钟) |  |
| sleepScore | Integer | 睡眠得分 |  |
| sleepLevel | String | 睡眠等级 1:优 2:良 3:中 4:差 |  |
| belongDay | String | 属于哪一天(年-月-日) 时间戳 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "counselorAuth": true,
        "dataAnalyzeText": "睡眠规律性还可以，略微调整下会更好。该会员昨晚的入睡时间为01:05，太晚了，作为早起星人，一定要在24点前入睡哦～尽量避免连续3个晚上睡眠不足，周末也要规律睡眠，避免熬夜。",
        "lastCustomerSleepDTO": {
            "sleepTotalDuration": 450,
            "sleepScore": 88,
            "sleepLevel": 2,
            "belongDay": 1605542400000
        },
          "recommendProductList": [
            {
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货"
            },
			{
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货",
                "sellPointLabelList":["标签1","标签2"]
            }
        ]
    }
}
```
<a name="RfegH"></a>
## 4. 会员详情页查询会员 运动数据
URL：域名 +  /api/family/v1.0/customerData/getCustomerDetailStepDataV2<br />类型：GET
<a name="wXjER"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerId | Long | 会员id | 必传 |

<a name="CPAGc"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| counselorAuth | Boolean | 是否授权顾问查询 |  |
| dataAnalyzeText | String | 数据解读文案 |  |
| recommendProductList | List<[ProductInfo](qac6er#yyUNB)> | 推荐商品 |  |
| measurementDate | Long | 测量时间 时间戳 |  |
| step | Integer | 步数 |  |
| calories | BigDecimal | 卡路里 |  |
| distance | BigDecimal | 距离 米 |  |
| stepKM | BigDecimal | 距离 千米 |  |
| updateTime | Long | 更新时间 时间戳 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "counselorAuth": true, 
        "dataAnalyzeText": "该会员连续27天未上传运动数据了。最新一笔步数未达标。",
        "lastCustomerStepDTO":{
                "measurementDate": 1605024000000,
                "step": 3068,
                "calories": 81.61,
                "distance": 2330.00,
            	"stepKM":2.3,
                "updateTime": 1605086674912
         },
          "recommendProductList": [
            {
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货"
            },
			{
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货",
                "sellPointLabelList":["标签1","标签2"]
            }
        ]
       
           
    }
}
```
<a name="C02pV"></a>
## 5. 会员详情页查询会员 血压数据
URL：域名 +  /api/family/v1.0/customerData/getCustomerBloodPressureDataV2<br />类型：GET
<a name="F8AHp"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerId | Long | 会员id | 必传 |

<a name="gtfgx"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| counselorAuth | Boolean | 是否授权顾问查询 |  |
| dataAnalyzeText | String | 数据解读文案 |  |
| recommendProductList | List<[ProductInfo](qac6er#yyUNB)> | 推荐商品 |  |
| measurementDate | Long | 测量时间 时间戳 |  |
| systolicPressure | Integer | 收缩压（高压） |  |
| diastolicPressure | Integer | 舒张压（低压） |  |
| heartRate | Integer | 心率 |  |
| unusual | Boolean | 是否异常 |  |
| year | Integer | 年 |  |
| month | Integer | 月 |  |
| day | Integer | 日 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "counselorAuth": false,
       	 "dataAnalyzeText": "该会员连续35天未上传血压数据了，快去提醒会员测量血压吧！",
         "lastCustomerBloodPressureDTO": {
            "measurementDate": 1609209776000,
            "systolicPressure": 90,
            "diastolicPressure": 60,
            "heartRate": 80,
            "unusual":false,
            "year": 2020,
            "month": 12,
            "day": 29
        },
          "recommendProductList": [
            {
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货",
                "sellPointLabelList":["标签1","标签2"]
            },
			{
                "itemId": 203380005029,
                "title": "乐心手环5sPlus（测试商品，购买不发货）",
                "picUrl": "https://sports-qa-files.lifesense.com/erp/20201203/95777480c1cd4d7f981917775a75e60f.png",
                "sellPoint": "测试商品，购买不发货"
            }
        ]

}
```
<a name="Z0sOk"></a>
## 6. 会员详情页查询会员 血糖数据
URL：域名 +  /api/family/v1.0/customerData/getCustomerBloodSugarData<br />类型：GET
<a name="rPBYM"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerId | Long | 会员id | 必传 |

<a name="ska7H"></a>
##### 出参:
**BloodSugarData**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| glucoseConcentration | Double | 血糖浓度 |  |
| status | Integer | 0-偏低  1-达标  2-偏高 |  |




| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| counselorAuth | Boolean | 是否授权顾问查询 |  |
| dataAnalyzeText | String | 数据解读文案 |  |
| recommendProductList | List<[ProductInfo](qac6er#yyUNB)> | 推荐商品 |  |
| measurementDate | Long | 测量时间 时间戳 |  |
| weeHours | BloodSugarData | 凌晨 |  |
| beforeBreakfast | BloodSugarData | 早餐前 |  |
| afterBreakfast | BloodSugarData | 早餐后 |  |
| beforeLunch | BloodSugarData | 午餐前 |  |
| afterLunch | BloodSugarData | 午餐后 |  |
| beforeDinner | BloodSugarData | 晚餐前 |  |
| afterDinner | BloodSugarData | 晚餐后 |  |
| beforeBed | BloodSugarData | 睡前 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "counselorAuth": false,
       	 "dataAnalyzeText": "该会员连续35天未上传血压数据了，快去提醒会员测量血压吧！",
         "lastDayBloodSugarDTO": {
            "measurementDate": 1610403480000,
            "beforeBreakfast": {
                "glucoseConcentration": 6.1,
                "status": 1
            },
            "afterBreakfast": {
                "glucoseConcentration": 6.1,
                "status": 1
            },
            "afterLunch": {
                "glucoseConcentration": 6.1,
                "status": 1
            },
            "afterDinner": {
                "glucoseConcentration": 6.1,
                "status": 1
            },
            "beforeBed": {
                "glucoseConcentration": 6.1,
                "status": 1
            }
        },
        "needCallBloodSugar": false,
         "recommendProductList": [
            {
                "itemId": 201200005008,
                "title": "测试商品（风险标签）",
                "picUrl": "https://sports-qa-files.lifesense.com/other/20200429/67361740a9cb48a38ad1a79195018695.png",
                "sellPoint": "好吃又便宜"
            },
             {
                "itemId": 201200005008,
                "title": "测试商品（风险标签）",
                "picUrl": "https://sports-qa-files.lifesense.com/other/20200429/67361740a9cb48a38ad1a79195018695.png",
                "sellPoint": "好吃又便宜",
                 "sellPointLabelList":["标签1","标签2"]
            }
        ]

}
```
<a name="sTetB"></a>
## 7. 会员详情页查询会员 饮食数据
URL：域名 +  /api/family/v1.0/customerData/getCustomerDietData<br />类型：GET
<a name="JVPvH"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| customerId | Long | 会员id | 必传 |

<a name="MUqEx"></a>
##### 出参:
**DietData**

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| calories | BigDecimal | 卡路里 |  |
| exceedStandard | boolean | 是否超标 |  |




| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| counselorAuth | Boolean | 是否授权顾问查询 |  |
| dataAnalyzeText | String | 数据解读文案 |  |
| recommendProductList | List<[ProductInfo](qac6er#yyUNB)> | 推荐商品 |  |
| belongDate | Long | 测量时间 时间戳 |  |
| breakfast | DietData | 早餐 |  |
| lunch | DietData | 午餐 |  |
| dinner | DietData | 晚餐 |  |
| lightFastFlag | Boolean | 轻断食标记 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "counselorAuth": false,
       	 "dataAnalyzeText": "该会员连续35天未上传血压数据了，快去提醒会员测量血压吧！",
         "lastDayDietDTO": {
            "lightFastFlag":true
            "belongDate": 1609171200000,
            "breakfast": {
                "calories": 190,
                "exceedStandard": false
            },
            "lunch": {
                "calories": 349,
                "exceedStandard": false
            },
            "dinner": {
                "calories": 338,
                "exceedStandard": false
            }
        }
        "recommendProductList": [
            {
                "itemId": 201200005008,
                "title": "测试商品（风险标签）",
                "picUrl": "https://sports-qa-files.lifesense.com/other/20200429/67361740a9cb48a38ad1a79195018695.png",
                "sellPoint": "好吃又便宜",
                "sellPointLabelList":["标签1","标签2"]
            },
             {
                "itemId": 201200005008,
                "title": "测试商品（风险标签）",
                "picUrl": "https://sports-qa-files.lifesense.com/other/20200429/67361740a9cb48a38ad1a79195018695.png",
                "sellPoint": "好吃又便宜"
            }
        ]

}
```
<a name="xY7HQ"></a>
## 

