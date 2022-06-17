<a name="Kryue"></a>
## 1. 分页查询所有授权账号列表
**URL**：域名 +  /api/user/v1.0/auth/pageQueryAuthUserList<br />**Method**：GET
<a name="wMfnX"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| pageNum | Integer | 页码 | 从1开始 |
| pageSize | Integer | 每页数量 | 范围1~1000 |

<a name="E5BYE"></a>
##### 出参示例：
```java
{
    "code": 200,
    "msg": "成功",
    "data": {
        "totalCount": 3,
        "result": [
            11223344,
            11223345,
            11223346
        ],
        "hasNextPage": false
    }
}
```
<a name="LOjxO"></a>
## <br />

