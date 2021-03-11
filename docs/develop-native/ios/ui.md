<a name="7bc4c412"></a>
# 一、接入模式介绍
1、账号信息通过乐心提供的SDK打通<br />2、客户应用和乐心SDK对接，嵌入SDK中的页面
<a name="i9Pmn"></a>
# 二、接入申请
<a name="r6AVu"></a>
## 申请授权地址：[https://docs.leshiguang.com/develop-native/apply](https://docs.leshiguang.com/develop-native/apply)
<a name="ZUscR"></a>
# 三、快速集成
<a name="ek11H"></a>
### 2.1、SDK下载



| 版本 | 下载地址 | 更新日志 |
| --- | --- | --- |
| 0.4.0 | [https://raw.githubusercontent.com/leshiguang/Framework/main/LSBluetoothUI_iOS/0.4.0/LSBluetoothUI_iOS.framework.zip](https://raw.githubusercontent.com/leshiguang/Framework/main/LSBluetoothUI_iOS/0.4.0/LSBluetoothUI_iOS.framework.zip) | 1、增加血压设备的支持<br />2、解决h5的一些bug |

<a name="Oh5Ip"></a>
### 2.2、pod导入
```ruby
source 'https://github.com/leshiguang/cocoapods.git'

pod 'LSBluetoothUI_iOS'
```
<a name="OK7td"></a>
### 2.3、初始化SDK(登陆前调用)
描述：初始化SDK一些基础信息和功能，应尽早的调用（建议在AppDelegate didFinishLaunchingWithOptions中调用）<br />调用示例：
```objectivec
#import "AppDelegate.h"
#import <LSBluetoothUI_iOS/LSBluetoothUI.h>

- (void)initSDK {
    LSBluetoothUIConfig *config = [[LSBluetoothUIConfig alloc] init];
    config.appKey = @"xxx";
    config.appSecret = @"xxxxx";
    config.tn = @"xxxx";
    config.debug = YES;
    [LSBluetoothUI initWithConfig:config];
}

```


- 参数说明：
| 类型 | Names | 说明 |
| --- | --- | --- |
| String | appKey | 租户ID，用来隔离数据和服务，公司唯一 |
| String | appSecret | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| String | tn | 渠道 |
| BOOL | debug | 是否打印日志 |



<a name="614nX"></a>
#### 
<a name="wx4cp"></a>
### 2.4 登录登出
描述：第三方账号和乐心账号静默打通， 获取默认的用户ID和token信息<br />调用示例：<br />

```objectivec
#import "ViewController.h"
#import <LSBluetoothUI_iOS/LSBluetoothUI.h>

/// 登陆用户id（主要作用是标示用户的）
/// @param associatedId 用户id
/// @param completion 回调
+ (void)loginWithAssociatedId:(NSString *)associatedId completion:(void(^)(BOOL result))completion;

/// 用户退出的时候调用
+ (void)logout;


```


- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| String | associatedId | 第三方用户唯一标识，用来做账号打通和静默登录 |
| BOOL | result | 登录结果回调，YES登录成功，NO失败 |




<a name="HdRE2"></a>
#### 
<a name="AYGQ5"></a>
### 2.5 内置页面打开方式
```objectivec
/// 直接跳转某页面，会获取到最近的navigationController push
/// @param page 页面类型
+ (void)openPage:(LSPage)page;

/// 通过页面类型获取到对应的viewController
/// @param page 页面类型
+ (UIViewController *)viewControllerWithPage:(LSPage)page;
```

- 参数
| 类型 | Names | 说明 |
| --- | --- | --- |
| LSPage | page | /// 步数页面<br />    LSPageStep,<br />    /// 血压页面<br />    LSPageBloodPressure,<br />    /// 心率<br />    LSPageHr,<br />    /// 体重<br />    LSPageWeight,<br />    /// 睡眠<br />    LSPageSleep,<br />    /// 设备列表<br />    LSPageDeviceList |

<a name="QE8d4"></a>
### 
<a name="q1sxl"></a>
### 2.6 监听数据的接收
```objectivec
- (void)addDelegate {
	[LSBluetoothUI addDelegate:self];
}

#pragma mark - LSDeviceManagerDelegate
- (void)deviceDidReceiveMeasurementDatas:(NSArray<__kindof LSReceiveData *> *)measurementDatas dataType:(LSMeasurementDataType)dataType {
    if (dataType == LSMeasurementDataTypeWeight) {
        NSLog(@"体重数据");
    }
    NSLog(@"receiveData %@", measurementDatas);
}

```


<a name="mmyQr"></a>
### 2.7 demo
[https://github.com/leshiguang/lz_bluetooth_demo_ios.git](https://github.com/leshiguang/lz_bluetooth_demo_ios.git)

