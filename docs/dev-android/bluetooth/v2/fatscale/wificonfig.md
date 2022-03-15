<a name="avW90"></a>
## 蓝牙配网时序图

![](https://cdn.nlark.com/yuque/__puml/226e832c148016c4ebe88fa0878779fa.svg#lake_card_v2=eyJ0eXBlIjoicHVtbCIsImNvZGUiOiJAc3RhcnR1bWxcblxuYXV0b251bWJlclxuXG5hY3RvciBcIueUqOaIt1wiIGFzIFVzZXJcbnBhcnRpY2lwYW50IFwi5a6_5Li7QXBwXCIgYXMgQXBwXG5wYXJ0aWNpcGFudCBcIlNES1wiIGFzIFNESyAjb3JhbmdlXG5wYXJ0aWNpcGFudCBcIuiuvuWkh1wiIGFzIERldmljZVxuXG5hY3RpdmF0ZSBBcHBcblxuQXBwIC0-IFNESzrosIPnlKhpbml06L-b6KGM5Yid5aeL5YyWXG5hY3RpdmF0ZSBTREtcblxuU0RLIC0-IERldmljZTroh6rliqjov57mjqXorr7lpIdcbmFjdGl2YXRlIFVzZXJcblxuVXNlciAtPiBBcHA6IOeCueWHu-WPkei1t-mFjee9kea1geeoi1xuXG5BcHAgLT4gU0RLOiDosIPnlKhzY2FuV2lmaei_m-ihjOaJq-aPj1xuXG5TREsgLT4gRGV2aWNlOiDlj5HpgIHmiavmj4_mjIfku6RcbmFjdGl2YXRlIERldmljZVxuXG5EZXZpY2UgLT4gRGV2aWNlOiDoh6rliqjmiavmj4_lhbzlrrnnmoRXaWZp5L-h5oGvXG5cbkRldmljZSAtLT4gU0RLOuWPkemAgeaJq-aPj-e7k-aenFxuXG5TREsgLS0-IEFwcDrlm57osIPnu5Pmnpznu5lBcHBcblxuQXBwIC0tPiBVc2VyOuWRiOeOsHdpZmnliJfooajkv6Hmga9cblxuVXNlciAtPiBBcHA66YCJ5oup5LiA5LiqV2lmaeS_oeaBr--8jOi-k-WFpeWvhueggVxuXG5BcHAgLT5TREs66LCD55SoY29uZmlnV2lmaei_m-ihjOmFjee9kVxuXG5TREsgLT4gRGV2aWNlOuWPkemAgXNzaWTlkozlr4bnoIHorr7nva7mjIfku6RcblxuRGV2aWNlIC0-IERldmljZTroh6rliqjphY3nvZFcblxuRGV2aWNlIC0tPiBTREs65LiK5oql6YWN572R54q25oCBXG5cblNESyAtLT4gQXBwOuWbnuiwg-mFjee9kee7k-aenOWIsEFQUFxuXG5BcHAgLS0-IFVzZXI65pi-56S66YWN572R57uT5p6cXG5cbkBlbmR1bWwiLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sLzIyNmU4MzJjMTQ4MDE2YzRlYmU4OGZhMDg3ODc3OWZhLnN2ZyIsImlkIjoib0o2V28iLCJtYXJnaW4iOnsidG9wIjp0cnVlLCJib3R0b20iOnRydWV9LCJoZWlnaHQiOjQ4MCwiY2FyZCI6ImRpYWdyYW0ifQ==)
<a name="JAqSM"></a>
## C端方案参考

<a name="79oj9"></a>
### 扫描
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616761991909-c4fd62a6-104f-4978-b184-f0db01529f25.png#crop=0&crop=0&crop=1&crop=1&height=448&id=GLCMQ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=642&originWidth=728&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71904&status=done&style=none&title=&width=508)

<a name="3H79A"></a>
### 配置
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616762059152-bb8a8614-7e86-46b1-9dd0-d6c32a480ce7.png#crop=0&crop=0&crop=1&crop=1&height=626&id=LdW3L&margin=%5Bobject%20Object%5D&name=image.png&originHeight=626&originWidth=1536&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132179&status=done&style=none&title=&width=1536)
<a name="7EN1Q"></a>
#### 
<a name="SXiDs"></a>
## 接口使用
类：com.lifesense.android.ble.device.fatscale.FatScale
<a name="EhHTa"></a>
### 扫描WIFI信息
在对设备进行配网之前首先需要扫描
```java
scanWifi(String mac, Consumer<WifiInfo> receiver)
```
参数说明：<br />mac：设备蓝牙mac地址<br />receiver：扫描的WIFI信息回调

WifiInfo

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| ssid | String | ssid名称 |
| bssid | byte[] | wifi mac地址 |
| authMode | int |  |
| rssi | int | 信号强度 |
| status | WifiConnectState | 连接状态 |

WifiConnectState

| UNKNOWN | 未知状态 |
| --- | --- |
| CONNECTED | 连接的 |
| DISCONNECTEED | 未连接的 |

<a name="JMQf1"></a>
#### 
<a name="EJN2L"></a>
### 连接WIFI
```java
public void configWifi(String mac, String password, byte[] bssid, int status, Consumer<WifiConnectState> receiver)
```
参数说明：<br />mac：设备蓝牙mac地址<br />password：wifi密码<br />bssid：wifi mac地址<br />receiver：连接状态回调

<a name="sx7Qo"></a>
### 获取WIFI连接状态
```java
public void getWifiConnectStatus(String mac, Consumer<WifiConnectState> receiver)
```
mac：设备蓝牙mac地址<br />receiver：连接状态回调

