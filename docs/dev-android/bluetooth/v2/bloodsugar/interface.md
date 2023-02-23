类：com.lifesense.android.ble.device.bloodsugar.BloodSugar
<a name="cXt4e"></a>
## 同步数据
部分手环和手表需要主动调用该接口来获取数据
```java
public public void syncData(String mac, SynchronizeData synchronizeData)
```
参数说明：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| mac | String | mac地址 |
| synchronizeData | SynchronizeData | 同步数据类 |

SynchronizeData：

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| count | int | 条数  0 表示所有 (  < 100) |


