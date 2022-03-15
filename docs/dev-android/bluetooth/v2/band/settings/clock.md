<a name="WowyP"></a>
## 关于闹钟提醒
用户设置闹钟后，手环通过震动以提醒用户；在app端设置时，可设置重复周期（周一至周日，任意一天或多天），时长（5秒、15秒、30秒、60秒），在app端，支持最多可设置5组闹钟；
<a name="SOwJJ"></a>
## 数据类型

一次只能设置一个闹钟， 删除闹钟意为将指定index的闹钟的enable属性设置为NO，若您想要在手环中显示闹钟的名称，您可以直接使用事件提醒设置（如喝水、吃药、早起等）<br />类名：com.lifesense.android.ble.device.band.model.config.Clock

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

<a name="epDA2"></a>
## 调用示例
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
<a name="0Q71u"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616761912136-51ab93f8-ef88-4d9b-88d1-c01b5fb8a035.png#crop=0&crop=0&crop=1&crop=1&height=302&id=EoH4y&margin=%5Bobject%20Object%5D&name=image.png&originHeight=302&originWidth=843&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24737&status=done&style=none&title=&width=843)

