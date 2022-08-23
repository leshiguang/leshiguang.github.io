<a name="739DD"></a>
# 功能描述
App发送血压功能显示的开关，可通过LZCVGetSettingTypeBloodPressureDisplaySwitch 获取手环设置

<a name="Vllul"></a>
# 数据类型
LZCVBloodPressureDisplaySwitchSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关<br /> |


```objectivec
LZCVBloodPressureDisplaySwitchSetting *temp = [[LZCVBloodPressureDisplaySwitchSetting alloc] init];
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

// 获取
[self.device getSettingsWithSyncType:LZCVGetSettingTypeBloodPressureDisplaySwitch completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];
```

