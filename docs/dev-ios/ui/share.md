<a name="RXOUf"></a>
# 使用自定义的分享实现
<a name="nY8q2"></a>
## 注册桥接口
如果未注册，则使用默认逻辑，如果外部注册了该桥接口，则内部默认逻辑不执行，例如分享小程序<br />在引入了 **pod 'LZShareKit' **情况下，h5页面的分享小程序就会走默认实现，如果你注册了这个桥接口则不会走默认实现，直接执行你的handler
```objectivec
/// 注册桥接口
/// @param handlerName 桥接口名称
/// @param handler 回调， 如果你想回调给js， 需要调用responseCallback(data);
+ (void)registerHandler:(LSJBName)handlerName handler:(LSJBHandler)handler;


/// 例如 处理分享小程序的桥接口
[LSBluetoothUI registerHandler:LSJBShareWxminiProgramName handler:^(id  _Nullable data, LSJBResponseCallback  _Nonnull responseCallback) {
        NSLog(@"data %@", data);
        responseCallback(@{});
    }];
```
| 类型 | Names | 说明 |
| --- | --- | --- |
| LSJBName （NSString *） | handlerName | 乔接口名称<br />///分享小程序的乔接口名称<br />/**<br />​{<br />​"title":"",   //小程序标题<br />"desc":"",     //小程序描述<br />"thumbUrl":"",     //兼容旧版本节点的图片，小于32KB，新版本优先使用WXMiniProgramObject的hdImageData属性<br />​"webpageUrl":"",    //兼容低版本的网页链接<br />​"userName":"",     //小程序的userName,备注:小程序原始ID获取方法：登录小程序管理后台-设置-基本设置-帐号信息<br />​"path":"",   //小程序的页面路径<br />​"hdImageUrl":"",   //小程序新版本的预览图Url，6.5.9及以上版本微信客户端支持。备注：限制大小不超过128KB，自定义图片建议长宽比是 5:4。<br />​"withShareTicket":"",   //是否使用带shareTicket的分享<br />​"miniprogramType":""   //小程序的类型，默认正式版，1.8.1及以上版本开发者工具包支持分享开发版和体验版小程序。 1是正式版，2是测试版，3是体验版<br />​}<br />*/<br />**LSJBShareWxminiProgramName**​

///分享微信图片接口名称 { imageUrl: "imageUrl", scene: 0, // 类型number， 0: 微信好友 1:朋友圈 2:收藏 }<br />​

**LSJBShareWxImageName**<br />​

///保存图片到本地的图片 参数 {imageUrl: "xxx"}<br />**LSJBSaveLocalImageName**<br />​<br /> |
| (id_Nullable data, LSJBResponseCallback responseCallback) | handler | data表示桥接口传的参数，<br />responseCallback表示你处理的结果返回给到webView，一般就返回responseCallback(@{<br />@"code" : @(code),<br />@"errMessage" : errMessage ?: @""<br />}) |

<a name="YEIbw"></a>
## 
<a name="w8dR4"></a>
# 使用默认的分享实现
<a name="FSBhq"></a>
## 通过cocoapod
```python
source 'https://github.com/leshiguang/cocoapods.git'
source 'https://github.com/CocoaPods/Specs.git'

pod 'LSBluetoothUI_iOS', '~> 0.5'

# 如果你想引入分享的默认乔接口处理则需要 LSBluetoothUI_iOS 0.5以上支持
pod 'LZShareKit'
```
<a name="YqZSp"></a>
## SDK链接
| 更新时间 | 版本 | 下载地址 | 更新日志 |
| --- | --- | --- | --- |
| 2021-05-31 | 0.1.0 | [https://raw.githubusercontent.com/leshiguang/Framework/main/LZShareKit/0.1.0/LZShareKit.zip](https://raw.githubusercontent.com/leshiguang/Framework/main/LZShareKit/0.1.0/LZShareKit.zip) | 1、初始化分享库，实现了微信及小程序的一些分享功能，给到LSBluetoothUI_iOS中h5页面使用 |



<a name="P4buT"></a>
## 初始化（在LSBluetoothUI初始化的时候增加两个参数wxAppid、wxUniversalLink ）
```python
#import "AppDelegate.h"
#import <LSBluetoothUI_iOS/LSBluetoothUI.h>

- (void)initSDK {
    LSBluetoothUIConfig *config = [[LSBluetoothUIConfig alloc] init];
    config.appKey = @"xxx";
    config.appSecret = @"xxxxx";
    config.tn = @"xxxx";
    config.debug = YES;
    
    /// 可选 分享桥接口需要使用到微信
    config.wxAppid = @"wx2476166986b43ce4";
    /// 可选 分享桥接口需要使用到微信
    config.wxUniversalLink = @"https://www.lifesense.com/";
    
    [LSBluetoothUI initWithConfig:config];
}
```
<a name="oMkbV"></a>
## 处理回调（没有引入LZShareKit 就不需要，在AppDelegate里面需要调用）
```objectivec

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
    return [LSBluetoothUI handleUrl:url];
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void(^)(NSArray<id<UIUserActivityRestoring>> * __nullable restorableObjects))restorationHandler {
    return [LSBluetoothUI  handleOpenUniversalLink:userActivity];
}

```
<a name="qpFnL"></a>
## 其他项目配置参考微信官方SDK配置
详细参考 [https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html#jump2](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html#jump2)<br />​<br />

