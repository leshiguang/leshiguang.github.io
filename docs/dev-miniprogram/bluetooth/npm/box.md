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
        "sg-skip": "^1.0.0"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const skip = require("sg-skip");
```

<a name="G7Gpg"></a>
## 3.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 体脂秤
const skip = require('sg-skip');

plugin.regist(skip);
```

<a name="aU86X"></a>
# 3、设置项

<a name="hcmIu"></a>
### 3.1 开始跳绳

控制体脂秤测量心率的开关<br />BeginToJumpSetting 的参数

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| jumpMode | number | 跳转模式<br /><br />///倒计时<br />0,<br />///到计数<br />1,<br />///自由模式<br />2,<br /> |
| settingContent | number | 倒计时跳:设置倒计时秒数; <br />倒计数跳:设置倒计次次数<br />自由模式: 无意义 |
| numberOfCountdown | number | 倒计秒数（s） 3-60s 如设置3则为3、2、1，开始跳 绳的倒计秒数 |
| utc | number | 时间戳 |


```javascript
// 体脂秤
const skip = require('sg-skip');
const plugin = require("sg-ble");

let setting = new skip.settingFactory.BeginToJumpSetting(jumpMode, settingContent, utc, countdown);

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```

<a name="YfJJu"></a>
### 3.2 结束跳绳

控制体脂秤单位的显示<br />EndToJumpSetting 无参数


```javascript
// 体脂秤
const skip = require('sg-skip');
const plugin = require("sg-ble");
EndToJumpSetting
let setting = new skip.settingFactory.EndToJumpSetting();

plugin.pushSetting(setting).then(() => {
    console.warn('设置成功');
})
```
<a name="ARSCR"></a>
# <br />

<a name="f4SA2"></a>
# 数据接收
<a name="t84yk"></a>
## 跳绳实时数据 MioJumpRealtimeData
| 字段 | 类型 | 含义 |
| --- | --- | --- |
| jumpMode | number | 跳绳模式<br />///倒计时<br />0,<br />///到计数<br />1,<br />///自由模式<br />2, |
| settingContent | number | 倒计时:倒计时秒数<br />倒计数:倒计次次数 |
| duration | number | 总时长 |
| count | number | 总次数 |
| groupCount | number | 绊绳次数最大为49次，跳绳组 数最大值为50;跳绳组数=绊 绳次数+1; 有绊绳后，会产生的多组跳 绳数据组数，若无绊绳，则 只有1组 |
| battery | number | 电量0-100 |
| validDuration | number | 有效时长 |
| freq | number | 频次 |


<a name="bcKiB"></a>
## 跳绳结果数据 MioJumpResultData
| 字段 | 类型 | 含义 |
| --- | --- | --- |
| type | number | 0-表示当前跳神的结果。 1-表示历史数据的结果 |
| utc | number | 测量时间 |
| jumpMode | number | 跳绳模式<br />///倒计时<br />0,<br />///到计数<br />1,<br />///自由模式<br />2, |
| settingContent | number | 倒计时:倒计时秒数<br />倒计数:倒计次次数 |
| duration | number | 总时长 |
| count | number | 总次数 |
| avgFreq | number | 平均频次 |
| maxFreq | number | 最大频次 |
| maxContinueCount | number | 最大连跳次数 |
| groupCount | number | 绊绳次数最大为49次，跳绳组 数最大值为50;跳绳组数=绊 绳次数+1; 有绊绳后，会产生的多组跳 绳数据组数，若无绊绳，则 只有1组 |
| list | JumpData[] | 数据格式如 {"time": 10, "count": 3 }  标识在time时间内，跳了count次 |

JumpData

| 字段 | 类型 | 含义 |
| --- | --- | --- |
| time | number | 时间 |
| count | number | 次数 |


