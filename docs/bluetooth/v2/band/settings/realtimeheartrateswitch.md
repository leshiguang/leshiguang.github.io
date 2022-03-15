<a name="2l8h8"></a>
## 关于实时心率设置
实时心率设置是通过设置手环中的实时心率开关，让手环可以实时反馈用户的最新心率数据，实时心率开关打开后，手环会每秒上报一笔测量心率数据，可通过该设置来进行实时心率开关的切换， 手环断开连接后自动关闭。

支持设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S
<a name="nnS7n"></a>
## 应用场景
1、户外运动场景：通过运动过程中的心率语音/文案提示，为用户的运动作出实时的指导，达到心率设定--心率指导运动--心率查看--再次开始训练的闭环，保证安全&高效运动。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616724358344-63aab1e1-70f1-44d6-a907-e7e398bc8290.png#crop=0&crop=0&crop=1&crop=1&height=332&id=K4lqX&margin=%5Bobject%20Object%5D&name=image.png&originHeight=332&originWidth=1214&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75096&status=done&style=none&title=&width=1214)<br />2、室内运动场景：App实时显示用户心率值和所处区间值，作为运动指导的看板，控制室内运动的强度，实时反应用户的负荷情况，确保运动的有效性和针对性。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616724394798-bd8009fd-62da-4190-9967-8053a0804a91.png#crop=0&crop=0&crop=1&crop=1&height=470&id=mgXzO&margin=%5Bobject%20Object%5D&name=image.png&originHeight=470&originWidth=868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71985&status=done&style=none&title=&width=868)
<a name="FpImH"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.RealTimeHeartRateSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 实时心率开关 （true： 开，false：关） |

*注：实时心率在蓝牙断开连接后会自动关闭，若用户使用过程中断开连接， 您需要重新打开实时心率服务。开启实时心率服务手环的电量续航将受到影响， 请务必注意在合适的时机关闭实时心率服务！
<a name="1aRd1"></a>
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


