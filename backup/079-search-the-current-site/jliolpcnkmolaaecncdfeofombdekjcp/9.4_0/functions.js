function shorten (s, max) {
    s = s.replace(/\n/g, ' '); // replace newlines with spaces
    if (encodeURIComponent(s).length > max) { // remove duplicate whitespace   
        s = s.replace(/\s{2,}/g, ' ');
    }
    var l = encodeURIComponent(s).replace(/%20/g, '+').length;
    if (l > max) { // remove duplicate words
        var a = s.split(' ');
        var saved = 0;
        for (var i = a.length - 1; l - saved > max && i >= 0; i--) {
            if (a.indexOf(a[i]) != i) {
                saved += encodeURIComponent(a[i]).length + 1;
                a.splice(i, 1);
            }
        }
        for (var i = a.length - 1; l - saved > max && i >= 0; i--) {
            saved += encodeURIComponent(a[i]).length + 1;
            a.splice(i, 1);
        }
        s = a.join(' ');
    }
    return s;
}

function getURLfromSearchTerms (searchTerms, advancedSearch, searchEngine) {
    var urls;
    if (!advancedSearch) {
        urls = {
            'google': 'https://www.google.com/search?q={s}',
            'yahoo': 'https://search.yahoo.com/search?p={s}',
            'bing': 'https://www.bing.com/search?q={s}',
            'yandex': 'https://yandex.ru/search/?text={s}'
        };
    } else {
        urls = {
            'google': 'https://www.google.com/advanced_search?q={s}',
            'yahoo': 'https://search.yahoo.com/web/advanced?p={s}',
            'bing': 'https://www.bing.com/search?q={s}&qb=1&FORM=AXRE',
            'yandex': 'https://yandex.ru/search/advanced?text={s}'
        };
    }
    return urls[searchEngine].replace(/\{s\}/g, encodeURIComponent(searchTerms).replace(/%20/g, '+'));
}

function getURLforDomainSearch (searchterms, domainnames, advanced, search_engine, site_after_search_terms, add_quotation_marks) {
    searchterms = searchterms.replace(/^\s+|\s+$/g, '');

    // this variable indicates if we want to use Yahoo's "vs=" URL parameter
    var yahooVS = search_engine == 'yahoo' && domainnames.every(function (domain) { return domain.indexOf('/') == -1; });

    if (yahooVS && searchterms == '') {
        searchterms = '+';
    }
    if (!domainnames) {
        throw new Error('function ' + 'getURLforDomainSearch' + ' has been called without the domainnames parameter.');
    }
    var st = searchterms;
    if (st.indexOf(' ') != -1 && st.indexOf('"') == -1 && add_quotation_marks) {
        st = '"' + st + '"';
    } else if (st.match(/"/g) != null && st.match(/"/g).length % 2 == 1) {
        if (st.indexOf('"') == st.length - 1) {
            st = '"' + st;
        } else {
            st = st + '"';
        }
    }

    var sitesStr = domainnames.map(function (domain) { return 'site:' + domain; }).join(search_engine == 'yandex' ? ' | ' : ' OR ');
    if (domainnames.length >= 2) {
        sitesStr = '(' + sitesStr + ')';
    }
    if (!yahooVS) {
        if (site_after_search_terms) {
            st += ((st == '' && search_engine != 'bing') ? '' : ' ') + sitesStr;
        } else {
            st = sitesStr + ((st == '' && search_engine != 'bing') ? '' : ' ') + st;
        }
    }
    var url = getURLfromSearchTerms(st, advanced, search_engine) + (yahooVS ? ('&vs=' + encodeURIComponent(domainnames.join(','))) : '');
    if (search_engine == 'google') {
        url = url.replace(/%3A/g, ':');
    }
    return url;
}

function getURLWithoutViewSource (url) {
    if (url.indexOf('view-source:') == 0) {
        url = url.replace(/^view-source:/, '');
        if (!url.match(/^[a-z][a-z\+-\d]+:/)) { // check if the url is schemeless
            url = 'http://' + url;
        }
    }
    return url;
}

function getUnicodeDomainFromURL (str) {
    str = getURLWithoutViewSource(str);
    try {
        var url = new URL(str);
    } catch (e) {
        return null;
    }
    if (url.protocol == 'http:' || url.protocol == 'https:' || url.protocol == 'ftp:') {
        return punycode.ToUnicode(url.hostname);
    } else {
        return null;
    }
}

function getShortenedSelectedTextFromCurrentTab (callbackFunction, options) {
    var doStuffWithSetting = function (opts) {
        if (opts['use_selection']) {
            var req_id = Math.random();
            chrome.runtime.onMessage.addListener(
                function (message, sender, sendResponse) {
                    if (message['id'] == req_id /* && sender.tab.url == ??? */) {
                        callbackFunction(shorten(message['selection'], 2000));
                    }
                });
            chrome.tabs.executeScript(null, { code: "var getSel = function(doc){try{if(doc.activeElement && doc.activeElement.contentDocument && (frameSel = getSel(doc.activeElement.contentDocument), frameSel != '' && frameSel.length))return frameSel;}catch(e){}; return doc.getSelection().toString();}; chrome.runtime.sendMessage({'selection': getSel(document), id: " + req_id + '});' });
        } else {
            callbackFunction('');
        }
    };

    if (options) {
        doStuffWithSetting(options);
    } else {
        storage.getOptions(['use_selection'], doStuffWithSetting, { maxWait: 200 });
    }
}

function search (args) {
    var txt = args.query, advanced = args.advanced, old_tab = args.opener_tab, open_in = args.open_in, t_n = args.number_of_opened_tabs, frameUrl = args.frameUrl, domains = args.domains;
    if (!domains) {
        domains = [getUnicodeDomainFromURL(old_tab.url)];
    }
    if (domains.length == 1 && domains[0] == null) {
        domains = [getUnicodeDomainFromURL(frameUrl)];
    }
    if (domains.length == 1 && domains[0] == null) {
        return;
    }
    var doStuffWithOptions = function (options) {
        var url = getURLforDomainSearch(txt, domains, advanced, options.search_engine, options.site_after_search_terms, options.add_quotation_marks);
        var wc = function (/* url, incog */) {
            var incog = old_tab.incognito;
            chrome.windows.create((incog == undefined) ? {'url': url} : {'url': url, 'incognito': incog},
                function (w) {
                    if (w) {
                        chrome.tabs.getAllInWindow(w.id, function (tabs) {
                        });
                    }
                    if (!w) {
                        console.log('Failed to create window.');
                    }
                });
        };

        if (!open_in) {
            open_in = options.open_results_in;
        }
        if (open_in.indexOf('window') != -1) {
            wc(url, old_tab.incognito);
        } else if (open_in == 'same tab') {
            chrome.tabs.update(old_tab.id, {'url': url}, function (t) {
                if (!t) {
                    console.log('The tab where the search should have been opened no longer exists so it is opened in a new tab.');
                    chrome.tabs.create({'url': url, 'windowId': old_tab.windowId, 'index': old_tab.index}, function (new_tab) {
                        if (!new_tab) {
                            wc(url, old_tab.incognito);
                        }
                    });
                }
            });
        } else {
            chrome.tabs.create({'windowId': old_tab.windowId, 'url': url, 'openerTabId': old_tab.id, 'index': old_tab.index + 1 + (t_n || 0), 'active': (open_in == 'foreground tab')},
                function (new_tab) {
                    if (!new_tab) {
                        console.log('The window where the search should have been opened no longer exists so it is opened in another/new window.');
                        chrome.windows.getLastFocused(function (w) {
                            if (w && w.incognito == old_tab.incognito) {
                                chrome.tabs.create({'url': url, 'windowId': w.id}, function (new_tab) {
                                });
                            } else if (!w) {
                                wc(url, old_tab.incognito);
                            } else if (w) {
                                chrome.windows.getAll({}, function (ws) {
                                    var found = false;
                                    for (var i = 0; i < ws.length; i++) {
                                        if (ws[i].incognito == old_tab.incognito) {
                                            found = true;
                                            chrome.tabs.create({'url': url, 'windowId': ws[i].id}, function (new_tab) {
                                            });
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        wc(url, old_tab.incognito);
                                    }
                                });
                            }
                        });
                    }
                });
        }
    };
    if (args.options) {
        doStuffWithOptions(args.options);
    } else {
        storage.getOptions(['search_engine', 'add_quotation_marks', 'site_after_search_terms', 'open_results_in'], doStuffWithOptions, { maxWait: 200 });
    }
}
