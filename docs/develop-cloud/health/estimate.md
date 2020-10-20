<a name="KKCJ2"></a>
## 1. 首页查询健康年龄数据
  url：域名 +  /hai-rest/eva/query/getBriefInfo

  method：get
<a name="RLn2W"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="pRpTT"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| hasData | Boolean | 是否有数据 |  |
| longTimeNotUpdate | Boolean | 是否长期未更新数据 |  |
| evaluateAge | Double | 评估年龄 |  |
| addAge | String | 评估年龄较上次评估年龄增加多少 |  |
| evaluateAgeDiffValue | Double | 评估年龄与实际年龄差值 |  |
| healthCondition | String | 健康状况 | 良好<br />及格<br />不及格 |
| evaluateDate | Date | 评估时间 |  |


<br />示例返回报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"hasData":true,
		"longTimeNotUpdate":false,
		"evaluateAge":27.6,
		"addAge":3.5,
		"evaluateAgeDiffValue":2.6,
		"healthCondition":"不及格",
		"evaluateDate":1596023100000
	}
}

```
<a name="oMUD3"></a>
## 1.2 查询健康评估结果数据
  url：域名 +  /hai-rest/eva/query/getDetailInfo**<br />  method：get<br />**  **描述：健康评估首页查询评估详情信息
<a name="UBjw1"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="PYv6C"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateInfo | Object | 评估信息 | 见[风险数据集合](#JA2nS) |
| userInfo | Object | 用户信息 | 见[风险数据集合](#VvmPl) |
| moduleInfos | List<Object> | 模块数据集合 | 见[风险数据集合](#ouCMc) |

<a name="JA2nS"></a>
###### 评估信息:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| evaluateAge | Double | 评估年龄 |  |
| perfectAge | Double | 理想年龄 |  |
| evaluateText | String | 评估文案 |  |
| healthCondition | String | 健康状况 | 良好<br />及格<br />不及格 |
| evaluateAgeDiffValue | String | 评估年龄与实际年龄差值 |  |

<a name="VvmPl"></a>
###### 用户信息：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userName | String | _用户name_ |  |
| sex | Integer | 性别 | 1 男<br />2 女 |
| age | Integer | 年龄 |  |
| headImg | String | 用户头像 |  |
| height | String | 身高 | cm |

<a name="ouCMc"></a>
###### 模块数据集合(List)：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| moduleKey | String | 模块key | "weight": "体重"<br />"tobaccoWine": "烟酒<br />"food": "膳食"<br />"sport": "运动"<br />"sleepStress": "睡眠/压力"<br />"threeHigh": "三高指标" |
| moduleName | String | 模块名称 |  |
| score | Double | 模块分 | 满分10分 |
| risk | boolean | 是否有风险 |  |
| riskLabelInfos | List<Object> | 风险标签信息 | 见[标签信息](#vKrwN)<br />risk为true时，才会有风险标签信息 |

<a name="vKrwN"></a>
###### 标签信息(List):
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| labelKey | String | 标签key |  |
| labelName | String | 标签名称 |  |
| refValue | String | 参考值 |  |
| suggest | String | 建议 |  |
|  |  |  |  |

<a name="uVhpD"></a>
###### 示例返回报文：

