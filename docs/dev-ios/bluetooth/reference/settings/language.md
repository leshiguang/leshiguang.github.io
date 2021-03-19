<a name="vdbJb"></a>
## 数据类型
**LZA5SettingLanguageData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| languageCode | LZA5LanguageCode | 语言枚举 |


<br />LZA5LanguageCode**（时间制式枚举类）**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5LanguageCodeCN |  | 中文简体 |
| LZA5LanguageCodeTW |  | 中文繁体 |
| LZA5LanguageCodeEnglish |  | 英语 |
| LZA5LanguageCodeJapenese |  | 日语 |
| LZA5LanguageCodeKorean |  | 韩语 |
| LZA5LanguageCodeFrench |  | 法语 |



<a name="NCJAa"></a>
## 设置语言

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingLanguageData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




