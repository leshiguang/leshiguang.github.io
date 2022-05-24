<a name="Uh5A2"></a>
## 1. 绑定虚拟家人账号
**URL**：域名 +  /api/family/v1.0/relation/bindVirtualUser<br />**类型**：POST
<a name="C1pB9"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 当前要创建家人的用户ID |

<a name="IwTCC"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| virtualUserId | Long | 要绑定的虚拟家人账号id | 必传 |
| associatedUserIdentity | String | 关联家人的身份 | 必传，如“儿子” |
| virtualNickName | String | 虚拟家人昵称 | 可选 |

<a name="T0kj0"></a>
##### 出参:
boolean，表示绑定是否成功

示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":true //虚拟家人绑定成功
}

```
<a name="f51Ez"></a>
## 2. 实体家人接受绑定
**URL**：域名 +  /api/family/v1.0/relation/bindUser<br />**类型**：POST
<a name="gZZCR"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 当前接受绑定邀请的家人id |

<a name="kXt2d"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| initiativeUserId | Long | 发起绑定邀请的账号id | 必传，即主动绑定方 |
| associatedUserIdentity | String | 接受绑定的家人身份 | 必传，即被动接受方的身份 |

<a name="bR1v5"></a>
##### 出参:
boolean，表示绑定是否成功

示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":true //虚拟家人绑定成功
}

```
<a name="I38xN"></a>
## 3. 更新绑定关系信息
**URL**：域名 +  /api/family/v1.0/relation/updateRelationshipDetail<br />**类型**：POST
<a name="lt5T7"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 账号id | 发起修改的登录用户ID |

<a name="jZuCh"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedUserId | Long | 关联的家人账号id | 必传 |
| identity | String | 关联家人的身份 | 必传 |
| allowToSee | String | 关联的家人是否可以查看当前登录用户的数据 | 可选 |
| nickname | String | 对关联家人的称呼 | 可选 |
| headUrl | String | 关联家人的头像 | 可选，仅虚拟家人可修改 |
| gender | Integer | 关联家人的性别 | 可选，仅虚拟家人可修改 1-男 2-女 |
| birthday | Date | 关联家人的生日 | 可选，仅虚拟家人可修改 |
| height | Double | 关联家人的身高 | 可选，仅虚拟家人可修改 |
| weight | Double | 关联家人的体重 | 可选，仅虚拟家人可修改 |
| weightUnit | Integer | 体重单位 1-千克;2-斤 | 可选，仅虚拟家人可修改 |
| selectedKeys | List<String> | 关联家人的患病情况 | 可选，仅虚拟家人可修改 |

<a name="w6iMS"></a>
##### 出参:
boolean，表示修改是否成功

示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":true //更新成功
}

```
<a name="han0H"></a>
## 4. 解绑家人
**URL**：域名 +  /api/family/v1.0/relation/unBindUser<br />**类型**：POST
<a name="fJ0mp"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 当前登录的用户ID |

<a name="fazVU"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedUserId | Long | 要解绑的家人账号id | 必传 |

<a name="Z1cEx"></a>
##### 出参:
boolean，表示解绑是否成功

示例返回报文：
```json
{
	"code":200,
	"msg":"成功",
	"data":true //虚拟家人绑定成功
}

```
<a name="IsEXD"></a>
## <br />

