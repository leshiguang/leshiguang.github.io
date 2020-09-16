(function (win) {
    win.CopyrightPlugin = {};
  
    function create() {
      return function (hook, vm) {
        hook.afterEach(function (html) {
        var copy_right="Copyright © 2020 乐歌信息科技（上海）有限公司 版权所有"
        var beian_add="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
        var beian_code="沪ICP备20001057号"
        var home_page="https://www.leshiguang.com"
          return (
            html +
            '<div class="page-footer-copyright">'+
                '<p>'+
                    '<a class="xpath_not">'+
                    copy_right +
                    '</a>'+
                    '<a class="xpath_not" target="_blank" href="'+beian_add+'">'+
                    beian_code+
                    '</a>'+
                "</p>"+
                '<p>'+
                    '<a class="wwwbtn xpath_not" target="_blank" href="'+home_page+'">'+
                      "进入官网"+
                     '</a>'+
                '</p>'+
            '</div>'
          )
        });
      };
    }
  
    win.CopyrightPlugin.create = create;
  })(window);