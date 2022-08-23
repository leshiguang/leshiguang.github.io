<a name="739DD"></a>
# 功能描述
手环设置语言   通过LZCVGetSettingTypeLanguage 获取当前手环的语言类型

<a name="Vllul"></a>
# 数据类型
LZCVLanguageSetting 

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| languageType | LZCVLanguageType | ///英语<br />LZCVLanguageTypeEng                 = 0,<br />///简体中文<br />LZCVLanguageTypeSimpleChinese       = 1,<br />///繁体中文<br />LZCVLanguageTypeTraditionChinese    = 2, |


```objectivec
// 设置
LZCVLanguageSetting *temp = [LZCVLanguageSetting new];
temp.languageType = LZCVLanguageTypeEng;
[self.deviceManager sendDataModel:temp macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
        });
    }];

// 获取
[self.device getSettingsWithSyncType:LZCVGetSettingTypeLanguage completion:^(LZBluetoothErrorCode result, id  _Nullable response) {
        NSLog(@"result %@ %@", @(result), response);
    }];




```

