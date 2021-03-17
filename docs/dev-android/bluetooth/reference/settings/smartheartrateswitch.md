<a name="Qg8RJ"></a>
# 智能心率监测
类名：com.lifesense.android.ble.core.application.model.config.HeartRateSmartSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| mode | Mode | 监测模式 |

Mode：

| CLOSE | 关闭 |
| --- | --- |
| ENABLE | 打开 |
| SMART | 打开智能心率监测 |

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


