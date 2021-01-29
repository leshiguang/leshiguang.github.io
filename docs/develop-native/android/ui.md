<a name="1d2be86b"></a>
# 合作模式介绍
1、设备通过乐心提供的蓝牙SDK绑定设备、上传数据<br />2、数据经过SDK初步处理后， 以回调的方式给到客户APP<br />3、客户APP上传数据到自己的云平台进行数据存储<br />4、客户可在APP或云平台调用乐心开放平台提供的API进行数据分析（睡眠、体重等场景）<br />

<a name="49b9f02f"></a>
# 快速集成
<a name="250a1dc2"></a>
## 接入DEMO
[https://github.com/leshiguang/lz_bluetooth_demo_ios](https://github.com/leshiguang/lz_bluetooth_demo_ios)
<a name="64f6bfd9"></a>
## Pod依赖
1、在podfile中添加source： [https://github.com/leshiguang/cocoapods.git](https://github.com/leshiguang/cocoapods.git)<br />2、添加依赖：pod 'LZUISDK'<br />

<a name="d0dbd0c5"></a>
## 初始化SDK
<a name="c219d5c1"></a>
### 授权登录

- 功能描述：三方登录鉴权
- 接口：
```objectivec
- (void)authorize:(NSString*)appkey andSubscribe:(NSString*)appSecret andThirdUserId:(NSString *)associatedId callback:(void (^)(LSAccountAuthorizeResponse *)) complete;
```


- 参数：appKey，appSecret申请地址： [https://leshiguang.github.io/#/develop-native/apply](https://leshiguang.github.io/#/develop-native/apply)



<a name="w0Oqs"></a>
### 初始化设备管理类

- 功能描述：设置用户Id到LSDeviceManager
- 接口：



```objectivec
- (void)loginWithUserId:(NSString *)userId;
```


<a name="I10ti"></a>
### 乐智UI管理类初始化

- 功能描述：初始化乐智UI,设置用户信息
- 接口：



```objectivec
/// 初始化
/// @param accuountInfo 账号信息
- (void)initBluetoothUISDK:(LSBluetoothUIAccountInfo *)accuountInfo;
```


<a name="LbljQ"></a>
# 更新用户信息


- 功能描述：如果用户信息未设置，可以用这个接口设置用户信息（设置用户信息后， 算法更精确）
- 接口：



```objectivec
/// 更新用户信息
/// @param userInfo 用户信息
- (void)updateUserInfo:(LSBluetoothUIUserInfo *)userInfo completion:(void(^)(LSBluetoothResultType resultType))completion;
```


<a name="dl0pF"></a>
# 数据同步
<a name="cEY4R"></a>
### 开启自动接收数据的服务


```objectivec
[[LSDeviceManager shareInstance] startDataReceiveService];
```


<a name="5738faa5"></a>
### 停止数据接收服务


```objectivec
[[LSDeviceManager shareInstance] stopDataReceiveService];
```
<a name="6trn3"></a>
# 集成UI


<a name="8c0b700f"></a>
### 设备列表


```objectivec
/// 我的设备页面
- (UIViewController *)lsPageBindDeviceList;
```


<a name="64f59ce3"></a>
### 体重


```objectivec
/// 打开体重页面
- (void)lsOpenWeightPage;
```


<a name="872e220c"></a>
### 血压


```objectivec
/// 血压页面
- (void)lsBloodpressurePage;
```


<a name="09f88fda"></a>
### 心率


```objectivec
/// 心率页面
- (void)lsHeartRatePage;
```


<a name="670f6ad7"></a>
### 有氧能力


```objectivec
/// 有氧能力
- (void)lsAerobicRatePage;
```


<a name="ed559002"></a>
### 睡眠


```objectivec
/// 睡眠
- (void)lsSleepRatePage;
```


<a name="1b8a4d49"></a>
### 步数


```objectivec
/// 步数
- (void)lsStepPage;
```

<br />


