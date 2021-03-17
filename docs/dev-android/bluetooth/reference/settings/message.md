<a name="YrRbU"></a>
# 消息提醒
类名：com.lifesense.android.ble.core.application.model.config.Call

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

调用示例：
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

