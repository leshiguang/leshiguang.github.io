<a name="5qwhF"></a>
# 设备管理
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


<br />
<br />返回结果：<br />**DeviceInfo**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| deviceName | String | 设备名称 |
| mac | String | 设备mac地址 |
| rSSI | int | 广播信号强度 |
| deviceId | String | 设备Id |
| sn | String | 设备sn |
| modelNumber | String | 设备型号 |
| softwareVersion | String | 软件版本 |
| handwareVersion | String | 硬件版本 |
| firmwareVersion | String | 固件版本 |
| manufactureName | String | 制造商 |
| registerStatus | int | 设备注册状态（0:未注册 1:已注册） |
| manufactureId | String | 厂商Id |
| protocolType | ProtocolType | 通信协议类型 |
| dviceType | DeeviceType | 设备类型 |
| randomNumber | String | 配对过程产生的随机数 |
| batteryInfo | BatteryInfo | 电池信息 |

**<br />**ProtocolType**

| A5 | A5协议（一般是手环的协议） |
| --- | --- |
| A6 | A6协议（一般是体脂秤血压计协议） |

**DeviceType**

| Bracelet | 手环 |
| --- | --- |
| FatScale | 体脂秤 |
| BloodPressure | 血压计 |

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


<br />**BindReceiver**：

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
### 输入随机数
手环在收到绑定请求时， 会触发随机数绑定流程，在收到绑定流程回调onReceiveRadomNumberRequest时， 向用户显示6位数的数字输入框，输入确认后，调用该接口，进行随机数的正确性验证，验证结果将回馈到onReceiveBindState回调中，调用示例：
```java
BleDeviceManager.getDefaultManager().inputRandomNumber(lseDeviceInfoApp.getMacAddress(), code);
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | String | 正在绑定的设备mac地址 |
| randomNumber | String | 用户输入的6位数的随机数 |



<a name="d4JUu"></a>
### 写入deviceId
体脂秤或血压仪在收到绑定请求时，若设备上没有deviceId，则会触发deviceId写入流程，以生成设备唯一标识号，我们建议您直接使用mac地址作为唯一标识，不必重新生成一个唯一ID。若设备上已经写入过deviceId，则无需调用该方法（您将不会收到onReceiveDeviceIdRequest回调）, 调用示例：
```java
BleDeviceManager.getDefaultManager().inputDeviceId(lseDeviceInfo.getMac(), lseDeviceInfo.getMac().replace(":", ""));
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | String | 正在绑定的设备mac地址 |
| deviceId | String | 设备的唯一标识号，格式必须是长度为12的字符串 |

<a name="Kn6tX"></a>
## 解绑设备
当用户需要解除绑定或正在绑定中断绑定时， 需要调用unbind方法，解绑后会删除SDK中的缓存的设备信息并断开蓝牙连接，建议您在解绑成功后，清除您App本地或者云端存储的设备信息，并删除和用户的绑定关系， 调用示例：
```java
BleDeviceManager.getDefaultManager().unBind(lseDeviceInfo.getMac());
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | String | 设备mac地址 |




