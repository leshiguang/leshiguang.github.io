<a name="739DD"></a>
# 数据类型
LZA5SettingRealTimeHeartRateSwitchData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 是否开启实时心率 |

*注：实时心率在蓝牙断开连接后会自动关闭，若用户使用过程中断开连接， 您需要重新打开实时心率服务。开启实时心率服务手环的电量续航将受到影响， 请务必注意在合适的时机关闭实时心率服务！
<a name="NCJAa"></a>
## 设置运动设置

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingRealTimeHeartRateSwitchData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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



