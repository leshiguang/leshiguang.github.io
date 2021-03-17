<a name="np9lL"></a>
#### 时间制式
类名：com.lifesense.android.ble.core.application.model.config.TimeFormat

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 制式类型 （0：24小时制<br />1：12小时制） |

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



