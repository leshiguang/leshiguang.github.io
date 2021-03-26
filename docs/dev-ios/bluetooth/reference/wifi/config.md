<a name="739DD"></a>
# 功能描述
App发送Wifi SSID和密码到设备， 设备自动进行Wifi的连接过程， 并将连接结果回调给APP<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616762378242-3feb035e-edbf-4254-a312-a7f02468ff03.png#align=left&display=inline&height=545&margin=%5Bobject%20Object%5D&name=image.png&originHeight=545&originWidth=895&size=70878&status=done&style=none&width=895)
<a name="plVHU"></a>
# 
<a name="Vllul"></a>
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

