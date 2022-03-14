<a name="mDFab"></a>
# 功能描述
App发送开始跳绳指令到设备， 设备进入到相应的跳绳模式

<a name="739DD"></a>
# 数据类型
LZMioEndToJumpSetting （没有参数）

<a name="NCJAa"></a>
## 重置

调用示例：
```objectivec
LZMioEndToJumpSetting *setting = [[LZMioEndToJumpSetting alloc] init];
[self.deviceManager sendDataModel:LZMioEndToJumpSetting macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                NSLog(@"发送成功");
            } else {
                NSLog(@"发送失败");
            }

        });
    }];
```

