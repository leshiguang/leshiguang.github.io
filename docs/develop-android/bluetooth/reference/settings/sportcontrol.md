<a name="JkGNy"></a>
#### 运动控制
类名：com.lifesense.android.ble.core.application.model.config.SportControl

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| sportMode | SportMode | 运动模式（详见公共数据类型->运动模式） |
| start | boolean | 开始（true）结束（false） |


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



