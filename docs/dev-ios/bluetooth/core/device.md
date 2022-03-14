<a name="zUI4q"></a>
## 旧手环绑定流程
![](https://cdn.nlark.com/yuque/__puml/a9dc2490b711c4bf1a20cbbfd1cfb2ef.svg#lake_card_v2=eyJ0eXBlIjoicHVtbCIsImNvZGUiOiJAc3RhcnR1bWxcblxuYXV0b251bWJlclxuXG5hY3RvciBcIueUqOaIt1wiIGFzIFVzZXJcbnBhcnRpY2lwYW50IFwiQXBwXCIgYXMgQXBwXG5wYXJ0aWNpcGFudCBcIlNES1wiIGFzIFNES1xucGFydGljaXBhbnQgXCLorr7lpIdcIiBhcyBEZXZpY2VcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gU0RLOiDliJ3lp4vljJZTREvvvJrosIPnlKhpbml0V2l0aEFwcElk5Yid5aeL5YyWXG5cbmFjdGl2YXRlIFVzZXJcblxuVXNlciAtPiBBcHA6IOmAieaLqeiuvuWkh-WPkei1t-e7keWumua1geeoi1xuYWN0aXZhdGUgQXBwXG5cbkFwcCAtPiBTREs6IOWPkei1t-aQnOe0ouivt-axgu-8mnNlYXJjaERldmljZVdpdGhEZXZpY2VUeXBlc1xuYWN0aXZhdGUgU0RLXG5cblNESyAtLT4gQXBwOiDov5Tlm57mkJzntKLnu5Pmnpxcbm5vdGUgcmlnaHQgb2YgU0RLOiDmr4_mrKHov5Tlm57ljZXkuKrorr7lpIfvvIzkuI3lpITnkIbph43lpI3nu5PmnpxcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gQXBwOiDogZrlkIjmkJzntKLnu5PmnpzvvIzmjInnhafkv6Hlj7flvLrluqbmjpLluo9cblxuQXBwIC0tPiBVc2VyOiDlkJHnlKjmiLflsZXnpLrmkJzntKLliLDnmoTorr7lpIfliJfooahcblxuVXNlciAtPiBBcHA6IOmAieaLqeS4gOS4quaQnOe0ouWIsOeahOiuvuWkh-i_m-ihjOe7keWumlxuXG5BcHAgLT4gU0RLOiDosIPnlKhiaW5kV2l0aERldmljZVxuXG5TREsgLT4gRGV2aWNlOiDov57mjqXorr7lpIfvvIzojrflj5bpmo_mnLrmlbBcblxuRGV2aWNlIC0-IFNESzog6L-U5Zue6ZqP5py65pWwXG5cblNESyAtLT4gQXBwOiDlm57osINiaW5kU3RhdGVDaGFuZ2VkLOWRiuefpemcgOimgemaj-acuuaVsOmFjeWvuVxuXG5BcHAgLT4gQXBwOiDmmL7npLrpmo_mnLrmlbDovpPlhaXmoYZcblxuVXNlciAtPiBBcHA6IOi-k-WFpemaj-acuuaVsFxuXG5BcHAgLT4gU0RLOiDosIPnlKhpbnB1dFJhbmRvbUNvZGXovpPlhaXpmo_mnLrmlbBcblxuU0RLIC0-IFNESzog6aqM6K-B6ZqP5py65pWw55qE5q2j56Gu5oCnXG5cblNESyAtPiBEZXZpY2U6IOWRiuefpemqjOivgee7k-aenFxuXG5TREsgLS0-IEFwcDog5Zue6LCDYmluZFN0YXRlQ2hhbmdlZOWRiuefpee7keWumue7k-aenFxuXG5TREsgLT4gU0RLOiDlvIDlp4vmjqXmlLbmlbDmja5cbkBlbmR1bWwiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sL2E5ZGMyNDkwYjcxMWM0YmYxYTIwY2JiZmQxY2ZiMmVmLnN2ZyIsImlkIjoiZGdqSmgiLCJtYXJnaW4iOnsidG9wIjp0cnVlLCJib3R0b20iOnRydWV9LCJjYXJkIjoiZGlhZ3JhbSJ9)<a name="zCAvm"></a>
## HR6 或者Membo Watch1 
![](https://cdn.nlark.com/yuque/__puml/9a54cfb2b137fbaf072fcd5dbbc9e72c.svg#lake_card_v2=eyJ0eXBlIjoicHVtbCIsImNvZGUiOiJAc3RhcnR1bWxcblxuYXV0b251bWJlclxuXG5hY3RvciBcIueUqOaIt1wiIGFzIFVzZXJcbnBhcnRpY2lwYW50IFwiQXBwXCIgYXMgQXBwXG5wYXJ0aWNpcGFudCBcIlNES1wiIGFzIFNES1xucGFydGljaXBhbnQgXCLorr7lpIdcIiBhcyBEZXZpY2VcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gU0RLOiDliJ3lp4vljJZTREvvvJrosIPnlKhpbml0V2l0aEFwcElk5Yid5aeL5YyWXG5cbmFjdGl2YXRlIFVzZXJcblxuVXNlciAtPiBBcHA6IOmAieaLqeiuvuWkh-WPkei1t-e7keWumua1geeoi1xuYWN0aXZhdGUgQXBwXG5cbkFwcCAtPiBTREs6IOWPkei1t-aQnOe0ouivt-axgu-8mnNlYXJjaERldmljZVdpdGhEZXZpY2VUeXBlc1xuYWN0aXZhdGUgU0RLXG5cblNESyAtLT4gQXBwOiDov5Tlm57mkJzntKLnu5Pmnpxcbm5vdGUgcmlnaHQgb2YgU0RLOiDmr4_mrKHov5Tlm57ljZXkuKrorr7lpIfvvIzkuI3lpITnkIbph43lpI3nu5PmnpxcblxuYWN0aXZhdGUgQXBwXG5BcHAgLT4gQXBwOiDogZrlkIjmkJzntKLnu5PmnpzvvIzmjInnhafkv6Hlj7flvLrluqbmjpLluo9cblxuQXBwIC0tPiBVc2VyOiDlkJHnlKjmiLflsZXnpLrmkJzntKLliLDnmoTorr7lpIfliJfooahcblxuVXNlciAtPiBBcHA6IOmAieaLqeS4gOS4quaQnOe0ouWIsOeahOiuvuWkh-i_m-ihjOe7keWumlxuXG5BcHAgLT4gU0RLOiDosIPnlKhiaW5kV2l0aERldmljZVxuXG5TREsgLT4gRGV2aWNlOiDov57mjqXorr7lpIfvvIznm5HlkKzkuovku7ZcblxuRGV2aWNlIC0-IFNESzog6ZyA6KaB55So5oi356Gu6K6k5LqL5Lu2XG5cblNESyAtLT4gQXBwOiDlm57osINiaW5kU3RhdGVDaGFuZ2VkLOWRiuefpeeUqOaIt-mcgOimgeeCueWHu-aJi-eOrybmiYvooajkuIrnmoTnoa7orqRcblxuQXBwIC0-IEFwcDog5o-Q56S66ZyA6KaB55So5oi356Gu6K6kXG5cblVzZXIgLT4gRGV2aWNlOiDngrnlh7vorr7lpIfkuIrnoa7orqTmjInpkq5cblxuRGV2aWNlIC0-IFNESzog5Y-R6YCB56Gu6K6k5oiQ5Yqf5LqL5Lu2XG5cblNESyAtLT4gQXBwOiDlm57osINiaW5kU3RhdGVDaGFuZ2Vk5ZGK55-l57uR5a6a57uT5p6cXG5cblNESyAtPiBTREs6IOW8gOWni-aOpeaUtuaVsOaNrlxuQGVuZHVtbCIsInVybCI6Imh0dHBzOi8vY2RuLm5sYXJrLmNvbS95dXF1ZS9fX3B1bWwvOWE1NGNmYjJiMTM3ZmJhZjA3MmZjZDVkYmJjOWU3MmMuc3ZnIiwiaWQiOiJ4a25HaCIsIm1hcmdpbiI6eyJ0b3AiOnRydWUsImJvdHRvbSI6dHJ1ZX0sImNhcmQiOiJkaWFncmFtIn0=)<a name="SA3gt"></a>
## 
<a name="h49mf"></a>
## 体脂秤绑定流程

![](https://cdn.nlark.com/yuque/__puml/90bc3219d9fcea9787c887d7c74cf417.svg#lake_card_v2=eyJ0eXBlIjoicHVtbCIsImNvZGUiOiJAc3RhcnR1bWxcblxuYXV0b251bWJlclxuXG5hY3RvciBcIueUqOaIt1wiIGFzIFVzZXJcbnBhcnRpY2lwYW50IFwiQXBwXCIgYXMgQXBwXG5wYXJ0aWNpcGFudCBcIlNES1wiIGFzIFNES1xucGFydGljaXBhbnQgXCLorr7lpIdcIiBhcyBEZXZpY2UgI29yYW5nZVxuXG5hY3RpdmF0ZSBBcHBcbkFwcCAtPiBTREs6IOWIneWni-WMllNES--8muiwg-eUqGluaXRXaXRoQXBwSWTliJ3lp4vljJZcblxuYWN0aXZhdGUgVXNlclxuXG5Vc2VyIC0-IEFwcDog6YCJ5oup6K6-5aSH5Y-R6LW357uR5a6a5rWB56iLXG5hY3RpdmF0ZSBBcHBcblxuQXBwIC0-IFNESzog5Y-R6LW35pCc57Si6K-35rGC77yac2VhcmNoRGV2aWNlV2l0aERldmljZVR5cGVzXG5hY3RpdmF0ZSBTREtcblxuU0RLIC0tPiBBcHA6IOi_lOWbnuaQnOe0oue7k-aenFxubm90ZSByaWdodCBvZiBTREs6IOavj-asoei_lOWbnuWNleS4quiuvuWkh--8jOS4jeWkhOeQhumHjeWkjee7k-aenFxuXG5hY3RpdmF0ZSBBcHBcbkFwcCAtPiBBcHA6IOiBmuWQiOaQnOe0oue7k-aenO-8jOaMieeFp-S_oeWPt-W8uuW6puaOkuW6j1xuXG5BcHAgLS0-IFVzZXI6IOWQkeeUqOaIt-WxleekuuaQnOe0ouWIsOeahOiuvuWkh-WIl-ihqFxuXG5Vc2VyIC0-IEFwcDog6YCJ5oup5LiA5Liq5pCc57Si5Yiw55qE6K6-5aSH6L-b6KGM57uR5a6aXG5cbkFwcCAtPiBTREs6IOiwg-eUqGJpbmRXaXRoRGV2aWNlXG5cblNESyAtPiBEZXZpY2U6IOi_nuaOpeiuvuWkh1xuU0RLIC0-IFNESzror7vlj5borr7lpIfkv6Hmga_vvIzliKTmlq3mmK_lkKbpnIDopoHnlJ_miJBEZXZpY2VJZFxuXG5TREsgLT4gRGV2aWNlOiDlhpnlhaVEZXZpY2VJRFxuXG5TREsgLS0-IEFwcDog5Zue6LCDYmluZFN0YXRlQ2hhbmdlZOWRiuefpee7keWumue7k-aenFxuXG5TREsgLT4gU0RLOiDlvIDlp4vmjqXmlLbmlbDmja5cbkBlbmR1bWwiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sLzkwYmMzMjE5ZDlmY2VhOTc4N2M4ODdkN2M3NGNmNDE3LnN2ZyIsImlkIjoiRjh6NkEiLCJtYXJnaW4iOnsidG9wIjp0cnVlLCJib3R0b20iOnRydWV9LCJjYXJkIjoiZGlhZ3JhbSJ9)
<a name="IqDQp"></a>
## 血压计绑定流程

<a name="SzYQV"></a>
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



**LZDeviceProtocol**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| mac | NSString | 设备mac地址 |
| macAddress | NSString | 为了和安卓统一，带冒号的设备地址，根据mac 计算得到， |
| deviceId | NSString | 设备id |
| name | NSString | 设备名称 |
| deviceType | LZDeviceType | 设备类型 |
| batteryInfo | LZBatteryInfo |  电量状态 |
| connectStatus | LZDeviceConnectStatus | 设备连接状态 |
| protocolType | LZProtocolType |  协议 |
| deviceInfo |  NSDictionary <kLZBluetoothDeviceInfoKey, NSString *> | 设备信息（主要是180A服务的信息） |
| rssi | NSNumber | 蓝牙强度 |
| identifier | NSString | 设备标识码 |

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616661516030-e6ccdad6-91e1-4d31-8d73-5756ad506953.png#crop=0&crop=0&crop=1&crop=1&height=468&id=a56kP&margin=%5Bobject%20Object%5D&name=image.png&originHeight=468&originWidth=994&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58729&status=done&style=none&title=&width=994)
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

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616661565817-efc8488d-8d17-4a5a-b9ae-dc8c68e502bd.png#crop=0&crop=0&crop=1&crop=1&height=486&id=Ffh6K&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=869&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27260&status=done&style=none&title=&width=869)
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
### ![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616661592332-b90f1f43-71e5-4795-b948-eb5460c7e15f.png#crop=0&crop=0&crop=1&crop=1&height=474&id=yCJVu&margin=%5Bobject%20Object%5D&name=image.png&originHeight=474&originWidth=869&originalType=binary&ratio=1&rotation=0&showTitle=false&size=31643&status=done&style=none&title=&width=869)
<a name="ht7MX"></a>
### ~~写入deviceId ~~（已内部处理）
~~ 体脂秤或血压仪在收到绑定请求时，若设备上没有deviceId，则会触发deviceId写入流程，以生成设备唯一标识号，我们建议您直接使用mac地址作为唯一标识，不必重新生成一个唯一ID。若设备上已经写入过deviceId，则无需调用该方法（您将不会收到onReceiveDeviceIdRequest回调）, 调用示例：~~
```
[self.deviceManager registWithDeviceId:device.mac macString:device.mac deviceType:device.deviceType];
```
~~请求参数:~~

| ~~参数名称~~ | ~~类型~~ | ~~含义~~ |
| --- | --- | --- |
| ~~mac~~ | ~~NSString~~ | ~~正在绑定的设备mac地址~~ |
| ~~deviceId~~ | ~~NSString~~ | ~~设备的唯一标识号，格式必须是长度为12的字符串~~ |
| ~~deviceType~~ | ~~LZDeviceType~~ | ~~设备类型~~ |



<a name="no1Ja"></a>
## 解绑设备

当用户需要解除绑定或正在绑定中断绑定时， 需要调用unbind方法，解绑后会删除SDK中的缓存的设备信息并断开蓝牙连接，建议您在解绑成功后，清除您App本地或者云端存储的设备信息，并删除和用户的绑定关系， 调用示例：

```
    [self.deviceManager deleteMonitorDeviceWithMacString:self.device.mac];
```

请求参数:

| 参数名称 | 类型 | 含义 |
| --- | --- | --- |
| mac | NSString | 设备mac地址 |



<a name="WBJuP"></a>
## 添加用户已经绑定的设备

用户打开app时， 若之前已经绑定过设备， 需要将已经绑定的设备的mac地址添加到sdk， sdk会自动连接设备，建议您将用户和设备的绑定关系持久化在云端， sdk初始化成功之后立即添加mac地址到sdk， 调用示例：

```objectivec
[deviceManager addMonitorDeviceWithMacString:mac.uppercaseString deviceType:LZDeviceTypeBracelet];
```



