<a name="9f012e3b51b9f444092e5e22f3c6893d"></a>
## 1. 获取用户登录TOKEN【基于第三方ID关联】
**URL**：域名 +  /api/sessions/v1.0/associatedBusiness/loginTenant<br />**Method**：POST<br />**接口说明**：针对模块嵌入的对接方式，调用本接口进行账号对接，获取登录态accessToken，跳转页面时带上该参数作为用户身份标识
<a name="443ae06dca469a8b9bc7320964449594"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id（默认限制长度20位，超过限制请与对接开发沟通） | 标识对接用户，双方约定字段 |
| notCreate | boolean | 未查询到关联账号时，是否不做账号新增 | 默认false，即关联id无映射的用户时自动创建 |
| softLogin | boolean | 是否软登录，软登录先尝试获取用户当前<br />accessToken,获取失败则创建新的<br />accessToken | 默认false，即每次重新获取<br />accessToken，之前请求的<br />accessToken会失效 |
| userName | String | 用户昵称，首次创建关联账号时初始化信息 | 可空 |
| headImg | String | 头像,首次创建关联账号时初始化信息 | 可空 |
| sex | Integer | 性别，1-男 2-女，首次创建关联账号时初始化信息 | 可空 |
| birthday | Long | 生日，毫秒时间戳，首次创建关联账号时初始化信息 | 可空 |
| height | Integer | 身高，单位cm，首次创建关联账号时初始化信息 | 可空 |
| waist | Integer | 腰围，单位cm，首次创建关联账号时初始化信息 | 可空 |

<a name="3fd73ccede4e2569a39f1ee4756dcec4"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| accessToken | String | 用户登录TOKEN |  |
| needInfo | boolean | 是否为新用户，即之前未创建关联 |  |


示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"userId":1022043,
		"accessToken": "C398C53B98683D3227201352D6A109D2B0D1CDC442A35DDEE5011FA52D34A05F83F1D697CF26B35A9028597DD874262D3CA660981DDD8BC7CC9D5864EF9A6E3C69BB63E5F1CCB7B8EAEFF53B61A5A6CD66D01A2FFFDE8E3A07199FA20DC6D0D92812B9B9C73308EEAA30359D83E9D44AEA22A429F61FFED283E8B4B93BE0E38A.2566C3A45617DAFDE820E02555D3ADBB8141B91FFC524607913A46335D1E9D4C",
		"needInfo":false
	}
}

```
<a name="h1YFf"></a>
## 2. 获取用户登录TOKEN【基于用户手机号关联】
**URL**：域名 +  /api/sessions/v1.0/associatedBusiness/loginTenantByMobile<br />**Method**：POST<br />**接口说明**：针对模块嵌入的对接方式且基于用户手机号作为身份标识，调用本接口进行账号对接，获取登录态accessToken，跳转页面时带上该参数作为用户身份标识
<a name="XGDcF"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 用户手机号 | 国外号码可用“-”前缀区号 |
| notCreate | boolean | 未查询到关联账号时，是否不做账号新增 | 默认false，即关联id无映射的用户时自动创建 |
| softLogin | boolean | 是否软登录，软登录先尝试获取用户当前<br />accessToken,获取失败则创建新的<br />accessToken | 默认false，即每次重新获取<br />accessToken，之前请求的<br />accessToken会失效 |
| userName | String | 用户昵称，首次创建关联账号时初始化信息 | 可空 |
| sex | Integer | 性别，1-男 2-女，首次创建关联账号时初始化信息 | 可空 |
| birthday | Long | 生日，毫秒时间戳，首次创建关联账号时初始化信息 | 可空 |
| height | Integer | 身高，单位cm，首次创建关联账号时初始化信息 | 可空 |
| waist | Integer | 腰围，单位cm，首次创建关联账号时初始化信息 | 可空 |

<a name="HsoRl"></a>
##### 出参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| accessToken | String | 用户登录TOKEN |  |
| needInfo | boolean | 是否为新用户，即之前未创建关联 |  |


示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"userId":1022043,
		"accessToken": "C398C53B98683D3227201352D6A109D2B0D1CDC442A35DDEE5011FA52D34A05F83F1D697CF26B35A9028597DD874262D3CA660981DDD8BC7CC9D5864EF9A6E3C69BB63E5F1CCB7B8EAEFF53B61A5A6CD66D01A2FFFDE8E3A07199FA20DC6D0D92812B9B9C73308EEAA30359D83E9D44AEA22A429F61FFED283E8B4B93BE0E38A.2566C3A45617DAFDE820E02555D3ADBB8141B91FFC524607913A46335D1E9D4C",
		"needInfo":false
	}
}

```

