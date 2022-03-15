<a name="65B99"></a>
## 关于运动参数设置
运动参数设置指在运动前，设定运动的配速和距离，控制运动水平的稳定性
<a name="FgWWQ"></a>
## 应用场景
当您需要规定用户某次运动的配速和距离时
<a name="jOoPi"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.SportConfig

| 字段1 | 字段类型 | 描述 |
| --- | --- | --- |
| pace | short | 配速 （unit：s） <br />配速是指跑（走）完1km需要多久时间，精确到秒，例如256表示4’16’’ |
| distance | int | 距离 （单位：米） |

<a name="SBK9X"></a>
## 调用示例
```java

SportConfig sportConfig = new SportConfig();
sportConfig.setPace(256);
sportConfig.setDistance(1000);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), sportConfig, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
					// do something
                }
            }
}  )  ;
```

