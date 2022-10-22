//Copyright 2019 and Patent Pending. 2019-10-26 22:43:15
(function() {
  var aa = encodeURIComponent, ba = Infinity, ca = setTimeout, da = isNaN, l = Math, ea = decodeURIComponent;
  function ha(a, b) {
    return a.name = b;
  }
  var m = "push", ia = "test", ja = "slice", p = "replace", ka = "load", la = "floor", ma = "charAt", na = "value", q = "indexOf", oa = "match", pa = "port", qa = "createElement", ra = "path", r = "name", g = "getTime", u = "host", v = "toString", w = "length", x = "prototype", sa = "clientWidth", y = "split", ta = "stopPropagation", ua = "scope", z = "location", va = "search", A = "protocol", wa = "clientHeight", xa = "href", B = "substring", ya = "apply", za = "navigator", C = "join", D = "toLowerCase", 
  E;
  function Aa(a, b) {
    switch(b) {
      case 0:
        return "" + a;
      case 1:
        return 1 * a;
      case 2:
        return !!a;
      case 3:
        return 1E3 * a;
    }
    return a;
  }
  function Ba(a) {
    return "function" == typeof a;
  }
  function Ca(a) {
    return void 0 != a && -1 < (a.constructor + "")[q]("String");
  }
  function F(a, b) {
    return void 0 == a || "-" == a && !b || "" == a;
  }
  function Da(a) {
    if (!a || "" == a) {
      return "";
    }
    for (; a && -1 < " \n\r\t"[q](a[ma](0));) {
      a = a[B](1);
    }
    for (; a && -1 < " \n\r\t"[q](a[ma](a[w] - 1));) {
      a = a[B](0, a[w] - 1);
    }
    return a;
  }
  function Ea() {
    return l.round(2147483647 * l.random());
  }
  function Fa() {
  }
  function G(a, b) {
    if (aa instanceof Function) {
      return b ? encodeURI(a) : aa(a);
    }
    H(68);
    return escape(a);
  }
  function I(a) {
    a = a[y]("+")[C](" ");
    if (ea instanceof Function) {
      try {
        return ea(a);
      } catch (b) {
        H(17);
      }
    } else {
      H(68);
    }
    return unescape(a);
  }
  var Ga = function(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, Ha = function(a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c);
  };
  function Ia(a, b) {
    if (a) {
      var c = J[qa]("script");
      c.type = "text/javascript";
      c.async = !0;
      c.src = a;
      c.id = b;
      var d = J.getElementsByTagName("script")[0];
      d.parentNode.insertBefore(c, d);
      return c;
    }
  }
  function K(a) {
    return a && 0 < a[w] ? a[0] : "";
  }
  function L(a) {
    var b = a ? a[w] : 0;
    return 0 < b ? a[b - 1] : "";
  }
  var Ja = function() {
    this.prefix = "ga.";
    this.R = {};
  };
  Ja[x].set = function(a, b) {
    this.R[this.prefix + a] = b;
  };
  Ja[x].get = function(a) {
    return this.R[this.prefix + a];
  };
  Ja[x].contains = function(a) {
    return void 0 !== this.get(a);
  };
  function Ka(a) {
    0 == a[q]("www.") && (a = a[B](4));
    return a[D]();
  }
  function La(a, b) {
    var c, d = {url:a, protocol:"http", host:"", path:"", d:new Ja, anchor:""};
    if (!a) {
      return d;
    }
    c = a[q]("://");
    0 <= c && (d.protocol = a[B](0, c), a = a[B](c + 3));
    c = a[va]("/|\\?|#");
    if (0 <= c) {
      d.host = a[B](0, c)[D](), a = a[B](c);
    } else {
      return d.host = a[D](), d;
    }
    c = a[q]("#");
    0 <= c && (d.anchor = a[B](c + 1), a = a[B](0, c));
    c = a[q]("?");
    0 <= c && (Na(d.d, a[B](c + 1)), a = a[B](0, c));
    d.anchor && b && Na(d.d, d.anchor);
    a && "/" == a[ma](0) && (a = a[B](1));
    d.path = a;
    return d;
  }
  function Oa(a, b) {
    function c(a) {
      var b = (a.hostname || "")[y](":")[0][D](), c = (a[A] || "")[D](), c = 1 * a[pa] || ("http:" == c ? 80 : "https:" == c ? 443 : "");
      a = a.pathname || "";
      0 == a[q]("/") || (a = "/" + a);
      return [b, "" + c, a];
    }
    var d = b || J[qa]("a");
    d.href = J[z][xa];
    var e = (d[A] || "")[D](), f = c(d), Be = d[va] || "", n = e + "//" + f[0] + (f[1] ? ":" + f[1] : "");
    0 == a[q]("//") ? a = e + a : 0 == a[q]("/") ? a = n + a : a && 0 != a[q]("?") ? 0 > a[y]("/")[0][q](":") && (a = n + f[2][B](0, f[2].lastIndexOf("/")) + "/" + a) : a = n + f[2] + (a || Be);
    d.href = a;
    e = c(d);
    return {protocol:(d[A] || "")[D](), host:e[0], port:e[1], path:e[2], Oa:d[va] || "", url:a || ""};
  }
  function Na(a, b) {
    function c(b, c) {
      a.contains(b) || a.set(b, []);
      a.get(b)[m](c);
    }
    for (var d = Da(b)[y]("&"), e = 0; e < d[w]; e++) {
      if (d[e]) {
        var f = d[e][q]("=");
        0 > f ? c(d[e], "1") : c(d[e][B](0, f), d[e][B](f + 1));
      }
    }
  }
  function Pa(a, b) {
    if (F(a) || "[" == a[ma](0) && "]" == a[ma](a[w] - 1)) {
      return "-";
    }
    var c = J.domain;
    return a[q](c + (b && "/" != b ? b : "")) == (0 == a[q]("http://") ? 7 : 0 == a[q]("https://") ? 8 : 0) ? "0" : a;
  }
  var Qa = 0;
  function Ra(a, b, c) {
    1 <= Qa || 1 <= 100 * l.random() || ld() || (a = ["utmt=error", "utmerr=" + a, "utmwv=5.4.6dc", "utmn=" + Ea(), "utmsp=1"], b && a[m]("api=" + b), c && a[m]("msg=" + G(c[B](0, 100))), M.w && a[m]("aip=1"), Sa(a[C]("&")), Qa++);
  }
  var Ta = 0, Ua = {};
  function N(a) {
    return Va("x" + Ta++, a);
  }
  function Va(a, b) {
    Ua[a] = !!b;
    return a;
  }
  var Wa = N(), Xa = Va("anonymizeIp"), Ya = N(), $a = N(), ab = N(), bb = N(), O = N(), P = N(), cb = N(), db = N(), eb = N(), fb = N(), gb = N(), hb = N(), ib = N(), jb = N(), kb = N(), lb = N(), nb = N(), ob = N(), pb = N(), qb = N(), rb = N(), sb = N(), tb = N(), ub = N(), vb = N(), wb = N(), xb = N(), yb = N(), zb = N(), Ab = N(), Bb = N(), Cb = N(), Db = N(), Eb = N(), Fb = N(!0), Gb = Va("currencyCode"), Hb = Va("page"), Ib = Va("title"), Jb = N(), Kb = N(), Lb = N(), Mb = N(), Nb = N(), Ob = 
  N(), Pb = N(), Qb = N(), Rb = N(), Q = N(!0), Sb = N(!0), Tb = N(!0), Ub = N(!0), Vb = N(!0), Wb = N(!0), Zb = N(!0), $b = N(!0), ac = N(!0), bc = N(!0), cc = N(!0), R = N(!0), dc = N(!0), ec = N(!0), fc = N(!0), gc = N(!0), hc = N(!0), ic = N(!0), jc = N(!0), S = N(!0), kc = N(!0), lc = N(!0), mc = N(!0), nc = N(!0), oc = N(!0), pc = N(!0), qc = N(!0), rc = Va("campaignParams"), sc = N(), tc = Va("hitCallback"), uc = N();
  N();
  var vc = N(), wc = N(), xc = N(), yc = N(), zc = N(), Ac = N(), Bc = N(), Cc = N(), Dc = N(), Ec = N(), Fc = N(), Gc = N(), Hc = N(), Ic = N();
  N();
  var Mc = N(), Nc = N(), Oc = N(), Ne = Va("uaName"), Oe = Va("uaDomain"), Pe = Va("uaPath");
  var Qe = function() {
    function a(a, c, d) {
      T($[x], a, c, d);
    }
    a("_createTracker", $[x].r, 55);
    a("_getTracker", $[x].oa, 0);
    a("_getTrackerByName", $[x].u, 51);
    a("_getTrackers", $[x].pa, 130);
    a("_anonymizeIp", $[x].aa, 16);
    a("_forceSSL", $[x].la, 125);
    a("_getPlugin", Pc, 120);
  }, Re = function() {
    function a(a, c, d) {
      T(U[x], a, c, d);
    }
    Qc("_getName", $a, 58);
    Qc("_getAccount", Wa, 64);
    Qc("_visitCode", Q, 54);
    Qc("_getClientInfo", ib, 53, 1);
    Qc("_getDetectTitle", lb, 56, 1);
    Qc("_getDetectFlash", jb, 65, 1);
    Qc("_getLocalGifPath", wb, 57);
    Qc("_getServiceMode", xb, 59);
    V("_setClientInfo", ib, 66, 2);
    V("_setAccount", Wa, 3);
    V("_setNamespace", Ya, 48);
    V("_setAllowLinker", fb, 11, 2);
    V("_setDetectFlash", jb, 61, 2);
    V("_setDetectTitle", lb, 62, 2);
    V("_setLocalGifPath", wb, 46, 0);
    V("_setLocalServerMode", xb, 92, void 0, 0);
    V("_setRemoteServerMode", xb, 63, void 0, 1);
    V("_setLocalRemoteServerMode", xb, 47, void 0, 2);
    V("_setSampleRate", vb, 45, 1);
    V("_setCampaignTrack", kb, 36, 2);
    V("_setAllowAnchor", gb, 7, 2);
    V("_setCampNameKey", ob, 41);
    V("_setCampContentKey", tb, 38);
    V("_setCampIdKey", nb, 39);
    V("_setCampMediumKey", rb, 40);
    V("_setCampNOKey", ub, 42);
    V("_setCampSourceKey", qb, 43);
    V("_setCampTermKey", sb, 44);
    V("_setCampCIdKey", pb, 37);
    V("_setCookiePath", P, 9, 0);
    V("_setMaxCustomVariables", yb, 0, 1);
    V("_setVisitorCookieTimeout", cb, 28, 1);
    V("_setSessionCookieTimeout", db, 26, 1);
    V("_setCampaignCookieTimeout", eb, 29, 1);
    V("_setReferrerOverride", Jb, 49);
    V("_setSiteSpeedSampleRate", Dc, 132);
    a("_trackPageview", U[x].Fa, 1);
    a("_trackEvent", U[x].F, 4);
    a("_trackPageLoadTime", U[x].Ea, 100);
    a("_trackSocial", U[x].Ga, 104);
    a("_trackTrans", U[x].Ia, 18);
    a("_sendXEvent", U[x].t, 78);
    a("_createEventTracker", U[x].ia, 74);
    a("_getVersion", U[x].qa, 60);
    a("_setDomainName", U[x].B, 6);
    a("_setAllowHash", U[x].va, 8);
    a("_getLinkerUrl", U[x].na, 52);
    a("_link", U[x].link, 101);
    a("_linkByPost", U[x].ua, 102);
    a("_setTrans", U[x].za, 20);
    a("_addTrans", U[x].$, 21);
    a("_addItem", U[x].Y, 19);
    a("_clearTrans", U[x].ea, 105);
    a("_setTransactionDelim", U[x].Aa, 82);
    a("_setCustomVar", U[x].wa, 10);
    a("_deleteCustomVar", U[x].ka, 35);
    a("_getVisitorCustomVar", U[x].ra, 50);
    a("_setXKey", U[x].Ca, 83);
    a("_setXValue", U[x].Da, 84);
    a("_getXKey", U[x].sa, 76);
    a("_getXValue", U[x].ta, 77);
    a("_clearXKey", U[x].fa, 72);
    a("_clearXValue", U[x].ga, 73);
    a("_createXObj", U[x].ja, 75);
    a("_addIgnoredOrganic", U[x].W, 15);
    a("_clearIgnoredOrganic", U[x].ba, 97);
    a("_addIgnoredRef", U[x].X, 31);
    a("_clearIgnoredRef", U[x].ca, 32);
    a("_addOrganic", U[x].Z, 14);
    a("_clearOrganic", U[x].da, 70);
    a("_cookiePathCopy", U[x].ha, 30);
    a("_get", U[x].ma, 106);
    a("_set", U[x].xa, 107);
    a("_addEventListener", U[x].addEventListener, 108);
    a("_removeEventListener", U[x].removeEventListener, 109);
    a("_addDevId", U[x].V);
    a("_getPlugin", Pc, 122);
    a("_setPageGroup", U[x].ya, 126);
    a("_trackTiming", U[x].Ha, 124);
    a("_initData", U[x].v, 2);
    a("_setVar", U[x].Ba, 22);
    V("_setSessionTimeout", db, 27, 3);
    V("_setCookieTimeout", eb, 25, 3);
    V("_setCookiePersistence", cb, 24, 1);
    a("_setAutoTrackOutbound", Fa, 79);
    a("_setTrackOutboundSubdomains", Fa, 81);
    a("_setHrefExamineLimit", Fa, 80);
  };
  function Pc(a) {
    var b = this.plugins_;
    if (b) {
      return b.get(a);
    }
  }
  var T = function(a, b, c, d) {
    a[b] = function() {
      try {
        return void 0 != d && H(d), c[ya](this, arguments);
      } catch (a$0) {
        throw Ra("exc", b, a$0 && a$0[r]), a$0;
      }
    };
  }, Qc = function(a, b, c, d) {
    U[x][a] = function() {
      try {
        return H(c), Aa(this.a.get(b), d);
      } catch (e) {
        throw Ra("exc", a, e && e[r]), e;
      }
    };
  }, V = function(a, b, c, d, e) {
    U[x][a] = function(f) {
      try {
        H(c), void 0 == e ? this.a.set(b, Aa(f, d)) : this.a.set(b, e);
      } catch (Be) {
        throw Ra("exc", a, Be && Be[r]), Be;
      }
    };
  }, Se = function(a, b) {
    return {type:b, target:a, stopPropagation:function() {
      throw "aborted";
    }};
  };
  var Rc = RegExp(/(^|\.)doubleclick\.net$/i), Sc = function(a, b) {
    return Rc[ia](J[z].hostname) ? !0 : "/" !== b ? !1 : 0 != a[q]("www.google.") && 0 != a[q](".google.") && 0 != a[q]("google.") || -1 < a[q]("google.org") ? !1 : !0;
  }, Tc = function(a) {
    var b = a.get(bb), c = a.c(P, "/");
    Sc(b, c) && a[ta]();
  };
  var Zc = function() {
    var a = {}, b = {}, c = new Uc;
    this.g = function(a, b) {
      c.add(a, b);
    };
    var d = new Uc;
    this.e = function(a, b) {
      d.add(a, b);
    };
    var e = !1, f = !1, Be = !0;
    this.T = function() {
      e = !0;
    };
    this.j = function(a) {
      this[ka]();
      this.set(sc, a, !0);
      a = new Vc(this);
      e = !1;
      d.execute(this);
      e = !0;
      b = {};
      this.n();
      a.Ja();
    };
    this.load = function() {
      e && (e = !1, this.Ka(), Wc(this), f || (f = !0, c.execute(this), Xc(this), Wc(this)), e = !0);
    };
    this.n = function() {
      if (e) {
        if (f) {
          e = !1, Xc(this), e = !0;
        } else {
          this[ka]();
        }
      }
    };
    this.get = function(c) {
      Ua[c] && this[ka]();
      return void 0 !== b[c] ? b[c] : a[c];
    };
    this.set = function(c, d, e) {
      Ua[c] && this[ka]();
      e ? b[c] = d : a[c] = d;
      Ua[c] && this.n();
    };
    this.Za = function(b) {
      a[b] = this.b(b, 0) + 1;
    };
    this.b = function(a, b) {
      var c = this.get(a);
      return void 0 == c || "" === c ? b : 1 * c;
    };
    this.c = function(a, b) {
      var c = this.get(a);
      return void 0 == c ? b : c + "";
    };
    this.Ka = function() {
      if (Be) {
        var b = this.c(bb, ""), c = this.c(P, "/");
        Sc(b, c) || (a[O] = a[hb] && "" != b ? Yc(b) : 1, Be = !1);
      }
    };
  };
  Zc[x].stopPropagation = function() {
    throw "aborted";
  };
  var Vc = function(a) {
    var b = this;
    this.q = 0;
    var c = a.get(tc);
    this.Ua = function() {
      0 < b.q && c && (b.q--, b.q || c());
    };
    this.Ja = function() {
      !b.q && c && ca(c, 10);
    };
    a.set(uc, b, !0);
  };
  function $c(a, b) {
    b = b || [];
    for (var c = 0; c < b[w]; c++) {
      var d = b[c];
      if ("" + a == d || 0 == d[q](a + ".")) {
        return d;
      }
    }
    return "-";
  }
  var bd = function(a, b, c) {
    c = c ? "" : a.c(O, "1");
    b = b[y](".");
    if (6 !== b[w] || ad(b[0], c)) {
      return !1;
    }
    c = 1 * b[1];
    var d = 1 * b[2], e = 1 * b[3], f = 1 * b[4];
    b = 1 * b[5];
    if (!(0 <= c && 0 < d && 0 < e && 0 < f && 0 <= b)) {
      return !1;
    }
    a.set(Q, c);
    a.set(Vb, d);
    a.set(Wb, e);
    a.set(Zb, f);
    a.set($b, b);
    return !0;
  }, cd = function(a) {
    var b = a.get(Q), c = a.get(Vb), d = a.get(Wb), e = a.get(Zb), f = a.b($b, 1);
    return [a.b(O, 1), void 0 != b ? b : "-", c || "-", d || "-", e || "-", f][C](".");
  }, dd = function(a) {
    return [a.b(O, 1), a.b(cc, 0), a.b(R, 1), a.b(dc, 0)][C](".");
  }, ed = function(a, b, c) {
    c = c ? "" : a.c(O, "1");
    var d = b[y](".");
    if (4 !== d[w] || ad(d[0], c)) {
      d = null;
    }
    a.set(cc, d ? 1 * d[1] : 0);
    a.set(R, d ? 1 * d[2] : 10);
    a.set(dc, d ? 1 * d[3] : a.get(ab));
    return null != d || !ad(b, c);
  }, fd = function(a, b) {
    var c = G(a.c(Tb, "")), d = [], e = a.get(Fb);
    if (!b && e) {
      for (var f = 0; f < e[w]; f++) {
        var Be = e[f];
        Be && 1 == Be[ua] && d[m](f + "=" + G(Be[r]) + "=" + G(Be[na]) + "=1");
      }
      0 < d[w] && (c += "|" + d[C]("^"));
    }
    return c ? a.b(O, 1) + "." + c : null;
  }, gd = function(a, b, c) {
    c = c ? "" : a.c(O, "1");
    b = b[y](".");
    if (2 > b[w] || ad(b[0], c)) {
      return !1;
    }
    b = b[ja](1)[C](".")[y]("|");
    0 < b[w] && a.set(Tb, I(b[0]));
    if (1 >= b[w]) {
      return !0;
    }
    b = b[1][y](-1 == b[1][q](",") ? "^" : ",");
    for (c = 0; c < b[w]; c++) {
      var d = b[c][y]("=");
      if (4 == d[w]) {
        var e = {};
        ha(e, I(d[1]));
        e.value = I(d[2]);
        e.scope = 1;
        a.get(Fb)[d[0]] = e;
      }
    }
    return !0;
  }, hd = function(a, b) {
    var c = Te(a, b);
    return c ? [a.b(O, 1), a.b(ec, 0), a.b(fc, 1), a.b(gc, 1), c][C](".") : "";
  }, Te = function(a) {
    function b(b, e) {
      if (!F(a.get(b))) {
        var f = a.c(b, ""), f = f[y](" ")[C]("%20"), f = f[y]("+")[C]("%20");
        c[m](e + "=" + f);
      }
    }
    var c = [];
    b(ic, "utmcid");
    b(nc, "utmcsr");
    b(S, "utmgclid");
    b(kc, "utmgclsrc");
    b(lc, "utmdclid");
    b(mc, "utmdsid");
    b(jc, "utmccn");
    b(oc, "utmcmd");
    b(pc, "utmctr");
    b(qc, "utmcct");
    return c[C]("|");
  }, id = function(a, b, c) {
    c = c ? "" : a.c(O, "1");
    b = b[y](".");
    if (5 > b[w] || ad(b[0], c)) {
      return a.set(ec, void 0), a.set(fc, void 0), a.set(gc, void 0), a.set(ic, void 0), a.set(jc, void 0), a.set(nc, void 0), a.set(oc, void 0), a.set(pc, void 0), a.set(qc, void 0), a.set(S, void 0), a.set(kc, void 0), a.set(lc, void 0), a.set(mc, void 0), !1;
    }
    a.set(ec, 1 * b[1]);
    a.set(fc, 1 * b[2]);
    a.set(gc, 1 * b[3]);
    Ue(a, b[ja](4)[C]("."));
    return !0;
  }, Ue = function(a, b) {
    function c(a) {
      return (a = b[oa](a + "=(.*?)(?:\\|utm|$)")) && 2 == a[w] ? a[1] : void 0;
    }
    function d(b, c) {
      c ? (c = e ? I(c) : c[y]("%20")[C](" "), a.set(b, c)) : a.set(b, void 0);
    }
    -1 == b[q]("=") && (b = I(b));
    var e = "2" == c("utmcvr");
    d(ic, c("utmcid"));
    d(jc, c("utmccn"));
    d(nc, c("utmcsr"));
    d(oc, c("utmcmd"));
    d(pc, c("utmctr"));
    d(qc, c("utmcct"));
    d(S, c("utmgclid"));
    d(kc, c("utmgclsrc"));
    d(lc, c("utmdclid"));
    d(mc, c("utmdsid"));
  }, ad = function(a, b) {
    return b ? a != b : !/^\d+$/[ia](a);
  };
  var Uc = function() {
    this.filters = [];
  };
  Uc[x].add = function(a, b) {
    this.filters[m]({name:a, s:b});
  };
  Uc[x].execute = function(a) {
    try {
      for (var b = 0; b < this.filters[w]; b++) {
        this.filters[b].s.call(W, a);
      }
    } catch (c) {
    }
  };
  function jd(a) {
    100 != a.get(vb) && a.get(Q) % 1E4 >= 100 * a.get(vb) && a[ta]();
  }
  function kd(a) {
    ld(a.get(Wa)) && a[ta]();
  }
  function md(a) {
    "file:" == J[z][A] && a[ta]();
  }
  function Ge(a) {
    He() && a[ta]();
  }
  function nd(a) {
    a.get(Ib) || a.set(Ib, J.title, !0);
    a.get(Hb) || a.set(Hb, J[z].pathname + J[z][va], !0);
  }
  var od = new function() {
    var a = [];
    this.set = function(b) {
      a[b] = !0;
    };
    this.Xa = function() {
      for (var b = [], c = 0; c < a[w]; c++) {
        a[c] && (b[l[la](c / 6)] = b[l[la](c / 6)] ^ 1 << c % 6);
      }
      for (c = 0; c < b[w]; c++) {
        b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[ma](b[c] || 0);
      }
      return b[C]("") + "~";
    };
  };
  function H(a) {
    od.set(a);
  }
  var W = window, J = document, ld = function(a) {
    var b = W._gaUserPrefs;
    if (b && b.ioo && b.ioo() || a && !0 === W["ga-disable-" + a]) {
      return !0;
    }
    try {
      var c = W.external;
      if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) {
        return !0;
      }
    } catch (d) {
    }
    return !1;
  }, He = function() {
    return W[za] && "preview" == W[za].loadPurpose;
  }, Ve = function(a, b) {
    ca(a, b);
  }, pd = function(a) {
    var b = [], c = J.cookie[y](";");
    a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
    for (var d = 0; d < c[w]; d++) {
      var e = c[d][oa](a);
      e && b[m](e[1]);
    }
    return b;
  }, X = function(a, b, c, d, e, f) {
    e = ld(e) ? !1 : Sc(d, c) ? !1 : He() ? !1 : !0;
    if (e) {
      if (b && 0 <= W[za].userAgent[q]("Firefox")) {
        b = b[p](/\n|\r/g, " ");
        e = 0;
        for (var Be = b[w]; e < Be; ++e) {
          var n = b.charCodeAt(e) & 255;
          if (10 == n || 13 == n) {
            b = b[B](0, e) + "?" + b[B](e + 1);
          }
        }
      }
      b && 2E3 < b[w] && (b = b[B](0, 2E3), H(69));
      a = a + "=" + b + "; path=" + c + "; ";
      f && (a += "expires=" + (new Date((new Date)[g]() + f)).toGMTString() + "; ");
      d && (a += "domain=" + d + ";");
      J.cookie = a;
    }
  };
  var qd, rd, sd = function() {
    if (!qd) {
      var a = {}, b = W[za], c = W.screen;
      a.Q = c ? c.width + "x" + c.height : "-";
      a.P = c ? c.colorDepth + "-bit" : "-";
      a.language = (b && (b.language || b.browserLanguage) || "-")[D]();
      a.javaEnabled = b && b.javaEnabled() ? 1 : 0;
      a.characterSet = J.characterSet || J.charset || "-";
      try {
        var d;
        var e = J.documentElement, f = J.body, Be = f && f[sa] && f[wa], b = [];
        e && e[sa] && e[wa] && ("CSS1Compat" === J.compatMode || !Be) ? b = [e[sa], e[wa]] : Be && (b = [f[sa], f[wa]]);
        d = 0 >= b[0] || 0 >= b[1] ? "" : b[C]("x");
        a.Wa = d;
      } catch (n) {
        H(135);
      }
      qd = a;
    }
  }, td = function() {
    sd();
    for (var a = qd, b = W[za], a = b.appName + b.version + a.language + b.platform + b.userAgent + a.javaEnabled + a.Q + a.P + (J.cookie ? J.cookie : "") + (J.referrer ? J.referrer : ""), b = a[w], c = W.history[w]; 0 < c;) {
      a += c-- ^ b++;
    }
    return Yc(a);
  }, ud = function(a) {
    sd();
    var b = qd;
    a.set(Lb, b.Q);
    a.set(Mb, b.P);
    a.set(Pb, b.language);
    a.set(Qb, b.characterSet);
    a.set(Nb, b.javaEnabled);
    a.set(Rb, b.Wa);
    if (a.get(ib) && a.get(jb)) {
      if (!(b = rd)) {
        var c, d, e;
        d = "ShockwaveFlash";
        if ((b = (b = W[za]) ? b.plugins : void 0) && 0 < b[w]) {
          for (c = 0; c < b[w] && !e; c++) {
            d = b[c], -1 < d[r][q]("Shockwave Flash") && (e = d.description[y]("Shockwave Flash ")[1]);
          }
        } else {
          d = d + "." + d;
          try {
            c = new ActiveXObject(d + ".7"), e = c.GetVariable("$version");
          } catch (f) {
          }
          if (!e) {
            try {
              c = new ActiveXObject(d + ".6"), e = "WIN 6,0,21,0", c.AllowScriptAccess = "always", e = c.GetVariable("$version");
            } catch (Be) {
            }
          }
          if (!e) {
            try {
              c = new ActiveXObject(d), e = c.GetVariable("$version");
            } catch (n) {
            }
          }
          e && (e = e[y](" ")[1][y](","), e = e[0] + "." + e[1] + " r" + e[2]);
        }
        b = e ? e : "-";
      }
      rd = b;
      a.set(Ob, rd);
    } else {
      a.set(Ob, "-");
    }
  };
  var vd = function(a) {
    if (Ba(a)) {
      this.s = a;
    } else {
      var b = a[0], c = b.lastIndexOf(":"), d = b.lastIndexOf(".");
      this.h = this.i = this.l = "";
      -1 == c && -1 == d ? this.h = b : -1 == c && -1 != d ? (this.i = b[B](0, d), this.h = b[B](d + 1)) : -1 != c && -1 == d ? (this.l = b[B](0, c), this.h = b[B](c + 1)) : c > d ? (this.i = b[B](0, d), this.l = b[B](d + 1, c), this.h = b[B](c + 1)) : (this.i = b[B](0, d), this.h = b[B](d + 1));
      this.k = a[ja](1);
      this.Ma = !this.l && "_require" == this.h;
      this.J = !this.i && !this.l && "_provide" == this.h;
    }
  }, Y = function() {
    T(Y[x], "push", Y[x][m], 5);
    T(Y[x], "_getPlugin", Pc, 121);
    T(Y[x], "_createAsyncTracker", Y[x].Sa, 33);
    T(Y[x], "_getAsyncTracker", Y[x].Ta, 34);
    this.I = new Ja;
    this.p = [];
  };
  E = Y[x];
  E.Na = function(a, b, c) {
    var d = this.I.get(a);
    if (!Ba(d)) {
      return !1;
    }
    b.plugins_ = b.plugins_ || new Ja;
    b.plugins_.set(a, new d(b, c || {}));
    return !0;
  };
  E.push = function(a) {
    var b = Z.Va[ya](this, arguments), b = Z.p.concat(b);
    for (Z.p = []; 0 < b[w] && !Z.O(b[0]) && !(b.shift(), 0 < Z.p[w]);) {
    }
    Z.p = Z.p.concat(b);
    return 0;
  };
  E.Va = function(a) {
    for (var b = [], c = 0; c < arguments[w]; c++) {
      try {
        var d = new vd(arguments[c]);
        d.J ? this.O(d) : b[m](d);
      } catch (e) {
      }
    }
    return b;
  };
  E.O = function(a) {
    try {
      if (a.s) {
        a.s[ya](W);
      } else {
        if (a.J) {
          this.I.set(a.k[0], a.k[1]);
        } else {
          var b = "_gat" == a.i ? M : "_gaq" == a.i ? Z : M.u(a.i);
          if (a.Ma) {
            if (!this.Na(a.k[0], b, a.k[2])) {
              if (!a.Pa) {
                var c = Oa("" + a.k[1]);
                var d = c[A], e = J[z][A];
                var f;
                if (f = "https:" == d || d == e ? !0 : "http:" != d ? !1 : "http:" == e) {
                  var Be;
                  t: {
                    var n = Oa(J[z][xa]);
                    if (!(c.Oa || 0 <= c.url[q]("?") || 0 <= c[ra][q]("://") || c[u] == n[u] && c[pa] == n[pa])) {
                      for (var s = "http:" == c[A] ? 80 : 443, t = M.S, b = 0; b < t[w]; b++) {
                        if (c[u] == t[b][0] && (c[pa] || s) == (t[b][1] || s) && 0 == c[ra][q](t[b][2])) {
                          Be = !0;
                          break t;
                        }
                      }
                    }
                    Be = !1;
                  }
                  f = Be && !ld();
                }
                f && (a.Pa = Ia(c.url));
              }
              return !0;
            }
          } else {
            a.l && (b = b.plugins_.get(a.l)), b[a.h][ya](b, a.k);
          }
        }
      }
    } catch (Za) {
    }
  };
  E.Sa = function(a, b) {
    return M.r(a, b || "");
  };
  E.Ta = function(a) {
    return M.u(a);
  };
  var yd = function() {
    function a(a, b, c, d) {
      void 0 == f[a] && (f[a] = {});
      void 0 == f[a][b] && (f[a][b] = []);
      f[a][b][c] = d;
    }
    function b(a, b, c) {
      if (void 0 != f[a] && void 0 != f[a][b]) {
        return f[a][b][c];
      }
    }
    function c(a, b) {
      if (void 0 != f[a] && void 0 != f[a][b]) {
        f[a][b] = void 0;
        var c = !0, d;
        for (d = 0; d < Be[w]; d++) {
          if (void 0 != f[a][Be[d]]) {
            c = !1;
            break;
          }
        }
        c && (f[a] = void 0);
      }
    }
    function d(a) {
      var b = "", c = !1, d, e;
      for (d = 0; d < Be[w]; d++) {
        if (e = a[Be[d]], void 0 != e) {
          c && (b += Be[d]);
          for (var c = [], f = void 0, ga = void 0, ga = 0; ga < e[w]; ga++) {
            if (void 0 != e[ga]) {
              f = "";
              ga != mb && void 0 == e[ga - 1] && (f += ga[v]() + Za);
              for (var Bd = e[ga], Jc = "", Yb = void 0, Kc = void 0, Lc = void 0, Yb = 0; Yb < Bd[w]; Yb++) {
                Kc = Bd[ma](Yb), Lc = Ma[Kc], Jc += void 0 != Lc ? Lc : Kc;
              }
              f += Jc;
              c[m](f);
            }
          }
          b += n + c[C](t) + s;
          c = !1;
        } else {
          c = !0;
        }
      }
      return b;
    }
    var e = this, f = [], Be = ["k", "v"], n = "(", s = ")", t = "*", Za = "!", Ma = {"'":"'0"};
    Ma[s] = "'1";
    Ma[t] = "'2";
    Ma[Za] = "'3";
    var mb = 1;
    e.Ra = function(a) {
      return void 0 != f[a];
    };
    e.A = function() {
      for (var a = "", b = 0; b < f[w]; b++) {
        void 0 != f[b] && (a += b[v]() + d(f[b]));
      }
      return a;
    };
    e.Qa = function(a) {
      if (void 0 == a) {
        return e.A();
      }
      for (var b = a.A(), c = 0; c < f[w]; c++) {
        void 0 == f[c] || a.Ra(c) || (b += c[v]() + d(f[c]));
      }
      return b;
    };
    e.f = function(b, c, d) {
      if (!wd(d)) {
        return !1;
      }
      a(b, "k", c, d);
      return !0;
    };
    e.o = function(b, c, d) {
      if (!xd(d)) {
        return !1;
      }
      a(b, "v", c, d[v]());
      return !0;
    };
    e.getKey = function(a, c) {
      return b(a, "k", c);
    };
    e.N = function(a, c) {
      return b(a, "v", c);
    };
    e.L = function(a) {
      c(a, "k");
    };
    e.M = function(a) {
      c(a, "v");
    };
    T(e, "_setKey", e.f, 89);
    T(e, "_setValue", e.o, 90);
    T(e, "_getKey", e.getKey, 87);
    T(e, "_getValue", e.N, 88);
    T(e, "_clearKey", e.L, 85);
    T(e, "_clearValue", e.M, 86);
  };
  function wd(a) {
    return "string" == typeof a;
  }
  function xd(a) {
    return !("number" == typeof a || void 0 != Number && a instanceof Number) || l.round(a) != a || da(a) || a == ba ? !1 : !0;
  }
  var zd = function(a) {
    var b = W.gaGlobal;
    a && !b && (W.gaGlobal = b = {});
    return b;
  }, Cd = function() {
    var a = zd(!0).hid;
    null == a && (a = Ea(), zd(!0).hid = a);
    return a;
  }, Dd = function(a) {
    a.set(Kb, Cd());
    var b = zd();
    if (b && b.dh == a.get(O)) {
      var c = b.sid;
      c && (a.get(ac) ? H(112) : H(132), a.set(Zb, c), a.get(Sb) && a.set(Wb, c));
      b = b.vid;
      a.get(Sb) && b && (b = b[y]("."), a.set(Q, 1 * b[0]), a.set(Vb, 1 * b[1]));
    }
  };
  var Ed, Fd = function(a, b, c, d) {
    var e = a.c(bb, ""), f = a.c(P, "/");
    d = void 0 != d ? d : a.b(cb, 0);
    a = a.c(Wa, "");
    X(b, c, f, e, a, d);
  }, Xc = function(a) {
    var b = a.c(bb, "");
    a.b(O, 1);
    var c = a.c(P, "/"), d = a.c(Wa, "");
    X("__utma", cd(a), c, b, d, a.get(cb));
    X("__utmb", dd(a), c, b, d, a.get(db));
    X("__utmc", "" + a.b(O, 1), c, b, d);
    var e = hd(a, !0);
    e ? X("__utmz", e, c, b, d, a.get(eb)) : X("__utmz", "", c, b, "", -1);
    (e = fd(a, !1)) ? X("__utmv", e, c, b, d, a.get(cb)) : X("__utmv", "", c, b, "", -1);
  }, Wc = function(a) {
    var b = a.b(O, 1);
    if (!bd(a, $c(b, pd("__utma")))) {
      return a.set(Ub, !0), !1;
    }
    var c = !ed(a, $c(b, pd("__utmb")));
    a.set(bc, c);
    id(a, $c(b, pd("__utmz")));
    gd(a, $c(b, pd("__utmv")));
    Ed = !c;
    return !0;
  }, Gd = function(a) {
    Ed || 0 < pd("__utmb")[w] || (X("__utmd", "1", a.c(P, "/"), a.c(bb, ""), a.c(Wa, ""), 1E4), 0 == pd("__utmd")[w] && a[ta]());
  };
  var h = 0, Jd = function(a) {
    void 0 == a.get(Q) ? Hd(a) : a.get(Ub) && !a.get(Mc) ? Hd(a) : a.get(bc) && (Id(a), h++, 1 < h && H(137));
  }, Kd = function(a) {
    a.get(hc) && !a.get(ac) && (Id(a), a.set(fc, a.get($b)));
  }, Hd = function(a) {
    var b = a.get(ab);
    a.set(Sb, !0);
    a.set(Q, Ea() ^ td(a) & 2147483647);
    a.set(Tb, "");
    a.set(Vb, b);
    a.set(Wb, b);
    a.set(Zb, b);
    a.set($b, 1);
    a.set(ac, !0);
    a.set(cc, 0);
    a.set(R, 10);
    a.set(dc, b);
    a.set(Fb, []);
    a.set(Ub, !1);
    a.set(bc, !1);
  }, Id = function(a) {
    a.set(Wb, a.get(Zb));
    a.set(Zb, a.get(ab));
    a.Za($b);
    a.set(ac, !0);
    a.set(cc, 0);
    a.set(R, 10);
    a.set(dc, a.get(ab));
    a.set(bc, !1);
  };
  var Ld = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q 360.cn:q".split(" "), 
  Sd = function(a) {
    if (a.get(kb) && !a.get(Mc)) {
      for (var b = !F(a.get(ic)) || !F(a.get(nc)) || !F(a.get(S)) || !F(a.get(lc)), c = {}, d = 0; d < Md[w]; d++) {
        var e = Md[d];
        c[e] = a.get(e);
      }
      (d = a.get(rc)) ? (H(149), e = new Ja, Na(e, d), d = e) : d = La(J[z][xa], a.get(gb)).d;
      if ("1" != L(d.get(a.get(ub))) || !b) {
        if (d = We(a, d) || Qd(a), d || b || !a.get(ac) || (Pd(a, void 0, "(direct)", void 0, void 0, void 0, "(direct)", "(none)", void 0, void 0), d = !0), d && (a.set(hc, Rd(a, c)), b = "(direct)" == a.get(nc) && "(direct)" == a.get(jc) && "(none)" == a.get(oc), a.get(hc) || a.get(ac) && !b)) {
          a.set(ec, a.get(ab)), a.set(fc, a.get($b)), a.Za(gc);
        }
      }
    }
  }, We = function(a, b) {
    function c(c, d) {
      d = d || "-";
      var e = L(b.get(a.get(c)));
      return e && "-" != e ? I(e) : d;
    }
    var d = L(b.get(a.get(nb))) || "-", e = L(b.get(a.get(qb))) || "-", f = L(b.get(a.get(pb))) || "-", Be = L(b.get("gclsrc")) || "-", n = L(b.get("dclid")) || "-", s = c(ob, "(not set)"), t = c(rb, "(not set)"), Za = c(sb), Ma = c(tb);
    if (F(d) && F(f) && F(n) && F(e)) {
      return !1;
    }
    var mb = !F(f) && !F(Be), mb = F(e) && (!F(n) || mb), Xb = F(Za);
    if (mb || Xb) {
      var Ad = Nd(a), Ad = La(Ad, !0);
      (Ad = Od(a, Ad)) && !F(Ad[1] && !Ad[2]) && (mb && (e = Ad[0]), Xb && (Za = Ad[1]));
    }
    Pd(a, d, e, f, Be, n, s, t, Za, Ma);
    return !0;
  }, Qd = function(a) {
    var b = Nd(a), c = La(b, !0);
    if (!(void 0 != b && null != b && "" != b && "0" != b && "-" != b && 0 <= b[q]("://")) || c && -1 < c[u][q]("google") && c.d.contains("q") && "cse" == c[ra]) {
      return !1;
    }
    if ((b = Od(a, c)) && !b[2]) {
      return Pd(a, void 0, b[0], void 0, void 0, void 0, "(organic)", "organic", b[1], void 0), !0;
    }
    if (b || !a.get(ac)) {
      return !1;
    }
    t: {
      for (var b = a.get(Bb), d = Ka(c[u]), e = 0; e < b[w]; ++e) {
        if (-1 < d[q](b[e])) {
          a = !1;
          break t;
        }
      }
      Pd(a, void 0, d, void 0, void 0, void 0, "(referral)", "referral", void 0, "/" + c[ra]);
      a = !0;
    }
    return a;
  }, Od = function(a, b) {
    for (var c = a.get(zb), d = 0; d < c[w]; ++d) {
      var e = c[d][y](":");
      if (-1 < b[u][q](e[0][D]())) {
        var f = b.d.get(e[1]);
        if (f && (f = K(f), !f && -1 < b[u][q]("google.") && (f = "(not provided)"), !e[3] || -1 < b.url[q](e[3]))) {
          t: {
            for (var c = f, d = a.get(Ab), c = I(c)[D](), Be = 0; Be < d[w]; ++Be) {
              if (c == d[Be]) {
                c = !0;
                break t;
              }
            }
            c = !1;
          }
          return [e[2] || e[0], f, c];
        }
      }
    }
    return null;
  }, Pd = function(a, b, c, d, e, f, Be, n, s, t) {
    a.set(ic, b);
    a.set(nc, c);
    a.set(S, d);
    a.set(kc, e);
    a.set(lc, f);
    a.set(jc, Be);
    a.set(oc, n);
    a.set(pc, s);
    a.set(qc, t);
  }, Md = [jc, ic, S, lc, nc, oc, pc, qc], Rd = function(a, b) {
    function c(a) {
      a = ("" + a)[y]("+")[C]("%20");
      return a = a[y](" ")[C]("%20");
    }
    function d(c) {
      var d = "" + (a.get(c) || "");
      c = "" + (b[c] || "");
      return 0 < d[w] && d == c;
    }
    if (d(S) || d(lc)) {
      return H(131), !1;
    }
    for (var e = 0; e < Md[w]; e++) {
      var f = Md[e], Be = b[f] || "-", f = a.get(f) || "-";
      if (c(Be) != c(f)) {
        return !0;
      }
    }
    return !1;
  }, Td = RegExp(/^https?:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i), Nd = function(a) {
    a = Pa(a.get(Jb), a.get(P));
    try {
      if (Td[ia](a)) {
        return H(136), a + "?q=";
      }
    } catch (b) {
      H(145);
    }
    return a;
  };
  var Ud, Vd, Wd = function(a) {
    Ud = a.c(S, "");
    Vd = a.c(kc, "");
  }, Xd = function(a) {
    var b = a.c(S, ""), c = a.c(kc, "");
    b != Ud && (-1 < c[q]("ds") ? a.set(mc, void 0) : !F(Ud) && -1 < Vd[q]("ds") && a.set(mc, Ud));
  };
  var Zd = function(a) {
    Yd(a, J[z][xa]) ? (a.set(Mc, !0), H(12)) : a.set(Mc, !1);
  }, Yd = function(a, b) {
    if (!a.get(fb)) {
      return !1;
    }
    var c = La(b, a.get(gb)), d = K(c.d.get("__utma")), e = K(c.d.get("__utmb")), f = K(c.d.get("__utmc")), Be = K(c.d.get("__utmx")), n = K(c.d.get("__utmz")), s = K(c.d.get("__utmv")), c = K(c.d.get("__utmk"));
    if (Yc("" + d + e + f + Be + n + s) != c) {
      d = I(d);
      e = I(e);
      f = I(f);
      Be = I(Be);
      f = $d(d + e + f + Be, n, s, c);
      if (!f) {
        return !1;
      }
      n = f[0];
      s = f[1];
    }
    if (!bd(a, d, !0)) {
      return !1;
    }
    ed(a, e, !0);
    id(a, n, !0);
    gd(a, s, !0);
    ae(a, Be, !0);
    return !0;
  }, ce = function(a, b, c) {
    var d;
    d = cd(a) || "-";
    var e = dd(a) || "-", f = "" + a.b(O, 1) || "-", Be = be(a) || "-", n = hd(a, !1) || "-";
    a = fd(a, !1) || "-";
    var s = Yc("" + d + e + f + Be + n + a), t = [];
    t[m]("__utma=" + d);
    t[m]("__utmb=" + e);
    t[m]("__utmc=" + f);
    t[m]("__utmx=" + Be);
    t[m]("__utmz=" + n);
    t[m]("__utmv=" + a);
    t[m]("__utmk=" + s);
    d = t[C]("&");
    if (!d) {
      return b;
    }
    e = b[q]("#");
    if (c) {
      return 0 > e ? b + "#" + d : b + "&" + d;
    }
    c = "";
    f = b[q]("?");
    0 < e && (c = b[B](e), b = b[B](0, e));
    return 0 > f ? b + "?" + d + c : b + "&" + d + c;
  }, $d = function(a, b, c, d) {
    for (var e = 0; 3 > e; e++) {
      for (var f = 0; 3 > f; f++) {
        if (d == Yc(a + b + c)) {
          return H(127), [b, c];
        }
        var Be = b[p](/ /g, "%20"), n = c[p](/ /g, "%20");
        if (d == Yc(a + Be + n)) {
          return H(128), [Be, n];
        }
        Be = Be[p](/\+/g, "%20");
        n = n[p](/\+/g, "%20");
        if (d == Yc(a + Be + n)) {
          return H(129), [Be, n];
        }
        try {
          var s = b[oa]("utmctr=(.*?)(?:\\|utm|$)");
          if (s && 2 == s[w] && (Be = b[p](s[1], G(I(s[1]))), d == Yc(a + Be + c))) {
            return H(139), [Be, c];
          }
        } catch (t) {
        }
        b = I(b);
      }
      c = I(c);
    }
  };
  var de = "|", fe = function(a, b, c, d, e, f, Be, n, s) {
    var t = ee(a, b);
    t || (t = {}, a.get(Cb)[m](t));
    t.id_ = b;
    t.affiliation_ = c;
    t.total_ = d;
    t.tax_ = e;
    t.shipping_ = f;
    t.city_ = Be;
    t.state_ = n;
    t.country_ = s;
    t.items_ = t.items_ || [];
    return t;
  }, ge = function(a, b, c, d, e, f, Be) {
    a = ee(a, b) || fe(a, b, "", 0, 0, 0, "", "", "");
    var n;
    t: {
      if (a && a.items_) {
        n = a.items_;
        for (var s = 0; s < n[w]; s++) {
          if (n[s].sku_ == c) {
            n = n[s];
            break t;
          }
        }
      }
      n = null;
    }
    s = n || {};
    s.transId_ = b;
    s.sku_ = c;
    s.name_ = d;
    s.category_ = e;
    s.price_ = f;
    s.quantity_ = Be;
    n || a.items_[m](s);
    return s;
  }, ee = function(a, b) {
    for (var c = a.get(Cb), d = 0; d < c[w]; d++) {
      if (c[d].id_ == b) {
        return c[d];
      }
    }
    return null;
  };
  var he, ie = function(a) {
    if (!he) {
      var b;
      b = J[z].hash;
      var c = W[r], d = /^#?gaso=([^&]*)/;
      if (c = (b = (b = b && b[oa](d) || c && c[oa](d)) ? b[1] : K(pd("GASO"))) && b[oa](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) {
        Fd(a, "GASO", "" + b, 0), M._gasoDomain = a.get(bb), M._gasoCPath = a.get(P), a = c[1], Ia("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + Ea(), "_gasojs");
      }
      he = !0;
    }
  };
  var ae = function(a, b, c) {
    c && (b = I(b));
    c = a.b(O, 1);
    b = b[y](".");
    2 > b[w] || !/^\d+$/[ia](b[0]) || (b[0] = "" + c, Fd(a, "__utmx", b[C]("."), void 0));
  }, be = function(a, b) {
    var c = $c(a.get(O), pd("__utmx"));
    "-" == c && (c = "");
    return b ? G(c) : c;
  }, Xe = function(a) {
    try {
      var b = La(J[z][xa], !1), c = ea(L(b.d.get("utm_referrer"))) || "";
      c && a.set(Jb, c);
      var d = ea(K(b.d.get("utm_expid"))) || "";
      d && (d = d[y](".")[0], a.set(Oc, "" + d));
    } catch (e) {
      H(146);
    }
  }, k = function(a) {
    var b = W.gaData && W.gaData.expId;
    b && a.set(Oc, "" + b);
  };
  var ke = function(a, b) {
    var c = l.min(a.b(Dc, 0), 100);
    if (a.b(Q, 0) % 100 >= c) {
      return !1;
    }
    c = Ye() || Ze();
    if (void 0 == c) {
      return !1;
    }
    var d = c[0];
    if (void 0 == d || d == ba || da(d)) {
      return !1;
    }
    0 < d ? $e(c) ? b(je(c)) : b(je(c[ja](0, 1))) : Ga(W, "load", function() {
      ke(a, b);
    }, !1);
    return !0;
  }, me = function(a, b, c, d) {
    var e = new yd;
    e.f(14, 90, b[B](0, 500));
    e.f(14, 91, a[B](0, 150));
    e.f(14, 92, "" + le(c));
    void 0 != d && e.f(14, 93, d[B](0, 500));
    e.o(14, 90, c);
    return e;
  }, $e = function(a) {
    for (var b = 1; b < a[w]; b++) {
      if (da(a[b]) || a[b] == ba || 0 > a[b]) {
        return !1;
      }
    }
    return !0;
  }, le = function(a) {
    return da(a) || 0 > a ? 0 : 5E3 > a ? 10 * l[la](a / 10) : 5E4 > a ? 100 * l[la](a / 100) : 41E5 > a ? 1E3 * l[la](a / 1E3) : 41E5;
  }, je = function(a) {
    for (var b = new yd, c = 0; c < a[w]; c++) {
      b.f(14, c + 1, "" + le(a[c])), b.o(14, c + 1, a[c]);
    }
    return b;
  }, Ye = function() {
    var a = W.performance || W.webkitPerformance;
    if (a = a && a.timing) {
      var b = a.navigationStart;
      if (0 == b) {
        H(133);
      } else {
        return [a.loadEventStart - b, a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - b, a.domInteractive - b, a.domContentLoadedEventStart - b];
      }
    }
  }, Ze = function() {
    if (W.top == W) {
      var a = W.external, b = a && a.onloadT;
      a && !a.isValidLoadTime && (b = void 0);
      2147483648 < b && (b = void 0);
      0 < b && a.setPageReadyTime();
      return void 0 == b ? void 0 : [b];
    }
  };
  var bf = function(a) {
    if (a.get(Sb)) {
      try {
        var b;
        t: {
          var c = pd(a.get(Ne) || "_ga");
          if (c && !(1 > c[w])) {
            for (var d = [], e = 0; e < c[w]; e++) {
              var f;
              var Be = c[e][y]("."), n = Be.shift();
              if (("GA1" == n || "1" == n) && 1 < Be[w]) {
                var s = Be.shift()[y]("-");
                1 == s[w] && (s[1] = "1");
                s[0] *= 1;
                s[1] *= 1;
                f = {Ya:s, $a:Be[C](".")};
              } else {
                f = void 0;
              }
              f && d[m](f);
            }
            if (1 == d[w]) {
              b = d[0].$a;
              break t;
            }
            if (0 != d[w]) {
              var t = a.get(Oe) || a.get(bb), d = af(d, (0 == t[q](".") ? t.substr(1) : t)[y](".")[w], 0);
              if (1 == d[w]) {
                b = d[0].$a;
                break t;
              }
              var Za = a.get(Pe) || a.get(P);
              (c = Za) ? (1 < c[w] && "/" == c[ma](c[w] - 1) && (c = c.substr(0, c[w] - 1)), 0 != c[q]("/") && (c = "/" + c), Za = c) : Za = "/";
              d = af(d, "/" == Za ? 1 : Za[y]("/")[w], 1);
              b = d[0].$a;
              break t;
            }
          }
          b = void 0;
        }
        if (b) {
          var Ma = ("" + b)[y](".");
          2 == Ma[w] && /[0-9.]/[ia](Ma) && (H(114), a.set(Q, Ma[0]), a.set(Vb, Ma[1]), a.set(Sb, !1));
        }
      } catch (mb) {
        H(115);
      }
    }
  }, af = function(a, b, c) {
    for (var d = [], e = [], f = 128, Be = 0; Be < a[w]; Be++) {
      var n = a[Be];
      if (n.Ya[c] == b) {
        d[m](n);
      } else {
        if (n.Ya[c] == f) {
          e[m](n);
        } else {
          n.Ya[c] < f && (e = [n], f = n.Ya[c]);
        }
      }
    }
    return 0 < d[w] ? d : e;
  };
  var U = function(a, b, c) {
    function d(a) {
      return function(b) {
        if ((b = b.get(Nc)[a]) && b[w]) {
          for (var c = Se(e, a), d = 0; d < b[w]; d++) {
            b[d].call(e, c);
          }
        }
      };
    }
    var e = this;
    this.a = new Zc;
    this.get = function(a) {
      return this.a.get(a);
    };
    this.set = function(a, b, c) {
      this.a.set(a, b, c);
    };
    this.set(Wa, b || "UA-XXXXX-X");
    this.set($a, a || "");
    this.set(Ya, c || "");
    this.set(ab, l.round((new Date)[g]() / 1E3));
    this.set(P, "/");
    this.set(cb, 63072E6);
    this.set(eb, 15768E6);
    this.set(db, 18E5);
    this.set(fb, !1);
    this.set(yb, 50);
    this.set(gb, !1);
    this.set(hb, !0);
    this.set(ib, !0);
    this.set(jb, !0);
    this.set(kb, !0);
    this.set(lb, !0);
    this.set(ob, "utm_campaign");
    this.set(nb, "utm_id");
    this.set(pb, "gclid");
    this.set(qb, "utm_source");
    this.set(rb, "utm_medium");
    this.set(sb, "utm_term");
    this.set(tb, "utm_content");
    this.set(ub, "utm_nooverride");
    this.set(vb, 100);
    this.set(Dc, 1);
    this.set(Ec, !1);
    this.set(wb, "/__utm.gif");
    this.set(xb, 1);
    this.set(Cb, []);
    this.set(Fb, []);
    this.set(zb, Ld[ja](0));
    this.set(Ab, []);
    this.set(Bb, []);
    this.B("auto");
    this.set(Jb, J.referrer);
    Xe(this.a);
    this.set(Nc, {hit:[], load:[]});
    this.a.g("0", Zd);
    this.a.g("1", Wd);
    this.a.g("2", Jd);
    this.a.g("3", bf);
    this.a.g("4", Sd);
    this.a.g("5", Xd);
    this.a.g("6", Kd);
    this.a.g("7", d("load"));
    this.a.g("8", ie);
    this.a.e("A", kd);
    this.a.e("B", md);
    this.a.e("C", Ge);
    this.a.e("D", Jd);
    this.a.e("E", jd);
    this.a.e("F", Tc);
    this.a.e("G", ne);
    this.a.e("H", Gd);
    this.a.e("I", nd);
    this.a.e("J", ud);
    this.a.e("K", Dd);
    this.a.e("L", k);
    this.a.e("M", d("hit"));
    this.a.e("N", oe);
    this.a.e("O", pe);
    0 === this.get(ab) && H(111);
    this.a.T();
    this.H = void 0;
  };
  E = U[x];
  E.m = function() {
    var a = this.get(Db);
    a || (a = new yd, this.set(Db, a));
    return a;
  };
  E.La = function(a) {
    for (var b in a) {
      var c = a[b];
      a.hasOwnProperty(b) && this.set(b, c, !0);
    }
  };
  E.K = function(a) {
    if (this.get(Ec)) {
      return !1;
    }
    var b = this, c = ke(this.a, function(c) {
      b.set(Hb, a, !0);
      b.t(c);
    });
    this.set(Ec, c);
    return c;
  };
  E.Fa = function(a) {
    a && Ca(a) ? (H(13), this.set(Hb, a, !0)) : "object" === typeof a && null !== a && this.La(a);
    this.H = a = this.get(Hb);
    this.a.j("page");
    this.K(a);
  };
  E.F = function(a, b, c, d, e) {
    if ("" == a || !wd(a) || "" == b || !wd(b) || void 0 != c && !wd(c) || void 0 != d && !xd(d)) {
      return !1;
    }
    this.set(wc, a, !0);
    this.set(xc, b, !0);
    this.set(yc, c, !0);
    this.set(zc, d, !0);
    this.set(vc, !!e, !0);
    this.a.j("event");
    return !0;
  };
  E.Ha = function(a, b, c, d, e) {
    var f = this.a.b(Dc, 0);
    1 * e === e && (f = e);
    if (this.a.b(Q, 0) % 100 >= f) {
      return !1;
    }
    c = 1 * ("" + c);
    if ("" == a || !wd(a) || "" == b || !wd(b) || !xd(c) || da(c) || 0 > c || 0 > f || 100 < f || void 0 != d && ("" == d || !wd(d))) {
      return !1;
    }
    this.t(me(a, b, c, d));
    return !0;
  };
  E.Ga = function(a, b, c, d) {
    if (!a || !b) {
      return !1;
    }
    this.set(Ac, a, !0);
    this.set(Bc, b, !0);
    this.set(Cc, c || J[z][xa], !0);
    d && this.set(Hb, d, !0);
    this.a.j("social");
    return !0;
  };
  E.Ea = function() {
    this.set(Dc, 10);
    this.K(this.H);
  };
  E.Ia = function() {
    this.a.j("trans");
  };
  E.t = function(a) {
    this.set(Eb, a, !0);
    this.a.j("event");
  };
  E.ia = function(a) {
    this.v();
    var b = this;
    return {_trackEvent:function(c, d, e) {
      H(91);
      b.F(a, c, d, e);
    }};
  };
  E.ma = function(a) {
    return this.get(a);
  };
  E.xa = function(a, b) {
    if (a) {
      if (Ca(a)) {
        this.set(a, b);
      } else {
        if ("object" == typeof a) {
          for (var c in a) {
            a.hasOwnProperty(c) && this.set(c, a[c]);
          }
        }
      }
    }
  };
  E.addEventListener = function(a, b) {
    var c = this.get(Nc)[a];
    c && c[m](b);
  };
  E.removeEventListener = function(a, b) {
    for (var c = this.get(Nc)[a], d = 0; c && d < c[w]; d++) {
      if (c[d] == b) {
        c.splice(d, 1);
        break;
      }
    }
  };
  E.qa = function() {
    return "5.4.6dc";
  };
  E.B = function(a) {
    this.get(hb);
    a = "auto" == a ? Ka(J.domain) : a && "-" != a && "none" != a ? a[D]() : "";
    this.set(bb, a);
  };
  E.va = function(a) {
    this.set(hb, !!a);
  };
  E.na = function(a, b) {
    return ce(this.a, a, b);
  };
  E.link = function(a, b) {
    if (this.a.get(fb) && a) {
      var c = ce(this.a, a, b);
      J[z].href = c;
    }
  };
  E.ua = function(a, b) {
    this.a.get(fb) && a && a.action && (a.action = ce(this.a, a.action, b));
  };
  E.za = function() {
    this.v();
    var a = this.a, b = J.getElementById ? J.getElementById("utmtrans") : J.utmform && J.utmform.utmtrans ? J.utmform.utmtrans : null;
    if (b && b[na]) {
      a.set(Cb, []);
      for (var b = b[na][y]("UTM:"), c = 0; c < b[w]; c++) {
        b[c] = Da(b[c]);
        for (var d = b[c][y](de), e = 0; e < d[w]; e++) {
          d[e] = Da(d[e]);
        }
        "T" == d[0] ? fe(a, d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]) : "I" == d[0] && ge(a, d[1], d[2], d[3], d[4], d[5], d[6]);
      }
    }
  };
  E.$ = function(a, b, c, d, e, f, Be, n) {
    return fe(this.a, a, b, c, d, e, f, Be, n);
  };
  E.Y = function(a, b, c, d, e, f) {
    return ge(this.a, a, b, c, d, e, f);
  };
  E.Aa = function(a) {
    de = a || "|";
  };
  E.ea = function() {
    this.set(Cb, []);
  };
  E.wa = function(a, b, c, d) {
    var e = this.a;
    if (0 >= a || a > e.get(yb)) {
      a = !1;
    } else {
      if (!b || !c || 128 < b[w] + c[w]) {
        a = !1;
      } else {
        1 != d && 2 != d && (d = 3);
        var f = {};
        ha(f, b);
        f.value = c;
        f.scope = d;
        e.get(Fb)[a] = f;
        a = !0;
      }
    }
    a && this.a.n();
    return a;
  };
  E.ka = function(a) {
    this.a.get(Fb)[a] = void 0;
    this.a.n();
  };
  E.ra = function(a) {
    return (a = this.a.get(Fb)[a]) && 1 == a[ua] ? a[na] : void 0;
  };
  E.Ca = function(a, b, c) {
    this.m().f(a, b, c);
  };
  E.Da = function(a, b, c) {
    this.m().o(a, b, c);
  };
  E.sa = function(a, b) {
    return this.m().getKey(a, b);
  };
  E.ta = function(a, b) {
    return this.m().N(a, b);
  };
  E.fa = function(a) {
    this.m().L(a);
  };
  E.ga = function(a) {
    this.m().M(a);
  };
  E.ja = function() {
    return new yd;
  };
  E.W = function(a) {
    a && this.get(Ab)[m](a[D]());
  };
  E.ba = function() {
    this.set(Ab, []);
  };
  E.X = function(a) {
    a && this.get(Bb)[m](a[D]());
  };
  E.ca = function() {
    this.set(Bb, []);
  };
  E.Z = function(a, b, c, d, e) {
    if (a && b) {
      a = [a, b[D]()][C](":");
      if (d || e) {
        a = [a, d, e][C](":");
      }
      d = this.get(zb);
      d.splice(c ? 0 : d[w], 0, a);
    }
  };
  E.da = function() {
    this.set(zb, []);
  };
  E.ha = function(a) {
    this.a[ka]();
    var b = this.get(P), c = be(this.a);
    this.set(P, a);
    this.a.n();
    ae(this.a, c);
    this.set(P, b);
  };
  E.ya = function(a, b) {
    if (0 < a && 5 >= a && Ca(b) && "" != b) {
      var c = this.get(Fc) || [];
      c[a] = b;
      this.set(Fc, c);
    }
  };
  E.V = function(a) {
    a = "" + a;
    if (a[oa](/^[A-Za-z0-9]{1,5}$/)) {
      var b = this.get(Ic) || [];
      b[m](a);
      this.set(Ic, b);
    }
  };
  E.v = function() {
    this.a[ka]();
  };
  E.Ba = function(a) {
    a && "" != a && (this.set(Tb, a), this.a.j("var"));
  };
  var ne = function(a) {
    "trans" !== a.get(sc) && 500 <= a.b(cc, 0) && a[ta]();
    if ("event" === a.get(sc)) {
      var b = (new Date)[g](), c = a.b(dc, 0), d = a.b(Zb, 0), c = l[la]((b - (c != d ? c : 1E3 * c)) / 1E3 * 1);
      0 < c && (a.set(dc, b), a.set(R, l.min(10, a.b(R, 0) + c)));
      0 >= a.b(R, 0) && a[ta]();
    }
  }, pe = function(a) {
    "event" === a.get(sc) && a.set(R, l.max(0, a.b(R, 10) - 1));
  };
  var qe = function() {
    var a = [];
    this.add = function(b, c, d) {
      d && (c = G("" + c));
      a[m](b + "=" + c);
    };
    this.toString = function() {
      return a[C]("&");
    };
  }, re = function(a, b) {
    (b || 2 != a.get(xb)) && a.Za(cc);
  }, se = function(a, b) {
    b.add("utmwv", "5.4.6dc");
    b.add("utms", a.get(cc));
    b.add("utmn", Ea());
    var c = J[z].hostname;
    F(c) || b.add("utmhn", c, !0);
    c = a.get(vb);
    100 != c && b.add("utmsp", c, !0);
  }, te = function(a, b) {
    b.add("utmht", (new Date)[g]());
    b.add("utmac", Da(a.get(Wa)));
    a.get(Oc) && b.add("utmxkey", a.get(Oc), !0);
    a.get(vc) && b.add("utmni", 1);
    var c = a.get(Ic);
    c && 0 < c[w] && b.add("utmdid", c[C]("."));
    ef(a, b);
    !1 !== a.get(Xa) && (a.get(Xa) || M.w) && b.add("aip", 1);
    M.bb || (M.bb = a.get(Wa));
    (1 < M.ab() || M.bb != a.get(Wa)) && b.add("utmmt", 1);
    b.add("utmu", od.Xa());
  }, ue = function(a, b) {
    for (var c = a.get(Fc) || [], d = [], e = 1; e < c[w]; e++) {
      c[e] && d[m](e + ":" + G(c[e][p](/%/g, "%25")[p](/:/g, "%3A")[p](/,/g, "%2C")));
    }
    d[w] && b.add("utmpg", d[C](","));
  }, ef = function(a, b) {
    function c(a, b) {
      b && d[m](a + "=" + b + ";");
    }
    var d = [];
    c("__utma", cd(a));
    c("__utmz", hd(a, !1));
    c("__utmv", fd(a, !0));
    c("__utmx", be(a));
    b.add("utmcc", d[C]("+"), !0);
  }, ve = function(a, b) {
    a.get(ib) && (b.add("utmcs", a.get(Qb), !0), b.add("utmsr", a.get(Lb)), a.get(Rb) && b.add("utmvp", a.get(Rb)), b.add("utmsc", a.get(Mb)), b.add("utmul", a.get(Pb)), b.add("utmje", a.get(Nb)), b.add("utmfl", a.get(Ob), !0));
  }, we = function(a, b) {
    a.get(lb) && a.get(Ib) && b.add("utmdt", a.get(Ib), !0);
    b.add("utmhid", a.get(Kb));
    b.add("utmr", Pa(a.get(Jb), a.get(P)), !0);
    b.add("utmp", G(a.get(Hb), !0), !0);
  }, xe = function(a, b) {
    for (var c = a.get(Db), d = a.get(Eb), e = a.get(Fb) || [], f = 0; f < e[w]; f++) {
      var Be = e[f];
      Be && (c || (c = new yd), c.f(8, f, Be[r]), c.f(9, f, Be[na]), 3 != Be[ua] && c.f(11, f, "" + Be[ua]));
    }
    F(a.get(wc)) || F(a.get(xc), !0) || (c || (c = new yd), c.f(5, 1, a.get(wc)), c.f(5, 2, a.get(xc)), e = a.get(yc), void 0 != e && c.f(5, 3, e), e = a.get(zc), void 0 != e && c.o(5, 1, e));
    c ? b.add("utme", c.Qa(d), !0) : d && b.add("utme", d.A(), !0);
  }, ye = function(a, b, c) {
    var d = new qe;
    re(a, c);
    se(a, d);
    d.add("utmt", "tran");
    d.add("utmtid", b.id_, !0);
    d.add("utmtst", b.affiliation_, !0);
    d.add("utmtto", b.total_, !0);
    d.add("utmttx", b.tax_, !0);
    d.add("utmtsp", b.shipping_, !0);
    d.add("utmtci", b.city_, !0);
    d.add("utmtrg", b.state_, !0);
    d.add("utmtco", b.country_, !0);
    xe(a, d);
    ve(a, d);
    we(a, d);
    (b = a.get(Gb)) && d.add("utmcu", b, !0);
    c || (ue(a, d), te(a, d));
    return d[v]();
  }, ze = function(a, b, c) {
    var d = new qe;
    re(a, c);
    se(a, d);
    d.add("utmt", "item");
    d.add("utmtid", b.transId_, !0);
    d.add("utmipc", b.sku_, !0);
    d.add("utmipn", b.name_, !0);
    d.add("utmiva", b.category_, !0);
    d.add("utmipr", b.price_, !0);
    d.add("utmiqt", b.quantity_, !0);
    xe(a, d);
    ve(a, d);
    we(a, d);
    (b = a.get(Gb)) && d.add("utmcu", b, !0);
    c || (ue(a, d), te(a, d));
    return d[v]();
  }, Ae = function(a, b) {
    var c = a.get(sc);
    if ("page" == c) {
      c = new qe, re(a, b), se(a, c), xe(a, c), ve(a, c), we(a, c), b || (ue(a, c), te(a, c)), c = [c[v]()];
    } else {
      if ("event" == c) {
        c = new qe, re(a, b), se(a, c), c.add("utmt", "event"), xe(a, c), ve(a, c), we(a, c), b || (ue(a, c), te(a, c)), c = [c[v]()];
      } else {
        if ("var" == c) {
          c = new qe, re(a, b), se(a, c), c.add("utmt", "var"), !b && te(a, c), c = [c[v]()];
        } else {
          if ("trans" == c) {
            for (var c = [], d = a.get(Cb), e = 0; e < d[w]; ++e) {
              c[m](ye(a, d[e], b));
              for (var f = d[e].items_, Be = 0; Be < f[w]; ++Be) {
                c[m](ze(a, f[Be], b));
              }
            }
          } else {
            "social" == c ? b ? c = [] : (c = new qe, re(a, b), se(a, c), c.add("utmt", "social"), c.add("utmsn", a.get(Ac), !0), c.add("utmsa", a.get(Bc), !0), c.add("utmsid", a.get(Cc), !0), xe(a, c), ve(a, c), we(a, c), ue(a, c), te(a, c), c = [c[v]()]) : "feedback" == c ? b ? c = [] : (c = new qe, re(a, b), se(a, c), c.add("utmt", "feedback"), c.add("utmfbid", a.get(Gc), !0), c.add("utmfbpr", a.get(Hc), !0), xe(a, c), ve(a, c), we(a, c), ue(a, c), te(a, c), c = [c[v]()]) : c = [];
          }
        }
      }
    }
    return c;
  }, oe = function(a) {
    var b, c = a.get(xb), d = a.get(uc), e = d && d.Ua, f = 0;
    if (0 == c || 2 == c) {
      var Be = a.get(wb) + "?";
      b = Ae(a, !0);
      for (var n = 0, s = b[w]; n < s; n++) {
        Sa(b[n], e, Be, !0), f++;
      }
    }
    if (1 == c || 2 == c) {
      for (b = Ae(a), n = 0, s = b[w]; n < s; n++) {
        try {
          Sa(b[n], e), f++;
        } catch (t) {
          t && Ra(t[r], void 0, t.message);
        }
      }
    }
    d && (d.q = f);
  };
  var Ce = function(a) {
    ha(this, "len");
    this.message = a + "-8192";
  }, De = function(a) {
    ha(this, "ff2post");
    this.message = a + "-2036";
  }, Sa = function(a, b, c, d) {
    b = b || Fa;
    if (d || 2036 >= a[w]) {
      ff(a, b, c);
    } else {
      if (8192 >= a[w]) {
        if (0 <= W[za].userAgent[q]("Firefox") && ![].reduce) {
          throw new De(a[w]);
        }
        Ee(a, b);
      } else {
        throw new Ce(a[w]);
      }
    }
  }, ff = function(a, b, c) {
    c = c || ("https:" == J[z][A] || M.G ? "https://stats.g.doubleclick.net" : "http://stats.g.doubleclick.net") + "/__utm.gif?";
    var d = new Image(1, 1);
    d.src = c + a;
    d.onload = function() {
      d.onload = null;
      d.onerror = null;
      b();
    };
    d.onerror = function() {
      d.onload = null;
      d.onerror = null;
      b();
    };
  }, Ee = function(a, b) {
    if (J.body) {
      a = aa(a);
      try {
        var c = J[qa]('<iframe name="' + a + '"></iframe>');
      } catch (d) {
        c = J[qa]("iframe"), ha(c, a);
      }
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var e = J[z], e = ("https:" == J[z][A] || M.G ? "https://stats.g.doubleclick.net" : "http://stats.g.doubleclick.net") + "/u/post_iframe_dc.html#" + aa(e[A] + "//" + e[u] + "/favicon.ico"), f = function() {
        c.src = "";
        c.parentNode && c.parentNode.removeChild(c);
      };
      Ga(W, "beforeunload", f);
      var Be = !1, n = 0, s = function() {
        if (!Be) {
          try {
            if (9 < n || c.contentWindow[z][u] == J[z][u]) {
              Be = !0;
              f();
              Ha(W, "beforeunload", f);
              b();
              return;
            }
          } catch (a$1) {
          }
          n++;
          ca(s, 200);
        }
      };
      Ga(c, "load", s);
      J.body.appendChild(c);
      c.src = e;
    } else {
      Ve(function() {
        Ee(a, b);
      }, 100);
    }
  };
  var $ = function() {
    this.G = this.w = !1;
    this.C = {};
    this.D = [];
    this.U = 0;
    this.S = [["www.google-analytics.com", "", "/plugins/"]];
    this._gasoCPath = this._gasoDomain = this.bb = void 0;
    Qe();
    Re();
  };
  E = $[x];
  E.oa = function(a, b) {
    return this.r(a, void 0, b);
  };
  E.r = function(a, b, c) {
    b && H(23);
    c && H(67);
    void 0 == b && (b = "~" + M.U++);
    a = new U(b, a, c);
    M.C[b] = a;
    M.D[m](a);
    return a;
  };
  E.u = function(a) {
    a = a || "";
    return M.C[a] || M.r(void 0, a);
  };
  E.pa = function() {
    return M.D[ja](0);
  };
  E.ab = function() {
    return M.D[w];
  };
  E.aa = function() {
    this.w = !0;
  };
  E.la = function() {
    this.G = !0;
  };
  var Fe = function(a) {
    if ("prerender" == J.webkitVisibilityState) {
      return !1;
    }
    a();
    return !0;
  };
  var M = new $;
  var Ie = W._gat;
  Ie && Ba(Ie._getTracker) ? M = Ie : W._gat = M;
  var Z = new Y;
  (function(a) {
    if (!Fe(a)) {
      H(123);
      var b = !1, c = function() {
        !b && Fe(a) && (b = !0, Ha(J, "webkitvisibilitychange", c));
      };
      Ga(J, "webkitvisibilitychange", c);
    }
  })(function() {
    var a = W._gaq, b = !1;
    if (a && Ba(a[m]) && (b = "[object Array]" == Object[x][v].call(Object(a)), !b)) {
      Z = a;
      return;
    }
    W._gaq = Z;
    b && Z[m][ya](Z, a);
  });
  function Yc(a) {
    var b = 1, c = 0, d;
    if (a) {
      for (b = 0, d = a[w] - 1; 0 <= d; d--) {
        c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
      }
    }
    return b;
  }
})();

