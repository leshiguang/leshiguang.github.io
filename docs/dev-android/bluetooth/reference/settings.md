<a name="fXayc"></a>
# 设置项
<a name="pQU7g"></a>
## 通用的设置接口
手环出厂会有默认的设置，如果需要修改默认的设置项，您可以调用以下接口：
```java
public void updateConfig(String mac, AbstractConfig config, Consumer<ConfigStatus> configStatusConsumer)
```

<br />请求参数：

| 参数 | 字段类型 | 描述 |
| --- | --- | --- |
| mac | String | 设备的mac地址 |
| config | AbstractConfig | 设置信息抽象类，具体实现需要参考不同设置项的定义 |
| configStatusConsumer | Consumer<ConfigStatus> | 设置状态的回调 |


<br />**ConfigStatus**

| DEEVICE_NOT_CONNECTED | 设备未连接 |
| --- | --- |
| DEVICEE_NOT_FOND | 设备未找到 |
| SETTING_TIMEOUT | 设置超时 |
| FAILED | 设置异常 |
| REEJCT_BY_PREEVIOUS | 已经有一个正在设置的设置项 |
| SUCCESS | 设置成功 |

_注意：由于蓝牙写数据通道的限制无法并发设置，每次只能更新单个设置项，回调成功后才能更新下一设置，您可能需要单独维护一份设置队列，并在收到设置成功信息后进行出队入队的操作_<br />_
<a name="pqpEW"></a>
## 

