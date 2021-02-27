// ==UserScript==
// @name        假装水墨屏
// @name:en-US  Fake Ink Screen
// @namespace   Fake Ink Screen
// @match       *://*/*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_registerMenuCommand
// @run-at      document-start
// @inject-into content
// @version     0.2.3
// @author      稻米鼠
// @created     2020-07-24 13:02:56
// @updated     2020-08-10 18:51:07
// @description 假装用的水墨屏，阅读不累眼（可能吧）。最新加入彩色&反色水墨屏模式，在脚本菜单中切换。
// ==/UserScript==
 
(function(){
  // 闭包 Start
  GM_addStyle(`
    html.gray-ink-screen {
      -webkit-filter: grayscale(100%) brightness(120%);
      -moz-filter: grayscale(100%) brightness(120%);
      -ms-filter: grayscale(100%) brightness(120%);
      -o-filter: grayscale(100%) brightness(120%);
      filter: grayscale(100%) brightness(120%);
    }
    html.dark-ink-screen {
      -webkit-filter: grayscale(100%) brightness(120%) invert(100%);
      -moz-filter: grayscale(100%) brightness(120%) invert(100%);
      -ms-filter: grayscale(100%) brightness(120%) invert(100%);
      -o-filter: grayscale(100%) brightness(120%) invert(100%);
      filter: grayscale(100%) brightness(120%) invert(100%);
    }
    html.color-ink-screen {
      -webkit-filter: saturate(60%) contrast(160%);
      -moz-filter: saturate(100%) contrast(160%);
      -ms-filter: saturate(60%) contrast(160%);
      -o-filter: saturate(60%) contrast(160%);
      filter: saturate(60%) contrast(160%);
    }
    html.gray-ink-screen,
    html.gray-ink-screen body,
    html.gray-ink-screen .ink-background,
    html.dark-ink-screen,
    html.dark-ink-screen body,
    html.dark-ink-screen .ink-background {
      background-color: rgb(200, 200, 200) !important
    }
    html.color-ink-screen,
    html.color-ink-screen body,
    html.color-ink-screen .ink-background {
      background-color: rgb(198, 198, 198) !important
    }
    html.dark-ink-screen .ink-font,
    html.gray-ink-screen .ink-font {
      color: rgb(66, 66, 66) !important
    }
    html.color-ink-screen .ink-font {
      color: rgb(98, 98, 98) !important
    }
    html.gray-ink-screen * {
      text-shadow: 0 0 1.2rem rgba(0, 0, 0, .24), 0 0 .5px rgba(0, 0, 0, .5)
    }
    html.color-ink-screen * {
      text-shadow: 0 0 1.2rem rgba(0, 0, 0, .2), 0 0 .5px rgba(0, 0, 0, .4)
    }
  `);
  const modes = ['gray-ink-screen', 'color-ink-screen', 'dark-ink-screen']
  const toggleMode = (modeIndex)=>{
    for(const className of modes) {
      document.body.parentElement.classList.remove(className)
    }
    document.body.parentElement.classList.add(modes[modeIndex])
  }
  toggleMode(GM_getValue('mode', 0))
  GM_registerMenuCommand('切换【黑白&彩色&反色】水墨屏',()=>{
    let mode = GM_getValue('mode', 0)
    mode = mode>=2 ? 0 : ++mode
    toggleMode(mode)
    GM_setValue('mode', mode)
  })
  window.addEventListener('load', () => {
    const inkEl = async(el) => {
      const fontColor = window.getComputedStyle(el).color.match(/\d+/g);
      const rgbVal = window.getComputedStyle(el).backgroundColor.match(/\d+/g);
      if(!fontColor || !rgbVal) return;
      if (
        fontColor &&
        +fontColor[0] + +fontColor[1] + +fontColor[2] > 255 &&
        +fontColor[0] + +fontColor[1] + +fontColor[2] < 588
      ) {
        el.classList.add('ink-font');
      }
      if (rgbVal[3] && rgbVal[3] === '0') return;
      if (
        (+rgbVal[0] + +rgbVal[1] + +rgbVal[2]) / (rgbVal[3] ? +rgbVal[3] : 1) >
        640
      )
        el.classList.add('ink-background');
    };
    document.body.querySelectorAll('*').forEach((el) =>  inkEl(el) );
    const obOptions = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      attributeOldValue: false,
      characterDataOldValue: false,
      attributeFilter: [],
    };
    const observer = new MutationObserver(async (records, observer) => {
      observer.disconnect();
      const els = records
        // 改变的类型为 characterData，并且不是 body 元素的话
        .filter((el) => /^characterData$/i.test(el.type))
        .map((el) => el.target); // 把发生改变的元素放入合集
      // 改变的类型为 childList，则把新增的元素放入合集
      records
        .filter((el) => /^childList$/i.test(el.type))
        .forEach((el) => {
          el.addedNodes.forEach((node) => els.push(node));
        });
      // 遍历合集中所有元素
      for await (el of els) {
        if(el.nodeType === 1) {
          inkEl(el);
          el.querySelectorAll('*').forEach(e=>inkEl(e))
        }
      }
      // 页面处理完成之后重新监控页面变化
      observer.observe(document.body, obOptions);
    });
    observer.observe(document.body, obOptions);
  });
  // 闭包 End
  })()