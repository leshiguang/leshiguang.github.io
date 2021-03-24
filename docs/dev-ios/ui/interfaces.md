<a name="RaC4u"></a>
## 内置页面打开方式
```objectivec
/// 直接跳转某页面，会获取到最近的navigationController push
/// @param page 页面类型
+ (void)openPage:(LSPage)page;

/// 通过页面类型获取到对应的viewController
/// @param page 页面类型
+ (UIViewController *)viewControllerWithPage:(LSPage)page;
```

- 参数
| 类型 | Names | 说明 |
| --- | --- | --- |
| LSPage | page | /// 步数页面<br />    LSPageStep,<br />    /// 血压页面<br />    LSPageBloodPressure,<br />    /// 心率<br />    LSPageHr,<br />    /// 体重<br />    LSPageWeight,<br />    /// 睡眠<br />    LSPageSleep,<br />    /// 设备列表<br />    LSPageDeviceList |

<a name="QE8d4"></a>
### 
<a name="kZ64y"></a>
## 监听数据的接收
```objectivec
- (void)addDelegate {
	[LSBluetoothUI addDelegate:self];
}

#pragma mark - LSDeviceManagerDelegate
- (void)deviceDidReceiveMeasurementDatas:(NSArray<__kindof LSReceiveData *> *)measurementDatas dataType:(LSMeasurementDataType)dataType {
    if (dataType == LSMeasurementDataTypeWeight) {
        NSLog(@"体重数据");
    }
    NSLog(@"receiveData %@", measurementDatas);
}

```



