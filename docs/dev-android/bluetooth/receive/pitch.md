<a name="twpiM"></a>
# 支持的设备类型
乐心手环HR6、乐心手环Mambo Watch1、 乐心手环Mambo Watch2
<a name="Flxn8"></a>
# 运动步频数据
类名：com.lifesense.android.ble.core.application.model.Pitch    

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | int | 测量起始时间 单位：s |
| sportMode | SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | int | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| utcOffset | int | UTC 偏移量  单位：s |
| reside | int | 手环配速数据剩余条数 |
| pitched | List<Short> | 步频数据列表 |


