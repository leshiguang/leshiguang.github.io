<a name="739DD"></a>
# 功能描述
App发送删除历史数据的指令（只有删除一条和全部）

<a name="Vllul"></a>
# 数据类型
LZGLDeleteSetting 配置网络

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| isAll | BOOL | 是否删除全部 |


<a name="ioHno"></a>
## 调用示例：
```objectivec
LZGLDeleteSetting *temp = [LZGLDeleteSetting new];
temp.isAll = YES;
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


