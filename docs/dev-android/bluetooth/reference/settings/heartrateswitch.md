<a name="K30as"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.HeartRateeSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| isSection | boolean | 是否时间段开关 |
| startHour | int | 时间段的开始时间小时 |
| startMins | int | 时间段的开始时间分钟 |
| endHour | int | 时间段的结束时间小时 |
| endMins | int | 时间段的结束时间分钟 |

开启可关闭情况下的手环显示状态如下图：<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616670939743-55cd2898-31aa-4131-ac2c-a0a9fa8763eb.png#align=left&display=inline&height=338&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=866&size=308277&status=done&style=none&width=866)
<a name="RqWzI"></a>
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
<a name="oa0mX"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616671050917-b4927f36-66ef-495a-9b48-81b1209cb024.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&name=image.png&originHeight=284&originWidth=866&size=13076&status=done&style=none&width=866)

