<a name="yaQKa"></a>
## 1. 会员绑定顾问
**URL**：域名 +  /api/family/v1.0/counselorModification/bindTenantCounselor<br />**类型**：POST
<a name="uP7qO"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 会员关联账号id | 标识对接用户，双方约定字段 |

<a name="fyZX6"></a>
##### POST报文入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| counselorAssociatedId | String | 顾问关联账号ID | 必传 |
| customerName | String | 会员备注名（如微信昵称，方便顾问区分会员） | 可空 |
| counselorPermission | Boolean | 会员是否授权顾问查询健康详情数据 | 默认false |

<a name="HOIRB"></a>
##### 出参:
无<br />
<br />示例返回报文：
```json
{
	"code":200,  //200-成功  81000-指定顾问不存在或未开通顾问身份
	"msg":"成功"
}

```

