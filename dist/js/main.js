!(function (e, t) {
  "use strict"
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document")
            return t(e)
          })
    : t(e)
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict"
  function n(e, t, n) {
    var i,
      r = (t = t || Q).createElement("script")
    if (((r.text = e), n)) for (i in ae) n[i] && (r[i] = n[i])
    t.head.appendChild(r).parentNode.removeChild(r)
  }
  function i(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
  }
  function r(e) {
    var t = !!e && "length" in e && e.length,
      n = i(e)
    return !oe(e) && !se(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e))
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  function s(e, t, n) {
    return oe(t)
      ? ue.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n
        })
      : t.nodeType
      ? ue.grep(e, function (e) {
          return (e === t) !== n
        })
      : "string" != typeof t
      ? ue.grep(e, function (e) {
          return J.call(t, e) > -1 !== n
        })
      : ue.filter(t, e, n)
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e
  }
  function l(e) {
    var t = {}
    return (
      ue.each(e.match(be) || [], function (e, n) {
        t[n] = !0
      }),
      t
    )
  }
  function u(e) {
    return e
  }
  function c(e) {
    throw e
  }
  function f(e, t, n, i) {
    var r
    try {
      e && oe((r = e.promise)) ? r.call(e).done(t).fail(n) : e && oe((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  function d() {
    Q.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), ue.ready()
  }
  function h(e, t) {
    return t.toUpperCase()
  }
  function p(e) {
    return e.replace(we, "ms-").replace(Ae, h)
  }
  function g() {
    this.expando = ue.expando + g.uid++
  }
  function m(e) {
    return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e))
  }
  function v(e, t, n) {
    var i
    if (void 0 === n && 1 === e.nodeType)
      if (((i = "data-" + t.replace(Ie, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
        try {
          n = m(n)
        } catch (e) {}
        Se.set(e, t, n)
      } else n = void 0
    return n
  }
  function y(e, t, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur()
          }
        : function () {
            return ue.css(e, t, "")
          },
      l = a(),
      u = (n && n[3]) || (ue.cssNumber[t] ? "" : "px"),
      c = (ue.cssNumber[t] || ("px" !== u && +l)) && ke.exec(ue.css(e, t))
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--; ) ue.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o)
      ;(c *= 2), ue.style(e, t, c + u), (n = n || [])
    }
    return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r
  }
  function _(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = He[i]
    return r || ((t = n.body.appendChild(n.createElement(i))), (r = ue.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (He[i] = r), r)
  }
  function b(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && ((n = i.style.display), t ? ("none" === n && ((r[o] = De.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && Pe(i) && (r[o] = _(i))) : "none" !== n && ((r[o] = "none"), De.set(i, "display", n)))
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o])
    return e
  }
  function E(e, t) {
    var n
    return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && o(e, t)) ? ue.merge([e], n) : n
  }
  function T(e, t) {
    for (var n = 0, i = e.length; n < i; n++) De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
  }
  function C(e, t, n, r, o) {
    for (var s, a, l, u, c, f, d = t.createDocumentFragment(), h = [], p = 0, g = e.length; p < g; p++)
      if ((s = e[p]) || 0 === s)
        if ("object" === i(s)) ue.merge(h, s.nodeType ? [s] : s)
        else if (Fe.test(s)) {
          for (a = a || d.appendChild(t.createElement("div")), l = (We.exec(s) || ["", ""])[1].toLowerCase(), u = Be[l] || Be._default, a.innerHTML = u[1] + ue.htmlPrefilter(s) + u[2], f = u[0]; f--; ) a = a.lastChild
          ue.merge(h, a.childNodes), ((a = d.firstChild).textContent = "")
        } else h.push(t.createTextNode(s))
    for (d.textContent = "", p = 0; (s = h[p++]); )
      if (r && ue.inArray(s, r) > -1) o && o.push(s)
      else if (((c = ue.contains(s.ownerDocument, s)), (a = E(d.appendChild(s), "script")), c && T(a), n)) for (f = 0; (s = a[f++]); ) Me.test(s.type || "") && n.push(s)
    return d
  }
  function w() {
    return !0
  }
  function A() {
    return !1
  }
  function x() {
    try {
      return Q.activeElement
    } catch (e) {}
  }
  function D(e, t, n, i, r, o) {
    var s, a
    if ("object" == typeof t) {
      "string" != typeof n && ((i = i || n), (n = void 0))
      for (a in t) D(e, a, n, i, t[a], o)
      return e
    }
    if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = A
    else if (!r) return e
    return (
      1 === o &&
        ((s = r),
        ((r = function (e) {
          return ue().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = ue.guid++))),
      e.each(function () {
        ue.event.add(this, t, r, i, n)
      })
    )
  }
  function S(e, t) {
    return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? ue(e).children("tbody")[0] || e : e
  }
  function N(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
  }
  function I(e) {
    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e
  }
  function O(e, t) {
    var n, i, r, o, s, a, l, u
    if (1 === t.nodeType) {
      if (De.hasData(e) && ((o = De.access(e)), (s = De.set(t, o)), (u = o.events))) {
        delete s.handle, (s.events = {})
        for (r in u) for (n = 0, i = u[r].length; n < i; n++) ue.event.add(t, r, u[r][n])
      }
      Se.hasData(e) && ((a = Se.access(e)), (l = ue.extend({}, a)), Se.set(t, l))
    }
  }
  function k(e, t) {
    var n = t.nodeName.toLowerCase()
    "input" === n && Re.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue)
  }
  function L(e, t, i, r) {
    t = z.apply([], t)
    var o,
      s,
      a,
      l,
      u,
      c,
      f = 0,
      d = e.length,
      h = d - 1,
      p = t[0],
      g = oe(p)
    if (g || (d > 1 && "string" == typeof p && !re.checkClone && Ye.test(p)))
      return e.each(function (n) {
        var o = e.eq(n)
        g && (t[0] = p.call(this, n, o.html())), L(o, t, i, r)
      })
    if (d && ((o = C(t, e[0].ownerDocument, !1, e, r)), (s = o.firstChild), 1 === o.childNodes.length && (o = s), s || r)) {
      for (l = (a = ue.map(E(o, "script"), N)).length; f < d; f++) (u = o), f !== h && ((u = ue.clone(u, !0, !0)), l && ue.merge(a, E(u, "script"))), i.call(e[f], u, f)
      if (l) for (c = a[a.length - 1].ownerDocument, ue.map(a, I), f = 0; f < l; f++) (u = a[f]), Me.test(u.type || "") && !De.access(u, "globalEval") && ue.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ue._evalUrl && ue._evalUrl(u.src) : n(u.textContent.replace(Ge, ""), c, u))
    }
    return e
  }
  function P(e, t, n) {
    for (var i, r = t ? ue.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ue.cleanData(E(i)), i.parentNode && (n && ue.contains(i.ownerDocument, i) && T(E(i, "script")), i.parentNode.removeChild(i))
    return e
  }
  function j(e, t, n) {
    var i,
      r,
      o,
      s,
      a = e.style
    return (n = n || Xe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ue.contains(e.ownerDocument, e) || (s = ue.style(e, t)), !re.pixelBoxStyles() && ze.test(s) && Je.test(t) && ((i = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = o))), void 0 !== s ? s + "" : s
  }
  function H(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      }
    }
  }
  function R(e) {
    if (e in rt) return e
    for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--; ) if ((e = it[n] + t) in rt) return e
  }
  function W(e) {
    var t = ue.cssProps[e]
    return t || (t = ue.cssProps[e] = R(e) || e), t
  }
  function M(e, t, n) {
    var i = ke.exec(t)
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }
  function B(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0
    if (n === (i ? "border" : "content")) return 0
    for (; s < 4; s += 2) "margin" === n && (l += ue.css(e, n + Le[s], !0, r)), i ? ("content" === n && (l -= ue.css(e, "padding" + Le[s], !0, r)), "margin" !== n && (l -= ue.css(e, "border" + Le[s] + "Width", !0, r))) : ((l += ue.css(e, "padding" + Le[s], !0, r)), "padding" !== n ? (l += ue.css(e, "border" + Le[s] + "Width", !0, r)) : (a += ue.css(e, "border" + Le[s] + "Width", !0, r)))
    return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5))), l
  }
  function F(e, t, n) {
    var i = Xe(e),
      r = j(e, t, i),
      o = "border-box" === ue.css(e, "boxSizing", !1, i),
      s = o
    if (ze.test(r)) {
      if (!n) return r
      r = "auto"
    }
    return (s = s && (re.boxSizingReliable() || r === e.style[t])), ("auto" === r || (!parseFloat(r) && "inline" === ue.css(e, "display", !1, i))) && ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)), (r = parseFloat(r) || 0) + B(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
  }
  function U(e) {
    return (e.match(be) || []).join(" ")
  }
  function q(e) {
    return (e.getAttribute && e.getAttribute("class")) || ""
  }
  function V(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(be) || [] : []
  }
  function K(e, t, n, r) {
    var o
    if (Array.isArray(t))
      ue.each(t, function (t, i) {
        n || dt.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
      })
    else if (n || "object" !== i(t)) r(e, t)
    else for (o in t) K(e + "[" + o + "]", t[o], n, r)
  }
  var $ = [],
    Q = e.document,
    Y = Object.getPrototypeOf,
    G = $.slice,
    z = $.concat,
    X = $.push,
    J = $.indexOf,
    Z = {},
    ee = Z.toString,
    te = Z.hasOwnProperty,
    ne = te.toString,
    ie = ne.call(Object),
    re = {},
    oe = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    },
    se = function (e) {
      return null != e && e === e.window
    },
    ae = { type: !0, src: !0, noModule: !0 },
    le = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
    ue = function (e, t) {
      return new ue.fn.init(e, t)
    },
    ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  ;(ue.fn = ue.prototype =
    {
      jquery: le,
      constructor: ue,
      length: 0,
      toArray: function () {
        return G.call(this)
      },
      get: function (e) {
        return null == e ? G.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function (e) {
        var t = ue.merge(this.constructor(), e)
        return (t.prevObject = this), t
      },
      each: function (e) {
        return ue.each(this, e)
      },
      map: function (e) {
        return this.pushStack(
          ue.map(this, function (t, n) {
            return e.call(t, n, t)
          })
        )
      },
      slice: function () {
        return this.pushStack(G.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0)
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: X,
      sort: $.sort,
      splice: $.splice
    }),
    (ue.extend = ue.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1
        for ("boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++), "object" == typeof s || oe(s) || (s = {}), a === l && ((s = this), a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) (n = s[t]), s !== (i = e[t]) && (u && i && (ue.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? ((r = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && ue.isPlainObject(n) ? n : {}), (s[t] = ue.extend(u, o, i))) : void 0 !== i && (s[t] = i))
        return s
      }),
    ue.extend({
      expando: "jQuery" + (le + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n
        return !(!e || "[object Object]" !== ee.call(e) || ((t = Y(e)) && ("function" != typeof (n = te.call(t, "constructor") && t.constructor) || ne.call(n) !== ie)))
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      globalEval: function (e) {
        n(e)
      },
      each: function (e, t) {
        var n,
          i = 0
        if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break
        return e
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(ce, "")
      },
      makeArray: function (e, t) {
        var n = t || []
        return null != e && (r(Object(e)) ? ue.merge(n, "string" == typeof e ? [e] : e) : X.call(n, e)), n
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : J.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]
        return (e.length = r), e
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r])
        return i
      },
      map: function (e, t, n) {
        var i,
          o,
          s = 0,
          a = []
        if (r(e)) for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o)
        else for (s in e) null != (o = t(e[s], s, n)) && a.push(o)
        return z.apply([], a)
      },
      guid: 1,
      support: re
    }),
    "function" == typeof Symbol && (ue.fn[Symbol.iterator] = $[Symbol.iterator]),
    ue.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      Z["[object " + t + "]"] = t.toLowerCase()
    })
  var fe = (function (e) {
    function t(e, t, n, i) {
      var r,
        o,
        s,
        a,
        l,
        c,
        d,
        h = t && t.ownerDocument,
        p = t ? t.nodeType : 9
      if (((n = n || []), "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))) return n
      if (!i && ((t ? t.ownerDocument || t : M) !== O && I(t), (t = t || O), L)) {
        if (11 !== p && (l = ge.exec(e)))
          if ((r = l[1])) {
            if (9 === p) {
              if (!(s = t.getElementById(r))) return n
              if (s.id === r) return n.push(s), n
            } else if (h && (s = h.getElementById(r)) && R(t, s) && s.id === r) return n.push(s), n
          } else {
            if (l[2]) return z.apply(n, t.getElementsByTagName(e)), n
            if ((r = l[3]) && b.getElementsByClassName && t.getElementsByClassName) return z.apply(n, t.getElementsByClassName(r)), n
          }
        if (b.qsa && !V[e + " "] && (!P || !P.test(e))) {
          if (1 !== p) (h = t), (d = e)
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? (a = a.replace(_e, be)) : t.setAttribute("id", (a = W)), o = (c = w(e)).length; o--; ) c[o] = "#" + a + " " + f(c[o])
            ;(d = c.join(",")), (h = (me.test(e) && u(t.parentNode)) || t)
          }
          if (d)
            try {
              return z.apply(n, h.querySelectorAll(d)), n
            } catch (e) {
            } finally {
              a === W && t.removeAttribute("id")
            }
        }
      }
      return x(e.replace(oe, "$1"), t, n, i)
    }
    function n() {
      function e(n, i) {
        return t.push(n + " ") > E.cacheLength && delete e[t.shift()], (e[n + " "] = i)
      }
      var t = []
      return e
    }
    function i(e) {
      return (e[W] = !0), e
    }
    function r(e) {
      var t = O.createElement("fieldset")
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) E.attrHandle[n[i]] = t
    }
    function s(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex
      if (i) return i
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
      return e ? 1 : -1
    }
    function a(e) {
      return function (t) {
        return "form" in t ? (t.parentNode && !1 === t.disabled ? ("label" in t ? ("label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e) : t.isDisabled === e || (t.isDisabled !== !e && Te(t) === e)) : t.disabled === e) : "label" in t && t.disabled === e
      }
    }
    function l(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]))
          })
        )
      })
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    function c() {}
    function f(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value
      return i
    }
    function d(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        s = n && "parentNode" === o,
        a = F++
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r)
            return !1
          }
        : function (t, n, l) {
            var u,
              c,
              f,
              d = [B, a]
            if (l) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (((f = t[W] || (t[W] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t
                  else {
                    if ((u = c[o]) && u[0] === B && u[1] === a) return (d[2] = u[2])
                    if (((c[o] = d), (d[2] = e(t, n, l)))) return !0
                  }
            return !1
          }
    }
    function h(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1
            return !0
          }
        : e[0]
    }
    function p(e, n, i) {
      for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i)
      return i
    }
    function g(e, t, n, i, r) {
      for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)))
      return s
    }
    function m(e, t, n, r, o, s) {
      return (
        r && !r[W] && (r = m(r)),
        o && !o[W] && (o = m(o, s)),
        i(function (i, s, a, l) {
          var u,
            c,
            f,
            d = [],
            h = [],
            m = s.length,
            v = i || p(t || "*", a.nodeType ? [a] : a, []),
            y = !e || (!i && t) ? v : g(v, d, e, a, l),
            _ = n ? (o || (i ? e : m || r) ? [] : s) : y
          if ((n && n(y, _, a, l), r)) for (u = g(_, h), r(u, [], a, l), c = u.length; c--; ) (f = u[c]) && (_[h[c]] = !(y[h[c]] = f))
          if (i) {
            if (o || e) {
              if (o) {
                for (u = [], c = _.length; c--; ) (f = _[c]) && u.push((y[c] = f))
                o(null, (_ = []), u, l)
              }
              for (c = _.length; c--; ) (f = _[c]) && (u = o ? J(i, f) : d[c]) > -1 && (i[u] = !(s[u] = f))
            }
          } else (_ = g(_ === s ? _.splice(m, _.length) : _)), o ? o(null, s, _, l) : z.apply(s, _)
        })
      )
    }
    function v(e) {
      for (
        var t,
          n,
          i,
          r = e.length,
          o = E.relative[e[0].type],
          s = o || E.relative[" "],
          a = o ? 1 : 0,
          l = d(
            function (e) {
              return e === t
            },
            s,
            !0
          ),
          u = d(
            function (e) {
              return J(t, e) > -1
            },
            s,
            !0
          ),
          c = [
            function (e, n, i) {
              var r = (!o && (i || n !== D)) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
              return (t = null), r
            }
          ];
        a < r;
        a++
      )
        if ((n = E.relative[e[a].type])) c = [d(h(c), n)]
        else {
          if ((n = E.filter[e[a].type].apply(null, e[a].matches))[W]) {
            for (i = ++a; i < r && !E.relative[e[i].type]; i++);
            return m(a > 1 && h(c), a > 1 && f(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(oe, "$1"), n, a < i && v(e.slice(a, i)), i < r && v((e = e.slice(i))), i < r && f(e))
          }
          c.push(n)
        }
      return h(c)
    }
    function y(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        s = function (i, s, a, l, u) {
          var c,
            f,
            d,
            h = 0,
            p = "0",
            m = i && [],
            v = [],
            y = D,
            _ = i || (o && E.find.TAG("*", u)),
            b = (B += null == y ? 1 : Math.random() || 0.1),
            T = _.length
          for (u && (D = s === O || s || u); p !== T && null != (c = _[p]); p++) {
            if (o && c) {
              for (f = 0, s || c.ownerDocument === O || (I(c), (a = !L)); (d = e[f++]); )
                if (d(c, s || O, a)) {
                  l.push(c)
                  break
                }
              u && (B = b)
            }
            r && ((c = !d && c) && h--, i && m.push(c))
          }
          if (((h += p), r && p !== h)) {
            for (f = 0; (d = n[f++]); ) d(m, v, s, a)
            if (i) {
              if (h > 0) for (; p--; ) m[p] || v[p] || (v[p] = Y.call(l))
              v = g(v)
            }
            z.apply(l, v), u && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
          }
          return u && ((B = b), (D = y)), m
        }
      return r ? i(s) : s
    }
    var _,
      b,
      E,
      T,
      C,
      w,
      A,
      x,
      D,
      S,
      N,
      I,
      O,
      k,
      L,
      P,
      j,
      H,
      R,
      W = "sizzle" + 1 * new Date(),
      M = e.document,
      B = 0,
      F = 0,
      U = n(),
      q = n(),
      V = n(),
      K = function (e, t) {
        return e === t && (N = !0), 0
      },
      $ = {}.hasOwnProperty,
      Q = [],
      Y = Q.pop,
      G = Q.push,
      z = Q.push,
      X = Q.slice,
      J = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n
        return -1
      },
      Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]",
      te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
      ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
      re = new RegExp(ee + "+", "g"),
      oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      se = new RegExp("^" + ee + "*," + ee + "*"),
      ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
      ue = new RegExp(ie),
      ce = new RegExp("^" + te + "$"),
      fe = { ID: new RegExp("^#(" + te + ")"), CLASS: new RegExp("^\\.(" + te + ")"), TAG: new RegExp("^(" + te + "|[*])"), ATTR: new RegExp("^" + ne), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"), bool: new RegExp("^(?:" + Z + ")$", "i"), needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i") },
      de = /^(?:input|select|textarea|button)$/i,
      he = /^h\d$/i,
      pe = /^[^{]+\{\s*\[native \w/,
      ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      me = /[+~]/,
      ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
      ye = function (e, t, n) {
        var i = "0x" + t - 65536
        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320)
      },
      _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      be = function (e, t) {
        return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e
      },
      Ee = function () {
        I()
      },
      Te = d(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        },
        { dir: "parentNode", next: "legend" }
      )
    try {
      z.apply((Q = X.call(M.childNodes)), M.childNodes), Q[M.childNodes.length].nodeType
    } catch (e) {
      z = {
        apply: Q.length
          ? function (e, t) {
              G.apply(e, X.call(t))
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1
            }
      }
    }
    ;(b = t.support = {}),
      (C = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement
          return !!t && "HTML" !== t.nodeName
        }),
      (I = t.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : M
          return i !== O && 9 === i.nodeType && i.documentElement
            ? ((O = i),
              (k = O.documentElement),
              (L = !C(O)),
              M !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)),
              (b.attributes = r(function (e) {
                return (e.className = "i"), !e.getAttribute("className")
              })),
              (b.getElementsByTagName = r(function (e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
              })),
              (b.getElementsByClassName = pe.test(O.getElementsByClassName)),
              (b.getById = r(function (e) {
                return (k.appendChild(e).id = W), !O.getElementsByName || !O.getElementsByName(W).length
              })),
              b.getById
                ? ((E.filter.ID = function (e) {
                    var t = e.replace(ve, ye)
                    return function (e) {
                      return e.getAttribute("id") === t
                    }
                  }),
                  (E.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && L) {
                      var n = t.getElementById(e)
                      return n ? [n] : []
                    }
                  }))
                : ((E.filter.ID = function (e) {
                    var t = e.replace(ve, ye)
                    return function (e) {
                      var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id")
                      return n && n.value === t
                    }
                  }),
                  (E.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && L) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e)
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                      }
                      return []
                    }
                  })),
              (E.find.TAG = b.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      o = t.getElementsByTagName(e)
                    if ("*" === e) {
                      for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n)
                      return i
                    }
                    return o
                  }),
              (E.find.CLASS =
                b.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e)
                }),
              (j = []),
              (P = []),
              (b.qsa = pe.test(O.querySelectorAll)) &&
                (r(function (e) {
                  ;(k.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>"), e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + W + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || P.push(".#.+[+~]")
                }),
                r(function (e) {
                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                  var t = O.createElement("input")
                  t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), (k.appendChild(e).disabled = !0), 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                })),
              (b.matchesSelector = pe.test((H = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector))) &&
                r(function (e) {
                  ;(b.disconnectedMatch = H.call(e, "*")), H.call(e, "[s!='']:x"), j.push("!=", ie)
                }),
              (P = P.length && new RegExp(P.join("|"))),
              (j = j.length && new RegExp(j.join("|"))),
              (t = pe.test(k.compareDocumentPosition)),
              (R =
                t || pe.test(k.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode
                      return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                  : function (e, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0
                      return !1
                    }),
              (K = t
                ? function (e, t) {
                    if (e === t) return (N = !0), 0
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!b.sortDetached && t.compareDocumentPosition(e) === n) ? (e === O || (e.ownerDocument === M && R(M, e)) ? -1 : t === O || (t.ownerDocument === M && R(M, t)) ? 1 : S ? J(S, e) - J(S, t) : 0) : 4 & n ? -1 : 1)
                  }
                : function (e, t) {
                    if (e === t) return (N = !0), 0
                    var n,
                      i = 0,
                      r = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      l = [t]
                    if (!r || !o) return e === O ? -1 : t === O ? 1 : r ? -1 : o ? 1 : S ? J(S, e) - J(S, t) : 0
                    if (r === o) return s(e, t)
                    for (n = e; (n = n.parentNode); ) a.unshift(n)
                    for (n = t; (n = n.parentNode); ) l.unshift(n)
                    for (; a[i] === l[i]; ) i++
                    return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
                  }),
              O)
            : O
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n)
      }),
      (t.matchesSelector = function (e, n) {
        if (((e.ownerDocument || e) !== O && I(e), (n = n.replace(le, "='$1']")), b.matchesSelector && L && !V[n + " "] && (!j || !j.test(n)) && (!P || !P.test(n))))
          try {
            var i = H.call(e, n)
            if (i || b.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i
          } catch (e) {}
        return t(n, O, null, [e]).length > 0
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== O && I(e), R(e, t)
      }),
      (t.attr = function (e, t) {
        ;(e.ownerDocument || e) !== O && I(e)
        var n = E.attrHandle[t.toLowerCase()],
          i = n && $.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0
        return void 0 !== i ? i : b.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }),
      (t.escape = function (e) {
        return (e + "").replace(_e, be)
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          r = 0
        if (((N = !b.detectDuplicates), (S = !b.sortStable && e.slice(0)), e.sort(K), N)) {
          for (; (t = e[r++]); ) t === e[r] && (i = n.push(r))
          for (; i--; ) e.splice(n[i], 1)
        }
        return (S = null), e
      }),
      (T = t.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent
              for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
            } else if (3 === r || 4 === r) return e.nodeValue
          } else for (; (t = e[i++]); ) n += T(t)
          return n
        }),
      ((E = t.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: fe,
          attrHandle: {},
          find: {},
          relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
          preFilter: {
            ATTR: function (e) {
              return (e[1] = e[1].replace(ve, ye)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function (e) {
              return (e[1] = e[1].toLowerCase()), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]), e
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2]
              return fe.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ue.test(n) && (t = w(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ve, ye).toLowerCase()
              return "*" === e
                ? function () {
                    return !0
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                  }
            },
            CLASS: function (e) {
              var t = U[e + " "]
              return (
                t ||
                ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                  U(e, function (e) {
                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "")
                  }))
              )
            },
            ATTR: function (e, n, i) {
              return function (r) {
                var o = t.attr(r, e)
                return null == o ? "!=" === n : !n || ((o += ""), "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
              }
            },
            CHILD: function (e, t, n, i, r) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t
              return 1 === i && 0 === r
                ? function (e) {
                    return !!e.parentNode
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      f,
                      d,
                      h,
                      p,
                      g = o !== s ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      v = a && t.nodeName.toLowerCase(),
                      y = !l && !a,
                      _ = !1
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1
                          p = g = "only" === e && !p && "nextSibling"
                        }
                        return !0
                      }
                      if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                        for (_ = (h = (u = (c = (f = (d = m)[W] || (d[W] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && u[1]) && u[2], d = h && m.childNodes[h]; (d = (++h && d && d[g]) || (_ = h = 0) || p.pop()); )
                          if (1 === d.nodeType && ++_ && d === t) {
                            c[e] = [B, h, _]
                            break
                          }
                      } else if ((y && (_ = h = (u = (c = (f = (d = t)[W] || (d[W] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && u[1]), !1 === _)) for (; (d = (++h && d && d[g]) || (_ = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((c = (f = d[W] || (d[W] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [B, _]), d !== t)); );
                      return (_ -= r) === i || (_ % i == 0 && _ / i >= 0)
                    }
                  }
            },
            PSEUDO: function (e, n) {
              var r,
                o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e)
              return o[W]
                ? o(n)
                : o.length > 1
                ? ((r = [e, e, "", n]),
                  E.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; ) e[(i = J(e, r[s]))] = !(t[i] = r[s])
                      })
                    : function (e) {
                        return o(e, 0, r)
                      })
                : o
            }
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                r = A(e.replace(oe, "$1"))
              return r[W]
                ? i(function (e, t, n, i) {
                    for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o))
                  })
                : function (e, i, o) {
                    return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                  }
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0
              }
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(ve, ye)),
                function (t) {
                  return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                }
              )
            }),
            lang: i(function (e) {
              return (
                ce.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(ve, ye).toLowerCase()),
                function (t) {
                  var n
                  do {
                    if ((n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType)
                  return !1
                }
              )
            }),
            target: function (t) {
              var n = e.location && e.location.hash
              return n && n.slice(1) === t.id
            },
            root: function (e) {
              return e === k
            },
            focus: function (e) {
              return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: a(!1),
            disabled: a(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase()
              return ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            },
            selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1
              return !0
            },
            parent: function (e) {
              return !E.pseudos.empty(e)
            },
            header: function (e) {
              return he.test(e.nodeName)
            },
            input: function (e) {
              return de.test(e.nodeName)
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase()
              return ("input" === t && "button" === e.type) || "button" === t
            },
            text: function (e) {
              var t
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: l(function () {
              return [0]
            }),
            last: l(function (e, t) {
              return [t - 1]
            }),
            eq: l(function (e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: l(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n)
              return e
            }),
            odd: l(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n)
              return e
            }),
            lt: l(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i)
              return e
            }),
            gt: l(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i)
              return e
            })
          }
        }).pseudos.nth = E.pseudos.eq)
    for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      E.pseudos[_] = (function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      })(_)
    for (_ in { submit: !0, reset: !0 })
      E.pseudos[_] = (function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase()
          return ("input" === n || "button" === n) && t.type === e
        }
      })(_)
    return (
      (c.prototype = E.filters = E.pseudos),
      (E.setFilters = new c()),
      (w = t.tokenize =
        function (e, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c = q[e + " "]
          if (c) return n ? 0 : c.slice(0)
          for (a = e, l = [], u = E.preFilter; a; ) {
            ;(i && !(r = se.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))), (i = !1), (r = ae.exec(a)) && ((i = r.shift()), o.push({ value: i, type: r[0].replace(oe, " ") }), (a = a.slice(i.length)))
            for (s in E.filter) !(r = fe[s].exec(a)) || (u[s] && !(r = u[s](r))) || ((i = r.shift()), o.push({ value: i, type: s, matches: r }), (a = a.slice(i.length)))
            if (!i) break
          }
          return n ? a.length : a ? t.error(e) : q(e, l).slice(0)
        }),
      (A = t.compile =
        function (e, t) {
          var n,
            i = [],
            r = [],
            o = V[e + " "]
          if (!o) {
            for (t || (t = w(e)), n = t.length; n--; ) (o = v(t[n]))[W] ? i.push(o) : r.push(o)
            ;(o = V(e, y(r, i))).selector = e
          }
          return o
        }),
      (x = t.select =
        function (e, t, n, i) {
          var r,
            o,
            s,
            a,
            l,
            c = "function" == typeof e && e,
            d = !i && w((e = c.selector || e))
          if (((n = n || []), 1 === d.length)) {
            if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && L && E.relative[o[1].type]) {
              if (!(t = (E.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n
              c && (t = t.parentNode), (e = e.slice(o.shift().value.length))
            }
            for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && ((s = o[r]), !E.relative[(a = s.type)]); )
              if ((l = E.find[a]) && (i = l(s.matches[0].replace(ve, ye), (me.test(o[0].type) && u(t.parentNode)) || t))) {
                if ((o.splice(r, 1), !(e = i.length && f(o)))) return z.apply(n, i), n
                break
              }
          }
          return (c || A(e, d))(i, t, !L, n, !t || (me.test(e) && u(t.parentNode)) || t), n
        }),
      (b.sortStable = W.split("").sort(K).join("") === W),
      (b.detectDuplicates = !!N),
      I(),
      (b.sortDetached = r(function (e) {
        return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
      })),
      r(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href")
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
      (b.attributes &&
        r(function (e) {
          return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }),
      r(function (e) {
        return null == e.getAttribute("disabled")
      }) ||
        o(Z, function (e, t, n) {
          var i
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
      t
    )
  })(e)
  ;(ue.find = fe), (ue.expr = fe.selectors), (ue.expr[":"] = ue.expr.pseudos), (ue.uniqueSort = ue.unique = fe.uniqueSort), (ue.text = fe.getText), (ue.isXMLDoc = fe.isXML), (ue.contains = fe.contains), (ue.escapeSelector = fe.escape)
  var de = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && ue(e).is(n)) break
          i.push(e)
        }
      return i
    },
    he = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e)
      return n
    },
    pe = ue.expr.match.needsContext,
    ge = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  ;(ue.filter = function (e, t, n) {
    var i = t[0]
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? ue.find.matchesSelector(i, e)
          ? [i]
          : []
        : ue.find.matches(
            e,
            ue.grep(t, function (e) {
              return 1 === e.nodeType
            })
          )
    )
  }),
    ue.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this
        if ("string" != typeof e)
          return this.pushStack(
            ue(e).filter(function () {
              for (t = 0; t < i; t++) if (ue.contains(r[t], this)) return !0
            })
          )
        for (n = this.pushStack([]), t = 0; t < i; t++) ue.find(e, r[t], n)
        return i > 1 ? ue.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0))
      },
      is: function (e) {
        return !!s(this, "string" == typeof e && pe.test(e) ? ue(e) : e || [], !1).length
      }
    })
  var me,
    ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((ue.fn.init = function (e, t, n) {
    var i, r
    if (!e) return this
    if (((n = n || me), "string" == typeof e)) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
      if (i[1]) {
        if (((t = t instanceof ue ? t[0] : t), ue.merge(this, ue.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ge.test(i[1]) && ue.isPlainObject(t))) for (i in t) oe(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
        return this
      }
      return (r = Q.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : oe(e) ? (void 0 !== n.ready ? n.ready(e) : e(ue)) : ue.makeArray(e, this)
  }).prototype = ue.fn),
    (me = ue(Q))
  var ye = /^(?:parents|prev(?:Until|All))/,
    _e = { children: !0, contents: !0, next: !0, prev: !0 }
  ue.fn.extend({
    has: function (e) {
      var t = ue(e, this),
        n = t.length
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ue.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = "string" != typeof e && ue(e)
      if (!pe.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
              o.push(n)
              break
            }
      return this.pushStack(o.length > 1 ? ue.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? ("string" == typeof e ? J.call(ue(e), this[0]) : J.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(ue.uniqueSort(ue.merge(this.get(), ue(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
    ue.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return de(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
          return de(e, "parentNode", n)
        },
        next: function (e) {
          return a(e, "nextSibling")
        },
        prev: function (e) {
          return a(e, "previousSibling")
        },
        nextAll: function (e) {
          return de(e, "nextSibling")
        },
        prevAll: function (e) {
          return de(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
          return de(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
          return de(e, "previousSibling", n)
        },
        siblings: function (e) {
          return he((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return he(e.firstChild)
        },
        contents: function (e) {
          return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), ue.merge([], e.childNodes))
        }
      },
      function (e, t) {
        ue.fn[e] = function (n, i) {
          var r = ue.map(this, t, n)
          return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ue.filter(i, r)), this.length > 1 && (_e[e] || ue.uniqueSort(r), ye.test(e) && r.reverse()), this.pushStack(r)
        }
      }
    )
  var be = /[^\x20\t\r\n\f]+/g
  ;(ue.Callbacks = function (e) {
    e = "string" == typeof e ? l(e) : ue.extend({}, e)
    var t,
      n,
      r,
      o,
      s = [],
      a = [],
      u = -1,
      c = function () {
        for (o = o || e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < s.length; ) !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && ((u = s.length), (n = !1))
        e.memory || (n = !1), (t = !1), o && (s = n ? [] : "")
      },
      f = {
        add: function () {
          return (
            s &&
              (n && !t && ((u = s.length - 1), a.push(n)),
              (function t(n) {
                ue.each(n, function (n, r) {
                  oe(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== i(r) && t(r)
                })
              })(arguments),
              n && !t && c()),
            this
          )
        },
        remove: function () {
          return (
            ue.each(arguments, function (e, t) {
              for (var n; (n = ue.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= u && u--
            }),
            this
          )
        },
        has: function (e) {
          return e ? ue.inArray(e, s) > -1 : s.length > 0
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return (o = a = []), (s = n = ""), this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return (o = a = []), n || t || (s = n = ""), this
        },
        locked: function () {
          return !!o
        },
        fireWith: function (e, n) {
          return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || c()), this
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!r
        }
      }
    return f
  }),
    ue.extend({
      Deferred: function (t) {
        var n = [
            ["notify", "progress", ue.Callbacks("memory"), ue.Callbacks("memory"), 2],
            ["resolve", "done", ue.Callbacks("once memory"), ue.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", ue.Callbacks("once memory"), ue.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          r = {
            state: function () {
              return i
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return r.then(null, e)
            },
            pipe: function () {
              var e = arguments
              return ue
                .Deferred(function (t) {
                  ue.each(n, function (n, i) {
                    var r = oe(e[i[4]]) && e[i[4]]
                    o[i[1]](function () {
                      var e = r && r.apply(this, arguments)
                      e && oe(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                    })
                  }),
                    (e = null)
                })
                .promise()
            },
            then: function (t, i, r) {
              function o(t, n, i, r) {
                return function () {
                  var a = this,
                    l = arguments,
                    f = function () {
                      var e, f
                      if (!(t < s)) {
                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution")
                        ;(f = e && ("object" == typeof e || "function" == typeof e) && e.then), oe(f) ? (r ? f.call(e, o(s, n, u, r), o(s, n, c, r)) : (s++, f.call(e, o(s, n, u, r), o(s, n, c, r), o(s, n, u, n.notifyWith)))) : (i !== u && ((a = void 0), (l = [e])), (r || n.resolveWith)(a, l))
                      }
                    },
                    d = r
                      ? f
                      : function () {
                          try {
                            f()
                          } catch (e) {
                            ue.Deferred.exceptionHook && ue.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== c && ((a = void 0), (l = [e])), n.rejectWith(a, l))
                          }
                        }
                  t ? d() : (ue.Deferred.getStackHook && (d.stackTrace = ue.Deferred.getStackHook()), e.setTimeout(d))
                }
              }
              var s = 0
              return ue
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, oe(r) ? r : u, e.notifyWith)), n[1][3].add(o(0, e, oe(t) ? t : u)), n[2][3].add(o(0, e, oe(i) ? i : c))
                })
                .promise()
            },
            promise: function (e) {
              return null != e ? ue.extend(e, r) : r
            }
          },
          o = {}
        return (
          ue.each(n, function (e, t) {
            var s = t[2],
              a = t[5]
            ;(r[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (o[t[0]] = function () {
                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              }),
              (o[t[0] + "With"] = s.fireWith)
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        )
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = G.call(arguments),
          o = ue.Deferred(),
          s = function (e) {
            return function (n) {
              ;(i[e] = this), (r[e] = arguments.length > 1 ? G.call(arguments) : n), --t || o.resolveWith(i, r)
            }
          }
        if (t <= 1 && (f(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || oe(r[n] && r[n].then))) return o.then()
        for (; n--; ) f(r[n], s(n), o.reject)
        return o.promise()
      }
    })
  var Ee = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(ue.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Ee.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }),
    (ue.readyException = function (t) {
      e.setTimeout(function () {
        throw t
      })
    })
  var Te = ue.Deferred()
  ;(ue.fn.ready = function (e) {
    return (
      Te.then(e).catch(function (e) {
        ue.readyException(e)
      }),
      this
    )
  }),
    ue.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        ;(!0 === e ? --ue.readyWait : ue.isReady) || ((ue.isReady = !0), (!0 !== e && --ue.readyWait > 0) || Te.resolveWith(Q, [ue]))
      }
    }),
    (ue.ready.then = Te.then),
    "complete" === Q.readyState || ("loading" !== Q.readyState && !Q.documentElement.doScroll) ? e.setTimeout(ue.ready) : (Q.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d))
  var Ce = function (e, t, n, r, o, s, a) {
      var l = 0,
        u = e.length,
        c = null == n
      if ("object" === i(n)) {
        o = !0
        for (l in n) Ce(e, t, l, n[l], !0, s, a)
      } else if (
        void 0 !== r &&
        ((o = !0),
        oe(r) || (a = !0),
        c &&
          (a
            ? (t.call(e, r), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(ue(e), n)
              }))),
        t)
      )
        for (; l < u; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)))
      return o ? e : c ? t.call(e) : u ? t(e[0], n) : s
    },
    we = /^-ms-/,
    Ae = /-([a-z])/g,
    xe = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
  ;(g.uid = 1),
    (g.prototype = {
      cache: function (e) {
        var t = e[this.expando]
        return t || ((t = {}), xe(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e)
        if ("string" == typeof t) r[p(t)] = n
        else for (i in t) r[p(i)] = t[i]
        return r
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando]
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(p) : (t = p(t)) in i ? [t] : t.match(be) || []).length
            for (; n--; ) delete i[t[n]]
          }
          ;(void 0 === t || ue.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !ue.isEmptyObject(t)
      }
    })
  var De = new g(),
    Se = new g(),
    Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ie = /[A-Z]/g
  ue.extend({
    hasData: function (e) {
      return Se.hasData(e) || De.hasData(e)
    },
    data: function (e, t, n) {
      return Se.access(e, t, n)
    },
    removeData: function (e, t) {
      Se.remove(e, t)
    },
    _data: function (e, t, n) {
      return De.access(e, t, n)
    },
    _removeData: function (e, t) {
      De.remove(e, t)
    }
  }),
    ue.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes
        if (void 0 === e) {
          if (this.length && ((r = Se.get(o)), 1 === o.nodeType && !De.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = p(i.slice(5))), v(o, i, r[i]))
            De.set(o, "hasDataAttrs", !0)
          }
          return r
        }
        return "object" == typeof e
          ? this.each(function () {
              Se.set(this, e)
            })
          : Ce(
              this,
              function (t) {
                var n
                if (o && void 0 === t) {
                  if (void 0 !== (n = Se.get(o, e))) return n
                  if (void 0 !== (n = v(o, e))) return n
                } else
                  this.each(function () {
                    Se.set(this, e, t)
                  })
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            )
      },
      removeData: function (e) {
        return this.each(function () {
          Se.remove(this, e)
        })
      }
    }),
    ue.extend({
      queue: function (e, t, n) {
        var i
        if (e) return (t = (t || "fx") + "queue"), (i = De.get(e, t)), n && (!i || Array.isArray(n) ? (i = De.access(e, t, ue.makeArray(n))) : i.push(n)), i || []
      },
      dequeue: function (e, t) {
        t = t || "fx"
        var n = ue.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = ue._queueHooks(e, t),
          s = function () {
            ue.dequeue(e, t)
          }
        "inprogress" === r && ((r = n.shift()), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks"
        return (
          De.get(e, n) ||
          De.access(e, n, {
            empty: ue.Callbacks("once memory").add(function () {
              De.remove(e, [t + "queue", n])
            })
          })
        )
      }
    }),
    ue.fn.extend({
      queue: function (e, t) {
        var n = 2
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? ue.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = ue.queue(this, e, t)
                ue._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ue.dequeue(this, e)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          ue.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = ue.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o])
          }
        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = De.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a))
        return a(), r.promise(t)
      }
    })
  var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"),
    Le = ["Top", "Right", "Bottom", "Left"],
    Pe = function (e, t) {
      return "none" === (e = t || e).style.display || ("" === e.style.display && ue.contains(e.ownerDocument, e) && "none" === ue.css(e, "display"))
    },
    je = function (e, t, n, i) {
      var r,
        o,
        s = {}
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o])
      r = n.apply(e, i || [])
      for (o in t) e.style[o] = s[o]
      return r
    },
    He = {}
  ue.fn.extend({
    show: function () {
      return b(this, !0)
    },
    hide: function () {
      return b(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Pe(this) ? ue(this).show() : ue(this).hide()
          })
    }
  })
  var Re = /^(?:checkbox|radio)$/i,
    We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Me = /^$|^module$|\/(?:java|ecma)script/i,
    Be = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }
  ;(Be.optgroup = Be.option), (Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead), (Be.th = Be.td)
  var Fe = /<|&#?\w+;/
  !(function () {
    var e = Q.createDocumentFragment().appendChild(Q.createElement("div")),
      t = Q.createElement("input")
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), (re.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked), (e.innerHTML = "<textarea>x</textarea>"), (re.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue)
  })()
  var Ue = Q.documentElement,
    qe = /^key/,
    Ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ke = /^([^.]*)(?:\.(.+)|)/
  ;(ue.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = De.get(e)
      if (m)
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && ue.find.matchesSelector(Ue, r),
            n.guid || (n.guid = ue.guid++),
            (l = m.events) || (l = m.events = {}),
            (s = m.handle) ||
              (s = m.handle =
                function (t) {
                  return void 0 !== ue && ue.event.triggered !== t.type ? ue.event.dispatch.apply(e, arguments) : void 0
                }),
            u = (t = (t || "").match(be) || [""]).length;
          u--;

        )
          (h = g = (a = Ke.exec(t[u]) || [])[1]), (p = (a[2] || "").split(".").sort()), h && ((f = ue.event.special[h] || {}), (h = (r ? f.delegateType : f.bindType) || h), (f = ue.event.special[h] || {}), (c = ue.extend({ type: h, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && ue.expr.match.needsContext.test(r), namespace: p.join(".") }, o)), (d = l[h]) || (((d = l[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, i, p, s)) || (e.addEventListener && e.addEventListener(h, s))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), (ue.event.global[h] = !0))
    },
    remove: function (e, t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = De.hasData(e) && De.get(e)
      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(be) || [""]).length; u--; )
          if (((a = Ke.exec(t[u]) || []), (h = g = a[1]), (p = (a[2] || "").split(".").sort()), h)) {
            for (f = ue.event.special[h] || {}, d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--; ) (c = d[o]), (!r && g !== c.origType) || (n && n.guid !== c.guid) || (a && !a.test(c.namespace)) || (i && i !== c.selector && ("**" !== i || !c.selector)) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c))
            s && !d.length && ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) || ue.removeEvent(e, h, m.handle), delete l[h])
          } else for (h in l) ue.event.remove(e, h + t[u], n, i, !0)
        ue.isEmptyObject(l) && De.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        s,
        a = ue.event.fix(e),
        l = new Array(arguments.length),
        u = (De.get(this, "events") || {})[a.type] || [],
        c = ue.event.special[a.type] || {}
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t]
      if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
        for (s = ue.event.handlers.call(this, a, u), t = 0; (r = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); ) (a.rnamespace && !a.rnamespace.test(o.namespace)) || ((a.handleObj = o), (a.data = o.data), void 0 !== (i = ((ue.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()))
        return c.postDispatch && c.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target
      if (l && u.nodeType && !("click" === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = t[n]).selector + " ")] && (s[r] = i.needsContext ? ue(r, this).index(u) > -1 : ue.find(r, this, null, [u]).length), s[r] && o.push(i)
            o.length && a.push({ elem: u, handlers: o })
          }
      return (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a
    },
    addProp: function (e, t) {
      Object.defineProperty(ue.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: oe(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e]
            },
        set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        }
      })
    },
    fix: function (e) {
      return e[ue.expando] ? e : new ue.Event(e)
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== x() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === x() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
        },
        _default: function (e) {
          return o(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }),
    (ue.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }),
    (ue.Event = function (e, t) {
      if (!(this instanceof ue.Event)) return new ue.Event(e, t)
      e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? w : A), (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target), (this.currentTarget = e.currentTarget), (this.relatedTarget = e.relatedTarget)) : (this.type = e), t && ue.extend(this, t), (this.timeStamp = (e && e.timeStamp) || Date.now()), (this[ue.expando] = !0)
    }),
    (ue.Event.prototype = {
      constructor: ue.Event,
      isDefaultPrevented: A,
      isPropagationStopped: A,
      isImmediatePropagationStopped: A,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = w), e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = w), e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = w), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }),
    ue.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button
          return null == e.which && qe.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ve.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which
        }
      },
      ue.event.addProp
    ),
    ue.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      ue.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n,
            i = this,
            r = e.relatedTarget,
            o = e.handleObj
          return (r && (r === i || ue.contains(i, r))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n
        }
      }
    }),
    ue.fn.extend({
      on: function (e, t, n, i) {
        return D(this, e, t, n, i)
      },
      one: function (e, t, n, i) {
        return D(this, e, t, n, i, 1)
      },
      off: function (e, t, n) {
        var i, r
        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), ue(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r])
          return this
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = A),
          this.each(function () {
            ue.event.remove(this, e, n, t)
          })
        )
      }
    })
  var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Qe = /<script|<style|<link/i,
    Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  ue.extend({
    htmlPrefilter: function (e) {
      return e.replace($e, "<$1></$2>")
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        s,
        a = e.cloneNode(!0),
        l = ue.contains(e.ownerDocument, e)
      if (!(re.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || ue.isXMLDoc(e))) for (s = E(a), i = 0, r = (o = E(e)).length; i < r; i++) k(o[i], s[i])
      if (t)
        if (n) for (o = o || E(e), s = s || E(a), i = 0, r = o.length; i < r; i++) O(o[i], s[i])
        else O(e, a)
      return (s = E(a, "script")).length > 0 && T(s, !l && E(e, "script")), a
    },
    cleanData: function (e) {
      for (var t, n, i, r = ue.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (xe(n)) {
          if ((t = n[De.expando])) {
            if (t.events) for (i in t.events) r[i] ? ue.event.remove(n, i) : ue.removeEvent(n, i, t.handle)
            n[De.expando] = void 0
          }
          n[Se.expando] && (n[Se.expando] = void 0)
        }
    }
  }),
    ue.fn.extend({
      detach: function (e) {
        return P(this, e, !0)
      },
      remove: function (e) {
        return P(this, e)
      },
      text: function (e) {
        return Ce(
          this,
          function (e) {
            return void 0 === e
              ? ue.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return L(this, arguments, function (e) {
          ;(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || S(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return L(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = S(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return L(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return L(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ue.cleanData(E(e, !1)), (e.textContent = ""))
        return this
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ue.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return Ce(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML
            if ("string" == typeof e && !Qe.test(e) && !Be[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = ue.htmlPrefilter(e)
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (ue.cleanData(E(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var e = []
        return L(
          this,
          arguments,
          function (t) {
            var n = this.parentNode
            ue.inArray(this, e) < 0 && (ue.cleanData(E(this)), n && n.replaceChild(t, this))
          },
          e
        )
      }
    }),
    ue.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      ue.fn[e] = function (e) {
        for (var n, i = [], r = ue(e), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), ue(r[s])[t](n), X.apply(i, n.get())
        return this.pushStack(i)
      }
    })
  var ze = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"),
    Xe = function (t) {
      var n = t.ownerDocument.defaultView
      return (n && n.opener) || (n = e), n.getComputedStyle(t)
    },
    Je = new RegExp(Le.join("|"), "i")
  !(function () {
    function t() {
      if (u) {
        ;(l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"), (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"), Ue.appendChild(l).appendChild(u)
        var t = e.getComputedStyle(u)
        ;(i = "1%" !== t.top), (a = 12 === n(t.marginLeft)), (u.style.right = "60%"), (s = 36 === n(t.right)), (r = 36 === n(t.width)), (u.style.position = "absolute"), (o = 36 === u.offsetWidth || "absolute"), Ue.removeChild(l), (u = null)
      }
    }
    function n(e) {
      return Math.round(parseFloat(e))
    }
    var i,
      r,
      o,
      s,
      a,
      l = Q.createElement("div"),
      u = Q.createElement("div")
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (re.clearCloneStyle = "content-box" === u.style.backgroundClip),
      ue.extend(re, {
        boxSizingReliable: function () {
          return t(), r
        },
        pixelBoxStyles: function () {
          return t(), s
        },
        pixelPosition: function () {
          return t(), i
        },
        reliableMarginLeft: function () {
          return t(), a
        },
        scrollboxSize: function () {
          return t(), o
        }
      }))
  })()
  var Ze = /^(none|table(?!-c[ea]).+)/,
    et = /^--/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    nt = { letterSpacing: "0", fontWeight: "400" },
    it = ["Webkit", "Moz", "ms"],
    rt = Q.createElement("div").style
  ue.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = j(e, "opacity")
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          s,
          a = p(t),
          l = et.test(t),
          u = e.style
        if ((l || (t = W(a)), (s = ue.cssHooks[t] || ue.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t]
        "string" == (o = typeof n) && (r = ke.exec(n)) && r[1] && ((n = y(e, t, r)), (o = "number")), null != n && n === n && ("number" === o && (n += (r && r[3]) || (ue.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)))
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        s,
        a = p(t)
      return et.test(t) || (t = W(a)), (s = ue.cssHooks[t] || ue.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = j(e, t, i)), "normal" === r && t in nt && (r = nt[t]), "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
    }
  }),
    ue.each(["height", "width"], function (e, t) {
      ue.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !Ze.test(ue.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? F(e, t, i)
              : je(e, tt, function () {
                  return F(e, t, i)
                })
        },
        set: function (e, n, i) {
          var r,
            o = Xe(e),
            s = "border-box" === ue.css(e, "boxSizing", !1, o),
            a = i && B(e, t, i, s, o)
          return s && re.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - B(e, t, "border", !1, o) - 0.5)), a && (r = ke.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = ue.css(e, t))), M(e, n, a)
        }
      }
    }),
    (ue.cssHooks.marginLeft = H(re.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(j(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              je(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left
              })) + "px"
        )
    })),
    ue.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      ;(ue.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Le[i] + t] = o[i] || o[i - 2] || o[0]
          return r
        }
      }),
        "margin" !== e && (ue.cssHooks[e + t].set = M)
    }),
    ue.fn.extend({
      css: function (e, t) {
        return Ce(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              s = 0
            if (Array.isArray(t)) {
              for (i = Xe(e), r = t.length; s < r; s++) o[t[s]] = ue.css(e, t[s], !1, i)
              return o
            }
            return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
          },
          e,
          t,
          arguments.length > 1
        )
      }
    }),
    (ue.fn.delay = function (t, n) {
      return (
        (t = ue.fx ? ue.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t)
          i.stop = function () {
            e.clearTimeout(r)
          }
        })
      )
    }),
    (function () {
      var e = Q.createElement("input"),
        t = Q.createElement("select").appendChild(Q.createElement("option"))
      ;(e.type = "checkbox"), (re.checkOn = "" !== e.value), (re.optSelected = t.selected), ((e = Q.createElement("input")).value = "t"), (e.type = "radio"), (re.radioValue = "t" === e.value)
    })()
  var ot,
    st = ue.expr.attrHandle
  ue.fn.extend({
    attr: function (e, t) {
      return Ce(this, ue.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        ue.removeAttr(this, e)
      })
    }
  }),
    ue.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ue.prop(e, t, n) : ((1 === o && ue.isXMLDoc(e)) || (r = ue.attrHooks[t.toLowerCase()] || (ue.expr.match.bool.test(t) ? ot : void 0)), void 0 !== n ? (null === n ? void ue.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = ue.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!re.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(be)
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n)
      }
    }),
    (ot = {
      set: function (e, t, n) {
        return !1 === t ? ue.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }),
    ue.each(ue.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = st[t] || ue.find.attr
      st[t] = function (e, t, i) {
        var r,
          o,
          s = t.toLowerCase()
        return i || ((o = st[s]), (st[s] = r), (r = null != n(e, t, i) ? s : null), (st[s] = o)), r
      }
    })
  var at = /^(?:input|select|textarea|button)$/i,
    lt = /^(?:a|area)$/i
  ue.fn.extend({
    prop: function (e, t) {
      return Ce(this, ue.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ue.propFix[e] || e]
      })
    }
  }),
    ue.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o) return (1 === o && ue.isXMLDoc(e)) || ((t = ue.propFix[t] || t), (r = ue.propHooks[t])), void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ue.find.attr(e, "tabindex")
            return t ? parseInt(t, 10) : at.test(e.nodeName) || (lt.test(e.nodeName) && e.href) ? 0 : -1
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    re.optSelected ||
      (ue.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }),
    ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ue.propFix[this.toLowerCase()] = this
    }),
    ue.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0
        if (oe(e))
          return this.each(function (t) {
            ue(this).addClass(e.call(this, t, q(this)))
          })
        if ((t = V(e)).length)
          for (; (n = this[l++]); )
            if (((r = q(n)), (i = 1 === n.nodeType && " " + U(r) + " "))) {
              for (s = 0; (o = t[s++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ")
              r !== (a = U(i)) && n.setAttribute("class", a)
            }
        return this
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l = 0
        if (oe(e))
          return this.each(function (t) {
            ue(this).removeClass(e.call(this, t, q(this)))
          })
        if (!arguments.length) return this.attr("class", "")
        if ((t = V(e)).length)
          for (; (n = this[l++]); )
            if (((r = q(n)), (i = 1 === n.nodeType && " " + U(r) + " "))) {
              for (s = 0; (o = t[s++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ")
              r !== (a = U(i)) && n.setAttribute("class", a)
            }
        return this
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e)
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : oe(e)
          ? this.each(function (n) {
              ue(this).toggleClass(e.call(this, n, q(this), t), t)
            })
          : this.each(function () {
              var t, r, o, s
              if (i) for (r = 0, o = ue(this), s = V(e); (t = s[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
              else (void 0 !== e && "boolean" !== n) || ((t = q(this)) && De.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : De.get(this, "__className__") || ""))
            })
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0
        for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + U(q(n)) + " ").indexOf(t) > -1) return !0
        return !1
      }
    })
  var ut = /\r/g
  ue.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0]
      return arguments.length
        ? ((i = oe(e)),
          this.each(function (n) {
            var r
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, ue(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = ue.map(r, function (e) {
                    return null == e ? "" : e + ""
                  })),
              ((t = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r))
          }))
        : r
        ? (t = ue.valHooks[r.type] || ue.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(ut, "")
          : null == n
          ? ""
          : n
        : void 0
    }
  }),
    ue.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ue.find.attr(e, "value")
            return null != t ? t : U(ue.text(e))
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              l = a ? null : [],
              u = a ? s + 1 : r.length
            for (i = s < 0 ? u : a ? s : 0; i < u; i++)
              if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                if (((t = ue(n).val()), a)) return t
                l.push(t)
              }
            return l
          },
          set: function (e, t) {
            for (var n, i, r = e.options, o = ue.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = ue.inArray(ue.valHooks.option.get(i), o) > -1) && (n = !0)
            return n || (e.selectedIndex = -1), o
          }
        }
      }
    }),
    ue.each(["radio", "checkbox"], function () {
      ;(ue.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = ue.inArray(ue(e).val(), t) > -1)
        }
      }),
        re.checkOn ||
          (ue.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
          })
    }),
    (re.focusin = "onfocusin" in e)
  var ct = /^(?:focusinfocus|focusoutblur)$/,
    ft = function (e) {
      e.stopPropagation()
    }
  ue.extend(ue.event, {
    trigger: function (t, n, i, r) {
      var o,
        s,
        a,
        l,
        u,
        c,
        f,
        d,
        h = [i || Q],
        p = te.call(t, "type") ? t.type : t,
        g = te.call(t, "namespace") ? t.namespace.split(".") : []
      if (((s = d = a = i = i || Q), 3 !== i.nodeType && 8 !== i.nodeType && !ct.test(p + ue.event.triggered) && (p.indexOf(".") > -1 && ((p = (g = p.split(".")).shift()), g.sort()), (u = p.indexOf(":") < 0 && "on" + p), (t = t[ue.expando] ? t : new ue.Event(p, "object" == typeof t && t)), (t.isTrigger = r ? 2 : 3), (t.namespace = g.join(".")), (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null), (t.result = void 0), t.target || (t.target = i), (n = null == n ? [t] : ue.makeArray(n, [t])), (f = ue.event.special[p] || {}), r || !f.trigger || !1 !== f.trigger.apply(i, n)))) {
        if (!r && !f.noBubble && !se(i)) {
          for (l = f.delegateType || p, ct.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s)
          a === (i.ownerDocument || Q) && h.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); ) (d = s), (t.type = o > 1 ? l : f.bindType || p), (c = (De.get(s, "events") || {})[t.type] && De.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && xe(s) && ((t.result = c.apply(s, n)), !1 === t.result && t.preventDefault())
        return (t.type = p), r || t.isDefaultPrevented() || (f._default && !1 !== f._default.apply(h.pop(), n)) || !xe(i) || (u && oe(i[p]) && !se(i) && ((a = i[u]) && (i[u] = null), (ue.event.triggered = p), t.isPropagationStopped() && d.addEventListener(p, ft), i[p](), t.isPropagationStopped() && d.removeEventListener(p, ft), (ue.event.triggered = void 0), a && (i[u] = a))), t.result
      }
    },
    simulate: function (e, t, n) {
      var i = ue.extend(new ue.Event(), n, { type: e, isSimulated: !0 })
      ue.event.trigger(i, null, t)
    }
  }),
    ue.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ue.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return ue.event.trigger(e, t, n, !0)
      }
    }),
    re.focusin ||
      ue.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          ue.event.simulate(t, e.target, ue.event.fix(e))
        }
        ue.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = De.access(i, t)
            r || i.addEventListener(e, n, !0), De.access(i, t, (r || 0) + 1)
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = De.access(i, t) - 1
            r ? De.access(i, t, r) : (i.removeEventListener(e, n, !0), De.remove(i, t))
          }
        }
      })
  var dt = /\[\]$/,
    ht = /\r?\n/g,
    pt = /^(?:submit|button|image|reset|file)$/i,
    gt = /^(?:input|select|textarea|keygen)/i
  ;(ue.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = oe(t) ? t() : t
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      }
    if (Array.isArray(e) || (e.jquery && !ue.isPlainObject(e)))
      ue.each(e, function () {
        r(this.name, this.value)
      })
    else for (n in e) K(n, e[n], t, r)
    return i.join("&")
  }),
    ue.fn.extend({
      serialize: function () {
        return ue.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ue.prop(this, "elements")
          return e ? ue.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return this.name && !ue(this).is(":disabled") && gt.test(this.nodeName) && !pt.test(e) && (this.checked || !Re.test(e))
          })
          .map(function (e, t) {
            var n = ue(this).val()
            return null == n
              ? null
              : Array.isArray(n)
              ? ue.map(n, function (e) {
                  return { name: t.name, value: e.replace(ht, "\r\n") }
                })
              : { name: t.name, value: n.replace(ht, "\r\n") }
          })
          .get()
      }
    }),
    ue.fn.extend({
      wrapAll: function (e) {
        var t
        return (
          this[0] &&
            (oe(e) && (e = e.call(this[0])),
            (t = ue(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild
                return e
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (e) {
        return oe(e)
          ? this.each(function (t) {
              ue(this).wrapInner(e.call(this, t))
            })
          : this.each(function () {
              var t = ue(this),
                n = t.contents()
              n.length ? n.wrapAll(e) : t.append(e)
            })
      },
      wrap: function (e) {
        var t = oe(e)
        return this.each(function (n) {
          ue(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ue(this).replaceWith(this.childNodes)
            }),
          this
        )
      }
    }),
    (ue.expr.pseudos.hidden = function (e) {
      return !ue.expr.pseudos.visible(e)
    }),
    (ue.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }),
    (re.createHTMLDocument = (function () {
      var e = Q.implementation.createHTMLDocument("").body
      return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
    })()),
    (ue.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return []
      "boolean" == typeof t && ((n = t), (t = !1))
      var i, r, o
      return t || (re.createHTMLDocument ? (((i = (t = Q.implementation.createHTMLDocument("")).createElement("base")).href = Q.location.href), t.head.appendChild(i)) : (t = Q)), (r = ge.exec(e)), (o = !n && []), r ? [t.createElement(r[1])] : ((r = C([e], t, o)), o && o.length && ue(o).remove(), ue.merge([], r.childNodes))
    }),
    (ue.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          u = ue.css(e, "position"),
          c = ue(e),
          f = {}
        "static" === u && (e.style.position = "relative"), (a = c.offset()), (o = ue.css(e, "top")), (l = ue.css(e, "left")), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? ((s = (i = c.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)), oe(t) && (t = t.call(e, n, ue.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
      }
    }),
    ue.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                ue.offset.setOffset(this, e, t)
              })
        var t,
          n,
          i = this[0]
        return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 }
          if ("fixed" === ue.css(i, "position")) t = i.getBoundingClientRect()
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === ue.css(e, "position"); ) e = e.parentNode
            e && e !== i && 1 === e.nodeType && (((r = ue(e).offset()).top += ue.css(e, "borderTopWidth", !0)), (r.left += ue.css(e, "borderLeftWidth", !0)))
          }
          return { top: t.top - r.top - ue.css(i, "marginTop", !0), left: t.left - r.left - ue.css(i, "marginLeft", !0) }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === ue.css(e, "position"); ) e = e.offsetParent
          return e || Ue
        })
      }
    }),
    ue.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t
      ue.fn[e] = function (i) {
        return Ce(
          this,
          function (e, i, r) {
            var o
            if ((se(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i]
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r)
          },
          e,
          i,
          arguments.length
        )
      }
    }),
    ue.each(["top", "left"], function (e, t) {
      ue.cssHooks[t] = H(re.pixelPosition, function (e, n) {
        if (n) return (n = j(e, t)), ze.test(n) ? ue(e).position()[t] + "px" : n
      })
    }),
    ue.each({ Height: "height", Width: "width" }, function (e, t) {
      ue.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
        ue.fn[i] = function (r, o) {
          var s = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border")
          return Ce(
            this,
            function (t, n, r) {
              var o
              return se(t) ? (0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e]) : 9 === t.nodeType ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ue.css(t, n, a) : ue.style(t, n, r, a)
            },
            t,
            s ? r : void 0,
            s
          )
        }
      })
    }),
    ue.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      ue.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }),
    ue.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }),
    ue.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }),
    (ue.proxy = function (e, t) {
      var n, i, r
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), oe(e)))
        return (
          (i = G.call(arguments, 2)),
          (r = function () {
            return e.apply(t || this, i.concat(G.call(arguments)))
          }),
          (r.guid = e.guid = e.guid || ue.guid++),
          r
        )
    }),
    (ue.holdReady = function (e) {
      e ? ue.readyWait++ : ue.ready(!0)
    }),
    (ue.isArray = Array.isArray),
    (ue.parseJSON = JSON.parse),
    (ue.nodeName = o),
    (ue.isFunction = oe),
    (ue.isWindow = se),
    (ue.camelCase = p),
    (ue.type = i),
    (ue.now = Date.now),
    (ue.isNumeric = function (e) {
      var t = ue.type(e)
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ue
      })
  var mt = e.jQuery,
    vt = e.$
  return (
    (ue.noConflict = function (t) {
      return e.$ === ue && (e.$ = vt), t && e.jQuery === ue && (e.jQuery = mt), ue
    }),
    t || (e.jQuery = e.$ = ue),
    ue
  )
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t())
  })(this, function () {
    "use strict"
    function e(e) {
      return e && "[object Function]" === {}.toString.call(e)
    }
    function t(e, t) {
      if (1 !== e.nodeType) return []
      var n = getComputedStyle(e, null)
      return t ? n[t] : n
    }
    function n(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function i(e) {
      if (!e) return document.body
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body
        case "#document":
          return e.body
      }
      var r = t(e),
        o = r.overflow,
        s = r.overflowX
      return /(auto|scroll)/.test(o + r.overflowY + s) ? e : i(n(e))
    }
    function r(e) {
      var n = e && e.offsetParent,
        i = n && n.nodeName
      return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? r(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function o(e) {
      var t = e.nodeName
      return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
    }
    function s(e) {
      return null === e.parentNode ? e : s(e.parentNode)
    }
    function a(e, t) {
      if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        l = n ? t : e,
        u = document.createRange()
      u.setStart(i, 0), u.setEnd(l, 0)
      var c = u.commonAncestorContainer
      if ((e !== c && t !== c) || i.contains(l)) return o(c) ? c : r(c)
      var f = s(e)
      return f.host ? a(f.host, t) : a(e, s(t).host)
    }
    function l(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
        n = "top" === t ? "scrollTop" : "scrollLeft",
        i = e.nodeName
      if ("BODY" === i || "HTML" === i) {
        var r = e.ownerDocument.documentElement
        return (e.ownerDocument.scrollingElement || r)[n]
      }
      return e[n]
    }
    function u(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = l(t, "top"),
        r = l(t, "left"),
        o = n ? -1 : 1
      return (e.top += i * o), (e.bottom += i * o), (e.left += r * o), (e.right += r * o), e
    }
    function c(e, t) {
      var n = "x" === t ? "Left" : "Top",
        i = "Left" == n ? "Right" : "Bottom"
      return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function f(e, t, n, i) {
      return G(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], ie() ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function d() {
      var e = document.body,
        t = document.documentElement,
        n = ie() && getComputedStyle(t)
      return { height: f("Height", e, t, n), width: f("Width", e, t, n) }
    }
    function h(e) {
      return ae({}, e, { right: e.left + e.width, bottom: e.top + e.height })
    }
    function p(e) {
      var n = {}
      if (ie())
        try {
          n = e.getBoundingClientRect()
          var i = l(e, "top"),
            r = l(e, "left")
          ;(n.top += i), (n.left += r), (n.bottom += i), (n.right += r)
        } catch (e) {}
      else n = e.getBoundingClientRect()
      var o = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
        s = "HTML" === e.nodeName ? d() : {},
        a = s.width || e.clientWidth || o.right - o.left,
        u = s.height || e.clientHeight || o.bottom - o.top,
        f = e.offsetWidth - a,
        p = e.offsetHeight - u
      if (f || p) {
        var g = t(e)
        ;(f -= c(g, "x")), (p -= c(g, "y")), (o.width -= f), (o.height -= p)
      }
      return h(o)
    }
    function g(e, n) {
      var r = ie(),
        o = "HTML" === n.nodeName,
        s = p(e),
        a = p(n),
        l = i(e),
        c = t(n),
        f = parseFloat(c.borderTopWidth, 10),
        d = parseFloat(c.borderLeftWidth, 10),
        g = h({ top: s.top - a.top - f, left: s.left - a.left - d, width: s.width, height: s.height })
      if (((g.marginTop = 0), (g.marginLeft = 0), !r && o)) {
        var m = parseFloat(c.marginTop, 10),
          v = parseFloat(c.marginLeft, 10)
        ;(g.top -= f - m), (g.bottom -= f - m), (g.left -= d - v), (g.right -= d - v), (g.marginTop = m), (g.marginLeft = v)
      }
      return (r ? n.contains(l) : n === l && "BODY" !== l.nodeName) && (g = u(g, n)), g
    }
    function m(e) {
      var t = e.ownerDocument.documentElement,
        n = g(e, t),
        i = G(t.clientWidth, window.innerWidth || 0),
        r = G(t.clientHeight, window.innerHeight || 0),
        o = l(t),
        s = l(t, "left")
      return h({ top: o - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r })
    }
    function v(e) {
      var i = e.nodeName
      return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }
    function y(e, t, r, o) {
      var s = { top: 0, left: 0 },
        l = a(e, t)
      if ("viewport" === o) s = m(l)
      else {
        var u
        "scrollParent" === o ? ((u = i(n(t))), "BODY" === u.nodeName && (u = e.ownerDocument.documentElement)) : (u = "window" === o ? e.ownerDocument.documentElement : o)
        var c = g(u, l)
        if ("HTML" !== u.nodeName || v(l)) s = c
        else {
          var f = d(),
            h = f.height,
            p = f.width
          ;(s.top += c.top - c.marginTop), (s.bottom = h + c.top), (s.left += c.left - c.marginLeft), (s.right = p + c.left)
        }
      }
      return (s.left += r), (s.top += r), (s.right -= r), (s.bottom -= r), s
    }
    function _(e) {
      return e.width * e.height
    }
    function b(e, t, n, i, r) {
      var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0
      if (-1 === e.indexOf("auto")) return e
      var s = y(n, i, o, r),
        a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
        l = Object.keys(a)
          .map(function (e) {
            return ae({ key: e }, a[e], { area: _(a[e]) })
          })
          .sort(function (e, t) {
            return t.area - e.area
          }),
        u = l.filter(function (e) {
          var t = e.width,
            i = e.height
          return t >= n.clientWidth && i >= n.clientHeight
        }),
        c = 0 < u.length ? u[0].key : l[0].key,
        f = e.split("-")[1]
      return c + (f ? "-" + f : "")
    }
    function E(e, t, n) {
      return g(n, a(t, n))
    }
    function T(e) {
      var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
      return { width: e.offsetWidth + i, height: e.offsetHeight + n }
    }
    function C(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" }
      return e.replace(/left|right|bottom|top/g, function (e) {
        return t[e]
      })
    }
    function w(e, t, n) {
      n = n.split("-")[0]
      var i = T(e),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        u = o ? "width" : "height"
      return (r[s] = t[s] + t[l] / 2 - i[l] / 2), (r[a] = n === a ? t[a] - i[u] : t[C(a)]), r
    }
    function A(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function x(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (e) {
          return e[t] === n
        })
      var i = A(e, function (e) {
        return e[t] === n
      })
      return e.indexOf(i)
    }
    function D(t, n, i) {
      return (
        (void 0 === i ? t : t.slice(0, x(t, "name", i))).forEach(function (t) {
          t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
          var i = t.function || t.fn
          t.enabled && e(i) && ((n.offsets.popper = h(n.offsets.popper)), (n.offsets.reference = h(n.offsets.reference)), (n = i(n, t)))
        }),
        n
      )
    }
    function S() {
      if (!this.state.isDestroyed) {
        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }
        ;(e.offsets.reference = E(this.state, this.popper, this.reference)), (e.placement = b(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)), (e.originalPlacement = e.placement), (e.offsets.popper = w(this.popper, e.offsets.reference, e.placement)), (e.offsets.popper.position = "absolute"), (e = D(this.modifiers, e)), this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e))
      }
    }
    function N(e, t) {
      return e.some(function (e) {
        var n = e.name
        return e.enabled && n === t
      })
    }
    function I(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length - 1; i++) {
        var r = t[i],
          o = r ? "" + r + n : e
        if (void 0 !== document.body.style[o]) return o
      }
      return null
    }
    function O() {
      return (this.state.isDestroyed = !0), N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), (this.popper.style.left = ""), (this.popper.style.position = ""), (this.popper.style.top = ""), (this.popper.style[I("transform")] = "")), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }
    function k(e) {
      var t = e.ownerDocument
      return t ? t.defaultView : window
    }
    function L(e, t, n, r) {
      var o = "BODY" === e.nodeName,
        s = o ? e.ownerDocument.defaultView : e
      s.addEventListener(t, n, { passive: !0 }), o || L(i(s.parentNode), t, n, r), r.push(s)
    }
    function P(e, t, n, r) {
      ;(n.updateBound = r), k(e).addEventListener("resize", n.updateBound, { passive: !0 })
      var o = i(e)
      return L(o, "scroll", n.updateBound, n.scrollParents), (n.scrollElement = o), (n.eventsEnabled = !0), n
    }
    function j() {
      this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function H(e, t) {
      return (
        k(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.updateBound)
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      )
    }
    function R() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = H(this.reference, this.state)))
    }
    function W(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function M(e, t) {
      Object.keys(t).forEach(function (n) {
        var i = ""
        ;-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(t[n]) && (i = "px"), (e.style[n] = t[n] + i)
      })
    }
    function B(e, t) {
      Object.keys(t).forEach(function (n) {
        !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
      })
    }
    function F(e, t, n) {
      var i = A(e, function (e) {
          return e.name === t
        }),
        r =
          !!i &&
          e.some(function (e) {
            return e.name === n && e.enabled && e.order < i.order
          })
      if (!r) {
        var o = "`" + t + "`"
        console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
      }
      return r
    }
    function U(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e
    }
    function q(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = ue.indexOf(e),
        i = ue.slice(n + 1).concat(ue.slice(0, n))
      return t ? i.reverse() : i
    }
    function V(e, t, n, i) {
      var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +r[1],
        s = r[2]
      if (!o) return e
      if (0 === s.indexOf("%")) {
        var a
        switch (s) {
          case "%p":
            a = n
            break
          case "%":
          case "%r":
          default:
            a = i
        }
        return (h(a)[t] / 100) * o
      }
      if ("vh" === s || "vw" === s) {
        return (("vh" === s ? G(document.documentElement.clientHeight, window.innerHeight || 0) : G(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * o
      }
      return o
    }
    function K(e, t, n, i) {
      var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
          return e.trim()
        }),
        a = s.indexOf(
          A(s, function (e) {
            return -1 !== e.search(/,|\s/)
          })
        )
      s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
      var l = /\s*,\s*|\s+/,
        u = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))]
      return (
        (u = u.map(function (e, i) {
          var r = (1 === i ? !o : o) ? "height" : "width",
            s = !1
          return e
            .reduce(function (e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (s = !0), e) : s ? ((e[e.length - 1] += t), (s = !1), e) : e.concat(t)
            }, [])
            .map(function (e) {
              return V(e, r, t, n)
            })
        })),
        u.forEach(function (e, t) {
          e.forEach(function (n, i) {
            W(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
          })
        }),
        r
      )
    }
    function $(e, t) {
      var n,
        i = t.offset,
        r = e.placement,
        o = e.offsets,
        s = o.popper,
        a = o.reference,
        l = r.split("-")[0]
      return (n = W(+i) ? [+i, 0] : K(i, s, a, l)), "left" === l ? ((s.top += n[0]), (s.left -= n[1])) : "right" === l ? ((s.top += n[0]), (s.left += n[1])) : "top" === l ? ((s.left += n[0]), (s.top -= n[1])) : "bottom" === l && ((s.left += n[0]), (s.top += n[1])), (e.popper = s), e
    }
    for (var Q = Math.min, Y = Math.floor, G = Math.max, z = "undefined" != typeof window && "undefined" != typeof document, X = ["Edge", "Trident", "Firefox"], J = 0, Z = 0; Z < X.length; Z += 1)
      if (z && 0 <= navigator.userAgent.indexOf(X[Z])) {
        J = 1
        break
      }
    var ee,
      te = z && window.Promise,
      ne = te
        ? function (e) {
            var t = !1
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  ;(t = !1), e()
                }))
            }
          }
        : function (e) {
            var t = !1
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  ;(t = !1), e()
                }, J))
            }
          },
      ie = function () {
        return void 0 == ee && (ee = -1 !== navigator.appVersion.indexOf("MSIE 10")), ee
      },
      re = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      },
      oe = (function () {
        function e(e, t) {
          for (var n, i = 0; i < t.length; i++) (n = t[i]), (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      })(),
      se = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      },
      ae =
        Object.assign ||
        function (e) {
          for (var t, n = 1; n < arguments.length; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          return e
        },
      le = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      ue = le.slice(3),
      ce = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
      fe = (function () {
        function t(n, i) {
          var r = this,
            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
          re(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update)
            }),
            (this.update = ne(this.update.bind(this))),
            (this.options = ae({}, t.Defaults, o)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = n && n.jquery ? n[0] : n),
            (this.popper = i && i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(ae({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
              r.options.modifiers[e] = ae({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (e) {
                return ae({ name: e }, r.options.modifiers[e])
              })
              .sort(function (e, t) {
                return e.order - t.order
              })),
            this.modifiers.forEach(function (t) {
              t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }),
            this.update()
          var s = this.options.eventsEnabled
          s && this.enableEventListeners(), (this.state.eventsEnabled = s)
        }
        return (
          oe(t, [
            {
              key: "update",
              value: function () {
                return S.call(this)
              }
            },
            {
              key: "destroy",
              value: function () {
                return O.call(this)
              }
            },
            {
              key: "enableEventListeners",
              value: function () {
                return j.call(this)
              }
            },
            {
              key: "disableEventListeners",
              value: function () {
                return R.call(this)
              }
            }
          ]),
          t
        )
      })()
    return (
      (fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (fe.placements = le),
      (fe.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = t.split("-")[1]
              if (i) {
                var r = e.offsets,
                  o = r.reference,
                  s = r.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  u = a ? "width" : "height",
                  c = { start: se({}, l, o[l]), end: se({}, l, o[l] + o[u] - s[u]) }
                e.offsets.popper = ae({}, s, c[i])
              }
              return e
            }
          },
          offset: { order: 200, enabled: !0, fn: $, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || r(e.instance.popper)
              e.instance.reference === n && (n = r(n))
              var i = y(e.instance.popper, e.instance.reference, t.padding, n)
              t.boundaries = i
              var o = t.priority,
                s = e.offsets.popper,
                a = {
                  primary: function (e) {
                    var n = s[e]
                    return s[e] < i[e] && !t.escapeWithReference && (n = G(s[e], i[e])), se({}, e, n)
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      r = s[n]
                    return s[e] > i[e] && !t.escapeWithReference && (r = Q(s[n], i[e] - ("right" === e ? s.width : s.height))), se({}, n, r)
                  }
                }
              return (
                o.forEach(function (e) {
                  var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary"
                  s = ae({}, s, a[t](e))
                }),
                (e.offsets.popper = s),
                e
              )
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                i = t.reference,
                r = e.placement.split("-")[0],
                o = Y,
                s = -1 !== ["top", "bottom"].indexOf(r),
                a = s ? "right" : "bottom",
                l = s ? "left" : "top",
                u = s ? "width" : "height"
              return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, n) {
              var i
              if (!F(e.instance.modifiers, "arrow", "keepTogether")) return e
              var r = n.element
              if ("string" == typeof r) {
                if (!(r = e.instance.popper.querySelector(r))) return e
              } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e
              var o = e.placement.split("-")[0],
                s = e.offsets,
                a = s.popper,
                l = s.reference,
                u = -1 !== ["left", "right"].indexOf(o),
                c = u ? "height" : "width",
                f = u ? "Top" : "Left",
                d = f.toLowerCase(),
                p = u ? "left" : "top",
                g = u ? "bottom" : "right",
                m = T(r)[c]
              l[g] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[g] - m)), l[d] + m > a[g] && (e.offsets.popper[d] += l[d] + m - a[g]), (e.offsets.popper = h(e.offsets.popper))
              var v = l[d] + l[c] / 2 - m / 2,
                y = t(e.instance.popper),
                _ = parseFloat(y["margin" + f], 10),
                b = parseFloat(y["border" + f + "Width"], 10),
                E = v - e.offsets.popper[d] - _ - b
              return (E = G(Q(a[c] - m, E), 0)), (e.arrowElement = r), (e.offsets.arrow = ((i = {}), se(i, d, Math.round(E)), se(i, p, ""), i)), e
            },
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (N(e.instance.modifiers, "inner")) return e
              if (e.flipped && e.placement === e.originalPlacement) return e
              var n = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                i = e.placement.split("-")[0],
                r = C(i),
                o = e.placement.split("-")[1] || "",
                s = []
              switch (t.behavior) {
                case ce.FLIP:
                  s = [i, r]
                  break
                case ce.CLOCKWISE:
                  s = q(i)
                  break
                case ce.COUNTERCLOCKWISE:
                  s = q(i, !0)
                  break
                default:
                  s = t.behavior
              }
              return (
                s.forEach(function (a, l) {
                  if (i !== a || s.length === l + 1) return e
                  ;(i = e.placement.split("-")[0]), (r = C(i))
                  var u = e.offsets.popper,
                    c = e.offsets.reference,
                    f = Y,
                    d = ("left" === i && f(u.right) > f(c.left)) || ("right" === i && f(u.left) < f(c.right)) || ("top" === i && f(u.bottom) > f(c.top)) || ("bottom" === i && f(u.top) < f(c.bottom)),
                    h = f(u.left) < f(n.left),
                    p = f(u.right) > f(n.right),
                    g = f(u.top) < f(n.top),
                    m = f(u.bottom) > f(n.bottom),
                    v = ("left" === i && h) || ("right" === i && p) || ("top" === i && g) || ("bottom" === i && m),
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    _ = !!t.flipVariations && ((y && "start" === o && h) || (y && "end" === o && p) || (!y && "start" === o && g) || (!y && "end" === o && m))
                  ;(d || v || _) && ((e.flipped = !0), (d || v) && (i = s[l + 1]), _ && (o = U(o)), (e.placement = i + (o ? "-" + o : "")), (e.offsets.popper = ae({}, e.offsets.popper, w(e.instance.popper, e.offsets.reference, e.placement))), (e = D(e.instance.modifiers, e, "flip")))
                }),
                e
              )
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                i = e.offsets,
                r = i.popper,
                o = i.reference,
                s = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n)
              return (r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0)), (e.placement = C(t)), (e.offsets.popper = h(r)), e
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!F(e.instance.modifiers, "hide", "preventOverflow")) return e
              var t = e.offsets.reference,
                n = A(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name
                }).boundaries
              if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                if (!0 === e.hide) return e
                ;(e.hide = !0), (e.attributes["x-out-of-boundaries"] = "")
              } else {
                if (!1 === e.hide) return e
                ;(e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1)
              }
              return e
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                i = t.y,
                o = e.offsets.popper,
                s = A(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name
                }).gpuAcceleration
              void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
              var a,
                l,
                u = void 0 === s ? t.gpuAcceleration : s,
                c = r(e.instance.popper),
                f = p(c),
                d = { position: o.position },
                h = { left: Y(o.left), top: Y(o.top), bottom: Y(o.bottom), right: Y(o.right) },
                g = "bottom" === n ? "top" : "bottom",
                m = "right" === i ? "left" : "right",
                v = I("transform")
              if (((l = "bottom" == g ? -f.height + h.bottom : h.top), (a = "right" == m ? -f.width + h.right : h.left), u && v)) (d[v] = "translate3d(" + a + "px, " + l + "px, 0)"), (d[g] = 0), (d[m] = 0), (d.willChange = "transform")
              else {
                var y = "bottom" == g ? -1 : 1,
                  _ = "right" == m ? -1 : 1
                ;(d[g] = l * y), (d[m] = a * _), (d.willChange = g + ", " + m)
              }
              var b = { "x-placement": e.placement }
              return (e.attributes = ae({}, b, e.attributes)), (e.styles = ae({}, d, e.styles)), (e.arrowStyles = ae({}, e.offsets.arrow, e.arrowStyles)), e
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              return M(e.instance.popper, e.styles), B(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && M(e.arrowElement, e.arrowStyles), e
            },
            onLoad: function (e, t, n, i, r) {
              var o = E(r, t, e),
                s = b(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding)
              return t.setAttribute("x-placement", s), M(t, { position: "absolute" }), n
            },
            gpuAcceleration: void 0
          }
        }
      }),
      fe
    )
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e.bootstrap = {}), e.jQuery, e.Popper)
  })(this, function (e, t, n) {
    "use strict"
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]
        ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e
    }
    function o() {
      return (o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }).apply(this, arguments)
    }
    ;(t = t && t.hasOwnProperty("default") ? t.default : t), (n = n && n.hasOwnProperty("default") ? n.default : n)
    var s,
      a,
      l,
      u,
      c,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      y,
      _,
      b,
      E,
      T,
      C,
      w,
      A,
      x,
      D,
      S,
      N,
      I,
      O,
      k = (function (e) {
        function t(t) {
          var n = this,
            r = !1
          return (
            e(this).one(i.TRANSITION_END, function () {
              r = !0
            }),
            setTimeout(function () {
              r || i.triggerTransitionEnd(n)
            }, t),
            this
          )
        }
        var n = !1,
          i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
              do {
                e += ~~(1e6 * Math.random())
              } while (document.getElementById(e))
              return e
            },
            getSelectorFromElement: function (t) {
              var n,
                i = t.getAttribute("data-target")
              ;(i && "#" !== i) || (i = t.getAttribute("href") || ""), "#" === i.charAt(0) && ((n = i), (i = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")))
              try {
                return e(document).find(i).length > 0 ? i : null
              } catch (e) {
                return null
              }
            },
            reflow: function (e) {
              return e.offsetHeight
            },
            triggerTransitionEnd: function (t) {
              e(t).trigger(n.end)
            },
            supportsTransitionEnd: function () {
              return Boolean(n)
            },
            isElement: function (e) {
              return (e[0] || e).nodeType
            },
            typeCheckConfig: function (e, t, n) {
              for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                  var o = n[r],
                    s = t[r],
                    a =
                      s && i.isElement(s)
                        ? "element"
                        : ((l = s),
                          {}.toString
                            .call(l)
                            .match(/\s([a-zA-Z]+)/)[1]
                            .toLowerCase())
                  if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                }
              var l
            }
          }
        return (
          (n = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }),
          (e.fn.emulateTransitionEnd = t),
          i.supportsTransitionEnd() &&
            (e.event.special[i.TRANSITION_END] = {
              bindType: n.end,
              delegateType: n.end,
              handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
              }
            }),
          i
        )
      })(t),
      L =
        ((a = "alert"),
        (u = "." + (l = "bs.alert")),
        (c = (s = t).fn[a]),
        (f = { CLOSE: "close" + u, CLOSED: "closed" + u, CLICK_DATA_API: "click" + u + ".data-api" }),
        (d = "alert"),
        (h = "fade"),
        (p = "show"),
        (g = (function () {
          function e(e) {
            this._element = e
          }
          var t = e.prototype
          return (
            (t.close = function (e) {
              e = e || this._element
              var t = this._getRootElement(e)
              this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }),
            (t.dispose = function () {
              s.removeData(this._element, l), (this._element = null)
            }),
            (t._getRootElement = function (e) {
              var t = k.getSelectorFromElement(e),
                n = !1
              return t && (n = s(t)[0]), n || (n = s(e).closest("." + d)[0]), n
            }),
            (t._triggerCloseEvent = function (e) {
              var t = s.Event(f.CLOSE)
              return s(e).trigger(t), t
            }),
            (t._removeElement = function (e) {
              var t = this
              s(e).removeClass(p),
                k.supportsTransitionEnd() && s(e).hasClass(h)
                  ? s(e)
                      .one(k.TRANSITION_END, function (n) {
                        return t._destroyElement(e, n)
                      })
                      .emulateTransitionEnd(150)
                  : this._destroyElement(e)
            }),
            (t._destroyElement = function (e) {
              s(e).detach().trigger(f.CLOSED).remove()
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = s(this),
                  i = n.data(l)
                i || ((i = new e(this)), n.data(l, i)), "close" === t && i[t](this)
              })
            }),
            (e._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this)
              }
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0"
                }
              }
            ]),
            e
          )
        })()),
        s(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())),
        (s.fn[a] = g._jQueryInterface),
        (s.fn[a].Constructor = g),
        (s.fn[a].noConflict = function () {
          return (s.fn[a] = c), g._jQueryInterface
        }),
        g),
      P =
        ((v = "button"),
        (_ = "." + (y = "bs.button")),
        (b = ".data-api"),
        (E = (m = t).fn[v]),
        (T = "active"),
        (C = "btn"),
        (w = "focus"),
        (A = '[data-toggle^="button"]'),
        (x = '[data-toggle="buttons"]'),
        (D = "input"),
        (S = ".active"),
        (N = ".btn"),
        (I = { CLICK_DATA_API: "click" + _ + b, FOCUS_BLUR_DATA_API: "focus" + _ + b + " blur" + _ + b }),
        (O = (function () {
          function e(e) {
            this._element = e
          }
          var t = e.prototype
          return (
            (t.toggle = function () {
              var e = !0,
                t = !0,
                n = m(this._element).closest(x)[0]
              if (n) {
                var i = m(this._element).find(D)[0]
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && m(this._element).hasClass(T)) e = !1
                    else {
                      var r = m(n).find(S)[0]
                      r && m(r).removeClass(T)
                    }
                  if (e) {
                    if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return
                    ;(i.checked = !m(this._element).hasClass(T)), m(i).trigger("change")
                  }
                  i.focus(), (t = !1)
                }
              }
              t && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(T)), e && m(this._element).toggleClass(T)
            }),
            (t.dispose = function () {
              m.removeData(this._element, y), (this._element = null)
            }),
            (e._jQueryInterface = function (t) {
              return this.each(function () {
                var n = m(this).data(y)
                n || ((n = new e(this)), m(this).data(y, n)), "toggle" === t && n[t]()
              })
            }),
            r(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0"
                }
              }
            ]),
            e
          )
        })()),
        m(document)
          .on(I.CLICK_DATA_API, A, function (e) {
            e.preventDefault()
            var t = e.target
            m(t).hasClass(C) || (t = m(t).closest(N)), O._jQueryInterface.call(m(t), "toggle")
          })
          .on(I.FOCUS_BLUR_DATA_API, A, function (e) {
            var t = m(e.target).closest(N)[0]
            m(t).toggleClass(w, /^focus(in)?$/.test(e.type))
          }),
        (m.fn[v] = O._jQueryInterface),
        (m.fn[v].Constructor = O),
        (m.fn[v].noConflict = function () {
          return (m.fn[v] = E), O._jQueryInterface
        }),
        O),
      j = (function (e) {
        var t = "carousel",
          n = "bs.carousel",
          i = "." + n,
          s = e.fn[t],
          a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
          l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
          u = "next",
          c = "prev",
          f = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load" + i + ".data-api", CLICK_DATA_API: "click" + i + ".data-api" },
          d = "active",
          h = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
          p = (function () {
            function s(t, n) {
              ;(this._items = null), (this._interval = null), (this._activeElement = null), (this._isPaused = !1), (this._isSliding = !1), (this.touchTimeout = null), (this._config = this._getConfig(n)), (this._element = e(t)[0]), (this._indicatorsElement = e(this._element).find(h.INDICATORS)[0]), this._addEventListeners()
            }
            var p = s.prototype
            return (
              (p.next = function () {
                this._isSliding || this._slide(u)
              }),
              (p.nextWhenVisible = function () {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
              }),
              (p.prev = function () {
                this._isSliding || this._slide(c)
              }),
              (p.pause = function (t) {
                t || (this._isPaused = !0), e(this._element).find(h.NEXT_PREV)[0] && k.supportsTransitionEnd() && (k.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null)
              }),
              (p.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), (this._interval = null)), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
              }),
              (p.to = function (t) {
                var n = this
                this._activeElement = e(this._element).find(h.ACTIVE_ITEM)[0]
                var i = this._getItemIndex(this._activeElement)
                if (!(t > this._items.length - 1 || t < 0))
                  if (this._isSliding)
                    e(this._element).one(f.SLID, function () {
                      return n.to(t)
                    })
                  else {
                    if (i === t) return this.pause(), void this.cycle()
                    var r = t > i ? u : c
                    this._slide(r, this._items[t])
                  }
              }),
              (p.dispose = function () {
                e(this._element).off(i), e.removeData(this._element, n), (this._items = null), (this._config = null), (this._element = null), (this._interval = null), (this._isPaused = null), (this._isSliding = null), (this._activeElement = null), (this._indicatorsElement = null)
              }),
              (p._getConfig = function (e) {
                return (e = o({}, a, e)), k.typeCheckConfig(t, e, l), e
              }),
              (p._addEventListeners = function () {
                var t = this
                this._config.keyboard &&
                  e(this._element).on(f.KEYDOWN, function (e) {
                    return t._keydown(e)
                  }),
                  "hover" === this._config.pause &&
                    (e(this._element)
                      .on(f.MOUSEENTER, function (e) {
                        return t.pause(e)
                      })
                      .on(f.MOUSELEAVE, function (e) {
                        return t.cycle(e)
                      }),
                    "ontouchstart" in document.documentElement &&
                      e(this._element).on(f.TOUCHEND, function () {
                        t.pause(),
                          t.touchTimeout && clearTimeout(t.touchTimeout),
                          (t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e)
                          }, 500 + t._config.interval))
                      }))
              }),
              (p._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName))
                  switch (e.which) {
                    case 37:
                      e.preventDefault(), this.prev()
                      break
                    case 39:
                      e.preventDefault(), this.next()
                  }
              }),
              (p._getItemIndex = function (t) {
                return (this._items = e.makeArray(e(t).parent().find(h.ITEM))), this._items.indexOf(t)
              }),
              (p._getItemByDirection = function (e, t) {
                var n = e === u,
                  i = e === c,
                  r = this._getItemIndex(t),
                  o = this._items.length - 1
                if (((i && 0 === r) || (n && r === o)) && !this._config.wrap) return t
                var s = (r + (e === c ? -1 : 1)) % this._items.length
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
              }),
              (p._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t),
                  r = this._getItemIndex(e(this._element).find(h.ACTIVE_ITEM)[0]),
                  o = e.Event(f.SLIDE, { relatedTarget: t, direction: n, from: r, to: i })
                return e(this._element).trigger(o), o
              }),
              (p._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                  e(this._indicatorsElement).find(h.ACTIVE).removeClass(d)
                  var n = this._indicatorsElement.children[this._getItemIndex(t)]
                  n && e(n).addClass(d)
                }
              }),
              (p._slide = function (t, n) {
                var i,
                  r,
                  o,
                  s = this,
                  a = e(this._element).find(h.ACTIVE_ITEM)[0],
                  l = this._getItemIndex(a),
                  c = n || (a && this._getItemByDirection(t, a)),
                  p = this._getItemIndex(c),
                  g = Boolean(this._interval)
                if ((t === u ? ((i = "carousel-item-left"), (r = "carousel-item-next"), (o = "left")) : ((i = "carousel-item-right"), (r = "carousel-item-prev"), (o = "right")), c && e(c).hasClass(d))) this._isSliding = !1
                else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && a && c) {
                  ;(this._isSliding = !0), g && this.pause(), this._setActiveIndicatorElement(c)
                  var m = e.Event(f.SLID, { relatedTarget: c, direction: o, from: l, to: p })
                  k.supportsTransitionEnd() && e(this._element).hasClass("slide")
                    ? (e(c).addClass(r),
                      k.reflow(c),
                      e(a).addClass(i),
                      e(c).addClass(i),
                      e(a)
                        .one(k.TRANSITION_END, function () {
                          e(c)
                            .removeClass(i + " " + r)
                            .addClass(d),
                            e(a).removeClass(d + " " + r + " " + i),
                            (s._isSliding = !1),
                            setTimeout(function () {
                              return e(s._element).trigger(m)
                            }, 0)
                        })
                        .emulateTransitionEnd(600))
                    : (e(a).removeClass(d), e(c).addClass(d), (this._isSliding = !1), e(this._element).trigger(m)),
                    g && this.cycle()
                }
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n),
                    r = o({}, a, e(this).data())
                  "object" == typeof t && (r = o({}, r, t))
                  var l = "string" == typeof t ? t : r.slide
                  if ((i || ((i = new s(this, r)), e(this).data(n, i)), "number" == typeof t)) i.to(t)
                  else if ("string" == typeof l) {
                    if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"')
                    i[l]()
                  } else r.interval && (i.pause(), i.cycle())
                })
              }),
              (s._dataApiClickHandler = function (t) {
                var i = k.getSelectorFromElement(this)
                if (i) {
                  var r = e(i)[0]
                  if (r && e(r).hasClass("carousel")) {
                    var a = o({}, e(r).data(), e(this).data()),
                      l = this.getAttribute("data-slide-to")
                    l && (a.interval = !1), s._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault()
                  }
                }
              }),
              r(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return a
                  }
                }
              ]),
              s
            )
          })()
        return (
          e(document).on(f.CLICK_DATA_API, h.DATA_SLIDE, p._dataApiClickHandler),
          e(window).on(f.LOAD_DATA_API, function () {
            e(h.DATA_RIDE).each(function () {
              var t = e(this)
              p._jQueryInterface.call(t, t.data())
            })
          }),
          (e.fn[t] = p._jQueryInterface),
          (e.fn[t].Constructor = p),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), p._jQueryInterface
          }),
          p
        )
      })(t),
      H = (function (e) {
        var t = "collapse",
          n = "bs.collapse",
          i = "." + n,
          s = e.fn[t],
          a = { toggle: !0, parent: "" },
          l = { toggle: "boolean", parent: "(string|element)" },
          u = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" },
          c = "show",
          f = "collapse",
          d = "collapsing",
          h = "collapsed",
          p = "width",
          g = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
          m = (function () {
            function i(t, n) {
              ;(this._isTransitioning = !1), (this._element = t), (this._config = this._getConfig(n)), (this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')))
              for (var i = e(g.DATA_TOGGLE), r = 0; r < i.length; r++) {
                var o = i[r],
                  s = k.getSelectorFromElement(o)
                null !== s && e(s).filter(t).length > 0 && ((this._selector = s), this._triggerArray.push(o))
              }
              ;(this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var s = i.prototype
            return (
              (s.toggle = function () {
                e(this._element).hasClass(c) ? this.hide() : this.show()
              }),
              (s.show = function () {
                var t,
                  r,
                  o = this
                if (
                  !(
                    this._isTransitioning ||
                    e(this._element).hasClass(c) ||
                    (this._parent &&
                      0 ===
                        (t = e.makeArray(
                          e(this._parent)
                            .find(g.ACTIVES)
                            .filter('[data-parent="' + this._config.parent + '"]')
                        )).length &&
                      (t = null),
                    t && (r = e(t).not(this._selector).data(n)) && r._isTransitioning)
                  )
                ) {
                  var s = e.Event(u.SHOW)
                  if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
                    t && (i._jQueryInterface.call(e(t).not(this._selector), "hide"), r || e(t).data(n, null))
                    var a = this._getDimension()
                    e(this._element).removeClass(f).addClass(d), (this._element.style[a] = 0), this._triggerArray.length > 0 && e(this._triggerArray).removeClass(h).attr("aria-expanded", !0), this.setTransitioning(!0)
                    var l = function () {
                      e(o._element).removeClass(d).addClass(f).addClass(c), (o._element.style[a] = ""), o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                    }
                    if (k.supportsTransitionEnd()) {
                      var p = "scroll" + (a[0].toUpperCase() + a.slice(1))
                      e(this._element).one(k.TRANSITION_END, l).emulateTransitionEnd(600), (this._element.style[a] = this._element[p] + "px")
                    } else l()
                  }
                }
              }),
              (s.hide = function () {
                var t = this
                if (!this._isTransitioning && e(this._element).hasClass(c)) {
                  var n = e.Event(u.HIDE)
                  if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                    var i = this._getDimension()
                    if (((this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"), k.reflow(this._element), e(this._element).addClass(d).removeClass(f).removeClass(c), this._triggerArray.length > 0))
                      for (var r = 0; r < this._triggerArray.length; r++) {
                        var o = this._triggerArray[r],
                          s = k.getSelectorFromElement(o)
                        null !== s && (e(s).hasClass(c) || e(o).addClass(h).attr("aria-expanded", !1))
                      }
                    this.setTransitioning(!0)
                    var a = function () {
                      t.setTransitioning(!1), e(t._element).removeClass(d).addClass(f).trigger(u.HIDDEN)
                    }
                    ;(this._element.style[i] = ""), k.supportsTransitionEnd() ? e(this._element).one(k.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                  }
                }
              }),
              (s.setTransitioning = function (e) {
                this._isTransitioning = e
              }),
              (s.dispose = function () {
                e.removeData(this._element, n), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null)
              }),
              (s._getConfig = function (e) {
                return ((e = o({}, a, e)).toggle = Boolean(e.toggle)), k.typeCheckConfig(t, e, l), e
              }),
              (s._getDimension = function () {
                return e(this._element).hasClass(p) ? p : "height"
              }),
              (s._getParent = function () {
                var t = this,
                  n = null
                k.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = e(this._config.parent)[0])
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                return (
                  e(n)
                    .find(r)
                    .each(function (e, n) {
                      t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                    }),
                  n
                )
              }),
              (s._addAriaAndCollapsedClass = function (t, n) {
                if (t) {
                  var i = e(t).hasClass(c)
                  n.length > 0 && e(n).toggleClass(h, !i).attr("aria-expanded", i)
                }
              }),
              (i._getTargetFromElement = function (t) {
                var n = k.getSelectorFromElement(t)
                return n ? e(n)[0] : null
              }),
              (i._jQueryInterface = function (t) {
                return this.each(function () {
                  var r = e(this),
                    s = r.data(n),
                    l = o({}, a, r.data(), "object" == typeof t && t)
                  if ((!s && l.toggle && /show|hide/.test(t) && (l.toggle = !1), s || ((s = new i(this, l)), r.data(n, s)), "string" == typeof t)) {
                    if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"')
                    s[t]()
                  }
                })
              }),
              r(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return a
                  }
                }
              ]),
              i
            )
          })()
        return (
          e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault()
            var i = e(this),
              r = k.getSelectorFromElement(this)
            e(r).each(function () {
              var t = e(this),
                r = t.data(n) ? "toggle" : i.data()
              m._jQueryInterface.call(t, r)
            })
          }),
          (e.fn[t] = m._jQueryInterface),
          (e.fn[t].Constructor = m),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), m._jQueryInterface
          }),
          m
        )
      })(t),
      R = (function (e) {
        var t = "dropdown",
          i = "bs.dropdown",
          s = "." + i,
          a = ".data-api",
          l = e.fn[t],
          u = new RegExp("38|40|27"),
          c = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, CLICK: "click" + s, CLICK_DATA_API: "click" + s + a, KEYDOWN_DATA_API: "keydown" + s + a, KEYUP_DATA_API: "keyup" + s + a },
          f = "disabled",
          d = "show",
          h = "dropup",
          p = "dropdown-menu-right",
          g = '[data-toggle="dropdown"]',
          m = ".dropdown-menu",
          v = { offset: 0, flip: !0, boundary: "scrollParent" },
          y = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
          _ = (function () {
            function a(e, t) {
              ;(this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners()
            }
            var l = a.prototype
            return (
              (l.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(f)) {
                  var t = a._getParentFromElement(this._element),
                    i = e(this._menu).hasClass(d)
                  if ((a._clearMenus(), !i)) {
                    var r = { relatedTarget: this._element },
                      o = e.Event(c.SHOW, r)
                    if ((e(t).trigger(o), !o.isDefaultPrevented())) {
                      if (!this._inNavbar) {
                        if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)")
                        var s = this._element
                        e(t).hasClass(h) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(p)) && (s = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), (this._popper = new n(s, this._menu, this._getPopperConfig()))
                      }
                      "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(d), e(t).toggleClass(d).trigger(e.Event(c.SHOWN, r))
                    }
                  }
                }
              }),
              (l.dispose = function () {
                e.removeData(this._element, i), e(this._element).off(s), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null))
              }),
              (l.update = function () {
                ;(this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate()
              }),
              (l._addEventListeners = function () {
                var t = this
                e(this._element).on(c.CLICK, function (e) {
                  e.preventDefault(), e.stopPropagation(), t.toggle()
                })
              }),
              (l._getConfig = function (n) {
                return (n = o({}, this.constructor.Default, e(this._element).data(), n)), k.typeCheckConfig(t, n, this.constructor.DefaultType), n
              }),
              (l._getMenuElement = function () {
                if (!this._menu) {
                  var t = a._getParentFromElement(this._element)
                  this._menu = e(t).find(m)[0]
                }
                return this._menu
              }),
              (l._getPlacement = function () {
                var t = e(this._element).parent(),
                  n = "bottom-start"
                return t.hasClass(h) ? ((n = "top-start"), e(this._menu).hasClass(p) && (n = "top-end")) : t.hasClass("dropright") ? (n = "right-start") : t.hasClass("dropleft") ? (n = "left-start") : e(this._menu).hasClass(p) && (n = "bottom-end"), n
              }),
              (l._detectNavbar = function () {
                return e(this._element).closest(".navbar").length > 0
              }),
              (l._getPopperConfig = function () {
                var e = this,
                  t = {}
                return (
                  "function" == typeof this._config.offset
                    ? (t.fn = function (t) {
                        return (t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {})), t
                      })
                    : (t.offset = this._config.offset),
                  { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
                )
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data(i)
                  if ((n || ((n = new a(this, "object" == typeof t ? t : null)), e(this).data(i, n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"')
                    n[t]()
                  }
                })
              }),
              (a._clearMenus = function (t) {
                if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                  for (var n = e.makeArray(e(g)), r = 0; r < n.length; r++) {
                    var o = a._getParentFromElement(n[r]),
                      s = e(n[r]).data(i),
                      l = { relatedTarget: n[r] }
                    if (s) {
                      var u = s._menu
                      if (e(o).hasClass(d) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && e.contains(o, t.target))) {
                        var f = e.Event(c.HIDE, l)
                        e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), e(u).removeClass(d), e(o).removeClass(d).trigger(e.Event(c.HIDDEN, l)))
                      }
                    }
                  }
              }),
              (a._getParentFromElement = function (t) {
                var n,
                  i = k.getSelectorFromElement(t)
                return i && (n = e(i)[0]), n || t.parentNode
              }),
              (a._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || e(t.target).closest(m).length))) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f))) {
                  var n = a._getParentFromElement(this),
                    i = e(n).hasClass(d)
                  if ((i || (27 === t.which && 32 === t.which)) && (!i || (27 !== t.which && 32 !== t.which))) {
                    var r = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get()
                    if (0 !== r.length) {
                      var o = r.indexOf(t.target)
                      38 === t.which && o > 0 && o--, 40 === t.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                    }
                  } else {
                    if (27 === t.which) {
                      var s = e(n).find(g)[0]
                      e(s).trigger("focus")
                    }
                    e(this).trigger("click")
                  }
                }
              }),
              r(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return v
                  }
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return y
                  }
                }
              ]),
              a
            )
          })()
        return (
          e(document)
            .on(c.KEYDOWN_DATA_API, g, _._dataApiKeydownHandler)
            .on(c.KEYDOWN_DATA_API, m, _._dataApiKeydownHandler)
            .on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, _._clearMenus)
            .on(c.CLICK_DATA_API, g, function (t) {
              t.preventDefault(), t.stopPropagation(), _._jQueryInterface.call(e(this), "toggle")
            })
            .on(c.CLICK_DATA_API, ".dropdown form", function (e) {
              e.stopPropagation()
            }),
          (e.fn[t] = _._jQueryInterface),
          (e.fn[t].Constructor = _),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = l), _._jQueryInterface
          }),
          _
        )
      })(t),
      W = (function (e) {
        var t = "bs.modal",
          n = "." + t,
          i = e.fn.modal,
          s = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          a = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
          l = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, FOCUSIN: "focusin" + n, RESIZE: "resize" + n, CLICK_DISMISS: "click.dismiss" + n, KEYDOWN_DISMISS: "keydown.dismiss" + n, MOUSEUP_DISMISS: "mouseup.dismiss" + n, MOUSEDOWN_DISMISS: "mousedown.dismiss" + n, CLICK_DATA_API: "click" + n + ".data-api" },
          u = "modal-open",
          c = "fade",
          f = "show",
          d = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
          h = (function () {
            function i(t, n) {
              ;(this._config = this._getConfig(n)), (this._element = t), (this._dialog = e(t).find(d.DIALOG)[0]), (this._backdrop = null), (this._isShown = !1), (this._isBodyOverflowing = !1), (this._ignoreBackdropClick = !1), (this._originalBodyPadding = 0), (this._scrollbarWidth = 0)
            }
            var h = i.prototype
            return (
              (h.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
              }),
              (h.show = function (t) {
                var n = this
                if (!this._isTransitioning && !this._isShown) {
                  k.supportsTransitionEnd() && e(this._element).hasClass(c) && (this._isTransitioning = !0)
                  var i = e.Event(l.SHOW, { relatedTarget: t })
                  e(this._element).trigger(i),
                    this._isShown ||
                      i.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      this._adjustDialog(),
                      e(document.body).addClass(u),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(this._element).on(l.CLICK_DISMISS, d.DATA_DISMISS, function (e) {
                        return n.hide(e)
                      }),
                      e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                          e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                      }),
                      this._showBackdrop(function () {
                        return n._showElement(t)
                      }))
                }
              }),
              (h.hide = function (t) {
                var n = this
                if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
                  var i = e.Event(l.HIDE)
                  if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                    this._isShown = !1
                    var r = k.supportsTransitionEnd() && e(this._element).hasClass(c)
                    r && (this._isTransitioning = !0),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      e(document).off(l.FOCUSIN),
                      e(this._element).removeClass(f),
                      e(this._element).off(l.CLICK_DISMISS),
                      e(this._dialog).off(l.MOUSEDOWN_DISMISS),
                      r
                        ? e(this._element)
                            .one(k.TRANSITION_END, function (e) {
                              return n._hideModal(e)
                            })
                            .emulateTransitionEnd(300)
                        : this._hideModal()
                  }
                }
              }),
              (h.dispose = function () {
                e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(n), (this._config = null), (this._element = null), (this._dialog = null), (this._backdrop = null), (this._isShown = null), (this._isBodyOverflowing = null), (this._ignoreBackdropClick = null), (this._scrollbarWidth = null)
              }),
              (h.handleUpdate = function () {
                this._adjustDialog()
              }),
              (h._getConfig = function (e) {
                return (e = o({}, s, e)), k.typeCheckConfig("modal", e, a), e
              }),
              (h._showElement = function (t) {
                var n = this,
                  i = k.supportsTransitionEnd() && e(this._element).hasClass(c)
                ;(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element), (this._element.style.display = "block"), this._element.removeAttribute("aria-hidden"), (this._element.scrollTop = 0), i && k.reflow(this._element), e(this._element).addClass(f), this._config.focus && this._enforceFocus()
                var r = e.Event(l.SHOWN, { relatedTarget: t }),
                  o = function () {
                    n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(r)
                  }
                i ? e(this._dialog).one(k.TRANSITION_END, o).emulateTransitionEnd(300) : o()
              }),
              (h._enforceFocus = function () {
                var t = this
                e(document)
                  .off(l.FOCUSIN)
                  .on(l.FOCUSIN, function (n) {
                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                  })
              }),
              (h._setEscapeEvent = function () {
                var t = this
                this._isShown && this._config.keyboard
                  ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                      27 === e.which && (e.preventDefault(), t.hide())
                    })
                  : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
              }),
              (h._setResizeEvent = function () {
                var t = this
                this._isShown
                  ? e(window).on(l.RESIZE, function (e) {
                      return t.handleUpdate(e)
                    })
                  : e(window).off(l.RESIZE)
              }),
              (h._hideModal = function () {
                var t = this
                ;(this._element.style.display = "none"),
                  this._element.setAttribute("aria-hidden", !0),
                  (this._isTransitioning = !1),
                  this._showBackdrop(function () {
                    e(document.body).removeClass(u), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                  })
              }),
              (h._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null))
              }),
              (h._showBackdrop = function (t) {
                var n = this,
                  i = e(this._element).hasClass(c) ? c : ""
                if (this._isShown && this._config.backdrop) {
                  var r = k.supportsTransitionEnd() && i
                  if (
                    ((this._backdrop = document.createElement("div")),
                    (this._backdrop.className = "modal-backdrop"),
                    i && e(this._backdrop).addClass(i),
                    e(this._backdrop).appendTo(document.body),
                    e(this._element).on(l.CLICK_DISMISS, function (e) {
                      n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }),
                    r && k.reflow(this._backdrop),
                    e(this._backdrop).addClass(f),
                    !t)
                  )
                    return
                  if (!r) return void t()
                  e(this._backdrop).one(k.TRANSITION_END, t).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                  e(this._backdrop).removeClass(f)
                  var o = function () {
                    n._removeBackdrop(), t && t()
                  }
                  k.supportsTransitionEnd() && e(this._element).hasClass(c) ? e(this._backdrop).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                } else t && t()
              }),
              (h._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
              }),
              (h._resetAdjustments = function () {
                ;(this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "")
              }),
              (h._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect()
                ;(this._isBodyOverflowing = e.left + e.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth())
              }),
              (h._setScrollbar = function () {
                var t = this
                if (this._isBodyOverflowing) {
                  e(d.FIXED_CONTENT).each(function (n, i) {
                    var r = e(i)[0].style.paddingRight,
                      o = e(i).css("padding-right")
                    e(i)
                      .data("padding-right", r)
                      .css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                  }),
                    e(d.STICKY_CONTENT).each(function (n, i) {
                      var r = e(i)[0].style.marginRight,
                        o = e(i).css("margin-right")
                      e(i)
                        .data("margin-right", r)
                        .css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                    }),
                    e(d.NAVBAR_TOGGLER).each(function (n, i) {
                      var r = e(i)[0].style.marginRight,
                        o = e(i).css("margin-right")
                      e(i)
                        .data("margin-right", r)
                        .css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                    })
                  var n = document.body.style.paddingRight,
                    i = e("body").css("padding-right")
                  e("body")
                    .data("padding-right", n)
                    .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
              }),
              (h._resetScrollbar = function () {
                e(d.FIXED_CONTENT).each(function (t, n) {
                  var i = e(n).data("padding-right")
                  void 0 !== i && e(n).css("padding-right", i).removeData("padding-right")
                }),
                  e(d.STICKY_CONTENT + ", " + d.NAVBAR_TOGGLER).each(function (t, n) {
                    var i = e(n).data("margin-right")
                    void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                  })
                var t = e("body").data("padding-right")
                void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
              }),
              (h._getScrollbarWidth = function () {
                var e = document.createElement("div")
                ;(e.className = "modal-scrollbar-measure"), document.body.appendChild(e)
                var t = e.getBoundingClientRect().width - e.clientWidth
                return document.body.removeChild(e), t
              }),
              (i._jQueryInterface = function (n, r) {
                return this.each(function () {
                  var s = e(this).data(t),
                    a = o({}, i.Default, e(this).data(), "object" == typeof n && n)
                  if ((s || ((s = new i(this, a)), e(this).data(t, s)), "string" == typeof n)) {
                    if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"')
                    s[n](r)
                  } else a.show && s.show(r)
                })
              }),
              r(i, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return s
                  }
                }
              ]),
              i
            )
          })()
        return (
          e(document).on(l.CLICK_DATA_API, d.DATA_TOGGLE, function (n) {
            var i,
              r = this,
              s = k.getSelectorFromElement(this)
            s && (i = e(s)[0])
            var a = e(i).data(t) ? "toggle" : o({}, e(i).data(), e(this).data())
            ;("A" !== this.tagName && "AREA" !== this.tagName) || n.preventDefault()
            var u = e(i).one(l.SHOW, function (t) {
              t.isDefaultPrevented() ||
                u.one(l.HIDDEN, function () {
                  e(r).is(":visible") && r.focus()
                })
            })
            h._jQueryInterface.call(e(i), a, this)
          }),
          (e.fn.modal = h._jQueryInterface),
          (e.fn.modal.Constructor = h),
          (e.fn.modal.noConflict = function () {
            return (e.fn.modal = i), h._jQueryInterface
          }),
          h
        )
      })(t),
      M = (function (e) {
        var t = "tooltip",
          i = "bs.tooltip",
          s = "." + i,
          a = e.fn[t],
          l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          u = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
          c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
          f = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
          d = "show",
          h = "out",
          p = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, INSERTED: "inserted" + s, CLICK: "click" + s, FOCUSIN: "focusin" + s, FOCUSOUT: "focusout" + s, MOUSEENTER: "mouseenter" + s, MOUSELEAVE: "mouseleave" + s },
          g = "fade",
          m = "show",
          v = "hover",
          y = "focus",
          _ = (function () {
            function a(e, t) {
              if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)")
              ;(this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = e), (this.config = this._getConfig(t)), (this.tip = null), this._setListeners()
            }
            var _ = a.prototype
            return (
              (_.enable = function () {
                this._isEnabled = !0
              }),
              (_.disable = function () {
                this._isEnabled = !1
              }),
              (_.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
              }),
              (_.toggle = function (t) {
                if (this._isEnabled)
                  if (t) {
                    var n = this.constructor.DATA_KEY,
                      i = e(t.currentTarget).data(n)
                    i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)), (i._activeTrigger.click = !i._activeTrigger.click), i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                  } else {
                    if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this)
                    this._enter(null, this)
                  }
              }),
              (_.dispose = function () {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), (this._isEnabled = null), (this._timeout = null), (this._hoverState = null), (this._activeTrigger = null), null !== this._popper && this._popper.destroy(), (this._popper = null), (this.element = null), (this.config = null), (this.tip = null)
              }),
              (_.show = function () {
                var t = this
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements")
                var i = e.Event(this.constructor.Event.SHOW)
                if (this.isWithContent() && this._isEnabled) {
                  e(this.element).trigger(i)
                  var r = e.contains(this.element.ownerDocument.documentElement, this.element)
                  if (i.isDefaultPrevented() || !r) return
                  var o = this.getTipElement(),
                    s = k.getUID(this.constructor.NAME)
                  o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(g)
                  var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                    u = this._getAttachment(l)
                  this.addAttachmentClass(u)
                  var c = !1 === this.config.container ? document.body : e(this.config.container)
                  e(o).data(this.constructor.DATA_KEY, this),
                    e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(c),
                    e(this.element).trigger(this.constructor.Event.INSERTED),
                    (this._popper = new n(this.element, o, {
                      placement: u,
                      modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                      onCreate: function (e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                      },
                      onUpdate: function (e) {
                        t._handlePopperPlacementChange(e)
                      }
                    })),
                    e(o).addClass(m),
                    "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop)
                  var f = function () {
                    t.config.animation && t._fixTransition()
                    var n = t._hoverState
                    ;(t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), n === h && t._leave(null, t)
                  }
                  k.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(k.TRANSITION_END, f).emulateTransitionEnd(a._TRANSITION_DURATION) : f()
                }
              }),
              (_.hide = function (t) {
                var n = this,
                  i = this.getTipElement(),
                  r = e.Event(this.constructor.Event.HIDE),
                  o = function () {
                    n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                  }
                e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(m), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), (this._activeTrigger.click = !1), (this._activeTrigger[y] = !1), (this._activeTrigger[v] = !1), k.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(i).one(k.TRANSITION_END, o).emulateTransitionEnd(150) : o(), (this._hoverState = ""))
              }),
              (_.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
              }),
              (_.isWithContent = function () {
                return Boolean(this.getTitle())
              }),
              (_.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t)
              }),
              (_.getTipElement = function () {
                return (this.tip = this.tip || e(this.config.template)[0]), this.tip
              }),
              (_.setContent = function () {
                var t = e(this.getTipElement())
                this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(g + " " + m)
              }),
              (_.setElementContent = function (t, n) {
                var i = this.config.html
                "object" == typeof n && (n.nodeType || n.jquery) ? (i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())) : t[i ? "html" : "text"](n)
              }),
              (_.getTitle = function () {
                var e = this.element.getAttribute("data-original-title")
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
              }),
              (_._getAttachment = function (e) {
                return c[e.toUpperCase()]
              }),
              (_._setListeners = function () {
                var t = this
                this.config.trigger.split(" ").forEach(function (n) {
                  if ("click" === n)
                    e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                      return t.toggle(e)
                    })
                  else if ("manual" !== n) {
                    var i = n === v ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                      r = n === v ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT
                    e(t.element)
                      .on(i, t.config.selector, function (e) {
                        return t._enter(e)
                      })
                      .on(r, t.config.selector, function (e) {
                        return t._leave(e)
                      })
                  }
                  e(t.element)
                    .closest(".modal")
                    .on("hide.bs.modal", function () {
                      return t.hide()
                    })
                }),
                  this.config.selector ? (this.config = o({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle()
              }),
              (_._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title")
                ;(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
              }),
              (_._enter = function (t, n) {
                var i = this.constructor.DATA_KEY
                ;(n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                  t && (n._activeTrigger["focusin" === t.type ? y : v] = !0),
                  e(n.getTipElement()).hasClass(m) || n._hoverState === d
                    ? (n._hoverState = d)
                    : (clearTimeout(n._timeout),
                      (n._hoverState = d),
                      n.config.delay && n.config.delay.show
                        ? (n._timeout = setTimeout(function () {
                            n._hoverState === d && n.show()
                          }, n.config.delay.show))
                        : n.show())
              }),
              (_._leave = function (t, n) {
                var i = this.constructor.DATA_KEY
                ;(n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
                  t && (n._activeTrigger["focusout" === t.type ? y : v] = !1),
                  n._isWithActiveTrigger() ||
                    (clearTimeout(n._timeout),
                    (n._hoverState = h),
                    n.config.delay && n.config.delay.hide
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === h && n.hide()
                        }, n.config.delay.hide))
                      : n.hide())
              }),
              (_._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0
                return !1
              }),
              (_._getConfig = function (n) {
                return "number" == typeof (n = o({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), k.typeCheckConfig(t, n, this.constructor.DefaultType), n
              }),
              (_._getDelegateConfig = function () {
                var e = {}
                if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t])
                return e
              }),
              (_._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(l)
                null !== n && n.length > 0 && t.removeClass(n.join(""))
              }),
              (_._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
              }),
              (_._fixTransition = function () {
                var t = this.getTipElement(),
                  n = this.config.animation
                null === t.getAttribute("x-placement") && (e(t).removeClass(g), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n))
              }),
              (a._jQueryInterface = function (t) {
                return this.each(function () {
                  var n = e(this).data(i),
                    r = "object" == typeof t && t
                  if ((n || !/dispose|hide/.test(t)) && (n || ((n = new a(this, r)), e(this).data(i, n)), "string" == typeof t)) {
                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"')
                    n[t]()
                  }
                })
              }),
              r(a, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return f
                  }
                },
                {
                  key: "NAME",
                  get: function () {
                    return t
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return i
                  }
                },
                {
                  key: "Event",
                  get: function () {
                    return p
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return s
                  }
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return u
                  }
                }
              ]),
              a
            )
          })()
        return (
          (e.fn[t] = _._jQueryInterface),
          (e.fn[t].Constructor = _),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = a), _._jQueryInterface
          }),
          _
        )
      })(t),
      B = (function (e) {
        var t = "popover",
          n = "bs.popover",
          i = "." + n,
          s = e.fn[t],
          a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = o({}, M.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
          u = o({}, M.DefaultType, {
            content: "(string|element|function)"
          }),
          c = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
          f = (function (o) {
            function s() {
              return o.apply(this, arguments) || this
            }
            var f, d
            ;(d = o), ((f = s).prototype = Object.create(d.prototype)), (f.prototype.constructor = f), (f.__proto__ = d)
            var h = s.prototype
            return (
              (h.isWithContent = function () {
                return this.getTitle() || this._getContent()
              }),
              (h.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t)
              }),
              (h.getTipElement = function () {
                return (this.tip = this.tip || e(this.config.template)[0]), this.tip
              }),
              (h.setContent = function () {
                var t = e(this.getTipElement())
                this.setElementContent(t.find(".popover-header"), this.getTitle())
                var n = this._getContent()
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
              }),
              (h._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
              }),
              (h._cleanTipClass = function () {
                var t = e(this.getTipElement()),
                  n = t.attr("class").match(a)
                null !== n && n.length > 0 && t.removeClass(n.join(""))
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n),
                    r = "object" == typeof t ? t : null
                  if ((i || !/destroy|hide/.test(t)) && (i || ((i = new s(this, r)), e(this).data(n, i)), "string" == typeof t)) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"')
                    i[t]()
                  }
                })
              }),
              r(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return l
                  }
                },
                {
                  key: "NAME",
                  get: function () {
                    return t
                  }
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return n
                  }
                },
                {
                  key: "Event",
                  get: function () {
                    return c
                  }
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return i
                  }
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return u
                  }
                }
              ]),
              s
            )
          })(M)
        return (
          (e.fn[t] = f._jQueryInterface),
          (e.fn[t].Constructor = f),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), f._jQueryInterface
          }),
          f
        )
      })(t),
      F = (function (e) {
        var t = "scrollspy",
          n = "bs.scrollspy",
          i = "." + n,
          s = e.fn[t],
          a = { offset: 10, method: "auto", target: "" },
          l = { offset: "number", method: "string", target: "(string|element)" },
          u = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" },
          c = "active",
          f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
          d = "position",
          h = (function () {
            function s(t, n) {
              var i = this
              ;(this._element = t),
                (this._scrollElement = "BODY" === t.tagName ? window : t),
                (this._config = this._getConfig(n)),
                (this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                e(this._scrollElement).on(u.SCROLL, function (e) {
                  return i._process(e)
                }),
                this.refresh(),
                this._process()
            }
            var h = s.prototype
            return (
              (h.refresh = function () {
                var t = this,
                  n = this._scrollElement === this._scrollElement.window ? "offset" : d,
                  i = "auto" === this._config.method ? n : this._config.method,
                  r = i === d ? this._getScrollTop() : 0
                ;(this._offsets = []),
                  (this._targets = []),
                  (this._scrollHeight = this._getScrollHeight()),
                  e
                    .makeArray(e(this._selector))
                    .map(function (t) {
                      var n,
                        o = k.getSelectorFromElement(t)
                      if ((o && (n = e(o)[0]), n)) {
                        var s = n.getBoundingClientRect()
                        if (s.width || s.height) return [e(n)[i]().top + r, o]
                      }
                      return null
                    })
                    .filter(function (e) {
                      return e
                    })
                    .sort(function (e, t) {
                      return e[0] - t[0]
                    })
                    .forEach(function (e) {
                      t._offsets.push(e[0]), t._targets.push(e[1])
                    })
              }),
              (h.dispose = function () {
                e.removeData(this._element, n), e(this._scrollElement).off(i), (this._element = null), (this._scrollElement = null), (this._config = null), (this._selector = null), (this._offsets = null), (this._targets = null), (this._activeTarget = null), (this._scrollHeight = null)
              }),
              (h._getConfig = function (n) {
                if ("string" != typeof (n = o({}, a, n)).target) {
                  var i = e(n.target).attr("id")
                  i || ((i = k.getUID(t)), e(n.target).attr("id", i)), (n.target = "#" + i)
                }
                return k.typeCheckConfig(t, n, l), n
              }),
              (h._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
              }),
              (h._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
              }),
              (h._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
              }),
              (h._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                  t = this._getScrollHeight(),
                  n = this._config.offset + t - this._getOffsetHeight()
                if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                  var i = this._targets[this._targets.length - 1]
                  this._activeTarget !== i && this._activate(i)
                } else {
                  if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear()
                  for (var r = this._offsets.length; r--; ) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
              }),
              (h._activate = function (t) {
                ;(this._activeTarget = t), this._clear()
                var n = this._selector.split(",")
                n = n.map(function (e) {
                  return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                })
                var i = e(n.join(","))
                i.hasClass("dropdown-item")
                  ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c), i.addClass(c))
                  : (i.addClass(c),
                    i
                      .parents(f.NAV_LIST_GROUP)
                      .prev(f.NAV_LINKS + ", " + f.LIST_ITEMS)
                      .addClass(c),
                    i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(c)),
                  e(this._scrollElement).trigger(u.ACTIVATE, { relatedTarget: t })
              }),
              (h._clear = function () {
                e(this._selector).filter(f.ACTIVE).removeClass(c)
              }),
              (s._jQueryInterface = function (t) {
                return this.each(function () {
                  var i = e(this).data(n)
                  if ((i || ((i = new s(this, "object" == typeof t && t)), e(this).data(n, i)), "string" == typeof t)) {
                    if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"')
                    i[t]()
                  }
                })
              }),
              r(s, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                },
                {
                  key: "Default",
                  get: function () {
                    return a
                  }
                }
              ]),
              s
            )
          })()
        return (
          e(window).on(u.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--; ) {
              var i = e(t[n])
              h._jQueryInterface.call(i, i.data())
            }
          }),
          (e.fn[t] = h._jQueryInterface),
          (e.fn[t].Constructor = h),
          (e.fn[t].noConflict = function () {
            return (e.fn[t] = s), h._jQueryInterface
          }),
          h
        )
      })(t),
      U = (function (e) {
        var t = "bs.tab",
          n = "." + t,
          i = e.fn.tab,
          o = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api" },
          s = "active",
          a = "show",
          l = ".active",
          u = "> li > .active",
          c = (function () {
            function n(e) {
              this._element = e
            }
            var i = n.prototype
            return (
              (i.show = function () {
                var t = this
                if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(s)) || e(this._element).hasClass("disabled"))) {
                  var n,
                    i,
                    r = e(this._element).closest(".nav, .list-group")[0],
                    a = k.getSelectorFromElement(this._element)
                  if (r) {
                    var c = "UL" === r.nodeName ? u : l
                    i = (i = e.makeArray(e(r).find(c)))[i.length - 1]
                  }
                  var f = e.Event(o.HIDE, { relatedTarget: this._element }),
                    d = e.Event(o.SHOW, { relatedTarget: i })
                  if ((i && e(i).trigger(f), e(this._element).trigger(d), !d.isDefaultPrevented() && !f.isDefaultPrevented())) {
                    a && (n = e(a)[0]), this._activate(this._element, r)
                    var h = function () {
                      var n = e.Event(o.HIDDEN, { relatedTarget: t._element }),
                        r = e.Event(o.SHOWN, { relatedTarget: i })
                      e(i).trigger(n), e(t._element).trigger(r)
                    }
                    n ? this._activate(n, n.parentNode, h) : h()
                  }
                }
              }),
              (i.dispose = function () {
                e.removeData(this._element, t), (this._element = null)
              }),
              (i._activate = function (t, n, i) {
                var r = this,
                  o = ("UL" === n.nodeName ? e(n).find(u) : e(n).children(l))[0],
                  s = i && k.supportsTransitionEnd() && o && e(o).hasClass("fade"),
                  a = function () {
                    return r._transitionComplete(t, o, i)
                  }
                o && s ? e(o).one(k.TRANSITION_END, a).emulateTransitionEnd(150) : a()
              }),
              (i._transitionComplete = function (t, n, i) {
                if (n) {
                  e(n).removeClass(a + " " + s)
                  var r = e(n.parentNode).find("> .dropdown-menu .active")[0]
                  r && e(r).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if ((e(t).addClass(s), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), k.reflow(t), e(t).addClass(a), t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))) {
                  var o = e(t).closest(".dropdown")[0]
                  o && e(o).find(".dropdown-toggle").addClass(s), t.setAttribute("aria-expanded", !0)
                }
                i && i()
              }),
              (n._jQueryInterface = function (i) {
                return this.each(function () {
                  var r = e(this),
                    o = r.data(t)
                  if ((o || ((o = new n(this)), r.data(t, o)), "string" == typeof i)) {
                    if (void 0 === o[i]) throw new TypeError('No method named "' + i + '"')
                    o[i]()
                  }
                })
              }),
              r(n, null, [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0"
                  }
                }
              ]),
              n
            )
          })()
        return (
          e(document).on(o.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
            t.preventDefault(), c._jQueryInterface.call(e(this), "show")
          }),
          (e.fn.tab = c._jQueryInterface),
          (e.fn.tab.Constructor = c),
          (e.fn.tab.noConflict = function () {
            return (e.fn.tab = i), c._jQueryInterface
          }),
          c
        )
      })(t)
    !(function (e) {
      if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
      var t = e.fn.jquery.split(" ")[0].split(".")
      if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    })(t),
      (e.Util = k),
      (e.Alert = L),
      (e.Button = P),
      (e.Carousel = j),
      (e.Collapse = H),
      (e.Dropdown = R),
      (e.Modal = W),
      (e.Popover = B),
      (e.Scrollspy = F),
      (e.Tab = U),
      (e.Tooltip = M),
      Object.defineProperty(e, "__esModule", { value: !0 })
  }),
  $(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2e3 }),
      $("#carouselButton").click(function () {
        $("#carouselButton").children("span").hasClass("fa-pause") ? ($("#mycarousel").carousel("pause"), $("#carouselButton").children("span").removeClass("fa-pause"), $("#carouselButton").children("span").addClass("fa-play")) : $("#carouselButton").children("span").hasClass("fa-play") && ($("#mycarousel").carousel("cycle"), $("#carouselButton").children("span").removeClass("fa-play"), $("#carouselButton").children("span").addClass("fa-pause"))
      })
  }),
  $(document).ready(function () {
    $("#reserve-button").click(function () {
      $("#reserveModal").modal("show")
    }),
      $(".close").click(function () {
        $("#reserveModal").modal("hide"), $("#loginModal").modal("hide")
      }),
      $("#login-button").click(function () {
        $("#loginModal").modal("show")
      })
  })
