proto._createSiteName = function() {
    var linkEl = document.createElement('div');
    linkEl.classList.add('logo');
    linkEl.innerHTML =
        "<a href=\"/\" class=\"docs-logo\"></a>";
    return linkEl;
};