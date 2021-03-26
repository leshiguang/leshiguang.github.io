<a name="D2WIh"></a>
## 关于步数目标
已废弃， 请使用[目标鼓励设置](/dev-ios/bluetooth/reference/settings/target)<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616720559847-d5e71e22-6d38-4bf8-aae5-df7a989f3260.png#align=left&display=inline&height=157&margin=%5Bobject%20Object%5D&name=image.png&originHeight=157&originWidth=846&size=9459&status=done&style=none&width=846)
<a name="sHBhk"></a>
## 数据类型
**LZA5SettingEncourageData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 鼓励开关 |
| step | UInt32 | 步数目标 |



<a name="NCJAa"></a>
## 设置步数目标

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingEncourageData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




