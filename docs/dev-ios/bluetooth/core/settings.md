所有的设置均通过该接口下发给硬件：
```objectivec
/// 向手环发送数据
/// @param dataModel 实现了设置协议的数据模型
/// @param macString 设备的mac地址
/// @param completion 完成回调
- (void)sendDataModel:(id<LZDeviceSettingProtocol>)dataModel
            macString:(NSString *)macString
           completion:(LZSendDataCompletion)completion;
```

调用示例：
```objectivec
[self.deviceManager sendDataModel:settingData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

