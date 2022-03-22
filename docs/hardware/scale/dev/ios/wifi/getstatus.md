<a name="739DD"></a>
# 功能描述
在蓝牙连接成功的前提下， App发起体脂秤配网状态检查指令，查询体脂秤是否配置过网络，体脂秤返回配置状态给到App。

<a name="sYt78"></a>
# 数据类型
LZWifiStatus （没有参数）


<a name="NCJAa"></a>
## 获取配网状态

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZWifiStatus macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
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

