<a name="Uh5A2"></a>
## 1. 顾问身份开通
**URL**：域名 +  /family-rest/counselorModification/tenantRegister<br />**类型**：POST
<a name="C1pB9"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户，双方约定字段 |

<a name="IwTCC"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| counselorName | String | 顾问姓名 | 可空 |
| phoneNumber | String | 顾问手机号 | 可空，或者加密 |
| sex | Integer | 性别，1-男 2-女 | 可空 |
| areaCode | Integer | 六位地区编码，如110101为北京东城区 | 可空 |

<a name="T0kj0"></a>
##### 出参:
boolean，表示开通是否成功<br />
<br />示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":true //顾问开通成功（包括本来已经是顾问的情况）
}

```

