<a name="RXOUf"></a>
# 自定义分享
<a name="la2qb"></a>
## 注册桥接口
如果未注册，则使用默认逻辑，如果外部注册了该桥接口，则内部默认逻辑不执行，例如分享小程序<br />在引入了 **aar包 lifesense-android-share-service **情况下，h5页面的分享小程序就会走默认实现，如果你注册了这个桥接口则不会走默认实现，直接执行你的handler
```objectivec
public void registerBridgeHandler(String handlerName, BridgeHandler bridgeHandler)
```
参数说明：<br />handlerName：桥接口名称<br />bridgeHandler：桥接口处理接口<br />​

BridgeHandler

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| handlerName | String | 桥接口名称 |
| data | String | 参数 |
| function | CallbackFunction | 回调给js数据的函数 |

​

预定义分享桥接口名称

| 名称 | 描述 |  参数 |
| --- | --- | --- |
| shareImageToWxImmediately | 分享图片到微信 | { imageUrl: "imageUrl", scene: 0, // 类型number， 0: 微信好友 1:朋友圈 2:收藏 } |
| saveImageToLocal | 保存图片到本地 |  {imageUrl: "xxx"} |
| shareMiniProgramToWxImmediately | 分享小程序卡片到微信 | {<br />​"title":"",   //小程序标题<br />"desc":"",     //小程序描述<br />"thumbUrl":"",     //兼容旧版本节点的图片，小于32KB，新版本优先使用WXMiniProgramObject的hdImageData属性<br />​"webpageUrl":"",    //兼容低版本的网页链接<br />​"userName":"",     //小程序的userName,备注:小程序原始ID获取方法：登录小程序管理后台-设置-基本设置-帐号信息<br />​"path":"",   //小程序的页面路径<br />​"hdImageUrl":"",   //小程序新版本的预览图Url，6.5.9及以上版本微信客户端支持。备注：限制大小不超过128KB，自定义图片建议长宽比是 5:4。<br />​"withShareTicket":"",   //是否使用带shareTicket的分享<br />​"miniprogramType":""   //小程序的类型，默认正式版，1.8.1及以上版本开发者工具包支持分享开发版和体验版小程序。 1是正式版，2是测试版，3是体验版<br />} |

<a name="w8dR4"></a>
# 默认分享
<a name="FSBhq"></a>
## 下载分享sdk
| 更新时间 | 版本 | 下载地址 | 更新日志 |
| --- | --- | --- | --- |
| 2021-05-31 | 0.0.0 | [https://github.com/leshiguang/maven-repository/packages/820661](https://github.com/leshiguang/maven-repository/packages/820661) | 1、初始化分享库，实现了微信及小程序的一些分享功能 |



<a name="P4buT"></a>
## 初始化
```java
 Config config = new Config();
 config.setAppKey("lx123456");
 config.setAppSecret("abcdefg");
 config.setTn("tangchen");
 config.setDebug(true);
 ShareConfig shareConfig = new ShareConfig.Builder().wx("wx123456","abcdefg").build();
 config.setShareConfig(shareConfig);
 LZHealth.getInstance().init(this,config);
```
在应用包名目录下新建wxapi目录并新建一个继承ShareActionActivity和实现IWXAPIEventHandler接口的类
```java
public class WXEntryActivity extends ShareActionActivity implements IWXAPIEventHandler {
	public void onReq(BaseReq baseReq) {
	}
	public void onResp(BaseResp resp) {
		this.handleResp(resp);
	}
}
```
​<br />

