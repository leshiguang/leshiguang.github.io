<a name="hwKJQ"></a>
## 关于运动心率预警
运动心率预警是用户在开启运动后，若心率超过设置的上限或下限， 手环震动提醒，并显示预警的心率值，默认关闭<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616674628163-5e961ece-0618-401c-a65d-610cb8f65221.png#align=left&display=inline&height=381&margin=%5Bobject%20Object%5D&name=image.png&originHeight=381&originWidth=916&size=419240&status=done&style=none&width=916)
<a name="t25e9"></a>
## 
<a name="3X7CV"></a>
## 数据类型
设置心率区间后， 在运动时若心率超过最大值或小于最小值，手环都将发出震动提醒<br />**LZA5SettingCustomSportHRSectionReminderData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| maxHr | UInt8 | 运动心率上限 |
| minHr |  UInt8 |  运动心率下限 |
| enable |  BOOL |  运动心率 提醒开关 |



<a name="NCJAa"></a>
## 设置心率预警

<br />
<br />调用示例：<br />

```objectivec
[self.deviceManager sendDataModel:LZA5SettingCustomSportHRSectionReminderData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<a name="JJPdQ"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616673981571-f6c64351-48f1-45e8-b129-11fd7c870961.png#align=left&display=inline&height=486&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=863&size=23626&status=done&style=none&width=863)

