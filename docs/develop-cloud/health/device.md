<a name="OAIV7"></a>
# 1.绑定设备
**描述：用户绑定设备**<br />**url :  域名 +  /device-rest/device/bind/bindDevice**<br />**method: post**<br />**​**

**header参数或者url参数**<br />**​**<br />

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 根据key类型传相应的值 | 关联账号id<br /> |

**​**

**post入参 **

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| **deviceKeyType** | String | 设备标识类型，可选值为：<br />id： 设备id<br />sn:  设备sn | 必传 |
| **deviceKey** | string | 根据key类型传相应的值 |  |


<br />**示例 **<br />

```json
{
	"deviceKeyType":"id",
	"deviceKey":"A4C138A70285"
}
```

<br />**出参**BindResponse**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| device | Device | 设备信息 |  |
| deviceUsers | List<DeviceUserDto> | 设备绑定信息列表 |  |
| deviceUserExts | List<DevcieUserExtDto> | 激活状态列表 |  |
| deviceSettings | List<DeviceSetting> | 设备设置列表 |  |
| deviceStatus | DeviceStatus | 设备状态列表 |  |


<br />**Device**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | _设备ID_ |  |
| sn | String | _产品SN号_ |  |
| sn8 | String | _产品8位sn号_ |  |
| wechatDeviceId | String | _微信设备ID_ |  |
| platformId | String | _设备平台id_ |  |
| mac | String | _MAC地址(仅适用于蓝牙设备)_ |  |
| qrcode | String | _设备二维码_ |  |
| hardwareVersion | String | _硬件版本号_ |  |
| softwareVersion | String | _软件版本号_ |  |
| protocolType | String | _协议类型_ |  |
| broadcastId | String | _广播id_ |  |
| password | String | _通讯密码（仅适用于A2版蓝牙设备）_ |  |
| sleepSupport | Boolean | _是否支持睡眠（仅适用与计步器）_ |  |
| experienceFlag | Boolean | _是否体验设备_ |  |
| doctorDevice | Boolean | _是否医生专用设备_ |  |
| userDevice | Boolean | _是否用户设备_ |  |
| name | String | _产品名称_ |  |
| productId | String | _产品id_ |  |
| productTypeCode | String | _产品类型_ | 体重秤("01")<br />体重脂肪测量仪("02")<br />手环("04")<br />血糖仪("06")<br />血压计("08")<br />人体成分分析仪("09")<br />支付卡("11") |
| model | String | _工厂型号_ |  |
| salesModel | String | _销售型号_ |  |
| picture | String | _产品图片地址_ |  |
| communicationType | Integer | _通讯方式_ | 1:网络,<br />2: WIFI,<br />3:GPRS,<br />4:蓝牙,<br />5:WIFI_GPRS,<br />6: NB_IOT |
| maxUserQuantity | Integer | _用户最大使用数_ |  |
| netType | Integer | _网络类型_ | _GPRS_(0), _WIFI_(1); |
| online | Boolean | _在线标识_ |  |
| deleted | Boolean | _删除标识_ | _0-未删除；1-删除_ |
| clientId | String | _客户端id_ |  |
| status | int | _设备状态 _ | _0,激活 1,未激活_ |
| imgUrl | String | _实体图片_ |  |
| venderId | String | _厂商id_ |  |
| isActive | Integer | _是否是激活设备_ | _多手环情况_ |
| isForeign | Boolean | _是否是国际版_ |  |
| configureManne | Integer | 配网方式 | 通讯方式为wifi时使用<br />_0:airkiss 和 Smartlink_<br />_1:airkiss_<br />_2:Smartlink_<br />_6:_SmartlinkAndSoftAP(ap配网) |
| thirdDeviceId | String | _第三方设备id_ | _如是第三方设备，则有第三方设备id_ |
| operationGuide | String | _操作指南_ |  |
| productProperties | List<ProductProperties> | _设备属性_ |  |

**ProductProperties**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | Integer | 主键id |  |
| key | Integer | _类型key_ |  |
| value | String | _值_ |  |
| sort | Integer | _序号_ |  |
| memo | String | _备注_ |  |

**​**

**DeviceUserDto**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | Integer | 主键id |  |
| userId | Long | _使用者id_ |  |
| deviceId | String | _设备id_ |  |
| userNo | Integer | _绑定的设备按钮号_ |  |
| updated | Long | _修改时间_ |  |
| clientId | String | _客服端id_ |  |
| deleted | Boolean | _删除标识_ |  |
| nickname | String | _昵称_ |  |
| created | Date | _创建时间_ |  |
| headimg | String | _头像地址_ |  |
| sex | Integer | 性别 |  |
| height | Double | _身高_ |  |
| weight | Double | _体重_ |  |
| birthday | Date | _出身日期_ |  |
| channel | Integer | 绑定渠道 |  |


<br />**DevcieUserExtDto**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| isActive | Integer | 活跃状态 | 1:活跃状态,0非活跃状态 |
| deviceId | String | 设备id |  |
| userId | Long | 用户id |  |

**DeviceSetting**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | Integer | 主键id |  |
| deviceId | String | _设备id_ |  |
| settingClass | String | _设置类名称_ |  |
| content | String | _json内容_ |  |

**​**

**DeviceStatus**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | Integer | 主键id |  |
| deviceId | String | _设备id_ |  |
| battery | Integer | _电量_ |  |

**示例**<br />

```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"device":{
			"id":"1508790001ed",
			"sn":"0137842500000493",
			"mac":"1508790001ed",
			"qrcode":"http://we.qq.com/d/AQBCiYWOvmKNsQffc7nKDuITdIU4eNn-6Ny9z0fR",
			"experienceFlag":false,
			"doctorDevice":false,
			"userDevice":true,
			"name":"乐心i8",
			"productId":"c7942dee3022480dbad5dae7c6ad9d51",
			"productTypeCode":"08",
			"model":"LS812-F",
			"salesModel":"i8",
			"communicationType":2,
			"maxUserQuantity":2,
			"created":1559306236000,
			"updated":1559306235960,
			"statusChangeTime":1559306235838,
			"battery":100,
			"netType":1,
			"online":false,
			"deleted":false,
			"status":0,
			"isForeign":false,
			"productProperties":[
			],
			"configureManne":0
		},
		"deviceUsers":[
			{
				"id":"1a7cce48943d4d47881175db4f0915ef",
				"userId":23340904,
				"deviceId":"1508790001ed",
				"userNo":0,
				"updated":1578908363239,
				"deleted":false,
				"created":1578908363239,
				"nickname":"乐心4636",
				"sex":1,
				"height":170,
				"weight":56,
				"birthday":709142400000,
				"channel":6
			},
			{
				"id":"f83e1a9bd7ef43c7b09c4c1e1d8547bc",
				"userId":23340904,
				"deviceId":"1508790001ed",
				"userNo":1,
				"updated":1578908365917,
				"deleted":false,
				"created":1578908365917,
				"nickname":"乐心4636",
				"sex":1,
				"height":170,
				"weight":56,
				"birthday":709142400000,
				"channel":6
			},
			{
				"id":"2634075307784438916640a6b0f9c25a",
				"userId":23340904,
				"deviceId":"1508790001ed",
				"userNo":2,
				"updated":1578908367638,
				"deleted":false,
				"created":1578908367638,
				"nickname":"乐心4636",
				"sex":1,
				"height":170,
				"weight":56,
				"birthday":709142400000,
				"channel":6
			}
		],
		"deviceUserExts":[
		],
		"deviceStatus":{
			"id":"88d339f848b84bfd94ae39a6e48bdd47",
			"deviceId":"1508790001ed",
			"batteryChangeTime":1578908372278,
			"statusChangeTime":1559306235838,
			"online":false,
			"deleted":false,
			"updated":1559306235960,
			"created":1559306236000
		},
		"deviceSettings":[
		]
	}
}
```
<a name="F4XDJ"></a>
# 2.解绑设备
**url :  域名 +  /device-rest/device/unbind/unbindSelfDevice**<br />**method: post**<br />**​**

**header参数或者url参数**<br />**​**<br />

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 根据key类型传相应的值 | 关联账号id<br /> |

**​**

**post入参 **

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| **deviceKeyType** | String | 设备标识类型，可选值为：<br />id： 设备id<br />sn:  设备sn | 必传 |
| **deviceKey** | string | 根据key类型传相应的值 |  |

**示例 **<br />

```json
{
	"deviceKeyType":"id",
	"deviceKey":"A4C138A70285"
}
```

<br />**出参**<br />****DevcieUserExtDto**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| isActive | Integer | 活跃状态 | 1:活跃状态,0非活跃状态 |
| deviceId | String | 设备id |  |
| userId | Long | 用户id |  |


<br />示例：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"list":[
			{
				"deviceId":"a0047d0038e4",
				"userId":4512224,
				"id":32245,
				"isActive":1,
				"lastDataTime":1603180822000
			}
		]
	}
}


```
<a name="alNzx"></a>
# 3.获取设备信息
**​**<br />
```bash
url :  域名 +  /device-rest/device/baseinfo/getDeviceBaseInfo
method: post
```
**​**

**​**

**post入参 **

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| **deviceKeyType** | String | 设备标识类型，可选值为：<br />id： 设备id<br />sn:  设备sn<br />mac: 设备mac地址 | 必传 |
| **deviceKey** | string | 根据key类型传相应的值 |  |

**示例 **<br />

```json
{
	"deviceKeyType":"id",
	"deviceKey":"A4C138A70285"
}
```

<br />**出参​**<br />DeviceBaseDTO

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| **deviceId** | string | 设备id |  |
| **sn** | String | 设备sn |  |
| **mac** | Long | 设备mac地址 |  |
| **model** | string | 设备工厂型号 |  |
| **productType** | string | 设备分类 | **体重秤**(**"01"**),<br />**体重脂肪测量仪**(**"02"**),<br />**手环**(**"04"**), **血糖仪**(**"06"**),<br />**血压计**(**"08"**),<br />**人体成分分析仪**(**"09"**),<br />**支付卡**(**"11"**),<br />**pillow**(**"14"**); |
| **hardwareVersion** | string | 设备硬件版本 |  |
| **softwareVersion** | string | 设备固件版本 |  |


<br />输出示例
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"deviceId":"000100000111",
		"sn":"0000025600000273",
		"mac":"087CBED2D27D",
		"qrcode":"http://we.qq.com/d/AQC7PnaOdLFlFdS_3JPVgT7UuA9QPIZTMx8Dq3rj",
		"model":"LS109",
		"productType":"01",
		"watchFlag":false,
		"hardwareVersion":"A002",
		"softwareVersion":"A09",
		"useSceneType":1,
		"factoryActivateStatus":0
	}
}
```
<a name="TDrfQ"></a>
# 4.获取乐心设备id
**​**

**对每一个设备，生成一个唯一的乐心设备id。**<br />**1.各业务模块有设备相关的逻辑，如不进行此步骤，则会缺乏合法的乐心设备id，部分功能会受影响；**<br />**2.影响后续设备相关的统计功能；**
```bash
url :  域名 +  /api/device/apply/v1.0/applyDeviceId
method: post
```
**​**

**​**

**post入参 **

| 字段 | 类型 | 描述 | 是否必传 | 备注 |
| --- | --- | --- | --- | --- |
| **model** | String | 设备型号 | 是 | 在乐心云为每个型号注册，分配型号标识 |
| **thirdDeviceId** | String | _第三方设备唯一标识_ | 是 | 标识设备的标识即可，需唯一，不同设备不重复 |
| **mac** | String | mac地址 | 否 | 如果是蓝牙设备，必传 |
| **hardwareVersion** | String | _硬件版本号_ | 否 |  |
| **softwareVersion** | String | _固件版本号_ | 否 |  |
|  |  |  |  |  |

**示例 **<br />

```json
{
  	"model": "LS109",
    "thirdDeviceId": "087CBED2D27D",
    "mac": "087CBED2D27D",
    "hardwareVersion": "A002",
    "softwareVersion": "A09",
    
}
```

<br />**出参​**<br />


| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| **deviceId** | string | 乐心设备id |  |
| **sn** | String | 乐心设备sn |  |


<br />输出示例
```json

{
    "code": 200,
    "msg": "成功",
    "data": {
        "deviceId": "000100000111",
        "mac": "087CBED2D27D",
        "sn": "0000025600000273"
    }
}
```



