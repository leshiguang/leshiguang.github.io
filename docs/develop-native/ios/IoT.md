# 一、合作方式

## 1.1 合作模式介绍
![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1600939459266-546e3488-92ca-4555-b104-8c30556365b6.png#align=left&display=inline&height=247&margin=%5Bobject%20Object%5D&name=image.png&originHeight=419&originWidth=893&size=44163&status=done&style=none&width=526)<br />1、设备通过乐心提供的蓝牙SDK绑定设备、上传数据<br />2、数据经过SDK初步处理后， 以回调的方式给到客户APP<br />3、客户APP上传数据到自己的云平台进行数据存储<br />4、客户可在APP或云平台调用乐心开放平台提供的API进行数据分析（睡眠、体重等场景）

## 1.2、接入申请

### 1.2.1、接入声明
我司做接入控制的目的是为了控制设备的去处、了解出售设备的活跃状态及客户采买设备的使用场景。接入过程中， 仅存储设备和接入公司、组织的关联关系， 我司不会以任何方式存储用户身份信息及用户使用设备过程中产生的数据

## 1.2、SDK支持接入的设备
| 设备类型 | 型号 |
| --- | --- |
| 手环 | 乐心手环5S |
|  | MamboHR2 |
|  | MamboHR3 |
|  | 乐心手环5 |
|  | 乐心手环3 |
|  | Mambo |
|  | 其它手环 |
| 智能秤 | S12 |
|  | S11 |
|  | S9 |
|  | S5 Nana |
|  | A3-S |
|  | A1-F |
| 血压计 | i7蓝牙版 |

# 二、快速集成

## 2.1、蓝牙SDK下载
| 版本 | 下载地址 | 版本更新日志 |
| --- | --- | --- |
| 1.8.0 | [lifesense_ble_module_ios_1.0](http://qi4q5rivb.hn-bkt.clouddn.com/LS_UI_IoT_Bluetooth-SDK.zip) | 初始版本 |

## 2.2、项目依赖配置
1、项目中依赖的framework<br />LSAuthorization.framework         三方登录鉴权<br />LSBluetooth.framework              核心蓝牙库， 处理传输层和链路层数据，维持设备连接和通信<br />LSBluetoothUI_iOS.framework     乐智UI解决方案接入<br />LSDeviceManagerFramework.framework     设备核心库， 处理设备管理、设置和数据上传<br />LSNDBManager.framework         数据缓存处理<br />LSNetwork_iOS.framework         网络库，打通IOT平台<br />
<br />2、三方依赖库，可用pod导入

```objectivec
pod 'WCDB'
pod 'Protobuf'
pod 'YYModel'
pod 'Masonry'
pod 'IQKeyboardManager', '5.0.8'
pod 'SDWebImage', '4.2.3'
pod 'MBProgressHUD', '0.9.2'
```
3、在项目的build.gradle中添加依赖：<br />

- 在Build Phases 中添加framework

![截屏2020-10-13 下午2.31.25.png](https://cdn.nlark.com/yuque/0/2020/png/304678/1602570752301-87647211-24fe-4916-a7c3-2d2ddf9c99ad.png#align=left&display=inline&height=621&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2020-10-13%20%E4%B8%8B%E5%8D%882.31.25.png&originHeight=621&originWidth=788&size=62488&status=done&style=none&width=788)<br />自此，依赖配置完成

## 2.3 初始化SDK

### 2.3.1 初始化
1、引入头文件

```objectivec
#import <LSDeviceManagerFramework/LSDeviceManager.h>
#import <LSAuthorization/LSAuthorization.h>
```
2、设置代理

- 功能描述： LSDeviceComponentDelegate 设备连接绑定相关回调

```objectivec
//在需要实现代理方法的文件添加 LSDeviceComponentDelegate
@interface ViewController () <LSDeviceComponentDelegate>

[[LSDeviceManager shareInstance] addDelegate:self];

//实现代理方法
- (void)onBindStatusChange:(LSEBindStatusCode)bindCode device:(Device *)device deviceUsers:(NSArray<DeviceUser *> *)deviceUsers netCode:(NSInteger)netCode netMsg:(NSString *)netMsg object:(NSObject *)object {}

- (void)onDeviceConnectStateChange:(BluetoothConnectState)connectState broadcastId:(NSString *)broadcastId {}
```
3、开启调试模式

- 功能描述：开启调试模式后所有账号鉴权，IOT平台数据同步均为开发环境

```objectivec
[[LSDeviceManager shareInstance] openDebug];
```
4、登录

- 功能描述：三方登录鉴权
- 接口：

```objectivec
/// 第三方账号授权登录
/// @param tenantId 租户ID
/// @param subscriptionId 订阅ID
/// @param associatedId 第三方账号
/// @param complete 授权信息
- (void)authorize:(NSInteger)tenantId andSubscribe:(NSInteger)subscriptionId andThirdUserId:(NSString *)associatedId callback:(void (^)(LSAccountAuthorizeResponse *)) complete;
```

* 参数：

tenantId， subscriptionId需要走申请流程（测试接入两个值可以固定为1、6）<br />
申请接入需要的材料 <br />
准备申请材料：<br />
1. 确定应用接入的（企业）组织名称，并说明使用场景、用途、评估应用接入的量级 <br />
2. 确定应用的bundle identifier（appid会对使用的app进行合法性校验）<br />
3. 确定应用需要接入的设备型号列表（如果是进行设备鉴权的话必须填写）<br />
4. 确定应用需要接入的服务（设备、算法、软件服务包）名称（用于获得服务ID和服务版本）<br />
材料确定后，发送申请接入邮件模板如下(前期以这种流程走， 后续sass平台将实现流程化接入)：<br />

```
收件人：zhihui.xiao@lifesense.com
抄送：zheng.lu@lifesense.com,yong.wu@lifesense.com,zhicheng.liu@lifesense.com,chuang.liu@lifesense.com,bangwei.mo@lifesense.com
主题：【健康解决方案接入申请】（企业/组织/个人名称）
邮件内容需要包含：
1、接入目的：
2、接入的设备类型和型号：
3、接入的产品服务：
4、bundleID：（ios和android的包ID， 用于备案）
```
5、设置LSDeviceManager登录态

- 功能描述：设置用户Id到LSDeviceManager
- 接口：

```objectivec
- (void)loginWithUserId:(NSString *)userId;
```

### 2.3.3、开启自动接收数据的服务

```objectivec
[[LSDeviceManager shareInstance] startDataReceiveService];
```

### 2.3.4、停止数据接收服务
```objectivec
[[LSBLEDeviceManager defaultLsBleManager] stopDataReceiveService];
```

# 三、绑定设备

## 3.1、搜索绑定设备

### 3.1.1、搜索设备

- 功能描述：_根据设备类型列表、设备的广播类型搜索附近的乐心设备_
- 接口:

```objectivec
/// 搜索设备,在结束配对流程后需要调用调用startDataReceiveService
/// @param productInfo 设备信息
/// @param searchBlock 回调
- (void)searchDevice:(LSEProductInfo *)productInfo searchBlock:(LSESearchBlock)searchBlock;
```

- 参数定义：

| 类型 | Name | 说明 |
| --- | --- | --- |
| LSEProductInfo | productInfo | 在数据结构中查看详细参数 |
| LSESearchBlock | searchBlock | /**<br /> 搜索设备回调<br /> @param info 设备信息<br /> @param rssi 信号强度，越小越强<br /> */ <br />typedef void(^LSESearchBlock)(LSEDeviceInfo *info, NSInteger rssi); |


### 3.1.2、停止搜索设备

- 功能描述：中断正在进行中的搜索，一般在离开搜索页面或搜索结束时调用
- 接口：

```objectivec
/// 停止搜索设备
/// @param stopSearchBlock 停止收缩回调
- (void)stopSearchDevice:(LSEStopSearchBlock)stopSearchBlock;
```

### 3.1.3、 配对或绑定设备

- 功能描述：开始绑定用户从搜索到的设备列表中（来自[3.2.1](#d4d1c408)）选择的设备
- 接口：

```objectivec
/// 绑定手环
/// @param deviceInfo 设备信息
- (void)pairDevice:(LSEDeviceInfo *)deviceInfo;
```

#### 3.1.3.1、绑定设备的回调

- 功能描述：回调绑定设备的相关信息，根据返回的状态码进制下一步操作；在收到设备绑定成功的回调后需要调用3.2.1（设备连接方法）重新进行设备连接，这样才能打开设备未被开启的使能通道
- 接口：

```objectivec
/**
 绑定状态回调接口, device和deviceUsers只有在LSEBindStatusSuccessful时才有值

 @param bindCode 绑定状态
 @param device 设备信息
 @param deviceUsers 设备用户信息
 @param netCode 网络错误的代码
 @param netMsg  网络错误的消息
 @param object  如果bindCode是输入随机码状态LSEBindStatusInputCode，object表示随机码长度，数据类型为NSNumber，如果是其他状态码，object为nil
 */
- (void)onBindStatusChange:(LSEBindStatusCode)bindCode device:(Device *)device deviceUsers:(NSArray<DeviceUser *> *)deviceUsers netCode:(NSInteger)netCode netMsg:(NSString *)netMsg object:(NSObject *)object;
```

#### 3.1.3.2、绑定手环校验码

- 功能描述：绑定手环需要输入随机码，随机码会在3.1.3.1（绑定设备回调中返回）
- 接口：

```objectivec
/// 用户绑定手环校验码
/// @param code 校验码
/// @param deviceInfo 设备信息
- (void)inputCode:(NSString *)code deviceInfo:(LSEDeviceInfo *)deviceInfo;
```

#### 3.1.3.3、取消配对

- 功能：取消正在执行的配对或绑定操作
- 接口：

```objectivec
/// 取消绑定
/// @param deviceInfo 设备信息
/// @param completion
- (void)cancelPair:(LSEDeviceInfo *)deviceInfo completionBlock:(Completion)completion;
```

- 调用示例

```objectivec
[[LSDeviceManager shareInstance] cancelPair:deviceInfo completionBlock:^(SettingCode code) {
    if (code == SettingCodeSuccess) {
        //绑定成功
    }
}];
```
<a name="ASb8P"></a>
### 3.1.4、绑定的设备列表

- 功能描述：获取已绑定的设备列表，可以从这里获取到当前用户已经绑定的设备，然后筛选出自己的目标设备进行重新连接的操作
- 接口：

```objectivec
/// 获取已绑定的设备列表
/// @param userId 用户id
/// @param completion 已绑定的设备列表回调
- (void)getBoundDevices:(NSNumber *)userId Completion:(void(^)(int code,NSString *msg,NSArray <Device *>*deviceList))completion;
```

- 调用示例：

```objectivec
[[LSDeviceManager shareInstance] getBoundDevices:@([self.lzUserId integerValue]) Completion:^(int code, NSString *msg, NSArray<Device *> *deviceList) {
    if (code != 200) return;
    if (deviceList.count == 0) {
        NSLog(@"---------没有绑定设备");
    }
    for (Device *device in deviceList) {
        if ([device.model isEqualToString:@"GBF-2008-BF1"]) {
            NSLog(@"找到目标设备-----------%@",device);
            self.deviceId = device.id;
            self.macStr = device.mac;
            //找到目标设备后重新连接
            [[LSDeviceManager shareInstance] connectDeviceWithDeviceInfo:device];
            break;
        }
    } 
}];
```

## 3.2、设备连接

### 3.2.1、连接设备

- 功能：连接已经被绑定过的设备
- 接口：

```objectivec
/// 连接设备
/// @param deviceInfo 设备信息
- (void)connectDeviceWithDeviceInfo:(Device *)deviceInfo;
```

### 3.2.2、断开连接

- 功能：断开当前已经连接的设备
- 接口：

```objectivec
/// 断开设备连接
/// @param broadcastId 设备信息
- (void)disConnectWithDeviceInfo:(NSString *)broadcastId;
```

### 3.3.3、检查设备的链接状态

- 功能：检查设备当前的连接状态
- 接口：

```objectivec
/// 检测蓝牙设备连接状态
/// @param broadcastId 设备广播id
- (BOOL)checkDeviceConnectionStateWithBroadcastId:(NSString *)broadcastId;
```
<a name="K1Ofz"></a>
## 3.3、解除绑定

- 功能：接触用户和设备的绑定关系
- 接口：

```objectivec
/// 解除绑定 (非血压计调用)
/// @param deviceId 设备id
/// @param userId 用户id
/// @param completion 回调
- (void)unBindingDevice:(NSString *)deviceId userId:(NSNumber *)userId Completion:(void(^)(int code,NSString *msg))completion;

/// 解除绑定 (血压计调用)
/// @param deviceId 设备id
/// @param userId 用户id
/// @param completion 回调
- (void)unBindingDeviceAndDeleteAllUsers:(NSString *)deviceId userId:(NSNumber *)userId Completion:(void(^)(int code,NSString *msg))completion;
```

# 四、数据同步和回调

## 4.1、开启数据同步

- 功能：启动测量数据自动同步服务，服务启动后，会自动连接设备、收发设备上传的测量数据
- 接口：

```objectivec
/// 开启数据同步
- (BOOL)startDataReceiveService;
```

## 4.2、结束（停止）数据同步

- 功能：停止测量数据的自动同步服务（建议退出登录时必须调用）
- 接口：

```objectivec
/// 停止测量数据接收服务
- (BOOL)stopDataReceiveService;
```

## 4.3、设备数据回调

### 4.3.1、手环测量数据回调

- 功能：返回手环测量的相关数据，具体数据类型根据BraceletReceiveDataType枚举来判断，详细参数请在数据结构中查看
- 接口：

```objectivec
/// 手环测量数据
/// @param data 数据model
/// @param type 数据枚举类型
- (void)onReceiveBraceletData:(id)data dataType:(BraceletReceiveDataType)type;
```

- 调用示例

```objectivec
//设置代理
[LSDeviceManager shareInstance].braceletDataDelegate = self;

//实现代理方法
- (void)onReceiveBraceletData:(id)data dataType:(BraceletReceiveDataType)type {
    NSString *className = NSStringFromTransactionState(type);
    Class cls = NSClassFromString(className);
    if (![data isKindOfClass:cls]) {
        return;
    }
    switch (type) {
        case WalkingDataType: {
            WalkingData *walkingData = [[cls alloc] init];
            walkingData = (WalkingData *)data;
        }
            break;
            
        default:
            break;
    }
}
```

- 参数：根据BraceletReceiveDataType匹配对用的数据model

| BraceletReceiveDataType 枚举 | 数据model | 说明 |
| --- | --- | --- |
| WalkingDataType | WalkingData | 步数数据 |
| HeartRateDataType | HeartRateData | 日常心率 |
| SportHeartRateDataType | SportHeartRateData | 运动心率 |
| SleepingDataType | SleepingData | 睡眠 |
| UWalkingDataType | UWalkingData | 健走 |
| SportStateDataType | SportStateData | 手环通知手机进入运动模式数据 |
| SwimmingDataType | SwimmingData | 游泳 |
| RunningDataType | RunningData | 跑步数据 |
| LSCyclingDataType | LSBaseSportData | 骑行 |
| LSYogaDataType | LSBaseSportData | 瑜伽 |
| LSFitnessDataType | LSBaseSportData | 健身 |
| LSBasketballDataType | LSBaseSportData | 篮球 |
| LSFootballDataType | LSBaseSportData | 足球 |
| LSBadmintonDataType | LSBaseSportData | 羽毛球 |
| LSVolleyballDataType | LSBaseSportData | 排球 |
| LSTableTennisDataType | LSBaseSportData | 乒乓球 |
| ExsportDataType | LSBaseSportData | 电竞 |
| LSTaiJiDataType | LSBaseSportData | 太极 |
| IndoorRunSportDataType | UWalkingData | 室内跑 |
| EllipticalTrainerSportDataType | LSBaseSportData | 椭圆机 |
| OxSportDataType | LSBaseSportData | 有氧运动 |
| GymDanceType | LSBaseSportData | 健身舞 |
| RunningCaloriesDataType | RunningCaloriesData | 步数卡路里数据 |


### 4.3.2、血压测量数据回调

- 功能：返回血压测量数据，详细参数请在数据结构中查看
- 接口：

```objectivec
/// 血压测量数据
/// @param bloodPressureData model
- (void)onReceiveBloodPressureMeasureData:(LSSphygmometerData *)bloodPressureData;
```

- 调用示例

```objectivec
//设置代理
[LSDeviceManager shareInstance].braceletDataDelegate = self;

//实现代理方法
- (void)onReceiveBloodPressureMeasureData:(LSSphygmometerData *)bloodPressureData {

}
```

### 4.3.2、体重数据回调

- 功能：返回体重测量数据，详细参数请在数据结构中查看
- 接口：

```objectivec
/// 体重数据
/// @param weightData model
- (void)onReceiveScalesWeightData:(WeightData *)weightData;
```

- 调用示例

```objectivec
//设置代理
[LSDeviceManager shareInstance].braceletDataDelegate = self;

//实现代理方法
- (void)onReceiveScalesWeightData:(WeightData *)weightData {
   
}
```

### 4.3.3、wifi扫描结果回调

- 功能：通过蓝牙方式配网的秤调用，获取到当前设备扫描到的wifi信息
- 接口：

```objectivec
/// wifi扫描结果回调
/// @param ssidNameAry model
- (void)onReceiveSaclesSsidName:(LSScaleWifiModel *)wifiMode;
```

### 4.3.4、wifi连接状态回调

- 功能：通过蓝牙方式配网的秤调用，获取当前wifi配网状态
- 接口

```objectivec
/// 接收wifi连接状态回调
/// @param state 0成功 1失败
- (void)onReceiveScalesWifiConnectState:(NSInteger *)state;
```

# 五、下发设置

## 5.1、体脂(体重)秤设置

### 5.1.1、设置秤的用户信息

- 功能：设备脂肪秤或体重秤的用户信息
- 接口：

```objectivec
/// 设置A6体重秤的用户信息
/// @param deviceId 设备id
/// @param userInfo 用户信息
/// @param completion 回调
- (void)setScaleUserInfo:(NSString *)deviceId userInfo:(LSEScaleUserInfoCfg *)userInfo completion:(Completion)completion;
```

### 5.1.2、设置重量单位

- 功能：更新设备（互联秤）的体重单位
- 接口：

```objectivec
/// 设置体重单位
/// @param deviceId deviceId
/// @param unitType 体重单位
/// @param completion 回调
-(void)setWeightUnit:(NSString *)deviceId unitType:(UnitType)unitType completion:(Completion)completion;
```

### 5.1.3、扫描wifi

- 功能：支持通过蓝牙进行wifi配网的设备调用
- 接口：

```objectivec
/// 扫描wifi
/// @param deviceId 设备id
- (void)scanWifiWith:(NSString *)deviceId;
```

### 5.1.4、蓝牙wifi配网

- 功能：连接wifi配网能力
- 接口：

```objectivec
/// 连接wifi
/// @param bssid bssid
/// @param pwd wifi密码
/// @param deviceId 设备id
- (void)connectWifi:(NSString *)bssid password:(NSString *)pwd deviceId:(NSString *)deviceId;
```

## 5.2、手环设置

### 5.2.1、设置手环用户信息

- 功能：设置手环相关信息
- 接口：

```objectivec
/// 设置手环设置项
/// @param data 设置数据model
/// @param deviceId 设备Id
/// @param setType 设置项类型
/// @param completion 设置回调
- (void)setBraceletWithData:(id)data deviceId:(NSString *)deviceId setType:(LSBraceletSettingStateType)setType completion:(Completion)completion;
```

- 参数：根据手环设置项LSBraceletSettingStateType枚举来匹配对应的数据model

| LSBraceletSettingStateType 枚举 | 设置项数据model类 | 说明 |
| --- | --- | --- |
| LSSwimmingLenghtSetType | LSESwimmingInfoCfg | 设置游泳池长度 |
| LSSportPagesSetType | LSSportItemSwitch | 运动项设置 |
| LSStepTargetSetType | StepTargetCfg | 设置步数目标 |
| LSHeartRateMeatureSetType | HeartrateSwitchCfg | 心率监测设置 |
| LSEncourageSetType | EncourageCfg | 步数、卡路里、距离目标设置 |
| LSSedentaryInfoType | SedentaryCfg | 久坐提醒设置 |
| LSHeartRateRemindSetType | LSEHRRemindCfg | 心率预警 |
| LSNightModeSetType | NightModeCfg | 夜间模式设置 |
| LSMsgReminderSetType | MessageReminderCfg | 消息提醒 |
| LSNoDisturbModeSetType | NoDisturbModeCfg | 勿扰模式 |
| LSTimeTypeSetType | TimeFormatCfg | 时间制式 |
| LSWristStateSettype | WearStateCfg | 佩戴习惯 |
| LSScreenDirectionSetType | ScreenDirectionCfg | 设置屏幕方向 |
| LSScreenContentSetType | ScreenContentSwitch | 自定义屏幕 |
| LSAutomaticSportsSetType | LSEAutomaticSportstypeCfg | 自动识别多运动类型 |
| LSDialTypeSetType | LSEDialModelCfg | 设置手环表盘 |
| LSWeatherDataSetType | LSEWeatherData | 设置天气 |
| LSSportInfoSetType | LSESportsInfoCfg | 设置运动信息 |
| LSAlarmClockSetType | AlarmClockCfg | 设置闹铃 |

### 5.2.2、获取手环设置项

- 功能：获取手环相关设置项
- 接口：

```objectivec
/// 获取手环设置项
/// @param deviceId 设备Id
/// @param setType 设置项类型
- (id)redBraceletWithDeviceId:(NSString *)deviceId setType:(LSBraceletSettingStateType)setType;
```

### 5.2.3、开启获取实时心率

- 功能：获取手环实时心率
- 接口：

```objectivec
/// 开启获取实时心率
/// @param device 设备信息
/// @param completeHandler 开启实时心率结果状态，查看枚举LSRealTimeResultStatus
- (void)enableRealTimeHeartRateAcquisition:(Device *)device completeHandler:(RealTimeHRStatusBlock)completeHandler;

```

### 5.2.4、关闭获取实时心率

- 功能：关闭手环实时心率
- 接口

```objectivec
/// 关闭获取实时心率
/// @param device 设备信息
/// @param completeHandler 关闭实时心率结果状态，查看枚举LSRealTimeResultStatus
- (void)disableRealTimeHeartRateAcquisition:(Device *)device completeHandler:(RealTimeHRStatusBlock)completeHandler;
```

### 5.2.5、读取设备电量

- 功能：读取设备电量
- 接口：

```objectivec
/**
 *  获取电量信息
 *  @param deviceId 设备Id
 *  @return 如果电量存在返回相应的电量值（0 ～ 1），没有则返回nil
 */
- (NSNumber *)getDeviceBatteryWithDeviceId:(NSString *)deviceId;
```

### 5.2.6、更新手机GPS状态到手环显示界面

- 功能：设置手机GPS状态到手环
- 接口：

```objectivec
/**
 设置GPS状态到手环（手环界面显示）
 @param enable GPS是否可用
 */
- (void)setGPSState:(NSString *)deviceId enable:(BOOL)enable completion:(Completion)completion;
```

# 六、配网

## 6.1、获取wifi配置状态

- 功能：获取wifi配置状态，已配置会返回当前ssid，未配置会返回nil
- 接口：

```objectivec
/**
 *  获取WiFi配置状态
 *
 *  @param deviceId 设备Id
 *  @param completion 回调
 */
- (void)getDevWiFiStatusWithDeviceId:(NSString *)deviceId Completion:(void(^)(WiFiCfg *cfg))completion;
```

## 6.2、配置wifi设备密码

- 功能：配置wifi设备密码
- 接口：

```objectivec
/**
 *  配置wifi设备密码
 *
 *  @param deviceId   设备id
 *  @param ssid       wifi名称
 *  @param passWord   密码
 *  @param completion 回调
 */
- (void)configWifiDevice:(NSString *)deviceId ssid:(NSString *)ssid passWord:(NSString *)passWord Completion:(void(^)(AirKissCode code, LSEWifiConfigType type, NSUInteger time))completion;
```

## 6.3、中断wifi设备密码配置

- 功能：断开当前设备wifi密码配置
- 接口

```objectivec
/**
 *  中断wifi设备密码配置
 */
- (void)interruptConfigWifiDevice;
```

# 七、固件升级

## 7.1、开始升级固件

- 功能：升级设备固件
- 接口：

```objectivec
/// 升级设备固件（ota）
/// @param deviceId 设备id
/// @param hexFile 升级包
- (void)upgradeDevice:(NSString *)deviceId hexFile:(NSString *)hexFile;
```

## 7.2、中断固件升级

- 功能：取消当前设备的固件升级操作；设备屏幕当前显示的内容是“Update Mode”表示设备已进入升级模

式，“Updating……”表示升级过程中。

- 接口：

```objectivec
/// 取消升级设备(ota)
- (void)cancelUpgradeDevice;
```

# 八、数据结构
SDK 接口使用的实体类
### 8.1.1、BraceletReceiveData （手环数据父类，包含基本设备信息和用户信息）

```objectivec
/// 数据唯一id UUID
@property (nonatomic, copy) NSString *dataId;
/// 用户id
@property (nonatomic, copy) NSNumber *userId;
/// 设备id 必传
@property (nonatomic, copy) NSString *deviceId;
/// 软件版本
@property (nonatomic, copy) NSString *softVer;
/// 设备型号
@property (nonatomic, copy) NSString *model;
```

### 8.1.2、LSEDeviceInfo（设备厂商信息）

```objectivec
/// 设备展示名称
@property (nonatomic, copy) NSString *displayName;
/// 设备广播名
@property (nonatomic, copy) NSString *name;
/// 设备MAC地址
@property (nonatomic, copy) NSString *mac;
/// 型号
@property (nonatomic ,strong) NSString *model;
/// 协议版本
@property (nonatomic ,strong) NSString *protocolType;
/// rssi 信号强度，越小越强
@property (nonatomic, assign) NSInteger rssi;
/// 是否注册
@property (nonatomic, assign) BOOL isReg;
/// 厂商ID
@property (nonatomic, strong) NSString *vendorID;
/// 广播Id
@property (nonatomic, strong) NSString *broadcastId;
/// 设备类型
@property (nonatomic, assign) int deviceType;
```

### 8.1.3、WalkingData（步数数据）

```objectivec
/// 步数
@property (nonatomic, copy) NSNumber *step;
/// 卡路里
@property (nonatomic, copy) NSNumber *calories;
/// 里程
@property (nonatomic, copy) NSNumber *distance;
/// 数据来源
@property (nonatomic, copy) NSNumber *dataSource;
/// 请求上传时间 可以为null
@property (nonatomic, copy) NSNumber *requestTime;
/// 测量时间
@property (nonatomic, copy) NSNumber *measurementTime;
```

### 8.1.4、HeartRateData （日常心率）

```objectivec
/// 测量开始时间
@property (nonatomic, copy) NSNumber *measurementDate;
/// utc偏移量
@property (nonatomic, copy) NSNumber *utcoffset;
/// 心率数据列表
@property(nonatomic,strong)NSArray <NSNumber *>*heartRateList;
/// 原始数据
@property (nonatomic, strong)NSData *srcData;
```

### 8.1.5、SportHeartRateData （运动心率）

```objectivec
/// 偏移量
@property(nonatomic,assign)int utcoffset;
/// 心率数据列表
@property(nonatomic,strong)NSArray <NSNumber *>*heartRates;
/// 原始数据
@property (nonatomic, strong)NSData *sourceData;
/// 当前数据条数
@property(nonatomic,assign)NSInteger currentCount;
/// 测量开始时间
@property (nonatomic,strong) NSNumber *measurementTime;
```

### 8.1.6、SleepingData （睡眠）

```objectivec
/// 原始数据唯一ID uuid
@property (nonatomic, copy) NSString *id;
/// 设备剩余多少条数据
@property(nonatomic,assign)int restCount;
/// 每次测量的时间偏移单位
@property(nonatomic,assign)int utcoffset;
/// 睡眠状态数据列表
@property(nonatomic,strong)NSArray<NSNumber*>*statusList;
/// 原始数据
@property (nonatomic, strong)NSData *sourceData;
/// 当前数据条数
@property(nonatomic,assign)NSInteger currentCount;
/// 测量时间
@property (nonatomic, copy) NSNumber *measurementTime;
/// 创建时间
@property (nonatomic, copy) NSNumber *createTime;
```

### 8.1.7、UWalkingData （健走）

```objectivec
/// 健走总步数
@property (nonatomic, assign)  int step;
/// 获取健走频率信息(只读)
@property (nonatomic, strong)  NSArray<LSDMWalkingFreqInfo *> *walkFreqList;
```

### 8.1.8、SportStateData （手环通知手机进入运动模式数据）

```objectivec
/// 功能检测
@property (nonatomic,assign) LSEFunctionTestType functionTest;
/// 开关状态
@property (nonatomic,assign) int state;
// 运动类型，0x00：预留,0x01：跑步,0x02：健走,0x03：骑行,0x04：游泳,0x05：健身
@property (nonatomic, assign) LSESportModeType type;
```

### 8.1.9、SwimmingData （游泳）

```objectivec
/// 游泳圈数
@property (nonatomic, assign) NSUInteger laps;
```

### 8.2.0、RunningData （跑步数据）

```objectivec
/// 跑步总步数
@property(nonatomic,assign)int totalStep;
/// 运动频率数据
@property(nonatomic,strong)NSArray <RunningState *> *runningStates;
```

### 8.2.1、LSBaseSportData （骑行、瑜伽、健身、篮球、足球、羽毛球、排球、乒乓球、电竞、太极、椭圆机、有氧运动、健身舞）

```objectivec
/// 上传服务器锻炼类型 (1,"跑步"),(2,"健走"),(3,"骑行"),(4,"游泳"),(5,"健身"),(6,"篮球"),(7,"足球"),(8,"羽毛球"),(9,"排球"),(10,"乒乓球"),(11,"瑜伽"),(12,"电竞"),(15,"室内跑"),(16,"椭圆机"),(19,"健身操"),(20,"打太极"),(21,"力量训练")
@property (nonatomic, assign) NSInteger exerciseType;
/// 子运动模式
@property(nonatomic, assign) int sportSubMode;、
/// 运动模式 (骑行0x03 健身0x05 篮球0x0a 足球0x0b 羽毛0x0c 排球0x0d 乒乓球0x0e 瑜伽0x0f)
@property(nonatomic, assign) int sportMode;
/// 开始时间
@property(nonatomic, copy) NSNumber *startTime;
/// 结束时间
@property(nonatomic, copy) NSNumber *endTime;
/// 运动时间
@property(nonatomic, assign) int exerciseTime;
/// 消耗卡路里
@property(nonatomic, assign) double calories;
/// 最大心率
@property(nonatomic, assign) int maxHeartRate;
/// 平均心率
@property(nonatomic, assign) int avgHeartRate;
/// 平均步频
@property (nonatomic, assign) NSInteger avgSportFrequency;
/// 最大步频
@property (nonatomic, assign) NSInteger maxSportFrequency;
/// 最大速度（km/h）
@property(nonatomic, assign) double maxSpeed;
/// 运动平均速度
@property (nonatomic, assign)  float avgSpeed;
/// 距离
@property (nonatomic, copy) NSNumber *distance;
```

### 8.2.2、UWalkingData （室内跑）

```objectivec
/// 健走总步数
@property (nonatomic, assign)  int step;
/// 获取健走频率信息(只读)
@property (nonatomic, strong)  NSArray<LSDMWalkingFreqInfo *> *walkFreqList;
```

### 8.2.3、RunningCaloriesData （步数卡路里数据）

```objectivec
/// 卡路里数据类型，新或旧，如果是新的，则sportMode和subMode的值有意义。 如果是旧的，则sportMode和subMode无意义，不要使用
@property (nonatomic, assign) LSDMSportCaloriesDataType type;
/// 产生卡路里的运动类型
@property (nonatomic, assign) LSDMSportModeType sportMode;
/// 运动子模式
@property (nonatomic, assign) LSDMSubModeType subMode;
/// utc偏移量
@property (nonatomic, assign) int utcoffset;
/// 卡路里列表
@property (nonatomic, strong) NSArray<NSNumber *> *calorieList;
/// 原始数据
@property (nonatomic, strong)NSData *sourceData;
/// 当前数据条数
@property(nonatomic,assign)NSInteger currentCount;
/// 测量时间
@property (nonatomic, assign) long long *measurementTime;
```

### 8.2.4、LSESwimmingInfoCfg （设置游泳池长度）

```objectivec
/// 泳池长度
@property(nonatomic, assign) NSUInteger poolLength;
```

### 8.2.5、LSSportItemSwitch （运动项设置）

```objectivec
/// 类型
@property (nonatomic, assign) LSSportItemType type;
/// 开/关
@property (nonatomic, assign) BOOL state;
```

### 8.2.6、StepTargetCfg （设置步数目标）

```objectivec
/// 步数
@property(nonatomic,assign)int step;
```

### 8.2.7、HeartrateSwitchCfg （心率监测设置）

```objectivec
/// 设置类型
@property (nonatomic, assign) HeartrateSwitchType type;
```

### 8.2.8、EncourageCfg （步数、卡路里、距离目标设置）

```objectivec
/// 目标值,已抛弃,切勿使用
@property(nonatomic,assign) int steps;
/// 鼓励类型
@property(nonatomic,assign) LSEEncourageTargetType type;
/// 是否开启
@property(nonatomic,assign) BOOL isOpen;
/// 目标值
@property(nonatomic,assign) float value;
/// 步数 （A6 H1_watch）
@property(nonatomic,assign) int stepNum;
/// 卡路里 （A6 H1_watch）
@property(nonatomic,assign) float caloriesNum;
/// 距离 （A6 H1_watch）
@property(nonatomic,assign) float distanceNum;
```

### 8.2.9、SedentaryCfg （久坐提醒设置）

```objectivec
/// 是否打开闹钟
@property(nonatomic,assign)BOOL enable;
/// 闹钟开始时间（时）
@property(nonatomic,assign)int startHour;
/// 闹钟开始时间（分）
@property(nonatomic,assign)int startMin;
/// 闹钟结束时间（时）
@property(nonatomic,assign)int endHour;
/// 闹钟结束时间（分）
@property(nonatomic,assign)int endMin;
/// 久坐提醒的频次 (min)
@property(nonatomic,assign)int sedentaryTime;
/// 重复时间
@property(nonatomic,copy) NSString *weeks;
```

### 8.3.0、LSEHRRemindCfg （心率预警）

```objectivec
/// 心率上限
@property (nonatomic ,assign) NSInteger heartRateMax;
/// 心率下限
@property (nonatomic ,assign) NSInteger heartRateMin;
/// 心率提醒开关
@property (nonatomic ,assign) BOOL isOpen;
```

### 8.3.1、NightModeCfg （夜间模式设置）

```objectivec
/// 是否打开夜间模式
@property (nonatomic, assign) BOOL isOpen;
/// 与isOpen一样，不用设置该值，这里只是为了兼容android的json序列化与UI不需要更改而加的值
@property (nonatomic, assign) BOOL open;
/// 开始时间（时）
@property (nonatomic, assign) NSUInteger startHour;
/// 开始时间（分）
@property (nonatomic, assign) NSUInteger startMinute;
/// 结束时间（时）
@property (nonatomic, assign) NSUInteger endHour;
/// 结束时间（分）
@property (nonatomic, assign) NSUInteger endMinute;
```

### 8.3.2、MessageReminderCfg （消息提醒）

```objectivec
/// 设置的运动项
@property(nonatomic, strong) NSArray<MessageReminderCfg *> *items;
```

### 8.3.3、NoDisturbModeCfg （勿扰模式）

```objectivec
/// 是否打开勿扰模式
@property (nonatomic, assign) BOOL isOpen;
/// 勿扰模式下是否抬手亮屏
@property (nonatomic, assign) BOOL isRaise;
/// 开始时间（时）
@property (nonatomic, assign) NSUInteger startHour;
/// 开始时间（分）
@property (nonatomic, assign) NSUInteger startMinute;
/// 结束时间（时）
@property (nonatomic, assign) NSUInteger endHour;
/// 结束时间（分）
@property (nonatomic, assign) NSUInteger endMinute;
```

### 8.3.4、TimeFormatCfg （时间制式）

```objectivec
/// 手环时间显示类型（时制）
@property (nonatomic, assign) TimeType type;
```

### 8.3.5、WearStateCfg （佩戴习惯）

```objectivec
/// 穿戴习惯设置类
@interface WearStateCfg : NSObject
/// 穿戴类型
@property (nonatomic, assign) WearStateType type;
```

### 8.3.6、ScreenDirectionCfg （设置屏幕方向）

```objectivec
/// 手环显示方向设置类
@interface ScreenDirectionCfg : NSObject
/// 显示方向
@property (nonatomic, assign) ScreenDirectionType type;
```

### 8.3.7、ScreenContentSwitch （自定义屏幕）

```objectivec
/// 类型
@property (nonatomic, assign) ScreenContentType type;
/// 开/关
@property (nonatomic, assign) BOOL state;
```

### 8.3.8、LSEAutomaticSportstypeCfg（自动识别多运动类型）

```objectivec
/// 运动类型
@property (nonatomic, assign) LSEAutomaticSportstype automaticSportstype;
/// 自动识别开关
@property (nonatomic, assign) BOOL isOpen;
```

### 8.3.9、LSEDialModelCfg（设置手环表盘）

```objectivec
/// 表盘模式
@property (nonatomic, assign) LSEDialModelType type;
```

### 8.4.0、LSEWeatherData（设置天气）

```objectivec
/// 天气更新的时间utc(天气获取时刻的时间，不是手机系统的时间)
@property (nonatomic, assign) long long updateTime;
@property (nonatomic, strong) NSString *where;
/// 查看已经添加的未来天气信息对象
@property (nonatomic, strong) NSArray<LSEFutureWeatherModel*> *weatherModels;
```

### 8.4.1、LSESportsInfoCfg（设置运动信息）

```objectivec
/// 配速(单位：s)
@property(nonatomic, assign) NSUInteger speed;
/// 距离(单位：m)
@property(nonatomic, assign) NSUInteger distance;
```

### 8.4.2、AlarmClockCfg（设置闹铃）

```objectivec
/// 事件提醒序号
@property (nonatomic, assign) int index;
/// 是否打开闹钟
@property(nonatomic,assign) BOOL enable;
/// 重复时间
@property(nonatomic,copy) NSString *weeks;
/// 闹钟开始时间（时）
@property(nonatomic,assign) int startHour;
/// 闹钟开始时间（分）
@property(nonatomic,assign) int startMin;
/// 震动时间
@property(nonatomic,assign) int shockTime;
/// 闹钟名字
@property(nonatomic, copy) NSString *label;
/// 设置闹铃只响一次
@property(nonatomic,assign)long long ringTime;
/// 闹钟uuid
@property (nonatomic ,strong) NSString *clockUuid;
/// 闹钟类型
@property (nonatomic ,assign) LSEClockType clockType;

```

# 九、Q&A

# 十、技术支持群
扫码添加后会收到邀请入群信息<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/265997/1601043310118-c90f3ed4-b022-487b-a784-d945ac0f3091.png#align=left&display=inline&height=1398&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1398&originWidth=1080&size=538697&status=done&style=none&width=1080)<br />


