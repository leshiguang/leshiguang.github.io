<a name="avW90"></a>
## 蓝牙配网时序图


![](https://cdn.nlark.com/yuque/__puml/226e832c148016c4ebe88fa0878779fa.svg#lake_card_v2=eyJjb2RlIjoiQHN0YXJ0dW1sXG5cbmF1dG9udW1iZXJcblxuYWN0b3IgXCLnlKjmiLdcIiBhcyBVc2VyXG5wYXJ0aWNpcGFudCBcIuWuv-S4u0FwcFwiIGFzIEFwcFxucGFydGljaXBhbnQgXCJTREtcIiBhcyBTREsgI29yYW5nZVxucGFydGljaXBhbnQgXCLorr7lpIdcIiBhcyBEZXZpY2VcblxuYWN0aXZhdGUgQXBwXG5cbkFwcCAtPiBTREs66LCD55SoaW5pdOi_m-ihjOWIneWni-WMllxuYWN0aXZhdGUgU0RLXG5cblNESyAtPiBEZXZpY2U66Ieq5Yqo6L-e5o6l6K6-5aSHXG5hY3RpdmF0ZSBVc2VyXG5cblVzZXIgLT4gQXBwOiDngrnlh7vlj5HotbfphY3nvZHmtYHnqItcblxuQXBwIC0-IFNESzog6LCD55Soc2NhbldpZmnov5vooYzmiavmj49cblxuU0RLIC0-IERldmljZTog5Y-R6YCB5omr5o-P5oyH5LukXG5hY3RpdmF0ZSBEZXZpY2VcblxuRGV2aWNlIC0-IERldmljZTog6Ieq5Yqo5omr5o-P5YW85a6555qEV2lmaeS_oeaBr1xuXG5EZXZpY2UgLS0-IFNESzrlj5HpgIHmiavmj4_nu5PmnpxcblxuU0RLIC0tPiBBcHA65Zue6LCD57uT5p6c57uZQXBwXG5cbkFwcCAtLT4gVXNlcjrlkYjnjrB3aWZp5YiX6KGo5L-h5oGvXG5cblVzZXIgLT4gQXBwOumAieaLqeS4gOS4qldpZmnkv6Hmga_vvIzovpPlhaXlr4bnoIFcblxuQXBwIC0-U0RLOuiwg-eUqGNvbmZpZ1dpZmnov5vooYzphY3nvZFcblxuU0RLIC0-IERldmljZTrlj5HpgIFzc2lk5ZKM5a-G56CB6K6-572u5oyH5LukXG5cbkRldmljZSAtPiBEZXZpY2U66Ieq5Yqo6YWN572RXG5cbkRldmljZSAtLT4gU0RLOuS4iuaKpemFjee9keeKtuaAgVxuXG5TREsgLS0-IEFwcDrlm57osIPphY3nvZHnu5PmnpzliLBBUFBcblxuQXBwIC0tPiBVc2VyOuaYvuekuumFjee9kee7k-aenFxuXG5AZW5kdW1sIiwidHlwZSI6InB1bWwiLCJtYXJnaW4iOnRydWUsImlkIjoib0o2V28iLCJ1cmwiOiJodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvX19wdW1sLzIyNmU4MzJjMTQ4MDE2YzRlYmU4OGZhMDg3ODc3OWZhLnN2ZyIsImhlaWdodCI6NDgwLCJjYXJkIjoiZGlhZ3JhbSJ9)

<a name="JAqSM"></a>
## C端方案参考


<a name="79oj9"></a>
### 扫描
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616761991909-c4fd62a6-104f-4978-b184-f0db01529f25.png#align=left&display=inline&height=448&margin=%5Bobject%20Object%5D&name=image.png&originHeight=642&originWidth=728&size=71904&status=done&style=none&width=508)<br />

<a name="3H79A"></a>
### 配置
![image.png](https://cdn.nlark.com/yuque/0/2021/png/265997/1616762059152-bb8a8614-7e86-46b1-9dd0-d6c32a480ce7.png#align=left&display=inline&height=626&margin=%5Bobject%20Object%5D&name=image.png&originHeight=626&originWidth=1536&size=132179&status=done&style=none&width=1536)
<a name="7EN1Q"></a>
#### 
<a name="SXiDs"></a>
## 接口使用
<a name="EhHTa"></a>
### 扫描WIFI信息
在对设备进行配网之前首先需要扫描
```java
scanWifi(String mac, Consumer<WifiInfo> receiver)
```
参数说明：<br />mac：设备蓝牙mac地址<br />receiver：扫描的WIFI信息回调<br />
<br />WifiInfo

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
参数说明：<br />mac：设备蓝牙mac地址<br />password：wifi密码<br />bssid：wifi mac地址<br />receiver：连接状态回调<br />

<a name="sx7Qo"></a>
### 获取WIFI连接状态
```java
public void getWifiConnectStatus(String mac, Consumer<WifiConnectState> receiver)
```
mac：设备蓝牙mac地址<br />receiver：连接状态回调<br />


