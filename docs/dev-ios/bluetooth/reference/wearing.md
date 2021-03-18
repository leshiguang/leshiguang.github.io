<a name="LVV27"></a>
## 数据类型
**LZA5SettingWristHabitData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| displayMode | LZA5DisplayMode | 佩戴习惯枚举 |


<br />**LZA5DisplayMode（佩戴习惯枚举类）**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5DisplayModeLeft |  | 左手 |
| LZA5DisplayModeRight |  | 右手 |



<a name="NCJAa"></a>
## 设置佩戴习惯

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingWristHabitData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




