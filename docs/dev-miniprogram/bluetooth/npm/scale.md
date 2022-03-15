<a name="JO0ZI"></a>
# 1、版本更新日志

<a name="p0Zj5"></a>
### 1.0.0

- 对应插件1.0.15版本拆出来的模块

<a name="j2iJp"></a>
# 2、模块使用说明

<a name="Haub0"></a>
## 2.1 package声明

在package.json中声明sg-ble的引用

```json
{
    "dependencies": {
        "sg-ble": "^2.0.2",	
        "sg-scale": "^1.0.0"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const scale = require("sg-scale");
```

<a name="G7Gpg"></a>
## 2.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 体脂秤
const scale = require('sg-scale');

plugin.regist(scale);
```

<a name="aU86X"></a>
# 3、设置项

<a name="hcmIu"></a>
### 3.1 体脂秤心率的开关

控制体脂秤测量心率的开关<br />`A6HeartRateSetting` 的参数

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| enable | boolean | 开关心率 |


```javascript
// 体脂秤
const scale = require('sg-scale');
const plugin = require("sg-ble");

let setting = new scale.settingFactory.A6HeartRateSetting(enable);

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```

<a name="YfJJu"></a>
### 3.2 体脂秤单位设置

控制体脂秤单位的显示<br />`A6UnitSetting` 的参数

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| unit | number | 0表示kg 1和2 表示Lb  3表示斤 |


```javascript
// 体脂秤
const scale = require('sg-scale');
const plugin = require("sg-ble");

let setting = new scale.settingFactory.A6UnitSetting(unit);

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```
<a name="ARSCR"></a>
# 4、蓝牙配网
蓝牙配网一般流程

1. 监听数据的接收
1. 向蓝牙设备发送扫描wifi指令 （扫描wifi这个动作是蓝牙设备完成的，因为手机不能扫描附近的wifi设备）
1. 通过监听的数据得到扫描到的wifi列表
1. 选中某个wifi 并输入密码， 然后向蓝牙设备发送指定wifi的连接指令<br />调用示例：

```javascript
  let settingFactory = scale.settingFactory;

  // 监听设备向小程序同步数据
   plugin.$on("dataReport", "wifiConfig", (device, dataReport) => {
      if (dataReport.dataType === 'apInfo' || dataReport.dataType === 'wifiInfo') {
        // 这里收到的的是wifi数据
        this.addApToUI(dataReport);
      } else if (dataReport.dataType === 'configStatus') {
        // 这里收到的是连接wifi的状态结果
        // 需要注意的是只需要认第一个回调为准，因为有可能返回多个状态
        //配网结果回包 0 success || fail reason code
        wx.hideLoading();
        console.log('ui配网结果:', dataReport, dataReport.status === 0);
        if (dataReport.status === 0) {
          this.showErrorBack('配置Wi-Fi成功');
        } else {
          this.showErrorBack('配置Wi-Fi失败');
        }
      }
    });

  let scanWifiSetting = new settingFactory.ScanWifiReq();
  // 向设备发送搜索wifi指令
  plugin.pushSetting({
    mac: mac,
    setting: scanWifiSetting
  }).then((value) => {
    console.info('发送指令获取wifi列表', value)
  }).catch(_ => {
    wx.showToast({ title: "设置失败，请重试", icon: "none", duration: 3000 });
  });

  // 选中某个wifi 并输入密码，然后向设备发送指令
  let deviceSetting = new settingFactory.ConnectWifiReq({ bssid: this.data.selectAp.bssid, password: this.data.password });
    let options = {
      mac: this.data.mac,
      setting: deviceSetting
    };
    pushSetting(options).then(res => {
      // 这里只能说明发送成功，具体是否成功则需要看dataReport.dataType === 'configStatus'的结果
    }).catch(_ => {
      wx.showToast({ title: "设置失败，请重试", icon: "none", duration: 3000 });
    });
```

<a name="wXRIe"></a>
### 4.1 扫描wifi

小程序向体脂秤发起开始扫描指令，体脂秤自动发现附近可用并兼容的Wifi信息，然后回调给小程序。调用参考 [4](#4 蓝牙配网) 中的调用示例.<br />数据类型 `ScanWifiReq` 没有参数

<a name="YKoEN"></a>
### 4.2 wifi数据

`ApInfo`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| cmd | number | 指令，内部使用 |
| ssid | String | wifi名称 |
| bssid | String | wifi设备的mac |
| mode | String | Open (0), WEP (1), WPA_PSK (2), WPA2_PSK (3), WPA_WPA_2_PSK(4), WPA2_ENTERPRISE (5). |
| rssi | String | 信号强度 |
| connected | String | 是否连接 |
| dataType | String | 数据类型 这里固定为 `apInfo` |


<a name="ATCgf"></a>
### 4.3 配置wifi

App发送Wifi SSID和密码到设备， 设备自动进行Wifi的连接过程， 并将连接结果回调给APP<br />数据类型 `ConnectWifiReq` 参数如下:

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| bssid | String | 设备的mac |
| password | String | 输入的密码 |


<a name="Cawn6"></a>
### 4.4 WifiInfo的数据结构

这个数据是获取当前的配网信息的信息结果（获取配网信息目前没有暴露接口）

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| cmd | number | 指令，内部使用 |
| ssid | String | wifi名称 |
| bssid | String | wifi设备的mac |
| status | number | return success (0) or failed reason code (1) |
| rssi | number | 信号强度 |
| ip | String | ip地址 |
| dataType | String | 固定值为 `wifiInfo` |


<a name="w3d0n"></a>
### 4.5 ConfigStatus的数据结构

这个是连接wifi的结果的数据结果

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| cmd | number | 指令，内部使用 |
| status | number | eturn success (0) or failed reason code (1) |
| dataType | String | 固定值为 `configStatus` |


<a name="f4SA2"></a>
# 数据接收
<a name="t84yk"></a>
## 体制秤数据 ScaleData
| 属性 | 类型 | 说明 |
| --- | --- | --- |
| remainCount | number | 剩余测量数据条数 |
| unit | number | 0=kg,1=lb,2=st,3=斤 |
| weight | number | 体重 (单位kg) |
| utc | number | utc |
| resistance | number | 电阻值 |
| userNumber | number | 用户编号 |
| timeZone | number | 时区 （缺失，使用当前系统的时区） |
| timeStamp | number | 测量时间 （请使用utc） |
| realtimeDataStatus | boolean | 实时测量数据状态 |
| heartRate | number | 心率 |
| dataType | String | 固定值为 `scale` |


