<a name="HbYuO"></a>
# 心率
- 心率数据有三种类型， 您需要根据measurementDataType去区分不同类型，它的值分别表示为：

LZBraceletMeasurementDataTypeHeartRate:  一般心率，手环5分钟上报一笔<br />LZBraceletMeasurementDataTypeRealTimeHR:  实时心率，sdk开启定时线程， 每间隔1秒去读取手环上的心率数据并产生回调<br />LZBraceletMeasurementDataTypeSportHeartRate: 运动心率， 运动结束时， 上报运动报告后上报的心率数据， 1分钟产生一笔

- heartRates集合中的每个值均表示一段时间的心率数据， 时间偏移量您可以通过utcOffset区分， 也可以根据心率类型type来区分。
- 心率的最高、最低值需要您自己来计算


<br />类名：LZA5HeartRateData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | UInt32 | 测量时间 |
| sportMode | LZA5SportMode | 运动模式（见公共数据类型运动模式） |
| subMode | LZA5SportSubMode | 运动子模式（0, 手动 1 自动识别  2 轨迹跑，有gps确认通知 3 轨迹跑，无gps确认通知） |
| reside | int | 设备剩余心率的个数 |
| utcOffSet | int | 每笔心率值间隔 单位：s |
| heartRates | List<Integer> | 心率值， 每笔间隔为 utcOffset |
| reside | UInt16 | 手环中的剩余条数 |
| measurementDataType | LZMeasurementDataType | 测量数据类型 |


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

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616068596015-7e08e9cd-81a1-4fd3-930d-74a130713680.png#align=left&display=inline&height=801&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2337&originWidth=1080&size=514965&status=done&style=none&width=370)![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616068610894-ff7c1e08-e457-4d51-a42a-0ca9830c9e97.png#align=left&display=inline&height=796&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2337&originWidth=1080&size=618585&status=done&style=none&width=368)<br />以下情况将不会产生心率数据：<br />1、电量耗尽或低电量<br />2、心率开关为关闭状态<br />3、未正确佩戴<br />4、手环背部绿灯损坏

以下情况将会产生错误的心率数据：<br />1、将手环放置在底部为白色的桌面<br />2、将手环套在柱状（如酒瓶）且对光的反射性好的物体上<br />
<br />
<br />


