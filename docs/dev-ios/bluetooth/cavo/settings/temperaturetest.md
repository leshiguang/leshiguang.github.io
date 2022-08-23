<a name="739DD"></a>
# 功能描述
App发送体温测量的开关，这里体温的数据返回是和心率一起的，对象是 LZCVHeartRate

<a name="Vllul"></a>
# 数据类型
LZCVTemperatureSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关<br /> |


```objectivec
LZCVTemperatureSetting *temp = [[LZCVTemperatureSetting alloc] init];
[self.deviceManager sendDataModel:temp macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
        });
    }];
```

