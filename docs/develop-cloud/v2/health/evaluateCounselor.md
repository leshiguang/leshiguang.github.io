<a name="bsy45"></a>
## 1.获取评估问卷题目
同 健康评估V2 1.获取评估问卷题目
<a name="MYXig"></a>
## 2.提交评估问卷答案
```bash
POST /riskEva/eva/submit
```
<a name="P8yVR"></a>
#### 请求参数

<a name="YgUe0"></a>
#### 入参示例

<a name="VR7aH"></a>
#### 返回结果
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| - code | integer | true | none |  | none |
| - msg | string | true | none |  | none |
| - data | string | true | none | 报告No | none |

<a name="W4EBl"></a>
#### 返回结果示例
```json
{
  "code": 200,
  "msg": "成功",
  "data": "2023020100001"
}
```
<a name="kqAl8"></a>
## 3.获取某个评估的评估结果
```bash
GET /riskEva/report/query
```
<a name="gAhoz"></a>
#### 请求参数
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| --- | --- | --- | --- | --- | --- |
| reportNo | query | string | 否 |  | 报告No |

<a name="YFCry"></a>
#### 返回结果


