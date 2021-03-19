类名：LZA5SportReportData

| 字段 | 字段类型 | 描述 | 支持的运动类型 |
| --- | --- | --- | --- |
| utc | int | 测量时间 |  |
| sportMode | SportMode | 运动模式(详见公共数据类型->运动模式) |  |
| subMode | int | 运动子模式（0, 手动 1 自动识别 2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |  |
| suspendTimes | int | 暂停次数 | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| states | NSArray <LZA5TimeStateData><br /> | 运动状态(详见公共数据类型->跑步状态) | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| exerciseTime | int | 运动时长（不包括暂停数据） | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| step | int | 总步数（没有测量到数据为）运动为游泳时此step 代表游泳圈数<br /> | 跑步、健走、健身、游泳、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| calories | int | 消耗卡路里 | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| maxHr | int | 最大心率 | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| avgHr | int | 平均心率 | 跑步、健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| maxStepFreq | int | 最大步频 | 跑步、健走、健身、跑步机、椭圆机、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| avgStepFreq | int | 平均步频） | 跑步、健走、健身、跑步机、椭圆机、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| maxSpeed | int | 最大速度 | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| avgSpeed | int | 平均速度 | 健走、骑行、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |
| distance | int | 距离 | 跑步、健走、骑行、游泳、健身、跑步机、椭圆机、有氧运动、篮球、足球、羽毛球、排球、乒乓球、瑜伽、有氧能力12分钟跑、有氧能力6分钟走、健身舞、太极 |


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

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616071239185-061704e8-c13a-4088-b587-a77fa2aa81b2.png#align=left&display=inline&height=2337&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2337&originWidth=1080&size=414169&status=done&style=none&width=1080)<br />


