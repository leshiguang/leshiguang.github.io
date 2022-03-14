LZMioResultMeasureData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| jumpMode | LZMioJumpMode | 跳绳模式<br />///倒计时<br />LZMioJumpModeTimeConutdown,<br />///到计数<br />LZMioJumpModeNumberCountdown,<br />///自由模式<br />LZMioJumpModeFree, |
| settingContent | UInt32 | 倒计时:倒计时秒数<br />倒计数:倒计次次数 |
| duration | UInt32 | 总时长 |
| count | UInt32 | 总次数 |
| groupCount | UInt32 | 绊绳次数最大为49次，跳绳组 数最大值为50;跳绳组数=绊 绳次数+1; 有绊绳后，会产生的多组跳 绳数据组数，若无绊绳，则 只有1组 |
| battery | UInt32 | 电量0-100 |
| validDuration | UInt32 | 有效时长 |
| freq | UInt32 | 频次 |


