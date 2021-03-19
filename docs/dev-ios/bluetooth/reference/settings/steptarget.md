<a name="D2WIh"></a>
## 数据类型
**LZA5SettingEncourageData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 鼓励开关 |
| step | UInt32 | 步数目标 |



<a name="NCJAa"></a>
## 设置步数目标

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingEncourageData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




