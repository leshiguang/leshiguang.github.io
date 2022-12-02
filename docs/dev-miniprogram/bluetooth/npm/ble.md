<a name="JO0ZI"></a>
# 版本更新日志
<a name="gG0RQ"></a>
### 
<a name="ct1B3"></a>
### 2.2.1     2022-11-28

- fix：解决解析广播报错导致的js报错的问题

<a name="Ny22C"></a>
### 2.2.0    2022-11-23

- feat：优化代码，减小代码体积，同时将所有的子版本统一版本  	

<a name="xQUSn"></a>
### 2.1.10     2022-11-02

- feat：适配新设备的优化

<a name="qHSEs"></a>
### 2.1.9

- fix：适配新设备
- fix：优化日志

<a name="ZUXHs"></a>
### 2.1.5

- feat:   体脂秤ota的支持
- feat：日志的支持
- fix：一些连接上的优化

<a name="TiKMX"></a>
### 2.0.8

- fix：解决isPlugin的报错问题

<a name="CU64w"></a>
### 2.0.6

- feat：新增index.d.ts 接口说明文档，方便开发时直接调用相对应的方法，而不用看文档

<a name="p0Zj5"></a>
### 2.0.2

- fix：在插件1.0.15基础上分包

<a name="kJJpV"></a>
# 1 npm库使用说明

<a name="tYCLi"></a>
## 1.1 package声明

在package.json中声明sg-ble的引用

```json
{
    "dependencies": {
        "sg-ble": "^2.1.9",						
    }
}
```

<a name="COO0u"></a>
## 1.2 模块引入

```javascript
const plugin = require("sg-ble");
```

<a name="G7Gpg"></a>
## 1.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 体重
const scale = require("sg-scale");
// 血压计
const bloodpressure = require("sg-bloodpressure");
// 调成
const skip = require("sg-skip");
// 药盒
const box = require('sg-box');
// 手环&手表
const bracelet = require('sg-bracelet');

// 注册设备的模块
plugin.regist(scale);
plugin.regist(bloodpressure);
plugin.regist(skip);
plugin.regist(box);
plugin.regist(bracelet);
```
<a name="jeaGu"></a>
## 1.4 模块初始化

[申请乐心AppKey](https://docs.leshiguang.com/develop-native/apply)

```javascript
// 自定义打印日志
const logger = {
  info: () => { // 自定日志打印 
    console.info(arguments);
  },
  warn: () => { // 自定义日志打印 
    console.warn(arguments);
  },
  error: () => { // 自定义日志打印 
    console.error(arguments);
	),
  debug: () => { // 自定义日志打印 
    console.debug(arguments);
  },
}
plugin.init({
    //用邮件乐心分配的appId替换掉下面字符串
      appKey: "你申请的appkey",
    	logger,
    });
```

请求参数：

| 属性 | 类型 | 是否必要 | 说明 |
| --- | --- | --- | --- |
| appKey | string | 是 | 搜索到的设备对象的回调 |
| associatedId | string | 否 | 第三方关联userId，客户标记用户使用，方便标识日志 |
| debug | boolean | 否 | 是否打印debug日志 |
| logger | obj | 否 | 日志打印器，需要实现console的一些打印的方法，详情参考 index.d.ts<br />如果不实现，默认是调用系统的日志打印 |


<a name="RpEow"></a>
## 1.5 更新用户信息 

主要是手环计算卡路里及路程需要使用到用户信息

```javascript
// 开始扫描设备
  plugin.updateUserInfo({
        gender: 1,
        weight: 59,
        height: 1.76,
        age: 24,
      });
```

| 属性 | 类型 | 是否必要 | 说明 |
| --- | --- | --- | --- |
| userId | string | 否 | 用户唯一标识 |
| weight | number | 是 | 体重 单位：kg     精确两位小数 |
| height | number | 是 | 身高 单位：米     精确两位小数 |
| gender | number | 是 | 性别 1：男性 0：女性 用来做算法计算 |
| age | number | 是 | 年龄 |

<a name="yF4ro"></a>
## 
<a name="HQ2va"></a>
## 1.6 微信小程序需要配置请求白名单 [https://api-r1.leshiguang.com](https://api-r1.leshiguang.com)

<a name="nQuug"></a>
# 2 设备相关

<a name="rmJ60"></a>
## 2.0 蓝牙权限判断建议
```javascript
function checkBluetoothEnable() {
  let { bluetoothEnabled, locationEnabled, locationAuthorized, platform } = wx.getSystemInfoSync();
  let bluetoothAuthorized = plugin.isBluetoothAvailable() && bluetoothEnabled;
  if (platform.indexOf('android') > -1) {
    if (!bluetoothEnabled && !locationEnabled) return '请打开手机蓝牙和GPS定位功能，方可查找设备';
    if (!bluetoothEnabled) return '请打开手机蓝牙，方可查找设备';
    if (!locationEnabled) return '请打开手机GPS定位功能，方可查找设备';
    if (!locationAuthorized) return '请进入手机应用设置，开启微信的GPS定位授权，方可查找设备';
  } else {
    if (!bluetoothEnabled) return '请打开手机蓝牙，并进入手机应用设置开启微信的蓝牙授权，方可查找设备';
    if (!bluetoothAuthorized) return '请打开手机蓝牙，并进入手机应用设置开启微信的蓝牙授权，方可查找设备';
  }
}

```

<a name="C81w3"></a>
## 2.1 搜索&发现设备

蓝牙设备在绑定前，需要先通过扫描获得需要绑定的设备信息，<br />首先需要调用`startScanning`接口获取`device`对象，<br />您可能需要自己去判断释放有重复的蓝牙设备信号上报并做过滤，在实际应用过程中，<br />您可能需要经过多个扫描周期才能获得蓝牙搜索结果，调用示例：

```javascript
// 开始扫描设备
  plugin.startScanning(device => {
    // 将扫描到的设备保存，具体参数参考具体接口
    scanResults.push(device);
    // 刷新UI
    this.setData({
      scanResults
    })
  })
```

请求参数：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| callback(device) | func | 搜索到的设备对象的回调 |


`device` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| name | String | 蓝牙设备名称，某些设备可能没有 |
| localName | String | 设当前蓝牙设备的广播数据段中的 LocalName 数据段 |
| deviceId | string | 用于区分设备的id，安卓为mac地址，IOS为系统分配的唯一ID |
| RSSI | number | 当前蓝牙设备的信号强度 |
| serviceData | object | 当前蓝牙设备的广播数据段中的 ServiceData 数据段 |
| mac | String | 设备mac地址 |
| battery | number | 电量 |
| lzDeviceId | string | 乐心id，只有乐心的设备才有 |
| manufacture | string | 厂商 |
| model | string | 型号 |
| softwareVersion | string | 软件版本 |
| hardwareVersion | string | 硬件版本 |
| firmwareVersion | string | 固件版本 |
| protoName | string | 协议名称 |
| sn | string | sn |
| connectStatus | ConnectionState | 连接状态 |
| isLoadingData | boolean | 是否正在加载数据，应用于接受数据比较多的情况，仅支持HR6，与HR5Plus<br /> |


<a name="qJz3J"></a>
## 2.2 停止搜索

强制中断蓝牙搜索，执行搜索过程中中断搜索或页面销毁时，请务必调用停止搜索接口，否则会影响正常的连接流程：

```javascript
  // 关闭搜索
  plugin.stopScanning();
```

<a name="nyFn6"></a>
## 2.3 绑定设备

- 如果是安卓设备，`绑定需要定位权限` 即  `locationEnabled`与`locationAuthorized` 必须都为true， `locationEnabled`与`locationAuthorized`是通过`wx.getSystemInfoSync()`
- 搜索完成后， 向用户展示搜索到的设备列表信息， 用户选择目标设备后， 进行设备绑定操作（绑定设备是为了获取你选择设备的信息， 绑定不是必须的，如果您知道用户当前使用的设备信息， 可以不经过绑定直接调用`plugin.addMonitorDevice`去连接设备并同步数据）调用示例：

```javascript
  // 用户选择某个设备绑定
  // 如果是安卓设备，则需要判断位置是否可用，位置权限是否可用 
	function checkBluetoothEnable() {
    let { bluetoothEnabled, locationEnabled, locationAuthorized, platform } = wx.getSystemInfoSync();
    // 微信暂未提供bluetoothAuthorized，我们从蓝牙可用判断是否授权
    let bluetoothAuthorized = plugin.isBluetoothAvailable() && bluetoothEnabled;
    if (platform.indexOf('android') > -1) {
      if (!bluetoothEnabled && !locationEnabled) return '请打开手机蓝牙和GPS定位功能，方可查找设备';
      if (!bluetoothEnabled) return '请打开手机蓝牙，方可查找设备';
      if (!locationEnabled) return '请打开手机GPS定位功能，方可查找设备';
      if (!locationAuthorized) return '请进入手机应用设置，开启微信的GPS定位授权，方可查找设备';
    } else {
      if (!bluetoothEnabled) return '请打开手机蓝牙，并进入手机应用设置开启微信的蓝牙授权，方可查找设备';
      if (!bluetoothAuthorized) return '请打开手机蓝牙，并进入手机应用设置开启微信的蓝牙授权，方可查找设备';
    }
  }

  var bindDevice = function() {
    	// 判断蓝牙是否可用
      let msg = checkBluetoothEnable();
      if (msg) {
        alert(msg);
        return;
      }
      plugin.bindDevice({
          mac: mac,
          callback: res => {
              // 绑定结果 
              let mac = res.mac;
              let bindState = res.bindState;
              /// 只有在绑定错误的时候才有错误码
              let errorCode = res.errorCode;

          }
      });
  }
  
  if (platform.indexOf('android') > -1) {
      if (locationEnabled && locationAuthorized) {
          bindDevice();
      } else {
        // 提示授权
      }
  } else {
      bindDevice();
  }
```

请求参数：`Object object`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 绑定设备的mac |
| callback(`res`<br />) | func | 绑定设备的回调 |


`res` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 绑定设备的mac |
| bindState | number | 绑定设备的状态 |
| deviceInfo | Object | 设备信息 |
| errorCode | number | 绑定失败的错误码 |


`res.bindState` 的可能值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| InputRandomNumber | 0 | 输入随机数 (手环专用) |
| Successful | 4 | 绑定成功 |
| Failure | 5 | 绑定失败 |


`res.errorCode` 的可能值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| success | 0 | 成功 |
| disconnect | 1 | 未连接 |
| nocharactor | 2 | 没有特征服务 |
| timeout | 3 | 超时 |
| discard | 4 | 丢弃 |
| ackError | 5 | ack错误 |
| bluetoothError | 6 | 蓝牙错误 |
| workBusy | 7 | 工作繁忙 |
| fileUnsupported | 8 | 文件错误 |
| lowBattery | 9 | 低电量 |
| unsupported | 10 | 不支持的类型 |
| authorizeError | 11 | 授权失败 |
| notfind | 12 | 未找到设备 |
| cancelBind | 13 | 取消绑定 |
| alreadyBinded | 14 | 用户已绑定 |
| paramsError | 15 | 参数错误 |
| noMem | 16 | 没有内存 |
| tooBig | 17 | 文件太大 |
| notInit | 18 | 没有初始化 |
| notFind | 19 | 未找到设备 |
| notUserLocation | 20 | 定位权限未开 |
| blueNotAvailible | 21 | 蓝牙授权未开 |


`res.deviceInfo`的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| deviceId | String | 设备的广播id |
| model | string | 设备的型号 |
| lzDeviceId | string | id（内部使用的id） |
| sn | string | 一般对用户可见（比如手环在表带上） |
| hardwareVersion | string | 硬件版本 |
| firmwareVersion | string | 固件版本 |
| softwareVersion | string | 软件版本 |
| manufacture | string | 厂家名字 |
| battery | number | 电量 |


<a name="obDvS"></a>
## 2.4 取消绑定

当前状态是正在绑定的页面，此时退出绑定页面，则需要需要绑定 调用示例：

```javascript
// 取消绑定
plugin.cancelBind({ mac });
```

请求参数：`Object object`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 设备的mac |


<a name="UETcX"></a>
## 2.5 添加用户已经绑定的设备

用户打开app时， 若之前已经绑定过设备， 需要将已经绑定的设备的mac地址添加到sdk，<br />sdk会自动连接设备，建议您将用户和设备的绑定关系持久化在云端， sdk初始化成功之后立即添加mac地址到sdk， 调用示例：

```javascript
  /// 添加监听
  // 如果是安卓设备，则需要判断位置是否可用，位置权限是否可用 let { locationEnabled, locationAuthorized } = wx.getSystemInfoSync();
  
  plugin.addMonitorDevice({ 
    mac: this.data.mac,
    model: this.data.model,
  })

  // 替换目前已监听的
  plugin.setMonitroDevice({ 
    mac: this.data.mac,
    model: this.data.model,
  })
```

请求参数：`Object object ｜ Object object[]`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 绑定设备的mac |
| model | String | 设备型号 |


<a name="QmXvz"></a>
## 2.6 删除用户正在连接或者同步的设备

当用户需要解除监听设备或正在绑定中断绑定时，解绑后会删除SDK中的缓存的设备信息并断开蓝牙连接，建议您在解绑成功后，清除您App本地或者云端存储的设备信息，并删除和用户的绑定关系， 调用示例：

```javascript
  /// 删除某个正在监听的设备
  plugin.deleteMonitorDevice({ 
    mac: this.data.mac,
  })

  // 删除全部正在监听的设备
  plugin.deleteAllMonitorDevice({ 
    mac: this.data.mac,
    model: this.data.model,
  })
```

<a name="UFdUK"></a>
## 2.7 设备状态的获取

如果你想获取某个设备的连接状态，可以通过`getConnectionState`方法获取，如果你想蓝牙的可用状态可以调用`isBluetoothAvailable`判断是否可用，调用示例：

```javascript
// 当前蓝牙是否可用
  let bluetoothAvalible = plugin.isBluetoothAvailable();
  // mac 设备的唯一标识
  let state = plugin.getConnectionState({mac}});
```

请求参数：`Object object`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 设备的mac |


返回值：`number state`

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| None | 0 | 初始状态 |
| Scan | 1 | 扫描中 |
| Connecting | 2 | 连接中 |
| Connected | 3 | 蓝牙连接成功，还没有启动数据同步 |
| Worked | 4 | 已经启动数据同步，这是才能进行收数据，推送设置项等 |
| Disconnected | 5 | 设备主动断开了连接，或者系统断开了连接 |


<a name="DIMhe"></a>
## 2.8 设备数据或状态的监听

如果你想监听手机蓝牙是否开启，设备的连接状态，及设备同步过来的数据，则可以使用 `plugin.$on` 监听某个事件，目前支持三个事件

1. 手机蓝牙的开关 eventName = "adaptorState",
2. 蓝牙设备的连接状态 eventName = "connectionState",
3. 蓝牙设备发送给小程序的数据 eventName = "dataReport"
4. 设备的数据上传状态 eventName = "syncDataStateChange"

事件是通过 eventKey，同一事件的同一eventKey 回调会被覆盖<br />取消监听则使用 `plugin.$off` 参数<br />调用示例：

```javascript
  // 监听蓝牙是否可用
  plugin.$on({
    eventName: "adaptorState",
    eventKey: "wo",   // 唯一标识，同一标识的监听会被覆盖
    callback: res => {
      // 蓝牙是否可用
      let bluetoothAvalible = res.available
    },
  });

  // 监听设备的连接状态
  plugin.$on({
    eventName: "connectionState",
    eventKey: 'wo',   // 唯一标识，同一标识的监听会被覆盖
    callback: (mac, state) => {
      // 设备mac，连接状态， 参考2.7 的连接状态
    },
  });

  // 监听数据上报
  plugin.$on({
    eventName: "dataReport",
    eventKey: 'wo',  // 唯一标识，同一标识的监听会被覆盖
    callback: (device, data) => {
      // 设备信息， 数据信息
      // 一般mac用来设备设备
      let mac = device.mac;
      // dataType 识别数据类型
      let dataType = data.dataType;
    },
  });


  // 只是对HR6，HR5Plus有效, 监听数据上传中的状态
  plugin.$on({
      eventName: "syncDataStateChange",
      eventKey: 'wo', /// 唯一标识，同一标识的监听会被覆盖
      callback: (device) => {
          const isLoading = device.isLoadingData;
          console.warn('是否正在加载数据', isLoading);
      }
  })

  // 取消监听
  plugin.$off({
    eventname: "adaptorState",
    eventKey: "wo"
  })

  plugin.$off({
    eventname: "connectionState",
    eventKey: "wo"
  })

  plugin.$off({
    eventname: "dataReport",
    eventKey: "wo"
  })

	plugin.$off({
    eventname: "syncDataStateChange",
    eventKey: "wo"
  })
```

<a name="uN1wY"></a>
# 3 设置项

小程序向设备发送指令都是通过`pushSetting`<br />包括手环绑定时候输入随机码，蓝牙配网的时候 发送扫描指令， 发送wifi连接指令，以及一些手设备的设置项等等<br />小程序向设备获取设置项都是通过`getSetting`<br />调用示例：

```javascript
  // 生产设置项的对象
  let settingFactory = plugin.settingFactory;
  let scanWifiSetting = new settingFactory.ScanWifiReq();
  plugin.pushSetting({
    mac: mac,
    setting: scanWifiSetting
  }).then((value) => {
    console.info('发送指令获取wifi列表', value)
  }).catch(resp => {
    wx.showToast({ title: "设置失败，请重试", icon: "none", duration: 3000 });
  });

  // 获取设置项，目前仅支持
  plugin.getSetting({
    mac: mac,
    settingType: settingType
  }).then(resp => {
      console.warn('获取设置项成功', resp);
  }).catch(resp => {
      wx.showToast({ title: "获取设置失败，请重试", icon: "none", duration: 1000 });
  });
```

设置项请求参数：`Object object`

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 设备的mac |
| setting | Object | 设置的对象，这个由 `settingFactory`<br /> 产生，不同的设置项，参数也不一样，具体参考各个设置项 |


获取设置项请求参数：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mac | String | 设备的mac |
| settingType | number | 这个是个枚举 参考 |


`settingType` 的取值

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| HeartRateWarningSetting | 0 | 心率设置 |
| SleepBloodOxygenSetting | 1 | 睡眠血氧检测开关 |
| SedentaryReminderSetting | 2 | 久坐提醒 |
| SleepReminderSetting | 3 | 睡眠提醒 |
| EventReminderSetting | 4 | 闹钟 |
| TimeFormatSetting | 5 | 24小时制 |
| DialTypeSetting | 6 | 表盘信息 |
| CustomPagesSetting | 7 | 自定义界面 |
| NightModeSetting | 8 | 夜间模式 |
| RightSwipDisplaySetting | 9 | 快捷屏幕 |
| SportHrWarnigSetting | 10 | 运动心率预警 |


catch的 `resp` 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| code | number | 错误码  是个枚举，参考 |
| msg | string？ | 错误说明 |
| extra | any | 格外的一些参数 |


`resp.code` 的枚举

| 枚举 | 值 | 说明 |
| --- | --- | --- |
| success | 0 | 成功 |
| disconnect | 1 | 未连接 |
| nocharactor | 2 | 没有特征服务 |
| timeout | 3 | 超时 |
| discard | 4 | 丢弃 |
| ackError | 5 | ack错误 |
| bluetoothError | 6 | 蓝牙错误 |
| workBusy | 7 | 工作繁忙 |
| fileUnsupported | 8 | 文件错误 |
| lowBattery | 9 | 低电量 |
| unsupported | 10 | 不支持的类型 |
| authorizeError | 11 | 授权失败 |
| notfind | 12 | 未找到设备 |
| cancelBind | 13 | 取消绑定 |
| alreadyBinded | 14 | 用户已绑定 |
| paramsError | 15 | 参数错误 |
| noMem | 16 | 没有内存 |
| tooBig | 17 | 文件太大 |
| notInit | 18 | 没有初始化 |
| notFind | 19 | 未找到设备 |
| notUserLocation | 20 | 定位权限未开 |
| blueNotAvailible | 21 | 蓝牙授权未开 |


具体有哪些设置项可以通过不同设备的库的文档 `settingFactory`<br />传送门：手环&手表、体脂秤、血压计、跳绳、药盒


<a name="Y5x1C"></a>
# 4 数据接收

当你监听了dataReport 事件的时候的回调， 一般通过dataType来判断数据是什么类型，具体有哪些可以参考不同设备的库的文档<br />传送门：手环&手表、体脂秤、血压计、跳绳、药盒

```javascript
  // 监听数据上报
  plugin.$on({
    eventName: "dataReport",
    eventKey: 'wo',  // 唯一标识，同一标识的监听会被覆盖
    callback: (device, data) => {
      // 设备信息， 数据信息
      // 一般mac用来设备设备
      let mac = device.mac;
      // dataType 识别数据类型
      let dataType = data.dataType;
    },
  });

  
```


