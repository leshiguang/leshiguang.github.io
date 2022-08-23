<a name="739DD"></a>
# 功能描述
手环24小时格式开关，可通过LZCVGetSettingTypeTimeFormatSetting 获取设置项

<a name="Vllul"></a>
# 数据类型
LZCVTimeFormatSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| timeFormat | LZCVTimeFormat | LZCVTimeFormat24     = 0,<br />LZCVTimeFormat12     = 1, |


```objectivec
// 设置
LZCVTimeFormatSetting *temp = [LZCVTimeFormatSetting new];
temp.timeFormat = 0;
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeTimeFormatSetting completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

