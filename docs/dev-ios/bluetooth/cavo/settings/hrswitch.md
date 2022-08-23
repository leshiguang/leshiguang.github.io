<a name="739DD"></a>
# 功能描述
手环心率开关，可通过LZCVGetSettingTypeHeartRateSwitachSetting 获取设置项

<a name="Vllul"></a>
# 数据类型
LZCVHRSwitchSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关 |
| switchType | LZCVHRSwitchType | ///连续心率采集<br />LZCVHRSwitchTypeSerial     = 1,<br />///单次心率采集<br />LZCVHRSwitchTypeTest        = 2, |


```objectivec
// 设置
LZCVHRSwitchSetting *temp = [LZCVHRSwitchSetting new];
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeHeartRateSwitachSetting completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

