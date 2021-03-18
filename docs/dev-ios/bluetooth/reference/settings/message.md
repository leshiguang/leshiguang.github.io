<a name="D2WIh"></a>
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




