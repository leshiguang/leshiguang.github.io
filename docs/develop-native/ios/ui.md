<a name="1d2be86b"></a>
# 一、合作方式


<a name="974b0860"></a>
## 1.1 合作模式介绍

<br />1、设备通过乐心提供的蓝牙SDK绑定设备、上传数据<br />2、数据经过SDK初步处理后， 以回调的方式给到客户APP<br />3、客户APP上传数据到自己的云平台进行数据存储<br />4、客户可在APP或云平台调用乐心开放平台提供的API进行数据分析（睡眠、体重等场景）<br />

<a name="9561480b"></a>
## 1.2、SDK支持接入的设备
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
|  | S20、S30 |
|  | A1-F |
| 血压计 | i7蓝牙版 |



<a name="49b9f02f"></a>
# 二、快速集成
<a name="250a1dc2"></a>
## 2.1、蓝牙SDK下载（[Demo](https://github.com/leshiguang/lz_bluetooth_demo_ios)）
| 版本 | 下载地址 | 版本更新日志 |
| --- | --- | --- |
| 1.0 | [LZ_UI_Framework-1.0](http://qi4q5rivb.hn-bkt.clouddn.com/LZ_UI_framework_1.0.zip) | 初始版本 |



<a name="64f6bfd9"></a>
## 2.2、项目依赖配置
1、项目中依赖的framework<br />LSAuthorization.framework         三方登录鉴权<br />LSBluetooth.framework              核心蓝牙库， 处理传输层和链路层数据，维持设备连接和通信<br />LSBluetoothUI_iOS.framework     乐智UI解决方案接入<br />LSDeviceManagerFramework.framework     设备核心库， 处理设备管理、设置和数据上传<br />LSNetwork_iOS.framework         网络库，打通IOT平台<br />
<br />2、三方依赖库，可用pod导入<br />

```objectivec
pod 'YYModel'
pod 'Masonry'
pod 'IQKeyboardManager', '5.0.8'
pod 'SDWebImage', '4.2.3'
pod 'MBProgressHUD', '0.9.2'
```

<br />3、引入头文件<br />

```objectivec
#import <LSDeviceManagerFramework/LSDeviceManager.h>
#import <LSAuthorization/LSAuthorization.h>
```


<a name="d0dbd0c5"></a>
## 2.3 初始化SDK
<a name="c219d5c1"></a>
### 2.3.1 登录

- 功能描述：三方登录鉴权
- 接口：
```objectivec
- (void)authorize:(NSInteger)tenantId andSubscribe:(NSInteger)subscriptionId andThirdUserId:(NSString *)associatedId callback:(void (^)(LSAccountAuthorizeResponse *)) complete;
```


- 参数：appKey， appSec需要走申请流程（测试接入两个值可以固定为1、6）


<br />申请接入需要的材料 <br />准备申请材料：

1. 确定应用接入的（企业）组织名称，并说明使用场景、用途、评估应用接入的量级 
1. 确定应用的bundle identifier（appid会对使用的app进行合法性校验）
1. 确定应用需要接入的设备型号列表（如果是进行设备鉴权的话必须填写）
1. 确定应用需要接入的服务（设备、算法、软件服务包）名称（用于获得服务ID和服务版本）<br />材料确定后，发送申请接入邮件模板如下：



```
收件人：zhihui.xiao@lifesense.com
抄送：zheng.lu@lifesense.com,yong.wu@lifesense.com,zhicheng.liu@lifesense.com,chuang.liu@lifesense.com,bangwei.mo@lifesense.com
主题：【健康解决方案接入申请】（企业/组织/个人名称）
邮件内容需要包含：
1、接入目的：
2、接入的设备类型和型号：
3、接入的产品服务：
4、bundleID：（ios和android的包ID， 用于备案）
```

<br />5、设置LSDeviceManager登录态<br />

- 功能描述：设置用户Id到LSDeviceManager
- 接口：



```objectivec
- (void)loginWithUserId:(NSString *)userId;
```

<br />6、调用乐智UI初始化<br />

- 功能描述：初始化乐智UI,设置用户信息
- 接口：



```objectivec
/// 初始化
/// @param accuountInfo 账号信息
- (void)initBluetoothUISDK:(LSBluetoothUIAccountInfo *)accuountInfo;
```


<a name="cf2f1d46"></a>
### 2.3.3、开启自动接收数据的服务


```objectivec
[[LSDeviceManager shareInstance] startDataReceiveService];
```


<a name="5738faa5"></a>
### 2.3.4、停止数据接收服务


```objectivec
[[LSBLEDeviceManager defaultLsBleManager] stopDataReceiveService];
```


<a name="6trn3"></a>
# 三、乐智UI


<a name="f18377ec"></a>
## 3.1、更新用户信息


- 功能描述：如果用户信息未设置，可以用这个接口设置用户信息
- 接口：



```objectivec
/// 更新用户信息
/// @param userInfo 用户信息
- (void)updateUserInfo:(LSBluetoothUIUserInfo *)userInfo completion:(void(^)(LSBluetoothResultType resultType))completion;
```


<a name="b1887611"></a>
## 3.2、调用UI页面


<a name="ed4ccbcf"></a>
### 3.2.1、获取设备列表页


```objectivec
/// 设备列表页面
- (UIViewController *)lsPageDeviceList;
```


<a name="8c0b700f"></a>
### 3.2.2、获取我的设备页面


```objectivec
/// 我的设备页面
- (UIViewController *)lsPageBindDeviceList;
```


<a name="64f59ce3"></a>
### 3.2.3、打开体重页面


```objectivec
/// 打开体重页面
- (void)lsOpenWeightPage;
```


<a name="872e220c"></a>
### 3.2.4、打开血压页面


```objectivec
/// 血压页面
- (void)lsBloodpressurePage;
```


<a name="09f88fda"></a>
### 3.2.5、打开心率页面


```objectivec
/// 心率页面
- (void)lsHeartRatePage;
```


<a name="670f6ad7"></a>
### 3.2.6、打开有氧能力页面


```objectivec
/// 有氧能力
- (void)lsAerobicRatePage;
```


<a name="ed559002"></a>
### 3.2.7、打开睡眠页面


```objectivec
/// 睡眠
- (void)lsSleepRatePage;
```


<a name="1b8a4d49"></a>
### 3.2.5、打开步数页面


```objectivec
/// 步数
- (void)lsStepPage;
```

<br />


