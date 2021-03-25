<a name="Gqwld"></a>
## 数据类型
**LZA5SettingHRSectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| age | UInt8 | 用户年龄 |
| section1Min | UInt8 | 热身心率区间下限 |
| section1Max | UInt8 | 热身心率区间上限 |
| section2Min | UInt8 | 减脂心率区间下限 |
| section2Max | UInt8 | 减脂心率区间上限 |
| section3Min | UInt8 | 极限心率区间下限 |
| section3Max | UInt8 | 极限心率区间上限 |

<a name="LMcOt"></a>
## 设置心率区间
三个心率区间计算方式：<br />最大心率：220 - 年龄 <br />热身心率区间下限：最大心率 * 0.64;<br />燃脂心率区间下限：最大心率 * 0.76;<br />极限心率区间下限： 最大心率 * 0.96;

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingHRSectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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
<a name="xc9id"></a>
## 应用场景

- 运动报告中统计用户运动各个阶段的运动状态
- 结合实时心率，实时显示用户当前所处的运动区间，控制运动的有效性
- 结合心率计算运动强度，给出疲劳度和恢复时间

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616051296229-f193263c-ec10-42f0-b851-2e2c6a2266a9.png#align=left&display=inline&height=501&margin=%5Bobject%20Object%5D&name=image.png&originHeight=587&originWidth=535&size=57600&status=done&style=none&width=457)

