<a name="fecb7798"></a>
## 关于运动心率区间
运动心率区间指用户设定的目标心率值范围， 在运动过程中， 若心率发生变化，手环会遵照用户的设置给予相应的提醒

<a name="C69aG"></a>
## 数据类型
**LZA5SettingSportHRSectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| maxValue | UInt8 | 心率区间最大值 |
| minValue | UInt8 | 心率区间最小值 |


<a name="44d652c5"></a>
## 设置运动心率区间


调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSportHRSectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<br />
<br />


