<a name="RaC4u"></a>
## 内置页面打开方式
```objectivec
/// 直接跳转某页面，会获取到最近的navigationController push
/// @param page 页面类型
+ (void)openPage:(LSPage)page;

/// 通过页面类型获取到对应的viewController
/// @param page 页面类型
+ (UIViewController *)viewControllerWithPage:(LSPage)page;
```

- 参数
| 类型 | Names | 说明 |
| --- | --- | --- |
| LSPage | page | /// 步数页面<br />    LSPageStep,<br />    /// 血压页面<br />    LSPageBloodPressure,<br />    /// 心率<br />    LSPageHr,<br />    /// 体重<br />    LSPageWeight,<br />    /// 睡眠<br />    LSPageSleep,<br />    /// 设备列表<br />    LSPageDeviceList<br />    ///血糖<br />    LSPageBloodSugar,<br />    ///顾问中心<br />    LSPageConsultantCenter,<br />​<br /> |



<a name="kZ64y"></a>
## 监听数据的接收
```objectivec
- (void)addDelegate {
	[LSBluetoothUI addDelegate:self];
}

#pragma mark - LSDeviceManagerDelegate
- (void)deviceDidReceiveMeasurementDatas:(NSArray<__kindof LSReceiveData *> *)measurementDatas dataType:(LSMeasurementDataType)dataType {
    if (dataType == LSMeasurementDataTypeWeight) {
        NSLog(@"体重数据");
    }
    NSLog(@"receiveData %@", measurementDatas);
}

```
<a name="am0wW"></a>
## 设置手环事件提醒
```objectivec
if (device.deviceType == LSDeviceTypePedometer || device.deviceType == LSDeviceTypeBand) {
    LZA5SettingEventRemindData *data = [[LZA5SettingEventRemindData alloc] init];
    /// 事件提醒的索引， 需要开发者自己计算，唯一ID （最多5个提醒）
    data.index = 1;
    data.enable = YES;
    data.hour = 11;
    data.minute = 59;
    data.des = @"喝水";
    data.repeatFlag = LZA5RepeatTimeFlagAll;
    data.vibrationTime = 10;
    data.vibrationType = LZA5VibrationTypeAlways;
    data.vibrationLevel1 = 9;
    data.vibrationLevel2 = 9;

    [LSBluetoothUI setSetting:data device:device completion:^(LZBluetoothErrorCode code) {
        NSLog(@"发送结果 %@", @(code));
    }];
}
```
<a name="liXEp"></a>
## 设置手环天气
```objectivec
if (device.deviceType == LSDeviceTypePedometer || device.deviceType == LSDeviceTypeBand) {
    // 需要提供 经纬度与 adcode 行政区划
    double latitude = 31.209086100260418;
    double longitude = 121.40808648003473;
    NSString *adcode = @"310105";

    /// 其中adcode 可以通过第三方地图获取，比如阿里地图与百度地图
    [LZBluetooth requestWeatherWithLng:longitude lat:latitude adcode:adcode completion:^(NSInteger code, NSString * _Nonnull msg, LZWeatherData * _Nonnull data) {
        if (data) {
            [LSBluetoothUI setSetting:data device:device completion:^(LZBluetoothErrorCode code) {
                NSLog(@"发送结果 %@", @(code));
            }];
        }
    }];
}
```
<a name="PAOD4"></a>
## 

