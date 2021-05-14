<a name="Kryue"></a>
## 1. 修改用户手机号
**URL**：域名 +  /api/user/v1.0/action/changeMobileByTenant<br />​**Method**：POST
<a name="eATwO"></a>
##### URL入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | URL参数，标识对接用户，双方约定字段 |

<a name="wMfnX"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| mobile | String | 修改后的手机号 |  |

<a name="E5BYE"></a>
##### 出参:
无，修改失败时返回非200code<br />
<br />示例返回报文：
```json
{
	"code":200, 
	"msg":"成功"
}
```
<a name="NjBvT"></a>
## 2. 更新用户信息
**URL**：域名 +  /api/user/v1.0/userInfo/updateUserDetail<br />**Method**：POST
<a name="Xo2hU"></a>
##### URL入参：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | URL参数，标识对接用户，双方约定字段 |

<a name="Anc2n"></a>
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

