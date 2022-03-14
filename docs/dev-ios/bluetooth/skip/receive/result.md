LZMioResultMeasureData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| type | UInt32 | 0-表示当前跳神的结果。 1-表示历史数据的结果 |
| utc | UInt32 | 测量时间 |
| jumpMode | LZMioJumpMode | 跳绳模式<br />///倒计时<br />LZMioJumpModeTimeConutdown,<br />///到计数<br />LZMioJumpModeNumberCountdown,<br />///自由模式<br />LZMioJumpModeFree, |
| settingContent | UInt32 | 倒计时:倒计时秒数<br />倒计数:倒计次次数 |
| duration | UInt32 | 总时长 |
| count | UInt32 | 总次数 |
| avgFreq | UInt32 | 平均平次 |
| maxFreq | UInt32 | 最大平次 |
| maxContinueCount | UInt32 | 最大连跳次数 |
| groupCount | UInt32 | 绊绳次数最大为49次，跳绳组 数最大值为50;跳绳组数=绊 绳次数+1; 有绊绳后，会产生的多组跳 绳数据组数，若无绊绳，则 只有1组 |
| list | NSArray <NSDictionary *> | 数据格式如 {"time": 10, "count": 3 }  标识在time时间内，跳了count次 |



