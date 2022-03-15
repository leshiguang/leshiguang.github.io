<a name="D2WIh"></a>
## 关于消息提醒
手机来消息时，手环通过震动并显示消息符号和消息内容以提醒用户；手环支持短信和微信等社交媒体的消息提醒；用户通过app选取开启短信或微信提醒，默认均为关闭。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738152372-68d1f04c-77ea-45fd-a812-df6d5d47b478.png#crop=0&crop=0&crop=1&crop=1&height=430&id=XHAOC&margin=%5Bobject%20Object%5D&name=image.png&originHeight=430&originWidth=1552&originalType=binary&ratio=1&rotation=0&showTitle=false&size=149232&status=done&style=none&title=&width=1552)<br />           
<a name="VlbMD"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.Call

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| reminderType | ReminderType | 消息类型 |
| enable | booleean | 开关 |
| delay | int | 延时 |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationTime | int | 震动时长（0～60s） |
| vibrationLevel | int | 震动等级1（0 ～ 9） |
| bibrationLevel1 | int | 震动等级2（0 ～ 9，只有震动类型为间歇震动才有效） |
| appPackageName | String | 需要自定义提醒的应用包名（reminderType 为CUSTOM时有效） |

ReminderType

| CALL | 来电 |
| --- | --- |
| MESSAGE | 消息提醒（短信+微信） |
| DISCONNECT | 断连提醒 |
| SMS | 短信 |
| WECHAT | 微信 |
| QQ | qq |
| FACEBOOK | 脸书 |
| TWITTER | 推特 |
| LINE | line |
| GMAIL | 谷歌邮箱 |
| KAKAOTALK | kakao |
| WHATSAPP | whatsapp |
| SEWELLNESS | sewellness |
| CUSTOM | 自定义应用 |

<a name="L3zIE"></a>
## 调用示例
```java
Call call = new Call();
call.setEnable(false);
call.setReminderType(Call.ReminderType.CUSTOM);
call.setVibrationMode(VibrationMode.CONTINUOUS_VIBRATION);
call.setVibrationLevel(9);
call.setVibrationLevel1(9);
call.setVibrationTime((short)60);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), call, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus) throws Exception {
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
        });
```
<a name="1J9HU"></a>
## 实现方案示例

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738469724-5ff02b72-db70-43b8-9306-f689f9f75a4b.png#crop=0&crop=0&crop=1&crop=1&height=426&id=wDX1H&margin=%5Bobject%20Object%5D&name=image.png&originHeight=426&originWidth=863&originalType=binary&ratio=1&rotation=0&showTitle=false&size=53293&status=done&style=none&title=&width=863)
<a name="P6E16"></a>
## 消息不提醒的原因

- 未连接
- app端未开启信息提醒
- 手机->蓝牙->未设置通知允许
- 手机设置为在屏幕锁定情况下提醒，不在锁屏情况下没有消息提醒
- 手机中通知过多，需要清理后才会有消息提醒

