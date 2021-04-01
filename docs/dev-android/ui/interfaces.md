<a name="zPwjK"></a>
## 页面跳转
```java
public void openPage(Page page)
```
参数说明：<br />Page：目标页面<br />
<br />**Page**

| STEP | 步数 |
| --- | --- |
| BLOOD_PRESSURE | 血压 |
| HR | 心率 |
| WEIGHT | 体重 |
| SLEEP | 睡眠 |
| DEVICE_LIST | 设备列表 |

<a name="F7QT4"></a>
## 注册测量数据监听
```java
public void registerMeasureDataReceiver(Consumer<List<AbstractMeasureData>> receiver)
```
_注意：需要在调用init接口后调用，注册对象销毁时需要调用removeMeasureDataReceiver方法，否则会造成内存泄漏_<br />参数说明<br />receiver：数据回调<br />测量数据类型详见：[https://docs.leshiguang.com/dev-android/bluetooth/receive/heartratestatistics](https://docs.leshiguang.com/dev-android/bluetooth/receive/heartratestatistics)
<a name="dOgjW"></a>
## 取消测量数据监听
```java
public void unReegisterMeasureDataReceiver(Consumer<List<AbstractMeasureData>> receiver)
```
参数说明<br />receiver：数据回调<br />

<a name="nvr1Q"></a>
## 注册连接状态监听
```java
public void registerConnectionStatusReceiver(ConnectionStateReceiver connectionStateConsumer)
```
_注意：需要在调用login接口后调用，注册对象销毁时需要调用removeMeasureDataReceiver方法，否则会造成内存泄漏_<br />_<br />参数说明：<br />connectionStateConsumer：连接状态回调
<a name="4yFLS"></a>
## 取消连接状态监听
```java
public void unRegisterConnectionStatusReceiver(ConnectionStateReceiver connectionStateConsumer)
```
参数说明：<br />connectionStateConsumer：连接状态回调
<a name="DarnU"></a>
## 获取绑定设备信息列表
```java
public List<DeviceInfo> getBondedDeviceInfo()
```
参数说明：<br />DeviceInfo：设备信息，详见[https://docs.leshiguang.com/dev-android/bluetooth/reference/device](https://docs.leshiguang.com/dev-android/bluetooth/reference/device)
<a name="CcLpS"></a>
## 更新设置
```java
public void updateConfig(String mac, AbstractConfig config, OperateType operateType, Consumer<ConfigStatus> statusConsumer)
```
参数说明<br />mac：蓝牙设备mac地址<br />config：设置项详见[https://docs.leshiguang.com/dev-android/bluetooth/reference/settings/weather](https://docs.leshiguang.com/dev-android/bluetooth/reference/settings/weather)<br />operateType：操作类型<br />statusConsumer：设置状态回调<br />
<br />OperateType

| UPDATE | 更新/添加设置 |  |
| --- | --- | --- |
| DELETE | 删除设置 | 事件提醒等具有多个设置项的需要删除其中一个设置项可以使用，需要注意需要把设置项的enable置为false否则蓝牙设置无效只会删除本地缓存 |


