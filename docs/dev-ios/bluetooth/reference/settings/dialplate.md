<a name="oNn1j"></a>
## 关于自定义表盘
自定义表盘指用户自定义选择手环的UI风格<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616739830588-fa6bbac0-b49f-46d6-8c9f-6736b7d879fb.png#align=left&display=inline&height=314&margin=%5Bobject%20Object%5D&name=image.png&originHeight=314&originWidth=1506&size=234072&status=done&style=none&width=1506)
<a name="gXub0"></a>
## 数据类型
**LZA5SettingDialTypeData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| dialType | LZA5DialType | 表盘类型 |


<br />**LZA5DialType（表盘枚举类）**<br />


| 字段 | 类型 | 含义 |
| --- | --- | --- |
| LZA5DialType1 |  | 表盘1 |
| LZA5DialType2 |  | 表盘2 |
| LZA5DialType3 |  | 表盘3 |
| LZA5DialType4 |  | 表盘4 |
| LZA5DialType5 |  | 表盘5 |
| LZA5DialType6 |  | 表盘6 |



<a name="NCJAa"></a>
## 设置表盘

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingDialTypeData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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


<a name="N9419"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740030654-a5b298e2-de66-488d-9bbd-5b5fd075fb72.png#align=left&display=inline&height=508&margin=%5Bobject%20Object%5D&name=image.png&originHeight=508&originWidth=861&size=134915&status=done&style=none&width=861)

