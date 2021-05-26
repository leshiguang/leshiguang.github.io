<a name="YkZx5"></a>
## 1、访问留存数据
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| global_time | String | 筛选条件 | global_time的值可以为day，natureWeek，natureMonth,last7Days,last30Days |
| day或natureWeek或natureMonth或last7Days或last30Days | String |  | global_time的值作为key，value对应日期 |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签描述 |  |
| label_value | Object | 标签的值 |  |
| label_explain | String | 标签介绍 |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "columnPosition": null,
        "label_desc": "访客数",
        "label_explain": "统计时间内，小程序所有页面被访问的去重人数，一个人在统计时间范围内访问多次只记为一个；",
        "label_level": null,
        "label_position": 1,
        "label_value": 16165,
        "orderField": 1,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "较前一日",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "0.2%",
        "orderField": 1,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "较前一日",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "1.3%",
        "orderField": 2,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "新访客数",
        "label_explain": "在统计时间内的小程序访客中，此前从未访问过小程序的为新访客。若所选时间超过1天，某访客可能第一次为新访客，之后为老访客；",
        "label_level": null,
        "label_position": 1,
        "label_value": 2433,
        "orderField": 2,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "浏览量",
        "label_explain": "统计时间内，小程序所有页面被访问的次数，一个人在统计时间内访问多次记为多次；",
        "label_level": null,
        "label_position": 1,
        "label_value": 205774,
        "orderField": 3,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "较前一日",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "1.4%",
        "orderField": 3,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "较前一日",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "2.6%",
        "orderField": 4,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "平均停留时长(秒)",
        "label_explain": "统计时间内，小程序所有访客停留时长总和/访客数。若所选时间超过1天，访客数跨天去重；",
        "label_level": null,
        "label_position": 1,
        "label_value": 144.23,
        "orderField": 4,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "人均访问量",
        "label_explain": "浏览量/访客数。多天的人均浏览量统计逻辑与单日相同，访客数跨天去重；",
        "label_level": null,
        "label_position": 1,
        "label_value": 12.73,
        "orderField": 5,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "较前一日",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "1.1%",
        "orderField": 5,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "较前一日",
        "label_explain": null,
        "label_level": null,
        "label_position": 2,
        "label_value": "0%",
        "orderField": 6,
        "rowPosition": null
      },
      {
        "columnPosition": null,
        "label_desc": "跳失率",
        "label_explain": "统计时间内，只访问了一个页面就离开小程序的访客数/小程序总访客数。若所选时间超过1天，访客数跨天去重；",
        "label_level": null,
        "label_position": 1,
        "label_value": 0.06,
        "orderField": 6,
        "rowPosition": null
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="EgsUc"></a>
## 2、流量趋势
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| global_time | String | 筛选条件 | global_time的值可以为day，natureWeek，natureMonth,last7Days,last30Days |
| day或natureWeek或natureMonth或last7Days或last30Days | String |  | global_time的值作为key，value对应日期 |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| first_line | Object | y轴的值,访客数 |  |
| second_line | Object | y轴的值，新访客数 |  |
| third_line | Object | y轴的值，浏览量 |  |
| four_line | Object | y轴的值，平均停留时长（秒） |  |
| five_line | Object | y轴的值，人均访问量 |  |
| six_line | Object | y轴的值，跳失率 |  |
| time | String | 时间 |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "first_line": 15315,
        "five_line": 13.14,
        "four_line": 146.15,
        "second_line": 2609,
        "six_line": 6.12,
        "third_line": 201270,
        "time": "2021-05-10"
      },
      {
        "first_line": 15497,
        "five_line": 13.84,
        "four_line": 153.69,
        "second_line": 2667,
        "six_line": 6.32,
        "third_line": 214432,
        "time": "2021-05-11"
      },
      {
        "first_line": 15951,
        "five_line": 13.73,
        "four_line": 152.57,
        "second_line": 2675,
        "six_line": 6.01,
        "third_line": 219080,
        "time": "2021-05-12"
      },
      {
        "first_line": 18839,
        "five_line": 12.71,
        "four_line": 143.42,
        "second_line": 3478,
        "six_line": 8.28,
        "third_line": 239408,
        "time": "2021-05-13"
      },
      {
        "first_line": 16411,
        "five_line": 12.66,
        "four_line": 145.12,
        "second_line": 2608,
        "six_line": 7.59,
        "third_line": 207683,
        "time": "2021-05-14"
      },
      {
        "first_line": 15329,
        "five_line": 13.32,
        "four_line": 148.22,
        "second_line": 2680,
        "six_line": 6.37,
        "third_line": 204115,
        "time": "2021-05-15"
      },
      {
        "first_line": 15702,
        "five_line": 13.46,
        "four_line": 151.25,
        "second_line": 2835,
        "six_line": 6.70,
        "third_line": 211402,
        "time": "2021-05-16"
      },
      {
        "first_line": 15708,
        "five_line": 13.20,
        "four_line": 146.05,
        "second_line": 2521,
        "six_line": 6.42,
        "third_line": 207402,
        "time": "2021-05-17"
      },
      {
        "first_line": 15965,
        "five_line": 13.20,
        "four_line": 146.13,
        "second_line": 2551,
        "six_line": 5.99,
        "third_line": 210745,
        "time": "2021-05-18"
      },
      {
        "first_line": 16089,
        "five_line": 13.49,
        "four_line": 151.69,
        "second_line": 2606,
        "six_line": 5.82,
        "third_line": 216990,
        "time": "2021-05-19"
      },
      {
        "first_line": 16752,
        "five_line": 12.44,
        "four_line": 142.74,
        "second_line": 2451,
        "six_line": 6.45,
        "third_line": 208336,
        "time": "2021-05-20"
      },
      {
        "first_line": 16422,
        "five_line": 12.25,
        "four_line": 140.27,
        "second_line": 2349,
        "six_line": 6.31,
        "third_line": 201239,
        "time": "2021-05-21"
      },
      {
        "first_line": 16496,
        "five_line": 12.24,
        "four_line": 139.11,
        "second_line": 2497,
        "six_line": 6.10,
        "third_line": 201978,
        "time": "2021-05-22"
      },
      {
        "first_line": 16501,
        "five_line": 12.67,
        "four_line": 142.52,
        "second_line": 2597,
        "six_line": 5.70,
        "third_line": 209059,
        "time": "2021-05-23"
      },
      {
        "first_line": 16125,
        "five_line": 12.59,
        "four_line": 140.53,
        "second_line": 2402,
        "six_line": 6.28,
        "third_line": 202988,
        "time": "2021-05-24"
      },
      {
        "first_line": 16165,
        "five_line": 12.73,
        "four_line": 144.23,
        "second_line": 2433,
        "six_line": 6.22,
        "third_line": 205774,
        "time": "2021-05-25"
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="rnQkj"></a>
## 3、微页面分析
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| global_time | String | 筛选条件 | global_time的值可以为day，natureWeek，natureMonth,last7Days,last30Days |
| day或natureWeek或natureMonth或last7Days或last30Days | String |  | global_time的值作为key，value对应日期 |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "firstValue": 14550,
        "fourValue": 16.14,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 1,
        "secondValue": 56.99,
        "step": 1,
        "thirdValue": 10.83
      },
      {
        "firstValue": 7079,
        "fourValue": 1.53,
        "page_id": "139",
        "page_name": "h5登录中转页面",
        "position": 2,
        "secondValue": 27.72,
        "step": 1,
        "thirdValue": 1.14
      },
      {
        "firstValue": 1613,
        "fourValue": 16.80,
        "page_id": "304",
        "page_name": "步数赛首页",
        "position": 3,
        "secondValue": 6.32,
        "step": 1,
        "thirdValue": 7.84
      },
      {
        "firstValue": 403,
        "fourValue": 63.28,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 4,
        "secondValue": 1.58,
        "step": 1,
        "thirdValue": 8.67
      },
      {
        "firstValue": 303,
        "fourValue": 35.97,
        "page_id": "283",
        "page_name": "体重首页v3",
        "position": 5,
        "secondValue": 1.19,
        "step": 1,
        "thirdValue": 6.41
      },
      {
        "firstValue": 176,
        "fourValue": 38.07,
        "page_id": "246",
        "page_name": "个人中心",
        "position": 6,
        "secondValue": 0.69,
        "step": 1,
        "thirdValue": 7.40
      },
      {
        "firstValue": 1409,
        "fourValue": 27.61,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 5.52,
        "step": 1,
        "thirdValue": 20.38
      },
      {
        "firstValue": 4579,
        "fourValue": 48.96,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 1,
        "secondValue": 20.83,
        "step": 2,
        "thirdValue": 19.30
      },
      {
        "firstValue": 2261,
        "fourValue": 25.79,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 2,
        "secondValue": 10.28,
        "step": 2,
        "thirdValue": 8.72
      },
      {
        "firstValue": 2255,
        "fourValue": 4.92,
        "page_id": "283",
        "page_name": "体重首页v3",
        "position": 3,
        "secondValue": 10.26,
        "step": 2,
        "thirdValue": 11.60
      },
      {
        "firstValue": 1846,
        "fourValue": 9.37,
        "page_id": "246",
        "page_name": "个人中心",
        "position": 4,
        "secondValue": 8.40,
        "step": 2,
        "thirdValue": 9.30
      },
      {
        "firstValue": 1696,
        "fourValue": 7.13,
        "page_id": "117",
        "page_name": "步数首页",
        "position": 5,
        "secondValue": 7.71,
        "step": 2,
        "thirdValue": 12.73
      },
      {
        "firstValue": 1422,
        "fourValue": 14.42,
        "page_id": "8",
        "page_name": "历史数据列表页",
        "position": 6,
        "secondValue": 6.47,
        "step": 2,
        "thirdValue": 13.09
      },
      {
        "firstValue": 7927,
        "fourValue": 9.26,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 36.05,
        "step": 2,
        "thirdValue": 12.46
      },
      {
        "firstValue": 6110,
        "fourValue": 25.63,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 1,
        "secondValue": 34.29,
        "step": 3,
        "thirdValue": 5.87
      },
      {
        "firstValue": 1215,
        "fourValue": 24.53,
        "page_id": "8",
        "page_name": "历史数据列表页",
        "position": 2,
        "secondValue": 6.82,
        "step": 3,
        "thirdValue": 9.94
      },
      {
        "firstValue": 1142,
        "fourValue": 0.44,
        "page_id": "139",
        "page_name": "h5登录中转页面",
        "position": 3,
        "secondValue": 6.41,
        "step": 3,
        "thirdValue": 0.71
      },
      {
        "firstValue": 830,
        "fourValue": 35.54,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 4,
        "secondValue": 4.66,
        "step": 3,
        "thirdValue": 21.10
      },
      {
        "firstValue": 717,
        "fourValue": 34.17,
        "page_id": "304",
        "page_name": "步数赛首页",
        "position": 5,
        "secondValue": 4.02,
        "step": 3,
        "thirdValue": 3.70
      },
      {
        "firstValue": 501,
        "fourValue": 2.20,
        "page_id": "114",
        "page_name": "设备详情页",
        "position": 6,
        "secondValue": 2.81,
        "step": 3,
        "thirdValue": 11.28
      },
      {
        "firstValue": 7302,
        "fourValue": 6.96,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 40.98,
        "step": 3,
        "thirdValue": 17.01
      },
      {
        "firstValue": 2543,
        "fourValue": 21.00,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 1,
        "secondValue": 17.08,
        "step": 4,
        "thirdValue": 8.16
      },
      {
        "firstValue": 1774,
        "fourValue": 7.95,
        "page_id": "283",
        "page_name": "体重首页v3",
        "position": 2,
        "secondValue": 11.91,
        "step": 4,
        "thirdValue": 12.15
      },
      {
        "firstValue": 1427,
        "fourValue": 37.63,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 3,
        "secondValue": 9.58,
        "step": 4,
        "thirdValue": 15.35
      },
      {
        "firstValue": 1270,
        "fourValue": 13.07,
        "page_id": "246",
        "page_name": "个人中心",
        "position": 4,
        "secondValue": 8.53,
        "step": 4,
        "thirdValue": 6.77
      },
      {
        "firstValue": 751,
        "fourValue": 22.37,
        "page_id": "8",
        "page_name": "历史数据列表页",
        "position": 5,
        "secondValue": 5.04,
        "step": 4,
        "thirdValue": 10.26
      },
      {
        "firstValue": 646,
        "fourValue": 4.95,
        "page_id": "117",
        "page_name": "步数首页",
        "position": 6,
        "secondValue": 4.34,
        "step": 4,
        "thirdValue": 10.26
      },
      {
        "firstValue": 6478,
        "fourValue": 7.05,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 43.51,
        "step": 4,
        "thirdValue": 13.14
      },
      {
        "firstValue": 3506,
        "fourValue": 27.67,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 1,
        "secondValue": 27.28,
        "step": 5,
        "thirdValue": 5.66
      },
      {
        "firstValue": 943,
        "fourValue": 10.39,
        "page_id": "283",
        "page_name": "体重首页v3",
        "position": 2,
        "secondValue": 7.34,
        "step": 5,
        "thirdValue": 11.77
      },
      {
        "firstValue": 662,
        "fourValue": 12.99,
        "page_id": "8",
        "page_name": "历史数据列表页",
        "position": 3,
        "secondValue": 5.15,
        "step": 5,
        "thirdValue": 11.18
      },
      {
        "firstValue": 595,
        "fourValue": 26.22,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 4,
        "secondValue": 4.63,
        "step": 5,
        "thirdValue": 16.89
      },
      {
        "firstValue": 535,
        "fourValue": 13.08,
        "page_id": "246",
        "page_name": "个人中心",
        "position": 5,
        "secondValue": 4.16,
        "step": 5,
        "thirdValue": 7.14
      },
      {
        "firstValue": 498,
        "fourValue": 0.20,
        "page_id": "139",
        "page_name": "h5登录中转页面",
        "position": 6,
        "secondValue": 3.87,
        "step": 5,
        "thirdValue": 0.57
      },
      {
        "firstValue": 6115,
        "fourValue": 6.43,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 47.57,
        "step": 5,
        "thirdValue": 17.82
      },
      {
        "firstValue": 2174,
        "fourValue": 23.41,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 1,
        "secondValue": 19.62,
        "step": 6,
        "thirdValue": 7.06
      },
      {
        "firstValue": 1275,
        "fourValue": 8.78,
        "page_id": "283",
        "page_name": "体重首页v3",
        "position": 2,
        "secondValue": 11.51,
        "step": 6,
        "thirdValue": 10.97
      },
      {
        "firstValue": 953,
        "fourValue": 8.81,
        "page_id": "246",
        "page_name": "个人中心",
        "position": 3,
        "secondValue": 8.60,
        "step": 6,
        "thirdValue": 6.44
      },
      {
        "firstValue": 858,
        "fourValue": 29.37,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 4,
        "secondValue": 7.74,
        "step": 6,
        "thirdValue": 18.67
      },
      {
        "firstValue": 526,
        "fourValue": 13.31,
        "page_id": "8",
        "page_name": "历史数据列表页",
        "position": 5,
        "secondValue": 4.75,
        "step": 6,
        "thirdValue": 13.98
      },
      {
        "firstValue": 364,
        "fourValue": 8.24,
        "page_id": "264",
        "page_name": "新版睡眠首页",
        "position": 6,
        "secondValue": 3.29,
        "step": 6,
        "thirdValue": 10.60
      },
      {
        "firstValue": 4930,
        "fourValue": 7.40,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 44.49,
        "step": 6,
        "thirdValue": 14.71
      },
      {
        "firstValue": 2389,
        "fourValue": 26.79,
        "page_id": "69",
        "page_name": "小程序首页",
        "position": 1,
        "secondValue": 24.74,
        "step": 7,
        "thirdValue": 6.55
      },
      {
        "firstValue": 836,
        "fourValue": 8.49,
        "page_id": "283",
        "page_name": "体重首页v3",
        "position": 2,
        "secondValue": 8.66,
        "step": 7,
        "thirdValue": 11.31
      },
      {
        "firstValue": 546,
        "fourValue": 10.26,
        "page_id": "246",
        "page_name": "个人中心",
        "position": 3,
        "secondValue": 5.65,
        "step": 7,
        "thirdValue": 6.39
      },
      {
        "firstValue": 437,
        "fourValue": 13.27,
        "page_id": "8",
        "page_name": "历史数据列表页",
        "position": 4,
        "secondValue": 4.52,
        "step": 7,
        "thirdValue": 11.09
      },
      {
        "firstValue": 432,
        "fourValue": 21.76,
        "page_id": "28",
        "page_name": "体重详情页",
        "position": 5,
        "secondValue": 4.47,
        "step": 7,
        "thirdValue": 20.15
      },
      {
        "firstValue": 299,
        "fourValue": 1.34,
        "page_id": "114",
        "page_name": "设备详情页",
        "position": 6,
        "secondValue": 3.10,
        "step": 7,
        "thirdValue": 8.63
      },
      {
        "firstValue": 4719,
        "fourValue": 6.89,
        "page_id": "other",
        "page_name": "other",
        "position": 7,
        "secondValue": 48.86,
        "step": 7,
        "thirdValue": 15.51
      }
    ],
    "graph_list_relation_data": [
      {
        "firstValue": 108,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 2,
        "from_step": 1,
        "secondValue": 1.53
      },
      {
        "firstValue": 1081,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 2,
        "from_step": 1,
        "secondValue": 15.27,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 1375,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 2,
        "from_step": 1,
        "secondValue": 19.42,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 6,
        "to_step": 2
      },
      {
        "firstValue": 20,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 2,
        "from_step": 1,
        "secondValue": 0.28,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 4495,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 2,
        "from_step": 1,
        "secondValue": 63.50,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 1,
        "to_step": 2
      },
      {
        "firstValue": 45,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 6,
        "from_step": 1,
        "secondValue": 25.57,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 67,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 6,
        "from_step": 1,
        "secondValue": 38.07
      },
      {
        "firstValue": 47,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 6,
        "from_step": 1,
        "secondValue": 26.70,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 17,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 6,
        "from_step": 1,
        "secondValue": 9.66,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 4,
        "to_step": 2
      },
      {
        "firstValue": 255,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 1,
        "secondValue": 63.28
      },
      {
        "firstValue": 50,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 1,
        "secondValue": 12.41,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 1,
        "to_step": 2
      },
      {
        "firstValue": 9,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 1,
        "secondValue": 2.23,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 38,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 1,
        "secondValue": 9.43,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 12,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 1,
        "secondValue": 2.98,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 6,
        "to_step": 2
      },
      {
        "firstValue": 39,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 1,
        "secondValue": 9.68,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 3,
        "to_step": 2
      },
      {
        "firstValue": 39,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 5,
        "from_step": 1,
        "secondValue": 12.87,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 3,
        "to_step": 2
      },
      {
        "firstValue": 14,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 5,
        "from_step": 1,
        "secondValue": 4.62,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 6,
        "to_step": 2
      },
      {
        "firstValue": 50,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 5,
        "from_step": 1,
        "secondValue": 16.50,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 109,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 5,
        "from_step": 1,
        "secondValue": 35.97
      },
      {
        "firstValue": 16,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 5,
        "from_step": 1,
        "secondValue": 5.28,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 1,
        "to_step": 2
      },
      {
        "firstValue": 75,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 5,
        "from_step": 1,
        "secondValue": 24.75,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 1157,
        "from_page_id": "304",
        "from_page_name": "步数赛首页",
        "from_position": 3,
        "from_step": 1,
        "secondValue": 71.73,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 185,
        "from_page_id": "304",
        "from_page_name": "步数赛首页",
        "from_position": 3,
        "from_step": 1,
        "secondValue": 11.47,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 271,
        "from_page_id": "304",
        "from_page_name": "步数赛首页",
        "from_position": 3,
        "from_step": 1,
        "secondValue": 16.80
      },
      {
        "firstValue": 2096,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 14.41,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 3,
        "to_step": 2
      },
      {
        "firstValue": 1,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 0.01,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 1,
        "to_step": 2
      },
      {
        "firstValue": 2348,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 16.14
      },
      {
        "firstValue": 1599,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 10.99,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 5061,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 34.78,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 1688,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 11.60,
        "to_page_id": "117",
        "to_page_name": "步数首页",
        "to_position": 5,
        "to_step": 2
      },
      {
        "firstValue": 1757,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 1,
        "secondValue": 12.08,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 4,
        "to_step": 2
      },
      {
        "firstValue": 495,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 35.13,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 2
      },
      {
        "firstValue": 389,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 27.61
      },
      {
        "firstValue": 17,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 1.21,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 1,
        "to_step": 2
      },
      {
        "firstValue": 326,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 23.14,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 2,
        "to_step": 2
      },
      {
        "firstValue": 81,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 5.75,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 3,
        "to_step": 2
      },
      {
        "firstValue": 72,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 5.11,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 4,
        "to_step": 2
      },
      {
        "firstValue": 8,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 0.57,
        "to_page_id": "117",
        "to_page_name": "步数首页",
        "to_position": 5,
        "to_step": 2
      },
      {
        "firstValue": 21,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 1,
        "secondValue": 1.49,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 6,
        "to_step": 2
      },
      {
        "firstValue": 121,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 5,
        "from_step": 2,
        "secondValue": 7.13
      },
      {
        "firstValue": 77,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 5,
        "from_step": 2,
        "secondValue": 4.54,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 2,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 5,
        "from_step": 2,
        "secondValue": 0.12,
        "to_page_id": "304",
        "to_page_name": "步数赛首页",
        "to_position": 5,
        "to_step": 3
      },
      {
        "firstValue": 1,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 5,
        "from_step": 2,
        "secondValue": 0.06,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 1495,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 5,
        "from_step": 2,
        "secondValue": 88.15,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 618,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 2,
        "secondValue": 33.48,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 486,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 2,
        "secondValue": 26.33,
        "to_page_id": "114",
        "to_page_name": "设备详情页",
        "to_position": 6,
        "to_step": 3
      },
      {
        "firstValue": 1,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 2,
        "secondValue": 0.05,
        "to_page_id": "304",
        "to_page_name": "步数赛首页",
        "to_position": 5,
        "to_step": 3
      },
      {
        "firstValue": 5,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 2,
        "secondValue": 0.27,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 563,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 2,
        "secondValue": 30.50,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 173,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 2,
        "secondValue": 9.37
      },
      {
        "firstValue": 2242,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 48.96
      },
      {
        "firstValue": 669,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 14.61,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 4,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 0.09,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 2,
        "to_step": 3
      },
      {
        "firstValue": 916,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 20.00,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 357,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 7.80,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 3
      },
      {
        "firstValue": 1,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 0.02,
        "to_page_id": "304",
        "to_page_name": "步数赛首页",
        "to_position": 5,
        "to_step": 3
      },
      {
        "firstValue": 390,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 1,
        "from_step": 2,
        "secondValue": 8.52,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 334,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 3,
        "from_step": 2,
        "secondValue": 14.81,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 3
      },
      {
        "firstValue": 6,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 3,
        "from_step": 2,
        "secondValue": 0.27,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 282,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 3,
        "from_step": 2,
        "secondValue": 12.51,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 2,
        "to_step": 3
      },
      {
        "firstValue": 1144,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 3,
        "from_step": 2,
        "secondValue": 50.73,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 378,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 3,
        "from_step": 2,
        "secondValue": 16.76,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 111,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 3,
        "from_step": 2,
        "secondValue": 4.92
      },
      {
        "firstValue": 1216,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 2,
        "from_step": 2,
        "secondValue": 53.78,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 32,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 2,
        "from_step": 2,
        "secondValue": 1.42,
        "to_page_id": "304",
        "to_page_name": "步数赛首页",
        "to_position": 5,
        "to_step": 3
      },
      {
        "firstValue": 25,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 2,
        "from_step": 2,
        "secondValue": 1.11,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 405,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 2,
        "from_step": 2,
        "secondValue": 17.91,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 583,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 2,
        "from_step": 2,
        "secondValue": 25.79
      },
      {
        "firstValue": 123,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 6,
        "from_step": 2,
        "secondValue": 8.65,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 205,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 6,
        "from_step": 2,
        "secondValue": 14.42
      },
      {
        "firstValue": 124,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 6,
        "from_step": 2,
        "secondValue": 8.72,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 883,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 6,
        "from_step": 2,
        "secondValue": 62.10,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 2,
        "to_step": 3
      },
      {
        "firstValue": 31,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 6,
        "from_step": 2,
        "secondValue": 2.18,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 3
      },
      {
        "firstValue": 56,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 6,
        "from_step": 2,
        "secondValue": 3.94,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 734,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 9.26
      },
      {
        "firstValue": 2476,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 31.24,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 3
      },
      {
        "firstValue": 46,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 0.58,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 2,
        "to_step": 3
      },
      {
        "firstValue": 66,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 0.83,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 3,
        "to_step": 3
      },
      {
        "firstValue": 108,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 1.36,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 3
      },
      {
        "firstValue": 681,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 8.59,
        "to_page_id": "304",
        "to_page_name": "步数赛首页",
        "to_position": 5,
        "to_step": 3
      },
      {
        "firstValue": 15,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 0.19,
        "to_page_id": "114",
        "to_page_name": "设备详情页",
        "to_position": 6,
        "to_step": 3
      },
      {
        "firstValue": 3801,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 2,
        "secondValue": 47.95,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 3
      },
      {
        "firstValue": 149,
        "from_page_id": "114",
        "from_page_name": "设备详情页",
        "from_position": 6,
        "from_step": 3,
        "secondValue": 29.74,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 328,
        "from_page_id": "114",
        "from_page_name": "设备详情页",
        "from_position": 6,
        "from_step": 3,
        "secondValue": 65.47,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 4,
        "to_step": 4
      },
      {
        "firstValue": 13,
        "from_page_id": "114",
        "from_page_name": "设备详情页",
        "from_position": 6,
        "from_step": 3,
        "secondValue": 2.59,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 11,
        "from_page_id": "114",
        "from_page_name": "设备详情页",
        "from_position": 6,
        "from_step": 3,
        "secondValue": 2.20
      },
      {
        "firstValue": 5,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 3,
        "from_step": 3,
        "secondValue": 0.44
      },
      {
        "firstValue": 67,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 3,
        "from_step": 3,
        "secondValue": 5.87,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 157,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 3,
        "from_step": 3,
        "secondValue": 13.75,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 4
      },
      {
        "firstValue": 910,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 3,
        "from_step": 3,
        "secondValue": 79.68,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 3,
        "to_step": 4
      },
      {
        "firstValue": 3,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 3,
        "from_step": 3,
        "secondValue": 0.26,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 52,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 3,
        "secondValue": 6.27,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 295,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 3,
        "secondValue": 35.54
      },
      {
        "firstValue": 238,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 3,
        "secondValue": 28.67,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 4
      },
      {
        "firstValue": 91,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 3,
        "secondValue": 10.96,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 3,
        "to_step": 4
      },
      {
        "firstValue": 23,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 3,
        "secondValue": 2.77,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 4
      },
      {
        "firstValue": 131,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 3,
        "secondValue": 15.78,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 113,
        "from_page_id": "304",
        "from_page_name": "步数赛首页",
        "from_position": 5,
        "from_step": 3,
        "secondValue": 15.76,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 359,
        "from_page_id": "304",
        "from_page_name": "步数赛首页",
        "from_position": 5,
        "from_step": 3,
        "secondValue": 50.07,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 245,
        "from_page_id": "304",
        "from_page_name": "步数赛首页",
        "from_position": 5,
        "from_step": 3,
        "secondValue": 34.17
      },
      {
        "firstValue": 1883,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 30.82,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 611,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 10.00,
        "to_page_id": "117",
        "to_page_name": "步数首页",
        "to_position": 6,
        "to_step": 4
      },
      {
        "firstValue": 1566,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 25.63
      },
      {
        "firstValue": 1,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 0.02,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 4
      },
      {
        "firstValue": 661,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 10.82,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 805,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 13.18,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 4
      },
      {
        "firstValue": 583,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 3,
        "secondValue": 9.54,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 4,
        "to_step": 4
      },
      {
        "firstValue": 179,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 2,
        "from_step": 3,
        "secondValue": 14.73,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 298,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 2,
        "from_step": 3,
        "secondValue": 24.53
      },
      {
        "firstValue": 55,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 2,
        "from_step": 3,
        "secondValue": 4.53,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 3,
        "to_step": 4
      },
      {
        "firstValue": 410,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 2,
        "from_step": 3,
        "secondValue": 33.74,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 4
      },
      {
        "firstValue": 192,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 2,
        "from_step": 3,
        "secondValue": 15.80,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 81,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 2,
        "from_step": 3,
        "secondValue": 6.67,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 4
      },
      {
        "firstValue": 508,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 6.96
      },
      {
        "firstValue": 1522,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 20.84,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 4
      },
      {
        "firstValue": 650,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 8.90,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 4
      },
      {
        "firstValue": 371,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 5.08,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 3,
        "to_step": 4
      },
      {
        "firstValue": 359,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 4.92,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 4,
        "to_step": 4
      },
      {
        "firstValue": 160,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 2.19,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 4
      },
      {
        "firstValue": 35,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 0.48,
        "to_page_id": "117",
        "to_page_name": "步数首页",
        "to_position": 6,
        "to_step": 4
      },
      {
        "firstValue": 3697,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 3,
        "secondValue": 50.63,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 4
      },
      {
        "firstValue": 40,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 6,
        "from_step": 4,
        "secondValue": 6.19,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 574,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 6,
        "from_step": 4,
        "secondValue": 88.85,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 32,
        "from_page_id": "117",
        "from_page_name": "步数首页",
        "from_position": 6,
        "from_step": 4,
        "secondValue": 4.95
      },
      {
        "firstValue": 643,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 4,
        "secondValue": 50.63,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 5,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 4,
        "secondValue": 0.39,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 6,
        "to_step": 5
      },
      {
        "firstValue": 64,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 4,
        "secondValue": 5.04,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 5,
        "to_step": 5
      },
      {
        "firstValue": 392,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 4,
        "secondValue": 30.87,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 166,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 4,
        "from_step": 4,
        "secondValue": 13.07
      },
      {
        "firstValue": 102,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 7.15,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 5
      },
      {
        "firstValue": 537,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 37.63
      },
      {
        "firstValue": 207,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 14.51,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 52,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 3.64,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 5
      },
      {
        "firstValue": 44,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 3.08,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 3,
        "to_step": 5
      },
      {
        "firstValue": 357,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 25.02,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 6,
        "to_step": 5
      },
      {
        "firstValue": 128,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 3,
        "from_step": 4,
        "secondValue": 8.97,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 450,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 25.37,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 170,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 9.58,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 3,
        "to_step": 5
      },
      {
        "firstValue": 238,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 13.42,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 5
      },
      {
        "firstValue": 63,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 3.55,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 5
      },
      {
        "firstValue": 5,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 0.28,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 6,
        "to_step": 5
      },
      {
        "firstValue": 707,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 39.85,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 141,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 4,
        "secondValue": 7.95
      },
      {
        "firstValue": 534,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 4,
        "secondValue": 21.00
      },
      {
        "firstValue": 1174,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 4,
        "secondValue": 46.17,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 23,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 4,
        "secondValue": 0.90,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 6,
        "to_step": 5
      },
      {
        "firstValue": 237,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 4,
        "secondValue": 9.32,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 5,
        "to_step": 5
      },
      {
        "firstValue": 256,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 4,
        "secondValue": 10.07,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 5
      },
      {
        "firstValue": 319,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 4,
        "secondValue": 12.54,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 216,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 28.76,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 3,
        "to_step": 5
      },
      {
        "firstValue": 57,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 7.59,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 5
      },
      {
        "firstValue": 73,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 9.72,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 6,
        "to_step": 5
      },
      {
        "firstValue": 52,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 6.92,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 168,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 22.37
      },
      {
        "firstValue": 61,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 8.12,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 124,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 4,
        "secondValue": 16.51,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 5
      },
      {
        "firstValue": 198,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 3.06,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 5
      },
      {
        "firstValue": 3371,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 52.04,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 5
      },
      {
        "firstValue": 35,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 0.54,
        "to_page_id": "139",
        "to_page_name": "h5登录中转页面",
        "to_position": 6,
        "to_step": 5
      },
      {
        "firstValue": 232,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 3.58,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 3,
        "to_step": 5
      },
      {
        "firstValue": 457,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 7.05
      },
      {
        "firstValue": 1503,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 23.20,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 5
      },
      {
        "firstValue": 448,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 6.92,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 5
      },
      {
        "firstValue": 234,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 4,
        "secondValue": 3.61,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 5,
        "to_step": 5
      },
      {
        "firstValue": 95,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 6,
        "from_step": 5,
        "secondValue": 19.08,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 6
      },
      {
        "firstValue": 8,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 6,
        "from_step": 5,
        "secondValue": 1.61,
        "to_page_id": "264",
        "to_page_name": "新版睡眠首页",
        "to_position": 6,
        "to_step": 6
      },
      {
        "firstValue": 17,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 6,
        "from_step": 5,
        "secondValue": 3.41,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 1,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 6,
        "from_step": 5,
        "secondValue": 0.20
      },
      {
        "firstValue": 377,
        "from_page_id": "139",
        "from_page_name": "h5登录中转页面",
        "from_position": 6,
        "from_step": 5,
        "secondValue": 75.70,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 6
      },
      {
        "firstValue": 70,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 5,
        "from_step": 5,
        "secondValue": 13.08
      },
      {
        "firstValue": 284,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 5,
        "from_step": 5,
        "secondValue": 53.08,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 34,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 5,
        "from_step": 5,
        "secondValue": 6.36,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 3,
        "to_step": 6
      },
      {
        "firstValue": 147,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 5,
        "from_step": 5,
        "secondValue": 27.48,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 6
      },
      {
        "firstValue": 35,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 5,
        "secondValue": 5.88,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 6
      },
      {
        "firstValue": 49,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 5,
        "secondValue": 8.24,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 6
      },
      {
        "firstValue": 124,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 5,
        "secondValue": 20.84,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 156,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 5,
        "secondValue": 26.22
      },
      {
        "firstValue": 35,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 5,
        "secondValue": 5.88,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 6
      },
      {
        "firstValue": 196,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 5,
        "secondValue": 32.94,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 6
      },
      {
        "firstValue": 56,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 5,
        "secondValue": 5.94,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 6
      },
      {
        "firstValue": 195,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 5,
        "secondValue": 20.68,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 6
      },
      {
        "firstValue": 98,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 5,
        "secondValue": 10.39
      },
      {
        "firstValue": 298,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 5,
        "secondValue": 31.60,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 73,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 5,
        "secondValue": 7.74,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 6
      },
      {
        "firstValue": 223,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 5,
        "secondValue": 23.65,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 6
      },
      {
        "firstValue": 342,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 5,
        "secondValue": 9.75,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 3,
        "to_step": 6
      },
      {
        "firstValue": 970,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 5,
        "secondValue": 27.67
      },
      {
        "firstValue": 422,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 5,
        "secondValue": 12.04,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 6
      },
      {
        "firstValue": 365,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 5,
        "secondValue": 10.41,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 6
      },
      {
        "firstValue": 159,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 5,
        "secondValue": 4.54,
        "to_page_id": "264",
        "to_page_name": "新版睡眠首页",
        "to_position": 6,
        "to_step": 6
      },
      {
        "firstValue": 1248,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 5,
        "secondValue": 35.60,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 101,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 3,
        "from_step": 5,
        "secondValue": 15.26,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 6
      },
      {
        "firstValue": 198,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 3,
        "from_step": 5,
        "secondValue": 29.91,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 6
      },
      {
        "firstValue": 106,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 3,
        "from_step": 5,
        "secondValue": 16.01,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 6
      },
      {
        "firstValue": 107,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 3,
        "from_step": 5,
        "secondValue": 16.16,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 6
      },
      {
        "firstValue": 86,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 3,
        "from_step": 5,
        "secondValue": 12.99
      },
      {
        "firstValue": 64,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 3,
        "from_step": 5,
        "secondValue": 9.67,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 1268,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 20.74,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 6
      },
      {
        "firstValue": 393,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 6.43
      },
      {
        "firstValue": 552,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 9.03,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 6
      },
      {
        "firstValue": 577,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 9.44,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 3,
        "to_step": 6
      },
      {
        "firstValue": 122,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 2.00,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 4,
        "to_step": 6
      },
      {
        "firstValue": 111,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 1.82,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 5,
        "to_step": 6
      },
      {
        "firstValue": 197,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 3.22,
        "to_page_id": "264",
        "to_page_name": "新版睡眠首页",
        "to_position": 6,
        "to_step": 6
      },
      {
        "firstValue": 2895,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 5,
        "secondValue": 47.34,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 6
      },
      {
        "firstValue": 55,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 6,
        "secondValue": 5.77,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 3,
        "to_step": 7
      },
      {
        "firstValue": 84,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 6,
        "secondValue": 8.81
      },
      {
        "firstValue": 307,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 6,
        "secondValue": 32.21,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 213,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 6,
        "secondValue": 22.35,
        "to_page_id": "114",
        "to_page_name": "设备详情页",
        "to_position": 6,
        "to_step": 7
      },
      {
        "firstValue": 294,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 6,
        "secondValue": 30.85,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 205,
        "from_page_id": "264",
        "from_page_name": "新版睡眠首页",
        "from_position": 6,
        "from_step": 6,
        "secondValue": 56.32,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 129,
        "from_page_id": "264",
        "from_page_name": "新版睡眠首页",
        "from_position": 6,
        "from_step": 6,
        "secondValue": 35.44,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 30,
        "from_page_id": "264",
        "from_page_name": "新版睡眠首页",
        "from_position": 6,
        "from_step": 6,
        "secondValue": 8.24
      },
      {
        "firstValue": 73,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 6,
        "secondValue": 8.51,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 4,
        "to_step": 7
      },
      {
        "firstValue": 56,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 6,
        "secondValue": 6.53,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 5,
        "to_step": 7
      },
      {
        "firstValue": 240,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 6,
        "secondValue": 27.97,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 252,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 6,
        "secondValue": 29.37
      },
      {
        "firstValue": 76,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 6,
        "secondValue": 8.86,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 161,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 4,
        "from_step": 6,
        "secondValue": 18.76,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 7
      },
      {
        "firstValue": 112,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 6,
        "secondValue": 8.78
      },
      {
        "firstValue": 351,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 6,
        "secondValue": 27.53,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 154,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 6,
        "secondValue": 12.08,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 5,
        "to_step": 7
      },
      {
        "firstValue": 476,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 6,
        "secondValue": 37.33,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 129,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 6,
        "secondValue": 10.12,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 4,
        "to_step": 7
      },
      {
        "firstValue": 53,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 6,
        "secondValue": 4.16,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 7
      },
      {
        "firstValue": 1,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 6,
        "secondValue": 0.05,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 5,
        "to_step": 7
      },
      {
        "firstValue": 509,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 6,
        "secondValue": 23.41
      },
      {
        "firstValue": 931,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 6,
        "secondValue": 42.82,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 299,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 6,
        "secondValue": 13.75,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 210,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 6,
        "secondValue": 9.66,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 7
      },
      {
        "firstValue": 224,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 6,
        "secondValue": 10.30,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 3,
        "to_step": 7
      },
      {
        "firstValue": 80,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 6,
        "secondValue": 15.21,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 7
      },
      {
        "firstValue": 70,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 6,
        "secondValue": 13.31,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 5,
        "to_step": 7
      },
      {
        "firstValue": 119,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 6,
        "secondValue": 22.62,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 147,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 6,
        "secondValue": 27.95,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 4,
        "to_step": 7
      },
      {
        "firstValue": 70,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 6,
        "secondValue": 13.31
      },
      {
        "firstValue": 40,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 5,
        "from_step": 6,
        "secondValue": 7.60,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 365,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 7.40
      },
      {
        "firstValue": 1111,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 22.54,
        "to_page_id": "69",
        "to_page_name": "小程序首页",
        "to_position": 1,
        "to_step": 7
      },
      {
        "firstValue": 332,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 6.73,
        "to_page_id": "283",
        "to_page_name": "体重首页v3",
        "to_position": 2,
        "to_step": 7
      },
      {
        "firstValue": 267,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 5.42,
        "to_page_id": "246",
        "to_page_name": "个人中心",
        "to_position": 3,
        "to_step": 7
      },
      {
        "firstValue": 88,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 1.78,
        "to_page_id": "8",
        "to_page_name": "历史数据列表页",
        "to_position": 4,
        "to_step": 7
      },
      {
        "firstValue": 151,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 3.06,
        "to_page_id": "28",
        "to_page_name": "体重详情页",
        "to_position": 5,
        "to_step": 7
      },
      {
        "firstValue": 2530,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 51.32,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 7
      },
      {
        "firstValue": 86,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 6,
        "secondValue": 1.74,
        "to_page_id": "114",
        "to_page_name": "设备详情页",
        "to_position": 6,
        "to_step": 7
      },
      {
        "firstValue": 4,
        "from_page_id": "114",
        "from_page_name": "设备详情页",
        "from_position": 6,
        "from_step": 7,
        "secondValue": 1.34
      },
      {
        "firstValue": 295,
        "from_page_id": "114",
        "from_page_name": "设备详情页",
        "from_position": 6,
        "from_step": 7,
        "secondValue": 98.66,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      },
      {
        "firstValue": 490,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 7,
        "secondValue": 89.74,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      },
      {
        "firstValue": 56,
        "from_page_id": "246",
        "from_page_name": "个人中心",
        "from_position": 3,
        "from_step": 7,
        "secondValue": 10.26
      },
      {
        "firstValue": 338,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 5,
        "from_step": 7,
        "secondValue": 78.24,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      },
      {
        "firstValue": 94,
        "from_page_id": "28",
        "from_page_name": "体重详情页",
        "from_position": 5,
        "from_step": 7,
        "secondValue": 21.76
      },
      {
        "firstValue": 71,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 7,
        "secondValue": 8.49
      },
      {
        "firstValue": 765,
        "from_page_id": "283",
        "from_page_name": "体重首页v3",
        "from_position": 2,
        "from_step": 7,
        "secondValue": 91.51,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      },
      {
        "firstValue": 1749,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 7,
        "secondValue": 73.21,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      },
      {
        "firstValue": 640,
        "from_page_id": "69",
        "from_page_name": "小程序首页",
        "from_position": 1,
        "from_step": 7,
        "secondValue": 26.79
      },
      {
        "firstValue": 58,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 4,
        "from_step": 7,
        "secondValue": 13.27
      },
      {
        "firstValue": 379,
        "from_page_id": "8",
        "from_page_name": "历史数据列表页",
        "from_position": 4,
        "from_step": 7,
        "secondValue": 86.73,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      },
      {
        "firstValue": 325,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 7,
        "secondValue": 6.89
      },
      {
        "firstValue": 4394,
        "from_page_id": "other",
        "from_page_name": "other",
        "from_position": 7,
        "from_step": 7,
        "secondValue": 93.11,
        "to_page_id": "other",
        "to_page_name": "other",
        "to_position": 7,
        "to_step": 8
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="MYxwF"></a>
## 4、顾客浏览路径图
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| global_time | String | 筛选条件 | global_time的值可以为day，natureWeek，natureMonth,last7Days,last30Days |
| day或natureWeek或natureMonth或last7Days或last30Days | String |  | global_time的值作为key，value对应日期 |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "eight_column": 35.03,
        "eleven_column": 71.08,
        "first_column": "小程序首页",
        "five_column": 8709,
        "four_column": 26714,
        "item_id": "69",
        "nine_column": 38,
        "second_column": 51778,
        "seven_column": "14.72%",
        "six_column": 0.7579634464751959,
        "ten_column": 24,
        "third_column": 11490
      },
      {
        "eight_column": 42.46,
        "eleven_column": 23.53,
        "first_column": "体重首页v3",
        "five_column": 3240,
        "four_column": 9787,
        "item_id": "283",
        "nine_column": 0,
        "second_column": 15546,
        "seven_column": "10.65%",
        "six_column": 0.8519589797528268,
        "ten_column": 0,
        "third_column": 3803
      },
      {
        "eight_column": 30.05,
        "eleven_column": 21.51,
        "first_column": "个人中心",
        "five_column": 2338,
        "four_column": 7578,
        "item_id": "246",
        "nine_column": 0,
        "second_column": 15156,
        "seven_column": "32.73%",
        "six_column": 0.6724187517975266,
        "ten_column": 0,
        "third_column": 3477
      },
      {
        "eight_column": 45.65,
        "eleven_column": 32.73,
        "first_column": "体重详情页",
        "five_column": 1236,
        "four_column": 2361,
        "item_id": "28",
        "nine_column": 0,
        "second_column": 13087,
        "seven_column": "65.87%",
        "six_column": 0.2336042336042336,
        "ten_column": 0,
        "third_column": 5291
      },
      {
        "eight_column": 1.69,
        "eleven_column": 38.53,
        "first_column": "h5登录中转页面",
        "five_column": 0,
        "four_column": 0,
        "item_id": "139",
        "nine_column": 11010,
        "second_column": 11130,
        "seven_column": "1.51%",
        "six_column": 0.0,
        "ten_column": 6218,
        "third_column": 6228
      },
      {
        "eight_column": 41.17,
        "eleven_column": 16.00,
        "first_column": "历史数据列表页",
        "five_column": 1715,
        "four_column": 4452,
        "item_id": "8",
        "nine_column": 0,
        "second_column": 8860,
        "seven_column": "26.90%",
        "six_column": 0.6629300347893313,
        "ten_column": 0,
        "third_column": 2587
      },
      {
        "eight_column": 20.39,
        "eleven_column": 6.09,
        "first_column": "旧版小目标首页",
        "five_column": 1,
        "four_column": 1,
        "item_id": "366",
        "nine_column": 0,
        "second_column": 5773,
        "seven_column": "9.86%",
        "six_column": 0.0010162601626016261,
        "ten_column": 0,
        "third_column": 984
      },
      {
        "eight_column": 26.42,
        "eleven_column": 13.47,
        "first_column": "步数首页",
        "five_column": 1,
        "four_column": 1,
        "item_id": "117",
        "nine_column": 0,
        "second_column": 4999,
        "seven_column": "89.21%",
        "six_column": 0.00045934772622875517,
        "ten_column": 0,
        "third_column": 2177
      },
      {
        "eight_column": 29.49,
        "eleven_column": 9.22,
        "first_column": "设备详情页",
        "five_column": 431,
        "four_column": 645,
        "item_id": "114",
        "nine_column": 0,
        "second_column": 4902,
        "seven_column": "56.11%",
        "six_column": 0.28926174496644297,
        "ten_column": 0,
        "third_column": 1490
      },
      {
        "eight_column": 17.01,
        "eleven_column": 9.55,
        "first_column": "步数赛首页",
        "five_column": 0,
        "four_column": 0,
        "item_id": "304",
        "nine_column": 1582,
        "second_column": 4420,
        "seven_column": "19.56%",
        "six_column": 0.0,
        "ten_column": 1017,
        "third_column": 1544
      }
    ],
    "total_number": 279
  },
  "msg": null,
  "status": true
}
```
<a name="D4kWe"></a>
## 5、访问深度
入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| global_time | String | 筛选条件 | global_time的值可以为day，natureWeek，natureMonth,last7Days,last30Days |
| day或natureWeek或natureMonth或last7Days或last30Days | String |  | global_time的值作为key，value对应日期 |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签描述 |  |
| label_value | Object | 标签的值 |  |
| label_explain | String | 标签介绍 |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "1页",
        "label_level": "1",
        "label_value": 1434
      },
      {
        "label_desc": "2页",
        "label_level": "2",
        "label_value": 4681
      },
      {
        "label_desc": "3页",
        "label_level": "3",
        "label_value": 2288
      },
      {
        "label_desc": "4页",
        "label_level": "4",
        "label_value": 1663
      },
      {
        "label_desc": "5页",
        "label_level": "5",
        "label_value": 1479
      },
      {
        "label_desc": "6-10页",
        "label_level": "6-10",
        "label_value": 3234
      },
      {
        "label_desc": "11-20页",
        "label_level": "11-20",
        "label_value": 1187
      },
      {
        "label_desc": "20+页",
        "label_level": "20+",
        "label_value": 199
      }
    ]
  },
  "msg": null,
  "status": true
}
```
<a name="Y2l7k"></a>
## 6、系统设备

<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| global_time | String | 筛选条件 | global_time的值可以为day，natureWeek，natureMonth,last7Days,last30Days |
| day或natureWeek或natureMonth或last7Days或last30Days | String |  | global_time的值作为key，value对应日期 |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| label_desc | String | 标签描述 |  |
| label_value | Object | 标签的值 |  |

示例返回报文：
```json
{
  "code": 200,
  "data": {
    "graph_list_data": [
      {
        "label_desc": "android",
        "label_value": 10823
      },
      {
        "label_desc": "ios",
        "label_value": 5312
      },
      {
        "label_desc": "other",
        "label_value": 30
      }
    ]
  },
  "msg": null,
  "status": true
}
```




