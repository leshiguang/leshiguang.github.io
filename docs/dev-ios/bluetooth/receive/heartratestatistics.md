手环发送心率区间统计数据 从当天的凌晨 00:00:00开始，到当天 的截止 UTC 的累计该心 率区间的时间<br />类名：LZA5HeatrateSectionData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 当天截止时间 |
| sectionITime | int | 心率区间I的统计时长 单位：s |
| sectionIITime | int | 心率区间II的统计时长 单位：s |
| sectionIIITime | int | 心率区间III的统计时长 单位：s |

*注：心率三区间指：热身区间、燃脂区间、极限区间， 具体的设置方法您需要参考心率区间设置API

