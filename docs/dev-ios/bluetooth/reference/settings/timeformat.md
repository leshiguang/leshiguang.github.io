<a name="739DD"></a>
# 时间制式
<a name="D2WIh"></a>
## 数据类型
**LZA5SettingTimeModeData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| timeMode | LZA5TimeMode | 时间制式枚举 |


<br />**LZA5TimeMode（时间制式枚举类）**<br />

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5TimeMode24 | NSUInteger | 0 |
| LZA5TimeMode12 | NSUInteger | 1 |



<a name="NCJAa"></a>
## 设置时间制式

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




