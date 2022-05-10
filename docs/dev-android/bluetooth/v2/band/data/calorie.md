<a name="Flxn8"></a>
# 运动消耗卡路里
类名：com.lifesense.android.ble.device.band.model.Calorie    

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量起始时间 单位：s |
| sportMode | SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | int | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| utcOffset | int | UTC 偏移量  单位：s |
| reside | int | 手环配速数据剩余条数 |
| calories | List<Short> | 卡路里列表， utcOffset时间内消耗的卡路里 单位 cal |


