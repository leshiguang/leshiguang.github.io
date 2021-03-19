<a name="b3f97134"></a>
## [搜索&发现设备](https://docs.leshiguang.com/dev-android/bluetooth/reference/device?id=%e6%90%9c%e7%b4%a2amp%e5%8f%91%e7%8e%b0%e8%ae%be%e5%a4%87)
蓝牙设备在绑定前，需要先通过扫描获得需要绑定的设备信息，首先需要调用search接口获取DeviceInfo对象，您可能需要自己去判断释放有重复的蓝牙设备信号上报并做过滤，在实际应用过程中，您可能需要经过多个扫描周期才能获得蓝牙搜索结果，调用示例：
```
/// 搜索设备
/// @param deviceTypes 设备类型 参考 LZDeviceType，不传默认所有SDK支持设备
/// @param resultHandle 结果
- (void)searchDeviceWithDeviceTypes:(nullable NSSet <NSNumber *> *)deviceTypes
                       resultHandle:(LZSearchResultBlock)resultHandle;
```
请求参数：

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| deviceTypes |  NSSet <NSNumber *> | 设备类型 |
| resultHandle | LZSearchResultBlock | 搜索结果回调 |


<br />
<br />**LZDeviceProtocol**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| mac | NSString | 设备mac地址 |
| deviceId | NSString | 设备id |
| name | NSString | 设备名称 |
| deviceType | LZDeviceType | 设备类型 |
| batteryInfo | LZBatteryInfo |  电量状态 |
| connectStatus | LZDeviceConnectStatus | 设备连接状态 |
| protocolType | LZProtocolType |  协议 |
| deviceInfo |  NSDictionary <kLZBluetoothDeviceInfoKey, NSString *> | 设备信息（主要是180A服务的信息） |
| rssi | NSNumber | 蓝牙强度 |
| identifier | NSString | 设备标识码 |

**
<a name="5d65489d"></a>
## [停止搜索](https://docs.leshiguang.com/dev-android/bluetooth/reference/device?id=%e5%81%9c%e6%ad%a2%e6%90%9c%e7%b4%a2)
强制中断蓝牙搜索，执行搜索过程中中断搜索或页面销毁时，请务必调用停止搜索接口，否则会影响正常的连接流程：
```
/// 停止搜索
- (void)stopSearch;
```

<a name="724caf36"></a>
## [绑定设备](https://docs.leshiguang.com/dev-android/bluetooth/reference/device?id=%e7%bb%91%e5%ae%9a%e8%ae%be%e5%a4%87)
搜索完成后， 向用户展示搜索到的设备列表信息， 用户选择目标设备后， 进行设备绑定操作（搜索不是必须的，如果您知道用户当前使用的设备信息， 可以不经过搜索直接调用该api进行绑定），绑定结果将通过bindReceiver接收，绑定成功后，您需要将设备信息和用户的绑定关系持久化在您的云端，再次打开App时，只需调用addMonitorDeviceWithMacString添加mac地址就可以进行连接，无需再次绑定，调用示例：
```
#pragma mark - 配对设备
- (void)startPairDeviceInfo:(LZBaseDevice *)rawDeviceInfo {
    [self.deviceManager bindWithDevice:rawDeviceInfo bindDelegate:self];
}

#pragma mark - LSDeviceManagerDelegate
- (void)device:(id<LZDeviceProtocol>)device bindStateChanged:(LZBindState)bindState {
    dispatch_async(dispatch_get_main_queue(), ^{
        switch (bindState) {
            case LZBindStateInputRandomNumber:
                /// 需要你输入随机码
                [self _handleBindStatusInputRandomCodeWihtLength:6];
                break;
                
            case LZBindStateInputUserNumberAndBindResult:
                /// 这个是血压计需要使用的，手环不会回调这个状态
                [self.deviceManager inputUserNumber:1 bindResult:1 macString:device.mac deviceType:device.deviceType];
                break;
            case LZBindStateUnregister:
                /// 这个是血压计、体脂秤需要使用的，手环不会回调这个状态
                [self.deviceManager registWithDeviceId:device.mac macString:device.mac deviceType:device.deviceType];
                break;
            case LZBindStateSuccessful:
                self.bindedDevice = device;
                [self _handleBindStatusSuccess];
                break;
            case LZBindStateFailure:
            case LZBindStateAuthorizeFailure: {
            		// 授权失败
                [self _handleBindStatusFailedWithNetCode:bindState];
                break;
            }
           
            case LZBindStateInputRandomNumberError: {
            		//输入随机数错误
                [self _handleBindStatusInputRndomCodeError];
                break;
            }
            default:
                break;
        }
    });
}
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| device | id<LZDeviceProtocol>)device | 搜索到的设备信息 |
| bindState | LZBindState | 绑定回调，包括绑定过程和绑定结果的回调 |

**<br />
<a name="4a7e59de"></a>
### [输入随机数](https://docs.leshiguang.com/dev-android/bluetooth/reference/device?id=%e8%be%93%e5%85%a5%e9%9a%8f%e6%9c%ba%e6%95%b0)
手环在收到绑定请求时， 会触发随机数绑定流程，在收到绑定流程回调onReceiveRadomNumberRequest时， 向用户显示6位数的数字输入框，输入确认后，调用该接口，进行随机数的正确性验证，验证结果将回馈到onReceiveBindState回调中，调用示例：
```
[self.deviceManager inputRandomCode:code macString:self.device.mac deviceType:self.device.deviceType];

```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | NSString | 正在绑定的设备mac地址 |
| code | NSString | 用户输入的6位数的随机数 |
| deviceType | LZDeviceType | 设备类型 |


<a name="9b740235"></a>
### [写入deviceId](https://docs.leshiguang.com/dev-android/bluetooth/reference/device?id=%e5%86%99%e5%85%a5deviceid)
体脂秤或血压仪在收到绑定请求时，若设备上没有deviceId，则会触发deviceId写入流程，以生成设备唯一标识号，我们建议您直接使用mac地址作为唯一标识，不必重新生成一个唯一ID。若设备上已经写入过deviceId，则无需调用该方法（您将不会收到onReceiveDeviceIdRequest回调）, 调用示例：
```
[self.deviceManager registWithDeviceId:device.mac macString:device.mac deviceType:device.deviceType];
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | NSString | 正在绑定的设备mac地址 |
| deviceId | NSString | 设备的唯一标识号，格式必须是长度为12的字符串 |
| deviceType | LZDeviceType | 设备类型 |


<a name="aeb780de"></a>
## [解绑设备](https://docs.leshiguang.com/dev-android/bluetooth/reference/device?id=%e8%a7%a3%e7%bb%91%e8%ae%be%e5%a4%87)
当用户需要解除绑定或正在绑定中断绑定时， 需要调用unbind方法，解绑后会删除SDK中的缓存的设备信息并断开蓝牙连接，建议您在解绑成功后，清除您App本地或者云端存储的设备信息，并删除和用户的绑定关系， 调用示例：
```
    [self.deviceManager deleteMonitorDeviceWithMacString:self.device.mac];
```
请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | NSString | 设备mac地址 |

<br />
<a name="EGGHI"></a>
## 添加用户已经绑定的设备
用户打开app时， 若之前已经绑定过设备， 需要将已经绑定的设备的mac地址添加到sdk， sdk会自动连接设备，建议您将用户和设备的绑定关系持久化在云端， sdk初始化成功之后立即添加mac地址到sdk， 调用示例：
```objectivec
[deviceManager addMonitorDeviceWithMacString:mac.uppercaseString deviceType:LZDeviceTypeBracelet];
```
**

