<a name="65B99"></a>
## 关于控制手环的工作状态
控制手环的工作状态是指APP向手环下发工作状态切换指令，常用于解决APP无法关闭通道或断开蓝牙连接引起的状态机异常。<br />目前APP支持的控制指令有：复位、断开连接、解绑、重启、重置、关机、查找手环、发起配对<br />支持的设备：全部手环<br />不同手环支持的目标总类不同，下表是具体的支持项：

| 手环型号 | 目标类型 |
| --- | --- |
| 乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S | 复位、断开连接 |
| 乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6 | 复位、断开连接、解绑、重启、重置、关机、查找手环、发起蓝牙配对 |


<a name="FgWWQ"></a>
## 应用场景
1、解决APP无法关闭通道或断开蓝牙连接引起的状态机异常<br />2、通过APP控制手环重启、重置、关机、复位<br />3、查找手环
<a name="jOoPi"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.Control

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| state | 枚举State | 0x00：手环状态机复位到登录 0x01：手环断开蓝牙连接 0x02：解绑设备 0x03：重启 0x04：重置 0x05：关机 0x06: 查找手环 0x07: 停止查找手环 0x08：停止查找手机 0x09：发起蓝牙配对 |

<a name="SBK9X"></a>
## 调用示例
```java

Control control = new Control();
control.setState(State.RECOVERY);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), control, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
					// do something
                }
            }
}  )  ;
```

