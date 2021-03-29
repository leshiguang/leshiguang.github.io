<a name="4akh6"></a>
## 关于久坐提醒
久坐提醒指用户长时间未活动身体时， 手环震动提醒用户活动，达到久坐提醒条件，手环通过震动并显示久坐符号以提醒用户；<br />手环通过app设置开启或关闭久坐提醒，默认为关闭；<br />设置久坐提醒时，可设置提醒的提醒频次、开始和结束时间、 以及提醒周期<br />久坐提醒的条件（需同时满足）：<br />a.在设置提醒的时间段内，连续60分钟的每分钟步数小于15步；<br />b.提醒前的1分钟内，步数小于10步。<br />设置成功后，在设置的频次时间内，达到久坐提醒的条件，手环震动<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740853305-5214f94f-ffa3-42ca-956e-f3574a1684ff.png#align=left&display=inline&height=247&margin=%5Bobject%20Object%5D&name=image.png&originHeight=247&originWidth=863&size=14326&status=done&style=none&width=863)
<a name="geSgy"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.LongSit

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| index | int | 事件提醒的索引， 需要开发者自己计算，唯一ID  |
| startHour | int | 提醒开始时间的小时 |
| startMins | int | 闹钟开始时间分钟 |
| endHour | int | 闹钟开始时间的小时 |
| endMins | int | 闹钟开始时间的分钟 |
| duration | int | 多久不动提醒（分钟） |
| repeatDays | List<Day> | 重复日期（详见公共数据类型->星期） |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动强度1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动强度2<br />共分10级，0～9 |

<a name="jxvle"></a>
#### 
<a name="4k2HH"></a>
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


<a name="HhOSU"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740968625-a1c37177-2a80-4912-8222-491b46741cf2.png#align=left&display=inline&height=364&margin=%5Bobject%20Object%5D&name=image.png&originHeight=364&originWidth=858&size=42234&status=done&style=none&width=858)

