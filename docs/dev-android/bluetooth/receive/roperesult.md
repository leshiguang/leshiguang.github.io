<a name="L7zPP"></a>
# 跳绳结果数据
类名：com.lifesense.android.ble.core.application.model.RopeSkippingResult

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| mode | int | 0:倒计时模式<br />1:倒计数模式<br />2:自由跳模式 |
| targetValue | int | 当前设置的目标值<br />倒计时跳：倒计时的秒数<br />倒计数跳：倒计次的次数 |
| totalSportTime | int | 跳绳总市场 |
| totalSkipTimes | int | 跳绳总次数 |
| blockTimes | int | 绊绳次数 |
| effectSportTime | int | 有效跳绳时长 |
| battery | int | 电量 |
| avgFrequency | int | 平均频率 |
| maxFrequency | int | 最大频率 |
| maxCombo | int | 最大连续次数 |
| utc | int | 跳绳开始时间 |
| statuses | List<Status> | 分组数据（每次绊绳为一组）<br />duration：时长<br />count：次数 |


