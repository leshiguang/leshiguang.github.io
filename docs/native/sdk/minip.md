# 小程序设备SDK使用指南

<a name="AYz7k"></a>
## 1.概述
     本文档主要是帮助在微信小程序上通过小程序插件方式，接入乐心设备SDK，该插件提供连接乐心健康的蓝牙设备(**_详见设备支持列表_**)，与设备进行交互，并获取设备上的测量数据。<br />     
<a name="hOhUC"></a>
## 2.接入
<a name="Ces1t"></a>
### 2.1 申请插件(小程序插件AppId:wx43b1ab446b5db1e0)   
    插件地址[https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxcffaa8476ea5be91](https://mp.weixin.qq.com/wxopen/pluginbasicprofile?action=intro&appid=wxcffaa8476ea5be91)
<a name="oXG96"></a>
####   1). 添加插件
在使用插件前，首先要在小程序管理后台的“设置-第三方服务-插件管理”中添加插件。为了防止滥用，请等待审核通过后方可使用。(_发送申请配额邮件后，处理完毕会给予通过_)
<a name="i3mLL"></a>
####   2). 引入插件
     在app.json声明，代码如下：  
```javascript
  "plugins": {
     "LSDevicePlugin": {
    	"version": "{{最新版本}}",
    	"provider": "wx43b1ab446b5db1e0"
    }
  }

```
<a name="o72tb"></a>
### 2.2 申请配额
      请准备需要接入的**设备型号**和**设备数量、小程序名字**信息等，发送申请邮件至以下邮箱:<br />发送： [jason.sheng@lifesense.com](mailto:jason.sheng@lifesense.com) [zheng.lu@lifesense.com](mailto:zheng.lu@lifesense.com)<br />抄送： [zhicheng.liu@lifesense.com](mailto:zhicheng.liu@lifesense.com) [yong.wu@lifesense.com](mailto:yong.wu@lifesense.com) [xinyi.liu@lifesense.com](mailto:xinyi.liu@lifesense.com) [pengfei.yu@lifesense.com](mailto:pengfei.yu@lifesense.com) [chengze.wu@lifesense.com](mailto:chengze.wu@lifesense.com)<br />     我们会根据你的需求和小程序信息给你分配一个鉴权appId，获取到鉴权appId后，请通过插件api进行初始化，代码如下：
```javascript
const lsPlugin = requirePlugin("LSDevicePlugin")
lsPlugin.initAuthorization({
     //分配的鉴权appId，
    appId: 'com.leshiguang.saas.rbac.demo.appid'
  });
```


<a name="fUmF9"></a>
## 3.使用
<a name="zdZkz"></a>
###  3.1快速上手
<a name="eBQfm"></a>
####     3.1.1 初始化sdk
      在合适的地方调用初始化接口(推荐在app.js的**onLaunch**函数，防止未初始化导致接口不可用)
```javascript
//初始化sdk
lsPlugin.init(res=>{
              if(res){
                  console.log('蓝牙插件初始化成功')
              }else{
              //可能是设备蓝牙未打开，或者蓝牙不可用，不支持
              //请自行调用微信api wx.openBluetoothAdapter看具体问题
              }
    })
//初始化鉴权信息
lsPlugin.initAuthorization({
     //分配的鉴权appId，
    appId: 'com.leshiguang.saas.rbac.demo.appid'
  });

```
<a name="C2GBD"></a>
####    3.1.2 连接设备，同步数据
       步骤一：添加设备<br />             设备信息可以通过发现设备流程获取 ，或者绑定设备后存储到自有服务器建立绑定关系，后面通过账号从自有服务端拉取。
```javascript
let device = {
  deviceMac: 'C9E619F33FEF', //设备MAC,去掉":"  必须，设备唯一标识
  deviceSn: '',  //设备SN，非必须
  model:'LS431-B',//设备型号，非必须
  bluetoothConnectId:'' //非必须 通过回调onUpdateBluetoothConnectId获取，微信返回的deviceId
}

lsPlugin.addMeasureDevice(device, (res) => {
    if (res.code === 200) {
      console.log("addMeasureDevice succeed",res)
    } else {
      console.log('addMeasureDevice fail', res);
      wx.showToast({
        title: res.msg, icon: 'none',
      });
    }
  });
```
     步骤二：启动连接，同步数据<br />         连接成功后，设备会清空缓存并主动上报测量数据onDataChanged，请及时保存，否则会造成数据丢失。<br />         启动连接后，如果设备没有连接成功，可以在合适的实际再次调用startConnectDevice触发重连
```javascript
  let _syncCallback = {
  onConnectionStateChanged: function(deviceMac, status, type) {
    //设备连接状态发送改变
    console.log(
        `[Device Manager] Connection state change: Mac = ${deviceMac} Status = ${status}`);
  },
  onUpdateBluetoothConnectId: function(deviceMac, connectId) {
    //ios手机，返回ios系统分配的connectId
  },
  onDataChanged: function(deviceMac, dataType, data, dataStr) {
    //收到设备测量数据
    console.log(deviceMac, dataType, data, dataStr);
  },
};

if (lsPlugin.isStartSyncing()) {
    lsPlugin.startConnectDevice(); //启动过，重新出发重连
  } else {
   let ret = lsPlugin.startDataSync(_syncCallback);//启动设备同步
  }

```
<a name="EMU4g"></a>
####    3.2.3 发现设备，绑定设备
    步骤一：搜索目标设备，通过deviceName过滤目标设备，比如只搜索乐心手环5设备，那么可以通过deviceName=="LS Band 5"来过滤。
```javascript
/**
 res {
    deviceName: name, //设备广播名
    id: deviceId, //设备deviceId  安卓手机是mac地址,包含冒号":" ios手机是connectId，ios随机分配
    manufactureData: manufacture,
    services: uuid,
    broadcastId: broadcastId,//设备mac地址去除冒号 注意，如果是设备不是通过广播发现的，则没有这个字段。
    isSystemPaired: false,
    rssi:rssi
  }
**/
let scanCallback = function(res) {
    //可以通过deviceName进行设备过滤，这里会返回附近包含蓝牙广播的所有设备。
  };
lsPlugin.stopScanning()//停止搜索
lsPlugin.stopDataSync()//停止同步
//开始搜索
lsPlugin.startScanning(scanCallback,
      [lsPlugin.Profiles.ScanFilter.All])
//当搜索流程结束后，请通过lsPlugin.stopScanning() 结束搜索

```
  步骤二：校验和绑定设备，获取详细设备信息，并初始化激活设备。
```javascript
lsPlugin.stopScanning()//停止搜索
lsPlugin.stopDataSync()//停止同步
let onBindingListener = {
    //连接状态改变回调
    onConnectionStateChanged(deviceMac, state, type) {
     //绑定过程中设备连接状态
    },
    //绑定操作指令更新回调
    onBindingCommandUpdate(deviceMac, bindCmd, deviceInfo) {
      if (bindCmd === LSBluetoothPlugin.Profiles.BindingCmd.InputRandomNumber) {
        //手环输入随机码，进行校验。
        let num="123456"//用户输入手环上的随机码，输入后，会返回onBindingResults结果
       let randomNum = new lsPlugin.SettingProfile.RandomNumSetting(num);
       lsPlugin.pushSettings(deviceMac, randomNum, onSettingListener);
      } else if (bindCmd ===
          LSBluetoothPlugin.Profiles.BindingCmd.RegisterDeviceID) {
        //体重秤注册deviceId，进行初始化。   
        //id规则是12个字符，限定0-9 A-F 不限大小写
        let id = 'A4C13891556E';//设备id可以由服务端分配，也可以是由mac地址去除冒号直接做为id
        let idSetting = new lsPlugin.SettingProfile.RegisterIdSetting(id);
        lsPlugin.pushSettings(deviceMac, idSetting, onSettingListener);

      }
    },
    /**绑定结果回调  
    deviceInfo={
      id: '', // mac地址去除冒号
      deviceId:'', //服务端数据库ID
      connectId: connectId, // connectId
      manufactureName:'',
      model:'', //设备型号
      softwareVesion:'',
      hardwareVersion:'',
      firmwareVersion:'',
      sn:'',
      mac:'',
    }
    **/
    onBindingResults(deviceInfo, status) {
       lsPlugin.cancelDeviceBinding(scanResult)

      if (status) { // 绑定成功

      } else {  // 绑定失败
      }
    },
  };

//开始绑定
lsPlugin.bindDevice(scanResult, onBindingListener)
//绑定流程结束后，请调用lsPlugin.cancelDeviceBinding(scanResult) 取消绑定


```

<br />

<a name="vTjN8"></a>
###  3.2其他
  其他进阶功能请查看具体接口api文档<br />[https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#1-3-](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#1-3-)<br />
<br />

<a name="urzmX"></a>
## 4.注意事项
<a name="dEPeK"></a>
### 4.1 数据说明
<a name="kyjqa"></a>
####    4.1.1 数据同步    
       目前设备数据都是主动上报，当有数据产生，如果是已连接状态，会主动上报数据。
<a name="3qDlO"></a>
####    4.1.2 常规心率数据  
       在佩戴中，会自动采集用户的心率数据，数据是每**5分钟**一笔，如果未佩戴，也会产生一笔为0的数据，详情数据结构可以查看:[https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-2-](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-2-)<br />      该心率数据可以直接用于展示。
<a name="oOFSw"></a>
####    4.1.3 睡眠数据(需要算法加工展示)  
      在佩戴中，会自动采集用户的睡眠等级值，数据是每**5分钟**一笔，是基于用户佩戴运动状态并结合心率产生一个睡眠等级值，如果未佩戴，也会产生一笔为FF的数据，数据结构查看文档:<br />[https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-3-](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-3-)<br />**需要通过后端api算法接口，根据睡眠等级值，得出用户某段时间的睡眠数据，详情查看开放平台api**<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/222356/1594808627318-f72dc3ca-3785-403c-aba7-af683dba303f.png#align=left&display=inline&height=571&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1142&originWidth=2204&size=240567&status=done&style=none&width=1102)<br />

<a name="mnAFF"></a>
####    4.1.4 步数数据   
       步数数据是当天从0点到23:59:59的累加步数，在连接状态下有步数变动会在几秒钟内通过回调接口上报<br />       步数数据会固定**每小时固定**产生一笔，上报当前小时步数。<br />       数据结构查看文档：[https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-1-](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-1-)
<a name="exL7W"></a>
####    4.1.5 锻炼数据
        该数据是通过用户主动在手环上发起运动和用户在佩戴手环状态下自动识别的运动(健走/跑步/游泳)<br />        1) 运动总结数据：包含当前运动开始运动结束时间和一些平均值。 <br />        2) 运动心率数据:  运动中每分钟的运动心率，一次运动时间太长会有多笔运动心率数据，需要根据时间拼接<br />        3) 运动卡路里数据 运动中每分钟的运动消耗，一次运动时间太长会有多笔运动消耗数据，需要根据时间拼接<br />        查看文档：[https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-4-](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wxcffaa8476ea5be91&lang=zh_CN#6-4-)
<a name="zUhhO"></a>
####    4.1.6 体重数据(身体18项数据需要算法实现)
       上秤测量后，数据会包含基础体重，如果是体脂秤并赤脚上秤产生的，则会有一个额外的电阻值。<br />       可以对接后端api算法接口，支持传入体重+电阻值(50k)+用户基础数据，计算出身体多项指标。<br />      详见:[https://hezuo.lifesense.com/eopen/index.html](https://hezuo.lifesense.com/eopen/index.html)<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/222356/1594807701477-9db64506-8ca0-4d87-9d7e-c0045e7a12e4.png#align=left&display=inline&height=635&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1270&originWidth=3118&size=283260&status=done&style=none&width=1559)
<a name="mXlFg"></a>
####  4.1.7 血压数据
     待定<br />

<a name="M078y"></a>
### 4.2 蓝牙体重秤/体脂秤初始化配置deviceId
    蓝牙秤初始化必须走一次设备绑定流程，写回deviceid方可使用。<br />    详情查看绑定设备，针对秤的处理<br />
<br />

<a name="ClZos"></a>
## 附录一 设备支持列表
<a name="2UPVO"></a>
#### 1 手环设备
 除了mambo一代手环，其他全系列手环都支持
<a name="dDH0V"></a>
#### 2 体重秤/体脂秤:
 支持全系列乐心蓝牙体重秤/体脂秤
