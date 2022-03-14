<a name="739DD"></a>
# 功能描述
同步药盒的数据

<a name="Vllul"></a>
# 数据类型
LZMcuSyncData 没有参数


<a name="NCJAa"></a>
## 配置网络

调用示例：
```objectivec
LZMcuSyncData *temp = [LZMcuSyncData new];
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

