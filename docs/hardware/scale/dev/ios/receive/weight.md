<a name="D8Xcm"></a>
# 体重
当设备连接时， 体重数据会自动上报到sdk，数据包含了体重、身体阻抗值、测量事件信息， 您需要调用我们的算法API获得更多的分析结果：[https://docs.sghealth.cn/develop-cloud/algorithm/fat](https://docs.sghealth.cn/develop-cloud/algorithm/fat)

类名：LZA6MeasurementData

| utc | int | 测量时间，单位：s |
| --- | --- | --- |
| weightValue | double | 体重 |
| impedanceValue | double | 阻抗 |



![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616072648380-9fa34745-69ce-4f81-87bc-4b5ac6af45b4.png#averageHue=%23f6f6f6&height=2337&id=seqf6&name=image.png&originHeight=2337&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=634237&status=done&style=none&title=&width=1080)

