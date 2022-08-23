<a name="739DD"></a>
# 功能描述
在开启的情况下，心率开关如果未开启，这里会先开启心率开关，然后在打开体温功能。<br />开启心率的原始是，如果心率未开启，那么体温功能就算开关是开着的，手环也不会显示出来<br />设置项可通过LZCVGetSettingTypeTemperatureDisplaySwitch 获取设置项

<a name="Vllul"></a>
# 数据类型
LZCVTemperatureDisplaySetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关<br /> |


```objectivec
// 设置
LZCVTemperatureDisplaySetting *temp = [[LZCVTemperatureDisplaySetting alloc] init];
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeTemperatureDisplaySwitch completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

