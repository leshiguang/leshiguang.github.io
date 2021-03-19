levelSet中，每一个值都代表一笔数据，每笔数据5分钟生成一次，它描述的是用户在5分钟内的身体活动水平，如翻身、侧卧、站立等。<br />类名：LZA5SleepData

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | UInt32 | 测量时间 |
| reside | UInt16 | 计步器中睡眠数据剩余条数 例如：547 表示设备中有547条数据未发送 |
| utcOffset | int | 每笔睡眠间隔 单位：s |
| levelSet | List<Integer> | 睡眠等级 _(0 ~ 127)_ |
| srcData | NSData | 原始睡眠2进制数据， 无需保存，可保留日志 |


<br />*注：您无法直接使用levelSet来解读睡眠状况，需要调用我们的算法API进行睡眠算法分析才可以得到睡眠结果：[https://docs.leshiguang.com/develop-cloud/algorithm/sleep](https://docs.leshiguang.com/develop-cloud/algorithm/sleep)<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616067436981-1517ae18-5fd7-4245-a1f4-1a675541445c.png#align=left&display=inline&height=448&margin=%5Bobject%20Object%5D&name=image.png&originHeight=476&originWidth=546&size=95820&status=done&style=none&width=514)<br />如您想结合睡眠做睡眠心率的解读， 您需要从心率测量数据中截取与睡眠时段相同的心率区间：<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616067623686-85712351-456b-4000-b004-7285f55bcf0a.png#align=left&display=inline&height=359&margin=%5Bobject%20Object%5D&name=image.png&originHeight=359&originWidth=544&size=74945&status=done&style=none&width=544)

