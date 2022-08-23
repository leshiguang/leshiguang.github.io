<a name="739DD"></a>
# 功能描述
手环设置鼓励提醒，达到目标后会手环会有提醒，

<a name="Vllul"></a>
# 数据类型
LZCVEncourageSetting 

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| targetType | LZCVTargetType | ///步数<br />LZCVTargetTypeStep = 1,<br />///卡路里 单位千卡<br />LZCVTargetTypeCalories = 2, |
| value | NSUInteger | 当提醒是卡路里的时候单位是**千卡** |


```objectivec
// 设置
LZCVEncourageSetting *temp = [LZCVEncourageSetting new];
temp.targetType = LZCVTargetTypeStep;
temp.value = 1000;
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




```

