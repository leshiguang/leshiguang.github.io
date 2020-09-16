(function (win) {
  win.EditInGithubPlugin = {};

  function create() {
    return function (hook, vm) {
      hook.afterEach(function (html) {
        var url =
          '//github.com/leshiguang/leshiguang.github.io/tree/master/docs/' +
          vm.route.file;
        return (
          html +
          '<hr align=center color=#987cb9 size=1>发现错误？想参与编辑？<a href=' +
          url +
          ' target=_blank>在 GitHub 上编辑此页面！</a>'
        );
      });
    };
  }

  win.EditInGithubPlugin.create = create;
})(window);