<a name="739DD"></a>
# 功能描述
App发送读取血糖历史记录的指令

<a name="Vllul"></a>
# 数据类型
LZGLReadRecord 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| count | NSUInteger | 条数  0 表示所有 (  < 100)<br /> |


<a name="ioHno"></a>
## 调用示例：
```objectivec
LZGLReadRecord *temp = [LZGLReadRecord new];
temp.count = 10;
[self.deviceManager sendDataModel:temp macString:self.device.mac completion:^(LZBluetoothErrorCode result, id resp) {
        dispatch_async(dispatch_get_main_queue(), ^{
            if (result == LZBluetoothErrorCodeSuccess) {
                NSLog(@"成功");
            } else {
                NSLog(@"失败");
            }
        });
    }];
```


