<a name="day7j"></a>
#### 心率区间
类名：com.lifesense.android.ble.core.application.model.config.HeartRateRange<br />_通过用户年龄计算心率区间，push 心率区间到手环_

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| age | int | 年龄 |
| rangeILeft | int | 心率区间I下限 |
| rangeIRight | int | 心率区间I上限 |
| rangeIILeft | int | 心率区间II下限 |
| rangeIIRight | int | 心率区间II上限 |
| rangeIIILeft | int | 心率区间III下限 |
| rangeIIIRight | int | 心率区间III上限 |


<br />调用示例：
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



