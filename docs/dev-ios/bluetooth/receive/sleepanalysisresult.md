<a name="lC0iU"></a>
# 支持设备类型
乐心手环HR6、乐心手环Mambo Watch1 乐心手环Mambo Watch2
<a name="jtQ5r"></a>
# 冥想测量数据
类名：LZA5SleepReportData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| startUtc | int | 测量时间 |
| awakeUtc | int | 冥想时长 |
| durationOfAwake | int | 清醒时长 |
| numberOfAwake | int | 清醒次数 |
| numberOfEyeMovement | int | 快速眼动次数 |
| timeOfLightSleep | int | 浅睡时长 |
| timeOfDeepSleep | int | 深睡时长 |
| characteristicsOfSleep | int | 睡眠特征 0、未睡  1、睡眠临时数据（不完整，还在睡眠过程中） 3、完整睡眠数据 |
| sleepList | startUtc：状态开始时间 <br />endUtc：状态结束时间<br />deep：深浅<br />duration：时间间隔 | 睡眠状态数据 |
| breathScore | int | 呼吸评分 |
| breathLevel | int | 呼吸等级 |
| sleepScore | int | 睡眠评分 |




