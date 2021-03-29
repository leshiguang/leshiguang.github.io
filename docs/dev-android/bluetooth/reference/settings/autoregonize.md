<a name="D2WIh"></a>
## 关于自动识别运动设置
手环可以自动识别用户当前所处的运动状态，并在自动识别结束是，将运动报告数据上报到手机上，由于识别的精准度问题，开发者可以自己定义哪些运动能被自动识别。<br />目前支持自动识别的运动为：健走、跑步
<a name="B4ERf"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.AutoRecognitionSport

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| sportModes | List<Pair<Booleean,SportMode>> | 自动识别开关列表(SportMode详见公共数据类型->运动模式) |

SportMode

| 含义 | 名称 | 值 |
| --- | --- | --- |
| 未指定          | UN_KNOW         | 0 |
| 跑步           | RUNNING            | 0x01             |
| 健走           | HEALTH_WALKING           | 0x02             |

<a name="xaKnH"></a>
## 调用示例
```java

BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), autoRecogintionSport, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus) throws Exception {
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
} ) ;
```



