> 运动数据


LZCVSport

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| list | NSArray <LZCVSportInfo *> * | 运动数据列表 |
| measurementDataType | LZCVDataType | LZCVDataTypeSport |


LZCVSportInfo

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| sportMode | LZCVSportMode | 运动模式 |
| suspendTimes | NSUInteger | 暂停次数 |
| durationOfSuspend | NSUInteger | 暂停时长 单位s |
| start | NSUInteger | 开始时间 |
| end | NSUInteger | 结束时间 |
| step | NSUInteger | 总步数 |
| calories | double | 总卡路里 单位千卡 |
| distance | NSUInteger | 总路程 单位米 |


LZCVSportMode 枚举

| 字段 | 值 | 含义 |
| --- | --- | --- |
| LZCVSportModeRun | 0x01 | 户外跑步 |
| LZCVSportModeWalk | 0x02 | 健走 |
| LZCVSportModeCycling | 0x03 | 骑行 |
| LZCVSportModeRunInDoor | 0x07 | 室内跑 |
| LZCVSportModeFreeSport | 0x19 | 自由训练 |
| LZCVSportModePlank | 0x65 | 平板支撑 |


