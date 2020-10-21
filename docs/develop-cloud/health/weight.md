<a name="HFnwp"></a>
# 1. 新体重首页接口
url :  域名 +  /weight-rest/weightRecord/getHomeRecord<br />method: get
<a name="fKMqT"></a>
##### 入参：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |

<a name="WjtLg"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| userInfo | Object | 用户信息 |  |
| bindBodyFatScale | boolean | 是否绑定体脂秤 |  |
| sampleData | boolean | 是否示例数据 |  |
| haveNewWeightRecord | boolean | 家人是否有新数据未读 |  |
| lastWeightRecord | Object | 最新一条体重数据 | 详情见：[链接](#we37g) |
| lineChartsRecords | Object | 趋势图数据 | 详情见：[链接](#dJHg3) |
| weightTargetInfo | Object | 目标体重数据 | 详情见：[链接](#22dDT) |
| healthLabelList | List<Object> | 风险解读标签 | 详情见：[链接](#dN1MO) |
|  |  |  |  |

<a name="we37g"></a>
###### 用户信息：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| userName | String | 用户名称 |  |
| headImg | String | 用户头像 |  |
| unit | Integer | 单位 | 1-kg;<br />2-斤;<br />3-磅;<br />4-英石 |

<a name="LyuD0"></a>
###### lastWeightRecord(最新体重数据)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 主键id |  |
| measurementDate | Date | 测量时间 |  |
| bmiInfo | Object | bmi数据信息 | 见：indexInfo |
| weightInfo | Object | 体重数据信息 |  |
| pbfInfo | Object | 脂肪率数据信息 |  |

indexInfo:

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| indexName | String | 标签名称 |
| indexValue | Double | 标签值 |
| indexUnit | String | 单位名称 |
| indexLevelName | String | 等级名称 |

<a name="dJHg3"></a>
###### lineChartsRecords(趋势图数据)：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| weightList | List<Obj> | 体重列表 | 见SingleRecordInfo |
| pbfList | List<Obj> | 脂肪率列表 |  |
| bodyRoundList | List<Obj> | 体围列表 |  |
| lastBodyRoundRecord | Object | 最新一条体围数据 | 见体围信息 |

singleRecordInfo：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| value | String | 标签值 |
| unitName | string | 单位 |
| measurementDate | Date | 测量时间 |

体围信息：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| waistHipRate | String | 腰臀比 |
| scoreContent | string | 得分文案 |
| measurementDate | Date | 测量时间 |

<a name="22dDT"></a>
###### weightTargetInfo(体重目标)：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| targetWeight | Double | 体重目标 |  |
| targetText | String | 目标文案 |  |
| percent | Double | 完成百分比 |  |
| percentLevel | Integer | 完成百分比等级 | **1-**( 0, 1),<br />**2-**(1, 29),<br />**3-**(30, 80),<br />**4-**(81, 99),<br />**5-**(100, 100) |
| targetType | Integer | 目标类型 | 1-减肥<br />2-增肥 |
| startTime | Date | 目标开始时间 |  |

<a name="Guqwq"></a>
###### healthLabelList(风险解读标签)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| healthLabelName | String | 健康风险标签名 |  |
| healthContent | String | 健康风险解读 |  |
| indexList | List<Object> | 风险对应标签对象 |  |

<a name="dN1MO"></a>
###### indexList(风险对应标签对象)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexName | String | 标签名称 |  |
| indexValue | BigDecimal | 标签值 |  |
| indexUnit | String | 单位 |  |
| indexLevel | String | 指标等级 |  |

<a name="8sj7A"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"lastWeightRecord":{
			"id":"3a46098572724f62b1b49e813078e61f",
			"measurementDate":1599638918000,
			"bmiInfo":{
				"indexName":"BMI",
				"indexValue":23.6,
				"indexUnit":"",
				"indexLevelName":"理想"
			},
			"weightInfo":{
				"indexName":"体重",
				"indexValue":66.6,
				"indexUnit":"kg"
			},
			"pbfInfo":{
				"indexName":"体脂率",
				"indexValue":17.2,
				"indexUnit":"%",
				"indexLevelName":"理想"
			}
		},
		"lineChartsRecords":{
			"weightList":[
				{
					"value":66.8,
					"unitName":"kg",
					"measurementDate":1596070685000
				},
				{
					"value":66,
					"unitName":"kg",
					"measurementDate":1596157756000
				},
				{
					"value":65.7,
					"unitName":"kg",
					"measurementDate":1596762501000
				},
				{
					"value":62.8,
					"unitName":"kg",
					"measurementDate":1598956071000
				},
				{
					"value":66.4,
					"unitName":"kg",
					"measurementDate":1599009230000
				},
				{
					"value":67,
					"unitName":"kg",
					"measurementDate":1599445006000
				},
				{
					"value":66.6,
					"unitName":"kg",
					"measurementDate":1599638918000
				}
			],
			"pbfList":[
				{
					"value":16.9,
					"unitName":"%",
					"measurementDate":1592403940000
				},
				{
					"value":17.2,
					"unitName":"%",
					"measurementDate":1592873845000
				},
				{
					"value":19.9,
					"unitName":"%",
					"measurementDate":1594913938000
				},
				{
					"value":14.7,
					"unitName":"%",
					"measurementDate":1595764697000
				},
				{
					"value":14.7,
					"unitName":"%",
					"measurementDate":1595865058000
				},
				{
					"value":17.3,
					"unitName":"%",
					"measurementDate":1595865738000
				},
				{
					"value":17.2,
					"unitName":"%",
					"measurementDate":1599638918000
				}
			],
			"bodyRoundList":[
			],
			"lastBodyRoundRecord":{
				"id":303326,
				"userId":23412531,
				"calInfo":"24,1,1.68",
				"measurementDate":1599639940000,
				"deleted":0,
				"waistHipRate":1.01,
				"waistCircumference":80.2,
				"hipCircumference":79.1,
				"chestCircumference":81.6,
				"armCircumference":24.2,
				"thighCircumference":49.2,
				"calfCircumference":32.1,
				"score":0,
				"scoreContent":"差",
				"beatPercent":0,
				"age":0,
				"sex":0,
				"height":0
			}
		},
		"weightTargetInfo":{
			"targetWeight":62.7,
			"targetText":"加油，别松懈哦",
			"percent":0,
			"percentLevel":1,
			"targetType":1,
			"startTime":1596470400000
		},
		"healthLabelList":[
			{
				"healthLabelName":"中心型肥胖",
				"healthContent":"肥胖不止影响体型，还会影响您的健康！世界卫生组织已将肥胖列为导致疾病负担的十大危险因素之一。\n\n若脂肪主要在腹壁和腹腔内蓄积过多，则被称为\"中心型肥胖\"，具有更高的疾病风险。一般成人达到以下任一标准即可推断为中心型肥胖。\n1.腰围：男性≥85cm，女性≥80cm；\n2.腰臀比（腰围/臀围）:男性>0.9，女性>0.8；\n\n对肥胖人群而言：\n1.出现2型糖尿病、心血管病、高血压、中风和多种癌症的风险概率远高于一般健康人群；\n2.由于过多的脂肪在肝细胞内沉积，易形成脂肪肝；\n3.易出现睡眠中重度打鼾，可能引发睡眠呼吸暂停综合征；\n4.同时还易出现骨关节病、胆囊疾病等多种疾病。",
				"indexList":[
					{
						"indexName":"腰臀比",
						"indexValue":1
					},
					{
						"indexName":"腰围",
						"indexValue":80.2,
						"indexUnit":"cm"
					}
				]
			}
		],
		"sampleData":false,
		"bindBodyFatScale":true,
		"haveNewWeightRecord":false,
		"userInfo":{
			"userId":23412531,
			"headImg":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLdjibSZBoU4bsB2g6qdM8nSbD4Y05uNyLkAJaoToFzsribYAvrbcauWtDztdeRwhicZicpQFWW5ftd2w/132",
			"userName":"test.",
			"sex":1,
			"birthday":816537600000,
			"height":168,
			"unit":1
		}
	}
}
```
<a name="kjEqt"></a>
# 2. 查询分析对比数据接口
url：域名 +  /weight-rest/recordComparison/getWeightListAndCompareInfo<br />method: POST<br />**header参数或者url参数**<br />**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 根据key类型传相应的值 | 关联账号id<br /> |

<a name="rH4mg"></a>
##### post报文入参：
| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| associatedId | String | 关联账号id |  |
| queryDateType | Integer | 查询时间类型 | 1-按日查<br />2-按周查 |
| startTime | Date | 开始时间 |  |
| endTime | Date | 结束时间 |  |
| queryIndexType | Integer | 是否只查询有体脂率的数据 | 1-查询体重<br />2-查询体脂 |

<a name="o3re0"></a>
###### 示例入参：
```json
{
	"queryDateType":"1",
	"startTime":"1591891200000",
	"endTime":"1599642344721",
	"queryIndexType":"2"
}
```
<a name="GB13a"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexInfoList | List<Object> | 指标信息趋势图数据集合 | 按时间顺序 |
| compareExplainList | List<Object> | 重要属性对比及文案 |  |
| indexCompareList | List<Object> | 首尾数据对比 |  |
| targetType | Integer | 目标类型 | 1-减肥<br />2-增肥<br />3-保持 |

indexInfoList：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| value | String | 标签值 |
| unitName | string | 单位 |
| measurementDate | Date | 测量时间 |
| measurementDateText | String | 测量时间文本描述 |

<a name="LWD22"></a>
###### compareExplainList(重要属性对比及文案)：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexCompareList | List<Object> | 指标差值对象 |  |
| title | String | 标题 |  |
| text | String | 文案 |  |

<a name="SgQuI"></a>
###### indexCompareList(首尾数据对比)：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| label | String | 标签名称 |  |
| labelStartValue | Double | 开始值 |  |
| labelEndValue | Double | 结束值 |  |
| labelUnit | String | 单位 |  |
| labelDValue | Double | 差值 |  |

<a name="oDVgs"></a>
###### 出参报文示例：
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"indexInfoList":[
			{
				"value":17.3,
				"unitName":"%",
				"measurementDate":1592320246000,
				"measurementDateText":"06.16"
			},
			{
				"value":16.9,
				"unitName":"%",
				"measurementDate":1592323200000,
				"measurementDateText":"06.17"
			},
			{
				"value":17.2,
				"unitName":"%",
				"measurementDate":1592841600000,
				"measurementDateText":"06.23"
			},
			{
				"value":19.9,
				"unitName":"%",
				"measurementDate":1594828800000,
				"measurementDateText":"07.16"
			},
			{
				"value":14.7,
				"unitName":"%",
				"measurementDate":1595692800000,
				"measurementDateText":"07.26"
			},
			{
				"value":14.7,
				"unitName":"%",
				"measurementDate":1595779200000,
				"measurementDateText":"07.27"
			},
			{
				"value":17.3,
				"unitName":"%",
				"measurementDate":1595865600000,
				"measurementDateText":"07.28"
			},
			{
				"value":17.2,
				"unitName":"%",
				"measurementDate":1599638918000,
				"measurementDateText":"09.09"
			}
		],
		"compareExplainList":[
			{
				"differenceValueList":[
					{
						"label":"体重",
						"labelUnit":"kg",
						"labelDValue":-0.1
					},
					{
						"label":"体脂率",
						"labelUnit":"%",
						"labelDValue":-0.1
					}
				],
				"title":"体重尚无明显变化",
				"text":"这段时间体重变化不大，继续努力哦！减重需重点关注体脂率的变化，减脂是减重的核心哦~"
			},
			{
				"differenceValueList":[
					{
						"label":"脂肪量",
						"labelUnit":"kg",
						"labelDValue":0
					},
					{
						"label":"肌肉量",
						"labelUnit":"kg",
						"labelDValue":0
					},
					{
						"label":"水分",
						"labelUnit":"kg",
						"labelDValue":0
					}
				],
				"title":"体重虽下降，但去脂体重丢失较多",
				"text":"去脂体重（含水分/肌肉等）丢失，可能导致基础代谢下降，影响减重效果。减脂才是减重的核心，多多运动来减脂吧！"
			}
		],
		"indexCompareList":[
			{
				"label":"BMI",
				"labelStartValue":23.6,
				"labelEndValue":23.6,
				"labelUnit":"",
				"labelDValue":0
			},
			{
				"label":"体脂率",
				"labelStartValue":17.3,
				"labelEndValue":17.2,
				"labelUnit":"%",
				"labelDValue":-0.1
			},
			{
				"label":"肌肉量",
				"labelStartValue":52.3,
				"labelEndValue":52.3,
				"labelUnit":"kg",
				"labelDValue":0
			},
			{
				"label":"身体年龄",
				"labelStartValue":22,
				"labelEndValue":22,
				"labelUnit":"岁",
				"labelDValue":0
			},
			{
				"label":"脂肪量",
				"labelStartValue":11.5,
				"labelEndValue":11.5,
				"labelUnit":"kg",
				"labelDValue":0
			},
			{
				"label":"内脏脂肪等级",
				"labelStartValue":6,
				"labelEndValue":6,
				"labelUnit":"等级",
				"labelDValue":0
			},
			{
				"label":"基础代谢量",
				"labelStartValue":1561,
				"labelEndValue":1561,
				"labelUnit":"大卡",
				"labelDValue":0
			},
			{
				"label":"去脂体重",
				"labelStartValue":55.2,
				"labelEndValue":55.1,
				"labelUnit":"kg",
				"labelDValue":-0.1
			},
			{
				"label":"肌肉率",
				"labelStartValue":78.4,
				"labelEndValue":78.5,
				"labelUnit":"%",
				"labelDValue":0.1
			},
			{
				"label":"水分率",
				"labelStartValue":56.6,
				"labelEndValue":56.7,
				"labelUnit":"%",
				"labelDValue":0.1
			},
			{
				"label":"骨量",
				"labelStartValue":2.9,
				"labelEndValue":2.9,
				"labelUnit":"kg",
				"labelDValue":0
			},
			{
				"label":"蛋白质",
				"labelStartValue":21.8,
				"labelEndValue":21.7,
				"labelUnit":"%",
				"labelDValue":-0.1
			},
			{
				"label":"骨骼肌",
				"labelStartValue":28.9,
				"labelEndValue":28.9,
				"labelUnit":"kg",
				"labelDValue":0
			}
		],
		"targetType":1
	}
}
```
<a name="DsXnv"></a>
# 3. 体重历史列表页查询
ur: 域名 +  /weight-rest/weightRecord/getWeightListForWeek<br />method: post<br />说明：查询queryTime时间前的50条记录
<a name="kfcfp"></a>
##### **header参数或者url参数**
**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| associatedId | string | 根据key类型传相应的值 | 关联账号id<br /> |

<a name="NqHhl"></a>
##### post报文入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| queryTime | Long | 查询时间戳 | 如查当前时间之前的最新一条，可不传 |

<a name="S3JdT"></a>
###### 示例:
```json
{
	"queryTime":"1603266355689"
}
```
**出参(List):**

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| weekValue | String | 周名称 | 例：本周，2019年09月23日2019年09月29日 |
| avgWeight | Double | 周平均体重 |  |
| unit | Integer | 单位 | 1-kg;2-斤;3-磅;4-英石 |
| weightList | List<Object> | 本周详细体重列表 |  |

<a name="sTiXN"></a>
###### 体重详细信息：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 体重主键id |  |
| weight | Double | 体重 |  |
| bmi | Double | 体质指数 |  |
| measurementDate | Date | 测量时间 |  |
| sourceType | Integer | 数据类型 | 0-正常数据,2-手动 |

<a name="SLSwd"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":[
		{
			"weekValue":"06月15日-06月21日",
			"avgWeight":67.9,
			"unit":1,
			"weightList":[
				{
					"id":"c62c31a7175e4c98915b55ab38cab299",
					"userId":23342312,
					"weight":65.8,
					"bmi":22.8,
					"measurementDate":1592366523000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"8c580eb3965b45b2b1b731fc7d5774ef",
					"userId":23342312,
					"weight":66.1,
					"bmi":22.9,
					"measurementDate":1592366429000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				}
			]
		},
		{
			"weekValue":"06月08日-06月14日",
			"avgWeight":66.8,
			"unit":1,
			"weightList":[
				{
					"id":"3ac825a700614bfea28ab594011f61a0",
					"userId":23342312,
					"weight":67.7,
					"bmi":23.4,
					"measurementDate":1591956243000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"e2118878f1fe4f2286f309f37bb2136b",
					"userId":23342312,
					"weight":67.3,
					"bmi":23.3,
					"measurementDate":1591953372000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"2fae05c0e7be4681b85ba04211660df4",
					"userId":23342312,
					"weight":67.6,
					"bmi":23.4,
					"measurementDate":1591949731000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"81d6d9e860344378a80cfa15c991279a",
					"userId":23342312,
					"weight":67.4,
					"bmi":23.3,
					"measurementDate":1591945604000,
					"sourceType":0,
					"pbf":14.1,
					"muscle":54.9,
					"water":59.9,
					"bone":3,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"9e19d8713955401e833774ad97940708",
					"userId":23342312,
					"weight":67.2,
					"bmi":23.3,
					"measurementDate":1591944997000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"b6808908f83f44a8a7236949fabc9192",
					"userId":23342312,
					"weight":66,
					"bmi":22.8,
					"measurementDate":1591944932000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"330937eb417e4f5486e370501f48e3f6",
					"userId":23342312,
					"weight":66.1,
					"bmi":22.9,
					"measurementDate":1591944922000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"4b64d7bfaf444e2a8e7b42bba4ec70c5",
					"userId":23342312,
					"weight":65.4,
					"bmi":22.63,
					"measurementDate":1591777009000,
					"sourceType":0,
					"pbf":19.8,
					"weightStatus":0,
					"height":0
				}
			]
		},
		{
			"weekValue":"06月01日-06月07日",
			"avgWeight":67.2,
			"unit":1,
			"weightList":[
				{
					"id":"95e361c0b2944b9caf1a89952f8384fd",
					"userId":23342312,
					"weight":67,
					"bmi":23.18,
					"measurementDate":1591261683000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"42b52a92754d4478a9bb933d85b9abb3",
					"userId":23342312,
					"weight":67.4,
					"bmi":23.32,
					"measurementDate":1591160030000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"6e450d99a18e4217bf69ef90b27a54f8",
					"userId":23342312,
					"weight":66.7,
					"bmi":23.08,
					"measurementDate":1591160002000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"7ead2750eb624deaba3d2cf447183b27",
					"userId":23342312,
					"weight":67.2,
					"bmi":23.25,
					"measurementDate":1591159580000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"200bcfbce9e740c6b0ce5374cd9a4dcc",
					"userId":23342312,
					"weight":67.3,
					"bmi":23.29,
					"measurementDate":1591159505000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"4c6160ca81d247fb982f1ea6af34c256",
					"userId":23342312,
					"weight":67.3,
					"bmi":23.29,
					"measurementDate":1591157001000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				}
			]
		},
		{
			"weekValue":"05月25日-05月31日",
			"avgWeight":68.3,
			"unit":1,
			"weightList":[
				{
					"id":"fbfd019022e447f2a279f7306db8d9e9",
					"userId":23342312,
					"weight":68.7,
					"bmi":23.77,
					"measurementDate":1590488473000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				},
				{
					"id":"af2338ac9cf74956884248f891413702",
					"userId":23342312,
					"weight":67.9,
					"bmi":23.49,
					"measurementDate":1590401880000,
					"sourceType":0,
					"weightStatus":0,
					"height":0
				}
			]
		}
	
	]
}
```
<a name="oKTBG"></a>
# 4. 体重详情页
url :  域名 +  /weight-rest/bulletinBoard/getWeightRoundDetail<br />method: get
<a name="arEuR"></a>
##### 入参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | Long | 体重记录id | 必传 |
| associatedId | String | 关联账号id |  |

<a name="lixr0"></a>
##### 出参:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| userName | String | 用户名称 |  |
| headImg | String | 用户头像 |  |
| unit | Integer | 单位 | 1-kg;2-斤;3-磅;4-英石 |
| bindBodyFatScale | boolean | 是否绑定体脂秤 |  |
| weightList | List<Object> | 体重数据List |  |
| healthLabelList | List<Object> | 风险解读标签 |  |

<a name="SAaQd"></a>
###### 
<a name="in01j"></a>
###### 体重数据：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| id | String | 体重主键id |  |
| weight | Double | 体重 |  |
| sourceType | int | 数据类型 | 0-正常,1-异常数据,2-手动,3-体重数据 |
| bmi | Double | 体质指数 |  |
| bmiLevelName | String | bmi等级名称 |  |
| measurementDate | Date | 测量时间 |  |
| bodyStyle | String | 体型 |  |
| bodyScore | String | 身材得分名称 |  |
| topContent | String | 整体解读 |  |
| bmiLabelDto | Object | bmi标签对象 | 见标签数据 |
| labelList | List<Object> | 标签List |  |
| moodDto | Object | 心情 |  |

<a name="96ThS"></a>
###### 心情数据:
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| mood | String | 心情文字 |  |
| images | String | 图片地址 | 多张图片，使用英文逗号分隔图片地址，多张图片，使用英文逗号分隔 |

<a name="pHFv4"></a>
###### 标签数据：
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| label | String | 标签名称 |  |
| labelValue | Double | 标签值 |  |
| labelUnit | String | 单位 |  |
| labelDValue | Double | 差值 |  |
| labelDContent | String | 差值文案 |  |
| labelLevelName | String | 等级名称 |  |
| labelContent | String | 解读 |  |
| labelDietaryAdvice | String | 饮食建议 |  |
| labelSportsAdvice | String | 运动建议建议 |  |
| levelIntervalList | List<Object> | 等级区间 |  |

等级区间：

| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| levelIntervalName | String | 等级区间名称 |  |
| startValue | BigDecimal | 区间开始值 | 最左及最右无返回 |
| endValue | BigDecimal | 区间结束值 |  |

<a name="pO9hf"></a>
###### healthLabelList(风险解读标签)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| healthLabelName | String | 健康风险标签名 |  |
| healthContent | String | 健康风险解读 |  |
| indexList | List<Object> | 风险对应标签对象 |  |

<a name="He2FY"></a>
###### indexList(风险对应标签对象)
| 字段 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| indexName | String | 标签名称 |  |
| indexValue | BigDecimal | 标签值 |  |
| indexUnit | String | 单位 |  |
| indexLevel | String | 指标等级 |  |

<a name="xd6Xc"></a>
###### 示例报文：
```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"userId":23412531,
		"userName":"..test..",
		"headImg":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLdjibSZBoU4bsB2g6qdM8nSbD4Y05uNyLkAJaoToFzsribYAvrbcauWtDztdeRwhicZicpQFWW5ftd2w/132",
		"unit":1,
		"bindBodyFatScale":false,
		"sampleData":false,
		"haveNewWeightRecord":false,
		"weightList":[
			{
				"id":"3a46098572724f62b1b49e813078e61f",
				"weight":66.6,
				"sourceType":0,
				"bmi":23.6,
				"bmiLevelName":"理想",
				"measurementDate":1599638918000,
				"bodyStyle":"标准型",
				"bodyScore":"优",
				"topContent":"你拥有标准的健康体型。体脂率很理想；均衡膳食多运动，维持良好的肌肉量吧！",
				"bmiLabelDto":{
					"label":"BMI",
					"labelValue":23.6,
					"labelUnit":"",
					"labelDValue":-0.1,
					"labelDContent":"较2天前减少了0.1",
					"labelLevelName":"理想",
					"labelContent":"你的BMI在理想范围内。很棒，建议继续保持！记得每天均衡饮食、适量运动。",
					"labelDietaryAdvice":"建议保持饮食均衡，保证每天热量摄入稳定，维持当前体重。",
					"labelSportsAdvice":"建议坚持日常活动，平均每天6000步；尽量减少久坐时间，每小时起来动一动。",
					"levelIntervalList":[
						{
							"levelIntervalName":"偏瘦",
							"endValue":18.5
						},
						{
							"levelIntervalName":"理想",
							"startValue":18.5,
							"endValue":24
						},
						{
							"levelIntervalName":"偏胖",
							"startValue":24,
							"endValue":28
						},
						{
							"levelIntervalName":"肥胖",
							"startValue":28
						}
					]
				},
				"labelList":[
					{
						"label":"体脂率",
						"labelValue":17.2,
						"labelUnit":"%",
						"labelDValue":-0.1,
						"labelDContent":"较43天前减少了0.1%",
						"labelLevelName":"理想",
						"labelContent":"你的体脂率理想。很棒，建议继续保持！记得每天均衡饮食、适量运动。",
						"labelDietaryAdvice":"建议保持饮食均衡，保证每天热量摄入稳定，维持当前状态。",
						"labelSportsAdvice":"每周保持适量的有氧运动，配合力量练习，有利于将体脂率保持在理想范围内。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":10
							},
							{
								"levelIntervalName":"理想",
								"startValue":10,
								"endValue":22
							},
							{
								"levelIntervalName":"偏高",
								"startValue":22,
								"endValue":28
							},
							{
								"levelIntervalName":"超高",
								"startValue":28
							}
						]
					},
					{
						"label":"肌肉量",
						"labelValue":52.3,
						"labelUnit":"kg",
						"labelDValue":-0.2,
						"labelDContent":"较43天前减少了0.2kg",
						"labelLevelName":"标准",
						"labelContent":"你的肌肉量标准。很棒！建议继续保持。",
						"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
						"labelSportsAdvice":"力量训练（如深蹲、硬拉、俯卧撑、引体向上等）和有氧运动相结合的形式，辅以拉伸放松，增肌训练效果会更好。规律的运动训练应该至少每周3次，每次45分钟以上；但应注意预防运动损伤。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":44
							},
							{
								"levelIntervalName":"标准",
								"startValue":44,
								"endValue":52.5
							},
							{
								"levelIntervalName":"理想",
								"startValue":52.5
							}
						]
					},
					{
						"label":"身体年龄",
						"labelValue":22,
						"labelUnit":"岁",
						"labelDValue":0,
						"labelDContent":"较43天前无变化",
						"labelLevelName":"年轻",
						"labelContent":"你的身体年龄比真实年龄年轻。",
						"labelDietaryAdvice":"随着年龄的增长，身体水分和基础代谢会逐渐下降。保持健康饮食和生活方式，可以使身体看起来更年轻。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动。",
						"levelIntervalList":[
							{
								"levelIntervalName":"年轻",
								"endValue":24
							},
							{
								"levelIntervalName":"偏大",
								"startValue":24
							}
						]
					},
					{
						"label":"脂肪量",
						"labelValue":11.5,
						"labelUnit":"kg",
						"labelDValue":-0.1,
						"labelDContent":"较43天前减少了0.1kg",
						"labelLevelName":"理想",
						"labelContent":"你的脂肪量理想，很棒，建议继续保持！记得每天均衡饮食、适量运动哦。",
						"labelDietaryAdvice":"建议保持饮食平衡，保证每天热量摄入稳定，维持当前状态。",
						"labelSportsAdvice":"每周保持适量的有氧运动，配合力量练习，有利于将脂肪量保持在理想范围内。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":6.7
							},
							{
								"levelIntervalName":"理想",
								"startValue":6.7,
								"endValue":14.7
							},
							{
								"levelIntervalName":"偏高",
								"startValue":14.7,
								"endValue":18.6
							},
							{
								"levelIntervalName":"超高",
								"startValue":18.6
							}
						]
					},
					{
						"label":"内脏脂肪等级",
						"labelValue":6,
						"labelUnit":"等级",
						"labelDValue":0,
						"labelDContent":"较43天前无变化",
						"labelLevelName":"理想",
						"labelContent":"你的内脏脂肪等级理想。保持理想的内脏脂肪水平，有助于降低脂肪肝、高血压、高血脂、2型糖尿病等慢性疾病的患病风险。",
						"labelDietaryAdvice":"推荐每日均衡摄入：适量优质蛋白质、适量碳水化合物（增加全谷物、杂豆类）、低脂肪；增加新鲜蔬菜和水果。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动。",
						"levelIntervalList":[
							{
								"levelIntervalName":"理想",
								"endValue":10
							},
							{
								"levelIntervalName":"偏高",
								"startValue":10,
								"endValue":15
							},
							{
								"levelIntervalName":"较高",
								"startValue":15,
								"endValue":30
							},
							{
								"levelIntervalName":"超高",
								"startValue":30
							}
						]
					},
					{
						"label":"基础代谢量",
						"labelValue":1561,
						"labelUnit":"大卡",
						"labelDValue":-6,
						"labelDContent":"较43天前减少了6.0大卡",
						"labelLevelName":"理想",
						"labelContent":"你的基础代谢理想，很棒！可继续保持。",
						"labelDietaryAdvice":"建议多喝白开水，保证蛋白质和膳食纤维的摄入量。",
						"labelSportsAdvice":"每周进行力量训练，结合有氧运动，可以刺激肌肉生长。增加身体的肌肉含量，是提升基础代谢的秘密武器。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":1550
							},
							{
								"levelIntervalName":"理想",
								"startValue":1550
							}
						]
					},
					{
						"label":"去脂体重",
						"labelValue":55.1,
						"labelUnit":"kg",
						"labelDValue":-0.3,
						"labelDContent":"较43天前减少了0.3kg",
						"labelLevelName":"理想",
						"levelIntervalList":[
							{
								"levelIntervalName":"超低",
								"endValue":48
							},
							{
								"levelIntervalName":"偏低",
								"startValue":48,
								"endValue":51.9
							},
							{
								"levelIntervalName":"理想",
								"startValue":51.9,
								"endValue":59.9
							},
							{
								"levelIntervalName":"偏高",
								"startValue":59.9
							}
						]
					},
					{
						"label":"肌肉率",
						"labelValue":78.5,
						"labelUnit":"%",
						"labelDValue":0.1,
						"labelDContent":"较43天前增加了0.1%",
						"labelLevelName":"标准",
						"labelContent":"你的肌肉量标准。很棒！建议继续保持。",
						"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天热量摄入稳定。",
						"labelSportsAdvice":"力量训练（如深蹲、硬拉、俯卧撑、引体向上等）和有氧运动相结合的形式，辅以拉伸放松，增肌训练效果会更好。规律的运动训练应该至少每周3次，每次45分钟以上；但应注意预防运动损伤。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":66.1
							},
							{
								"levelIntervalName":"标准",
								"startValue":66.1,
								"endValue":78.8
							},
							{
								"levelIntervalName":"理想",
								"startValue":78.8
							}
						]
					},
					{
						"label":"水分率",
						"labelValue":56.7,
						"labelUnit":"%",
						"labelDValue":0,
						"labelDContent":"较43天前无变化",
						"labelLevelName":"标准",
						"labelContent":"你的水分率标准，规律的饮食和每天八杯水就可以继续保持理想的身体水分含量啦。",
						"labelDietaryAdvice":"充足的水分可以促进新陈代谢，保持皮肤年轻，喝水时注意少量、多次地及时补充水分和电解质。",
						"labelSportsAdvice":"推荐每天至少行走6000步，每周进行不低于150分钟中等强度的有氧运动，有利于促进身体代谢。同时需及时补充水分。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":55
							},
							{
								"levelIntervalName":"标准",
								"startValue":55,
								"endValue":65
							},
							{
								"levelIntervalName":"理想",
								"startValue":65
							}
						]
					},
					{
						"label":"骨量",
						"labelValue":2.9,
						"labelUnit":"kg",
						"labelDValue":0,
						"labelDContent":"较43天前无变化",
						"labelLevelName":"理想",
						"labelContent":"你的骨量含量理想，很棒！建议继续保持。",
						"labelDietaryAdvice":"预防骨量减少，需摄入足量的钙、蛋白质和维生素D；过量饮用酒、碳酸饮料、茶或咖啡，都可能导致钙流失或影响钙吸收，从而降低骨质量。需注意适度。",
						"labelSportsAdvice":"预防骨量减少，需减少久坐，多活动；推荐依据自身情况增加运动量尤其是力量训练，如深蹲、俯卧撑等。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":2.9
							},
							{
								"levelIntervalName":"理想",
								"startValue":2.9
							}
						]
					},
					{
						"label":"蛋白质",
						"labelValue":21.7,
						"labelUnit":"%",
						"labelDValue":0,
						"labelDContent":"较43天前无变化",
						"labelLevelName":"偏高",
						"labelContent":"你的蛋白质含量偏高，摄取过量会造成体内脂肪堆积，加大肾脏排泄负担。",
						"labelDietaryAdvice":"建议控制高蛋白食物的摄入量，适当增加谷类食物，绿叶蔬菜、水果的摄入，减轻肾脏代谢负担，避免钙过量丢失。",
						"labelSportsAdvice":"每周进行2-3次的力量练习与不低于150分钟中等强度的有氧训练，促进体内多余的蛋白质排出，减少肾脏负荷。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":16
							},
							{
								"levelIntervalName":"标准",
								"startValue":16,
								"endValue":20
							},
							{
								"levelIntervalName":"偏高",
								"startValue":20
							}
						]
					},
					{
						"label":"骨骼肌",
						"labelValue":28.9,
						"labelUnit":"kg",
						"labelDValue":-0.2,
						"labelDContent":"较43天前减少了0.2kg",
						"labelLevelName":"标准",
						"labelContent":"你的骨骼肌标准。骨骼肌是体内有益的肌肉群，骨骼肌偏高其实是好的现象。",
						"labelDietaryAdvice":"建议继续保持碳水和优质蛋白质的摄入平衡，多食用富含蛋白质较多的食物，保证每天营养摄入稳定。",
						"labelSportsAdvice":"力量训练（如深蹲、硬拉、俯卧撑、引体向上等）和有氧运动相结合的形式，辅以拉伸放松，增肌训练效果会更好。规律的运动训练应该至少每周3次，每次45分钟以上；但应注意预防运动损伤。",
						"levelIntervalList":[
							{
								"levelIntervalName":"偏低",
								"endValue":26.3
							},
							{
								"levelIntervalName":"标准",
								"startValue":26.3,
								"endValue":32.1
							},
							{
								"levelIntervalName":"理想",
								"startValue":32.1
							}
						]
					}
				],
				"height":0,
        "moodDto":{
					"id":1708870,
					"userId":23412531,
					"weightId":"3a46098572724f62b1b49e813078e61f",
					"mood":"？？？心情",
					"created":1599651985000,
					"updated":1599651984666,
					"measurementDate":1599638918000
				}
			}
		],
		"healthLabelList":[
			{
				"healthLabelName":"中心型肥胖",
				"healthContent":"肥胖不止影响体型，还会影响您的健康！世界卫生组织已将肥胖列为导致疾病负担的十大危险因素之一。\n\n若脂肪主要在腹壁和腹腔内蓄积过多，则被称为\"中心型肥胖\"，具有更高的疾病风险。一般成人达到以下任一标准即可推断为中心型肥胖。\n1.腰围：男性≥85cm，女性≥80cm；\n2.腰臀比（腰围/臀围）:男性>0.9，女性>0.8；\n\n对肥胖人群而言：\n1.出现2型糖尿病、心血管病、高血压、中风和多种癌症的风险概率远高于一般健康人群；\n2.由于过多的脂肪在肝细胞内沉积，易形成脂肪肝；\n3.易出现睡眠中重度打鼾，可能引发睡眠呼吸暂停综合征；\n4.同时还易出现骨关节病、胆囊疾病等多种疾病。",
				"indexList":[
					{
						"indexName":"腰臀比",
						"indexValue":1
					},
					{
						"indexName":"腰围",
						"indexValue":80.2,
						"indexUnit":"cm"
					}
				]
			}
		]
	}
}
```

