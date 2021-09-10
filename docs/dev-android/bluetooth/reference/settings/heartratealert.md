<a name="hwKJQ"></a>
## 关于心率预警
心率预警指用户设置常规心率或运动心率预警，当用户心率达到设定的上限或下限后， 手环震动提醒，并显示预警的心率值，该设置默认关闭。<br />​

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616674628163-5e961ece-0618-401c-a65d-610cb8f65221.png#height=381&id=U8KZx&margin=%5Bobject%20Object%5D&name=image.png&originHeight=381&originWidth=916&originalType=binary&ratio=1&size=419240&status=done&style=none&width=916)<br />支持的设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S、乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6<br />不同的手环支持的心率预警类型不同，下表时具体型号支持的类型详情：

| 设备型号 | 预警类型 |
| --- | --- |
| 乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S | 常规心率 |
| 乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6 | 常规心率、运动心率 |

<a name="Rwtlv"></a>
## 应用场景
当用户需要在手环上预警心率时
<a name="3X7CV"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.HeartRateAlert

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| rangeLeft | int | 心率区间I下限 |
| rangeRight | int | 心率区间I上限 |
| type | int | 预警类型<br />0 常规心率预警<br />1 运动心率预警 |



<a name="pmgYd"></a>
## 调用示例
```java
HeartRateAlert heartRateAlert = new HeartRateAlert();
heartRateAlert.setType(1);
heartRateAlert.setRangeLeft(60);
heartRateAlert.setRangeRight(150);
heartRateAlert.setEnable(true);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), heartRateAlert, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    // do something
                }
            }
}  )  ;
```
<a name="JJPdQ"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616673981571-f6c64351-48f1-45e8-b129-11fd7c870961.png#height=486&id=hMaLi&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=863&originalType=binary&ratio=1&size=23626&status=done&style=none&width=863)<br />


