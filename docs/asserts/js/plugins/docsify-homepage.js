(function () {

    var $init = function (hook, vm) {
        hook.doneEach(function (_) {
            if (vm.route.path !== '/') {
                return;
            }
            var homeSearch = Docsify.dom.find(".homepage-search");
            if (homeSearch) {
                var html = "<div class=\"input-wrap\">\n   <i class=\"fa fa-search\" ></i>\n <input type=\"search\" value=\"\" placeholder=\"搜索\" aria-label=\"Search text\" />\n      <div class=\"clear-button\">\n        <svg width=\"26\" height=\"24\">\n          <circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#ccc\" />\n          <path stroke=\"white\" stroke-width=\"2\" d=\"M8.25,8.25,15.75,15.75\" />\n          <path stroke=\"white\" stroke-width=\"2\"d=\"M8.25,15.75,15.75,8.25\" />\n        </svg>\n      </div>\n    </div>\n    </div>";
                var el = Docsify.dom.create('div', html);
                Docsify.dom.toggleClass(el, 'add', 'search');
                Docsify.dom.before(homeSearch, el);
            }
        })
    }

    $docsify.plugins = [].concat($docsify.plugins, $init);
})();
