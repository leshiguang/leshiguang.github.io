<a name="hwKJQ"></a>
## 数据类型
设置心率区间后， 在运动时若心率超过最大值或小于最小值，手环都将发出震动提醒<br />**LZA5SettingCustomSportHRSectionReminderData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| maxHr | UInt8 | 运动心率上限 |
| minHr |  UInt8 |  运动心率下限 |
| enable |  BOOL |  运动心率 提醒开关 |

<br />
<a name="NCJAa"></a>
## 设置心率预警

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingCustomSportHRSectionReminderData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




