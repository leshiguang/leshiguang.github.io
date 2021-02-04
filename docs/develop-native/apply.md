<a name="j9bUR"></a>
# 接入声明
我司做接入控制的目的是为了控制设备的去处、了解出售设备的活跃状态及客户采买设备的使用场景。接入过程中， 仅存储设备和接入公司/组织的关联关系，用于辅助分析客户的库存、销售情况，帮助客户做后续运营， SDK不会以任何方式存储用户身份信息及用户使用设备过程中产生的数据
<a name="lnH19"></a>
### 申请应用 ID
准备材料如下：<br />

- 确定应用接入的（企业）组织名称，并说明使用场景、用途、评估应用接入的量级 
- 确定应用需要接入的设备型号列表(用于控制型号滥用、标识采买设备信息) 
- 准备一个接入者公司的 github 账号(可选，用于gradle依赖管理下载aar)

将准备好的材料以邮件的方式发送：

- 邮件内容如下：
```java
收件人：zheng.lu@lifesense.com；xuan.zhang@lifesense.com
抄送：mengfei.li@lifesense.com,chengze.wu@lifesense.com,yong.wu@lifesense.com,zhicheng.liu@lifesense.com,chuang.liu@lifesense.com,jun.gong@lifesense.com
主题：【乐智健康服务准入申请】-（xx 企业/组织/个人）
邮件正文：
1、接入目的：（示例：（xx企业/组织/个人）-申请接入乐心服务，目的是借助xx（硬件型号）的数据能力帮助（xx企业/组织/个人）的用户完成健康管理）
2、企业全称：
3、联系人：
4、联系人邮箱：
5、联系人电话：
6、联系人职位：
7、接入应用：（小程序/app）
8、应用名称：
9、设备型号+工厂型号：如体脂称A20，GBF-2008-BF；（若为双模设备，如A20/S20/S30，则需在邮件中写明设备的sn码）
本次接入硬件数量：如体脂秤5台
10、接入的产品服务：【蓝牙SDK】，【体脂、睡眠算法】，【UI级SDK】，【乐智云Api服务】
11、本次期望采购的硬件设备数量（多款设备分别陈述）：
```
邮件发送后， 我们会在一个工作日内完成企业信息、订阅设备的初始化工作，并将申请的appId等信息通过邮件的形式回复给您<br />申请成功将会收到乐心的回复，回复内容中会包含一下信息：<br />1.appKey（appid）:对应一个应用<br />2.appSecret:私钥<br />3.tenantName：租户名缩写（用于h5页面版本管理）<br />4.api权限表
<a name="YPSRN"></a>
### 接入文档
蓝牙SDK：

- android蓝牙SDK文档：[https://docs.leshiguang.com/develop-native/android/bluetooth](https://docs.leshiguang.com/develop-native/android/bluetooth)
- iOS蓝牙SDK文档：[https://docs.leshiguang.com/develop-native/ios/bluetooth](https://docs.leshiguang.com/develop-native/ios/bluetooth)
- 微信小程序SDK文档：[https://docs.leshiguang.com/develop-native/wx-mini/bluetooth](https://docs.leshiguang.com/develop-native/wx-mini/bluetooth)
- 如您需要uniapp sdk， 请联系开发者或商务同学


<br />UI级SDK：<br />

- android UI级sdk接入文档： [https://docs.leshiguang.com/develop-native/android/ui](https://docs.leshiguang.com/develop-native/android/ui)
- iOS UI级sdk接入文档：[https://docs.leshiguang.com/develop-native/ios/ui](https://docs.leshiguang.com/develop-native/ios/ui)


<br />乐智云api：

- 云api对接文档（商业版， 需要联系对应的商务开通权限）：[https://docs.leshiguang.com/develop-cloud/README](https://docs.leshiguang.com/develop-cloud/README)

乐智云算法：

- 算法对接文档：[https://docs.leshiguang.com/develop-algorithm/README](https://docs.leshiguang.com/develop-algorithm/README)
<a name="TyEeX"></a>
# 支持设备
| 设备类型 | 型号 |
| --- | --- |
| 手环 | 乐心手环5S |
|  | MamboHR2 |
|  | MamboHR3 |
|  | 乐心手环5 |
|  | 乐心手环3 |
|  | Mambo |
|  | 其它手环 |
| 智能秤 | S12 |
|  | S11 |
|  | S9 |
|  | S5 Nana |
|  | A3-S |
|  | A20 |
|  | A30 |
|  | S20 |
|  | S30 |
|  | A1-F |
| 血压计 | i7蓝牙版 |

<br />

