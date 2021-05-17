<a name="BibFT"></a>
# 0、数据推送流程示意
主要包含如下两种数据。
<a name="iFQtN"></a>
## 0.1  用户数据推送流程
用户数据推送的前提是与乐智云有用户层面的合作。<br />![用户数据推送.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1620457966570-99c0f816-ff72-46f3-8c1f-276f88a00225.png#clientId=u6e86d312-81f8-4&from=ui&id=cU1tH&margin=%5Bobject%20Object%5D&name=%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8E%A8%E9%80%81.png&originHeight=872&originWidth=2434&originalType=binary&size=138481&status=done&style=none&taskId=uc8211ed3-ec5a-4ac0-ac65-c2e5168b385)<br />

<a name="QHTy9"></a>
## 0.2 设备数据推送

<br />设备数据推送适用于纯设备对接的方式，wifi类设备产生数据到乐智云后，由乐智云推送给客户。<br />**注意，设备SN需要提前导入**<br />![设备数据推送.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1620457955083-1d3bf398-b89b-40af-aea1-94b037c33b77.png#clientId=u6e86d312-81f8-4&from=ui&id=u67104ba7&margin=%5Bobject%20Object%5D&name=%E8%AE%BE%E5%A4%87%E6%95%B0%E6%8D%AE%E6%8E%A8%E9%80%81.png&originHeight=1092&originWidth=2522&originalType=binary&size=202942&status=done&style=none&taskId=ud525a9a7-b58b-4af2-b74b-7e52b37ebdb)
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
| userId | - | Long | 当前数据对应乐心用户id(非必须返回) |  |
| associatedId | - | String | 当前数据第三方客户唯一标识(非必须返回) |  |
| eventKey | - | String | 业务数据推送 or 业务事件推送<br />"dataPush":**实际数据推送**<br />"eventPush"：**数据变更事件推送** |  |
| dataTypeKey | - | String | 推送的数据标识，举例：<br />"BP":**设备血压数据(只包含设备测量原始数据)**<br />"BS":**设备血糖数据(只包含设备测量原始数据)**<br />**...** |  |
| pushStatus | - | Integer | _推送状态(1:正常推送，2:重试机制补偿推送)_ |  |
| data | - | Object | 字段具体解释见具体业务（data参数解释） |  |

```json
{
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



