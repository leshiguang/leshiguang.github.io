<a name="4akh6"></a>
## 数据类型
**LZA5SettingSedentaryReminderData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | Boolean | 开关 |
|  contentDatas | NSArray <LZA5SettingSedentaryReminderContentData *>  |  久坐提醒时间设置列表 |


<br />**LZA5SettingSedentaryReminderContentData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| index | UInt8 | 下标（要求连续） |
| enable | BOOL | 开关 |
| startHour | UInt8 | 开始时间小时 |
| startMinute | UInt8 | 开始时间分钟 |
| endHour | UInt8 |  结束时间小时 |
| endMinute | UInt8 | 结束时间分钟 |
| eachTimeAlert | UInt8 | 多久不动就提醒（单位：min） |
| repeatFlag | LZA5RepeatTimeFlag | 提醒重复时间（星期） |
| vibrationType | LZA5VibrationType | 震动方式 |
| vibrationTime | UInt8 | 震动时间(0~60) |
| vibrationLevel1 | UInt8 | 震动强度1 (0~9) |
| vibrationLevel2 | UInt8 | 震动强度2 (0~9) |



<a name="NCJAa"></a>
## 设置久坐提醒

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSedentaryReminderData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
            [weakSelf updateUIWithResult:result];
        });
    }];
```




