<a name="739DD"></a>
# 功能描述
手环表盘设置，可通过LZCVGetSettingTypeDialTypeSetting 获取设置项

<a name="Vllul"></a>
# 数据类型
LZCVDialSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| index | NSUInteger | 表盘序号 |
| total | NSUInteger | 总表盘数（获取表盘的时候有效） |


```objectivec
// 设置
LZCVDialSetting *temp = [LZCVDialSetting new];
temp.index = 2;
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeDialTypeSetting completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

