<a name="D2WIh"></a>
## 关于自动识别

<br />自动识别指手环可以自动识别用户当前所处的运动状态，并在自动识别结束时，将运动报告数据上报到手机上，用户可以自行设置开启和关闭， 默认打开健走和跑步两项自动识别选项<br />目前支持自动识别的运动为：健走、跑步
<a name="Ur28b"></a>
## 数据结构
**LZA5SettingAutoRecognitionSportData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| contentDatas | NSArray <LZA5SettingAutoRecognitionSportContentData *> | 需要自动识别的运动类型及开关列表 |


<br />**LZA5SettingAutoRecognitionSportContentData**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| sportMode | LZA5SportMode | 运动模式 |
| enable | BOOL | 是否开启 |


<br />LZA5SportMode

| 含义 | 名称 | 值 |
| --- | --- | --- |
| 未指定          | LZA5SportModeUnknow         | 0 |
| 跑步           | LZA5SportModeRun            | 0x01             |
| 健走           | LZA5SportModeWalk           | 0x02             |

<a name="NCJAa"></a>
## 设置自动识别

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingAutoRecognitionSportData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




