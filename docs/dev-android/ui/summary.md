<a name="SXXrH"></a>
## 关于SDK
UI级SDK是乐智提供的健康管理解决方案的集成方案之一，在UI级SDK内部涵盖了设备绑定、设备自动连接、设备数据自动上传到乐智云及数据分析和页面呈现一整套完整的方案。UI级SDK不会采集用户身份相关的信息（手机号、邮箱、身份证等证件）。

<a name="54RnH"></a>
## 合作模式介绍
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616570476413-402a0c43-c4ff-46b4-80b3-1cca35e72b0a.png#averageHue=%23fcfcfc&height=489&id=Zj0OY&name=image.png&originHeight=489&originWidth=698&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47236&status=done&style=none&title=&width=698)<br />![](https://cdn.nlark.com/yuque/0/2021/jpeg/265997/1616574992758-4787c54a-f513-4d1c-b0e1-5239216cd0e3.jpeg)<br />*约定：连接线实线表示您或您的用户需要对接或需要操作的流程、连接线虚线代表UI级SDK或设备自动完成的部分，关于实线的部分，您可以选择不实现。<br />流程解释：<br />1、初始化UI级SDK， 完成授权流程<br />2、用户打开设备页面，搜索绑定设备<br />3、设备产生数据后若是蓝牙设备则自动上报数据到UI级SDK，若是Wifi、GPRS、NB设备则自动上报数据到乐智云平台<br />4、UI级SDK上传设备数据到乐智云平台<br />5、UI级SDK通知App有数据更新<br />6、客户App告知自己的云平台有数据更新（可选流程）<br />7、客户云平台对接乐智云平台拉取用户的数据并存储（可选流程）

<a name="nVmzg"></a>
## 接入申请
接入申请方式：[https://docs.sghealth.cn/develop-native/apply](https://docs.sghealth.cn/develop-native/apply)<br />[<br />](https://docs.leshiguang.com/dev-ios/bluetooth/releaselog)

