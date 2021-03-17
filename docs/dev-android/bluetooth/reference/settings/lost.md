<a name="Y8ytZ"></a>
#### 防丢
类名：com.lifesense.android.ble.core.application.model.config.Lost

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |

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


