<a name="oNn1j"></a>
## 关于下载表盘到手环
下载应用市场表盘是新手环的能力， 对“手环默认表盘”能力的扩充， 用户可以设置相册图片和表盘市场的表盘到手环

支持的设备类型：乐心手环HR6、乐心手环Mambo Watch1、乐心手环Mambo Watch2

<a name="e1ZBC"></a>
## 应用场景
当用户需要更改手环表盘时， 可从表盘市场下载或从相册中选取文件下载到手环
<a name="gXub0"></a>
## 数据类型
类名：LZA5SettingPushDialData

| 字段 | 描述 |
| --- | --- |
| id | 表盘ID |
| dialIndex | 表盘位置 0～7 目前只支持7，表示推动表盘的位置，如果该位置非空，则表示替换，否则表示新增 |
| dialPlateName | 表盘文件名称 |
| fileName | 文件名称 |
| dialType | 表盘类型0:在线表盘1:相册表盘2: |
| fileBuf | 表盘文件 |
| backgroundImageName | 背景图名称 |

<a name="6m4XS"></a>
## 

