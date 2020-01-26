// ==UserScript==
// @name         解除B站区域限制
// @namespace    http://tampermonkey.net/
// @version      7.9.0
// @description  通过替换获取视频地址接口的方式, 实现解除B站区域限制; 只对HTML5播放器生效;
// @author       ipcjs
// @supportURL   https://github.com/ipcjs/bilibili-helper/blob/user.js/bilibili_bangumi_area_limit_hack.md
// @compatible   chrome
// @compatible   firefox
// @license      MIT
// @require      https://static.hdslb.com/js/md5.js
// @include      *://www.bilibili.com/video/av*
// @include      *://www.bilibili.com/bangumi/play/ep*
// @include      *://www.bilibili.com/bangumi/play/ss*
// @include      *://m.bilibili.com/bangumi/play/ep*
// @include      *://m.bilibili.com/bangumi/play/ss*
// @include      *://bangumi.bilibili.com/anime/*
// @include      *://bangumi.bilibili.com/movie/*
// @include      *://www.bilibili.com/bangumi/media/md*
// @include      *://www.bilibili.com/blackboard/html5player.html*
// @include      *://link.acg.tv/forum.php*
// @run-at       document-start
// @grant        none
// ==/UserScript==

'use strict';
const log = console.log.bind(console, 'injector:')

if (location.href.match(/^https?:\/\/link\.acg\.tv\/forum\.php/) != null) {
    if (location.href.match('access_key') != null && window.opener != null) {
        window.stop();
        document.children[0].innerHTML = '<title>BALH - 授权</title><meta charset="UTF-8" name="viewport" content="width=device-width">正在跳转……';
        window.opener.postMessage('balh-login-credentials: ' + location.href, '*');
    }
    return;
}

function injector() {
    if (document.getElementById('balh-injector-source')) {
        log(`脚本已经注入过, 不需要执行`)
        return
    }
    // @require      https://static.hdslb.com/js/md5.js
    GM_info.scriptMetaStr.replace(new RegExp('// @require\\s+https?:(//.*)'), (match, /*p1:*/url) => {
        log('@require:', url)
        let $script = document.createElement('script')
        $script.className = 'balh-injector-require'
        $script.setAttribute('type', 'text/javascript')
        $script.setAttribute('src', url)
        document.head.appendChild($script)
        return match
    })
    let $script = document.createElement('script')
    $script.id = 'balh-injector-source'
    $script.appendChild(document.createTextNode(`
        ;(function(GM_info){
            ${scriptSource.toString()}
            ${scriptSource.name}('${GM_info.scriptHandler}.${injector.name}')
        })(${JSON.stringify(GM_info)})
    `))
    document.head.appendChild($script)
    log('注入完成')
}

if (!Object.getOwnPropertyDescriptor(window, 'XMLHttpRequest').writable) {
    log('XHR对象不可修改, 需要把脚本注入到页面中', GM_info.script.name, location.href, document.readyState)
    injector()
    return
}

/** 脚本的主体部分, 在GM4中, 需要把这个函数转换成字符串, 注入到页面中, 故不要引用外部的变量 */
function scriptSource(invokeBy) {
    'use strict';
    let log = console.log.bind(console, 'injector:')
    if (document.getElementById('balh-injector-source') && invokeBy === GM_info.scriptHandler) {
        // 当前, 在Firefox+GM4中, 当返回缓存的页面时, 脚本会重新执行, 并且此时XMLHttpRequest是可修改的(为什么会这样?) + 页面中存在注入的代码
        // 导致scriptSource的invokeBy直接是GM4...
        log(`页面中存在注入的代码, 但invokeBy却等于${GM_info.scriptHandler}, 这种情况不合理, 终止脚本执行`)
        return
    }
    if (document.readyState === 'uninitialized') { // Firefox上, 对于ifame中执行的脚本, 会出现这样的状态且获取到的href为about:blank...
        log('invokeBy:', invokeBy, 'readState:', document.readyState, 'href:', location.href, '需要等待进入loading状态')
        setTimeout(() => scriptSource(invokeBy + '.timeout'), 0) // 这里会暴力执行多次, 直到状态不为uninitialized...
        return
    }

    const r_text = {
        ok: { en: 'OK', zh_cn: '确定', },
        close: { en: 'Close', zh_cn: '关闭' },
        welcome_to_acfun: '<p><b>缺B乐 了解下？</b></p>',
        version_remind: ``,
    }
    const _t = (key) => {
        const text = r_text[key]
        const lang = 'zh_cn'
        return typeof text === 'string' ? text : text[lang]
    }

    const r = {
        html: {},
        css: {
            settings: '#balh-settings {font-size: 12px;color: #6d757a;}  #balh-settings h1 {color: #161a1e}  #balh-settings a {color: #00a1d6;}  #balh-settings a:hover {color: #f25d8e}  #balh-settings input {margin-left: 3px;margin-right: 3px;}  @keyframes balh-settings-bg { from {background: rgba(0, 0, 0, 0)} to {background: rgba(0, 0, 0, .7)} }  #balh-settings label {width: 100%;display: inline-block;cursor: pointer}  #balh-settings label:after {content: "";width: 0;height: 1px;background: #4285f4;transition: width .3s;display: block}  #balh-settings label:hover:after {width: 100%}  form {margin: 0}  #balh-settings input[type="radio"] {-webkit-appearance: radio;-moz-appearance: radio;appearance: radio;}  #balh-settings input[type="checkbox"] {-webkit-appearance: checkbox;-moz-appearance: checkbox;appearance: checkbox;} ',
        },
        attr: {},
        url: {
            issue: 'https://github.com/ipcjs/bilibili-helper/issues',
            issue_new: 'https://github.com/ipcjs/bilibili-helper/issues/new',
            readme: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/bilibili_bangumi_area_limit_hack.md#%E8%A7%A3%E9%99%A4b%E7%AB%99%E5%8C%BA%E5%9F%9F%E9%99%90%E5%88%B6',
        },
        script: {
            is_dev: GM_info.script.name.includes('.dev'),
        },
        const: {
            mode: {
                DEFAULT: 'default',// 默认模式, 自动判断使用何种模式, 推荐;
                REPLACE: 'replace', // 替换模式, 替换有区域限制的视频的接口的返回值;
                REDIRECT: 'redirect',// 重定向模式, 直接重定向所有番剧视频的接口到代理服务器; 所有番剧视频都通过代理服务器获取视频地址, 如果代理服务器不稳定, 可能加载不出视频;
            },
            server: {
                S0: 'https://biliplus.ipcjs.top',
                S1: 'https://www.biliplus.com',
                CUSTOM: '__custom__',
                defaultServer: function () {
                    return this.S1
                },
            },
            TRUE: 'Y',
            FALSE: '',
        },
        baipiao: [
            { key: 'zomble_land_saga', match: () => (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.epInfo && window.__INITIAL_STATE__.epInfo.ep_id) === 251255, link: 'http://www.acfun.cn/bangumi/ab5022161_31405_278830', message: r_text.welcome_to_acfun },
            { key: 'zomble_land_saga', match: () => (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.mediaInfo && window.__INITIAL_STATE__.mediaInfo.media_id) === 140772, link: 'http://www.acfun.cn/bangumi/aa5022161', message: r_text.welcome_to_acfun },
        ]
    }
    const util_stringify = (item) => {
        if (typeof item === 'object') {
            try {
                return JSON.stringify(item)
            } catch (e) {
                console.debug(e)
                return item.toString()
            }
        } else {
            return item
        }
    }
    const util_arr_stringify = function (arr) {
        return arr.map(util_stringify).join(' ')
    }

    const util_str_multiply = function (str, multiplier) {
        let result = ''
        for (let i = 0; i < multiplier; i++) {
            result += str
        }
        return result
    }
    const util_str_to_c_like = (str) => {
        return str.replace(/[A-Z]/g, (a) => `_${a.toLowerCase()}`).replace(/^_/, "")
    }
    const util_obj_key_to_c_like = (obj) => {
        // log(typeof obj, Array.isArray(obj), obj)
        if (Array.isArray(obj)) {
            for (const item of obj) {
                util_obj_key_to_c_like(item)
            }
        } else if (typeof obj === 'object') {
            for (const key of Object.keys(obj)) {
                const value = obj[key]
                util_obj_key_to_c_like(value)
                obj[util_str_to_c_like(key)] = value
            }
        }
        return obj // 该方法会修改传入的obj的内容, 返回obj只是为了调用方便...
    }
    const _raw = (str) => str.replace(/(\.|\?)/g, '\\$1')
    const util_regex_url = (url) => new RegExp(`^(https?:)?//${_raw(url)}`)
    const util_regex_url_path = (path) => new RegExp(`^(https?:)?//[\\w\\-\\.]+${_raw(path)}`)

    const util_log_hub = (function () {
        const tag = GM_info.script.name + '.msg'

        // 计算"楼层", 若当前window就是顶层的window, 则floor为0, 以此类推
        function computefloor(w = window, floor = 0) {
            if (w === window.top) {
                return floor
            } else {
                return computefloor(w.parent, floor + 1)
            }
        }

        let floor = computefloor()
        let msgList = []
        if (floor === 0) { // 只有顶层的Window才需要收集日志
            window.addEventListener('message', (event) => {
                if (event.data instanceof Array && event.data[0] === tag) {
                    let [/*tag*/, fromFloor, msg] = event.data
                    msgList.push(util_str_multiply('    ', fromFloor) + msg)
                }
            })
        }
        return {
            msg: function (msg) {
                window.top.postMessage([tag, floor, msg], '*')
            },
            getAllMsg: function () {
                return msgList.join('\n')
            }
        }
    }())
    const util_log_impl = function (type) {
        if (r.script.is_dev) {
            // 直接打印, 会显示行数
            return window.console[type].bind(window.console, type + ':');
        } else {
            // 将log收集到util_log_hub中, 显示的行数是错误的...
            return function (...args) {
                args.unshift(type + ':')
                window.console[type].apply(window.console, args)
                util_log_hub.msg(util_arr_stringify(args))
            }
        }
    }
    const util_log = util_log_impl('log')
    const util_info = util_log_impl('info')
    const util_debug = util_log_impl('debug')
    const util_warn = util_log_impl('warn')
    const util_error = util_log_impl('error')
    log = util_debug
    log(`[${GM_info.script.name} v${GM_info.script.version} (${invokeBy})] run on: ${window.location.href}`);

    const util_func_noop = function () { }
    const util_func_catched = function (func, onError) {
        let ret = function () {
            try {
                return func.apply(this, arguments)
            } catch (e) {
                if (onError) return onError(e) // onError可以处理报错时的返回值
                // 否则打印log, 并返回undefined
                util_error('Exception while run %o: %o\n%o', func, e, e.stack)
                return undefined
            }
        }
        // 函数的name属性是不可写+可配置的, 故需要如下代码实现类似这样的效果: ret.name = func.name
        // 在Edge上匿名函数的name的描述符会为undefined, 需要做特殊处理, fuck
        let funcNameDescriptor = Object.getOwnPropertyDescriptor(func, 'name') || {
            value: '',
            writable: false,
            configurable: true,
        }
        Object.defineProperty(ret, 'name', funcNameDescriptor)
        return ret
    }

    const util_safe_get = (code) => {
        return eval(`
        (()=>{
            try{
                return ${code}
            }catch(e){
                console.warn(e.toString())
                return null
            }
        })()
        `)
    }

    const util_ui_alert = function (message, resolve, reject) {
        setTimeout(() => {
            if (resolve) {
                if (window.confirm(message)) {
                    resolve()
                } else {
                    if (reject) {
                        reject()
                    }
                }
            } else {
                alert(message)
            }
        }, 500)
    }

    const util_init = (function () {
        const RUN_AT = {
            DOM_LOADED: 0,
            DOM_LOADED_AFTER: 1,
            COMPLETE: 2,
        }
        const PRIORITY = {
            FIRST: 1e6,
            HIGH: 1e5,
            BEFORE: 1e3,
            DEFAULT: 0,
            AFTER: -1e3,
            LOW: -1e5,
            LAST: -1e6,
        }
        const callbacks = {
            [RUN_AT.DOM_LOADED]: [],
            [RUN_AT.DOM_LOADED_AFTER]: [],
            [RUN_AT.COMPLETE]: [],
        }
        const util_page_valid = () => true // 是否要运行
        const dclCreator = function (runAt) {
            let dcl = function () {
                util_init.atRun = runAt // 更新运行状态
                const valid = util_page_valid()
                // 优先级从大到小, index从小到大, 排序
                callbacks[runAt].sort((a, b) => b.priority - a.priority || a.index - b.index)
                    .filter(item => valid || item.always)
                    .forEach(item => item.func(valid))
            }
            return dcl
        }

        if (window.document.readyState !== 'loading') {
            const msg = `${GM_info.script.name} 加载时机不对, 不能保证正常工作\n\n1. 点击'确定', 刷新页面/重载脚本\n2. 若依然出现该提示, 请尝试'硬性重新加载'(快捷键一般为ctrl+f5)\n3. 若还是出现该提示, 请尝试关闭再重新打开该页面\n4. 若反复出现该提示, 请尝试换个浏览器\n`
            /*
            util_ui_alert(msg, () => {
                location.reload(true)
            })
            */
            // throw new Error('unit_init must run at loading, current is ' + document.readyState)
            util_warn(msg)
        }

        window.document.addEventListener('DOMContentLoaded', dclCreator(RUN_AT.DOM_LOADED))
        window.addEventListener('DOMContentLoaded', dclCreator(RUN_AT.DOM_LOADED_AFTER))
        window.addEventListener('load', dclCreator(RUN_AT.COMPLETE))

        const util_init = function (func, priority = PRIORITY.DEFAULT, runAt = RUN_AT.DOM_LOADED, always = false) {
            func = util_func_catched(func)
            if (util_init.atRun < runAt) { // 若还没运行到runAt指定的状态, 则放到队列里去 
                callbacks[runAt].push({
                    priority,
                    index: callbacks[runAt].length, // 使用callback数组的长度, 作为添加元素的index属性
                    func,
                    always
                })
            } else { // 否则直接运行
                let valid = util_page_valid()
                setTimeout(() => (valid || always) && func(valid), 1)
            }
            return func
        }
        util_init.atRun = -1 // 用来表示当前运行到什么状态
        util_init.RUN_AT = RUN_AT
        util_init.PRIORITY = PRIORITY
        return util_init
    }())
    /** 通知模块 剽窃自 YAWF 用户脚本 硬广：https://tiansh.github.io/yawf/ */
    const util_notify = (function () {
        var avaliable = {};
        var shown = [];
        var use = {
            'hasPermission': function () { return null; },
            'requestPermission': function (callback) { return null; },
            'hideNotification': function (notify) { return null; },
            'showNotification': function (id, title, body, icon, delay, onclick) { return null; }
        };

        // 检查一个微博是不是已经被显示过了，如果显示过了不重复显示
        var shownFeed = function (id) {
            return false;
        };

        // webkitNotifications
        // Tab Notifier 扩展实现此接口，但显示的桌面提示最多只能显示前两行
        if (typeof webkitNotifications !== 'undefined') avaliable.webkit = {
            'hasPermission': function () {
                return [true, null, false][webkitNotifications.checkPermission()];
            },
            'requestPermission': function (callback) {
                return webkitNotifications.requestPermission(callback);
            },
            'hideNotification': function (notify) {
                notify.cancel();
                afterHideNotification(notify);
            },
            'showNotification': function (id, title, body, icon, delay, onclick) {
                if (shownFeed(id)) return null;
                var notify = webkitNotifications.createNotification(icon, title, body);
                if (delay && delay > 0) notify.addEventListener('display', function () {
                    setTimeout(function () { hideNotification(notify); }, delay);
                });
                if (onclick) notify.addEventListener('click', function () {
                    onclick.apply(this, arguments);
                    hideNotification(notify);
                });
                notify.show();
                return notify;
            },
        };

        // Notification
        // Firefox 22+
        // 显示4秒会自动关闭 https://bugzil.la/875114
        if (typeof Notification !== 'undefined') avaliable.standard = {
            'hasPermission': function () {
                return {
                    'granted': true,
                    'denied': false,
                    'default': null,
                }[Notification.permission];
            },
            'requestPermission': function (callback) {
                return Notification.requestPermission(callback);
            },
            'hideNotification': function (notify) {
                notify.close();
                afterHideNotification(notify);
            },
            'showNotification': function (id, title, body, icon, delay, onclick) {
                if (shownFeed(id)) return null;
                var notify = new Notification(title, { 'body': body, 'icon': icon, 'requireInteraction': !delay });
                if (delay && delay > 0) notify.addEventListener('show', function () {
                    setTimeout(function () {
                        hideNotification(notify);
                    }, delay);
                });
                if (onclick) notify.addEventListener('click', function () {
                    onclick.apply(this, arguments);
                    hideNotification(notify);
                });
                return notify;
            },
        };

        // 有哪些接口可用
        var avaliableNotification = function () {
            return Object.keys(avaliable);
        };
        // 选择用哪个接口
        var choseNotification = function (prefer) {
            return (use = prefer && avaliable[prefer] || avaliable.standard);
        };
        choseNotification();
        // 检查权限
        var hasPermission = function () {
            return use.hasPermission.apply(this, arguments);
        };
        // 请求权限
        var requestPermission = function () {
            return use.requestPermission.apply(this, arguments);
        };
        // 显示消息
        var showNotification = function (id, title, body, icon, delay, onclick) {
            var notify = use.showNotification.apply(this, arguments);
            shown.push(notify);
            return notify;
        };
        // 隐藏已经显示的消息
        var hideNotification = function (notify) {
            use.hideNotification.apply(this, arguments);
            return notify;
        };
        var afterHideNotification = function (notify) {
            shown = shown.filter(function (x) { return x !== notify; });
        };

        document.addEventListener('unload', function () {
            shown.forEach(hideNotification);
            shown = [];
        });
        var showNotificationAnyway = function (id, title, body, icon, delay, onclick) {
            var that = this, thatArguments = arguments;
            switch (that.hasPermission()) {
                case null: // default
                    that.requestPermission(function () {
                        showNotificationAnyway.apply(that, thatArguments);
                    });
                    break;
                case true: // granted
                    // 只有已获取了授权, 才能有返回值...
                    return that.showNotification.apply(that, thatArguments);
                    break;
                case false: // denied
                    log('Notification permission: denied');
                    break;
            }
            return null;
        }

        return {
            'avaliableNotification': avaliableNotification,
            'choseNotification': choseNotification,
            'hasPermission': hasPermission,
            'requestPermission': requestPermission,
            'showNotification': showNotification,
            'hideNotification': hideNotification,
            show: function (body, onclick, delay = 3e3) {
                return this.showNotificationAnyway(Date.now(), GM_info.script.name, body, '//bangumi.bilibili.com/favicon.ico', delay, onclick)
            },
            showNotificationAnyway
        };
    }())
    const util_cookie = (function () {
        function getCookies() {
            var map = document.cookie.split('; ').reduce(function (obj, item) {
                var entry = item.split('=');
                obj[entry[0]] = entry[1];
                return obj;
            }, {});
            return map;
        }

        function getCookie(key) {
            return getCookies()[key];
        }

        /**
         * @param key     key
         * @param value   为undefined时, 表示删除cookie
         * @param options 为undefined时, 表示过期时间为3年
         *          为''时, 表示Session cookie
         *          为数字时, 表示指定过期时间
         *          为{}时, 表示指定所有的属性
         * */
        function setCookie(key, value, options) {
            if (typeof options !== 'object') {
                options = {
                    domain: '.bilibili.com',
                    path: '/',
                    'max-age': value === undefined ? 0 : (options === undefined ? 94608000 : options)
                };
            }
            var c = Object.keys(options).reduce(function (str, key) {
                return str + '; ' + key + '=' + options[key];
            }, key + '=' + value);
            document.cookie = c;
            return c;
        }

        return new Proxy({ set: setCookie, get: getCookie, all: getCookies }, {
            get: function (target, prop) {
                if (prop in target) return target[prop]
                return getCookie(prop)
            },
            set: function (target, prop, value) {
                setCookie(prop, value)
                return true
            }
        })
    }())
    const Promise = window.Promise // 在某些情况下, 页面中会修改window.Promise... 故我们要备份一下原始的Promise
    const util_promise_plus = (function () {
        /**
        * 模仿RxJava中的compose操作符  
        * @param transformer 转换函数, 传入Promise, 返回Promise; 若为空, 则啥也不做
        */
        Promise.prototype.compose = function (transformer) {
            return transformer ? transformer(this) : this
        }
    }())
    const util_promise_timeout = function (timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, timeout);
        })
    }
    // 直到满足condition()为止, 才执行promiseCreator(), 创建Promise
    // https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop
    const util_promise_condition = function (condition, promiseCreator, retryCount = Number.MAX_VALUE, interval = 1) {
        const loop = (time) => {
            if (!condition()) {
                if (time < retryCount) {
                    return util_promise_timeout(interval).then(loop.bind(null, time + 1))
                } else {
                    return Promise.reject(`util_promise_condition timeout, condition: ${condition.toString()}`)
                }
            } else {
                return promiseCreator()
            }
        }
        return loop(0)
    }

    const util_ajax = function (options) {
        const creator = () => new Promise(function (resolve, reject) {
            typeof options !== 'object' && (options = { url: options });

            options.async === undefined && (options.async = true);
            options.xhrFields === undefined && (options.xhrFields = { withCredentials: true });
            options.success = function (data) {
                resolve(data);
            };
            options.error = function (err) {
                reject(err);
            };
            util_debug('ajax:', options.url)
            $.ajax(options);
        })
        return util_promise_condition(() => window.$, creator, 100, 100) // 重试 100 * 100 = 10s
    }
    /**
    * @param promiseCeator  创建Promise的函数
    * @param resultTranformer 用于变换result的函数, 返回新的result或Promise
    * @param errorTranformer  用于变换error的函数, 返回新的error或Promise, 返回的Promise可以做状态恢复...
    */
    const util_async_wrapper = function (promiseCeator, resultTranformer, errorTranformer) {
        return function (...args) {
            return new Promise((resolve, reject) => {
                // log(promiseCeator, ...args)
                promiseCeator(...args)
                    .then(r => resultTranformer ? resultTranformer(r) : r)
                    .then(r => resolve(r))
                    .catch(e => {
                        e = errorTranformer ? errorTranformer(e) : e
                        if (!(e instanceof Promise)) {
                            // 若返回值不是Promise, 则表示是一个error
                            e = Promise.reject(e)
                        }
                        e.then(r => resolve(r)).catch(e => reject(e))
                    })
            })
        }
    }
    /**
     * 创建元素的快捷方法: 
     * 1. type, props, children
     * 2. type, props, innerHTML
     * 3. 'text', text
     * @param type string, 标签名; 特殊的, 若为text, 则表示创建文字, 对应的t为文字的内容
     * @param props object, 属性; 特殊的属性名有: className, 类名; style, 样式, 值为(样式名, 值)形式的object; event, 值为(事件名, 监听函数)形式的object;
     * @param children array, 子元素; 也可以直接是html文本;
     */
    const util_ui_element_creator = (type, props, children) => {
        let elem = null;
        if (type === "text") {
            return document.createTextNode(props);
        } else {
            elem = document.createElement(type);
        }
        for (let n in props) {
            if (n === "style") {
                for (let x in props.style) {
                    elem.style[x] = props.style[x];
                }
            } else if (n === "className") {
                elem.className = props[n];
            } else if (n === "event") {
                for (let x in props.event) {
                    elem.addEventListener(x, props.event[x]);
                }
            } else {
                elem.setAttribute(n, props[n]);
            }
        }
        if (children) {
            if (typeof children === 'string') {
                elem.innerHTML = children;
            } else {
                for (let i = 0; i < children.length; i++) {
                    if (children[i] != null)
                        elem.appendChild(children[i]);
                }
            }
        }
        return elem;
    }
    const _ = util_ui_element_creator
    const util_jsonp = function (url, callback) {
        return new Promise((resolve, reject) => {
            document.head.appendChild(_('script', {
                src: url,
                event: {
                    load: function () {
                        resolve()
                    },
                    error: function () {
                        reject()
                    }
                }
            }));
        })
    }
    const util_generate_sign = function (params, key) {
        var s_keys = [];
        for (var i in params) {
            s_keys.push(i);
        }
        s_keys.sort();
        var data = "";
        for (var i = 0; i < s_keys.length; i++) {
            // encodeURIComponent 返回的转义数字必须为大写( 如 %2F )
            data += (data ? "&" : "") + s_keys[i] + "=" + encodeURIComponent(params[s_keys[i]]);
        }
        return {
            "sign": hex_md5(data + key),
            "params": data
        };
    }
    const util_xml2obj = (xml) => {
        try {
            var obj = {}, text;
            var children = xml.children;
            if (children.length > 0) {
                for (var i = 0; i < children.length; i++) {
                    var item = children.item(i);
                    var nodeName = item.nodeName;

                    if (typeof (obj[nodeName]) == "undefined") { // 若是新的属性, 则往obj中添加
                        obj[nodeName] = util_xml2obj(item);
                    } else {
                        if (typeof (obj[nodeName].push) == "undefined") { // 若老的属性没有push方法, 则把属性改成Array
                            var old = obj[nodeName];

                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(util_xml2obj(item));
                    }
                }
            } else {
                text = xml.textContent;
                if (/^\d+(\.\d+)?$/.test(text)) {
                    obj = Number(text);
                } else if (text === 'true' || text === 'false') {
                    obj = Boolean(text);
                } else {
                    obj = text;
                }
            }
            return obj;
        } catch (e) {
            util_error(e);
        }
    }
    const util_ui_popframe = function (iframeSrc) {
        if (!document.getElementById('balh-style-login')) {
            var style = document.createElement('style');
            style.id = 'balh-style-login';
            document.head.appendChild(style).innerHTML = '@keyframes pop-iframe-in{0%{opacity:0;transform:scale(.7);}100%{opacity:1;transform:scale(1)}}@keyframes pop-iframe-out{0%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(.7)}}.GMBiliPlusCloseBox{position:absolute;top:5%;right:8%;font-size:40px;color:#FFF}';
        }

        var div = document.createElement('div');
        div.id = 'GMBiliPlusLoginContainer';
        div.innerHTML = '<div style="position:fixed;top:0;left:0;z-index:10000;width:100%;height:100%;background:rgba(0,0,0,.5);animation-fill-mode:forwards;animation-name:pop-iframe-in;animation-duration:.5s;cursor:pointer"><iframe src="' + iframeSrc + '" style="background:#e4e7ee;position:absolute;top:10%;left:10%;width:80%;height:80%"></iframe><div class="GMBiliPlusCloseBox">×</div></div>';
        div.firstChild.addEventListener('click', function (e) {
            if (e.target === this || e.target.className === 'GMBiliPlusCloseBox') {
                if (!confirm('确认关闭？')) {
                    return false;
                }
                div.firstChild.style.animationName = 'pop-iframe-out';
                setTimeout(function () {
                    div.remove();
                }, 5e2);
            }
        });
        document.body.appendChild(div);
    }

    /**
     * - param.content: 内容元素数组/HTML
     * - param.showConfirm: 是否显示确定按钮
     * - param.confirmBtn: 确定按钮的文字
     * - param.onConfirm: 确定回调
     * - param.onClose: 关闭回调
     */
    const util_ui_pop = function (param) {
        if (typeof param.content === 'string') {
            let template = _('template');
            template.innerHTML = param.content.trim()
            param.content = Array.from(template.content.childNodes)
        } else if (!(param.content instanceof Array)) {
            util_log(`param.content(${param.content}) 不是数组`)
            return;
        }

        if (document.getElementById('AHP_Notice_style') == null) {
            let noticeWidth = Math.min(500, innerWidth - 40);
            document.head.appendChild(_('style', { id: 'AHP_Notice_style' }, [_('text', `#AHP_Notice{ line-height:normal;position:fixed;left:0;right:0;top:0;height:0;z-index:20000;transition:.5s;cursor:default;pointer-events:none } .AHP_down_banner{ margin:2px;padding:2px;color:#FFFFFF;font-size:13px;font-weight:bold;background-color:green } .AHP_down_btn{ margin:2px;padding:4px;color:#1E90FF;font-size:14px;font-weight:bold;border:#1E90FF 2px solid;display:inline-block;border-radius:5px } body.ABP-FullScreen{ overflow:hidden } @keyframes pop-iframe-in{0%{opacity:0;transform:scale(.7);}100%{opacity:1;transform:scale(1)}} @keyframes pop-iframe-out{0%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(.7)}} #AHP_Notice>div{ position:absolute;bottom:0;left:0;right:0;font-size:15px } #AHP_Notice>div>div{ border:1px #AAA solid;width:${noticeWidth}px;margin:0 auto;padding:20px 10px 5px;background:#EFEFF4;color:#000;border-radius:5px;box-shadow:0 0 5px -2px;pointer-events:auto;white-space:pre-wrap } #AHP_Notice>div>div *{ margin:5px 0; } #AHP_Notice input[type=text]{ border: none;border-bottom: 1px solid #AAA;width: 60%;background: transparent } #AHP_Notice input[type=text]:active{ border-bottom-color:#4285f4 } #AHP_Notice input[type=button] { border-radius: 2px; border: #adadad 1px solid; padding: 3px; margin: 0 5px; min-width:50px } #AHP_Notice input[type=button]:hover { background: #FFF; } #AHP_Notice input[type=button]:active { background: #CCC; } .noflash-alert{display:none}`)]));
        }

        if (document.querySelector('#AHP_Notice') != null)
            document.querySelector('#AHP_Notice').remove();

        let div = _('div', { id: 'AHP_Notice' });
        let childs = [];
        if (param.showConfirm || param.confirmBtn || param.onConfirm) {
            childs.push(_('input', { value: param.confirmBtn || _t('ok'), type: 'button', className: 'confirm', event: { click: param.onConfirm } }));
        }
        childs.push(_('input', {
            value: _t('close'), type: 'button', className: 'close', event: {
                click: function () {
                    param.onClose && param.onClose();
                    div.style.height = 0;
                    setTimeout(function () { div.remove(); }, 500);
                }
            }
        }));
        div.appendChild(_('div', {}, [_('div', {},
            param.content.concat([_('hr'), _('div', { style: { textAlign: 'right' } }, childs)])
        )]));
        document.body.appendChild(div);
        div.style.height = div.firstChild.offsetHeight + 'px';
    }


    /**
     * MessageBox -> from base.core.js
     * MessageBox.show(referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback)
     * MessageBox.close()
     */
    const util_ui_msg = (function () {
        function MockMessageBox() {
            this.show = (...args) => util_log(MockMessageBox.name, 'show', args)
            this.close = (...args) => util_log(MockMessageBox.name, 'close', args)
        }

        let popMessage = null
        let mockPopMessage = new MockMessageBox()
        let notifyPopMessage = {
            _current_notify: null,
            show: function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
                this.close()
                this._current_notify = util_notify.show(message, buttonTypeConfirmCallback, closeTime)
            },
            close: function () {
                if (this._current_notify) {
                    util_notify.hideNotification(this._current_notify)
                    this._current_notify = null
                }
            }
        }
        let alertPopMessage = {
            show: function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
                util_ui_alert(message, buttonTypeConfirmCallback)
            },
            close: util_func_noop
        }

        util_init(() => {
            if (!popMessage && window.MessageBox) {
                popMessage = new window.MessageBox()
                let orignShow = popMessage.show
                popMessage.show = function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
                    // 这个窗，有一定机率弹不出来。。。不知道为什么
                    orignShow.call(this, referenceElement, message.replace('\n', '<br>'), closeTime, boxType, buttonTypeConfirmCallback)
                }
                popMessage.close = function () {
                    // 若没调用过show, 就调用close, msgbox会为null, 导致报错
                    this.msgbox != null && window.MessageBox.prototype.close.apply(this, arguments)
                }
            }
        }, util_init.PRIORITY.FIRST, util_init.RUN_AT.DOM_LOADED_AFTER)

        return {
            _impl: function () {
                return popMessage || alertPopMessage
            },
            show: function (referenceElement, message, closeTime, boxType, buttonTypeConfirmCallback) {
                let pop = this._impl()
                return pop.show.apply(pop, arguments)
            },
            close: function () {
                let pop = this._impl()
                return pop.close.apply(pop, arguments)
            },
            setMsgBoxFixed: function (fixed) {
                if (popMessage) {
                    popMessage.msgbox[0].style.position = fixed ? 'fixed' : ''
                } else {
                    util_log(MockMessageBox.name, 'setMsgBoxFixed', fixed)
                }
            },
            showOnNetError: function (e) {
                if (e.readyState === 0) {
                    this.show($('.balh_settings'), '哎呀，服务器连不上了，进入设置窗口，换个服务器试试？', 0, 'button', balh_ui_setting.show);
                }
            },
            showOnNetErrorInPromise: function () {
                return p => p
                    .catch(e => {
                        this.showOnNetError(e)
                        return Promise.reject(e)
                    })
            }
        }
    }())
    const util_ui_player_msg = function (message) {
        const msg = util_stringify(message)
        util_info('player msg:', msg)
        const $panel = document.querySelector('.bilibili-player-video-panel-text')
        if ($panel) {
            let stage = $panel.children.length + 1000 // 加1000和B站自己发送消息的stage区别开来
            $panel.appendChild(_('div', { className: 'bilibili-player-video-panel-row', stage: stage }, [_('text', `[${GM_info.script.name}] ${msg}`)]))
        }
    }
    const util_ui_copy = function (text, textarea) {
        textarea.value = text
        textarea.select()
        try {
            return document.execCommand('copy')
        } catch (e) {
            util_error('复制文本出错', e)
        }
        return false
    }
    const util_url_param = function (url, key) {
        return (url.match(new RegExp('[?|&]' + key + '=(\\w+)')) || ['', ''])[1];
    }

    const util_page = {
        player: () => location.href.includes('www.bilibili.com/blackboard/html5player'),
        // 在av页面中的iframe标签形式的player
        player_in_av: util_func_catched(() => util_page.player() && window.top.location.href.includes('www.bilibili.com/video/av'), (e) => log(e), false),
        av: () => location.href.includes('www.bilibili.com/video/av'),
        av_new: function () { return this.av() && (window.__playinfo__ || window.__playinfo__origin) },
        bangumi: () => location.href.match(new RegExp('^https?://bangumi\\.bilibili\\.com/anime/\\d+/?$')),
        bangumi_md: () => location.href.includes('www.bilibili.com/bangumi/media/md'),
        // movie页面使用window.aid, 保存当前页面av号
        movie: () => location.href.includes('bangumi.bilibili.com/movie/'),
        // anime页面使用window.season_id, 保存当前页面season号
        anime: () => location.href.match(new RegExp('^https?://bangumi\\.bilibili\\.com/anime/\\d+/play.*')),
        anime_ep: () => location.href.includes('www.bilibili.com/bangumi/play/ep'),
        anime_ss: () => location.href.includes('www.bilibili.com/bangumi/play/ss'),
        anime_ep_m: () => location.href.includes('m.bilibili.com/bangumi/play/ep'),
        anime_ss_m: () => location.href.includes('m.bilibili.com/bangumi/play/ss'),
        new_bangumi: () => location.href.includes('www.bilibili.com/bangumi')
    }

    const balh_config = (function () {
        const cookies = util_cookie.all() // 缓存的cookies
        return new Proxy({ /*保存config的对象*/ }, {
            get: function (target, prop) {
                if (prop === 'server') {
                    const server_inner = balh_config.server_inner
                    const server = server_inner === r.const.server.CUSTOM ? balh_config.server_custom : server_inner
                    return server
                }
                if (prop in target) {
                    return target[prop]
                } else { // 若target中不存在指定的属性, 则从缓存的cookies中读取, 并保存到target中
                    let value = cookies['balh_' + prop]
                    switch (prop) {
                        case 'server_inner':
                            value = value || r.const.server.defaultServer()
                            // 迁移回biliplus, 只会执行一次
                            if (util_page.new_bangumi() && !localStorage.balh_migrate_to_1) {
                                localStorage.balh_migrate_to_1 = r.const.TRUE
                                if (value.includes('biliplus.ipcjs.top')) {
                                    value = r.const.server.defaultServer()
                                    balh_config.server = value
                                }
                            }
                            break
                        case 'server_custom':
                            value = value || ''
                            break
                        case 'mode':
                            value = value || (balh_config.blocked_vip ? r.const.mode.REDIRECT : r.const.mode.DEFAULT)
                            break
                        case 'flv_prefer_ws':
                            value = r.const.FALSE // 关闭该选项
                            break
                        default:
                            // case 'blocked_vip':
                            // case 'remove_pre_ad':
                            break
                    }
                    target[prop] = value
                    return value
                }
            },
            set: function (target, prop, value) {
                target[prop] = value // 更新值
                util_cookie['balh_' + prop] = value // 更新cookie中的值
                return true
            }
        })
    }())

    const balh_api_plus_view = function (aid, update = true) {
        return util_ajax(`${balh_config.server}/api/view?id=${aid}&update=${update}`)
    }
    const balh_api_plus_season = function (season_id) {
        return util_ajax(`${balh_config.server}/api/bangumi?season=${season_id}`)
    }
    // https://www.biliplus.com/BPplayurl.php?otype=json&cid=30188339&module=bangumi&qn=16&src=vupload&vid=vupload_30188339
    // qn = 16, 能看
    const balh_api_plus_playurl = function (cid, qn = 16, bangumi = true) {
        return util_ajax(`${balh_config.server}/BPplayurl.php?otype=json&cid=${cid}${bangumi ? '&module=bangumi' : ''}&qn=${qn}&src=vupload&vid=vupload_${cid}`)
    }
    // https://www.biliplus.com/api/h5play.php?tid=33&cid=31166258&type=vupload&vid=vupload_31166258&bangumi=1
    const balh_api_plus_playurl_for_mp4 = (cid, bangumi = true) => util_ajax(`${balh_config.server}/api/h5play.php?tid=33&cid=${cid}&type=vupload&vid=vupload_${cid}&bangumi=${bangumi ? 1 : 0}`)
        .then(text => (text.match(/srcUrl=\{"mp4":"(https?.*)"\};/) || ['', ''])[1]); // 提取mp4的url

    const balh_is_close = false

    const balh_version_remind = (function () {
        if (!util_page.new_bangumi()) return

        util_init(() => {
            if ((localStorage.balh_version || '0') < GM_info.script.version) {
                localStorage.balh_version = GM_info.script.version
                let version_remind = _t('version_remind')
                if (version_remind) {
                    util_ui_pop({ content: `<h3>${GM_info.script.name} v${GM_info.script.version} 更新日志</h3>${version_remind}` })
                }
            }
        })
    })()

    const balh_feature_switch_to_old_player = (function () {
        if (util_page.av() && !localStorage.balh_disable_switch_to_old_player) {
            util_init(() => {
                let $switchToOldBtn = document.querySelector('#entryOld > .old-btn > a')
                if ($switchToOldBtn) {
                    util_ui_pop({
                        content: `${GM_info.script.name} 对新版播放器的支持还在测试阶段, 不稳定, 推荐切换回旧版`,
                        confirmBtn: '切换回旧版',
                        onConfirm: () => $switchToOldBtn.click(),
                        onClose: () => localStorage.balh_disable_switch_to_old_player = r.const.TRUE,
                    })
                }
            })
        }
        if (util_page.new_bangumi()) {
            if (util_cookie.stardustpgcv === '0606') {
                util_init(() => {
                    let $panel = document.querySelector('.error-container > .server-error')
                    if ($panel) {
                        $panel.insertBefore(_('text', '临时切换到旧版番剧页面中...'), $panel.firstChild)
                        util_cookie.stardustpgcv = '0'
                        localStorage.balh_temp_switch_to_old_page = r.const.TRUE
                        location.reload()
                    }
                })
            }
            if (localStorage.balh_temp_switch_to_old_page) {
                util_cookie.stardustpgcv = '0606'
                delete localStorage.balh_temp_switch_to_old_page
            }
        }
    })()
    const balh_feature_area_limit_new = (function () {
        if (balh_is_close) return

        if (!(
            (util_page.av() && balh_config.enable_in_av) || util_page.new_bangumi()
        )) {
            return
        }
        function replacePlayInfo() {
            log("window.__playinfo__", window.__playinfo__)
            window.__playinfo__origin = window.__playinfo__
            let playinfo = undefined
            // 将__playinfo__置空, 让播放器去重新加载它...
            Object.defineProperty(window, '__playinfo__', {
                configurable: true,
                enumerable: true,
                get: () => {
                    log('__playinfo__', 'get')
                    return playinfo
                },
                set: (value) => {
                    // debugger
                    log('__playinfo__', 'set')
                    // 原始的playinfo为空, 且页面在loading状态, 说明这是html中对playinfo进行的赋值, 这个值可能是有区域限制的, 不能要
                    if (!window.__playinfo__origin && window.document.readyState === 'loading') {
                        log('__playinfo__', 'init in html', value)
                        window.__playinfo__origin = value
                        return
                    }
                    playinfo = value
                },
            })
        }
        function modifyGlobalValue(name, modifyFn) {
            const name_origin = `${name}_origin`
            window[name_origin] = window[name]
            let value = undefined
            Object.defineProperty(window, name, {
                configurable: true,
                enumerable: true,
                get: () => {
                    return value
                },
                set: (val) => {
                    value = modifyFn(val)
                }
            })
            if (window[name_origin]) {
                window[name] = window[name_origin]
            }
        }
        function replaceUserState() {
            modifyGlobalValue('__PGC_USERSTATE__', (value) => {
                if (value) {
                    // 区域限制
                    // todo      : 调用areaLimit(limit), 保存区域限制状态
                    // 2019-08-17: 之前的接口还有用, 这里先不保存~~
                    value.area_limit = 0
                    // 会员状态
                    if (balh_config.blocked_vip && value.vip_info) {
                        value.vip_info.status = 1
                        value.vip_info.type = 2
                    }
                }
                return value
            })
        }
        function replaceInitialState() {
            modifyGlobalValue('__INITIAL_STATE__', (value) => {
                if (value && value.epInfo && value.epList && balh_config.blocked_vip) {
                    for (let ep of [value.epInfo, ...value.epList]) {
                        // 13貌似表示会员视频, 2为普通视频
                        if (ep.epStatus === 13) {
                            log('epStatus 13 => 2', ep)
                            ep.epStatus = 2
                        }
                    }
                }
                return value
            })
        }
        replaceInitialState()
        replaceUserState()
        replacePlayInfo()
    })()
    const balh_feature_area_limit = (function () {
        if (balh_is_close) return

        function injectXHR() {
            util_debug('XMLHttpRequest的描述符:', Object.getOwnPropertyDescriptor(window, 'XMLHttpRequest'))
            let firstCreateXHR = true
            window.XMLHttpRequest = new Proxy(window.XMLHttpRequest, {
                construct: function (target, args) {
                    // 第一次创建XHR时, 打上断点...
                    if (firstCreateXHR && r.script.is_dev) {
                        firstCreateXHR = false
                        // debugger
                    }
                    let container = {} // 用来替换responseText等变量
                    const dispatchResultTransformer = p => {
                        let event = {} // 伪装的event
                        return p
                            .then(r => {
                                container.readyState = 4
                                container.response = r
                                container.__onreadystatechange(event) // 直接调用会不会存在this指向错误的问题? => 目前没看到, 先这样(;¬_¬)
                            })
                            .catch(e => {
                                // 失败时, 让原始的response可以交付
                                container.__block_response = false
                                if (container.__response != null) {
                                    container.readyState = 4
                                    container.response = container.__response
                                    container.__onreadystatechange(event) // 同上
                                }
                            })
                    }
                    return new Proxy(new target(...args), {
                        set: function (target, prop, value, receiver) {
                            if (prop === 'onreadystatechange') {
                                container.__onreadystatechange = value
                                let cb = value
                                value = function (event) {
                                    if (target.readyState === 4) {
                                        if (target.responseURL.match(util_regex_url('bangumi.bilibili.com/view/web_api/season/user/status'))
                                            || target.responseURL.match(util_regex_url('api.bilibili.com/pgc/view/web/season/user/status'))) {
                                            log('/season/user/status:', target.responseText)
                                            let json = JSON.parse(target.responseText)
                                            let rewriteResult = false
                                            if (json.code === 0 && json.result) {
                                                areaLimit(json.result.area_limit !== 0)
                                                if (json.result.area_limit !== 0) {
                                                    json.result.area_limit = 0 // 取消区域限制
                                                    rewriteResult = true
                                                }
                                                if (balh_config.blocked_vip) {
                                                    json.result.pay = 1
                                                    rewriteResult = true
                                                }
                                                if (rewriteResult) {
                                                    container.responseText = JSON.stringify(json)
                                                }
                                            }
                                        } else if (target.responseURL.match(util_regex_url('bangumi.bilibili.com/web_api/season_area'))) {
                                            log('/season_area', target.responseText)
                                            let json = JSON.parse(target.responseText)
                                            if (json.code === 0 && json.result) {
                                                areaLimit(json.result.play === 0)
                                                if (json.result.play === 0) {
                                                    json.result.play = 1
                                                    container.responseText = JSON.stringify(json)
                                                }
                                            }
                                        } else if (target.responseURL.match(util_regex_url('api.bilibili.com/x/web-interface/nav'))) {
                                            const isFromReport = util_url_param(target.responseURL, 'from') === 'report'
                                            let json = JSON.parse(target.responseText)
                                            log('/x/web-interface/nav', (json.data && json.data.isLogin)
                                                ? { uname: json.data.uname, isLogin: json.data.isLogin, level: json.data.level_info.current_level, vipType: json.data.vipType, vipStatus: json.data.vipStatus, isFromReport: isFromReport }
                                                : target.responseText)
                                            if (json.code === 0 && json.data && balh_config.blocked_vip
                                                && !isFromReport // report时, 还是不伪装了...
                                            ) {
                                                json.data.vipType = 2; // 类型, 年度大会员
                                                json.data.vipStatus = 1; // 状态, 启用
                                                container.responseText = JSON.stringify(json)
                                            }
                                        } else if (target.responseURL.match(util_regex_url('api.bilibili.com/x/player.so'))) {
                                            // 这个接口的返回数据貌似并不会影响界面...
                                            if (balh_config.blocked_vip) {
                                                log('/x/player.so')
                                                const xml = new DOMParser().parseFromString(`<root>${target.responseText.replace(/\&/g, "&amp;")}</root>`, 'text/xml')
                                                const vipXml = xml.querySelector('vip')
                                                if (vipXml) {
                                                    const vip = JSON.parse(vipXml.innerHTML)
                                                    vip.vipType = 2 // 同上
                                                    vip.vipStatus = 1
                                                    vipXml.innerHTML = JSON.stringify(vip)
                                                    container.responseText = xml.documentElement.innerHTML
                                                    container.response = container.responseText
                                                }
                                            }
                                        } else if (target.responseURL.match(util_regex_url('api.bilibili.com/x/player/playurl'))) {
                                            log('/x/player/playurl', 'origin', `block: ${container.__block_response}`, target.response)
                                            // todo      : 当前只实现了r.const.mode.REPLACE, 需要支持其他模式
                                            // 2018-10-14: 等B站全面启用新版再说(;¬_¬)
                                        } else if (target.responseURL.match(util_regex_url('api.bilibili.com/pgc/player/web/playurl'))
                                            && !util_url_param(target.responseURL, 'balh_ajax')) {
                                            log('/pgc/player/web/playurl', 'origin', `block: ${container.__block_response}`, target.response)
                                            if (!container.__redirect) { // 请求没有被重定向, 则需要检测结果是否有区域限制
                                                let json = target.response
                                                if (balh_config.blocked_vip || json.code || isAreaLimitForPlayUrl(json.result)) {
                                                    areaLimit(true)
                                                    container.__block_response = true
                                                    let url = container.__url
                                                    if (isBangumiPage()) {
                                                        url += `&module=bangumi`
                                                    }
                                                    bilibiliApis._playurl.asyncAjax(url)
                                                        .then(data => {
                                                            if (!data.code) {
                                                                data = { code: 0, result: data, message: "0" }
                                                            }
                                                            log('/pgc/player/web/playurl', 'proxy', data)
                                                            return data
                                                        })
                                                        .compose(dispatchResultTransformer)
                                                } else {
                                                    areaLimit(false)
                                                }
                                            }
                                            // 同上
                                        }
                                        if (container.__block_response) {
                                            // 屏蔽并保存response
                                            container.__response = target.response
                                            return
                                        }
                                    }
                                    // 这里的this是原始的xhr, 在container.responseText设置了值时需要替换成代理对象
                                    cb.apply(container.responseText ? receiver : this, arguments)
                                }
                            }
                            target[prop] = value
                            return true
                        },
                        get: function (target, prop, receiver) {
                            if (prop in container) return container[prop]
                            let value = target[prop]
                            if (typeof value === 'function') {
                                let func = value
                                // open等方法, 必须在原始的xhr对象上才能调用...
                                value = function () {
                                    if (prop === 'open') {
                                        container.__method = arguments[0]
                                        container.__url = arguments[1]
                                    } else if (prop === 'send') {
                                        let dispatchResultTransformerCreator = () => {
                                            container.__block_response = true
                                            return dispatchResultTransformer
                                        }
                                        if (container.__url.match(util_regex_url('api.bilibili.com/x/player/playurl')) && balh_config.enable_in_av) {
                                            log('/x/player/playurl')
                                            // debugger
                                            bilibiliApis._playurl.asyncAjax(container.__url)
                                                .then(data => {
                                                    if (!data.code) {
                                                        data = {
                                                            code: 0,
                                                            data: data,
                                                            message: "0",
                                                            ttl: 1
                                                        }
                                                    }
                                                    log('/x/player/playurl', 'proxy', data)
                                                    return data
                                                })
                                                .compose(dispatchResultTransformerCreator())
                                        } else if (container.__url.match(util_regex_url('api.bilibili.com/pgc/player/web/playurl'))
                                            && !util_url_param(container.__url, 'balh_ajax')
                                            && needRedirect()) {
                                            log('/pgc/player/web/playurl')
                                            // debugger
                                            container.__redirect = true // 标记该请求被重定向
                                            let url = container.__url
                                            if (isBangumiPage()) {
                                                url += `&module=bangumi`
                                            }
                                            bilibiliApis._playurl.asyncAjax(url)
                                                .then(data => {
                                                    if (!data.code) {
                                                        data = {
                                                            code: 0,
                                                            result: data,
                                                            message: "0",
                                                        }
                                                    }
                                                    log('/pgc/player/web/playurl', 'proxy(redirect)', data)
                                                    return data
                                                })
                                                .compose(dispatchResultTransformerCreator())
                                        }
                                    }
                                    return func.apply(target, arguments)
                                }
                            }
                            return value
                        }
                    })
                }
            })
        }

        function injectAjax() {
            log('injectAjax at:', window.jQuery)
            let originalAjax = $.ajax;
            $.ajax = function (arg0, arg1) {
                let param;
                if (arg1 === undefined) {
                    param = arg0;
                } else {
                    arg0 && (arg1.url = arg0);
                    param = arg1;
                }
                let oriSuccess = param.success;
                let oriError = param.error;
                let mySuccess, myError;
                // 投递结果的transformer, 结果通过oriSuccess/Error投递
                let dispatchResultTransformer = p => p
                    .then(r => {
                        // debugger
                        oriSuccess(r)
                    })
                    .catch(e => oriError(e))
                // 转换原始请求的结果的transformer
                let oriResultTransformer
                let oriResultTransformerWhenProxyError
                let one_api;
                // log(param)
                if (param.url.match(util_regex_url_path('/web_api/get_source'))) {
                    one_api = bilibiliApis._get_source;
                    oriResultTransformer = p => p
                        .then(json => {
                            log(json);
                            if (json.code === -40301 // 区域限制
                                || json.result.payment && json.result.payment.price != 0 && balh_config.blocked_vip) { // 需要付费的视频, 此时B站返回的cid是错了, 故需要使用代理服务器的接口
                                areaLimit(true);
                                return one_api.asyncAjax(param.url)
                                    .catch(e => json)// 新的请求报错, 也应该返回原来的数据
                            } else {
                                areaLimit(false);
                                if ((balh_config.blocked_vip || balh_config.remove_pre_ad) && json.code === 0 && json.result.pre_ad) {
                                    json.result.pre_ad = 0; // 去除前置广告
                                }
                                return json;
                            }
                        })
                } else if (param.url.match(util_regex_url_path('/player/web_api/playurl')) // 老的番剧页面playurl接口
                    || param.url.match(util_regex_url_path('/player/web_api/v2/playurl')) // 新的番剧页面playurl接口
                    || param.url.match(util_regex_url('api.bilibili.com/pgc/player/web/playurl')) // 新的番剧页面playurl接口
                    || (balh_config.enable_in_av && param.url.match(util_regex_url('interface.bilibili.com/v2/playurl'))) // 普通的av页面playurl接口
                ) {
                    // 新playrul:
                    // 1. 部分页面参数放在param.data中
                    // 2. 成功时, 返回的结果放到了result中: {"code":0,"message":"success","result":{}}
                    // 3. 失败时, 返回的结果没变
                    let isNewPlayurl
                    if (isNewPlayurl = param.url.match(util_regex_url('api.bilibili.com/pgc/player/web/playurl'))) {
                        if (param.data) {
                            param.url += `?${Object.keys(param.data).map(key => `${key}=${param.data[key]}`).join('&')}`
                            param.data = undefined
                        }
                        if (isBangumiPage()) {
                            log(`playurl add 'module=bangumi' param`)
                            param.url += `&module=bangumi`
                        }
                        // 加上这个参数, 防止重复拦截这个url
                        param.url += `&balh_ajax=1`
                    }
                    one_api = bilibiliApis._playurl;
                    if (isNewPlayurl) {
                        oriResultTransformerWhenProxyError = p => p
                            .then(json => !json.code ? json.result : json)
                    }
                    oriResultTransformer = p => p
                        .then(json => {
                            log(json)
                            if (isNewPlayurl && !json.code) {
                                json = json.result
                            }
                            if (balh_config.blocked_vip || json.code || isAreaLimitForPlayUrl(json)) {
                                areaLimit(true)
                                return one_api.asyncAjax(param.url)
                                    .catch(e => json)
                            } else {
                                areaLimit(false)
                                return json
                            }
                        })
                    const oriDispatchResultTransformer = dispatchResultTransformer
                    dispatchResultTransformer = p => p
                        .then(r => {
                            if (!r.code && !r.from && !r.result && !r.accept_description) {
                                util_warn('playurl的result缺少必要的字段:', r)
                                r.from = 'local'
                                r.result = 'suee'
                                r.accept_description = ['未知 3P']
                                // r.timelength = r.durl.map(it => it.length).reduce((a, b) => a + b, 0)
                                if (r.durl && r.durl[0] && r.durl[0].url.includes('video-sg.biliplus.com')) {
                                    const aid = window.__INITIAL_STATE__ && window.__INITIAL_STATE__.aid || window.__INITIAL_STATE__.epInfo && window.__INITIAL_STATE__.epInfo.aid || 'fuck'
                                    util_ui_pop({
                                        content: `原视频已被删除, 当前播放的是<a href="https://video-sg.biliplus.com/">转存服务器</a>中的视频, 速度较慢<br>被删的原因可能是:<br>1. 视频违规<br>2. 视频被归类到番剧页面 => 试下<a href="https://search.bilibili.com/bangumi?keyword=${aid}">搜索av${aid}</a>`
                                    })
                                }
                            }
                            if (isNewPlayurl && !r.code) {
                                r = {
                                    code: 0,
                                    message: 'success',
                                    result: r
                                }
                            }
                            return r
                        })
                        .compose(oriDispatchResultTransformer)
                } else if (param.url.match(util_regex_url('interface.bilibili.com/player?'))) {
                    if (balh_config.blocked_vip) {
                        mySuccess = function (data) {
                            try {
                                let xml = new window.DOMParser().parseFromString(`<userstatus>${data.replace(/\&/g, '&amp;')}</userstatus>`, 'text/xml');
                                let vipTag = xml.querySelector('vip');
                                if (vipTag) {
                                    let vip = JSON.parse(vipTag.innerHTML);
                                    vip.vipType = 2; // 类型, 年度大会员
                                    vip.vipStatus = 1; // 状态, 启用
                                    vipTag.innerHTML = JSON.stringify(vip);
                                    data = xml.documentElement.innerHTML;
                                }
                            } catch (e) {
                                log('parse xml error: ', e);
                            }
                            oriSuccess(data);
                        };
                    }
                } else if (param.url.match(util_regex_url('api.bilibili.com/x/ad/video?'))) {
                    if (balh_config.remove_pre_ad) {
                        mySuccess = function (data) {
                            log('/ad/video', data)
                            if (data && data.code === 0 && data.data) {
                                data.data = [] // 移除广告接口返回的数据
                            }
                            oriSuccess(data)
                        }
                    }
                }

                if (one_api && oriResultTransformer) {
                    // 请求结果通过mySuccess/Error获取, 将其包装成Promise, 方便处理
                    let oriResultPromise = new Promise((resolve, reject) => {
                        mySuccess = resolve
                        myError = reject
                    })
                    if (needRedirect()) {
                        // 通过proxy, 执行请求
                        one_api.asyncAjax(param.url)
                            // proxy报错时, 返回原始请求的结果
                            .catch(e => oriResultPromise.compose(oriResultTransformerWhenProxyError))
                            .compose(dispatchResultTransformer)
                    } else {
                        oriResultPromise
                            .compose(oriResultTransformer)
                            .compose(dispatchResultTransformer)
                    }
                }

                // 若外部使用param.success处理结果, 则替换param.success
                if (oriSuccess && mySuccess) {
                    param.success = mySuccess;
                }
                // 处理替换error
                if (oriError && myError) {
                    param.error = myError;
                }
                // default
                let xhr = originalAjax.apply(this, [param]);

                // 若外部使用xhr.done()处理结果, 则替换xhr.done()
                if (!oriSuccess && mySuccess) {
                    xhr.done(mySuccess);
                    xhr.done = function (success) {
                        oriSuccess = success; // 保存外部设置的success函数
                        return xhr;
                    };
                }
                // 处理替换error
                if (!oriError && myError) {
                    xhr.fail(myError);
                    xhr.fail = function (error) {
                        oriError = error;
                        return xhr;
                    }
                }
                return xhr;
            };
        }

        function injectFetch() {
            window.fetch = util_async_wrapper(window.fetch,
                resp => new Proxy(resp, {
                    get: function (target, prop, receiver) {
                        if (prop === 'json') {
                            return util_async_wrapper(target.json.bind(target),
                                oriResult => {
                                    util_debug('injectFetch:', target.url)
                                    if (target.url.match(util_regex_url_path('/player/web_api/v2/playurl/html5'))) {
                                        let cid = util_url_param(target.url, 'cid')
                                        return balh_api_plus_playurl(cid)
                                            .then(result => {
                                                if (result.code) {
                                                    return Promise.reject('error: ' + JSON.stringify(result))
                                                } else {
                                                    return balh_api_plus_playurl_for_mp4(cid)
                                                        .then(url => {
                                                            util_debug(`mp4地址, 移动版: ${url}, pc版: ${result.durl[0].url}`)
                                                            return {
                                                                "code": 0,
                                                                "cid": `http://comment.bilibili.com/${cid}.xml`,
                                                                "timelength": result.timelength,
                                                                "src": url || result.durl[0].url, // 只取第一个片段的url...
                                                            }
                                                        })
                                                }
                                            })
                                            .catch(e => {
                                                // 若拉取视频地址失败, 则返回原始的结果
                                                log('fetch mp4 url failed', e)
                                                return oriResult
                                            })
                                    }
                                    return oriResult
                                },
                                error => error)
                        }
                        return target[prop]
                    }
                }),
                error => error)
        }

        function isAreaLimitSeason() {
            return util_cookie['balh_season_' + getSeasonId()];
        }

        function needRedirect() {
            return balh_config.mode === r.const.mode.REDIRECT || (balh_config.mode === r.const.mode.DEFAULT && isAreaLimitSeason())
        }

        function areaLimit(limit) {
            balh_config.mode === r.const.mode.DEFAULT && setAreaLimitSeason(limit)
        }

        function setAreaLimitSeason(limit) {
            var season_id = getSeasonId();
            util_cookie.set('balh_season_' + season_id, limit ? '1' : undefined, ''); // 第三个参数为'', 表示时Session类型的cookie
            log('setAreaLimitSeason', season_id, limit);
        }
        /** 使用该方法判断是否需要添加module=bangumi参数, 并不准确... */
        function isBangumi(season_type) {
            log(`season_type: ${season_type}`)
            // 1: 动画
            // 2: 电影
            // 3: 纪录片
            // 4: 国创
            // 5: 电视剧
            return season_type != null // 存在season_type就是bangumi?
        }

        function isBangumiPage() {
            return isBangumi(util_safe_get('window.__INITIAL_STATE__.mediaInfo.season_type || window.__INITIAL_STATE__.mediaInfo.ssType'))
        }

        function getSeasonId() {
            var seasonId;
            // 取anime页面的seasonId
            try {
                // 若w, 是其frame的window, 则有可能没有权限, 而抛异常
                seasonId = window.season_id || window.top.season_id;
            } catch (e) {
                log(e);
            }
            if (!seasonId) {
                try {
                    seasonId = (window.top.location.pathname.match(/\/anime\/(\d+)/) || ['', ''])[1];
                } catch (e) {
                    log(e);
                }
            }

            // 若没取到, 则取movie页面的seasonId, 以m开头
            if (!seasonId) {
                try {
                    seasonId = (window.top.location.pathname.match(/\/movie\/(\d+)/) || ['', ''])[1];
                    if (seasonId) {
                        seasonId = 'm' + seasonId;
                    }
                } catch (e) {
                    log(e);
                }
            }

            // 若没取到, 则去新的番剧播放页面的ep或ss
            if (!seasonId) {
                try {
                    seasonId = (window.top.location.pathname.match(/\/bangumi\/play\/((ep|ss)\d+)/) || ['', ''])[1];
                } catch (e) {
                    log(e);
                }
            }
            // 若没取到, 则去取av页面的av号
            if (!seasonId) {
                try {
                    seasonId = (window.top.location.pathname.match(/\/video\/(av\d+)/) || ['', ''])[1]
                } catch (e) {
                    log(e);
                }
            }
            // 最后, 若没取到, 则试图取出当前页面url中的aid
            if (!seasonId) {
                seasonId = util_url_param(window.location.href, 'aid');
                if (seasonId) {
                    seasonId = 'aid' + seasonId;
                }
            }
            return seasonId || '000';
        }

        function isAreaLimitForPlayUrl(json) {
            return (json.errorcid && json.errorcid == '8986943') || (json.durl && json.durl.length === 1 && json.durl[0].length === 15126 && json.durl[0].size === 124627);
        }

        var bilibiliApis = (function () {
            function AjaxException(message, code = 0/*用0表示未知错误*/) {
                this.name = 'AjaxException'
                this.message = message
                this.code = code
            }
            AjaxException.prototype.toString = function () {
                return `${this.name}: ${this.message}(${this.code})`
            }
            function BilibiliApi(props) {
                Object.assign(this, props);
            }

            BilibiliApi.prototype.asyncAjaxByProxy = function (originUrl, success, error) {
                var one_api = this;
                $.ajax({
                    url: one_api.transToProxyUrl(originUrl),
                    async: true,
                    xhrFields: { withCredentials: true },
                    success: function (result) {
                        log('==>', result);
                        success(one_api.processProxySuccess(result));
                        // log('success', arguments, this);
                    },
                    error: function (e) {
                        log('error', arguments, this);
                        error(e);
                    }
                });
            };
            BilibiliApi.prototype.asyncAjax = function (originUrl) {
                return util_ajax(this.transToProxyUrl(originUrl))
                    .then(r => this.processProxySuccess(r))
                    .compose(util_ui_msg.showOnNetErrorInPromise()) // 出错时, 提示服务器连不上
            }
            var get_source_by_aid = new BilibiliApi({
                transToProxyUrl: function (url) {
                    return balh_config.server + '/api/view?id=' + window.aid + '&update=true';
                },
                processProxySuccess: function (data) {
                    if (data && data.list && data.list[0] && data.movie) {
                        return {
                            code: 0,
                            message: 'success',
                            result: {
                                cid: data.list[0].cid,
                                formal_aid: data.aid,
                                movie_status: balh_config.blocked_vip ? 2 : data.movie.movie_status, // 2, 大概是免费的意思?
                                pay_begin_time: 1507708800,
                                pay_timestamp: 0,
                                pay_user_status: data.movie.pay_user.status, // 一般都是0
                                player: data.list[0].type, // 一般为movie
                                vid: data.list[0].vid,
                                vip: { // 2+1, 表示年度大会员; 0+0, 表示普通会员
                                    vipType: balh_config.blocked_vip ? 2 : 0,
                                    vipStatus: balh_config.blocked_vip ? 1 : 0,
                                }
                            }
                        };
                    } else {
                        return {
                            code: -404,
                            message: '不存在该剧集'
                        };
                    }
                }
            });
            var get_source_by_season_id = new BilibiliApi({
                transToProxyUrl: function (url) {
                    return balh_config.server + '/api/bangumi?season=' + window.season_id;
                },
                processProxySuccess: function (data) {
                    var found = null;
                    if (!data.code) {
                        for (var i = 0; i < data.result.episodes.length; i++) {
                            if (data.result.episodes[i].episode_id == window.episode_id) {
                                found = data.result.episodes[i];
                            }
                        }
                    } else {
                        util_ui_alert('代理服务器错误:' + JSON.stringify(data) + '\n点击刷新界面.', window.location.reload.bind(window.location));
                    }
                    var returnVal = found !== null
                        ? {
                            "code": 0,
                            "message": "success",
                            "result": {
                                "aid": found.av_id,
                                "cid": found.danmaku,
                                "episode_status": balh_config.blocked_vip ? 2 : found.episode_status,
                                "payment": { "price": "9876547210.33" },
                                "pay_user": {
                                    "status": balh_config.blocked_vip ? 1 : 0 // 是否已经支付过
                                },
                                "player": "vupload",
                                "pre_ad": 0,
                                "season_status": balh_config.blocked_vip ? 2 : data.result.season_status
                            }
                        }
                        : { code: -404, message: '不存在该剧集' };
                    return returnVal;
                }
            });
            var playurl_by_bilibili = new BilibiliApi({
                dataType: 'xml',
                transToProxyUrl: function (originUrl) {
                    const api_url = 'https://interface.bilibili.com/playurl?'
                    const bangumi_api_url = 'https://bangumi.bilibili.com/player/web_api/playurl?'
                    const SEC_NORMAL = '1c15888dc316e05a15fdd0a02ed6584f'
                    const SEC_BANGUMI = '9b288147e5474dd2aa67085f716c560d'

                    // 不设置module; 带module的接口都是有区域限制的...
                    let module = undefined /*util_url_param(originUrl, 'module')*/
                    // 不使用json; 让服务器直接返回json时, 获取的视频url不能直接播放...天知道为什么
                    let useJson = false
                    let paramDict = {
                        cid: util_url_param(originUrl, 'cid'),
                        quality: util_url_param(originUrl, 'quality'),
                        qn: util_url_param(originUrl, 'qn'), // 增加这个参数, 返回的清晰度更多
                        player: 1,
                        ts: Math.floor(Date.now() / 1000),
                    }
                    if (module) paramDict.module = module
                    if (useJson) paramDict.otype = 'json'
                    let { sign, params } = util_generate_sign(paramDict, module ? SEC_BANGUMI : SEC_NORMAL)
                    let url = module ? bangumi_api_url : api_url + params + '&sign=' + sign
                    return url
                },
                processProxySuccess: function (result, alertWhenError = true) {
                    // 将xml解析成json
                    let obj = util_xml2obj(result.documentElement)
                    if (!obj || obj.code) {
                        if (alertWhenError) {
                            util_ui_alert(`从B站接口获取视频地址失败\nresult: ${JSON.stringify(obj)}\n\n点击确定, 进入设置页面关闭'使用B站接口获取视频地址'功能`, balh_ui_setting.show)
                        } else {
                            return Promise.reject(`服务器错误: ${JSON.stringify(obj)}`)
                        }
                    } else {
                        obj.accept_quality && (obj.accept_quality = obj.accept_quality.split(',').map(n => +n))
                        if (!obj.durl.push) {
                            obj.durl = [obj.durl]
                        }
                        obj.durl.forEach((item) => {
                            if (item.backup_url === '') {
                                item.backup_url = undefined
                            } else if (item.backup_url && item.backup_url.url) {
                                item.backup_url = item.backup_url.url
                            }
                        })
                    }
                    log('xml2obj', result, '=>', obj)
                    return obj
                },
                _asyncAjax: function (originUrl) {
                    return util_ajax(this.transToProxyUrl(originUrl))
                        .then(r => this.processProxySuccess(r, false))
                }
            })
            var playurl_by_proxy = new BilibiliApi({
                _asyncAjax: function (originUrl, bangumi) {
                    return util_ajax(this.transToProxyUrl(originUrl, bangumi))
                        .then(r => this.processProxySuccess(r, false))
                },
                transToProxyUrl: function (url, bangumi) {
                    let params = url.split('?')[1];
                    if (bangumi === undefined) { // 自动判断
                        // av页面中的iframe标签形式的player, 不是番剧视频
                        bangumi = !util_page.player_in_av()
                        // url中存在season_type的情况
                        let season_type_param = util_url_param(url, 'season_type')
                        if (season_type_param && !isBangumi(+season_type_param)) {
                            bangumi = false
                        }
                        if (!bangumi) {
                            params = params.replace(/&?module=(\w+)/, '') // 移除可能存在的module参数
                        }
                    } else if (bangumi === true) { // 保证添加module=bangumi参数
                        params = params.replace(/&?module=(\w+)/, '')
                        params += '&module=bangumi'
                    } else if (bangumi === false) { // 移除可能存在的module参数
                        params = params.replace(/&?module=(\w+)/, '')
                    }
                    // 管他三七二十一, 强行将module=bangumi替换成module=pgc _(:3」∠)_
                    params = params.replace(/(&?module)=bangumi/, '$1=pgc')
                    return `${balh_config.server}/BPplayurl.php?${params}`;
                },
                processProxySuccess: function (data, alertWhenError = true) {
                    // data有可能为null
                    if (data && data.code === -403) {
                        util_ui_pop({
                            content: `<b>code-403</b>: <i style="font-size:4px;white-space:nowrap;">${JSON.stringify(data)}</i>\n\n当前代理服务器（${balh_config.server}）依然有区域限制\n\n可以考虑进行如下尝试:\n1. 进行“帐号授权”\n2. 换个代理服务器\n3. 耐心等待服务端修复问题\n\n点击确定, 打开设置页面`,
                            onConfirm: balh_ui_setting.show,
                        })
                    } else if (data === null || data.code) {
                        util_error(data);
                        if (alertWhenError) {
                            util_ui_alert(`突破黑洞失败\n${JSON.stringify(data)}\n点击确定刷新界面`, window.location.reload.bind(window.location));
                        } else {
                            return Promise.reject(new AjaxException(`服务器错误: ${JSON.stringify(data)}`, data ? data.code : 0))
                        }
                    } else if (isAreaLimitForPlayUrl(data)) {
                        util_error('>>area limit');
                        util_ui_pop({
                            content: `突破黑洞失败\n需要登录\n点此确定进行登录`,
                            onConfirm: balh_feature_sign.showLogin
                        })
                    } else {
                        if (balh_config.flv_prefer_ws) {
                            data.durl.forEach(function (seg) {
                                var t, url, i;
                                if (!seg.url.includes('ws.acgvideo.com')) {
                                    for (i in seg.backup_url) {
                                        url = seg.backup_url[i];
                                        if (url.includes('ws.acgvideo.com')) {
                                            log('flv prefer use:', url);
                                            t = seg.url;
                                            seg.url = url;
                                            url = t;
                                            break;
                                        }
                                    }

                                }
                            });
                        }
                    }
                    return data;
                }
            })
            // https://github.com/kghost/bilibili-area-limit/issues/3
            const playurl_by_kghost = new BilibiliApi({
                _asyncAjax: function (originUrl) {
                    const proxyHostMap = [
                        [/僅.*港.*地區/, '//bilibili-hk-api.kghost.info/'],
                        [/僅.*台.*地區/, '//bilibili-tw-api.kghost.info/'],
                        [/.*/, '//bilibili-cn-api.kghost.info/'],
                    ];
                    let proxyHost
                    for (const [regex, host] of proxyHostMap) {
                        if (document.title.match(regex)) {
                            proxyHost = host
                            break;
                        }
                    }
                    if (proxyHost) {
                        return util_ajax(this.transToProxyUrl(originUrl, proxyHost))
                            .then(r => this.processProxySuccess(r))
                    } else {
                        return Promise.reject("没有支持的服务器")
                    }
                },
                transToProxyUrl: function (originUrl, proxyHost) {
                    return originUrl.replace(/^(https:)?(\/\/api\.bilibili\.com\/)/, `$1${proxyHost}`)
                },
                processProxySuccess: function (result) {
                    return result.result
                },
            })
            const playurl = new BilibiliApi({
                asyncAjax: function (originUrl) {
                    util_ui_player_msg('从代理服务器拉取视频地址中...')
                    return playurl_by_proxy._asyncAjax(originUrl) // 优先从代理服务器获取
                        .catch(e => {
                            if (e instanceof AjaxException) {
                                util_ui_player_msg(e)
                                if (e.code === 1 // code: 1 表示非番剧视频, 不能使用番剧视频参数
                                    || (util_url_param(originUrl, 'module') === 'bangumi' && e.code === -404)) { // 某些番剧视频又不需要加module=bangumi, 详见: https://github.com/ipcjs/bilibili-helper/issues/494
                                    util_ui_player_msg('尝试使用非番剧视频接口拉取视频地址...')
                                    return playurl_by_proxy._asyncAjax(originUrl, false)
                                        .catch(e2 => Promise.reject(e)) // 忽略e2, 返回原始错误e
                                } else if (e.code === 10004) { // code: 10004, 表示视频被隐藏, 一般添加module=bangumi参数可以拉取到视频
                                    util_ui_player_msg('尝试使用番剧视频接口拉取视频地址...')
                                    return playurl_by_proxy._asyncAjax(originUrl, true)
                                        .catch(e2 => Promise.reject(e))
                                }
                            }
                            return Promise.reject(e)
                        })
                        .catch(e => {
                            if (typeof e === 'object' && e.statusText == 'error') {
                                util_ui_player_msg('尝试使用kghost的服务器拉取视频地址...')
                                return playurl_by_kghost._asyncAjax(originUrl)
                                    .catch(e2 => Promise.reject(e))
                            }
                            return Promise.reject(e)
                        })
                        // 报错时, 延时1秒再发送错误信息
                        .catch(e => util_promise_timeout(1000).then(r => Promise.reject(e)))
                        .catch(e => {
                            let msg
                            if (typeof e === 'object' && e.statusText == 'error') {
                                msg = '代理服务器临时不可用'
                                util_ui_player_msg(msg)
                            } else {
                                msg = util_stringify(e)
                            }
                            util_ui_pop({
                                content: `## 拉取视频地址失败\n原因: ${msg}\n\n可以考虑进行如下尝试:\n1. 多<a href="">刷新</a>几下页面\n2. 进入<a href="javascript:bangumi_area_limit_hack.showSettings();">设置页面</a>更换代理服务器\n3. 耐心等待代理服务器端修复问题`,
                                onConfirm: window.location.reload.bind(window.location),
                                confirmBtn: '刷新页面'
                            })
                            return Promise.reject(e)
                        })
                        .then(data => {
                            if (data.dash) {
                                // dash中的字段全部变成了类似C语言的下划线风格...
                                util_obj_key_to_c_like(data.dash)
                            }
                            return data
                        })
                }
            })
            return {
                _get_source: util_page.movie() ? get_source_by_aid : get_source_by_season_id,
                _playurl: playurl,
            };
        })();

        if (util_page.anime_ep_m() || util_page.anime_ss_m()) {
            // balh_api_plus_playurl_for_mp4返回的url能在移动设备上播放的前提是, 请求头不包含Referer...
            // 故这里设置meta, 使页面不发送Referer
            // 注意动态改变引用策略的方式并不是标准行为, 目前在Chrome上测试是有用的
            document.head.appendChild(_('meta', { name: "referrer", content: "no-referrer" }))
            injectFetch()
            util_init(() => {
                const $wrapper = document.querySelector('.player-wrapper')
                new MutationObserver(function (mutations, observer) {
                    for (let mutation of mutations) {
                        if (mutation.type === 'childList') {
                            for (let node of mutation.addedNodes) {
                                if (node.tagName === 'DIV' && node.className.split(' ').includes('player-mask')) {
                                    log('隐藏添加的mask')
                                    node.style.display = 'none'
                                }
                            }
                        }
                    }
                }).observe($wrapper, {
                    childList: true,
                    attributes: false,
                });
            })
        }
        injectXHR();
        if (true) {
            let jQuery = window.jQuery;
            if (jQuery) { // 若已加载jQuery, 则注入
                injectAjax()
            }
            // 需要监听jQuery变化, 因为有时会被设置多次...
            Object.defineProperty(window, 'jQuery', {
                configurable: true, enumerable: true, set: function (v) {
                    // debugger
                    log('set jQuery', jQuery, '->', v)
                    // 临时规避这个问题：https://github.com/ipcjs/bilibili-helper/issues/297
                    // 新的av页面中, 运行脚本的 injectXHR() 后, 页面会往该方法先后设置两个jQuery...原因未知
                    // 一个从jquery.min.js中设置, 一个从player.js中设置
                    // 并且点击/载入等事件会从两个jQuery中向下分发...导致很多功能失常
                    // 这里我们屏蔽掉jquery.min.js分发的一些事件, 避免一些问题
                    if (util_page.av_new() && balh_config.enable_in_av) {
                        try { // 获取调用栈的方法不是标准方法, 需要try-catch
                            const stack = (new Error()).stack.split('\n')
                            if (stack[stack.length - 1].includes('jquery')) { // 若从jquery.min.js中调用
                                log('set jQueury by jquery.min.js', v)
                                v.fn.balh_on = v.fn.on
                                v.fn.on = function (arg0, arg1) {
                                    if (arg0 === 'click.reply' && arg1 === '.reply') {
                                        // 屏蔽掉"回复"按钮的点击事件
                                        log('block click.reply', arguments)
                                        return
                                    }
                                    return v.fn.balh_on.apply(this, arguments)
                                }
                            }
                            // jQuery.fn.paging方法用于创建评论区的页标, 需要迁移到新的jQuery上
                            if (jQuery != null && jQuery.fn.paging != null
                                && v != null && v.fn.paging == null) {
                                log('迁移jQuery.fn.paging')
                                v.fn.paging = jQuery.fn.paging
                            }
                        } catch (e) {
                            util_error(e)
                        }
                    }

                    jQuery = v;
                    injectAjax();// 设置jQuery后, 立即注入
                }, get: function () {
                    return jQuery;
                }
            });
        }
    }())
    const balh_feature_remove_pre_ad = (function () {
        if (util_page.player()) {
            // 播放页面url中的pre_ad参数, 决定是否播放广告...
            if (balh_config.remove_pre_ad && util_url_param(location.href, 'pre_ad') == 1) {
                log('需要跳转到不含广告的url')
                location.href = location.href.replace(/&?pre_ad=1/, '')
            }
        }
    }())
    const balh_feature_check_html5 = (function () {
        function isHtml5Player() {
            return localStorage.defaulth5 === '1'
        }

        function checkHtml5() {
            var playerContent = document.querySelector('.player-content');
            if (!localStorage.balh_h5_not_first && !isHtml5Player() && window.GrayManager && playerContent) {
                new MutationObserver(function (mutations, observer) {
                    observer.disconnect();
                    localStorage.balh_h5_not_first = r.const.TRUE;
                    if (window.confirm(GM_info.script.name + '只在HTML5播放器下有效，是否切换到HTML5？')) {
                        window.GrayManager.clickMenu('change_h5');// change_flash, change_h5
                    }
                }).observe(playerContent, {
                    childList: true, // 监听child的增减
                    attributes: false, // 监听属性的变化
                });
            }
        }

        util_init(() => {
            // 除了播放器和番剧列表页面, 其他页面都需要检测html5
            if (!(util_page.bangumi() || util_page.bangumi_md() || util_page.player())) {
                checkHtml5()
            }
        })
        return isHtml5Player
    }())
    const balh_feature_runPing = function () {
        var pingOutput = document.getElementById('balh_server_ping');

        var xhr = new XMLHttpRequest(), testUrl = [r.const.server.S0, r.const.server.S1],
            testUrlIndex = 0, isReused = false, prevNow, outputArr = [];
        if (balh_config.server_custom) {
            testUrl.push(balh_config.server_custom)
        }
        pingOutput.textContent = '正在进行服务器测速…';
        pingOutput.style.height = '100px';
        xhr.open('GET', '', true);
        xhr.onreadystatechange = function () {
            this.readyState == 4 && pingResult();
        };
        var pingLoop = function () {
            prevNow = performance.now();
            xhr.open('GET', testUrl[testUrlIndex] + '/api/bangumi', true);
            xhr.send();
        };
        var pingResult = function () {
            var duration = (performance.now() - prevNow) | 0;
            if (isReused)
                outputArr.push('\t复用连接：' + duration + 'ms'), isReused = false, testUrlIndex++;
            else
                outputArr.push(testUrl[testUrlIndex] + ':'), outputArr.push('\t初次连接：' + duration + 'ms'), isReused = true;
            pingOutput.textContent = outputArr.join('\n');
            testUrlIndex < testUrl.length ? pingLoop() : pingOutput.appendChild(_('a', { href: 'javascript:', event: { click: balh_feature_runPing } }, [_('text', '\n再测一次？')]));
        };
        pingLoop();
    }
    const balh_feature_sign = (function () {
        function isLogin() {
            return localStorage.oauthTime !== undefined
        }
        function clearLoginFlag() {
            delete localStorage.oauthTime
        }

        function updateLoginFlag(loadCallback) {
            util_jsonp(balh_config.server + '/login?act=expiretime')
                .then(() => loadCallback && loadCallback(true))
            // .catch(() => loadCallback && loadCallback(false)) // 请求失败不需要回调
        }
        function isLoginBiliBili() {
            return util_cookie['DedeUserID'] !== undefined
        }
        // 当前在如下情况才会弹一次登录提示框:
        // 1. 第一次使用
        // 2. 主站+服务器都退出登录后, 再重新登录主站
        function checkLoginState() {
            // 给一些状态，设置初始值
            localStorage.balh_must_remind_login_v1 === undefined && (localStorage.balh_must_remind_login_v1 = r.const.TRUE)

            if (isLoginBiliBili()) {
                if (!localStorage.balh_old_isLoginBiliBili // 主站 不登录 => 登录
                    || localStorage.balh_pre_server !== balh_config.server // 代理服务器改变了
                    || localStorage.balh_must_remind_login_v1) { // 设置了"必须提醒"flag
                    clearLoginFlag()
                    updateLoginFlag(() => {
                        if (!isLogin()) {
                            localStorage.balh_must_remind_login_v1 = r.const.FALSE;
                            util_ui_pop({
                                content: [
                                    _('text', `${GM_info.script.name}\n要不要考虑进行一下授权？\n\n授权后可以观看区域限定番剧的1080P\n（如果你是大会员或承包过这部番的话）\n\n你可以随时在设置中打开授权页面`)
                                ],
                                onConfirm: () => {
                                    balh_feature_sign.showLogin();
                                    document.querySelector('#AHP_Notice').remove()
                                }
                            })
                        }
                    })
                } else if ((isLogin() && Date.now() - parseInt(localStorage.oauthTime) > 24 * 60 * 60 * 1000) // 已登录，每天为周期检测key有效期，过期前五天会自动续期
                    || localStorage.balh_must_updateLoginFlag) {// 某些情况下，必须更新一次
                    updateLoginFlag(() => localStorage.balh_must_updateLoginFlag = r.const.FALSE);
                }
            }
            localStorage.balh_old_isLoginBiliBili = isLoginBiliBili() ? r.const.TRUE : r.const.FALSE
            localStorage.balh_pre_server = balh_config.server
        }

        function showLogin() {
            const balh_auth_window = window.open('about:blank');
            balh_auth_window.document.title = 'BALH - 授权';
            balh_auth_window.document.body.innerHTML = '<meta charset="UTF-8" name="viewport" content="width=device-width">正在获取授权，请稍候……';
            window.balh_auth_window = balh_auth_window;
            $.ajax('https://passport.bilibili.com/login/app/third?appkey=27eb53fc9058f8c3&api=http%3A%2F%2Flink.acg.tv%2Fforum.php&sign=67ec798004373253d60114caaad89a8c', {
                xhrFields: { withCredentials: true },
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    if (data.data.has_login) {
                        balh_auth_window.document.body.innerHTML = '<meta charset="UTF-8" name="viewport" content="width=device-width">正在跳转……';
                        balh_auth_window.location.href = data.data.confirm_uri;
                    } else {
                        balh_auth_window.close()
                        util_ui_alert('必须登录B站才能正常授权', () => {
                            location.href = 'https://passport.bilibili.com/login'
                        })
                    }
                },
                error: (e) => {
                    alert('error');
                }
            })
        }

        function showLoginByPassword() {
            const loginUrl = balh_config.server + '/login'
            util_ui_pop({
                content: `B站当前关闭了第三方登录的接口<br>目前只能使用帐号密码的方式<a href="${loginUrl}">登录代理服务器</a><br><br>登录完成后, 请手动刷新当前页面`,
                confirmBtn: '前往登录页面',
                onConfirm: () => {
                    window.open(loginUrl)
                }
            })
        }

        function showLogout() {
            util_ui_popframe(balh_config.server + '/login?act=logout')
        }

        // 监听登录message
        window.addEventListener('message', function (e) {
            if (typeof e.data !== 'string') return // 只处理e.data为string的情况
            switch (e.data.split(':')[0]) {
                case 'BiliPlus-Login-Success': {
                    //登入
                    localStorage.balh_must_updateLoginFlag = r.const.TRUE
                    Promise.resolve('start')
                        .then(() => util_jsonp(balh_config.server + '/login?act=getlevel'))
                        .then(() => location.reload())
                        .catch(() => location.reload())
                    break;
                }
                case 'BiliPlus-Logout-Success': {
                    //登出
                    clearLoginFlag()
                    location.reload()
                    break;
                }
                case 'balh-login-credentials': {
                    balh_auth_window.close();
                    let url = e.data.split(': ')[1];
                    util_ui_popframe(url.replace('http://link.acg.tv/forum.php', balh_config.server + '/login'));
                    break;
                }
            }
        })


        util_init(() => {
            if (!(util_page.player() || util_page.av())) {
                checkLoginState()
            }
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.DOM_LOADED_AFTER)
        return {
            showLogin,
            showLogout,
            isLogin,
            isLoginBiliBili,
        }
    }())
    const balh_feature_RedirectToBangumiOrInsertPlayer = (function () {
        // 重定向到Bangumi页面， 或者在当前页面直接插入播放页面
        function tryRedirectToBangumiOrInsertPlayer() {
            let $errorPanel;
            if (!($errorPanel = document.querySelector('.error-container > .error-panel'))) {
                return;
            }
            let msg = document.createElement('a');
            $errorPanel.insertBefore(msg, $errorPanel.firstChild);
            msg.innerText = '获取番剧页Url中...';
            let aid = location.pathname.replace(/.*av(\d+).*/, '$1'),
                page = (location.pathname.match(/\/index_(\d+).html/) || ['', '1'])[1],
                cid,
                season_id,
                episode_id;
            let avData;
            balh_api_plus_view(aid)
                .then(function (data) {
                    avData = data;
                    if (data.code) {
                        return Promise.reject(JSON.stringify(data));
                    }
                    // 计算当前页面的cid
                    for (let i = 0; i < data.list.length; i++) {
                        if (data.list[i].page == page) {
                            cid = data.list[i].cid;
                            break;
                        }
                    }
                    if (!data.bangumi) {
                        generatePlayer(data, aid, page, cid)
                        // return Promise.reject('该AV号不属于任何番剧页');//No bangumi in api response
                    } else {
                        // 当前av属于番剧页面, 继续处理
                        season_id = data.bangumi.season_id;
                        return balh_api_plus_season(season_id);
                    }
                })
                .then(function (result) {
                    if (result === undefined) return // 上一个then不返回内容时, 不需要处理
                    if (result.code === 10) { // av属于番剧页面, 通过接口却未能找到番剧信息
                        let ep_id_newest = avData && avData.bangumi && avData.bangumi.newest_ep_id
                        if (ep_id_newest) {
                            episode_id = ep_id_newest // 此时, 若avData中有最新的ep_id, 则直接使用它
                        } else {
                            log(`av${aid}属于番剧${season_id}, 但却不能找到番剧页的信息, 试图直接创建播放器`)
                            generatePlayer(avData, aid, page, cid)
                            return
                        }
                    } else if (result.code) {
                        return Promise.reject(JSON.stringify(result))
                    } else {
                        let ep_id_by_cid, ep_id_by_aid_page, ep_id_by_aid,
                            episodes = result.result.episodes,
                            ep
                        // 为何要用三种不同方式匹配, 详见: https://greasyfork.org/zh-CN/forum/discussion/22379/x#Comment_34127
                        for (let i = 0; i < episodes.length; i++) {
                            ep = episodes[i]
                            if (ep.danmaku == cid) {
                                ep_id_by_cid = ep.episode_id
                            }
                            if (ep.av_id == aid && ep.page == page) {
                                ep_id_by_aid_page = ep.episode_id
                            }
                            if (ep.av_id == aid) {
                                ep_id_by_aid = ep.episode_id
                            }
                        }
                        episode_id = ep_id_by_cid || ep_id_by_aid_page || ep_id_by_aid
                    }
                    if (episode_id) {
                        let bangumi_url = `//www.bilibili.com/bangumi/play/ss${season_id}#${episode_id}`
                        log('Redirect', 'aid:', aid, 'page:', page, 'cid:', cid, '==>', bangumi_url, 'season_id:', season_id, 'ep_id:', episode_id)
                        msg.innerText = '即将跳转到：' + bangumi_url
                        location.href = bangumi_url
                    } else {
                        return Promise.reject('查询episode_id失败')
                    }
                })
                .catch(function (e) {
                    log('error:', arguments);
                    msg.innerText = 'error:' + e;
                });
        }

        function generatePlayer(data, aid, page, cid) {
            let generateSrc = function (aid, cid) {
                return `//www.bilibili.com/blackboard/html5player.html?cid=${cid}&aid=${aid}&player_type=1`;
            }
            let generatePageList = function (pages) {
                let $curPage = null;
                function onPageBtnClick(e) {
                    e.target.className = 'curPage'
                    $curPage && ($curPage.className = '')

                    let index = e.target.attributes['data-index'].value;
                    iframe.src = generateSrc(aid, pages[index].cid);
                }

                return pages.map(function (item, index) {
                    let isCurPage = item.page == page
                    let $item = _('a', { 'data-index': index, className: isCurPage ? 'curPage' : '', event: { click: onPageBtnClick } }, [_('text', item.page + ': ' + item.part)])
                    if (isCurPage) $curPage = $item
                    return $item
                });
            }
            // 当前av不属于番剧页面, 直接在当前页面插入一个播放器的iframe
            let $pageBody = document.querySelector('.b-page-body');
            if (!$pageBody) { // 若不存在, 则创建
                $pageBody = _('div', { className: '.b-page-body' });
                document.querySelector('body').insertBefore($pageBody, document.querySelector('#app'))
                // 添加相关样式
                document.head.appendChild(_('link', { type: 'text/css', rel: 'stylesheet', href: '//static.hdslb.com/css/core-v5/page-core.css' }))
            }
            let iframe = _('iframe', { className: 'player bilibiliHtml5Player', style: { position: 'relative' }, src: generateSrc(aid, cid) });

            // 添加播放器
            $pageBody.appendChild(_('div', { className: 'player-wrapper' }, [
                _('div', { className: 'main-inner' }, [
                    _('div', { className: 'v-plist' }, [
                        _('div', { id: 'plist', className: 'plist-content open' }, generatePageList(data.list))
                    ])
                ]),
                _('div', { id: 'bofqi', className: 'scontent' }, [iframe])
            ]));
            // 添加评论区
            $pageBody.appendChild(_('div', { className: 'main-inner' }, [
                _('div', { className: 'common report-scroll-module report-wrap-module', id: 'common_report' }, [
                    _('div', { className: 'b-head' }, [
                        _('span', { className: 'b-head-t results' }),
                        _('span', { className: 'b-head-t' }, [_('text', '评论')]),
                        _('a', { className: 'del-log', href: `//www.bilibili.com/replydeletelog?aid=${aid}&title=${data.title}`, target: '_blank' }, [_('text', '查看删除日志')])
                    ]),
                    _('div', { className: 'comm', id: 'bbComment' }, [
                        _('div', { id: 'load_comment', className: 'comm_open_btn', onclick: "var fb = new bbFeedback('.comm', 'arc');fb.show(" + aid + ", 1);", style: { cursor: 'pointer' } })
                    ])
                ])
            ]));
            // 添加包含bbFeedback的js
            document.head.appendChild(_('script', { type: 'text/javascript', src: '//static.hdslb.com/js/core-v5/base.core.js' }))

            document.title = data.title;
            (document.querySelector('.error-body') || document.querySelector('.error-container')).remove(); // 移除错误信息面板
        }

        util_init(() => {
            if (util_page.av()) {
                tryRedirectToBangumiOrInsertPlayer()
            }
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.COMPLETE)
        return true // 随便返回一个值...
    }())
    const balh_feature_FillSeasonList = (function () {
        function tryFillSeasonList() {
            var error_container, season_id;
            if (!(error_container = document.querySelector('div.error-container'))) {
                return;
            }
            if (!(season_id = window.location.pathname.match(/^\/anime\/(\d+)\/?$/)[1])) {
                return;
            }

            //尝试解决怪异模式渲染
            /*
            会造成变量丢失，等待官方重写doctype
            try{
            window.stop();
                var xhr = new XMLHttpRequest();
            xhr.open('GET',location.href,false);
            xhr.send();
            document.head.appendChild(_('script',{},[_('text',
                'document.write(unescape("'+escape(xhr.response.replace(/<!DOCTYPE.+?>/,'<!DOCTYPE HTML>'))+'"));window.stop()'
            )]));
            }catch(e){util_error(e);}
            */

            var msg = _('a', { href: '//bangumi.bilibili.com/anime/' + season_id + '/play', style: { fontSize: '20px' } }, [_('text', `【${GM_info.script.name}】尝试获取视频列表中...`)]),
                content = _('div');

            error_container.insertBefore(content, error_container.firstChild);
            content.appendChild(msg);
            log('season>:', season_id);
            balh_api_plus_season(season_id)
                .then(function (data) {
                    log('season>then:', data);
                    if (data.code) {
                        return Promise.reject(data);
                    }

                    function generateEpisodeList(episodes) {
                        var childs = [];
                        episodes.reverse().forEach(function (i) {
                            childs.push(_('li', { className: 'v1-bangumi-list-part-child', 'data-episode-id': i.episode_id }, [_('a', { className: 'v1-complete-text', href: '//bangumi.bilibili.com/anime/' + season_id + '/play#' + i.episode_id, title: i.index + ' ' + i.index_title, target: '_blank', style: { height: '60px' } }, [
                                _('div', { className: 'img-wrp' }, [_('img', { src: i.cover, style: { opacity: 1 }, loaded: 'loaded', alt: i.index + ' ' + i.index_title })]),
                                _('div', { className: 'text-wrp' }, [
                                    _('div', { className: 'text-wrp-num' }, [_('div', { className: 'text-wrp-num-content' }, [_('text', `第${i.index}话`)])]),
                                    _('div', { className: 'text-wrp-title trunc' }, [_('text', i.index_title)])
                                ])
                            ])]));
                        });
                        return childs;
                    }

                    function generateSeasonList(seasons) {
                        function onSeasonClick(event) {
                            window.location.href = '//bangumi.bilibili.com/anime/' + event.target.attributes['data-season-id'].value;
                        }

                        return seasons.map(function (season) {
                            return _('li', { className: season.season_id == season_id ? 'cur' : '', 'data-season-id': season.season_id, event: { click: onSeasonClick } }, [_('text', season.title)]);
                        });
                    }

                    if (data.result) {
                        document.title = data.result.title;
                        document.head.appendChild(_('link', { href: 'https://s3.hdslb.com/bfs/static/anime/css/tag-index.css?v=110', rel: 'stylesheet' }));
                        document.head.appendChild(_('link', { href: 'https://s1.hdslb.com/bfs/static/anime/css/bangumi-index.css?v=110', rel: 'stylesheet' }));
                        document.body.insertBefore(_('div', { className: 'main-container-wrapper' }, [_('div', { className: 'main-container' }, [
                            _('div', { className: 'page-info-wrp' }, [_('div', { className: 'bangumi-info-wrapper' }, [
                                _('div', { className: 'bangumi-info-blurbg-wrapper' }, [_('div', { className: 'bangumi-info-blurbg blur', style: { backgroundImage: 'url(' + data.result.cover + ')' } })]),
                                _('div', { className: 'main-inner' }, [_('div', { className: 'info-content' }, [
                                    _('div', { className: 'bangumi-preview' }, [_('img', { alt: data.result.title, src: data.result.cover })]),
                                    _('div', { className: 'bangumi-info-r' }, [
                                        _('div', { className: 'b-head' }, [_('h1', { className: 'info-title', 'data-seasonid': season_id, title: data.result.title }, [_('text', data.result.title)])]),
                                        _('div', { className: 'info-count' }, [
                                            _('span', { className: 'info-count-item info-count-item-play' }, [_('span', { className: 'info-label' }, [_('text', '总播放')]), _('em', {}, [_('text', data.result.play_count)])]),
                                            _('span', { className: 'info-count-item info-count-item-fans' }, [_('span', { className: 'info-label' }, [_('text', '追番人数')]), _('em', {}, [_('text', data.result.favorites)])]),
                                            _('span', { className: 'info-count-item info-count-item-review' }, [_('span', { className: 'info-label' }, [_('text', '弹幕总数')]), _('em', {}, [_('text', data.result.danmaku_count)])])
                                        ]),
                                        //_('div',{className:'info-row info-update'},[]),
                                        //_('div',{className:'info-row info-cv'},[]),
                                        _('div', { className: 'info-row info-desc-wrp' }, [
                                            _('div', { className: 'info-row-label' }, [_('text', '简介：')]),
                                            _('div', { className: 'info-desc' }, [_('text', data.result.evaluate)])
                                        ]),
                                    ])
                                ])])
                            ])]),
                            _('div', { className: 'main-inner' }, [_('div', { className: 'v1-bangumi-list-wrapper clearfix' }, [
                                _('div', { className: 'v1-bangumi-list-season-wrapper' }, [
                                    _('div', { className: 'v1-bangumi-list-season-content slider-list-content' }, [
                                        _('div', {}, [
                                            _('ul', { className: 'v1-bangumi-list-season clearfix slider-list', 'data-current-season-id': season_id, style: { opacity: 1 } }, generateSeasonList(data.result.seasons))
                                        ])
                                    ])
                                ]),
                                _('div', { className: 'v1-bangumi-list-part-wrapper slider-part-wrapper' }, [_('div', { className: 'v1-bangumi-list-part clearfix', 'data-current-season-id': season_id, style: { display: 'block' } }, [
                                    _('div', { className: 'complete-list', style: { display: 'block' } }, [_('div', { className: 'video-slider-list-wrapper' }, [_('div', { className: 'slider-part-wrapper' }, [_('ul', { className: 'slider-part clearfix hide', style: { display: 'block' } }, generateEpisodeList(data.result.episodes))])])])
                                ])])
                            ])])
                        ])]), msg.parentNode.parentNode);
                        msg.parentNode.parentNode.remove();
                    }
                })
                .catch(function (error) {
                    log('season>catch', error);
                    msg.innerText = 'error:' + JSON.stringify(error) + '\n点击跳转到播放界面 (不一定能够正常播放...)';
                });
        }

        util_init(() => {
            if (util_page.bangumi()) {
                tryFillSeasonList()
            }
        })
        return true
    }())

    const balh_ui_setting = (function () {
        function addSettingsButton() {
            let indexNav = document.querySelector('.bangumi-nav-right, #index_nav, #fixnav_report')
            let settingBtnSvgContainer
            const createBtnStyle = (size, diffCss) => {
                diffCss = diffCss || `
                    #balh-settings-btn {
                        bottom: 110px;
                        border: 1px solid #e5e9ef;
                        border-radius: 4px;
                        background: #f6f9fa;
                        margin-top: 4px;
                    }
                    #balh-settings-btn .btn-gotop {
                        text-align: center;
                    }
                `
                return _('style', {}, [_('text', `
                    ${diffCss}
                    #balh-settings-btn {
                        width: ${size};
                        height: ${size};
                        cursor: pointer;
                    }
                    #balh-settings-btn:hover {
                        background: #00a1d6;
                        border-color: #00a1d6;
                    }            
                    #balh-settings-btn .icon-saturn {
                        width: 30px;
                        height: ${size};
                        fill: rgb(153,162,170);
                    }
                    #balh-settings-btn:hover .icon-saturn {
                        fill: white;
                    }            
            `)])
            }
            if (indexNav == null) {
                // 信息页添加到按钮右侧
                if (util_page.bangumi_md()) {
                    indexNav = document.querySelector('.media-info-btns');
                    indexNav.appendChild(createBtnStyle('44px', `
                        #balh-settings-btn {
                            float: left;
                            margin: 3px 0 0 20px;
                            background: #FFF;
                            border-radius: 10px;
                        }
                        #balh-settings-btn>:first-child {
                            text-align: center;
                            height: 100%;
                        }
                    `))
                } else {
                    // 新版视频页面的“返回页面顶部”按钮, 由Vue控制, 对内部html的修改会被重置, 故只能重新创建新的indexNav
                    let navTools = document.querySelector('.nav-tools, .float-nav')
                    if (navTools) {
                        let bottom = navTools.className.includes('float-nav') ? '53px' : '45px'
                        indexNav = document.body.appendChild(_('div', { style: { position: 'fixed', right: '6px', bottom: bottom, zIndex: '129', textAlign: 'center', display: 'none' } }))
                        indexNav.appendChild(createBtnStyle('45px'))
                        window.addEventListener('scroll', (event) => {
                            indexNav.style.display = window.scrollY < 600 ? 'none' : ''
                        })
                    }
                }
                if (indexNav) {
                    settingBtnSvgContainer = indexNav.appendChild(_('div', { id: 'balh-settings-btn', title: GM_info.script.name + ' 设置', event: { click: showSettings } }, [_('div', {})])).firstChild;
                }
            } else {
                // 视频页添加到回顶部下方
                window.dispatchEvent(new Event('resize'));
                indexNav.style.display = 'block';
                indexNav.appendChild(createBtnStyle('46px'))
                settingBtnSvgContainer = indexNav.appendChild(_('div', { id: 'balh-settings-btn', title: GM_info.script.name + ' 设置', event: { click: showSettings } }, [_('div', { className: 'btn-gotop' })])).firstChild;
            }
            settingBtnSvgContainer && (settingBtnSvgContainer.innerHTML = `<!-- https://www.flaticon.com/free-icon/saturn_53515 --><svg class="icon-saturn" viewBox="0 0 612.017 612.017"><path d="M596.275,15.708C561.978-18.59,478.268,5.149,380.364,68.696c-23.51-7.384-48.473-11.382-74.375-11.382c-137.118,0-248.679,111.562-248.679,248.679c0,25.902,3.998,50.865,11.382,74.375C5.145,478.253-18.575,561.981,15.724,596.279c34.318,34.318,118.084,10.655,216.045-52.949c23.453,7.365,48.378,11.344,74.241,11.344c137.137,0,248.679-111.562,248.679-248.68c0-25.862-3.979-50.769-11.324-74.24C606.931,133.793,630.574,50.026,596.275,15.708zM66.435,545.53c-18.345-18.345-7.919-61.845,23.338-117.147c22.266,39.177,54.824,71.716,94.02,93.943C128.337,553.717,84.837,563.933,66.435,545.53z M114.698,305.994c0-105.478,85.813-191.292,191.292-191.292c82.524,0,152.766,52.605,179.566,125.965c-29.918,41.816-68.214,87.057-113.015,131.839c-44.801,44.819-90.061,83.116-131.877,113.034C167.303,458.76,114.698,388.479,114.698,305.994z M305.99,497.286c-3.156,0-6.236-0.325-9.354-0.459c35.064-27.432,70.894-58.822,106.11-94.059c35.235-35.235,66.646-71.046,94.058-106.129c0.153,3.118,0.479,6.198,0.479,9.354C497.282,411.473,411.469,497.286,305.99,497.286z M428.379,89.777c55.303-31.238,98.803-41.683,117.147-23.338c18.402,18.383,8.187,61.902-23.204,117.377C500.095,144.62,467.574,112.043,428.379,89.777z"/></svg>`);
        }

        function _showSettings() {
            document.body.appendChild(settingsDOM);
            var form = settingsDOM.querySelector('form');
            // elements包含index的属性, 和以name命名的属性, 其中以name命名的属性是不可枚举的, 只能通过这种方式获取出来
            Object.getOwnPropertyNames(form.elements).forEach(function (name) {
                if (name.startsWith('balh_')) {
                    var key = name.replace('balh_', '')
                    var ele = form.elements[name]
                    if (ele.type === 'checkbox') {
                        ele.checked = balh_config[key];
                    } else {
                        ele.value = balh_config[key];
                    }
                }
            })
            document.body.style.overflow = 'hidden';
        }

        // 往顶层窗口发显示设置的请求
        function showSettings() {
            window.top.postMessage('balh-show-setting', '*')
        }

        // 只有顶层窗口才接收请求
        if (window === window.top) {
            window.addEventListener('message', (event) => {
                if (event.data === 'balh-show-setting') {
                    _showSettings();
                    $('#upos-server')[0].value = balh_config.upos_server || '';
                }
            })
        }

        function onSignClick(event) {
            settingsDOM.click();
            switch (event.target.attributes['data-sign'].value) {
                default:
                case 'in':
                    balh_feature_sign.showLogin();
                    break;
                case 'out':
                    balh_feature_sign.showLogout();
                    break;
            }
        }

        function onSettingsFormChange(e) {
            var name = e.target.name;
            var value = e.target.type === 'checkbox' ? (e.target.checked ? r.const.TRUE : r.const.FALSE) : e.target.value.trim()
            balh_config[name.replace('balh_', '')] = value
            log(name, ' => ', value);
        }

        // 第一次点击时:
        // 1. '复制日志&问题反馈' => '复制日志'
        // 2. 显示'问题反馈'
        // 3. 复制成功后请求跳转到GitHub
        // 之后的点击, 只是正常的复制功能~~
        function onCopyClick(event) {
            let issueLink = document.getElementById('balh-issue-link')
            let continueToIssue = issueLink.style.display === 'none'
            if (continueToIssue) {
                issueLink.style.display = 'inline'
                let copyBtn = document.getElementById('balh-copy-log')
                copyBtn.innerText = '复制日志'
            }

            let textarea = document.getElementById('balh-textarea-copy')
            textarea.style.display = 'inline-block'
            if (util_ui_copy(util_log_hub.getAllMsg(), textarea)) {
                textarea.style.display = 'none'
                util_ui_msg.show($(this),
                    continueToIssue ? '复制日志成功; 点击确定, 继续提交问题(需要GitHub帐号)\n请把日志粘贴到问题描述中' : '复制成功',
                    continueToIssue ? 0 : 3e3,
                    continueToIssue ? 'button' : undefined,
                    continueToIssue ? openIssuePage : undefined)
            } else {
                util_ui_msg.show($(this), '复制失败, 请从下面的文本框手动复制', 5e3)
            }
        }

        function openIssuePage() {
            // window.open(r.url.issue)
            window.open(r.url.readme)
        }

        let printSystemInfoOk = false

        // 鼠标移入设置底部的时候, 打印一些系统信息, 方便问题反馈
        function onMouseEnterSettingBottom(event) {
            if (!printSystemInfoOk) {
                printSystemInfoOk = true
                util_debug('userAgent', navigator.userAgent)
            }
        }

        let customServerCheckText
        var settingsDOM = _('div', { id: 'balh-settings', style: { position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,.7)', animationName: 'balh-settings-bg', animationDuration: '.5s', zIndex: 10000, cursor: 'pointer' }, event: { click: function (e) { if (e.target === this) util_ui_msg.close(), document.body.style.overflow = '', this.remove(); } } }, [
            _('style', {}, [_('text', r.css.settings)]),
            _('div', { style: { position: 'absolute', background: '#FFF', borderRadius: '10px', padding: '20px', top: '50%', left: '50%', width: '600px', transform: 'translate(-50%,-50%)', cursor: 'default' } }, [
                _('h1', {}, [_('text', `${GM_info.script.name} v${GM_info.script.version} 参数设置`)]),
                _('br'),
                _('form', { id: 'balh-settings-form', event: { change: onSettingsFormChange } }, [
                    _('text', '代理服务器：'), _('a', { href: 'javascript:', event: { click: balh_feature_runPing } }, [_('text', '测速')]), _('br'),
                    _('div', { style: { display: 'flex' } }, [
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'radio', name: 'balh_server_inner', value: r.const.server.S0 }), _('text', '土豆服')]),
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'radio', name: 'balh_server_inner', value: r.const.server.S1 }), _('text', 'BiliPlus')]),
                        _('label', { style: { flex: 2 } }, [
                            _('input', { type: 'radio', name: 'balh_server_inner', value: r.const.server.CUSTOM }), _('text', `自定义: `),
                            _('input', {
                                type: 'text', name: 'balh_server_custom', placeholder: '形如：https://hd.pilipili.com', event: {
                                    input: (event) => {
                                        customServerCheckText.innerText = /^https?:\/\/[\w.]+$/.test(event.target.value.trim()) ? '✔️' : '❌'
                                        onSettingsFormChange(event)
                                    }
                                }
                            }),
                            customServerCheckText = _('span'),
                        ]),
                    ]), _('br'),
                    _('div', { id: 'balh_server_ping', style: { whiteSpace: 'pre-wrap', overflow: 'auto' } }, []),
                    _('div', { style: { display: '' } }, [ // 这个功能貌似没作用了...隐藏掉 => 貌似还有用...重新显示
                        _('text', 'upos服务器：'), _('br'),
                        _('div', { title: '变更后 切换清晰度 或 刷新 生效' }, [
                            _('input', { style: { visibility: 'hidden' }, type: 'checkbox' }),
                            _('text', '替换upos视频服务器：'),
                            _('select', {
                                id: 'upos-server',
                                event: {
                                    change: function () {
                                        let server = this.value;
                                        let message = $('#upos-server-message');
                                        let clearMsg = function () { message.text('') }
                                        message.text('保存中...')
                                        $.ajax(balh_config.server + '/api/setUposServer?server=' + server, {
                                            xhrFields: { withCredentials: true },
                                            dataType: 'json',
                                            success: function (json) {
                                                if (json.code == 0) {
                                                    message.text('已保存');
                                                    setTimeout(clearMsg, 3e3);
                                                    balh_config.upos_server = server;
                                                }
                                            },
                                            error: function () {
                                                message.text('保存出错');
                                                setTimeout(clearMsg, 3e3);
                                            }
                                        })
                                    }
                                }
                            }, [
                                _('option', { value: "" }, [_('text', '不替换')]),
                                _('option', { value: "ks3u" }, [_('text', 'ks3（金山）')]),
                                _('option', { value: "kodou" }, [_('text', 'kodo（七牛）')]),
                                _('option', { value: "cosu" }, [_('text', 'cos（腾讯）')]),
                                _('option', { value: "bosu" }, [_('text', 'bos（百度）')]),
                                _('option', { value: "wcsu" }, [_('text', 'wcs（网宿）')]),
                                _('option', { value: "xycdn" }, [_('text', 'xycdn（迅雷）')]),
                                _('option', { value: "hw" }, [_('text', 'hw（251）')]),
                            ]),
                            _('span', { 'id': 'upos-server-message' })
                        ]), _('br'),
                    ]),
                    _('text', '脚本工作模式：'), _('br'),
                    _('div', { style: { display: 'flex' } }, [
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'radio', name: 'balh_mode', value: r.const.mode.DEFAULT }), _('text', '默认：自动判断')]),
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'radio', name: 'balh_mode', value: r.const.mode.REPLACE }), _('text', '替换：在需要时处理番剧')]),
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'radio', name: 'balh_mode', value: r.const.mode.REDIRECT }), _('text', '重定向：完全代理所有番剧')])
                    ]), _('br'),
                    _('text', '其他：'), _('br'),
                    _('div', { style: { display: 'flex' } }, [
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'checkbox', name: 'balh_blocked_vip' }), _('text', '被永封的大会员'), _('a', { href: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/bilibili_bangumi_area_limit_hack.md#大会员账号被b站永封了', target: '_blank' }, [_('text', '(？)')])]),
                        _('label', { style: { flex: 1 } }, [_('input', { type: 'checkbox', name: 'balh_enable_in_av' }), _('text', '在AV页面启用'), _('a', { href: 'https://github.com/ipcjs/bilibili-helper/issues/172', target: '_blank' }, [_('text', '(？)')])]),
                        _('div', { style: { flex: 1, display: 'flex' } }, [
                            _('label', { style: { flex: 1 } }, [_('input', { type: 'checkbox', name: 'balh_remove_pre_ad' }), _('text', '去前置广告')]),
                            // _('label', { style: { flex: 1 } }, [_('input', { type: 'checkbox', name: 'balh_flv_prefer_ws' }), _('text', '优先使用ws')]),
                        ])
                    ]), _('br'),
                    _('a', { href: 'javascript:', 'data-sign': 'in', event: { click: onSignClick } }, [_('text', '帐号授权')]),
                    _('text', '　'),
                    _('a', { href: 'javascript:', 'data-sign': 'out', event: { click: onSignClick } }, [_('text', '取消授权')]),
                    _('text', '　　'),
                    _('a', { href: 'javascript:', event: { click: function () { util_ui_msg.show($(this), '如果你的帐号进行了付费，不论是大会员还是承包，\n进行授权之后将可以在解除限制时正常享有这些权益\n\n你可以随时在这里授权或取消授权\n\n不进行授权不会影响脚本的正常使用，但可能会缺失1080P', 1e4); } } }, [_('text', '（这是什么？）')]),
                    _('br'), _('br'),
                    _('div', { style: { whiteSpace: 'pre-wrap' }, event: { mouseenter: onMouseEnterSettingBottom } }, [
                        _('a', { href: 'https://greasyfork.org/zh-CN/scripts/25718-%E8%A7%A3%E9%99%A4b%E7%AB%99%E5%8C%BA%E5%9F%9F%E9%99%90%E5%88%B6', target: '_blank' }, [_('text', '脚本主页')]),
                        _('text', '　'),
                        _('a', { href: 'https://github.com/ipcjs/bilibili-helper/blob/user.js/bilibili_bangumi_area_limit_hack.md', target: '_blank' }, [_('text', '帮助说明')]),
                        _('text', '　'),
                        _('a', { id: 'balh-copy-log', href: 'javascript:;', event: { click: onCopyClick } }, [_('text', '复制日志&问题反馈')]),
                        _('text', '　'),
                        _('a', { id: 'balh-issue-link', href: 'javascript:;', event: { click: openIssuePage }, style: { display: 'none' } }, [_('text', '问题反馈')]),
                        _('text', '作者: ipcjs esterTion FlandreDaisuki'),
                        _('text', ' 接口：'),
                        _('a', { href: 'https://www.biliplus.com/' }, [_('text', ' BiliPlus ')]),
                        _('a', { href: 'https://github.com/kghost/bilibili-area-limit' }, [_('text', ' kghost ')]),
                    ]),
                    _('textarea', { id: 'balh-textarea-copy', style: { display: 'none' } })
                ])
            ])
        ]);

        util_init(() => {
            if (!(util_page.player() || (util_page.av() && !balh_config.enable_in_av))) {
                addSettingsButton()
            }
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.DOM_LOADED_AFTER)
        return {
            dom: settingsDOM,
            show: showSettings,
        }
    }())

    const balh_jump_to_baipiao = (function () {
        function main() {
            for (let bp of r.baipiao) {
                const cookie_key = `balh_baipao_${bp.key}`
                if (bp.match() && !util_cookie[cookie_key]) {
                    util_ui_pop({
                        content: [
                            _('text', '发现白嫖地址: '), _('a', { href: bp.link }, bp.link),
                            _('div', {}, bp.message),
                        ],
                        confirmBtn: '一键跳转',
                        onConfirm: () => { location.href = bp.link },
                        onClose: () => { util_cookie.set(cookie_key, r.const.TRUE, '') }
                    })
                    break
                }
            }
        }
        util_init(() => {
            main()
        }, util_init.PRIORITY.DEFAULT, util_init.RUN_AT.DOM_LOADED_AFTER)
    }())

    const balh_mark_serve_check_area_limit_state = (function () {
        if (!util_page.bangumi_md()) {
            return
        }
        // 服务器需要通过这个接口判断是否有区域限制
        // 详见: https://github.com/ipcjs/bilibili-helper/issues/385
        util_init(() => {
            const season_id = util_safe_get(`window.__INITIAL_STATE__.mediaInfo.param.season_id`)
            if (season_id) {
                balh_api_plus_season(season_id)
                    .then(r => log(`season${season_id}`, r))
                    .catch(e => log(`season${season_id}`, e))
            }
        })
    }())

    function main() {
        util_info(
            'mode:', balh_config.mode,
            'blocked_vip:', balh_config.blocked_vip,
            'server:', balh_config.server,
            'upos_server:', balh_config.upos_server,
            'flv_prefer_ws:', balh_config.flv_prefer_ws,
            'remove_pre_ad:', balh_config.remove_pre_ad,
            'enable_in_av:', balh_config.enable_in_av,
            'readyState:', document.readyState,
            'isLogin:', balh_feature_sign.isLogin(),
            'isLoginBiliBili:', balh_feature_sign.isLoginBiliBili()
        )
        // 暴露接口
        window.bangumi_area_limit_hack = {
            setCookie: util_cookie.set,
            getCookie: util_cookie.get,
            login: balh_feature_sign.showLogin,
            logout: balh_feature_sign.showLogout,
            getLog: util_log_hub.getAllMsg,
            showSettings: balh_ui_setting.show,
            set1080P: function () {
                const settings = JSON.parse(localStorage.bilibili_player_settings)
                const oldQuality = settings.setting_config.defquality
                util_debug(`defauality: ${oldQuality}`)
                settings.setting_config.defquality = 112 // 1080P
                localStorage.bilibili_player_settings = JSON.stringify(settings)
                location.reload()
            },
            _clear_local_value: function () {
                delete localStorage.oauthTime
                delete localStorage.balh_h5_not_first
                delete localStorage.balh_old_isLoginBiliBili
                delete localStorage.balh_must_remind_login_v1
                delete localStorage.balh_must_updateLoginFlag
            }
        }
    }

    main();
}

scriptSource(GM_info.scriptHandler);
