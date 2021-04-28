<a name="KKCJ2"></a>
## 1. 获取用户登录TOKEN
 url：域名 +  /sessions-rest/associatedBusiness/loginTenant<br /> method：post
<a name="RLn2W"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户，双方约定字段 |
| notCreate | boolean | 未查询到关联账号时，是否不做账号新增 | 默认false，即关联id无映射的用户时自动创建 |
| softLogin | boolean | 是否软登录，软登录先尝试获取用户当前<br />accessToken,获取失败则创建新的<br />accessToken | 默认false，即每次重新获取<br />accessToken，之前请求的<br />accessToken会失效 |
| userName | String | 用户昵称，首次创建关联账号时初始化信息 | 可空 |
| sex | Integer | 性别，1-男 2-女，首次创建关联账号时初始化信息 | 可空 |
| birthday | Long | 生日，毫秒时间戳，首次创建关联账号时初始化信息 | 可空 |
| height | Integer | 身高，单位cm | 可空 |
| waist | Integer | 腰围，单位cm | 可空 |

<a name="pRpTT"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| accessToken | String | 用户登录TOKEN |  |
| needInfo | boolean | 是否为新用户，即之前未创建关联 |  |
| associatedId | String | 同入参associatedId |  |


<br />示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"userId":1022043,
		"accessToken": "C398C53B98683D3227201352D6A109D2B0D1CDC442A35DDEE5011FA52D34A05F83F1D697CF26B35A9028597DD874262D3CA660981DDD8BC7CC9D5864EF9A6E3C69BB63E5F1CCB7B8EAEFF53B61A5A6CD66D01A2FFFDE8E3A07199FA20DC6D0D92812B9B9C73308EEAA30359D83E9D44AEA22A429F61FFED283E8B4B93BE0E38A.2566C3A45617DAFDE820E02555D3ADBB8141B91FFC524607913A46335D1E9D4C",
		"needInfo":false,
		"associatedId":"xxxx"
	}
}

```
<a name="NDiDY"></a>
## 2. 修改用户手机号
 url：域名 +  /user-rest/action/changeMobileByTenant<br /> method：post
<a name="yuFFu"></a>
##### URL入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | URL参数，标识对接用户，双方约定字段 |

<a name="3jtNd"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mobile | String | 修改后的手机号 | post数据 |

<a name="Uf3qT"></a>
##### 出参:
无，修改失败时返回非200code<br />
<br />示例返回报文：
```json
{
	"code":200, 
	"msg":"成功"
}
```
<a name="TTkXu"></a>
## 3. 更新用户信息
 url：域名 +  /user-rest/userInfo/updateUserDetail<br /> method：post
<a name="W7dqb"></a>
##### URL入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | URL参数，标识对接用户，双方约定字段 |

<a name="zGWE5"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| name | String | 用户昵称 | 仅传更新字段即可 |
| headImg | String | 用户头像 | 同上 |
| sex | Integer | 性别，1-男；2-女  | 同上 |
| birthday | Long | 毫秒时间戳 | 同上 |
| height | Integer | 身高，单位cm | 同上 |
| waist | Integer | 腰围，单位cm | 同上 |

示例返回报文：
```json
{
	"code":200, 
	"msg":"成功",
  "data":true    //true-更新成功 false-无可更新内容或更新失败
}
```

