<a name="OWHa7"></a>
## 关于闹钟提醒
用户设置闹钟后，手环通过震动以提醒用户；在app端设置时，可设置重复周期（周一至周日，任意一天或多天），时长（5秒、15秒、30秒、60秒），在app端，支持最多可设置5组闹钟；
<a name="nMneP"></a>
## 数据类型
一次只能设置一个闹钟， 删除闹钟意为将指定index的闹钟的enable属性设置为NO，若您想要在手环中显示闹钟的名称，您可以直接使用事件提醒设置（如喝水、吃药、早起等）<br />
<br />**LZA5SettingAlarmClockData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | enable | 开关 |
| contentDatas | NSArray <LZA5SettingAlarmClockContentData *> | 闹钟列表 |


<br />**LZA5SettingAlarmClockContentData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| index | UInt8 | 闹钟标示，表示为第n个闹钟，若您有5个闹钟，删除第4个后下一个添加的闹钟的index值应该设置为4 |
| enable | BOOL | 开关 |
| hour | UInt8 | 小时 |
| minute | UInt8 | 分钟 |
| repeatFlag | LZA5RepeatTimeFlag | 重复时间 |
| vibrationType | LZA5VibrationType | 震动类型 |
| vibrationTime | UInt8 | 震动时长 （s） |
| vibrationLevel1 | UInt8 | 震动等级1（0～9） |
| vibrationLevel1 | UInt8 | 震动等级2（0～9） |



<a name="NCJAa"></a>
## 设置闹钟

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingAlarmClockData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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
<a name="tsGuB"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616744769908-1f9e68cd-f501-4dee-8261-06f9976684b1.png#align=left&display=inline&height=302&margin=%5Bobject%20Object%5D&name=image.png&originHeight=302&originWidth=843&size=24737&status=done&style=none&width=843)


