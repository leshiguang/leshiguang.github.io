<a name="WowyP"></a>
## 关于闹钟提醒
用户设置闹钟后，手环通过震动以提醒用户；在app端设置时，可设置重复周期（周一至周日，任意一天或多天），在app端，支持最多可设置5组闹钟；
<a name="SOwJJ"></a>
## 数据类型

类名：com.lifesense.android.ble.device.cavosmart.model.config.Clock

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 闹钟的顺序， 需要开发者自己计算，唯一ID |
| hour | int | 几点 |
| minute | int | 几分 |
| repeatDays | Day | 重复日期（详见见公共数据类型->星期） |

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
![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616761912136-51ab93f8-ef88-4d9b-88d1-c01b5fb8a035.png#averageHue=%23fbfbfb&crop=0&crop=0&crop=1&crop=1&height=302&id=EoH4y&margin=%5Bobject%20Object%5D&name=image.png&originHeight=302&originWidth=843&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24737&status=done&style=none&title=&width=843)

