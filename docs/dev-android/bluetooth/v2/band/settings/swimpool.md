<a name="G9PFv"></a>
## 关于泳道长度设置
App设置游泳参数到手环，可设置参数为泳道长度，泳道长度是指标准游泳池的直线长度，在手环进入游泳运动时，手环会识别用户实际游泳的圈数，结合设置的泳道长度可计算出实际游泳的距离数据<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616676104976-c8810529-4d17-48e3-bce7-ad3519dd7a20.png#crop=0&crop=0&crop=1&crop=1&height=211&id=OX7nr&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=869&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90072&status=done&style=none&title=&width=869)

支持的设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S、乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6

<a name="pgYXj"></a>
## 应用场景
当用户开启游泳时， 可预先设置泳道长度到手环，手环会采集用户在游泳过程中产生的趟数数据， 结合泳道长度计算出距离信息<br />接入建议：app需要提供一个设置的入口，且会保留一个默认的泳道长度信息。<br />接入建议：用户经常在游泳后再在app设置泳道长度，服务器需要根据记录的趟数进行重新计算
<a name="oD2LX"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.SwimPool

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| channelLength | int | 泳道长度 （单位：米） |

<a name="hGTCA"></a>
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
<a name="KITWx"></a>
## 实现方案示例

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616676385650-c67fee4e-e339-41f4-864f-008b7ec65b7c.png#crop=0&crop=0&crop=1&crop=1&height=243&id=OjstV&margin=%5Bobject%20Object%5D&name=image.png&originHeight=243&originWidth=862&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12520&status=done&style=none&title=&width=862)

