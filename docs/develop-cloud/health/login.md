<a name="KKCJ2"></a>
## 1. 获取用户登录TOKEN
  url：域名 +  /sessions-rest/associatedBusiness/loginTenant<br />  method：post
<a name="RLn2W"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户，双方约定字段 |
| notCreate | boolean | 未查询到关联账号时，是否不做账号新增 | 默认false，即关联id无映射的用户时自动创建 |

<a name="pRpTT"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| accessToken | String | 用户登录TOKEN |  |
| needInfo | boolean | 是否为新用户 |  |
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
<a name="3jtNd"></a>
##### 入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mobile | String | 修改后的手机号 | post数据 |
| associatedId | String | 关联账号id | URL参数，标识对接用户，双方约定字段 |

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

