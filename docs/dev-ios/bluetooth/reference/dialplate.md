<a name="oNn1j"></a>
## 数据类型
**LZA5SettingDialTypeData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| dialType | LZA5DialType | 表盘类型 |


<br />**LZA5DialType（表盘枚举类）**<br />

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5DialType1 |  | 表盘1 |
| LZA5DialType2 |  | 表盘2 |
| LZA5DialType3 |  | 表盘3 |
| LZA5DialType4 |  | 表盘4 |
| LZA5DialType5 |  | 表盘5 |
| LZA5DialType6 |  | 表盘6 |



<a name="NCJAa"></a>
## 设置表盘

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingDialTypeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




