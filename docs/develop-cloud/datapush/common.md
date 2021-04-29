<a name="BibFT"></a>
# 0、数据推送流程示意


<a name="jRLoM"></a>
# ![乐智云数据推送.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1619688577842-f1fe307d-1dd8-495b-b6f7-4005c898fc06.png#clientId=u208fed56-9336-4&from=ui&height=246&id=Ef6bl&margin=%5Bobject%20Object%5D&name=%E4%B9%90%E6%99%BA%E4%BA%91%E6%95%B0%E6%8D%AE%E6%8E%A8%E9%80%81.png&originHeight=872&originWidth=2434&originalType=binary&size=129792&status=done&style=none&taskId=u3128ea0e-5ec6-4a57-932c-0a5440695ad&width=688)
<a name="VVwCE"></a>
# 1、客户提供数据回调地址
| 请求方式 | POST |
| --- | --- |
| URL | 客户定义 |

<a name="zpDQr"></a>
# 2、推送数据分类
乐智云推送给客户的数据主要分为两类<br />
<br />1.推送业务事件，一般需要客户收到事件后，重新通过拉接口获取详细的业务数据；<br />2.直接推送的业务数据；
<a name="lo5dB"></a>
# 3、统一推送数据格式定义
| 参数 | parent | 字段类型 | 字段说明 | 备注 |
| --- | --- | --- | --- | --- |
| api_appKey | - | String | 应用ID （通过申请业务接入时获得） (非必须返回) | 这四个参数用于标识请求来自乐智云，<br />客户可以选择进行校验，防止接口被非法调用。 |
| api_version | - | String | API协议版本，当前值：1.0(非必须返回) |  |
| api_timestamp | - | Long | 请求时间戳（毫秒级）(非必须返回) |  |
| api_sign | - | String | 加密校验字符串，加密方式见[API签名](https://docs.leshiguang.com/develop-cloud/api/sign)文档(非必须返回) |  |
|  |  |  |  |  |
| userId | - | Long | 当前数据对应乐心用户id(非必须返回) |  |
| associatedId | - | String | 当前数据第三方客户唯一标识(非必须返回) |  |
| eventKey | - | String | 业务数据推送 or 业务事件推送<br />"dataPush":**实际数据推送**<br />"eventPush"：**数据变更事件推送** |  |
| dataTypeKey | - | String | 推送的数据标识，举例：<br />"dBp":**设备血压数据(只包含设备测量原始数据)**<br />"dBs":**设备血糖数据(只包含设备测量原始数据)**<br />**...** |  |
| pushStatus | - | Integer | _推送状态(1:正常推送，2:重试机制补偿推送)_ |  |
| data | - | Object | 字段具体解释见具体业务（data参数解释） |  |

```json
{
  "api_appKey":"xxxxxxx",
  "api_version":"1.0",
  "api_timestamp":1111111,
  "api_sign":"xxxxxxx",
  "userId": 23341064,
  "associatedId": "66104c5623342apsasad",
  "dataTypeKey": "BP",
  "eventKey": "dataPush",
  "pushStatus": 1,
  "data": {
    //根据具体业务确定
  }
}
```



