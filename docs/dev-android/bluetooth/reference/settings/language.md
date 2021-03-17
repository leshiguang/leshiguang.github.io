<a name="Y8ytZ"></a>
#### 语言
类名：com.lifesense.android.ble.core.application.model.config.Language

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| labguageCode | LanguageCode | 语言代码（详见见公共数据类型->语言代码） |

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


