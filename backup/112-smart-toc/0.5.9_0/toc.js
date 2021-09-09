(function () {
  'use strict';

  const isDebugging = /dev/.test({ "ENV": "production" }.ENV );

  function draw(elem, color = 'red') {
      if (elem) {
          if (Array.isArray(elem)) {
              elem.forEach((el) => {
                  el.style.outline = '2px solid ' + color;
              });
          }
          else {
              elem.style.outline = '2px solid ' + color;
          }
      }
  }

  const toArray = (arr) => {
      return [].slice.apply(arr);
  };

  const getScrollTop = (elem) => {
      if (elem === document.body) {
          return document.documentElement.scrollTop || document.body.scrollTop;
      }
      else {
          return elem.scrollTop;
      }
  };
  const setScrollTop = (elem, val) => {
      if (elem === document.body) {
          document.documentElement.scrollTop = val;
          window.scrollTo(window.scrollX, val);
      }
      else {
          elem.scrollTop = val;
      }
  };
  const canScroll = (el) => {
      return (['auto', 'scroll'].includes(window.getComputedStyle(el).overflowY) &&
          el.clientHeight + 1 < el.scrollHeight);
  };
  const getScrollElement = (elem) => {
      while (elem && elem !== document.body && !canScroll(elem)) {
          elem = elem.parentElement;
      }
      if (isDebugging) {
          draw(elem, 'purple');
      }
      return elem;
  };
  const easeOutQuad = (progress, start, distance) => {
      return distance * progress * (2 - progress) + start;
  };
  const smoothScroll = ({ target, scroller, topMargin = 0, maxDuration = 300, callback, }) => {
      const ease = easeOutQuad;
      const targetTop = target.getBoundingClientRect().top;
      const containerTop = scroller === document.body ? 0 : scroller.getBoundingClientRect().top;
      const scrollStart = getScrollTop(scroller);
      const scrollEnd = targetTop - (containerTop - scrollStart) - topMargin;
      const distance = scrollEnd - scrollStart;
      const distanceRatio = Math.min(1, Math.abs(distance) / 10000);
      const duration = Math.max(10, maxDuration * distanceRatio * (2 - distanceRatio));
      if (maxDuration === 0) {
          setScrollTop(scroller, scrollEnd);
          if (callback) {
              callback();
          }
          return;
      }
      let startTime;
      function update(timestamp) {
          if (!startTime) {
              startTime = timestamp;
          }
          const progress = (timestamp - startTime) / duration;
          if (progress < 1) {
              const scrollPos = ease(progress, scrollStart, distance);
              setScrollTop(scroller, scrollPos);
              window.requestAnimationFrame(update);
          }
          else {
              setScrollTop(scroller, scrollEnd);
              if (callback) {
                  callback();
              }
          }
      }
      window.requestAnimationFrame(update);
  };

  const getAncestors = function (elem, maxDepth = -1) {
      const ancestors = [];
      let cur = elem;
      while (cur && maxDepth--) {
          ancestors.push(cur);
          cur = cur.parentElement;
      }
      return ancestors;
  };
  const ARTICLE_TAG_WEIGHTS = {
      h1: [0, 100, 60, 40, 30, 25, 22, 18].map((s) => s * 0.4),
      h2: [0, 100, 60, 40, 30, 25, 22, 18],
      h3: [0, 100, 60, 40, 30, 25, 22, 18].map((s) => s * 0.5),
      h4: [0, 100, 60, 40, 30, 25, 22, 18].map((s) => s * 0.5 * 0.5),
      h5: [0, 100, 60, 40, 30, 25, 22, 18].map((s) => s * 0.5 * 0.5 * 0.5),
      h6: [0, 100, 60, 40, 30, 25, 22, 18].map((s) => s * 0.5 * 0.5 * 0.5 * 0.5),
      strong: [0, 100, 60, 40, 30, 25, 22, 18].map((s) => s * 0.5 * 0.5 * 0.5),
      article: [500],
      '.article': [500],
      '#article': [500],
      '.content': [101],
      sidebar: [-500, -100, -50],
      '.sidebar': [-500, -100, -50],
      '#sidebar': [-500, -100, -50],
      aside: [-500, -100, -50],
      '.aside': [-500, -100, -50],
      '#aside': [-500, -100, -50],
      nav: [-500, -100, -50],
      '.nav': [-500, -100, -50],
      '.navigation': [-500, -100, -50],
      '.toc': [-500, -100, -50],
      '.table-of-contents': [-500, -100, -50],
      '.comment': [-500, -100, -50],
  };
  const getElemsCommonLeft = (elems) => {
      if (!elems.length) {
          return undefined;
      }
      const lefts = {};
      elems.forEach((el) => {
          const left = el.getBoundingClientRect().left;
          if (!lefts[left]) {
              lefts[left] = 0;
          }
          lefts[left]++;
      });
      const count = elems.length;
      const isAligned = Object.keys(lefts).length <= Math.ceil(0.3 * count);
      if (!isAligned) {
          return undefined;
      }
      const sortedByCount = Object.keys(lefts).sort((a, b) => lefts[b] - lefts[a]);
      const most = Number(sortedByCount[0]);
      return most;
  };
  const extractArticle = function () {
      const elemScores = new Map();
      // weigh nodes by factor: "selector" "distance from this node"
      Object.keys(ARTICLE_TAG_WEIGHTS).forEach((selector) => {
          let elems = toArray(document.querySelectorAll(selector));
          if (selector.toLowerCase() === 'strong') {
              // for <strong> elements, only take them as heading when they align at left
              const commonLeft = getElemsCommonLeft(elems);
              if (commonLeft === undefined || commonLeft > window.innerWidth / 2) {
                  elems = [];
              }
              else {
                  elems = elems.filter((elem) => elem.getBoundingClientRect().left === commonLeft);
              }
          }
          elems.forEach((elem) => {
              const weights = ARTICLE_TAG_WEIGHTS[selector];
              const ancestors = getAncestors(elem, weights.length);
              ancestors.forEach((elem, distance) => {
                  elemScores.set(elem, (elemScores.get(elem) || 0) + weights[distance] || 0);
              });
          });
      });
      const sortedByScore = [...elemScores].sort((a, b) => b[1] - a[1]);
      // pick top 5 node to re-weigh
      const candicates = sortedByScore
          .slice(0, 5)
          .filter(Boolean)
          .map(([elem, score]) => {
          return { elem, score };
      });
      // re-weigh by factor:  "take-lots-vertical-space", "contain-less-links", "not-too-narrow", "cannot-scroll"
      const isTooNarrow = (e) => e.scrollWidth < 400; // rule out sidebars
      candicates.forEach((candicate) => {
          if (isTooNarrow(candicate.elem)) {
              candicate.score = 0;
              candicates.forEach((parent) => {
                  if (parent.elem.contains(candicate.elem)) {
                      parent.score *= 0.7;
                  }
              });
          }
          if (canScroll(candicate.elem) && candicate.elem !== document.body) {
              candicate.score *= 0.5;
          }
      });
      const reweighted = candicates
          .map(({ elem, score }) => {
          return {
              elem,
              score: score *
                  Math.log((elem.scrollHeight * elem.scrollHeight) /
                      (elem.querySelectorAll('a').length || 1)),
          };
      })
          .sort((a, b) => b.score - a.score);
      if (isDebugging) {
          console.log('[extract]', {
              elemScores,
              sortedByScore,
              candicates,
              reweighted,
          });
      }
      const article = reweighted.length ? reweighted[0].elem : undefined;
      if (isDebugging) {
          draw(article, 'red');
      }
      return article;
  };
  const HEADING_TAG_WEIGHTS = {
      H1: 4,
      H2: 9,
      H3: 9,
      H4: 10,
      H5: 10,
      H6: 10,
      STRONG: 5,
  };
  const extractHeadings = (articleDom) => {
      const isVisible = (elem) => elem.offsetHeight !== 0;
      const isHeadingGroupVisible = (group) => {
          return group.elems.filter(isVisible).length >= group.elems.length * 0.5;
      };
      const headingTagGroups = Object.keys(HEADING_TAG_WEIGHTS)
          .map((tag) => {
          let elems = toArray(articleDom.getElementsByTagName(tag));
          if (tag.toLowerCase() === 'strong') {
              // for <strong> elements, only take them as heading when they align at left
              const commonLeft = getElemsCommonLeft(elems);
              if (commonLeft === undefined || commonLeft > window.innerWidth / 2) {
                  elems = [];
              }
              else {
                  elems = elems.filter((elem) => elem.getBoundingClientRect().left === commonLeft);
              }
          }
          return {
              tag,
              elems,
              score: elems.length * HEADING_TAG_WEIGHTS[tag],
          };
      })
          .filter((group) => group.score >= 10 && group.elems.length > 0)
          .filter((group) => isHeadingGroupVisible(group))
          .slice(0, 3);
      // use document sequence
      const headingTags = headingTagGroups.map((headings) => headings.tag);
      const acceptNode = (node) => {
          const group = headingTagGroups.find((g) => g.tag === node.tagName);
          if (!group) {
              return NodeFilter.FILTER_SKIP;
          }
          return group.elems.includes(node) && isVisible(node)
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
      };
      const treeWalker = document.createTreeWalker(articleDom, NodeFilter.SHOW_ELEMENT, { acceptNode });
      const headings = [];
      let id = 0;
      while (treeWalker.nextNode()) {
          const dom = treeWalker.currentNode;
          const anchor = dom.id ||
              toArray(dom.querySelectorAll('a'))
                  .map((a) => {
                  let href = a.getAttribute('href') || '';
                  return href.startsWith('#') ? href.substr(1) : a.id;
              })
                  .filter(Boolean)[0];
          headings.push({
              dom,
              text: dom.textContent || '',
              level: headingTags.indexOf(dom.tagName) + 1,
              id,
              anchor,
          });
          id++;
      }
      if (isDebugging) {
          if (headingTagGroups.length > 0)
              draw(headingTagGroups[0].elems, 'blue');
          if (headingTagGroups.length > 1)
              draw(headingTagGroups[1].elems, 'green');
          if (headingTagGroups.length > 2)
              draw(headingTagGroups[2].elems, 'yellow');
      }
      return headings;
  };

  const getIframes = (wnd) => {
      let iframes = [];
      try {
          iframes = [].slice.apply(wnd.document.getElementsByTagName('iframe'));
      }
      catch (error) {
          // ignore
      }
      return iframes.reduce((prev, curIframe) => {
          const curWindow = curIframe.contentWindow;
          return prev.concat(curIframe, curWindow ? getIframes(curWindow) : []);
      }, []);
  };
  const getContentWindow = () => {
      const rootWindow = window.top;
      const allIframes = getIframes(rootWindow);
      const allIframesWithArea = allIframes
          .map((iframe) => {
          return {
              iframe: iframe,
              area: iframe.offsetWidth * iframe.offsetHeight,
          };
      })
          .sort((a, b) => b.area - a.area);
      if (allIframesWithArea.length === 0) {
          return rootWindow;
      }
      const largest = allIframesWithArea[0];
      const rootDocument = rootWindow.document.documentElement;
      const rootArea = rootDocument.offsetWidth * rootDocument.offsetHeight;
      return largest.area > rootArea * 0.5
          ? largest.iframe.contentWindow || rootWindow
          : rootWindow;
  };

  const createLogger = (name) => (...args) => {
      console.info(`[${name}]`, ...args);
  };

  let streamId = 0;
  const generateStreamName = (id) => {
      return `s_${id}`;
  };
  class StreamClass {
      constructor() {
          this.listeners = [];
          this.dependents = [];
          this.value = undefined;
          this.changed = false;
      }
      static isStream(o) {
          return o && typeof o.subscribe === 'function';
      }
      static create(init, name) {
          const stream$ = function (val) {
              if (arguments.length === 0) {
                  return stream$.value;
              }
              else {
                  if (typeof val === 'undefined') {
                      if (isDebugging) {
                          debugger;
                      }
                      throw new Error('stream() value should not be undefined');
                  }
                  stream$.update(val);
                  stream$.flush();
              }
          };
          stream$.id = streamId++;
          stream$.displayName = name || generateStreamName(stream$.id);
          stream$.value = init;
          stream$.changed = false;
          stream$.listeners = [];
          stream$.dependents = [];
          Object.setPrototypeOf(stream$, StreamClass.prototype);
          return stream$;
      }
      static combine(streams) {
          const cached = streams.map((stream$) => stream$());
          const allHasValue = () => cached.every((elem) => typeof elem !== 'undefined');
          const combined$ = Stream(allHasValue() ? cached : undefined, `combine(${streams.map((s) => s.displayName).join(',')})`);
          streams.forEach((stream, i) => {
              stream.dependents.push({
                  updateDependent(val) {
                      cached[i] = val;
                      if (allHasValue()) {
                          combined$.update(cached);
                      }
                  },
                  flushDependent() {
                      combined$.flush();
                  },
              });
          });
          return combined$;
      }
      static merge(streams) {
          const merged$ = Stream(undefined, `merge(${streams.map((s) => s.displayName).join(',')})`);
          streams.forEach((stream$) => {
              stream$.subscribe((val) => merged$(val));
          });
          return merged$;
      }
      static flatten(highOrderStream) {
          const $flattened = Stream(undefined, `flatten(${highOrderStream.displayName})`);
          highOrderStream.unique().subscribe((stream) => {
              stream.subscribe((value) => {
                  $flattened(value);
              });
          });
          return $flattened;
      }
      static fromInterval(interval, callback) {
          const interval$ = Stream(undefined, `interval(${interval})`);
          const timer = setInterval(() => interval$(null), interval);
          if (callback) {
              callback(() => clearInterval(timer));
          }
          return interval$;
      }
      static fromEvent(elem, type, callback) {
          const event$ = Stream(undefined, `event(${type})`);
          const listener = (payload) => {
              event$(payload == null ? null : payload);
          };
          elem.addEventListener(type, listener);
          if (callback) {
              callback(() => elem.removeEventListener(type, listener));
          }
          return event$;
      }
      startsWith(value) {
          const start$ = Stream(value);
          return Stream.merge([start$, this]);
      }
      subscribe(listener, emitCurrent = true) {
          if (emitCurrent && this.value !== undefined) {
              listener(this.value);
          }
          this.listeners.push(listener);
          return () => {
              this.unsubscribe(listener);
          };
      }
      unsubscribe(listener) {
          this.listeners = this.listeners.filter((l) => l !== listener);
      }
      map(mapper) {
          const $mapped = Stream(typeof this.value === 'undefined' ? undefined : mapper(this.value), `map(${this.displayName})`);
          this.subscribe((val) => {
              $mapped(mapper(val));
          });
          return $mapped;
      }
      unique() {
          const unique$ = Stream(this.value, `unique(${this.displayName})`);
          this.subscribe((val) => {
              if (val !== unique$()) {
                  unique$(val);
              }
          });
          return unique$;
      }
      flatten() {
          const flattened$ = Stream();
          this.subscribe((childStream) => {
              childStream.subscribe((innerValue) => {
                  flattened$(innerValue);
              });
          });
          return flattened$;
      }
      scan(reducer, initValue) {
          const scanned$ = Stream(initValue);
          this.subscribe((current) => {
              scanned$(reducer(scanned$(), current));
          });
          return scanned$;
      }
      switchLatest() {
          const latest$ = Stream();
          let unsubscribeLast = () => { };
          this.subscribe((childStream) => {
              unsubscribeLast();
              unsubscribeLast = childStream.subscribe((innerValue) => {
                  latest$(innerValue);
              });
          });
          return latest$;
      }
      filter(predict) {
          const filtered$ = Stream(undefined, `filter(${this.displayName})`);
          this.subscribe((val) => {
              if (predict(val)) {
                  filtered$(val);
              }
          });
          return filtered$;
      }
      delay(delayInMs) {
          const delayed$ = Stream(undefined, `delay(${this.displayName})`);
          this.subscribe((value) => {
              setTimeout(() => {
                  delayed$(value);
              }, delayInMs);
          });
          return delayed$;
      }
      debounce(delay) {
          const debounced$ = Stream(undefined, `debounce(${this.displayName})`);
          let timer;
          this.subscribe((val) => {
              clearTimeout(timer);
              timer = window.setTimeout(function () {
                  debounced$(val);
              }, delay);
          });
          return debounced$;
      }
      throttle(delay) {
          const throttled$ = Stream(undefined, `throttle(${this.displayName})`);
          let lastEmit = -Infinity;
          let timer;
          const emit = (val) => {
              throttled$(val);
              lastEmit = performance.now();
          };
          this.subscribe((val) => {
              window.clearTimeout(timer);
              const timePassed = performance.now() - lastEmit;
              if (timePassed < delay) {
                  timer = window.setTimeout(() => {
                      emit(val);
                  }, delay - timePassed);
              }
              else {
                  emit(val);
              }
          });
          return throttled$;
      }
      log(name) {
          this.displayName = name;
          if (isDebugging) {
              const logger = createLogger('$' + name);
              this.subscribe(logger);
          }
          return this;
      }
      setName(name) {
          this.displayName = name;
          return this;
      }
      update(val) {
          if (val === undefined) {
              if (isDebugging) {
                  debugger;
              }
              throw new TypeError(`update() received undefined`);
          }
          this.value = val;
          this.changed = true;
          this.dependents.forEach((dep) => dep.updateDependent(val));
      }
      flush() {
          if (this.changed) {
              this.changed = false;
              this.listeners.forEach((l) => l(this.value));
              this.dependents.forEach((dep) => dep.flushDependent());
          }
      }
  }
  Object.getOwnPropertyNames(StreamClass)
      .filter((prop) => typeof StreamClass[prop] === 'function' && prop !== 'constructor')
      .forEach((name) => {
      StreamClass.create[name] = StreamClass[name];
  });
  const Stream = StreamClass.create;

  const createEventEmitter = () => {
      let listeners = {};
      const on = (event, handler) => {
          if (!listeners[event]) {
              listeners[event] = [];
          }
          if (!listeners[event].includes(handler)) {
              listeners[event].push(handler);
          }
      };
      const off = (event, handler) => {
          if (listeners[event]) {
              listeners[event] = listeners[event].filter((h) => h !== handler);
          }
      };
      function emit(event, payload) {
          if (listeners[event]) {
              listeners[event].forEach((handler) => {
                  handler(payload);
              });
          }
      }
      const removeAllListeners = () => {
          listeners = {};
      };
      return { on, off, emit, removeAllListeners };
  };

  function Vnode(tag, key, attrs, children, text, dom) {
  	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
  }
  Vnode.normalize = function(node) {
  	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
  	if (node == null || typeof node === "boolean") return null
  	if (typeof node === "object") return node
  	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
  };
  Vnode.normalizeChildren = function(input) {
  	var children = [];
  	if (input.length) {
  		var isKeyed = input[0] != null && input[0].key != null;
  		// Note: this is a *very* perf-sensitive check.
  		// Fun fact: merging the loop like this is somehow faster than splitting
  		// it, noticeably so.
  		for (var i = 1; i < input.length; i++) {
  			if ((input[i] != null && input[i].key != null) !== isKeyed) {
  				throw new TypeError("Vnodes must either always have keys or never have keys!")
  			}
  		}
  		for (var i = 0; i < input.length; i++) {
  			children[i] = Vnode.normalize(input[i]);
  		}
  	}
  	return children
  };

  var vnode = Vnode;

  // Call via `hyperscriptVnode.apply(startOffset, arguments)`
  //
  // The reason I do it this way, forwarding the arguments and passing the start
  // offset in `this`, is so I don't have to create a temporary array in a
  // performance-critical path.
  //
  // In native ES6, I'd instead add a final `...args` parameter to the
  // `hyperscript` and `fragment` factories and define this as
  // `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
  // ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
  // and engines aren't nearly intelligent enough to do either of these:
  //
  // 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
  //    another function only to be indexed.
  // 2. Elide an `arguments` allocation when it's passed to any function other
  //    than `Function.prototype.apply` or `Reflect.apply`.
  //
  // In ES6, it'd probably look closer to this (I'd need to profile it, though):
  // module.exports = function(attrs, ...children) {
  //     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
  //         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
  //     } else {
  //         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
  //         attrs = undefined
  //     }
  //
  //     if (attrs == null) attrs = {}
  //     return Vnode("", attrs.key, attrs, children)
  // }
  var hyperscriptVnode = function() {
  	var attrs = arguments[this], start = this + 1, children;

  	if (attrs == null) {
  		attrs = {};
  	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
  		attrs = {};
  		start = this;
  	}

  	if (arguments.length === start + 1) {
  		children = arguments[start];
  		if (!Array.isArray(children)) children = [children];
  	} else {
  		children = [];
  		while (start < arguments.length) children.push(arguments[start++]);
  	}

  	return vnode("", attrs.key, attrs, children)
  };

  var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
  var selectorCache = {};
  var hasOwn = {}.hasOwnProperty;

  function isEmpty(object) {
  	for (var key in object) if (hasOwn.call(object, key)) return false
  	return true
  }

  function compileSelector(selector) {
  	var match, tag = "div", classes = [], attrs = {};
  	while (match = selectorParser.exec(selector)) {
  		var type = match[1], value = match[2];
  		if (type === "" && value !== "") tag = value;
  		else if (type === "#") attrs.id = value;
  		else if (type === ".") classes.push(value);
  		else if (match[3][0] === "[") {
  			var attrValue = match[6];
  			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
  			if (match[4] === "class") classes.push(attrValue);
  			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
  		}
  	}
  	if (classes.length > 0) attrs.className = classes.join(" ");
  	return selectorCache[selector] = {tag: tag, attrs: attrs}
  }

  function execSelector(state, vnode$1) {
  	var attrs = vnode$1.attrs;
  	var children = vnode.normalizeChildren(vnode$1.children);
  	var hasClass = hasOwn.call(attrs, "class");
  	var className = hasClass ? attrs.class : attrs.className;

  	vnode$1.tag = state.tag;
  	vnode$1.attrs = null;
  	vnode$1.children = undefined;

  	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
  		var newAttrs = {};

  		for (var key in attrs) {
  			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key];
  		}

  		attrs = newAttrs;
  	}

  	for (var key in state.attrs) {
  		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
  			attrs[key] = state.attrs[key];
  		}
  	}
  	if (className != null || state.attrs.className != null) attrs.className =
  		className != null
  			? state.attrs.className != null
  				? String(state.attrs.className) + " " + String(className)
  				: className
  			: state.attrs.className != null
  				? state.attrs.className
  				: null;

  	if (hasClass) attrs.class = null;

  	for (var key in attrs) {
  		if (hasOwn.call(attrs, key) && key !== "key") {
  			vnode$1.attrs = attrs;
  			break
  		}
  	}

  	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
  		vnode$1.text = children[0].children;
  	} else {
  		vnode$1.children = children;
  	}

  	return vnode$1
  }

  function hyperscript(selector) {
  	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
  		throw Error("The selector must be either a string or a component.");
  	}

  	var vnode$1 = hyperscriptVnode.apply(1, arguments);

  	if (typeof selector === "string") {
  		vnode$1.children = vnode.normalizeChildren(vnode$1.children);
  		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode$1)
  	}

  	vnode$1.tag = selector;
  	return vnode$1
  }

  var hyperscript_1 = hyperscript;

  var trust = function(html) {
  	if (html == null) html = "";
  	return vnode("<", undefined, undefined, html, undefined, undefined)
  };

  var fragment = function() {
  	var vnode$1 = hyperscriptVnode.apply(0, arguments);

  	vnode$1.tag = "[";
  	vnode$1.children = vnode.normalizeChildren(vnode$1.children);
  	return vnode$1
  };

  hyperscript_1.trust = trust;
  hyperscript_1.fragment = fragment;

  var hyperscript_1$1 = hyperscript_1;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** @constructor */
  var PromisePolyfill = function(executor) {
  	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
  	if (typeof executor !== "function") throw new TypeError("executor must be a function")

  	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false);
  	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors};
  	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
  	function handler(list, shouldAbsorb) {
  		return function execute(value) {
  			var then;
  			try {
  				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
  					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
  					executeOnce(then.bind(value));
  				}
  				else {
  					callAsync(function() {
  						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
  						for (var i = 0; i < list.length; i++) list[i](value);
  						resolvers.length = 0, rejectors.length = 0;
  						instance.state = shouldAbsorb;
  						instance.retry = function() {execute(value);};
  					});
  				}
  			}
  			catch (e) {
  				rejectCurrent(e);
  			}
  		}
  	}
  	function executeOnce(then) {
  		var runs = 0;
  		function run(fn) {
  			return function(value) {
  				if (runs++ > 0) return
  				fn(value);
  			}
  		}
  		var onerror = run(rejectCurrent);
  		try {then(run(resolveCurrent), onerror);} catch (e) {onerror(e);}
  	}

  	executeOnce(executor);
  };
  PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
  	var self = this, instance = self._instance;
  	function handle(callback, list, next, state) {
  		list.push(function(value) {
  			if (typeof callback !== "function") next(value);
  			else try {resolveNext(callback(value));} catch (e) {if (rejectNext) rejectNext(e);}
  		});
  		if (typeof instance.retry === "function" && state === instance.state) instance.retry();
  	}
  	var resolveNext, rejectNext;
  	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject;});
  	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
  	return promise
  };
  PromisePolyfill.prototype.catch = function(onRejection) {
  	return this.then(null, onRejection)
  };
  PromisePolyfill.prototype.finally = function(callback) {
  	return this.then(
  		function(value) {
  			return PromisePolyfill.resolve(callback()).then(function() {
  				return value
  			})
  		},
  		function(reason) {
  			return PromisePolyfill.resolve(callback()).then(function() {
  				return PromisePolyfill.reject(reason);
  			})
  		}
  	)
  };
  PromisePolyfill.resolve = function(value) {
  	if (value instanceof PromisePolyfill) return value
  	return new PromisePolyfill(function(resolve) {resolve(value);})
  };
  PromisePolyfill.reject = function(value) {
  	return new PromisePolyfill(function(resolve, reject) {reject(value);})
  };
  PromisePolyfill.all = function(list) {
  	return new PromisePolyfill(function(resolve, reject) {
  		var total = list.length, count = 0, values = [];
  		if (list.length === 0) resolve([]);
  		else for (var i = 0; i < list.length; i++) {
  			(function(i) {
  				function consume(value) {
  					count++;
  					values[i] = value;
  					if (count === total) resolve(values);
  				}
  				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
  					list[i].then(consume, reject);
  				}
  				else consume(list[i]);
  			})(i);
  		}
  	})
  };
  PromisePolyfill.race = function(list) {
  	return new PromisePolyfill(function(resolve, reject) {
  		for (var i = 0; i < list.length; i++) {
  			list[i].then(resolve, reject);
  		}
  	})
  };

  var polyfill = PromisePolyfill;

  var promise = createCommonjsModule(function (module) {



  if (typeof window !== "undefined") {
  	if (typeof window.Promise === "undefined") {
  		window.Promise = polyfill;
  	} else if (!window.Promise.prototype.finally) {
  		window.Promise.prototype.finally = polyfill.prototype.finally;
  	}
  	module.exports = window.Promise;
  } else if (typeof commonjsGlobal !== "undefined") {
  	if (typeof commonjsGlobal.Promise === "undefined") {
  		commonjsGlobal.Promise = polyfill;
  	} else if (!commonjsGlobal.Promise.prototype.finally) {
  		commonjsGlobal.Promise.prototype.finally = polyfill.prototype.finally;
  	}
  	module.exports = commonjsGlobal.Promise;
  } else {
  	module.exports = polyfill;
  }
  });

  var render = function($window) {
  	var $doc = $window && $window.document;
  	var currentRedraw;

  	var nameSpace = {
  		svg: "http://www.w3.org/2000/svg",
  		math: "http://www.w3.org/1998/Math/MathML"
  	};

  	function getNameSpace(vnode) {
  		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
  	}

  	//sanity check to discourage people from doing `vnode.state = ...`
  	function checkState(vnode, original) {
  		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
  	}

  	//Note: the hook is passed as the `this` argument to allow proxying the
  	//arguments without requiring a full array allocation to do so. It also
  	//takes advantage of the fact the current `vnode` is the first argument in
  	//all lifecycle methods.
  	function callHook(vnode) {
  		var original = vnode.state;
  		try {
  			return this.apply(original, arguments)
  		} finally {
  			checkState(vnode, original);
  		}
  	}

  	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
  	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
  	function activeElement() {
  		try {
  			return $doc.activeElement
  		} catch (e) {
  			return null
  		}
  	}
  	//create
  	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
  		for (var i = start; i < end; i++) {
  			var vnode = vnodes[i];
  			if (vnode != null) {
  				createNode(parent, vnode, hooks, ns, nextSibling);
  			}
  		}
  	}
  	function createNode(parent, vnode, hooks, ns, nextSibling) {
  		var tag = vnode.tag;
  		if (typeof tag === "string") {
  			vnode.state = {};
  			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
  			switch (tag) {
  				case "#": createText(parent, vnode, nextSibling); break
  				case "<": createHTML(parent, vnode, ns, nextSibling); break
  				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
  				default: createElement(parent, vnode, hooks, ns, nextSibling);
  			}
  		}
  		else createComponent(parent, vnode, hooks, ns, nextSibling);
  	}
  	function createText(parent, vnode, nextSibling) {
  		vnode.dom = $doc.createTextNode(vnode.children);
  		insertNode(parent, vnode.dom, nextSibling);
  	}
  	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"};
  	function createHTML(parent, vnode, ns, nextSibling) {
  		var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
  		// not using the proper parent makes the child element(s) vanish.
  		//     var div = document.createElement("div")
  		//     div.innerHTML = "<td>i</td><td>j</td>"
  		//     console.log(div.innerHTML)
  		// --> "ij", no <td> in sight.
  		var temp = $doc.createElement(possibleParents[match[1]] || "div");
  		if (ns === "http://www.w3.org/2000/svg") {
  			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>";
  			temp = temp.firstChild;
  		} else {
  			temp.innerHTML = vnode.children;
  		}
  		vnode.dom = temp.firstChild;
  		vnode.domSize = temp.childNodes.length;
  		// Capture nodes to remove, so we don't confuse them.
  		vnode.instance = [];
  		var fragment = $doc.createDocumentFragment();
  		var child;
  		while (child = temp.firstChild) {
  			vnode.instance.push(child);
  			fragment.appendChild(child);
  		}
  		insertNode(parent, fragment, nextSibling);
  	}
  	function createFragment(parent, vnode, hooks, ns, nextSibling) {
  		var fragment = $doc.createDocumentFragment();
  		if (vnode.children != null) {
  			var children = vnode.children;
  			createNodes(fragment, children, 0, children.length, hooks, null, ns);
  		}
  		vnode.dom = fragment.firstChild;
  		vnode.domSize = fragment.childNodes.length;
  		insertNode(parent, fragment, nextSibling);
  	}
  	function createElement(parent, vnode$1, hooks, ns, nextSibling) {
  		var tag = vnode$1.tag;
  		var attrs = vnode$1.attrs;
  		var is = attrs && attrs.is;

  		ns = getNameSpace(vnode$1) || ns;

  		var element = ns ?
  			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
  			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag);
  		vnode$1.dom = element;

  		if (attrs != null) {
  			setAttrs(vnode$1, attrs, ns);
  		}

  		insertNode(parent, element, nextSibling);

  		if (!maybeSetContentEditable(vnode$1)) {
  			if (vnode$1.text != null) {
  				if (vnode$1.text !== "") element.textContent = vnode$1.text;
  				else vnode$1.children = [vnode("#", undefined, undefined, vnode$1.text, undefined, undefined)];
  			}
  			if (vnode$1.children != null) {
  				var children = vnode$1.children;
  				createNodes(element, children, 0, children.length, hooks, null, ns);
  				if (vnode$1.tag === "select" && attrs != null) setLateSelectAttrs(vnode$1, attrs);
  			}
  		}
  	}
  	function initComponent(vnode$1, hooks) {
  		var sentinel;
  		if (typeof vnode$1.tag.view === "function") {
  			vnode$1.state = Object.create(vnode$1.tag);
  			sentinel = vnode$1.state.view;
  			if (sentinel.$$reentrantLock$$ != null) return
  			sentinel.$$reentrantLock$$ = true;
  		} else {
  			vnode$1.state = void 0;
  			sentinel = vnode$1.tag;
  			if (sentinel.$$reentrantLock$$ != null) return
  			sentinel.$$reentrantLock$$ = true;
  			vnode$1.state = (vnode$1.tag.prototype != null && typeof vnode$1.tag.prototype.view === "function") ? new vnode$1.tag(vnode$1) : vnode$1.tag(vnode$1);
  		}
  		initLifecycle(vnode$1.state, vnode$1, hooks);
  		if (vnode$1.attrs != null) initLifecycle(vnode$1.attrs, vnode$1, hooks);
  		vnode$1.instance = vnode.normalize(callHook.call(vnode$1.state.view, vnode$1));
  		if (vnode$1.instance === vnode$1) throw Error("A view cannot return the vnode it received as argument")
  		sentinel.$$reentrantLock$$ = null;
  	}
  	function createComponent(parent, vnode, hooks, ns, nextSibling) {
  		initComponent(vnode, hooks);
  		if (vnode.instance != null) {
  			createNode(parent, vnode.instance, hooks, ns, nextSibling);
  			vnode.dom = vnode.instance.dom;
  			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
  		}
  		else {
  			vnode.domSize = 0;
  		}
  	}

  	//update
  	/**
  	 * @param {Element|Fragment} parent - the parent element
  	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
  	 *                               this part of the tree
  	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
  	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
  	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
  	 *                                       fragment that is not the last item in its
  	 *                                       parent
  	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
  	 * @returns void
  	 */
  	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
  	//
  	// We will:
  	//
  	// 1. describe its general structure
  	// 2. focus on the diff algorithm optimizations
  	// 3. discuss DOM node operations.

  	// ## Overview:
  	//
  	// The updateNodes() function:
  	// - deals with trivial cases
  	// - determines whether the lists are keyed or unkeyed based on the first non-null node
  	//   of each list.
  	// - diffs them and patches the DOM if needed (that's the brunt of the code)
  	// - manages the leftovers: after diffing, are there:
  	//   - old nodes left to remove?
  	// 	 - new nodes to insert?
  	// 	 deal with them!
  	//
  	// The lists are only iterated over once, with an exception for the nodes in `old` that
  	// are visited in the fourth part of the diff and in the `removeNodes` loop.

  	// ## Diffing
  	//
  	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
  	// may be good for context on longest increasing subsequence-based logic for moving nodes.
  	//
  	// In order to diff keyed lists, one has to
  	//
  	// 1) match nodes in both lists, per key, and update them accordingly
  	// 2) create the nodes present in the new list, but absent in the old one
  	// 3) remove the nodes present in the old list, but absent in the new one
  	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
  	//
  	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
  	// over the new list and for each new vnode, find the corresponding vnode in the old list using
  	// the map.
  	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
  	// and must be created.
  	// For the removals, we actually remove the nodes that have been updated from the old list.
  	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
  	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
  	// algorithm.
  	//
  	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
  	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
  	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
  	//  match the above lists, for example).
  	//
  	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
  	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
  	//
  	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
  	// the longest increasing subsequence *of old nodes still present in the new list*).
  	//
  	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
  	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
  	// the `LIS` and a temporary one to create the LIS).
  	//
  	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
  	// the LIS and can be updated without moving them.
  	//
  	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
  	// the exception of the last node if the list is fully reversed).
  	//
  	// ## Finding the next sibling.
  	//
  	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
  	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
  	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
  	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
  	//
  	// In the other scenarios (swaps, upwards traversal, map-based diff),
  	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
  	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
  	// as the next sibling (cached in the `nextSibling` variable).


  	// ## DOM node moves
  	//
  	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
  	// this is not the case if the node moved (second and fourth part of the diff algo). We move
  	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
  	// variable rather than fetching it using `getNextSibling()`.
  	//
  	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
  	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
  	// nodes remain together in the new list in a way that isn't covered by parts one and
  	// three of the diff algo.

  	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
  		if (old === vnodes || old == null && vnodes == null) return
  		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
  		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);
  		else {
  			var isOldKeyed = old[0] != null && old[0].key != null;
  			var isKeyed = vnodes[0] != null && vnodes[0].key != null;
  			var start = 0, oldStart = 0;
  			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++;
  			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++;
  			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
  			if (isOldKeyed !== isKeyed) {
  				removeNodes(parent, old, oldStart, old.length);
  				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
  			} else if (!isKeyed) {
  				// Don't index past the end of either list (causes deopts).
  				var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
  				// Rewind if necessary to the first non-null index on either side.
  				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
  				// but that would be optimizing for sparse lists which are more rare than dense ones.
  				start = start < oldStart ? start : oldStart;
  				for (; start < commonLength; start++) {
  					o = old[start];
  					v = vnodes[start];
  					if (o === v || o == null && v == null) continue
  					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling));
  					else if (v == null) removeNode(parent, o);
  					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns);
  				}
  				if (old.length > commonLength) removeNodes(parent, old, start, old.length);
  				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
  			} else {
  				// keyed diff
  				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling;

  				// bottom-up
  				while (oldEnd >= oldStart && end >= start) {
  					oe = old[oldEnd];
  					ve = vnodes[end];
  					if (oe.key !== ve.key) break
  					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
  					if (ve.dom != null) nextSibling = ve.dom;
  					oldEnd--, end--;
  				}
  				// top-down
  				while (oldEnd >= oldStart && end >= start) {
  					o = old[oldStart];
  					v = vnodes[start];
  					if (o.key !== v.key) break
  					oldStart++, start++;
  					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);
  				}
  				// swaps and list reversals
  				while (oldEnd >= oldStart && end >= start) {
  					if (start === end) break
  					if (o.key !== ve.key || oe.key !== v.key) break
  					topSibling = getNextSibling(old, oldStart, nextSibling);
  					moveNodes(parent, oe, topSibling);
  					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);
  					if (++start <= --end) moveNodes(parent, o, nextSibling);
  					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);
  					if (ve.dom != null) nextSibling = ve.dom;
  					oldStart++; oldEnd--;
  					oe = old[oldEnd];
  					ve = vnodes[end];
  					o = old[oldStart];
  					v = vnodes[start];
  				}
  				// bottom up once again
  				while (oldEnd >= oldStart && end >= start) {
  					if (oe.key !== ve.key) break
  					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
  					if (ve.dom != null) nextSibling = ve.dom;
  					oldEnd--, end--;
  					oe = old[oldEnd];
  					ve = vnodes[end];
  				}
  				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1);
  				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
  				else {
  					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
  					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices;
  					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1;
  					for (i = end; i >= start; i--) {
  						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1);
  						ve = vnodes[i];
  						var oldIndex = map[ve.key];
  						if (oldIndex != null) {
  							pos = (oldIndex < pos) ? oldIndex : -1; // becomes -1 if nodes were re-ordered
  							oldIndices[i-start] = oldIndex;
  							oe = old[oldIndex];
  							old[oldIndex] = null;
  							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
  							if (ve.dom != null) nextSibling = ve.dom;
  							matched++;
  						}
  					}
  					nextSibling = originalNextSibling;
  					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);
  					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
  					else {
  						if (pos === -1) {
  							// the indices of the indices of the items that are part of the
  							// longest increasing subsequence in the oldIndices list
  							lisIndices = makeLisIndices(oldIndices);
  							li = lisIndices.length - 1;
  							for (i = end; i >= start; i--) {
  								v = vnodes[i];
  								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling);
  								else {
  									if (lisIndices[li] === i - start) li--;
  									else moveNodes(parent, v, nextSibling);
  								}
  								if (v.dom != null) nextSibling = vnodes[i].dom;
  							}
  						} else {
  							for (i = end; i >= start; i--) {
  								v = vnodes[i];
  								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling);
  								if (v.dom != null) nextSibling = vnodes[i].dom;
  							}
  						}
  					}
  				}
  			}
  		}
  	}
  	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
  		var oldTag = old.tag, tag = vnode.tag;
  		if (oldTag === tag) {
  			vnode.state = old.state;
  			vnode.events = old.events;
  			if (shouldNotUpdate(vnode, old)) return
  			if (typeof oldTag === "string") {
  				if (vnode.attrs != null) {
  					updateLifecycle(vnode.attrs, vnode, hooks);
  				}
  				switch (oldTag) {
  					case "#": updateText(old, vnode); break
  					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
  					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
  					default: updateElement(old, vnode, hooks, ns);
  				}
  			}
  			else updateComponent(parent, old, vnode, hooks, nextSibling, ns);
  		}
  		else {
  			removeNode(parent, old);
  			createNode(parent, vnode, hooks, ns, nextSibling);
  		}
  	}
  	function updateText(old, vnode) {
  		if (old.children.toString() !== vnode.children.toString()) {
  			old.dom.nodeValue = vnode.children;
  		}
  		vnode.dom = old.dom;
  	}
  	function updateHTML(parent, old, vnode, ns, nextSibling) {
  		if (old.children !== vnode.children) {
  			removeHTML(parent, old);
  			createHTML(parent, vnode, ns, nextSibling);
  		}
  		else {
  			vnode.dom = old.dom;
  			vnode.domSize = old.domSize;
  			vnode.instance = old.instance;
  		}
  	}
  	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
  		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
  		var domSize = 0, children = vnode.children;
  		vnode.dom = null;
  		if (children != null) {
  			for (var i = 0; i < children.length; i++) {
  				var child = children[i];
  				if (child != null && child.dom != null) {
  					if (vnode.dom == null) vnode.dom = child.dom;
  					domSize += child.domSize || 1;
  				}
  			}
  			if (domSize !== 1) vnode.domSize = domSize;
  		}
  	}
  	function updateElement(old, vnode$1, hooks, ns) {
  		var element = vnode$1.dom = old.dom;
  		ns = getNameSpace(vnode$1) || ns;

  		if (vnode$1.tag === "textarea") {
  			if (vnode$1.attrs == null) vnode$1.attrs = {};
  			if (vnode$1.text != null) {
  				vnode$1.attrs.value = vnode$1.text; //FIXME handle multiple children
  				vnode$1.text = undefined;
  			}
  		}
  		updateAttrs(vnode$1, old.attrs, vnode$1.attrs, ns);
  		if (!maybeSetContentEditable(vnode$1)) {
  			if (old.text != null && vnode$1.text != null && vnode$1.text !== "") {
  				if (old.text.toString() !== vnode$1.text.toString()) old.dom.firstChild.nodeValue = vnode$1.text;
  			}
  			else {
  				if (old.text != null) old.children = [vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)];
  				if (vnode$1.text != null) vnode$1.children = [vnode("#", undefined, undefined, vnode$1.text, undefined, undefined)];
  				updateNodes(element, old.children, vnode$1.children, hooks, null, ns);
  			}
  		}
  	}
  	function updateComponent(parent, old, vnode$1, hooks, nextSibling, ns) {
  		vnode$1.instance = vnode.normalize(callHook.call(vnode$1.state.view, vnode$1));
  		if (vnode$1.instance === vnode$1) throw Error("A view cannot return the vnode it received as argument")
  		updateLifecycle(vnode$1.state, vnode$1, hooks);
  		if (vnode$1.attrs != null) updateLifecycle(vnode$1.attrs, vnode$1, hooks);
  		if (vnode$1.instance != null) {
  			if (old.instance == null) createNode(parent, vnode$1.instance, hooks, ns, nextSibling);
  			else updateNode(parent, old.instance, vnode$1.instance, hooks, nextSibling, ns);
  			vnode$1.dom = vnode$1.instance.dom;
  			vnode$1.domSize = vnode$1.instance.domSize;
  		}
  		else if (old.instance != null) {
  			removeNode(parent, old.instance);
  			vnode$1.dom = undefined;
  			vnode$1.domSize = 0;
  		}
  		else {
  			vnode$1.dom = old.dom;
  			vnode$1.domSize = old.domSize;
  		}
  	}
  	function getKeyMap(vnodes, start, end) {
  		var map = Object.create(null);
  		for (; start < end; start++) {
  			var vnode = vnodes[start];
  			if (vnode != null) {
  				var key = vnode.key;
  				if (key != null) map[key] = start;
  			}
  		}
  		return map
  	}
  	// Lifted from ivi https://github.com/ivijs/ivi/
  	// takes a list of unique numbers (-1 is special and can
  	// occur multiple times) and returns an array with the indices
  	// of the items that are part of the longest increasing
  	// subsequece
  	var lisTemp = [];
  	function makeLisIndices(a) {
  		var result = [0];
  		var u = 0, v = 0, i = 0;
  		var il = lisTemp.length = a.length;
  		for (var i = 0; i < il; i++) lisTemp[i] = a[i];
  		for (var i = 0; i < il; ++i) {
  			if (a[i] === -1) continue
  			var j = result[result.length - 1];
  			if (a[j] < a[i]) {
  				lisTemp[i] = j;
  				result.push(i);
  				continue
  			}
  			u = 0;
  			v = result.length - 1;
  			while (u < v) {
  				// Fast integer average without overflow.
  				// eslint-disable-next-line no-bitwise
  				var c = (u >>> 1) + (v >>> 1) + (u & v & 1);
  				if (a[result[c]] < a[i]) {
  					u = c + 1;
  				}
  				else {
  					v = c;
  				}
  			}
  			if (a[i] < a[result[u]]) {
  				if (u > 0) lisTemp[i] = result[u - 1];
  				result[u] = i;
  			}
  		}
  		u = result.length;
  		v = result[u - 1];
  		while (u-- > 0) {
  			result[u] = v;
  			v = lisTemp[v];
  		}
  		lisTemp.length = 0;
  		return result
  	}

  	function getNextSibling(vnodes, i, nextSibling) {
  		for (; i < vnodes.length; i++) {
  			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
  		}
  		return nextSibling
  	}

  	// This covers a really specific edge case:
  	// - Parent node is keyed and contains child
  	// - Child is removed, returns unresolved promise in `onbeforeremove`
  	// - Parent node is moved in keyed diff
  	// - Remaining children still need moved appropriately
  	//
  	// Ideally, I'd track removed nodes as well, but that introduces a lot more
  	// complexity and I'm not exactly interested in doing that.
  	function moveNodes(parent, vnode, nextSibling) {
  		var frag = $doc.createDocumentFragment();
  		moveChildToFrag(parent, frag, vnode);
  		insertNode(parent, frag, nextSibling);
  	}
  	function moveChildToFrag(parent, frag, vnode) {
  		// Dodge the recursion overhead in a few of the most common cases.
  		while (vnode.dom != null && vnode.dom.parentNode === parent) {
  			if (typeof vnode.tag !== "string") {
  				vnode = vnode.instance;
  				if (vnode != null) continue
  			} else if (vnode.tag === "<") {
  				for (var i = 0; i < vnode.instance.length; i++) {
  					frag.appendChild(vnode.instance[i]);
  				}
  			} else if (vnode.tag !== "[") {
  				// Don't recurse for text nodes *or* elements, just fragments
  				frag.appendChild(vnode.dom);
  			} else if (vnode.children.length === 1) {
  				vnode = vnode.children[0];
  				if (vnode != null) continue
  			} else {
  				for (var i = 0; i < vnode.children.length; i++) {
  					var child = vnode.children[i];
  					if (child != null) moveChildToFrag(parent, frag, child);
  				}
  			}
  			break
  		}
  	}

  	function insertNode(parent, dom, nextSibling) {
  		if (nextSibling != null) parent.insertBefore(dom, nextSibling);
  		else parent.appendChild(dom);
  	}

  	function maybeSetContentEditable(vnode) {
  		if (vnode.attrs == null || (
  			vnode.attrs.contenteditable == null && // attribute
  			vnode.attrs.contentEditable == null // property
  		)) return false
  		var children = vnode.children;
  		if (children != null && children.length === 1 && children[0].tag === "<") {
  			var content = children[0].children;
  			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
  		}
  		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
  		return true
  	}

  	//remove
  	function removeNodes(parent, vnodes, start, end) {
  		for (var i = start; i < end; i++) {
  			var vnode = vnodes[i];
  			if (vnode != null) removeNode(parent, vnode);
  		}
  	}
  	function removeNode(parent, vnode) {
  		var mask = 0;
  		var original = vnode.state;
  		var stateResult, attrsResult;
  		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
  			var result = callHook.call(vnode.state.onbeforeremove, vnode);
  			if (result != null && typeof result.then === "function") {
  				mask = 1;
  				stateResult = result;
  			}
  		}
  		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
  			var result = callHook.call(vnode.attrs.onbeforeremove, vnode);
  			if (result != null && typeof result.then === "function") {
  				// eslint-disable-next-line no-bitwise
  				mask |= 2;
  				attrsResult = result;
  			}
  		}
  		checkState(vnode, original);

  		// If we can, try to fast-path it and avoid all the overhead of awaiting
  		if (!mask) {
  			onremove(vnode);
  			removeChild(parent, vnode);
  		} else {
  			if (stateResult != null) {
  				var next = function () {
  					// eslint-disable-next-line no-bitwise
  					if (mask & 1) { mask &= 2; if (!mask) reallyRemove(); }
  				};
  				stateResult.then(next, next);
  			}
  			if (attrsResult != null) {
  				var next = function () {
  					// eslint-disable-next-line no-bitwise
  					if (mask & 2) { mask &= 1; if (!mask) reallyRemove(); }
  				};
  				attrsResult.then(next, next);
  			}
  		}

  		function reallyRemove() {
  			checkState(vnode, original);
  			onremove(vnode);
  			removeChild(parent, vnode);
  		}
  	}
  	function removeHTML(parent, vnode) {
  		for (var i = 0; i < vnode.instance.length; i++) {
  			parent.removeChild(vnode.instance[i]);
  		}
  	}
  	function removeChild(parent, vnode) {
  		// Dodge the recursion overhead in a few of the most common cases.
  		while (vnode.dom != null && vnode.dom.parentNode === parent) {
  			if (typeof vnode.tag !== "string") {
  				vnode = vnode.instance;
  				if (vnode != null) continue
  			} else if (vnode.tag === "<") {
  				removeHTML(parent, vnode);
  			} else {
  				if (vnode.tag !== "[") {
  					parent.removeChild(vnode.dom);
  					if (!Array.isArray(vnode.children)) break
  				}
  				if (vnode.children.length === 1) {
  					vnode = vnode.children[0];
  					if (vnode != null) continue
  				} else {
  					for (var i = 0; i < vnode.children.length; i++) {
  						var child = vnode.children[i];
  						if (child != null) removeChild(parent, child);
  					}
  				}
  			}
  			break
  		}
  	}
  	function onremove(vnode) {
  		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode);
  		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode);
  		if (typeof vnode.tag !== "string") {
  			if (vnode.instance != null) onremove(vnode.instance);
  		} else {
  			var children = vnode.children;
  			if (Array.isArray(children)) {
  				for (var i = 0; i < children.length; i++) {
  					var child = children[i];
  					if (child != null) onremove(child);
  				}
  			}
  		}
  	}

  	//attrs
  	function setAttrs(vnode, attrs, ns) {
  		for (var key in attrs) {
  			setAttr(vnode, key, null, attrs[key], ns);
  		}
  	}
  	function setAttr(vnode, key, old, value, ns) {
  		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
  		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
  		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
  		else if (key === "style") updateStyle(vnode.dom, old, value);
  		else if (hasPropertyKey(vnode, key, ns)) {
  			if (key === "value") {
  				// Only do the coercion if we're actually going to check the value.
  				/* eslint-disable no-implicit-coercion */
  				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
  				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
  				//setting select[value] to same value while having select open blinks select dropdown in Chrome
  				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
  				//setting option[value] to same value while having select open blinks select dropdown in Chrome
  				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
  				/* eslint-enable no-implicit-coercion */
  			}
  			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
  			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value);
  			else vnode.dom[key] = value;
  		} else {
  			if (typeof value === "boolean") {
  				if (value) vnode.dom.setAttribute(key, "");
  				else vnode.dom.removeAttribute(key);
  			}
  			else vnode.dom.setAttribute(key === "className" ? "class" : key, value);
  		}
  	}
  	function removeAttr(vnode, key, old, ns) {
  		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
  		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined);
  		else if (key === "style") updateStyle(vnode.dom, old, null);
  		else if (
  			hasPropertyKey(vnode, key, ns)
  			&& key !== "className"
  			&& !(key === "value" && (
  				vnode.tag === "option"
  				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
  			))
  			&& !(vnode.tag === "input" && key === "type")
  		) {
  			vnode.dom[key] = null;
  		} else {
  			var nsLastIndex = key.indexOf(":");
  			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);
  			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key);
  		}
  	}
  	function setLateSelectAttrs(vnode, attrs) {
  		if ("value" in attrs) {
  			if(attrs.value === null) {
  				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;
  			} else {
  				var normalized = "" + attrs.value; // eslint-disable-line no-implicit-coercion
  				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
  					vnode.dom.value = normalized;
  				}
  			}
  		}
  		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined);
  	}
  	function updateAttrs(vnode, old, attrs, ns) {
  		if (attrs != null) {
  			for (var key in attrs) {
  				setAttr(vnode, key, old && old[key], attrs[key], ns);
  			}
  		}
  		var val;
  		if (old != null) {
  			for (var key in old) {
  				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
  					removeAttr(vnode, key, val, ns);
  				}
  			}
  		}
  	}
  	function isFormAttribute(vnode, attr) {
  		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
  	}
  	function isLifecycleMethod(attr) {
  		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
  	}
  	function hasPropertyKey(vnode, key, ns) {
  		// Filter out namespaced keys
  		return ns === undefined && (
  			// If it's a custom element, just keep it.
  			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
  			// If it's a normal element, let's try to avoid a few browser bugs.
  			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
  			// Defer the property check until *after* we check everything.
  		) && key in vnode.dom
  	}

  	//style
  	var uppercaseRegex = /[A-Z]/g;
  	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
  	function normalizeKey(key) {
  		return key[0] === "-" && key[1] === "-" ? key :
  			key === "cssFloat" ? "float" :
  				key.replace(uppercaseRegex, toLowerCase)
  	}
  	function updateStyle(element, old, style) {
  		if (old === style) ; else if (style == null) {
  			// New style is missing, just clear it.
  			element.style.cssText = "";
  		} else if (typeof style !== "object") {
  			// New style is a string, let engine deal with patching.
  			element.style.cssText = style;
  		} else if (old == null || typeof old !== "object") {
  			// `old` is missing or a string, `style` is an object.
  			element.style.cssText = "";
  			// Add new style properties
  			for (var key in style) {
  				var value = style[key];
  				if (value != null) element.style.setProperty(normalizeKey(key), String(value));
  			}
  		} else {
  			// Both old & new are (different) objects.
  			// Update style properties that have changed
  			for (var key in style) {
  				var value = style[key];
  				if (value != null && (value = String(value)) !== String(old[key])) {
  					element.style.setProperty(normalizeKey(key), value);
  				}
  			}
  			// Remove style properties that no longer exist
  			for (var key in old) {
  				if (old[key] != null && style[key] == null) {
  					element.style.removeProperty(normalizeKey(key));
  				}
  			}
  		}
  	}

  	// Here's an explanation of how this works:
  	// 1. The event names are always (by design) prefixed by `on`.
  	// 2. The EventListener interface accepts either a function or an object
  	//    with a `handleEvent` method.
  	// 3. The object does not inherit from `Object.prototype`, to avoid
  	//    any potential interference with that (e.g. setters).
  	// 4. The event name is remapped to the handler before calling it.
  	// 5. In function-based event handlers, `ev.target === this`. We replicate
  	//    that below.
  	// 6. In function-based event handlers, `return false` prevents the default
  	//    action and stops event propagation. We replicate that below.
  	function EventDict() {
  		// Save this, so the current redraw is correctly tracked.
  		this._ = currentRedraw;
  	}
  	EventDict.prototype = Object.create(null);
  	EventDict.prototype.handleEvent = function (ev) {
  		var handler = this["on" + ev.type];
  		var result;
  		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev);
  		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev);
  		if (this._ && ev.redraw !== false) (0, this._)();
  		if (result === false) {
  			ev.preventDefault();
  			ev.stopPropagation();
  		}
  	};

  	//event
  	function updateEvent(vnode, key, value) {
  		if (vnode.events != null) {
  			if (vnode.events[key] === value) return
  			if (value != null && (typeof value === "function" || typeof value === "object")) {
  				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);
  				vnode.events[key] = value;
  			} else {
  				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
  				vnode.events[key] = undefined;
  			}
  		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
  			vnode.events = new EventDict();
  			vnode.dom.addEventListener(key.slice(2), vnode.events, false);
  			vnode.events[key] = value;
  		}
  	}

  	//lifecycle
  	function initLifecycle(source, vnode, hooks) {
  		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode);
  		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode));
  	}
  	function updateLifecycle(source, vnode, hooks) {
  		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode));
  	}
  	function shouldNotUpdate(vnode, old) {
  		do {
  			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
  				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
  				if (force !== undefined && !force) break
  			}
  			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
  				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
  				if (force !== undefined && !force) break
  			}
  			return false
  		} while (false); // eslint-disable-line no-constant-condition
  		vnode.dom = old.dom;
  		vnode.domSize = old.domSize;
  		vnode.instance = old.instance;
  		// One would think having the actual latest attributes would be ideal,
  		// but it doesn't let us properly diff based on our current internal
  		// representation. We have to save not only the old DOM info, but also
  		// the attributes used to create it, as we diff *that*, not against the
  		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
  		// need to save the children and text as they are conceptually not
  		// unlike special "attributes" internally.
  		vnode.attrs = old.attrs;
  		vnode.children = old.children;
  		vnode.text = old.text;
  		return true
  	}

  	return function(dom, vnodes, redraw) {
  		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
  		var hooks = [];
  		var active = activeElement();
  		var namespace = dom.namespaceURI;

  		// First time rendering into a node clears it out
  		if (dom.vnodes == null) dom.textContent = "";

  		vnodes = vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes]);
  		var prevRedraw = currentRedraw;
  		try {
  			currentRedraw = typeof redraw === "function" ? redraw : undefined;
  			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace);
  		} finally {
  			currentRedraw = prevRedraw;
  		}
  		dom.vnodes = vnodes;
  		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
  		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus();
  		for (var i = 0; i < hooks.length; i++) hooks[i]();
  	}
  };

  var render$1 = render(window);

  var mountRedraw = function(render, schedule, console) {
  	var subscriptions = [];
  	var rendering = false;
  	var pending = false;

  	function sync() {
  		if (rendering) throw new Error("Nested m.redraw.sync() call")
  		rendering = true;
  		for (var i = 0; i < subscriptions.length; i += 2) {
  			try { render(subscriptions[i], vnode(subscriptions[i + 1]), redraw); }
  			catch (e) { console.error(e); }
  		}
  		rendering = false;
  	}

  	function redraw() {
  		if (!pending) {
  			pending = true;
  			schedule(function() {
  				pending = false;
  				sync();
  			});
  		}
  	}

  	redraw.sync = sync;

  	function mount(root, component) {
  		if (component != null && component.view == null && typeof component !== "function") {
  			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
  		}

  		var index = subscriptions.indexOf(root);
  		if (index >= 0) {
  			subscriptions.splice(index, 2);
  			render(root, [], redraw);
  		}

  		if (component != null) {
  			subscriptions.push(root, component);
  			render(root, vnode(component), redraw);
  		}
  	}

  	return {mount: mount, redraw: redraw}
  };

  var mountRedraw$1 = mountRedraw(render$1, requestAnimationFrame, console);

  var build = function(object) {
  	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

  	var args = [];
  	for (var key in object) {
  		destructure(key, object[key]);
  	}

  	return args.join("&")

  	function destructure(key, value) {
  		if (Array.isArray(value)) {
  			for (var i = 0; i < value.length; i++) {
  				destructure(key + "[" + i + "]", value[i]);
  			}
  		}
  		else if (Object.prototype.toString.call(value) === "[object Object]") {
  			for (var i in value) {
  				destructure(key + "[" + i + "]", value[i]);
  			}
  		}
  		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
  	}
  };

  var assign = Object.assign || function(target, source) {
  	if(source) Object.keys(source).forEach(function(key) { target[key] = source[key]; });
  };

  // Returns `path` from `template` + `params`
  var build$1 = function(template, params) {
  	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
  		throw new SyntaxError("Template parameter names *must* be separated")
  	}
  	if (params == null) return template
  	var queryIndex = template.indexOf("?");
  	var hashIndex = template.indexOf("#");
  	var queryEnd = hashIndex < 0 ? template.length : hashIndex;
  	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
  	var path = template.slice(0, pathEnd);
  	var query = {};

  	assign(query, params);

  	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
  		delete query[key];
  		// If no such parameter exists, don't interpolate it.
  		if (params[key] == null) return m
  		// Escape normal parameters, but not variadic ones.
  		return variadic ? params[key] : encodeURIComponent(String(params[key]))
  	});

  	// In case the template substitution adds new query/hash parameters.
  	var newQueryIndex = resolved.indexOf("?");
  	var newHashIndex = resolved.indexOf("#");
  	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
  	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
  	var result = resolved.slice(0, newPathEnd);

  	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);
  	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
  	var querystring = build(query);
  	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
  	if (hashIndex >= 0) result += template.slice(hashIndex);
  	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
  	return result
  };

  var request = function($window, Promise, oncompletion) {
  	var callbackCount = 0;

  	function PromiseProxy(executor) {
  		return new Promise(executor)
  	}

  	// In case the global Promise is some userland library's where they rely on
  	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
  	// similar. Let's *not* break them.
  	PromiseProxy.prototype = Promise.prototype;
  	PromiseProxy.__proto__ = Promise; // eslint-disable-line no-proto

  	function makeRequest(factory) {
  		return function(url, args) {
  			if (typeof url !== "string") { args = url; url = url.url; }
  			else if (args == null) args = {};
  			var promise = new Promise(function(resolve, reject) {
  				factory(build$1(url, args.params), args, function (data) {
  					if (typeof args.type === "function") {
  						if (Array.isArray(data)) {
  							for (var i = 0; i < data.length; i++) {
  								data[i] = new args.type(data[i]);
  							}
  						}
  						else data = new args.type(data);
  					}
  					resolve(data);
  				}, reject);
  			});
  			if (args.background === true) return promise
  			var count = 0;
  			function complete() {
  				if (--count === 0 && typeof oncompletion === "function") oncompletion();
  			}

  			return wrap(promise)

  			function wrap(promise) {
  				var then = promise.then;
  				// Set the constructor, so engines know to not await or resolve
  				// this as a native promise. At the time of writing, this is
  				// only necessary for V8, but their behavior is the correct
  				// behavior per spec. See this spec issue for more details:
  				// https://github.com/tc39/ecma262/issues/1577. Also, see the
  				// corresponding comment in `request/tests/test-request.js` for
  				// a bit more background on the issue at hand.
  				promise.constructor = PromiseProxy;
  				promise.then = function() {
  					count++;
  					var next = then.apply(promise, arguments);
  					next.then(complete, function(e) {
  						complete();
  						if (count === 0) throw e
  					});
  					return wrap(next)
  				};
  				return promise
  			}
  		}
  	}

  	function hasHeader(args, name) {
  		for (var key in args.headers) {
  			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
  		}
  		return false
  	}

  	return {
  		request: makeRequest(function(url, args, resolve, reject) {
  			var method = args.method != null ? args.method.toUpperCase() : "GET";
  			var body = args.body;
  			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData);
  			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");

  			var xhr = new $window.XMLHttpRequest(), aborted = false;
  			var original = xhr, replacedAbort;
  			var abort = xhr.abort;

  			xhr.abort = function() {
  				aborted = true;
  				abort.call(this);
  			};

  			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);

  			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
  				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  			}
  			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
  				xhr.setRequestHeader("Accept", "application/json, text/*");
  			}
  			if (args.withCredentials) xhr.withCredentials = args.withCredentials;
  			if (args.timeout) xhr.timeout = args.timeout;
  			xhr.responseType = responseType;

  			for (var key in args.headers) {
  				if ({}.hasOwnProperty.call(args.headers, key)) {
  					xhr.setRequestHeader(key, args.headers[key]);
  				}
  			}

  			xhr.onreadystatechange = function(ev) {
  				// Don't throw errors on xhr.abort().
  				if (aborted) return

  				if (ev.target.readyState === 4) {
  					try {
  						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url);
  						// When the response type isn't "" or "text",
  						// `xhr.responseText` is the wrong thing to use.
  						// Browsers do the right thing and throw here, and we
  						// should honor that and do the right thing by
  						// preferring `xhr.response` where possible/practical.
  						var response = ev.target.response, message;

  						if (responseType === "json") {
  							// For IE and Edge, which don't implement
  							// `responseType: "json"`.
  							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText);
  						} else if (!responseType || responseType === "text") {
  							// Only use this default if it's text. If a parsed
  							// document is needed on old IE and friends (all
  							// unsupported), the user should use a custom
  							// `config` instead. They're already using this at
  							// their own risk.
  							if (response == null) response = ev.target.responseText;
  						}

  						if (typeof args.extract === "function") {
  							response = args.extract(ev.target, args);
  							success = true;
  						} else if (typeof args.deserialize === "function") {
  							response = args.deserialize(response);
  						}
  						if (success) resolve(response);
  						else {
  							try { message = ev.target.responseText; }
  							catch (e) { message = response; }
  							var error = new Error(message);
  							error.code = ev.target.status;
  							error.response = response;
  							reject(error);
  						}
  					}
  					catch (e) {
  						reject(e);
  					}
  				}
  			};

  			if (typeof args.config === "function") {
  				xhr = args.config(xhr, args, url) || xhr;

  				// Propagate the `abort` to any replacement XHR as well.
  				if (xhr !== original) {
  					replacedAbort = xhr.abort;
  					xhr.abort = function() {
  						aborted = true;
  						replacedAbort.call(this);
  					};
  				}
  			}

  			if (body == null) xhr.send();
  			else if (typeof args.serialize === "function") xhr.send(args.serialize(body));
  			else if (body instanceof $window.FormData) xhr.send(body);
  			else xhr.send(JSON.stringify(body));
  		}),
  		jsonp: makeRequest(function(url, args, resolve, reject) {
  			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
  			var script = $window.document.createElement("script");
  			$window[callbackName] = function(data) {
  				delete $window[callbackName];
  				script.parentNode.removeChild(script);
  				resolve(data);
  			};
  			script.onerror = function() {
  				delete $window[callbackName];
  				script.parentNode.removeChild(script);
  				reject(new Error("JSONP request failed"));
  			};
  			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
  				encodeURIComponent(args.callbackKey || "callback") + "=" +
  				encodeURIComponent(callbackName);
  			$window.document.documentElement.appendChild(script);
  		}),
  	}
  };

  var request$1 = request(window, promise, mountRedraw$1.redraw);

  var parse = function(string) {
  	if (string === "" || string == null) return {}
  	if (string.charAt(0) === "?") string = string.slice(1);

  	var entries = string.split("&"), counters = {}, data = {};
  	for (var i = 0; i < entries.length; i++) {
  		var entry = entries[i].split("=");
  		var key = decodeURIComponent(entry[0]);
  		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";

  		if (value === "true") value = true;
  		else if (value === "false") value = false;

  		var levels = key.split(/\]\[?|\[/);
  		var cursor = data;
  		if (key.indexOf("[") > -1) levels.pop();
  		for (var j = 0; j < levels.length; j++) {
  			var level = levels[j], nextLevel = levels[j + 1];
  			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
  			if (level === "") {
  				var key = levels.slice(0, j).join();
  				if (counters[key] == null) {
  					counters[key] = Array.isArray(cursor) ? cursor.length : 0;
  				}
  				level = counters[key]++;
  			}
  			// Disallow direct prototype pollution
  			else if (level === "__proto__") break
  			if (j === levels.length - 1) cursor[level] = value;
  			else {
  				// Read own properties exclusively to disallow indirect
  				// prototype pollution
  				var desc = Object.getOwnPropertyDescriptor(cursor, level);
  				if (desc != null) desc = desc.value;
  				if (desc == null) cursor[level] = desc = isNumber ? [] : {};
  				cursor = desc;
  			}
  		}
  	}
  	return data
  };

  // Returns `{path, params}` from `url`
  var parse$1 = function(url) {
  	var queryIndex = url.indexOf("?");
  	var hashIndex = url.indexOf("#");
  	var queryEnd = hashIndex < 0 ? url.length : hashIndex;
  	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
  	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");

  	if (!path) path = "/";
  	else {
  		if (path[0] !== "/") path = "/" + path;
  		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1);
  	}
  	return {
  		path: path,
  		params: queryIndex < 0
  			? {}
  			: parse(url.slice(queryIndex + 1, queryEnd)),
  	}
  };

  // Compiles a template into a function that takes a resolved path (without query
  // strings) and returns an object containing the template parameters with their
  // parsed values. This expects the input of the compiled template to be the
  // output of `parsePathname`. Note that it does *not* remove query parameters
  // specified in the template.
  var compileTemplate = function(template) {
  	var templateData = parse$1(template);
  	var templateKeys = Object.keys(templateData.params);
  	var keys = [];
  	var regexp = new RegExp("^" + templateData.path.replace(
  		// I escape literal text so people can use things like `:file.:ext` or
  		// `:lang-:locale` in routes. This is all merged into one pass so I
  		// don't also accidentally escape `-` and make it harder to detect it to
  		// ban it from template parameters.
  		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
  		function(m, key, extra) {
  			if (key == null) return "\\" + m
  			keys.push({k: key, r: extra === "..."});
  			if (extra === "...") return "(.*)"
  			if (extra === ".") return "([^/]+)\\."
  			return "([^/]+)" + (extra || "")
  		}
  	) + "$");
  	return function(data) {
  		// First, check the params. Usually, there isn't any, and it's just
  		// checking a static set.
  		for (var i = 0; i < templateKeys.length; i++) {
  			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
  		}
  		// If no interpolations exist, let's skip all the ceremony
  		if (!keys.length) return regexp.test(data.path)
  		var values = regexp.exec(data.path);
  		if (values == null) return false
  		for (var i = 0; i < keys.length; i++) {
  			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
  		}
  		return true
  	}
  };

  var sentinel = {};

  var router = function($window, mountRedraw) {
  	var fireAsync;

  	function setPath(path, data, options) {
  		path = build$1(path, data);
  		if (fireAsync != null) {
  			fireAsync();
  			var state = options ? options.state : null;
  			var title = options ? options.title : null;
  			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path);
  			else $window.history.pushState(state, title, route.prefix + path);
  		}
  		else {
  			$window.location.href = route.prefix + path;
  		}
  	}

  	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;

  	var SKIP = route.SKIP = {};

  	function route(root, defaultRoute, routes) {
  		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
  		// 0 = start
  		// 1 = init
  		// 2 = ready
  		var state = 0;

  		var compiled = Object.keys(routes).map(function(route) {
  			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
  			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
  				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
  			}
  			return {
  				route: route,
  				component: routes[route],
  				check: compileTemplate(route),
  			}
  		});
  		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
  		var p = promise.resolve();
  		var scheduled = false;
  		var onremove;

  		fireAsync = null;

  		if (defaultRoute != null) {
  			var defaultData = parse$1(defaultRoute);

  			if (!compiled.some(function (i) { return i.check(defaultData) })) {
  				throw new ReferenceError("Default route doesn't match any known routes")
  			}
  		}

  		function resolveRoute() {
  			scheduled = false;
  			// Consider the pathname holistically. The prefix might even be invalid,
  			// but that's not our problem.
  			var prefix = $window.location.hash;
  			if (route.prefix[0] !== "#") {
  				prefix = $window.location.search + prefix;
  				if (route.prefix[0] !== "?") {
  					prefix = $window.location.pathname + prefix;
  					if (prefix[0] !== "/") prefix = "/" + prefix;
  				}
  			}
  			// This seemingly useless `.concat()` speeds up the tests quite a bit,
  			// since the representation is consistently a relatively poorly
  			// optimized cons string.
  			var path = prefix.concat()
  				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
  				.slice(route.prefix.length);
  			var data = parse$1(path);

  			assign(data.params, $window.history.state);

  			function fail() {
  				if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
  				setPath(defaultRoute, null, {replace: true});
  			}

  			loop(0);
  			function loop(i) {
  				// 0 = init
  				// 1 = scheduled
  				// 2 = done
  				for (; i < compiled.length; i++) {
  					if (compiled[i].check(data)) {
  						var payload = compiled[i].component;
  						var matchedRoute = compiled[i].route;
  						var localComp = payload;
  						var update = lastUpdate = function(comp) {
  							if (update !== lastUpdate) return
  							if (comp === SKIP) return loop(i + 1)
  							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div";
  							attrs = data.params, currentPath = path, lastUpdate = null;
  							currentResolver = payload.render ? payload : null;
  							if (state === 2) mountRedraw.redraw();
  							else {
  								state = 2;
  								mountRedraw.redraw.sync();
  							}
  						};
  						// There's no understating how much I *wish* I could
  						// use `async`/`await` here...
  						if (payload.view || typeof payload === "function") {
  							payload = {};
  							update(localComp);
  						}
  						else if (payload.onmatch) {
  							p.then(function () {
  								return payload.onmatch(data.params, path, matchedRoute)
  							}).then(update, fail);
  						}
  						else update("div");
  						return
  					}
  				}
  				fail();
  			}
  		}

  		// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
  		// even if neither `pushState` nor `hashchange` are supported. It's
  		// cleared if `hashchange` is used, since that makes it automatically
  		// async.
  		fireAsync = function() {
  			if (!scheduled) {
  				scheduled = true;
  				callAsync(resolveRoute);
  			}
  		};

  		if (typeof $window.history.pushState === "function") {
  			onremove = function() {
  				$window.removeEventListener("popstate", fireAsync, false);
  			};
  			$window.addEventListener("popstate", fireAsync, false);
  		} else if (route.prefix[0] === "#") {
  			fireAsync = null;
  			onremove = function() {
  				$window.removeEventListener("hashchange", resolveRoute, false);
  			};
  			$window.addEventListener("hashchange", resolveRoute, false);
  		}

  		return mountRedraw.mount(root, {
  			onbeforeupdate: function() {
  				state = state ? 2 : 1;
  				return !(!state || sentinel === currentResolver)
  			},
  			oncreate: resolveRoute,
  			onremove: onremove,
  			view: function() {
  				if (!state || sentinel === currentResolver) return
  				// Wrap in a fragment to preserve existing key semantics
  				var vnode$1 = [vnode(component, attrs.key, attrs)];
  				if (currentResolver) vnode$1 = currentResolver.render(vnode$1[0]);
  				return vnode$1
  			},
  		})
  	}
  	route.set = function(path, data, options) {
  		if (lastUpdate != null) {
  			options = options || {};
  			options.replace = true;
  		}
  		lastUpdate = null;
  		setPath(path, data, options);
  	};
  	route.get = function() {return currentPath};
  	route.prefix = "#!";
  	route.Link = {
  		view: function(vnode) {
  			var options = vnode.attrs.options;
  			// Remove these so they don't get overwritten
  			var attrs = {}, onclick, href;
  			assign(attrs, vnode.attrs);
  			// The first two are internal, but the rest are magic attributes
  			// that need censored to not screw up rendering.
  			attrs.selector = attrs.options = attrs.key = attrs.oninit =
  			attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =
  			attrs.onbeforeremove = attrs.onremove = null;

  			// Do this now so we can get the most current `href` and `disabled`.
  			// Those attributes may also be specified in the selector, and we
  			// should honor that.
  			var child = hyperscript_1(vnode.attrs.selector || "a", attrs, vnode.children);

  			// Let's provide a *right* way to disable a route link, rather than
  			// letting people screw up accessibility on accident.
  			//
  			// The attribute is coerced so users don't get surprised over
  			// `disabled: 0` resulting in a button that's somehow routable
  			// despite being visibly disabled.
  			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
  				child.attrs.href = null;
  				child.attrs["aria-disabled"] = "true";
  				// If you *really* do want to do this on a disabled link, use
  				// an `oncreate` hook to add it.
  				child.attrs.onclick = null;
  			} else {
  				onclick = child.attrs.onclick;
  				href = child.attrs.href;
  				child.attrs.href = route.prefix + href;
  				child.attrs.onclick = function(e) {
  					var result;
  					if (typeof onclick === "function") {
  						result = onclick.call(e.currentTarget, e);
  					} else if (onclick == null || typeof onclick !== "object") ; else if (typeof onclick.handleEvent === "function") {
  						onclick.handleEvent(e);
  					}

  					// Adapted from React Router's implementation:
  					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
  					//
  					// Try to be flexible and intuitive in how we handle links.
  					// Fun fact: links aren't as obvious to get right as you
  					// would expect. There's a lot more valid ways to click a
  					// link than this, and one might want to not simply click a
  					// link, but right click or command-click it to copy the
  					// link target, etc. Nope, this isn't just for blind people.
  					if (
  						// Skip if `onclick` prevented default
  						result !== false && !e.defaultPrevented &&
  						// Ignore everything but left clicks
  						(e.button === 0 || e.which === 0 || e.which === 1) &&
  						// Let the browser handle `target=_blank`, etc.
  						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
  						// No modifier keys
  						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
  					) {
  						e.preventDefault();
  						e.redraw = false;
  						route.set(href, null, options);
  					}
  				};
  			}
  			return child
  		},
  	};
  	route.param = function(key) {
  		return attrs && key != null ? attrs[key] : attrs
  	};

  	return route
  };

  var route = router(window, mountRedraw$1);

  var m = function m() { return hyperscript_1$1.apply(this, arguments) };
  m.m = hyperscript_1$1;
  m.trust = hyperscript_1$1.trust;
  m.fragment = hyperscript_1$1.fragment;
  m.mount = mountRedraw$1.mount;
  m.route = route;
  m.render = render$1;
  m.redraw = mountRedraw$1.redraw;
  m.request = request$1.request;
  m.jsonp = request$1.jsonp;
  m.parseQueryString = parse;
  m.buildQueryString = build;
  m.parsePathname = parse$1;
  m.buildPathname = build$1;
  m.vnode = vnode;
  m.PromisePolyfill = polyfill;

  var mithril = m;

  var tocCSS = "#smarttoc {\n  all: initial;\n}\n\n#smarttoc *,\n#smarttoc *::before,\n#smarttoc *::after {\n  all: unset;\n}\n\n#smarttoc {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  min-width: 14em;\n  max-width: 50vw;\n  max-height: 100vh;\n  z-index: 10000;\n  box-sizing: border-box;\n  background-color: #fff;\n  color: gray;\n  font-size: calc(12px + 0.1vw);\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-weight: normal;\n  border: 1px solid rgba(158, 158, 158, 0.22);\n  -webkit-font-smoothing: subpixel-antialiased;\n  font-smoothing: subpixel-antialiased;\n  overflow: hidden;\n  will-change: transform, max-width;\n  transition: max-width 0.3s;\n  contain: content;\n}\n\n#smarttoc.hidden {\n  display: none;\n}\n\n#smarttoc .handle {\n  -webkit-user-select: none;\n  user-select: none;\n\n  border-bottom: 1px solid rgba(158, 158, 158, 0.22);\n  padding: 0.1em 0.7em;\n  font-variant-caps: inherit;\n  font-variant: small-caps;\n  font-size: 0.9em;\n  color: #bbb;\n  cursor: pointer;\n  text-align: center;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.3s;\n}\n\n#smarttoc:hover .handle {\n  max-width: 100vw;\n  opacity: 1;\n}\n\n#smarttoc .handle:hover {\n  cursor: grab;\n}\n#smarttoc .handle:active {\n  cursor: grabbing;\n}\n\n#smarttoc .handle:active {\n  background: #f9f9f9;\n}\n\n#smarttoc > ul {\n  flex-grow: 1;\n  padding: 0 1.3em 1.3em 1em;\n  overflow-y: auto;\n}\n\n/* all headings  */\n\n#smarttoc ul,\n#smarttoc li {\n  list-style: none;\n  display: block;\n}\n\n#smarttoc a {\n  text-decoration: none;\n  color: gray;\n  display: block;\n  line-height: 1.3;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n#smarttoc a:hover,\n#smarttoc a:active {\n  border-left-color: rgba(86, 61, 124, 0.5);\n  color: #563d7c;\n}\n\n#smarttoc li.active > a {\n  border-left-color: #563d7c;\n  color: #563d7c;\n}\n\n/* heading level: 1 */\n\n#smarttoc ul {\n  line-height: 2;\n}\n\n#smarttoc ul a {\n  font-size: 1em;\n  padding-left: 1.3em;\n}\n\n#smarttoc ul a:hover,\n#smarttoc ul a:active,\n#smarttoc ul li.active > a {\n  border-left-width: 3px;\n  border-left-style: solid;\n  padding-left: calc(1.3em - 3px);\n}\n\n#smarttoc ul li.active > a {\n  font-weight: 700;\n}\n\n/* heading level: 2 (hidden only when there are too many headings)  */\n\n#smarttoc ul ul {\n  line-height: 1.8;\n}\n\n#smarttoc.lengthy ul ul {\n  display: none;\n}\n\n#smarttoc.lengthy ul li.active > ul {\n  display: block;\n}\n\n#smarttoc ul ul a {\n  font-size: 1em;\n  padding-left: 2.7em;\n}\n\n#smarttoc ul ul a:hover,\n#smarttoc ul ul a:active,\n#smarttoc ul ul li.active > a {\n  border-left-width: 2px;\n  border-left-style: solid;\n  padding-left: calc(2.7em - 2px);\n  font-weight: normal;\n}\n\n/* heading level: 3 (hidden unless parent is active) */\n\n#smarttoc ul ul ul {\n  line-height: 1.7;\n  display: none;\n}\n\n#smarttoc ul ul li.active > ul {\n  display: block;\n}\n\n#smarttoc ul ul ul a {\n  font-size: 1em;\n  padding-left: 4em;\n}\n\n#smarttoc ul ul ul a:hover,\n#smarttoc ul ul ul a:active,\n#smarttoc ul ul ul li.active > a {\n  border-left-width: 1px;\n  border-left-style: solid;\n  padding-left: calc(4em - 1px);\n  font-weight: normal;\n}\n";

  // '12px' => 12
  const num = (size = '0') => {
      if (!size)
          return NaN;
      if (typeof size === 'number')
          return size;
      if (/px$/.test(size)) {
          return +size.replace(/px/, '');
      }
      return NaN;
  };
  // 12 => '12px'
  const px = (size = 0) => {
      return num(size) + 'px';
  };

  function applyStyle(elem, style = {}, reset = false) {
      function toDash(str) {
          return str.replace(/([A-Z])/g, (match, p1) => '-' + p1.toLowerCase());
      }
      if (reset) {
          // @ts-ignore
          elem.style = '';
      }
      if (typeof style === 'string') {
          // @ts-ignore
          elem.style = style;
      }
      else {
          for (let prop in style) {
              if (typeof style[prop] === 'number') {
                  elem.style.setProperty(toDash(prop), px(style[prop]), 'important');
              }
              else {
                  elem.style.setProperty(toDash(prop), style[prop], 'important');
              }
          }
      }
  }
  const addCSS = function (css, id) {
      let style;
      if (!document.getElementById(id)) {
          style = document.createElement('style');
          style.type = 'text/css';
          style.id = id;
          style.textContent = css;
          document.head.appendChild(style);
      }
      const removeCSS = () => {
          style.remove();
      };
      return removeCSS;
  };

  const stop = (e) => {
      e.stopPropagation();
      e.preventDefault();
  };
  const Handle = (vnode) => {
      let dragStart = { x: 0, y: 0 };
      let offset = { x: 0, y: 0 };
      const onDrag = (e) => {
          stop(e);
          const [dX, dY] = [e.clientX - dragStart.x, e.clientY - dragStart.y];
          vnode.attrs.onDrag({ x: offset.x + dX, y: offset.y + dY });
      };
      const onDragEnd = (e) => {
          window.removeEventListener('mousemove', onDrag);
          window.removeEventListener('mouseup', onDragEnd);
      };
      const onDragStart = (e, vnode) => {
          if (e.button === 0) {
              stop(e);
              dragStart = {
                  x: e.clientX,
                  y: e.clientY,
              };
              offset = Object.assign({}, vnode.attrs.userOffset);
              window.addEventListener('mousemove', onDrag);
              window.addEventListener('mouseup', onDragEnd);
              mithril.redraw();
          }
      };
      return {
          view(vnode) {
              return mithril('.handle', {
                  onmousedown(e) {
                      onDragStart(e, vnode);
                  },
              }, 'table of contents');
          },
      };
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  const toTree = (headings, activeHeading) => {
      const tree = { level: 0, children: [] };
      const stack = [tree];
      const stackTop = () => stack.slice(-1)[0];
      let i = 0;
      while (i < headings.length) {
          const { level } = headings[i];
          if (level === stack.length) {
              // is direct children
              const node = {
                  heading: Object.assign({}, headings[i]),
                  children: [],
              };
              stackTop().children.push(node);
              stack.push(node);
              if (i === activeHeading) {
                  stack.forEach((node) => {
                      node.isActive = true;
                  });
              }
              i++;
          }
          else if (level < stack.length) {
              // is sibiling/parent
              stack.pop();
          }
          else if (level > stack.length) {
              // is grand child
              const node = {
                  heading: undefined,
                  children: [],
              };
              stackTop().children.push(node);
              stack.push(node);
          }
      }
      return tree;
  };
  const restrictScroll = function (e) {
      const toc = e.currentTarget;
      const maxScroll = toc.scrollHeight - toc.offsetHeight;
      if (toc.scrollTop + e.deltaY < 0) {
          toc.scrollTop = 0;
          e.preventDefault();
      }
      else if (toc.scrollTop + e.deltaY > maxScroll) {
          toc.scrollTop = maxScroll;
          e.preventDefault();
      }
      e.redraw = false;
  };
  const TocContent = () => {
      let isScrollingToHeading = false;
      const revealActiveHeading = (tocPanelDom, headingDom) => {
          const panelRect = tocPanelDom.getBoundingClientRect();
          const headingRect = headingDom.getBoundingClientRect();
          const isOutOfView = headingRect.top > panelRect.bottom || headingRect.bottom < panelRect.top;
          if (isOutOfView) {
              const halfPanelHeight = tocPanelDom.offsetHeight / 2 - headingDom.offsetHeight / 2;
              smoothScroll({
                  target: headingDom,
                  scroller: tocPanelDom,
                  topMargin: halfPanelHeight,
                  maxDuration: 0,
              });
          }
      };
      return {
          onupdate(vnode) {
              if (isScrollingToHeading) {
                  return;
              }
              const activeHeadings = toArray(vnode.dom.querySelectorAll('.active'));
              const activeHeading = activeHeadings[activeHeadings.length - 1]; // could have several '.active' headings (for multiple levels)
              if (activeHeading) {
                  revealActiveHeading(vnode.dom, activeHeading);
              }
          },
          view(vnode) {
              const { headings, activeHeading, onScrollToHeading } = vnode.attrs;
              const tree = toTree(headings, activeHeading);
              const HeadingList = (nodes, { isRoot = false } = {}) => mithril('ul', {
                  onwheel: isRoot && restrictScroll,
                  onclick: isRoot &&
                      ((e) => __awaiter(this, void 0, void 0, function* () {
                          e.preventDefault();
                          e.stopPropagation();
                          const index = Number(e.target.dataset.index);
                          if (!Number.isNaN(index)) {
                              isScrollingToHeading = true;
                              yield onScrollToHeading(index);
                              isScrollingToHeading = false;
                          }
                      })),
              }, nodes.map(HeadingItem));
              const HeadingItem = ({ heading, children, isActive }, index) => mithril('li', { class: isActive ? 'active' : '', key: index }, [
                  heading &&
                      mithril('a', Object.assign(Object.assign({}, (heading.anchor ? { href: `#${heading.anchor}` } : {})), { [`data-index`]: heading.id }), heading.text),
                  children && children.length && HeadingList(children),
              ].filter(Boolean));
              return HeadingList(tree.children, { isRoot: true });
          },
      };
  };

  const ROOT_ID = 'smarttoc-wrapper';
  const CSS_ID = 'smarttoc__css';
  const calcPlacement = function (article) {
      const { left, right } = article;
      const winWidth = window.innerWidth;
      const panelMinWidth = 250;
      const spaceRight = winWidth - right;
      const spaceLeft = left;
      const gap = 80;
      return spaceRight < panelMinWidth + gap && spaceLeft > panelMinWidth + gap
          ? 'left'
          : 'right';
  };
  const calcStyle = function (options) {
      const { article, scroller, offset, topMargin } = options;
      //-------------- x --------------
      const { left, right } = article;
      const winWidth = window.innerWidth;
      const panelMinWidth = 250;
      const gap = 80;
      const x = options.placement === 'left'
          ? Math.max(0, left - gap - panelMinWidth) // place at left
          : Math.min(right + gap, winWidth - panelMinWidth); // place at right
      //-------------- y --------------
      const scrollableTop = scroller.dom === document.body ? 0 : scroller.rect.top;
      const y = Math.max(scrollableTop, topMargin) + 50;
      const style = {
          left: `${x + offset.x}px`,
          top: `${y + offset.y}px`,
          maxHeight: `calc(100vh - ${y}px - 50px)`,
      };
      return style;
  };
  const ui = {
      render: (options) => {
          const { $isShown, $offset, $article, $scroller, $headings, $activeHeading, $topbarHeight, onDrag, onScrollToHeading, } = options;
          const $redraw = Stream.merge([
              Stream.merge([$isShown, $offset, $article, $scroller]),
              Stream.merge([$headings, $activeHeading, $topbarHeight]),
          ]).log('redraw');
          let root = document.getElementById(ROOT_ID);
          if (!root) {
              root = document.body.appendChild(document.createElement('DIV'));
              root.id = ROOT_ID;
          }
          addCSS(tocCSS, CSS_ID);
          const isTooManyHeadings = () => $headings().filter((h) => h.level <= 2).length > 50;
          let initialPlacement;
          mithril.mount(root, {
              view() {
                  if (!$isShown() ||
                      !$article() ||
                      !$scroller() ||
                      !($headings() && $headings().length)) {
                      return null;
                  }
                  if (!initialPlacement) {
                      initialPlacement = calcPlacement($article());
                  }
                  return mithril('nav#smarttoc', {
                      class: isTooManyHeadings() ? 'lengthy' : '',
                      style: calcStyle({
                          article: $article(),
                          scroller: $scroller(),
                          offset: $offset(),
                          topMargin: $topbarHeight() || 0,
                          placement: initialPlacement,
                      }),
                  }, [
                      mithril(Handle, {
                          userOffset: $offset(),
                          onDrag,
                      }),
                      mithril(TocContent, {
                          article: $article(),
                          headings: $headings(),
                          activeHeading: $activeHeading(),
                          onScrollToHeading,
                      }),
                  ]);
              },
          });
          $redraw.subscribe(() => mithril.redraw());
      },
      dispose: () => {
          const root = document.getElementById(ROOT_ID);
          if (root) {
              mithril.mount(root, null);
              root.remove();
          }
      },
  };

  const between = (min, value, max) => {
      return Math.max(min, Math.min(max, value));
  };

  //-------------- container extender  --------------
  const EXTENDER_ID = 'smarttoc-extender';
  const appendExtender = (content, topbarHeight) => {
      const { article, scroller, headings } = content;
      let extender = scroller.dom.querySelector('#' + EXTENDER_ID);
      const extenderHeight = extender ? extender.offsetHeight : 0;
      if (!extender) {
          extender = document.createElement('div');
          extender.id = EXTENDER_ID;
          scroller.dom.appendChild(extender);
      }
      const visibleAreaBottom = Math.max(topbarHeight, scroller.rect.top);
      const getBottomHeading = (headings) => {
          const [first, ...rest] = headings;
          return (first &&
              rest.reduce((lowest, cur) => cur.fromArticleTop > lowest.fromArticleTop ? cur : lowest, first));
      };
      const bottomHeading = getBottomHeading(headings);
      if (!bottomHeading) {
          return;
      }
      //  the top of last heading, when scrolled to bottom of scroller
      const bottomHeadingTop = scroller.rect.bottom -
          (scroller.dom.scrollHeight - extenderHeight) +
          article.fromScrollerTop +
          bottomHeading.fromArticleTop;
      const additionalVerticalSpaceNeeded = Math.max(0, bottomHeadingTop - visibleAreaBottom);
      extender.style.height = additionalVerticalSpaceNeeded + 'px';
      if (isDebugging) {
          console.log('[extender] height: ', additionalVerticalSpaceNeeded);
      }
  };
  const removeExtender = () => {
      const extender = document.getElementById(EXTENDER_ID);
      if (extender) {
          extender.remove();
      }
  };
  //-------------- apply readable style --------------
  const DATASET_ARTICLE = 'smarttocArticle';
  const DATASET_ARTICLE__CAMELCASE = 'smarttoc-article';
  const DATASET_ORIGIN_STYLE = 'smarttocOriginStyle';
  const applyReadableStyle = (article) => {
      article.dataset[DATASET_ARTICLE] = '1';
      article.dataset[DATASET_ORIGIN_STYLE] = article.style.cssText;
      const computed = window.getComputedStyle(article);
      if (!computed)
          throw new Error('article should be element');
      const rect = article.getBoundingClientRect();
      let bestWidth = between(12, num(computed.fontSize), 16) * 66;
      if (computed['box-sizing'] === 'border-box') {
          bestWidth += num(computed['padding-left']) + num(computed['padding-right']);
      }
      let readableStyle = {};
      if (bestWidth < rect.width) {
          readableStyle.maxWidth = px(bestWidth);
          if (!(num(computed.marginLeft) || num(computed.marginRight))) {
              readableStyle.marginLeft = 'auto';
              readableStyle.marginRight = 'auto';
          }
      }
      applyStyle(article, readableStyle);
  };
  const removeReadableStyle = () => {
      const articles = toArray(document.querySelectorAll(`[data-${DATASET_ARTICLE__CAMELCASE}]`));
      articles.forEach((article) => {
          applyStyle(article, article.dataset[DATASET_ORIGIN_STYLE]);
          delete article.dataset[DATASET_ARTICLE];
          delete article.dataset[DATASET_ORIGIN_STYLE];
      });
  };
  const enterReadableMode = (content, { topbarHeight }) => {
      leaveReadableMode();
      if (isDebugging) {
          console.log('[readable mode] enter');
      }
      applyReadableStyle(content.article.dom);
      appendExtender(content, topbarHeight);
  };
  const leaveReadableMode = () => {
      if (isDebugging) {
          console.log('[readable mode] leave');
      }
      removeReadableStyle();
      removeExtender();
  };

  function activeHeadingStream({ scroller, $isShown, $content, $topbarHeight, addDisposer, }) {
      const calcActiveHeading = ({ article, scroller, headings, topbarHeight, }) => {
          const visibleAreaHeight = Math.max(topbarHeight, scroller.rect.top);
          const scrollY = getScrollTop(scroller.dom);
          let i = 0;
          for (; i < headings.length; i++) {
              const heading = headings[i];
              const headingRectTop = scroller.rect.top -
                  scrollY +
                  article.fromScrollerTop +
                  heading.fromArticleTop;
              const isCompletelyVisible = headingRectTop >= visibleAreaHeight + 15;
              if (isCompletelyVisible) {
                  break;
              }
          }
          // the 'nearly-visible' heading (headings[i-1]) is the current heading
          const curIndex = Math.max(0, i - 1);
          return curIndex;
      };
      const $scroll = Stream.fromEvent(scroller === document.body ? window : scroller, 'scroll', addDisposer)
          .map(() => null)
          .startsWith(null)
          .log('scroll');
      const $activeHeading = Stream.combine([
          $content,
          $topbarHeight,
          $scroll,
          $isShown,
      ])
          .filter(() => $isShown())
          .map(([content, topbarHeight, _]) => {
          const { article, scroller, headings } = content;
          if (!(headings && headings.length)) {
              return 0;
          }
          else {
              return calcActiveHeading({
                  article,
                  scroller,
                  headings,
                  topbarHeight: topbarHeight || 0,
              });
          }
      });
      return $activeHeading;
  }
  function contentStream({ $isShown, $periodicCheck, $triggerContentChange, article, scroller, addDisposer, }) {
      const $resize = Stream.fromEvent(window, 'resize', addDisposer)
          .throttle(100)
          .log('resize');
      const $content = Stream.merge([
          $triggerContentChange,
          $isShown,
          $resize,
          $periodicCheck,
      ])
          .filter(() => $isShown())
          .map(() => {
          const articleRect = article.getBoundingClientRect();
          const scrollerRect = scroller === document.body || scroller === document.documentElement
              ? {
                  left: 0,
                  right: window.innerWidth,
                  top: 0,
                  bottom: window.innerHeight,
                  height: window.innerHeight,
                  width: window.innerWidth,
              }
              : scroller.getBoundingClientRect();
          const headings = extractHeadings(article);
          const scrollY = getScrollTop(scroller);
          const headingsMeasured = headings.map((h) => {
              const headingRect = h.dom.getBoundingClientRect();
              return Object.assign(Object.assign({}, h), { fromArticleTop: headingRect.top - (articleRect.top - article.scrollTop) });
          });
          return {
              article: {
                  dom: article,
                  fromScrollerTop: article === scroller
                      ? 0
                      : articleRect.top - scrollerRect.top + scrollY,
                  left: articleRect.left,
                  right: articleRect.right,
                  height: articleRect.height,
              },
              scroller: {
                  dom: scroller,
                  rect: scrollerRect,
              },
              headings: headingsMeasured,
          };
      });
      return $content;
  }
  function topbarStream($triggerTopbarMeasure) {
      const getTopbarHeight = (targetElem) => {
          const findFixedParent = (elem) => {
              const isFixed = (elem) => {
                  let { position, zIndex } = window.getComputedStyle(elem);
                  return position === 'fixed' && zIndex;
              };
              while (elem && elem !== document.body && !isFixed(elem)) {
                  elem = elem.parentElement;
              }
              return elem === document.body ? null : elem;
          };
          const { top, left, right, bottom } = targetElem.getBoundingClientRect();
          const leftTopmost = document.elementFromPoint(left + 1, top + 1);
          const rightTopmost = document.elementFromPoint(right - 1, top + 1);
          const leftTopFixed = leftTopmost && findFixedParent(leftTopmost);
          const rightTopFixed = rightTopmost && findFixedParent(rightTopmost);
          if (leftTopFixed && rightTopFixed && leftTopFixed === rightTopFixed) {
              return leftTopFixed.offsetHeight;
          }
          else {
              return 0;
          }
      };
      const $topbarHeightMeasured = $triggerTopbarMeasure
          .throttle(50)
          .map((elem) => getTopbarHeight(elem))
          .unique()
          .log('topbarHeightMeasured');
      const $topbarHeight = $topbarHeightMeasured.scan((height, measured) => Math.max(height, measured), 0);
      return $topbarHeight;
  }
  function createToc(options) {
      const article = options.article;
      const scroller = getScrollElement(article);
      //-------------- Helpers --------------
      const disposers = [];
      const addDisposer = (dispose) => disposers.push(dispose);
      const emitter = createEventEmitter();
      //-------------- Triggers --------------
      const $triggerTopbarMeasure = Stream().log('triggerTopbarMeasure');
      const $triggerContentChange = Stream(null).log('triggerContentChange');
      const $triggerIsShown = Stream().log('triggerIsShown');
      const $periodicCheck = Stream.fromInterval(1000 * 60, addDisposer).log('check');
      //-------------- Observables --------------
      const $isShown = $triggerIsShown.unique().log('isShown');
      const $topbarHeight = topbarStream($triggerTopbarMeasure).log('topbarHeight');
      const $content = contentStream({
          $triggerContentChange,
          $periodicCheck,
          $isShown,
          article,
          scroller,
          addDisposer,
      }).log('content');
      const $activeHeading = activeHeadingStream({
          scroller,
          $isShown,
          $content,
          $topbarHeight,
          addDisposer,
      }).log('activeHeading');
      const $offset = Stream(options.preference.offset).log('offset');
      const $readableMode = Stream.combine([
          $isShown.unique(),
          $content.map((c) => c.article.height).unique(),
          $content.map((c) => c.scroller.rect.height).unique(),
          $content.map((c) => c.headings.length).unique(),
      ])
          .map(([isShown]) => isShown)
          .log('readable');
      //-------------- Effects --------------
      const scrollToHeading = (headingIndex) => {
          return new Promise((resolve, reject) => {
              const { headings, scroller } = $content();
              const topbarHeight = $topbarHeight();
              const heading = headings[headingIndex];
              if (heading) {
                  smoothScroll({
                      target: heading.dom,
                      scroller: scroller.dom,
                      topMargin: topbarHeight || 0 + 10,
                      callback() {
                          $triggerTopbarMeasure(heading.dom);
                          resolve();
                      },
                  });
              }
              else {
                  resolve();
              }
          });
      };
      $readableMode.subscribe((enableReadableMode) => {
          if (enableReadableMode) {
              enterReadableMode($content(), { topbarHeight: $topbarHeight() });
          }
          else {
              leaveReadableMode();
          }
          $triggerContentChange(null);
      });
      const validate = (content) => {
          const { article, headings, scroller } = content;
          const isScrollerValid = document.documentElement === scroller.dom ||
              document.documentElement.contains(scroller.dom);
          const isArticleValid = scroller.dom === article.dom || scroller.dom.contains(article.dom);
          const isHeadingsValid = headings.length &&
              article.dom.contains(headings[0].dom) &&
              article.dom.contains(headings[headings.length - 1].dom);
          const isValid = isScrollerValid && isArticleValid && isHeadingsValid;
          if (!isValid) {
              emitter.emit('error', { reason: 'Article Changed' });
          }
      };
      $content.subscribe(validate);
      ui.render({
          $isShown,
          $article: $content.map((c) => c.article),
          $scroller: $content.map((c) => c.scroller),
          $headings: $content.map((c) => c.headings),
          $offset,
          $activeHeading,
          $topbarHeight,
          onDrag(offset) {
              $offset(offset);
          },
          onScrollToHeading: scrollToHeading,
      });
      //-------------- Exposed Commands --------------
      const next = () => {
          const { headings } = $content();
          const activeHeading = $activeHeading();
          const nextIndex = Math.min(headings.length - 1, activeHeading + 1);
          scrollToHeading(nextIndex);
      };
      const prev = () => {
          const activeHeading = $activeHeading();
          const prevIndex = Math.max(0, activeHeading - 1);
          scrollToHeading(prevIndex);
      };
      const show = () => {
          $triggerIsShown(true);
      };
      const hide = () => {
          $triggerIsShown(false);
      };
      const toggle = () => {
          if ($isShown()) {
              hide();
          }
          else {
              show();
          }
      };
      const dispose = () => {
          hide();
          disposers.forEach((dispose) => dispose());
          emitter.removeAllListeners();
      };
      const getPreference = () => {
          return {
              offset: $offset(),
          };
      };
      return Object.assign(Object.assign({}, emitter), { show,
          hide,
          toggle,
          prev,
          next,
          getPreference,
          dispose });
  }

  var toastCSS = "#smarttoc-toast {\n  all: initial;\n}\n\n#smarttoc-toast * {\n  all: unset;\n}\n\n#smarttoc-toast {\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  margin: 1em 2em;\n  padding: 1em;\n  z-index: 10000;\n  box-sizing: border-box;\n  background-color: #fff;\n  border: 1px solid rgba(158, 158, 158, 0.22);\n  color: gray;\n  font-size: calc(12px + 0.15vw);\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: normal;\n  -webkit-font-smoothing: subpixel-antialiased;\n  font-smoothing: subpixel-antialiased;\n  transition: opacity 200ms ease-out, transform 200ms ease-out;\n}\n\n#smarttoc-toast.enter {\n  display: block;\n  opacity: 0.01;\n  transform: translate3d(0, -2em, 0);\n}\n\n#smarttoc-toast.enter.enter-active {\n  display: block;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n#smarttoc-toast.leave {\n  display: block;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n#smarttoc-toast.leave.leave-active {\n  display: block;\n  opacity: 0.01;\n  transform: translate3d(0, -2em, 0);\n}\n";

  function setClass(elem, names, delay) {
      if (delay == null) {
          elem.className = names;
      }
      else {
          return window.setTimeout(() => {
              elem.className = names;
          }, delay);
      }
  }
  let timers = [];
  function showToast(msg) {
      addCSS(toastCSS, 'smarttoc-toast__css');
      const set = (classNames, delay) => {
          return setClass(toast, classNames, delay);
      };
      let toast = document.getElementById('smarttoc-toast');
      if (!toast) {
          toast = document.createElement('DIV');
          toast.id = 'smarttoc-toast';
          document.body.appendChild(toast);
      }
      toast.textContent = msg;
      timers.forEach(window.clearTimeout);
      set('');
      set('enter');
      timers = [
          set('enter enter-active', 0),
          set('leave', 3000),
          set('leave leave-active', 3000),
          set('', 3000 + 200),
      ];
  }

  if (window === getContentWindow()) {
      let preference = {
          offset: { x: 0, y: 0 },
      };
      let toc;
      const start = () => {
          const article = extractArticle();
          const headings = article && extractHeadings(article);
          if (!(article && headings && headings.length)) {
              showToast('No article/headings are detected.');
              return;
          }
          if (toc) {
              toc.dispose();
          }
          toc = createToc({
              article,
              preference,
          });
          toc.on('error', (error) => {
              if (toc) {
                  toc.dispose();
                  toc = undefined;
              }
              // re-extract && restart
              start();
          });
          toc.show();
      };
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
          try {
              if (!toc) {
                  start();
              }
              else {
                  toc[request]();
              }
              sendResponse(true);
          }
          catch (e) {
              console.error(e);
              sendResponse(false);
          }
      });
      start();
  }

}());
