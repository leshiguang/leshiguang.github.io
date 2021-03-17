<a name="coRjb"></a>
# 自动识别
类名：com.lifesense.android.ble.core.application.model.config.AutoRecognitionSport

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| sportModes | List<Pair<Booleean,SportMode>> | 自动识别开关列表(SportMode详见公共数据类型->运动模式) |


<br />调用示例：
```java

BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), autoRecogintionSport, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus) throws Exception {
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
} ) ;
```



