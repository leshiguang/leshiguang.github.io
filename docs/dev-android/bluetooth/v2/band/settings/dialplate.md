<a name="oNn1j"></a>
## 关于自定义表盘
自定义表盘指用户自定义选择手环的UI风格<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616739830588-fa6bbac0-b49f-46d6-8c9f-6736b7d879fb.png#crop=0&crop=0&crop=1&crop=1&height=314&id=HhfA8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=314&originWidth=1506&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234072&status=done&style=none&title=&width=1506)
<a name="gXub0"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.DialPlate

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| type | DialPlateType | 表盘类型 |

DialPlateType

| FIRST | 表盘1 |
| --- | --- |
| SECOND | 表盘2 |
| THIRD | 表盘3 |
| FOURTH | 表盘4 |
| FIFTH | 表盘5 |
| SIXTH | 表盘6 |

_注：hr2只有5种类型，传入SIXTH和传入FIRST相同_

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
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616740030654-a5b298e2-de66-488d-9bbd-5b5fd075fb72.png#crop=0&crop=0&crop=1&crop=1&height=508&id=W3a2V&margin=%5Bobject%20Object%5D&name=image.png&originHeight=508&originWidth=861&originalType=binary&ratio=1&rotation=0&showTitle=false&size=134915&status=done&style=none&title=&width=861)

- <br />

