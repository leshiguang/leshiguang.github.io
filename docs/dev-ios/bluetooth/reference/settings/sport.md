<a name="739DD"></a>
# 关于运动参数设置
运动参数设置指在运动前，设定运动的配速和距离，控制运动水平的稳定性
<a name="bteRh"></a>
# 数据类型
**LZA5SettingPaceAndDistanceData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| pace | UInt16 | 配速1 (unit:s)  配速是指跑(走)完1km 需要多久时间，精确到秒， 例如256表示4’16’’ |
| distance | UInt32 | 距离(单 位:米) |



<a name="NCJAa"></a>
## 设置运动参数

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingTimeModeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
            [weakSelf updateUIWithResult:result];
        });
    }];
```




