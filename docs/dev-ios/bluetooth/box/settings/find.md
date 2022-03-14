<a name="739DD"></a>
# 功能描述
查找药盒，发送此命令后，药盒会发出“滴”的声音

<a name="Vllul"></a>
# 数据类型
LZMcuFindBoxSetting 没有参数


<a name="q7qkh"></a>
## 调用示例：
```objectivec
LZMcuFindBoxSetting *temp = [LZMcuFindBoxSetting new];
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

