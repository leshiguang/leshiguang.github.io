在设备进行初始化时， 您已经设置了数据接收的代理LZDeviceDelegate，它包含几个回调方法：

| 方法 | 触发场景 | 描述 |
| --- | --- | --- |
| didReceiveMeasurementData | 设备连接成功有测量数据上报时 | 收到测量数据 |
| deviceDidUpdateConnectStatus | 设备连接状态发生变化时 | 收到连接状态 |
| deviceDidUpdateBatteryStatus | 主动请求设备电量或电量发生变化时 | 收到电量百分比 |
| deviceDidReadyToReceiveData | 连接成功时 | 准备接收数据 |


<br />didReceiveMeasurementData方法将用于接收设备上传上来的测量数据，参数类型为实现了LZMeasurementDataProtocol协议的类， 您需要通过判断它的具体类型来区分是何种类型的数据，具体数据类型和实例对照表：

| 类名 | 含义 | 场景 |
| --- | --- | --- |
| LZA5RunCaloriesData | 卡路里数据 | 运动结束时， 上报的运动卡路里数据， 1分钟一笔 |
| LZA5TimeContentData | 日常监测的步数数据 | 步数发生变化或每小时的59分59秒上报的当日或历史某天的总步数数据 |
| LZA5HeartRateData | 心率数据 | 按照type类型区分的1秒一笔的实时心率数据、1分钟一笔的运动心率数据和5分钟一笔的日常监测心率数据 |
| LZA5HeatrateSectionData |  心率区间数据 | 统计当天用户处于低强度、中强度、高强度的心率区间时长，需要先设定三区间才能产生 |
| LZA5SleepData | 睡眠数据 | 5分钟一笔的睡眠原始数据， 描述的是5分钟内用户的身体活动情况， 比如翻身、侧卧等， 需要结合算法分析出睡眠结果 |
| LZA5SportPaceData | 配速 | 1分钟一笔的运动配速数据， 描述_跑完1KM需要多长时间，精确到秒_ |
| LZA5SportStatusData | 运动状态 | 手环上报的当前运动的状态， 用于和app做一些运动状态的同步， 比如gps采集的开关 |
| LZA5TimeStateData | 运动报告 | 运动结束是产生的运动报告数据， 描述时长、状态、配速、心率、步数、步频等， 不同运动模式产生的数据项可能不同 |
| LZA6BpMeasurementData | 血压数据 | 血压仪上报的血压数据， 包括收缩压、舒张压、心率等 |
| LZA6MeasurementData | 体重数据 | 体脂秤上报的体重、阻抗值数据， 需要结合用户的个人心率调用体重算法API得到更多分析结果 |


<br />接口实现示例：
```objectivec

- (void)device:(id<LZDeviceProtocol>)device didReceiveMeasurementData:(id<LZMeasurementDataProtocol>)measurementData {
    NSLog(@"%@ 收到测量数据 %@", device.mac, measurementData);
    
}

- (void)deviceDidUpdateConnectStatus:(id<LZDeviceProtocol>)device {
    NSLog(@"连接状态发生变化 %ld", device.connectStatus);
}

- (void)deviceDidUpdateBatteryStatus:(id<LZDeviceProtocol>)device {
    NSLog(@"%@ 收到电量 %@", device.mac, [device.batteryInfo yy_modelToJSONString]);
}

- (void)deviceDidReadyToReceiveData:(id<LZDeviceProtocol>)device {
    NSLog(@"%@ 开始准备接受", device.mac);
}

```



