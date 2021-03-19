<a name="G9PFv"></a>
## 数据类型
手环只能判断用户在标准泳池游泳过程中游了及圈， 因此需要设置泳道长度以计算游泳距离<br />**LZA5SettingSwimParamsData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| length | UInt8 | 设置泳道长度 |



<a name="NCJAa"></a>
## 设置游泳

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSwimParamsData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

