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

在项目的build.gradle中添加依赖：

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
    api "androidx.recyclerview:recyclerview:$version_recyclerview"
 	api 'com.hannesdorfmann.fragmentargs:annotation:4.0.0-RC1'
	api "androidx.room:room-runtime:2.2.2"
    annotationProcessor "androidx.room:room-compiler:2.2.2"
	compileOnly "org.projectlombok:lombok:1.16.18"
    annotationProcessor "org.projectlombok:lombok:1.16.18"
    compile 'javax.annotation:javax.annotation-api:1.3.1'
```
<a name="NaSja"></a>
## 初始化

描述：SDK初始化一些基础功能，应尽早的调用（建议在Application中调用）<br />类:com.lifesense.android.health.service.LZHealth
```java
public void init(Context context, Config config)
```
参数说明：<br />context：上下文<br />config：SDK配置类

Config

|  |  |  |
| --- | --- | --- |
| appKey | String | appSecret需要申请获取：[https://docs.sghealth.cn/develop-native/apply](https://docs.sghealth.cn/develop-native/apply) |
| appSecret | String | 应用密钥 |
| tn | String | 租户名 |
| debug | boolean | 是否开启调试 |


<a name="GRiVG"></a>
## 登录
描述：第三方账号和乐心账号静默打通<br />类：com.lifesense.android.health.service.LZHealth

```java
public void login(String associatedId, Consumer<LoginState> consumer)
```

- 参数说明：

associatedId：用户的唯一标识号（通常指userId）<br />consumer：登陆状态

<a name="rHTss"></a>
## 登出
描述：登出会断开所有设备的连接，如果需要恢复需要再次调用登陆接口
```java
public void logout()
```


