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
        "sg-bloodpressure": "^1.0.0"
    }
}
```

<a name="N9RDV"></a>
## 2.2 模块引入

```javascript
const bloodpressure = require("sg-bloodpressure");
```

<a name="G7Gpg"></a>
## 2.3 模块注册支持的设备模块

```javascript
const plugin = require("sg-ble");

// 体脂秤
const bloodpressure = require('sg-bloodpressure');

plugin.regist(bloodpressure);
```

<a name="f4SA2"></a>
# 3、数据接收
<a name="t84yk"></a>
## 血压数据 BPData
| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| utc | number | 测量时间,单位：秒 |
| unit | number | _单位 0:mmHg 1:Kpa_ |
| systolic | number | 高压数据，以mmHg上传，根据unit flag的定义进行显示 |
| diastolic | number | 低压数据，以mmHg上传，根据unit flag的定义进行显示 |
| meanPressure | number | 平均值数据，以mmHg上传，根据unit flag的定义进行显示 |
| irregularPulseDetection | boolean |  0:未检测到心率不齐 1:检测到心率不齐 |
| pulseRate | int | 脉搏数据 |


