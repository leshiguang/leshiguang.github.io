<a name="iIvyD"></a>
# 心率开关
类名：com.lifesense.android.ble.core.application.model.config.HeartRateeSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| isSection | boolean | 是否时间段开关 |
| startHour | int | 时间段的开始时间小时 |
| startMins | int | 时间段的开始时间分钟 |
| endHour | int | 时间段的结束时间小时 |
| endMins | int | 时间段的结束时间分钟 |

<a name="jLdLZ"></a>
# 
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


