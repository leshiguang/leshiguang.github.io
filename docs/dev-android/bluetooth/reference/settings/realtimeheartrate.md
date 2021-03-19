<a name="FL7ay"></a>
#### 实时心率
类名：com.lifesense.android.ble.core.application.model.config.RealTimeHeartRateSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 实时心率开关 （true： 开，false：关） |

*注：实时心率在蓝牙断开连接后会自动关闭，若用户使用过程中断开连接， 您需要重新打开实时心率服务。开启实时心率服务手环的电量续航将受到影响， 请务必注意在合适的时机关闭实时心率服务！<br />调用示例：
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



