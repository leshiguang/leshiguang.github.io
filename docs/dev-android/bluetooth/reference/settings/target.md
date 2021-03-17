<a name="np9lL"></a>
#### 目标
类名：com.lifesense.android.ble.core.application.model.config.TargetEncourage

|  |  |  |
| --- | --- | --- |
| enable | boolean | 开关 |
| targetType | int | 目标类型（1、步数 2、卡路里 3、距离） |
| target | int | 目标值 <br />单位：(步数:步、卡路里：0.1KCal、距离：米 ） |

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



