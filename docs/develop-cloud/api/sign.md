<a name="WEaMo"></a>
# API调用简介
API调用是基于HTTP协议来调用的，开发者可以直接通过调用http请求获取信息，调用过程中请求的封装，签名加密等，以下主要是针对自行封装HTTP请求进行API调用的原理进行详细解说。
<a name="s0"></a>
# 调用流程
调用过程如下：填充参数 > 生成签名 > 拼装HTTP请求 > 发起HTTP请求> 得到HTTP响应 > 解释json/xml结果
<a name="s1"></a>
# 调用入口
调用API的服务URL地址，云平台目前提供正式、测试环境。

| 调用环境 | 服务地址(HTTP) | 服务地址(HTTPS) |
| --- | --- | --- |
| 正式环境 | http://api.leshiguang.com/ | https://api.leshiguang.com/ |

<a name="s2"></a>
# 公共参数
调用任何一个API都必须传入的参数，目前支持的公共参数有：

| 参数名称 | 参数类型 | 是否必须 | 参数描述 |
| --- | --- | --- | --- |
| api_appKey | String | 是 | 合作商应用ID （通过申请业务接入时获得） |
| api_timestamp | String | 是 | 时间戳（当前系统时间戳）1分钟有效 |
| api_version | String | 是 | API协议版本，可选值：1.0。 |
| api_sign | String | 是 | （api_appKey + api_timestamp + api_version + appSecret）将上述参数按照ASC码先排序，然后拼接成一个字符串，再进行MD5计算(md5DigestAsHex)，转化成16进制字符(String，大写) |

<a name="s3"></a>
# 业务参数
API调用除了必须包含公共参数外，如果API本身有业务级的参数也必须传入，每个API的业务级参数请考API文档说明。
<a name="s4"></a>
# 签名算法
为了防止API调用过程中被黑客恶意篡改，调用任何一个API都需要携带签名，服务端会根据请求参数，对签名进行验证，签名不合法的请求将会被拒绝。目前支持的签名算法一种：MD5(md5DigestAsHex)，签名大体过程如下：

- 对相关参数（api_appKey、api_timestamp、api_version、appSecret），根据参数值的ASCII码表的顺序排序。
- 将排序好的参数值拼装在一起。
- 把拼装好的字符串采用utf-8编码，使用签名算法对编码后的字节流进行摘要。使用MD5算法加密，如：md5(value)；
- 将摘要得到的字节流结果使用十六进制表示，如：hex(“helloworld”.getBytes(“utf-8”)).toUpperCase = “68656C6C6F776F726C64”
<a name="ZJd94"></a>
## JAVA签名示例代码
```
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.DigestUtils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

//计算示例
public static String generateSign(String api_appKey,String api_timestamp,String api_version,String appSecret) {
       String[] arraySign = new String[]{api_timestamp,api_appKey,appSecret,api_version};
 			 String sign = generateSign(arraySign);---获取到密钥
}

//签名计算示例
public static String generateSign(String... contents) {
        String sign = Arrays.stream(contents).filter(StringUtils::isNotBlank)
                .sorted()
                .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                .toString();
        return DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase();
}

```
**​**<br />
<a name="vGi7T"></a>
## GO签名示例代码
```go
package main

import (
    "crypto/md5"
	"sort"
	"strings"
	"fmt"
)

func main() {
	paramArr := [] string {"1637138966894","1.0","your app key","your app key secret"}
	sort.Strings(paramArr) //参数值按照ASCII的顺序排序
	//fmt.Printf("%v\n",paramArr)
	
	str := strings.Join(paramArr,"") //拼接成字符串
    
    data := []byte(str)
    has := md5.Sum(data) //md5计算
    apiSign := fmt.Sprintf("%X", has) //将[]byte转成16进制
    
    fmt.Println(apiSign)
	
	
}
```
<a name="s5"></a>
# 调用示例
```
http://api.leshiguang.com/sport-rest/step/query/getDayStepInfoList?id=51&api_appKey=lx4ec9b2c924ea7283&api_sign=BD63FF28C0FC3434E552921D85FA8591&api_timestamp=1596527190000&api_version=1.0  +  对应接口的参数
```
示例代码见如下仓库：<br />​

[https://github.com/leshiguang/cloud-demo](https://github.com/leshiguang/cloud-demo)<br />​<br />
```java
WeightAlgorithmRequest request = WeightAlgorithmRequest.builder()
    .age(29)
    .weight(BigDecimal.valueOf(65))
    .height(BigDecimal.valueOf(1.68))
    .sex(1)
    .weightUnit(1)
    .resistance(BigDecimal.valueOf(500.0))
    .build();

ResultData<AsiaWeightIndexDTO> res = WeightAlgorithmCloudApi.getAsiaWeightIndexDTO(request);

System.out.println();
```

