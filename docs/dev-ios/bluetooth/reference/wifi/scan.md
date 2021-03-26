<a name="739DD"></a>
# 功能描述
App向体脂秤发起开始扫描指令，体脂秤自动发现附近可用并兼容的Wifi信息，并在扫描结束后将扫描到的结果回调给App。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616762212409-af6fd1aa-dd78-4146-9f89-b8b8aa23509d.png#align=left&display=inline&height=577&margin=%5Bobject%20Object%5D&name=image.png&originHeight=577&originWidth=870&size=69976&status=done&style=none&width=870)
<a name="F8wx8"></a>
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


