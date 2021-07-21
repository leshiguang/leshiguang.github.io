<a name="Kryue"></a>
## 1. 解除授权
**URL**：域名 +  /user-rest/associate/unbindLifesenseUserByGateway<br />**Method**：POST
<a name="wMfnX"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户 |

<a name="E5BYE"></a>
##### 出参:
Boolean，授权解除是否成功<br />示例返回报文：
```java
{
    "code": 200,
    "msg": "成功",
    "data": true
}
```
​<br />

