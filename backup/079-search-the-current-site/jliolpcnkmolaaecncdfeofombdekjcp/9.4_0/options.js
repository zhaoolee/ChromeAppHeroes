function $ (id) {
    return document.getElementById(id);
}

function get18nMsg (message, subs) {
    return chrome.i18n.getMessage(message, subs).replace(/\n/g, '<br/>');
}

// localization

chrome.tabs.getCurrent(function (t) {
    if (t == undefined) { // checks if this page is embedded in the extension manager
        document.getElementById('options').removeChild(document.getElementsByTagName('h1')[0]);

        var vs = navigator.appVersion.match(/Chrome\/(\d+)\./);
        if (vs) {
            var chromeVer = parseInt(vs[1], 10);
        }
        if (chromeVer && chromeVer <= 40) {
            $('supportForumsLink').title = 'Go to ' + $('supportForumsLink').href;
            $('linkToWebstoreEntry').title = 'Go to ' + $('linkToWebstoreEntry').href;
        }
    } else {
        document.body.classList.remove('embedded');
        $('headerText').innerText = get18nMsg('NAME_Extension_Options');
        $('webstoreLink').innerText = get18nMsg('Download_more_extensions') + ' >>';
        var lang = get18nMsg('@@ui_locale');
        if (lang == '') {
            lang = navigator.language;
        }
        $('webstoreLink').href += '?hl=' + lang.replace('_', '-');
    }
});

document.title = get18nMsg('short_NAME_Extension_Options');
$('savedAutom').innerText = get18nMsg('Options_are_saved_automatically');
$('supportForumsLink').innerText = get18nMsg('Visit_the_forums');
$('linkToWebstoreEntry').innerText = get18nMsg('Rate_and_review_this_ext');

chrome.extension.isAllowedIncognitoAccess(function (isAllowedAccess) {
    if (isAllowedAccess) {
        writeIncogMsg('InfoMsg_HasIncognitoAccess');
    } else {
        writeIncogMsg('InfoMsg_HasNoIncognitoAccess');
    }
});

var onames = [];
var whtm = '';
var setopt_enabled = false;

function setopt (on, ov) {
    if (setopt_enabled) {
        storage.setOption(on, ov);
    }
}

function set_checkbox (optName, opt) {
    var os = document.getElementsByName(optName);
    setopt_enabled = false;
    for (var i = 0; i < os.length; i++) {
        if (os[i].type == 'checkbox') {
            os[i].checked = opt;
        } else {
            os[i].checked = JSON.parse(os[i].value) == opt;
        }
    }
    setopt_enabled = true;
}

function CreateOptions (args) {
    var tr = document.createElement('tr');
    tr.innerHTML += "<td class='left'>" + args.title + '</td>';

    var td2 = document.createElement('td');
    td2.className = 'right';
    for (var i = 0; i < args.options.length; i++) {
        // if(i!=0) td2.innerHTML += "<br/>";

        var input = document.createElement('input');
        input.type = args.type;
        if (args.type == 'radio') {
            input.setAttribute('value', JSON.stringify(args.options[i][1]));
        }
        input.setAttribute('name', args.optionname);
        var label = document.createElement('label');
        label.appendChild(input);
        label.innerHTML += '<span>' + args.options[i][0] + '</span';
        if (!args.returnNode) {
            td2.appendChild(label);
        } else {
            args.returnNode(label);
        }
    }
    tr.appendChild(td2);
    if (!args.returnNode) {
        whtm += (tr.outerHTML);
    }
    onames.push(args.optionname);
}

function CreateRadioOptions (title, optionname, options) {
    CreateOptions({'title': title, 'optionname': optionname, 'options': options, 'type': 'radio'});
}

function CreateCheckOptions (title, optionname, label, returnNode) {
    CreateOptions({'title': title, 'optionname': optionname, 'options': [[label]], 'type': 'checkbox', 'returnNode': returnNode});
}

function ___ () {
    whtm += ("<tr><td colspan='2'><hr/></td></tr>");
}

CreateRadioOptions(get18nMsg('On_toolbar_button_click'), 'button_opens_popup_instead_of_tab',
    [[get18nMsg('Open_popup'), true], [get18nMsg('Open_tab'), false]]);

CreateCheckOptions('', 'radio_buttons_in_popup', get18nMsg('Let_choose_site'));

CreateCheckOptions('', 'show_advanced', get18nMsg('Show_link_for_SOMETHING', [get18nMsg('Advanced_search')]));

___();

CreateRadioOptions(get18nMsg('Search_engine'), 'search_engine',
    [['www.google.com', 'Google', 'google', 'https://www.google.com/favicon.ico'],
        ['www.yahoo.com', 'Yahoo', 'yahoo', 'https://search.yahoo.com/favicon.ico'],
        ['www.bing.com', 'Bing', 'bing', 'https://www.bing.com/sa/simg/bing_p_rr_teal_min.ico'],
        ['yandex.ru', get18nMsg('Yandex'), 'yandex', 'https://yastatic.net/morda-logo/i/favicon_islands.ico']
    ].map(function (arr) {
        return ["<img src='" + arr[3] + "' width=16 height=16 alt /> " + arr[1], arr[2]];
    }));

___();

CreateRadioOptions(get18nMsg('Open_search_engine_in'), 'open_results_in',
    [[get18nMsg('New_tab'), 'foreground tab'], [get18nMsg('New_window'), 'new window'],
        [get18nMsg('Same_tab'), 'same tab']]);

/*
    CreateCheckOptions("", "suggestions",
    "Show search suggestions in the popup");
*/

/*
    CreateCheckOptions("", "add_quotation_marks",
    "When searching for more than one word,<br/>automatically add quotation marks around the search terms");
*/

___();

CreateCheckOptions(get18nMsg('Selected_text'), 'use_selection', get18nMsg('Use_selection'));

CreateCheckOptions('', 'context_menu', get18nMsg('Integrate_in_selection_context_menu'));


$('options_table').innerHTML = whtm;
document.documentElement.classList.remove('loadingContent');

var theF = function (node) {
    node.style.paddingLeft = '4em';
    var tr = node.parentElement.parentElement;
    var nextNode = document.getElementsByName('button_opens_popup_instead_of_tab')[1].parentElement;
    nextNode.parentElement.insertBefore(node, nextNode);
    tr.remove();
};
theF(document.getElementsByName('show_advanced')[0].parentElement);
theF(document.getElementsByName('radio_buttons_in_popup')[0].parentElement);

onames.forEach(function (on) {
    var os = document.getElementsByName(on);
    for (var i = 0; i < os.length; i++) {
        var check = (os[i].type == 'checkbox');
        os[i].onchange = (check) ? function () {
            setopt(on, this.checked);
        } : function () {
            setopt(on, JSON.parse(this.value));
        };
        if (!check) {
            os[i].onfocus = os[i].onchange;
        }
    }
});

function setAllOpts () {
    storage.getOptions(onames, function (opts) {
        for (var name in opts) {
            set_checkbox(name, opts[name]);
        }
        document.body.classList.remove('loading');
    }, {maxWait: 20000});
}
setAllOpts();
storage.addOptionChangedListener(setAllOpts, window);


var extInExtManUrl = 'chrome://extensions/?id=jliolpcnkmolaaecncdfeofombdekjcp';

function openExtensionManager () {
    chrome.tabs.getAllInWindow(null, function (tabs) {
        var x = 0;
        var extUrls = ['chrome://chrome/extensions/', 'chrome://extensions/', 'chrome://settings/extensions/', extInExtManUrl];
        extUrls = extUrls.concat(extUrls.map(function (url) {
            return url + '#jliolpcnkmolaaecncdfeofombdekjcp';
        }));
        tabs.forEach(function (tab) {
            if (extUrls.indexOf(tab.url) >= 0) {
                chrome.tabs.update(tab.id, {'selected': true}, function () {
                });
                x = 1;
            }
        });
        if (x == 0) {
            chrome.tabs.query({'windowId': chrome.windows.WINDOW_ID_CURRENT, 'active': true}, function (windows) {
                var currentTab = windows[0];
                chrome.tabs.create({'url': extInExtManUrl, 'openerTabId': currentTab.id, 'index': currentTab.index + 1}, function (tab) {
                });
            });
        }
    });
}

function writeIncogMsg (i18nStringName) {
    $('incognitoMsg').innerHTML = get18nMsg(i18nStringName).replace('<button>', '<a href="' + extInExtManUrl + '" style="cursor:default"><button tabindex="-1">').replace('</button>', '</button></a>');
    $('incognitoMsg').getElementsByTagName('button')[0].onclick = function () {
        openExtensionManager();
        return false;
    };
}

$('incognitoMsg').style.width = $('options').getElementsByTagName('table')[0].clientWidth + 'px';
