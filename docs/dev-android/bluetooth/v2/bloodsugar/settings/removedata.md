<a name="739DD"></a>
# 功能描述
App发送删除历史数据的指令

<a name="Vllul"></a>
# 数据类型
类：com.lifesense.android.ble.device.bloodsugar.model.config.RemoveData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| type | int | 0:所有 1:最新一条 |


<a name="ioHno"></a>
## 调用示例：
```objectivec
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), removeData, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
}  )  ;
```


