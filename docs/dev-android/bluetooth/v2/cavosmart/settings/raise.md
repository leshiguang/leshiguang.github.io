<a name="x6DIl"></a>
## 数据类型
类名：com.lifesense.android.ble.device.cavosmart.model.config.Raise

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | boolean | 开关 |

<a name="6m4XS"></a>
## 调用示例
```java
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), raise, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
}  )  ;
```

