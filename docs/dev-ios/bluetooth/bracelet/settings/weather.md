<a name="xVxQM"></a>
## 关于天气设置
天气设置是通过app给手环下发天气相关信息，方便用户在手环上查看天气信息

支持的设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S、乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6

<a name="r5mQa"></a>
## 应用场景
App连接蓝牙成功时， 获取当前app的定位信息， 通过getWeathers API从服务器获取天气信息，获取成功后通过设置天气API将设置下发给手环/手表
<a name="RuRpg"></a>
## 获取天气
从云端获取天气信息，可设置到手环(天气信息是由 "和风天气" 提供的付费接口, 超过调用次数需要收费, 请合理调用)<br />天气信息来源为：[和风天气](https://dev.qweather.com/docs/api/weather/weather-now/)， 若您的平台已经有天气服务， 可以自行开发<br />获取最近三天的天气信息，请求获取天气接口 LZBluetooth requestWeatherWithLng:lat:adcode:completion:
```objectivec
/// 获取天气
/// @param lng 经度
/// @param lat 纬度
/// @param adcode 地区编码，需要第三方地图获取
/// @param completion 回调
+ (void)requestWeatherWithLng:(double)lng
                          lat:(double)lat
                       adcode:(NSString *)adcode
                   completion:(void(^)(NSInteger code, 
                                       NSString *msg, 
                                       LZWeatherData *data))completion;
```

请求参数：

| 参数 | 类型 | 含义 |
| --- | --- | --- |
| lng | double | 经度 |
| lat | double | 纬度 |
| adCode | NSString | 中国行政区地区编码， 可从高德、百度、腾讯地图的客户端api中获取，由于和风天气是付费服务， 我们用此字端来做缓存，降低热点城市频繁查询的情况 |
| completion | block | 回调 |

<a name="5X5Kn"></a>
## 
请求回调：

| 参数 | 类型 | 含义 |
| --- | --- | --- |
| code | NSInteger | 状态码，200为请求成功 |
| msg | NSString | 错误信息 |
| data | LZWeatherData | 天气数据 |


**LSWeatherData(天气列表)**

| 参数 | 类型 | 含义 |
| --- | --- | --- |
| updateTime | UInt32 | 天气更新时间 |
| weatherFutures | NSArray <LZWeatherDayData *> | 今天、明天、后天的天气信息 |


**LSWeatherDayData（单天的天气信息）**

| 参数 | 类型 | 含义 |
| --- | --- | --- |
| api | Uint16 | 空气质量指数 |
| weatherState | NSUInteger | 天气类型 |
| temperature1 | NSUInteger | 最低温 |
| temperature2 | NSUInteger | 最高温 |


**weatherState(天气类型)**

| 值（16进制表示） | 类型 |
| --- | --- |
| 0x00 | 晴(白天) |
| 0x01 | 晴(夜晚) |
| 0x02 | 多云 |
| 0x03 | 晴间多云(白天) |
| 0x04 | 晴间多云(夜晚) |
| 0x05 | 大部多云(白天) |
| 0x06 | 大部多云(夜晚) |
| 0x07 | 阴 |
| 0x08 | 阵雨 |
| 0x09 | 雷阵雨 |
| 0x0A | 冰雹或雷阵雨伴有冰雹 |
| 0x0B | 小雨 |
| 0x0C | 中雨 |
| 0x0D | 大雨 |
| 0x0E | 暴雨 |
| 0x0F | 大暴雨 |
| 0x10 | 特大暴雨 |
| 0x11 | 冻雨 |
| 0x12 | 雨夹雪 |
| 0x13 | 阵雪 |
| 0x14 | 小雪 |
| 0x15 | 中雪 |
| 0x16 | 大雪 |
| 0x17 | 暴雪 |
| 0x18 | 浮尘 |
| 0x19 | 扬沙 |
| 0x1A | 沙尘暴 |
| 0x1B | 强沙尘暴 |
| 0x1C | 雾 |
| 0x1D | 霾 |
| 0x1E | 风 |
| 0x1F | 大风 |
| 0x20 | 飓风 |
| 0x21 | 热带风暴 |
| 0x22 | 龙卷风 |

不同的天气类型在手环上有不同的图标呈现：<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616062071075-f15ac64e-8c54-4f2d-b62a-97fb7e95ec61.png#height=285&id=rp7ij&margin=%5Bobject%20Object%5D&name=image.png&originHeight=285&originWidth=485&originalType=binary&ratio=1&size=31010&status=done&style=none&width=485)
<a name="yHIbV"></a>
## 设置天气
调用示例：
```objectivec
[self.deviceManager sendDataModel:LSWeatherData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
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

