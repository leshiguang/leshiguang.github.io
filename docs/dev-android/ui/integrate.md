<a name="wAasu"></a>
## 添加依赖
拷贝下载的aar包到libs目录下：

- [lifesense-android-health-service](https://github.com/leshiguang/maven-repository/packages/492064)：健康服务部分、主要处理UI部分，UI页面的入口

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
    api 'com.alibaba:fastjson:1.2.73'
    api "com.nostra13.universalimageloader:universal-image-loader:$version_imageloader"
	api 'com.github.CymChad:BaseRecyclerViewAdapterHelper:2.9.34'
    api "org.apache.commons:commons-lang3:$version_lang3"
    api "org.apache.commons:commons-collections4:$version_collections4"
	api 'com.contrarywind:Android-PickerView:4.1.9'
    api 'com.annimon:stream:1.2.1'
    api 'io.reactivex.rxjava2:rxjava:2.2.8'
    api 'io.reactivex.rxjava2:rxandroid:2.1.1'	
```
<a name="NaSja"></a>
## 初始化

<br />描述：SDK初始化一些基础功能，应尽早的调用（建议在Application中调用）<br />类:com.lifesense.android.health.service.LZHealth
```java
public void init(Context context, Config config)
```
参数说明：<br />context：上下文<br />config：SDK配置类<br />
<br />Config

|  |  |  |
| --- | --- | --- |
| appKey | String | appSecret需要申请获取：[https://docs.leshiguang.com/develop-native/apply](https://docs.leshiguang.com/develop-native/apply) |
| appSecret | String | 应用密钥 |
| tn | String | 租户名 |
| debug | boolean | 是否开启调试 |



<a name="GRiVG"></a>
## 登录
描述：第三方账号和乐心账号静默打通<br />类：com.lifesense.android.health.service.LZHealth<br />

```java
public void login(String associatedId, Consumer<LoginState> consumer)
```


- 参数说明：

associatedId：用户的唯一标识号（通常指userId）<br />consumer：登陆状态

