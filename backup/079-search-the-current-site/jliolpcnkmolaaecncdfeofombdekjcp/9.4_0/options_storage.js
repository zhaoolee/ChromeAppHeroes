var storage = (function () {
    var defaultOptions = {
        'radio_buttons_in_popup': [false, true],
        'button_opens_popup_instead_of_tab': [true, false],
        'context_menu': [false, true],
        'search_engine': ['google', 'yahoo', 'bing', 'yandex'],
        'open_results_in': ['foreground tab', 'new window', 'same tab'],
        'use_selection': [true, false],
        'suggestions': [true, false],
        'show_domain': [true, false],
        'show_advanced': [false, true],
        'add_quotation_marks': [false, true],
        'site_after_search_terms': [false, true]
    };

    var opts_where_any_value_is_allowed = [];

    function setOption (optionName, value) {
        var obj = {};
        obj[optionName] = value;
        chrome.storage.sync.set(obj);
    }

    function getDefaultOption (name) {
        if (defaultOptions[name] != undefined) {
            return defaultOptions[name][0];
        } else {
            console.log("there's no option called '" + name + "'");
        }
        return undefined;
    }

    function getOption (name, callback, moreParsObj) {
        getOptions([name], function (optArr) {
            callback(optArr[name]);
        }, moreParsObj);
    }

    function getDefaultIfUnsupportedValue (name, value) {
        if (defaultOptions[name].indexOf(value) >= 0 || opts_where_any_value_is_allowed.indexOf(name) >= 0) {
            return value;
        } else {
            console.log(value + ' is not a supported value for ' + name + 'option.');
            return getDefaultOption(name);
        }
    }

    function getOptions (optNames, callback, moreParsObj) {
        var sentCallback;
        var doStuffWithopts = function (opts) {
            if (!sentCallback) {
                if (opts == undefined) {
                    opts = {};
                }
                optNames.forEach(function (name) {
                    if (opts[name] == undefined) {
                        opts[name] = getDefaultOption(name);
                    }

                    if (getDefaultOption(name) != undefined) {
                        opts[name] = getDefaultIfUnsupportedValue(name, opts[name]);
                    }
                });
                callback(opts);
                sentCallback = true;
            }
        };
        setTimeout(function () {
            if (sentCallback == false) {
                console.log("Couldn't get options until now, so using default options.");
                doStuffWithopts();
            }
        }
            , ((moreParsObj && moreParsObj['maxWait']) ? moreParsObj['maxWait'] : 390000));

        chrome.storage.sync.get(optNames, function (opts) {
            doStuffWithopts(opts);
        });
    }

    function addOptionChangedListener (listener, listeningWindow) {
        chrome.storage.onChanged.addListener(listener);
        if (listeningWindow) {
            listeningWindow.addEventListener('unload', function () {
                chrome.storage.onChanged.removeListener(listener);
            });
        }
    }

    return {
        setOption: setOption,
        getOption: getOption,
        getDefaultIfUnsupportedValue: getDefaultIfUnsupportedValue,
        getOptions: getOptions,
        addOptionChangedListener: addOptionChangedListener
    };
})();
