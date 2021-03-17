<a name="JkGNy"></a>
#### 勿扰模式
类名：com.lifesense.android.ble.core.application.model.config.Slience

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| isEnableRaise | boolean | 勿扰模式下是否允许抬手亮屏 |
| startHour | int | 开始小时 |
| startMins | int | 开始分钟 |
| endhour | int | 结束小时 |
| endMins | int | 结束分钟 |

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



