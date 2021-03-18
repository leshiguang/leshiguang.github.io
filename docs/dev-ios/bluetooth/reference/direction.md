<a name="mXyXg"></a>
## 数据类型
**LZA5SettingScreenDirectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| screenDirection | LZA5ScreenDirection | 屏幕方向 |


<br />**LZA5ScreenDirection（屏幕方向枚举）**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5ScreenDirectionH | NSUInteger | 横屏 |
| LZA5ScreenDirectionV | NSUInteger | 竖屏 |



<a name="NCJAa"></a>
## 设置屏幕方向

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingScreenDirectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




