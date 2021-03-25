const e = ['text'],
  t = [
    'ADDRESS',
    'ARTICLE',
    'ASIDE',
    'BLOCKQUOTE',
    'DETAILS',
    'DIALOG',
    'DD',
    'DIV',
    'DL',
    'DT',
    'FIELDSET',
    'FIGCAPTION',
    'FIGURE',
    'FOOTER',
    'FORM',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'HEADER',
    'HGROUP',
    'HR',
    'LI',
    'MAIN',
    'NAV',
    'OL',
    'P',
    'PRE',
    'SECTION',
    'TABLE',
    'UL',
  ],
  u = /[\t-\r -#%-\*,-\/:;\?@\[-\]_\{\}\x85\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/u,
  n = (e) => {
    const t = /^(?:(.+?)-,)?(?:(.+?))(?:,([^-]+?))?(?:,-(.+?))?$/;
    return {
      prefix: decodeURIComponent(e.replace(t, '$1')),
      textStart: decodeURIComponent(e.replace(t, '$2')),
      textEnd: decodeURIComponent(e.replace(t, '$3')),
      suffix: decodeURIComponent(e.replace(t, '$4')),
    };
  },
  o = (e) => {
    const t = document.createRange();
    for (t.selectNodeContents(document.body); !t.collapsed; ) {
      let u;
      if (e.prefix) {
        const n = d(e.prefix, t);
        if (null == n) return [];
        s(t, n.startContainer, n.startOffset);
        const o = document.createRange();
        if (
          (o.setStart(n.endContainer, n.endOffset),
          o.setEnd(t.endContainer, t.endOffset),
          D(o),
          o.collapsed)
        )
          return [];
        if (((u = d(e.textStart, o)), null == u)) return [];
        if (0 !== u.compareBoundaryPoints(Range.START_TO_START, o)) continue;
      } else {
        if (((u = d(e.textStart, t)), null == u)) return [];
        s(t, u.startContainer, u.startOffset);
      }
      if (e.textEnd) {
        const n = document.createRange();
        for (
          n.setStart(u.endContainer, u.endOffset),
            n.setEnd(t.endContainer, t.endOffset);
          !n.collapsed;

        ) {
          const o = d(e.textEnd, n);
          if (null == o) return [];
          if (
            (s(n, o.startContainer, o.startOffset),
            u.setEnd(o.endContainer, o.endOffset),
            !e.suffix)
          )
            return a(u);
          switch (F(e.suffix, u, t)) {
            case r.NO_SUFFIX_MATCH:
              return [];
            case r.SUFFIX_MATCH:
              return a(u);
            case r.MISPLACED_SUFFIX:
              continue;
          }
        }
      } else if (e.suffix) {
        switch (F(e.suffix, u, t)) {
          case r.NO_SUFFIX_MATCH:
            return [];
          case r.SUFFIX_MATCH:
            return a(u);
          case r.MISPLACED_SUFFIX:
            continue;
        }
      }
      return a(u);
    }
    return [];
  },
  r = { NO_SUFFIX_MATCH: 0, SUFFIX_MATCH: 1, MISPLACED_SUFFIX: 2 },
  F = (e, t, u) => {
    const n = document.createRange();
    n.setStart(t.endContainer, t.endOffset),
      n.setEnd(u.endContainer, u.endOffset),
      D(n);
    const o = d(e, n);
    return null == o
      ? r.NO_SUFFIX_MATCH
      : 0 !== o.compareBoundaryPoints(Range.START_TO_START, n)
      ? r.MISPLACED_SUFFIX
      : r.SUFFIX_MATCH;
  },
  s = (e, t, u) => {
    try {
      e.setStart(t, u + 1);
    } catch (u) {
      e.setStartAfter(t);
    }
  },
  D = (e) => {
    const t = document.createTreeWalker(
      e.commonAncestorContainer,
      NodeFilter.SHOW_TEXT,
      (t) => c(t, e)
    );
    let n = t.nextNode();
    for (; !e.collapsed && null != n; ) {
      if (
        (n !== e.startContainer && e.setStart(n, 0),
        n.textContent.length > e.startOffset)
      ) {
        if (!n.textContent[e.startOffset].match(u)) return;
      }
      try {
        e.setStart(n, e.startOffset + 1);
      } catch (u) {
        (n = t.nextNode()), null == n ? e.collapse() : e.setStart(n, 0);
      }
    }
  },
  a = (e) => {
    if (
      e.startContainer.nodeType != Node.TEXT_NODE ||
      e.endContainer.nodeType != Node.TEXT_NODE
    )
      return [];
    if (e.startContainer === e.endContainer) {
      const t = document.createElement('mark');
      return e.surroundContents(t), [t];
    }
    const u = e.startContainer,
      n = e.cloneRange();
    n.setEndAfter(u);
    const o = e.endContainer,
      r = e.cloneRange();
    r.setStartBefore(o);
    const F = [];
    e.setStartAfter(u), e.setEndBefore(o);
    const s = document.createTreeWalker(
      e.commonAncestorContainer,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (u) {
          return e.intersectsNode(u)
            ? t.includes(u.tagName) || u.nodeType === Node.TEXT_NODE
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_REJECT;
        },
      }
    );
    let D = s.nextNode();
    for (; D; ) {
      if (D.nodeType === Node.TEXT_NODE) {
        const e = document.createElement('mark');
        D.parentNode.insertBefore(e, D), e.appendChild(D), F.push(e);
      }
      D = s.nextNode();
    }
    const a = document.createElement('mark');
    n.surroundContents(a);
    const c = document.createElement('mark');
    return r.surroundContents(c), [a, ...F, c];
  },
  c = (e, t) => {
    if (null != t && !t.intersectsNode(e)) return NodeFilter.FILTER_REJECT;
    let u = e;
    for (; null != u && !(u instanceof HTMLElement); ) u = u.parentNode;
    if (null != u) {
      const e = window.getComputedStyle(u);
      if (
        'hidden' === e.visibility ||
        'none' === e.display ||
        0 === e.height ||
        0 === e.width ||
        0 === e.opacity
      )
        return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  },
  i = (e, u) => {
    const n = [];
    let o = [];
    const r = Array.from(
      (function* (e, t) {
        const u = document.createTreeWalker(
          e,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
          { acceptNode: t }
        );
        let n;
        for (; (n = u.nextNode()); ) yield n;
      })(e, (e) => c(e, u))
    );
    for (const e of r)
      e.nodeType === Node.TEXT_NODE
        ? o.push(e)
        : e instanceof HTMLElement &&
          t.includes(e.tagName) &&
          o.length > 0 &&
          (n.push(o), (o = []));
    return o.length > 0 && n.push(o), n;
  };
const d = (e, t) => {
    const u = i(t.commonAncestorContainer, t);
    for (const n of u) {
      const u = l(e, t, n);
      if (void 0 !== u) return u;
    }
  },
  l = (e, t, u) => {
    if (!e || !t || !(u || []).length) return;
    const n = f(
        ((e, t, u) => {
          let n = '';
          return (
            (n =
              1 === e.length
                ? e[0].textContent.substring(t, u)
                : e[0].textContent.substring(t) +
                  e.slice(1, -1).reduce((e, t) => e + t.textContent, '') +
                  e.slice(-1)[0].textContent.substring(0, u)),
            n.replace(/[\t\n\r ]+/g, ' ')
          );
        })(u, 0, void 0)
      ),
      o = f(e);
    let r,
      F,
      s = u[0] === t.startNode ? t.startOffset : 0;
    for (; s < n.length; ) {
      const e = n.indexOf(o, s);
      if (-1 === e) return;
      if (
        (C(n, e, o.length) && ((r = E(e, u, !1)), (F = E(e + o.length, u, !0))),
        null != r && null != F)
      ) {
        const e = document.createRange();
        if (
          (e.setStart(r.node, r.offset),
          e.setEnd(F.node, F.offset),
          t.compareBoundaryPoints(Range.START_TO_START, e) <= 0 &&
            t.compareBoundaryPoints(Range.END_TO_END, e) >= 0)
        )
          return e;
      }
      s = e + 1;
    }
  },
  E = (e, t, u) => {
    let n,
      o = 0;
    for (let r = 0; r < t.length; r++) {
      const F = t[r];
      n || (n = f(F.data));
      let s = o + n.length;
      if ((u && (s += 1), s > e)) {
        const t = e - o;
        let r = Math.min(e - o, F.data.length);
        const s = u ? n.substring(0, t) : n.substring(t);
        let D = f(u ? F.data.substring(0, r) : F.data.substring(r));
        const a = (u ? -1 : 1) * (s.length > D.length ? -1 : 1);
        for (; r >= 0 && r <= F.data.length; ) {
          if (D.length === s.length) return { node: F, offset: r };
          (r += a), (D = f(u ? F.data.substring(0, r) : F.data.substring(r)));
        }
      }
      if (((o += n.length), r + 1 < t.length)) {
        const e = f(t[r + 1].data);
        ' ' === n.slice(-1) && ' ' === e.slice(0, 1) && (o -= 1), (n = e);
      }
    }
  },
  C = (e, t, n) =>
    !(t < 0 || t >= e.length || n <= 0 || t + n > e.length) &&
    !(0 !== t && !e[t - 1].match(u)) &&
    !(t + n !== e.length && !e[t + n].match(u)),
  f = (e) =>
    (e || '')
      .normalize('NFKD')
      .replace(/\s+/g, ' ')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
'undefined' != typeof goog &&
  goog.declareModuleId(
    'googleChromeLabs.textFragmentPolyfill.textFragmentUtils'
  ),
  (async () => {
    const t = document.location.hash;
    if ('fragmentDirective' in Location.prototype || !t) return;
    document.fragmentDirective = {};
    const u = () => {
      const u = ((t) => {
        const u = {};
        for (const [n, r] of Object.entries(t))
          e.includes(n) && (u[n] = r.map((e) => o(e)));
        return u;
      })(
        ((t) => {
          const u = {};
          for (const [o, r] of Object.entries(t))
            e.includes(o) && (u[o] = r.map((e) => n(e)));
          return u;
        })(
          ((e) => {
            const t = e
              .replace(/#.*?:~:(.*?)/, '$1')
              .split(/&?text=/)
              .filter(Boolean);
            return t.length ? { text: t } : {};
          })(t)
        )
      ).text.find((e) => e.length)[0];
      u &&
        window.setTimeout(() => {
          u.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'nearest',
          });
        });
    };
    'complete' !== document.readyState
      ? window.addEventListener('DOMContentLoaded', u)
      : u();
  })();
