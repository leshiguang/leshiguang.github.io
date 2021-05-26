<a name="o45NH"></a>
## 数据接口
**Url：域名+/api/datacenter/v1.0/getData**<br />请求方式：GET<br />
<br />入参（URL参数）：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| filterMap | Map | 筛选条件 | ​<br /> |
| bizCode | String | 业务code | 统一由乐智申请给到 |


<br />出参：

| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| ​<br /> | ​<br /> | ​<br /> |  |

示例返回报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{}
}


```

<br />注意：<br />数据中心接口统一是上面调用路径，不能数据通过bizCode和filterMap来获取不同的数据。

