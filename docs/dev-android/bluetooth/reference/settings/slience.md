<a name="D2WIh"></a>
## 关于勿扰模式
- 在18:00-06:00时间段，手环自动以较暗亮度显示。不需要App设置。
- 勿扰模式下：

a.手环停止接收来电和消息提醒，并默认关闭抬腕亮屏<br />b.在手环的时间页面，显示勿扰模式图标

- 通过Ａpp设置开启或关闭勿扰模式，默认为关闭；
- 开启勿扰模式时，可选择定时开启的时间段；
- 可选择开启抬腕亮屏，默认为关闭。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616724733010-75bfc96c-c592-47fa-a598-16b0df18d717.png#align=left&display=inline&height=464&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=866&size=107523&status=done&style=none&width=866)
<a name="NvXKT"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.Slience

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| enable | boolean | 开关 |
| isEnableRaise | boolean | 勿扰模式下是否允许抬手亮屏 |
| startHour | int | 开始小时 |
| startMins | int | 开始分钟 |
| endhour | int | 结束小时 |
| endMins | int | 结束分钟 |

<a name="voCW3"></a>
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
<a name="15hLi"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616737483254-b0673315-9984-448c-873e-8847ec415495.png#align=left&display=inline&height=446&margin=%5Bobject%20Object%5D&name=image.png&originHeight=446&originWidth=686&size=35584&status=done&style=none&width=686)<br />


