(function (win) {
  win.TopToolsPlugin = {};

  function $init () {
    return function (hook, vm) {
      hook.doneEach(function () {
        var $markdownSection = Docsify.dom.find(".markdown-section");
        var url =
          '//github.com/leshiguang/leshiguang.github.io/tree/preview/docs/' +
          vm.route.file;
        var $htmlTpl = "<a href=\"${href}\" target=\"_blank\" class=\"toptool-item\"><i class=\"toptool-icon fa ${icon}\"></i><span class=\"toptool-title\">${title}</span></a>";
        var editInGithub = $htmlTpl.replace("${href}", url).replace("${icon}", "fa-github").replace("${title}", "前往Github");
        var $toptool = Docsify.dom.create("div", editInGithub);
        Docsify.dom.toggleClass($toptool, "add", "toptool");
        Docsify.dom.before($markdownSection, $toptool);
      });
    };
  }

  win.TopToolsPlugin.$init = $init;
})(window);