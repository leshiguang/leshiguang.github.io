<a name="739DD"></a>
# 功能描述
app设置药盒的提醒时间

LZMcuTimeData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| times | NSArray <LZMcuTimeData *> * | 定时设置（最多设置9个）条目为0的时候表示删除该编号所有定时器 |
| index | Uint32 | 药格编号（1-4） |



LZMcuTimingSetting

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| hour | Time[] | 时 |
| min | number | 分 |
| sec | number | 秒 |
| weeks | Week[] | 星期<br />export const enum Week {<br />MON = 0x01,<br />TUES = 0x02,<br />WED = 0x04,<br />THUR = 0x08,<br />FRI = 0x10,<br />SAT = 0x20,<br />SUN = 0x40<br />} |



<a name="qvAra"></a>
## 调用示例：
```objectivec
LZMcuTimingSetting *temp = [LZMcuTimingSetting new];
temp.index = 1;
LZMcuTimeData *time = [LZMcuTimeData new];

NSCalendar *calendar = [NSCalendar currentCalendar];
NSDateComponents *comp = [calendar components:NSCalendarUnitYear | NSCalendarUnitMonth | NSCalendarUnitDay | NSCalendarUnitWeekday | NSCalendarUnitHour | NSCalendarUnitMinute fromDate:[NSDate date]];
time.hour = (UInt32)comp.hour;
time.min = (UInt32)comp.minute + 1;
time.sec = 0;
time.week = 127;
temp.times = @[time];
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

