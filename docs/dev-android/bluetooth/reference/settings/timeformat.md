<a name="RLTVl"></a>
## 关于时间制式
设置手环默认显示的时间制式， 可选项为12小时制和24小时制
<a name="Jxb7H"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.TimeFormat

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 制式类型 （0：24小时制<br />1：12小时制） |



<a name="HVDNu"></a>
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
<a name="JXEgJ"></a>
## 实现方案示例

<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616674942177-859d135b-46e5-4fd8-b5a9-1a2dd5678d3c.png#align=left&display=inline&height=313&margin=%5Bobject%20Object%5D&name=image.png&originHeight=313&originWidth=867&size=25719&status=done&style=none&width=867)<br />


