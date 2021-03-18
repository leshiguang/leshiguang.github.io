<a name="D2WIh"></a>
## 数据类型
LZA5SettingNoDisturbData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 时间制式枚举 |
| startHour | UInt8 | 开始时间小时 |
| startMinute | UInt8 | 开始时间分钟 |
| endHour | UInt8 | 结束时间小时 |
| endMinute | UInt8 | 结束时间分钟 |
| isEnableRaise |  BOOL |  勿扰模式下是否允许抬手亮屏 |


<br />**
<a name="NCJAa"></a>
## 设置勿扰模式

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingNoDisturbData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




