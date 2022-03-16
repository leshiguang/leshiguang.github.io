<a name="p4E6i"></a>
## 搜索&发现设备
蓝牙设备在绑定前，需要先通过扫描获得需要绑定的设备信息，首先需要调用search接口获取DeviceInfo对象，您可能需要自己去判断释放有重复的蓝牙设备信号上报并做过滤，在实际应用过程中，您可能需要经过多个扫描周期才能获得蓝牙搜索结果，调用示例：
```java
BleDeviceManager.getDefaultManager().search(10000, new Consumer<DeviceInfo>() {
            @Override
            public void accept(DeviceInfo deviceInfo) throws Exception {
                if (!scanResults.contains(deviceInfo)) {
                    scanResults.add(deviceInfo);
                }
                scanResultAdapter.notifyDataSetChanged();
                Log.i(deviceInfo.getMac());
            }
        });
```
请求参数：

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| timeoutMills | long | 单次搜索超时时长，一般设置10～15秒，可以根据实际的应用场景来调整， 比如 |
| consumer | Consumer<DeviceInfo> | 搜索到的设备信息的回调，单个返回，需要开发者自己聚合 |

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616663997679-c2ca0bcd-99a4-4bd1-8ed3-a79d96707d97.png#crop=0&crop=0&crop=1&crop=1&height=351&id=qOBAE&margin=%5Bobject%20Object%5D&name=image.png&originHeight=351&originWidth=746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33445&status=done&style=none&title=&width=746)

返回结果：<br />**DeviceInfo**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| deviceName | String | 设备名称 |
| mac | String | 设备mac地址 |
| rSSI | int | 广播信号强度 |
| deviceId | String | 设备Id |
| sn | String | 设备sn |
| modelNumber | String | 设备型号 |
| softwareVersion | String | 软件版本、<br />固件版本 |
| handwareVersion | String | 硬件版本 |
| manufactureName | String | 制造商 |
| registerStatus | int | 设备注册状态（0:未注册 1:已注册） |
| manufactureId | String | 厂商Id |
| protocolType | String | 通信协议类型 |
| dviceType | String | 设备类型 |
| randomNumber | String | 配对过程产生的随机数 |
| batteryInfo | BatteryInfo | 电池信息 |



**ProtocolType**

| A5 | A5协议（一般是手环的协议） |
| --- | --- |
| A6 | A6协议（一般是体脂秤血压计协议） |
| A7 | 跳绳 |
| A8 | 药盒 |



**DeviceType**

| Band | 手环 |
| --- | --- |
| FatScale | 体脂秤 |
| BloodPressure | 血压计 |
| MedicalKit | 药盒 |
| SkippingRope | 跳绳 |

<a name="mtPfx"></a>
## 停止搜索
强制中断蓝牙搜索，执行搜索过程中中断搜索或页面销毁时，请务必调用停止搜索接口，否则会影响正常的连接流程， 调用示例：
```java
BleDeviceManager.getDefaultManager().stopSearch();
```
<a name="8FYLT"></a>
## 绑定设备
搜索完成后， 向用户展示搜索到的设备列表信息， 用户选择目标设备后， 进行设备绑定操作（搜索不是必须的，如果您知道用户当前使用的设备信息， 可以不经过搜索直接调用该api进行绑定），绑定结果将通过bindReceiver接收，绑定成功后，您需要将设备信息和用户的绑定关系持久化在您的云端，再次打开App时，只需初始化sdk就可进行连接，无需再次绑定，调用示例：
```java
BleDeviceManager.getDefaultManager().bind(deviceInfo, new BindReceiver() {
            @Override
            public void onReceiveRandomNumberRequest() {
                // 显示随机数输入框
                viewModel.showInputCode(lseDeviceInfoApp);
            }

            @Override
            public void onReceiveBindState(BindState bindState) {
                if (bindState == BindState.BIND_SUCCESS) {
                    //绑定成功， do something
                } else if (bindState == BindState.RANDOM_NUMBER_MISS_MATCH) {
                    // 手环随机数不匹配 dosomething
                } else {
                    // 绑定失败，调用解绑
                    BleDeviceManager.getDefaultManager().unBind(deviceInfo.getMac());
                	// dosomething
                }
            }
            @Override
            public void onReceiveDeviceIdRequest() {
                // 向体脂秤、血压计写入deviceId（建议直接使用mac地址）
                BleDeviceManager.getDefaultManager().inputDeviceId(deviceInfo.getMac(), lseDeviceInfo.getMac().replace(":", ""));
            }

        });
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| deviceInfo | DeviceInfo | 搜索到的设备信息 |
| bindReceiver | BindReceiver | 绑定回调，包括绑定过程和绑定结果的回调 |


**BindReceiver**：

| 回调 | 参数 | 描述 |
| --- | --- | --- |
| onReceiveRadomNumberRequest | 无 | 绑定过程中收到手环随机数配对请求回调，您需要进一步调用inputRandomNumber以输入用户输入的随机数 |
| onReceiveBindState | bindState | 绑定状态回调 |
| onReceiveDeviceIdRequest | 无 | 绑定过程中收到体脂秤或血压仪写入deviceId的请求回调，您需要进一步调用inputDeviceId写入deviceId，建议您直接输入体脂秤或血压仪设备的mac地址 |

**BindState：**

| BIND_SUCCESS | 绑定成功 |
| --- | --- |
| ILLEGAL_DEVICE_RANDOM_NUMBER | 设备返回随机数非法 |
| ILLEGAL_USER_RANDOM_NUMBER | 用户输入的随机数非法 |
| INVALID_DEVICE | 无效设备 |
| AUTHORIZATION_FAILED | 鉴权失败 |
| RANDOM_NUMBER_MISS_MATCH | 随机数不匹配 |

<a name="bkF1c"></a>
### ![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616664048605-ea10350d-f9ff-4af3-ae44-d68dd360394d.png#crop=0&crop=0&crop=1&crop=1&height=417&id=xRCsV&margin=%5Bobject%20Object%5D&name=image.png&originHeight=417&originWidth=746&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21803&status=done&style=none&title=&width=746)
<a name="djf4d"></a>
## 解绑设备
当用户需要解除绑定或正在绑定中断绑定时， 需要调用unbind方法，解绑后会删除SDK中的缓存的设备信息并断开蓝牙连接，建议您在解绑成功后，清除您App本地或者云端存储的设备信息，并删除和用户的绑定关系， 调用示例：
```java
BleDeviceManager.getDefaultManager().unBind(lseDeviceInfo.getMac());
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | String | 设备mac地址 |

<a name="TrY9t"></a>
## 更新设置项

```java
BleDeviceManager.getDefaultManager().updateConfig("FF:FF:FF:FF:FF:FF",new HeartRateSwitch(),new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus) throws Exception {
                
            }
        });
```
<a name="odu3V"></a>
## 获取具体设备管理器
      用户使用具体设备的能力时，需要获取该设备的管理类（如Band、Scale等），其中有设备特有的接口。<br />调用示例：
```java
BleDeviceManager.getDefaultManager().getDevice(Band.class);
```

