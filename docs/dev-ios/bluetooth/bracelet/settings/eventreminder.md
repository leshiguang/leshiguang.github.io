<a name="D2WIh"></a>
## 关于事件提醒
事件提醒是闹钟功能的扩展， 解决了闹钟提醒功能中缺少事件名称的问题，用户可以自定义事件名称（如：喝水、吃药、睡觉）， 达到事件提醒时间点，手环通过震动并显示事件信息以提醒用户；在app端设置事件时，可设置重复周期（周一至周日，任意一天或多天），时长（5秒、15秒、30秒、60秒），在app端，支持最多可设置5组事件；标签内容为一行1-4个汉字（即8个英文字符）；内容支持汉字＼英文＼数字，不支持表情输入。
<a name="rzEm1"></a>
## 数据类型
**LZA5SettingEventRemindData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| index | UInt8 | 事件提醒的索引， 需要开发者自己计算，唯一ID （最多5个提醒） |
| des | NSString | 提醒内容 |
| enable | BOOL | 开关 |
| hour | UInt8 | 提醒时间小时 |
| minute | UInt8 | 提醒时间分钟 |
| repeatFlag | LZA5RepeatTimeFlag | 重复日期（星期） |
| vibrationType | LZA5VibrationType | 震动方式 |
| vibrationTime | UInt8 | 震动时长（0～60） |
| vibrationLevel1 | UInt8 | 震动等级1（0～9） |
| vibrationLevel2 | UInt8 | 震动等级2（0～9 |


<a name="NCJAa"></a>
## 设置事件提醒

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingEventRemindData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<a name="tyQKl"></a>
## 实现方案示例

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616743205084-040fe98e-571a-44f3-a7f9-467c7809dfe2.png#align=left&display=inline&height=397&margin=%5Bobject%20Object%5D&name=image.png&originHeight=397&originWidth=858&size=30746&status=done&style=none&width=858)


