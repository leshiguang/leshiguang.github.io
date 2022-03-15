<a name="ibER6"></a>
## 关于自定义页面
通过app自定义（开启或关闭）手环显示页面，默认［表盘］、［步数］、［心率］、［运动1］、［运动2］、[ 运动3 ]、［天气］显示页面开启，用户可以自己勾选和更改页面显示的顺序<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738750389-70983743-fd9a-463d-b0a3-abcad7075b82.png#crop=0&crop=0&crop=1&crop=1&height=232&id=o0Buu&margin=%5Bobject%20Object%5D&name=image.png&originHeight=232&originWidth=1092&originalType=binary&ratio=1&rotation=0&showTitle=false&size=63450&status=done&style=none&title=&width=1092)<br />您至少需要保证其中的一项为开启状态， 否则设置不成功
<a name="nmbg3"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.Page

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
<a name="a1FUz"></a>
## 调用示例
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
<a name="sSubG"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738885553-78991b34-9cd6-4b40-977a-64b526e0fdff.png#crop=0&crop=0&crop=1&crop=1&height=544&id=oWRpt&margin=%5Bobject%20Object%5D&name=image.png&originHeight=544&originWidth=855&originalType=binary&ratio=1&rotation=0&showTitle=false&size=60418&status=done&style=none&title=&width=855)


