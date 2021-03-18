<br />
<a name="LVV27"></a>
## 数据类型
**LZA6UnitSettingData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| unit | LZA6Unit | 单位 |


<br />**LZA5DisplayMode（佩戴习惯枚举类）**

| 类型 | 名称 | 值 |
| --- | --- | --- |
| LZA6UnitKg | 公斤 | 0 |
| LZA6UnitLb | 磅 | 1 |
| LZA6UnitSt | 英石 | 2 |
| LZA6UnitJin | 斤 | 3 |

<a name="NCJAa"></a>
## 设置体重单位
调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA6UnitSettingData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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



