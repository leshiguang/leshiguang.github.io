<a name="EKf41"></a>
## 关于运动心率区间
运动心率区间指用户设定的目标心率值范围， 在运动过程中， 若心率发生变化，手环会遵照用户的设置给予相应的提醒<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616723193407-40e22281-8699-4fe0-bf50-127fb5ca82fa.png#align=left&display=inline&height=137&margin=%5Bobject%20Object%5D&name=image.png&originHeight=137&originWidth=558&size=32167&status=done&style=none&width=558)
<a name="C69aG"></a>
## 数据类型
**LZA5SettingSportHRSectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| maxValue | UInt8 | 心率区间最大值 |
| minValue | UInt8 | 心率区间最小值 |

<a name="vEGFn"></a>
## 设置运动心率区间


调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSportHRSectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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




