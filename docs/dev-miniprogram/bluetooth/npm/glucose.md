<a name="JO0ZI"></a>
# 1、版本更新日志
参考 [https://www.npmjs.com/package/sg-glucose](https://www.npmjs.com/package/sg-glucose)

<a name="j2iJp"></a>
# 2、模块使用说明

<a name="Haub0"></a>
## 2.1 package声明

在package.json中声明sg-ble的引用

```json
{
    "dependencies": {
        "sg-ble": "^2.1.10",	
        "sg-glucose": "^1.0.0"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const glucose = require("sg-glucose");
```

<a name="G7Gpg"></a>
## 3.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 血糖库
const glucose = require('sg-glucose');

plugin.regist(glucose);
```

<a name="aU86X"></a>
# 3、设置项

<a name="hcmIu"></a>
### 3.1 读取数据

读取当前历史数据

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| count | number | 取值0～100<br />0表示读取全部<br />其他值表示取多少个数<br /> |


```javascript
// 血糖
const glucose = require('sg-glucose');
const plugin = require("sg-ble");

let setting = new glucose.settingFactory.ReadHistoryData(count);

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})


```

<a name="f4SA2"></a>
# 数据接收
<a name="t84yk"></a>
## 历史血糖数据 HistoryRecord

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| list | RecordInfo[] | 历史数据列表 |
| dataType | string | 固定值：GLHistoryData |


RecordInfo的数据结构

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| glucose | number | 血糖 (单位 mmol) |
| value | number | 测量值 |
| utc | number | 时间戳 |
| sample | number | 样本， 0x11 为血液 0x22 为质控液 |
| dinnerState | number | 餐前餐后状态 0x00 无状态 0x11 FPG（餐前） 0x22 PPG（餐后） |



<a name="bcKiB"></a>
## 实时血糖数据 Record
| 字段 | 类型 | 含义 |
| --- | --- | --- |
| dataType | string | 固定值：GLRealtimeData |
| glucose | number | 血糖 (单位 mmol) |
| state | enum State {<br />  last = 0x10,<br />  testPape = 0x11,<br />  waitBlood = 0x22,<br />  alread = 0x33,<br />  result = 0x44,<br />  warn = 0x55,<br />} | <br /><br />last 表示上一笔<br />testPage 表示显示去测试<br />alread 表示已经完成<br />result 表示结果<br />warn 表示错误<br /> |
| value | number | 测量值 |
| errCode | number | 错误码 |
| sample | number |  样本， 0x11 为血液 0x22 为质控液 |




