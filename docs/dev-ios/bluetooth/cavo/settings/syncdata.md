<a name="739DD"></a>
# 功能描述
同步手环的实时步数及历史数据

<a name="Vllul"></a>
# 数据类型
LZCVSyncData 无参数 

```objectivec
// 设置
LZCVSyncData *temp = [LZCVSyncData new];
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

