<a name="739DD"></a>
# 数据类型
设置步数、距离、卡路里消耗目标， 达标时， 手环将会震动提醒<br />**LZA5SettingEncourageTargetData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 时间制式枚举 |
| targetType | LZA5TargetType | 鼓励目标类型 0x01:步数; C1 0x02:卡路里; C2 0x03:距离; |
| value | NSInteger | 目标值 |



<a name="NCJAa"></a>
## 设置目标

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingEncourageTargetData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




