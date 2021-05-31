<a name="HwCKa"></a>
# 核心价值
![文档中心模版web端(1).png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1622444053158-36397f0d-2384-456e-acb1-dcd6cedcaaf5.png#clientId=u8c158e55-3dcb-4&from=drop&id=uf767fc2a&margin=%5Bobject%20Object%5D&name=%E6%96%87%E6%A1%A3%E4%B8%AD%E5%BF%83%E6%A8%A1%E7%89%88web%E7%AB%AF%281%29.png&originHeight=600&originWidth=1067&originalType=binary&size=159716&status=done&style=none&taskId=u7816ded3-ebc2-4b17-a3bb-cf96218c26e)
<a name="CyKqO"></a>
# 关键路径
主要路径包含：

1. 设备绑定
1. 设备解绑
1. 手环设置项
<a name="VMDij"></a>
# 设备详解
<a name="dPZT6"></a>
## 现有设备列表
| 小程序已接入设备列表 |  |  |  |
| --- | --- | --- | --- |
| 手环 | 智能秤 | 血压计 | 血糖仪 |
| 乐心手环5S | S12 | i7 NB血压计 | 乐心G2血糖仪 |
| 乐心手环HR2 | S11 | i7蓝牙血压计 | ​<br /> |
| 乐心手环5 | S9 | i5/i7 GPRS | ​<br /> |
| 乐心手环3 | S5 mini/Nana | i9 NB血压计 | ​<br /> |
| Mambo | A1-F | i7 Wi-Fi血压计 | ​<br /> |
| ​<br /> | S5 NB | i9 Wi-Fi血压计 | ​<br /> |
| ​<br /> | S30 | ​<br /> | ​<br /> |
| ​<br /> | S20 | ​<br /> | ​<br /> |
| ​<br /> | A20 | ​<br /> | ​<br /> |
| ​<br /> | A6 | ​<br /> | ​<br /> |
| ​<br /> | A30 | ​<br /> | ​<br /> |

<a name="g10ux"></a>
# 手环
<a name="wjBAX"></a>
## 手环支持绑定方式

- 一个手环支持绑定一个账号
- 被绑定的手环，其他人再来绑定的时候会失败，需要前一人解除绑定
- 手环解绑：在设置详情页点击“删除设备”；解除手环设备后，（IOS）需要在手机设置项的蓝牙忽略此设备（否则下次会绑不上）



<a name="yCYlh"></a>
#### 蓝牙绑定
![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1621511592311-60e09f13-5e01-4869-8770-d926295205e2.png#clientId=u42b87f3a-3e2b-4&from=drop&id=ucf420c6a&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=5850&originWidth=7962&originalType=binary&size=1387996&status=done&style=none&taskId=u8aa35ab7-958e-464f-8920-f736f2e1a02)<br />

<a name="xgPPJ"></a>
#### SN绑定
![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1621512281695-e555f83d-7972-4d2f-b714-b510bc4d2aef.png#clientId=u42b87f3a-3e2b-4&from=drop&id=u44f88169&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=6010&originWidth=7962&originalType=binary&size=1195821&status=done&style=none&taskId=uad8945df-cb8d-4bf6-bf24-5cf5b8f109a)<br />

<a name="VIxa2"></a>
#### 扫码绑定
![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1621513431908-7443ecc6-4c7e-4b4b-9094-5b7fc56d42e2.png#clientId=u507869ba-131e-4&from=drop&id=uc7595742&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=6010&originWidth=7962&originalType=binary&size=1985334&status=done&style=none&taskId=u2c03bd3c-2a6c-40fc-ac67-ea6125b1221)
<a name="AmjK0"></a>
## 支持功能
乐心手环支持下列部分功能（每个手环的功能项存在差异）

| 设备功能 |
| --- |
| 步数 |
| 卡路里（日常消耗） |
| 距离 |
| 心率（日常心率） |
| 心率（运动心率） |
| 心率统计（区间） |
| 实时心率（每秒一笔数据） |
| 睡眠监测 |
| 运动（运动报告-游泳圈数） |
| 运动（运动配速） |
| 运动（运动状态） |
| 运动（运动控制 |

<a name="eEdDm"></a>
## 设置项
乐心手环支持下列设置项部分功能（每个手环的设置项存在差异）

| 设备设置项 |
| --- |
| 持续心率监测（开关） |
| 勿扰模式 |
| 24小时制 |
| 闹钟设置 |
| 夜间模式 |
| 事件提醒 |
| 天气（默认） |
| 目标 |
| 自动识别 |
| 防丢设置 |
| 实时心率（开关，与业务相关） |
| 心率预警 |
| 表盘 |
| 运动控制 |
| 自定义屏幕（包含运动项设置） |
| 游泳 |
| GPS状态设置 |

<a name="i3mwZ"></a>
# 智能秤
<a name="xGQ1h"></a>
### 智能秤支持绑定方式
一个秤能绑定4个手机账号，第5个人绑定时，第1个人会被挤出去（自动解绑），只限于国内智能秤<br />目前主要支持的是蓝牙搜索绑定<br />智能秤解绑：在设置详情页点击“删除设备”；
<a name="h0PWR"></a>
#### 蓝牙绑定
![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1622173381193-98e56b7c-866e-44e6-9e29-7e835e5bd18c.png#clientId=uaa8c8630-4856-4&from=drop&id=ub6e8f4da&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=5850&originWidth=7962&originalType=binary&size=1318432&status=done&style=none&taskId=u0f2445a4-e9de-4b69-b4cb-3af0baa1ebd)
<a name="YzYmn"></a>
## 支持功能
乐心智能秤支持下列功能

| 设备功能 |
| --- |
| 体重 |
| 阻抗值（体脂秤） |
| 心率（心率秤） |

<a name="azpcz"></a>
# 血压计
<a name="NbMoN"></a>
### 血压计支持绑定方式
一个血压计支持绑定一个账号<br />被绑定的血压计，其他人再来绑定的时候会失败，需要前一人解除绑定<br />血压计解绑：在设置详情页点击“删除设备”；
<a name="K5G0A"></a>
#### 蓝牙绑定

<br />![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1622174641194-997ca575-79df-416b-824c-5e8640894454.png#clientId=uaa8c8630-4856-4&from=drop&id=ucc35e043&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=5930&originWidth=8840&originalType=binary&size=1888967&status=done&style=none&taskId=udb4c3ce9-2616-4b6a-8737-67946e7412a)
<a name="gQWnC"></a>
#### 扫码绑定&Wi-Fi配网
![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1622187301554-ce84bccb-e4b7-4a1e-b9c1-8f02d8310839.png#clientId=u41343259-68de-4&from=drop&id=u1d157804&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=4530&originWidth=10467&originalType=binary&size=2279482&status=done&style=none&taskId=u21f533d8-3076-46d2-9a7a-262576cd8c8)
<a name="cNzvZ"></a>
## 支持功能
血压计支持下列功能

| 设备功能 |
| --- |
| 血压数据传输 |



<a name="UxyZO"></a>
# 血糖仪
<a name="zlwWm"></a>
### 血糖仪支持绑定方式
一个血糖仪支持绑定一个账号<br />被绑定的血糖仪，其他人再来绑定的时候会失败，需要前一人解除绑定<br />血糖仪解绑：在设置详情页点击“删除设备”；
<a name="jFnUh"></a>
#### 扫码绑定
![page_1.png](https://cdn.nlark.com/yuque/0/2021/png/5376726/1622188364462-72823df9-1efa-4954-8376-a4d46908d35a.png#clientId=u41343259-68de-4&from=drop&id=ufb7df647&margin=%5Bobject%20Object%5D&name=page_1.png&originHeight=4530&originWidth=5310&originalType=binary&size=1221888&status=done&style=none&taskId=u04dc5066-5c96-4720-885a-a70cec3c800)
<a name="YmGd5"></a>
## 支持功能
血糖仪支持下列功能

| 设备功能 |
| --- |
| 血糖数据传输 |

<a name="NmrTg"></a>
## 交付能力
SDK<br />提供SDK设备对接功能<br />SDK+UI（设备绑定UI）<br />提供SDK设备对接功能和绑定设备UI（包括：产品列表页和绑定流程、手环配置项 +OTA功能 + 已绑定设备列表页 + 已绑定设备详情页 + 配网流程）<br />

<a name="YychA"></a>
## Q&A
手环无法连接：

- 手环是否激活

新乐心手环（除bobon、bobonC外）需充电激活才可连接，请将手环激活后再尝试连接手机。<br />

- 检查手环蓝牙连接标识

MamboHR2、Mambo5、Mambo5S已经处于连接状态时，在手环的首屏停留片刻，顶部会弹出蓝牙标识，如果处于断开的状态，顶部弹出的蓝牙标识上有一个“X”符号。Mambo 3已经处于连接状态时，顶部不会出现蓝牙连接图标<br />

- 手环是否在手机附近

乐心手环使用蓝牙和手机连接，所以当连接手机时，手机和手环的距离越近越有利于找到手环。<br />

- 手环是否电量耗尽

如果手环激活，且手环和手机距离很近还是无法寻找到，可能是因为手环没电了。请将手环进行充电，然后再尝试使用手环连接手机。低电量模式（10%以下）下存在连接困难的问题<br />

- 手环被其他手机连接<br />手环近期被别的手机绑定或连接过（m5/m5s等能在表盘上显示蓝牙是否连接），需要主动在蓝牙设置里忽略该设备。此种情况在苹果手机上发生较多，当用户苹果和安卓设备互相切换时，还需要在苹果的蓝牙设置里，把该设备主动忽略掉。排查设备是否曾经被苹果手机绑定，需要主动到苹果手机 - 蓝牙 - 忽略掉该设备（苹果设备强占蓝牙，若不主动忽略，会导致其它设备无法连接），杀掉APP进程，打开然后再次尝试



- 查看手环是否被系统蓝牙连接主动到手机 - 设置 - 蓝牙，查看是否已连接，主动忽略已连接的设备（建议把非在用或不认识的设备，一律忽略掉）



- 给予定位权限并打开定位服务在Android6.0上设备，蓝牙的搜索需要定位权限，且某些机型还需要开启定位服务才能扫描到附近的蓝牙设备，请给予定位权限并开启定位服务尝试。



- 重启App先杀掉当前App进程，然后重新打开。重启后，会检查当前App连接的一些必要条件，并给出提示，重启后打开App首页，即可自动触发连接。



- 重启蓝牙、重启手机或开关飞行模式手机开启下飞行模式，5秒后关闭飞行模式（开启飞行模式关闭后系统会重置手机蓝牙），杀掉APP进程，打开然后再次尝试。经过以上尝试，还是不能连接蓝牙，可以尝试将手机的蓝牙关闭后重新打开，稍等片刻，重新搜索手环，如若还不行尝试重启手机。



- 重启手环用手环的USB充电口，连续插拔充电口三次可以触发手环重启流程，手环重启后，然后再尝试使用手环连接手机。

