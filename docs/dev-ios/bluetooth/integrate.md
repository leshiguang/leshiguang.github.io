<a name="Sz8dP"></a>
# 快速集成
<a name="UCnol"></a>
## 项目依赖配置
<a name="5ufzw"></a>
#### framework依赖方式
1、解压缩3.1中下载的压缩文件，您将看到一个Framework

- LZBluetooth.framework: 核心的蓝牙库，用户设备的绑定、连接、数据的上传

SDK目前支持的CPU架构为arm64，是个动态库<br />2、在Target->BuildPhase->Link Binary with Libraries 选型卡中， 添加”1“中解压的Framework<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/223399/1610680095972-3b725270-12df-4385-b7cd-a96f2a5670b0.png#align=left&display=inline&height=92&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=1958&size=40827&status=done&style=none&width=979)<br />注：请不要将Status状态设置为Optional，否则会带来image not found异常<br />3、如果您的Target类型为Application，需要在Target->General->Frameworks,Libraries,Embeded Content选项卡中， 将导入的Framework类型设置为Embeded & Sign <br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/223399/1610680041082-f5c12478-8fa5-4166-9b48-9f12c99fbdfc.png#align=left&display=inline&height=89&margin=%5Bobject%20Object%5D&name=image.png&originHeight=178&originWidth=1532&size=44411&status=done&style=none&width=766)
<a name="wvQrb"></a>
#### 通过CocoaPods
```python
# 源
source 'https://github.com/leshiguang/cocoapods.git'

pod 'LZBluetooth', '~> 1.5.4'
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
	[LZBluetooth initWithAppId:@"com.leshiguang.saas.rbac.demo.appid"];
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

