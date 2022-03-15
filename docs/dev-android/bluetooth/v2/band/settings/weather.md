<a name="xVxQM"></a>
## 关于天气设置
天气设置是通过app给手环下发天气相关信息，方便用户在手环上查看天气信息

支持的设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S、乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6

<a name="r5mQa"></a>
## 应用场景
App连接蓝牙成功时， 获取当前app的定位信息， 通过getWeathers API从服务器获取天气信息，获取成功后通过设置天气API将设置下发给手环/手表
<a name="RuRpg"></a>
## 获取天气
从云端获取天气信息，可设置到手环(天气信息是由 "和风天气" 提供的付费接口, 超过调用次数需要收费, 请合理调用)
```java
public static void getWeathers(double lng, double lat, String adCode, Consumer<Weathers> receiver)
```
请求参数：

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| lng | double | 经度 |
| lat | double | 纬度 |
| adCode | String |  adCode(中国地区编码, 中国以外的地区不适用), 可从高德地图,百度地图,腾讯地图等提供的api获取 |
| receiver | Consumer<Weathers> | 天气数据回调 |


<a name="i7mFY"></a>
## 设置天气
com.lifesense.android.ble.device.band.model.Weathers

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| updateTime | int | 天气更新的<br />UTC(秒)（ 天气获取时刻的时间，不是手机系统的时间） |
| weatherList | List<Weather> | 天气列表 |

Weather

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| weatherState | WeatherState | 天气状态（详见下面表格） |
| temperatureLow | int | 最低温度 |
| temperatureHigh | int | 最高温度 |
| aqi | int | aqi(空气质量指数) |

WeatherState

| SUNNY_DAY | 晴（白天） |
| --- | --- |
| SUNNY_NIGHT | 晴（夜晚） |
| CLOUDY | 多云 |
| FINE_CLOUDY_DAY | 晴间多云（白天） |
| FINE_CLOUDY_NIGHT | 晴间多云（夜晚） |
| MOST_CLOUDY_DAY | 大部多云（白天） |
| MOST_CLOUDY_NIGHT | 大部多云（夜晚） |
| OVERCAST | 阴 |
| Shower | 阵雨 |
| THUNDER_SHOWER | 雷阵雨 |
| HAIL | 冰雹 |
| RAIN_LIGHT | 小雨 |
| RAIN_MODERATE | 中雨 |
| RAIN_HEAVY | 大雨 |
| RAIN_STORM | 暴雨 |
| RAIN_BIG_HEAVY | 大暴雨 |
| RAIN_SUPER_STORM | 特大暴雨 |
| RAIN_ICE | 冻雨 |
| RAIN_SNOW | 雨夹雪 |
| SNOW_SHOWER | 阵雪 |
| SNOW_LITTLE | 小雪 |
| SNOW_NODERATE | 中雪 |
| SNOW_HEAVY | 大雪 |
| SNOW_STORM | 暴雪 |
| DUST | 浮沉 |
| SAND_BLOWING | 扬尘 |
| SAND_STORM | 沙尘暴 |
| SAND_STRONG_STORM | 强沙尘暴 |
| FOG | 雾 |
| HAZE | 霾 |
| WIND | 风 |
| WIND_HIGH | 大风 |
| HURRICANE | 飓风 |
| TROPICAL_STORM | 热带风暴 |
| TORNADO | 龙卷风 |


不同的天气类型在手环上有不同的图标呈现：<br />                  ![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616725576313-dd609b19-1bf2-4ede-904f-ef23d9db06a4.png#crop=0&crop=0&crop=1&crop=1&height=285&id=KcnJT&margin=%5Bobject%20Object%5D&name=image.png&originHeight=285&originWidth=485&originalType=binary&ratio=1&rotation=0&showTitle=false&size=31010&status=done&style=none&title=&width=485)
<a name="Z45MA"></a>
## 调用示例
```java
Weathers weathers = new Weathers();
weathers.setUpdateTime(new Date.getTime() / 1000)
weathers.setWeatherList(weatherList)
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), weathers, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    //do something
                }
            }
}  )  ;
```

