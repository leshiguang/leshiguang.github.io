<a name="1FyCB"></a>
## [关于喝水事件提醒](https://docs.sghealth.cn/dev-ios/bluetooth/reference/settings/eventreminder?id=%e5%85%b3%e4%ba%8e%e4%ba%8b%e4%bb%b6%e6%8f%90%e9%86%92)
喝水提醒是解决“事件提醒”设置中不支持结束事件和当天周期性提醒的问题而单独开发的设置项。 

支持该设置的设备类型： 乐心手环HR6、乐心手环Mambo Watch1、乐心手环Mambo Watch2


<a name="P2fIt"></a>
## 应用场景
当用户需要设置喝水提醒时

<a name="l8qwn"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.DrinkWaterReminder

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| durationMins | int | 提醒事件间隔（分钟） |
| enable | boolean | 开关 |
| startHour | int | 提醒开始时间的小时 |
| startMins | int | 提醒开始时间的分钟 |
| endHour | int | 提醒结束时间的小时 |
| endMins | int | 提醒结束时间的分钟 |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动等级1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动等级2<br />共分10级，0～9,只在震动类型为间歇震动的情况下有效 |

<a name="Z2qY6"></a>
## 调用示例
```java
DrinkWaterReminder dwr = new DrinkWaterReminder();
dwr.setDurationMins(60);
dwr.setEnable(true);
dwr.setStartHour(9);
dwr.setStartMins(30);
dwr.setEndHour(21);
dwr.setEndMins(30);
dwr.setVibrationMode(VibrationMode.CONTINUOUS_VIBRATION);
dwr.setVibrationDuration(30);
dwr.setVibrationLevel(1);
dwr.setVibrationLevel1(1)
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), dwr, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    //do something
                }

            }
}  )  ;
```
<a name="WNFGT"></a>
## [实现方案示例](https://docs.sghealth.cn/dev-ios/bluetooth/reference/settings/eventreminder?id=%e5%ae%9e%e7%8e%b0%e6%96%b9%e6%a1%88%e7%a4%ba%e4%be%8b)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616761732037-306b6b10-9c81-43ad-a881-c8a29e0ed4b6.png#averageHue=%23fbfbfb&height=345&id=XutUn&name=image.png&originHeight=397&originWidth=858&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30746&status=done&style=none&title=&width=746)

