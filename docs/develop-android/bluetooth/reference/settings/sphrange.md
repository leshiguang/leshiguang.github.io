<a name="GgwxK"></a>
#### 运动心率区间
类名：com.lifesense.android.ble.core.application.model.config.SportHeartRange

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| left | int | 区间下限 |
| right | int | 区间上限 |

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



