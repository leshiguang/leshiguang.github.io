<a name="JO0ZI"></a>
# 1、版本更新日志

<a name="p0Zj5"></a>
### 1.0.0

- 对应插件1.0.15版本拆出来的模块

<a name="j2iJp"></a>
# 2、模块使用说明

<a name="Haub0"></a>
## 2.1 package声明

在package.json中声明sg-ble的引用

```json
{
    "dependencies": {
        "sg-ble": "^2.0.2",	
        "sg-box": "^1.0.0"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const box = require("sg-box");
```

<a name="G7Gpg"></a>
## 3.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 药盒
const box = require('sg-box');

plugin.regist(box);
```

<a name="aU86X"></a>
# 3、设置项
<a name="hcmIu"></a>
### 3.1 同步数据
拉取数据<br />SyncBoxData 没有参数

```javascript
// 体脂秤
const box = require('sg-box');
const plugin = require("sg-ble");

let setting = new box.settingFactory.SyncBoxData(enable);

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```
<a name="fMzYG"></a>
### 
<a name="qElwQ"></a>
### 3.2 搜索药盒
拉取数据<br />FindBox 没有参数

```javascript
// 体脂秤
const box = require('sg-box');
const plugin = require("sg-ble");

let setting = new box.settingFactory.FindBox();

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```

<a name="wXRIe"></a>
### 3.3 定时
拉取数据<br />BoxTiming 参数

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| times | Time[] | 事件列表 |
| index | number | 药盒序号 |

Time 参数

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| hour | Time[] | 时 |
| min | number | 分 |
| sec | number | 秒 |
| weeks | Week[] | 星期<br />export const enum Week {<br />MON = 0x01,<br />TUES = 0x02,<br />WED = 0x04,<br />THUR = 0x08,<br />FRI = 0x10,<br />SAT = 0x20,<br />SUN = 0x40<br />} |


```javascript
// 体脂秤
const box = require('sg-box');
const plugin = require("sg-ble");

let time = {
  hour: 8,
  min: 0,
  sec: 0,
  weeks: [1, 2, 4]
}
let index = 1;
let setting = new box.settingFactory.BoxTiming(index, [time]);

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```

<a name="f4SA2"></a>
# 4、数据接收
<a name="RXGgo"></a>
### 用药数据 SyncBoxDataResult 的数据结构
| 属性 | 类型 | 说明 |
| --- | --- | --- |
| boxDatas | BoxData[] | 剩余测量数据条数 |
| size | number | 总个数 |
| dataType | String | 固定值为 SyncBoxData |

BoxData 的数据结构

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| cellIndex | number | 编号 |
| size | number | 总条数 |
| status | number | 用药状态 已服 0x01 未服 0x02 |
| utc | number | 时间戳 |



