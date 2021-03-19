类名：LZA5RunCaloriesData    

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | UInt32 | 测量起始时间 单位：s |
| sportMode | LZA5SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | LZA5SportSubMode | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| utcOffset | UInt32 | UTC 偏移量  单位：s |
| reside | UInt16 | 手环配速数据剩余条数 |
| calories | NSArray <NSNumber *> | 卡路里列表， utcOffset时间内消耗的卡路里 单位 cal |

**LZA5SportMode**

| 含义 | 名称 | 值 |
| --- | --- | --- |
| 未指定          | LZA5SportModeUnknow         | 0 |
| 跑步           | LZA5SportModeRun            | 0x01             |
| 健走           | LZA5SportModeWalk           | 0x02             |
| 骑行           | LZA5SportModeCycling        | 0x03             |
| 游泳           | LZA5SportModeSwim           | 0x04             |
| 力量训练 （旧称 健身） | LZA5SportModeKeepfit        | 0x05             |
| 新版跑步         | LZA5SportModeNewRun         | 0x06             |
| 室内跑（旧称 跑步机）  | LZA5SportModeRunInDoor      | 0x07             |
| 椭圆机          | LZA5SportModeElliptical     | 0x08             |
| 有氧运动         | LZA5SportModeAerobicWorkout | 0x09             |
| 篮球           | LZA5SportModeBasketball     | 0x0a             |
| 足球           | LZA5SportModeFootball       | 0x0b             |
| 羽毛球          | LZA5SportModeBadminton      | 0x0c             |
| 排球           | LZA5SportModeVolleyball     | 0x0d             |
| 乒乓球          | LZA5SportModeTableTennis    | 0x0e             |
| 瑜伽           | LZA5SportModeYoga           | 0x0f             |
| 电竞           | LZA5SportModeGame           | 0x10             |
| 有氧能力测试12分钟跑  | LZA5SportMode12MinutesRun  | 0x11             |
| 有氧能力测试6分钟走   | LZA5SportMode6MinutesWalk  | 0x12             |
| 健身舞          | LZA5SportModeGymDance       | 0x13             |
| 太极 | LZA5SportModeTaiji          | 0x14             |


<br />*注：运动消耗卡路里数据会在运动报告上报后上传， 您需要根据utc的值去聚合卡路里的归属问题， calories中没比数据代表一分钟消耗的卡路里值。<br />
<br />
<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616071259793-2b4a7ff7-4c97-40ae-b4a9-d0cf2784df58.png#align=left&display=inline&height=2337&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2337&originWidth=1080&size=368104&status=done&style=none&width=1080)

