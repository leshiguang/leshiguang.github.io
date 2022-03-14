<a name="G9PFv"></a>
## 关于泳道长度设置
泳道长度是指标准游泳池的直线长度，在手环进入游泳运动时，手环会识别用户实际游泳的圈数，结合设置的泳道长度可计算出实际游泳的距离数据<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616676104976-c8810529-4d17-48e3-bce7-ad3519dd7a20.png#align=left&display=inline&height=211&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=869&size=90072&status=done&style=none&width=869)
<a name="1wJxU"></a>
## 数据类型

**LZA5SettingSwimParamsData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| length | UInt8 | 设置泳道长度 |


<a name="NCJAa"></a>
## 设置泳道长度

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingSwimParamsData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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


<a name="KITWx"></a>
## 实现方案示例


![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616676385650-c67fee4e-e339-41f4-864f-008b7ec65b7c.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=image.png&originHeight=243&originWidth=862&size=12520&status=done&style=none&width=862)


