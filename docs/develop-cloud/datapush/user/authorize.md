<a name="dcZh5"></a>
# 1.用户授权事件
| **Key** | **Value** |
| --- | --- |
| eventKey | eventPush |
| dataTypeKey | **uAuthorizeE** |

1）推送数据格式

| 参数 | parent | 字段类型 | 字段说明 |
| --- | --- | --- | --- |
| data | - | Object | 字段具体解释见下方 |
| userId | data | Long | 用户ID |
| deviceId | data | String | 设备ID |
| sn | data | String | 设备SN |

2）推送数据示例
```json
{
    "userId":26551618,
    "associatedId":"26551618",
    "eventKey":"eventPush",
    "dataTypeKey":"uAuthorizeE",
    "pushStatus":1,
    "data":{
        "userId":26551618,
        "deviceId":"00040800a57b",
        "sn":"0000103200042363"
    }
}
```







