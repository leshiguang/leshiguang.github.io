<a name="njsPz"></a>
# 快速集成
<a name="LVJNh"></a>
## 项目依赖配置
1、拷贝下载的SDK到项目的libs文件夹中<br />2、在module的build.gradle中添加本地仓库地址：
```groovy
repositories {
    flatDir {
        dirs 'libs'
    }
}
```
3、在项目的build.gradle中添加依赖：
```groovy
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    api 'com.annimon:stream:1.2.1' // 实现Collection的stream操作
  	api 'io.reactivex.rxjava2:rxjava:2.2.8'
    api 'io.reactivex.rxjava2:rxandroid:2.1.1'

```
依赖说明：

- stream：一个轻量级的Stream API [https://github.com/aNNiMON/Lightweight-Stream-API](https://github.com/aNNiMON/Lightweight-Stream-API)， Android21使用Android24（或jdk1.8）的Stream能力的替代方案，用来实现一些集合流式遍历、变换等操作
- rxjava：EDD的思想实现的一套基于观察者模式的链式调用库，提供简洁易用的线程切换功能

<a name="PexyG"></a>
## 权限&服务注册
```xml
//蓝牙通信所需权限
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission-sdk-23 android:name="android.permission.ACCESS_COARSE_LOCATION"/>

//ANCS需要的权限
 <!--  读取短信权限 -->
 <uses-permission android:name="android.permission.READ_SMS"/>
 <!--  读取联系人  -->
 <uses-permission android:name="android.permission.READ_CONTACTS"/>
 <!--  拨打电话  -->
 <uses-permission android:name="android.permission.CALL_PHONE"/>
 <!--  读取电话状态  -->
 <uses-permission android:name="android.permission.READ_PHONE_STATE"/> 
//网络相关权限
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
<application>
				<service
            android:name="com.lifesense.android.ble.core.application.service.DefaultNotificationListenerService"
            android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE" >
            <intent-filter>
                <action android:name="android.service.notification.NotificationListenerService" />
            </intent-filter>
        </service>
 <application>
```
<a name="EXdPm"></a>
## 代码混淆配置
```xml
-keep class com.lifesense.android.ble.core.**{*;}
-keep class com.android.internal.telephony.**{*;}
```
<a name="gQxtc"></a>
## SDK初始化
要使你的程序启动能正常运行SDK，必须先进行初始化，将您申请的应用 id 、用户已经绑定的硬件设备mac地址和数据接收对象注册到SDK，调用示例：
```java
import com.lifesense.android.ble.core.application.BleDeviceManager

private static final String APP_ID = "lx12345678";

private void initSDK() {
    //数据接收回调
     Consumer<List<AbstractMeasureData>> receiver = new Consumer<List<AbstractMeasureData>>() {
            @Override
            public void accept(List<AbstractMeasureData> abstractMeasureData) {
                Log.i("Data", JSON.toJSONString(abstractMeasureData));
            }
        };
    //初始化sdk
	 BleDeviceManager.getDefaultManager().init(this, APP_ID,PreferenceStorage.getBondedMac(),receiver);
}
```
参数说明

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| appId | String | 接入申请的AppKey, [了解如何申请](https://docs.sghealth.cn/develop-native/apply) |
| bondedMacs | List<String> | 当前用户需要连接的设备Mac地址，未绑定过设备时可传空 |
| context | Context（Application） | 当前应用的Context |
| receiver | Consumer<List<AbstractMeasureData>> | 数据接收对象， 用于接受硬件上报上来的数据 |



<a name="qZsIj"></a>
## 销毁SDK资源
_应用程序退出或App切换用户时释放资源，典型的应用场景为退出登录或直接切换账号，释放资源后需要重新初始化SDK，调用示例：_

```java
BleDeviceManager.getDefaultManager().releaseResource()
```




