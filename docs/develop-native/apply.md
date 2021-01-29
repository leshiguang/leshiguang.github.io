<a name="j9bUR"></a>
# 蓝牙SDK接入申请
<a name="f1AMm"></a>
### 接入声明
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
收件人：xuan.zhang@lifesense.com,zheng.lu@lifesense.com
抄送：chengze.wu@lifesense.com,yong.wu@lifesense.com,zhicheng.liu@lifesense.com,chuang.liu@lifesense.com,jun.gong@lifesense.com
主题：【蓝牙SDK准入申请】（企业/组织/个人名称）
邮件内容需要包含：
1、接入目的：
2、接入的设备类型和型号：
3、接入的产品服务：
4、本次期望采购的硬件设备数量（多款设备分别陈述）：
```
邮件发送后， 我们会在一个工作日内完成企业信息、订阅设备的初始化工作，并将申请的appId通过邮件的形式回复给您

<a name="YPSRN"></a>
### 接入文档
android蓝牙SDK文档：[https://leshiguang.github.io/#/develop-native/android/bluetooth](https://leshiguang.github.io/#/develop-native/android/bluetooth)<br />iOS蓝牙SDK文档：[https://leshiguang.github.io/#/develop-native/ios/bluetooth](https://leshiguang.github.io/#/develop-native/ios/bluetooth)<br />微信小程序SDK文档：[https://leshiguang.github.io/#/develop-native/wx-mini/bluetooth](https://leshiguang.github.io/#/develop-native/wx-mini/bluetooth)<br />如您需要uniapp sdk， 请联系开发者或商务同学
<a name="0JJiE"></a>
# UI级SDK接入申请
<a name="9szwe"></a>
### 接入声明
UI级SDK将会采集用户使用设备的测量数据、用户的身高、体重、年龄信息（不采集手机号、邮箱、社交账号等敏感信息），并将数据存储到乐智云，并在用户使用过程中， 要求根据设备类型开启 定位、网络、蓝牙、通讯录、通知等权限。如果您的宿主app限制第三方应用的域名、app schema等权限，请开放“*.leshiguang.com”, “*.lifesense.com”, 以确保数据能够正常的上传和下载
<a name="BvumW"></a>
### 申请密钥
发送密钥申请邮件：
```
收件人：xuan.zhang@lifesense.com,zheng.lu@lifesense.com
抄送：yong.wu@lifesense.com,jun.gong@lifesense.com,chuang.liu@lifesense.com,longlong.pan@lifesense.com
主题：【健康解决方案接入申请】（企业/组织/个人名称）
邮件内容需要包含：
1、接入目的：
2、接入的设备类型和型号：如：LS431-B手环
3、接入的产品服务：如：睡眠、体重、心率
4、需要开通的乐智云API：如：睡眠分析API、体重分析API
```
申请成功将会收到乐心的回复，回复内容中会包含一下信息：<br />1.appKey:对应一个应用<br />2.appSecret:私钥<br />3.tenantName：租户名缩写（用于h5页面版本管理）<br />4.tenantId: 租户ID<br />5.subscription：订阅ID
<a name="2kRBz"></a>
### 接入文档
android UI级sdk接入文档： [https://leshiguang.github.io/#/develop-native/android/ui](https://leshiguang.github.io/#/develop-native/android/ui)<br />iOS UI级sdk接入文档：[https://leshiguang.github.io/#/develop-native/ios/ui](https://leshiguang.github.io/#/develop-native/ios/ui)<br />

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




