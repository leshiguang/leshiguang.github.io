<a name="HFg1t"></a>
# 核心价值点
- **权威专家背书，科学评估会员免疫力水平**

与中国工程院陈君石院士旗下的专业健康管理技术团队共研，打造的一套免疫力健康评估模型

- **多维度科学评估会员免疫力水平**

从免疫力表现、免疫力认知、影响免疫力的生活方式，心理与压力方向测评会员的免疫力水平，AI评估免疫力低下因素，进行风险预警

- **智能推荐个性化的免疫力提升方案**

结合会员免疫力水平和问题，为用户提供个性化改善方案，精准化推荐免疫力提升的健康商品

- **结合智能硬件，动态更新免疫力评估风险**

会员使用智能硬件，即可实现睡眠/运动数据无感上传，实时更新免疫力评估风险，准确反映会员免疫力水平<br />![幻灯片1.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462388270-4461bb9f-2092-439b-96ac-fcce86ae9314.png#clientId=u34d48f8c-630e-4&from=ui&id=u6a14c488&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%871.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=2113717&status=done&style=none&taskId=ucd61c7eb-f7a2-45da-9b96-86bf18b1e88)
<a name="jzWJF"></a>
# 产品关键路径
![幻灯片3.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462402145-b772d4ef-56d9-4ac3-af43-63802a8813fd.png#clientId=u34d48f8c-630e-4&from=ui&id=u0371c4b0&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%873.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=1251273&status=done&style=none&taskId=ub7c07fc4-d999-4fce-ba4a-b2ec6d73c8e)
<a name="HaJ9V"></a>
# 产品模块详解
<a name="afiTe"></a>
## 产品主路径
![免疫力评估.jpg](https://cdn.nlark.com/yuque/0/2021/jpeg/2752327/1625641615478-73311bce-2be1-480d-956a-267c9b290bef.jpeg#clientId=u94a43d4a-79bc-4&from=drop&id=uc566b433&margin=%5Bobject%20Object%5D&name=%E5%85%8D%E7%96%AB%E5%8A%9B%E8%AF%84%E4%BC%B0.jpg&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=832648&status=done&style=none&taskId=ub7667b8b-3b70-4d86-9a78-cd09216daa1)
<a name="iU9L9"></a>
## 评估入口
![免疫力评估.jpg](https://cdn.nlark.com/yuque/0/2021/jpeg/2752327/1625641712617-19fcd3df-0abc-4598-a811-f762a8171ed5.jpeg#clientId=u94a43d4a-79bc-4&from=drop&id=u93ff2ce3&margin=%5Bobject%20Object%5D&name=%E5%85%8D%E7%96%AB%E5%8A%9B%E8%AF%84%E4%BC%B0.jpg&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=278815&status=done&style=stroke&taskId=u41073970-b63e-4d82-a478-54cb5983236)<br />免疫力评估入口，位于小程序首页中部，健康数据模块内，可展示引导文案或评估结果。

- 当用户未进行过免疫力评估时，该入口提示“你的免疫力是否有波动？”，点击后，可跳转至评估引导页，引导用户进行免疫力评估。
- 当用户已有免疫力评估历史时，该入口显示用户最近一次的免疫力水平得分，点击后，可跳转至评估结果页，用户可查看相关评估结果及解读。
- 免疫力评估无“太久未更新评估”相关提示。
<a name="l0kx7"></a>
## 评估引导页
![幻灯片8.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462445835-07ee99d6-e039-47e9-bf75-99fcef5857b4.png#clientId=u34d48f8c-630e-4&from=ui&id=u69eb8520&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%878.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=1659545&status=done&style=none&taskId=u6ff6be85-fee5-46c8-b833-dc911799bf2)<br />评估引导页用于对免疫力评估进行简要介绍，同时可以显示免疫力评估的历史评估人次及评估预估耗时。
<a name="kiqrW"></a>
## 基本信息确认页
![幻灯片9.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462454156-0e775389-0e40-4930-8b1a-c13c5d234807.png#clientId=u34d48f8c-630e-4&from=ui&id=u14203fb6&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%879.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=464519&status=done&style=none&taskId=u6a0e8c56-d74b-424a-b999-61938c96f61)<br />基本信息确认页，用于获取用户的基本信息，涵盖：性别、生日、身高、体重、患病状况。<br />若用户存在已有的基本信息记录，则该页面会自动读取用户上一次填写的的基本信息，用户可以修改基本信息或直接确认。<br />用户填写的基本信息，只用于健康数据的相关计算及健康风险标签的生成，包括但不限于：BMI指数、患病状况等。
<a name="BXt6w"></a>
## 评估问卷页
![幻灯片10.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462482713-cc979f68-f712-44ef-98e9-886b121dfd0d.png#clientId=u34d48f8c-630e-4&from=ui&id=u8af3b920&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8710.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=1566674&status=done&style=none&taskId=u232d2ed6-7c9e-4898-a90c-2c929b213b9)<br />评估问卷页，用于获取用户的免疫力认知、免疫力表现、心理与压力、生活方式数据。
<a name="I78PN"></a>
## 评估结果页
![幻灯片11.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462495790-b98bf43c-c40f-4df5-a0b4-65f695d8ece3.png#clientId=u34d48f8c-630e-4&from=ui&id=uac8ad2b7&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8711.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=4209154&status=done&style=none&taskId=u54748bf3-e560-451e-b2e0-dabdeda1cd6)<br />评估结果页，可展示用户某次评估的免疫力水平等级、免疫力水平得分及构成、免疫力水平解读、影响免疫力的风险因素（健康风险标签）、风险标签解读、商品推荐等多项内容。
<a name="Pip7h"></a>
### 免疫力水平等级、得分及构成
![幻灯片14.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462510939-26b9685b-2678-4d01-892b-aafe920d8f56.png#clientId=u34d48f8c-630e-4&from=ui&id=uc90e10f0&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8714.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=654490&status=done&style=none&taskId=u8c5b7fe4-cb6e-4664-8e82-deaa9f0a1f4)<br />该部分用于展示用户该次评估所产生的免疫力水平等级、免疫力水平得分，及免疫力水平得分的构成。<br />免疫力水平得分，根据用户的答题状况或硬件产生的数据，由免疫力认知、免疫力表现、生活方式、心理与压力四部分组成。某一部分的得分越高，则代表用户在该部分的生活方式越健康，在图中点的位置也越靠外围。<br />免疫力水平等级，根据用户的免疫力水平得分计算而来，分为免疫力较好、免疫力开始下降、免疫力较差三个等级。
<a name="Bjq2R"></a>
### 免疫力水平解读及变化趋势
![幻灯片15.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462524151-62f5f320-ebcc-46bb-bc47-5216a670cdb3.png#clientId=u34d48f8c-630e-4&from=ui&id=uf22a8808&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8715.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=377779&status=done&style=none&taskId=u5edac96a-d932-483f-96d1-b24d26d7073)<br />该部分用于展示用户该次评估所产生的免疫力水平解读及变化趋势。
<a name="SWEc1"></a>
### 影响免疫力的风险因素（健康风险标签）
![幻灯片16.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462539816-2ccd6df9-ab61-407f-93d0-ecc9f34ad750.png#clientId=u34d48f8c-630e-4&from=ui&id=u0943e7fe&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8716.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=356092&status=done&style=none&taskId=u253a8bb2-3d4e-45c9-aac8-2d6b2665fe7)<br />该部分用于展示用户与免疫力相关的健康风险标签，标签来源包括但不限于：免疫力评估、硬件测量数据、手动记录数据等。<br />该部分只展示用户“风险”或“疾病”类的健康标签，不展示“健康”类的健康标签，并且只展示与免疫力评估有关的健康标签，不展示其他评估产生的标签。
<a name="qlP3n"></a>
### 
<a name="LUtt0"></a>
### 风险标签解读
![幻灯片17.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462548396-21a02ada-b3bb-48af-b3f1-b435eb276f63.png#clientId=u34d48f8c-630e-4&from=ui&id=u4ef8ae6a&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8717.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=1210567&status=done&style=none&taskId=uefbc7178-c107-4d92-baf3-0e00f1e3c8f)<br />该部分根据用户命中的免疫力相关的健康风险标签，给予对应的解读。
<a name="SMFR1"></a>
### 商品推荐
![幻灯片18.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462557144-97da18c1-d613-4949-a831-e84df4dccce5.png#clientId=u34d48f8c-630e-4&from=ui&id=u053c1cb5&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8718.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=1118362&status=done&style=none&taskId=u0225d224-5f37-41bd-ad21-ff33c568256)<br />该部分只推荐“免疫力”分组下的相关商品，与用户的免疫力水平等级、免疫力水平得分、命中的风险标签无关。
<a name="YDeWl"></a>
## 评估历史页
![幻灯片12.PNG](https://cdn.nlark.com/yuque/0/2021/png/2752327/1622462568550-a18e5bf7-28e5-4b6a-ad5d-fce6a63bbe94.png#clientId=u34d48f8c-630e-4&from=ui&id=u9855640f&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8712.PNG&originHeight=2295&originWidth=4080&originalType=binary&ratio=1&size=806115&status=done&style=none&taskId=u455fb71a-838a-4322-bc1a-259158afe8a)<br />评估历史页，可展示用户历史上的每一次免疫力评估结果，包括历史评估的免疫力水平得分与免疫力水平等级。<br />点击“查看结果”，可查看该次历史评估的详细评估结果。
<a name="uvA2c"></a>
# 产品交付能力
<a name="npX2V"></a>
## 硬件接入角度
无论用户是否绑定/使用硬件，自用户完成首次免疫力评估与全面风险评估的第二天起，每日10点免疫力评估均会根据前一天的健康数据（含问卷来源数据、手动记录数据、硬件上传数据），自动更新免疫力评估结果。
<a name="mSMyU"></a>
### 有硬件交付版本
若用户有绑定一个或多个硬件（包括但不限于手环、秤），用户在当天由硬件产生的健康数据，会影响该用户第二天的免疫力水平得分及免疫力水平等级。
<a name="awKKS"></a>
### 无硬件交付版本
若用户未绑定任何硬件，仍然可以正常使用免疫力评估的所有功能。<br />用户通过手动记录的健康数据，同样会影响该该用户第二天的免疫力水平得分及免疫力水平等级。
<a name="mm8EF"></a>
## 业务接入角度
免疫力评估为独立业务，不与其他业务产生关联。客户接入拾果健康小程序的部分/全部功能，不影响免疫力评估的使用。
<a name="mEfq6"></a>
## 商品接入角度
<a name="NjqOb"></a>
### 接入商品推荐能力
若客户需要进行商品推荐，则在接入商城后，可以正常使用免疫力评估的全部功能。<br />评估结果页的商品推荐，只选取“免疫力”商品分组下的全部商品进行推荐。<br />![幻灯片16.JPG](https://cdn.nlark.com/yuque/0/2021/jpeg/2752327/1622209150794-d654b256-366e-4e75-9b69-47f09d082271.jpeg#clientId=u2aaa7d51-f9c0-4&from=ui&id=u3ccae5fe&margin=%5Bobject%20Object%5D&name=%E5%B9%BB%E7%81%AF%E7%89%8716.JPG&originHeight=720&originWidth=1280&originalType=binary&ratio=1&size=59900&status=done&style=none&taskId=u3940c08d-b4b1-43ae-abdf-001ba64656e)
<a name="KNSJt"></a>
### 未接入商品推荐能力
若客户不需要进行商品推荐，则无需额外配置，结果页会自动隐藏相关商品推荐
<a name="Zmjm9"></a>
# Q&A
Q：免疫力评估测评的结果可靠吗？<br />A：免疫力评估所使用的模型是由拾果健康与国家工程院陈君石院士旗下的专业健康管理团队共同打造的，开发过程中，参考了多位免疫力医学专家的相关著作，拥有权威机构背书认证，结果准确可靠。<br />
<br />Q：免疫力评估与医院的采血评估相比，哪个更准确？<br />A：免疫力趴评估未采集使用评价机体免疫功能的免疫学指标，不能代替精确的检测结果，只是对您免疫力水平的建议测评，评估结果仅供参考。<br />
<br />
<br />
<br />
<br />
<br />
<br />最后更新时间：2021.07.07

