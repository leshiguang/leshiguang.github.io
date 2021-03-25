<a name="fWNcV"></a>
## 数据类型
**LZA5SettingRealTimeHeartRateSwitchData**

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
<a name="efqQ6"></a>
## 应用场景
 1、户外运动场景：通过运动过程中的心率语音/文案提示，为用户的运动作出实时的指导，达到心率设定--心率指导运动--心率查看--再次开始训练的闭环，保证安全&高效运动。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616662635894-62c7d607-f478-42cd-9841-c277ded97d19.png#align=left&display=inline&height=482&margin=%5Bobject%20Object%5D&name=image.png&originHeight=482&originWidth=1762&size=103106&status=done&style=none&width=1762)<br />
<br />2、室内运动场景：App实时显示用户心率值和所处区间值，作为运动指导的看板，控制室内运动的强度，实时反应用户的负荷情况，确保运动的有效性和针对性。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616662449780-0574729c-b661-468f-bc82-adfd2e061820.png#align=left&display=inline&height=470&margin=%5Bobject%20Object%5D&name=image.png&originHeight=470&originWidth=868&size=71985&status=done&style=none&width=868)

