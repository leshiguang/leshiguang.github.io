在设备进行初始化时， 您已经设置了数据接收的代理LZDeviceDelegate，它包含几个回调方法：

| 方法 | 触发场景 | 描述 |
| --- | --- | --- |
| device:didReceiveMeasurementData: | 设备连接成功有测量数据上报时 | 收到测量数据 |
| deviceDidUpdateConnectStatus | 设备连接状态发生变化时 | 收到连接状态 |
| deviceDidUpdateBatteryStatus | 主动请求设备电量或电量发生变化时 | 收到电量百分比 |
| deviceDidReadyToReceiveData | 连接成功时 | 准备接收数据 |


```objectivec

- (void)setDelegate {
       id<LZDeviceManagerProtocol> deviceManager = [LZBluetooth getDeviceManagerWithDeviceTypes:@[
        @(LZDeviceTypeBracelet),
        @(LZDeviceTypeScale),
        @(LZDeviceTypeBloodPressure),
        @(LZDeviceTypeMio),
        @(LZDeviceTypeMcu)
    ]];
    deviceManager.delegate = self;
}

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

