<a name="cbmi1"></a>
# 配速
类名：com.lifesense.android.ble.core.application.model.Speed

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量时间 |
| sportMode | SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | int | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| utcOffset | int | 测量数据间隔时间（单位：s） |
| reside | int | 手环剩余数据 |
| speeds | List<Short> | 配速列表（_跑完1KM需要多长时间，精确到秒_） |


