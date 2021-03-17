<a name="Z8YZK"></a>
# 事件提醒（带标签的闹钟提醒）
最多支持设置5个事件，您可以自定义事件名称，如：吃药、喝水等<br />类名：com.lifesense.android.ble.core.application.model.config.EventReminder

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 事件提醒的索引， 需要开发者自己计算，唯一ID （最多5个提醒） |
| content | String | 提醒内容 |
| enable | boolean | 开关 |
| hour | int | 提醒时间的小时 |
| min | int | 提醒时间的分钟 |
| repeatDays | List<Day> | 重复日期（详见见公共数据类型->星期） |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动等级1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动等级2<br />共分10级，0～9,只在震动类型为间歇震动的情况下有效 |

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



