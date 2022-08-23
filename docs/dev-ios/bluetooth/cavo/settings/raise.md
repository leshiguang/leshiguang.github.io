<a name="739DD"></a>
# 功能描述
手环24小时格式开关，可通过LZCVGetSettingTypeRaiseSwitch 获取设置项

<a name="Vllul"></a>
# 数据类型
LZCVRaiseSetting 

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关 |


```objectivec
// 设置
LZCVRaiseSetting *temp = [LZCVRaiseSetting new];
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeRaiseSwitch completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

