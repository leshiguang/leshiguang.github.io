<a name="VyEGf"></a>
## 开启实时心率
开启实时心率，可以实时的收到当前测得的心率，接口如下：
```objectivec
- (void)startReadRealTimeHRWithMacString:(NSString *)macString
                                callback:(LZDeviceHandlerCompletion)callback;
```
**请求参数：**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| macString | NSString | 设备mac地址 |
| callback | void(^LZDeviceHandlerCompletion)(LZBluetoothErrorCode errorCode) | 回调错误码 |

**回调成功后，实时心率会通过如下代理回调：**<br />如果有实时心率更新，通过 LZDeviceDelegate device:didReceiveMeasurementData: 通知更新 
<a name="1XoV3"></a>
## 关闭实时心率
```objectivec
- (void)stopReadRealTimeHRWithMacString:(NSString *)macString
                               callback:(LZDeviceHandlerCompletion)callback;
```
**请求参数：**

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| macString | NSString | 设备mac地址 |
| callback | void(^LZDeviceHandlerCompletion)(LZBluetoothErrorCode errorCode) | 回调错误码 |




