<a name="oc1Ss"></a>
# 数据接收
在对SDK进行初始化时， 您已经注册了数据接收者对象：
```java
   Consumer<List<AbstractMeasureData>> receiver = new Consumer<List<AbstractMeasureData>>() {
       @Override
       public void accept(List<AbstractMeasureData> abstractMeasureData) {
           Log.i("Data", JSON.toJSONString(abstractMeasureData));
       }
   };
   BleDeviceManager.getDefaultManager().init(this, APP_ID,PreferenceStorage.getBondedMac(),receiver);

```
该对象的accept方法将用于接收设备上传上来的测量数据，参数类型为List<AbstractMeasureData>， 他描述的时设备上报上来的测量数据列表， 目前在实际编程过程中，所有的数据类型均取第一个值， 即abstractMeasureData.get(0), 就可以获得具体的测量数据， 您需要通过判断AbstractMeasureData的具体类型来区分是何种类型的数据，具体数据类型和实例对照表：

| 类名 | 含义 | 场景 |
| --- | --- | --- |
| com.lifesense.android.ble.core.application.model.Calorie     | 卡路里数据 | 运动结束时， 上报的运动卡路里数据， 1分钟一笔 |
| com.lifesense.android.ble.core.application.model.DailyMeasureData | 日常监测的步数数据 | 步数发生变化或每小时的59分59秒上报的当日或历史某天的总步数数据 |
| com.lifesense.android.ble.core.application.model.HeartRate | 心率数据 | 按照type类型区分的1秒一笔的实时心率数据、1分钟一笔的运动心率数据和5分钟一笔的日常监测心率数据 |
| com.lifesense.android.ble.core.application.model.HeartRateStatistic |  心率区间数据 | 统计当天用户处于低强度、中强度、高强度的心率区间时长，需要先设定三区间才能产生 |
| com.lifesense.android.ble.core.application.model.Sleep | 睡眠数据 | 5分钟一笔的睡眠原始数据， 描述的是5分钟内用户的身体活动情况， 比如翻身、侧卧等， 需要结合算法分析出睡眠结果 |
| com.lifesense.android.ble.core.application.model.Speed | 配速 | 1分钟一笔的运动配速数据， 描述_跑完1KM需要多长时间，精确到秒_ |
| com.lifesense.android.ble.core.application.model.SportNotify | 运动状态 | 手环上报的当前运动的状态， 用于和app做一些运动状态的同步， 比如gps采集的开关 |
| com.lifesense.android.ble.core.application.model.SportReport | 运动报告 | 运动结束是产生的运动报告数据， 描述时长、状态、配速、心率、步数、步频等， 不同运动模式产生的数据项可能不同 |
| com.lifesense.android.ble.core.application.model.BloodPressureMeasureData | 血压数据 | 血压仪上报的血压数据， 包括收缩压、舒张压、心率等 |
| com.lifesense.android.ble.core.application.model.WeightMeasureData | 体重数据 | 体脂秤上报的体重、阻抗值数据， 需要结合用户的个人心率调用体重算法API得到更多分析结果 |


