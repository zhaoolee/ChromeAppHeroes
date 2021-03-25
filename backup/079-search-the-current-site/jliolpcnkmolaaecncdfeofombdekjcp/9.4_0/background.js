chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == 'install' || details.reason == 'update') {
        migrateFromLocalStorage();
    }
});

function migrateFromLocalStorage () {
    // migrating from localStorage to chrome.storage.sync
    localStorage.removeItem('last_versions');
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
    }
    chrome.storage.sync.get(keys, function (opts) {
        keys.forEach(function (key) {
            if (opts[key] == undefined) {
                storage.setOption(key, getOptionFromLocalStorage(key));
            }
        });
        localStorage.clear();
    });
}

function getOptionFromLocalStorage (optionName) {
    var optionValue = localStorage.getItem(optionName);
    if (optionName == 'search_engine' && (optionValue == 'google' || optionValue == 'yahoo' || optionValue == 'bing')) {
        return optionValue;
    } else if (optionValue == undefined) {
        return optionValue;
    } else {
        return JSON.parse(optionValue);
    }
}

function handleToolbarButtonClick (tab) {
    var didSearch = false;
    var doSearch = function (selection) {
        if (!didSearch) {
            didSearch = true;
            search({'query': selection, 'advanced': false, 'opener_tab': tab});
        }
    };

    var doSearchSel = function () {
        getShortenedSelectedTextFromCurrentTab(function (selection) {
            doSearch(selection);
        });
        setTimeout(function () {
            doSearch('');
        }, 100);
    };

    doSearchSel();
}

function checkOptionForButtonAction () {
    storage.getOption('button_opens_popup_instead_of_tab', function (popupPleaseOption) {
        if (popupPleaseOption) {
            chrome.browserAction.setPopup({'popup': 'popup.html'});
        } else {
            chrome.browserAction.setPopup({'popup': ''});
            if (!chrome.browserAction.onClicked.hasListener(handleToolbarButtonClick)) {
                chrome.browserAction.onClicked.addListener(handleToolbarButtonClick);
            }
        }
    });
}
checkOptionForButtonAction();
storage.addOptionChangedListener(checkOptionForButtonAction);

var context_menu_entry_is_added;
if (chrome.contextMenus) {
    context_menu_entry_is_added = false;

    var checkOptionForContextMenu = function () {
        var addContextMenuEntry = function () {
            context_menu_entry_is_added = true;
            var cm_id = chrome.contextMenus.create({
                'title': chrome.i18n.getMessage('Search_this_site_for_TEXT', ['%s']),
                'contexts': ['selection'],
                'documentUrlPatterns': ['http://*/*', 'https://*/*', 'ftp://*/*'],
                'onclick': function (info, tab) {
                    search({'query': shorten(info.selectionText, 2000), 'advanced': false, 'opener_tab': tab, 'frameUrl': info.frameUrl});
                }});
        };

        var removeContextMenuEntries = function () {
            context_menu_entry_is_added = false;
            chrome.contextMenus.removeAll();
        };

        storage.getOption('context_menu', function (cmOption) {
            if (cmOption) {
                if (!context_menu_entry_is_added) {
                    addContextMenuEntry();
                }
            } else if (context_menu_entry_is_added) {
                removeContextMenuEntries();
            }
        });
    };

    checkOptionForContextMenu();

    storage.addOptionChangedListener(checkOptionForContextMenu);
}
