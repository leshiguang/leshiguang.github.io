<a name="7bc4c412"></a>
# 一、接入模式介绍
1、账号信息通过乐心提供的SDK打通<br />2、客户应用和乐心SDK对接，嵌入SDK中的页面
<a name="eBqBc"></a>
# 二、快速集成
<a name="6K3r2"></a>
## 2.1、sdk集成方式
<a name="IlF4c"></a>
### 2.1、依赖及初始化
<a name="m5j66"></a>
#### 2.1.1、添加依赖

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
<a name="ZxsQ0"></a>
#### 2.1.2、初始化SDK
2.1.2.1 初始化(登陆前调用)<br />描述：初始化SDK一些基础信息和功能，应尽早的调用（建议在Application中调用）<br />接口: com.lifesense.weidong.lswebview.webview.LSWebViewManager
```java
init(Context context,String tn)
```

- 参数说明：




| 类型 | Names | 说明 |
| --- | --- | --- |
| Context | context | app上下文 |
| String | tn | 租户名称 |
|  |  |  |

2.1.2.2 登录<br />描述：第三方账号和乐心账号静默打通， 获取默认的用户ID和token信息<br />接口：com.lifesense.weidong.lswebview.webview.LSWebViewManager<br />

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
<a name="mox02"></a>
#### 2.1.3、内置页面打开方式
| 页面功能 | 接口类 | 方法 | 参数 |
| --- | --- | --- | --- |
| 体重首页 | JumpActionManage | jumpWeightHomePage |  |
| 血压首页 |  | jumpBpHomePage |  |
| 心率首页 |  | jumpHRPage |  |
| 步数首页 |  | jumpStepPage |  |
| 睡眠首页 |  | jumpSleepPage |  |
|  |  |  |  |

<a name="IQ7NZ"></a>
## 2.2、直接跳转url集成方式
<a name="xzl7g"></a>
### 2.2.1、token获取
url：https://api-r1.leshiguang.com/sessions-rest/associatedBusiness/loginTenant<br />method：post
<a name="ui3k9"></a>
##### [入参:](https://docs.leshiguang.com/#/develop-cloud/health/login?id=%e5%85%a5%e5%8f%82)
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id | 标识对接用户，双方约定字段 |
| notCreate | boolean | 未查询到关联账号时，是否不做账号新增 | 默认false，即关联id无映射的用户时自动创建 |

<a name="oQ7Eh"></a>
##### [出参:](https://docs.leshiguang.com/#/develop-cloud/health/login?id=%e5%87%ba%e5%8f%82)
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| userId | Long | 用户id |  |
| accessToken | String | 用户登录TOKEN |  |
| needInfo | boolean | 是否为新用户 |  |
| associatedId | String | 同入参associatedId |  |

示例返回报文：
```
{
    "code":200,
    "msg":"成功",
    "data":{
        "userId":1022043,
        "accessToken": "C398C53B98683D3227201352D6A109D2B0D1CDC442A35DDEE5011FA52D34A05F83F1D697CF26B35A9028597DD874262D3CA660981DDD8BC7CC9D5864EF9A6E3C69BB63E5F1CCB7B8EAEFF53B61A5A6CD66D01A2FFFDE8E3A07199FA20DC6D0D92812B9B9C73308EEAA30359D83E9D44AEA22A429F61FFED283E8B4B93BE0E38A.2566C3A45617DAFDE820E02555D3ADBB8141B91FFC524607913A46335D1E9D4C",
        "needInfo":false,
        "associatedId":"xxxx"
    }
}
```


<a name="bGZGo"></a>
### 2.2.2、初始化webview
```
WebSetting ws = webView.getSetting();
ws.setJavaScriptEnabled(true);
ws.setDefaultFontSize(16);
ws.setCacheMode(android.webkit.WebSettings.LOAD_DEFAULT);
ws.setDomStorageEnabled(true);    //开启DOM形式存储
ws.setDatabaseEnabled(true);   //开启数据库形式存储
ws.setAppCacheEnabled(true);  //开启缓存功能
ws.setAllowFileAccess(true);
ws.setSaveFormData(true);//
ws.setSupportZoom(true);
//自适应屏幕
ws.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);
//设置自适应屏幕，两者合用
ws.setUseWideViewPort(true); //将图片调整到适合webview的大小
ws.setLoadWithOverviewMode(true); // 缩放至屏幕的大小
ws.setJavaScriptCanOpenWindowsAutomatically(true); //支持通过JS打开新窗口
if (SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
    ws.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
}
ws.setGeolocationEnabled(true);
ws.setDomStorageEnabled(true);
```
<a name="LvB2z"></a>
### 2.2.3、设置token到webview
在加载页面前设置cookie
```
 private static final HOST = "https://h5.leshiguang.com";
 private final accessToken = "";//2.2.1接口返回
 private final userId = "";//2.2.1接口返回
 public void setCookie() {
        Map<String, String> cookieMap = new HashMap<>();
        cookieMap.put("accessToken", accessToken);
        cookieMap.put("userId", userId);
        cookieMap.put("versionName", "1.0.0");
        ArrayList<String> cookieList = new ArrayList<>();
        for (String key : cookieMap.keySet()) {
            // 如果要设置多个cookie，则要调用多次setCookie，并且都要加上domain和path
            String value = cookieMap.get(key);
            StringBuffer activitiesBuffer = new StringBuffer();
            activitiesBuffer.append(key + "=" + value + ";");
            activitiesBuffer.append("domain=" + HOST.replace("https://","") + ";" + "path=" + "/");
            cookieList.add(activitiesBuffer.toString());
        }
        
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
					CookieSyncManager.createInstance(mWebView.getContext());
				}
				final CookieManager cm = CookieManager.getInstance();
				cm.setAcceptCookie(true);
				if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
					CookieManager.getInstance().setAcceptThirdPartyCookies(mWebView,true);
				}
				for (String value : cookieList) {
					cm.setCookie(HOST, value);
				}
				if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
					CookieSyncManager.getInstance().sync();
				} else {
					CookieManager.getInstance().flush();
				} 
 }
```
<a name="7UaTb"></a>
### 2.2.4、页面跳转
通过webview的loadUrl进行跳转<br />


| 页面功能 | 链接 | 参数 |
| --- | --- | --- |
| 体重首页 | [https://h5.leshiguang.com/weight/0.0.1/perfect.html?tn=](https://h5.leshiguang.com/weight/0.0.1/perfect.html?tn=zhongyizhijia) | tn:租户名称

 |
| 血压首页 | [https://h5.leshiguang.com/bloodpressure/0.0.1/analysis.html?tn=](https://h5.leshiguang.com/bloodpressure/0.0.1/analysis.html?tn=zhongyizhijia) | tn:租户名称 |


<br />
<br />


