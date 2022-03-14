<a name="UD7XF"></a>
## 关于智能心率开关
智能心率开关是心率开关的升级版本，弥补了续航上的不足， 它可以有效识别出用户未佩戴或未正常佩戴的场景（比如放置在桌子上），当出现未佩戴的情况时， 绿灯会熄灭，从而增加手环的续航能力（默认心率开启的情况下续航约为5天， 心率关闭的情况下续航约为20天）
<a name="uUrvr"></a>
## 默认选项
默认开启智能监测
<a name="iSdqs"></a>
## 数据类型

**LZA5SettingSmartHRDetectionData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| smartHrSwitch | LZA5SmartHrMode | **监测模式** |


**LZA5SmartHrMode（监测模式）**

| 含义 | 类型 | 值 |
| --- | --- | --- |
| 关闭心率检测 | LZA5SmartHrModeClose | 0 |
| 开启心率检测 | LZA5SmartHrModeEnable | 1 |
| 开启智能监测 | LZA5SmartHrModeSmart | 2 |

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616671337842-2bf22699-e8c3-4cc7-9fca-ef0443fbd831.png#align=left&display=inline&height=291&margin=%5Bobject%20Object%5D&name=image.png&originHeight=291&originWidth=746&size=246751&status=done&style=none&width=746)
<a name="NCJAa"></a>
## 设置智能心率开关

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSmartHRDetectionDataLZA5SettingTimeModeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

<a name="HUAUU"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616672076699-25371ef6-8977-41b5-be96-8ba6037a0b66.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&name=image.png&originHeight=284&originWidth=866&size=13076&status=done&style=none&width=866)

