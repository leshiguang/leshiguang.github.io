<a name="xR8OL"></a>
# 1 计算晨脉
```
POST /api/algorithm/heartrate/v1.0/calculateSilentHeartrate
```
<a name="yf5Tr"></a>
##### 入参： 
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| sleepHeartRates | ​<br /> | 睡眠期间心率值 | 16进制 |

<a name="dhSVD"></a>
###### 示例报文：
```sql
{
  "sleepHeartRates" :  "3f3e38383a3a3b3a3b3c3d3e3d3b3b3b3c3e403e403d3d3b3d3e414141414141413b3b3b3b3b3b3d3c383b3b3a3a3838383838383838383a3a3a3b003939393739393a3b39000000003a38383d3a383836363a3c3e4253" 
}
```

