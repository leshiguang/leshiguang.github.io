(function (win) {
    win.CopyrightPlugin = {};

    function $init () {
        return function (hook, vm) {
            hook.doneEach(function () {
                var copy_right = "Copyright © 2020 乐歌信息科技（上海）有限公司 版权所有"
                var beian_add = "https://beian.miit.gov.cn/"
                var beian_code = "沪ICP备20001057号"
                var home_page = "https://www.leshiguang.com"
                var beian_gongan_add = "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502005667"
                var beian_gongan_img = "https://cdn.leshiguang.com/leshiguang/portal/assets/image/beian_0c577066.png";
                var beian_gongan_code = "沪公网安备 31010502005667号";
                let copyright =
                    '<div class="page-footer-copyright">' +
                    '<p>' +
                    '<a class="xpath_not">' +
                    copy_right +
                    '</a>' +
                    '<a class="xpath_not" target="_blank" href="' + beian_gongan_add + '">' +
                    '<img src="' + beian_gongan_img + '" ></img>' +
                    beian_gongan_code +
                    '</a>' +
                    '<a class="xpath_not" target="_blank" href="' + beian_add + '">' +
                    beian_code +
                    '</a>' +
                    "</p>" +
                    '<p>' +
                    '<a class="wwwbtn xpath_not" target="_blank" href="' + home_page + '">' +
                    "进入官网" +
                    '</a>' +
                    '</p>' +
                    '</div>';
                var $footer = Docsify.dom.create("footer", copyright);
                Docsify.dom.appendTo(Docsify.dom.find(".markdown-section"), $footer)
            });
        };
    }

    win.CopyrightPlugin.$init = $init;
})(window);
