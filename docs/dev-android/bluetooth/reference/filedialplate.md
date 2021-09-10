<a name="oNn1j"></a>
## 关于下载表盘到手环
下载应用市场表盘是新手环的能力， 对“手环默认表盘”能力的扩充， 用户可以设置相册图片和表盘市场的表盘到手环<br />​

支持的设备类型：乐心手环HR6、乐心手环Mambo Watch1、乐心手环Mambo Watch2<br />​<br />
<a name="e1ZBC"></a>
## 应用场景
当用户需要更改手环表盘时， 可从表盘市场下载或从相册中选取文件下载到手环
<a name="gXub0"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.FileDialPlate

| 字段 | 字段类型 |  |
| --- | --- | --- |
| uniqueId | String |  |
| index | int |  |
| dialPlateName | String |  |
| dialPlateType | int |  |
| filePath | String |  |

<a name="6m4XS"></a>
## 调用示例


```java

FileDialPlate fdp = new FileDialPlate();
fdp.setType(0x07);
fdp.setIndex(1);
fdp.setDialPlateName("极光");
fdp.setFilePath("");
fdp.setUniqueId("D2D4FUYS-JII");
BleDeviceManager.getDefaultManager().setDialPlate(deviceInfo.getValue().getMac(), dialPlate, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
}  )  ;

```

