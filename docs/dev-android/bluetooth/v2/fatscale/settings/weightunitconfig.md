<a name="nYJft"></a>
## 数据类型
类：com.lifesense.android.ble.device.fatscale.model.config.WeightUnitConfig

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| unitType | UnitType | 单位类型 |

UnitType<br />调用示例：
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

