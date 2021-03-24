<a name="SXXrH"></a>
## 关于SDK
UI级SDK是乐智提供的健康管理解决方案的集成方案之一，在UI级SDK内部涵盖了设备绑定、设备自动连接、设备数据自动上传到乐智云及数据分析和页面呈现一整套完整的方案。UI级SDK不会采集用户身份相关的信息（手机号、邮箱、身份证等证件）。<br />

<a name="54RnH"></a>
## 合作模式介绍
*约定：连接线实线表示您或您的用户需要对接或需要操作的流程、连接线虚线代表UI级SDK或设备自动完成的部分，关于实线的部分，您可以选择不实现。<br />流程解释：<br />1、初始化UI级SDK， 完成授权流程<br />2、用户打开设备页面，搜索绑定设备<br />3、设备产生数据后若是蓝牙设备则自动上报数据到UI级SDK，若是Wifi、GPRS、NB设备则自动上报数据到乐智云平台<br />4、UI级SDK上传设备数据到乐智云平台<br />5、UI级SDK通知App有数据更新<br />6、客户App告知自己的云平台有数据更新（可选流程）<br />7、客户云平台对接乐智云平台拉取用户的数据并存储（可选流程）<br />

<a name="YjelA"></a>
## 
<a name="09cc38f9"></a>
## [](https://docs.leshiguang.com/dev-ios/bluetooth/summary?id=%e6%8e%a5%e5%85%a5%e7%94%b3%e8%af%b7)接入申请
接入申请方式：[https://docs.leshiguang.com/develop-native/apply](https://docs.leshiguang.com/develop-native/apply)<br />[<br />](https://docs.leshiguang.com/dev-ios/bluetooth/releaselog)

