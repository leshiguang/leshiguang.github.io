<a name="TPDP0"></a>
## 1、面板数据
描述：获取指定时间（包含）最近2天睡眠数据<br />URL：域名 + /sleep-rest/sleepResult/boardInfo<br />请求方式：GET<br />**入参：**<br />


| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| queryDate | String | 查询时间 | 格式: YYYY-MM-dd |
| direction | Integer | 查询方向 | 1:往后查；-1:往前查 |
| associatedId | String | 关联账号ID |  |


<br />**出参：List(BoardInfoResponse)**<br />**BoardInfoResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| belongDay | Date | 数据属于哪天 |  |
| boardInfoList | List<BoardInfoDto> | 面板数据 |  |


<br />**BoardInfoDto：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepStateDetailModelList | List<SleepStateDetailDto> | 睡眠段详细数据 |  |
| sleepId | String | 唯一标识 |  |
| sleepTime | Date | 入睡时间 |  |
| awakeningTime | Date | 起床时间 |  |
| sleepDurationMinute | Integer | 睡眠时长分钟数 |  |
| isNightSleep | boolean | 是否是夜间睡眠 | true：夜间睡眠 |
| heartRateList | List<Integer> | 心率集合 | 每一个数字代表5分钟的心率 |
| averageHeartRate | Integer | 平均心率 |  |
| standardHeartRate | Integer | 基准心率 |  |
| minHeartRate | Integer | 最小心率 |  |
| maxHeartRate | Integer | 最大心率 |  |
| hasRem | boolean | 是否有眼动 |  |
| belongDay | Date | 属于哪天 |  |


<br />**SleepStateDetailDto：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| status | Integer | 类型 | 0：快速眼动; 1：清醒; 2：浅睡; 3：深睡 |
| startTime | Date | 开始时间 |  |
| endTime | Date | 结束时间 |  |
| duration | Integer | 持续时长 |  |


<br />**返回示例：**
```json
{
    "code":200,
    "msg":"成功",
    "data":[
        {
            "belongDay":1569254400000,
            "boardInfoList":[
                {
                    "sleepStateDetailModelList":[
                        {
                            "status":2,
                            "startTime":1569248001000,
                            "endTime":1569248361000,
                            "duration":6
                        },
                        {
                            "status":0,
                            "startTime":1569248361000,
                            "endTime":1569248721000,
                            "duration":6
                        }
                    ],
                    "sleepId":"h1d0e945d6758e44dea4786f62bf3d4fa0",
                    "sleepTime":1569248001000,
                    "awakeningTime":1569253401000,
                    "hasRem":true,
                    "belongDay":1569254400000,
                    "nightSleep":true
                }
            ],
            "example":true
        },
        {
            "belongDay":1568908800000,
            "boardInfoList":[
                {
                    "sleepStateDetailModelList":[
                        {
                            "status":2,
                            "startTime":1568909884000,
                            "endTime":1568910544000,
                            "duration":11
                        },
                        {
                            "status":3,
                            "startTime":1568910544000,
                            "endTime":1568912404000,
                            "duration":31
                        }
                    ],
                    "sleepId":"pillow5d8cff31867f4dce811752eb1aec1b7a",
                    "sleepTime":1568909884000,
                    "awakeningTime":1568935084000,
                    "heartRateList":[
                        78,
                        79,
                        80
                    ],
                    "averageHeartRate":79,
                    "minHeartRate":78,
                    "maxHeartRate":80,
                    "hasRem":false,
                    "belongDay":1568908800000,
                    "nightSleep":true
                }
            ],
            "example":true
        }
    ]
}
```


<a name="Xp4ZC"></a>
## 2、夜间睡眠数据
描述：获取夜间睡眠的详细信息<br />URL：域名 + /sleep-rest/sleepResult/sleepInfo<br />请求方式：GET<br />**入参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepId | String | 睡眠唯一标识 |  |
| associatedId | String | 关联账号ID |  |


<br />**出参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepLevelResponse | SleepLevelResponse | 睡眠等级模块数据 |  |
| sleepBigDataResponse | SleepBigDataResponse | 睡眠大数据 |  |
| sleepDepthResponse | SleepDepthResponse | 睡眠深浅模块数据 |  |
| sleepDurationResponse | SleepDurationResponse | 睡眠时长数据 |  |
| SleepRegularResponse | SleepRegularResponse | 睡眠规律数据 |  |
| sleepBreatheResponse | SleepBreatheResponse | 睡眠呼吸数据 |  |
| productsRecommended | List(KnowledgeArticleDto) | 推荐产品 |  |
| abnormalRemindResponse | AbnormalRemindResponse | 异常提醒 |  |

**SleepLevelResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepId | String | 睡眠唯一标识 |  |
| score | Integer | 睡眠分 |  |
| level | Integer | 等级 | 优良中差分别对应1,2,3,4 |
| sleepWord | SleepWordTotalDto | 文案 |  |

**SleepWordTotalDto：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| summary | String | 总结 |  |
| unscramble | String | 解读 |  |
| suggest | String | 建议 |  |
| suggestSource | String | 建议来源 |  |

**SleepBigDataResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| beatPeopelPercent | Double | 击败人数百分比 |  |
| userFeedback | Integer | 用户反馈 |  |
| beforeSleepStatusDTOS | List(BeforeSleepStatusDTO) | 用户睡前状态 |  |
| beforeSleepStatusAnalysisDTOS | List(BeforeSleepStatusAnalysisDTO) | 睡前状态文案 |  |
| sleepScoreChart | List(Long) | 睡眠分图表 |  |
| sleepScore | Integer | 睡眠分 |  |

**BeforeSleepStatusDTO：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| statusDesc | 状态简述 |  |  |
| imgUrl | 图片 |  |  |
| selectImgUrl | 选中的图片 |  |  |
| order | 顺序 |  |  |
| partical | 助词 |  |  |
| sleepLevel | 睡眠等级 |  |  |

**BeforeSleepStatusAnalysisDTO：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| percentage | Double | 百分比 |  |
| text | String | 文字 |  |
| label | String | 标签 |  |

**SleepDepthResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| deepRatio | String | 总体深睡比例 |  |
| shallowRatio | String | 总体浅睡比例 |  |
| awakeningRatio | String | 总体清醒比例 |  |
| remRatio | String | 总体快速眼动比例 |  |
| deepRatioFirst90 | String | 前90分钟深睡比例 |  |
| shallowRatioFirst90 | String | 前90分钟浅睡比例 |  |
| awakeningRatioFirst90 | String | 前90分钟清醒比例 |  |
| remRatioFirst90 | String | 前90分钟快速眼动比例 |  |
| sleepWord | SleepWordTotalDto | 文案 |  |
| knowledgeArticle | KnowledgeArticleDto | 文章 |  |

**SleepDurationResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepDurationStr | String | 睡眠时长（分钟）,不包括清醒时长 |  |
| periodCount | Integer | 周期 |  |
| deepDuration | Integer | 深睡时长 |  |
| shallowDuration | Integer | 浅睡时长 |  |
| awakingDuration | Integer | 清醒时长 |  |
| remDuration | Integer | rem时长 |  |
| sleepCostTimeStr | String | 入睡用时, 没有则不返回 |  |
| idealSleepCountStr | String | 理想睡眠次数 |  |
| aveSleepDurationStr | String | 近期平均睡眠时长,(小时，两位小数) |  |

**SleepRegularResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepTimeStr | String | 入睡时间 |  |
| awakeningTimeStr | String | 醒来时间 |  |
| aveSleepTimeStr | String | 入睡时间和近期平均时间相比 |  |
| aveAwakeningTimeStr | String | 醒来时间和近期平均时间相比 |  |
| silentHeartRateStr | String | 晨脉 |  |
| silentHeartRateSuggest | String | 建议文案 |  |
| regularType | Integer | 1: 早睡星人; 2: 晚睡星人, 没有则未完成测试 |  |

**AbnormalRemindResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| userId |  |  |  |
| abnormalRemindLabelDTOS | List(AbnormalRemindLabelDTO) |  |  |

**AbnormalRemindLabelDTO：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| label | String | 异常标签 |  |
| desc | String | 标签描述 |  |
| tips | String | 建议 |  |


<br />**返回示例：**
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "sleepLevelResponse": {
            "sleepId": "multiSynfff55f11eefa4f939a851f004a112cff",
            "score" : 78,
            "level": 3,
            "userFeedback" : 3,
            "sleepWord": {
                "summary": "睡眠规律性不好，需要调整。",
                "unscramble": "与近期的睡眠相比，你昨天睡的稍微有点晚哦，尽量保持规律的作息。",
                "suggest": "这是一条通用建议3"
            }
        },
        "sleepDepthResponse": {
            "deepRatio": "16&偏低",
            "shallowRatio": "83&偏高",
            "awakeningRatio": "1&正常",
            "deepRatioFirst90": "27&偏低",
            "shallowRatioFirst90": "72&偏高",
            "awakeningRatioFirst90": "1&正常",
            "sleepWord": {
                "unscramble": "您昨晚深睡比例为17%，略有点低。",
                "suggest": "这是一条通用建议3"
            },
            "knowledgeArticle": {
                "articleTitle": "我是深浅文章",
                "articlePic": "https://www.baidu.com/s?wd=sscanf&rsv_idx=2&tn=baiduhome_pg&ie=utf-8&rsv_cq=double保留1位小数&rsv_dl=0_right_recommends_merge_28335&euri=1364018",
                "url": "www.baidu.com",
                "articlePicLabel" : "深浅"
            }
        },
        "sleepDurationResponse": {
            "sleepDurationStr": "360&正常",
            "periodCount": 2,
            "deepDuration" : 100,
            "shallowDuration" : 22,
            "sleepCostTimeStr" : "60&正常",
            "idealSleepInfo": [
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ],
            "idealSleepCountStr": "0&偏少",
            "oldSleepDuration": [
                360,
                380,
                235,
                235,
                41,
                390,
                400
            ],
            "aveSleepDurationStr": "4.9&偏少",
            "sleepWord": {
                "unscramble": "近7晚您没有获得过理想睡眠时长，需要注意。",
                "suggest": "这是一条通用建议3"
            },
            "knowledgeArticle": {
                "articleTitle": "我是时长文章",
                "articlePic": "https://www.baidu.com/s?wd=sscanf&rsv_idx=2&tn=baiduhome_pg&ie=utf-8&rsv_cq=double保留1位小数&rsv_dl=0_right_recommends_merge_28335&euri=1364018",
                "url": "www.baidu.com",
                "articlePicLabel" : "深浅"
            }
        },
        "sleepRegularResponse": {
            "sleepTimeStr": "03:05&正常",
            "awakeningTimeStr": "09:05",
            "aveSleepTimeStr": "比近期晚229分钟&异常",
            "aveAwakeningTimeStr": "比近期晚300分钟&异常",
            "silentHeartRateStr": "76&一般",
            "regularType" : 1,
            "sleepWord": {
                "unscramble": "您昨晚睡了6小时，再多睡一会儿会更好。",
                "suggest": "这是一条通用建议3"
            },
            "knowledgeArticle": {
                "articleTitle": "我是睡眠规律文章",
                "articlePic": "https://www.baidu.com/s?wd=sscanf&rsv_idx=2&tn=baiduhome_pg&ie=utf-8&rsv_cq=double保留1位小数&rsv_dl=0_right_recommends_merge_28335&euri=1364018",
                "url": "www.baidu.com",
                "articlePicLabel" : "深浅"
            }
        },
        "abnormalRemindResponse": {
              "userId": 23340810,
              "abnormalRemindLabelDTOS": [
                  {
                      "label": "入睡困难",
                      "desc": "检测到你有连续三次睡眠入睡用时超过15分钟"
                  },
                  {
                      "label": "睡眠质量差",
                      "desc": "检测到你有连续三次睡眠深睡比例较低"
                  },
                  {
                      "label": "易醒人群",
                      "desc": "检测到你有连续三次睡眠清醒次数大于3"
                  }
              ]
          },
      "productsRecommended":[
            {
                "articleId":772,
                "articleTitle":"“睡不好觉，真的会死”",
                "articlePic":"https://files.lifesense.com/other/20190524/6044f7e7913642758691b7c11d49d816.png",
                "url":"https://static-qa.lifesense.com/sportsAppFind/article.html?articleId=772",
                "articlePicLabel":"推荐",
                "sleepLabel":"SLEEP_QUALITY_BAD",
                "contentType":"article"
            },
            {
                "articleId":945,
                "articleTitle":"睡眠8小时以上死亡风险上升，睡越多、死越快！",
                "articlePic":"https://files.lifesense.com/other/20190729/28d78bdffe494ca3ad8fa4c68c445378.png",
                "url":"https://static-qa.lifesense.com/sportsAppFind/article.html?articleId=945",
                "articlePicLabel":"推荐",
                "sleepLabel":"SLEEP_LESS_DEPRIVATION",
                "contentType":"article"
            },
            {
                "articleId":780,
                "articleTitle":"周末补觉，真的能补回来吗？",
                "articlePic":"https://files.lifesense.com/other/20190527/fad43944dd5d486f87f6725e273d6b17.png",
                "url":"https://static-qa.lifesense.com/sportsAppFind/article.html?articleId=780",
                "articlePicLabel":"推荐",
                "sleepLabel":"SLEEP_NORMAL",
                "contentType":"article"
            }
        ]
    }
}
```
说明:<br />所有带 "&" 符号的返回, &前表示数据, &后表示对应的标签, 例如晨脉返回“74&一般” , 表示晨脉74, 标签为一般<br />

<a name="EIq1J"></a>
## 3、日间睡眠数据
描述：获取日间睡眠的详细信息<br />URL：域名 + /sleep-rest/sleepResult/sleepDayInfo<br />请求方式：GET<br />
<br />**入参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| associatedId | String | 关联账号ID |  |
| sleepId | String | 睡眠唯一标识 |  |


<br />**出参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| durationMinute | Integer | 睡眠时长分钟数 |  |
| deepSleepMinute | Integer | 深睡时长分钟数 |  |
| shallowSleepMinute | Integer | 浅睡时长分钟数 |  |
| remSleepMinute | Integer | 快速眼动时长分钟数 |  |
| awakeningMinute | Integer | 清醒时长分钟数 |  |
| deepRatio | Integer | 深睡比例 |  |
| shallowRatio | Integer | 浅睡比例 |  |
| remRatio | Integer | 快速眼动比例 |  |
| awakeningRatio | Integer | 清醒比例 |  |
| sleepTime | Date | 睡觉时间 |  |
| awakeningTime | Date | 起床时间 |  |



<a name="J1Sdf"></a>
## 4、获取用户最近一次睡眠数据
描述：如果该用户不存在睡眠信息，则返回示例用户的数据<br />URL：域名 + /sleep-rest/sleepResult/getLastSleepInfo<br />请求方式：GET<br />
<br />**入参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| associatedId | String | 关联账号ID |  |


<br />**出参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| userId | Long | 用户ID |  |
| deviceId | String | 设备ID |  |
| sleepId | String | 睡眠ID |  |
| dataSource | Integer | 数据来源 | 1-手环手表；2-枕头 |
| beginSleepTime | Date | 开始睡眠时间 |  |
| sleepTime | Date | 进入睡眠时间 |  |
| awakingTime | Date | 醒来时间 |  |
| sleepDuration | Integer | 睡眠时长 |  |
| belongDay | Date | 所属日期 |  |
| isNight | Integer | 是否为夜间睡眠 |  |
| createTime | Date | 创建时间 |  |
| updateTime | Date | 更新时间 |  |


<br />**返回示例：**
```json
{
    "code":200,
    "msg":"成功",
    "data":{
        "isExample":false,
        "lastSleepInfo":{
            "userId":23340810,
            "deviceId":"testDevice",
            "sleepId":"h1d0e945d6758e44dea4786f62bf3d4fa0",
            "dataSource":1,
            "sleepTime":1569248001000,
            "awakingTime":1569253401000,
            "sleepDuration":90,
            "belongDay":1569254400000,
            "isNight":1,
            "createTime":1569298479000,
            "updateTime":1569298872000
        }
    }
}
```


<a name="dAuOb"></a>
## 5、获取周统计数据
URL：域名 + /sleep-rest/statistical/week<br />请求方式：GET<br />
<br />**入参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| associatedId | String | 关联账号ID |  |
| currentDayStr | String | 指定日，查询这天所在周的数据 | 格式：YYYY-MM-dd |


<br />**出参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| nightSleepInfoList | List(SleepWeekDetail) | 本周夜间睡眠详细信息 |  |
| daySleepInfoList | List(SleepWeekDetail) | 本周日间睡眠详细信息 |  |
| startDate | Date | 本周开始时间 |  |
| endDate | Date | 本周结束时间 |  |
| idealSleepCount | Integer | 理想睡眠次数 |  |
| aveNightDurationMinute | Integer | 平均夜间睡眠分钟数 |  |
| aveDayDurationMinute | Integer | 平均日间睡眠分钟数 |  |
| aveWorkDayNightDurationMinute | Integer | 平均工作日夜间睡眠时长分钟数 |  |
| longestNightDurationSleepId | String | 最长夜间睡眠时长id |  |
| shortestNightDurationSleepId | String | 最短夜间睡眠时长id |  |
| earliestNightSleepTimeSleepId | String | 最早夜间入睡id |  |
| latestNightSleepTimeSleepId | String | 最晚夜间入睡id |  |
| latestNightAwakeningTimeSleepId | String | 最晚夜间起床id |  |

**SleepWeekDetail:**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepId | String | 睡眠ID |  |
| sleepTime | Date | 入睡时间 |  |
| awakingTime | Date | 清醒时间 |  |
| sleepDuration | Integer | 睡眠时长分钟数，(不包括清醒) |  |
| week | Integer | 周几 |  |
| isIdealSleep | Boolean | 是否是理想睡眠 |  |


<br />**返回示例：**
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "nightSleepInfoList": [
            {
                "sleepId": "multi77ec9f1c1722476692e974cf0f619d64",
                "sleepTime": "2019-08-04 23:59:59",
                "awakingTime": "2019-08-05 07:04:59",
                "sleepDuration": 420,
                "week": 7,
                "idealSleep": false
            },
            {
                "sleepId": "multi3f74b57a840048b98f8ba2ecd7f00ba6",
                "sleepTime": "2019-08-03 00:34:59",
                "awakingTime": "2019-08-03 11:29:59",
                "sleepDuration": 570,
                "week": 6,
                "idealSleep": true
            },
            {
                "sleepId": "multi18c3e7b7bdb64c84bf2740dc27d02633",
                "sleepTime": "2019-08-01 00:29:59",
                "awakingTime": "2019-08-01 07:04:59",
                "sleepDuration": 390,
                "week": 4,
                "idealSleep": false
            }
        ],
        "daySleepInfoList": [
            {
                "sleepDuration": 70,
                "week": 4
            }
        ],
        "startDate": "2019-07-29",
        "endDate": "2019-08-04",
        "idealSleepCount": 1,
        "aveNightDurationMinute": 460,
        "aveDayDurationMinute": 70,
        "aveWorkDayNightDurationMinute": 390,
        "longestNightDurationSleepId": "multi3f74b57a840048b98f8ba2ecd7f00ba6",
        "shortestNightDurationSleepId": "multi18c3e7b7bdb64c84bf2740dc27d02633",
        "earliestNightSleepTimeSleepId": "multi77ec9f1c1722476692e974cf0f619d64",
        "latestNightSleepTimeSleepId": "multi3f74b57a840048b98f8ba2ecd7f00ba6",
        "latestNightAwakeningTimeSleepId": "multi3f74b57a840048b98f8ba2ecd7f00ba6"
    }
}
```


<a name="jpIkV"></a>
## 6、获取最近7次晨脉
URL：域名 + /sleep-rest/sleepCommon/getNearSevenSilentHeartRate<br />请求方式：GET<br />
<br />**入参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| associatedId | String | 关联账号ID |  |
| awakeningTimeStr | String | 睡眠醒来时间 | 查询此时间之前的最近7次晨脉信息 |

**出参：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| label | String | 标签 |  |
| suggestion | String | 建议 |  |
| dtoList | List(HeartRateModel) | 数据列表 |  |

**HeartRateModel:**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| silentHeartRate | Integer | 晨脉 | 示例: 74 |
| dateStamp | Long | 晨脉所属时间：YYYYMMdd | 示例: 20190619 |

**返回示例：**
```json
{
    "code": 200,
    "msg": "成功",
    "data": {
        "label": "一般",
        "suggestion": "较上次相比，晨脉上升，说明身体出现疲劳。吸烟、饮酒、休息不足、锻炼过度、压力大以及精神刺激等都可能导致晨脉短期上升。",
        "dtoList": [
            {
                "silentHeartRate": 74,
                "dateStamp": 1560873600000
            },
            {
                "silentHeartRate": 70,
                "dateStamp": 1560787200000
            }
        ]
    }
}
```


<a name="5fjsq"></a>
## 7、助眠音乐信息
接口描述：获取助眠音乐列表<br />url: 域名 + /sleep-rest/helpMusic/helpSleepMusicPull<br />请求方式: GET<br />
<br />出参:<br />

```json

{
	"code":200,
	"msg":"成功",
	"data":{
		"helpMusic":[
			{
				"musicId":4,
				"musicName":"海滩",
				"simpleDesc":"海滩声音",
				"detailDesc":"海滩声音",
				"icon":"https://files.lifesense.com/other/20200115/9520fb0ab0794c0e89947193ebde2e14.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/f3fb0a4f695d4064ab322f3a58c87d9b.png",
				"color":"#E8AD68",
				"backgroundImg":"https://files.lifesense.com/other/20200120/53376e9aae7449cc946c5d0c4e63196e.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/beach.wav"
			},
			{
				"musicId":3,
				"musicName":"火炉",
				"simpleDesc":"火炉声音",
				"detailDesc":"海浪好猛啊",
				"icon":"https://files.lifesense.com/other/20200115/19f9b68b635e4df2969285654169fd3f.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/afe2b2c9cc8e45048347fa17b1ff8af3.png",
				"color":"#E66D5F",
				"backgroundImg":"https://files.lifesense.com/other/20200109/69ed6754b9b5480ca764f49f9f83d66d.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/burner.wav"
			},
			{
				"musicId":5,
				"musicName":"细雨",
				"simpleDesc":"细雨声音",
				"detailDesc":"细雨声音",
				"icon":"https://files.lifesense.com/other/20200115/e15fa4b79aa44a0e8e7604dd93bf0082.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/eb2f93d8399c45968e42e9408301ce39.png",
				"color":"#505EAF",
				"backgroundImg":"https://files.lifesense.com/other/20200109/bc2b3c816bcd46eb87b405235c9575f3.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/rain.wav"
			},
			{
				"musicId":6,
				"musicName":"八音盒",
				"simpleDesc":"八音盒",
				"detailDesc":"八音盒",
				"icon":"https://files.lifesense.com/other/20200115/e4da3261a2b346eaad8b7333217caa53.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/df210b59509c4607abf1638bb629c3f3.png",
				"color":"#E8AD68",
				"backgroundImg":"https://files.lifesense.com/other/20200115/2f49af6b0fec47558ffcd27ae7e55619.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/box.wav"
			},
			{
				"musicId":7,
				"musicName":"沸腾",
				"simpleDesc":"沸腾声音",
				"detailDesc":"沸腾",
				"icon":"https://files.lifesense.com/other/20200115/9cbef0f34a2a40929ba3a0b35725161d.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/23bd4f768cb8403a82c331d59e5eafba.png",
				"color":"#E66D5F",
				"backgroundImg":"https://files.lifesense.com/other/20200115/49903742e0d24ad2a7ce759a427e6f57.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/boil.wav"
			},
			{
				"musicId":8,
				"musicName":"风铃",
				"simpleDesc":"风铃声音",
				"detailDesc":"风铃声音",
				"icon":"https://files.lifesense.com/other/20200115/1b9d94af8daa49baaa17c1727e61b2f4.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/d46caa0339c0464c9ca5c057812863d3.png",
				"color":"#529F6D",
				"backgroundImg":"https://files.lifesense.com/other/20200115/90f4b96725ee43e2bcc5989db41eeec9.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/bell.wav"
			},
			{
				"musicId":9,
				"musicName":"翻书",
				"simpleDesc":"翻书声音",
				"detailDesc":"翻书声音",
				"icon":"https://files.lifesense.com/other/20200115/4b8ffa97acb54f4d93c8e659ad0a7350.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/654a0f5338334c58a2f717264704639c.png",
				"color":"#505EAF",
				"backgroundImg":"https://files.lifesense.com/other/20200115/28d8b78124a349bc87d0fc0b550de8ec.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/book.wav"
			},
			{
				"musicId":10,
				"musicName":"写字",
				"simpleDesc":"写字声音",
				"detailDesc":"写字声音",
				"icon":"https://files.lifesense.com/other/20200115/a3a90d1b9ca5488daa53d358ead604f9.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/5ed657bba45c4ddd98ba428602d1b961.png",
				"color":"#E8AD68",
				"backgroundImg":"https://files.lifesense.com/other/20200115/c798aad90d954453b2959133bd5934ac.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/writing.wav"
			},
			{
				"musicId":0,
				"musicName":"咀嚼",
				"simpleDesc":"咀嚼声音",
				"detailDesc":"咀嚼声音",
				"icon":"https://files.lifesense.com/other/20200115/f3d14fff240b4cb080e0dbedcaf23c3e.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/8f86f76c80d8448c8a2f0673b545a0fc.png",
				"color":"#E8AD68",
				"gradient":"#E66D5F",
				"backgroundImg":"https://files.lifesense.com/other/20200109/829ae3ffae924d25a5291a144853c452.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/chew.wav"
			}
		]
	}
}


```



| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| musicId | Long | 音乐标识 |  |
| musicName | String | 音乐名 |  |
| simpleDesc | String | 音乐简述 |  |
| detailDesc | String | 音乐详细介绍 |  |
| icon | String | 图标 |  |
| color | String | 颜色 |  |
| backgroundImg | String | 背景图片 |  |
| downloadUrl | String | 下载地址 |  |



<a name="eTO5a"></a>
## 8、助眠音乐上报
url: 域名 + /sleep-rest/helpMusic/helpSleepMusicUpload<br />请求方式: POST**<br />**header参数：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| associatedId | String | 关联账号ID |  |

**post参数：**
```javascript
{
  "uploadType" : 1,
	"startSleepTimeStamp" : 12154546541,
	"helpSleepMusicLogVOS" : [
		{
			"musicId" : 4,
			"order" : 1
		},
		{
			"musicId" :2 ,
			"order" : 2
		},
		{
			"musicId" : 6,
			"order" : 3
		}
	]
}
```



| 字段 | 类型 | 描述 | 其他 |
| --- | --- | --- | --- |
| uploadType | Integer | 上传类型 | 1、保存助眠音乐,<br />2、记录开始入睡时间, <br />3、取消开始入睡时间, <br />4、记录用户拖拽时间 |
| startSleepTimeStamp | Long | 开始入睡时间(毫秒) | 仅当uploadType为2、3时取该值 |
|  |  |  |  |
| helpSleepMusicLogVOS |  | 助眠音乐播放历史 | 仅当uploadType为1时取该值 |
| musicId | Long |  |  |
| order | Integer | 顺序 |  |



<a name="Wq8Pa"></a>
## 9、助眠音乐播放历史
接口描述：获取助眠音乐播放历史，返回最新的三条<br />url: 域名 + /sleep-rest/helpMusic/helpSleepMusicPlayLog<br />请求方式: GET<br />**入参：**<br />


| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| associatedId | String | 关联账号ID |  |

**出参示例：**
```json
{
	"code":200,
	"msg":"成功",
	"data":{
		"playLog":[
			{
				"musicId":1,
				"musicName":"水流",
				"simpleDesc":"水流",
				"detailDesc":"水流湍急，礁石在水下闪闪发亮",
				"icon":"https://files.lifesense.com/other/20200115/40c869241cdd4ee98d9562fb1d607c71.png",
				"selectIcon":"https://files.lifesense.com/other/20200304/2433534e936d4a408b391de76e489b33.png",
				"color":"#4193D1",
				"backgroundImg":"https://files.lifesense.com/other/20200311/0f6af522d2cb40fdafa1e1528f942f92.png",
				"downloadUrl":"https://files.lifesense.com/sleep/music/water.wav"
			}
		]
	}
}
```


<a name="2FOD3"></a>
## 10、获取用户某一天的睡眠数据
URL：域名 + /sleep-rest/sleepResult/getBoardInfoGivenSomeday<br />请求方式：GET<br />**入参：**<br />


| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| queryDate | String | 查询时间 | 格式: YYYY-MM-dd |
| associatedId | String | 关联账号ID |  |

**出参：List(BoardInfoResponse)**<br />**BoardInfoResponse：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| belongDay | Date | 数据属于哪天 |  |
| boardInfoList | List(BoardInfoDto) | 面板数据 |  |

**BoardInfoDto：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| sleepStateDetailModelList | List<SleepStateDetailDto> | 睡眠段详细数据 |  |
| sleepId | String | 唯一标识 |  |
| sleepTime | Date | 入睡时间 |  |
| awakeningTime | Date | 起床时间 |  |
| sleepDurationMinute | Integer | 睡眠时长分钟数 |  |
| isNightSleep | boolean | 是否是夜间睡眠 | true: 夜间睡眠 |
| heartRateList | List<Integer> | 心率集合 | 每一个数字代表5分钟的心率 |
| averageHeartRate | Integer | 平均心率 |  |
| standardHeartRate | Integer | 基准心率 |  |
| minHeartRate | Integer | 最小心率 |  |
| maxHeartRate | Integer | 最大心率 |  |
| hasRem | boolean | 是否有眼动 |  |
| belongDay | Date | 属于哪天 |  |


<br />**SleepStateDetailDto：**

| 字段 | 类型 | 描述 | 备注 |
| :---: | :---: | :---: | :---: |
| status | Integer | 类型 | 0: 快速眼动; 1: 清醒; 2: 浅睡; 3: 深睡 |
| startTime | Date | 开始时间 |  |
| endTime | Date | 结束时间 |  |
| duration | Integer | 持续时长 |  |


<br />

<a name="IbV2j"></a>
## 11、客户云推送数据至乐智云
url :  域名 +  /api/sleep/v1.0/upload/bracelet/sleep<br />method: post<br />
<br />**入参：**<br />Request：

| **字段** | **类型** | **描述** | **是否必传** | **备注** |
| :---: | :---: | :---: | :---: | :---: |
| braceletOriginDTOS | List<BraceletOriginDTO> | 手环睡眠原始数据列表 | 是 |  |

BraceletOriginDTO：

| **字段** | **类型** | **描述** | **是否必传** | **备注** |
| :---: | :---: | :---: | :---: | :---: |
| id | String | 32位随机ID，如：4268c5f5df185a4fe2a5469386de370824 | 是 |  |
| userId | Long | 用户ID | 是 |  |
| deviceId | String | 设备ID | 是 |  |
| uploadChanel | Integer | 数据上传通道：1-ios；2-android | 是 |  |
| measurementDate | Long | 测量时间戳，单位毫秒 | 是 |  |
| levelSet | String | 睡眠数据，16进制字符串，5分钟两位 | 是 |  |
| timeUnit | Integer | 时长单位，分钟；5分钟填5 | 是 |  |
| uploadNum | Integer | 一次上传的数量，两位代表5分钟；等于levelSet长度/2 | 是 |  |
| uploaded | Integer | 是否推送(0:未推送;1:已推送) | 是 |  |
| created | Long | 客户端创建时间（单位毫秒） | 是 |  |
| model | String | 设备型号 | 是 |  |
| softwareVersion | String | 固件版本号 | 是 |  |

**入参示例：**
```json
[
    {
        "id":"4268c5f5df185a4fe2a5469386de370824",
        "userId":23340810,
        "deviceId":"cb0404005e99",
        "uploadChanel":1,
        "measurementDate":1578229559000,
        "levelSet":"6363562f3a4b634c4659576349192f6356635e2019281000170009200000000000000b150017081b1c00001425001c05090007000000161607002753130013191700170d002a00291800000b281500051b00000d0f000f002215000f",
        "timeUnit":5,
        "uploadNum":92,
        "uploaded":1,
        "model":"LS431-B3",
        "softwareVersion":"T302",
        "created":"2019-11-16 16:26:30"
    }
]
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


