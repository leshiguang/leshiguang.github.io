<a name="FZdZs"></a>
## 关于夜间模式
在18:00-06:00时间段，手环自动以较暗亮度显示。不需要App设置。若向控制夜间模式的显示时间， 需要调用该API进行设置。
<a name="hWp7n"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.NightMode

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| startHour | int | 开始时间小时 |
| startMins | int | 开始时间分钟 |
| endHour | int | 结束时间小时 |
| endMins | int | 结束时间分钟 |

<a name="cNWLH"></a>
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
<a name="inRiC"></a>
## 实现方案示例
<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616741283029-3e3dd0ef-edff-4209-8a59-122b6e704278.png#crop=0&crop=0&crop=1&crop=1&height=116&id=kSn0G&margin=%5Bobject%20Object%5D&name=image.png&originHeight=116&originWidth=552&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12447&status=done&style=none&title=&width=552)

