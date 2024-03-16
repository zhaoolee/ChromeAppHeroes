// LICENSE : MIT
"use strict";
require(['gitbook'], function (gitbook) {
    function addBeforeHeader(element) {
        jQuery('.book-header > h1').before(element);
    }

    function createButton(_ref) {
        var user = _ref.user;
        var repo = _ref.repo;
        var type = _ref.type;
        var size = _ref.size;
        var width = _ref.width;
        var height = _ref.height;
        var count = _ref.count;

        var extraParam = type === "watch" ? "&v=2" : "";
        return '<a class="btn pull-right hidden-mobile" aria-label="github">\n            <iframe\n                style="display:inline-block;vertical-align:middle;"\n                src="https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + repo + '&type=' + type + '&count=' + count + '&size=' + size + extraParam + '"\n                frameborder="0"\n                scrolling="0"\n                width="' + width + 'px"\n                height="' + height + 'px"\n            ></iframe>\n        </a>';
    }

    function createUserButton(_ref2) {
        var user = _ref2.user;
        var size = _ref2.size;
        var width = _ref2.width;
        var height = _ref2.height;
        var count = _ref2.count;

        return '<a class="btn pull-right hidden-mobile" aria-label="github">\n            <iframe\n                style="display:inline-block;vertical-align:middle;"\n                src="https://ghbtns.com/github-btn.html?user=' + user + '&type=follow&count=' + count + '&size=' + size + '"\n                frameborder="0"\n                scrolling="0"\n                width="' + width + 'px"\n                height="' + height + 'px"\n            ></iframe>\n        </a>';
    }

    function insertGitHubLink(button) {
        var user = button.user;
        var repo = button.repo;
        var type = button.type;
        var size = button.size;
        var width = button.width;
        var height = button.height;
        var count = button.count;

        var size = size || "large";
        var width = width || (size === "large" ? "150" : "100");
        var height = height || (size === "large" ? "30" : "20");
        var count = typeof count === "boolean" ? count : false;

        if (type === 'follow') {
            var elementString = createUserButton({
                user: user,
                size: size,
                width: width,
                height: height,
                count: count
            });
        } else {
            var elementString = createButton({
                user: user,
                repo: repo,
                type: type,
                size: size,
                width: width,
                height: height,
                count: count
            });
        }
        addBeforeHeader(elementString);
    }

    function init(config) {
        config.buttons.forEach(insertGitHubLink);
    }

    // injected by html hook
    function getPluginConfig() {
        return window["gitbook-plugin-github-buttons"];
    }

    // make sure configuration gets injected
    gitbook.events.bind('start', function (e, config) {
        window["gitbook-plugin-github-buttons"] = config["github-buttons"];
    });

    gitbook.events.bind('page.change', function () {
        init(getPluginConfig());
    });
});
//# sourceMappingURL=plugin.js.map