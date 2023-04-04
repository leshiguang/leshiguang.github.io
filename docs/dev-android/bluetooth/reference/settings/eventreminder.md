<a name="1FyCB"></a>
## [关于事件提醒](https://docs.sghealth.cn/dev-ios/bluetooth/reference/settings/eventreminder?id=%e5%85%b3%e4%ba%8e%e4%ba%8b%e4%bb%b6%e6%8f%90%e9%86%92)
事件提醒是闹钟功能的扩展， 解决了闹钟提醒功能中缺少事件名称的问题，用户可以自定义事件名称（如：喝水、吃药、睡觉）， 达到事件提醒时间点，手环通过震动并显示事件信息以提醒用户；在app端设置事件时，可设置重复周期（周一至周日，任意一天或多天），时长（5秒、15秒、30秒、60秒），在app端，支持最多可设置5组事件；标签内容为一行1-4个汉字（即8个英文字符）；内容支持汉字＼英文＼数字，不支持表情输入。

<a name="l8qwn"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.EventReminder

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| index | int | 事件提醒的索引， 需要开发者自己计算，唯一ID （最多5个提醒） |
| content | String | 提醒内容 |
| enable | boolean | 开关 |
| hour | int | 提醒时间的小时 |
| min | int | 提醒时间的分钟 |
| repeatDays | List<Day> | 重复日期（详见见公共数据类型->星期） |
| vibrationMode | VibrationMode | 震动类型（详见公共数据类型->震动类型） |
| vibrationDuration | int | 震动时长<br />(单位为秒，最大不超过60s) |
| vibrationLevel | int | 震动等级1<br />共分10级，0～9 |
| vibrationLevel1 | int | 震动等级2<br />共分10级，0～9,只在震动类型为间歇震动的情况下有效 |

<a name="Z2qY6"></a>
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
<a name="WNFGT"></a>
## [实现方案示例](https://docs.leshiguang.com/dev-ios/bluetooth/reference/settings/eventreminder?id=%e5%ae%9e%e7%8e%b0%e6%96%b9%e6%a1%88%e7%a4%ba%e4%be%8b)
![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616761732037-306b6b10-9c81-43ad-a881-c8a29e0ed4b6.png#averageHue=%23fbfbfb&height=345&id=f84Xs&name=image.png&originHeight=397&originWidth=858&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30746&status=done&style=none&title=&width=746)

