<a name="N0SNk"></a>
# 电量信息
<a name="Gw58r"></a>
## 获取电量信息
手环设备获取最新的电量信息可以在设备连接后通过下面接口主动获取，获取到的最新电量信息将缓存到DeviceInfo中并给予最新电量的回调。在手环、体脂秤、血压计处于低电量状态时，部分功能可能受到影响，调用示例：
```java
BleDeviceManager.getDefaultManager().readBatteryInfo(mac, new Consumer<BatteryInfo> () {
    @Override
    public void accept(BatteryInfo batteryInfo) throws Exception {
        // do something
    }
});

```
参数说明：<br />mac：绑定的设备mac地址<br />receiver：电量信息回调<br />
<br />**BatteryInfo**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| voltage | float | 电池电压 |
| utc | long | 电量信息更新时间 |
| batteryPercent | int | 电量百分比 |



<a name="FB8Vg"></a>
## 手环电池低电量
检测到电量偏低后（电量低于10%），手环将会出现低电量提示，提示低电量后， 手环至少还可以使用8小时，手环只作时间、计步、心率测量，其他功能不工作。<br />检测到电量耗尽后（0%），手环会出现空电量符号并闪烁提示，仅显示时间页面，所有提醒功能（来电、短信、久坐提醒、闹钟、鼓励、事件）都将关闭，心率不工作，不进行蓝牙数据传输<br />

<a name="XJFFD"></a>
## 体脂秤电池低电量
体脂秤检测到低电量后，显示屏提示Lo符号，提醒用户及时更换电池

