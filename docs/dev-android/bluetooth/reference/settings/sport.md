<a name="5KswH"></a>
#### 运动设置
类名：com.lifesense.android.ble.core.application.model.config.SportSetting

| 字段1 | 字段类型 | 描述 |
| --- | --- | --- |
| pace | short | 配速 （unit：s）  |
| distance | int | 距离 （单位：米） |

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

