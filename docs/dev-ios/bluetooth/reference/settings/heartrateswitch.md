<a name="hRC3V"></a>
## 数据类型
设置心率监测的时间，开启时，手环背部将亮起绿灯<br />**LZA5SettingHeartrateDetectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | Bool | 时间制式枚举 |
| startHour | UInt8 | 开始时间小时 |
| startMinute | UInt8 | 开始时间分钟 |
| endHour | UInt8 |  结束时间小时 |
| endMinute | UInt8 | 结束时间分钟 |

<br />
<a name="NCJAa"></a>
## 设置心率开关

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingHeartrateDetectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




