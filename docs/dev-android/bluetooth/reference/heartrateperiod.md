<a name="hwKJQ"></a>
## 关于心率监测周期
心率监测周期默认为5分钟，即选取5分钟内产生监测数据的众数，可以通过设置监测周期来更改手环采集心率数据的间隔时间<br />
<br />支持的设备：乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6<br />​

<a name="Rwtlv"></a>
## 应用场景
当用户需要更改心率监测周期时
<a name="3X7CV"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.HeartRatePeriod

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| period | int | 周期（分钟）， 可选值为 ：<br />5分钟检测一次<br />10分钟检测一次<br />20分钟检测一次<br />30分钟检测一次<br />特殊情况：T=0，代表实时心率监测模式 |



<a name="pmgYd"></a>
## 调用示例
```java
HeartRatePeriod hp = new HeartRatePeriod();
hp.setPeriod(5);

hp.setEnable(true);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), hp, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    // do something
                }
            }
}  )  ;
```
<a name="JJPdQ"></a>
## ​<br />

<br />


