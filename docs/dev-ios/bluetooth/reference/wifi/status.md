<a name="739DD"></a>
# 数据类型
LZWifiStatus （没有参数）<br />

<a name="NCJAa"></a>
## 获取配网状态

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZWifiStatus macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                LZWifiData *wifiData = resp;
                /// 获取当前的配置，
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
            [weakSelf updateUIWithResult:result];
        });
    }];
```

