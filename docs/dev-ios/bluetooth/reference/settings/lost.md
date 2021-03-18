<a name="D2WIh"></a>
## 数据类型
**LZA5SettingLostData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 防丢设置开关 |



<a name="NCJAa"></a>
## 设置防丢

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingLostData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




