<a name="vi88x"></a>
## <br />
<a name="x6DIl"></a>
## 数据类型
类名：com.lifesense.android.ble.device.cavosmart.model.config.DialPlate

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 表盘类型 |



<a name="6m4XS"></a>
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
<a name="N9419"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740030654-a5b298e2-de66-488d-9bbd-5b5fd075fb72.png#averageHue=%23edeceb&crop=0&crop=0&crop=1&crop=1&height=508&id=W3a2V&margin=%5Bobject%20Object%5D&name=image.png&originHeight=508&originWidth=861&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134915&status=done&style=none&title=&width=861)

- <br />

