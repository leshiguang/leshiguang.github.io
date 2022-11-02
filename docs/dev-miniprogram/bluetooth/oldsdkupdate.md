<a name="sJXH1"></a>
## 资料入口及升级目的
- [旧版SDK 插件接入方式](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx43b1ab446b5db1e0&token=1532068600&lang=zh_CN)
- [新版SDK 插件接入方式](https://docs.leshiguang.com/dev-miniprogram/bluetooth/plugin)
- [新版SDK npm接入方式](https://docs.leshiguang.com/dev-miniprogram/bluetooth/npm/ble)  [demo](https://docs.leshiguang.com/dev-miniprogram/bluetooth/demo)（推荐）

新版sdk的优化点：

- 设备搜索和链接更稳定
- 可根据设备类型按需引入分包
- 大部分接口返回Promise
<a name="HBcDr"></a>
## 算法接口升级
[https://docs.leshiguang.com/develop-cloud/algorithm/fat/v3](https://docs.leshiguang.com/develop-cloud/algorithm/fat/v3)
<a name="s4WA7"></a>
## 注意事项
<a name="Wtix6"></a>
### npm接入
在package.json中声明sg-ble的引用
```javascript
// 按需引入，如果是只接入秤，如下
"dependencies": {
    "sg-ble": "^2.1.9",	
    "sg-scale": "^1.1.4",
}


// 按需引入，如果是接入秤，手环，如下
"dependencies": {
    "sg-ble": "^2.1.9",	
    "sg-scale": "^1.1.4",
    "sg-bracelet": "^1.1.6",
}

```
**npm方式需要引入npm，如果不想引入npm，可直接复制mini_dist目录下的index.js 文件，到你们的项目**<br />npm接入需要微信小程序需要配置请求白名单 [https://api-r1.leshiguang.com](https://api-r1.leshiguang.com/)
<a name="rjebX"></a>
### 初始化
旧版
```javascript
const plugin = requirePlugin("LSDevicePlugin")
plugin.init(res => {
    if (res) {
        console.log('蓝牙插件初始化成功')
    }
})
plugin.initAuthorization({
    appId: 'xxx', //乐心分配给平台的appId
});
```

新版
```javascript
const plugin = require("sg-ble");
const scale = require("sg-scale");
plugin.regist(scale);
plugin.init({
    appId: 'xxx', // 乐心分配给平台的appId
}).then(res => {
    console.debug("初始化成功 ", res);
}).catch(err => {
    console.error("初始化失败", err);
})

```
不管是新版还是旧版，获取当前蓝牙可用状态都应该在初始化成功之后获取。推荐在app.js中初始化。
<a name="Mwnb0"></a>
### 扫描
旧版
```javascript
let scanCallback = device => {
  // 对于设备做过略，或者更新UI
}

plugin.startScanning(scanCallback, [plugin.Profiles.ScanFilter.Scale]);
```

新版
```javascript
// 搜索
plugin.startScanning(device => {
   // 对于设备做过略，或者更新UI
});
```

<a name="GE90h"></a>
### 绑定设备
旧版
```javascript
let onBindingListener = {
    //连接状态改变回调
    onConnectionStateChanged(deviceMac, state, type) {

    },
    //绑定结果回调
    onBindingResults(deviceInfo, status) {
        console.log('onBindingResults', deviceInfo, status);
        if (status) { 
          // 绑定成功
        } else { 
          // 绑定失败
        }
    },
};

let obj = {
    broadcastId: this.data.deviceMac,
    id: this.data.connectId
}
plugin.bindDevice(obj, onBindingListener);
```
新版
```javascript
plugin.bindDevice({
    mac: this.data.mac,
    callback(res) {
        // 绑定结果
        console.debug('bind', 'bindDevice', res);
    }
})
```

<a name="HFL6K"></a>
### 连接与断开设备
旧版
```javascript
// 1、先添加设备到队列

plugin.addDevice(device);

// 2、调用开始连接
if (plugin.isStartSyncing()) {
      plugin.startConnectDevice();
  } else {
      plugin.startDataSync(_syncCallback);
  }

// 断开连接
plugin.removeDevice(mac);
plugin.stopDataSync('tag');
```
新版
```javascript
// 通过设备的mac 和model来去连接设备
plugin.addMonitorDevice({
    mac: device.mac,
    model: device.model,
});

// 断开设备
plugin.deleteMonitorDevice({
    mac: device.mac,
})

```

<a name="A3R2a"></a>
### 监听数据的接收与连接状态的变化
旧版
```javascript
// 1、监听蓝牙开关变化
plugin.registerBluetoothStateListener([], (res) => {
    _bluetoothStateListener.forEach(listener => listener && listener(res));
});

// 2、连接状态的变化及数据的接收, 这里的回调与startDataSync耦合了，所以使用不是很方便
let _syncCallback = {
    onConnectionStateChanged: function(deviceMac, status, type) {
        deviceMac = formatMapKey(deviceMac);
        console.log(
            `[Device Manager] Connection state change: Mac = ${deviceMac} Status = ${status}`);
        console.log('deviceMap:', deviceMap);
        let device = deviceMap[deviceMac.toUpperCase()];
        if (device) {
            device.status = status; // BGattProfiles.DConnectState
        }
        setTimeout(() => {
            //回调给外部增加一个timeout
            _connectionStateListener.forEach(
                listener => listener && listener(device));
        }, 0);
    },
    onUpdateBluetoothConnectId: function(deviceMac, connectId) {},
    onDataChanged: function(deviceMac, dataType, data, dataStr) {
        deviceMac = formatMapKey(deviceMac);
        console.log(deviceMac, dataType, data, dataStr);

        setTimeout(() => {
            //回调给外部增加一个timeout
            _dataRevListener.forEach(
                listener => listener && listener(deviceMac, dataType, data, dataStr));
        }, 0);
        if (dataType === 0) {
            if (deviceMap[deviceMac.toUpperCase()]) {
                deviceMap[deviceMac.toUpperCase()].softwareVersion = data.softwareVersion;
            }
        }
        if (dataType === 1002) {}
        if (dataType === 0x1001) {
            console.log('获取wifi状态');
            setTimeout(() => {
                let setting2 = new LSBluetoothPlugin.SettingProfile.ReqWifiStatus();
                pushSettings(deviceMac, setting2);
                let sett3 = new LSBluetoothPlugin.SettingProfile.ConnectWifi(
                    'B40FB3AFEDE3', '12345678');
                setTimeout(() => {
                    pushSettings(deviceMac, sett3);
                }, 1000);

            }, 1000);

        }
        // 上传数据
        // upload(deviceMap[deviceMac.toUpperCase()], dataType, data);
    },
    OnSportEvent: function(deviceMac, sportType) {
        deviceMac = formatMapKey(deviceMac);
        setTimeout(() => {
            //回调给外部增加一个timeout
            _sportEventListener.forEach(
                listener => listener && listener(deviceMac, sportType));
        }, 0);
    },
};

plugin.startDataSync(_syncCallback);
```

新版
```javascript
/**
 * AdaptorState = 'adaptorState',//蓝牙状态改变回调
 * ConnectionState = 'connectionState',//连接状态改变回调
 * DataReport = 'dataReport', // 数据接收回调
 * 监听可以添加多个不同的监听，在不同的页面可以天际自己独有的监听，通过eventKey作为标识
 */
plugin.$on({
    eventName: "adaptorState",
    eventKey: 'wo', /// 唯一标识，同一标识的监听会被覆盖
    callback: onAdaptorState,
});

plugin.$on({
    eventName: "connectionState",
    eventKey: 'shi', /// 唯一标识，同一标识的监听会被覆盖
    callback: onConnectionState,
});

plugin.$on({
    eventName: "dataReport",
    eventKey: 'shi', /// 唯一标识，同一标识的监听会被覆盖
    callback: onDataReport,
});

// 可以取消对应的监听
plugin.$off({
    eventName: 'adaptorState',
    eventKey: 'wo',
})

plugin.$off({
    eventName: 'connectionState',
    eventKey: 'shi'
})

plugin.$off({
    eventName: 'dataReport',
    eventKey: 'shi'
})

```

<a name="YF8Gu"></a>
### 数据字段变更
旧版
```javascript
// 体重数据结构
var _weightData = {
  cmd:null,               //命令字
  remainCount:0,          //剩余测量数据条数
  flag:0x00,              //标志位
  uint:'',                //单位,0=kg,1=lb,2=st,3=斤
  weight:0,               //体重
  utc:0,                  //utc
  resistance:0,           //电阻值
  userNumber:null,        //用户编号
  timeZone:null,          //时区
  timeStamp:null,          //测量时间戳
  realtimeDataStatus:false,//实时测量数据状态
}
      

```

新版 
```javascript
// 体重数据结构
// https://docs.leshiguang.com/dev-miniprogram/bluetooth/npm/scale?id=%e4%bd%93%e5%88%b6%e7%a7%a4%e6%95%b0%e6%8d%ae-scaledata
// 新版体重数据多了 dataType 主要是识别数据的类型，比如体脂数据为'scale'
var _weightData = {
  remainCount:0,          //剩余测量数据条数
  uint:'',                //单位,0=kg,1=lb,2=st,3=斤
  weight:0,               //体重
  utc:0,                  //utc
  resistance:0,           //电阻值
  userNumber:null,        //用户编号
  realtimeDataStatus:false,//实时测量数据状态
  heartRate: 0, 			// 心率数据（部分体脂秤支持）
  dataType: "scale",		// 作为数据类型判断，固定值为 scale
}
    
```
<a name="JKSMb"></a>
#### 
<a name="PgmQh"></a>
### 蓝牙权限判断逻辑建议
建议在UI上展示弹窗或者Toast提示
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

