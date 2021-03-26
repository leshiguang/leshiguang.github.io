<a name="D2WIh"></a>
## 关于消息提醒
手机来消息时，手环通过震动并显示消息符号和消息内容以提醒用户；手环支持短信和微信等社交媒体的消息提醒；用户通过app选取开启短信或微信提醒，默认均为关闭。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738152372-68d1f04c-77ea-45fd-a812-df6d5d47b478.png#align=left&display=inline&height=430&margin=%5Bobject%20Object%5D&name=image.png&originHeight=430&originWidth=1552&size=149232&status=done&style=none&width=1552)<br />             
<a name="VlbMD"></a>
## 数据类型
**LZA5SettingMessageReminderData**

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| enable | BOOL | 开关 |
| reminderType | LZA5MsgReminderType | 消息类型 |
| appId | NSString | App包名 （reminderType == LZA5MsgReminderTypeCustom 的时候生效） |


<br />LZA5MsgReminderType**（消息类型枚举类）**<br />


| 消息名称 | 类型 | 值 |
| --- | --- | --- |
| 来电提醒          | LZA5MsgReminderTypeCall       | 1 |
| 消息提醒          | LZA5MsgReminderTypeMsg        | 2 |
| 断连提醒          | LZA5MsgReminderTypeLost       | 3 |
| 短信提醒          | LZA5MsgReminderTypeSMS        | 4 |
| 微信提醒          | LZA5MsgReminderTypeWX         | 5 |
| QQ提醒          | LZA5MsgReminderTypeQQ         | 6 |
| Facebook提醒    | LZA5MsgReminderTypeFacebook   | 7 |
| Twitter提醒     | LZA5MsgReminderTypeTwitter    | 8 |
| Line提醒        | LZA5MsgReminderTypeLine       | 9 |
| Gmail提醒       | LZA5MsgReminderTypeGmail      | 0x0a |
| KakaoTalk提醒   | LZA5MsgReminderTypeKakaoTalk  | 0x0b |
| WhatsApp提醒    | LZA5MsgReminderTypeWhatsApp   | 0x0c |
| SE Wellness提醒 | LZA5MsgReminderTypeSEWellness | 0xfe |
| 自定义           | LZA5MsgReminderTypeCustom     | 0xff |

<br />
<a name="NCJAa"></a>
## 设置消息提醒

<br />调用示例：
```objectivec
[self.deviceManager sendDataModel:LZA5SettingMessageReminderData macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [weakSelf hideActivityIndicatorHUD];
            if (result == LZBluetoothErrorCodeSuccess) {
                [weakSelf saveSettingData:settingData];
                [weakSelf showHintMessage:@"设置成功" duration:1];
            } else {
                [weakSelf showHintMessage:@"设置失败" duration:1];
            }
            [weakSelf updateUIWithResult:result];
        });
    }];
```


<a name="1J9HU"></a>
## 实现方案示例

<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616738469724-5ff02b72-db70-43b8-9306-f689f9f75a4b.png#align=left&display=inline&height=426&margin=%5Bobject%20Object%5D&name=image.png&originHeight=426&originWidth=863&size=53293&status=done&style=none&width=863)
<a name="P6E16"></a>
## 消息不提醒的原因

- 未连接
- app端未开启信息提醒
- 手机->蓝牙->未设置通知允许
- 手机设置为在屏幕锁定情况下提醒，不在锁屏情况下没有消息提醒
- 手机中通知过多，需要清理后才会有消息提醒




