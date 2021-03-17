<a name="yiBkQ"></a>
# 闹钟
类名：com.lifesense.android.ble.core.application.model.config.Clock

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 闹钟的顺序， 需要开发者自己计算，唯一ID |
| hour | int | 几点 |
| min | int | 几分 |
| repeatDays | Day | 重复日期（详见见公共数据类型->星期） |
| vibrationMode | ViibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | short | 震动时长（0～60秒） |
| vibrationLevel | short | 震动强度1（0～9） |
| vibrationLevel1 | short | 震动强度2（0～9，，只有震动类型为间歇震动才有效） |

调用示例：
```java

BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), clock, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus) throws Exception {
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
        } ) ;
```



