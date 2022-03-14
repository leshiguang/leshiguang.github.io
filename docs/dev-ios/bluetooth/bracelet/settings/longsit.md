<a name="4akh6"></a>
## 关于久坐提醒
久坐提醒指用户长时间未活动身体时， 手环震动提醒用户活动，达到久坐提醒条件，手环通过震动并显示久坐符号以提醒用户；<br />手环通过app设置开启或关闭久坐提醒，默认为关闭；<br />设置久坐提醒时，可设置提醒的提醒频次、开始和结束时间、 以及提醒周期<br />久坐提醒的条件（需同时满足）：<br />a.在设置提醒的时间段内，连续60分钟的每分钟步数小于15步；<br />b.提醒前的1分钟内，步数小于10步。<br />设置成功后，在设置的频次时间内，达到久坐提醒的条件，手环震动<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740853305-5214f94f-ffa3-42ca-956e-f3574a1684ff.png#align=left&display=inline&height=247&margin=%5Bobject%20Object%5D&name=image.png&originHeight=247&originWidth=863&size=14326&status=done&style=none&width=863)
<a name="Dsh0f"></a>
## 数据类型
LZA5SettingSedentaryReminderData**

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

调用示例：
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

<a name="HhOSU"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740968625-a1c37177-2a80-4912-8222-491b46741cf2.png#align=left&display=inline&height=364&margin=%5Bobject%20Object%5D&name=image.png&originHeight=364&originWidth=858&size=42234&status=done&style=none&width=858)


