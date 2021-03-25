function $ (id) {
    return document.getElementById(id);
}

$('submitbutton').value = chrome.i18n.getMessage('Search');
$('advButton').innerText = chrome.i18n.getMessage('Advanced_search');

$('submitbutton').addEventListener('click', function (e) {
    e.preventDefault();
    searchForInputboxValue(e, false);
});
$('advButton').addEventListener('click', function (e) {
    e.preventDefault();
    searchForInputboxValue(e, true);
});

$('inputform').addEventListener('submit', function () { searchForInputboxValue(undefined, false); });

(function () {
    var mouseDownTarget;
    document.body.addEventListener('mousedown', function (e) {
        mouseDownTarget = e.target;
        mouseDownActiveElement = document.activeElement;
    });
    document.body.addEventListener('mouseup', function (e) {
        if (e.button <= 1 && $('inputbox') == mouseDownActiveElement) {
            var mouseUpTarget = e.target;
            if (
                (mouseDownTarget == mouseUpTarget && (mouseUpTarget.id == 'submitbutton' || mouseUpTarget.id == 'advButton')) ||
                ($('domainCheckBoxes').contains(mouseDownTarget) && $('domainCheckBoxes').contains(mouseUpTarget))
            ) {
                window.setTimeout(function () {
                    $('inputbox').focus();
                }, 10);
            }
        }
    });
})();

var url;
var sitesShown = false;
var sitesPrinted = false;

var optionsAvailableEvent = document.createEvent('Event');
optionsAvailableEvent.initEvent('optionsAvailable', true, true);
var options = {};
var optionsAvailable = false;

storage.getOptions(['open_results_in', 'show_advanced', 'radio_buttons_in_popup', 'use_selection', 'search_engine', 'add_quotation_marks', 'site_after_search_terms'], function (opts) {
    options = opts;
    optionsAvailable = true;
    document.body.dispatchEvent(optionsAvailableEvent);
    getShortenedSelectedTextFromCurrentTab(function (selection, options) {
        var ib = $('inputbox');
        if (ib.value == '') {
            ib.value = selection;
            ib.select();
        }
    });
}, { maxWait: 1500 });

function getOption (name, callback) {
    if (optionsAvailable) {
        callback(options[name]);
    } else {
        document.body.addEventListener('optionsAvailable', function () {
            callback(options[name]);
        });
    }
}

function WhereShouldThePageBeOpenedAndShouldItHaveFocus (args) {
    var e = args.event;
    if (e) {
        if (e.button == 1) {
            if (e.shiftKey) {
                return 'foreground tab';
            } else {
                return 'background tab';
            }
        }
        if (!e.ctrlKey && e.shiftKey) {
            return 'foreground window';
        }
        if (e.shiftKey && e.ctrlKey) {
            return 'foreground tab';
        }
        if (e.ctrlKey) {
            return 'background tab';
        }
        if (e.altKey) {
            return (args.option == 'same tab') ? 'foreground tab' : 'same tab';
        }
    }
    return args.option;
}

function searchForText (e, advanced, txt) {
    getOption('open_results_in', function (option) {
        if (sitesShown) {
            var d = [document.querySelector('input[name=site]:checked').value];
        } else {
            var d = domains;
        }
        var where_to_open = WhereShouldThePageBeOpenedAndShouldItHaveFocus({'event': e, 'option': option});
        chrome.extension.getBackgroundPage().search({'query': txt, 'advanced': advanced, 'domains': d, 'opener_tab': activeTab, 'open_in': where_to_open, 'number_of_opened_tabs': number_of_opened_tabs, 'options': options});
        number_of_opened_tabs++;
        if (!(e && (e.ctrlKey || e.button == 1))) {
            window.close();
        }
    });
}

function searchForInputboxValue (e, advanced) {
    var txt = $('inputbox').value;
    if (domains != null) {
        searchForText(e, advanced, txt);
    } else {
        document.body.addEventListener('domainAvailable', function () {
            searchForText(e, advanced, txt);
        }, false);
    }
}

var domains = null;
var activeTab;
var number_of_opened_tabs = 0;

var domainAvailableEvent = document.createEvent('Event');
domainAvailableEvent.initEvent('domainAvailable', true, true);

chrome.tabs.query({'currentWindow': true, 'highlighted': true}, function (tabs) {
    if (tabs.length >= 1) {
        gotTheTabs(tabs);
    } else { // we're probably on Opera, which doesn't use "highlighted: ...", so let's use "active: ..." instead:
        chrome.tabs.query({'currentWindow': true, 'active': true}, function (tabs) {
            gotTheTabs(tabs);
        });
    }
});

function gotTheTabs (highlightedTabs) {
    var notAllTabsHaveUrls;
    var tabs = highlightedTabs.filter(function (tab) {
        if (tab.url) {
            return true;
        } else {
            notAllTabsHaveUrls = true;
            return false;
        }
    });

    // If we have access to only some of the selected tabs' URLs, then only use the currently active tab. Otherwise, this would be confusing.
    if (notAllTabsHaveUrls) {
        tabs = tabs.filter(tab => tab.active);
    }

    domains = [];
    var doesStringEndWith = function (a, b) {
        var li = a.lastIndexOf(b);
        return (li >= 0 && li == a.length - b.length);
    };

    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].active) {
            activeTab = tabs[i];
        }
        var domain = getUnicodeDomainFromURL(tabs[i].url);
        if (domain) {
            url = tabs[i].url;
            var addDomain = true;
            for (var k = 0; k < domains.length; k++) {
                if (doesStringEndWith(domains[k], domain)) {
                    if (addDomain) {
                        domains[k] = domain;
                    } else {
                        domains.splice(k, 1);
                    }
                    addDomain = false;
                } else if (doesStringEndWith(domain, domains[k])) {
                    addDomain = false;
                }
            }
            if (addDomain) {
                domains.push(domain);
            }
        }
    }
    if (activeTab.incognito) {
        $('inputform').autocomplete = 'off';
    }
    if (domains.length == 0) {
        $('domains').innerHTML = '';
        $('inputform').disabled = 'disabled';
        $('submitbutton').disabled = 'disabled';
        $('inputbox').disabled = 'disabled';
        $('advButton').disabled = 'disabled';

        $('inputbox').blur();
        $('inputbox').value = '';
    } else {
        checkOptionForSiteSelection();
        var ds = $('domains');
        ds.innerText = '';
        for (var i = 0; i < domains.length; i++) {
            var d = document.createElement('span');
            d.className = 'domain';
            d.innerText = domains[i];
            ds.appendChild(d);
            if (i < domains.length - 1) {
                ds.innerHTML += ', ';
            }
        }
    }
    document.body.dispatchEvent(domainAvailableEvent);

    // check if we need the "tabs" permission
    if (notAllTabsHaveUrls && highlightedTabs.length >= 2) {
        chrome.permissions.contains({permissions: ['tabs']}, function (result) {
            if (result == false) {
                document.getElementById('permissionButton').addEventListener('click', function (e) {
                    chrome.permissions.request({
                        permissions: ['tabs']
                    }, function (granted) {
                        if (granted) {
                            // we haven't implemented updating the popup, so let's close it
                            window.close();
                        }
                    });
                });
                // show a big box saying if all tabs should be used, then we would need permission
                $('permissionMsg').innerText = chrome.i18n.getMessage('Not_access_to_all_tabs');
                $('permissionButton').value = chrome.i18n.getMessage('Give_permission');
                $('permissionBox').style.display = '';
                if (domains.length == 0) {
                    $('permissionButton').focus();
                }
            }
        });
    }
}

function checkOptionToShowAdvLink () {
    getOption('show_advanced', function (adv) {
        $('advButton').style.display = (adv) ? '' : 'none';
    });
}
checkOptionToShowAdvLink();
storage.addOptionChangedListener(function (changes) {
    if (changes) {
        Object.keys(changes).forEach(function (key) {
            options[key] = storage.getDefaultIfUnsupportedValue(key, changes[key].newValue);
        });
        checkOptionToShowAdvLink();
        checkOptionForSiteSelection();
    }
}, window);

function checkOptionForSiteSelection () {
    if (domains != null && domains.length == 1) {
        if (!sitesShown) {
            getOption('radio_buttons_in_popup', function (option) {
                if (option) {
                    if (sitesPrinted == false) {
                        var sitesAndDomain = getDomainsAndPathsFromURL(url);
                        var sites = sitesAndDomain.sites;
                        if (sites.length > 1) {
                            sites.forEach(function (site) {
                                var n = document.createElement('input');
                                n.type = 'radio';
                                n.name = 'site';
                                n.value = site;
                                if (site == sitesAndDomain.domain) {
                                    n.setAttribute('checked', 'checked');
                                }
                                var l = document.createElement('label');
                                l.appendChild(n);
                                var s = document.createElement('span');
                                s.innerText = site;
                                l.appendChild(s);
                                $('domainCheckBoxes').appendChild(l);
                            });

                            sitesPrinted = true;
                        } else {
                            sitesPrinted = 'not_necessary';
                        }
                    }
                    if (sitesPrinted == true) {
                        $('domains').style.display = 'none';
                        $('domainCheckBoxes').style.display = 'block';
                        sitesShown = true;
                    }
                }
            });
        }
        var hideDomainCheckBoxes = function () {
            $('domains').style.display = 'block';
            $('domainCheckBoxes').style.display = 'none';
            sitesShown = false;
        };
        if (sitesPrinted == 'not_necessary') {
            hideDomainCheckBoxes();
        } else {
            getOption('radio_buttons_in_popup', function (option) {
                if (!option) {
                    hideDomainCheckBoxes();
                }
            });
        }
    }
}

function getPaths (url) {
    url = getURLWithoutViewSource(url);

    var sites = [];

    var path = (new URL(url)).pathname;

    var dirs = decodeURI(path).split('/');
    dirs = dirs.slice(1, dirs.length - 1);
    for (var i = 1; i <= dirs.length; i++) {
        sites.push('/' + dirs.slice(0, i).join('/') + '/');
    }
    sites.reverse();
    return sites;
}

function isIpv4Address (s) {
    var parts = s.split('.');
    return parts.length == 4 && parts.every(function (p) { return p.match(/^\d{1,3}$/) && p >= 0 && p <= 255; });
}

function getDomainsAndPathsFromURL (url) {
    var domain = getUnicodeDomainFromURL(url);
    if (!domain) {
        return null;
    }

    var sites = [];

    if (isIpv4Address(domain)) {
        sites.push(domain);
    } else {
        var ds = domain.split('.');
        for (var i = 0; i < ds.length - 1; i++) {
            sites.push(ds.slice(i, ds.length).join('.'));
        }
    }

    sites = getPaths(url).map(function (p) {
        return domain + p;
    }).concat(sites);

    return {'sites': sites, 'domain': domain};
}
