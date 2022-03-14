<a name="FZdZs"></a>
## 关于夜间模式
在18:00-06:00时间段，手环自动以较暗亮度显示。不需要App设置。若向控制夜间模式的显示时间， 需要调用该API进行设置。
<a name="hWp7n"></a>
## 数据类型

**LZA5SettingNightModeData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关 |
| startHour | UInt8 | 开始时间小时 |
| startMinute | UInt8 | 开始时间分钟 |
| endHour | UInt8 | 结束时间小时 |
| endMinute | UInt8 | 结束时间分钟 |



<a name="NCJAa"></a>
## 设置夜间模式

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingNightModeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<a name="inRiC"></a>
## 实现方案示例
<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616741283029-3e3dd0ef-edff-4209-8a59-122b6e704278.png#align=left&display=inline&height=116&margin=%5Bobject%20Object%5D&name=image.png&originHeight=116&originWidth=552&size=12447&status=done&style=none&width=552)

