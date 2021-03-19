<a name="739DD"></a>
# 数据类型
LZWifiScanData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| showHidden | BOOL | Enable to scan AP whose SSID is hidden; enable (1), disable (0） |
| scanType | BOOL | Scan type, active or passive; active (0), passive (1) |



<a name="NCJAa"></a>
## 扫描wifi列表

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZWifiScanData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                NSArray <LZWifiData *> *list = resp;
                /// list 就是扫描到的网络，可以作为之后配网的参数
                [weakSelf showHintMessage:@"扫描到数据" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
            [weakSelf updateUIWithResult:result];
        });
    }];
```

<br />


