(function () {

    var NO_DATA_TEXT = '';
    var options;
    function doFresh ($searchField, value) {
        var $search = Docsify.dom.find($searchField, '.search');
        var $clearBtn = Docsify.dom.find($search, '.clear-button');
        if (!value) {
            $clearBtn.classList.remove('show');
            return;
        } else {
            $clearBtn.classList.add('show')
        }
    }
    function tplHTML ($searchField, keyword) {
        keyword = keyword ? keyword : '';
        var html = "<div class=\"input-wrap\">\n <input type=\"text\" class=\"input-search\" value=\"" + keyword + "\" placeholder=\"搜索\" aria-label=\"Search text\" />\n     <div class=\"clear-button\">\n        <svg width=\"26\" height=\"24\">\n          <circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#ccc\" />\n          <path stroke=\"white\" stroke-width=\"2\" d=\"M8.25,8.25,15.75,15.75\" />\n          <path stroke=\"white\" stroke-width=\"2\"d=\"M8.25,15.75,15.75,8.25\" />\n        </svg>\n      </div>\n  <button class=\"search-button\"><i class=\"fa fa-search\" ></i>\n</button>   </div>\n    </div>";
        var el = Docsify.dom.create('div', html);
        Docsify.dom.toggleClass(el, 'add', 'search');
        Docsify.dom.before($searchField, el);
    }
    function bindEvents ($searchField, vm) {
        var searchButton = Docsify.dom.find($searchField, ".fa-search");
        $search = Docsify.dom.find($searchField, '.search');
        var $input = Docsify.dom.find($search, 'input');
        var $clearBtn = Docsify.dom.find($search, '.clear-button');
        Docsify.dom.on(searchButton, "click", function () {
            var searchText = $input.value;
            window.location.href = (vm.router.mode === 'hash' ? '#/' : '/') + "search?keyword=" + searchText;
        })

        var timeId;
        Docsify.dom.on($input, 'input', function (e) {
            clearTimeout(timeId);
            timeId = setTimeout(function (_) { return doFresh($searchField, e.target.value.trim()); }, 100);
        });

        Docsify.dom.on($clearBtn, 'click', function (e) {
            $input.value = '';
            doFresh($searchField);
        });
    }
    function init ($searchField, vm, keyword, jumpEvent) {
        var $search = Docsify.dom.find($searchField, '.search');
        if (!$search) {
            tplHTML($searchField, keyword)
        }
        if (jumpEvent) {
            bindEvents($searchField, vm)
        }
    }
    /**
     * Converts a colon formatted string to a object with properties.
     *
     * This is process a provided string and look for any tokens in the format
     * of `:name[=value]` and then convert it to a object and return.
     * An example of this is ':include :type=code :fragment=demo' is taken and
     * then converted to:
     *
     * ```
     * {
     *  include: '',
     *  type: 'code',
     *  fragment: 'demo'
     * }
     * ```
     *
     * @param {string}   str   The string to parse.
     *
     * @return {object}  The original string and parsed object, { str, config }.
     */
    function getAndRemoveConfig (str) {
        if (str === void 0) str = '';

        var config = {};

        if (str) {
            str = str
                .replace(/^'/, '')
                .replace(/'$/, '')
                .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (m, key, value) {
                    if (key.indexOf(':') === -1) {
                        config[key] = (value && value.replace(/&quot;/g, '')) || true;
                        return '';
                    }

                    return m;
                })
                .trim();
        }

        return { str: str, config: config };
    }

    /* eslint-disable no-unused-vars */

    var INDEXS = {};

    var LOCAL_STORAGE = {
        EXPIRE_KEY: 'docsify.search.expires',
        INDEX_KEY: 'docsify.search.index',
    };

    function resolveExpireKey (namespace) {
        return namespace
            ? ((LOCAL_STORAGE.EXPIRE_KEY) + "/" + namespace)
            : LOCAL_STORAGE.EXPIRE_KEY;
    }

    function resolveIndexKey (namespace) {
        return namespace
            ? ((LOCAL_STORAGE.INDEX_KEY) + "/" + namespace)
            : LOCAL_STORAGE.INDEX_KEY;
    }

    function escapeHtml (string) {
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };

        return String(string).replace(/[&<>"']/g, function (s) { return entityMap[s]; });
    }

    function getAllPaths (router) {
        var paths = [];
        Docsify.dom
            .findAll('.sidebar-nav a:not(.section-link):not([data-nosearch])')
            .forEach(function (node) {
                var href = node.href;
                var originHref = node.getAttribute('href');
                var path = router.parse(href).path;

                if (
                    path &&
                    paths.indexOf(path) === -1 &&
                    !Docsify.util.isAbsolutePath(originHref)
                ) {
                    paths.push(path);
                }
            });

        return paths;
    }

    function getTableData (token) {
        if (!token.text && token.type === 'table') {
            token.cells.unshift(token.header);
            token.text = token.cells
                .map(function (rows) {
                    return rows.join(' | ');
                })
                .join(' |\n ');
        }
        return token.text;
    }

    function getListData (token) {
        if (!token.text && token.type === 'list') {
            token.text = token.raw;
        }
        return token.text;
    }

    function saveData (maxAge, expireKey, indexKey) {
        localStorage.setItem(expireKey, Date.now() + maxAge);
        localStorage.setItem(indexKey, JSON.stringify(INDEXS));
    }

    function genIndex (path, content, router, depth) {
        if (content === void 0) content = '';

        var tokens = window.marked.lexer(content);
        var slugify = window.Docsify.slugify;
        var index = {};
        var slug;
        var title = '';

        tokens.forEach(function (token, tokenIndex) {
            if (token.type === 'heading' && token.depth <= depth) {
                var ref = getAndRemoveConfig(token.text);
                var str = ref.str;
                var config = ref.config;

                if (config.id) {
                    slug = router.toURL(path, { id: slugify(config.id) });
                } else {
                    slug = router.toURL(path, { id: slugify(escapeHtml(token.text)) });
                }

                if (str) {
                    title = str
                        .replace(/<!-- {docsify-ignore} -->/, '')
                        .replace(/{docsify-ignore}/, '')
                        .replace(/<!-- {docsify-ignore-all} -->/, '')
                        .replace(/{docsify-ignore-all}/, '')
                        .trim();
                }

                index[slug] = { slug: slug, title: title, body: '' };
            } else {
                if (tokenIndex === 0) {
                    slug = router.toURL(path);
                    index[slug] = {
                        slug: slug,
                        title: path !== '/' ? path.slice(1) : 'Home Page',
                        body: token.text || '',
                    };
                }

                if (!slug) {
                    return;
                }

                if (!index[slug]) {
                    index[slug] = { slug: slug, title: '', body: '' };
                } else if (index[slug].body) {
                    token.text = getTableData(token);
                    token.text = getListData(token);

                    index[slug].body += '\n' + (token.text || '');
                } else {
                    token.text = getTableData(token);
                    token.text = getListData(token);

                    index[slug].body = index[slug].body
                        ? index[slug].body + token.text
                        : token.text;
                }
            }
        });
        slugify.clear();
        return index;
    }

    function ignoreDiacriticalMarks (keyword) {
        if (keyword && keyword.normalize) {
            return keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        return keyword;
    }

    /**
     * @param {String} query Search query
     * @returns {Array} Array of results
     */
    function search (query) {
        var matchingResults = [];
        var data = [];
        Object.keys(INDEXS).forEach(function (key) {
            data = data.concat(Object.keys(INDEXS[key]).map(function (page) { return INDEXS[key][page]; }));
        });

        query = query.trim();
        var keywords = query.split(/[\s\-，\\/]+/);
        if (keywords.length !== 1) {
            keywords = [].concat(query, keywords);
        }


        var loop = function (i) {
            var post = data[i];
            var matchesScore = 0;
            var resultStr = '';
            var handlePostTitle = '';
            var handlePostContent = '';
            var postTitle = post.title && post.title.trim();
            var postContent = post.body && post.body.trim();
            var postUrl = post.slug || '';

            if (postTitle) {
                keywords.forEach(function (keyword) {
                    // From https://github.com/sindresorhus/escape-string-regexp
                    var regEx = new RegExp(
                        ignoreDiacriticalMarks(keyword).replace(
                            /[|\\{}()[\]^$+*?.]/g,
                            '\\$&'
                        ),
                        'gi'
                    );
                    var indexTitle = -1;
                    var indexContent = -1;
                    handlePostTitle = postTitle
                        ? ignoreDiacriticalMarks(postTitle)
                        : postTitle;
                    handlePostContent = postContent
                        ? ignoreDiacriticalMarks(postContent)
                        : postContent;

                    indexTitle = postTitle ? handlePostTitle.search(regEx) : -1;
                    indexContent = postContent ? handlePostContent.search(regEx) : -1;

                    if (indexTitle >= 0 || indexContent >= 0) {
                        matchesScore += indexTitle >= 0 ? 3 : indexContent >= 0 ? 2 : 0;
                        if (indexContent < 0) {
                            indexContent = 0;
                        }

                        var start = 0;
                        var end = 0;

                        start = indexContent < 11 ? 0 : indexContent - 10;
                        end = start === 0 ? 150 : indexContent + keyword.length + 140;

                        if (postContent && end > postContent.length) {
                            end = postContent.length;
                        }

                        var matchContent =
                            '...' +
                            handlePostContent
                                .substring(start, end)
                                .replace(
                                    regEx,
                                    function (word) { return ("<em class=\"search-keyword\">" + word + "</em>"); }
                                ) +
                            '...';

                        resultStr += matchContent;
                    }
                });

                if (matchesScore > 0) {
                    var matchingPost = {
                        title: handlePostTitle,
                        content: postContent ? resultStr : '',
                        url: postUrl,
                        score: matchesScore,
                    };

                    matchingResults.push(matchingPost);
                }
            }
        };

        for (var i = 0; i < data.length; i++) loop(i);

        return matchingResults.sort(function (r1, r2) { return r2.score - r1.score; });
    }


    function doSearch (value) {
        var $search = Docsify.dom.find('div.search');
        var $clearBtn = Docsify.dom.find($search, '.clear-button');
        var $body = Docsify.dom.find('body');
        var $panel = Docsify.dom.find('.search-results');
        if (!value) {
            $panel.classList.remove('show');
            $clearBtn.classList.remove('show');
            $panel.innerHTML = '';
            return;
        }
        var matchs = search(value);

        var html = '';
        matchs.forEach(function (post) {
            html += "<div class=\"matching-post\">\n<a href=\"" + (post.url) + "\">\n<h2>" + (post.title) + "</h2>\n<p>" + (post.content) + "</p>\n</a>\n</div>";
        });

        $panel.classList.add('show');
        $clearBtn.classList.add('show');
        $panel.innerHTML = html || ("<p class=\"empty\">" + NO_DATA_TEXT + "</p>");
    }
    function searchInit (config, vm) {
        var isAuto = config.paths === 'auto';
        var paths = isAuto ? getAllPaths(vm.router) : config.paths;
        var namespaceSuffix = '';
        // only in auto mode
        if (paths.length && isAuto && config.pathNamespaces) {
            var path = paths[0];

            if (Array.isArray(config.pathNamespaces)) {
                namespaceSuffix =
                    config.pathNamespaces.filter(
                        function (prefix) { return path.slice(0, prefix.length) === prefix; }
                    )[0] || namespaceSuffix;
            } else if (config.pathNamespaces instanceof RegExp) {
                var matches = path.match(config.pathNamespaces);

                if (matches) {
                    namespaceSuffix = matches[0];
                }
            }
            var isExistHome = paths.indexOf(namespaceSuffix + '/') === -1;
            var isExistReadme = paths.indexOf(namespaceSuffix + '/README') === -1;
            if (isExistHome && isExistReadme) {
                paths.unshift(namespaceSuffix + '/');
            }
        } else if (paths.indexOf('/') === -1 && paths.indexOf('/README') === -1) {
            paths.unshift('/');
        }

        var expireKey = resolveExpireKey(config.namespace) + namespaceSuffix;
        var indexKey = resolveIndexKey(config.namespace) + namespaceSuffix;

        var isExpired = localStorage.getItem(expireKey) < Date.now();

        INDEXS = JSON.parse(localStorage.getItem(indexKey));

        if (isExpired) {
            INDEXS = {};
        }

        var len = paths.length;
        var count = 0;

        paths.forEach(function (path) {
            if (INDEXS[path]) {
                return count++;
            }

            Docsify.get(vm.router.getFile(path), false, vm.config.requestHeaders).then(
                function (result) {
                    INDEXS[path] = genIndex(path, result, vm.router, config.depth);
                    len === ++count && saveData(config.maxAge, expireKey, indexKey);
                }
            );
        });
    }
    function bindSearchEvents () {
        var $search = Docsify.dom.find('div.search');
        var $input = Docsify.dom.find($search, 'input');
        var $searchButton = Docsify.dom.find(".search-button");
        var $clearBtn = Docsify.dom.find(".clear-button");

        var timeId;

        /**
          Prevent to Fold sidebar.d
    
          When searching on the mobile end,
          the sidebar is collapsed when you click the INPUT box,
          making it impossible to search.
         */
        Docsify.dom.on(
            $search,
            'click',
            function (e) {
                return ['A', 'H2', 'P', 'EM'].indexOf(e.target.tagName) === -1 &&
                    e.stopPropagation();
            }
        );

        Docsify.dom.on($searchButton, "click", function (_) {
            var searchText = Docsify.dom.find($search, 'input').value;
            doSearch(searchText.trim());
        })
        Docsify.dom.on($clearBtn, 'click', function (e) {
            $input.value = '';
            doSearch();
        });
    }
    function updateOptions (opts) {
        options = opts;
    }
    function updatePlaceholder (text, path) {
        var $input = Docsify.dom.getNode('.search input[type="search"]');

        if (!$input) {
            return;
        }

        if (typeof text === 'string') {
            $input.placeholder = text;
        } else {
            var match = Object.keys(text).filter(function (key) { return path.indexOf(key) > -1; })[0];
            $input.placeholder = text[match];
        }
    }

    function updateNoData (text, path) {
        if (typeof text === 'string') {
            NO_DATA_TEXT = text;
        } else {
            var match = Object.keys(text).filter(function (key) { return path.indexOf(key) > -1; })[0];
            NO_DATA_TEXT = text[match];
        }
    }
    function init$1 (opts, vm) {
        updateOptions(opts);
    }
    function update (opts, vm) {
        updateOptions(opts);
        updatePlaceholder(opts.placeholder, vm.route.path);
        updateNoData(opts.noData, vm.route.path);
        bindSearchEvents();
    }
    /* eslint-disable no-unused-vars */

    var CONFIG = {
        placeholder: 'Type to search',
        noData: 'No Results!',
        paths: 'auto',
        depth: 2,
        maxAge: 86400000, // 1 day
        namespace: 'develop-native',
        pathNamespaces: ['/devlop-native', '/develop-cloud'],
    };
    var $init = function (hook, vm) {

        var util = Docsify.util;
        var opts = vm.config.search || CONFIG;

        if (Array.isArray(opts)) {
            CONFIG.paths = opts;
        } else if (typeof opts === 'object') {
            CONFIG.paths = Array.isArray(opts.paths) ? opts.paths : 'auto';
            CONFIG.maxAge = util.isPrimitive(opts.maxAge) ? opts.maxAge : CONFIG.maxAge;
            CONFIG.placeholder = opts.placeholder || CONFIG.placeholder;
            CONFIG.noData = opts.noData || CONFIG.noData;
            CONFIG.depth = opts.depth || CONFIG.depth;
            CONFIG.namespace = opts.namespace || CONFIG.namespace;
            CONFIG.pathNamespaces = opts.pathNamespaces || CONFIG.pathNamespaces;
        }

        hook.ready(function (_) {
            init$1(CONFIG, vm);
            searchInit(CONFIG, vm);
        })
        hook.doneEach(function () {
            var keyword = vm.router.parse().query.keyword;
            if (vm.route.path === '/') {
                var $homeSearch = Docsify.dom.find('.homepage-search');
                if ($homeSearch) {
                    init($homeSearch, vm, keyword, true);
                }
            } else {
                if (vm.route.path === '/search') {
                    var $searchPageSearch = Docsify.dom.find('.search-page-search');
                    if ($searchPageSearch) {
                        init($searchPageSearch, vm, keyword, true)
                        update(CONFIG, vm);
                        var $search = Docsify.dom.find('div.search');
                        var searchText = Docsify.dom.find($search, 'input').value;
                        doSearch(searchText.trim());
                    }
                } else {
                    var $navSearch = Docsify.dom.find('.nav-search');
                    if ($navSearch) {
                        init($navSearch, vm, keyword, true);
                    }
                }
            }
        });
    }
    $docsify.plugins = [].concat($docsify.plugins, $init);
})();
