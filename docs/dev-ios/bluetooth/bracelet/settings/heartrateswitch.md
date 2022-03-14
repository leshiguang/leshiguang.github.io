<a name="Fdu08"></a>
## 数据类型
设置日常心率监测的开关及开启的时间段，开启时，手环背部会亮起持续闪烁的绿灯。<br />**LZA5SettingHeartrateDetectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | Bool | 时间制式枚举 |
| startHour | UInt8 | 开始时间小时 |
| startMinute | UInt8 | 开始时间分钟 |
| endHour | UInt8 |  结束时间小时 |
| endMinute | UInt8 | 结束时间分钟 |

开启可关闭情况下的手环显示状态如下图：<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616670939743-55cd2898-31aa-4131-ac2c-a0a9fa8763eb.png#align=left&display=inline&height=338&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=866&size=308277&status=done&style=none&width=866) 
<a name="NCJAa"></a>
## 设置心率开关

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingHeartrateDetectionData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<a name="oa0mX"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616671050917-b4927f36-66ef-495a-9b48-81b1209cb024.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&name=image.png&originHeight=284&originWidth=866&size=13076&status=done&style=none&width=866)

<br />

