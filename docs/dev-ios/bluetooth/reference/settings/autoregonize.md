<a name="D2WIh"></a>
## 自动识别运动设置

<br />手环可以自动识别用户当前所处的运动状态，并在自动识别结束是，将运动报告数据上报到手机上，由于识别的精准度问题，开发者可以自己定义哪些运动能被自动识别。<br />**LZA5SettingAutoRecognitionSportData**

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
| 骑行           | LZA5SportModeCycling        | 0x03             |
| 游泳           | LZA5SportModeSwim           | 0x04             |
| 力量训练 （旧称 健身） | LZA5SportModeKeepfit        | 0x05             |
| 新版跑步         | LZA5SportModeNewRun         | 0x06             |
| 室内跑（旧称 跑步机）  | LZA5SportModeRunInDoor      | 0x07             |
| 椭圆机          | LZA5SportModeElliptical     | 0x08             |
| 有氧运动         | LZA5SportModeAerobicWorkout | 0x09             |
| 篮球           | LZA5SportModeBasketball     | 0x0a             |
| 足球           | LZA5SportModeFootball       | 0x0b             |
| 羽毛球          | LZA5SportModeBadminton      | 0x0c             |
| 排球           | LZA5SportModeVolleyball     | 0x0d             |
| 乒乓球          | LZA5SportModeTableTennis    | 0x0e             |
| 瑜伽           | LZA5SportModeYoga           | 0x0f             |
| 电竞           | LZA5SportModeGame           | 0x10             |
| 有氧能力测试12分钟跑  | LZA5SportMode12MinutesRun  | 0x11             |
| 有氧能力测试6分钟走   | LZA5SportMode6MinutesWalk  | 0x12             |
| 健身舞          | LZA5SportModeGymDance       | 0x13             |
| 太极 | LZA5SportModeTaiji          | 0x14             |

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




