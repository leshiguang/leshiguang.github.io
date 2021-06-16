<a name="XS3wZ"></a>
# 1.用户体重数据


<a name="Ily58"></a>
## 1.1 用户体重数据变更
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uWeightChangeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **weightId** | data | String | 体重记录id |

2）推送数据样例样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uWeightChangeE",
  "pushStatus": 1,
  "data": {
    "weightId": "00a4ec4328444ab9bcaa7e1ce49dec12"
  }
}
```
<a name="sj3kj"></a>
## 1.2 用户体重数据删除
| eventKey | **eventPush** |
| --- | --- |
| dataTypeKey | **uWeightDeleteE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方（data参数解释） |
| **recordIds** | data | List<String> | 删除的体重记录id |

2）推送数据样例样例
```json
{
  "dataTypeKey": "eventPush",
  "eventKey": "uWeightDeleteE",
  "pushStatus": 1,
  "data": {
    "recordIds": [
      "00a4ec4328444ab9bcaa7e1ce49dec12",
      "011403cdb4d44681a01438725b5bf565"
    ]
  }
}
```
<a name="AuAdo"></a>
# 2.用户睡眠数据
待补充
<a name="ceXyh"></a>
# 3.用户血压数据
待补充
<a name="J53Gw"></a>
# 4.用户血糖数据

