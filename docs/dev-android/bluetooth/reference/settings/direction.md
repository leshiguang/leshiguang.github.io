<a name="4UtDS"></a>
#### 佩戴方式
类名：com.lifesense.android.ble.core.application.model.config.Direction

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 佩戴方式类型（0:横，1:竖） |

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



