<a name="EKf41"></a>
## 关于运动心率区间
运动心率区间指用户设定的目标心率值范围， 在运动过程中， 若心率发生变化，手环会遵照用户的设置给予相应的提醒<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616723193407-40e22281-8699-4fe0-bf50-127fb5ca82fa.png#align=left&display=inline&height=137&margin=%5Bobject%20Object%5D&name=image.png&originHeight=137&originWidth=558&size=32167&status=done&style=none&width=558)
<a name="8M8vD"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.SportHeartRange

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| left | int | 区间下限 |
| right | int | 区间上限 |

<a name="n1vF5"></a>
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



