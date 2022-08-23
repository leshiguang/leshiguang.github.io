<a name="739DD"></a>
# 功能描述
久坐提醒开关，在一定时间内不动就会提醒，可通过LZCVGetSettingTypeSedentaryReminderSetting 获取设置项

<a name="Vllul"></a>
# 数据类型
LZCVDialSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关 |
| duration | NSUInteger | 多久不活动触发提醒 （单位：分钟） |
| startHour | NSUInteger | 开始时间 |
| endHour | NSUInteger | 结束时间 |
| repeatTime | NSUInteger | 提醒重复时间 |


```objectivec
// 设置
LZCVLongSitSetting *temp = [LZCVLongSitSetting new];
temp.enable = YES;
temp.repeatTime = LZCVRepeatTimeAll;
temp.duration = 1;
temp.startHour = 8;
temp.endHour = 24;
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeSedentaryReminderSetting completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

