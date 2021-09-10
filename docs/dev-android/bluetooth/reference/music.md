<a name="65B99"></a>
## 关于音乐播放
音乐播放是指APP向手环下发当前播放音乐信息， 包括播放状态、音量等级、播放时间、音乐名称、时长、歌手和专辑信息<br />​

支持的设备：乐心手环HR6、乐心手环Mambo Watch1 乐心手环Mambo Watch2<br />
<br />

<a name="FgWWQ"></a>
## 应用场景
当APP播放音乐，手环需要联动获取音乐信息并控制音乐时
<a name="jOoPi"></a>
## 数据类型
类名：com.lifesense.android.ble.core.application.model.config.Music

| 字段 | 字段类型 | 描述 |
| --- | --- | --- |
| playStatus | int | 0不可播放 1没有启动播放 2播放中 3暂停中 |
| volume | int  | 当前音量 0~100% |
| playTime | short | 播放时长,当前进度时间<br />0~65535秒 |
| songTime | short | 歌曲时长<br />0~65535秒 |
| storeFlag | int | 收藏标识0未收藏  1已收藏 |
| songName | String | 曲名 |
| artistName | String | 歌手名称 |
| editionName | String | 专辑名称 |
| musicVolumeMax | int | 音乐音量最大值 |
| songNameType | int | 歌曲名称类型 0字符串 1单色图片 |

<a name="SBK9X"></a>
## 调用示例
```java

Music music = new Music();
music.setPlayStatus(1);
music.setVolume(100);
music.setPlayTime(100);
music.setSongTime(200);
music.setSongName("大风吹");
music.setArtistName("王赫野");
music.setEditionName("吹");
music.setSongNameType(0);
music.setMusicVolumeMax(100);
control.setState(State.RECOVERY);
BleDeviceManager.getDefaultManager().updateConfig(deviceInfo.getValue().getMac(), music, new Consumer<ConfigStatus>() {
            @Override
            public void accept(ConfigStatus configStatus)throwsException{   
                if(configStatus == ConfigStatus.SUCCESS) {
					// do something
                }
            }
}  )  ;
```

