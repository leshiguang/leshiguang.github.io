<a name="Sz8dP"></a>
# 快速集成
<a name="UCnol"></a>
## 项目依赖配置
<a name="5ufzw"></a>
#### framework依赖方式
1、解压缩3.1中下载所需的压缩文件

- LZBluetooth.framework: 核心的蓝牙库，用户设备的绑定、连接、数据的上传 （2.0以上将各个设备的支持单独分出去了）
- LZBracelet.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
- LZScale.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
- LZBox.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
- LZBloodPressure.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
- LZSkip.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））

SDK目前支持的CPU架构为arm64，是个动态库<br />2、在Target->BuildPhase->Link Binary with Libraries 选型卡中， 添加”1“中解压的Framework<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/223399/1610680095972-3b725270-12df-4385-b7cd-a96f2a5670b0.png#crop=0&crop=0&crop=1&crop=1&height=92&id=VoiAv&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=1958&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40827&status=done&style=none&title=&width=979)<br />注：请不要将Status状态设置为Optional，否则会带来image not found异常<br />3、如果您的Target类型为Application，需要在Target->General->Frameworks,Libraries,Embeded Content选项卡中， 将导入的Framework类型设置为Embeded & Sign <br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/223399/1610680041082-f5c12478-8fa5-4166-9b48-9f12c99fbdfc.png#crop=0&crop=0&crop=1&crop=1&height=89&id=VkOf8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=178&originWidth=1532&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44411&status=done&style=none&title=&width=766)
<a name="wvQrb"></a>
#### 通过CocoaPods
```python
# 源
source 'https://github.com/leshiguang/cocoapods.git'

pod 'LZBluetooth', '~> 2.0' 	// 请按照版本发布记录使用最新版本
pod 'LZBracelet'				// 支持手环&手表 可选
pod 'LZScale'					// 支持体脂秤	可选
pod 'LZBox'						// 支持药盒		可选
pod 'LZBloodPressure'			// 支持血压计	可选
pod 'LZSkip'					// 支持跳绳	可选
```

<a name="A1NbP"></a>
## Info.plist 权限控制
由于SDK中需要使用到蓝牙权限， 需要在主工程的info.plist中添加蓝牙权限使用声明：

- NSBluetoothPeripheralUsageDescription：A message that tells the user why the app is requesting the ability to connect to Bluetooth peripherals.(告诉用户为什么需要连接蓝牙外设)
- NSBluetoothAlwaysUsageDescription：A message that tells the user why the app needs access to Bluetooth.（告诉用户为什么需要访问蓝牙权限）

<a name="cf2a4d11"></a>
## SDK初始化
```objectivec
#import <LZBluetooth/LZBluetooth.h>

@interface YourManager () <LZDeviceDelegate>

@end

@implementation YourManager

- (void)initSDK() {
    /// 1、通过appid初始化
	[LZBluetooth initWithAppId:@"com.leshiguang.saas.rbac.demo.appid" options:@{
        @"ctei": @NO,	// 是否支持ctei，一般用户不需要设置这个
        @"debug": @YES,	// 是否打印debug日志
        @"associatedId": @"xxx"	// 用户的标识，一般输入自己用户的id，方便追踪问题
    }];
    /// 2、获取设备管理者，其负责设备的查找、绑定、连接，其拥有delegate，可以监听设备数据
    id<LZDeviceManagerProtocol> deviceManager = [LZBluetooth getDeviceManagerWithDeviceTypes:@[
        @(LZDeviceTypeBracelet),
        @(LZDeviceTypeScale),
        @(LZDeviceTypeBloodPressure)
    ]];
    /// 3、设置设备相关的代理
    deviceManager.delegate = self;
    /// 4、设备连接时设置到设备的用户信息，用户信息发生变更时也可以重新设置
    deviceManager.userInfoConfig = [[LZUserInfoConfig alloc] init];
    /// 5、如果你想看日志，可以通过设置下面的方法来监听日志，不设置，则无日志
    [LZLogger shareInstance].loggerHandler = ^(LZLoggerLevel level, NSString * _Nonnull msg) {
        NSLog(@"[%@]%@", @(level), msg);
    };
}

#pragma mark - LZDeviceDelegate 设备状态发生变化
- (void)device:(id<LZDeviceProtocol>)device didReceiveMeasurementData:(id<LZMeasurementDataProtocol>)measurementData {
    NSLog(@"收到测量数据 %@", measurementData);
}

- (void)deviceDidUpdateConnectStatus:(id<LZDeviceProtocol>)device {
    NSLog(@"连接状态发生变化 %ld", device.connectStatus);
}

- (void)deviceDidUpdateBatteryStatus:(id<LZDeviceProtocol>)device {
    NSLog(@"收到电量 %@", device.batteryInfo);
}
```

集成和初始化工作做完， 下一步您需要开始绑定硬件设备：[绑定流程](/dev-ios/bluetooth/reference/device)

<a name="pfwHS"></a>
## 1.7.2之前的SDK 升级到2.0需要注意的地方

- 初始化方法变为**initWithAppId:options:**，options是有三个设置项，如下：
```objectivec
/// 1、通过appid初始化
	[LZBluetooth initWithAppId:@"com.leshiguang.saas.rbac.demo.appid" options:@{
        @"ctei": @NO,	// 是否支持ctei，一般用户不需要设置这个
        @"debug": @YES,	// 是否打印debug日志
        @"associatedId": @"xxx"	// 用户的标识，一般输入自己用户的id，方便追踪问题
    }];
```

- 使用pod的时候，需要将你所需设备对应的分包给引入，将LZBluetooth版本升级到2.0.0， 对应关系
   - LZBluetooth.framework: 核心的蓝牙库，用户设备的绑定、连接、数据的上传 （2.0以上将各个设备的支持单独分出去了）
   - LZBracelet.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
   - LZScale.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
   - LZBox.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
   - LZBloodPressure.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
   - LZSkip.framework: 支持手环&手表的库 （依赖LZBluetooth（2.0.0））
- 如果报Use of undeclared identifie ‘xxx’的错误，是因为设置所对应的类与数据所对应的类都在各个设备的分包中，你只需要引入对应的头文件即可，如下：
```objectivec
/// 1、引入手环设置项或者数据的头文件, 需要在pod文件加入 pod 'LZBracelet'
@import LZBracelet;
或者
#import <LZBracelet/LZBracelet.h>

/// 2、引入体脂秤设置项或者数据的头文件, 需要在pod文件加入 pod 'LZScale'
@import LZScale;
或者
#import <LZScale/LZScale.h>

/// 3、引入血压计设置项或者数据的头文件, 需要在pod文件加入 pod 'LZBloodPressure'
@import LZBloodPressure;
或者
#import <LZBloodPressure/LZBloodPressure.h>

/// 4、引入跳绳设置项或者数据的头文件, 需要在pod文件加入 pod 'LZSkip'
@import LZSkip;
或者
#import <LZSkip/LZSkip.h>

/// 5、引入药盒设置项或者数据的头文件, 需要在pod文件加入 pod 'LZBox'
@import LZBox;
或者
#import <LZBox/LZBox.h>

```



