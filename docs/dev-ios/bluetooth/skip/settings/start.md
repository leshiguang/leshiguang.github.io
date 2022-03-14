<a name="739DD"></a>
# 功能描述
App发送开始跳绳指令到设备， 设备进入到相应的跳绳模式

<a name="Vllul"></a>
# 数据类型
LZMioBeginToJumpSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| jumpMode | LZMioJumpMode | 跳转模式<br /><br />///倒计时<br />LZMioJumpModeTimeConutdown,<br />///到计数<br />LZMioJumpModeNumberCountdown,<br />///自由模式<br />LZMioJumpModeFree,<br /> |
| settingContent | Uint32 | 倒计时跳:设置倒计时秒数; <br />倒计数跳:设置倒计次次数<br />自由模式: 无意义 |
| numberOfCountdown | Uint32 | 倒计秒数（s） 3-60s 如设置3则为3、2、1，开始跳 绳的倒计秒数 |
| utc | Uint32 | 时间戳 |


<a name="NCJAa"></a>
## 配置网络

调用示例：
```objectivec
LZMioBeginToJumpSetting *temp = [LZMioBeginToJumpSetting new];
temp.jumpMode = LZMioJumpModeNumberCountdown;
temp.settingContent = 11;
temp.utc = (UInt32)([NSDate date].timeIntervalSince1970);
temp.numberOfCountdown = 4;
[self.deviceManager sendDataModel:temp macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            if (result == LZBluetoothErrorCodeSuccess) {
                NSLog(@"成功");
            } else {
                NSLog(@"失败");
            }
        });
    }];
```


