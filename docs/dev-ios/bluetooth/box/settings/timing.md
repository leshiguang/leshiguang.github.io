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
| hour | UInt32 | 时 |
| min | UInt32 | 分 |
| sec | UInt32 | 秒 |
| weeks | typedefNS_OPTIONS(NSUInteger, LZMcuWeek) {<br />///星期一<br />LZMcuWeekMon        = 1 << 0,<br />///星期二<br />LZMcuWeekTues       = 1 << 1,<br />///星期三<br />LZMcuWeekWed        = 1 << 2,<br />///星期四<br />LZMcuWeekThur       = 1 << 3,<br />///星期五<br />LZMcuWeekFri        = 1 << 4,<br />///星期六<br />LZMcuWeekSat        = 1 << 5,<br />///星期天<br />LZMcuWeekSun        = 1 << 6,<br />}; | 星期 |



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

