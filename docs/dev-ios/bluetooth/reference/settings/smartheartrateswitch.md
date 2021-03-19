<a name="UD7XF"></a>
## 数据类型

<br />**LZA5SettingSmartHRDetectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| smartHrSwitch | LZA5SmartHrMode | **监测模式** |


<br />**LZA5SmartHrMode（监测模式）**<br />


| 含义 | 类型 | 值 |
| --- | --- | --- |
| 关闭心率检测 | LZA5SmartHrModeClose | 0 |
| 开启心率检测 | LZA5SmartHrModeEnable | 1 |
| 开启智能监测 | LZA5SmartHrModeSmart | 2 |



<a name="NCJAa"></a>
## 设置智能心率开关

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSmartHRDetectionDataLZA5SettingTimeModeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




