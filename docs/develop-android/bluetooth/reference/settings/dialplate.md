<a name="SRoq1"></a>
# 表盘
类名：com.lifesense.android.ble.core.application.model.config.DialPlate

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | DialPlateType | 表盘类型 |

DialPlateType

| FIRST | 表盘1 |
| --- | --- |
| SECOND | 表盘2 |
| THIRD | 表盘3 |
| FOURTH | 表盘4 |
| FIFTH | 表盘5 |
| SIXTH | 表盘6 |

_注：hr2只有5种类型，传入SIXTH和传入FIRST相同_<br />
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



