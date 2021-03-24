<a name="ek11H"></a>
### Framework集成方式
1、将下载的SDK 解压后找到 LSBluetoothUI_iOS.framework

- SDK目前支持的CPU架构为arm64，是个动态库

2、在Target->BuildPhase->Link Binary with Libraries 选型卡中， 添加”1“中解压的Framework<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/223399/1610680095972-3b725270-12df-4385-b7cd-a96f2a5670b0.png#align=left&display=inline&height=92&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=1958&size=40827&status=done&style=none&width=979#align=left&display=inline&height=184&margin=%5Bobject%20Object%5D&originHeight=184&originWidth=1958&status=done&style=none&width=1958)<br />注：请不要将Status状态设置为Optional，否则会带来image not found异常<br />3、如果您的Target类型为Application，需要在Target->General->Frameworks,Libraries,Embeded Content选项卡中， 将导入的Framework类型设置为Embeded & Sign<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/223399/1610680041082-f5c12478-8fa5-4166-9b48-9f12c99fbdfc.png#align=left&display=inline&height=89&margin=%5Bobject%20Object%5D&name=image.png&originHeight=178&originWidth=1532&size=44411&status=done&style=none&width=766#align=left&display=inline&height=178&margin=%5Bobject%20Object%5D&originHeight=178&originWidth=1532&status=done&style=none&width=1532)<br />

<a name="Oh5Ip"></a>
### CocoaPod 集成方式
```ruby
source 'https://github.com/leshiguang/cocoapods.git'

pod 'LSBluetoothUI_iOS'
```
<a name="OK7td"></a>
### 初始化SDK(登陆前调用)
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
### 登录登出
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




