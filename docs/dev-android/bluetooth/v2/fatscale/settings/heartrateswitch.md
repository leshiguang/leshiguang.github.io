**数据类型**<br />类名：com.lifesense.android.ble.device.fatscale.model.config.HeartRateeSwitch

| 字段

 | 字段类型

 | 描述

 |
| --- | --- | --- |
| enable

 | boolean

 | 开关

 |
| isSection

 | boolean

 | 是否时间段开关

 |
| startHour

 | int

 | 时间段的开始时间小时

 |
| startMins

 | int

 | 时间段的开始时间分钟

 |
| endHour

 | int

 | 时间段的结束时间小时

 |
| endMins

 | int

 | 时间段的结束时间分钟

 |

开启可关闭情况下的手环显示状态如下图：<br />![](https://cdn.nlark.com/yuque/0/2021/png/265997/1616670939743-55cd2898-31aa-4131-ac2c-a0a9fa8763eb.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0#crop=0&crop=0&crop=1&crop=1&from=url&id=uEmEn&margin=%5Bobject%20Object%5D&originHeight=293&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

**调用示例**

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

