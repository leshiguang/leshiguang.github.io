<a name="fJg09"></a>
## 目标鼓励设置
目标鼓励设置是指向手环下发以“步数“、“距离“、“卡路里“、“深睡眠”、“站立时长”、“运动时长”中其中的一项的具体数量为目标的数据， 用户达成目标后，手环会震动提醒，不同手环默认的默认鼓励为6000或7000步的步数<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616677281900-840224e3-1942-477c-8a6d-f9a205943952.png#crop=0&crop=0&crop=1&crop=1&height=157&id=ePBZG&margin=%5Bobject%20Object%5D&name=image.png&originHeight=157&originWidth=846&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9459&status=done&style=none&title=&width=846)<br />支持的设备：乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S、乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6。不同手环支持的目标总类不同，下表是具体的支持项：

| 手环型号 | 目标类型 |
| --- | --- |
| 乐心手环Mambo3、乐心手环MamboHR2、乐心手环Mambo5、乐心手环Mambo5S | 步数、卡路里、距离 |
| 乐心手环Mambo Watch1、乐心手环Mambo Watch2、乐心手环HR6 | 步数、卡路里、距离、深睡时长、站立时长、运动时长 |


<a name="dG1Tn"></a>
## 应用场景
当用户需要设定达成目标提醒时
<a name="ourMO"></a>
## 数据类型
类名：com.lifesense.android.ble.device.band.model.config.TargetEncourage

|  |  |  |
| --- | --- | --- |
| enable | boolean | 开关 |
| targetType | int | 目标类型（1、步数 2、卡路里 3、距离）4、深睡眠、5站立时长（小时）、6、运动时长（分钟） |
| target | int | 目标值 <br />单位：(步数:步、卡路里：0.1KCal、距离：米 ） |

<a name="rucau"></a>
## 调用示例
```java
TargetEncourage targetEncourage = new TargetEncourage();
targetEncourage.setEnable(true);
targetEncourage.setTargetType(1);
targetEncourage.setTarget(10000);

BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), targetEncourage, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
                    //do something
                }
            }
}  )  ;
```
<a name="n2vLz"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616677454961-83aac5af-0ae7-4b08-ba48-137b11fb1542.png#crop=0&crop=0&crop=1&crop=1&height=269&id=qw9Fp&margin=%5Bobject%20Object%5D&name=image.png&originHeight=269&originWidth=867&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26823&status=done&style=none&title=&width=867)


