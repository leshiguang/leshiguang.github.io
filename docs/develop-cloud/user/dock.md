<a name="Kryue"></a>
## 1. 解除乐心账号关联
**URL**：域名 +  /api/user/v1.0/associate/unbindLifesenseUserByGateway<br />**Method**：POST
<a name="wMfnX"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户 |

<a name="E5BYE"></a>
##### 出参:
Boolean，关联解除是否成功<br />示例返回报文：
```java
{
    "code": 200,
    "msg": "成功",
    "data": true
}
```
<a name="LOjxO"></a>
## 2. 查询关联的乐心用户信息
**URL**：域名 +  /api/user/v1.0/associate/queryLifesenseUserByGateway<br />**Method**：GET
<a name="WKt2d"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户 |

<a name="neYTK"></a>
##### 出参示例:
```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "name":"xxx",             //用户名
        "headImg":"xxx",          //头像
        "sex": 1,                 //性别，1-男 2-女，默认值为男
        "birthday":1627353452000, //生日
        "height":166.0              //身高，单位cm
    }
}
//associatedId未关联账号时，返回code=460-用户不存在
```


