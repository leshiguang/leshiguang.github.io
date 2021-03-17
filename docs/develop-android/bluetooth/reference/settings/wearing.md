<a name="RzY3R"></a>
# 佩戴方式
类名：com.lifesense.android.ble.core.application.model.config.Wearing

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 0：左手 1：右手 |


<br />调用示例：
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



