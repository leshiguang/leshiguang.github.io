<a name="RLTVl"></a>
## 关于时间制式
设置手环默认显示的时间制式， 可选项为12小时制和24小时制<br />​

支持的设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S、乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6<br />

<a name="YA2A2"></a>
## 应用场景
当用户需要调整时间制式时
<a name="Jxb7H"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.TimeFormat

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 制式类型 （0：24小时制<br />1：12小时制） |



<a name="HVDNu"></a>
## 调用示例
```java
TimeFormat tf = new TimeFormat();
tf.setType(1);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), tf, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    // do something
                }
            }
}  )  ;
```
<a name="JXEgJ"></a>
## 实现方案示例

<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616674942177-859d135b-46e5-4fd8-b5a9-1a2dd5678d3c.png#height=313&id=A6jyU&margin=%5Bobject%20Object%5D&name=image.png&originHeight=313&originWidth=867&originalType=binary&ratio=1&size=25719&status=done&style=none&width=867)<br />


