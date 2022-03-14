<a name="fJg09"></a>
## 目标鼓励设置
目标鼓励设置是指向手环下发以“步数“、“距离“或“卡路里“中其中的一项的具体数量为目标的数据， 用户达成目标后，手环会震动提醒，手环开启默认鼓励为6000步的步数<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616677281900-840224e3-1942-477c-8a6d-f9a205943952.png#align=left&display=inline&height=157&margin=%5Bobject%20Object%5D&name=image.png&originHeight=157&originWidth=846&size=9459&status=done&style=none&width=846)
<a name="yCFBd"></a>
# 数据类型
设置步数、距离、卡路里消耗目标， 达标时， 手环将会震动提醒<br />**LZA5SettingEncourageTargetData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 时间制式枚举 |
| targetType | LZA5TargetType | 鼓励目标类型 0x01:步数; C1 0x02:卡路里; C2 0x03:距离; |
| value | NSInteger | 目标值<br />*当目标为步数时， 最小设置值为1000 |


<a name="NCJAa"></a>
## 设置目标

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingEncourageTargetData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<a name="n2vLz"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616677454961-83aac5af-0ae7-4b08-ba48-137b11fb1542.png#align=left&display=inline&height=269&margin=%5Bobject%20Object%5D&name=image.png&originHeight=269&originWidth=867&size=26823&status=done&style=none&width=867)

