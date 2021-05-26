<a name="ffQML"></a>
## 1. 累计增加用户数&活跃数&浏览量
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 标签值 |  |
| label_position | int | 显示的第一行 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "columnPosition": null,
        "label_desc": "累计用户数概览",
        "label_explain": null,
        "label_level": null,
        "label_position": 1,
        "label_value": 1006418,
        "orderField": 1,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "周同比",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "1.75%",
        "orderField": 21,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "日环比",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "0.24%",
        "orderField": 22,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "昨日新增累计添加用户数",
        "label_explain": null,
        "label_level": null,
        "label_position": 3,
        "label_value": 2433,
        "orderField": 31,
        "rowPosition": null
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="VlQaY"></a>
## 2、会员基础画像
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| floor_list_data | List | ​<br /> |  |
| graph_list_data | List | ​<br /> |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "floor_list_data": [
      {
        "label_desc": "男",
        "label_level": "1",
        "label_value": 618020
      },
      {
        "label_desc": "女",
        "label_level": "2",
        "label_value": 358956
      },
      {
        "label_desc": "未知",
        "label_level": "unknow",
        "label_value": 29442
      }
    ],
    "graph_list_data": [
      {
        "label_desc": "0-17岁",
        "label_level": "0-17",
        "label_value": 35783
      },
      {
        "label_desc": "18-24岁",
        "label_level": "18-24",
        "label_value": 194717
      },
      {
        "label_desc": "25-29岁",
        "label_level": "25-29",
        "label_value": 201168
      },
      {
        "label_desc": "30-39岁",
        "label_level": "30-39",
        "label_value": 332062
      },
      {
        "label_desc": "40-49岁",
        "label_level": "40-49",
        "label_value": 120615
      },
      {
        "label_desc": "50-100岁",
        "label_level": "50-100",
        "label_value": 90755
      },
      {
        "label_level": "unknow",
        "label_value": 31318
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="NWu4A"></a>
## 3、会员分区统计
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
|  |  | ​<br /> |  |
|  |  | ​<br /> |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "北京市",
        "label_level": "110000",
        "label_value": 33006
      },
      {
        "label_desc": "天津市",
        "label_level": "120000",
        "label_value": 11000
      },
      {
        "label_desc": "河北省",
        "label_level": "130000",
        "label_value": 37852
      },
      {
        "label_desc": "山西省",
        "label_level": "140000",
        "label_value": 17856
      },
      {
        "label_desc": "内蒙古自治区",
        "label_level": "150000",
        "label_value": 12366
      },
      {
        "label_desc": "辽宁省",
        "label_level": "210000",
        "label_value": 22780
      },
      {
        "label_desc": "吉林省",
        "label_level": "220000",
        "label_value": 9851
      },
      {
        "label_desc": "黑龙江省",
        "label_level": "230000",
        "label_value": 12328
      },
      {
        "label_desc": "上海市",
        "label_level": "310000",
        "label_value": 26121
      },
      {
        "label_desc": "江苏省",
        "label_level": "320000",
        "label_value": 55199
      },
      {
        "label_desc": "浙江省",
        "label_level": "330000",
        "label_value": 41153
      },
      {
        "label_desc": "安徽省",
        "label_level": "340000",
        "label_value": 22398
      },
      {
        "label_desc": "福建省",
        "label_level": "350000",
        "label_value": 22487
      },
      {
        "label_desc": "江西省",
        "label_level": "360000",
        "label_value": 13514
      },
      {
        "label_desc": "山东省",
        "label_level": "370000",
        "label_value": 54686
      },
      {
        "label_desc": "河南省",
        "label_level": "410000",
        "label_value": 45290
      },
      {
        "label_desc": "湖北省",
        "label_level": "420000",
        "label_value": 23312
      },
      {
        "label_desc": "湖南省",
        "label_level": "430000",
        "label_value": 19650
      },
      {
        "label_desc": "广东省",
        "label_level": "440000",
        "label_value": 89937
      },
      {
        "label_desc": "广西壮族自治区",
        "label_level": "450000",
        "label_value": 15090
      },
      {
        "label_desc": "海南省",
        "label_level": "460000",
        "label_value": 3231
      },
      {
        "label_desc": "重庆市",
        "label_level": "500000",
        "label_value": 12418
      },
      {
        "label_desc": "四川省",
        "label_level": "510000",
        "label_value": 27572
      },
      {
        "label_desc": "贵州省",
        "label_level": "520000",
        "label_value": 8300
      },
      {
        "label_desc": "云南省",
        "label_level": "530000",
        "label_value": 13908
      },
      {
        "label_desc": "西藏自治区",
        "label_level": "540000",
        "label_value": 750
      },
      {
        "label_desc": "陕西省",
        "label_level": "610000",
        "label_value": 23330
      },
      {
        "label_desc": "甘肃省",
        "label_level": "620000",
        "label_value": 8210
      },
      {
        "label_desc": "青海省",
        "label_level": "630000",
        "label_value": 1829
      },
      {
        "label_desc": "宁夏回族自治区",
        "label_level": "640000",
        "label_value": 3378
      },
      {
        "label_desc": "新疆维吾尔自治区",
        "label_level": "650000",
        "label_value": 10736
      },
      {
        "label_desc": "台湾省",
        "label_level": "710000",
        "label_value": 310
      },
      {
        "label_desc": "香港特别行政区",
        "label_level": "810000",
        "label_value": 585
      },
      {
        "label_desc": "澳门特别行政区",
        "label_level": "820000",
        "label_value": 486
      },
      {
        "label_desc": "未知地区",
        "label_level": "unknow",
        "label_value": 305499
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="CWSd7"></a>
## 4、会员数据趋势
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| time | String | 筛选条件 | time的值可以为day，week，month |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_first | int | y轴的值 |  |
| label_second | int | y轴的值 |  |
| time | String | 时间 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_first": 3510,
        "label_second": 13871,
        "time": "2021-02-24"
      },
      {
        "label_first": 3179,
        "label_second": 11828,
        "time": "2021-02-25"
      },
      {
        "label_first": 2943,
        "label_second": 11060,
        "time": "2021-02-26"
      },
      {
        "label_first": 3236,
        "label_second": 11382,
        "time": "2021-02-27"
      },
      {
        "label_first": 3509,
        "label_second": 12123,
        "time": "2021-02-28"
      },
      {
        "label_first": 3378,
        "label_second": 12873,
        "time": "2021-03-01"
      },
      {
        "label_first": 3552,
        "label_second": 15207,
        "time": "2021-03-02"
      },
      {
        "label_first": 3432,
        "label_second": 15088,
        "time": "2021-03-03"
      },
      {
        "label_first": 3386,
        "label_second": 14784,
        "time": "2021-03-04"
      },
      {
        "label_first": 3145,
        "label_second": 14174,
        "time": "2021-03-05"
      },
      {
        "label_first": 4217,
        "label_second": 16020,
        "time": "2021-03-06"
      },
      {
        "label_first": 3708,
        "label_second": 14971,
        "time": "2021-03-07"
      },
      {
        "label_first": 3409,
        "label_second": 14924,
        "time": "2021-03-08"
      },
      {
        "label_first": 6729,
        "label_second": 21684,
        "time": "2021-03-09"
      },
      {
        "label_first": 3700,
        "label_second": 16947,
        "time": "2021-03-10"
      },
      {
        "label_first": 4747,
        "label_second": 20687,
        "time": "2021-03-11"
      },
      {
        "label_first": 3948,
        "label_second": 17883,
        "time": "2021-03-12"
      },
      {
        "label_first": 3637,
        "label_second": 16252,
        "time": "2021-03-13"
      },
      {
        "label_first": 4021,
        "label_second": 16720,
        "time": "2021-03-14"
      },
      {
        "label_first": 3720,
        "label_second": 16984,
        "time": "2021-03-15"
      },
      {
        "label_first": 3086,
        "label_second": 15506,
        "time": "2021-03-16"
      },
      {
        "label_first": 2386,
        "label_second": 13831,
        "time": "2021-03-17"
      },
      {
        "label_first": 3052,
        "label_second": 16138,
        "time": "2021-03-18"
      },
      {
        "label_first": 2458,
        "label_second": 14027,
        "time": "2021-03-19"
      },
      {
        "label_first": 2376,
        "label_second": 13078,
        "time": "2021-03-20"
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="Ew5fl"></a>
## 5、会员健康概览-风险分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 风险标签 |  |
| label_value | Object | 标签值 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "运动不足",
        "label_level": "1",
        "label_value": 65950
      },
      {
        "label_desc": "睡眠风险",
        "label_level": "2",
        "label_value": 28325
      },
      {
        "label_desc": "体重风险",
        "label_level": "3",
        "label_value": 44221
      },
      {
        "label_desc": "膳食风险",
        "label_level": "4",
        "label_value": 31330
      },
      {
        "label_desc": "烟酒习惯",
        "label_level": "5",
        "label_value": 6743
      },
      {
        "label_desc": "三高风险",
        "label_level": "6",
        "label_value": 7096
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="svQ3a"></a>
## 6、会员健康概览-年龄分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 标签值 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "正常",
        "label_level": "1",
        "label_value": 5762
      },
      {
        "label_desc": "偏大",
        "label_level": "2",
        "label_value": 41068
      },
      {
        "label_desc": "偏小",
        "label_level": "3",
        "label_value": 44062
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="VikW5"></a>
## 7、体重-BMI分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | BMI对应人数 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "偏瘦",
        "label_level": 0,
        "label_value": 338230
      },
      {
        "label_desc": "理想",
        "label_level": 1,
        "label_value": 1720669
      },
      {
        "label_desc": "偏高",
        "label_level": 2,
        "label_value": 628684
      },
      {
        "label_desc": "超高",
        "label_level": 3,
        "label_value": 281052
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="spqDX"></a>
## 8、体重-风险分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 风险对应人数 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "基础代谢偏低",
        "label_level": "4-1",
        "label_value": 140406
      },
      {
        "label_desc": "肌肉量偏低",
        "label_level": "3-1",
        "label_value": 385285
      },
      {
        "label_desc": "中心型肥胖",
        "label_level": "2-1",
        "label_value": 47074
      },
      {
        "label_desc": "消瘦",
        "label_level": "1-1",
        "label_value": 403440
      },
      {
        "label_desc": "超重/肥胖",
        "label_level": "1-0",
        "label_value": 1007539
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="HcOnz"></a>
## 9、睡眠-睡眠分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 睡眠标签对应人数 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "睡眠质量优",
        "label_level": 1,
        "label_value": 167309
      },
      {
        "label_desc": "睡眠质量良",
        "label_level": 2,
        "label_value": 301566
      },
      {
        "label_desc": "睡眠质量中",
        "label_level": 3,
        "label_value": 559659
      },
      {
        "label_desc": "睡眠质量差",
        "label_level": 4,
        "label_value": 293027
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="RNNFE"></a>
## 10、睡眠-风险分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 睡眠风险对应人数 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "熬夜人群",
        "label_level": "3-1",
        "label_value": 98578
      },
      {
        "label_desc": "睡眠略微不足",
        "label_level": "1-1",
        "label_value": 308379
      },
      {
        "label_desc": "睡眠严重不足",
        "label_level": "1-3",
        "label_value": 340272
      },
      {
        "label_desc": "入睡困难",
        "label_level": "2-1",
        "label_value": 13
      },
      {
        "label_desc": "睡眠不足",
        "label_level": "1-2",
        "label_value": 201359
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="P9ne1"></a>
## 11、血压-血压分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 血压人群人数分布 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "高血压",
        "label_level": 0,
        "label_value": 29177
      },
      {
        "label_desc": "血压正常",
        "label_level": 1,
        "label_value": 34788
      },
      {
        "label_desc": "正常高值",
        "label_level": 2,
        "label_value": 35874
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="BL7vH"></a>
## 12、血压-血压风险分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 血压风险人数分布 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "正常",
        "label_level": 2,
        "label_value": 34788
      },
      {
        "label_desc": "正常高值",
        "label_level": 3,
        "label_value": 35874
      },
      {
        "label_desc": "一级高血压",
        "label_level": 4,
        "label_value": 11095
      },
      {
        "label_desc": "二级高血压",
        "label_level": 5,
        "label_value": 4381
      },
      {
        "label_desc": "三级高血压",
        "label_level": 6,
        "label_value": 1592
      },
      {
        "label_desc": "单纯收缩期高血压",
        "label_level": 7,
        "label_value": 12109
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="rzyZh"></a>
## 13、步数-消耗卡路里分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 对应消耗的卡路里人数分布 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "500大卡以上",
        "label_level": 1,
        "label_value": 72520
      },
      {
        "label_desc": "350-500大卡",
        "label_level": 2,
        "label_value": 31123
      },
      {
        "label_desc": "200-350大卡",
        "label_level": 3,
        "label_value": 63960
      },
      {
        "label_desc": "200大卡以下",
        "label_level": 4,
        "label_value": 348434
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="A3CTz"></a>
## 14、步数-步数分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 步数人数分布 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "15000步以上",
        "label_level": 1,
        "label_value": 57398
      },
      {
        "label_desc": "10000-15000步",
        "label_level": 2,
        "label_value": 52720
      },
      {
        "label_desc": "8000-10000步",
        "label_level": 3,
        "label_value": 33946
      },
      {
        "label_desc": "6000-8000步",
        "label_level": 4,
        "label_value": 43992
      },
      {
        "label_desc": "6000步以下",
        "label_level": 5,
        "label_value": 327981
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="wtQD6"></a>
## 15、血糖-糖尿病患者分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 糖尿病患者人数 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "未知",
        "label_level": 0,
        "label_value": 45
      },
      {
        "label_desc": "60岁以上老年糖尿病患者",
        "label_level": 1,
        "label_value": 547
      },
      {
        "label_desc": "60岁以下糖尿病患者",
        "label_level": 2,
        "label_value": 2134
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="CyKg9"></a>
## 16、血糖-血糖风险分布
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签名称 |  |
| label_value | Object | 血糖人数分布 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "严重低血糖",
        "label_level": 0,
        "label_value": 16
      },
      {
        "label_desc": "血糖达标",
        "label_level": 1,
        "label_value": 2257
      },
      {
        "label_desc": "血糖偏低",
        "label_level": 2,
        "label_value": 44
      },
      {
        "label_desc": "血糖偏高",
        "label_level": 3,
        "label_value": 390
      },
      {
        "label_desc": "严重高血糖",
        "label_level": 4,
        "label_value": 19
      }
    ]
  },
  "msg": null,
  "status": true
}
```
​

​<br />

