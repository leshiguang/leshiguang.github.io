<a name="7bHEF"></a>
## 关于屏幕方向设置


设置手环屏幕显示的方向<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616762102630-7f7ff3ec-05de-447f-b65d-bf45f6c00abf.png#align=left&display=inline&height=301&margin=%5Bobject%20Object%5D&name=image.png&originHeight=301&originWidth=863&size=34848&status=done&style=none&width=863)
<a name="K5Ws9"></a>
## 佩戴方式
类名：com.lifesense.android.ble.core.application.model.config.Direction

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | int | 佩戴方式类型（0:横，1:竖） |

<a name="BcLhz"></a>
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



