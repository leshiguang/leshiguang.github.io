<a name="c9398b06"></a>
### 请按照以下步骤体验示例demo


1. 替换manifest.json中的appid，修改为自己拥有开发权限的appid
1. `npm install` 安装依赖
1. `npm run build`构建项目
1. 微信开发者工具导入项目，体验demo



<a name="4afe9977"></a>
### 请按照以下步骤在小程序项目中嵌入拾果健康H5模块


1. 微信公众平台，配置小程序服务器域名（request合法域名）：



- [https://h5.leshiguang.com](https://h5.leshiguang.com)
- [https://h5-beta.leshiguang.com](https://h5-beta.leshiguang.com)
- [https://api-r7.leshiguang.com](https://api-r7.leshiguang.com)
- [https://api-r1-beta.leshiguang.com](https://api-r1-beta.leshiguang.com)



3. 微信公众平台，配置小程序业务域名(校验的密钥文件可下载后，联系我们放置)



- [https://h5.leshiguang.com](https://h5.leshiguang.com)
- [https://h5-beta.leshiguang.com](https://h5-beta.leshiguang.com)



3. static/ls-webview组件拷贝到项目中，并在pages.json中声明组件



```json
{
  "globalStyle": {
    "usingComponents": {
      "ls-webview": "/static/ls-webview/index"
    }
  }
}
```


4.  新建pages/h5/common/main页面，引入组件即可。注意，此页面的路径和名称不能变更。 
4.  添加pages/checkLogin/main页面，此页面作为分享等场景的中转页，判断接受方用户是否已获取登录态，若未登录，则静默登录后自动跳转到目标页面。 
4.  参考pages/index/index页面的示例， 从拾果云获取用户登录token，然后通过utils.openWebview打开H5页面。 
4.  参考pages.json文件，添加对应的pages： 



- pages/h5/common/main
- pages/checkLogin/main



<a name="0d98c747"></a>
### 其他


1. 涉及到展示用户头像、用户昵称，分享二维码相关的业务场景，需要客户方与拾果做技术对接，如有问题，随时沟通。

