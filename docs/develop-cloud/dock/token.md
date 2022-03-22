<a name="m6nvL"></a>
### 接口说明
针对小程序模块嵌入的合作模式，部分功能(如小程序码生成)需要使用微信后台获取的小程序access_token，因access_token直接获取会导致之前的失效，考虑到合作方也可能需要使用该参数，为防止冲突，需要拾果健康从合作方实现的HTTP接口读取该参数值。<br />access_token的微信文档可参考：[https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)<br />**注：如果合作方没有维护access_token值或并不需要使用该值，推荐由拾果直接从微信获取并维护access_token，不需要对接本接口。**
<a name="poHXY"></a>
### 接口定义
<a name="443ae06dca469a8b9bc7320964449594"></a>
##### 接口路径： 合作方自定义
<a name="PKpui"></a>
##### 接口类型： GET
<a name="MMi9q"></a>
##### URL入参:
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| api_appKey | String | 应用ID （通过申请业务接入时获得） | 本接口入参主要用于校验请求是否合法，与获取微信后台access_token的过程无关 |
| api_version | String | API协议版本，当前值：1.0 |  |
| api_timestamp | Long | 请求时间戳（毫秒级） |  |
| api_sign | String | 加密校验字符串，加密方式见[API签名](/develop-cloud/api/sign)文档 |  |

<a name="Ti7YM"></a>
##### 返回数据说明：
| **字段** | **类型** | **描述** | **其他** |
| --- | --- | --- | --- |
| code | Integer | 返回码，默认200为正常 |  |
| message | String | 返回消息，仅用于记录日志 |  |
| data | JSON | 返回数据内容 |  |
| data.accessToken | String | 当前有效的小程序access_token |  |
| data.validSecond | Number | accessToken剩余有效时间，秒级,范围应该在0~7200之间 | 该值主要用于确认缓存accessToken的时间，如果为空，则不做缓存，每次重新调用接口获取 |

<a name="Lp5lg"></a>
##### 返回数据示例
```json
{
  	"code": 200,
  	"message":"success",
  	"data":{
      	"accessToken":"44_AhGSiD1GTVIclajkwLf6KEWIemgTtIBByU7bd8ZpBxXPADPj6sFDQerNoQ73QxJYZ72j3TajizmYy8BdkzEKrUZz4sAe_Okoy19qYaSKETUu4VxdDmzbeyaZHJFZQxNSlROdAu9INcN1PoD3ASXgCGAOGL",
      	"validSecond":1820 
    }
}
```

