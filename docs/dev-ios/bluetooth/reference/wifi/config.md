<a name="739DD"></a>
# 数据类型
LZWifiData 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| ssid | NSString | /// Stores the predefined SSID. 最长32位 |
| bssid | NSString | /// AP's MAC address |
| authMode | UInt8 | /// Open (0), WEP (1), WPA_PSK (2), WPA2_PSK (3), WPA_WPA_2_PSK(4), WPA2_ENTERPRISE (5). |
| rssi | int8 | Records the RSSI value when probe response is received. |
| connected | NSInteger | 是否连接 |
| password | NSString | 密码 |



<a name="NCJAa"></a>
## 配置网络

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZWifiData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                /// 获取当前的配置，
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
            [weakSelf updateUIWithResult:result];
        });
    }];
```
<br />

