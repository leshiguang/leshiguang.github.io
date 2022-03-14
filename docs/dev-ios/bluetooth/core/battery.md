
<a name="rElKV"></a>
## 获取电量信息
手环设备获取最新的电量信息可以在设备连接后通过下面接口主动获取，在手环、体脂秤、血压计处于低电量状态时，部分功能可能受到影响。接口如下：
```objectivec
- (void)readBatteryWithMacString:(NSString *)macString deviceType:(LZDeviceType)deviceType;
```

**请求参数：**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| macString | NSString | 设备mac地址 |
| deviceType | LZDeviceType | 设备类型 |

**回调：**<br />如果有电量更新，通过 LZDeviceDelegate deviceDidUpdateBatteryStatus 通知更新
```objectivec
- (void)deviceDidUpdateBatteryStatus:(id<LZDeviceProtocol>)device {
    NSLog(@"收到电量 %@", device.batteryInfo);
}
```
<a name="kGH8w"></a>
## 手环电池低电量
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616057160604-3f5f12f3-a462-4a38-98b3-2956f1cbf7cf.png#align=left&display=inline&height=208&margin=%5Bobject%20Object%5D&name=image.png&originHeight=208&originWidth=464&size=27074&status=done&style=none&width=464)<br />检测到电量偏低后（电量低于10%），手环将会出现低电量提示，提示低电量后， 手环至少还可以使用8小时，手环只作时间、计步、心率测量，其他功能不工作。<br />检测到电量耗尽后（0%），手环会出现空电量符号并闪烁提示，仅显示时间页面，所有提醒功能（来电、短信、久坐提醒、闹钟、鼓励、事件）都将关闭，心率不工作，不进行蓝牙数据传输
<a name="VQyok"></a>
## 体脂秤电池低电量
体脂秤检测到低电量后，显示屏提示Lo符号，提醒用户及时更换电池<br />[<br />](https://docs.leshiguang.com/dev-android/bluetooth/reference/device)![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616057645281-e8ec7b40-c91e-4c00-ae28-ff17609693d3.png#align=left&display=inline&height=580&margin=%5Bobject%20Object%5D&name=image.png&originHeight=676&originWidth=852&size=401557&status=done&style=none&width=731)

