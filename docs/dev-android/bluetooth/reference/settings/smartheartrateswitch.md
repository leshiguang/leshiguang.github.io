<a name="S8OXJ"></a>
## 关于智能心率开关
智能心率开关是心率开关的升级版本，弥补了续航上的不足， 它可以有效识别出用户未佩戴或未正常佩戴的场景（比如放置在桌子上），当出现未佩戴的情况时， 绿灯会熄灭，从而增加手环的续航能力（默认心率开启的情况下续航约为5天， 心率关闭的情况下续航约为20天）
<a name="uUrvr"></a>
## 默认选项
默认开启智能监测
<a name="XZnZG"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.HeartRateSmartSwitch

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| mode | Mode | 监测模式 |

Mode：

| 类型 | 值 | 含义 |
| --- | --- | --- |
| CLOSE | 0 | 关闭心率监测 |
| ENABLE | 1 | 打开心率监测 |
| SMART | 2 | 打开智能心率监测 |

![image.png](https://cdn.nlark.com/yuque/0/2021/png/354855/1616730856850-34f5defa-aac4-476a-af93-095137fea0fc.png#align=left&display=inline&height=291&margin=%5Bobject%20Object%5D&name=image.png&originHeight=291&originWidth=746&size=246751&status=done&style=none&width=746)
<a name="5Ji9H"></a>
## 调用示例
```java
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), dialPlate, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    ConfigsRepository.saveConfig(deviceInfo.getValue().getMac(),config);
                }
                ConfigViewModel.this.configStatus.postValue(configStatus);
            }
}  )  ;
```
<a name="HUAUU"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616672076699-25371ef6-8977-41b5-be96-8ba6037a0b66.png#align=left&display=inline&height=284&margin=%5Bobject%20Object%5D&name=image.png&originHeight=284&originWidth=866&size=13076&status=done&style=none&width=866)<br />
<br />


