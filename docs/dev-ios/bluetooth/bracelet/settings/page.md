<a name="ibER6"></a>
## 关于自定义页面
通过app自定义（开启或关闭）手环显示页面，默认［表盘］、［步数］、［心率］、［运动1］、［运动2］、[ 运动3 ]、［天气］显示页面开启，用户可以自己勾选和更改页面显示的顺序<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738750389-70983743-fd9a-463d-b0a3-abcad7075b82.png#align=left&display=inline&height=232&margin=%5Bobject%20Object%5D&name=image.png&originHeight=232&originWidth=1092&size=63450&status=done&style=none&width=1092)<br />您至少需要保证其中的一项为开启状态， 否则设置不成功
<a name="nmbg3"></a>
## 数据类型
**LZA5SettingCustomScreenData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| listPage | LZA5UIPageType | 显示页面列表 |


**LZA5UIPageType（页面类型枚举类）**

| 页面名称 | 类型 | 值 |
| --- | --- | --- |
| 时间    | LZA5UIPageTypeTime             | 0x00 |
| 步数    | LZA5UIPageTypeStep             | 0x01 |
| 卡路里   | LZA5UIPageTypeCalorise         | 0x02 |
| 路程    | LZA5UIPageTypeDistance         | 0x03 |
| 心率    | LZA5UIPageTypeHr               | 0x04 |
| 跑步    | LZA5UIPageTypeRun              | 0x05 |
| 行走    | LZA5UIPageTypeWalk             | 0x06 |
| 自行车   | LZA5UIPageTypeCycling          | 0x07 |
| 游泳    | LZA5UIPageTypeSwimming         | 0x08 |
| 力量训练  | LZA5UIPageTypeKeepfit          | 0x09 |
| 登山    | LZA5UIPageTypeMountainClimbing | 0x0a |
| 日常数据  | LZA5UIPageTypeDailyData        | 0x0b |
| 秒表    | LZA5UIPageTypeStopwatch        | 0x0c |
| 室内跑   | LZA5UIPageTypeWeather          | 0x0d |
| 电量    | LZA5UIPageTypeBattery          | 0x0e |
| 天气    | LZA5UIPageTypeIndoorRun        | 0x0f |
| 椭圆机   | LZA5UIPageTypeElliptical       | 0x10 |
| 有氧运动  | LZA5UIPageTypeAerobicWorkout   | 0x11 |
| 篮球    | LZA5UIPageTypeBasketball       | 0x12 |
| 足球    | LZA5UIPageTypeFootball         | 0x13 |
| 羽毛球   | LZA5UIPageTypeBadminton        | 0x14 |
| 排球    | LZA5UIPageTypeVolleyball       | 0x15 |
| 乒乓球   | LZA5UIPageTypeTableTennis      | 0x16 |
| 瑜伽    | LZA5UIPageTypeYoga             | 0x17 |
| 电竞    | LZA5UIPageTypeESport           | 0x18 |
| 12分钟跑 | LZA5UIPageType12MinutesRunMode | 0x19 |
| 6分钟跑  | LZA5UIPageType6MinutesRunMode  | 0x1a |
| 阿里pay | LZA5UIPageTypeAliPayMode       | 0x1b |
| 健身舞   | LZA5UIPageTypeGymDance         | 0x1c |
| 太极    | LZA5UIPageTypeTaiji            | 0x1d |





<a name="NCJAa"></a>
## 设置屏幕显示页面

调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingCustomScreenData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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
<a name="sSubG"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738885553-78991b34-9cd6-4b40-977a-64b526e0fdff.png#align=left&display=inline&height=544&margin=%5Bobject%20Object%5D&name=image.png&originHeight=544&originWidth=855&size=60418&status=done&style=none&width=855)

