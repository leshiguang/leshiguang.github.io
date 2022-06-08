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
## 5. 查询家人信息
**URL**：域名 +  /api/family/v1.0/relation/queryRelationship<br />**类型**：GET
<a name="HhoPs"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 当前登录用户ID |
| associatedUserId | Long | 家人账号id | 要查询的家人账号ID |

<a name="ncBmW"></a>
##### 出参:

示例返回报文：
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "associatedUserId": 413382,
        "headUrl": "https://files.lifesense.com/other/20210224/ba43a1da179d42a3870bf57999957aec.png",
        "nickname": "",              //昵称
        "identity": "测试家人号",     //身份
        "gender": 1,                 //性别
        "birthday": 949334400000,    //生日
        "height": 174.0,             //身高
        "allowToSee": true,          //是否允许对方查看数据
        "isInitiative": true,        //是否主动关联
        "relationType": 1,           //关联家人号类型 0-实体  1-虚拟
        "weightUnit": 1,             
        "illnessList": [],
        "questionDTO": {             //患病问题详情
            "id": 70001,
            "groupKey": "healthRiskEvaluate",
            "questionType": 2,
            "answer": "",
            "analysis": "",
            "questionStem": "您是否患有以下疾病？",  
            "optionContent": {
                "options": [
                    {
                        "optKey": "A",
                        "optContent": "否",
                        "basal": false
                    },
                    {
                        "optKey": "B",
                        "optContent": "糖尿病",
                        "basal": false
                    },
                    {
                        "optKey": "C",
                        "optContent": "高血压",
                        "basal": false
                    },
                    {
                        "optKey": "D",
                        "optContent": "高尿酸血症/痛风",
                        "basal": false
                    },
                    {
                        "optKey": "E",
                        "optContent": "慢性肾病",
                        "basal": false
                    },
                    {
                        "optKey": "F",
                        "optContent": "慢性阻塞性肺疾病",
                        "basal": false
                    },
                    {
                        "optKey": "G",
                        "optContent": "支气管炎",
                        "basal": false
                    },
                    {
                        "optKey": "H",
                        "optContent": "恶性肿瘤",
                        "basal": false
                    }
                ]
            }
        },
        "selectedKeys": [            //已勾选的患病标签
            "C"
        ]
    }

```
<a name="jvEto"></a>
## <br />

