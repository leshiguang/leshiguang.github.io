<a name="zUI4q"></a>
## 手环绑定流程
![](https://cdn.nlark.com/yuque/__puml/a9dc2490b711c4bf1a20cbbfd1cfb2ef.svg#lake_card_v2=eyJjb2RlIjoiQHN0YXJ0dW1sXG5cbmF1dG9udW1iZXJcblxuYWN0b3IgXCLnlKjmiLdcIiBhcyBVc2VyXG5wYXJ0aWNpcGFudCBcIkFwcFwiIGFzIEFwcFxucGFydGljaXBhbnQgXCJTREtcIiBhcyBTREtcbnBhcnRpY2lwYW50IFwi6K6-5aSHXCIgYXMgRGV2aWNlXG5cbmFjdGl2YXRlIEFwcFxuQXBwIC0-IFNESzog5Yid5aeL5YyWU0RL77ya6LCD55SoaW5pdFdpdGhBcHBJZOWIneWni-WMllxuXG5hY3RpdmF0ZSBVc2VyXG5cblVzZXIgLT4gQXBwOiDpgInmi6norr7lpIflj5Hotbfnu5HlrprmtYHnqItcbmFjdGl2YXRlIEFwcFxuXG5BcHAgLT4gU0RLOiDlj5HotbfmkJzntKLor7fmsYLvvJpzZWFyY2hEZXZpY2VXaXRoRGV2aWNlVHlwZXNcbmFjdGl2YXRlIFNES1xuXG5TREsgLS0-IEFwcDog6L-U5Zue5pCc57Si57uT5p6cXG5ub3RlIHJpZ2h0IG9mIFNESzog5q-P5qyh6L-U5Zue5Y2V5Liq6K6-5aSH77yM5LiN5aSE55CG6YeN5aSN57uT5p6cXG5cbmFjdGl2YXRlIEFwcFxuQXBwIC0-IEFwcDog6IGa5ZCI5pCc57Si57uT5p6c77yM5oyJ54Wn5L-h5Y-35by65bqm5o6S5bqPXG5cbkFwcCAtLT4gVXNlcjog5ZCR55So5oi35bGV56S65pCc57Si5Yiw55qE6K6-5aSH5YiX6KGoXG5cblVzZXIgLT4gQXBwOiDpgInmi6nkuIDkuKrmkJzntKLliLDnmoTorr7lpIfov5vooYznu5HlrppcblxuQXBwIC0-IFNESzog6LCD55SoYmluZFdpdGhEZXZpY2VcblxuU0RLIC0-IERldmljZTog6L-e5o6l6K6-5aSH77yM6I635Y-W6ZqP5py65pWwXG5cbkRldmljZSAtPiBTREs6IOi_lOWbnumaj-acuuaVsFxuXG5TREsgLS0-IEFwcDog5Zue6LCDYmluZFN0YXRlQ2hhbmdlZCzlkYrnn6XpnIDopoHpmo_mnLrmlbDphY3lr7lcblxuQXBwIC0-IEFwcDog5pi-56S66ZqP5py65pWw6L6T5YWl5qGGXG5cblVzZXIgLT4gQXBwOiDovpPlhaXpmo_mnLrmlbBcblxuQXBwIC0-IFNESzog6LCD55SoaW5wdXRSYW5kb21Db2Rl6L6T5YWl6ZqP5py65pWwXG5cblNESyAtPiBTREs6IOmqjOivgemaj-acuuaVsOeahOato-ehruaAp1xuXG5TREsgLT4gRGV2aWNlOiDlkYrnn6Xpqozor4Hnu5PmnpxcblxuU0RLIC0tPiBBcHA6IOWbnuiwg2JpbmRTdGF0ZUNoYW5nZWTlkYrnn6Xnu5Hlrprnu5PmnpxcblxuU0RLIC0-IFNESzog5byA5aeL5o6l5pS25pWw5o2uXG5AZW5kdW1sIiwidHlwZSI6InB1bWwiLCJtYXJnaW4iOnRydWUsImlkIjoiZGdqSmgiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sL2E5ZGMyNDkwYjcxMWM0YmYxYTIwY2JiZmQxY2ZiMmVmLnN2ZyIsImNhcmQiOiJkaWFncmFtIn0=)

<a name="h49mf"></a>
## 体脂秤绑定流程


![](https://cdn.nlark.com/yuque/__puml/68a8d787df4c33bb93612bb507d1b9b0.svg#lake_card_v2=eyJjb2RlIjoiQHN0YXJ0dW1sXG5cbmF1dG9udW1iZXJcblxuYWN0b3IgXCLnlKjmiLdcIiBhcyBVc2VyXG5wYXJ0aWNpcGFudCBcIkFwcFwiIGFzIEFwcFxucGFydGljaXBhbnQgXCJTREtcIiBhcyBTREtcbnBhcnRpY2lwYW50IFwi6K6-5aSHXCIgYXMgRGV2aWNlICNvcmFuZ2VcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gU0RLOiDliJ3lp4vljJZTREvvvJrosIPnlKhpbml0V2l0aEFwcElk5Yid5aeL5YyWXG5cbmFjdGl2YXRlIFVzZXJcblxuVXNlciAtPiBBcHA6IOmAieaLqeiuvuWkh-WPkei1t-e7keWumua1geeoi1xuYWN0aXZhdGUgQXBwXG5cbkFwcCAtPiBTREs6IOWPkei1t-aQnOe0ouivt-axgu-8mnNlYXJjaERldmljZVdpdGhEZXZpY2VUeXBlc1xuYWN0aXZhdGUgU0RLXG5cblNESyAtLT4gQXBwOiDov5Tlm57mkJzntKLnu5Pmnpxcbm5vdGUgcmlnaHQgb2YgU0RLOiDmr4_mrKHov5Tlm57ljZXkuKrorr7lpIfvvIzkuI3lpITnkIbph43lpI3nu5PmnpxcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gQXBwOiDogZrlkIjmkJzntKLnu5PmnpzvvIzmjInnhafkv6Hlj7flvLrluqbmjpLluo9cblxuQXBwIC0tPiBVc2VyOiDlkJHnlKjmiLflsZXnpLrmkJzntKLliLDnmoTorr7lpIfliJfooahcblxuVXNlciAtPiBBcHA6IOmAieaLqeS4gOS4quaQnOe0ouWIsOeahOiuvuWkh-i_m-ihjOe7keWumlxuXG5BcHAgLT4gU0RLOiDosIPnlKhiaW5kV2l0aERldmljZVxuXG5TREsgLT4gRGV2aWNlOiDov57mjqXorr7lpIdcblNESyAtPiBTREs66K-75Y-W6K6-5aSH5L-h5oGv77yM5Yik5pat5piv5ZCm6ZyA6KaB55Sf5oiQRGV2aWNlSWRcblNESyAtLT4gQXBwOiDlm57osINiaW5kU3RhdGVDaGFuZ2VkLOWRiuefpemcgOimgeWGmeWFpURldmljZUlkXG5BcHAgLT4gU0RLOiDosIPnlKhyZWdpc3RXaXRoRGV2aWNlSWTlhpnlhaVEZXZpY2VJRFxuU0RLIC0-IERldmljZTog5YaZ5YWlRGV2aWNlSURcblxuU0RLIC0tPiBBcHA6IOWbnuiwg2JpbmRTdGF0ZUNoYW5nZWTlkYrnn6Xnu5Hlrprnu5PmnpxcblxuU0RLIC0-IFNESzog5byA5aeL5o6l5pS25pWw5o2uXG5AZW5kdW1sIiwidHlwZSI6InB1bWwiLCJtYXJnaW4iOnRydWUsImlkIjoiRjh6NkEiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sLzY4YThkNzg3ZGY0YzMzYmI5MzYxMmJiNTA3ZDFiOWIwLnN2ZyIsImNhcmQiOiJkaWFncmFtIn0=)

<a name="IqDQp"></a>
## 血压计绑定流程


![](https://cdn.nlark.com/yuque/__puml/a7c3776598267626d1ae185f131f785a.svg#lake_card_v2=eyJjb2RlIjoiQHN0YXJ0dW1sXG5cbmF1dG9udW1iZXJcblxuYWN0b3IgXCLnlKjmiLdcIiBhcyBVc2VyXG5wYXJ0aWNpcGFudCBcIkFwcFwiIGFzIEFwcFxucGFydGljaXBhbnQgXCJTREtcIiBhcyBTREtcbnBhcnRpY2lwYW50IFwi6K6-5aSHXCIgYXMgRGV2aWNlICNvcmFuZ2VcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gU0RLOiDliJ3lp4vljJZTREvvvJrosIPnlKhpbml0V2l0aEFwcElk5Yid5aeL5YyWXG5cbmFjdGl2YXRlIFVzZXJcblxuVXNlciAtPiBBcHA6IOmAieaLqeiuvuWkh-WPkei1t-e7keWumua1geeoi1xuYWN0aXZhdGUgQXBwXG5cbkFwcCAtPiBTREs6IOWPkei1t-aQnOe0ouivt-axgu-8mnNlYXJjaERldmljZVdpdGhEZXZpY2VUeXBlc1xuYWN0aXZhdGUgU0RLXG5cblNESyAtLT4gQXBwOiDov5Tlm57mkJzntKLnu5Pmnpxcbm5vdGUgcmlnaHQgb2YgU0RLOiDmr4_mrKHov5Tlm57ljZXkuKrorr7lpIfvvIzkuI3lpITnkIbph43lpI3nu5PmnpxcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gQXBwOiDogZrlkIjmkJzntKLnu5PmnpzvvIzmjInnhafkv6Hlj7flvLrluqbmjpLluo9cblxuQXBwIC0tPiBVc2VyOiDlkJHnlKjmiLflsZXnpLrmkJzntKLliLDnmoTorr7lpIfliJfooahcblxuVXNlciAtPiBBcHA6IOmAieaLqeS4gOS4quaQnOe0ouWIsOeahOiuvuWkh-i_m-ihjOe7keWumlxuXG5BcHAgLT4gU0RLOiDosIPnlKhiaW5kV2l0aERldmljZVxuXG5TREsgLT4gRGV2aWNlOiDov57mjqXorr7lpIdcblNESyAtPiBTREs66K-75Y-W6K6-5aSH5L-h5oGv77yM5Yik5pat5piv5ZCm6ZyA6KaB55Sf5oiQRGV2aWNlSWRcblNESyAtLT4gQXBwOiDlm57osINiaW5kU3RhdGVDaGFuZ2VkLOWRiuefpemcgOimgeWGmeWFpURldmljZUlkXG5BcHAgLT4gU0RLOiDosIPnlKhyZWdpc3RXaXRoRGV2aWNlSWTlhpnlhaVEZXZpY2VJRFxuU0RLIC0-IERldmljZTog5YaZ5YWlRGV2aWNlSURcblNESyAtLT4gQXBwOiDlm57osINiaW5kU3RhdGVDaGFuZ2VkLOWRiuefpemcgOimgeWGmeWFpeeUqOaIt-e8luWPt1xuQXBwIC0-IFNESzog6LCD55SoaW5wdXRVc2VyTnVtYmVy5YaZ5YWl55So5oi357yW5Y-3XG5TREsgLS0-IEFwcDog5Zue6LCDYmluZFN0YXRlQ2hhbmdlZCzlkYrnn6Xnu5Hlrprnu5PmnpxcblNESyAtPiBTREs6IOW8gOWni-aOpeaUtuaVsOaNrlxuQGVuZHVtbCIsInR5cGUiOiJwdW1sIiwibWFyZ2luIjp0cnVlLCJpZCI6ImR4eWluIiwidXJsIjoiaHR0cHM6Ly9jZG4ubmxhcmsuY29tL3l1cXVlL19fcHVtbC9hN2MzNzc2NTk4MjY3NjI2ZDFhZTE4NWYxMzFmNzg1YS5zdmciLCJjYXJkIjoiZGlhZ3JhbSJ9)<a name="SzYQV"></a>
## 搜索&发现设备
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

**![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616661516030-e6ccdad6-91e1-4d31-8d73-5756ad506953.png#align=left&display=inline&height=468&margin=%5Bobject%20Object%5D&name=image.png&originHeight=468&originWidth=994&size=58729&status=done&style=none&width=994)**
<a name="ZSNur"></a>
## 停止搜索
强制中断蓝牙搜索，执行搜索过程中中断搜索或页面销毁时，请务必调用停止搜索接口，否则会影响正常的连接流程：
```
/// 停止搜索
- (void)stopSearch;
```
<a name="qAuSv"></a>
## 绑定设备
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

**![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616661565817-efc8488d-8d17-4a5a-b9ae-dc8c68e502bd.png#align=left&display=inline&height=486&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=869&size=27260&status=done&style=none&width=869)**
<a name="ltPmF"></a>
### 输入随机数
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

<a name="ytm6G"></a>
### ![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616661592332-b90f1f43-71e5-4795-b948-eb5460c7e15f.png#align=left&display=inline&height=474&margin=%5Bobject%20Object%5D&name=image.png&originHeight=474&originWidth=869&size=31643&status=done&style=none&width=869)
<a name="ht7MX"></a>
### 写入deviceId
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

<br />
<a name="no1Ja"></a>
## 解绑设备
当用户需要解除绑定或正在绑定中断绑定时， 需要调用unbind方法，解绑后会删除SDK中的缓存的设备信息并断开蓝牙连接，建议您在解绑成功后，清除您App本地或者云端存储的设备信息，并删除和用户的绑定关系， 调用示例：<br />

```
    [self.deviceManager deleteMonitorDeviceWithMacString:self.device.mac];
```

<br />请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | NSString | 设备mac地址 |

<br />
<a name="WBJuP"></a>
## 添加用户已经绑定的设备
<br />用户打开app时， 若之前已经绑定过设备， 需要将已经绑定的设备的mac地址添加到sdk， sdk会自动连接设备，建议您将用户和设备的绑定关系持久化在云端， sdk初始化成功之后立即添加mac地址到sdk， 调用示例：

```objectivec
[deviceManager addMonitorDeviceWithMacString:mac.uppercaseString deviceType:LZDeviceTypeBracelet];
```



