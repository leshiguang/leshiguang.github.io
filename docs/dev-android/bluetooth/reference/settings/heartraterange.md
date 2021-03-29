<a name="Gqwld"></a>
## 关于心率区间
心率区间指根据一定的规则将用户心率区间划分为3个阶段，分别对应中等强度（热身），较大强度（燃脂）和极限强度。<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616722995901-2400d283-aa9f-4484-bb54-a50636c39288.png#align=left&display=inline&height=227&margin=%5Bobject%20Object%5D&name=image.png&originHeight=227&originWidth=869&size=55805&status=done&style=none&width=869)
<a name="xc9id"></a>
## 应用场景


- 运动报告中统计用户运动各个阶段的运动状态
- 结合实时心率，实时显示用户当前所处的运动区间，控制运动的有效性
- 结合心率计算运动强度，给出疲劳度和恢复时间

![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616672206675-0d4fee14-3fd5-4ba7-b19b-3c0023abb78b.png#align=left&display=inline&height=522&margin=%5Bobject%20Object%5D&name=image.png&originHeight=522&originWidth=859&size=68948&status=done&style=none&width=859)

- <br />
<a name="cCqdJ"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.HeartRateRange<br />_通过用户年龄计算心率区间，push 心率区间到手环_

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| age | int | 年龄 |
| rangeILeft | int | 心率区间I下限 |
| rangeIRight | int | 心率区间I上限 |
| rangeIILeft | int | 心率区间II下限 |
| rangeIIRight | int | 心率区间II上限 |
| rangeIIILeft | int | 心率区间III下限 |
| rangeIIIRight | int | 心率区间III上限 |

<a name="LMcOt"></a>
## 心率区间计算方式
三个心率区间计算方式：<br />最大心率：220 - 年龄 <br />热身心率区间下限：最大心率 * 0.64;<br />燃脂心率区间下限：最大心率 * 0.76;<br />极限心率区间下限： 最大心率 * 0.96;
<a name="dy0zs"></a>
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



