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

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| uniqueId | String | 表盘ID |
| index | int | 表盘位置 0～7 目前只支持7，表示推动表盘的位置，如果该位置非空，则表示替换，否则表示新增 |
| dialPlateName | String | 表盘文件名称 |
| dialPlateType | int | 表盘类型0:在线表盘1:相册表盘2:本地表盘255:无表盘（可用于删除表盘） |
| filePath | String | 表盘文件路径 |

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

