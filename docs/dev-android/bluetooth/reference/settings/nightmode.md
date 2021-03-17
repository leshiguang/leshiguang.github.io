<a name="Y8ytZ"></a>
#### 夜间模式
类名：com.lifesense.android.ble.core.application.model.config.NightMode

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| startHour | int | 开始时间小时 |
| startMins | int | 开始时间分钟 |
| endHour | int | 结束时间小时 |
| endMins | int | 结束时间分钟 |

<a name="98DV5"></a>
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



