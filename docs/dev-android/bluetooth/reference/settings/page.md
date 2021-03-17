<a name="JkGNy"></a>
#### 自定义屏幕
类名：com.lifesense.android.ble.core.application.model.config.Page

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| pageTypes | List<PageType> | 页面类型（最多设置11个） |

PageType

| TIME | 时间 |
| --- | --- |
| STEP | 步数 |
| COLORIE | 卡路里 |
| DISTANCE | 距离 |
| HEARTRATE | 心率 |
| RUNNING | 跑步 |
| WALKING | 健走 |
| CYCLING | 骑行 |
| SWIMMING | 游泳 |
| _BODY_BUILDING_ | 健身 |
| CLIMBING | 登山 |
| DAILY_DATA | 日常数据（hr2 没有） |
| STOPWATCH | 秒表 |
| WEATHER | 天气 |
| BATTERY | 电量 |
| TREADMILL | 跑步机 |
| ELLIPTICAL | 椭圆机 |
| AEROBIC_WORKOUT | 有氧运动 |
| BASKETBALL | 篮球 |
| FOOTBALL | 足球 |
| BADMINTON | 羽毛球 |
| VOLLEYBALL | 排球 |
| PING_PONG | 乒乓球 |
| YOGA | 瑜伽 |
| GAMING | 电竞 hr2 没有） |
| AEROBICS_RUN_12MINS | 有氧能力12分钟跑 |
| AEROBIC_WALK_6MINS | 有氧能力6分钟走 |
| ALIPAY | 支付宝 |
| FITNESSDANCE | 健身舞 |
| TAIJI | 太极 |

<a name="6EceP"></a>
#### 
<a name="Rw16X"></a>
#### 调用示例：
```java
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), dialPlate, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
}  )  ;
```



