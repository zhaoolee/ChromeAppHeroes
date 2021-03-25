;(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == 'function' && require
        if (!u && a) return a(o, !0)
        if (i) return i(o, !0)
        var f = new Error("Cannot find module '" + o + "'")
        throw ((f.code = 'MODULE_NOT_FOUND'), f)
      }
      var l = (n[o] = { exports: {} })
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e]
          return s(n ? n : e)
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      )
    }
    return n[o].exports
  }
  var i = typeof require == 'function' && require
  for (var o = 0; o < r.length; o++) s(r[o])
  return s
})(
  {
    1: [
      function (require, module, exports) {
        /* global require, module, exports, saveAs */
        ;(function () {
          'use strict'

          var console = require('./js/util/console')()
          var slugify = require('./js/util/slugify')

          require('./js/util/handlebar-helpers')

          var templateManagers = {
            'idpf-wasteland': require('../src/js/template-builders/idpf-wasteland-builder.js')
              .builder,
            lightnovel: require('../src/js/template-builders/lightnovel-builder.js')
              .builder,
          }

          var EpubMaker = function () {
            var self = this
            var epubConfig = {
              toc: [],
              landmarks: [],
              sections: [],
              stylesheet: {},
              additionalFiles: [],
              options: {},
            }

            this.withUuid = function (uuid) {
              epubConfig.uuid = uuid
              return self
            }

            this.withTemplate = function (templateName) {
              epubConfig.templateName = templateName
              return self
            }

            this.withTitle = function (title) {
              epubConfig.title = title
              epubConfig.slug = slugify(title)
              return self
            }

            this.withLanguage = function (lang) {
              epubConfig.lang = lang
              return self
            }

            this.withAuthor = function (fullName) {
              epubConfig.author = fullName
              return self
            }

            this.withPublisher = function (publisher) {
              epubConfig.publisher = publisher
              return self
            }

            this.withModificationDate = function (modificationDate) {
              epubConfig.modificationDate = modificationDate.toISOString()
              epubConfig.modificationDateYMD = epubConfig.modificationDate.substr(
                0,
                10
              )
              return self
            }

            this.withRights = function (rightsConfig) {
              epubConfig.rights = rightsConfig
              return self
            }

            this.withCover = function (coverUrl, rightsConfig) {
              epubConfig.coverUrl = coverUrl
              epubConfig.coverRights = rightsConfig
              return self
            }

            this.withAttributionUrl = function (attributionUrl) {
              epubConfig.attributionUrl = attributionUrl
              return self
            }

            this.withStylesheetUrl = function (stylesheetUrl, replaceOriginal) {
              epubConfig.stylesheet = {
                url: stylesheetUrl,
                styles: '',
                replaceOriginal: replaceOriginal,
              }
              return self
            }

            this.withSection = function (section) {
              epubConfig.sections.push(section)
              Array.prototype.push.apply(epubConfig.toc, section.collectToc())
              Array.prototype.push.apply(
                epubConfig.landmarks,
                section.collectLandmarks()
              )
              return self
            }

            this.withAdditionalFile = function (fileUrl, folder, filename) {
              epubConfig.additionalFiles.push({
                url: fileUrl,
                folder: folder,
                filename: filename,
              })
              return self
            }

            this.withOption = function (key, value) {
              epubConfig.options[key] = value
              return self
            }

            this.makeEpub = function () {
              epubConfig.publicationDate = new Date().toISOString()
              epubConfig.publicationDateYMD = epubConfig.publicationDate.substr(
                0,
                10
              )
              return templateManagers[epubConfig.templateName]
                .make(epubConfig)
                .then(function (epubZip) {
                  console.info('generating epub for: ' + epubConfig.title)
                  var content = epubZip.generate({
                    type: 'blob',
                    mimeType: 'application/epub+zip',
                    compression: 'DEFLATE',
                  })
                  return content
                })
            }

            this.downloadEpub = function (callback, useTitle) {
              self.makeEpub().then(function (epubZipContent) {
                var filename
                if (useTitle) {
                  filename = epubConfig.title + '.epub'
                } else {
                  filename = epubConfig.slug + '.epub'
                }
                console.debug('saving "' + filename + '"...')
                if (callback && typeof callback === 'function') {
                  callback(epubZipContent, filename)
                }
                saveAs(epubZipContent, filename)
              })
            }
          }

          // epubtypes and descriptions, useful for vendors implementing a GUI
          EpubMaker.epubtypes = require('../src/js/epub-types.js')

          /**
           * @epubType Optional. Allows you to add specific epub type content such as [epub:type="titlepage"]
           * @id Optional, but required if section should be included in toc and / or landmarks
           * @content Optional. Should not be empty if there will be no subsections added to this section. Format: { title, content, renderTitle }
           */
          EpubMaker.Section = function (
            epubType,
            id,
            content,
            includeInToc,
            includeInLandmarks
          ) {
            var self = this
            this.epubType = epubType
            this.id = id
            this.content = content
            this.includeInToc = includeInToc
            this.includeInLandmarks = includeInLandmarks
            this.subSections = []

            if (content) {
              content.renderTitle = content.renderTitle !== false // 'undefined' should default to true
            }

            this.withSubSection = function (subsection) {
              self.subSections.push(subsection)
              return self
            }

            this.collectToc = function () {
              return collectSections(this, 'includeInToc')
            }

            this.collectLandmarks = function () {
              return collectSections(this, 'includeInLandmarks')
            }

            function collectSections(section, prop) {
              var sections = section[prop] ? [section] : []
              for (var i = 0; i < section.subSections.length; i++) {
                Array.prototype.push.apply(
                  sections,
                  collectSections(section.subSections[i], prop)
                )
              }
              return sections
            }
          }

          // manage dependency exports
          if (typeof module !== 'undefined') {
            module.exports.EpubMaker = EpubMaker
          } else if (typeof exports !== 'undefined') {
            exports.EpubMaker = EpubMaker
          } else if (typeof window === 'undefined') {
            throw new Error(
              'unable to expose EpubMaker: no module, exports object and no global window detected'
            )
          }

          if (typeof window !== 'undefined') {
            window.EpubMaker = EpubMaker
          }
        })()
      },
      {
        '../src/js/epub-types.js': 4,
        '../src/js/template-builders/idpf-wasteland-builder.js': 5,
        '../src/js/template-builders/lightnovel-builder.js': 6,
        './js/util/console': 8,
        './js/util/handlebar-helpers': 9,
        './js/util/slugify': 10,
      },
    ],
    2: [
      function (require, module, exports) {
        // shim for using process in browser
        var process = (module.exports = {})

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout
        var cachedClearTimeout

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined')
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined')
        }
        ;(function () {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout
            } else {
              cachedSetTimeout = defaultSetTimout
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout
            } else {
              cachedClearTimeout = defaultClearTimeout
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout
          }
        })()
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0)
          }
          // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout
            return setTimeout(fun, 0)
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0)
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0)
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0)
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker)
          }
          // if clearTimeout wasn't available but was latter defined
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout
            return clearTimeout(marker)
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker)
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker)
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker)
            }
          }
        }
        var queue = []
        var draining = false
        var currentQueue
        var queueIndex = -1

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return
          }
          draining = false
          if (currentQueue.length) {
            queue = currentQueue.concat(queue)
          } else {
            queueIndex = -1
          }
          if (queue.length) {
            drainQueue()
          }
        }

        function drainQueue() {
          if (draining) {
            return
          }
          var timeout = runTimeout(cleanUpNextTick)
          draining = true

          var len = queue.length
          while (len) {
            currentQueue = queue
            queue = []
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run()
              }
            }
            queueIndex = -1
            len = queue.length
          }
          currentQueue = null
          draining = false
          runClearTimeout(timeout)
        }

        process.nextTick = function (fun) {
          var args = new Array(arguments.length - 1)
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i]
            }
          }
          queue.push(new Item(fun, args))
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue)
          }
        }

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun
          this.array = array
        }
        Item.prototype.run = function () {
          this.fun.apply(null, this.array)
        }
        process.title = 'browser'
        process.browser = true
        process.env = {}
        process.argv = []
        process.version = '' // empty string to avoid regexp issues
        process.versions = {}

        function noop() {}

        process.on = noop
        process.addListener = noop
        process.once = noop
        process.off = noop
        process.removeListener = noop
        process.removeAllListeners = noop
        process.emit = noop
        process.prependListener = noop
        process.prependOnceListener = noop

        process.listeners = function (name) {
          return []
        }

        process.binding = function (name) {
          throw new Error('process.binding is not supported')
        }

        process.cwd = function () {
          return '/'
        }
        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported')
        }
        process.umask = function () {
          return 0
        }
      },
      {},
    ],
    3: [
      function (require, module, exports) {
        ;(function (process) {
          /**
           * attempt of a simple defer/promise library for mobile development
           * @author Jonathan Gotti < jgotti at jgotti dot net>
           * @since 2012-10
           * @version 0.7.3
           */
          ;(function (undef) {
            'use strict'

            var nextTick,
              isFunc = function (f) {
                return typeof f === 'function'
              },
              isArray = function (a) {
                return Array.isArray ? Array.isArray(a) : a instanceof Array
              },
              isObjOrFunc = function (o) {
                return !!(o && (typeof o).match(/function|object/))
              },
              isNotVal = function (v) {
                return v === false || v === undef || v === null
              },
              slice = function (a, offset) {
                return [].slice.call(a, offset)
              },
              undefStr = 'undefined',
              tErr = typeof TypeError === undefStr ? Error : TypeError
            if (typeof process !== undefStr && process.nextTick) {
              nextTick = process.nextTick
            } else if (typeof MessageChannel !== undefStr) {
              var ntickChannel = new MessageChannel(),
                queue = []
              ntickChannel.port1.onmessage = function () {
                queue.length && queue.shift()()
              }
              nextTick = function (cb) {
                queue.push(cb)
                ntickChannel.port2.postMessage(0)
              }
            } else {
              nextTick = function (cb) {
                setTimeout(cb, 0)
              }
            }
            function rethrow(e) {
              nextTick(function () {
                throw e
              })
            }

            /**
             * @typedef deferred
             * @property {promise} promise
             * @method resolve
             * @method fulfill
             * @method reject
             */

            /**
             * @typedef {function} fulfilled
             * @param {*} value promise resolved value
             * @returns {*} next promise resolution value
             */

            /**
             * @typedef {function} failed
             * @param {*} reason promise rejection reason
             * @returns {*} next promise resolution value or rethrow the reason
             */

            //-- defining unenclosed promise methods --//
            /**
             * same as then without failed callback
             * @param {fulfilled} fulfilled callback
             * @returns {promise} a new promise
             */
            function promise_success(fulfilled) {
              return this.then(fulfilled, undef)
            }

            /**
             * same as then with only a failed callback
             * @param {failed} failed callback
             * @returns {promise} a new promise
             */
            function promise_error(failed) {
              return this.then(undef, failed)
            }

            /**
             * same as then but fulfilled callback will receive multiple parameters when promise is fulfilled with an Array
             * @param {fulfilled} fulfilled callback
             * @param {failed} failed callback
             * @returns {promise} a new promise
             */
            function promise_apply(fulfilled, failed) {
              return this.then(function (a) {
                return isFunc(fulfilled)
                  ? fulfilled.apply(null, isArray(a) ? a : [a])
                  : defer.onlyFuncs
                  ? a
                  : fulfilled
              }, failed || undef)
            }

            /**
             * cleanup method which will be always executed regardless fulfillment or rejection
             * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
             *                      when the promise is not pending anymore
             * @returns {promise} the same promise untouched
             */
            function promise_ensure(cb) {
              function _cb() {
                cb()
              }
              this.then(_cb, _cb)
              return this
            }

            /**
             * take a single callback which wait for an error as first parameter. other resolution values are passed as with the apply/spread method
             * @param {function} cb a callback called regardless of the fulfillment or rejection of the promise which will be called
             *                      when the promise is not pending anymore with error as first parameter if any as in node style
             *                      callback. Rest of parameters will be applied as with the apply method.
             * @returns {promise} a new promise
             */
            function promise_nodify(cb) {
              return this.then(
                function (a) {
                  return isFunc(cb)
                    ? cb.apply(
                        null,
                        isArray(a)
                          ? a.splice(0, 0, undefined) && a
                          : [undefined, a]
                      )
                    : defer.onlyFuncs
                    ? a
                    : cb
                },
                function (e) {
                  return cb(e)
                }
              )
            }

            /**
             *
             * @param {function} [failed] without parameter will only rethrow promise rejection reason outside of the promise library on next tick
             *                            if passed a failed method then will call failed on rejection and throw the error again if failed didn't
             * @returns {promise} a new promise
             */
            function promise_rethrow(failed) {
              return this.then(
                undef,
                failed
                  ? function (e) {
                      failed(e)
                      throw e
                    }
                  : rethrow
              )
            }

            /**
             * @param {boolean} [alwaysAsync] if set force the async resolution for this promise independantly of the D.alwaysAsync option
             * @returns {deferred} defered object with property 'promise' and methods reject,fulfill,resolve (fulfill being an alias for resolve)
             */
            var defer = function (alwaysAsync) {
              var alwaysAsyncFn = (
                  undef !== alwaysAsync ? alwaysAsync : defer.alwaysAsync
                )
                  ? nextTick
                  : function (fn) {
                      fn()
                    },
                status = 0, // -1 failed | 1 fulfilled
                pendings = [],
                value,
                /**
                 * @typedef promise
                 */
                _promise = {
                  /**
                   * @param {fulfilled|function} fulfilled callback
                   * @param {failed|function} failed callback
                   * @returns {promise} a new promise
                   */
                  then: function (fulfilled, failed) {
                    var d = defer()
                    pendings.push([
                      function (value) {
                        try {
                          if (isNotVal(fulfilled)) {
                            d.resolve(value)
                          } else {
                            d.resolve(
                              isFunc(fulfilled)
                                ? fulfilled(value)
                                : defer.onlyFuncs
                                ? value
                                : fulfilled
                            )
                          }
                        } catch (e) {
                          d.reject(e)
                        }
                      },
                      function (err) {
                        if (
                          isNotVal(failed) ||
                          (!isFunc(failed) && defer.onlyFuncs)
                        ) {
                          d.reject(err)
                        }
                        if (failed) {
                          try {
                            d.resolve(isFunc(failed) ? failed(err) : failed)
                          } catch (e) {
                            d.reject(e)
                          }
                        }
                      },
                    ])
                    status !== 0 && alwaysAsyncFn(execCallbacks)
                    return d.promise
                  },

                  success: promise_success,

                  error: promise_error,
                  otherwise: promise_error,

                  apply: promise_apply,
                  spread: promise_apply,

                  ensure: promise_ensure,

                  nodify: promise_nodify,

                  rethrow: promise_rethrow,

                  isPending: function () {
                    return status === 0
                  },

                  getStatus: function () {
                    return status
                  },
                }
              _promise.toSource = _promise.toString = _promise.valueOf = function () {
                return value === undef ? this : value
              }

              function execCallbacks() {
                /*jshint bitwise:false*/
                if (status === 0) {
                  return
                }
                var cbs = pendings,
                  i = 0,
                  l = cbs.length,
                  cbIndex = ~status ? 0 : 1,
                  cb
                pendings = []
                for (; i < l; i++) {
                  ;(cb = cbs[i][cbIndex]) && cb(value)
                }
              }

              /**
               * fulfill deferred with given value
               * @param {*} val
               * @returns {deferred} this for method chaining
               */
              function _resolve(val) {
                var done = false
                function once(f) {
                  return function (x) {
                    if (done) {
                      return undefined
                    } else {
                      done = true
                      return f(x)
                    }
                  }
                }
                if (status) {
                  return this
                }
                try {
                  var then = isObjOrFunc(val) && val.then
                  if (isFunc(then)) {
                    // managing a promise
                    if (val === _promise) {
                      throw new tErr("Promise can't resolve itself")
                    }
                    then.call(val, once(_resolve), once(_reject))
                    return this
                  }
                } catch (e) {
                  once(_reject)(e)
                  return this
                }
                alwaysAsyncFn(function () {
                  value = val
                  status = 1
                  execCallbacks()
                })
                return this
              }

              /**
               * reject deferred with given reason
               * @param {*} Err
               * @returns {deferred} this for method chaining
               */
              function _reject(Err) {
                status ||
                  alwaysAsyncFn(function () {
                    try {
                      throw Err
                    } catch (e) {
                      value = e
                    }
                    status = -1
                    execCallbacks()
                  })
                return this
              }
              return /**@type deferred */ {
                promise: _promise,
                resolve: _resolve,
                fulfill: _resolve, // alias
                reject: _reject,
              }
            }

            defer.deferred = defer.defer = defer
            defer.nextTick = nextTick
            defer.alwaysAsync = true // setting this will change default behaviour. use it only if necessary as asynchronicity will force some delay between your promise resolutions and is not always what you want.
            /**
             * setting onlyFuncs to false will break promises/A+ conformity by allowing you to pass non undefined/null values instead of callbacks
             * instead of just ignoring any non function parameters to then,success,error... it will accept non null|undefined values.
             * this will allow you shortcuts like promise.then('val','handled error'')
             * to be equivalent of promise.then(function(){ return 'val';},function(){ return 'handled error'})
             */
            defer.onlyFuncs = true

            /**
             * return a fulfilled promise of given value (always async resolution)
             * @param {*} value
             * @returns {promise}
             */
            defer.resolved = defer.fulfilled = function (value) {
              return defer(true).resolve(value).promise
            }

            /**
             * return a rejected promise with given reason of rejection (always async rejection)
             * @param {*} reason
             * @returns {promise}
             */
            defer.rejected = function (reason) {
              return defer(true).reject(reason).promise
            }

            /**
             * return a promise with no resolution value which will be resolved in time ms (using setTimeout)
             * @param {int} [time] in ms default to 0
             * @returns {promise}
             */
            defer.wait = function (time) {
              var d = defer()
              setTimeout(d.resolve, time || 0)
              return d.promise
            }

            /**
             * return a promise for the return value of function call which will be fulfilled in delay ms or rejected if given fn throw an error
             * @param {*} fn to execute or value to return after given delay
             * @param {int} [delay] in ms default to 0
             * @returns {promise}
             */
            defer.delay = function (fn, delay) {
              var d = defer()
              setTimeout(function () {
                try {
                  d.resolve(isFunc(fn) ? fn.apply(null) : fn)
                } catch (e) {
                  d.reject(e)
                }
              }, delay || 0)
              return d.promise
            }

            /**
             * if given value is not a promise return a fulfilled promise resolved to given value
             * @param {*} promise a value or a promise
             * @returns {promise}
             */
            defer.promisify = function (promise) {
              if (promise && isFunc(promise.then)) {
                return promise
              }
              return defer.resolved(promise)
            }

            function multiPromiseResolver(callerArguments, returnPromises) {
              var promises = slice(callerArguments)
              if (promises.length === 1 && isArray(promises[0])) {
                if (!promises[0].length) {
                  return defer.fulfilled([])
                }
                promises = promises[0]
              }
              var args = [],
                d = defer(),
                c = promises.length
              if (!c) {
                d.resolve(args)
              } else {
                var resolver = function (i) {
                  promises[i] = defer.promisify(promises[i])
                  promises[i].then(
                    function (v) {
                      args[i] = returnPromises ? promises[i] : v
                      --c || d.resolve(args)
                    },
                    function (e) {
                      if (!returnPromises) {
                        d.reject(e)
                      } else {
                        args[i] = promises[i]
                        --c || d.resolve(args)
                      }
                    }
                  )
                }
                for (var i = 0, l = c; i < l; i++) {
                  resolver(i)
                }
              }
              return d.promise
            }

            function sequenceZenifier(promise, zenValue) {
              return promise.then(
                isFunc(zenValue)
                  ? zenValue
                  : function () {
                      return zenValue
                    }
              )
            }
            function sequencePromiseResolver(callerArguments) {
              var funcs = slice(callerArguments)
              if (funcs.length === 1 && isArray(funcs[0])) {
                funcs = funcs[0]
              }
              var d = defer(),
                i = 0,
                l = funcs.length,
                promise = defer.resolved()
              for (; i < l; i++) {
                promise = sequenceZenifier(promise, funcs[i])
              }
              d.resolve(promise)
              return d.promise
            }

            /**
             * return a promise for all given promises / values.
             * the returned promises will be fulfilled with a list of resolved value.
             * if any given promise is rejected then on the first rejection the returned promised will be rejected with the same reason
             * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
             * @returns {promise} of a list of given promise resolution value
             */
            defer.all = function () {
              return multiPromiseResolver(arguments, false)
            }

            /**
             * return an always fulfilled promise of array<promise> list of promises/values regardless they resolve fulfilled or rejected
             * @param {array|...*} [promise] can be a single array of promise/values as first parameter or a list of direct parameters promise/value
             *                     (non promise values will be promisified)
             * @returns {promise} of the list of given promises
             */
            defer.resolveAll = function () {
              return multiPromiseResolver(arguments, true)
            }

            /**
             * execute given function in sequence passing their returned values to the next one in sequence.
             * You can pass values or promise instead of functions they will be passed in the sequence as if a function returned them.
             * if any function throw an error or a rejected promise the final returned promise will be rejected with that reason.
             * @param {array|...*} [function] list of function to call in sequence receiving previous one as a parameter
             *                     (non function values will be treated as if returned by a function)
             * @returns {promise} of the list of given promises
             */
            defer.sequence = function () {
              return sequencePromiseResolver(arguments)
            }

            /**
             * transform a typical nodejs async method awaiting a callback as last parameter, receiving error as first parameter to a function that
             * will return a promise instead. the returned promise will resolve with normal callback value minus the first error parameter on
             * fulfill and will be rejected with that error as reason in case of error.
             * @param {object} [subject] optional subject of the method to encapsulate
             * @param {function} fn the function to encapsulate if the normal callback should receive more than a single parameter (minus the error)
             *                      the promise will resolve with the list or parameters as fulfillment value. If only one parameter is sent to the
             *                      callback then it will be used as the resolution value.
             * @returns {Function}
             */
            defer.nodeCapsule = function (subject, fn) {
              if (!fn) {
                fn = subject
                subject = void 0
              }
              return function () {
                var d = defer(),
                  args = slice(arguments)
                args.push(function (err, res) {
                  err
                    ? d.reject(err)
                    : d.resolve(
                        arguments.length > 2 ? slice(arguments, 1) : res
                      )
                })
                try {
                  fn.apply(subject, args)
                } catch (e) {
                  d.reject(e)
                }
                return d.promise
              }
            }

            /*global define*/
            if (typeof define === 'function' && define.amd) {
              define('D.js', [], function () {
                return defer
              })
            } else if (typeof module !== undefStr && module.exports) {
              module.exports = defer
            } else if (typeof window !== undefStr) {
              var oldD = window.D
              /**
               * restore global D variable to its previous value and return D to the user
               * @returns {Function}
               */
              defer.noConflict = function () {
                window.D = oldD
                return defer
              }
              window.D = defer
            }
          })()
        }.call(this, require('_process')))
      },
      { _process: 2 },
    ],
    4: [
      function (require, module, exports) {
        /* global module */
        ;(function () {
          'use strict'

          // source: http://www.idpf.org/epub/vocab/structure/epub-vocab-structure-20150826.html
          var epubtypes = [
            {
              name: 'abstract',
              group: 'Front Matter',
              description:
                'A short summary of the principle ideas, concepts and conclusions of the work, or of a section or except within it.',
            },
            {
              name: 'foreword',
              group: 'Front Matter',
              description:
                "An introductory section that precedes the work, typically not written by the work's author.",
            },
            {
              name: 'preface',
              group: 'Front Matter',
              description:
                "An introductory section that precedes the work, typically written by the work's author.",
            },
            {
              name: 'introduction',
              group: 'Front Matter',
              description:
                "A section in the beginning of the work, typically introducing the reader to the scope or nature of the work's content.",
            },
            {
              name: 'preamble',
              group: 'Front Matter',
              description:
                "A section in the beginning of the work, typically containing introductory and/or explanatory prose regarding the scope or nature of the work's content",
            },
            {
              name: 'epigraph',
              group: 'Front Matter',
              description:
                'A quotation that is pertinent but not integral to the text.',
            },
            {
              name: 'non-specific frontmatter',
              group: 'Front Matter',
              description:
                'Content placed in the frontmatter section, but which has no specific semantic meaning.',
            },
            {
              name: 'part',
              group: 'Body Matter',
              description:
                'An introductory section that sets the background to a story, typically part of the narrative.',
            },
            {
              name: 'chapter',
              group: 'Body Matter',
              description:
                'An introductory section that sets the background to a story, typically part of the narrative.',
            },
            {
              name: 'prologue',
              group: 'Body Matter',
              description:
                'An introductory section that sets the background to a story, typically part of the narrative.',
            },
            {
              name: 'conclusion',
              group: 'Body Matter',
              description:
                'An ending section that typically wraps up the work.',
            },
            {
              name: 'epilogue',
              group: 'Body Matter',
              description:
                'A concluding section that is typically written from a later point in time than the main story, although still part of the narrative.',
            },
            {
              name: 'afterword',
              group: 'Back Matter',
              description:
                'A closing statement from the author or a person of importance to the story, typically providing insight into how the story came to be written, its significance or related events that have transpired since its timeline.',
            },
            {
              name: 'non-specific backmatter',
              group: 'Back Matter',
              description:
                'Content placed in the backmatter section, but which has no specific semantic meaning.',
            },
            {
              name: 'rearnote',
              group: 'Back Matter',
              description:
                'A note appearing in the rear (backmatter) of the work, or at the end of a section.',
            },
          ]

          var groups = {}
          for (var i = 0; i < epubtypes.length; i++) {
            var group = epubtypes[i].group
            ;(groups[group] || (groups[group] = [])).push(epubtypes[i])
          }

          function getGroup(epubtype) {
            return {
              abstract: 'frontmatter',
              foreword: 'frontmatter',
              preface: 'frontmatter',
              introduction: 'frontmatter',
              preamble: 'frontmatter',
              epigraph: 'frontmatter',
              'non-specific frontmatter': 'frontmatter',
              part: 'bodymatter',
              chapter: 'bodymatter',
              prologue: 'bodymatter',
              conclusion: 'bodymatter',
              epilogue: 'bodymatter',
              afterword: 'backmatter',
              'non-specific backmatter': 'backmatter',
              rearnote: 'backmatter',
            }[epubtype]
          }

          module.exports = {
            types: epubtypes,
            groups: groups,
            getGroup: getGroup,
          }
        })()
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        /* global module, require, exports, JSZip, JSZipUtils, Handlebars, html_beautify */
        ;(function () {
          'use strict'

          var D = require('d.js')
          var console = require('../../js/util/console')()
          var ajax = require('../../js/util/ajax')

          var templates = {
            mimetype: 'application/epub+zip',
            container:
              '<?xml version="1.0" encoding="UTF-8"?>\n<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">\n	<rootfiles>\n		<rootfile full-path="EPUB/{{slug}}.opf" 	\n			media-type="application/oebps-package+xml"/>\n	</rootfiles>\n</container>',
            opf:
              '<?xml version="1.0" encoding="UTF-8"?>\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid" xml:lang="en-US" prefix="cc: http://creativecommons.org/ns#">\n    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n        <dc:identifier id="uid">{{uuid}}</dc:identifier>\n        <dc:title>{{title}}</dc:title>\n        <dc:creator>{{author}}</dc:creator>\n        <dc:language>{{lang}}</dc:language>\n        <dc:date>{{publicationDate}}</dc:date>\n        <meta property="dcterms:modified">{{modificationDate}}</meta>\n        {{#if rights}}\n            <!-- rights expressions for the work as a whole -->\n            {{#if rights.description}}<dc:rights>{{rights.description}}</dc:rights>{{/if}}\n            {{#if rights.license}}<link rel="cc:license" href="{{rights.license}}"/>{{/if}}\n            {{#if rights.attributionUrl}}<meta property="cc:attributionURL">{{attributionUrl}}</meta>{{/if}}\n        {{/if}}\n        {{#if coverUrl}}\n            {{#if coverRights}}\n                <!-- rights expression for the cover image -->       \n                {{#if coverRights.license}}<link rel="cc:license" refines="#cover" href="{{coverRights.license}}" />{{/if}}\n                {{#if coverRights.attributionUrl}}<link rel="cc:attributionURL" refines="#cover" href="{{coverRights.attributionUrl}}" />{{/if}}\n            {{/if}}\n                <!-- cover meta element included for 2.0 reading system compatibility: -->\n                <meta name="cover" content="cover"/>\n        {{/if}}\n    </metadata>\n    <manifest>\n        <item id="t1" href="{{slug}}-content.xhtml" media-type="application/xhtml+xml" />\n        <item id="nav" href="{{slug}}-nav.xhtml" properties="nav" media-type="application/xhtml+xml" />\n        {{#if coverUrl}}\n        <item id="cover" href="{{slug}}-cover.{{extension coverUrl}}" media-type="{{mimetype coverUrl}}" properties="cover-image" />\n        {{/if}}\n        <item id="css" href="{{slug}}.css" media-type="text/css" />\n        <!-- ncx included for 2.0 reading system compatibility: -->\n        <item id="ncx" href="{{slug}}.ncx" media-type="application/x-dtbncx+xml" />\n    </manifest>\n    <spine toc="ncx">\n        <itemref idref="t1" />        \n    </spine>    \n</package>\n',
            ncx:
              '<?xml version="1.0" encoding="UTF-8"?>\n<ncx xmlns:ncx="http://www.daisy.org/z3986/2005/ncx/" xmlns="http://www.daisy.org/z3986/2005/ncx/"\n    version="2005-1" xml:lang="en">\n    <head>\n        <meta name="dtb:uid" content="{{uuid}}"/>\n    </head>\n    <docTitle>\n        <text>{{title}}</text>\n    </docTitle>\n    <navMap>\n        <!-- 2.01 NCX: playOrder is optional -->\n		{{#each toc}}\n        <navPoint id="{{id}}">\n            <navLabel>\n                <text>{{content.title}}</text>\n            </navLabel>\n            <content src="{{../slug}}-content.xhtml#{{id}}"/>\n        </navPoint>\n		{{/each}}\n    </navMap>\n</ncx>\n',
            nav:
              '<?xml version="1.0" encoding="UTF-8"?>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"\n	xmlns:epub="http://www.idpf.org/2007/ops">\n	<head>\n		<meta charset="utf-8"></meta>		\n		<link rel="stylesheet" type="text/css" href="{{slug}}.css" class="day" title="day"/> \n	</head>\n	<body>\n		<nav epub:type="toc" id="toc">\n			<ol>\n				{{#each toc}}\n				<li><a href="{{../slug}}-content.xhtml#{{id}}">{{content.title}}</a></li>\n				{{/each}}\n			</ol>			\n		</nav>\n		<nav epub:type="landmarks">\n			<ol>\n				{{#each landmarks}}\n				<li><a epub:type="{{epubType}}" href="{{../slug}}-content.xhtml#{{id}}">{{#if content.title}}{{content.title}}{{else}}{{epubType}}{{/if}}</a></li>\n				{{/each}}\n			</ol>\n		</nav>\n	</body>\n</html>\n',
            css:
              '@charset "UTF-8";\n@namespace "http://www.w3.org/1999/xhtml";\n@namespace epub "http://www.idpf.org/2007/ops";\n\nbody {\n    margin-left: 6em;\n    margin-right: 2em;\n    color: black;\n    font-family: times, \'times new roman\', serif;\n    background-color: rgb(255,255,245);\n    line-height: 1.5em;\n}\n\nh2 {\n    margin-top: 5em;\n    margin-bottom: 2em;\n}\n\nh3 {\n    margin-top: 3em;\n}\n\n.linegroup {\n    margin-top: 1.6em;\n}\n\nspan.lnum {\n    float: right;\n    color: gray;\n    font-size : 90%;\n}\n\na.noteref {\n    color: rgb(215,215,195);\n    text-decoration: none;\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n}\n\nsection#rearnotes a {\n    color: black;\n    text-decoration: none;\n    border-bottom : 1px dotted gray;\n    margin-right: 0.8em;\n}\n\n.indent {\n    padding-left: 3em;\n}\n\n.indent2 {\n    padding-left: 5em;\n}\n\n*[epub|type~=\'dedication\'] {\n    padding-left: 2em;\n}\n',
            content:
              '<?xml version="1.0" encoding="UTF-8"?>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" xmlns:epub="http://www.idpf.org/2007/ops">\n	<head>\n		<meta charset="utf-8"></meta>\n		<title>{{title}}</title>\n		<link rel="stylesheet" type="text/css" href="{{slug}}.css" class="day" title="day"/> \n	</head>\n	<body>\n		{{#each sections}}{{> sectionTemplate}}{{/each}}\n	</body>\n</html>\n',
            sectionsTemplate:
              '{{!-- strange if-construction, but this is a workaround for gulp-js-html-inject, whose minifier wreaks havoc otherwise --}}\n{{#if epubType}}<section epub:type="{{epubType}}" id="{{id}}">{{else}}<section id="{{id}}">{{/if}}\n\n    {{#if content.renderTitle}}<h2>{{content.title}}</h2>{{/if}} \n    {{#if content.content}}{{{content.content}}}{{/if}}\n    \n    {{#each subSections}} {{> sectionTemplate}} {{/each}}\n    \n{{#if epubType}}</section>{{else}}</section>{{/if}}',
          }

          var Builder = function () {
            this.make = function (epubConfig) {
              console.debug('building epub', epubConfig)
              var zip = new JSZip()

              var deferred = D()
              D.all(
                addMimetype(zip),
                addContainerInfo(zip, epubConfig),
                addManifestOpf(zip, epubConfig),
                addCover(zip, epubConfig),
                addEpub2Nav(zip, epubConfig),
                addEpub3Nav(zip, epubConfig),
                addStylesheets(zip, epubConfig),
                addContent(zip, epubConfig)
              ).then(function () {
                deferred.resolve(zip)
              })

              return deferred.promise
            }

            function addMimetype(zip) {
              zip.file('mimetype', templates.mimetype)
            }

            function addContainerInfo(zip, epubConfig) {
              zip
                .folder('META-INF')
                .file('container.xml', compile(templates.container, epubConfig))
            }

            function addManifestOpf(zip, epubConfig) {
              zip
                .folder('EPUB')
                .file(
                  epubConfig.slug + '.opf',
                  compile(templates.opf, epubConfig)
                )
            }

            function addCover(zip, epubConfig) {
              var deferred = D()

              if (epubConfig.coverUrl) {
                JSZipUtils.getBinaryContent(
                  epubConfig.coverUrl,
                  function (err, data) {
                    if (!err) {
                      var ext = epubConfig.coverUrl.substr(
                        epubConfig.coverUrl.lastIndexOf('.') + 1
                      )
                      zip
                        .folder('EPUB')
                        .file(epubConfig.slug + '-cover.' + ext, data, {
                          binary: true,
                        })
                      deferred.resolve('')
                    } else {
                      deferred.reject(err)
                    }
                  }
                )
              } else {
                deferred.resolve(true)
              }
              return deferred.promise
            }

            function addEpub2Nav(zip, epubConfig) {
              zip
                .folder('EPUB')
                .file(
                  epubConfig.slug + '.ncx',
                  compile(templates.ncx, epubConfig)
                )
            }

            function addEpub3Nav(zip, epubConfig) {
              zip
                .folder('EPUB')
                .file(
                  epubConfig.slug + '-nav.xhtml',
                  compile(templates.nav, epubConfig)
                )
            }

            function addStylesheets(zip, epubConfig) {
              var deferred = D()
              if (epubConfig.stylesheet.url) {
                return ajax(epubConfig.stylesheet.url).then(function (result) {
                  epubConfig.styles = result.data
                  compileAndAddCss()
                })
              } else {
                compileAndAddCss()
              }
              return deferred.promise

              function compileAndAddCss() {
                var styles = {
                  original: epubConfig.stylesheet.replaceOriginal
                    ? ''
                    : templates.css,
                  custom: epubConfig.styles,
                }
                zip
                  .folder('EPUB')
                  .file(
                    epubConfig.slug + '.css',
                    compile('{{{original}}}{{{custom}}}', styles, true)
                  )
                deferred.resolve(true)
              }
            }

            function addContent(zip, epubConfig) {
              Handlebars.registerPartial(
                'sectionTemplate',
                templates.sectionsTemplate
              )
              zip
                .folder('EPUB')
                .file(
                  epubConfig.slug + '-content.xhtml',
                  compile(templates.content, epubConfig)
                )
            }

            function compile(template, content, skipFormatting) {
              return formatHTML(Handlebars.compile(template)(content))

              function formatHTML(htmlstr) {
                /*jslint camelcase:false*/
                return skipFormatting || typeof html_beautify === 'undefined'
                  ? htmlstr
                  : html_beautify(htmlstr, {
                      end_with_newline: false,
                      indent_char: '\t',
                      indent_inner_html: true,
                      indent_size: '1',
                      preserve_newlines: false,
                      wrap_line_length: '0',
                      unformatted: [],
                      selector_separator_newline: false,
                      newline_between_rules: true,
                    })
                /*jslint camelcase:true*/
              }
            }
          }

          // manage dependency exports
          if (typeof module !== 'undefined') {
            module.exports.builder = new Builder()
          } else if (typeof exports !== 'undefined') {
            exports.builder = new Builder()
          } else if (typeof window === 'undefined') {
            throw new Error(
              'unable to expose module: no module, exports object and no global window detected'
            )
          }

          if (typeof window !== 'undefined') {
            window.epubMaker = new Builder()
          }
        })()
      },
      { '../../js/util/ajax': 7, '../../js/util/console': 8, 'd.js': 3 },
    ],
    6: [
      function (require, module, exports) {
        /* global module, require, exports, JSZip, JSZipUtils, Handlebars, html_beautify */
        ;(function () {
          'use strict'

          var D = require('d.js')
          var console = require('../../js/util/console')()
          var ajax = require('../../js/util/ajax')

          var templates = {
            mimetype: 'application/epub+zip',
            container:
              '<?xml version="1.0" encoding="UTF-8"?>\n<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">\n	<rootfiles>\n		<rootfile full-path="EPUB/lightnovel.opf"\n			media-type="application/oebps-package+xml"/>\n	</rootfiles>\n</container>',
            opf:
              '<?xml version="1.0" encoding="UTF-8"?>\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid" xml:lang="en-US" prefix="cc: http://creativecommons.org/ns#">\n    <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n        <dc:identifier id="uid">{{uuid}}</dc:identifier>\n        <dc:title>{{title}}</dc:title>\n        <dc:creator>{{author}}</dc:creator>\n        <dc:language>{{lang}}</dc:language>\n        <dc:date>{{publicationDate}}</dc:date>\n        <meta property="dcterms:modified">{{modificationDate}}</meta>\n        {{#if rights}}\n            <!-- rights expressions for the work as a whole -->\n            {{#if rights.description}}<dc:rights>{{rights.description}}</dc:rights>{{/if}}\n            {{#if rights.license}}<link rel="cc:license" href="{{rights.license}}"/>{{/if}}\n            {{#if rights.attributionUrl}}<meta property="cc:attributionURL">{{attributionUrl}}</meta>{{/if}}\n        {{/if}}\n        {{#if coverUrl}}\n            {{#if coverRights}}\n                <!-- rights expression for the cover image -->       \n                {{#if coverRights.license}}<link rel="cc:license" refines="#cover" href="{{coverRights.license}}" />{{/if}}\n                {{#if coverRights.attributionUrl}}<link rel="cc:attributionURL" refines="#cover" href="{{coverRights.attributionUrl}}" />{{/if}}\n            {{/if}}\n                <!-- cover meta element included for 2.0 reading system compatibility: -->\n                <meta name="cover" content="cover"/>\n        {{/if}}\n    </metadata>\n    <manifest>\n        {{#each sections}}{{> sectionsOPFManifestTemplate}}{{/each}}\n        <item id="nav" href="nav.html" properties="nav" media-type="application/xhtml+xml" />\n        {{#each additionalFiles}}\n        <item id="{{filename}}" href="{{folder}}/{{filename}}" media-type="{{mimetype filename}}" />\n        {{/each}}\n        {{#if coverUrl}}\n        <item id="cover" href="images/{{options.coverFilename}}" media-type="{{mimetype options.coverFilename}}" properties="cover-image" />\n        {{/if}}\n        <item id="css" href="css/main.css" media-type="text/css" />\n        <!-- ncx included for 2.0 reading system compatibility: -->\n        <item id="ncx" href="lightnovel.ncx" media-type="application/x-dtbncx+xml" />\n    </manifest>\n    <spine toc="ncx">\n        <itemref idref="nav" />\n        {{#each sections}}{{> sectionsOPFSpineTemplate}}{{/each}}\n    </spine>\n    <guide>\n        <reference type="toc" href="nav.html"/>\n    </guide>\n</package>\n',
            ncx:
              '<?xml version="1.0" encoding="UTF-8"?>\n<ncx xmlns:ncx="http://www.daisy.org/z3986/2005/ncx/" xmlns="http://www.daisy.org/z3986/2005/ncx/"\n    version="2005-1" xml:lang="en">\n    <head>\n        <meta name="dtb:uid" content="{{uuid}}"/>\n    </head>\n    <docTitle>\n        <text>{{title}}</text>\n    </docTitle>\n    <docAuthor>\n        <text>{{author}}</text>\n    </docAuthor>\n    <navMap>\n        <!-- 2.01 NCX: playOrder is optional -->\n        {{#each sections}}{{> sectionsNCXTemplate}}{{/each}}\n    </navMap>\n</ncx>\n',
            nav:
              '<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>{{options.tocName}}</title>\n        <link rel="stylesheet" type="text/css" href="css/main.css"> \n    </head>\n    <body>\n        <div class="cover divimage">\n            <img src="images/{{options.coverFilename}}" alt="Cover" />\n        </div>\n        <div class="center">\n            <h1>{{title}}</h1>\n            <div>{{author}}</div>\n            <div>{{publisher}}</div>\n            <div>{{modificationDateYMD}}</div>\n        </div>\n\n        <nav epub:type="toc" id="toc">\n            <ol>\n                {{#each sections}}{{> sectionsNavTemplate}}{{/each}}\n            </ol>\n        </nav>\n        <nav class="hidden" epub:type="landmarks">\n            <ol>\n                <li><a epub:type="toc" href="#toc">{{options.tocName}}</a></li>\n            </ol>\n        </nav>\n    </body>\n</html>\n',
            css:
              '@charset "UTF-8";\n@namespace "http://www.w3.org/1999/xhtml";\n@namespace epub "http://www.idpf.org/2007/ops";\n\nbody {\n    padding: 0%;\n    margin-top: 0%;\n    margin-bottom: 0%;\n    margin-left: 1%;\n    margin-right: 1%;\n    line-height: 130%;\n    text-align: justify;\n    background-color: rgb(255, 255, 245);\n}\n\ndiv {\n    margin: 0px;\n    padding: 0px;\n    line-height: 130%;\n    text-align: justify;\n}\n\np {\n    text-align: justify;\n    text-indent: 2em;\n    line-height: 130%;\n    margin-bottom: -0.8em;\n}\n\n.divimage {\n    page-break-after: always;\n}\n\n.cover {\n    width: 100%;\n    padding: 0px;\n}\n\n.center {\n    text-align: center;\n    margin-left: 0%;\n    margin-right: 0%;\n}\n\n.left {\n    text-align: center;\n    margin-left: 0%;\n    margin-right: 0%;\n}\n\n.right {\n    text-align: right;\n    margin-left: 0%;\n    margin-right: 0%;\n}\n\n.quote {\n    margin-top: 0%;\n    margin-bottom: 0%;\n    margin-left: 1em;\n    margin-right: 1em;\n    text-align: justify;\n}\n\n.hidden {\n    display: none;\n}\n\nh1 {\n    line-height: 130%;\n    text-align: center;\n    font-weight: bold;\n    font-size: xx-large;\n}\n\nh2 {\n    line-height: 130%;\n    text-align: center;\n    font-weight: bold;\n    font-size: x-large;\n}\n\nh3 {\n    line-height: 130%;\n    text-align: center;\n    font-weight: bold;\n    font-size: large;\n}\n\nh4 {\n    line-height: 130%;\n    text-align: center;\n    font-weight: bold;\n    font-size: medium;\n}\n\nh5 {\n    line-height: 130%;\n    text-align: center;\n    font-weight: bold;\n    font-size: small;\n}\n\nh6 {\n    line-height: 130%;\n    text-align: center;\n    font-weight: bold;\n    font-size: x-small;\n}\n',
            content:
              '<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>{{content.fullTitle}}</title>\n        <link rel="stylesheet" type="text/css" href="css/main.css"> \n    </head>\n    <body>\n        {{#if content.renderTitle}}<h2>{{content.title}}</h2>{{/if}} \n        {{#if content.content}}{{{content.content}}}{{/if}}\n    </body>\n</html>\n',
            autoToc:
              '<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>{{content.fullTitle}}</title>\n        <link rel="stylesheet" type="text/css" href="css/main.css"> \n    </head>\n    <body>\n        {{#if content.renderTitle}}<h2>{{content.title}}</h2>{{/if}}\n        {{#if subSections}}\n        <ol>\n            {{#each subSections}}{{> sectionsNavTemplate}}{{/each}}\n        </ol>\n        {{/if}}\n    </body>\n</html>\n',
            sectionsNavTemplate:
              '\n<li>\n    {{#if needPage}}\n    <a href="{{name}}.html">{{content.title}}</a>\n    {{/if}}\n    {{#if subSections}}\n    <ol>\n        {{#each subSections}}{{> sectionsNavTemplate}}{{/each}}\n    </ol>\n    {{/if}}\n</li>\n',
            sectionsNCXTemplate:
              '\n<navPoint id="{{name}}">\n    <navLabel>\n        <text>{{content.title}}</text>\n    </navLabel>\n    {{#if needPage}}\n    <content src="{{name}}.html"/>\n    {{/if}}\n    {{#each subSections}} {{> sectionsNCXTemplate}} {{/each}}\n</navPoint>\n',
            sectionsOPFManifestTemplate:
              '{{#if needPage}}\n<item id="{{name}}" href="{{name}}.html" media-type="application/xhtml+xml" />\n{{/if}}\n{{#each subSections}}{{> sectionsOPFManifestTemplate}}{{/each}}\n',
            sectionsOPFSpineTemplate:
              '<itemref idref="{{name}}" />\n{{#each subSections}}{{> sectionsOPFSpineTemplate}}{{/each}}\n',
          }

          var Builder = function () {
            this.make = function (epubConfig) {
              console.debug('building epub', epubConfig)
              var zip = new JSZip()

              var deferred = D()
              addAditionalInfo(epubConfig)
              D.all(
                addMimetype(zip),
                addContainerInfo(zip, epubConfig),
                addManifestOpf(zip, epubConfig),
                addCover(zip, epubConfig),
                addFiles(zip, epubConfig),
                addEpub2Nav(zip, epubConfig),
                addEpub3Nav(zip, epubConfig),
                addStylesheets(zip, epubConfig),
                addContent(zip, epubConfig)
              ).then(
                function () {
                  deferred.resolve(zip)
                },
                function (err) {
                  console.log(err)
                }
              )

              return deferred.promise
            }

            function addInfoSection(section, titlePrefix, namePrefix) {
              if (!section.content) {
                section.content = {}
              }
              if (titlePrefix) {
                titlePrefix = section.content.fullTitle =
                  titlePrefix + ' - ' + section.content.title
                namePrefix = section.name = namePrefix + '-' + section.rank
              } else {
                titlePrefix = section.content.fullTitle = section.content.title
                namePrefix = section.name = '' + section.rank
              }
              if (
                section.content.content ||
                section.content.renderTitle ||
                section.epubType == 'auto-toc'
              ) {
                section.needPage = true
              }
              for (var i = 0; i < section.subSections.length; i++) {
                section.subSections[i].rank = i
                addInfoSection(section.subSections[i], titlePrefix, namePrefix)
              }
            }

            function addAditionalInfo(epubConfig) {
              //Default options
              epubConfig.options.tocName = epubConfig.options.tocName || 'Menu'
              //Generate name and full title for each section/subsection
              for (var i = 0; i < epubConfig.sections.length; i++) {
                epubConfig.sections[i].rank = i
                addInfoSection(epubConfig.sections[i])
              }
            }

            function addMimetype(zip) {
              zip.file('mimetype', templates.mimetype)
            }

            function addContainerInfo(zip, epubConfig) {
              zip
                .folder('META-INF')
                .file('container.xml', compile(templates.container, epubConfig))
            }

            function addManifestOpf(zip, epubConfig) {
              Handlebars.registerPartial(
                'sectionsOPFManifestTemplate',
                templates.sectionsOPFManifestTemplate
              )
              Handlebars.registerPartial(
                'sectionsOPFSpineTemplate',
                templates.sectionsOPFSpineTemplate
              )
              zip
                .folder('EPUB')
                .file('lightnovel.opf', compile(templates.opf, epubConfig))
            }

            function addCover(zip, epubConfig) {
              var deferred = D()

              if (epubConfig.coverUrl) {
                JSZipUtils.getBinaryContent(
                  epubConfig.coverUrl,
                  function (err, data) {
                    if (!err) {
                      zip
                        .folder('EPUB')
                        .folder('images')
                        .file(epubConfig.options.coverFilename, data, {
                          binary: true,
                        })
                      deferred.resolve('')
                    } else {
                      deferred.reject(err)
                    }
                  }
                )
              } else {
                deferred.resolve(true)
              }
              return deferred.promise
            }

            function addEpub2Nav(zip, epubConfig) {
              Handlebars.registerPartial(
                'sectionsNCXTemplate',
                templates.sectionsNCXTemplate
              )
              zip
                .folder('EPUB')
                .file('lightnovel.ncx', compile(templates.ncx, epubConfig))
            }

            function addEpub3Nav(zip, epubConfig) {
              Handlebars.registerPartial(
                'sectionsNavTemplate',
                templates.sectionsNavTemplate
              )
              zip
                .folder('EPUB')
                .file('nav.html', compile(templates.nav, epubConfig))
            }

            function addStylesheets(zip, epubConfig) {
              var deferred = D()
              if (epubConfig.stylesheet.url) {
                return ajax(epubConfig.stylesheet.url).then(function (result) {
                  epubConfig.styles = result.data
                  compileAndAddCss()
                })
              } else {
                compileAndAddCss()
              }
              return deferred.promise

              function compileAndAddCss() {
                var styles = {
                  original: epubConfig.stylesheet.replaceOriginal
                    ? ''
                    : templates.css,
                  custom: epubConfig.styles,
                }
                zip
                  .folder('EPUB')
                  .folder('css')
                  .file(
                    'main.css',
                    compile('{{{original}}}{{{custom}}}', styles, true)
                  )
                deferred.resolve(true)
              }
            }

            function addFiles(zip, epubConfig) {
              var deferred_list = []
              for (var i = 0; i < epubConfig.additionalFiles.length; i++) {
                var file = epubConfig.additionalFiles[i]
                var deferred = new D()
                JSZipUtils.getBinaryContent(
                  file.url,
                  (function (file, deferred) {
                    return function (err, data) {
                      if (!err) {
                        zip
                          .folder('EPUB')
                          .folder(file.folder)
                          .file(file.filename, data, { binary: true })
                        deferred.resolve('')
                      } else {
                        deferred.reject(err)
                      }
                    }
                  })(file, deferred)
                )
                deferred_list.push(deferred.promise)
              }
              return D.all(deferred_list)
            }

            function addSection(zip, section) {
              if (section.needPage) {
                if (section.epubType == 'auto-toc') {
                  zip
                    .folder('EPUB')
                    .file(
                      section.name + '.html',
                      compile(templates.autoToc, section)
                    )
                } else {
                  zip
                    .folder('EPUB')
                    .file(
                      section.name + '.html',
                      compile(templates.content, section)
                    )
                }
              }
              for (var i = 0; i < section.subSections.length; i++) {
                addSection(zip, section.subSections[i])
              }
            }

            function addContent(zip, epubConfig) {
              for (var i = 0; i < epubConfig.sections.length; i++) {
                addSection(zip, epubConfig.sections[i])
              }
            }

            function compile(template, content, skipFormatting) {
              return formatHTML(Handlebars.compile(template)(content))

              function formatHTML(htmlstr) {
                /*jslint camelcase:false*/
                return skipFormatting || typeof html_beautify === 'undefined'
                  ? htmlstr
                  : html_beautify(htmlstr, {
                      end_with_newline: false,
                      indent_char: '\t',
                      indent_inner_html: true,
                      indent_size: '1',
                      preserve_newlines: false,
                      wrap_line_length: '0',
                      unformatted: [],
                      selector_separator_newline: false,
                      newline_between_rules: true,
                    })
                /*jslint camelcase:true*/
              }
            }
          }

          // manage dependency exports
          if (typeof module !== 'undefined') {
            module.exports.builder = new Builder()
          } else if (typeof exports !== 'undefined') {
            exports.builder = new Builder()
          } else if (typeof window === 'undefined') {
            throw new Error(
              'unable to expose module: no module, exports object and no global window detected'
            )
          }

          if (typeof window !== 'undefined') {
            window.epubMaker = new Builder()
          }
        })()
      },
      { '../../js/util/ajax': 7, '../../js/util/console': 8, 'd.js': 3 },
    ],
    7: [
      function (require, module, exports) {
        /* global module, ActiveXObject */
        ;(function () {
          'use strict'

          var D = require('d.js')
          var console = require('../../js/util/console')()

          module.exports = function ajax(url, data) {
            var deferred = D()
            try {
              var x = new (XMLHttpRequest || ActiveXObject)(
                'MSXML2.XMLHTTP.3.0'
              )
              x.open(data ? 'POST' : 'GET', url, 1)
              x.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
              x.setRequestHeader(
                'Content-type',
                'application/x-www-form-urlencoded'
              )
              x.onreadystatechange = function () {
                x.readyState > 3 &&
                  deferred.resolve({ data: x.responseText, xhr: x })
              }
              x.send(data)
            } catch (e) {
              console.error(e)
              deferred.reject(e)
            }
            return deferred.promise
          }
        })()
      },
      { '../../js/util/console': 8, 'd.js': 3 },
    ],
    8: [
      function (require, module, exports) {
        /* global module, console */
        ;(function () {
          'use strict'

          module.exports = function () {
            return typeof console !== 'undefined'
              ? console
              : { log: f, info: f, debug: f, warn: f, error: f }
          }
          function f() {}
        })()
      },
      {},
    ],
    9: [
      function (require, module, exports) {
        /* global Handlebars */
        ;(function () {
          'use strict'

          var mimetypes = {
            jpeg: 'image/jpeg',
            jpg: 'image/jpeg',
            bmp: 'image/bmp',
            png: 'image/png',
            svg: 'image/svg+xml',
            gif: 'image/gif',
          }

          Handlebars.registerHelper('extension', function (str) {
            return ext(str)
          })

          Handlebars.registerHelper('mimetype', function (str) {
            return mimetypes[ext(str)]
          })

          function ext(str) {
            return str.substr(str.lastIndexOf('.') + 1)
          }
        })()
      },
      {},
    ],
    10: [
      function (require, module, exports) {
        /* global module, s, console */
        ;(function () {
          'use strict'

          module.exports =
            typeof s !== 'undefined' && s.slugify ? s.slugify : simpleSlugify

          if (module.exports === simpleSlugify) {
            var log =
              typeof console !== 'undefined' && console.debug
                ? console.debug
                : function () {}
            log.call(
              console,
              'underscore.string not found, falling back on (very) simple slugify..'
            )
          }

          function simpleSlugify(str) {
            return str.toLowerCase().replace(/\s\W/g, '-')
          }
        })()
      },
      {},
    ],
  },
  {},
  [1]
)
