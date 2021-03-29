<a name="D2WIh"></a>
## 关于步数目标
已废弃， 请使用[目标鼓励设置](https://lifesense.yuque.com/dev-ios/bluetooth/reference/settings/target)<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616720559847-d5e71e22-6d38-4bf8-aae5-df7a989f3260.png#align=left&display=inline&height=157&margin=%5Bobject%20Object%5D&name=image.png&originHeight=157&originWidth=846&size=9459&status=done&style=none&width=846)
<a name="ni3mh"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.StepEncourage

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| step | int | 步数目标值 |



<a name="DnoX4"></a>
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



