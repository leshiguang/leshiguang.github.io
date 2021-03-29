<a name="LVV27"></a>
## 关于佩戴习惯
手环可通过app设置左手佩戴或右手佩戴，默认为左手佩戴。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616746911507-8e98e07c-63d0-4552-88d9-7898b0d68756.png#align=left&display=inline&height=108&margin=%5Bobject%20Object%5D&name=image.png&originHeight=108&originWidth=1178&size=121655&status=done&style=none&width=1178)
<a name="qSGpg"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.Wearing

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 0：左手 1：右手 |



<a name="EI85y"></a>
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



