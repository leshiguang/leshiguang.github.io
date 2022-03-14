<a name="mXyXg"></a>
## 关于屏幕方向
设置手环屏幕显示的方向<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616746709218-ba5b7c97-ee24-40a8-a5b5-6020334cf764.png#align=left&display=inline&height=301&margin=%5Bobject%20Object%5D&name=image.png&originHeight=301&originWidth=863&size=34848&status=done&style=none&width=863)
<a name="1rsps"></a>
## 数据类型
**LZA5SettingScreenDirectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| screenDirection | LZA5ScreenDirection | 屏幕方向 |


**LZA5ScreenDirection（屏幕方向枚举）**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5ScreenDirectionH | NSUInteger | 横屏 |
| LZA5ScreenDirectionV | NSUInteger | 竖屏 |


<a name="NCJAa"></a>
## 设置屏幕方向

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingScreenDirectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<br />

