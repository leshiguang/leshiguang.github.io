# 体脂秤SDK集成文档-iOS

<a name="7bc4c412"></a>
#
<a name="sTrnf"></a>
# 一、私有库/Framework说明
<a name="sTiqn"></a>
#### 1.1、LSBluetooth_Scale.framework

- 蓝牙连接相关
<a name="GlNwV"></a>
#### 1.2、LSDevice_Integrate.framework

- 设备连接相关
<a name="Z3ob1"></a>
#### 1.3、LSWebBrowser_Scale

- 体重内容展示，webview相关
<a name="uGFYN"></a>
#### 1.4、LSDeviceUIModule_Scale

- 设备绑定连接界面
<a name="AogDt"></a>
#### 1.5、LSMediator_iOS

- 中间件
<a name="uKZke"></a>
#### 1.6、LSAuthorization

- 授权相关
<a name="MMJe1"></a>
#### 1.7、LSNetwork_iOS

- 网络库
<a name="aZ89g"></a>
#### 1.8、LSLocalizable

- 国际化配置
<a name="sEoVh"></a>
#### 1.9、LSModule

- 组件化工具

<br />
<a name="W7nzN"></a>
## 二、快速集成
<a name="VVDEb"></a>
#### 2.1、Podfile文件添加依赖
```
source 'https://gitlab.lifesense.com/commonlib_ios/CocoaPodsSpecs.git'

pod 'LSWebBrowser_Scale'
pod 'LSBluetooth_Scale'
pod 'LSDevice_Integrate'
pod 'LSDeviceUIModule_Scale'
pod 'LSMediator_iOS'
pod 'LSAuthorization'
pod 'LSNetwork_iOS'
pod 'LSLocalizable'

```
执行 pod install 命令

<a name="JnGBE"></a>
#### 2.2、初始化SDK（登录）

- LSWeightManager  注册（登录）manager
```objectivec
/*
 * 注册SDK使用的方法
 * block 回调结果
 */
 - (void)initWeightSDK:(LSWeightInitConfig *)initConfig withComplete:(WeightInitConfigBlock)block
```


- LSWeightInitConfig  初始化（登录参数配置）

参数说明：<br />


| 类型 | Names | 说明 |
| --- | --- | --- |
| NSInteger | tenantId | 租户ID，用来隔离数据和服务，公司唯一 |
| NSInteger | subscriptionId | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| NSString | associationId | 第三方用户唯一标识，用来做账号打通和静默登录 |



<a name="Scahp"></a>
#### 2.3、 进入体重详情页面

- 获取体重Controller，并跳转
```objectivec
[[LSWeightManager shareInstance] weightWebDetailVC:^(UIViewController *vc) {
       __strong typeof(weakSelf)strongSelf = weakSelf;
        [strongSelf.navigationController pushViewController:vc animated:YES];
}];
```
> <br />

<a name="Hh85k"></a>
#### 2.4、进入设备连接绑定页面

- 获取设备绑定Controller，并跳转
```objectivec
__weak typeof(self)weakSelf = self;
[[LSWeightManager shareInstance] enterBindDeviceList:^(UIViewController *vc) {    
    __strong typeof(weakSelf)strongSelf = weakSelf;    
    [strongSelf.navigationController pushViewController:vc animated:YES];
}];
```



<a name="07ded91b"></a>
# 三、绑定设备指引


<a name="66f6ef77"></a>
## 3.1、绑定流程
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1596089032233-e5c7531c-39d8-4837-840f-be6d914d8d42.png#align=left&display=inline&height=464&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=1008&size=69529&status=done&style=none&width=1008)
<a name="6ddeaa40"></a>
## 3.2、搜索绑定设备


<a name="d4d1c408"></a>
### 3.2.1、搜索设备


- 功能描述：根据目标产品信息搜索蓝牙设备，返回单个搜索到的设备，需要开发者自己聚合
- LSDevice_Integrate.framework
```objectivec
// LSDeviceManager+Bind.h
/**
 * 搜索设备,在结束配对流程后需要调用调用startDataReceiveService
 *
 */
- (void)searchDevice:(LSEProductInfo *)productInfo searchBlock:(LSESearchBlock)searchBlock;

```
LSEProductInfo 参数说明：

| 类型 | Names | 说明 |
| --- | --- | --- |
| NSString | name | 产品名称 |
| NSString | imageUrl | 设备图片Url |
| NSArray<FactoryProducts *> | factoryProducts | 包含的工厂产品 |


<br />FactoryProducts 参数说明：

| 类型 | Names | 说明 |
| --- | --- | --- |
| NSString | model | 工厂型号 |
| NSString | transferProtocal | 传输协议 |
| NSString | serviceUUID | serviceUUID |
| NSString | name | 产品名称 |
| NSInteger | configureManne | 配网方式 |



- 开始搜索设备前，需要先检测蓝牙开关状态
```objectivec
[[LSDeviceManager shareInstance] isBleEnableCompletion:^(BOOL isOpenFlags) {
    [[LSDeviceManager shareInstance] searchDevice:self.productInfo searchBlock:^(LSEDeviceInfo *info, NSInteger rssi) {

    }];
}];
```

<br />

<a name="ddc4f5cb"></a>
### 3.2.2、停止搜索设备（分支情况）


- 功能描述：中断正在进行中的搜索，开发者一般在离开搜索页面或搜索结束时调用，内部调用逻辑不做描述
- 接口：com.lifesense.component.devicemanager.application.interfaces.ILZDeviceBindService



- LSDevice_Integrate.framework
```objectivec
// LSDeviceManager+Bind.h
/**
 * 停止搜索设备
 */
- (void)stopSearchDevice:(LSEStopSearchBlock)stopSearchBlock;
```


<a name="20d28fc9"></a>
### 3.2.3、 绑定搜索到的设备


- 功能描述：开始绑定用户从搜索到的设备列表中（来自1.2.1.1）选择的设备
- LSDevice_Integrate.framework
```objectivec
// LSDeviceManager+Bind.h
/**
 *  根据搜索的结果绑定手环
 */
- (void)pairDevice:(LSEDeviceInfo *)deviceInfo;
```


- LSEDeviceInfo 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| NSString | displayName | 设备展示名称 |
| NSString | name | 设备广播名 |
| NSString | mac | 设备MAC地址 |
| NSString | model | 型号 |
| NSString | protocolType | 协议版本 |
| NSInteger | rssi | rssi 信号强度，越小越强 |
| BOOL | isReg | 是否注册 |
| NSString | vendorID | 厂商ID |
| NSString | broadcastId | 广播Id |
| int | deviceType | 设备类型 |


<br />2、 监听绑定结果<br />添加delegate
```objectivec
#import "LSMediator_iOS/LSModuleManager+Observe.h"
#import <LSMediator_iOS/LSDeviceComponentObserveService.h>

@interface LSWBluetoothSearchBindingViewController () <LSDeviceComponentObserveService>

@end

- (void)viewDidLoad {
	[super viewDidLoad];
    LSAddSelfObserveService(LSDeviceComponentObserveService);
}

//绑定结果回调
- (void)onBindStatusChange:(LSEBindStatusCode)bindCode device:(Device *)device deviceUsers:(NSArray<DeviceUser *> *)deviceUsers netCode:(NSInteger)netCode netMsg:(NSString *)netMsg object:(NSObject *)object {
    switch (bindCode) {
        case LSEBindStatusSuccessful: {
            break;
        }
        case LSEBindStatusFail: {
            break;
        }
        case LSEBindUnBindFailure: { // 解绑失败
        	break;
        }
        case LSEBindUnBindSuccessful: {  // 解绑成功
            break;
        }
    }
}


```


<a name="26e7c9f8"></a>
### 3.2.4、中断绑定流程


- 功能描述：中断正在绑定中的设备，一般发生在搜索成功后， 绑定成功前用户接受进程或退出绑定页面
- LSDevice_Integrate.framework
```objectivec
// LSDeviceManager+Bind.h

/**
 * 取消绑定
 */
- (void)cancelPair:(LSEDeviceInfo *)deviceInfo completionBlock:(Completion)completion;
```

<br />

<a name="6cc4e1c5"></a>
## 3.3、获取用户已经绑定的设备列表


- 功能描述：根据目标产品信息搜索蓝牙设备，返回单个搜索到的设备，需要开发者自己聚合
- LSDevice_Integrate.framework
```objectivec
// LSDeviceManager+Device.h
/**
 *  获取已绑定的设备列表(同步方式)
 */
- (NSArray *)getBoundDevices;
```


<a name="f7ef2051"></a>
## 3.4、解绑


- 功能描述：接触设备与当前用户的绑定关系
- LSDevice_Integrate.framework
```objectivec
// LSDeviceManager+Device.h
/**
 *  解除绑定
 *
 *  @param deviceId   设备id
 *  @param userId     用户id
 *  @param completion 回调
 */
- (void)unBindingDevice:(NSString *)deviceId userId:(NSNumber *)userId Completion:(void(^)(int code,NSString *msg))completion;

```


- 参数定义：
| 类型 | Names | 说明 |
| --- | --- | --- |
| NSString | deviceId | 设备ID |
| NSNumber | userId | 用户id |
| Block | completion | 解绑回调 |



<a name="c243f848"></a>
# 四、体脂秤设置


<a name="5a3dfd4a"></a>
## 4.1、单位设置


- 功能描述：设置体脂秤重量单位
- LSDevice_Integrate.framework
```objectivec
//  LSDeviceManager+Weight.h
/**
 *  设置体重单位
 *
 *  @param deviceId   设备id
 *  @param unitType   单位
 *  @param completion 回调
 */
- (void)setWeightUnit:(NSString *)deviceId unitType:(LSWeightUnit)unitType
           completion:(Completion)completion;
```

<br />LSWeightUnit定义：

| name | value | 说明 |
| --- | --- | --- |
| LSWeightUnitKg | 0 | 公斤 |
| LSWeightUnitLb | 1 | 磅 |
| LSWeightUnitSt | 2 | 英石 |
| LSWeightUnitJin | 3 | 斤 |



<a name="909fb82c"></a>
## 4.2、获取单位


- 功能描述：获取体脂秤的单位
- LSDevice_Integrate.framework
```objectivec
//  LSDeviceManager+Weight.h
/**
 *  查询体重单位
 *
 *  @param deviceId 设备id
 *
 *  @return 单位
 */
- (UnitType)getWeightUnit:(NSString *)deviceId;

```

<br />返回值含义：

| name | value | 说明 |
| --- | --- | --- |
| KG | 1 | 千克 |
| JIN | 2 | 斤 |
| POUNDS | 3 | 磅 |
| M | 4 | 米 |
| KM | 5 | 公里 |
| St | 6 | 英石 |
| GONGJIN | 7 | 中文公斤 |


<br />
<br />

<a name="2b4e4b54"></a>
# 五、接收数据


<a name="e8a17748"></a>
## 5.1、订阅数据
5.1.1、API

- LSDevice_Integrate.framework
```objectivec
//  LSDeviceManager+Connect.h
- (BOOL)startDataReceiveService;
```
5.1.2、订阅
```objectivec

@interface ** () <LSDeviceWeightObserveService>

@end

- (void)viewDidLoad {
	[super viewDidLoad];
    LSAddSelfObserveService(LSDeviceWeightObserveService);
    // 开始接收数据
   	[[LSDeviceManager shareInstance] startDataReceiveService];
}

- (void)onReceiveDeviceWeightData:(WeightData *)weightData {

}


```

<br />WeightData属性定义

| 类型 | 参数 | 说明 |
| --- | --- | --- |
| double | weight | 体重数据  |
| double | bmi | 体质数据 |
| double | pbf | 脂肪率 |
| double | bone | 骨骼量 |
| double | water | 水分率 |
| double | muscle | 肌肉量 |
| int | weightLevel | 体重水平 |
| double | resistance5K | 电阻值 |
| double | resistance50K | 电阻值 |
| double | measureTime | 测量时间 |
| int | battery | 电量（1-10） |
| NSString | id | 体重id  |
