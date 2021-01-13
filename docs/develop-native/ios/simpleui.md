<a name="7bc4c412"></a>
# 一、接入模式介绍
1、账号信息通过乐心提供的SDK打通<br />2、客户应用和乐心SDK对接，嵌入SDK中的页面
<a name="eBqBc"></a>
# 二、快速集成
<a name="Oh5Ip"></a>
### 2.1 、pod导入
```ruby
source 'https://github.com/leshiguang/cocoapods.git'

pod 'LZH5SDK'
```
<a name="OK7td"></a>
### 2.2、初始化SDK(登陆前调用)
描述：初始化SDK一些基础信息和功能，应尽早的调用（建议在AppDelegate didFinishLaunchingWithOptions中调用）<br />调用示例：

```objectivec
#import "AppDelegate.h"
#import <lzH5/LZWeb.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [LZWeb initWithTenantName:@"xxx"];    
    return YES;
}

@end

```


- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| String | tenantName | 租户名称 |

<a name="614nX"></a>
#### 
<a name="wx4cp"></a>
### 2.3 登录
描述：第三方账号和乐心账号静默打通， 获取默认的用户ID和token信息<br />调用示例：<br />

```objectivec
#import "ViewController.h"
#import <lzH5/LZWeb.h>

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
	[LZWeb loginWithAppKey:@"xxx" appSecret:@"xxx" associatedId:@"xxx" callback:^(BOOL result) {
        if (result) {
            //登录成功
        } else {
            //登录失败
        }
    }];
}

@end


```


- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| String | appKey | 租户ID，用来隔离数据和服务，公司唯一 |
| String | appSecret | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| String | associatedId | 第三方用户唯一标识，用来做账号打通和静默登录 |
| BOOL | result | 登录结果回调，YES登录成功，NO失败 |


<br />appKey， appSecret需要走申请流程：

- 申请接入需要的材料

准备申请材料：

1. 确定应用接入的（企业）组织名称，并说明使用场景、用途、评估应用接入的量级
1. 确定应用的bundle identifier（appid会对使用的app进行合法性校验）
1. 确定应用需要接入的设备型号列表（如果是进行设备鉴权的话必须填写）
1. 确定应用需要接入的服务（设备、算法、软件服务包）名称（用于获得服务ID和服务版本）

材料确定后，发送申请接入邮件模板如下(前期以这种流程走， 后续sass平台将实现流程化接入)：
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
申请成功将会收到乐心的回复，回复内容中会包含一下信息：<br />1.appKey:对应一个应用<br />2.appSecret:私钥
<a name="HdRE2"></a>
#### 
<a name="AYGQ5"></a>
### 2.3 内置页面打开方式
| 页面功能 | 接口类 | 方法 | 参数 |
| --- | --- | --- | --- |
| 体重首页 | LZWeb | openWeightPage |  |
| 血压首页 |  | openBloodpressurePage |  |
| 心率首页 |  | openHeartRatePage |  |
| 步数首页 |  | openStepPage |  |
| 睡眠首页 |  | openSleepRatePage |  |
|  |  |  |  |




