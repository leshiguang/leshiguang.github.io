<a name="LVV27"></a>
## 关于佩戴习惯
手环可通过app设置左手佩戴或右手佩戴，默认为左手佩戴。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616746911507-8e98e07c-63d0-4552-88d9-7898b0d68756.png#align=left&display=inline&height=108&margin=%5Bobject%20Object%5D&name=image.png&originHeight=108&originWidth=1178&size=121655&status=done&style=none&width=1178)
<a name="qSGpg"></a>
## 数据类型
**LZA5SettingWristHabitData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| displayMode | LZA5DisplayMode | 佩戴习惯枚举 |


<br />**LZA5DisplayMode（佩戴习惯枚举类）**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5DisplayModeLeft |  | 左手 |
| LZA5DisplayModeRight |  | 右手 |



<a name="NCJAa"></a>
## 设置佩戴习惯

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingWristHabitData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




