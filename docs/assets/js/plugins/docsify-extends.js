(function (win) {
    win.DocsifyExtendsPlugin = {};
    let MarkdwonOpts = {
        $init () {
            this.replaceSvgs();
        },
        replaceSvgs: function () {
            var allSvgs = Docsify.dom.findAll(".markdown-section a svg");
            // allSvgs.forEach(svg => {
            //     svg.replaceWith('');
            // })
        }
    }
    let SidebarOpts = {
        active (node, forParent) {
            if (node && node.nodeName === 'LI') {
                if (!node.classList.contains("active")) {
                    Docsify.dom.toggleClass(node, "add", "active");
                }
                var $ul = Docsify.dom.find(node, "ul");
                if ($ul) {
                    this.toggleIcon(Docsify.dom.find(node, "a i"), true)
                }
                if (forParent) {
                    this.active(node.parentNode.parentNode, forParent);
                }
            }
        },
        disActive (node, forParent) {
            if (node && node.nodeName === 'LI') {
                if (node.classList.contains("active")) {
                    Docsify.dom.toggleClass(node, "active");
                }
                var $ul = Docsify.dom.find(node, "ul");
                if ($ul) {
                    this.toggleIcon(Docsify.dom.find(node, "a i"), false)
                }
                if (forParent) {
                    this.disActive(node.parentNode.parentNode, forParent);
                }
            }
        },

        getAndActive: function (router, el, isParent, autoTitle) {
            el = Docsify.dom.getNode(el);
            var links = [];
            if (el !== null && el !== undefined) {
                links = Docsify.dom.findAll(el, 'a');
            }
            var hash = decodeURI(router.toURL(router.getCurrentPath()));
            var target;
            let that = this;
            links
                .sort(function (a, b) { return b.href.length - a.href.length; })
                .forEach(function (a) {
                    var href = decodeURI(a.getAttribute('href'));
                    var node = isParent ? a.parentNode : a;
                    a.title = a.title || a.innerText;
                    if (hash.indexOf(href) === 0) {
                        that.active(node, true);
                    }
                });

            if (autoTitle) {
                $.title = target
                    ? target.title || ((target.innerText) + " - " + title)
                    : title;
            }

            return target;
        },
        toggleAllSidebar: function (active) {
            var $sidebar = Docsify.dom.find(".sidebar");
            var $lis = Docsify.dom.findAll($sidebar, "li");
            $lis.forEach(li => {
                var $ul = Docsify.dom.find(li, "ul");
                if ($ul) {
                    if (active) {
                        this.active(li, false);
                    } else {
                        this.disActive(li, false);
                    }
                }
            });
        },
        createA (innerText) {
            var $a = Docsify.dom.create("a", innerText);
            var $icon = Docsify.dom.create("i");
            Docsify.dom.toggleClass($icon, "add", 'fa');
            Docsify.dom.toggleClass($icon, "add", 'fa-angle-down');
            Docsify.dom.appendTo($a, $icon);
            return $a;
        },
        titleToggle: function () {
            var $sidebarTitle = Docsify.dom.find(".sidebar-title");
            if ($sidebarTitle) {
                var $faRight = Docsify.dom.find($sidebarTitle, '.fa-angle-down')
                if (!$faRight) {
                    var $a = this.createA()
                    Docsify.dom.appendTo($sidebarTitle, $a);
                    let that = this;
                    Docsify.dom.on($a, "click", function (e) {
                        Docsify.dom.toggleClass($a, "active");
                        let $icon = Docsify.dom.find($a, "i");
                        if ($a.classList.contains("active")) {
                            that.toggleIcon($icon, true);
                            that.toggleAllSidebar(true);
                        } else {
                            that.toggleIcon($icon, false);
                            that.toggleAllSidebar(false);
                        }
                    })
                }
            }
        },
        toggleIcon ($icon, active) {
            if (active) {
                Docsify.dom.toggleClass($icon, "remove", "fa-angle-down");
                Docsify.dom.toggleClass($icon, "add", "fa-angle-up");
            } else {
                Docsify.dom.toggleClass($icon, "remove", "fa-angle-up");
                Docsify.dom.toggleClass($icon, "add", "fa-angle-down");
            }
        },
        $init: function (vm) {
            var $sidebar = Docsify.dom.find(".sidebar");
            var $lis = Docsify.dom.findAll($sidebar, "li");
            var $content = Docsify.dom.find(".markdown-section")
            $lis.forEach(li => {
                var $ul = Docsify.dom.find(li, "ul");
                /**
                 * 如果ul存在,表示为非根节点,1.修改为a标签,添加icon
                 */
                if ($ul) {
                    var innerText = li.firstChild;
                    if (innerText.nodeName === '#text') {
                        var $a = this.createA(innerText.wholeText);
                        li.firstChild.replaceWith($a);
                    }
                }
                var $lia = li.firstChild;
                let that = this;
                Docsify.dom.on($lia, "click", function (e) {
                    let parentLi = $lia.parentNode;
                    let isActive = parentLi.classList.contains("active");
                    let brothers = Docsify.dom.findAll(parentLi.parentNode, 'li .active');
                    if (brothers) {
                        brothers.forEach(item => {
                            if (item)
                                that.disActive(item, false);
                        })
                    }
                    // that.customActive(parentLi)
                    if (!isActive) {
                        that.active(parentLi, true);
                        $content.scrollTop = 0
                    } else {
                        that.disActive(parentLi, false);
                    }
                });
            });
            this.titleToggle();
            this.getAndActive(vm.router, ".sidebar", true);
        }
    }
    let NavMenuOpts = {
        replaceLiText: function () {
            var $liList = Docsify.dom.findAll(".app-nav .nav-menu>ul>li");
            $liList.forEach(li => {
                var $ul = Docsify.dom.find(li, "ul");
                /**
                 * 如果ul存在,表示为非根节点,1.修改为a标签,添加icon
                 */
                if ($ul) {
                    var innerText = li.innerText;
                    if (innerText) {
                        var $a = Docsify.dom.create("a", innerText);
                        var $icon = Docsify.dom.create("i");
                        Docsify.dom.toggleClass($icon, 'fa');
                        Docsify.dom.toggleClass($icon, 'fa-angle-up');
                        Docsify.dom.appendTo($a, $icon);
                        li.firstChild.replaceWith($a);
                    }
                }
            })
        },
        $init: function (vm) {
            var menuTaggle = Docsify.dom.find(".app-nav .nav-menu-toggle");
            var menu = Docsify.dom.find(".app-nav .nav-menu");
            if (menuTaggle) {
                Docsify.dom.on(menuTaggle, "click", function () {
                    Docsify.dom.toggleClass(menuTaggle, "collapsed");
                    Docsify.dom.toggleClass(menu, "collapsed");
                    var $icon = Docsify.dom.find(menuTaggle, "i");
                    Docsify.dom.toggleClass($icon, "fa-align-justify");
                    Docsify.dom.toggleClass($icon, "fa-close");
                })
            }
        }
    }
    let MarkdownMenuOpts = {
        $init: function (vm) {
            let html = this.subSidebar(vm.compiler, vm.router, 2);
            let el = Docsify.dom.create("div", html);
            Docsify.dom.toggleClass(el, "content-anchors");
            let $liList = Docsify.dom.findAll(el, "li");
            let $main_content = Docsify.dom.find(".markdown-section")
            let that = this
            $liList.forEach($li => {
                let $a = Docsify.dom.find($li, "a");
                Docsify.dom.on($a, "click", function () {
                    let id = that.formatTitle2ID($a.getAttribute('href').substr($a.getAttribute('href').indexOf("id=") + 3))
                    let top = Math.round(window.document.getElementById(decodeURI(id)).getBoundingClientRect().top)

                    top = top - 80
                    $main_content.scrollTop += top
                    $liList.forEach(item => {
                        if (item.classList.contains("active")) {
                            Docsify.dom.toggleClass(item, "active");
                        }
                    })
                    let $parentLi = $a.parentNode;
                    Docsify.dom.toggleClass($parentLi, "active");
                });

            })
            let $content = Docsify.dom.find(".content");
            let $contentAnchors = Docsify.dom.find($content, ".content-anchors");
            if ($contentAnchors) {
                $contentAnchors.replaceWith(el);
            } else {
                Docsify.dom.appendTo($content, el);
            }

        },
        genTree: function (toc, maxLevel) {
            var headlines = [];
            var last = {};

            toc.forEach(function (headline) {
                var level = headline.level || 1;
                var len = level - 1;

                if (level > maxLevel) {
                    return;
                }

                if (last[len]) {
                    last[len].children = (last[len].children || []).concat(headline);
                } else {
                    headlines.push(headline);
                }

                last[level] = headline;
            });
            return headlines;
        },
        subSidebar: function (compiler, router, level) {
            if (!level) {
                toc = [];
                return;
            }

            var currentPath = router.getCurrentPath();
            var currentFile = router.getFile();
            var ref = this;
            var cacheTree = compiler.cacheTree;
            currentFile = currentFile.split("?")[0];
            if (currentFile.indexOf(".md") <= 0) {
                currentFile = currentFile + ".md";
            }
            var toc = compiler.cacheTOC[currentFile.substring(1, currentFile.length)]
            if (!toc) {
                toc = compiler.cacheTOC[currentFile];
            }
            if (!toc) {
                return;
            }
            toc[0] && toc[0].ignoreAllSubs && toc.splice(0);
            // toc[0] && toc[0].level === 1 &&  toc.shift();

            for (var i = 0; i < toc.length; i++) {
                toc[i].ignoreSubHeading && toc.splice(i, 1) && i--;
            }

            var tree$1 = cacheTree[currentPath] || this.genTree(toc, level);
            cacheTree[currentPath] = tree$1;
            return this.tree(tree$1);
        },
        tree: function (toc, tpl) {
            if (tpl === void 0) tpl = '<ul class="content-anchors-sidebar">{inner}</ul>';

            if (!toc || !toc.length) {
                return '';
            }

            var innerHTML = '';
            let that = this;
            toc.forEach(function (node) {
                var title = node.title.replace(/(<([^>]+)>)/g, '');
                innerHTML += "<li><a class=\"section-link\" href=\"" + (node.slug) + "\" title=\"" + title + "\">" + (node.title) + "</a></li>";
                if (node.children) {
                    innerHTML += that.tree(node.children, tpl);
                }
            });
            return tpl.replace('{inner}', innerHTML);
        },
        formatTitle2ID (str) {
            let s_char = [{ key: '<', value: 'lt' }, { key: '>', value: 'gt' }, { key: '&', value: 'amp' }, { key: '\'', value: 'apos' }, { key: '\"', value: 'quot' }]
            let newStr = str
            s_char.forEach(item => {
                if (str.indexOf(item.key) != -1) {
                    newStr = str.replace(new RegExp(item.key, 'g'), item.value)
                }
            })
            return newStr
        }
    }
    function $init () {
        return function (hook, vm) {
            hook.doneEach(function (_) {
                NavMenuOpts.$init(vm);
                MarkdwonOpts.$init(vm);
                SidebarOpts.$init(vm);
                MarkdownMenuOpts.$init(vm);
            });
        };
    }
    win.DocsifyExtendsPlugin.$init = $init;
})(window);