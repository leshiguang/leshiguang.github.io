(function () {

    var $init = function (hook, vm) {
        hook.doneEach(function (_) {
            console.info(vm.route.path)
            if (vm.route.path !== '/') {
                return;
            }
            var homeSearch = Docsify.dom.find(".homepage-search");
            if (homeSearch) {
                var html = "<div class=\"input-wrap\">\n   <i class=\"fa fa-search\" ></i>\n <input type=\"search\" class=\"home-search\" value=\"\" placeholder=\"搜索\" aria-label=\"Search text\" />\n      <div class=\"clear-button\">\n        <svg width=\"26\" height=\"24\">\n          <circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#ccc\" />\n          <path stroke=\"white\" stroke-width=\"2\" d=\"M8.25,8.25,15.75,15.75\" />\n          <path stroke=\"white\" stroke-width=\"2\"d=\"M8.25,15.75,15.75,8.25\" />\n        </svg>\n      </div>\n    </div>\n    </div>";
                var el = Docsify.dom.create('div', html);
                Docsify.dom.toggleClass(el, 'add', 'search');
                Docsify.dom.before(homeSearch, el);
                var searchButton=Docsify.dom.find(homeSearch,".fa-search");
                console.info(searchButton)
                Docsify.dom.on(searchButton,"click",function(){
                    var searchText=Docsify.dom.find('.home-search').value;
                    window.location.href="/search?keyword="+searchText;
                })
            }
        })
    }

    $docsify.plugins = [].concat($docsify.plugins, $init);
})();
