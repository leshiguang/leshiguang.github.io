<a name="RLTVl"></a>
## 关于时间制式
设置手环默认显示的时间制式， 可选项为12小时制和24小时制
<a name="D2WIh"></a>
## 数据类型


**LZA5SettingTimeModeData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| timeMode | LZA5TimeMode | 时间制式枚举 |


<br />**LZA5TimeMode（时间制式枚举类）**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5TimeMode24 | NSUInteger | 0 |
| LZA5TimeMode12 | NSUInteger | 1 |



<a name="NCJAa"></a>
## 设置时间制式

<br />调用示例：<br />
<br />

```objectivec
[self.deviceManager sendDataModel:LZA5SettingTimeModeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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


<a name="JXEgJ"></a>
## 实现方案示例

<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616674942177-859d135b-46e5-4fd8-b5a9-1a2dd5678d3c.png#align=left&display=inline&height=313&margin=%5Bobject%20Object%5D&name=image.png&originHeight=313&originWidth=867&size=25719&status=done&style=none&width=867)

