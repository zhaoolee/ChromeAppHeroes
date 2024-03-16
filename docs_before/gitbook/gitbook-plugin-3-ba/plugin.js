require(["gitbook"], function(gitbook) {
    // Load analytics.js
    gitbook.events.bind("start", function(e, config) {
        var cfg = config['3-ba'];

        window._hmt = window._hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?" + cfg.token;
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    });

    // Notify pageview
    gitbook.events.bind("page.change", function() {
      var path = window.location.pathname+window.location.search
      _hmt.push(['_trackPageview', path]);
    });
});
