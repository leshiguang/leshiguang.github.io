<a name="739DD"></a>
# 功能描述
手环闹钟，可通过LZCVGetSettingTypeEventReminderSetting 获取设置项<br />**注意：闹钟是全覆盖的，每次设置要全部设置齐全，最多5个，如果想删除闹钟设置0个闹钟就行**

<a name="Vllul"></a>
# 数据类型
LZCVClockSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| events | NSArray <LZCVClockInfo *> * | 闹钟列表 |


LZCVClockInfo 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| index | NSUInteger | 序号取值范围1～5 |
| hour | NSUInteger | 小时 |
| minute | NSUInteger | 分钟 |
| repeatTime | 枚举 | 提醒重复时间 |


```objectivec
// 设置
LZCVClockSetting *temp = [LZCVClockSetting new];
LZCVClockInfo *info = [LZCVClockInfo new];
NSDate *date = [NSDate date];
info.index = 1;
info.hour = date.lz_hour;
info.minute = date.lz_minute + 1;
info.repeatTime = LZCVRepeatTimeAll;
temp.events = @[info];
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
[self.device getSettingsWithSyncType:LZCVGetSettingTypeEventReminderSetting completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];

```

