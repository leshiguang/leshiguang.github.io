(function (win) {
  // function isFunction(functionToCheck) {
  //  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  // }

  win.CommonHeadPlugin = {};

  function create() {
    // 绑定基础dom
    function generateHeader(currentMenu) {
      return (header = [
        '<div class="docs-header clearfix">',
        '<div class="docs-header-center">',
        '<div class="pull-left">',
        '<a href="/"  title="返回文档首页" class="logo-a" >',
        '<span class="docs-logo"></span>',
        '</a> ',
        '</div>',
        '<div class="pull-left">',
        '<ul id="topmenu">',
        '<li class="submenu' +
          (currentMenu == 'prod' ? 'selected' : '') +
          '" data-href="prod" >',
        '产品',
        '</li>',
        '<li class="submenu' +
          (currentMenu == 'api' ? 'selected' : '') +
          '" data-href="api">',
        'API',
        '</li>',
        '<li class="submenu' +
          (currentMenu == 'develop' ? 'selected' : '') +
          '" data-href="develop" >',
        '开发者中心',
        '</li>',
        // '<li>',
        // '<a target="_blank" href="http://education.ucloud.cn/modules/resource.php">教学</a>',
        // '</li>',
        '</ul>',
        '</div>',
        '</div>',
        '<div class="search-bar">',
        '<form action="" onsubmit="return false;">',
        '<div class="header-search-wrapper">',
        '<div class="search-input-wrapper ">',
        '<i class="fa fa-search fa-fw"></i>',
        '<input type="search" autocomplete="off" class="nav-search-key search-input" placeholder="请输入搜索内容"  id="searchbtn"/> ',
        //onfocus="if(placeholder=="请输入搜索内容") {placeholder=""}" onblur="if (value=='') {placeholder='请输入搜索内容'}"
        '</div>',
        '</div> ',
        '<span class="search_shutdown search_goback">取消</span>',
        '</form>',
        '</div>',
        '</div>',
      ].join(''));
    }
    function generatHotprods(ctx) {
      var generatHtmlChild = '';
      $.each(ctx, function () {
        generatHtmlChild +=
          '<a class="hotprods" target="_blank" href="' +
          this.url +
          '"><img class="img" src="' +
          this.imglinks +
          '"><p class="title">' +
          this.title +
          '</p><p class="des">' +
          this.des +
          '</p></a>';
      });
      return generatHtmlChild;
    }

    function generatStru(ctx) {
      var generatHtmlChild = '';
      $.each(ctx, function () {
        generatHtmlChild +=
          '<li class="wflowBox"><div class="pd_sort_head">' +
          this.listname +
          '</div><ul>';
        $.each(this.listvalue, function () {
          var regx = /^(http|https).*$/;
          var regxresult = regx.test(this.links);
          if (regxresult) {
            generatHtmlChild +=
              '<li><a target="_blank" href="' +
              this.links +
              '">' +
              this.name +
              '</a></li>';
          } else {
            generatHtmlChild +=
              '<li><a href="' + this.links + '">' + this.name + '</a></li>';
          }
        });
        generatHtmlChild += '</ul></li>';
      });
      return generatHtmlChild;
    }
    function parseHtmlByConfig(currentMenu) {
        $.getJSON('configs/nav-'+currentMenu+'.json', function (data) {
          var _data = data.data;
          var hotprods = data.hotprods;
          var dataHtml = generatStru(_data);
          var hotprodsHtml = generatHotprods(hotprods);
          $('#'+currentMenu+' .wrap_pd_list .enterbox').html(dataHtml);
          $('#'+currentMenu+' .nav-hotprods .nmain').html(hotprodsHtml);
        });
    }
    return function (hook, vm) {
      hook.afterEach(function (html) {
        datapage = window.location.hash;
        var currentMenu = datapage.substring(7, datapage.length);
        return generateHeader(currentMenu) + html;
      });
      hook.doneEach(function () {
        datapage = window.location.hash;
        var currentMenu = datapage.substring(7, datapage.length);
        if (datapage.indexOf('home') > 0) {
          $('.content').parent('main').addClass('homepage').removeClass('docpage');
          $('.nav-menu-wrap').addClass('show');
          parseHtmlByConfig(currentMenu);
        }else{
            $('.content').parent('main').removeClass('homepage').addClass("docpage");
        }
        $('#topmenu>li').each(function (index, item) {
          var optionHref = $(this).data('href');
          if ($.trim(datapage) == $.trim('#/home/' + optionHref)) {
            $(this).addClass('selected').siblings().removeClass('selected');
          }
        });
        $('#topmenu>li').on('click', function () {
          var optionHref = $(this).data('href');
          window.location.href = '/#/home/' + optionHref;
        });
      });
      hook.mounted(function () {
        $('#topmenu>li:first-child').trigger('click');
      });
    };
  }

  win.CommonHeadPlugin.create = create;
})(window);
