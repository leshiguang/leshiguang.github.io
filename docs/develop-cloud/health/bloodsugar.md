<a name="2xtIV"></a>
## 1.1 **获取最近一条血糖数据**
**Url：域名+/bloodsugar-rest/api/bs/v1.0/getLastRecord**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 第三方Id | 必填 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| **measurementDate** | Long | **测量时间** |  |
| **glucoseConcentration** | double | **血糖浓度** |  |
| **mealPeroid** | int | 是否有数据 | **用餐状态（0：空腹；1：早餐后；2：午餐前；3：午餐后；4：晚餐前；5：晚餐后；6：睡前； 国际版（8:空腹，9:随机时间，10:饭后2小时）；11、凌晨，12、餐前，13、餐后2小时，14、运动前，15、运动后，16、随机"** |
| **userNo** | int | **绑定键序列** |  |
| **level** | int | **血糖水平:(高血糖:4，偏高:3，正常:2，偏低:1，低血糖:0)** |  |
| levelName | String | **血糖水平对应的名称** |  |


<br />示例返回报文：
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
       
        "measurementDate": 1596701760000,
        "glucoseConcentration": 17.0,
        "mealPeroid": 13,
        "userNo": 0,
        "level": 4,
        "mealPeroidName": "餐后2小时",
        "levelName": "超高血糖"
    }
}
```


<a name="sKr0F"></a>
## 1.2 **查询血糖数据历史记录**
**Url：域名+**bloodsugar-rest/api/bs/v1.0/getBsHisRecords**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 第三方Id | 必填 |
| queryTime | long | 查询的最后一条记录时间（分页使用） |  |
| size | int | 每页大小 | 0-100之间 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| userId | long | **对应乐心用户id** |  |
| **level** | int | **血糖水平:(高血糖:4，偏高:3，正常:2，偏低:1，低血糖:0)** |  |
| levelName | string | **血糖水平对应的名称** |  |
| **mealPeroid** | int | 是否有数据 | **用餐状态（0：空腹；1：早餐后；2：午餐前；3：午餐后；4：晚餐前；5：晚餐后；6：睡前； 国际版（8:空腹，9:随机时间，10:饭后2小时）；11、凌晨，12、餐前，13、餐后2小时，14、运动前，15、运动后，16、随机"** |
| **glucoseConcentration** | double | **血糖浓度** |  |
| **measurementDate** | Long | **测量时间** |  |


<br />示例返回报文：
```json
{
    "code": 200,
    "msg": "成功",
    "data": [
        {
            "userId": 23341064,
            "level": 4,
            "levelName": "超高血糖",
            "mealPeroid": 13,
            "glucoseConcentration": 24.3,
            "measurementDate": 1588157640000,
            "mealPeroidName": "餐后2小时"
        },
        {
            "userId": 23341064,
            "level": 4,
            "levelName": "超高血糖",
            "mealPeroid": 0,
            "glucoseConcentration": 20.3,
            "measurementDate": 1588147740000,
            "mealPeroidName": "空腹",
        }
      .......
    ]
}
```

