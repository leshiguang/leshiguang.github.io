<a name="739DD"></a>
# 数据类型
LZWifiReset （没有参数）<br />

<a name="NCJAa"></a>
## 重置

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZWifiReset macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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
<br />

