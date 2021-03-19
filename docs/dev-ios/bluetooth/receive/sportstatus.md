<a name="83wQh"></a>
# 运动模式状态
类名：com.lifesense.android.ble.core.application.model.SportNotify

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| requestGps | boolean | 请求手机开启GPS |
| sportStatus | int | 运动状态(0 开始 1 结束) |
| sportMode | SportMode | 运动模式(详见公共数据类型->运动模式) |


<br />**LZA5SportMode**

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

*注：部分运动手环开启运动时， 会发送开始信息到手环， 并请求手机开启GPS记录用户的运动轨迹， 您可能需要回复手机GPS开启的状态，若未回复手环会自动跳过GPS。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616071673624-8f6b11fd-afdd-4284-bfbc-6441058920ad.png#align=left&display=inline&height=464&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1440&originWidth=1080&size=1257494&status=done&style=none&width=348)

