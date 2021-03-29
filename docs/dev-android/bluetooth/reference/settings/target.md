<a name="fJg09"></a>
## 目标鼓励设置
目标鼓励设置是指向手环下发以“步数“、“距离“或“卡路里“中其中的一项的具体数量为目标的数据， 用户达成目标后，手环会震动提醒，手环开启默认鼓励为6000步的步数<br />![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616677281900-840224e3-1942-477c-8a6d-f9a205943952.png#align=left&display=inline&height=157&margin=%5Bobject%20Object%5D&name=image.png&originHeight=157&originWidth=846&size=9459&status=done&style=none&width=846)
<a name="ourMO"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.TargetEncourage

|  |  |  |
| --- | --- | --- |
| enable | boolean | 开关 |
| targetType | int | 目标类型（1、步数 2、卡路里 3、距离） |
| target | int | 目标值 <br />单位：(步数:步、卡路里：0.1KCal、距离：米 ） |

<a name="rucau"></a>
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
<a name="n2vLz"></a>
## 实现方案示例
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616677454961-83aac5af-0ae7-4b08-ba48-137b11fb1542.png#align=left&display=inline&height=269&margin=%5Bobject%20Object%5D&name=image.png&originHeight=269&originWidth=867&size=26823&status=done&style=none&width=867)<br />


