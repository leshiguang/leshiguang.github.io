<a name="Y8ytZ"></a>
#### 久坐提醒
类名：com.lifesense.android.ble.core.application.model.config.LongSit

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| index | int | 事件提醒的索引， 需要开发者自己计算，唯一ID  |
| startHour | int | 提醒开始时间的小时 |
| startMins | int | 闹钟开始时间分钟 |
| endHour | int | 闹钟开始时间的小时 |
| endMins | int | 闹钟开始时间的分钟 |
| duration | int | 多久不动提醒（分钟） |
| repeatDays | List<Day> | 重复日期（详见公共数据类型->星期） |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动强度1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动强度2<br />共分10级，0～9 |

<a name="jxvle"></a>
#### 
调用示例：
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

<br />


