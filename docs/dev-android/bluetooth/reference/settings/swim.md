<a name="G9PFv"></a>
## 关于泳道长度设置
泳道长度是指标准游泳池的直线长度，在手环进入游泳运动时，手环会识别用户实际游泳的圈数，结合设置的泳道长度可计算出实际游泳的距离数据<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616676104976-c8810529-4d17-48e3-bce7-ad3519dd7a20.png#align=left&display=inline&height=211&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=869&size=90072&status=done&style=none&width=869)
<a name="oD2LX"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.SwimPool

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


![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616676385650-c67fee4e-e339-41f4-864f-008b7ec65b7c.png#align=left&display=inline&height=243&margin=%5Bobject%20Object%5D&name=image.png&originHeight=243&originWidth=862&size=12520&status=done&style=none&width=862)

