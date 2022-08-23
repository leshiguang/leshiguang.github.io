<a name="739DD"></a>
# 功能描述
App发送测量血压指令，

<a name="Vllul"></a>
# 数据类型
LZCVBloodPressureSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关<br /> |


```objectivec
LZCVBloodPressureSetting *temp = [[LZCVBloodPressureSetting alloc] init];
temp.enable = YES;
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

