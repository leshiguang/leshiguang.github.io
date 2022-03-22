<a name="BibFT"></a>
# 1、数据推送流程示意
主要包含如下两种数据。
<a name="iFQtN"></a>
## 1.1  用户数据推送流程
用户数据推送的前提是与乐智云有用户层面的合作。<br />![用户数据推送.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1620457966570-99c0f816-ff72-46f3-8c1f-276f88a00225.png#clientId=u6e86d312-81f8-4&from=ui&id=cU1tH&margin=%5Bobject%20Object%5D&name=%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8E%A8%E9%80%81.png&originHeight=872&originWidth=2434&originalType=binary&ratio=1&size=138481&status=done&style=none&taskId=uc8211ed3-ec5a-4ac0-ac65-c2e5168b385)<br />

<a name="QHTy9"></a>
## 1.2 设备数据推送

<br />设备数据推送适用于纯设备对接的方式，wifi类设备产生数据到乐智云后，由乐智云推送给客户。<br />**注意，设备SN需要提前导入**<br />![设备数据推送.png](https://cdn.nlark.com/yuque/0/2021/png/279267/1620457955083-1d3bf398-b89b-40af-aea1-94b037c33b77.png#clientId=u6e86d312-81f8-4&from=ui&id=u67104ba7&margin=%5Bobject%20Object%5D&name=%E8%AE%BE%E5%A4%87%E6%95%B0%E6%8D%AE%E6%8E%A8%E9%80%81.png&originHeight=1092&originWidth=2522&originalType=binary&ratio=1&size=202942&status=done&style=none&taskId=ud525a9a7-b58b-4af2-b74b-7e52b37ebdb)
<a name="FKEj3"></a>
# 2、接入方需要做的事情


<a name="ATQTk"></a>
## 2.1、确认对接模式
根据使用的场景，确认需要走那种对接模式。是设备维度数据推送还是用户维度数据推送。
<a name="SOWOQ"></a>
## 2.2、提供数据接收的接口地址
按照 下文“3、数据接收接口规范”实现一个HTTPS接口，并提供接口域名地址。<br />举例：[https://xxxxx.com/lezhi/callback](https://xxxxx.com/lezhi/callback)
<a name="CA1uG"></a>
# 3、数据接收接口规范
​<br />
<a name="qJ3cE"></a>
## 3.1、请求方式
POST请求<br />​<br />
<a name="BqDw8"></a>
## 3.2、入参规范
| 参数 | parent | 字段类型 | 字段说明 | 备注 |
| --- | --- | --- | --- | --- |
| userId | - | Long | 当前数据对应乐心用户id(非必须返回，仅对接用户相关数据才返回) |  |
| associatedId | - | String | 当前数据第三方客户唯一标识(非必须返回，仅对接用户相关数据才返回) |  |
| eventKey | - | String | 包含如下两个值：<br />"dataPush":** 业务数据推送；**<br />"eventPush"：业务**数据变更事件推送，**一般需要客户收到事件后，通过拉接口获取详细的业务数据 |  |
| dataTypeKey | - | String | 推送的数据标识，举例：<br />"**dWeight**":**体脂称测量数据**<br />**...** |  |
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


<a name="SHQvn"></a>
## 3.2、出参规范
返回字段格式如下，至少应包含code字段，且值200表示成功
```json
{
  "code": 200
  
}
```



