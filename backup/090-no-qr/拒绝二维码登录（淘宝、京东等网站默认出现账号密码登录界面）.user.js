// ==UserScript==
// @name         拒绝二维码登录（淘宝、京东等网站默认出现账号密码登录界面）
// @namespace    undefined
// @version      0.4.0
// @description  淘宝、京东、阿里云等网站默认使用账号密码登录，不出现二维码登录界面
// @author       Vizards
// @match        *://login.taobao.com/*
// @match        *://login.1688.com/*
// @match        *://account.aliyun.com/*
// @match        *://passport.jd.com/*
// @match        *://*.weibo.com/*
// @match        *://login.tmall.com/*
// @match        *://*.baidu.com/*
// @match        *://graph.qq.com/*
// @match        *://xui.ptlogin2.qq.com/*
// @match        *://ssl.xui.ptlogin2.qq.com/*
// @match        *://ui.ptlogin2.qq.com/*
// @match        *://passport.suning.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.douyu.com/*
// @match        *://*.alipay.com/*
// @match        *://*.xiami.com/*
// @match        *://passport.csdn.net/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

function hideElements(mutationList, observer) {
  taobao();
  jd();
  aliyun();
  weibo();
  baiduYun();
  qq(mutationList);
  zhihu();
  alipay(mutationList);
  xiami();
  baidu();
  csdn();
}

var domain = location.hostname;

function taobao() {
  if (['login.taobao.com'].includes(domain)) {
    if (window.getComputedStyle(document.getElementById('J_StaticForm')).display === 'none') {
      document.getElementById('J_Quick2Static').click();
    }
  }
}

function jd() {
  if (['passport.jd.com'].includes(domain)) {
    if (document.getElementsByClassName('login-box') && document.getElementsByClassName('login-box')[0].style.display === 'none') {
      document.getElementsByClassName('login-tab-r')[0].click();
    }
  }
}

function aliyun() {
  if (['account.aliyun.com'].includes(domain)) {
    document.querySelector('.ability-tabs').children[1].click()
  }
}

function weibo() {
  if (['weibo.com'].includes(domain)) {
    if (document.getElementsByClassName('W_login_form') && document.getElementsByClassName('W_login_form')[0] && document.getElementsByClassName('W_login_form')[0].style.display === 'none' && document.getElementsByClassName('W_fb')) {
      document.getElementsByClassName('W_fb')[0].click();
    }
  }
}

function baiduYun() {
  if (['pan.baidu.com'].includes(domain) && location.href.indexOf('disk/home') === -1) {
    if (document.getElementById('login-middle') && document.getElementById('login-middle').style.display === 'none') {
      document.getElementsByClassName("pass-link")[3].click();
    }
    if (document.getElementById('passport-login-pop') && document.getElementById('passport-login-pop-api').style.display === 'none') {
      document.getElementsByClassName("pass-link")[3].click();
    }
  }
}

function qq(mutationList) {
  if (['xui.ptlogin2.qq.com','ssl.xui.ptlogin2.qq.com','ui.ptlogin2.qq.com'].includes(domain)) {
    var button = document.getElementById('switcher_plogin')
    if (button && mutationList[0].target.innerHTML.includes('script type=')) {
      button.click()
    }
  }
  if (['graph.qq.com'].includes(domain) && document.getElementById('select_all') && document.getElementById('select_all').checked) {
    document.getElementById('select_all').click();
  }
}

function suning() {
  if (['passport.suning.com'].includes(domain)) {
    if (document.getElementsByClassName('pc-login') && document.getElementsByClassName('pc-login')[0].style.display === 'none') {
      document.getElementsByClassName('tab-item')[1].click();
    }
  }
}

function zhihu() {
  if (['www.zhihu.com', 'zhihu.com'].includes(domain)) {
    if (document.getElementsByTagName('form') && document.getElementsByTagName('form')[0] && document.getElementsByTagName('form')[0].style.display === 'none') {
      document.getElementsByClassName('signin-switch-password')[0].click();
    }
  }
}

function alipay(mutationList) {
  if(['auth.alipay.com'].includes(domain)) {
    var hideButton = document.getElementsByClassName('qrcode-target-hide')[0]
    if (mutationList[0].target.innerHTML.includes('登录中心') && hideButton) {
      hideButton.click()
    }
  }
}

function xiami() {
  if (['passport.xiami.com', 'xiami.com', 'www.xiami.com'].includes(domain)) {
    if (!document.getElementById('account') && document.getElementsByClassName('login-switch')[0]) {
      document.getElementsByClassName('login-switch')[0].children[1].click()
    }
  }
}

function baidu() {
  if (['tieba.baidu.com', 'passport.baidu.com'].includes(domain)) {
    if (document.getElementById('passport-login-pop') || (document.getElementsByClassName('tang-pass-qrcode')[0] && document.getElementsByClassName('tang-pass-qrcode')[0].style.display === 'block')) {
      document.getElementsByClassName('tang-pass-footerBarULogin')[0].click();
    }
  }
}

function csdn() {
  if (['passport.csdn.net'].includes(domain)) {
    if (!document.getElementsByClassName('main-process-login')[0]) {
      document.getElementsByClassName('main-select')[0].children[0].children[1].children[0].click()
    }
  }
}

(function() {
  'use strict';
  var rootNode = document.querySelector('html');
  var observer = new MutationObserver(hideElements);
  if (rootNode) {
    observer.observe(rootNode, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    });
  }
  window.onload = function() { observer.disconnect() }
})();