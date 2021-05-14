<a name="zve3v"></a>
## 1. 会员风险标签归类数据
URL：域名 +  /api/family/v1.0/counselorData/getALlRiskLabel<br />类型：GET
<a name="oJqQk"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |

<a name="MmfOk"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label | Map<String, Integer> | 标签    新版使用     <br />String 标签,Integer 标签code | ​<br /> |
| weight | Map<String, Integer> | 体重标签  旧版使用 |  |
| sleep | Map<String, Integer> | 睡眠标签  旧版使用 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": {
       "label": {
                "体重风险": 0,
                "膳食风险": 5,
                "睡眠/压力风险": 1,
                "血糖风险": 4,
                "血压风险": 3,
                "运动风险": 2
        },
        "weight": {
            "入睡困难": 2,
            "睡眠质量差": 3
        },
        "sleep": {
            "肥胖": 0,
            "瘦": 1
        }
    }
}
```
<a name="H6qtG"></a>
## 2. 会员列表筛选
URL：域名 +  /api/family/v1.0/counselorData/listCustomerData<br />类型：GET
<a name="CZcdx"></a>
##### URL入参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 顾问的关联账号id | 标识对接用户，双方约定字段 |
| pageNum | Integer | 页码 | 必传 |
| pageSize | Integer | 每页数量 | 必传 |
| condition | String | 名称或手机号模糊查询 | ​<br /> |
| tagCodes | List<Integer> | 筛选的标签code | ​<br /> |
| sortType | 排序类型 | 排序类型<br />* 关联时间  associate_time<br />* 风险标签数量 risk_label_num<br />* 订单数量 order_num<br />* 成交金额 total_pay_amount |  |

<a name="V41SK"></a>
##### 出参:
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| userId | Long | 会员id |  |
| headUrl | String | 头像 |  |
| sex | Integer | 性别 男=1；女=2 |  |
| tags | List<String> | 会员各项标签 |  |
| orderNum | Integer | 下单量 |  |
| tradeAmount | String | 成交金额 |  |

```java
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "userId": 40,
            "headUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLFicpLxq2EgkKyveGO0AMWFBc9bwXHjkibTSCUUKHd9a5JJjBSLBSK0D5x6STeYMt7UFOHVu0sveBA/132",
            "customerName": "..test..",
            "tags": [
                "睡眠不足","肥胖"
            ],
            "orderNum": 1,
            "tradeAmount": "0.03"
        },
           {
            "userId": 40,
            "headUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLFicpLxq2EgkKyveGO0AMWFBc9bwXHjkibTSCUUKHd9a5JJjBSLBSK0D5x6STeYMt7UFOHVu0sveBA/132",
            "customerName": "..test..",
            "tags": [
                "瘦"
            ],
            "orderNum": 1,
            "tradeAmount": "0.03"
        }
    ]
}
```
<a name="QWUYN"></a>
## 

