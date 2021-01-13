<a name="7bc4c412"></a>
# 一、接入模式介绍
1、账号信息通过乐心提供的SDK打通<br />2、客户应用和乐心SDK对接，嵌入SDK中的页面
<a name="eBqBc"></a>
# 二、快速集成
<a name="2d622f6d"></a>
## 2.1、依赖及初始化
<a name="OK7td"></a>
### 2.1.1、添加依赖

<br />拷贝所需的aar包到libs目录下：

- [lifesense-android-simple-webview-service](https://github.com/leshiguang/maven-repository/packages/571063)：webview实现部分， 处理webview的桥接口、缓存等逻辑

在module的build.gradle中添加本地aar仓库地址：
```groovy
repositories {
    flatDir {
        dirs 'libs'
    }
}
```

<br />在项目的build.gradle中添加依赖：<br />

```groovy
    implementation fileTree(dir: 'libs', include: ['*.aar'])
    api "androidx.annotation:annotation:1.1.0"
    api "androidx.appcompat:appcompat:1.1.0"
    api "androidx.recyclerview:recyclerview:1.1.0"
    api "org.apache.commons:commons-lang3:3.6"
    api "org.apache.commons:commons-collections4:4.0"
    api "com.nostra13.universalimageloader:universal-image-loader:1.9.5"
    api "com.alibaba:fastjson:1.1.70.android"
```
<a name="90d8b7c9"></a>
### 2.1.2、初始化SDK
<a name="o2XHX"></a>
#### 2.1.2.1 初始化(登陆前调用)
描述：初始化SDK一些基础信息和功能，应尽早的调用（建议在Application中调用）<br />接口: com.lifesense.weidong.lswebview.webview.LSWebViewManager
```java
init(Context context,String tn)
```

- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| Context | context | app上下文 |
| String | tn | 租户名称 |
|  |  |  |

<a name="614nX"></a>
#### 2.1.2.2 登录
描述：第三方账号和乐心账号静默打通， 获取默认的用户ID和token信息<br />接口：com.lifesense.weidong.lswebview.webview.LSWebViewManager<br />

```java
login( String appKey, String appSecret,String associatedId, final OnLoginCallback callback)
```


- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| String | appKey | 租户ID，用来隔离数据和服务，公司唯一 |
| String | appSecret | 订阅ID，标识订阅的服务和隔离数据，应用唯一 |
| String | associationId | 第三方用户唯一标识，用来做账号打通和静默登录 |
| OnLoginCallback | callback | 登陆状态回调，只有回调onLoginSuccess后才能进行后续的页面跳转 |


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
### 2.1.3 内置页面打开方式
| 页面功能 | 接口类 | 方法 | 参数 |
| --- | --- | --- | --- |
| 体重首页 | JumpActionManage | jumpWeightHomePage |  |
| 血压首页 |  | jumpBpHomePage |  |
| 心率首页 |  | jumpHRPage |  |
| 步数首页 |  | jumpStepPage |  |
| 睡眠首页 |  | jumpSleepPage |  |
|  |  |  |  |




