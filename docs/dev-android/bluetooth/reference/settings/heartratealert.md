<a name="hwKJQ"></a>
## 关于运动心率预警
运动心率预警是用户在开启运动后，若心率超过设置的上限或下限， 手环震动提醒，并显示预警的心率值，默认关闭<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616674628163-5e961ece-0618-401c-a65d-610cb8f65221.png#align=left&display=inline&height=381&margin=%5Bobject%20Object%5D&name=image.png&originHeight=381&originWidth=916&size=419240&status=done&style=none&width=916)
<a name="t25e9"></a>
## 
<a name="3X7CV"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.HeartRateAlert

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| rangeLeft | int | 心率区间I下限 |
| rangeRight | int | 心率区间I上限 |



<a name="pmgYd"></a>
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
<a name="JJPdQ"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616673981571-f6c64351-48f1-45e8-b129-11fd7c870961.png#align=left&display=inline&height=486&margin=%5Bobject%20Object%5D&name=image.png&originHeight=486&originWidth=863&size=23626&status=done&style=none&width=863)<br />


