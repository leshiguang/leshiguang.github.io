<a name="2fE4H"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.Lost

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |

<a name="bETiJ"></a>
## 调用示例
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


