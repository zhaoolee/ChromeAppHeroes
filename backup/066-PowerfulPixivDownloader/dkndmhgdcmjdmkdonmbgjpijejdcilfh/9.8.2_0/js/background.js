/******/ ;(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './src/ts/background.ts')
  )
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/ts/background.ts':
      /*!******************************!*\
  !*** ./src/ts/background.ts ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // 修改 responseHeaders 开始
        const regex = /access-control-allow-origin/i
        function removeMatchingHeaders(headers, regex) {
          for (let i = 0, header; (header = headers[i]); i++) {
            if (header.name.match(regex)) {
              headers.splice(i, 1)
              return
            }
          }
        }
        function responseListener(details) {
          removeMatchingHeaders(details.responseHeaders, regex)
          details.responseHeaders.push({
            name: 'access-control-allow-origin',
            value: '*',
          })
          return { responseHeaders: details.responseHeaders }
        }
        chrome.webRequest.onHeadersReceived.addListener(
          responseListener,
          {
            urls: ['*://*.pximg.net/*'],
          },
          ['blocking', 'responseHeaders', 'extraHeaders']
        )
        // 修改 responseHeaders 结束
        // 当点击扩展图标时，切换显示/隐藏下载面板
        chrome.browserAction.onClicked.addListener(function (tab) {
          // 打开下载面板
          chrome.tabs.sendMessage(tab.id, {
            msg: 'click_icon',
          })
        })
        // 因为下载完成的顺序和发送顺序可能不一致，所以需要存储任务的数据
        let dlData = {}
        // 储存下载任务的索引，用来判断重复的任务
        let dlIndex = []
        // 储存下载任务的批次编号，用来判断不同批次的下载
        let dlBatch = []
        // 接收下载请求
        chrome.runtime.onMessage.addListener(function (msg, sender) {
          // 接收下载任务
          if (msg.msg === 'send_download') {
            const tabId = sender.tab.id
            // 如果开始了新一批的下载，重设批次编号，清空下载索引
            if (dlBatch[tabId] !== msg.taskBatch) {
              dlBatch[tabId] = msg.taskBatch
              dlIndex[tabId] = []
            }
            // 检查任务是否重复，不重复则下载
            if (!dlIndex[tabId].includes(msg.id)) {
              // 储存该任务的索引
              dlIndex[tabId].push(msg.id)
              // 开始下载
              chrome.downloads.download(
                {
                  url: msg.fileUrl,
                  filename: msg.fileName,
                  conflictAction: 'overwrite',
                  saveAs: false,
                },
                (id) => {
                  // id 是 Chrome 新建立的下载任务的 id
                  dlData[id] = {
                    url: msg.fileUrl,
                    id: msg.id,
                    tabId: tabId,
                    uuid: false,
                  }
                }
              )
            }
          }
        })
        // 判断文件名是否变成了 UUID 格式。因为文件名处于整个绝对路径的中间，所以没加首尾标记 ^ $
        const UUIDRegexp = /[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}/
        // 监听下载事件
        chrome.downloads.onChanged.addListener(function (detail) {
          // 根据 detail.id 取出保存的数据
          const data = dlData[detail.id]
          if (data) {
            let msg = ''
            let err = ''
            // 判断当前文件名是否正常。下载时必定会有一次 detail.filename.current 有值
            if (detail.filename && detail.filename.current) {
              const changedName = detail.filename.current
              if (
                changedName.endsWith('jfif') ||
                changedName.match(UUIDRegexp) !== null
              ) {
                // 文件名是 UUID
                data.uuid = true
              }
            }
            if (detail.state && detail.state.current === 'complete') {
              msg = 'downloaded'
            }
            if (detail.error && detail.error.current) {
              msg = 'download_err'
              err = detail.error.current
              const idIndex = dlIndex[data.tabId].findIndex((val) => {
                val === data.id
              })
              dlIndex[data.tabId][idIndex] = '' // 从任务列表里删除它，以便前台重试下载
            }
            // 返回信息
            if (msg) {
              chrome.tabs.sendMessage(data.tabId, { msg, data, err })
              // 清除这个任务的数据
              dlData[detail.id] = null
            }
          }
        })

        /***/
      },

    /******/
  }
)
//# sourceMappingURL=background.js.map
