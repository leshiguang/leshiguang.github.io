<a name="D2WIh"></a>
## 数据类型
**LZA5SettingEventRemindData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| index | UInt8 | 事件提醒的索引， 需要开发者自己计算，唯一ID （最多5个提醒） |
| des | NSString | 提醒内容 |
| enable | BOOL | 开关 |
| hour | UInt8 | 提醒时间小时 |
| minute | UInt8 | 提醒时间分钟 |
| repeatFlag | LZA5RepeatTimeFlag | 重复日期（星期） |
| vibrationType | LZA5VibrationType | 震动方式 |
| vibrationTime | UInt8 | 震动时长（0～60） |
| vibrationLevel1 | UInt8 | 震动等级1（0～9） |
| vibrationLevel2 | UInt8 | 震动等级2（0～9 |

<a name="wTIhS"></a>
#### 
<a name="NCJAa"></a>
## 设置事件提醒

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingEventRemindData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




