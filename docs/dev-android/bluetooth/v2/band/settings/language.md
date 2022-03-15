<a name="k087Z"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.Language

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| labguageCode | LanguageCode | 语言代码 |

LanguageCode

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| CHINESE_CN |  | 中文简体 |
| CHINESE_TW |  | 中文繁体 |
| ENGLISH |  | 英语 |
| JAPANESE |  | 日语 |
| KOREAN |  | 韩语 |
| FRENCH |  | 法语 |

<a name="zupyI"></a>
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



