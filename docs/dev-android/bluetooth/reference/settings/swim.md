<a name="np9lL"></a>
#### 游泳
类名：com.lifesense.android.ble.core.application.model.config.SwimPool

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| channelLength | int | 泳道长度 （单位：米） |


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



