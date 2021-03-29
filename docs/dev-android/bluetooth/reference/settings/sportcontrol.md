<a name="qyyy3"></a>
## 关于运动控制
运动控制指从手机侧控制手环运动的开始与结束状态。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616722774653-039ef6b2-1570-4298-aacd-e676cd0c6472.png#align=left&display=inline&height=305&margin=%5Bobject%20Object%5D&name=image.png&originHeight=305&originWidth=868&size=70654&status=done&style=none&width=868)
<a name="00yam"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.SportControl

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| sportMode | SportMode | 运动模式（详见公共数据类型->运动模式） |
| start | boolean | 开始（true）结束（false） |

SportMode

| 含义 | 名称 | 值 |
| --- | --- | --- |
| 未指定          | UN_KNOW         | 0 |
| 跑步           | RUNNING            | 0x01             |
| 健走           | HEALTH_WALKING           | 0x02             |
| 骑行           | RIDING        | 0x03             |
| 游泳           | SWIMMING | 0x04             |
| 力量训练 （旧称 健身） | BODYBUILDING | 0x05             |
| 新版跑步         | NEW_RUNNING | 0x06             |
| 室内跑（旧称 跑步机）  | TREADMILL | 0x07             |
| 椭圆机          | ELLIPTICAL | 0x08             |
| 有氧运动         | AEROBIC | 0x09             |
| 篮球           | BASKETBALL     | 0x0a             |
| 足球           | FOOTBALL | 0x0b             |
| 羽毛球          | BADMINTON | 0x0c             |
| 排球           | VOLLEYBALL | 0x0d             |
| 乒乓球          | PING_PONG | 0x0e             |
| 瑜伽           | YOGA | 0x0f             |
| 电竞           | E_SPORT | 0x10             |
| 有氧能力测试12分钟跑  | AEROBICS_RUN_12MINS | 0x11             |
| 有氧能力测试6分钟走   | AEROBICS_WALK_6MINS | 0x12             |
| 健身舞          | DANCE | 0x13             |
| 太极 | TAIJI | 0x14             |



<a name="9oXcp"></a>
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



