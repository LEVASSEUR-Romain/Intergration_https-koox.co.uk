!(function (e) {
  function t(t) {
    for (var i, s, o = t[0], n = t[1], a = 0, l = []; a < o.length; a++)
      (s = o[a]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && l.push(r[s][0]),
        (r[s] = 0);
    for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    for (h && h(t); l.length; ) l.shift()();
  }
  var i = {},
    r = { 0: 0 };
  function s(t) {
    if (i[t]) return i[t].exports;
    var r = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.e = function (e) {
    var t = [],
      i = r[e];
    if (0 !== i)
      if (i) t.push(i[2]);
      else {
        var o = new Promise(function (t, s) {
          i = r[e] = [t, s];
        });
        t.push((i[2] = o));
        var n,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          s.nc && a.setAttribute("nonce", s.nc),
          (a.src = (function (e) {
            return (
              s.p + "assets/js/" + ({}[e] || e) + "-ce164030f08d89738247.js"
            );
          })(e));
        var h = new Error();
        n = function (t) {
          (a.onerror = a.onload = null), clearTimeout(l);
          var i = r[e];
          if (0 !== i) {
            if (i) {
              var s = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (h.message =
                "Loading chunk " + e + " failed.\n(" + s + ": " + o + ")"),
                (h.name = "ChunkLoadError"),
                (h.type = s),
                (h.request = o),
                i[1](h);
            }
            r[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          n({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = n), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = i),
    (s.d = function (e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          s.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    n = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var a = 0; a < o.length; a++) t(o[a]);
  var h = n;
  s((s.s = 56));
})([
  function (e, t, i) {
    /*!
     * Light.js v0.1.107
     * (c) 2016 Nicolas Riciotti
     * Released under the MIT License.
     */
    e.exports = (function () {
      "use strict";
      var e = {
        classCallCheck: function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        inherits: function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        },
        possibleConstructorReturn: function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
      };
      function t(e) {
        return e.replace(/-([a-zA-Z0-9])/g, function (e) {
          return e[1].toUpperCase();
        });
      }
      function i(e) {
        return (
          "[object Array]" === Object.prototype.toString.call(e) ||
          "[object NodeList]" === Object.prototype.toString.call(e)
        );
      }
      function r() {
        var e,
          t,
          i = arguments[0] || {},
          r = 1,
          s = arguments.length;
        for (
          "object" != typeof i && "function" != typeof i && (i = {});
          r < s;
          r++
        )
          if (null != (e = arguments[r]))
            for (t in e) void 0 !== e[t] && (i[t] = e[t]);
        return i;
      }
      /*!
    Copyright (C) 2014-2015 by WebReflection

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    */
      (function (e, t, i, r) {
        if (!("registerElement" in t)) {
          var s,
            o,
            n,
            a,
            h,
            l,
            p,
            c = "__registerElement" + ((1e5 * Math.random()) >> 0),
            u = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            d = [
              "ANNOTATION-XML",
              "COLOR-PROFILE",
              "FONT-FACE",
              "FONT-FACE-SRC",
              "FONT-FACE-URI",
              "FONT-FACE-FORMAT",
              "FONT-FACE-NAME",
              "MISSING-GLYPH",
            ],
            m = [],
            f = [],
            g = "",
            v = t.documentElement,
            y =
              m.indexOf ||
              function (e) {
                for (var t = this.length; t-- && this[t] !== e; );
                return t;
              },
            w = i.prototype,
            _ = w.hasOwnProperty,
            x = w.isPrototypeOf,
            b = i.defineProperty,
            S = i.getOwnPropertyDescriptor,
            C = i.getOwnPropertyNames,
            T = i.getPrototypeOf,
            P = i.setPrototypeOf,
            z = !!i.__proto__,
            E =
              i.create ||
              function e(t) {
                return t ? ((e.prototype = t), new e()) : this;
              },
            k =
              P ||
              (z
                ? function (e, t) {
                    return (e.__proto__ = t), e;
                  }
                : C && S
                ? (function () {
                    function e(e, t) {
                      for (var i, r = C(t), s = 0, o = r.length; s < o; s++)
                        (i = r[s]), _.call(e, i) || b(e, i, S(t, i));
                    }
                    return function (t, i) {
                      do {
                        e(t, i);
                      } while ((i = T(i)) && !x.call(i, t));
                      return t;
                    };
                  })()
                : function (e, t) {
                    for (var i in t) e[i] = t[i];
                    return e;
                  }),
            M = e.MutationObserver || e.WebKitMutationObserver,
            A = (e.HTMLElement || e.Element || e.Node).prototype,
            L = !x.call(A, v),
            O = L
              ? function (e) {
                  return 1 === e.nodeType;
                }
              : function (e) {
                  return x.call(A, e);
                },
            D = L && [],
            N = A.cloneNode,
            R = t.importNode,
            j = A.setAttribute,
            F = A.removeAttribute,
            I = t.createElement,
            U = M && {
              attributes: !0,
              characterData: !0,
              attributeOldValue: !0,
            },
            H =
              M ||
              function (e) {
                ($ = !1), v.removeEventListener("DOMAttrModified", H);
              },
            B =
              e.requestAnimationFrame ||
              e.webkitRequestAnimationFrame ||
              e.mozRequestAnimationFrame ||
              e.msRequestAnimationFrame ||
              function (e) {
                setTimeout(e, 10);
              },
            q = !1,
            $ = !0,
            V = !0,
            Y = !0;
          P || z
            ? ((l = function (e, t) {
                x.call(t, e) || ie(e, t);
              }),
              (p = ie))
            : (p = l =
                function (e, t) {
                  e[c] || ((e[c] = i(!0)), ie(e, t));
                }),
            L
              ? (($ = !1),
                (function () {
                  var e = S(A, "addEventListener"),
                    t = e.value,
                    i = function (e) {
                      var t = new CustomEvent("DOMAttrModified", {
                        bubbles: !0,
                      });
                      (t.attrName = e),
                        (t.prevValue = this.getAttribute(e)),
                        (t.newValue = null),
                        (t.REMOVAL = t.attrChange = 2),
                        F.call(this, e),
                        this.dispatchEvent(t);
                    },
                    r = function (e, t) {
                      var i = this.hasAttribute(e),
                        r = i && this.getAttribute(e),
                        s = new CustomEvent("DOMAttrModified", { bubbles: !0 });
                      j.call(this, e, t),
                        (s.attrName = e),
                        (s.prevValue = i ? r : null),
                        (s.newValue = t),
                        i
                          ? (s.MODIFICATION = s.attrChange = 1)
                          : (s.ADDITION = s.attrChange = 0),
                        this.dispatchEvent(s);
                    },
                    s = function (e) {
                      var t,
                        i = e.currentTarget,
                        r = i[c],
                        s = e.propertyName;
                      r.hasOwnProperty(s) &&
                        ((r = r[s]),
                        ((t = new CustomEvent("DOMAttrModified", {
                          bubbles: !0,
                        })).attrName = r.name),
                        (t.prevValue = r.value || null),
                        (t.newValue = r.value = i[s] || null),
                        null == t.prevValue
                          ? (t.ADDITION = t.attrChange = 0)
                          : (t.MODIFICATION = t.attrChange = 1),
                        i.dispatchEvent(t));
                    };
                  (e.value = function (e, o, n) {
                    "DOMAttrModified" === e &&
                      this.attributeChangedCallback &&
                      this.setAttribute !== r &&
                      ((this[c] = {
                        className: { name: "class", value: this.className },
                      }),
                      (this.setAttribute = r),
                      (this.removeAttribute = i),
                      t.call(this, "propertychange", s)),
                      t.call(this, e, o, n);
                  }),
                    b(A, "addEventListener", e);
                })())
              : M ||
                (v.addEventListener("DOMAttrModified", H),
                v.setAttribute(c, 1),
                v.removeAttribute(c),
                $ &&
                  ((o = function (e) {
                    var t, i, r;
                    if (this === e.target) {
                      for (r in ((t = this[c]), (this[c] = i = a(this)), i)) {
                        if (!(r in t))
                          return n(0, this, r, t[r], i[r], "ADDITION");
                        if (i[r] !== t[r])
                          return n(1, this, r, t[r], i[r], "MODIFICATION");
                      }
                      for (r in t)
                        if (!(r in i))
                          return n(2, this, r, t[r], i[r], "REMOVAL");
                    }
                  }),
                  (n = function (e, t, i, r, s, o) {
                    var n = {
                      attrChange: e,
                      currentTarget: t,
                      attrName: i,
                      prevValue: r,
                      newValue: s,
                    };
                    (n[o] = e), Q(n);
                  }),
                  (a = function (e) {
                    for (
                      var t, i, r = {}, s = e.attributes, o = 0, n = s.length;
                      o < n;
                      o++
                    )
                      "setAttribute" !== (i = (t = s[o]).name) &&
                        (r[i] = t.value);
                    return r;
                  }))),
            (t.registerElement = function (e, i) {
              if (
                ((r = e.toUpperCase()),
                q ||
                  ((q = !0),
                  M
                    ? (h = (function (e, t) {
                        function i(e, t) {
                          for (var i = 0, r = e.length; i < r; t(e[i++]));
                        }
                        return new M(function (r) {
                          for (var s, o, n, a = 0, h = r.length; a < h; a++)
                            "childList" === (s = r[a]).type
                              ? (i(s.addedNodes, e), i(s.removedNodes, t))
                              : ((o = s.target),
                                Y &&
                                  o.attributeChangedCallback &&
                                  "style" !== s.attributeName &&
                                  (n = o.getAttribute(s.attributeName)) !==
                                    s.oldValue &&
                                  o.attributeChangedCallback(
                                    s.attributeName,
                                    s.oldValue,
                                    n
                                  ));
                        });
                      })(K("attached"), K("detached"))).observe(t, {
                        childList: !0,
                        subtree: !0,
                      })
                    : ((s = []),
                      B(function e() {
                        for (; s.length; ) s.shift().call(null, s.shift());
                        B(e);
                      }),
                      t.addEventListener("DOMNodeInserted", J("attached")),
                      t.addEventListener("DOMNodeRemoved", J("detached"))),
                  t.addEventListener("DOMContentLoaded", ee),
                  t.addEventListener("readystatechange", ee),
                  (t.importNode = function (e, i) {
                    var r = R.call(t, e, !!i);
                    if (r.attributes) {
                      var s = G(r);
                      -1 < s && p(r, f[s]), i && X(r.querySelectorAll(g));
                    }
                    return r;
                  }),
                  (t.createElement = function (e, i) {
                    var r = I.apply(t, arguments),
                      s = "" + e,
                      o = y.call(m, (i ? "=" : "<") + (i || s).toUpperCase()),
                      n = -1 < o;
                    return (
                      i &&
                        (r.setAttribute("is", (i = i.toLowerCase())),
                        n && (n = Z(s.toUpperCase(), i))),
                      (Y = !t.createElement.innerHTMLHelper),
                      n && p(r, f[o]),
                      r
                    );
                  }),
                  (A.cloneNode = function (e) {
                    var t = N.call(this, !!e),
                      i = G(t);
                    return (
                      -1 < i && p(t, f[i]), e && X(t.querySelectorAll(g)), t
                    );
                  })),
                -2 < y.call(m, "=" + r) + y.call(m, "<" + r) && re(e),
                !u.test(r) || -1 < y.call(d, r))
              )
                throw new Error("The type " + e + " is invalid");
              var r,
                o,
                n = function () {
                  return l ? t.createElement(c, r) : t.createElement(c);
                },
                a = i || w,
                l = _.call(a, "extends"),
                c = l ? i.extends.toUpperCase() : r;
              return (
                l && -1 < y.call(m, "<" + c) && re(c),
                (o = m.push((l ? "=" : "<") + r) - 1),
                (g = g.concat(
                  g.length ? "," : "",
                  l ? c + '[is="' + e.toLowerCase() + '"]' : c
                )),
                (n.prototype = f[o] =
                  _.call(a, "prototype") ? a.prototype : E(A)),
                W(t.querySelectorAll(g), "attached"),
                n
              );
            });
        }
        function W(e, t) {
          for (var i = 0, r = e.length; i < r; i++) se(e[i], t);
        }
        function X(e) {
          for (var t, i = 0, r = e.length; i < r; i++)
            (t = e[i]), p(t, f[G(t)]);
        }
        function K(e) {
          return function (t) {
            O(t) && (se(t, e), W(t.querySelectorAll(g), e));
          };
        }
        function G(e) {
          var t = e.getAttribute("is"),
            i = e.nodeName.toUpperCase(),
            r = y.call(m, t ? "=" + t.toUpperCase() : "<" + i);
          return t && -1 < r && !Z(i, t) ? -1 : r;
        }
        function Z(e, t) {
          return -1 < g.indexOf(e + '[is="' + t + '"]');
        }
        function Q(e) {
          var t = e.currentTarget,
            i = e.attrChange,
            r = e.attrName,
            s = e.target;
          Y &&
            (!s || s === t) &&
            t.attributeChangedCallback &&
            ("style" !== r) & (e.prevValue !== e.newValue) &&
            t.attributeChangedCallback(
              r,
              i === e.ADDITION ? null : e.prevValue,
              i === e.REMOVAL ? null : e.newValue
            );
        }
        function J(e) {
          var t = K(e);
          return function (e) {
            s.push(t, e.target);
          };
        }
        function ee(e) {
          V &&
            ((V = !1),
            e.currentTarget.removeEventListener("DOMContentLoaded", ee)),
            W(
              (e.target || t).querySelectorAll(g),
              "detached" === e.detail ? "detached" : "attached"
            ),
            L &&
              (function () {
                for (var e, t = 0, i = D.length; t < i; t++)
                  (e = D[t]),
                    v.contains(e) || (i--, D.splice(t--, 1), se(e, "detached"));
              })();
        }
        function te(e, t) {
          j.call(this, e, t), o.call(this, { target: this });
        }
        function ie(e, t) {
          k(e, t),
            h
              ? h.observe(e, U)
              : ($ &&
                  ((e.setAttribute = te),
                  (e[c] = a(e)),
                  e.addEventListener("DOMSubtreeModified", o)),
                e.addEventListener("DOMAttrModified", Q)),
            e.createdCallback && Y && e.createdCallback();
        }
        function re(e) {
          throw new Error("A " + e + " type is already registered");
        }
        function se(e, t) {
          var i,
            r = G(e);
          -1 < r &&
            (l(e, f[r]),
            (r = 0),
            "attached" !== t || e._isattached
              ? "detached" !== t ||
                e._isdetached ||
                ((e._isattached = !1), (e._isdetached = !0), (r = 1))
              : ((e._isdetached = !1),
                (e._isattached = !0),
                (r = 1),
                L && y.call(D, e) < 0 && D.push(e)),
            r && (i = e[t + "Callback"]) && i.call(e));
        }
      })(window, document, Object),
        Array.prototype.includes ||
          (Array.prototype.includes = function (e) {
            var t = Object(this),
              i = parseInt(t.length) || 0;
            if (0 === i) return !1;
            var r,
              s,
              o = parseInt(arguments[1]) || 0;
            for (o >= 0 ? (r = o) : (r = i + o) < 0 && (r = 0); r < i; ) {
              if (e === (s = t[r]) || (e != e && s != s)) return !0;
              r++;
            }
            return !1;
          }),
        (function () {
          for (
            var e = 0, t = ["ms", "moz", "webkit", "o"];
            e < t.length && !window.requestAnimationFrame;
            ++e
          )
            (window.requestAnimationFrame =
              window[t[e] + "RequestAnimationFrame"]),
              (window.cancelAnimationFrame =
                window[t[e] + "CancelAnimationFrame"] ||
                window[t[e] + "CancelRequestAnimationFrame"]);
          window.msRequestAnimationFrame &&
            (window.requestAnimationFrame = function (e) {
              return window.msRequestAnimationFrame(function () {
                e(+new Date());
              });
            }),
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (e, t) {
                var i = Date.now(),
                  r = window.setTimeout(function () {
                    e(i + 1e3 / 60);
                  }, 1e3 / 60);
                return r;
              }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (e) {
                clearTimeout(e);
              });
        })();
      var s = {},
        o = null,
        n = document.createElement("div").style,
        a = " Webkit WebKit Moz O Ms".split(" "),
        h = " -webkit- -webkit- -moz- -o- -ms-".split(" "),
        l = a.length,
        p = !1,
        c = function (e, t) {
          if (p & (e in s)) return s[e];
          var i,
            r = void 0 !== t && t,
            o = l;
          for (
            i = e
              .replace(/(^[a-z])/g, function (e) {
                return e.toUpperCase();
              })
              .replace(/\-([a-z])/g, function (e, t) {
                return t.toUpperCase();
              });
            o--;

          ) {
            if (e in n) return e;
            if (a[o] + i in n) return r ? h[o] + e.toLowerCase() : a[o] + i;
            if (void 0 !== window[a[o].toLowerCase() + i])
              return a[o].toLowerCase() + i;
            if (void 0 !== window[a[o] + i]) return a[o] + i;
          }
          return !1;
        };
      for (var u in (o = {
        prefix: function () {
          var e = c("transform");
          return e ? e.replace("Transform", "") : "";
        },
        cssprefix: function () {
          var e = c("transform", !0);
          return e ? e.replace("transform", "") : "";
        },
        transform: function () {
          return c("transform");
        },
        transformCss: function () {
          return c("transform", !0);
        },
        transform3d: function () {
          return (
            ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()) ||
            !!c("perspective")
          );
        },
        translateZ: function () {
          return this.transform3d() ? "translateZ(0)" : "";
        },
        transformOrigin: function () {
          return c("transformOrigin");
        },
        backfaceVisibility: function () {
          return c("backfaceVisibility");
        },
        perspective: function () {
          return c("perspective");
        },
        perspectiveOrigin: function () {
          return c("perspectiveOrigin");
        },
        transition: function () {
          return c("transition");
        },
        transitionProperty: function () {
          return c("transitionProperty");
        },
        transitionDuration: function () {
          return c("transitionDuration");
        },
        transitionTimingFunction: function () {
          return c("transitionTimingFunction");
        },
        transitionDelay: function () {
          return c("transitionDelay");
        },
        transitionEvent: function () {
          return c("transitionEvent");
        },
        transitionEventPrefix: function () {
          return c("transitionEvent")
            ? c("transitionEvent").replace("TransitionEvent", "").toLowerCase()
            : "";
        },
        transitionEnd: function () {
          return "" !== this.transitionEventPrefix()
            ? this.transitionEventPrefix() + "TransitionEnd"
            : "transitionend";
        },
        touch: function () {
          return "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
        },
        msPointer: function () {
          return !!window.navigator.msPointerEnabled;
        },
        pointer: function () {
          return !!window.navigator.pointerEnabled;
        },
        ipad: function () {
          return !!navigator.userAgent.match(/.*(iPad).*/);
        },
        iphone: function () {
          return !!navigator.userAgent.match(/.*(iPhone).*/);
        },
        android: function () {
          return !!navigator.userAgent.match(/.*(Android).*/);
        },
        firefox: function () {
          return !!navigator.userAgent.match(/.*((f|F)irefox).*/);
        },
        ltIE9: function () {
          return window.attachEvent && !window.addEventListener;
        },
        pointerdown: function () {
          return this.touch()
            ? "touchstart"
            : this.pointer()
            ? "pointerdown"
            : this.msPointer()
            ? "MSPointerDown"
            : "mousedown";
        },
        pointerup: function () {
          return this.touch()
            ? "touchend"
            : this.pointer()
            ? "pointerup"
            : this.msPointer()
            ? "MSPointerUp"
            : "mouseup";
        },
        pointermove: function () {
          return this.touch()
            ? "touchmove"
            : this.pointer()
            ? "pointermove"
            : this.msPointer()
            ? "MSPointerMove"
            : "mousemove";
        },
        pointerenter: function () {
          return this.touch()
            ? "touchstart"
            : this.pointer()
            ? "pointerenter"
            : this.msPointer()
            ? "MSPointerEnter"
            : "mouseenter";
        },
        pointerleave: function () {
          return this.touch()
            ? "touchend"
            : this.pointer()
            ? "pointerleave"
            : this.msPointer()
            ? "MSPointerLeave"
            : "mouseleave";
        },
        pointerover: function () {
          return this.touch()
            ? "touchstart"
            : this.pointer()
            ? "pointerover"
            : this.msPointer()
            ? "MSPointerOver"
            : "mouseover";
        },
        pointerout: function () {
          return this.touch()
            ? "touchend"
            : this.pointer()
            ? "pointerout"
            : this.msPointer()
            ? "MSPointerOut"
            : "mouseout";
        },
        multipointerdown: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchstart"]
              : ["mousedown", "touchstart"]
            : this.pointer()
            ? ["pointerdown"]
            : this.msPointer()
            ? ["MSPointerDown"]
            : ["mousedown"];
        },
        multipointerup: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchend"]
              : ["mouseup", "touchend"]
            : this.pointer()
            ? ["pointerup"]
            : this.msPointer()
            ? ["MSPointerUp"]
            : ["mouseup"];
        },
        multipointermove: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchmove"]
              : ["mousemove", "touchmove"]
            : this.pointer()
            ? ["pointermove"]
            : this.msPointer()
            ? ["MSPointerMove"]
            : ["mousemove"];
        },
        multipointerenter: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchstart"]
              : ["mouseenter", "touchstart"]
            : this.pointer()
            ? ["pointerenter"]
            : this.msPointer()
            ? ["MSPointerEnter"]
            : ["mouseenter"];
        },
        multipointerleave: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchend"]
              : ["mouseleave", "touchend"]
            : this.pointer()
            ? ["pointerleave"]
            : this.msPointer()
            ? ["MSPointerLeave"]
            : ["mouseleave"];
        },
        multipointerover: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchstart"]
              : ["mouseover", "touchstart"]
            : this.pointer()
            ? ["pointerover"]
            : this.msPointer()
            ? ["MSPointerOver"]
            : ["mouseover"];
        },
        multipointerout: function () {
          return this.touch()
            ? !("onmousedown" in window) || this.ipad() || this.iphone()
              ? ["touchend"]
              : ["mouseout", "touchend"]
            : this.pointer()
            ? ["pointerout"]
            : this.msPointer()
            ? ["MSPointerOut"]
            : ["mouseout"];
        },
        smallscreen: function () {
          return window.innerWidth < 700;
        },
      }))
        o.hasOwnProperty(u) && (s[u] = o[u]());
      (s.test = function (e) {
        return !!c(e);
      }),
        (s.getPrefixed = function (e) {
          return c(e);
        }),
        (s.getCssPrefixed = function (e) {
          return c(e, !0);
        });
      var d = ["moz", "webkit", "", "ms", "o"],
        m = d.length;
      if (void 0 !== document.cancelFullscreen)
        (s.requestFullscreen = "requestFullscreen"),
          (s.cancelFullScreen = "exitFullscreen"),
          (s.fullscreenchange = "fullscreenchange");
      else
        for (; m--; )
          ("moz" == d[m] && !document.mozFullScreenEnabled) ||
            void 0 === document[d[m] + "CancelFullScreen"] ||
            ((s.requestFullscreen = d[m] + "RequestFullScreen"),
            (s.cancelFullScreen = d[m] + "CancelFullScreen"),
            (s.fullScreenChange = d[m] + "fullscreenchange"),
            (s.isFullScreen =
              "webkit" == d[m] ? d[m] + "IsFullScreen" : d[m] + "FullScreen"));
      function f(e, t) {
        var i;
        return (
          e.currentStyle
            ? (i = e.currentStyle[t])
            : window.getComputedStyle &&
              (i = document.defaultView
                .getComputedStyle(e, null)
                .getPropertyValue(t)),
          i
        );
      }
      p = !0;
      var g = {
          camelCalise: t,
          pascalise: function (e) {
            var i = t(e);
            return i.charAt(0).toUpperCase() + i.slice(1);
          },
          hyphenise: function (e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          },
          isArray: i,
          isObject: function (e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          },
          clone: function (e) {
            return i(e) ? e.slice() : r({}, e);
          },
          cloneDeep: function e(t) {
            var r;
            if (i(t)) {
              r = [];
              for (var s = 0, o = t.length; s < o; s++)
                r.push(
                  "object" == typeof t[s] && null !== t[s] ? e(t[s]) : t[s]
                );
            } else
              for (var n in ((r = {}), t))
                r[n] =
                  "object" == typeof t[n] && null !== t[n] ? e(t[n]) : t[n];
            return r;
          },
          extend: r,
          nob: {},
          nop: function () {},
          style: function (e, t) {
            for (var r in (t = (function (e) {
              var t = "";
              for (var i in e)
                "translateX" == i &&
                  ((t += "translateX(" + e.translateX + ") "),
                  delete e.translateX),
                  "translateY" == i &&
                    ((t += "translateY(" + e.translateY + ") "),
                    delete e.translateY),
                  "translate" == i &&
                    ((t += "translate(" + e.translateY + ") "),
                    delete e.translate),
                  "scale" == i &&
                    ((t += "scale(" + e.scale + ") "), delete e.scale),
                  "scaleX" == i &&
                    ((t += "scaleX(" + e.scaleX + ") "), delete e.scaleX),
                  "scaleY" == i &&
                    ((t += "scaleY(" + e.scaleY + ") "), delete e.scaleY),
                  "rotate" == i &&
                    ((t += "rotate(" + e.rotate + ") "), delete e.rotate),
                  "force3d" == i && (t += " " + support.translateZ);
              return (e.transform = t), e;
            })(t))) {
              var s = support.getPrefixed(r);
              if (i(e) || e.length)
                for (var o = 0, n = e.length; o < n; o++) e[o].style[s] = t[r];
              else e.style[s] = t[r];
            }
          },
          position: function (e, t) {
            void 0 !== t || document;
            for (
              var i = e.offsetTop, r = e.offsetLeft;
              e && e.parentNode && e.parentNode != t;

            )
              "static" != f(e.parentNode, "position") &&
                ((i += e.parentNode.offsetTop), (r += e.parentNode.offsetLeft)),
                (e = e.parentNode);
            return { top: i, left: r };
          },
          notify: function (e, t) {
            console.log("%c[notify]: " + e, "color:#00aeff", t);
          },
          warn: function (e, t) {
            console.log("%c[warn]: " + e, "color:#ff0084", t);
          },
        },
        v = i,
        y = {
          normalize: function (e) {
            return e.replace(":", "");
          },
          listeners: [],
          on: function (e, t, i) {
            void 0 === t
              ? g.warn("cannot find callback for " + e + " in context:" + i)
              : ((e = this.normalize(e)),
                this.listeners.push({ name: e, closure: t, target: i }));
          },
          off: function (e, t, i) {
            var r,
              s = 0,
              o = this.listeners.length;
            for (e = this.normalize(e); s < o; s++)
              (r = this.listeners[s]).name !== e ||
                r.closure !== t ||
                (i && r.target !== i) ||
                (this.listeners.splice(s, 1), s--, o--);
          },
          fire: function (e, t) {
            var i,
              r = 0,
              s = this.listeners.length;
            for (e = this.normalize(e); r < s; r++)
              (i = this.listeners[r]) &&
                i.name === e &&
                (void 0 !== t
                  ? i.closure.apply(i.target, t)
                  : i.closure.call(i.target));
          },
          handlers: {},
          handlersQueue: {},
          setHandler: function (e, t) {
            if (
              ((e = this.normalize(e)),
              (this.handlers[e] = t),
              void 0 !== this.handlersQueue[e])
            ) {
              for (var i = 0; i < this.handlersQueue[e].length; i++)
                this.request(e, this.handlersQueue[e][i]);
              delete this.handlersQueue[e];
            }
          },
          request: function (e, t) {
            if (((e = this.normalize(e)), void 0 !== this.handlers[e]))
              return void 0 !== t
                ? this.handlers[e].apply(this, t)
                : this.handlers[e]();
            (this.handlersQueue[e] = this.handlersQueue[e] || []),
              this.handlersQueue[e].push(t);
          },
          subscribe: function (e, t, i) {
            _.warn(
              "EventDispatcher.on is depreciated and will be removed. Please use EventDispatcher.on instead"
            ),
              this.subscribe(e, t, i);
          },
          unsubscribe: function (e, t) {
            _.warn(
              "EventDispatcher.off is depreciated and will be removed. Please use EventDispatcher.off instead"
            ),
              this.off(e, t, target);
          },
          publish: function (e, t) {
            _.warn(
              "EventDispatcher.trigger is depreciated and will be removed. Please use EventDispatcher.trigger) instead"
            ),
              this.fire(e, t);
          },
          trigger: function (e, t) {
            _.warn(
              "'EventDispatcher.trigger' is depreciated and will be removed. Please use 'EventDispatcher.fire' instead"
            ),
              this.fire(e, t);
          },
        },
        w = {};
      function x(e, t, i) {
        void 0 === w[e] &&
          (w[e] = i
            ? document.registerElement(e, {
                extends: i,
                prototype: Object.create(t.prototype),
              })
            : document.registerElement(e, t));
      }
      var b = {
          on: function (e, t, i) {
            (this.callbackStack = this.callbackStack || {}),
              (this.callbackStack[e] = this.callbackStack[e] || {
                evtName: e,
                evtCbArr: [],
              }),
              this.callbackStack[e].evtCbArr.push({
                fn: t,
                ctx: void 0 !== i ? i : this,
              });
          },
          off: function (e, t) {
            if (
              void 0 !== this.callbackStack &&
              void 0 !== this.callbackStack[e]
            )
              for (
                var i = 0, r = this.callbackStack[e].evtCbArr.length;
                i < r;
                i++
              )
                this.callbackStack[e].evtCbArr[i].fn == t &&
                  (this.callbackStack[e].evtCbArr.splice(i, 1), i--, r--);
          },
          trigger: function (e) {
            g.warn("event.trigger is deprecated, please use .fire() from now"),
              this.fire(e);
          },
          fire: function (e) {
            if (this.callbackStack && void 0 !== this.callbackStack[e]) {
              for (
                var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              for (
                var s = 0, o = this.callbackStack[e].evtCbArr.length;
                s < o;
                s++
              )
                void 0 !== this.callbackStack[e].evtCbArr[s] &&
                  this.callbackStack[e].evtCbArr[s].fn.apply(
                    this.callbackStack[e].evtCbArr[s].ctx,
                    i
                  );
            }
          },
        },
        S = Array.prototype,
        C = Object.create(S),
        T = (Object.getOwnPropertyNames(C), []);
      function P() {
        for (var e = 0, t = T.length; e < t; e++) T[e]._resolveParentBatch();
        requestAnimationFrame(P);
      }
      requestAnimationFrame(P),
        y.on("force-resolve-binding", P),
        [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse",
        ].forEach(function (e) {
          var t = S[e];
          Object.defineProperty(S, e, {
            enumerable: !0,
            writable: !0,
            configurable: !0,
            value: function () {
              for (var i = arguments.length, r = new Array(i); i--; )
                r[i] = arguments[i];
              this.__ob__ && this.__ob__.disable();
              var s = t.apply(this, r);
              if (this.__ob__) {
                this.__ob__.enable();
                var o = void 0;
                switch (e) {
                  case "push":
                    if (r) {
                      for (
                        var n = this.length - r.length, a = 0;
                        a < r.length;
                        a++
                      )
                        this.__ob__.observe(this, n + a, r[a]),
                          this.__ob__.defineReactive(this, n + a, r[a]);
                      o = { index: n, numAdded: r.length, numRemoved: 0 };
                    }
                    break;
                  case "unshift":
                    r &&
                      (this.__ob__.observeArrayItems(r),
                      (o = { index: 0, numAdded: r.length, numRemoved: 0 }));
                    break;
                  case "splice":
                    this.__ob__.observeArrayItems(r.slice(2)),
                      (o = {
                        index: Number(r[0]),
                        numAdded: r.slice(2).length,
                        numRemoved: Number(r[1]),
                      });
                    break;
                  case "pop":
                    this.length > 0 &&
                      (o = {
                        index: this.length + r.length,
                        numAdded: 0,
                        numRemoved: 1,
                      });
                }
                this.__ob__.notify("change:arrayMethod", o, !0);
              }
              return s;
            },
          });
        });
      var z = (function () {
        function t(i, r, s) {
          e.classCallCheck(this, t),
            T.push(this),
            (this.obj = s),
            (this.enabled = !0),
            Object.defineProperty(this.obj, "__ob__", {
              value: this,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            }),
            (this.parents = []),
            (this.keysOnParent = []),
            void 0 !== i && this.parents.push(i),
            void 0 !== r && this.keysOnParent.push(r),
            v(this.obj)
              ? this.observeArrayItems(this.obj)
              : this.observeObjectKeys(this.obj);
        }
        return (
          (t.prototype.disable = function () {
            this.enabled = !1;
          }),
          (t.prototype.enable = function () {
            this.enabled = !0;
          }),
          (t.prototype.observeArrayItems = function (e) {
            for (var t = e.length; t--; )
              this.observe(this.obj, t, e[t]),
                this.defineReactive(this.obj, t, e[t]);
          }),
          (t.prototype.observeObjectKeys = function (e) {
            for (var t = Object.keys(e), i = t.length; i--; )
              this.defineReactive(this.obj, t[i], e[t[i]]);
          }),
          (t.prototype.defineReactive = function (e, t, i) {
            var r = this,
              s = Object.getOwnPropertyDescriptor(e, t);
            if (!s || !1 !== s.configurable) {
              s && s.get, s && s.set, this.observe(e, t, i);
              var o = "change:" + t;
              Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  return i;
                },
                set: function (s) {
                  s !== i &&
                    (null == s ||
                      "object" != typeof s ||
                      void 0 === s.__ob__ ||
                      s.__ob__.parents.includes(e) ||
                      (s.__ob__.parents.push(e), s.__ob__.keysOnParent.push(t)),
                    (i = s),
                    r.observe(e, t, s),
                    r.enabled && r.notify(o, null, !0));
                },
              });
            }
          }),
          (t.prototype.notify = function (e, t, i) {
            if (
              ((this._notifyBatchList = this._notifyBatchList || {}),
              void 0 !== this.callbackStack && void 0 !== this.callbackStack[e])
            )
              if (
                void 0 === t ||
                ("object" == typeof t &&
                  null !== t &&
                  (0 !== t.numAdded || 0 !== t.numRemoved))
              )
                this.fire(e, t);
              else {
                if (
                  void 0 !== this._notifyBatchList[e] &&
                  0 !== this._notifyBatchList[e]
                )
                  return;
                this._notifyBatchList[e] = 1;
              }
            if (
              !this._dirty ||
              ("object" == typeof t &&
                null !== t &&
                (0 !== t.numAdded || 0 !== t.numRemoved))
            ) {
              this._dirty = !0;
              for (var r = 0, s = this.parents.length; r < s; r++)
                void 0 !== this.parents[r].__ob__ &&
                  "props" !== this.keysOnParent[r] &&
                  this.parents[r].__ob__.notify(
                    (i ? "change:" : "subChange:") + this.keysOnParent[r],
                    t
                  );
            }
          }),
          (t.prototype._resolveParentBatch = function () {
            if (void 0 !== this._notifyBatchList) {
              for (
                var e = Object.keys(this._notifyBatchList), t = e.length;
                t--;

              ) {
                if (
                  0 !== this._notifyBatchList[e[t]] &&
                  void 0 !== this.callbackStack &&
                  void 0 !== this.callbackStack[e[t]]
                )
                  for (
                    var i = 0, r = this.callbackStack[e[t]].evtCbArr.length;
                    i < r;
                    i++
                  )
                    void 0 !== this.callbackStack[e[t]].evtCbArr[i] &&
                      this.callbackStack[e[t]].evtCbArr[i].fn.call(
                        this.callbackStack[e[t]].evtCbArr[i].ctx
                      );
                this._notifyBatchList[e[t]] = 0;
              }
              this._dirty = !1;
            }
          }),
          (t.prototype.observe = function (e, i, r) {
            if (null != r && "object" == typeof r && void 0 === r.__ob__)
              return "object" != typeof r || Object.isFrozen(r)
                ? void 0
                : new t(e, i, r);
          }),
          t
        );
      })();
      for (var E in b) z.prototype[E] = b[E];
      var k,
        M = 0,
        A = {
          _isInTemplate: function () {
            for (
              var e = !1, t = this;
              t.parentNode && t.parentNode !== document.body;

            ) {
              if (
                "TEMPLATE" === t.parentNode.tagName ||
                t.parentNode._isLightDom
              ) {
                e = !0;
                break;
              }
              t = t.parentNode;
            }
            return e;
          },
          createdCallback: function () {
            this._isInTemplate() ||
              ((this._isCreated = !0),
              (this._id = 0),
              (this.visible = !0),
              (this.context = {}),
              (this.props = {}),
              (this._savePropChange = {}),
              (this._delegateEvents = {}),
              void 0 === this._defaultProps &&
                (this._defaultProps = this.defaultProps),
              this._getPropsFromDefaultProps(),
              (this._events = this.events),
              (this._template = this.template),
              (this._styles =
                void 0 !== this.styles
                  ? this.styles.replace(/\:host/g, this.tagName.toLowerCase())
                  : null),
              (this._observer = new z(this, "props", this.props)),
              (this._defaultPropsChangeCallbacks = {}),
              this.bindMethods(["_onDelegateEvent", "_resize", "_resizeEnd"]),
              void 0 !== this.update &&
                (this._update = this._update.bind(this)),
              this.created && this.created());
          },
          attachedCallback: function () {
            var e = this;
            if (!this._isInTemplate() && this._isCreated) {
              this._deserializeAttributes(),
                this._retrieveLightDOM(),
                this._retrieveTemplate(),
                this._generateCompositedDOM();
              var t = function (t) {
                e._defaultProps[t] &&
                  e._defaultProps[t].change &&
                  (void 0 === e[e._defaultProps[t].change]
                    ? g.warn(
                        "Cannot bind change on undefined method:" +
                          e._defaultProps[t].change
                      )
                    : ((e._defaultPropsChangeCallbacks[t] = function (i) {
                        e._isAttached &&
                          (!1 !== e.visible
                            ? e[e._defaultProps[t].change](i)
                            : (e._savePropChange[t] = i
                                ? "object" == typeof e._savePropChange[t]
                                  ? e._savePropChange[t].push(i)
                                  : [i]
                                : 1));
                      }),
                      e.props.__ob__.on(
                        "change:" + t,
                        e._defaultPropsChangeCallbacks[t]
                      )));
              };
              for (var i in this._defaultProps) t(i);
              this.attached && this.attached(),
                this.fire("attached", this.index),
                (this._isAttached = !0),
                ((this._template &&
                  this._shadowDOM &&
                  this._isShadowDOMReady) ||
                  !this._template) &&
                  "TEMPLATE" !== this.tagName &&
                  this._ready();
            }
          },
          _getPropsFromDefaultProps: function () {
            for (var e in this._defaultProps)
              g.isObject(this._defaultProps[e]) &&
              void 0 !== this._defaultProps[e].value
                ? (this.props[e] = this._defaultProps[e].value)
                : (this.props[e] = this._defaultProps[e]);
          },
          _safeParseJSON: function (e, t) {
            try {
              return JSON.parse(e);
            } catch (i) {
              return void g.warn(
                "invalid value '" +
                  e +
                  "' for the '" +
                  t +
                  "' property; it must be Object type"
              );
            }
          },
          setProp: function (e, t) {
            if (
              void 0 !== this._defaultProps &&
              void 0 !== this._defaultProps[e] &&
              void 0 !== this.props &&
              this.props[e] !== t &&
              ("string" != typeof t || !/\{\{[^{}]*\}\}/g.test(t))
            )
              if (
                "object" != typeof this._defaultProps[e] ||
                null === this._defaultProps[e] ||
                ("object" == typeof this._defaultProps[e] &&
                  void 0 === this._defaultProps[e].type)
              )
                this.props[e] = t;
              else {
                if (this._defaultProps[e] && this._defaultProps[e].type) {
                  if (
                    ("array" == this._defaultProps[e].type ||
                      "arr" == this._defaultProps[e].type ||
                      "json" == this._defaultProps[e].type ||
                      "object" == this._defaultProps[e].type ||
                      "obj" == this._defaultProps[e].type) &&
                    t
                  )
                    if (
                      ("string" == typeof t && (t = this._safeParseJSON(t, e)),
                      "object" != typeof this.props[e] ||
                        null === this.props[e])
                    )
                      this.props[e] =
                        "object" == typeof t && null !== t ? t : JSON.parse(t);
                    else if (this.props[e] !== t)
                      if (
                        this.props[e] !== t &&
                        t.length &&
                        this.props[e].length === t.length &&
                        !t.__ob__
                      )
                        for (var i = 0; i < t.length; i++)
                          this.props[e][i] = t[i];
                      else this.props[e] = t;
                  ("string" !== this._defaultProps[e].type &&
                    "str" !== this._defaultProps[e].type) ||
                    (this.props[e] =
                      "string" == typeof t ? t : JSON.stringify(t)),
                    ("bool" !== this._defaultProps[e].type &&
                      "boolean" !== this._defaultProps[e].type) ||
                      (this.props[e] = !("false" === t || "" === t || !t)),
                    ("float" !== this._defaultProps[e].type &&
                      "f" !== this._defaultProps[e].type) ||
                      (this.props[e] =
                        "number" != typeof t ? parseFloat(t, 10) : t),
                    ("int" !== this._defaultProps[e].type &&
                      "i" !== this._defaultProps[e].type) ||
                      (this.props[e] =
                        "number" != typeof t ? parseInt(t, 10) : t >> 0),
                    ("func" !== this._defaultProps[e].type &&
                      "fn" !== this._defaultProps[e].type &&
                      "function" !== this._defaultProps[e].type) ||
                      ("function" == typeof t && (this.props[e] = t));
                }
                !0 === this._defaultProps[e].reflect &&
                  this.setAttribute(g.hyphenise(e), t);
              }
          },
          _deserializeAttributes: function () {
            for (var e = 0, t = this.attributes.length; e < t; e++) {
              var i = g.camelCalise(
                this.attributes[e].nodeName.replace(/^data\-/, "")
              );
              "" !== this.attributes[e].nodeValue &&
                this.setProp(i, this.attributes[e].nodeValue);
            }
          },
          _retrieveLightDOM: function () {
            var e = this;
            if (this._template && "TEMPLATE" !== this.tagName) {
              for (
                this._lightDOMUUID = M,
                  this._lightDOM = document.createDocumentFragment(),
                  this._lightDOM._isLightDom = !0;
                this.hasChildNodes();

              )
                this._lightDOM.appendChild(this.childNodes[0]);
              for (var t = 0, i = this._lightDOM.childNodes.length; t < i; t++)
                this._eachNodes(this._lightDOM.childNodes[t], function (t) {
                  t.attributes &&
                    t.setAttribute("light-dom-id", e._lightDOMUUID);
                });
              M++;
            }
          },
          _retrieveTemplate: function () {
            if ("TEMPLATE" !== this.tagName && this._template) {
              if (
                (this._styles &&
                  ((this._stylesTag = document.createElement("style")),
                  (this._stylesTag.innerHTML = this._styles),
                  this.appendChild(this._stylesTag)),
                (this._shadowDOM = document.createElement(
                  "template",
                  "light-core-template"
                )),
                this._shadowDOM.setAttribute("shadow-dom", ""),
                this._shadowDOM.setAttribute(
                  "parent-tag",
                  this.tagName.toLowerCase()
                ),
                (this._shadowDOM._scope = this.props),
                (this._shadowDOM._componentContext = this),
                (this._shadowDOM.context = this.context),
                (this._shadowDOM._$slot = this._lightDOM),
                (this._shadowDOM._slotuuid = this._lightDOMUUID),
                "string" == typeof this._template)
              ) {
                var e = document.createElement("div");
                for (
                  this._shadowDOM.content.appendChild(e),
                    e.innerHTML = this._template;
                  e.hasChildNodes();

                )
                  this._shadowDOM.content.appendChild(e.childNodes[0]);
                this._shadowDOM.content.removeChild(e);
              } else this._shadowDOM.content.appendChild(this._template);
              this.bindMethods(["_onShadowDOMReady"]),
                this._shadowDOM.on("ready", this._onShadowDOMReady, this);
            }
          },
          _eachNodes: function (e, t) {
            if (
              e &&
              (void 0 === e._$parentUUID ||
                void 0 === this._uuid ||
                e._$parentUUID == this._uuid) &&
              (t(e), e && "TEMPLATE" !== e.tagName)
            )
              for (var i = 0, r = e.childNodes.length; i < r; i++)
                e.childNodes[i] &&
                  8 != e.childNodes[i].nodeType &&
                  this._eachNodes(e.childNodes[i], t);
          },
          _generateCompositedDOM: function () {
            "TEMPLATE" !== this.tagName &&
              this._template &&
              this._shadowDOM &&
              this.appendChild(this._shadowDOM);
          },
          _ready: function () {
            (this._isReady = !0),
              this.fire("ready", this.index),
              this.ready && this.ready(),
              this.setAttribute("ready", ""),
              this._initEvents(),
              y.on("resize", this._resize, this),
              y.on("resizeend", this._resizeEnd, this),
              this._resize();
          },
          _onShadowDOMReady: function () {
            this._shadowDOM.off("ready", this._onShadowDOMReady, this),
              (this._isShadowDOMReady = !0),
              this._isAttached && !this._isReady && this._ready();
          },
          _initEvents: function () {
            for (var e in this._events)
              if (this._events.hasOwnProperty(e)) {
                var t = this._events[e],
                  i = e.split(" ");
                this._registerEvent(i[0], i[1], t);
              }
          },
          _registerEvent: function (e, t, i) {
            if (
              ("pointerenter" === e
                ? (e = "pointerover")
                : "pointerleave" === e && (e = "pointerout"),
              (e = /pointer/.test(e) ? s["multi" + e] : [e]),
              void 0 === this[i])
            )
              throw new Error(
                "oups, there isnt any " + i + " method defined for this view"
              );
            this.bindMethods(i);
            for (var r = 0; r < e.length; r++)
              void 0 === this._delegateEvents[e[r]] &&
                ((this._delegateEvents[e[r]] = []),
                this.addEventListener(e[r], this._onDelegateEvent)),
                this._delegateEvents[e[r]].push({
                  selector: t,
                  callback: this[i],
                });
          },
          _onDelegateEvent: function (e) {
            if (
              !(
                this._eventNeedsCheck &&
                ((/touch/.test(e.type) &&
                  /mouse/.test(this._eventNeedsCheckType)) ||
                  (/mouse/.test(e.type) &&
                    /touch/.test(this._eventNeedsCheckType))) &&
                Date.now() - this._eventNeedsCheckTime < 300
              )
            ) {
              "touchstart" === e.type ||
              "touchend" === e.type ||
              "mousedown" === e.type ||
              "mouseup" === e.type
                ? ((this._eventNeedsCheckType = e.type),
                  (this._eventNeedsCheck = !0),
                  (this._eventNeedsCheckTime = Date.now()))
                : (this._eventNeedsCheck = !1);
              for (
                var t = this._delegateEvents[e.type], i = !1, r = 0;
                r < t.length;
                r++
              ) {
                if (i) {
                  g.notify("Event propagation has been stopped");
                  break;
                }
                if (t[r].selector)
                  for (
                    var s = e.relatedTarget, o = e.target;
                    o && o !== this;

                  ) {
                    if (
                      (("string" == typeof t[r].selector &&
                        o.classList &&
                        o.classList.contains(t[r].selector.replace(".", ""))) ||
                        t[r].selector === o) &&
                      (("mouseover" !== e.type && "mouseout" !== e.type) ||
                        !o.contains(s))
                    ) {
                      var n = g.clone(e);
                      (n.currentTarget = o),
                        (n.stopPropagation = function () {
                          i = !0;
                        }),
                        t[r].callback(n);
                    }
                    o = o.parentNode;
                  }
                else t[r].callback(e);
              }
            }
          },
          _removeEvents: function () {
            for (var e in this._delegateEvents)
              this.removeEventListener(e, this._onDelegateEvent);
            void 0 !== this.update &&
              y.off("requestAnimationFrame", this._update, this),
              y.off("resize", this._resize, this),
              y.off("resizeend", this._resizeEnd, this);
          },
          detachedCallback: function () {
            for (var e in ((this._isReady = !1),
            (this._isAttached = !1),
            this._shadowDOM &&
              ((this._isShadowDOMReady = !1),
              this._shadowDOM.off("ready", this._onShadowDOMReady, this)),
            clearTimeout(this._afterResizeTimer),
            (this._observer = null),
            this._removeEvents(),
            this._defaultPropsChangeCallbacks))
              this.props.__ob__.off(
                "change:" + e,
                this._defaultPropsChangeCallbacks[e]
              );
            void 0 !== this.detached && this.detached();
          },
          _resize: function () {
            var e = this;
            this._isReady &&
              (this.resize && this.resize(),
              (this._afterResizeTimer = setTimeout(function () {
                e._resized();
              }, 0)));
          },
          _resized: function () {
            this._isReady &&
              ("function" == typeof this.resized && this.resized(),
              this.fire("resized"),
              void 0 !== this.update &&
                (y.off("requestAnimationFrame", this._update, this),
                y.on("requestAnimationFrame", this._update, this)));
          },
          _resizeEnd: function () {
            "function" == typeof this.resizeEnd && this.resizeEnd();
          },
          _update: function () {
            this.visible && this.update();
          },
          _enable: function () {
            if (((this.visible = !0), this.classList))
              this.classList.remove("is-disabled");
            else {
              for (
                var e = " " + (this.getAttribute("class") || "") + " ",
                  t = " is-disabled ";
                e.indexOf(t) >= 0;

              )
                e = e.replace(t, " ");
              this.setAttribute("class", e.trim());
            }
            for (var i in (this.removeAttribute("is-disabled"),
            this._shadowDOM && this._shadowDOM.enable(),
            this._savePropChange))
              if ("object" == typeof this._savePropChange[i])
                for (var r = 0, s = this._savePropChange[i].length; r < s; r++)
                  this.props.__ob__.fire(
                    "change:" + i,
                    this._savePropChange[i][r]
                  );
              else this.props.__ob__.fire("change:" + i);
            this.enable && this.enable();
          },
          _disable: function () {
            if (((this.visible = !1), this.classList))
              this.classList.add("is-disabled");
            else {
              var e = " " + (this.getAttribute("class") || "") + " ";
              e.indexOf(" is-disabled ") < 0 &&
                this.setAttribute("class", (e + "is-disabled").trim());
            }
            this.setAttribute("is-disabled", ""),
              this._shadowDOM && this._shadowDOM.disable(),
              this.disable && this.disable();
          },
          bindMethods: function (e) {
            for (
              var t = 0,
                i = (e =
                  "object" == typeof e && null !== e && e.length ? e : [e])
                  .length;
              t < i;
              t++
            ) {
              var r = this[e[t]];
              this[e[t]] = r.bind(this);
            }
          },
        };
      "function" != typeof HTMLElement
        ? ((k = function () {}).prototype = document.createElement("div"))
        : (k = HTMLElement);
      var L = (function (t) {
        function i() {
          return (
            e.classCallCheck(this, i),
            e.possibleConstructorReturn(this, t.apply(this, arguments))
          );
        }
        return e.inherits(i, t), i;
      })(k);
      for (var O in A) L.prototype[O] = A[O];
      for (var D in b) L.prototype[D] = b[D];
      var N = /\((.*?)\)/g,
        R = /(\(\?)?:\w+/g,
        j = /\*\w+/g,
        F = /[\-{}\[\]+?.,\\\^$|#\s]/g,
        I = {
          states: {},
          _routeToRegExp: function (e) {
            return (
              (e = e
                .replace(F, "\\$&")
                .replace(N, "(?:$1)?")
                .replace(R, function (e, t) {
                  return t ? e : "([^/?]+)";
                })
                .replace(j, "([^?]*?)")),
              new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            );
          },
          add: function (e, t) {
            if (
              "object" ==
              typeof (t = g.extend({ controller: null, route: null }, t || {}))
                .controller
            ) {
              var i = t.controller,
                r = t.method || "index";
              t.controller = i[r].bind(i);
            }
            return (
              t.route &&
                ((t.regExp = this._routeToRegExp(t.route)),
                (t.paramList = this._extractParamsFromRoute(t.route))),
              (this.states[e] = t),
              this
            );
          },
          initialize: function (e) {
            (this.lastState = null),
              (this.base =
                window.location.protocol +
                "//" +
                window.location.host +
                window.location.pathname +
                window.location.search),
              y.on("statechange", this.onStateChange, this),
              window.addEventListener(
                "hashchange",
                this._onHashChange.bind(this)
              );
          },
          onStateChange: function (e, t) {
            var i = this;
            e in this.states &&
              (this.states[e].route &&
                (clearTimeout(this.bypassTimer),
                (this.bypass = !0),
                (window.location.hash = "#" + this.hrefFromParams(e, t)),
                (this.bypassTimer = setTimeout(
                  function () {
                    i.bypass = !1;
                  },
                  50,
                  this
                ))),
              this.states[e].controller && this.states[e].controller(t));
          },
          _extractParamsFromRoute: function (e) {
            for (var t = e.match(R), i = 0; i < t.length; i++)
              t[i] = t[i].replace(":", "");
            return t;
          },
          hrefFromParams: function (e, t) {
            if (!e in this.states) return "no state found :: " + e;
            if (!this.states[e].route) return "no route found";
            var i = this.states[e].route;
            for (var r in t) {
              var s = new RegExp("(\\(\\?)?:" + r, "g");
              new RegExp("\\([]\\)", "g"),
                (i = i.replace(s, t[r]).replace(/(\(|\))/g, ""));
            }
            return i;
          },
          getHashState: function () {
            this._onHashChange();
          },
          _onHashChange: function () {
            if (!this.bypass) {
              var e = this.getState(),
                t = [];
              for (var i in this.states)
                if (this.states[i].regExp && this.states[i].regExp.test(e)) {
                  e.replace(this.states[i].regExp, function () {
                    for (var e = 1; e < arguments.length - 3; e++)
                      void 0 === arguments[e]
                        ? t.push("")
                        : t.push(arguments[e]);
                  });
                  for (var r = {}, s = 0; s < t.length; s++)
                    r[this.states[i].paramList[s]] = t[s];
                  y.fire("statechange", [i, r]);
                  break;
                }
            }
          },
          getState: function () {
            return document.location.hash.replace(/^#\!?\/?/, "");
          },
        },
        U = [
          "drag",
          "dragend",
          "pointerenter",
          "pointerleave",
          "pointerdown",
          "pointerup",
          "pointermove",
          "click",
          "keyup",
          "keydown",
          "keypress",
          "blur",
          "change",
          "focus",
          "submit",
          "resize",
          "scroll",
        ],
        H = new RegExp(
          "^(" +
            "window,Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat,typeof,void".replace(
              /,/g,
              "\\b|"
            ) +
            "\\b)"
        ),
        B = (function () {
          function t(i, r, s, o) {
            if (
              (e.classCallCheck(this, t),
              (this.enabled = !0),
              (this.node = i),
              (this.attrName = r),
              (this.content = s),
              (this.template = o),
              (this.stringParts = []),
              (this.numStringParts = 0),
              (this.lightDom = []),
              (this.isTextNode = !i.attributes),
              (this.removableAttr = !1),
              (this.onPathChange = this.onPathChange.bind(this)),
              this.isTextNode)
            ) {
              if (/\{\{\s*\@/.test(this.content)) {
                var n = document.createElement("span");
                (this.content = this.content.replace(/\{\{\s*\@/, "{{")),
                  this.node.parentNode
                    ? (this.node.parentNode.replaceChild(n, this.node),
                      (this.node = n))
                    : ((this.oldNode = this.node),
                      (this._onDOMNodeInserted =
                        this._onDOMNodeInserted.bind(this)),
                      this.oldNode.addEventListener(
                        "DOMNodeInserted",
                        this._onDOMNodeInserted,
                        !1
                      )),
                  (this.node = n);
              }
            } else
              this.node.setAttribute("has-binding", ""),
                /^\:/.test(this.attrName) &&
                  ((this.removableAttr = !0),
                  (this.attrName = this.attrName.replace(/^\:/, "")),
                  this.node.removeAttribute(":" + this.attrName)),
                (this.formatedPropName = g.camelCalise(
                  this.attrName.replace("data-", "")
                ));
            this.parseExpression(), this.attachListeners(), this.onPathChange();
          }
          return (
            (t.prototype._onDOMNodeInserted = function () {
              this.oldNode.removeEventListener(
                "DOMNodeInserted",
                this._onDOMNodeInserted,
                !1
              ),
                this.oldNode.parentNode &&
                  this.oldNode.parentNode.replaceChild(this.node, this.oldNode);
            }),
            (t.prototype.attachListeners = function () {
              for (var e = 0, t = this.numStringParts; e < t; e++)
                if ("expression" === this.stringParts[e].type)
                  for (
                    var i = 0, r = this.stringParts[e].value.pathRoots.length;
                    i < r;
                    i++
                  ) {
                    var s = !1;
                    if (
                      (null !== this.template._item &&
                        "$value" === this.stringParts[e].value.pathRoots[i] &&
                        ((s = !0),
                        this.template._item.__ob__.on(
                          "subChange:" + this.template.props.itemIndex,
                          this.onPathChange
                        ),
                        this.template._item.__ob__.on(
                          "change:" + this.template.props.itemIndex,
                          this.onPathChange
                        )),
                      null !== this.template.props.repeaterKey)
                    )
                      for (var o in this.template.props.repeaterKey)
                        this.stringParts[e].value.pathRoots[i] === o &&
                          null !==
                            this.template.props.repeaterKey[o]
                              .repeaterParentProps.repeat &&
                          ((s = !0),
                          this.template.props.repeaterKey[
                            o
                          ].repeaterParentProps.repeat.__ob__.on(
                            "subChange:" +
                              this.template.props.repeaterKey[o].repeaterProps
                                .itemIndex,
                            this.onPathChange
                          ),
                          this.template.props.repeaterKey[
                            o
                          ].repeaterParentProps.repeat.__ob__.on(
                            "change:" +
                              this.template.props.repeaterKey[o].repeaterProps
                                .itemIndex,
                            this.onPathChange
                          ));
                    if (null !== this.template.props.repeaterIndex)
                      for (var n in this.template.props.repeaterIndex)
                        this.stringParts[e].value.pathRoots[i] === n &&
                          null !==
                            this.template.props.repeaterIndex[n]
                              .repeaterParentProps.repeat &&
                          ((s = !0),
                          this.template.props.__ob__.on(
                            "subChange:itemIndex",
                            this.onPathChange
                          ),
                          this.template.props.__ob__.on(
                            "change:itemIndex",
                            this.onPathChange
                          ));
                    s ||
                      (this.template._scope.__ob__.on(
                        "subChange:" + this.stringParts[e].value.pathRoots[i],
                        this.onPathChange
                      ),
                      this.template._scope.__ob__.on(
                        "change:" + this.stringParts[e].value.pathRoots[i],
                        this.onPathChange
                      ));
                  }
            }),
            (t.prototype.parseExpression = function () {
              var e = this,
                t = 0;
              this.content.replace(/\{\{[^{}]*\}\}/g, function (i, r, s) {
                "" != e.content.slice(t, r) &&
                  e.stringParts.push({
                    type: "string",
                    value: e.content.slice(t, r),
                  }),
                  (t = r + i.length);
                var o = i.replace(/(\{\{|\}\})/g, "");
                /\sin\s/g.test(o) &&
                  (o = o.replace(
                    /(?:(\S+)\s?\,)?\s?(\S*)\s+in\s+/g,
                    function (t, i, r) {
                      return (
                        (e.node._repeaterKey = r),
                        void 0 !== i && (e.node._repeaterIndex = i),
                        ""
                      );
                    }
                  )),
                  e.stringParts.push({
                    type: "expression",
                    expression: o,
                    value: e._makeGetterFn(o),
                  });
              }),
                t < this.content.length &&
                  !/^\s+$/g.test(this.content.slice(t)) &&
                  this.stringParts.push({
                    type: "string",
                    value: this.content.slice(t),
                  }),
                (this.numStringParts = this.stringParts.length);
            }),
            (t.prototype._makeGetterFn = function (e) {
              var t = this,
                i = [],
                r = e.replace(
                  /((?:\.[A-Za-z_$][a-zA-Z0-9\_\$]*)|(?:['][^']*[']|["][^"]*["]))|([A-Za-z_$][a-zA-Z0-9\_\$]*)/g,
                  function (e, r, s, o) {
                    return H.test(s)
                      ? e
                      : (i.push(s),
                        "$index" === s
                          ? "this.props.itemIndex"
                          : "$value" === s
                          ? "(this._item && this._item[this.props.itemIndex] ? this._item[this.props.itemIndex] : {})"
                          : "$length" === s
                          ? "this.props.itemLength"
                          : null !== t.template.props.repeaterKey &&
                            s in t.template.props.repeaterKey
                          ? '(this.props.repeaterKey["' +
                            s +
                            '"].repeaterParentProps.repeat[this.props.repeaterKey["' +
                            s +
                            '"].repeaterProps.itemIndex] !== void 0 ? this.props.repeaterKey["' +
                            s +
                            '"].repeaterParentProps.repeat[this.props.repeaterKey["' +
                            s +
                            '"].repeaterProps.itemIndex] : {})'
                          : null !== t.template.props.repeaterIndex &&
                            s in t.template.props.repeaterIndex
                          ? '(this.props.repeaterIndex["' +
                            s +
                            '"].repeaterProps.itemIndex !== void 0 ? this.props.repeaterIndex["' +
                            s +
                            '"].repeaterProps.itemIndex : 0)'
                          : void 0 !== s
                          ? "this._scope." + s
                          : e);
                  }
                );
              try {
                return {
                  fn: new Function([], "return " + r + ";"),
                  pathRoots: i,
                };
              } catch (e) {
                return (
                  g.warn(
                    "Invalid expression. Generated function body: " +
                      repeaterKey +
                      "\n" +
                      r
                  ),
                  { fn: function () {}, pathRoots: i }
                );
              }
            }),
            (t.prototype.disable = function () {
              this.enabled = !1;
            }),
            (t.prototype.enable = function () {
              (this.enabled = !0),
                this._needsUpdate &&
                  ((this._needsUpdate = !1), this.onPathChange());
            }),
            (t.prototype.destroy = function () {
              this.oldNode &&
                this.oldNode.removeEventListener(
                  "DOMNodeInserted",
                  this._onDOMNodeInserted
                );
              for (var e = 0, t = this.numStringParts; e < t; e++)
                if ("expression" === this.stringParts[e].type)
                  for (
                    var i = 0, r = this.stringParts[e].value.pathRoots.length;
                    i < r;
                    i++
                  ) {
                    var s = !1;
                    if (
                      (null !== this.template._item &&
                        "$value" === this.stringParts[e].value.pathRoots[i] &&
                        ((s = !0),
                        this.template._item.__ob__.off(
                          "subChange:" + this.template.props.itemIndex,
                          this.onPathChange
                        ),
                        this.template._item.__ob__.off(
                          "change:" + this.template.props.itemIndex,
                          this.onPathChange
                        )),
                      null !== this.template.props.repeaterKey)
                    )
                      for (var o in this.template.props.repeaterKey)
                        this.stringParts[e].value.pathRoots[i] === o &&
                          null !==
                            this.template.props.repeaterKey[o]
                              .repeaterParentProps.repeat &&
                          ((s = !0),
                          this.template.props.repeaterKey[
                            o
                          ].repeaterParentProps.repeat.__ob__.off(
                            "subChange:" +
                              this.template.props.repeaterKey[o].repeaterProps
                                .itemIndex,
                            this.onPathChange
                          ),
                          this.template.props.repeaterKey[
                            o
                          ].repeaterParentProps.repeat.__ob__.off(
                            "change:" +
                              this.template.props.repeaterKey[o].repeaterProps
                                .itemIndex,
                            this.onPathChange
                          ));
                    if (null !== this.template.props.repeaterIndex)
                      for (var n in this.template.props.repeaterIndex)
                        this.stringParts[e].value.pathRoots[i] === n &&
                          null !==
                            this.template.props.repeaterIndex[n]
                              .repeaterParentProps.repeat &&
                          ((s = !0),
                          this.template.props.__ob__.off(
                            "subChange:itemIndex",
                            this.onPathChange
                          ),
                          this.template.props.__ob__.off(
                            "change:itemIndex",
                            this.onPathChange
                          ));
                    s ||
                      (this.template._scope.__ob__.off(
                        "subChange:" + this.stringParts[e].value.pathRoots[i],
                        this.onPathChange
                      ),
                      this.template._scope.__ob__.off(
                        "change:" + this.stringParts[e].value.pathRoots[i],
                        this.onPathChange
                      ));
                  }
            }),
            (t.prototype.safeExecuteGetterFn = function (e, t, i, r, s) {
              try {
                return this.stringParts[e].value.fn.call(this.template);
              } catch (e) {
                return;
              }
            }),
            (t.prototype.onPathChange = function () {
              if (
                !1 === this.enabled ||
                (void 0 !== this.node.visible && !1 === this.node.visible)
              )
                this._needsUpdate = !0;
              else if ("is" === this.attrName) {
                var e;
                if (
                  (e = this.safeExecuteGetterFn(0)) &&
                  e !== this.node.tagName.toLowerCase()
                ) {
                  for (
                    var t = document.createElement(e),
                      i = 0,
                      r = this.node.attributes.length;
                    i < r;
                    i++
                  )
                    "is" !== this.node.attributes[i].nodeName &&
                      t.setAttribute(
                        this.node.attributes[i].nodeName,
                        this.node.attributes[i].nodeValue
                      );
                  if (this.node.hasAttribute("root-node")) {
                    var s = Number(this.node.getAttribute("root-node"));
                    t.setAttribute("root-node", s),
                      (this.template._nodes[s] = t);
                  }
                  if (
                    (this.template._preCheckNode(t),
                    this.node.parentNode &&
                      (this.node.nextSibling
                        ? this.node.parentNode.insertBefore(
                            t,
                            this.node.nextSibling
                          )
                        : this.node.parentNode.appendChild(t)),
                    this.template._postCheckNode(t),
                    this.template._checkContent(t),
                    0 === this.lightDom.length)
                  )
                    for (var o = 0; o < this.node.childNodes.length; o++)
                      this.lightDom.push(this.node.childNodes[o]);
                  for (var n = 0; n < this.lightDom.length; n++)
                    t.appendChild(this.lightDom[n]);
                  this.node.parentNode &&
                    this.node.parentNode.removeChild(this.node),
                    (this.node = t);
                }
              } else if (
                this.isTextNode ||
                void 0 === this.node._defaultProps ||
                void 0 === this.node._defaultProps[this.formatedPropName]
              ) {
                if (
                  ((this.oldValue = this.newValue),
                  1 === this.numStringParts &&
                    "expression" === this.stringParts[0].type)
                )
                  (this.newValue = this.safeExecuteGetterFn(0)),
                    null !== this.newValue &&
                      "object" == typeof this.newValue &&
                      (this.newValue = JSON.stringify(this.newValue));
                else
                  for (this.newValue = "", d = 0; d < this.numStringParts; d++)
                    "expression" === this.stringParts[d].type
                      ? (this.newValue += this.safeExecuteGetterFn(d))
                      : (this.newValue += this.stringParts[d].value);
                if (this.isTextNode)
                  void 0 !== this.node.innerHTML
                    ? this.node.innerHTML !== this.newValue &&
                      (this.node.innerHTML = this.newValue)
                    : void 0 !== this.node.parentNode &&
                      this.node.textContent !== this.newValue &&
                      (this.node.textContent = this.newValue);
                else if (
                  !this.removableAttr ||
                  ("false" !== this.newValue && this.newValue)
                )
                  if (
                    ("$" == this.attrName.charAt(0) &&
                      (this.node.removeAttribute(this.attrName),
                      (this.attrName = this.attrName.replace("$", ""))),
                    "set-class" === this.attrName)
                  ) {
                    if (void 0 !== this.oldValue)
                      for (
                        var a = this.oldValue.split(" "), h = 0, l = a.length;
                        h < l;
                        h++
                      )
                        a[h].length && this.node.classList.remove(a[h]);
                    for (
                      var p = this.newValue.split(" "), c = 0, u = p.length;
                      c < u;
                      c++
                    )
                      p[c].length && this.node.classList.add(p[c]);
                  } else
                    this.oldValue !== this.newValue &&
                      this.node.setAttribute(this.attrName, this.newValue);
                else
                  this.node.removeAttribute(this.attrName),
                    this.node.removeAttribute(":" + this.attrName);
              } else {
                if (
                  1 === this.numStringParts &&
                  "expression" === this.stringParts[0].type
                )
                  this.newValue = this.safeExecuteGetterFn(0);
                else {
                  this.newValue = "";
                  for (var d = 0; d < this.numStringParts; d++)
                    if ("expression" === this.stringParts[d].type) {
                      var m = this.safeExecuteGetterFn(d);
                      this.newValue +=
                        "object" == typeof m ? JSON.stringify(m) : m;
                    } else this.newValue += this.stringParts[d].value;
                }
                void 0 !== this.newValue &&
                  this.node.setProp(this.formatedPropName, this.newValue);
              }
            }),
            t
          );
        })(),
        q = 0;
      void 0 === window.HTMLTemplateElement &&
        (document.implementation.createHTMLDocument("template"),
        (window.HTMLTemplateElement = function () {}),
        (window.HTMLTemplateElement.prototype = Object.create(
          HTMLElement.prototype
        )));
      var $ = /[&\u00A0<>]/g;
      function V(e) {
        switch (e) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case " ":
            return "&nbsp;";
        }
      }
      var Y,
        W = {
          onItemIndexChange: function () {
            this._scope.__ob__.fire("change:$index");
          },
          onItemLengthChange: function () {
            this._scope.__ob__.fire("change:$length");
          },
          onRepeaterKeyChange: function () {
            for (var e in (this._scope.__ob__.fire("change:$value"),
            this.props.repeaterKey))
              this.props.repeaterKey[e].repeaterParentProps.repeat.__ob__.fire(
                "subChange:" + this.props.repeaterKey[e].repeaterProps.itemIndex
              ),
                this.props.repeaterKey[
                  e
                ].repeaterParentProps.repeat.__ob__.fire(
                  "change:" + this.props.repeaterKey[e].repeaterProps.itemIndex
                );
          },
          onRepeaterIndexChange: function () {
            this._scope.__ob__.fire("change:$index");
          },
          detached: function () {
            if (this._nodes && this._nodes.length > 0)
              for (; this._nodes[0]; )
                null != this._nodes[0].parentNode &&
                  this._nodes[0].parentNode.removeChild(this._nodes[0]),
                  this._nodes.splice(0, 1);
            if (this._templateNodes && this._templateNodes.length > 0)
              for (; this._templateNodes[0]; )
                null !== this._templateNodes[0].parentNode &&
                  void 0 !== this._templateNodes[0].parentNode &&
                  this._templateNodes[0].parentNode.removeChild(
                    this._templateNodes[0]
                  ),
                  this._templateNodes.splice(0, 1);
            if (void 0 !== this._watchers)
              for (var e = 0; e < this._watchers.length; e++)
                this._watchers[e].destroy();
            this._watchers = [];
          },
          _retrieveLightDom: function () {},
          _retrieveTemplate: function () {},
          created: function () {
            (this._uuid = q++),
              void 0 === this.content &&
                ((this.content = document.createDocumentFragment()),
                (this.isPolyfilled = !0)),
              (this._rootNode = this),
              (this._isCreated = !0),
              (this._nodes = []),
              (this._originPreviousSibling = null),
              (this._originNextSibling = null),
              (this._item = null),
              (this._repeaterKey = null),
              (this._repeaterIndex = null),
              (this._scope = null),
              (this._watchers = []),
              (this._templateNodes = []),
              (this._templateNodeReady = 0),
              Object.defineProperty(this, "innerHTML", {
                get: function () {
                  for (
                    var e = "", t = this.content.firstChild;
                    t;
                    t = t.nextSibling
                  )
                    e += t.outerHTML || t.data.replace($, V);
                  return e;
                },
                set: function (e) {
                  for (; this.content.firstChild; )
                    this.content.removeChild(this.content.firstChild);
                  var t = document.createElement("div");
                  for (
                    this.content.appendChild(t), t.innerHTML = e;
                    t.hasChildNodes();

                  )
                    this.content.appendChild(t.childNodes[0]);
                  this.content.removeChild(t);
                },
                configurable: !0,
              });
          },
          appendChild: function (e) {
            this.content.appendChild(e);
          },
          insertBefore: function (e, t) {
            this.content.appendChild(e, t);
          },
          removeChild: function (e) {
            this.content.removeChild(e);
          },
          ready: function () {},
          attached: function () {
            if (
              (this._originNextSibling ||
                (this._originNextSibling = this.nextSibling),
              this._originPreviousSibling ||
                (this._originPreviousSibling = this.previousSibling),
              (this._isAttached = !0),
              this.isPolyfilled)
            )
              for (; this.hasChildNodes(); )
                this.content.appendChild(this.childNodes[0]);
            (this.hasRepeatAttr =
              this.hasAttribute("repeat") || this.hasAttribute("data-repeat")),
              null !== this.props.if &&
                (this.hasRepeatAttr
                  ? this.onRepeatChange()
                  : this.onIfChange());
          },
          _passContext: function (e) {
            e.tagName && void 0 !== e.context && (e.context = this.context);
          },
          _scopeNode: function (e) {
            if (
              e.tagName &&
              "TEMPLATE" === e.tagName &&
              null === e.getAttribute("shadow-dom") &&
              ((e._scope = this._scope),
              (e._componentContext = this._componentContext),
              (e._$slot = this._$slot),
              (e._slotuuid = this._slotuuid),
              null !== this._item && e.props)
            ) {
              for (var t in ((e._item = this._item),
              (e.props.itemIndex = this.props.itemIndex),
              (e.props.itemLength = this.props.itemLength),
              (e.props.repeaterKey = {}),
              (e.props.repeaterIndex = {}),
              this.props.repeaterKey))
                e.props.repeaterKey[t] = this.props.repeaterKey[t];
              for (var i in this.props.repeaterIndex)
                e.props.repeaterIndex[i] = this.props.repeaterIndex[i];
            }
            e._$parentUUID = this._uuid;
          },
          _addNodesToDom: function () {
            this._isAddingNodes = !0;
            for (
              var e = this._rootNode.nextSibling, t = 0;
              t < this.content.childNodes.length;
              t++
            )
              if (8 != this.content.childNodes[t].nodeType) {
                var i = document.importNode(this.content.childNodes[t], !0);
                (this._nodes[t] = i),
                  1 == i.nodeType && i.setAttribute("root-node", t),
                  this._preCheckNode(this._nodes[t]),
                  this.parentNode &&
                    (e
                      ? this.parentNode.insertBefore(this._nodes[t], e)
                      : this.parentNode.appendChild(this._nodes[t]),
                    (this._rootNode = this._nodes[t])),
                  this._postCheckNode(this._nodes[t]),
                  this._checkContent(this._nodes[t]);
              }
            this._ready(), (this._isTemplateReady = !0);
          },
          _preCheckNode: function (e, t, i) {
            var r = this;
            this._eachNodes(e, function (e) {
              8 != e.nodeType &&
                (r._scopeNode(e), r._passContext(e), r._checkBindingOnNode(e));
            });
          },
          _postCheckNode: function (e, t, i) {},
          _checkContent: function (e) {
            var t = this;
            this._eachNodes(e, function (e) {
              8 != e.nodeType &&
                (!e.tagName ||
                  ("content" !== e.tagName.toLowerCase() &&
                    "slot" !== e.tagName.toLowerCase()) ||
                  e.parentNode.replaceChild(t._$slot, e));
            });
          },
          onRepeatChange: function (e) {
            if (this.props.if && null !== this.props.repeat) {
              if (
                (null == e &&
                  (((e = {}).index = 0),
                  (e.numRemoved = this._templateNodes.length),
                  (e.numAdded = this.props.repeat.length)),
                e.numRemoved > 0)
              ) {
                for (var t = e.index; t < e.index + e.numRemoved; t++)
                  this._templateNodes[t] &&
                    (this._templateNodes[t].setAttribute("is-dead-node", ""),
                    void 0 !== this._templateNodes[t].parentNode &&
                      null !== this._templateNodes[t].parentNode &&
                      this._templateNodes[t].parentNode.removeChild(
                        this._templateNodes[t]
                      ),
                    (this._templateNodes[t] = null));
                this._templateNodes.splice(e.index, e.numRemoved);
              }
              for (var i = 0; i < this._templateNodes.length; i++) {
                if (
                  ((this._templateNodes[i].props.itemIndex = i),
                  (this._templateNodes[i].props.itemLength =
                    this.props.repeat.length),
                  this._templateNodes[i].setAttribute("_repeater-index", i),
                  null !== this._repeaterKey)
                ) {
                  for (var r in this.props.repeaterKey)
                    this._templateNodes[i].props.repeaterKey[r] =
                      this.props.repeaterKey[r];
                  this._templateNodes[i].props.repeaterKey[this._repeaterKey] =
                    {
                      repeaterParentProps: this.props,
                      repeaterProps: this._templateNodes[i].props,
                    };
                }
                if (null !== this._repeaterIndex) {
                  for (var s in this.props.repeaterIndex)
                    this._templateNodes[i].props.repeaterIndex[s] =
                      this.props.repeaterIndex[s];
                  this._templateNodes[i].props.repeaterIndex[
                    this._repeaterIndex
                  ] = {
                    repeaterParentProps: this.props,
                    repeaterProps: this._templateNodes[i].props,
                  };
                }
              }
              if (e.numAdded > 0) {
                var o;
                if (this._templateNodes.length > 0) {
                  var n = this._templateNodes[this._templateNodes.length - 1];
                  o =
                    n._nodes.length > 0
                      ? n._nodes[n._nodes.length - 1].nextSibling
                      : n.nextSibling;
                } else o = this.nextSibling;
                for (var a = e.index; a < e.index + e.numAdded; a++) {
                  var h = document.createElement(
                    "template",
                    "light-core-template"
                  );
                  h.setAttribute("_repeater-index", a);
                  for (var l = 0; l < this.content.childNodes.length; l++)
                    h.content.appendChild(
                      this.content.childNodes[l].cloneNode(!0)
                    );
                  if (
                    ((h._scope = this._scope),
                    (h._componentContext = this._componentContext),
                    (h._$slot = this._$slot),
                    (h._slotuuid = this._slotuuid),
                    (h.props.itemIndex = a),
                    (h.props.itemLength = this.props.repeat.length),
                    (h.props.repeaterKey = {}),
                    (h.props.repeaterIndex = {}),
                    "object" == typeof this.props.repeat &&
                      (h._item = this.props.repeat),
                    null !== this._repeaterKey)
                  ) {
                    for (var p in this.props.repeaterKey)
                      h.props.repeaterKey[p] = this.props.repeaterKey[p];
                    h.props.repeaterKey[this._repeaterKey] = {
                      repeaterParentProps: this.props,
                      repeaterProps: h.props,
                    };
                  }
                  if (null !== this._repeaterIndex) {
                    for (var c in this.props.repeaterIndex)
                      h.props.repeaterIndex[c] = this.props.repeaterIndex[c];
                    h.props.repeaterIndex[this._repeaterIndex] = {
                      repeaterParentProps: this.props,
                      repeaterProps: h.props,
                    };
                  }
                  this._templateNodes.push(h),
                    void 0 !== this.parentNode &&
                      null !== this.parentNode &&
                      (o
                        ? o.parentNode.insertBefore(h, o)
                        : this.parentNode.appendChild(h));
                }
              }
            } else this.onIfChange();
          },
          enable: function () {
            if (this.props.repeat)
              for (var e = this._templateNodes.length; e--; )
                this._templateNodes[e]._enable();
            else {
              for (var t = this._nodes.length; t--; )
                this._eachNodes(this._nodes[t], function (e) {
                  if (
                    (e._enable ? e._enable() : (e.visible = !0),
                    1 == e.nodeType)
                  ) {
                    if (e.classList) e.classList.remove("is-disabled");
                    else {
                      for (
                        var t = " " + (e.getAttribute("class") || "") + " ",
                          i = " is-disabled ";
                        t.indexOf(i) >= 0;

                      )
                        t = t.replace(i, " ");
                      e.setAttribute("class", t.trim());
                    }
                    e.removeAttribute("is-disabled");
                  }
                });
              for (var i = 0; i < this._watchers.length; i++)
                this._watchers[i].enable();
            }
          },
          disable: function () {
            for (var e = 0; e < this._watchers.length; e++)
              this._watchers[e].disable();
            if (this.props)
              if (this.props.repeat)
                for (var t = this._templateNodes.length; t--; )
                  this._templateNodes[t]._disable();
              else
                for (var i = this._nodes.length; i--; )
                  this._eachNodes(this._nodes[i], function (e) {
                    if (
                      (e._disable ? e._disable() : (e.visible = !1),
                      1 == e.nodeType)
                    ) {
                      if (e.classList) e.classList.add("is-disabled");
                      else {
                        var t = " " + (e.getAttribute("class") || "") + " ";
                        t.indexOf(" is-disabled ") < 0 &&
                          e.setAttribute("class", (t + "is-disabled").trim());
                      }
                      e.setAttribute("is-disabled", "");
                    }
                  });
          },
          onIfChange: function () {
            if (this.props.if)
              this.hasRepeatAttr
                ? this.props.repeat && this.onRepeatChange()
                : 0 === this._nodes.length
                ? this._addNodesToDom()
                : this.enable();
            else if (!0 === this.props.removeNodes) {
              for (var e = 0; e < this._watchers.length; e++)
                this._watchers[e].destroy();
              this._watchers = [];
              for (var t = 0; t < this._nodes.length; t++)
                void 0 !== this._nodes[t] &&
                  this._nodes[t].parentNode &&
                  this._nodes[t].parentNode.removeChild(this._nodes[t]);
              this._nodes = [];
            } else this.disable();
          },
          onBindChange: function () {},
          _checkBindingOnNode: function (e) {
            if (e.attributes) {
              var t = [];
              if (
                void 0 !== e.getAttribute("is") &&
                /\{\{[^{}]*\}\}/g.test(e.getAttribute("is"))
              )
                t.push({ nodeName: "is", nodeValue: e.getAttribute("is") });
              else
                for (var i = 0, r = e.attributes.length; i < r; i++)
                  t.push({
                    nodeName: e.attributes[i].nodeName,
                    nodeValue: e.attributes[i].nodeValue,
                  });
              for (var s = 0, o = t.length; s < o; s++) {
                var n = t[s].nodeName,
                  a = t[s].nodeValue,
                  h = g.camelCalise(n.replace("data-", ""));
                if (/^on/.test(h)) {
                  var l = h.replace("on", "").toLowerCase();
                  -1 !== U.indexOf(l)
                    ? this._componentContext &&
                      void 0 !== this._componentContext[a] &&
                      this._componentContext._registerEvent(l, e, a)
                    : this._checkCallbackOnAttribute(e, n, a);
                } else this._addBinding(e, n, a);
              }
            } else
              void 0 !== e.parentNode && e.textContent && this._addBinding(e);
          },
          _checkCallbackOnAttribute: function (e, t, i) {
            var r = g.camelCalise(t.replace("data-", "")).replace(/\s/g, "");
            this._componentContext &&
              void 0 !== this._componentContext[i] &&
              e.props &&
              void 0 !== e.props[r] &&
              (e.props[r] = this._componentContext[i].bind(
                this._componentContext
              ));
          },
          _addBinding: function (e, t, i) {
            var r = e.attributes
              ? i
              : void 0 !== e.parentNode
              ? e.textContent
              : "";
            /\{\{[^{}]*\}\}/g.test(r) &&
              this._watchers.push(new B(e, t, r, this));
          },
          _defaultProps: {
            if: { type: "bool", value: !0, change: "onIfChange" },
            repeat: { type: "json", value: null, change: "onRepeatChange" },
            bind: { type: "json", value: null, change: "onBindChange" },
            itemIndex: {
              type: "int",
              value: null,
              change: "onItemIndexChange",
            },
            itemLength: {
              type: "int",
              value: null,
              change: "onItemLengthChange",
            },
            repeaterKey: {
              type: "json",
              value: null,
              change: "onRepeaterKeyChange",
            },
            repeaterIndex: {
              type: "json",
              value: null,
              change: "onRepeaterIndexChange",
            },
            removeNodes: { type: "bool", value: !1 },
          },
        };
      "function" != typeof HTMLElement
        ? ((Y = function () {}).prototype = document.createElement("template"))
        : (Y = HTMLTemplateElement);
      var X,
        K = (function (t) {
          function i() {
            return (
              e.classCallCheck(this, i),
              e.possibleConstructorReturn(this, t.apply(this, arguments))
            );
          }
          return e.inherits(i, t), i;
        })(Y);
      for (var G in W) K.prototype[G] = W[G];
      for (var Z in A) K.prototype[Z] = A[Z];
      for (var Q in b) K.prototype[Q] = b[Q];
      x("light-core-template", K, "template"),
        "function" != typeof HTMLElement
          ? ((X = function () {}).prototype = document.createElement("div"))
          : (X = HTMLTemplateElement);
      var J = (function (t) {
        function i() {
          return (
            e.classCallCheck(this, i),
            e.possibleConstructorReturn(this, t.apply(this, arguments))
          );
        }
        return e.inherits(i, t), i;
      })(X);
      for (var ee in W) J.prototype[ee] = W[ee];
      for (var te in A) J.prototype[te] = A[te];
      for (var ie in b) J.prototype[ie] = b[ie];
      x("light-template", J);
      var re,
        se = {
          Component: L,
          components: w,
          register: x,
          StateProvider: I,
          EventDispatcher: y,
          utils: g,
          support: s,
          TemplateComponent: K,
          EventDispatcherMixin: b,
          ComponentMixin: A,
        };
      function oe() {
        clearTimeout(re),
          y.fire("resize"),
          (re = setTimeout(function () {
            y.fire("resizeend");
          }, 300));
      }
      return (
        window.addEventListener("resize", oe, !1),
        oe(),
        requestAnimationFrame(function e() {
          requestAnimationFrame(e), y.fire("requestAnimationFrame");
        }),
        window.console[void 0 === window.console.debug ? "log" : "debug"](
          "Light.js v107"
        ),
        se
      );
    })();
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "h", function () {
      return m;
    }),
      i.d(t, "d", function () {
        return s;
      }),
      i.d(t, "e", function () {
        return f;
      }),
      i.d(t, "j", function () {
        return y;
      }),
      i.d(t, "b", function () {
        return O;
      }),
      i.d(t, "f", function () {
        return D;
      }),
      i.d(t, "i", function () {
        return N;
      }),
      i.d(t, "a", function () {
        return B;
      }),
      i.d(t, "c", function () {
        return q;
      }),
      i.d(t, "k", function () {
        return V;
      }),
      i.d(t, "l", function () {
        return T;
      }),
      i.d(t, "g", function () {
        return $;
      });
    /*!
     * Beam v0.0.1
     * (c) 2017 Nicolas Riciotti
     * Released under the undefined License.
     */
    class r {
      constructor(e, t, i, r, s) {
        (this.name = s),
          (this.gl = e),
          (this._buffer = this.gl.createBuffer()),
          (this.type = this.gl.FLOAT),
          (this._target = this.gl[r ? "ELEMENT_ARRAY_BUFFER" : "ARRAY_BUFFER"]),
          this.update(t, i);
      }
      update(e, t) {
        (this.data = e),
          (this.size = t),
          (this.length = this.data.length),
          this.gl.bindBuffer(this._target, this._buffer),
          this.gl.bufferData(this._target, this.data, this.gl.STATIC_DRAW);
      }
      bind() {
        this.gl.bindBuffer(this._target, this._buffer);
      }
    }
    class s {
      constructor(e, t) {
        (this.gl = e), (this.attributes = {}), (this.length = t || 0);
      }
      addAttribute(e, t, i, s) {
        this.attributes[e] = new r(this.gl, t, i, "index" === e, s);
      }
    }
    const o = { 5126: "1f", 35664: "2f", 35665: "3f", 35666: "4f" };
    (o[35670] = o[5124] = o[35678] = o[35680] = "1i"),
      (o[35671] = o[35667] = "2i"),
      (o[35672] = o[35668] = "3i"),
      (o[35673] = o[35669] = "4i"),
      (o[35674] = "Matrix2f"),
      (o[35675] = "Matrix3f"),
      (o[35676] = "Matrix4f");
    var n,
      a =
        "precision highp float;\n\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvColor = color;\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}",
      h =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
          ""
        ),
      l = new Array(36),
      p = 0;
    function c() {
      for (var e = 0; e < 36; e++)
        8 === e || 13 === e || 18 === e || 23 === e
          ? (l[e] = "-")
          : 14 === e
          ? (l[e] = "4")
          : (p <= 2 && (p = (33554432 + 16777216 * Math.random()) | 0),
            (n = 15 & p),
            (p >>= 4),
            (l[e] = h[19 === e ? (3 & n) | 8 : n]));
      return l.join("");
    }
    function u(e) {
      for (var t = e.split("\n"), i = 0; i < t.length; i++)
        t[i] = i + 1 + ": " + t[i];
      return t.join("\n");
    }
    function d(e, t, i) {
      return (
        e.shaderSource(t, i),
        e.compileShader(t),
        !!e.getShaderParameter(t, e.COMPILE_STATUS) ||
          (console.error(
            "Shader cannot compile: \n" + e.getShaderInfoLog(t) || !1
          ),
          console.warn(u(i)),
          !1)
      );
    }
    class m {
      constructor(e, t) {
        (this._uuid = c()),
          (t = Object.assign(
            {},
            {
              vertexShader: a,
              fragmentShader:
                "precision highp float;\n\nuniform float alpha;\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nvoid main(void) {\n    gl_FragColor = vec4( vec3(1., 1., 1.), alpha);\n}",
              defines: {},
              extentions: {},
              type: e.TRIANGLES,
            },
            t
          )),
          (this.options = t),
          (this._vertexShaderSource = t.vertexShader),
          (this._fragmentShaderSource = t.fragmentShader),
          (this.gl = e),
          (this._program = e.createProgram()),
          (this.vertexShader = e.createShader(e.VERTEX_SHADER)),
          (this.fragmentShader = e.createShader(e.FRAGMENT_SHADER)),
          e.attachShader(this._program, this.vertexShader),
          e.attachShader(this._program, this.fragmentShader),
          (this.type = t.type),
          (this.attributes = {}),
          (this.uniforms = {}),
          (this.defines = t.defines),
          (this.extentions = t.extentions),
          (this._textureUnit = 0),
          (this.depthTest = void 0 === t.depthTest || t.depthTest),
          (this.blend = void 0 !== t.blend && t.blend),
          (this.blendEquation =
            void 0 !== t.blendEquation ? t.blendEquation : this.gl.FUNC_ADD),
          (this.blendSrc =
            void 0 !== t.blendSrc ? t.blendSrc : this.gl.SRC_ALPHA),
          (this.blendSrcAlpha =
            void 0 !== t.blendSrcAlpha ? t.blendSrcAlpha : this.gl.SRC_ALPHA),
          (this.blendDst = void 0 !== t.blendDst ? t.blendDst : this.gl.ONE),
          (this.blendDstAlpha =
            void 0 !== t.blendDstAlpha
              ? t.blendDstAlpha
              : this.gl.ONE_MINUS_SRC_ALPHA),
          (this.wireframe = void 0 !== t.wireframe && t.wireframe),
          this.compile(t);
      }
      compile(e) {
        var t = "";
        for (var i in this.defines)
          this.defines[i] &&
            (t += "#define " + i + " " + this.defines[i] + "\n");
        if (
          !d(this.gl, this.vertexShader, t + this._vertexShaderSource) ||
          !d(this.gl, this.fragmentShader, t + this._fragmentShaderSource)
        )
          return console.warn("compile error"), !1;
        if (
          (this.gl.linkProgram(this._program),
          this.gl.getProgramParameter(this._program, this.gl.LINK_STATUS) ||
            (console.error(
              "Cannot link program: \n" +
                this.gl.getProgramInfoLog(this._program) || !1
            ),
            console.warn(
              "VERTEX_SHADER:\n" +
                u(e.vertexShader) +
                "\n\nFRAGMENT_SHADER:\n" +
                u(e.fragmentShader)
            )),
          this.gl.useProgram(this._program),
          this._retrieveUnifromsFromShader(),
          "object" == typeof e.uniforms)
        )
          for (let t in e.uniforms)
            void 0 !== this.uniforms[t] &&
              (this.uniforms[t].value = e.uniforms[t]);
      }
      _retrieveUnifromsFromShader() {
        var e = this.gl.getProgramParameter(
          this._program,
          this.gl.ACTIVE_UNIFORMS
        );
        for (let i = 0; i < e; ++i) {
          var t = this.gl.getActiveUniform(this._program, i);
          if (null !== t)
            if (void 0 !== this.uniforms[t.name])
              (this.uniforms[t.name].location = this.gl.getUniformLocation(
                this._program,
                t.name
              )),
                (this.uniforms[t.name].type = t.type);
            else {
              this.uniforms[t.name] = {
                location: this.gl.getUniformLocation(this._program, t.name),
                type: t.type,
                value: null,
              };
              let e = o[t.type];
              "2f" == e
                ? (this.uniforms[t.name].value = [0, 0])
                : "3f" == e
                ? (this.uniforms[t.name].value = [0, 0, 0])
                : "4f" == e
                ? (this.uniforms[t.name].value = [0, 0, 0, 0])
                : 35678 === t.type &&
                  ((this.uniforms[t.name].unit = this._textureUnit),
                  this._textureUnit++);
            }
          else this.gl.getError();
        }
        var i = this.gl.getProgramParameter(
          this._program,
          this.gl.ACTIVE_ATTRIBUTES
        );
        for (let e = 0; e < i; ++e) {
          var r = this.gl.getActiveAttrib(this._program, e);
          null !== r
            ? (this.attributes[r.name] = {
                location: this.gl.getAttribLocation(this._program, r.name),
                type: r.type,
              })
            : this.gl.getError();
        }
      }
      dispose() {}
      use() {
        this.gl.useProgram(this._program);
      }
      attribPointer(e, t) {
        for (var i in (this.gl.useProgram(this._program), this.attributes))
          i in e &&
            (e[i].bind(),
            this.gl.vertexAttribPointer(
              this.attributes[i].location,
              e[i].size,
              e[i].type,
              !1,
              0,
              0
            ),
            this.gl.enableVertexAttribArray(this.attributes[i].location));
      }
      draw(e) {
        this.attribPointer(e.attributes, e),
          this.gl[this.depthTest ? "enable" : "disable"](this.gl.DEPTH_TEST),
          this.blend
            ? (this,
              !0,
              this.gl.disable(this.gl.DEPTH_TEST),
              this.depthTest && this.gl.depthFunc(this.gl.LESS),
              this.gl.enable(this.gl.BLEND),
              this.gl.blendFuncSeparate(
                this.gl.SRC_ALPHA,
                this.gl.ONE_MINUS_SRC_ALPHA,
                this.gl.ONE,
                this.gl.ONE_MINUS_SRC_ALPHA
              ))
            : (!1,
              this.gl.disable(this.gl.BLEND),
              this.gl[this.depthTest ? "enable" : "disable"](
                this.gl.DEPTH_TEST
              ));
        for (var t = Object.keys(this.uniforms), i = 0; i < t.length; i++)
          switch (this.uniforms[t[i]].type) {
            case this.gl.FLOAT_MAT2:
            case this.gl.FLOAT_MAT3:
            case this.gl.FLOAT_MAT4:
              this.gl["uniform" + o[this.uniforms[t[i]].type] + "v"](
                this.uniforms[t[i]].location,
                !1,
                this.uniforms[t[i]].value
              );
              break;
            default:
              if (
                35678 === this.uniforms[t[i]].type &&
                this.uniforms[t[i]].value
              )
                this.uniforms[t[i]].value.bind(this.uniforms[t[i]].unit),
                  this.gl["uniform" + o[this.uniforms[t[i]].type]](
                    this.uniforms[t[i]].location,
                    this.uniforms[t[i]].unit
                  );
              else {
                let e = o[this.uniforms[t[i]].type];
                null !== this.uniforms[t[i]].value &&
                  ("2f" == e
                    ? this.gl["uniform" + e](
                        this.uniforms[t[i]].location,
                        this.uniforms[t[i]].value[0],
                        this.uniforms[t[i]].value[1]
                      )
                    : "3f" == e
                    ? this.gl["uniform" + e](
                        this.uniforms[t[i]].location,
                        this.uniforms[t[i]].value[0],
                        this.uniforms[t[i]].value[1],
                        this.uniforms[t[i]].value[2]
                      )
                    : "4f" == e
                    ? this.gl["uniform" + e](
                        this.uniforms[t[i]].location,
                        this.uniforms[t[i]].value[0],
                        this.uniforms[t[i]].value[1],
                        this.uniforms[t[i]].value[2],
                        this.uniforms[t[i]].value[3]
                      )
                    : this.gl["uniform" + e](
                        this.uniforms[t[i]].location,
                        this.uniforms[t[i]].value
                      ));
              }
          }
        e.attributes.index
          ? (e.attributes.index.bind(),
            this.gl.drawElements(
              this.wireframe ? this.gl.LINE_STRIP : this.type,
              e.attributes.index.length,
              this.gl.UNSIGNED_SHORT,
              0
            ))
          : this.gl.drawArrays(
              this.wireframe ? this.gl.LINE_STRIP : this.type,
              0,
              e.length
            );
      }
    }
    class f extends m {
      constructor(e, t) {
        super(
          e,
          (t = Object.assign(
            {},
            {
              vertexShader: a,
              fragmentShader:
                "precision highp float;\n\nuniform float alpha;\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nuniform vec2 offset;\n\n#ifdef USE_MAP\n\tuniform sampler2D map;\n\tuniform vec2 mapOffset;\n#endif\n\n#ifdef USE_ALPHA_MAP\n\tuniform sampler2D alphaMap;\n\tuniform vec2 alphaMapOffset;\n#endif\n\nvoid main(void) {\n\n\tvec4 color = vec4(vColor, alpha);\n\n\t#ifdef USE_MAP\n\t\tcolor = texture2D(map, vUv + offset);\n\t\tcolor.a *= alpha;\n\t#endif\n\n\n    gl_FragColor = color;\n\n}",
              alpha: 1,
              map: null,
              roughnessMap: null,
              metalnessMap: null,
              normalMap: null,
              defines: { USE_MAP: !1 },
            },
            t
          ))
        ),
          (this.map = t.map),
          (this.options = t),
          Object.defineProperty(this, "map", {
            set: (e) => {
              e
                ? ((this.defines.USE_MAP = !0),
                  this.compile(this.options),
                  this.uniforms.map && (this.uniforms.map.value = e))
                : ((this.defines.USE_MAP = !1), this.compile(this.options));
            },
          });
      }
      draw(e) {
        super.draw(e);
      }
    }
    function g(e, t, i) {
      return 9728 | +e | (+t << 8) | (+(t && i) << 1);
    }
    function v(e) {
      return 0 == (e & (e - 1));
    }
    class y {
      constructor(e, t) {
        ((t = Object.assign(
          {},
          {
            format: e.RGBA,
            type: e.UNSIGNED_BYTE,
            width: 1,
            height: 1,
            data: null,
            linear: !0,
            mipmap: !1,
            miplinear: !1,
            wrapS: e.CLAMP_TO_EDGE,
            wrapT: e.CLAMP_TO_EDGE,
            data: new Uint8Array([0, 0, 0, 255]),
          },
          t
        )),
        (this._uid = c()),
        (this.gl = e),
        (this.width = t.width),
        (this.height = t.height),
        (this.format = t.format),
        (this.type = t.type),
        (this.data = t.data),
        (this._texture = this.gl.createTexture()),
        e.bindTexture(e.TEXTURE_2D, this._texture),
        this.type == e.FLOAT) &&
          (e.getExtension("OES_texture_float") ||
            (console.warn("no floating point texture support"),
            (this.type = e.UNSIGNED_BYTE)));
        Object.defineProperty(this, "wrapS", {
          set: (e) => {
            this.gl.texParameteri(
              this.gl.TEXTURE_2D,
              this.gl.TEXTURE_WRAP_S,
              e
            );
          },
        }),
          Object.defineProperty(this, "wrapT", {
            set: (e) => {
              this.gl.texParameteri(
                this.gl.TEXTURE_2D,
                this.gl.TEXTURE_WRAP_T,
                e
              );
            },
          }),
          this.setFilter(t.linear, t.mipmap, t.mipmapLinear),
          (this.wrapS = t.wrapS),
          (this.wrapT = t.wrapT),
          this.bindData(),
          e.bindTexture(e.TEXTURE_2D, null);
      }
      bindData() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture),
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.format,
            this.width,
            this.height,
            0,
            this.format,
            this.type,
            this.data
          );
      }
      bindImage(e) {
        var t = v(e.width) && v(e.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture),
          this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !0),
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.format,
            this.format,
            this.type,
            e
          ),
          t ||
            (this.setFilter(!0, !1, !1),
            (this.wrapS = this.gl.CLAMP_TO_EDGE),
            (this.wrapT = this.gl.CLAMP_TO_EDGE)),
          this.gl.bindTexture(this.gl.TEXTURE_2D, null);
      }
      bind(e) {
        void 0 !== e && this.gl.activeTexture(this.gl.TEXTURE0 + (0 | e)),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture);
      }
      delete() {
        this.gl.deleteTexture(this._texture),
          (this._texture = null),
          (this.gl = null);
      }
      setFilter(e, t, i) {
        var r = this.gl,
          s = g(!!e, !!t, !!i);
        r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, g(!!e, !1, !1)),
          r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, s);
      }
    }
    (y.fromUrl = function (e, t, i) {
      var r = new y(e, i),
        s = new Image();
      return (
        (s.onload = () => {
          (s.onload = null), (s.onerror = null), r.bindImage(s);
        }),
        (s.onerror = () => {
          (s.onload = null),
            (s.onerror = null),
            console.warn("Invalid url provided to Texture.fromUrl() : " + t);
        }),
        (s.crossOrigin = ""),
        (s.src = t),
        r
      );
    }),
      (y.fromImage = function (e, t, i) {
        if (t.width && t.height) {
          var r = new y(e, i);
          return r.bindImage(t), r;
        }
        console.warn(
          "Cannot create texture with provided image\n Please make sure the image is loaded before calling Texture.fromImage() or use Texture.fromUrl()",
          t
        );
      });
    const w = Math.random;
    var _ = "undefined" != typeof Float32Array ? Float32Array : Array,
      x = w,
      b = {
        create: function () {
          var e = new _(16);
          return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        clone: function (e) {
          var t = new _(16);
          return (
            (t[0] = e[0]),
            (t[1] = e[1]),
            (t[2] = e[2]),
            (t[3] = e[3]),
            (t[4] = e[4]),
            (t[5] = e[5]),
            (t[6] = e[6]),
            (t[7] = e[7]),
            (t[8] = e[8]),
            (t[9] = e[9]),
            (t[10] = e[10]),
            (t[11] = e[11]),
            (t[12] = e[12]),
            (t[13] = e[13]),
            (t[14] = e[14]),
            (t[15] = e[15]),
            t
          );
        },
        copy: function (e, t) {
          return (
            (e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[8] = t[8]),
            (e[9] = t[9]),
            (e[10] = t[10]),
            (e[11] = t[11]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15]),
            e
          );
        },
        identity: function (e) {
          return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        transpose: function (e, t) {
          if (e === t) {
            var i = t[1],
              r = t[2],
              s = t[3],
              o = t[6],
              n = t[7],
              a = t[11];
            (e[1] = t[4]),
              (e[2] = t[8]),
              (e[3] = t[12]),
              (e[4] = i),
              (e[6] = t[9]),
              (e[7] = t[13]),
              (e[8] = r),
              (e[9] = o),
              (e[11] = t[14]),
              (e[12] = s),
              (e[13] = n),
              (e[14] = a);
          } else
            (e[0] = t[0]),
              (e[1] = t[4]),
              (e[2] = t[8]),
              (e[3] = t[12]),
              (e[4] = t[1]),
              (e[5] = t[5]),
              (e[6] = t[9]),
              (e[7] = t[13]),
              (e[8] = t[2]),
              (e[9] = t[6]),
              (e[10] = t[10]),
              (e[11] = t[14]),
              (e[12] = t[3]),
              (e[13] = t[7]),
              (e[14] = t[11]),
              (e[15] = t[15]);
          return e;
        },
        invert: function (e, t) {
          var i = t[0],
            r = t[1],
            s = t[2],
            o = t[3],
            n = t[4],
            a = t[5],
            h = t[6],
            l = t[7],
            p = t[8],
            c = t[9],
            u = t[10],
            d = t[11],
            m = t[12],
            f = t[13],
            g = t[14],
            v = t[15],
            y = i * a - r * n,
            w = i * h - s * n,
            _ = i * l - o * n,
            x = r * h - s * a,
            b = r * l - o * a,
            S = s * l - o * h,
            C = p * f - c * m,
            T = p * g - u * m,
            P = p * v - d * m,
            z = c * g - u * f,
            E = c * v - d * f,
            k = u * v - d * g,
            M = y * k - w * E + _ * z + x * P - b * T + S * C;
          return M
            ? ((M = 1 / M),
              (e[0] = (a * k - h * E + l * z) * M),
              (e[1] = (s * E - r * k - o * z) * M),
              (e[2] = (f * S - g * b + v * x) * M),
              (e[3] = (u * b - c * S - d * x) * M),
              (e[4] = (h * P - n * k - l * T) * M),
              (e[5] = (i * k - s * P + o * T) * M),
              (e[6] = (g * _ - m * S - v * w) * M),
              (e[7] = (p * S - u * _ + d * w) * M),
              (e[8] = (n * E - a * P + l * C) * M),
              (e[9] = (r * P - i * E - o * C) * M),
              (e[10] = (m * b - f * _ + v * y) * M),
              (e[11] = (c * _ - p * b - d * y) * M),
              (e[12] = (a * T - n * z - h * C) * M),
              (e[13] = (i * z - r * T + s * C) * M),
              (e[14] = (f * w - m * x - g * y) * M),
              (e[15] = (p * x - c * w + u * y) * M),
              e)
            : null;
        },
        adjoint: function (e, t) {
          var i = t[0],
            r = t[1],
            s = t[2],
            o = t[3],
            n = t[4],
            a = t[5],
            h = t[6],
            l = t[7],
            p = t[8],
            c = t[9],
            u = t[10],
            d = t[11],
            m = t[12],
            f = t[13],
            g = t[14],
            v = t[15];
          return (
            (e[0] =
              a * (u * v - d * g) - c * (h * v - l * g) + f * (h * d - l * u)),
            (e[1] = -(
              r * (u * v - d * g) -
              c * (s * v - o * g) +
              f * (s * d - o * u)
            )),
            (e[2] =
              r * (h * v - l * g) - a * (s * v - o * g) + f * (s * l - o * h)),
            (e[3] = -(
              r * (h * d - l * u) -
              a * (s * d - o * u) +
              c * (s * l - o * h)
            )),
            (e[4] = -(
              n * (u * v - d * g) -
              p * (h * v - l * g) +
              m * (h * d - l * u)
            )),
            (e[5] =
              i * (u * v - d * g) - p * (s * v - o * g) + m * (s * d - o * u)),
            (e[6] = -(
              i * (h * v - l * g) -
              n * (s * v - o * g) +
              m * (s * l - o * h)
            )),
            (e[7] =
              i * (h * d - l * u) - n * (s * d - o * u) + p * (s * l - o * h)),
            (e[8] =
              n * (c * v - d * f) - p * (a * v - l * f) + m * (a * d - l * c)),
            (e[9] = -(
              i * (c * v - d * f) -
              p * (r * v - o * f) +
              m * (r * d - o * c)
            )),
            (e[10] =
              i * (a * v - l * f) - n * (r * v - o * f) + m * (r * l - o * a)),
            (e[11] = -(
              i * (a * d - l * c) -
              n * (r * d - o * c) +
              p * (r * l - o * a)
            )),
            (e[12] = -(
              n * (c * g - u * f) -
              p * (a * g - h * f) +
              m * (a * u - h * c)
            )),
            (e[13] =
              i * (c * g - u * f) - p * (r * g - s * f) + m * (r * u - s * c)),
            (e[14] = -(
              i * (a * g - h * f) -
              n * (r * g - s * f) +
              m * (r * h - s * a)
            )),
            (e[15] =
              i * (a * u - h * c) - n * (r * u - s * c) + p * (r * h - s * a)),
            e
          );
        },
        determinant: function (e) {
          var t = e[0],
            i = e[1],
            r = e[2],
            s = e[3],
            o = e[4],
            n = e[5],
            a = e[6],
            h = e[7],
            l = e[8],
            p = e[9],
            c = e[10],
            u = e[11],
            d = e[12],
            m = e[13],
            f = e[14],
            g = e[15];
          return (
            (t * n - i * o) * (c * g - u * f) -
            (t * a - r * o) * (p * g - u * m) +
            (t * h - s * o) * (p * f - c * m) +
            (i * a - r * n) * (l * g - u * d) -
            (i * h - s * n) * (l * f - c * d) +
            (r * h - s * a) * (l * m - p * d)
          );
        },
        multiply: function (e, t, i) {
          var r = t[0],
            s = t[1],
            o = t[2],
            n = t[3],
            a = t[4],
            h = t[5],
            l = t[6],
            p = t[7],
            c = t[8],
            u = t[9],
            d = t[10],
            m = t[11],
            f = t[12],
            g = t[13],
            v = t[14],
            y = t[15],
            w = i[0],
            _ = i[1],
            x = i[2],
            b = i[3];
          return (
            (e[0] = w * r + _ * a + x * c + b * f),
            (e[1] = w * s + _ * h + x * u + b * g),
            (e[2] = w * o + _ * l + x * d + b * v),
            (e[3] = w * n + _ * p + x * m + b * y),
            (w = i[4]),
            (_ = i[5]),
            (x = i[6]),
            (b = i[7]),
            (e[4] = w * r + _ * a + x * c + b * f),
            (e[5] = w * s + _ * h + x * u + b * g),
            (e[6] = w * o + _ * l + x * d + b * v),
            (e[7] = w * n + _ * p + x * m + b * y),
            (w = i[8]),
            (_ = i[9]),
            (x = i[10]),
            (b = i[11]),
            (e[8] = w * r + _ * a + x * c + b * f),
            (e[9] = w * s + _ * h + x * u + b * g),
            (e[10] = w * o + _ * l + x * d + b * v),
            (e[11] = w * n + _ * p + x * m + b * y),
            (w = i[12]),
            (_ = i[13]),
            (x = i[14]),
            (b = i[15]),
            (e[12] = w * r + _ * a + x * c + b * f),
            (e[13] = w * s + _ * h + x * u + b * g),
            (e[14] = w * o + _ * l + x * d + b * v),
            (e[15] = w * n + _ * p + x * m + b * y),
            e
          );
        },
      };
    (b.mul = b.multiply),
      (b.translate = function (e, t, i) {
        var r,
          s,
          o,
          n,
          a,
          h,
          l,
          p,
          c,
          u,
          d,
          m,
          f = i[0],
          g = i[1],
          v = i[2];
        return (
          t === e
            ? ((e[12] = t[0] * f + t[4] * g + t[8] * v + t[12]),
              (e[13] = t[1] * f + t[5] * g + t[9] * v + t[13]),
              (e[14] = t[2] * f + t[6] * g + t[10] * v + t[14]),
              (e[15] = t[3] * f + t[7] * g + t[11] * v + t[15]))
            : ((r = t[0]),
              (s = t[1]),
              (o = t[2]),
              (n = t[3]),
              (a = t[4]),
              (h = t[5]),
              (l = t[6]),
              (p = t[7]),
              (c = t[8]),
              (u = t[9]),
              (d = t[10]),
              (m = t[11]),
              (e[0] = r),
              (e[1] = s),
              (e[2] = o),
              (e[3] = n),
              (e[4] = a),
              (e[5] = h),
              (e[6] = l),
              (e[7] = p),
              (e[8] = c),
              (e[9] = u),
              (e[10] = d),
              (e[11] = m),
              (e[12] = r * f + a * g + c * v + t[12]),
              (e[13] = s * f + h * g + u * v + t[13]),
              (e[14] = o * f + l * g + d * v + t[14]),
              (e[15] = n * f + p * g + m * v + t[15])),
          e
        );
      }),
      (b.scale = function (e, t, i) {
        var r = i[0],
          s = i[1],
          o = i[2];
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          (e[4] = t[4] * s),
          (e[5] = t[5] * s),
          (e[6] = t[6] * s),
          (e[7] = t[7] * s),
          (e[8] = t[8] * o),
          (e[9] = t[9] * o),
          (e[10] = t[10] * o),
          (e[11] = t[11] * o),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e
        );
      }),
      (b.rotate = function (e, t, i, r) {
        var s,
          o,
          n,
          a,
          h,
          l,
          p,
          c,
          u,
          d,
          m,
          f,
          g,
          v,
          y,
          w,
          _,
          x,
          b,
          S,
          C,
          T,
          P,
          z,
          E = r[0],
          k = r[1],
          M = r[2],
          A = Math.sqrt(E * E + k * k + M * M);
        return Math.abs(A) < 1e-6
          ? null
          : ((E *= A = 1 / A),
            (k *= A),
            (M *= A),
            (s = Math.sin(i)),
            (n = 1 - (o = Math.cos(i))),
            (a = t[0]),
            (h = t[1]),
            (l = t[2]),
            (p = t[3]),
            (c = t[4]),
            (u = t[5]),
            (d = t[6]),
            (m = t[7]),
            (f = t[8]),
            (g = t[9]),
            (v = t[10]),
            (y = t[11]),
            (w = E * E * n + o),
            (_ = k * E * n + M * s),
            (x = M * E * n - k * s),
            (b = E * k * n - M * s),
            (S = k * k * n + o),
            (C = M * k * n + E * s),
            (T = E * M * n + k * s),
            (P = k * M * n - E * s),
            (z = M * M * n + o),
            (e[0] = a * w + c * _ + f * x),
            (e[1] = h * w + u * _ + g * x),
            (e[2] = l * w + d * _ + v * x),
            (e[3] = p * w + m * _ + y * x),
            (e[4] = a * b + c * S + f * C),
            (e[5] = h * b + u * S + g * C),
            (e[6] = l * b + d * S + v * C),
            (e[7] = p * b + m * S + y * C),
            (e[8] = a * T + c * P + f * z),
            (e[9] = h * T + u * P + g * z),
            (e[10] = l * T + d * P + v * z),
            (e[11] = p * T + m * P + y * z),
            t !== e &&
              ((e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            e);
      }),
      (b.rotateX = function (e, t, i) {
        var r = Math.sin(i),
          s = Math.cos(i),
          o = t[4],
          n = t[5],
          a = t[6],
          h = t[7],
          l = t[8],
          p = t[9],
          c = t[10],
          u = t[11];
        return (
          t !== e &&
            ((e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[4] = o * s + l * r),
          (e[5] = n * s + p * r),
          (e[6] = a * s + c * r),
          (e[7] = h * s + u * r),
          (e[8] = l * s - o * r),
          (e[9] = p * s - n * r),
          (e[10] = c * s - a * r),
          (e[11] = u * s - h * r),
          e
        );
      }),
      (b.rotateY = function (e, t, i) {
        var r = Math.sin(i),
          s = Math.cos(i),
          o = t[0],
          n = t[1],
          a = t[2],
          h = t[3],
          l = t[8],
          p = t[9],
          c = t[10],
          u = t[11];
        return (
          t !== e &&
            ((e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[0] = o * s - l * r),
          (e[1] = n * s - p * r),
          (e[2] = a * s - c * r),
          (e[3] = h * s - u * r),
          (e[8] = o * r + l * s),
          (e[9] = n * r + p * s),
          (e[10] = a * r + c * s),
          (e[11] = h * r + u * s),
          e
        );
      }),
      (b.rotateZ = function (e, t, i) {
        var r = Math.sin(i),
          s = Math.cos(i),
          o = t[0],
          n = t[1],
          a = t[2],
          h = t[3],
          l = t[4],
          p = t[5],
          c = t[6],
          u = t[7];
        return (
          t !== e &&
            ((e[8] = t[8]),
            (e[9] = t[9]),
            (e[10] = t[10]),
            (e[11] = t[11]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15])),
          (e[0] = o * s + l * r),
          (e[1] = n * s + p * r),
          (e[2] = a * s + c * r),
          (e[3] = h * s + u * r),
          (e[4] = l * s - o * r),
          (e[5] = p * s - n * r),
          (e[6] = c * s - a * r),
          (e[7] = u * s - h * r),
          e
        );
      }),
      (b.fromRotationTranslation = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = r + r,
          h = s + s,
          l = o + o,
          p = r * a,
          c = r * h,
          u = r * l,
          d = s * h,
          m = s * l,
          f = o * l,
          g = n * a,
          v = n * h,
          y = n * l;
        return (
          (e[0] = 1 - (d + f)),
          (e[1] = c + y),
          (e[2] = u - v),
          (e[3] = 0),
          (e[4] = c - y),
          (e[5] = 1 - (p + f)),
          (e[6] = m + g),
          (e[7] = 0),
          (e[8] = u + v),
          (e[9] = m - g),
          (e[10] = 1 - (p + d)),
          (e[11] = 0),
          (e[12] = i[0]),
          (e[13] = i[1]),
          (e[14] = i[2]),
          (e[15] = 1),
          e
        );
      }),
      (b.fromQuat = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = i + i,
          a = r + r,
          h = s + s,
          l = i * n,
          p = i * a,
          c = i * h,
          u = r * a,
          d = r * h,
          m = s * h,
          f = o * n,
          g = o * a,
          v = o * h;
        return (
          (e[0] = 1 - (u + m)),
          (e[1] = p + v),
          (e[2] = c - g),
          (e[3] = 0),
          (e[4] = p - v),
          (e[5] = 1 - (l + m)),
          (e[6] = d + f),
          (e[7] = 0),
          (e[8] = c + g),
          (e[9] = d - f),
          (e[10] = 1 - (l + u)),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }),
      (b.frustum = function (e, t, i, r, s, o, n) {
        var a = 1 / (i - t),
          h = 1 / (s - r),
          l = 1 / (o - n);
        return (
          (e[0] = 2 * o * a),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 2 * o * h),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = (i + t) * a),
          (e[9] = (s + r) * h),
          (e[10] = (n + o) * l),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = n * o * 2 * l),
          (e[15] = 0),
          e
        );
      }),
      (b.perspective = function (e, t, i, r, s) {
        var o = 1 / Math.tan(t / 2),
          n = 1 / (r - s);
        return (
          (e[0] = o / i),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = o),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = (s + r) * n),
          (e[11] = -1),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 2 * s * r * n),
          (e[15] = 0),
          e
        );
      }),
      (b.ortho = function (e, t, i, r, s, o, n) {
        var a = 1 / (t - i),
          h = 1 / (r - s),
          l = 1 / (o - n);
        return (
          (e[0] = -2 * a),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = -2 * h),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 2 * l),
          (e[11] = 0),
          (e[12] = (t + i) * a),
          (e[13] = (s + r) * h),
          (e[14] = (n + o) * l),
          (e[15] = 1),
          e
        );
      }),
      (b.lookAt = function (e, t, i, r) {
        var s,
          o,
          n,
          a,
          h,
          l,
          p,
          c,
          u,
          d,
          m = t[0],
          f = t[1],
          g = t[2],
          v = r[0],
          y = r[1],
          w = r[2],
          _ = i[0],
          x = i[1],
          S = i[2];
        return Math.abs(m - _) < 1e-6 &&
          Math.abs(f - x) < 1e-6 &&
          Math.abs(g - S) < 1e-6
          ? b.identity(e)
          : ((p = m - _),
            (c = f - x),
            (u = g - S),
            (s =
              y * (u *= d = 1 / Math.sqrt(p * p + c * c + u * u)) -
              w * (c *= d)),
            (o = w * (p *= d) - v * u),
            (n = v * c - y * p),
            (d = Math.sqrt(s * s + o * o + n * n))
              ? ((s *= d = 1 / d), (o *= d), (n *= d))
              : ((s = 0), (o = 0), (n = 0)),
            (a = c * n - u * o),
            (h = u * s - p * n),
            (l = p * o - c * s),
            (d = Math.sqrt(a * a + h * h + l * l))
              ? ((a *= d = 1 / d), (h *= d), (l *= d))
              : ((a = 0), (h = 0), (l = 0)),
            (e[0] = s),
            (e[1] = a),
            (e[2] = p),
            (e[3] = 0),
            (e[4] = o),
            (e[5] = h),
            (e[6] = c),
            (e[7] = 0),
            (e[8] = n),
            (e[9] = l),
            (e[10] = u),
            (e[11] = 0),
            (e[12] = -(s * m + o * f + n * g)),
            (e[13] = -(a * m + h * f + l * g)),
            (e[14] = -(p * m + c * f + u * g)),
            (e[15] = 1),
            e);
      }),
      (b.str = function (e) {
        return (
          "mat4(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ", " +
          e[6] +
          ", " +
          e[7] +
          ", " +
          e[8] +
          ", " +
          e[9] +
          ", " +
          e[10] +
          ", " +
          e[11] +
          ", " +
          e[12] +
          ", " +
          e[13] +
          ", " +
          e[14] +
          ", " +
          e[15] +
          ")"
        );
      });
    var S = {
      create: function () {
        var e = new _(9);
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 1),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 1),
          e
        );
      },
      fromMat4: function (e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[4]),
          (e[4] = t[5]),
          (e[5] = t[6]),
          (e[6] = t[8]),
          (e[7] = t[9]),
          (e[8] = t[10]),
          e
        );
      },
      clone: function (e) {
        var t = new _(9);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          t
        );
      },
      copy: function (e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e
        );
      },
      identity: function (e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 1),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 1),
          e
        );
      },
      transpose: function (e, t) {
        if (e === t) {
          var i = t[1],
            r = t[2],
            s = t[5];
          (e[1] = t[3]),
            (e[2] = t[6]),
            (e[3] = i),
            (e[5] = t[7]),
            (e[6] = r),
            (e[7] = s);
        } else
          (e[0] = t[0]),
            (e[1] = t[3]),
            (e[2] = t[6]),
            (e[3] = t[1]),
            (e[4] = t[4]),
            (e[5] = t[7]),
            (e[6] = t[2]),
            (e[7] = t[5]),
            (e[8] = t[8]);
        return e;
      },
      invert: function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = t[4],
          a = t[5],
          h = t[6],
          l = t[7],
          p = t[8],
          c = p * n - a * l,
          u = -p * o + a * h,
          d = l * o - n * h,
          m = i * c + r * u + s * d;
        return m
          ? ((m = 1 / m),
            (e[0] = c * m),
            (e[1] = (-p * r + s * l) * m),
            (e[2] = (a * r - s * n) * m),
            (e[3] = u * m),
            (e[4] = (p * i - s * h) * m),
            (e[5] = (-a * i + s * o) * m),
            (e[6] = d * m),
            (e[7] = (-l * i + r * h) * m),
            (e[8] = (n * i - r * o) * m),
            e)
          : null;
      },
      adjoint: function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = t[4],
          a = t[5],
          h = t[6],
          l = t[7],
          p = t[8];
        return (
          (e[0] = n * p - a * l),
          (e[1] = s * l - r * p),
          (e[2] = r * a - s * n),
          (e[3] = a * h - o * p),
          (e[4] = i * p - s * h),
          (e[5] = s * o - i * a),
          (e[6] = o * l - n * h),
          (e[7] = r * h - i * l),
          (e[8] = i * n - r * o),
          e
        );
      },
      determinant: function (e) {
        var t = e[0],
          i = e[1],
          r = e[2],
          s = e[3],
          o = e[4],
          n = e[5],
          a = e[6],
          h = e[7],
          l = e[8];
        return t * (l * o - n * h) + i * (-l * s + n * a) + r * (h * s - o * a);
      },
      multiply: function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = t[4],
          h = t[5],
          l = t[6],
          p = t[7],
          c = t[8],
          u = i[0],
          d = i[1],
          m = i[2],
          f = i[3],
          g = i[4],
          v = i[5],
          y = i[6],
          w = i[7],
          _ = i[8];
        return (
          (e[0] = u * r + d * n + m * l),
          (e[1] = u * s + d * a + m * p),
          (e[2] = u * o + d * h + m * c),
          (e[3] = f * r + g * n + v * l),
          (e[4] = f * s + g * a + v * p),
          (e[5] = f * o + g * h + v * c),
          (e[6] = y * r + w * n + _ * l),
          (e[7] = y * s + w * a + _ * p),
          (e[8] = y * o + w * h + _ * c),
          e
        );
      },
    };
    (S.mul = S.multiply),
      (S.translate = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = t[4],
          h = t[5],
          l = t[6],
          p = t[7],
          c = t[8],
          u = i[0],
          d = i[1];
        return (
          (e[0] = r),
          (e[1] = s),
          (e[2] = o),
          (e[3] = n),
          (e[4] = a),
          (e[5] = h),
          (e[6] = u * r + d * n + l),
          (e[7] = u * s + d * a + p),
          (e[8] = u * o + d * h + c),
          e
        );
      }),
      (S.rotate = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = t[4],
          h = t[5],
          l = t[6],
          p = t[7],
          c = t[8],
          u = Math.sin(i),
          d = Math.cos(i);
        return (
          (e[0] = d * r + u * n),
          (e[1] = d * s + u * a),
          (e[2] = d * o + u * h),
          (e[3] = d * n - u * r),
          (e[4] = d * a - u * s),
          (e[5] = d * h - u * o),
          (e[6] = l),
          (e[7] = p),
          (e[8] = c),
          e
        );
      }),
      (S.scale = function (e, t, i) {
        var r = i[0],
          s = i[1];
        return (
          (e[0] = r * t[0]),
          (e[1] = r * t[1]),
          (e[2] = r * t[2]),
          (e[3] = s * t[3]),
          (e[4] = s * t[4]),
          (e[5] = s * t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e
        );
      }),
      (S.fromMat2d = function (e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = 0),
          (e[3] = t[2]),
          (e[4] = t[3]),
          (e[5] = 0),
          (e[6] = t[4]),
          (e[7] = t[5]),
          (e[8] = 1),
          e
        );
      }),
      (S.fromQuat = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = i + i,
          a = r + r,
          h = s + s,
          l = i * n,
          p = i * a,
          c = i * h,
          u = r * a,
          d = r * h,
          m = s * h,
          f = o * n,
          g = o * a,
          v = o * h;
        return (
          (e[0] = 1 - (u + m)),
          (e[3] = p + v),
          (e[6] = c - g),
          (e[1] = p - v),
          (e[4] = 1 - (l + m)),
          (e[7] = d + f),
          (e[2] = c + g),
          (e[5] = d - f),
          (e[8] = 1 - (l + u)),
          e
        );
      }),
      (S.normalFromMat4 = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = t[4],
          a = t[5],
          h = t[6],
          l = t[7],
          p = t[8],
          c = t[9],
          u = t[10],
          d = t[11],
          m = t[12],
          f = t[13],
          g = t[14],
          v = t[15],
          y = i * a - r * n,
          w = i * h - s * n,
          _ = i * l - o * n,
          x = r * h - s * a,
          b = r * l - o * a,
          S = s * l - o * h,
          C = p * f - c * m,
          T = p * g - u * m,
          P = p * v - d * m,
          z = c * g - u * f,
          E = c * v - d * f,
          k = u * v - d * g,
          M = y * k - w * E + _ * z + x * P - b * T + S * C;
        return M
          ? ((M = 1 / M),
            (e[0] = (a * k - h * E + l * z) * M),
            (e[1] = (h * P - n * k - l * T) * M),
            (e[2] = (n * E - a * P + l * C) * M),
            (e[3] = (s * E - r * k - o * z) * M),
            (e[4] = (i * k - s * P + o * T) * M),
            (e[5] = (r * P - i * E - o * C) * M),
            (e[6] = (f * S - g * b + v * x) * M),
            (e[7] = (g * _ - m * S - v * w) * M),
            (e[8] = (m * b - f * _ + v * y) * M),
            e)
          : null;
      }),
      (S.str = function (e) {
        return (
          "mat3(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ", " +
          e[6] +
          ", " +
          e[7] +
          ", " +
          e[8] +
          ")"
        );
      });
    var C,
      T = {};
    (T.create = function () {
      var e = new _(3);
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), e;
    }),
      (T.clone = function (e) {
        var t = new _(3);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }),
      (T.fromValues = function (e, t, i) {
        var r = new _(3);
        return (r[0] = e), (r[1] = t), (r[2] = i), r;
      }),
      (T.copy = function (e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }),
      (T.set = function (e, t, i, r) {
        return (e[0] = t), (e[1] = i), (e[2] = r), e;
      }),
      (T.add = function (e, t, i) {
        return (
          (e[0] = t[0] + i[0]), (e[1] = t[1] + i[1]), (e[2] = t[2] + i[2]), e
        );
      }),
      (T.subtract = function (e, t, i) {
        return (
          (e[0] = t[0] - i[0]), (e[1] = t[1] - i[1]), (e[2] = t[2] - i[2]), e
        );
      }),
      (T.sub = T.subtract),
      (T.multiply = function (e, t, i) {
        return (
          (e[0] = t[0] * i[0]), (e[1] = t[1] * i[1]), (e[2] = t[2] * i[2]), e
        );
      }),
      (T.mul = T.multiply),
      (T.divide = function (e, t, i) {
        return (
          (e[0] = t[0] / i[0]), (e[1] = t[1] / i[1]), (e[2] = t[2] / i[2]), e
        );
      }),
      (T.div = T.divide),
      (T.min = function (e, t, i) {
        return (
          (e[0] = Math.min(t[0], i[0])),
          (e[1] = Math.min(t[1], i[1])),
          (e[2] = Math.min(t[2], i[2])),
          e
        );
      }),
      (T.max = function (e, t, i) {
        return (
          (e[0] = Math.max(t[0], i[0])),
          (e[1] = Math.max(t[1], i[1])),
          (e[2] = Math.max(t[2], i[2])),
          e
        );
      }),
      (T.scale = function (e, t, i) {
        return (e[0] = t[0] * i), (e[1] = t[1] * i), (e[2] = t[2] * i), e;
      }),
      (T.scaleAndAdd = function (e, t, i, r) {
        return (
          (e[0] = t[0] + i[0] * r),
          (e[1] = t[1] + i[1] * r),
          (e[2] = t[2] + i[2] * r),
          e
        );
      }),
      (T.distance = function (e, t) {
        var i = t[0] - e[0],
          r = t[1] - e[1],
          s = t[2] - e[2];
        return Math.sqrt(i * i + r * r + s * s);
      }),
      (T.dist = T.distance),
      (T.squaredDistance = function (e, t) {
        var i = t[0] - e[0],
          r = t[1] - e[1],
          s = t[2] - e[2];
        return i * i + r * r + s * s;
      }),
      (T.sqrDist = T.squaredDistance),
      (T.length = function (e) {
        var t = e[0],
          i = e[1],
          r = e[2];
        return Math.sqrt(t * t + i * i + r * r);
      }),
      (T.len = T.length),
      (T.squaredLength = function (e) {
        var t = e[0],
          i = e[1],
          r = e[2];
        return t * t + i * i + r * r;
      }),
      (T.sqrLen = T.squaredLength),
      (T.negate = function (e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), e;
      }),
      (T.normalize = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = i * i + r * r + s * s;
        return (
          o > 0 &&
            ((o = 1 / Math.sqrt(o)),
            (e[0] = t[0] * o),
            (e[1] = t[1] * o),
            (e[2] = t[2] * o)),
          e
        );
      }),
      (T.dot = function (e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }),
      (T.cross = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = i[0],
          a = i[1],
          h = i[2];
        return (
          (e[0] = s * h - o * a),
          (e[1] = o * n - r * h),
          (e[2] = r * a - s * n),
          e
        );
      }),
      (T.lerp = function (e, t, i, r) {
        var s = t[0],
          o = t[1],
          n = t[2];
        return (
          (e[0] = s + r * (i[0] - s)),
          (e[1] = o + r * (i[1] - o)),
          (e[2] = n + r * (i[2] - n)),
          e
        );
      }),
      (T.random = function (e, t) {
        t = t || 1;
        var i = 2 * x() * Math.PI,
          r = 2 * x() - 1,
          s = Math.sqrt(1 - r * r) * t;
        return (
          (e[0] = Math.cos(i) * s), (e[1] = Math.sin(i) * s), (e[2] = r * t), e
        );
      }),
      (T.transformMat4 = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2];
        return (
          (e[0] = i[0] * r + i[4] * s + i[8] * o + i[12]),
          (e[1] = i[1] * r + i[5] * s + i[9] * o + i[13]),
          (e[2] = i[2] * r + i[6] * s + i[10] * o + i[14]),
          e
        );
      }),
      (T.transformMat3 = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2];
        return (
          (e[0] = r * i[0] + s * i[3] + o * i[6]),
          (e[1] = r * i[1] + s * i[4] + o * i[7]),
          (e[2] = r * i[2] + s * i[5] + o * i[8]),
          e
        );
      }),
      (T.transformQuat = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = i[0],
          a = i[1],
          h = i[2],
          l = i[3],
          p = l * r + a * o - h * s,
          c = l * s + h * r - n * o,
          u = l * o + n * s - a * r,
          d = -n * r - a * s - h * o;
        return (
          (e[0] = p * l + d * -n + c * -h - u * -a),
          (e[1] = c * l + d * -a + u * -n - p * -h),
          (e[2] = u * l + d * -h + p * -a - c * -n),
          e
        );
      }),
      (T.forEach =
        ((C = T.create()),
        function (e, t, i, r, s, o) {
          var n, a;
          for (
            t || (t = 3),
              i || (i = 0),
              a = r ? Math.min(r * t + i, e.length) : e.length,
              n = i;
            n < a;
            n += t
          )
            (C[0] = e[n]),
              (C[1] = e[n + 1]),
              (C[2] = e[n + 2]),
              s(C, C, o),
              (e[n] = C[0]),
              (e[n + 1] = C[1]),
              (e[n + 2] = C[2]);
          return e;
        })),
      (T.str = function (e) {
        return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
      }),
      (T.multiplyScalar = function (e, t, i) {
        return (e[0] = t[0] * i), (e[1] = t[1] * i), (e[2] = t[2] * i), e;
      }),
      (T.clear = function (e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), e;
      }),
      (T.addXYZ = function (e, t, i, r, s) {
        return (e[0] = t[0] + i), (e[1] = t[1] + r), (e[2] = t[2] + s), e;
      });
    var P = {
      create: function () {
        var e = new _(4);
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 0), e;
      },
      clone: function (e) {
        var t = new _(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      },
      fromValues: function (e, t, i, r) {
        var s = new _(4);
        return (s[0] = e), (s[1] = t), (s[2] = i), (s[3] = r), s;
      },
      copy: function (e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      },
      set: function (e, t, i, r, s) {
        return (e[0] = t), (e[1] = i), (e[2] = r), (e[3] = s), e;
      },
      add: function (e, t, i) {
        return (
          (e[0] = t[0] + i[0]),
          (e[1] = t[1] + i[1]),
          (e[2] = t[2] + i[2]),
          (e[3] = t[3] + i[3]),
          e
        );
      },
      subtract: function (e, t, i) {
        return (
          (e[0] = t[0] - i[0]),
          (e[1] = t[1] - i[1]),
          (e[2] = t[2] - i[2]),
          (e[3] = t[3] - i[3]),
          e
        );
      },
    };
    (P.sub = P.subtract),
      (P.multiply = function (e, t, i) {
        return (
          (e[0] = t[0] * i[0]),
          (e[1] = t[1] * i[1]),
          (e[2] = t[2] * i[2]),
          (e[3] = t[3] * i[3]),
          e
        );
      }),
      (P.mul = P.multiply),
      (P.divide = function (e, t, i) {
        return (
          (e[0] = t[0] / i[0]),
          (e[1] = t[1] / i[1]),
          (e[2] = t[2] / i[2]),
          (e[3] = t[3] / i[3]),
          e
        );
      }),
      (P.div = P.divide),
      (P.min = function (e, t, i) {
        return (
          (e[0] = Math.min(t[0], i[0])),
          (e[1] = Math.min(t[1], i[1])),
          (e[2] = Math.min(t[2], i[2])),
          (e[3] = Math.min(t[3], i[3])),
          e
        );
      }),
      (P.max = function (e, t, i) {
        return (
          (e[0] = Math.max(t[0], i[0])),
          (e[1] = Math.max(t[1], i[1])),
          (e[2] = Math.max(t[2], i[2])),
          (e[3] = Math.max(t[3], i[3])),
          e
        );
      }),
      (P.scale = function (e, t, i) {
        return (
          (e[0] = t[0] * i),
          (e[1] = t[1] * i),
          (e[2] = t[2] * i),
          (e[3] = t[3] * i),
          e
        );
      }),
      (P.scaleAndAdd = function (e, t, i, r) {
        return (
          (e[0] = t[0] + i[0] * r),
          (e[1] = t[1] + i[1] * r),
          (e[2] = t[2] + i[2] * r),
          (e[3] = t[3] + i[3] * r),
          e
        );
      }),
      (P.distance = function (e, t) {
        var i = t[0] - e[0],
          r = t[1] - e[1],
          s = t[2] - e[2],
          o = t[3] - e[3];
        return Math.sqrt(i * i + r * r + s * s + o * o);
      }),
      (P.dist = P.distance),
      (P.squaredDistance = function (e, t) {
        var i = t[0] - e[0],
          r = t[1] - e[1],
          s = t[2] - e[2],
          o = t[3] - e[3];
        return i * i + r * r + s * s + o * o;
      }),
      (P.sqrDist = P.squaredDistance),
      (P.length = function (e) {
        var t = e[0],
          i = e[1],
          r = e[2],
          s = e[3];
        return Math.sqrt(t * t + i * i + r * r + s * s);
      }),
      (P.len = P.length),
      (P.squaredLength = function (e) {
        var t = e[0],
          i = e[1],
          r = e[2],
          s = e[3];
        return t * t + i * i + r * r + s * s;
      }),
      (P.sqrLen = P.squaredLength),
      (P.negate = function (e, t) {
        return (
          (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e
        );
      }),
      (P.normalize = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = i * i + r * r + s * s + o * o;
        return (
          n > 0 &&
            ((n = 1 / Math.sqrt(n)),
            (e[0] = t[0] * n),
            (e[1] = t[1] * n),
            (e[2] = t[2] * n),
            (e[3] = t[3] * n)),
          e
        );
      }),
      (P.dot = function (e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
      }),
      (P.lerp = function (e, t, i, r) {
        var s = t[0],
          o = t[1],
          n = t[2],
          a = t[3];
        return (
          (e[0] = s + r * (i[0] - s)),
          (e[1] = o + r * (i[1] - o)),
          (e[2] = n + r * (i[2] - n)),
          (e[3] = a + r * (i[3] - a)),
          e
        );
      }),
      (P.random = function (e, t) {
        return (
          (t = t || 1),
          (e[0] = x()),
          (e[1] = x()),
          (e[2] = x()),
          (e[3] = x()),
          P.normalize(e, e),
          P.scale(e, e, t),
          e
        );
      }),
      (P.transformMat4 = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3];
        return (
          (e[0] = i[0] * r + i[4] * s + i[8] * o + i[12] * n),
          (e[1] = i[1] * r + i[5] * s + i[9] * o + i[13] * n),
          (e[2] = i[2] * r + i[6] * s + i[10] * o + i[14] * n),
          (e[3] = i[3] * r + i[7] * s + i[11] * o + i[15] * n),
          e
        );
      }),
      (P.transformQuat = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = i[0],
          a = i[1],
          h = i[2],
          l = i[3],
          p = l * r + a * o - h * s,
          c = l * s + h * r - n * o,
          u = l * o + n * s - a * r,
          d = -n * r - a * s - h * o;
        return (
          (e[0] = p * l + d * -n + c * -h - u * -a),
          (e[1] = c * l + d * -a + u * -n - p * -h),
          (e[2] = u * l + d * -h + p * -a - c * -n),
          e
        );
      }),
      (P.forEach = (function () {
        var e = P.create();
        return function (t, i, r, s, o, n) {
          var a, h;
          for (
            i || (i = 4),
              r || (r = 0),
              h = s ? Math.min(s * i + r, t.length) : t.length,
              a = r;
            a < h;
            a += i
          )
            (e[0] = t[a]),
              (e[1] = t[a + 1]),
              (e[2] = t[a + 2]),
              (e[3] = t[a + 3]),
              o(e, e, n),
              (t[a] = e[0]),
              (t[a + 1] = e[1]),
              (t[a + 2] = e[2]),
              (t[a + 3] = e[3]);
          return t;
        };
      })()),
      (P.str = function (e) {
        return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      });
    var z,
      E,
      k,
      M,
      A = {};
    (A.create = function () {
      var e = new _(4);
      return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
    }),
      (A.rotationTo =
        ((z = T.create()),
        (E = T.fromValues(1, 0, 0)),
        (k = T.fromValues(0, 1, 0)),
        function (e, t, i) {
          var r = T.dot(t, i);
          return r < -0.999999
            ? (T.cross(z, E, t),
              T.length(z) < 1e-6 && T.cross(z, k, t),
              T.normalize(z, z),
              A.setAxisAngle(e, z, Math.PI),
              e)
            : r > 0.999999
            ? ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e)
            : (T.cross(z, t, i),
              (e[0] = z[0]),
              (e[1] = z[1]),
              (e[2] = z[2]),
              (e[3] = 1 + r),
              A.normalize(e, e));
        })),
      (A.setAxes =
        ((M = S.create()),
        function (e, t, i, r) {
          return (
            (M[0] = i[0]),
            (M[3] = i[1]),
            (M[6] = i[2]),
            (M[1] = r[0]),
            (M[4] = r[1]),
            (M[7] = r[2]),
            (M[2] = t[0]),
            (M[5] = t[1]),
            (M[8] = t[2]),
            A.normalize(e, A.fromMat3(e, M))
          );
        })),
      (A.clone = P.clone),
      (A.fromValues = P.fromValues),
      (A.copy = P.copy),
      (A.set = P.set),
      (A.identity = function (e) {
        return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      }),
      (A.setAxisAngle = function (e, t, i) {
        i *= 0.5;
        var r = Math.sin(i);
        return (
          (e[0] = r * t[0]),
          (e[1] = r * t[1]),
          (e[2] = r * t[2]),
          (e[3] = Math.cos(i)),
          e
        );
      }),
      (A.add = P.add),
      (A.multiply = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = i[0],
          h = i[1],
          l = i[2],
          p = i[3];
        return (
          (e[0] = r * p + n * a + s * l - o * h),
          (e[1] = s * p + n * h + o * a - r * l),
          (e[2] = o * p + n * l + r * h - s * a),
          (e[3] = n * p - r * a - s * h - o * l),
          e
        );
      }),
      (A.mul = A.multiply),
      (A.scale = P.scale),
      (A.rotateX = function (e, t, i) {
        i *= 0.5;
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = Math.sin(i),
          h = Math.cos(i);
        return (
          (e[0] = r * h + n * a),
          (e[1] = s * h + o * a),
          (e[2] = o * h - s * a),
          (e[3] = n * h - r * a),
          e
        );
      }),
      (A.rotateY = function (e, t, i) {
        i *= 0.5;
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = Math.sin(i),
          h = Math.cos(i);
        return (
          (e[0] = r * h - o * a),
          (e[1] = s * h + n * a),
          (e[2] = o * h + r * a),
          (e[3] = n * h - s * a),
          e
        );
      }),
      (A.rotateZ = function (e, t, i) {
        i *= 0.5;
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = Math.sin(i),
          h = Math.cos(i);
        return (
          (e[0] = r * h + s * a),
          (e[1] = s * h - r * a),
          (e[2] = o * h + n * a),
          (e[3] = n * h - o * a),
          e
        );
      }),
      (A.calculateW = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2];
        return (
          (e[0] = i),
          (e[1] = r),
          (e[2] = s),
          (e[3] = -Math.sqrt(Math.abs(1 - i * i - r * r - s * s))),
          e
        );
      }),
      (A.dot = P.dot),
      (A.lerp = P.lerp),
      (A.slerp = function (e, t, i, r) {
        var s,
          o,
          n,
          a,
          h,
          l = t[0],
          p = t[1],
          c = t[2],
          u = t[3],
          d = i[0],
          m = i[1],
          f = i[2],
          g = i[3];
        return (
          (o = l * d + p * m + c * f + u * g) < 0 &&
            ((o = -o), (d = -d), (m = -m), (f = -f), (g = -g)),
          1 - o > 1e-6
            ? ((s = Math.acos(o)),
              (n = Math.sin(s)),
              (a = Math.sin((1 - r) * s) / n),
              (h = Math.sin(r * s) / n))
            : ((a = 1 - r), (h = r)),
          (e[0] = a * l + h * d),
          (e[1] = a * p + h * m),
          (e[2] = a * c + h * f),
          (e[3] = a * u + h * g),
          e
        );
      }),
      (A.invert = function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = i * i + r * r + s * s + o * o,
          a = n ? 1 / n : 0;
        return (
          (e[0] = -i * a), (e[1] = -r * a), (e[2] = -s * a), (e[3] = o * a), e
        );
      }),
      (A.conjugate = function (e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
      }),
      (A.length = P.length),
      (A.len = A.length),
      (A.squaredLength = P.squaredLength),
      (A.sqrLen = A.squaredLength),
      (A.normalize = P.normalize),
      (A.fromMat3 = function (e, t) {
        var i,
          r = t[0] + t[4] + t[8];
        if (r > 0)
          (i = Math.sqrt(r + 1)),
            (e[3] = 0.5 * i),
            (i = 0.5 / i),
            (e[0] = (t[7] - t[5]) * i),
            (e[1] = (t[2] - t[6]) * i),
            (e[2] = (t[3] - t[1]) * i);
        else {
          var s = 0;
          t[4] > t[0] && (s = 1), t[8] > t[3 * s + s] && (s = 2);
          var o = (s + 1) % 3,
            n = (s + 2) % 3;
          (i = Math.sqrt(t[3 * s + s] - t[3 * o + o] - t[3 * n + n] + 1)),
            (e[s] = 0.5 * i),
            (i = 0.5 / i),
            (e[3] = (t[3 * n + o] - t[3 * o + n]) * i),
            (e[o] = (t[3 * o + s] + t[3 * s + o]) * i),
            (e[n] = (t[3 * n + s] + t[3 * s + n]) * i);
        }
        return e;
      }),
      (A.str = function (e) {
        return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      });
    class L {
      constructor() {
        (this.position = T.create()),
          (this.rotation = T.create()),
          (this.scale = T.set(T.create(), 1, 1, 1)),
          (this.up = T.set(T.create(), 0, 1, 0)),
          (this.lookAt = null),
          (this.matrix = b.create()),
          (this.worldMatrix = b.create()),
          (this.quaternion = null),
          (this._quaternion = A.create()),
          (this.inverseWorldMatrix = b.create());
      }
      render() {
        this.updateMatrix(), this.updateWorldMatrix();
      }
      updateMatrix() {
        b.identity(this.matrix);
        let e = b.create();
        if (
          (this.quaternion
            ? b.fromRotationTranslation(
                this.matrix,
                this.quaternion,
                this.position
              )
            : (b.translate(this.matrix, this.matrix, this.position),
              b.rotateX(e, e, this.rotation[0]),
              b.rotateY(e, e, this.rotation[1]),
              b.rotateZ(e, e, this.rotation[2])),
          null !== this.lookAt)
        ) {
          let t = b.create();
          b.lookAt(t, this.position, this.lookAt, this.up);
          let i = S.create();
          S.normalFromMat4(i, t), A.fromMat3(this._quaternion, i);
          let r = b.create();
          b.invert(r, t), b.multiply(e, e, r);
        }
        b.multiply(this.matrix, this.matrix, e),
          b.scale(this.matrix, this.matrix, this.scale);
      }
      updateWorldMatrix() {
        this.parent
          ? b.multiply(this.worldMatrix, this.matrix, this.parent.worldMatrix)
          : (this.worldMatrix = this.matrix),
          b.invert(this.inverseWorldMatrix, this.worldMatrix);
      }
    }
    class O extends L {
      constructor() {
        super(),
          (this.visible = !0),
          (this.parent = null),
          (this.children = []);
      }
      add(e) {
        for (
          let t = 0, i = this.children.length;
          t < i && this.children[t] != e;
          t++
        );
        this.children.push(e), (e.parent = this);
      }
      removeChild(e) {
        for (let t = 0, i = this.children.length; t < i; t++)
          if (this.children[t] == e) {
            (e.parent = null), this.children.splice(t, 1);
            break;
          }
      }
      destroy() {
        for (let e = 0, t = this.children.length; e < t; e++)
          this.children[e].destroy();
        null !== this.parent && this.parent.removeChild(this);
      }
      render(e) {
        super.render();
        for (let t = 0, i = this.children.length; t < i; t++)
          this.children[t].visible && this.children[t].render(e);
      }
    }
    class D extends O {
      constructor(e) {
        super(),
          (this.material = null),
          (this.geometry = null),
          (this.options = e || {}),
          (this._viewMatrix = b.create()),
          (this._modelViewMatrix = b.create());
      }
      render(e) {
        super.render(e),
          this.material &&
            this.geometry &&
            this.visible &&
            (this.options.beforeRender && this.options.beforeRender(),
            b.invert(this._viewMatrix, e.worldMatrix),
            b.multiply(
              this._modelViewMatrix,
              this._viewMatrix,
              this.worldMatrix
            ),
            void 0 !== this.material.uniforms.uMMatrix &&
              (this.material.uniforms.uMMatrix.value = this.worldMatrix),
            void 0 !== this.material.uniforms.uMVMatrix &&
              (this.material.uniforms.uMVMatrix.value = this._modelViewMatrix),
            void 0 !== this.material.uniforms.uPMatrix &&
              (this.material.uniforms.uPMatrix.value = e.projectionMatrix),
            this.material.draw(this.geometry));
      }
    }
    class N {
      constructor(e) {
        (this.canvas = (e && e.canvas) || document.createElement("canvas")),
          (this.canvas.style.transformOrigin = "0 0"),
          (this.contextAttributes = Object.assign(
            {},
            {
              alpha: !1,
              depth: !0,
              stencil: !0,
              antialias: !1,
              premultipliedAlpha: !0,
              preserveDrawingBuffer: !1,
              failIfMajorPerformanceCaveat: !1,
            },
            e || {}
          )),
          (this._pixelRatio = 1),
          (this.gl = this.canvas.getContext(
            "experimental-webgl",
            this.contextAttributes
          )),
          (this.handleContextLost = this.handleContextLost.bind(this)),
          (this.handleContextRestored = this.handleContextRestored.bind(this)),
          this.canvas.addEventListener(
            "webglcontextlost",
            this.handleContextLost,
            !1
          ),
          this.canvas.addEventListener(
            "webglcontextrestored",
            this.handleContextRestored,
            !1
          );
      }
      handleContextLost(e) {
        e.preventDefault();
      }
      handleContextRestored() {}
      handleContextRestored() {}
      render(e, t, i) {
        t.update(),
          i
            ? (i.bindFrame(), e.render(t), i.unbind())
            : (this.gl.viewport(
                0,
                0,
                this._width * this._pixelRatio,
                this._height * this._pixelRatio
              ),
              e.render(t));
      }
      resize(e, t) {
        (this._width = e),
          (this._height = t),
          (this.canvas.width = this._width * this._pixelRatio),
          (this.canvas.height = this._height * this._pixelRatio),
          (this.canvas.style.transform =
            "scale(" + 1 / this._pixelRatio + ") translateZ(0)"),
          this.gl.viewport(
            0,
            0,
            this._width * this._pixelRatio,
            this._height * this._pixelRatio
          );
      }
      clearColor(e, t, i, r) {
        this.gl.clearColor(e, t, i, r);
      }
      clear(e, t, i) {
        var r = 0;
        (void 0 === e || e) && (r |= this.gl.COLOR_BUFFER_BIT),
          (void 0 === t || t) && (r |= this.gl.DEPTH_BUFFER_BIT),
          (void 0 === i || i) && (r |= this.gl.STENCIL_BUFFER_BIT),
          this.gl.clear(r);
      }
      setPixelRatio(e) {
        (this._pixelRatio = e), this.resize(this._width, this._height);
      }
    }
    const R = "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
      j = !!window.navigator.pointerEnabled,
      F = !!window.navigator.msPointerEnabled,
      I = R
        ? "touchstart"
        : j
        ? "pointerdown"
        : F
        ? "MSPointerDown"
        : "mousedown",
      U = R
        ? "touchmove"
        : j
        ? "pointermove"
        : F
        ? "MSPointerMove"
        : "mousemove",
      H = R ? "touchend" : j ? "pointerup" : F ? "MSPointerUp" : "mouseup";
    class B extends L {
      constructor(e) {
        super(),
          (e = Object.assign(
            {},
            {
              fov: 45,
              aspect: window.innerWidth / window.innerHeight,
              near: 10,
              far: 1e3,
              type: "perspective",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              orbitControl: !1,
            },
            e
          )),
          (this.fov = e.fov),
          (this.aspect = e.aspect),
          (this.near = e.near),
          (this.far = e.far),
          (this.type = e.type),
          (this.left = e.left),
          (this.right = e.right),
          (this.top = e.top),
          (this.bottom = e.bottom),
          (this.orbitControl = e.orbitControl),
          (this.projectionMatrix = b.create()),
          this.updateProjectionMatrix(),
          1 == e.orbitControl &&
            (this.lookAt ||
              ((this.lookAt = T.create()), T.set(this.lookAt, 0, 0, 0)),
            this._initPointerEvents());
      }
      updateProjectionMatrix() {
        "perspective" == this.type
          ? b.perspective(
              this.projectionMatrix,
              (this.fov * Math.PI) / 180,
              this.aspect,
              this.near,
              this.far
            )
          : "ortho" == this.type &&
            b.ortho(
              this.projectionMatrix,
              this.left,
              this.right,
              this.bottom,
              this.top,
              this.near,
              this.far
            );
      }
      _initPointerEvents() {
        (this.winWidth = window.innerWidth),
          (this.winHeight = window.innerHeight),
          (this._isPointerDown = !1),
          (this.isRightClick = !1),
          (this.pointerXMove = 0),
          (this.pointerYMove = 0),
          (this._cameraDistance = this.position[2]),
          (this.pointerX = 0),
          (this.pointerY = 0),
          (this.pointerZ = 0),
          (this.lastPointerX = 0),
          (this.lastPointerY = 0),
          (this.lastPointerZ = 0),
          (this.theta = 0),
          (this.phi = 0),
          (this.thetaDown = 0),
          (this.phiDown = 0),
          (this.currTheta = 0),
          (this.currPhi = 0),
          (this._minPolarAngle = -0.5 * Math.PI),
          (this._maxPolarAngle = 0.5 * Math.PI),
          (this._onPointerDown = this._onPointerDown.bind(this)),
          (this._onPointerMove = this._onPointerMove.bind(this)),
          (this._onPointerUp = this._onPointerUp.bind(this)),
          (this._onMouseWheel = this._onMouseWheel.bind(this)),
          (this.onContextMenu = this.onContextMenu.bind(this)),
          document.addEventListener(I, this._onPointerDown, !1),
          document.addEventListener(U, this._onPointerMove, !1),
          document.addEventListener(H, this._onPointerUp, !1),
          document.addEventListener("DOMMouseScroll", this._onMouseWheel, !1),
          document.addEventListener("mousewheel", this._onMouseWheel, !1),
          document.addEventListener("contextmenu", this.onContextMenu, !1);
      }
      onContextMenu(e) {
        event.preventDefault();
      }
      _onMouseWheel(e) {
        var t;
        e.preventDefault(),
          e.wheelDelta
            ? (t = e.wheelDelta)
            : e.detail
            ? (t = 40 * -e.detail)
            : e.wheelDeltaX
            ? ((t = e.wheelDeltaY / 12), e.wheelDeltaX)
            : void 0 !== e.axis && e.axis === e.HORIZONTAL_AXIS
            ? (t = 0)
            : (t = 0),
          (this._cameraDistance += -1 * t * 0.01);
      }
      _onPointerDown(e) {
        3 == e.which &&
          ((this.isRightClick = !0), e.preventDefault(), e.stopPropagation()),
          (this._isPointerDown = !0),
          (this.touchEvent = R ? e.touches[0] || e.changedTouches[0] : e),
          (this.touchEventPageX = this.touchEvent.pageX),
          (this.touchEventPageY = this.touchEvent.pageY),
          (this.touchEventPageX -=
            window.pageXOffset || document.documentElement.scrollLeft),
          (this.touchEventPageY -=
            window.pageYOffset || document.documentElement.scrollTop),
          (this.pointerXDown = this.touchEventPageX),
          (this.pointerYDown = this.touchEventPageY),
          this.isRightClick &&
            ((this.startPointerX = this.pointerXMove),
            (this.startPointerY = this.pointerYMove)),
          (this.thetaDown = this.theta),
          (this.phiDown = this.phi);
      }
      _onPointerMove(e) {
        this._isPointerDown &&
          (e.preventDefault(),
          (this.touchEvent = R ? e.touches[0] || e.changedTouches[0] : e),
          (this.touchEventPageX = this.touchEvent.pageX),
          (this.touchEventPageY = this.touchEvent.pageY),
          (this.touchEventPageX -=
            window.pageXOffset || document.documentElement.scrollLeft),
          (this.touchEventPageY -=
            window.pageYOffset || document.documentElement.scrollTop),
          this.isRightClick
            ? ((this.pointerXMove =
                this.startPointerX +
                (this.touchEventPageX - this.pointerXDown)),
              (this.pointerYMove =
                this.startPointerY +
                (this.touchEventPageY - this.pointerYDown)))
            : ((this.pointerXOrbiter =
                this.pointerXDown - this.touchEventPageX),
              (this.pointerYOrbiter = this.pointerYDown - this.touchEventPageY),
              (this.theta =
                this.thetaDown +
                (this.pointerXOrbiter / this.winWidth) * 2 * Math.PI),
              (this.phi =
                this.phiDown +
                (this.pointerYOrbiter / this.winHeight) * 2 * Math.PI * -1),
              (this.phi = Math.max(
                this._minPolarAngle,
                Math.min(this._maxPolarAngle, this.phi)
              ))));
      }
      _onPointerUp() {
        (this._isPointerDown = !1), (this.isRightClick = !1);
      }
      update() {
        super.render(),
          this.orbitControl &&
            ((this.currTheta += 0.1 * (this.theta - this.currTheta)),
            (this.currPhi += 0.1 * (this.phi - this.currPhi)),
            (this.position[0] =
              Math.sin(this.currTheta) *
              Math.cos(this.currPhi) *
              this._cameraDistance),
            (this.position[1] = Math.sin(this.currPhi) * this._cameraDistance),
            (this.position[2] =
              Math.cos(this.currTheta) *
              Math.cos(this.currPhi) *
              this._cameraDistance),
            (this.lookAt[0] = this.pointerXMove / -100),
            (this.lookAt[1] = this.pointerYMove / 100));
      }
    }
    class q {
      constructor(e, t) {
        if (
          ((this.options = Object.assign(
            {},
            {
              format: e.RGBA,
              type: e.UNSIGNED_BYTE,
              linear: !0,
              mipmap: !1,
              mipmapLinear: !1,
              wrapS: e.CLAMP_TO_EDGE,
              wrapT: e.CLAMP_TO_EDGE,
              useDepthTexture: !1,
              depthTexture: null,
            },
            t
          )),
          (this.gl = e),
          (this.width = this.options.width),
          (this.height = this.options.height),
          (this.format = this.options.format),
          (this.type = this.options.type),
          (this.linear = this.options.linear),
          (this.mipmap = this.options.mipmap),
          (this.mipmapLinear = this.options.mipmapLinear),
          this.type == e.FLOAT)
        ) {
          var i = e.getExtension("OES_texture_float");
          e.getExtension("OES_texture_float_linear");
          i || (this.type = "HALF_FLOAT");
        }
        if ("HALF_FLOAT" == this.type) {
          var r = e.getExtension("OES_texture_half_float");
          e.getExtension("OES_texture_half_float_linear");
          this.type = r ? r.HALF_FLOAT_OES : e.UNSIGNED_BYTE;
        }
        (this._colorTexture = this.gl.createTexture()),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture),
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.format,
            this.width,
            this.height,
            0,
            this.format,
            this.type,
            null
          ),
          Object.defineProperty(this, "wrapS", {
            set: (e) => {
              this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_WRAP_S,
                  e
                );
            },
          }),
          Object.defineProperty(this, "wrapT", {
            set: (e) => {
              this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture),
                this.gl.texParameteri(
                  this.gl.TEXTURE_2D,
                  this.gl.TEXTURE_WRAP_T,
                  e
                );
            },
          }),
          (this.wrapS = this.options.wrapS),
          (this.wrapT = this.options.wrapT),
          (v(this.width) && v(this.height)) ||
            ((this.wrapS = e.CLAMP_TO_EDGE),
            (this.wrapT = e.CLAMP_TO_EDGE),
            (this.mipmap = !1),
            (this.mipmapLinear = !1)),
          this.setFilter(this.linear, this.mipmap, this.mipmapLinear),
          this.options.depthTexture ||
            ((this.renderbuffer = this.gl.createRenderbuffer()),
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer),
            this.gl.renderbufferStorage(
              this.gl.RENDERBUFFER,
              this.gl.DEPTH_COMPONENT16,
              this.width,
              this.height
            )),
          (this.fbo = this.gl.createFramebuffer()),
          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo),
          this.gl.framebufferTexture2D(
            this.gl.FRAMEBUFFER,
            this.gl.COLOR_ATTACHMENT0,
            this.gl.TEXTURE_2D,
            this._colorTexture,
            0
          ),
          this.options.depthTexture
            ? this.gl.framebufferTexture2D(
                this.gl.FRAMEBUFFER,
                this.gl.DEPTH_ATTACHMENT,
                this.gl.TEXTURE_2D,
                this.options.depthTexture._texture,
                0
              )
            : this.gl.framebufferRenderbuffer(
                this.gl.FRAMEBUFFER,
                this.gl.DEPTH_ATTACHMENT,
                this.gl.RENDERBUFFER,
                this.renderbuffer
              ),
          this.unbind();
      }
      setFilter(e, t, i) {
        var r = this.gl,
          s = g(!!e, !!t, !!i);
        r.bindTexture(r.TEXTURE_2D, this._colorTexture),
          r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, g(!!e, !1, !1)),
          r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, s);
      }
      resize(e, t) {
        (this.width === e && this.height === t) ||
          ((this.width = 0 | e), (this.height = 0 | t)),
          (v(this.width) && v(this.height)) ||
            ((this.wrapS = this.gl.CLAMP_TO_EDGE),
            (this.wrapT = this.gl.CLAMP_TO_EDGE),
            (this.mipmap = !1),
            (this.mipmapLinear = !1),
            this.setFilter(this.linear, this.mipmap, this.mipmapLinear)),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture),
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.format,
            this.width,
            this.height,
            0,
            this.format,
            this.type,
            null
          ),
          this.options.depthTexture &&
            this.depthTexture.resize(this.width, this.height),
          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo),
          this.gl.framebufferTexture2D(
            this.gl.FRAMEBUFFER,
            this.gl.COLOR_ATTACHMENT0,
            this.gl.TEXTURE_2D,
            this._colorTexture,
            0
          ),
          this.options.depthTexture
            ? this.gl.framebufferTexture2D(
                this.gl.FRAMEBUFFER,
                this.gl.DEPTH_ATTACHMENT,
                this.gl.TEXTURE_2D,
                this.options.depthTexture._texture,
                0
              )
            : (this.gl.bindRenderbuffer(
                this.gl.RENDERBUFFER,
                this.renderbuffer
              ),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.DEPTH_COMPONENT16,
                this.width,
                this.height
              ),
              this.gl.framebufferRenderbuffer(
                this.gl.FRAMEBUFFER,
                this.gl.DEPTH_ATTACHMENT,
                this.gl.RENDERBUFFER,
                this.renderbuffer
              )),
          this.unbind();
      }
      bindFrame() {
        this.gl.viewport(0, 0, this.width, this.height),
          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo),
          this.options.depthTexture ||
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer),
          this.clear();
      }
      bind(e) {
        void 0 !== e && this.gl.activeTexture(this.gl.TEXTURE0 + (0 | e)),
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture);
      }
      unbind() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, null),
          this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null),
          this.options.depthTexture ||
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
      }
      clear(e, t, i) {
        var r = 0;
        (void 0 === e || e) && (r |= this.gl.COLOR_BUFFER_BIT),
          (void 0 === t || t) && (r |= this.gl.DEPTH_BUFFER_BIT),
          (void 0 === i || i) && (r |= this.gl.STENCIL_BUFFER_BIT),
          this.gl.clear(r);
      }
      dispose() {
        this.gl.deleteFramebuffer(this.fbo),
          (this.fbo = null),
          (this.gl = null);
      }
    }
    class $ extends s {
      constructor(e, t) {
        super(e, 4),
          (t = Object.assign(
            {},
            { width: 1e3, height: 1e3, widthSegments: 1, heightSegments: 1 },
            t
          )),
          (this.width = t.width),
          (this.height = t.height),
          (this.widthSegments = t.widthSegments),
          (this.heightSegments = t.heightSegments),
          this._build(),
          this.addAttribute("index", new Uint16Array(this.indices), 1),
          this.addAttribute("position", new Float32Array(this.vertices), 3),
          this.addAttribute("color", new Float32Array(this.colors), 3),
          this.addAttribute("normal", new Float32Array(this.normals), 3),
          this.addAttribute("uv", new Float32Array(this.uvs), 2, "Plane");
      }
      update() {
        this._build(),
          this.attributes.index.update(new Uint16Array(this.indices), 1),
          this.attributes.position.update(new Float32Array(this.vertices), 3),
          this.attributes.color.update(new Float32Array(this.colors), 3),
          this.attributes.normal.update(new Float32Array(this.normals), 3),
          this.attributes.uv.update(new Float32Array(this.uvs), 2, "Plane");
      }
      _build() {
        (this.indices = []),
          (this.vertices = []),
          (this.normals = []),
          (this.colors = []),
          (this.uvs = []);
        var e,
          t,
          i = 0.5 * this.width,
          r = 0.5 * this.height,
          s = this.widthSegments >> 0,
          o = this.heightSegments >> 0,
          n = s + 1,
          a = o + 1,
          h = this.width / s,
          l = this.height / o;
        for (t = 0; t < a; t++) {
          var p = t * l - r;
          for (e = 0; e < n; e++) {
            var c = e * h - i;
            this.vertices.push(c, -p, 0),
              this.normals.push(0, 0, 1),
              this.colors.push(0, 0, 0),
              this.uvs.push(e / s),
              this.uvs.push(1 - t / o);
          }
        }
        for (t = 0; t < o; t++)
          for (e = 0; e < s; e++) {
            var u = e + n * t,
              d = e + n * (t + 1),
              m = e + 1 + n * (t + 1),
              f = e + 1 + n * t;
            this.indices.push(u, d, f), this.indices.push(d, m, f);
          }
        this.length = this.vertices.length / 3;
      }
    }
    var V = {
      create: function () {
        var e = new _(2);
        return (e[0] = 0), (e[1] = 0), e;
      },
      clone: function (e) {
        var t = new _(2);
        return (t[0] = e[0]), (t[1] = e[1]), t;
      },
      fromValues: function (e, t) {
        var i = new _(2);
        return (i[0] = e), (i[1] = t), i;
      },
      copy: function (e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), e;
      },
      set: function (e, t, i) {
        return (e[0] = t), (e[1] = i), e;
      },
      add: function (e, t, i) {
        return (e[0] = t[0] + i[0]), (e[1] = t[1] + i[1]), e;
      },
      subtract: function (e, t, i) {
        return (e[0] = t[0] - i[0]), (e[1] = t[1] - i[1]), e;
      },
    };
    (V.sub = V.subtract),
      (V.multiply = function (e, t, i) {
        return (e[0] = t[0] * i[0]), (e[1] = t[1] * i[1]), e;
      }),
      (V.mul = V.multiply),
      (V.divide = function (e, t, i) {
        return (e[0] = t[0] / i[0]), (e[1] = t[1] / i[1]), e;
      }),
      (V.div = V.divide),
      (V.min = function (e, t, i) {
        return (e[0] = Math.min(t[0], i[0])), (e[1] = Math.min(t[1], i[1])), e;
      }),
      (V.max = function (e, t, i) {
        return (e[0] = Math.max(t[0], i[0])), (e[1] = Math.max(t[1], i[1])), e;
      }),
      (V.scale = function (e, t, i) {
        return (e[0] = t[0] * i), (e[1] = t[1] * i), e;
      }),
      (V.scaleAndAdd = function (e, t, i, r) {
        return (e[0] = t[0] + i[0] * r), (e[1] = t[1] + i[1] * r), e;
      }),
      (V.distance = function (e, t) {
        var i = t[0] - e[0],
          r = t[1] - e[1];
        return Math.sqrt(i * i + r * r);
      }),
      (V.dist = V.distance),
      (V.squaredDistance = function (e, t) {
        var i = t[0] - e[0],
          r = t[1] - e[1];
        return i * i + r * r;
      }),
      (V.sqrDist = V.squaredDistance),
      (V.length = function (e) {
        var t = e[0],
          i = e[1];
        return Math.sqrt(t * t + i * i);
      }),
      (V.len = V.length),
      (V.squaredLength = function (e) {
        var t = e[0],
          i = e[1];
        return t * t + i * i;
      }),
      (V.sqrLen = V.squaredLength),
      (V.negate = function (e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), e;
      }),
      (V.normalize = function (e, t) {
        var i = t[0],
          r = t[1],
          s = i * i + r * r;
        return (
          s > 0 &&
            ((s = 1 / Math.sqrt(s)), (e[0] = t[0] * s), (e[1] = t[1] * s)),
          e
        );
      }),
      (V.dot = function (e, t) {
        return e[0] * t[0] + e[1] * t[1];
      }),
      (V.cross = function (e, t, i) {
        var r = t[0] * i[1] - t[1] * i[0];
        return (e[0] = e[1] = 0), (e[2] = r), e;
      }),
      (V.lerp = function (e, t, i, r) {
        var s = t[0],
          o = t[1];
        return (e[0] = s + r * (i[0] - s)), (e[1] = o + r * (i[1] - o)), e;
      }),
      (V.random = function (e, t) {
        t = t || 1;
        var i = 2 * x() * Math.PI;
        return (e[0] = Math.cos(i) * t), (e[1] = Math.sin(i) * t), e;
      }),
      (V.transformMat2 = function (e, t, i) {
        var r = t[0],
          s = t[1];
        return (e[0] = i[0] * r + i[2] * s), (e[1] = i[1] * r + i[3] * s), e;
      }),
      (V.transformMat2d = function (e, t, i) {
        var r = t[0],
          s = t[1];
        return (
          (e[0] = i[0] * r + i[2] * s + i[4]),
          (e[1] = i[1] * r + i[3] * s + i[5]),
          e
        );
      }),
      (V.transformMat3 = function (e, t, i) {
        var r = t[0],
          s = t[1];
        return (
          (e[0] = i[0] * r + i[3] * s + i[6]),
          (e[1] = i[1] * r + i[4] * s + i[7]),
          e
        );
      }),
      (V.transformMat4 = function (e, t, i) {
        var r = t[0],
          s = t[1];
        return (
          (e[0] = i[0] * r + i[4] * s + i[12]),
          (e[1] = i[1] * r + i[5] * s + i[13]),
          e
        );
      }),
      (V.forEach = (function () {
        var e = V.create();
        return function (t, i, r, s, o, n) {
          var a, h;
          for (
            i || (i = 2),
              r || (r = 0),
              h = s ? Math.min(s * i + r, t.length) : t.length,
              a = r;
            a < h;
            a += i
          )
            (e[0] = t[a]),
              (e[1] = t[a + 1]),
              o(e, e, n),
              (t[a] = e[0]),
              (t[a + 1] = e[1]);
          return t;
        };
      })()),
      (V.str = function (e) {
        return "vec2(" + e[0] + ", " + e[1] + ")";
      }),
      (V.multiplyScalar = function (e, t, i) {
        return (e[0] = t[0] * i), (e[1] = t[1] * i), e;
      }),
      (V.clear = function (e) {
        return (e[0] = 0), (e[1] = 0), e;
      }),
      (V.addXY = function (e, t, i, r) {
        return (e[0] = t[0] + i), (e[1] = t[1] + r), e;
      });
    var Y = {
      create: function () {
        var e = new _(4);
        return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      },
      clone: function (e) {
        var t = new _(4);
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      },
      copy: function (e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      },
      identity: function (e) {
        return (e[0] = 1), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
      },
      transpose: function (e, t) {
        if (e === t) {
          var i = t[1];
          (e[1] = t[2]), (e[2] = i);
        } else (e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]);
        return e;
      },
      invert: function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = i * o - s * r;
        return n
          ? ((n = 1 / n),
            (e[0] = o * n),
            (e[1] = -r * n),
            (e[2] = -s * n),
            (e[3] = i * n),
            e)
          : null;
      },
      adjoint: function (e, t) {
        var i = t[0];
        return (e[0] = t[3]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = i), e;
      },
      determinant: function (e) {
        return e[0] * e[3] - e[2] * e[1];
      },
      multiply: function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = i[0],
          h = i[1],
          l = i[2],
          p = i[3];
        return (
          (e[0] = r * a + s * l),
          (e[1] = r * h + s * p),
          (e[2] = o * a + n * l),
          (e[3] = o * h + n * p),
          e
        );
      },
    };
    (Y.mul = Y.multiply),
      (Y.rotate = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = Math.sin(i),
          h = Math.cos(i);
        return (
          (e[0] = r * h + s * a),
          (e[1] = r * -a + s * h),
          (e[2] = o * h + n * a),
          (e[3] = o * -a + n * h),
          e
        );
      }),
      (Y.scale = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = i[0],
          h = i[1];
        return (
          (e[0] = r * a), (e[1] = s * h), (e[2] = o * a), (e[3] = n * h), e
        );
      }),
      (Y.str = function (e) {
        return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      });
    var W = {
      create: function () {
        var e = new _(6);
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 1),
          (e[4] = 0),
          (e[5] = 0),
          e
        );
      },
      clone: function (e) {
        var t = new _(6);
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          t
        );
      },
      copy: function (e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          e
        );
      },
      identity: function (e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 1),
          (e[4] = 0),
          (e[5] = 0),
          e
        );
      },
      invert: function (e, t) {
        var i = t[0],
          r = t[1],
          s = t[2],
          o = t[3],
          n = t[4],
          a = t[5],
          h = i * o - r * s;
        return h
          ? ((h = 1 / h),
            (e[0] = o * h),
            (e[1] = -r * h),
            (e[2] = -s * h),
            (e[3] = i * h),
            (e[4] = (s * a - o * n) * h),
            (e[5] = (r * n - i * a) * h),
            e)
          : null;
      },
      determinant: function (e) {
        return e[0] * e[3] - e[1] * e[2];
      },
      multiply: function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = t[4],
          h = t[5],
          l = i[0],
          p = i[1],
          c = i[2],
          u = i[3],
          d = i[4],
          m = i[5];
        return (
          (e[0] = r * l + s * c),
          (e[1] = r * p + s * u),
          (e[2] = o * l + n * c),
          (e[3] = o * p + n * u),
          (e[4] = l * a + c * h + d),
          (e[5] = p * a + u * h + m),
          e
        );
      },
    };
    (W.mul = W.multiply),
      (W.rotate = function (e, t, i) {
        var r = t[0],
          s = t[1],
          o = t[2],
          n = t[3],
          a = t[4],
          h = t[5],
          l = Math.sin(i),
          p = Math.cos(i);
        return (
          (e[0] = r * p + s * l),
          (e[1] = -r * l + s * p),
          (e[2] = o * p + n * l),
          (e[3] = -o * l + p * n),
          (e[4] = p * a + l * h),
          (e[5] = p * h - l * a),
          e
        );
      }),
      (W.scale = function (e, t, i) {
        var r = i[0],
          s = i[1];
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * s),
          (e[2] = t[2] * r),
          (e[3] = t[3] * s),
          (e[4] = t[4] * r),
          (e[5] = t[5] * s),
          e
        );
      }),
      (W.translate = function (e, t, i) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4] + i[0]),
          (e[5] = t[5] + i[1]),
          e
        );
      }),
      (W.str = function (e) {
        return (
          "mat2d(" +
          e[0] +
          ", " +
          e[1] +
          ", " +
          e[2] +
          ", " +
          e[3] +
          ", " +
          e[4] +
          ", " +
          e[5] +
          ")"
        );
      });
  },
  function (e, t, i) {
    "use strict";
    function r(e, t, i, r, s) {
      var o = [i / e, r / t];
      return {
        width: e * (o = s ? Math.min(o[0], o[1]) : Math.max(o[0], o[1])),
        height: t * o,
      };
    }
    i.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, i) {
    (function (t) {
      e.exports = (function () {
        "use strict";
        var e =
            Array.isArray ||
            function (e) {
              return "[object Array]" == Object.prototype.toString.call(e);
            },
          i = f,
          r = h,
          s = function (e) {
            return l(h(e));
          },
          o = l,
          n = m,
          a = new RegExp(
            [
              "(\\\\.)",
              "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))",
            ].join("|"),
            "g"
          );
        function h(e) {
          for (var t, i = [], r = 0, s = 0, o = ""; null != (t = a.exec(e)); ) {
            var n = t[0],
              h = t[1],
              l = t.index;
            if (((o += e.slice(s, l)), (s = l + n.length), h)) o += h[1];
            else {
              o && (i.push(o), (o = ""));
              var p = t[2],
                u = t[3],
                d = t[4],
                m = t[5],
                f = t[6],
                g = t[7],
                v = "+" === f || "*" === f,
                y = "?" === f || "*" === f,
                w = p || "/",
                _ = d || m || (g ? ".*" : "[^" + w + "]+?");
              i.push({
                name: u || r++,
                prefix: p || "",
                delimiter: w,
                optional: y,
                repeat: v,
                pattern: c(_),
              });
            }
          }
          return s < e.length && (o += e.substr(s)), o && i.push(o), i;
        }
        function l(t) {
          for (var i = new Array(t.length), r = 0; r < t.length; r++)
            "object" == typeof t[r] &&
              (i[r] = new RegExp("^" + t[r].pattern + "$"));
          return function (r) {
            for (var s = "", o = r || {}, n = 0; n < t.length; n++) {
              var a = t[n];
              if ("string" != typeof a) {
                var h,
                  l = o[a.name];
                if (null == l) {
                  if (a.optional) continue;
                  throw new TypeError(
                    'Expected "' + a.name + '" to be defined'
                  );
                }
                if (e(l)) {
                  if (!a.repeat)
                    throw new TypeError(
                      'Expected "' +
                        a.name +
                        '" to not repeat, but received "' +
                        l +
                        '"'
                    );
                  if (0 === l.length) {
                    if (a.optional) continue;
                    throw new TypeError(
                      'Expected "' + a.name + '" to not be empty'
                    );
                  }
                  for (var p = 0; p < l.length; p++) {
                    if (((h = encodeURIComponent(l[p])), !i[n].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          a.name +
                          '" to match "' +
                          a.pattern +
                          '", but received "' +
                          h +
                          '"'
                      );
                    s += (0 === p ? a.prefix : a.delimiter) + h;
                  }
                } else {
                  if (((h = encodeURIComponent(l)), !i[n].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        a.name +
                        '" to match "' +
                        a.pattern +
                        '", but received "' +
                        h +
                        '"'
                    );
                  s += a.prefix + h;
                }
              } else s += a;
            }
            return s;
          };
        }
        function p(e) {
          return e.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1");
        }
        function c(e) {
          return e.replace(/([=!:$\/()])/g, "\\$1");
        }
        function u(e, t) {
          return (e.keys = t), e;
        }
        function d(e) {
          return e.sensitive ? "" : "i";
        }
        function m(e, t) {
          for (
            var i = (t = t || {}).strict,
              r = !1 !== t.end,
              s = "",
              o = e[e.length - 1],
              n = "string" == typeof o && /\/$/.test(o),
              a = 0;
            a < e.length;
            a++
          ) {
            var h = e[a];
            if ("string" == typeof h) s += p(h);
            else {
              var l = p(h.prefix),
                c = h.pattern;
              h.repeat && (c += "(?:" + l + c + ")*"),
                (s += c =
                  h.optional
                    ? l
                      ? "(?:" + l + "(" + c + "))?"
                      : "(" + c + ")?"
                    : l + "(" + c + ")");
            }
          }
          return (
            i || (s = (n ? s.slice(0, -2) : s) + "(?:\\/(?=$))?"),
            (s += r ? "$" : i && n ? "" : "(?=\\/|$)"),
            new RegExp("^" + s, d(t))
          );
        }
        function f(t, i, r) {
          return (
            e((i = i || [])) ? r || (r = {}) : ((r = i), (i = [])),
            t instanceof RegExp
              ? (function (e, t) {
                  var i = e.source.match(/\((?!\?)/g);
                  if (i)
                    for (var r = 0; r < i.length; r++)
                      t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        pattern: null,
                      });
                  return u(e, t);
                })(t, i)
              : e(t)
              ? (function (e, t, i) {
                  for (var r = [], s = 0; s < e.length; s++)
                    r.push(f(e[s], t, i).source);
                  return u(new RegExp("(?:" + r.join("|") + ")", d(i)), t);
                })(t, i, r)
              : (function (e, t, i) {
                  for (var r = h(e), s = m(r, i), o = 0; o < r.length; o++)
                    "string" != typeof r[o] && t.push(r[o]);
                  return u(s, t);
                })(t, i, r)
          );
        }
        (i.parse = r),
          (i.compile = s),
          (i.tokensToFunction = o),
          (i.tokensToRegExp = n);
        var g,
          v = "undefined" != typeof document,
          y = "undefined" != typeof window,
          w = "undefined" != typeof history,
          _ = void 0 !== t,
          x = v && document.ontouchstart ? "touchstart" : "click",
          b = y && !(!window.history.location && !window.location);
        function S() {
          (this.callbacks = []),
            (this.exits = []),
            (this.current = ""),
            (this.len = 0),
            (this._decodeURLComponents = !0),
            (this._base = ""),
            (this._strict = !1),
            (this._running = !1),
            (this._hashbang = !1),
            (this.clickHandler = this.clickHandler.bind(this)),
            (this._onpopstate = this._onpopstate.bind(this));
        }
        function C(e, t) {
          if ("function" == typeof e) return C.call(this, "*", e);
          if ("function" == typeof t)
            for (var i = new z(e, null, this), r = 1; r < arguments.length; ++r)
              this.callbacks.push(i.middleware(arguments[r]));
          else
            "string" == typeof e
              ? this["string" == typeof t ? "redirect" : "show"](e, t)
              : this.start(e);
        }
        function T(e) {
          if (!e.handled) {
            var t = this._window;
            (this._hashbang
              ? b && this._getBase() + t.location.hash.replace("#!", "")
              : b && t.location.pathname + t.location.search) !==
              e.canonicalPath &&
              (this.stop(),
              (e.handled = !1),
              b && (t.location.href = e.canonicalPath));
          }
        }
        function P(e, t, i) {
          var r = (this.page = i || C),
            s = r._window,
            o = r._hashbang,
            n = r._getBase();
          "/" === e[0] && 0 !== e.indexOf(n) && (e = n + (o ? "#!" : "") + e);
          var a = e.indexOf("?");
          this.canonicalPath = e;
          var h = new RegExp(
            "^" + n.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
          );
          if (
            ((this.path = e.replace(h, "") || "/"),
            o && (this.path = this.path.replace("#!", "") || "/"),
            (this.title = v && s.document.title),
            (this.state = t || {}),
            (this.state.path = e),
            (this.querystring = ~a
              ? r._decodeURLEncodedURIComponent(e.slice(a + 1))
              : ""),
            (this.pathname = r._decodeURLEncodedURIComponent(
              ~a ? e.slice(0, a) : e
            )),
            (this.params = {}),
            (this.hash = ""),
            !o)
          ) {
            if (!~this.path.indexOf("#")) return;
            var l = this.path.split("#");
            (this.path = this.pathname = l[0]),
              (this.hash = r._decodeURLEncodedURIComponent(l[1]) || ""),
              (this.querystring = this.querystring.split("#")[0]);
          }
        }
        function z(e, t, r) {
          var s = (this.page = r || E),
            o = t || {};
          (o.strict = o.strict || s._strict),
            (this.path = "*" === e ? "(.*)" : e),
            (this.method = "GET"),
            (this.regexp = i(this.path, (this.keys = []), o));
        }
        (S.prototype.configure = function (e) {
          var t = e || {};
          (this._window = t.window || (y && window)),
            (this._decodeURLComponents = !1 !== t.decodeURLComponents),
            (this._popstate = !1 !== t.popstate && y),
            (this._click = !1 !== t.click && v),
            (this._hashbang = !!t.hashbang);
          var i = this._window;
          this._popstate
            ? i.addEventListener("popstate", this._onpopstate, !1)
            : y && i.removeEventListener("popstate", this._onpopstate, !1),
            this._click
              ? i.document.addEventListener(x, this.clickHandler, !1)
              : v && i.document.removeEventListener(x, this.clickHandler, !1),
            this._hashbang && y && !w
              ? i.addEventListener("hashchange", this._onpopstate, !1)
              : y && i.removeEventListener("hashchange", this._onpopstate, !1);
        }),
          (S.prototype.base = function (e) {
            if (0 === arguments.length) return this._base;
            this._base = e;
          }),
          (S.prototype._getBase = function () {
            var e = this._base;
            if (e) return e;
            var t = y && this._window && this._window.location;
            return (
              y &&
                this._hashbang &&
                t &&
                "file:" === t.protocol &&
                (e = t.pathname),
              e
            );
          }),
          (S.prototype.strict = function (e) {
            if (0 === arguments.length) return this._strict;
            this._strict = e;
          }),
          (S.prototype.start = function (e) {
            var t = e || {};
            if ((this.configure(t), !1 !== t.dispatch)) {
              var i;
              if (((this._running = !0), b)) {
                var r = this._window.location;
                i =
                  this._hashbang && ~r.hash.indexOf("#!")
                    ? r.hash.substr(2) + r.search
                    : this._hashbang
                    ? r.search + r.hash
                    : r.pathname + r.search + r.hash;
              }
              this.replace(i, null, !0, t.dispatch);
            }
          }),
          (S.prototype.stop = function () {
            if (this._running) {
              (this.current = ""), (this.len = 0), (this._running = !1);
              var e = this._window;
              this._click &&
                e.document.removeEventListener(x, this.clickHandler, !1),
                y && e.removeEventListener("popstate", this._onpopstate, !1),
                y && e.removeEventListener("hashchange", this._onpopstate, !1);
            }
          }),
          (S.prototype.show = function (e, t, i, r) {
            var s = new P(e, t, this),
              o = this.prevContext;
            return (
              (this.prevContext = s),
              (this.current = s.path),
              !1 !== i && this.dispatch(s, o),
              !1 !== s.handled && !1 !== r && s.pushState(),
              s
            );
          }),
          (S.prototype.back = function (e, t) {
            var i = this;
            if (this.len > 0) {
              var r = this._window;
              w && r.history.back(), this.len--;
            } else
              e
                ? setTimeout(function () {
                    i.show(e, t);
                  })
                : setTimeout(function () {
                    i.show(i._getBase(), t);
                  });
          }),
          (S.prototype.redirect = function (e, t) {
            var i = this;
            "string" == typeof e &&
              "string" == typeof t &&
              C.call(this, e, function (e) {
                setTimeout(function () {
                  i.replace(t);
                }, 0);
              }),
              "string" == typeof e &&
                void 0 === t &&
                setTimeout(function () {
                  i.replace(e);
                }, 0);
          }),
          (S.prototype.replace = function (e, t, i, r) {
            var s = new P(e, t, this),
              o = this.prevContext;
            return (
              (this.prevContext = s),
              (this.current = s.path),
              (s.init = i),
              s.save(),
              !1 !== r && this.dispatch(s, o),
              s
            );
          }),
          (S.prototype.dispatch = function (e, t) {
            var i = 0,
              r = 0,
              s = this;
            function o() {
              var t = s.callbacks[i++];
              if (e.path === s.current) return t ? void t(e, o) : T.call(s, e);
              e.handled = !1;
            }
            t
              ? (function e() {
                  var i = s.exits[r++];
                  if (!i) return o();
                  i(t, e);
                })()
              : o();
          }),
          (S.prototype.exit = function (e, t) {
            if ("function" == typeof e) return this.exit("*", e);
            for (var i = new z(e, null, this), r = 1; r < arguments.length; ++r)
              this.exits.push(i.middleware(arguments[r]));
          }),
          (S.prototype.clickHandler = function (e) {
            if (
              1 === this._which(e) &&
              !(e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)
            ) {
              var t = e.target,
                i = e.path || (e.composedPath ? e.composedPath() : null);
              if (i)
                for (var r = 0; r < i.length; r++)
                  if (
                    i[r].nodeName &&
                    "A" === i[r].nodeName.toUpperCase() &&
                    i[r].href
                  ) {
                    t = i[r];
                    break;
                  }
              for (; t && "A" !== t.nodeName.toUpperCase(); ) t = t.parentNode;
              if (t && "A" === t.nodeName.toUpperCase()) {
                var s =
                  "object" == typeof t.href &&
                  "SVGAnimatedString" === t.href.constructor.name;
                if (
                  !t.hasAttribute("download") &&
                  "external" !== t.getAttribute("rel")
                ) {
                  var o = t.getAttribute("href");
                  if (
                    (this._hashbang ||
                      !this._samePath(t) ||
                      (!t.hash && "#" !== o)) &&
                    !(o && o.indexOf("mailto:") > -1) &&
                    !(s ? t.target.baseVal : t.target) &&
                    (s || this.sameOrigin(t.href))
                  ) {
                    var n = s
                      ? t.href.baseVal
                      : t.pathname + t.search + (t.hash || "");
                    (n = "/" !== n[0] ? "/" + n : n),
                      _ &&
                        n.match(/^\/[a-zA-Z]:\//) &&
                        (n = n.replace(/^\/[a-zA-Z]:\//, "/"));
                    var a = n,
                      h = this._getBase();
                    0 === n.indexOf(h) && (n = n.substr(h.length)),
                      this._hashbang && (n = n.replace("#!", "")),
                      (!h ||
                        a !== n ||
                        (b && "file:" === this._window.location.protocol)) &&
                        (e.preventDefault(), this.show(a));
                  }
                }
              }
            }
          }),
          (S.prototype._onpopstate =
            ((g = !1),
            y
              ? (v && "complete" === document.readyState
                  ? (g = !0)
                  : window.addEventListener("load", function () {
                      setTimeout(function () {
                        g = !0;
                      }, 0);
                    }),
                function (e) {
                  if (g)
                    if (e.state) {
                      var t = e.state.path;
                      this.replace(t, e.state);
                    } else if (b) {
                      var i = this._window.location;
                      this.show(
                        i.pathname + i.search + i.hash,
                        void 0,
                        void 0,
                        !1
                      );
                    }
                })
              : function () {})),
          (S.prototype._which = function (e) {
            return null == (e = e || (y && this._window.event)).which
              ? e.button
              : e.which;
          }),
          (S.prototype._toURL = function (e) {
            var t = this._window;
            if ("function" == typeof URL && b)
              return new URL(e, t.location.toString());
            if (v) {
              var i = t.document.createElement("a");
              return (i.href = e), i;
            }
          }),
          (S.prototype.sameOrigin = function (e) {
            if (!e || !b) return !1;
            var t = this._toURL(e),
              i = this._window.location;
            return (
              i.protocol === t.protocol &&
              i.hostname === t.hostname &&
              (i.port === t.port ||
                ("" === i.port && (80 == t.port || 443 == t.port)))
            );
          }),
          (S.prototype._samePath = function (e) {
            if (!b) return !1;
            var t = this._window.location;
            return e.pathname === t.pathname && e.search === t.search;
          }),
          (S.prototype._decodeURLEncodedURIComponent = function (e) {
            return "string" != typeof e
              ? e
              : this._decodeURLComponents
              ? decodeURIComponent(e.replace(/\+/g, " "))
              : e;
          }),
          (P.prototype.pushState = function () {
            var e = this.page,
              t = e._window,
              i = e._hashbang;
            e.len++,
              w &&
                t.history.pushState(
                  this.state,
                  this.title,
                  i && "/" !== this.path ? "#!" + this.path : this.canonicalPath
                );
          }),
          (P.prototype.save = function () {
            var e = this.page;
            w &&
              e._window.history.replaceState(
                this.state,
                this.title,
                e._hashbang && "/" !== this.path
                  ? "#!" + this.path
                  : this.canonicalPath
              );
          }),
          (z.prototype.middleware = function (e) {
            var t = this;
            return function (i, r) {
              if (t.match(i.path, i.params))
                return (i.routePath = t.path), e(i, r);
              r();
            };
          }),
          (z.prototype.match = function (e, t) {
            var i = this.keys,
              r = e.indexOf("?"),
              s = ~r ? e.slice(0, r) : e,
              o = this.regexp.exec(decodeURIComponent(s));
            if (!o) return !1;
            delete t[0];
            for (var n = 1, a = o.length; n < a; ++n) {
              var h = i[n - 1],
                l = this.page._decodeURLEncodedURIComponent(o[n]);
              (void 0 === l && hasOwnProperty.call(t, h.name)) ||
                (t[h.name] = l);
            }
            return !0;
          });
        var E = (function e() {
            var t = new S();
            function i() {
              return C.apply(t, arguments);
            }
            return (
              (i.callbacks = t.callbacks),
              (i.exits = t.exits),
              (i.base = t.base.bind(t)),
              (i.strict = t.strict.bind(t)),
              (i.start = t.start.bind(t)),
              (i.stop = t.stop.bind(t)),
              (i.show = t.show.bind(t)),
              (i.back = t.back.bind(t)),
              (i.redirect = t.redirect.bind(t)),
              (i.replace = t.replace.bind(t)),
              (i.dispatch = t.dispatch.bind(t)),
              (i.exit = t.exit.bind(t)),
              (i.configure = t.configure.bind(t)),
              (i.sameOrigin = t.sameOrigin.bind(t)),
              (i.clickHandler = t.clickHandler.bind(t)),
              (i.create = e),
              Object.defineProperty(i, "len", {
                get: function () {
                  return t.len;
                },
                set: function (e) {
                  t.len = e;
                },
              }),
              Object.defineProperty(i, "current", {
                get: function () {
                  return t.current;
                },
                set: function (e) {
                  t.current = e;
                },
              }),
              (i.Context = P),
              (i.Route = z),
              i
            );
          })(),
          k = E,
          M = E;
        return (k.default = M), k;
      })();
    }.call(this, i(17)));
  },
  function (e, t, i) {
    "use strict";
    var r,
      s = {},
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      n = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var i = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              i instanceof window.HTMLIFrameElement
            )
              try {
                i = i.contentDocument.head;
              } catch (e) {
                i = null;
              }
            e[t] = i;
          }
          return e[t];
        };
      })();
    function a(e, t) {
      for (var i = [], r = {}, s = 0; s < e.length; s++) {
        var o = e[s],
          n = t.base ? o[0] + t.base : o[0],
          a = { css: o[1], media: o[2], sourceMap: o[3] };
        r[n] ? r[n].parts.push(a) : i.push((r[n] = { id: n, parts: [a] }));
      }
      return i;
    }
    function h(e, t) {
      for (var i = 0; i < e.length; i++) {
        var r = e[i],
          o = s[r.id],
          n = 0;
        if (o) {
          for (o.refs++; n < o.parts.length; n++) o.parts[n](r.parts[n]);
          for (; n < r.parts.length; n++) o.parts.push(g(r.parts[n], t));
        } else {
          for (var a = []; n < r.parts.length; n++) a.push(g(r.parts[n], t));
          s[r.id] = { id: r.id, refs: 1, parts: a };
        }
      }
    }
    function l(e) {
      var t = document.createElement("style");
      if (void 0 === e.attributes.nonce) {
        var r = i.nc;
        r && (e.attributes.nonce = r);
      }
      if (
        (Object.keys(e.attributes).forEach(function (i) {
          t.setAttribute(i, e.attributes[i]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var s = n(e.insert || "head");
        if (!s)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        s.appendChild(t);
      }
      return t;
    }
    var p,
      c =
        ((p = []),
        function (e, t) {
          return (p[e] = t), p.filter(Boolean).join("\n");
        });
    function u(e, t, i, r) {
      var s = i ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = c(t, s);
      else {
        var o = document.createTextNode(s),
          n = e.childNodes;
        n[t] && e.removeChild(n[t]),
          n.length ? e.insertBefore(o, n[t]) : e.appendChild(o);
      }
    }
    function d(e, t, i) {
      var r = i.css,
        s = i.media,
        o = i.sourceMap;
      if (
        (s && e.setAttribute("media", s),
        o &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var m = null,
      f = 0;
    function g(e, t) {
      var i, r, s;
      if (t.singleton) {
        var o = f++;
        (i = m || (m = l(t))),
          (r = u.bind(null, i, o, !1)),
          (s = u.bind(null, i, o, !0));
      } else
        (i = l(t)),
          (r = d.bind(null, i, t)),
          (s = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(i);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else s();
        }
      );
    }
    e.exports = function (e, t) {
      ((t = t || {}).attributes =
        "object" == typeof t.attributes ? t.attributes : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = o());
      var i = a(e, t);
      return (
        h(i, t),
        function (e) {
          for (var r = [], o = 0; o < i.length; o++) {
            var n = i[o],
              l = s[n.id];
            l && (l.refs--, r.push(l));
          }
          e && h(a(e, t), t);
          for (var p = 0; p < r.length; p++) {
            var c = r[p];
            if (0 === c.refs) {
              for (var u = 0; u < c.parts.length; u++) c.parts[u]();
              delete s[c.id];
            }
          }
        }
      );
    };
  },
  function (e, t) {
    var i;
    e.exports =
      ((i = function (e, t, i, r) {
        var s = 3 * e,
          o = 3 * (i - e) - s,
          n = 1 - s - o,
          a = 3 * t,
          h = 3 * (r - t) - a,
          l = 1 - a - h,
          p = function (e) {
            return ((n * e + o) * e + s) * e;
          },
          c = function (e, t) {
            return (function (e) {
              return ((l * e + h) * e + a) * e;
            })(
              (function (e, t) {
                var i, r, a, h, l, c, u;
                for (a = e, c = 0; c < 8; c++) {
                  if (((h = p(a) - e), Math.abs(h) < t)) return a;
                  if (
                    ((l = (3 * n * (u = a) + 2 * o) * u + s),
                    Math.abs(l) < 1e-6)
                  )
                    break;
                  a -= h / l;
                }
                if ((a = e) < (i = 0)) return i;
                if (a > (r = 1)) return r;
                for (; i < r; ) {
                  if (((h = p(a)), Math.abs(h - e) < t)) return a;
                  e > h ? (i = a) : (r = a), (a = 0.5 * (r - i) + i);
                }
                return a;
              })(e, t)
            );
          };
        return function (e, t) {
          return c(
            e,
            (function (e) {
              return 1 / (200 * e);
            })(+t || 400)
          );
        };
      }),
      function (e, t, r, s, o, n) {
        return i(e, t, r, s)(o, n);
      });
  },
  function (e, t, i) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var s;
    "undefined" != typeof window
      ? (s = window)
      : "undefined" == typeof self
      ? (console.warn(
          "Using browser-only version of superagent in non-browser environment"
        ),
        (s = void 0))
      : (s = self);
    var o = i(29),
      n = i(30),
      a = i(31),
      h = i(34),
      l = i(12),
      p = i(35),
      c = i(37);
    function u() {}
    e.exports = function (e, i) {
      return "function" == typeof i
        ? new t.Request("GET", e).end(i)
        : 1 === arguments.length
        ? new t.Request("GET", e)
        : new t.Request(e, i);
    };
    var d = (t = e.exports);
    (t.Request = _),
      (d.getXHR = function () {
        if (
          s.XMLHttpRequest &&
          (!s.location || "file:" !== s.location.protocol || !s.ActiveXObject)
        )
          return new XMLHttpRequest();
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        } catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        } catch (e) {}
        try {
          return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {}
        throw new Error(
          "Browser-only version of superagent could not find XHR"
        );
      });
    var m = "".trim
      ? function (e) {
          return e.trim();
        }
      : function (e) {
          return e.replace(/(^\s*|\s*$)/g, "");
        };
    function f(e) {
      if (!l(e)) return e;
      var t = [];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && g(t, i, e[i]);
      return t.join("&");
    }
    function g(e, t, i) {
      if (void 0 !== i)
        if (null !== i)
          if (Array.isArray(i))
            i.forEach(function (i) {
              g(e, t, i);
            });
          else if (l(i))
            for (var r in i)
              Object.prototype.hasOwnProperty.call(i, r) &&
                g(e, "".concat(t, "[").concat(r, "]"), i[r]);
          else e.push(encodeURI(t) + "=" + encodeURIComponent(i));
        else e.push(encodeURI(t));
    }
    function v(e) {
      for (var t, i, r = {}, s = e.split("&"), o = 0, n = s.length; o < n; ++o)
        -1 === (i = (t = s[o]).indexOf("="))
          ? (r[decodeURIComponent(t)] = "")
          : (r[decodeURIComponent(t.slice(0, i))] = decodeURIComponent(
              t.slice(i + 1)
            ));
      return r;
    }
    function y(e) {
      return /[/+]json($|[^-\w])/i.test(e);
    }
    function w(e) {
      (this.req = e),
        (this.xhr = this.req.xhr),
        (this.text =
          ("HEAD" !== this.req.method &&
            ("" === this.xhr.responseType ||
              "text" === this.xhr.responseType)) ||
          void 0 === this.xhr.responseType
            ? this.xhr.responseText
            : null),
        (this.statusText = this.req.xhr.statusText);
      var t = this.xhr.status;
      1223 === t && (t = 204),
        this._setStatusProperties(t),
        (this.headers = (function (e) {
          for (
            var t, i, r, s, o = e.split(/\r?\n/), n = {}, a = 0, h = o.length;
            a < h;
            ++a
          )
            -1 !== (t = (i = o[a]).indexOf(":")) &&
              ((r = i.slice(0, t).toLowerCase()),
              (s = m(i.slice(t + 1))),
              (n[r] = s));
          return n;
        })(this.xhr.getAllResponseHeaders())),
        (this.header = this.headers),
        (this.header["content-type"] =
          this.xhr.getResponseHeader("content-type")),
        this._setHeaderProperties(this.header),
        null === this.text && e._responseType
          ? (this.body = this.xhr.response)
          : (this.body =
              "HEAD" === this.req.method
                ? null
                : this._parseBody(this.text ? this.text : this.xhr.response));
    }
    function _(e, t) {
      var i = this;
      (this._query = this._query || []),
        (this.method = e),
        (this.url = t),
        (this.header = {}),
        (this._header = {}),
        this.on("end", function () {
          var e,
            t = null,
            r = null;
          try {
            r = new w(i);
          } catch (e) {
            return (
              ((t = new Error("Parser is unable to parse the response")).parse =
                !0),
              (t.original = e),
              i.xhr
                ? ((t.rawResponse =
                    void 0 === i.xhr.responseType
                      ? i.xhr.responseText
                      : i.xhr.response),
                  (t.status = i.xhr.status ? i.xhr.status : null),
                  (t.statusCode = t.status))
                : ((t.rawResponse = null), (t.status = null)),
              i.callback(t)
            );
          }
          i.emit("response", r);
          try {
            i._isResponseOK(r) ||
              (e = new Error(
                r.statusText || r.text || "Unsuccessful HTTP response"
              ));
          } catch (t) {
            e = t;
          }
          e
            ? ((e.original = t),
              (e.response = r),
              (e.status = r.status),
              i.callback(e, r))
            : i.callback(null, r);
        });
    }
    function x(e, t, i) {
      var r = d("DELETE", e);
      return (
        "function" == typeof t && ((i = t), (t = null)),
        t && r.send(t),
        i && r.end(i),
        r
      );
    }
    (d.serializeObject = f),
      (d.parseString = v),
      (d.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded",
      }),
      (d.serialize = {
        "application/x-www-form-urlencoded": a.stringify,
        "application/json": n,
      }),
      (d.parse = {
        "application/x-www-form-urlencoded": v,
        "application/json": JSON.parse,
      }),
      p(w.prototype),
      (w.prototype._parseBody = function (e) {
        var t = d.parse[this.type];
        return this.req._parser
          ? this.req._parser(this, e)
          : (!t && y(this.type) && (t = d.parse["application/json"]),
            t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
      }),
      (w.prototype.toError = function () {
        var e = this.req,
          t = e.method,
          i = e.url,
          r = "cannot ".concat(t, " ").concat(i, " (").concat(this.status, ")"),
          s = new Error(r);
        return (s.status = this.status), (s.method = t), (s.url = i), s;
      }),
      (d.Response = w),
      o(_.prototype),
      h(_.prototype),
      (_.prototype.type = function (e) {
        return this.set("Content-Type", d.types[e] || e), this;
      }),
      (_.prototype.accept = function (e) {
        return this.set("Accept", d.types[e] || e), this;
      }),
      (_.prototype.auth = function (e, t, i) {
        1 === arguments.length && (t = ""),
          "object" === r(t) && null !== t && ((i = t), (t = "")),
          i || (i = { type: "function" == typeof btoa ? "basic" : "auto" });
        var s = function (e) {
          if ("function" == typeof btoa) return btoa(e);
          throw new Error("Cannot use basic auth, btoa is not a function");
        };
        return this._auth(e, t, i, s);
      }),
      (_.prototype.query = function (e) {
        return (
          "string" != typeof e && (e = f(e)), e && this._query.push(e), this
        );
      }),
      (_.prototype.attach = function (e, t, i) {
        if (t) {
          if (this._data)
            throw new Error("superagent can't mix .send() and .attach()");
          this._getFormData().append(e, t, i || t.name);
        }
        return this;
      }),
      (_.prototype._getFormData = function () {
        return (
          this._formData || (this._formData = new s.FormData()), this._formData
        );
      }),
      (_.prototype.callback = function (e, t) {
        if (this._shouldRetry(e, t)) return this._retry();
        var i = this._callback;
        this.clearTimeout(),
          e &&
            (this._maxRetries && (e.retries = this._retries - 1),
            this.emit("error", e)),
          i(e, t);
      }),
      (_.prototype.crossDomainError = function () {
        var e = new Error(
          "Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc."
        );
        (e.crossDomain = !0),
          (e.status = this.status),
          (e.method = this.method),
          (e.url = this.url),
          this.callback(e);
      }),
      (_.prototype.agent = function () {
        return (
          console.warn(
            "This is not supported in browser version of superagent"
          ),
          this
        );
      }),
      (_.prototype.ca = _.prototype.agent),
      (_.prototype.buffer = _.prototype.ca),
      (_.prototype.write = function () {
        throw new Error(
          "Streaming is not supported in browser version of superagent"
        );
      }),
      (_.prototype.pipe = _.prototype.write),
      (_.prototype._isHost = function (e) {
        return (
          e &&
          "object" === r(e) &&
          !Array.isArray(e) &&
          "[object Object]" !== Object.prototype.toString.call(e)
        );
      }),
      (_.prototype.end = function (e) {
        this._endCalled &&
          console.warn(
            "Warning: .end() was called twice. This is not supported in superagent"
          ),
          (this._endCalled = !0),
          (this._callback = e || u),
          this._finalizeQueryString(),
          this._end();
      }),
      (_.prototype._setUploadTimeout = function () {
        var e = this;
        this._uploadTimeout &&
          !this._uploadTimeoutTimer &&
          (this._uploadTimeoutTimer = setTimeout(function () {
            e._timeoutError(
              "Upload timeout of ",
              e._uploadTimeout,
              "ETIMEDOUT"
            );
          }, this._uploadTimeout));
      }),
      (_.prototype._end = function () {
        if (this._aborted)
          return this.callback(
            new Error(
              "The request has been aborted even before .end() was called"
            )
          );
        var e = this;
        this.xhr = d.getXHR();
        var t = this.xhr,
          i = this._formData || this._data;
        this._setTimeouts(),
          (t.onreadystatechange = function () {
            var i = t.readyState;
            if (
              (i >= 2 &&
                e._responseTimeoutTimer &&
                clearTimeout(e._responseTimeoutTimer),
              4 === i)
            ) {
              var r;
              try {
                r = t.status;
              } catch (e) {
                r = 0;
              }
              if (!r) {
                if (e.timedout || e._aborted) return;
                return e.crossDomainError();
              }
              e.emit("end");
            }
          });
        var r = function (t, i) {
          i.total > 0 &&
            ((i.percent = (i.loaded / i.total) * 100),
            100 === i.percent && clearTimeout(e._uploadTimeoutTimer)),
            (i.direction = t),
            e.emit("progress", i);
        };
        if (this.hasListeners("progress"))
          try {
            t.addEventListener("progress", r.bind(null, "download")),
              t.upload &&
                t.upload.addEventListener("progress", r.bind(null, "upload"));
          } catch (e) {}
        t.upload && this._setUploadTimeout();
        try {
          this.username && this.password
            ? t.open(this.method, this.url, !0, this.username, this.password)
            : t.open(this.method, this.url, !0);
        } catch (e) {
          return this.callback(e);
        }
        if (
          (this._withCredentials && (t.withCredentials = !0),
          !this._formData &&
            "GET" !== this.method &&
            "HEAD" !== this.method &&
            "string" != typeof i &&
            !this._isHost(i))
        ) {
          var s = this._header["content-type"],
            o = this._serializer || d.serialize[s ? s.split(";")[0] : ""];
          !o && y(s) && (o = d.serialize["application/json"]), o && (i = o(i));
        }
        for (var n in this.header)
          null !== this.header[n] &&
            Object.prototype.hasOwnProperty.call(this.header, n) &&
            t.setRequestHeader(n, this.header[n]);
        this._responseType && (t.responseType = this._responseType),
          this.emit("request", this),
          t.send(void 0 === i ? null : i);
      }),
      (d.agent = function () {
        return new c();
      }),
      ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (
        e
      ) {
        c.prototype[e.toLowerCase()] = function (t, i) {
          var r = new d.Request(e, t);
          return this._setDefaults(r), i && r.end(i), r;
        };
      }),
      (c.prototype.del = c.prototype.delete),
      (d.get = function (e, t, i) {
        var r = d("GET", e);
        return (
          "function" == typeof t && ((i = t), (t = null)),
          t && r.query(t),
          i && r.end(i),
          r
        );
      }),
      (d.head = function (e, t, i) {
        var r = d("HEAD", e);
        return (
          "function" == typeof t && ((i = t), (t = null)),
          t && r.query(t),
          i && r.end(i),
          r
        );
      }),
      (d.options = function (e, t, i) {
        var r = d("OPTIONS", e);
        return (
          "function" == typeof t && ((i = t), (t = null)),
          t && r.send(t),
          i && r.end(i),
          r
        );
      }),
      (d.del = x),
      (d.delete = x),
      (d.patch = function (e, t, i) {
        var r = d("PATCH", e);
        return (
          "function" == typeof t && ((i = t), (t = null)),
          t && r.send(t),
          i && r.end(i),
          r
        );
      }),
      (d.post = function (e, t, i) {
        var r = d("POST", e);
        return (
          "function" == typeof t && ((i = t), (t = null)),
          t && r.send(t),
          i && r.end(i),
          r
        );
      }),
      (d.put = function (e, t, i) {
        var r = d("PUT", e);
        return (
          "function" == typeof t && ((i = t), (t = null)),
          t && r.send(t),
          i && r.end(i),
          r
        );
      });
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return o;
    });
    var r = i(5),
      s = i.n(r);
    class o {
      constructor(e) {
        (this.step = e.step || function () {}),
          (this.end = e.end || function () {}),
          (this.direction = e.direction || 1),
          (this.duration = e.duration || 1e3),
          (this.easing = e.easing || [0.55, 0.085, 0.68, 0.53]),
          (this.delay = e.delay || 0),
          (this._progress = 0),
          (this._easedProgress = 0),
          this.update();
      }
      play() {
        clearTimeout(this._delayTimer),
          (this._delayTimer = setTimeout(() => {
            (this._progress = 1 == this.direction ? 0 : 1),
              (this._easedProgress = 1 == this.direction ? 0 : 1),
              (this.isPlaying = !0);
          }, this.delay));
      }
      pause() {
        clearTimeout(this._delayTimer), (this.isPlaying = !1);
      }
      reset() {
        this._progress = 0;
      }
      update() {
        requestAnimationFrame(() => {
          this.update();
        }),
          this.isPlaying &&
            ((this._progress +=
              (1 / (this.duration / (1e3 / 60))) * this.direction),
            (this._easedProgress = s()(
              this.easing[0],
              this.easing[1],
              this.easing[2],
              this.easing[3],
              Math.max(0, Math.min(1, this._progress)),
              1
            )),
            (1 == this.direction && this._easedProgress < 1) ||
            (-1 == this.direction && this._easedProgress > 0)
              ? this.step(this._easedProgress, this._progress)
              : ((this.isPlaying = !1),
                (this._progress = 1 == this.direction ? 1 : 0),
                (this._easedProgress = 1 == this.direction ? 1 : 0),
                this.step(this._easedProgress, this._progress),
                this.end()));
      }
    }
  },
  function (e, t, i) {
    /**
     * Generates event when user makes new movement (like a swipe on a touchscreen).
     * @version 1.2.2
     * @link https://github.com/Promo/wheel-indicator
     * @license MIT
     */
    var r = (function () {
      function e(e) {
        var t = { callback: function () {}, elem: document, preventMouse: !0 };
        (this.eventWheel = "onwheel" in document ? "wheel" : "mousewheel"),
          (this._options = n(t, e)),
          (this._deltaArray = [0, 0, 0]),
          (this._isAcceleration = !1),
          (this._isStopped = !0),
          (this._direction = ""),
          (this._timer = ""),
          (this._isWorking = !0);
        var i,
          o,
          a,
          h = this;
        (this._wheelHandler = function (e) {
          h._isWorking &&
            (r.call(h, e),
            h._options.preventMouse &&
              (function (e) {
                (e = e || window.event).preventDefault
                  ? e.preventDefault()
                  : (e.returnValue = !1);
              })(e));
        }),
          (i = this._options.elem),
          (o = this.eventWheel),
          (a = this._wheelHandler),
          i.addEventListener
            ? i.addEventListener(o, a, !!s() && { passive: !1 })
            : i.attachEvent && i.attachEvent("on" + o, a);
      }
      function t(e) {
        (e.direction = this._direction), this._options.callback(e);
      }
      e.prototype = {
        constructor: e,
        turnOn: function () {
          return (this._isWorking = !0), this;
        },
        turnOff: function () {
          return (this._isWorking = !1), this;
        },
        setOptions: function (e) {
          return (this._options = n(this._options, e)), this;
        },
        getOption: function (e) {
          var t = this._options[e];
          if (void 0 !== t) return t;
          throw new Error("Unknown option");
        },
        destroy: function () {
          var e, t, i;
          return (
            (e = this._options.elem),
            (t = this.eventWheel),
            (i = this._wheelHandler),
            e.removeEventListener
              ? e.removeEventListener(t, i, !!s() && { passive: !1 })
              : e.detachEvent && e.detachEvent("on" + t, i),
            this
          );
        },
      };
      var i = function (e) {
        return (i =
          e.wheelDelta && !e.deltaY
            ? function (e) {
                return -1 * e.wheelDelta;
              }
            : function (e) {
                return e.deltaY;
              })(e);
      };
      function r(e) {
        var r = this,
          s = i(e);
        if (0 !== s) {
          var n,
            a = s > 0 ? "down" : "up",
            h = r._deltaArray.length,
            l = !1,
            p = 0;
          for (
            clearTimeout(r._timer),
              r._timer = setTimeout(function () {
                (r._deltaArray = [0, 0, 0]),
                  (r._isStopped = !0),
                  (r._direction = a);
              }, 150),
              n = 0;
            n < h;
            n++
          )
            0 !== r._deltaArray[n] && (r._deltaArray[n] > 0 ? ++p : --p);
          Math.abs(p) === h &&
            (p > 0 ? "down" : "up") !== r._direction &&
            ((l = !0), (r._direction = a)),
            r._isStopped ||
              (l
                ? ((r._isAcceleration = !0), t.call(this, e))
                : Math.abs(p) === h && o.call(this, e)),
            r._isStopped &&
              ((r._isStopped = !1),
              (r._isAcceleration = !0),
              (r._direction = a),
              t.call(this, e)),
            r._deltaArray.shift(),
            r._deltaArray.push(s);
        }
      }
      function o(e) {
        var r = Math.abs(this._deltaArray[0]),
          s = Math.abs(this._deltaArray[1]),
          o = Math.abs(this._deltaArray[2]),
          n = Math.abs(i(e));
        n > o &&
          o > s &&
          s > r &&
          (this._isAcceleration ||
            (t.call(this, e), (this._isAcceleration = !0))),
          n < o && o <= s && (this._isAcceleration = !1);
      }
      function n(e, t) {
        var i,
          r = {};
        for (i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
        for (i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
        return r;
      }
      return e;
    })();
    function s() {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", {
          get: function () {
            e = !0;
          },
        });
        window.addEventListener("test", null, t),
          window.removeEventListener("test", null, t);
      } catch (e) {}
      return e;
    }
    e.exports = r;
  },
  function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
      return s;
    });
    var r = i(0);
    class s {
      constructor(e) {
        (e = Object.assign(
          {},
          {
            elem: document,
            callback: function () {},
            maxDelta: 50,
            preventMouse: !0,
          },
          e
        )),
          (this.elem = e.elem),
          (this.callback = e.callback),
          (this.maxDelta = e.maxDelta),
          (this.preventMouse = e.preventMouse),
          (this._onPointerDown = this._onPointerDown.bind(this)),
          (this._onPointerMove = this._onPointerMove.bind(this)),
          (this._onPointerUp = this._onPointerUp.bind(this)),
          this.elem.addEventListener(
            r.support.pointerdown,
            this._onPointerDown,
            { passive: !1 }
          ),
          document.addEventListener(
            r.support.pointermove,
            this._onPointerMove,
            { passive: !1 }
          ),
          document.addEventListener(r.support.pointerup, this._onPointerUp, {
            passive: !1,
          }),
          (this._isPointerDown = !1);
      }
      destroy() {
        this.elem.removeEventListener(
          r.support.pointerdown,
          this._onPointerDown
        ),
          document.removeEventListener(
            r.support.pointermove,
            this._onPointerMove
          ),
          document.removeEventListener(r.support.pointerup, this._onPointerUp);
      }
      _onPointerDown(e) {
        (this._isPointerDown = !0),
          (this._moveDelta = 0),
          (this._pointerStartEvent =
            r.support.touch && "mousemove" != e.type
              ? e.touches[0] || e.changedTouches[0]
              : e),
          (this._pointerStart =
            this._pointerStartEvent.pageY -
            (window.pageYOffset || document.documentElement.scrollTop));
      }
      _onPointerMove(e) {
        if (this._isPointerDown) {
          this.preventMouse &&
            (e.preventDefault(),
            (document.documentElement.style.touchAction = "none"));
          let t =
            (r.support.touch && "mousemove" != e.type
              ? e.touches[0] || e.changedTouches[0]
              : e
            ).pageY -
            (window.pageYOffset || document.documentElement.scrollTop);
          this._moveDelta = t - this._pointerStartEvent.pageY;
        }
      }
      _onPointerUp(e) {
        this._isPointerDown &&
          ((this._isPointerDown = !1),
          Math.abs(this._moveDelta) > this.maxDelta &&
            this.callback({ direction: this._moveDelta > 0 ? "up" : "down" }),
          this.preventMouse &&
            (document.documentElement.style.touchAction = "auto"));
      }
    }
  },
  function (e, t, i) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
      s = Array.isArray,
      o = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      n = function (e, t) {
        for (
          var i = t && t.plainObjects ? Object.create(null) : {}, r = 0;
          r < e.length;
          ++r
        )
          void 0 !== e[r] && (i[r] = e[r]);
        return i;
      };
    e.exports = {
      arrayToObject: n,
      assign: function (e, t) {
        return Object.keys(t).reduce(function (e, i) {
          return (e[i] = t[i]), e;
        }, e);
      },
      combine: function (e, t) {
        return [].concat(e, t);
      },
      compact: function (e) {
        for (
          var t = [{ obj: { o: e }, prop: "o" }], i = [], r = 0;
          r < t.length;
          ++r
        )
          for (
            var o = t[r], n = o.obj[o.prop], a = Object.keys(n), h = 0;
            h < a.length;
            ++h
          ) {
            var l = a[h],
              p = n[l];
            "object" == typeof p &&
              null !== p &&
              -1 === i.indexOf(p) &&
              (t.push({ obj: n, prop: l }), i.push(p));
          }
        return (
          (function (e) {
            for (; e.length > 1; ) {
              var t = e.pop(),
                i = t.obj[t.prop];
              if (s(i)) {
                for (var r = [], o = 0; o < i.length; ++o)
                  void 0 !== i[o] && r.push(i[o]);
                t.obj[t.prop] = r;
              }
            }
          })(t),
          e
        );
      },
      decode: function (e, t, i) {
        var r = e.replace(/\+/g, " ");
        if ("iso-8859-1" === i) return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(r);
        } catch (e) {
          return r;
        }
      },
      encode: function (e, t, i) {
        if (0 === e.length) return e;
        var r = "string" == typeof e ? e : String(e);
        if ("iso-8859-1" === i)
          return escape(r).replace(/%u[0-9a-f]{4}/gi, function (e) {
            return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
          });
        for (var s = "", n = 0; n < r.length; ++n) {
          var a = r.charCodeAt(n);
          45 === a ||
          46 === a ||
          95 === a ||
          126 === a ||
          (a >= 48 && a <= 57) ||
          (a >= 65 && a <= 90) ||
          (a >= 97 && a <= 122)
            ? (s += r.charAt(n))
            : a < 128
            ? (s += o[a])
            : a < 2048
            ? (s += o[192 | (a >> 6)] + o[128 | (63 & a)])
            : a < 55296 || a >= 57344
            ? (s +=
                o[224 | (a >> 12)] +
                o[128 | ((a >> 6) & 63)] +
                o[128 | (63 & a)])
            : ((n += 1),
              (a = 65536 + (((1023 & a) << 10) | (1023 & r.charCodeAt(n)))),
              (s +=
                o[240 | (a >> 18)] +
                o[128 | ((a >> 12) & 63)] +
                o[128 | ((a >> 6) & 63)] +
                o[128 | (63 & a)]));
        }
        return s;
      },
      isBuffer: function (e) {
        return (
          !(!e || "object" != typeof e) &&
          !!(
            e.constructor &&
            e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        );
      },
      isRegExp: function (e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      },
      merge: function e(t, i, o) {
        if (!i) return t;
        if ("object" != typeof i) {
          if (s(t)) t.push(i);
          else {
            if (!t || "object" != typeof t) return [t, i];
            ((o && (o.plainObjects || o.allowPrototypes)) ||
              !r.call(Object.prototype, i)) &&
              (t[i] = !0);
          }
          return t;
        }
        if (!t || "object" != typeof t) return [t].concat(i);
        var a = t;
        return (
          s(t) && !s(i) && (a = n(t, o)),
          s(t) && s(i)
            ? (i.forEach(function (i, s) {
                if (r.call(t, s)) {
                  var n = t[s];
                  n && "object" == typeof n && i && "object" == typeof i
                    ? (t[s] = e(n, i, o))
                    : t.push(i);
                } else t[s] = i;
              }),
              t)
            : Object.keys(i).reduce(function (t, s) {
                var n = i[s];
                return r.call(t, s) ? (t[s] = e(t[s], n, o)) : (t[s] = n), t;
              }, a)
        );
      },
    };
  },
  function (e, t, i) {
    "use strict";
    var r = String.prototype.replace,
      s = /%20/g;
    e.exports = {
      default: "RFC3986",
      formatters: {
        RFC1738: function (e) {
          return r.call(e, s, "+");
        },
        RFC3986: function (e) {
          return e;
        },
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986",
    };
  },
  function (e, t, i) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    e.exports = function (e) {
      return null !== e && "object" === r(e);
    };
  },
  function (e, t) {
    e.exports =
      "#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\n\nuniform mat4 uMMatrix;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\n\n\nvarying vec3 vColor;\nvarying vec2 vUv;\nvarying vec3 vPos;\nvarying vec3 vViewPosition;\nvarying vec3 vViewNormal;\n\n\nuniform float billboard;\n\n\n\n\n\nuniform int useNormalMap;\n\n// #ifdef USE_NORMALMAP\n\tvarying vec4 Vertex_Normal;\n\tvarying vec4 Vertex_LightDir;\n\tvarying vec4 Vertex_EyeVec;\n\tuniform vec3 lightPos;\n// #endif\n\n\n\nvoid main(void) {\n\n\tvColor = color;\n\tvUv = uv;\n\n\tvec3 newPosition = position;\n\n\tvPos = (uMMatrix * vec4(newPosition, 1.0)).rgb;\n\n  \tvViewPosition = (uMVMatrix * vec4( newPosition, 1.0 )).xyz;\n\n  \tvViewNormal   = (uMVMatrix * vec4( vec3(0.,0.,1.), 1.0 )).xyz;\n\n\nif (useNormalMap == 1) {\n\tVertex_Normal = uMVMatrix  * vec4( vec3(0.,0.,1.), 1.0 );\n    vec4 view_vertex = uMVMatrix * vec4( newPosition, 1.0 );\n    Vertex_LightDir = vec4( lightPos, 1.0 ) - view_vertex;\n    Vertex_EyeVec = view_vertex;\n}\n\n\n\tif (billboard == 1.) {\n\t\tmat4 billboardMVMatrix = uMVMatrix;\n\n\t\tfloat sx = length(vec3(billboardMVMatrix[0][0], billboardMVMatrix[0][1], billboardMVMatrix[0][2]));\n\t\tfloat sy = length(vec3(billboardMVMatrix[1][0], billboardMVMatrix[1][1], billboardMVMatrix[1][2]));\n\t\tfloat sz = length(vec3(billboardMVMatrix[2][0], billboardMVMatrix[2][1], billboardMVMatrix[2][2]));\n\n\t\tbillboardMVMatrix[0][0] = sx; \n\t\tbillboardMVMatrix[0][1] = 0.0; \n\t\tbillboardMVMatrix[0][2] = 0.0; \n\n\t\tbillboardMVMatrix[1][0] = 0.0; \n\t\tbillboardMVMatrix[1][1] = sy;\n\t\tbillboardMVMatrix[1][2] = 0.0; \n\n\t\tbillboardMVMatrix[2][0] = 0.0; \n\t\tbillboardMVMatrix[2][1] = 0.0; \n\t\tbillboardMVMatrix[2][2] = sz;\n\n\t\tgl_Position = uPMatrix * billboardMVMatrix * vec4(newPosition, 1.0);\n\n\t}\n\telse {\n\t    gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);\n\t}\n\n}\n";
  },
  function (e, t) {
    e.exports =
      "precision highp float;\n\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvColor = color;\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n";
  },
  function (e, t) {
    e.exports =
      "precision highp float;\n\nuniform sampler2D tInput;\n\nvarying vec2 vUv;\n\nuniform vec2 resolution;\nuniform vec3 aColor;\nuniform float margin;\n\n\nvoid main() {\n\n\n\tgl_FragColor = mix( vec4(1.), vec4(aColor, 1.0), (texture2D(tInput, vUv).r) );\n\n}";
  },
  function (e, t) {
    e.exports =
      "#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\n\n\n\nuniform sampler2D tShadow;\nuniform sampler2D tNoise;\nuniform sampler2D tNoise0;\nuniform sampler2D tNoise1;\nuniform sampler2D tNoise2;\nuniform sampler2D tNoise3;\nuniform sampler2D tShadowColor;\n\nuniform sampler2D tInput;\nuniform sampler2D tAlpha;\nuniform sampler2D tNormal;\n\nuniform vec2 resolution;\nuniform float margin;\nuniform float useDepth;\nuniform mat4 rsmCameraModelViewMatrix;\nuniform mat4 rsmCameraProjectionMatrix;\nuniform int receiveShadow;\nuniform float width;\nuniform float height;\nuniform int useNormalMap;\nuniform vec2 normalScale;\nuniform vec3 lightPos;\nuniform vec3 cameraPos;\nuniform int useMaskTop;\nuniform int useMaskBottom;\nuniform int maskHorizontal;\n\n\nuniform vec2 frameUvs;\nuniform vec2 frameSize;\nuniform vec2 atlasSize;\n\nuniform vec2 normalFrameUvs; \nuniform vec2 normalFrameSize;\nuniform vec2 normalAtlasSize;\n\n\nuniform int useShadingColor;\nuniform vec3 uShadingColor;\n\nvarying vec4 Vertex_Normal;\nvarying vec4 Vertex_LightDir;\nvarying vec4 Vertex_EyeVec;\nvarying vec3 vViewPosition;\nvarying vec3 vViewNormal;\nvarying vec3 vPos;\nvarying vec2 vUv;\n\nuniform float uBias;\n\n\nfloat texture2DCompare(vec2 uv, float compare){\n    float shadowMapDepth = texture2D(tShadow, uv).r;\n    return step(compare, shadowMapDepth);\n}\n\nfloat texture2DCompareLinear(vec2 uv, float compare, vec2 size) {\n    vec2 pixelPos = uv * size + .5;\n    vec2 fractPart = fract(pixelPos);\n    vec2 startTexel = (pixelPos - fractPart) / size;\n    float blTexel = texture2DCompare(startTexel, compare);\n    float brTexel = texture2DCompare(startTexel + vec2(1./size.x, 0.), compare);\n    float tlTexel = texture2DCompare(startTexel + vec2(0., 1./size.y), compare);\n    float trTexel = texture2DCompare(startTexel + vec2(1./size.x, 1./size.y), compare);\n    float mixA = mix(blTexel, tlTexel, fractPart.y);\n    float mixB = mix(brTexel, trTexel, fractPart.y);\n    return mix( mixA, mixB, fractPart.x ); \n}\n\n// http://www.thetenthplanet.de/archives/1180\nmat3 cotangent_frame(vec3 N, vec3 p, vec2 uv)\n{\n\t// get edge vectors of the pixel triangle\n\tvec3 dp1 = dFdx( p );\n\tvec3 dp2 = dFdy( p );\n\tvec2 duv1 = dFdx( uv );\n\tvec2 duv2 = dFdy( uv );\n\t\n\t// solve the linear system\n\tvec3 dp2perp = cross( dp2, N );\n\tvec3 dp1perp = cross( N, dp1 );\n\tvec3 T = dp2perp * duv1.x + dp1perp * duv2.x;\n\tvec3 B = dp2perp * duv1.y + dp1perp * duv2.y;\n\t\n\t// construct a scale-invariant frame \n\tfloat invmax = inversesqrt( max( dot(T,T), dot(B,B) ) );\n\treturn mat3( T * invmax, B * invmax, N );\n}\n\nvec3 perturb_normal( vec3 N, vec3 V, vec2 texcoord )\n{\n\t// assume N, the interpolated vertex normal and \n\t// V, the view vector (vertex to eye)\n\tvec3 map = texture2D(tNormal, texcoord ).xyz;\n\tmap = map * 255./127. - 128./127.;\n\tmat3 TBN = cotangent_frame(N, -V, texcoord);\n\treturn normalize(TBN * map);\n}\n\n\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\tvec2 st1 = dFdy( vUv.st );\n\n\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\tvec3 N = normalize( surf_norm );\n\n\tvec3 mapN = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy = normalScale * mapN.xy;\n\tmat3 tsn = mat3( S, T, N );\n\treturn normalize( tsn * mapN );\n}\n\n\n\n// float rand(vec2 co){\n//     return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n// }\n\nhighp float rand(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nuniform int useTexture;\nuniform float pixelRatio;\n\nvoid main() {\n\n\tvec2 screenCoords   = gl_FragCoord.xy / resolution;\n\n\tfloat vMarginRatio = margin  / resolution.y;\n\tfloat hMarginRatio = margin  / resolution.x;\n\n\tif (useMaskTop == 1) {\n\t\tif ( screenCoords.y > 1. - vMarginRatio ) {\n\t\t\tdiscard;\n\t\t}\n\t}\n\t\t\n\tif (useMaskBottom == 1) {\n\t\tif ( screenCoords.y < vMarginRatio ) {\n\t\t\tdiscard;\n\t\t}\n\t}\n\n\tif ( maskHorizontal == 1 && (screenCoords.x < hMarginRatio || screenCoords.x > 1. - hMarginRatio) ) {\n\t\tdiscard;\n\t}\n\n\n\tfloat shadow;\n\tif (receiveShadow == 1) {\n\t\tvec4 worldToClip = rsmCameraProjectionMatrix * rsmCameraModelViewMatrix * vec4( vPos, 1.) ;\n\t\tvec3 clipToScreen = ( vec3( worldToClip.xyz ) / ( worldToClip.w * 2. ) );\n\t\tfloat depth = ( (worldToClip.xyz/worldToClip.w).z + 1.) / 2.; \n\t\tvec2 screenToUV = 0.5 - vec2( clipToScreen.xy ) * -1.0;\n\t\tshadow = texture2DCompare( screenToUV, depth - uBias);\n\t}\n\telse {\n\t\tshadow = 1.0;\n\t}\n\n\n\tvec4 outColor  = vec4(0.,0.,0.,0.);\n\n\tif (useTexture == 1) {\n\t\tvec2 off = (vec2(vUv.x,1.-vUv.y) * frameSize) / atlasSize\n\t\t\t\t+ vec2(frameUvs.x, frameUvs.y) / atlasSize;\n\t\t    outColor   = texture2D(tInput, vec2(off.x, 1.-off.y));\n\t\t\toutColor.a = texture2D(tAlpha, vec2(off.x, 1.-off.y)).r;\n\t}\n\n\tfloat noiseTexWidth  = 128./pixelRatio;\n\tfloat noiseTexHeight = 128./pixelRatio;\n\tvec2 offset = vec2(\n\t\t   mod(vUv.x * width, noiseTexWidth) / (noiseTexWidth),\n\t\t  (mod(vUv.y * height, noiseTexHeight)) / (noiseTexHeight)\n\t);\n\n\n\tif (useNormalMap == 1) {\n\n\t\t// vec3 _normal = normalize(Vertex_Normal.xyz); \n\t\t// _normal = perturbNormal2Arb( normalize(Vertex_EyeVec.xyz), _normal );\n\n\t\tvec2 normalUvs =  (vec2(vUv.x,1.-vUv.y) * normalFrameSize) / normalAtlasSize\n\t\t\t\t\t     + vec2(normalFrameUvs.x, normalFrameUvs.y) / normalAtlasSize;\n\n\t\tnormalUvs = vec2(normalUvs.x, 1.-normalUvs.y);\n\t\t\n\t\tvec3 _normal = (texture2D(tNormal, normalUvs).rgb*2.0 - 1.0);\n\n\t\t// compute tangent T and bitangent B\n\t\tvec3 Q1 = dFdx(vPos);\n\t\tvec3 Q2 = dFdy(-vPos);\n\t\tvec2 st1 = dFdx(vUv);\n\t\tvec2 st2 = dFdy(vUv);\n\t \n\t\tvec3 T = normalize(Q1*st2.t - Q2*st1.t);\n\t\tvec3 B = normalize(-Q1*st2.s + Q2*st1.s);\n\t \n\t\t// the transpose of texture-to-eye space matrix\n\t\tmat3 TBN = mat3(T, B, vec3(0.,0.,1.) );\n\t \n\t\t// transform the normal to eye space \n\t\t_normal = _normal*TBN;\n\n\t\tfloat cosTerm = max(0., dot(_normal, normalize(lightPos - vPos)) );\n\n\t\tvec3 diffuseColor = outColor.rgb;\n\n\n\t\tvec3 shadedColor = useShadingColor == 1 \n\t\t\t\t\t\t\t\t? uShadingColor\n\t\t\t\t\t\t\t\t: outColor.rgb * vec3(217./255.,214./255.,225./255.);\n\n\t\t// if (cosTerm < 0.3) {\n\t\t// \tvec2 noise_offset = vec2(\n\t\t// \t\tmod(vUv.x * width, (1.-cosTerm/0.3)*256.) / (256.),\n\t\t// \t\t(mod(vUv.y * height, 256.)) / (256.)\n\t\t// \t);\n\t\t// \tfloat noise = texture2D(tNoise, noise_offset).r;\n\t\t// \tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t// }\n\t\n\t\tif (cosTerm < 0.05) {\n\t\t\tfloat noise = texture2D(tNoise0, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\telse if (cosTerm < 0.125) {\n\t\t\tfloat noise = texture2D(tNoise1, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\telse if (cosTerm < 0.2) {\n\t\t\tfloat noise = texture2D(tNoise2, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\telse if (cosTerm < 0.3) {\n\t\t\tfloat noise = texture2D(tNoise3, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\t\n\n\t\tif (shadow < 1.) {\n\t\t\tfloat shadowNoise = texture2D(tNoise0, offset ).r;\n\t\t\tdiffuseColor *= mix(vec3(1.), vec3(217./255.,214./255.,225./255.), 0.3 + shadowNoise*0.7 ); \n\t\t}\n\n\t\tgl_FragColor = vec4( diffuseColor.rgb, outColor.a);\n\t\t\t\n\n\t}\n\telse if (useTexture==1) {\n\t\tfloat noise = texture2D(tNoise0, offset ).r;\n\n\t\tif (shadow < 1.) {\n\t\t\tgl_FragColor =vec4( mix(outColor.rgb, outColor.rgb * vec3(217./255.,214./255.,225./255.), 0.4 + 0.6*noise ), outColor.a);\n\t\t}\n\t\telse {\n\t\t\tgl_FragColor = vec4( outColor.rgb, outColor.a);\n\t\t}\n\t}\n\telse {\n\n\t\tfloat noise = texture2D(tNoise0, offset ).r;\n\n\t\tgl_FragColor = vec4( vec3(191./255.,169./255.,166./255.), (1.-shadow)*0.4*noise);\n\t}\n\t\n\n\t\n}";
  },
  function (e, t) {
    var i,
      r,
      s = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function n() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (i === setTimeout) return setTimeout(e, 0);
      if ((i === o || !i) && setTimeout)
        return (i = setTimeout), setTimeout(e, 0);
      try {
        return i(e, 0);
      } catch (t) {
        try {
          return i.call(null, e, 0);
        } catch (t) {
          return i.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        i = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        i = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (e) {
        r = n;
      }
    })();
    var h,
      l = [],
      p = !1,
      c = -1;
    function u() {
      p &&
        h &&
        ((p = !1), h.length ? (l = h.concat(l)) : (c = -1), l.length && d());
    }
    function d() {
      if (!p) {
        var e = a(u);
        p = !0;
        for (var t = l.length; t; ) {
          for (h = l, l = []; ++c < t; ) h && h[c].run();
          (c = -1), (t = l.length);
        }
        (h = null),
          (p = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === n || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (s.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      l.push(new m(e, t)), 1 !== l.length || p || a(d);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (s.title = "browser"),
      (s.browser = !0),
      (s.env = {}),
      (s.argv = []),
      (s.version = ""),
      (s.versions = {}),
      (s.on = f),
      (s.addListener = f),
      (s.once = f),
      (s.off = f),
      (s.removeListener = f),
      (s.removeAllListeners = f),
      (s.emit = f),
      (s.prependListener = f),
      (s.prependOnceListener = f),
      (s.listeners = function (e) {
        return [];
      }),
      (s.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (s.cwd = function () {
        return "/";
      }),
      (s.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (s.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    e.exports =
      "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\n\n#ifdef USE_DISPLACE\n\tuniform sampler2D tDisplace;\n#endif\n\n\nvoid main(void) {\n\n\tvUv = uv;\n\n\tvec3 newpos = position;\n\n\t#ifdef USE_DISPLACE\n\t\tnewpos.z += texture2D(tDisplace, vUv).r * 200.; \n\t#endif\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(newpos, 1.0);\n\n}\n";
  },
  function (e, t) {
    e.exports =
      "precision highp float;\n\nuniform sampler2D tAlpha;\nvarying vec2 vUv;\n\n\nuniform vec2 alphaFrameUvs; \nuniform vec2 alphaFrameSize;\nuniform vec2 alphaAtlasSize;\n\t\t\nuniform int useTexture;\n\nvoid main() {\n\n\tif (useTexture==1) {\n\t\tvec2 alphaUvs =  (vec2(vUv.x,1.-vUv.y) * alphaFrameSize) / alphaAtlasSize\n\t\t\t\t\t\t\t+ vec2(alphaFrameUvs.x, alphaFrameUvs.y) / alphaAtlasSize;\n\n\t\talphaUvs = vec2(alphaUvs.x, 1.-alphaUvs.y);\n\n\t\tif (texture2D(tAlpha, alphaUvs).r < 0.5 ) {\n\t\t\tdiscard;\n\t\t}\n\t}\n\n\tgl_FragColor = vec4(vec3(gl_FragCoord.z), 1.);\n\t\n}";
  },
  function (e, t, i) {
    var r = i(21);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var s = { insert: "head", singleton: !1 };
    i(4)(r, s);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, i) {
    var r = i(22);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var s = { insert: "head", singleton: !1 };
    i(4)(r, s);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, i) {},
  function (e, t, i) {
    var r = i(24);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var s = { insert: "head", singleton: !1 };
    i(4)(r, s);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, i) {
    var r = i(25);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var s = { insert: "head", singleton: !1 };
    i(4)(r, s);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, i) {},
  function (e, t, i) {
    var r = i(27);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var s = { insert: "head", singleton: !1 };
    i(4)(r, s);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, i) {
    var r = i(28);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var s = { insert: "head", singleton: !1 };
    i(4)(r, s);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, i) {},
  function (e, t, i) {
    function r(e) {
      if (e)
        return (function (e) {
          for (var t in r.prototype) e[t] = r.prototype[t];
          return e;
        })(e);
    }
    (e.exports = r),
      (r.prototype.on = r.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
      (r.prototype.once = function (e, t) {
        function i() {
          this.off(e, i), t.apply(this, arguments);
        }
        return (i.fn = t), this.on(e, i), this;
      }),
      (r.prototype.off =
        r.prototype.removeListener =
        r.prototype.removeAllListeners =
        r.prototype.removeEventListener =
          function (e, t) {
            if (
              ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
            )
              return (this._callbacks = {}), this;
            var i,
              r = this._callbacks["$" + e];
            if (!r) return this;
            if (1 == arguments.length)
              return delete this._callbacks["$" + e], this;
            for (var s = 0; s < r.length; s++)
              if ((i = r[s]) === t || i.fn === t) {
                r.splice(s, 1);
                break;
              }
            return 0 === r.length && delete this._callbacks["$" + e], this;
          }),
      (r.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        for (
          var t = new Array(arguments.length - 1),
            i = this._callbacks["$" + e],
            r = 1;
          r < arguments.length;
          r++
        )
          t[r - 1] = arguments[r];
        if (i) {
          r = 0;
          for (var s = (i = i.slice(0)).length; r < s; ++r) i[r].apply(this, t);
        }
        return this;
      }),
      (r.prototype.listeners = function (e) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks["$" + e] || []
        );
      }),
      (r.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
      });
  },
  function (e, t) {
    (e.exports = s), (s.default = s), (s.stable = n), (s.stableStringify = n);
    var i = [],
      r = [];
    function s(e, t, s) {
      var o;
      for (
        !(function e(t, s, o, n) {
          var a;
          if ("object" == typeof t && null !== t) {
            for (a = 0; a < o.length; a++)
              if (o[a] === t) {
                var h = Object.getOwnPropertyDescriptor(n, s);
                return void (void 0 !== h.get
                  ? h.configurable
                    ? (Object.defineProperty(n, s, { value: "[Circular]" }),
                      i.push([n, s, t, h]))
                    : r.push([t, s])
                  : ((n[s] = "[Circular]"), i.push([n, s, t])));
              }
            if ((o.push(t), Array.isArray(t)))
              for (a = 0; a < t.length; a++) e(t[a], a, o, t);
            else {
              var l = Object.keys(t);
              for (a = 0; a < l.length; a++) {
                var p = l[a];
                e(t[p], p, o, t);
              }
            }
            o.pop();
          }
        })(e, "", [], void 0),
          o =
            0 === r.length
              ? JSON.stringify(e, t, s)
              : JSON.stringify(e, a(t), s);
        0 !== i.length;

      ) {
        var n = i.pop();
        4 === n.length
          ? Object.defineProperty(n[0], n[1], n[3])
          : (n[0][n[1]] = n[2]);
      }
      return o;
    }
    function o(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    function n(e, t, s) {
      var n,
        h =
          (function e(t, s, n, a) {
            var h;
            if ("object" == typeof t && null !== t) {
              for (h = 0; h < n.length; h++)
                if (n[h] === t) {
                  var l = Object.getOwnPropertyDescriptor(a, s);
                  return void (void 0 !== l.get
                    ? l.configurable
                      ? (Object.defineProperty(a, s, { value: "[Circular]" }),
                        i.push([a, s, t, l]))
                      : r.push([t, s])
                    : ((a[s] = "[Circular]"), i.push([a, s, t])));
                }
              if ("function" == typeof t.toJSON) return;
              if ((n.push(t), Array.isArray(t)))
                for (h = 0; h < t.length; h++) e(t[h], h, n, t);
              else {
                var p = {},
                  c = Object.keys(t).sort(o);
                for (h = 0; h < c.length; h++) {
                  var u = c[h];
                  e(t[u], u, n, t), (p[u] = t[u]);
                }
                if (void 0 === a) return p;
                i.push([a, s, t]), (a[s] = p);
              }
              n.pop();
            }
          })(e, "", [], void 0) || e;
      for (
        n =
          0 === r.length ? JSON.stringify(h, t, s) : JSON.stringify(h, a(t), s);
        0 !== i.length;

      ) {
        var l = i.pop();
        4 === l.length
          ? Object.defineProperty(l[0], l[1], l[3])
          : (l[0][l[1]] = l[2]);
      }
      return n;
    }
    function a(e) {
      return (
        (e =
          void 0 !== e
            ? e
            : function (e, t) {
                return t;
              }),
        function (t, i) {
          if (r.length > 0)
            for (var s = 0; s < r.length; s++) {
              var o = r[s];
              if (o[1] === t && o[0] === i) {
                (i = "[Circular]"), r.splice(s, 1);
                break;
              }
            }
          return e.call(this, t, i);
        }
      );
    }
  },
  function (e, t, i) {
    "use strict";
    var r = i(32),
      s = i(33),
      o = i(11);
    e.exports = { formats: o, parse: s, stringify: r };
  },
  function (e, t, i) {
    "use strict";
    var r = i(10),
      s = i(11),
      o = Object.prototype.hasOwnProperty,
      n = {
        brackets: function (e) {
          return e + "[]";
        },
        comma: "comma",
        indices: function (e, t) {
          return e + "[" + t + "]";
        },
        repeat: function (e) {
          return e;
        },
      },
      a = Array.isArray,
      h = Array.prototype.push,
      l = function (e, t) {
        h.apply(e, a(t) ? t : [t]);
      },
      p = Date.prototype.toISOString,
      c = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        formatter: s.formatters[s.default],
        indices: !1,
        serializeDate: function (e) {
          return p.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      u = function e(t, i, s, o, n, h, p, u, d, m, f, g, v) {
        var y = t;
        if (
          ("function" == typeof p
            ? (y = p(i, y))
            : y instanceof Date
            ? (y = m(y))
            : "comma" === s && a(y) && (y = y.join(",")),
          null === y)
        ) {
          if (o) return h && !g ? h(i, c.encoder, v) : i;
          y = "";
        }
        if (
          "string" == typeof y ||
          "number" == typeof y ||
          "boolean" == typeof y ||
          r.isBuffer(y)
        )
          return h
            ? [f(g ? i : h(i, c.encoder, v)) + "=" + f(h(y, c.encoder, v))]
            : [f(i) + "=" + f(String(y))];
        var w,
          _ = [];
        if (void 0 === y) return _;
        if (a(p)) w = p;
        else {
          var x = Object.keys(y);
          w = u ? x.sort(u) : x;
        }
        for (var b = 0; b < w.length; ++b) {
          var S = w[b];
          (n && null === y[S]) ||
            (a(y)
              ? l(
                  _,
                  e(
                    y[S],
                    "function" == typeof s ? s(i, S) : i,
                    s,
                    o,
                    n,
                    h,
                    p,
                    u,
                    d,
                    m,
                    f,
                    g,
                    v
                  )
                )
              : l(
                  _,
                  e(
                    y[S],
                    i + (d ? "." + S : "[" + S + "]"),
                    s,
                    o,
                    n,
                    h,
                    p,
                    u,
                    d,
                    m,
                    f,
                    g,
                    v
                  )
                ));
        }
        return _;
      };
    e.exports = function (e, t) {
      var i,
        r = e,
        h = (function (e) {
          if (!e) return c;
          if (
            null !== e.encoder &&
            void 0 !== e.encoder &&
            "function" != typeof e.encoder
          )
            throw new TypeError("Encoder has to be a function.");
          var t = e.charset || c.charset;
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var i = s.default;
          if (void 0 !== e.format) {
            if (!o.call(s.formatters, e.format))
              throw new TypeError("Unknown format option provided.");
            i = e.format;
          }
          var r = s.formatters[i],
            n = c.filter;
          return (
            ("function" == typeof e.filter || a(e.filter)) && (n = e.filter),
            {
              addQueryPrefix:
                "boolean" == typeof e.addQueryPrefix
                  ? e.addQueryPrefix
                  : c.addQueryPrefix,
              allowDots: void 0 === e.allowDots ? c.allowDots : !!e.allowDots,
              charset: t,
              charsetSentinel:
                "boolean" == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : c.charsetSentinel,
              delimiter: void 0 === e.delimiter ? c.delimiter : e.delimiter,
              encode: "boolean" == typeof e.encode ? e.encode : c.encode,
              encoder: "function" == typeof e.encoder ? e.encoder : c.encoder,
              encodeValuesOnly:
                "boolean" == typeof e.encodeValuesOnly
                  ? e.encodeValuesOnly
                  : c.encodeValuesOnly,
              filter: n,
              formatter: r,
              serializeDate:
                "function" == typeof e.serializeDate
                  ? e.serializeDate
                  : c.serializeDate,
              skipNulls:
                "boolean" == typeof e.skipNulls ? e.skipNulls : c.skipNulls,
              sort: "function" == typeof e.sort ? e.sort : null,
              strictNullHandling:
                "boolean" == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : c.strictNullHandling,
            }
          );
        })(t);
      "function" == typeof h.filter
        ? (r = (0, h.filter)("", r))
        : a(h.filter) && (i = h.filter);
      var p,
        d = [];
      if ("object" != typeof r || null === r) return "";
      p =
        t && t.arrayFormat in n
          ? t.arrayFormat
          : t && "indices" in t
          ? t.indices
            ? "indices"
            : "repeat"
          : "indices";
      var m = n[p];
      i || (i = Object.keys(r)), h.sort && i.sort(h.sort);
      for (var f = 0; f < i.length; ++f) {
        var g = i[f];
        (h.skipNulls && null === r[g]) ||
          l(
            d,
            u(
              r[g],
              g,
              m,
              h.strictNullHandling,
              h.skipNulls,
              h.encode ? h.encoder : null,
              h.filter,
              h.sort,
              h.allowDots,
              h.serializeDate,
              h.formatter,
              h.encodeValuesOnly,
              h.charset
            )
          );
      }
      var v = d.join(h.delimiter),
        y = !0 === h.addQueryPrefix ? "?" : "";
      return (
        h.charsetSentinel &&
          ("iso-8859-1" === h.charset
            ? (y += "utf8=%26%2310003%3B&")
            : (y += "utf8=%E2%9C%93&")),
        v.length > 0 ? y + v : ""
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var r = i(10),
      s = Object.prototype.hasOwnProperty,
      o = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      n = function (e) {
        return e.replace(/&#(\d+);/g, function (e, t) {
          return String.fromCharCode(parseInt(t, 10));
        });
      },
      a = function (e, t, i) {
        if (e) {
          var r = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            o = /(\[[^[\]]*])/g,
            n = /(\[[^[\]]*])/.exec(r),
            a = n ? r.slice(0, n.index) : r,
            h = [];
          if (a) {
            if (
              !i.plainObjects &&
              s.call(Object.prototype, a) &&
              !i.allowPrototypes
            )
              return;
            h.push(a);
          }
          for (var l = 0; null !== (n = o.exec(r)) && l < i.depth; ) {
            if (
              ((l += 1),
              !i.plainObjects &&
                s.call(Object.prototype, n[1].slice(1, -1)) &&
                !i.allowPrototypes)
            )
              return;
            h.push(n[1]);
          }
          return (
            n && h.push("[" + r.slice(n.index) + "]"),
            (function (e, t, i) {
              for (var r = t, s = e.length - 1; s >= 0; --s) {
                var o,
                  n = e[s];
                if ("[]" === n && i.parseArrays) o = [].concat(r);
                else {
                  o = i.plainObjects ? Object.create(null) : {};
                  var a =
                      "[" === n.charAt(0) && "]" === n.charAt(n.length - 1)
                        ? n.slice(1, -1)
                        : n,
                    h = parseInt(a, 10);
                  i.parseArrays || "" !== a
                    ? !isNaN(h) &&
                      n !== a &&
                      String(h) === a &&
                      h >= 0 &&
                      i.parseArrays &&
                      h <= i.arrayLimit
                      ? ((o = [])[h] = r)
                      : (o[a] = r)
                    : (o = { 0: r });
                }
                r = o;
              }
              return r;
            })(h, t, i)
          );
        }
      };
    e.exports = function (e, t) {
      var i = (function (e) {
        if (!e) return o;
        if (
          null !== e.decoder &&
          void 0 !== e.decoder &&
          "function" != typeof e.decoder
        )
          throw new TypeError("Decoder has to be a function.");
        if (
          void 0 !== e.charset &&
          "utf-8" !== e.charset &&
          "iso-8859-1" !== e.charset
        )
          throw new Error(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var t = void 0 === e.charset ? o.charset : e.charset;
        return {
          allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
          allowPrototypes:
            "boolean" == typeof e.allowPrototypes
              ? e.allowPrototypes
              : o.allowPrototypes,
          arrayLimit:
            "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
          charset: t,
          charsetSentinel:
            "boolean" == typeof e.charsetSentinel
              ? e.charsetSentinel
              : o.charsetSentinel,
          comma: "boolean" == typeof e.comma ? e.comma : o.comma,
          decoder: "function" == typeof e.decoder ? e.decoder : o.decoder,
          delimiter:
            "string" == typeof e.delimiter || r.isRegExp(e.delimiter)
              ? e.delimiter
              : o.delimiter,
          depth: "number" == typeof e.depth ? e.depth : o.depth,
          ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
          interpretNumericEntities:
            "boolean" == typeof e.interpretNumericEntities
              ? e.interpretNumericEntities
              : o.interpretNumericEntities,
          parameterLimit:
            "number" == typeof e.parameterLimit
              ? e.parameterLimit
              : o.parameterLimit,
          parseArrays: !1 !== e.parseArrays,
          plainObjects:
            "boolean" == typeof e.plainObjects
              ? e.plainObjects
              : o.plainObjects,
          strictNullHandling:
            "boolean" == typeof e.strictNullHandling
              ? e.strictNullHandling
              : o.strictNullHandling,
        };
      })(t);
      if ("" === e || null == e)
        return i.plainObjects ? Object.create(null) : {};
      for (
        var h =
            "string" == typeof e
              ? (function (e, t) {
                  var i,
                    a = {},
                    h = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                    l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                    p = h.split(t.delimiter, l),
                    c = -1,
                    u = t.charset;
                  if (t.charsetSentinel)
                    for (i = 0; i < p.length; ++i)
                      0 === p[i].indexOf("utf8=") &&
                        ("utf8=%E2%9C%93" === p[i]
                          ? (u = "utf-8")
                          : "utf8=%26%2310003%3B" === p[i] &&
                            (u = "iso-8859-1"),
                        (c = i),
                        (i = p.length));
                  for (i = 0; i < p.length; ++i)
                    if (i !== c) {
                      var d,
                        m,
                        f = p[i],
                        g = f.indexOf("]="),
                        v = -1 === g ? f.indexOf("=") : g + 1;
                      -1 === v
                        ? ((d = t.decoder(f, o.decoder, u)),
                          (m = t.strictNullHandling ? null : ""))
                        : ((d = t.decoder(f.slice(0, v), o.decoder, u)),
                          (m = t.decoder(f.slice(v + 1), o.decoder, u))),
                        m &&
                          t.interpretNumericEntities &&
                          "iso-8859-1" === u &&
                          (m = n(m)),
                        m &&
                          t.comma &&
                          m.indexOf(",") > -1 &&
                          (m = m.split(",")),
                        s.call(a, d) ? (a[d] = r.combine(a[d], m)) : (a[d] = m);
                    }
                  return a;
                })(e, i)
              : e,
          l = i.plainObjects ? Object.create(null) : {},
          p = Object.keys(h),
          c = 0;
        c < p.length;
        ++c
      ) {
        var u = p[c],
          d = a(u, h[u], i);
        l = r.merge(l, d, i);
      }
      return r.compact(l);
    };
  },
  function (e, t, i) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var s = i(12);
    function o(e) {
      if (e)
        return (function (e) {
          for (var t in o.prototype)
            Object.prototype.hasOwnProperty.call(o.prototype, t) &&
              (e[t] = o.prototype[t]);
          return e;
        })(e);
    }
    (e.exports = o),
      (o.prototype.clearTimeout = function () {
        return (
          clearTimeout(this._timer),
          clearTimeout(this._responseTimeoutTimer),
          clearTimeout(this._uploadTimeoutTimer),
          delete this._timer,
          delete this._responseTimeoutTimer,
          delete this._uploadTimeoutTimer,
          this
        );
      }),
      (o.prototype.parse = function (e) {
        return (this._parser = e), this;
      }),
      (o.prototype.responseType = function (e) {
        return (this._responseType = e), this;
      }),
      (o.prototype.serialize = function (e) {
        return (this._serializer = e), this;
      }),
      (o.prototype.timeout = function (e) {
        if (!e || "object" !== r(e))
          return (
            (this._timeout = e),
            (this._responseTimeout = 0),
            (this._uploadTimeout = 0),
            this
          );
        for (var t in e)
          if (Object.prototype.hasOwnProperty.call(e, t))
            switch (t) {
              case "deadline":
                this._timeout = e.deadline;
                break;
              case "response":
                this._responseTimeout = e.response;
                break;
              case "upload":
                this._uploadTimeout = e.upload;
                break;
              default:
                console.warn("Unknown timeout option", t);
            }
        return this;
      }),
      (o.prototype.retry = function (e, t) {
        return (
          (0 !== arguments.length && !0 !== e) || (e = 1),
          e <= 0 && (e = 0),
          (this._maxRetries = e),
          (this._retries = 0),
          (this._retryCallback = t),
          this
        );
      });
    var n = new Set([
        "ETIMEDOUT",
        "ECONNRESET",
        "EADDRINUSE",
        "ECONNREFUSED",
        "EPIPE",
        "ENOTFOUND",
        "ENETUNREACH",
        "EAI_AGAIN",
      ]),
      a = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
    (o.prototype._shouldRetry = function (e, t) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback)
        try {
          var i = this._retryCallback(e, t);
          if (!0 === i) return !0;
          if (!1 === i) return !1;
        } catch (e) {
          console.error(e);
        }
      if (t && t.status && a.has(t.status)) return !0;
      if (e) {
        if (e.code && n.has(e.code)) return !0;
        if (e.timeout && "ECONNABORTED" === e.code) return !0;
        if (e.crossDomain) return !0;
      }
      return !1;
    }),
      (o.prototype._retry = function () {
        return (
          this.clearTimeout(),
          this.req && ((this.req = null), (this.req = this.request())),
          (this._aborted = !1),
          (this.timedout = !1),
          (this.timedoutError = null),
          this._end()
        );
      }),
      (o.prototype.then = function (e, t) {
        var i = this;
        if (!this._fullfilledPromise) {
          var r = this;
          this._endCalled &&
            console.warn(
              "Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"
            ),
            (this._fullfilledPromise = new Promise(function (e, t) {
              r.on("abort", function () {
                if (!(i._maxRetries && i._maxRetries > i._retries))
                  if (i.timedout && i.timedoutError) t(i.timedoutError);
                  else {
                    var e = new Error("Aborted");
                    (e.code = "ABORTED"),
                      (e.status = i.status),
                      (e.method = i.method),
                      (e.url = i.url),
                      t(e);
                  }
              }),
                r.end(function (i, r) {
                  i ? t(i) : e(r);
                });
            }));
        }
        return this._fullfilledPromise.then(e, t);
      }),
      (o.prototype.catch = function (e) {
        return this.then(void 0, e);
      }),
      (o.prototype.use = function (e) {
        return e(this), this;
      }),
      (o.prototype.ok = function (e) {
        if ("function" != typeof e) throw new Error("Callback required");
        return (this._okCallback = e), this;
      }),
      (o.prototype._isResponseOK = function (e) {
        return (
          !!e &&
          (this._okCallback
            ? this._okCallback(e)
            : e.status >= 200 && e.status < 300)
        );
      }),
      (o.prototype.get = function (e) {
        return this._header[e.toLowerCase()];
      }),
      (o.prototype.getHeader = o.prototype.get),
      (o.prototype.set = function (e, t) {
        if (s(e)) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && this.set(i, e[i]);
          return this;
        }
        return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this;
      }),
      (o.prototype.unset = function (e) {
        return (
          delete this._header[e.toLowerCase()], delete this.header[e], this
        );
      }),
      (o.prototype.field = function (e, t) {
        if (null == e)
          throw new Error(".field(name, val) name can not be empty");
        if (this._data)
          throw new Error(
            ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
          );
        if (s(e)) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && this.field(i, e[i]);
          return this;
        }
        if (Array.isArray(t)) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && this.field(e, t[r]);
          return this;
        }
        if (null == t)
          throw new Error(".field(name, val) val can not be empty");
        return (
          "boolean" == typeof t && (t = String(t)),
          this._getFormData().append(e, t),
          this
        );
      }),
      (o.prototype.abort = function () {
        return (
          this._aborted ||
            ((this._aborted = !0),
            this.xhr && this.xhr.abort(),
            this.req && this.req.abort(),
            this.clearTimeout(),
            this.emit("abort")),
          this
        );
      }),
      (o.prototype._auth = function (e, t, i, r) {
        switch (i.type) {
          case "basic":
            this.set(
              "Authorization",
              "Basic ".concat(r("".concat(e, ":").concat(t)))
            );
            break;
          case "auto":
            (this.username = e), (this.password = t);
            break;
          case "bearer":
            this.set("Authorization", "Bearer ".concat(e));
        }
        return this;
      }),
      (o.prototype.withCredentials = function (e) {
        return void 0 === e && (e = !0), (this._withCredentials = e), this;
      }),
      (o.prototype.redirects = function (e) {
        return (this._maxRedirects = e), this;
      }),
      (o.prototype.maxResponseSize = function (e) {
        if ("number" != typeof e) throw new TypeError("Invalid argument");
        return (this._maxResponseSize = e), this;
      }),
      (o.prototype.toJSON = function () {
        return {
          method: this.method,
          url: this.url,
          data: this._data,
          headers: this._header,
        };
      }),
      (o.prototype.send = function (e) {
        var t = s(e),
          i = this._header["content-type"];
        if (this._formData)
          throw new Error(
            ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
          );
        if (t && !this._data)
          Array.isArray(e)
            ? (this._data = [])
            : this._isHost(e) || (this._data = {});
        else if (e && this._data && this._isHost(this._data))
          throw new Error("Can't merge these send calls");
        if (t && s(this._data))
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              (this._data[r] = e[r]);
        else
          "string" == typeof e
            ? (i || this.type("form"),
              (i = this._header["content-type"]) &&
                (i = i.toLowerCase().trim()),
              (this._data =
                "application/x-www-form-urlencoded" === i
                  ? this._data
                    ? "".concat(this._data, "&").concat(e)
                    : e
                  : (this._data || "") + e))
            : (this._data = e);
        return !t || this._isHost(e) || i || this.type("json"), this;
      }),
      (o.prototype.sortQuery = function (e) {
        return (this._sort = void 0 === e || e), this;
      }),
      (o.prototype._finalizeQueryString = function () {
        var e = this._query.join("&");
        if (
          (e && (this.url += (this.url.includes("?") ? "&" : "?") + e),
          (this._query.length = 0),
          this._sort)
        ) {
          var t = this.url.indexOf("?");
          if (t >= 0) {
            var i = this.url.slice(t + 1).split("&");
            "function" == typeof this._sort ? i.sort(this._sort) : i.sort(),
              (this.url = this.url.slice(0, t) + "?" + i.join("&"));
          }
        }
      }),
      (o.prototype._appendQueryString = function () {
        console.warn("Unsupported");
      }),
      (o.prototype._timeoutError = function (e, t, i) {
        if (!this._aborted) {
          var r = new Error("".concat(e + t, "ms exceeded"));
          (r.timeout = t),
            (r.code = "ECONNABORTED"),
            (r.errno = i),
            (this.timedout = !0),
            (this.timedoutError = r),
            this.abort(),
            this.callback(r);
        }
      }),
      (o.prototype._setTimeouts = function () {
        var e = this;
        this._timeout &&
          !this._timer &&
          (this._timer = setTimeout(function () {
            e._timeoutError("Timeout of ", e._timeout, "ETIME");
          }, this._timeout)),
          this._responseTimeout &&
            !this._responseTimeoutTimer &&
            (this._responseTimeoutTimer = setTimeout(function () {
              e._timeoutError(
                "Response timeout of ",
                e._responseTimeout,
                "ETIMEDOUT"
              );
            }, this._responseTimeout));
      });
  },
  function (e, t, i) {
    "use strict";
    var r = i(36);
    function s(e) {
      if (e)
        return (function (e) {
          for (var t in s.prototype)
            Object.prototype.hasOwnProperty.call(s.prototype, t) &&
              (e[t] = s.prototype[t]);
          return e;
        })(e);
    }
    (e.exports = s),
      (s.prototype.get = function (e) {
        return this.header[e.toLowerCase()];
      }),
      (s.prototype._setHeaderProperties = function (e) {
        var t = e["content-type"] || "";
        this.type = r.type(t);
        var i = r.params(t);
        for (var s in i)
          Object.prototype.hasOwnProperty.call(i, s) && (this[s] = i[s]);
        this.links = {};
        try {
          e.link && (this.links = r.parseLinks(e.link));
        } catch (e) {}
      }),
      (s.prototype._setStatusProperties = function (e) {
        var t = (e / 100) | 0;
        (this.statusCode = e),
          (this.status = this.statusCode),
          (this.statusType = t),
          (this.info = 1 === t),
          (this.ok = 2 === t),
          (this.redirect = 3 === t),
          (this.clientError = 4 === t),
          (this.serverError = 5 === t),
          (this.error = (4 === t || 5 === t) && this.toError()),
          (this.created = 201 === e),
          (this.accepted = 202 === e),
          (this.noContent = 204 === e),
          (this.badRequest = 400 === e),
          (this.unauthorized = 401 === e),
          (this.notAcceptable = 406 === e),
          (this.forbidden = 403 === e),
          (this.notFound = 404 === e),
          (this.unprocessableEntity = 422 === e);
      });
  },
  function (e, t, i) {
    "use strict";
    function r(e, t) {
      var i;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (i = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if (
              "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            )
              return s(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          i && (e = i);
          var r = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: o,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var n,
        a = !0,
        h = !1;
      return {
        s: function () {
          i = e[Symbol.iterator]();
        },
        n: function () {
          var e = i.next();
          return (a = e.done), e;
        },
        e: function (e) {
          (h = !0), (n = e);
        },
        f: function () {
          try {
            a || null == i.return || i.return();
          } finally {
            if (h) throw n;
          }
        },
      };
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
      return r;
    }
    (t.type = function (e) {
      return e.split(/ *; */).shift();
    }),
      (t.params = function (e) {
        var t,
          i = {},
          s = r(e.split(/ *; */));
        try {
          for (s.s(); !(t = s.n()).done; ) {
            var o = t.value.split(/ *= */),
              n = o.shift(),
              a = o.shift();
            n && a && (i[n] = a);
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
        return i;
      }),
      (t.parseLinks = function (e) {
        var t,
          i = {},
          s = r(e.split(/ *, */));
        try {
          for (s.s(); !(t = s.n()).done; ) {
            var o = t.value.split(/ *; */),
              n = o[0].slice(1, -1);
            i[o[1].split(/ *= */)[1].slice(1, -1)] = n;
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
        return i;
      }),
      (t.cleanHeader = function (e, t) {
        return (
          delete e["content-type"],
          delete e["content-length"],
          delete e["transfer-encoding"],
          delete e.host,
          t && (delete e.authorization, delete e.cookie),
          e
        );
      });
  },
  function (e, t, i) {
    "use strict";
    function r(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return s(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return s(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === i && e.constructor && (i = e.constructor.name);
          if ("Map" === i || "Set" === i) return Array.from(e);
          if (
            "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          )
            return s(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
      return r;
    }
    function o() {
      this._defaults = [];
    }
    [
      "use",
      "on",
      "once",
      "set",
      "query",
      "type",
      "accept",
      "auth",
      "withCredentials",
      "sortQuery",
      "retry",
      "ok",
      "redirects",
      "timeout",
      "buffer",
      "serialize",
      "parse",
      "ca",
      "key",
      "pfx",
      "cert",
      "disableTLSCerts",
    ].forEach(function (e) {
      o.prototype[e] = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        return this._defaults.push({ fn: e, args: i }), this;
      };
    }),
      (o.prototype._setDefaults = function (e) {
        this._defaults.forEach(function (t) {
          e[t.fn].apply(e, r(t.args));
        });
      }),
      (e.exports = o);
  },
  function (e, t) {
    e.exports =
      '<form enctype="{{enctype}}" method="{{method}}" action="{{action}}" class="js-form {{classForm}}">    <content></content></form><template is="light-core-template" if="{{!useEmailjs}}" remove-nodes=étrueé>\t<core-ajax src="{{action}}" method="{{method}}" send-on-src-change="{{sendOnSrcChange}}" content-type="{{enctype}}"  data="{{formData}}" on-success="onAjaxSuccess" on-error="onAjaxError" auto="false" headers="{{headers}}"></core-ajax></template>';
  },
  function (e, t) {
    e.exports =
      '<content></content><template is="light-core-template" if="{{cover || backgroundSize !==\'\'}}" remove-nodes="true">\t\t<div class="u-absolute u-fit u-pos-tl"\t\t\t $style="background-size: {{backgroundSize==\'\'?\'cover\':backgroundSize}}; \t\t\t\t\t background-position: {{backgroundPosition}};\t\t\t\t\t background-repeat: no-repeat;\t\t\t\t\t background-image: url(\'{{isReady?hdSrc:fallback}}\')"></div></template><template is="light-core-template" if="{{!cover && !backgroundSize}}" remove-nodes="true">\t<img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\' viewBox%3D\'0 0 {{width}} {{height}}\'%2F%3E" alt="{{alt}}" class="{{imgClass}}" style="; backface-visibility: hidden;visibility: hidden;"/>\t<template is="light-core-template" if="{{fallback}}">\t\t<img $src="{{fallback}}" aria-hidden="true" class="{{imgClass}} u-pos-tl u-absolute"\t\t\t\t$style="opacity:1; transition: opacity 1s; will-change: opacity; transform: translateZ(0); backface-visibility: hidden;"/>\t</template>\t<img $src="{{hdSrc}}" alt="{{alt}}" class="{{imgClass}} u-pos-tl u-absolute" $style="opacity: {{alpha}}; transition: opacity 1s; will-change: opacity; transform: translateZ(0); backface-visibility: hidden;"/></template>';
  },
  function (e, t) {
    e.exports =
      "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}";
  },
  function (e, t) {
    e.exports =
      "precision highp float;\n\nuniform float alpha;\nvarying vec2  vUv;\nuniform vec2  offset;\nuniform vec2  scale;\n\nuniform sampler2D tMap;\n\nvoid main(void) {\n\n    float _alpha = alpha;\n\n    vec2 _scale = 1./scale;\n    vec2 transformOrigin = vec2(0.5, 0.5);\n    vec2 scaledUvs = (vUv - transformOrigin) * _scale  + transformOrigin;\n    vec4 color;\n\n    if (scaledUvs.x + offset.x > 2.) {//debug\n        color = vec4(1.,0.,0., 1.);\n    }\n    else {\n        color = texture2D(tMap, scaledUvs + offset);\n    }\n\n    \n    \n    _alpha *= color.a;\n\n    gl_FragColor = vec4(color.rgb, _alpha);\n    \n}";
  },
  function (e, t) {
    e.exports =
      '<div class="js-content">        <template is="light-core-template" if="{{load}}" remove-nodes="true">        <template is="light-core-template" if="{{useNative && src !== null}}" remove-nodes="true">            <video class="o-wrapper--panel u-fit js-native-video" $src="{{src}}" syle="width:=100%; height: auto;"></video>        </template>        <template is="light-core-template" if="{{!useNative}}" remove-nodes="true">            <div class="o-wrapper--panel u-fit c-video__yt-wrapper" id="{{uuid}}-video" ></div>        </template>    </template>        <template is="light-core-template" if="{{poster!==\'\' && poster!==null && poster!==\'null\'}}">        <div aria-hidden="true" class="u-absolute u-pos-tl c-video-player__poster u-fit u-bg-cover u-pos-tl"             $style="transform: translateZ(0); z-index: 1;background-image:url(\'{{poster}}\');">        </div>    </template>    <div aria-hidden="true" style="padding-top: 56.25%;"></div>    <template is="light-core-template" if="{{showBigPlay && controls}}" remove-nodes="true">        <button class="u-pos-tl c-btn c-text--sm c-video__big-playo-wrapper--panel o-wrapper--valign u-align-center u-fit js-video-big-play"         style="background-color: rgba(0,0,0,0.5); z-index: 2; position: absolute;">            <span class="c-text--sm u-color--white  u-inline-block u-valign-middle">                Play            </span>        </button>    </template>    <template is="light-core-template" if="{{controls}}">        <div class="c-video-player__controls u-pad-x-vw1of18 u-absolute u-pos-bl u-align-center u-w2of2 u-pad-b-xs " style="z-index: 3">            <core-slider aria-hidden="true" active="{{active}}" class="c-video-player__progressbar u-inline-block u-valign-middle u-overflow-h" on-slide="onSliderSlide" on-stop="onSliderStop" value="{{timelineValue}}">                <div class="js-handler c-video-player__track u-fit-h u-relative"></div>            </core-slider>            <div class="u-flex u-justify-space-between">                <button aria-label="{{isPlaying?\'Pause\':\'Play\'}}" href="javascript:void(0);" class="c-btn u-color--white c-text--xs u-inline-block u-valign-middle js-video-play">                    {{isPlaying?\'Pause\':\'Play\'}}                </button>                <span class="u-inline-block u-color--white c-text--xs">                    {{currentTime}}                </span>                <button aria-label="toggle fullscreen" class="c-btn c-btn u-color--white c-text--xs u-inline-block u-valign-middle js-video-fullscreen">                    Fullscreen                </button >            </div>        </div>    </template></div>';
  },
  function (e, t) {
    e.exports =
      '<div class="{{wordClass}} js-content" style="opacity: 0">\t<content></content></div><div class="u-vacuum u-absolute u-pos-tl u-fit-w | js-placeholder"      style="opacity: 0;"></div><div class="u-vacuum  u-absolute u-pos-tl u-fit-w">\t<template is="light-core-template" repeat="{{line in lines}}" remove-nodes="true">\t\t<span class="{{wordClass}} u-inline-block u-relative c-anim c-anim--slide-y u-fit-w" \t\t\t\tstyle="transition-delay:{{direction==1?$index*0.1+delay:(lines.length-1-$index)*0.1+delay}}s">\t\t\t{{@line}}\t\t</span>\t</template></div>';
  },
  function (e, t) {
    e.exports =
      '<div aria-hidden="true" class="no-cursor js-slideshow-content u-relative u-fit u-overflow-h">\t<content></content>\t\x3c!-- <svg class="c-slideshow__arrow is-left u-absolute u-pos-tl {{hasTouch?\'is-active\':\'\'}}" viewBox="0 0 48 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\t\tstyle="top: 50%;">\t\t<g fill="#fff" transform="translate(24.000000, 42.000000) rotate(-90.000000) translate(-24.000000, -42.000000) translate(-18.000000, 18.000000)">\t\t\t<polygon points="0.5 42.4 5.5 47.6 42 10.7 78.5 47.6 83.5 42.4 42 0.4"></polygon>\t\t</g>\t</svg>\t<svg class="c-slideshow__arrow is-right u-absolute u-pos-tr {{hasTouch?\'is-active\':\'\'}}" viewBox="0 0 48 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\t\t\tstyle="top: 50%;">\t\t<g fill="#fff" transform="translate(24.000000, 42.000000) rotate(-90.000000) translate(-24.000000, -42.000000) translate(-18.000000, 18.000000)">\t\t\t<polygon points="0.5 42.4 5.5 47.6 42 10.7 78.5 47.6 83.5 42.4 42 0.4"></polygon>\t\t</g>\t</svg> --\x3e</div><h3 class="c-text--small u-color--light u-absolute u-fit-w u-align-center" \tstyle="left: 0; top: 50%; transform: translateY(-50%) translateZ(0); z-index: 10;">\t{{currentIndex+1 < 10 ? \'0\' + (currentIndex+1) : currentIndex+1}} / {{currentIndex+1 < 10 ? \'0\' + (slides.length) : slides.length}}</h3>\x3c!-- <div class="u-pointer-none u-absolute u-fit u-pos-tl " style="z-index: 11;">\t<button on-click="_prev" role="prev" class="u-marg-l-vw2of18 c-btn u-pointer-auto c-slidehsow-btn__prev"></button>\t<button on-click="_next" role="next" class="u-marg-r-vw2of18 c-btn u-pointer-auto c-slidehsow-btn__next"></button></div> --\x3e<div class="u-pointer-none u-absolute  c-slideshow__cursor\t\t\t| {{isPointerHover && !hasTouch?\'is-active\':\'\'}} {{cursorDirection == -1?\'is-left\':\'is-right\'}}\t\t\t| u-hide@sm" \t $style="transform: translate({{cursor[0]}}px, {{cursor[1]}}px) translateZ(0)">\t<div class="c-slideshow__cursor__inner">\t</div></div>\t';
  },
  function (e, t) {
    e.exports =
      '<div class="c-header__outter {{active?\'is-active\':\'\'}}">\t<div class="c-header__inner">\t\t\t\t<div class="u-align-right u-fit-h o-wrapper--valign js-content ">\t\t\t\t\t\t<nav role="navigation" class="u-valign-middle u-inline-block u-align-center u-w2of4">\t\t\t\t<template is="light-core-template" repeat="{{link in globalContent.header.links}}">\t\t\t\t\t<a  on-click="_onLinkDown"\t\t\t\t\t\t href="{{link.url}}"  \t\t\t\t\t\tclass="js-link c-header__link  c-link--primary u-inline-block" title="{{link.title}}"\t\t\t\t\t\tdata-index="{{$index}}">\t\t\t\t\t\t{{link.title}}\t\t\t\t\t</a>\t\t\t\t</template>\t\t\t</nav>\t\t\t<div class="u-valign-middle u-inline-block u-w1of4 ">\t\t\t\t\x3c!-- \t\t\t\t<a href="https://www.facebook.com/KOOX.LONDON/" class="c-link u-inline-block u-vacuum u-marg-r-sm " title="follow us on facebook">\t\t\t\t\t<svg class="u-inline-block c-icon--facebook"\t\t\t\t\t\t version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t\t\t\t\t\t viewBox="0 0 257.7 257.7" >\t\t\t\t\t\t<path d="M243.5,0H14.2C6.4,0,0,6.4,0,14.2v229.3c0,7.9,6.4,14.2,14.2,14.2h123.4v-99.8h-33.6V119h33.6V90.3 c0-33.3,20.3-51.4,50-51.4c14.2,0,26.5,1.1,30,1.5v34.8l-20.6,0c-16.1,0-19.3,7.7-19.3,18.9V119h38.5l-5,38.9h-33.5v99.8h65.7 c7.9,0,14.2-6.4,14.2-14.2V14.2C257.7,6.4,251.3,0,243.5,0z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t<a href="https://www.instagram.com/koox.london/" class="c-link u-inline-block u-vacuum u-marg-r-sm " title="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--instagram" \t\t\t\t\t\t version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \t\t\t\t\t\t x="0px" y="0px" viewBox="0 0 23.9 23.9"  >\t\t\t\t\t\t<path d="M11.9,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,11.9,2.2 \tM11.9,0C8.7,0,8.3,0,7,0.1C5.7,0.1,4.9,0.3,4.1,0.6C3.3,0.9,2.7,1.3,2,2C1.3,2.7,0.9,3.3,0.6,4.1C0.3,4.9,0.1,5.7,0.1,7 C0,8.3,0,8.7,0,11.9c0,3.2,0,3.6,0.1,4.9c0.1,1.3,0.3,2.1,0.6,2.9c0.3,0.8,0.7,1.5,1.4,2.1c0.7,0.7,1.3,1.1,2.1,1.4 c0.8,0.3,1.6,0.5,2.9,0.6c1.3,0.1,1.7,0.1,4.9,0.1s3.6,0,4.9-0.1c1.3-0.1,2.1-0.3,2.9-0.6c0.8-0.3,1.5-0.7,2.1-1.4 c0.7-0.7,1.1-1.3,1.4-2.1c0.3-0.8,0.5-1.6,0.6-2.9c0.1-1.3,0.1-1.7,0.1-4.9s0-3.6-0.1-4.9c-0.1-1.3-0.3-2.1-0.6-2.9 c-0.3-0.8-0.7-1.5-1.4-2.1c-0.7-0.7-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.9-0.6C15.6,0,15.2,0,11.9,0L11.9,0z"/>\t\t\t\t\t\t<path d="M11.9,5.8c-3.4,0-6.1,2.7-6.1,6.1s2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1S15.3,5.8,11.9,5.8z M11.9,15.9c-2.2,0-4-1.8-4-4 s1.8-4,4-4c2.2,0,4,1.8,4,4S14.1,15.9,11.9,15.9z"/>\t\t\t\t\t\t<circle cx="18.3" cy="5.6" r="1.4"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t<a href="https://twitter.com/koox_london" class="c-link u-inline-block u-vacuum " title="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--twitter"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\t\t\t\t\t\t<path class="cls-1" d="M13.32,34.63c13.59,0,21-11.26,21-21,0-.32,0-.64,0-1A15,15,0,0,0,38,8.83,14.74,14.74,0,0,1,33.76,10,7.41,7.41,0,0,0,37,5.91,14.8,14.8,0,0,1,32.32,7.7a7.39,7.39,0,0,0-12.59,6.74A21,21,0,0,1,4.51,6.72a7.39,7.39,0,0,0,2.29,9.86,7.33,7.33,0,0,1-3.35-.92s0,.06,0,.09A7.39,7.39,0,0,0,9.37,23,7.37,7.37,0,0,1,6,23.12a7.39,7.39,0,0,0,6.9,5.13,14.82,14.82,0,0,1-9.17,3.16A15,15,0,0,1,2,31.31a20.91,20.91,0,0,0,11.32,3.32"/>\t\t\t\t\t</svg>\t\t\t\t</a>--\x3e\t\t\t</div> \t\t</div>\t\t<div class="c-header__line-wrapper {{active?\'is-active\':\'\'}}">\t\t\t<div class="">\t\t\t\t<div class="c-header__line" style="transform: translateX({{linePosition}}px) scaleX({{lineScale}}) translateZ(0)"></div>\t\t\t\t<div class="c-header__line" style="transform: translateX({{linePosition2}}px) scaleX({{lineScale2}}) translateZ(0)"></div>\t\t\t</div>\t\t</div>\t\t\t</div></div>';
  },
  function (e, t) {
    e.exports =
      '<div class="u-fixed u-pos-tl u-viewport-fit js-scene">\t</div><div class="u-fixed u-pos-tl u-viewport-fit u-pointer-none c-frame {{isFrameActive ? \'is-active\' : \'\'}}">    <div class="u-absolute c-frame__border c-frame__border--top"></div>    <div class="u-absolute c-frame__border c-frame__border--right"></div>    <div class="u-absolute c-frame__border c-frame__border--bottom"></div>    <div class="u-absolute c-frame__border c-frame__border--left"></div></div>';
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var r = i(0),
      s = i(2),
      o = (i(5), i(7)),
      n = i(8),
      a = i.n(n),
      h = i(9),
      l = i(1),
      p = i(13),
      c = i.n(p),
      u = i(16),
      d = i.n(u);
    const m = window.devicePixelRatio;
    var f = 3e-4;
    t.default = () => {
      class e extends r.Component {
        get template() {
          return i(48);
        }
        get defaultProps() {
          return {
            height: { type: "f", value: window.innerHeight },
            width: { type: "f", value: window.innerWidth },
            winHeight: { type: "f", value: window.innerHeight },
            winWidth: { type: "f", value: window.innerWidth },
            position: { type: "arr", value: [0, 0] },
            scale: { type: "arr", value: [0, 0] },
            pointer: { type: "arr", value: [0, 0] },
            pointerRatio: { type: "arr", value: [0, 0] },
            currPointerRatio: { type: "arr", value: [0, 0] },
            deltaY: { type: "f", value: 0 },
            slides: { type: "arr", value: i(49) },
            currentSlideIndex: {
              type: "i",
              value: 0,
              change: "_onCurrentIndexchange",
            },
            selectedSlideIndex: { type: "i", value: -1 },
            direction: { type: "i", value: 1 },
            progress: { type: "f", value: 0 },
            scroll: { type: "f", value: 0 },
            onContentChange: { type: "fn", value: () => {} },
            onReady: { type: "fn", value: () => {} },
            globalContent: { type: "json", value: null },
            content: { type: "json", value: null },
            preload: { type: "f", value: 0 },
            isMobile: { type: "f", value: window.innerWidth < 700 },
            backgroundColor: { type: "arr", value: [239, 243, 240] },
            currentSlideLabel: "",
            cdnRoot: "",
          };
        }
        _onCurrentIndexchange() {
          this.props.currentSlideLabel =
            this.props.slides[this.props.currentSlideIndex].imgAlt;
        }
        _handleOrientation(e) {
          console.log("event", e),
            (this.props.pointerRatio[0] =
              Math.max(-90, Math.min(90, e.gamma / 1)) / 6),
            (this.props.pointerRatio[1] =
              Math.max(-10, Math.min(10, e.beta - 45)) / 10),
            (this.props.pointer[0] =
              ((e.gamma / 30 + 1) / 2) * this.props.width),
            (this.props.pointer[1] =
              ((e.beta / 30 + 1) / 2) * this.props.height);
        }
        created() {
          (this._onPointerMove = this._onPointerMove.bind(this)),
            (this._onMouseWheel = this._onMouseWheel.bind(this)),
            (this._onKeyDown = this._onKeyDown.bind(this)),
            (this._handleOrientation = this._handleOrientation.bind(this)),
            (this._deltaY = 0),
            (this._scroll = 0),
            (this._meshes = []),
            (this._time = 0),
            (this._scale = 0),
            (this._fullScale = 0),
            (this._backgroundColor = [239, 243, 240]),
            (this._preload = 0);
        }
        ready() {
          document.addEventListener("keydown", this._onKeyDown, !1),
            r.support.touch ||
              document.addEventListener(
                r.support.pointermove,
                this._onPointerMove,
                !1
              ),
            window.addEventListener(
              "deviceorientation",
              this._handleOrientation
            ),
            (this._indicator = new a.a({
              elem: document,
              callback: this._onMouseWheel,
              preventMouse: !0,
            })),
            this._indicator.turnOff(),
            this._indicator.turnOn(),
            r.support.touch &&
              (this._swipeIndicator = new h.a({
                elem: document,
                callback: this._onMouseWheel,
              })),
            (this._productAnim = new o.a({
              duration: 600,
              delay: 0,
              easing: [0.68, 0, 0.265, 1],
              step: (e) => {
                this._scroll =
                  this._startWheel +
                  e *
                    (this.props.currentSlideIndex * this.props.height -
                      this._startWheel);
              },
              end: () => {
                this._isScrolling = !1;
              },
            })),
            this.preload();
        }
        preload() {
          window.innerWidth <= 720 && 1 == window.devicePixelRatio
            ? (this.tiles = i(50))
            : (window.innerWidth <= 1440 && 1 == window.devicePixelRatio) ||
              (window.innerWidth <= 720 && window.devicePixelRatio > 1)
            ? (this.tiles = i(51))
            : (this.tiles = i(52)),
            this._build3dScene(),
            this.resize(),
            requestAnimationFrame(() => {
              this.props.onReady(),
                this.querySelector(".js-loader").classList.remove("is-active"),
                this._onCurrentIndexchange();
            });
        }
        _build3dScene() {
          (this.$sceneWrapper = this.querySelector(".js-scene")),
            (this._renderer = new l.i({ alpha: !0 })),
            (this._supportsDerivativeExtention = this._renderer.gl.getExtension(
              "OES_standard_derivatives"
            )),
            (this._depthMaterial = new l.e(this._renderer.gl, {
              uniforms: {},
              vertexShader: i(18),
              fragmentShader: i(19),
              blend: !1,
              depthTest: !1,
            })),
            (this._spriteMaterial = new l.e(this._renderer.gl, {
              type: this._renderer.gl.TRIANGLES,
              uniforms: {},
              vertexShader: c.a,
              fragmentShader: d.a,
              blend: !0,
            }));
          var e = {},
            t = {};
          for (let i = 0; i < this.tiles.length; i++)
            for (let r in this.tiles[i].frames)
              null == t[this.tiles[i].meta.image] &&
                (t[this.tiles[i].meta.image] = {
                  width: this.tiles[i].meta.size.w,
                  height: this.tiles[i].meta.size.h,
                  image: l.j.fromUrl(
                    this._renderer.gl,
                    this.props.cdnRoot + this.tiles[i].meta._image
                  ),
                  alpha: l.j.fromUrl(
                    this._renderer.gl,
                    this.props.cdnRoot + this.tiles[i].meta._alpha
                  ),
                }),
                null == e[r] &&
                  (e[r] = {
                    base: this.tiles[i].meta.image,
                    x: this.tiles[i].frames[r].frame.x,
                    y: this.tiles[i].frames[r].frame.y,
                    width: this.tiles[i].frames[r].frame.w,
                    height: this.tiles[i].frames[r].frame.h,
                  });
          var r = l.j.fromUrl(
              this._renderer.gl,
              this.props.cdnRoot + "/assets/images/home/grain.png"
            ),
            s = l.j.fromUrl(
              this._renderer.gl,
              this.props.cdnRoot + "/assets/images/home/grain-0.png"
            ),
            o = l.j.fromUrl(
              this._renderer.gl,
              this.props.cdnRoot + "/assets/images/home/grain-1.png"
            ),
            n = l.j.fromUrl(
              this._renderer.gl,
              this.props.cdnRoot + "/assets/images/home/grain-2.png"
            ),
            a = l.j.fromUrl(
              this._renderer.gl,
              this.props.cdnRoot + "/assets/images/home/grain-3.png"
            );
          (this._scene = new l.b()),
            (this._camera = new l.a({
              fov: 45,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 1e4,
              left: -window.innerWidth / 2,
              right: window.innerWidth / 2,
              top: window.innerHeight / 2,
              bottom: -window.innerHeight / 2,
              type: "ortho",
              orbitControl: !1,
            })),
            (this._camera.lookAt = l.l.create()),
            l.l.set(this._camera.lookAt, 0, 0, 0),
            (this._camera.position[2] = 1e3),
            this._renderer.setPixelRatio(m),
            this.$sceneWrapper.appendChild(this._renderer.canvas),
            (this._shadowCamera = new l.a({
              near: 1,
              far: 5e3,
              aspect: window.innerWidth / window.innerHeight,
              left: -window.innerWidth,
              right: window.innerWidth,
              top: window.innerHeight,
              bottom: -window.innerHeight,
              type: "ortho",
              orbitControl: !1,
            })),
            (this._shadowCamera.position[2] = 1e3),
            (this._shadowCamera.lookAt = l.l.create()),
            (this._shadowRenderTarget = new l.c(this._renderer.gl, {
              type: this._renderer.gl.FLOAT,
            })),
            this._shadowRenderTarget.resize(
              window.innerWidth / m,
              window.innerHeight / m
            );
          var h = new l.g(this._renderer.gl, {
            width: 1,
            height: 1,
            widthSegments: 1,
            heightSegments: 1,
          });
          this.props.slides[0].color[0],
            this.props.slides[0].color[1],
            this.props.slides[0].color[2];
          (this._meshWrapper = new l.b()), this._scene.add(this._meshWrapper);
          let p = 0;
          for (var u = 0; u < this.props.slides.length; u++)
            for (var f = 0; f < this.props.slides[u].children.length; f++) {
              let i,
                c,
                d,
                g,
                v = p,
                y = new l.f({
                  beforeRender: () => {
                    this._updateMeshUniforms(v);
                  },
                });
              y.geometry = h;
              let w = {
                color: [1, 0, 0],
                width: this.props.slides[u].children[f].width,
                height: this.props.slides[u].children[f].height,
                margin: (this.props.isMobile ? 30 : 90) * m,
                tShadow: this._shadowRenderTarget,
                resolution: [window.innerWidth * m, window.innerHeight * m],
                rsmCameraProjectionMatrix: this._shadowCamera.projectionMatrix,
                rsmCameraModelViewMatrix: this._shadowCamera.inverseWorldMatrix,
                billboard: this.props.slides[u].children[f].billboard ? 1 : 0,
                tNoise: r,
                tNoise0: s,
                tNoise1: o,
                tNoise2: n,
                tNoise3: a,
                pixelRatio: window.devicePixelRatio,
                useTexture: 0,
                useShadingColor: 0,
                useNormalMap: 0,
                receiveShadow: 0,
                useMaskTop: 0,
                maskHorizontal: 0,
                useMaskBottom: 0,
                uBias: 0,
                lightPos: [0, 0, 0],
                cameraPos: [0, 0, 0],
              };
              if (
                (this.props.slides[u].children[f].texture &&
                  ((w.useTexture = 1),
                  (i = this.props.slides[u].children[f].texture),
                  (c = e[i]),
                  (d = c.base),
                  (g = t[c.base]),
                  (w.tInput = g.image),
                  (w.tAlpha = g.alpha),
                  (w.frameUvs = [c.x, c.y]),
                  (w.frameSize = [c.width, c.height]),
                  (w.atlasSize = [g.width, g.height])),
                this.props.slides[u].children[f].maskTop && (w.useMaskTop = 1),
                this.props.slides[u].children[f].maskHorizontal &&
                  (w.maskHorizontal = 1),
                this.props.slides[u].children[f].maskBottom &&
                  (w.useMaskBottom = 1),
                (!this.props.slides[u].children[f].receiveShadow &&
                  void 0 !== this.props.slides[u].children[f].receiveShadow) ||
                  this.props.isMobile ||
                  (w.receiveShadow = 1),
                void 0 !== this.props.slides[u].children[f].normal &&
                  this._supportsDerivativeExtention)
              ) {
                let i = e[this.props.slides[u].children[f].normal],
                  r = t[i.base];
                (w.useNormalMap = 1),
                  (w.normalScale = l.k.create()),
                  (w.normalScale[0] = w.normalScale[1] = 50),
                  (w.lightPos = l.l.create()),
                  (w.cameraPos = l.l.create()),
                  (w.tNormal = r.image),
                  (w.normalFrameUvs = [i.x, i.y]),
                  (w.normalFrameSize = [i.width, i.height]),
                  (w.normalAtlasSize = [r.width, r.height]);
              }
              void 0 !== this.props.slides[u].children[f].shadingColor &&
                ((w.useShadingColor = 1),
                (w.uShadingColor =
                  this.props.slides[u].children[f].shadingColor)),
                (y.position[2] = f),
                this._meshWrapper.add(y);
              let _ = {
                alpha: 1,
                rsmCameraModelViewMatrix: null,
                rsmCameraProjectionMatrix: null,
              };
              1 == w.useTexture &&
                (_ = {
                  useTexture: 1,
                  tAlpha: g.alpha,
                  alphaFrameUvs: [c.x, c.y],
                  alphaFrameSize: [c.width, c.height],
                  alphaAtlasSize: [g.width, g.height],
                }),
                this._meshes.push({
                  shadowUniforms: _,
                  uniforms: w,
                  type: this.props.slides[u].type,
                  reverse: this.props.slides[u].children[f].reverse,
                  width: this.props.slides[u].children[f].width,
                  height: this.props.slides[u].children[f].height,
                  friction: this.props.slides[u].children[f].friction,
                  x: this.props.slides[u].children[f].x,
                  y: this.props.slides[u].children[f].y,
                  z: this.props.slides[u].children[f].z,
                  rotation: this.props.slides[u].children[f].rotation,
                  deltaY: 0,
                  mesh: y,
                  slideIndex: u,
                }),
                p++;
            }
        }
        _onMouseWheel(e) {
          if (!this._isScrolling && !this._isLoading) {
            var t = this.props.currentSlideIndex;
            (t += "down" == e.direction ? 1 : -1),
              (t = Math.max(0, Math.min(this.props.slides.length - 1, t))) !==
                this.props.currentSlideIndex && this._autoScroll(t);
          }
        }
        _onKeyDown(e) {
          if (
            !(
              this._isScrolling ||
              this._isLoading ||
              (40 != e.which && 38 != e.which)
            )
          ) {
            var t = this.props.currentSlideIndex;
            e.preventDefault(), e.stopPropagation();
            t = 0;
            40 == e.which &&
              ((t += this.props.currentSlideIndex + 1),
              (this.props.direction = 1)),
              38 == e.which &&
                ((t += this.props.currentSlideIndex - 1),
                (this.props.direction = -1)),
              this._autoScroll(t);
          }
        }
        _autoScroll(e) {
          this._isLoading ||
            this._isScrolling ||
            e === this.props.currentSlideIndex ||
            ((this.props.selectedSlideIndex = -1),
            (this.props.direction = e > this.props.currentSlideIndex ? 1 : -1),
            this._productAnim.pause(),
            (this._startWheel =
              this.props.currentSlideIndex * this.props.height),
            (this.props.currentSlideIndex = e),
            (this._isScrolling = !0),
            this._productAnim.play(),
            (this._backgroundColor[0] =
              this.props.slides[this.props.currentSlideIndex].color[0]),
            (this._backgroundColor[1] =
              this.props.slides[this.props.currentSlideIndex].color[1]),
            (this._backgroundColor[2] =
              this.props.slides[this.props.currentSlideIndex].color[2]));
        }
        _onBulletDown(e) {
          clearTimeout(this._autoplayTimer);
          let t = Number(e.currentTarget.getAttribute("data-index"));
          this._autoScroll(t);
        }
        detached() {
          void 0 !== this._indicator && this._indicator.destroy(),
            void 0 !== this._swipeIndicator && this._swipeIndicator.destroy(),
            document.removeEventListener(
              r.support.pointermove,
              this._onPointerMove,
              !1
            ),
            document.removeEventListener("keydown", this._onKeyDown, !1),
            window.removeEventListener(
              "deviceorientation",
              this._handleOrientation
            );
        }
        resize() {
          if (
            ((this.props.width = window.innerWidth),
            (this.props.height = window.innerHeight),
            (this.props.winHeight = window.innerHeight),
            (this.props.winWidth = window.innerWidth),
            (this._parentWidth = this.props.width),
            (this._parentHeight = this.props.height),
            (this.props.isMobile = window.innerWidth < 700),
            this.props.isMobile
              ? ((this._computedSize = Object(s.a)(
                  1440,
                  900,
                  this._parentWidth,
                  (this._parentHeight / 3) * 2,
                  !1
                )),
                (this._computedSize2 = Object(s.a)(
                  1440,
                  900,
                  this._parentWidth,
                  this._parentHeight,
                  !1
                )))
              : ((this._computedSize = Object(s.a)(
                  1440,
                  900,
                  this._parentWidth,
                  this._parentHeight,
                  !1
                )),
                (this._computedSize2 = Object(s.a)(
                  1440,
                  900,
                  this._parentWidth,
                  this._parentHeight,
                  !1
                ))),
            (this._scale = this._computedSize.height / 900),
            (this._fullScale = this._computedSize2.height / 900),
            this.$sceneWrapper)
          ) {
            this.props.isMobile ||
              ((this._shadowCamera.left = -window.innerWidth / 2),
              (this._shadowCamera.right = window.innerWidth / 2),
              (this._shadowCamera.top = window.innerHeight / 2),
              (this._shadowCamera.bottom = -window.innerHeight / 2),
              this._shadowRenderTarget.resize(
                window.innerWidth,
                window.innerHeight
              )),
              this._renderer.resize(window.innerWidth, window.innerHeight),
              (this._camera.position[2] = 3e3),
              (this._camera.aspect = window.innerWidth / window.innerHeight),
              (this._camera.left = -window.innerWidth / 2),
              (this._camera.right = window.innerWidth / 2),
              (this._camera.top = window.innerHeight / 2),
              (this._camera.bottom = -window.innerHeight / 2),
              this._camera.updateProjectionMatrix();
            for (var e = 0; e < this._meshes.length; e++)
              (this._meshes[e].uniforms.margin =
                (this.props.isMobile ? 30 : 90) * m),
                (this._meshes[e].uniforms.resolution = [
                  window.innerWidth * m,
                  window.innerHeight * m,
                ]);
            this.props.onContentChange(0);
          }
        }
        _onPointerMove(e) {
          (this._pointerEvent =
            r.support.touch && "mousemove" != event.type
              ? event.touches[0] || event.changedTouches[0]
              : event),
            (this.props.pointer[0] = this._pointerEvent.pageX),
            (this.props.pointer[1] = this._pointerEvent.pageY),
            (this.props.pointerRatio[0] =
              2 * (this.props.pointer[0] / this.props.width - 0.5)),
            (this.props.pointerRatio[1] =
              2 * (this.props.pointer[1] / this.props.height - 0.5));
        }
        update() {
          if (
            ((this.props.progress +=
              0.1 *
              (this._scroll /
                (this.props.height * (this.props.slides.length - 1)) -
                this.props.progress)),
            (this.props.preload += 0.05 * (this._preload - this.props.preload)),
            (this._time += 0.01),
            (this.props.deltaY +=
              0.1 *
              ((this._scroll / this.props.height) * -this.props.winHeight -
                this.props.deltaY)),
            (this.props.scroll += 0.1 * (this._scroll - this.props.scroll)),
            !this.$sceneWrapper)
          )
            return;
          for (var e = 0; e < this._meshes.length; e++) {
            let t = this._meshes[e];
            if (t.reverse && this.props.deltaY < -this.props.winHeight) {
              let e = this.props.deltaY + this.props.winHeight;
              t.deltaY +=
                (this.props.deltaY + -1 * e - e - t.deltaY) * (7 * t.friction);
            } else
              t.deltaY += (this.props.deltaY - t.deltaY) * (7 * t.friction);
            this.props.isMobile && "small" === t.type
              ? ((t.mesh.position[0] +=
                  (t.x + 200) * this._scale - t.mesh.position[0]),
                (t.mesh.position[1] +=
                  (t.y - 0.4 * this.props.winHeight) * this._scale -
                  this.props.winHeight * t.slideIndex -
                  t.deltaY -
                  t.mesh.position[1]))
              : ((t.mesh.position[0] +=
                  t.x * this._fullScale - t.mesh.position[0]),
                (t.mesh.position[1] +=
                  t.y * this._fullScale -
                  this.props.winHeight * t.slideIndex -
                  t.deltaY -
                  t.mesh.position[1])),
              (t.mesh.position[2] = t.z),
              (t.mesh.scale[0] = t.width * this._scale),
              (t.mesh.scale[1] = t.height * this._scale),
              void 0 !== t.rotation &&
                ((t.mesh.rotation[0] = t.rotation[0]),
                (t.mesh.rotation[1] = t.rotation[1]),
                (t.mesh.rotation[2] = t.rotation[2])),
              t.mesh.position[1] + t.mesh.height / 2 <
                -this.props.winHeight / 2 ||
              t.mesh.position[1] - t.mesh.height / 2 > this.props.winHeight / 2
                ? (t.mesh.visible = !1)
                : (t.mesh.visible = !0),
              void 0 !== t.uniforms.lightPos &&
                ((t.uniforms.lightPos[0] = this._shadowCamera.position[0]),
                (t.uniforms.lightPos[1] = this._shadowCamera.position[1]),
                (t.uniforms.lightPos[2] = this._shadowCamera.position[2]),
                t.uniforms.cameraPos &&
                  ((t.uniforms.cameraPos[0] = this._camera.position[0]),
                  (t.uniforms.cameraPos[1] = this._camera.position[1]),
                  (t.uniforms.cameraPos[2] = this._camera.position[2]))),
              (t.uniforms.uBias = f),
              (t.shadowUniforms.uBias = f),
              (t.shadowUniforms.rsmCameraProjectionMatrix =
                this._shadowCamera.projectionMatrix),
              (t.shadowUniforms.rsmCameraModelViewMatrix =
                this._shadowCamera.inverseWorldMatrix),
              (t.uniforms.rsmCameraProjectionMatrix =
                this._shadowCamera.projectionMatrix),
              (t.uniforms.rsmCameraModelViewMatrix =
                this._shadowCamera.inverseWorldMatrix);
          }
          let t = this.props.isMobile ? 500 : 1e3;
          if (
            ((this._shadowCamera.position[0] +=
              0.05 *
              (((this.props.isMobile ? 400 : 200) +
                Math.cos(this.props.pointer[0] / this.props.width + 0.5) * t) /
                2 -
                this._shadowCamera.position[0])),
            (this._shadowCamera.position[1] +=
              0.05 *
              ((Math.sin(this.props.pointer[1] / this.props.height) * t) / 2 -
                this._shadowCamera.position[1])),
            (this._shadowCamera.position[2] +=
              0.05 *
              ((Math.sin(this.props.pointer[0] / this.props.width + 0.5) * t) /
                2 -
                this._shadowCamera.position[2])),
            l.l.set(this._shadowCamera.lookAt, 0, 0, 0),
            (this._camera.position[0] +=
              ((this.props.pointerRatio[0] * this.props.winWidth) / -2 -
                this._camera.position[0]) *
              (this.props.isMobile ? 0.5 : 0.1)),
            (this._camera.position[1] +=
              ((this.props.pointerRatio[1] * this.props.winHeight) / 2 -
                this._camera.position[1]) *
              (this.props.isMobile ? 0.5 : 0.1)),
            l.l.set(this._camera.lookAt, 0, 0, 0),
            (this.props.backgroundColor[0] +=
              0.05 *
              (this._backgroundColor[0] - this.props.backgroundColor[0])),
            (this.props.backgroundColor[1] +=
              0.05 *
              (this._backgroundColor[1] - this.props.backgroundColor[1])),
            (this.props.backgroundColor[2] +=
              0.05 *
              (this._backgroundColor[2] - this.props.backgroundColor[2])),
            !this.props.isMobile)
          ) {
            for (e = 0; e < this._meshes.length; e++)
              this._meshes[e].mesh.material = this._depthMaterial;
            this._renderer.gl.colorMask(!0, !1, !1, !1),
              this._renderer.clearColor(1, 1, 1, 1),
              this._renderer.clear(),
              this._renderer.render(
                this._scene,
                this._shadowCamera,
                this._shadowRenderTarget
              ),
              this._renderer.gl.colorMask(!0, !0, !0, !0);
          }
          for (e = 0; e < this._meshes.length; e++)
            this._meshes[e].mesh.material = this._spriteMaterial;
          this._renderer.clearColor(0, 0, 0, 0),
            this._renderer.clear(),
            this._renderer.render(this._scene, this._camera);
        }
        _selectSlide(e) {
          let t = +e.currentTarget.getAttribute("data-index");
          this.props.selectedSlideIndex =
            this.props.selectedSlideIndex == t ? -1 : t;
        }
        _updateMeshUniforms(e) {
          if (this._meshes[e]) {
            if (this._meshes[e].mesh.material == this._depthMaterial)
              for (let t in this._meshes[e].shadowUniforms)
                void 0 !== this._meshes[e].mesh.material.uniforms[t] &&
                  (this._meshes[e].mesh.material.uniforms[t].value =
                    this._meshes[e].shadowUniforms[t]);
            if (this._meshes[e].mesh.material == this._spriteMaterial)
              for (let t in this._meshes[e].uniforms)
                void 0 !== this._meshes[e].mesh.material.uniforms[t] &&
                  (this._meshes[e].mesh.material.uniforms[t].value =
                    this._meshes[e].uniforms[t]);
          } else console.warn("oups, no mesh found, please check mesh i:", e);
        }
      }
      Object(r.register)("page-home", e);
    };
  },
  function (e, t) {
    e.exports =
      '    <div id="progress-bar" aria-hidden="true" class="u-fixed u-pointer-none c-frame__content">     <div class="u-absolute u-fit u-pos-tl"            style="backface-visibility:hidden; transform: translateZ(0); background-color:rgba({{Math.round(backgroundColor[0])}},{{Math.round(backgroundColor[1])}},{{Math.round(backgroundColor[2])}},1)">        <div class="u-fit" style="opacity: 0.4; background: url(\'{{cdnRoot}}/assets/images/bg-pattern.png\') 0 0"></div>    </div>    <div class="c-progress-bar-bg u-hide@sm"></div>    <div class="c-progress-bar u-hide@sm" style="transform: scaleX({{progress}}) translateZ(0)"></div> </div><div id="webgl-container" role="img" aria-label="{{currentSlideLabel}}"      class="u-pointer-none u-fixed u-pos-tl  u-viewport-fit js-scene"     $style="height:{{winHeight}}px"></div><div id="dom-container" class=" u-fixed u-viewport-fit u-pos-tl js-content"            $style="height:{{winHeight}}px">    <div current-index="{{currentSlideIndex}}"                 class="u-block u-force-3d u-absolute c-frame__content"                 selector-class="u-block u-force-3d u-fit-h">        <template is="light-core-template" repeat="{{i, slide in slides}}">                        <template is="light-core-template" if="{{slide.type === \'medium\'}}">                <div class="{{currentSlideIndex==$index?\'is-active is-home\':currentSlideIndex<$index?\'is-next\':\'is-prev\'}} u-align-center c-slide u-block u-align-center u-absolute u-fit-h u-fit-w u-pos-tl o-wrapper--valign u-align-center"  style="transform: translateZ(0); z-index: {{$index}}">                    <div class="u-inline-block u-valign-middle">                        <h2 class="u-vacuum  u-color--brand u-marg-b-md "                             style="padding: {{isMobile?\'30px 15px\':0}}">                            <app-multiline delay="{{$index==currentSlideIndex?0.3:0.0}}"                                             direction="{{direction}}" class="u-block u-relative"                                            word-class="c-title-intro">                                {{@content[0].intro_title}}                            </app-multiline>                        </h2>                    </div>                </div>            </template>            <template is="light-core-template" if="{{slide.type === \'large\'}}">                <div class="{{currentSlideIndex==$index?\'is-active is-home\':currentSlideIndex<$index?\'is-next\':\'is-prev\'}}                             u-align-center c-slide u-block u-align-center u-absolute u-fit-h u-fit-w u-pos-tl o-wrapper--valign u-align-center"                          style="transform: translateZ(0); z-index: {{$index}};padding:{{isMobile?\'30px 15px\':0}}">                    <div class="u-inline-block u-relative  u-valign-middle">                        <h2 class="c-title-giga u-color--brand u-marg-b-md c-anim--slide-y c-anim--{{direction==1?0:3}}"                            style="line-height: 0.7">                            {{@content[0].menu_title}}                        </h2>                                                <a href="/menu" class="c-link " >                            <span class="u-inline-block c-text--small u-color--brand c-anim--slide-y c-anim--2 u-marg-b-xs                                        | u-marg-b-sm@sm">Discover now</span>                            <span class="u-block u-relative u-align-center u-fit-w c-anim--slide-y c-anim--{{direction==1?3:1}}">                                <span class="u-relative  u-inline-block c-losange c-product__number o-wrapper--valign">                                    <app-trigger active="{{currentSlideIndex==$index}}" class="u-inline-block u-fit u-relative o-wrapper--valign">                                        <div   ratio="0.3" class="c-losange__shape js-trigger-parallax"></div>                                        <span  ratio="0.2" class="c-losange__plus u-inline-block u-valign-middle js-trigger-parallax">                                    </app-trigger>                                </span>                            </span>                        </a>                    </div>                </div>            </template>            <template is="light-core-template" if="{{slide.type === \'small\'}}">                <div  class="c-slide u-pos-tr u-w1of2 u-block u-force-3d u-h10of10 u-absolute o-wrapper--valign u-align-center                             | u-fit-w@sm u-h5of10@sm                             | {{currentSlideIndex==$index?\'is-active is-home\':currentSlideIndex<$index?\'is-next\':\'is-prev\'}}"                        style="transform: translateZ(0); z-index: {{$index}}; padding:{{isMobile?\'30px 15px\':0}}">                    <div class="c-link u-inline-block u-valign-middle u-w3of4 u-relative                                | u-fit-w@sm" >                        <div class="c-home__panel-background"></div>                        <scroll-object  set-active="false" class="u-block u-relative"                                         _position="{{[0, i * height - scroll]}}">                            <scroll-object  set-active="false" ratio="{{direction == 1 ? 0.25 : 0.15}}"                                             class="u-inline-block u-marg-b-sm u-relative">                                <h3 class="c-text--small u-color--brand c-anim--slide-y c-anim--{{direction==1?0:3}}">. 0{{$index+1}} .</h3>                            </scroll-object>                            <br/>                            <scroll-object class="u-relative u-block" set-active="false"                                           ratio="{{direction == 1 ? 0.2 : 0.2}}" >                                <h2 class="u-relative u-vacuum u-color--brand u-marg-b-md">                                    <app-multiline delay="{{$index==currentSlideIndex?0.3:0.0}}"                                                    direction="{{direction}}" class="u-block u-relative"                                                   word-class="c-title--3">                                        {{@content[0].slides[$index-1].title}}                                    </app-multiline>                                </h2>                            </scroll-object>                            <scroll-object  set-active="false" ratio="{{direction == 1 ? 0.15 : 0.25}}"                                             class="u-inline-block u-relative">                                <div class="c-scroll-btn__square c-anim--slide-y c-anim--{{direction==1?5:0}}"></div>                            </scroll-object>                        </scroll-object>                    </div>                </div>            </template>        </template>    </div>        </div>        <div class="c-scroll-btn">    <div class="c-scroll-btn__label c-text--small | u-hide@sm">Scroll to discover</div><br/>    <button class="c-btn">        <div class="c-scroll-btn__square"></div><br/>        <div class="c-scroll-btn__arrow"></div>    </button></button><div $style="height:{{winHeight}}px"     class="u-pointer-none u-fixed u-pos-tl u-align-center u-viewport-fit c-overlay is-active u-bg--light o-wrapper--valign            js-loader">     <div class="u-inline-block"      style="height: 3px; width: 100px; background: rgba(0,0,0,0.1) ">        <div class="u-fit u-bg--brand" $style="transform-origin: 0 0; transform: scaleX({{preload}}) translateZ(0)"></div>    </div></div>';
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"color":[239,243,240],"type":"medium","title":"London\'s<br/>First Take Away<br/>created with Michelin<br/>Star Chefs","imgAlt":"illustration of a cup, a coffee bean, a wooden spoon and leaves","children":[{"x":0,"y":0,"width":1440,"height":900,"billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":true,"z":-11,"position":[0,0],"deltaY":0,"friction":0.08},{"x":556,"y":-264,"width":301,"height":316,"texture":"home/intro/spoon.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":479,"y":189,"width":184,"height":247,"texture":"home/intro/3roundleafs.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.15},{"x":400,"y":-41,"width":76,"height":46,"texture":"home/intro/red-ball.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.05},{"x":98,"y":-243,"width":80,"height":72,"texture":"home/intro/tomato.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":15,"position":[0,0],"deltaY":0,"friction":0.03},{"x":0,"y":-170,"width":120,"height":57,"texture":"home/intro/balls-red-green.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.035},{"x":-231,"y":-233,"width":260,"height":179,"texture":"home/intro/5leafs-branche.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.02},{"x":-540,"y":-220,"width":279,"height":211,"texture":"home/intro/casserole.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":-10,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-438,"y":0,"width":118,"height":124,"texture":"home/intro/mini-leaf.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-423,"y":266,"width":295,"height":255,"texture":"home/intro/long-leaf.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-133,"y":257,"width":124,"height":55,"texture":"home/intro/mini-leaf-orange.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":203,"y":233,"width":178,"height":168,"texture":"home/intro/branch-ball.png","billboard":true,"receiveShadow":true,"maskTop":false,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08}]},{"type":"small","subtitle":"handcrafted","title":"menu created with Michelin star chefs","imgAlt":"illustration of a hand grabbing an apple","color":[245,242,241],"link":{"label":"Know more","closeLabel":"Close","href":""},"children":[{"billboard":true,"receiveShadow":false,"texture":"home/apple/glow.png","maskTop":true,"maskBottom":true,"maskHorizontal":true,"reverse":true,"x":-240,"y":-250,"z":-100,"width":895,"height":456,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":true,"receiveShadow":false,"texture":"home/apple/cloud-1.png","maskHorizontal":true,"maskTop":true,"maskBottom":true,"x":-265,"y":225,"z":-150,"width":540,"height":60,"position":[0,0],"deltaY":0,"friction":0.08},{"billboard":true,"receiveShadow":false,"texture":"home/apple/cloud-2.png","maskHorizontal":true,"maskTop":true,"maskBottom":true,"x":-185,"y":133,"z":-125,"width":540,"height":60,"position":[0,0],"deltaY":0,"friction":0.08},{"billboard":true,"receiveShadow":false,"texture":"home/apple/apple-background-leaf.png","maskTop":true,"maskBottom":true,"x":-215,"y":200,"z":-40,"width":248,"height":200,"position":[0,0],"deltaY":0,"friction":0.06},{"billboard":true,"texture":"home/apple/apple.png","normal":"home/apple/apple-normal.png","shadingColor":[0.9568627451,0.3490196078,0.137254902],"maskTop":true,"receiveShadow":true,"maskBottom":true,"x":-205,"y":25,"z":-40,"width":248,"height":240,"position":[0,0],"deltaY":0,"friction":0.06},{"billboard":false,"receiveShadow":true,"leaf":true,"texture":"home/apple/apple-leaf.png","shading":"home/apple/apple-leaf-shading.png","shadingColor":[0.231372549,0.4980392157,0.5137254902],"maskTop":true,"maskBottom":true,"x":-175,"y":100,"z":-30,"width":114,"height":85,"position":[0,0],"rotation":[-0.1,-0.1,0],"deltaY":0,"friction":0.06},{"billboard":true,"reverse":true,"receiveShadow":false,"texture":"home/apple/hand-flat.png","normal":"home/apple/hand-normal.png","shading":"home/apple/hand-shading.png","shadingColor":[0.9803921569,0.7843137255,0.6941176471],"maskTop":true,"x":-185,"y":-240,"z":0,"scale":0.8,"width":411,"height":493,"position":[0,0],"deltaY":0,"friction":0.05},{"billboard":true,"texture":"home/apple/leaf-1.png","maskTop":true,"maskBottom":true,"x":-126,"y":370,"z":10,"width":42,"height":34,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":true,"texture":"home/apple/leaf-2.png","maskTop":true,"maskBottom":true,"x":-330,"y":-196,"z":20,"width":215,"height":62,"position":[0,0],"deltaY":0,"friction":0.04},{"billboard":true,"texture":"home/apple/leaf-3.png","maskTop":true,"maskBottom":true,"x":-256,"y":303,"z":10,"width":51,"height":9,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":true,"texture":"home/apple/leaf-4.png","maskTop":true,"maskBottom":true,"x":-99,"y":237,"z":20,"width":42,"height":34,"position":[0,0],"deltaY":0,"friction":0.01},{"billboard":true,"texture":"home/apple/leaf-5.png","maskTop":true,"maskBottom":true,"x":-434,"y":147,"z":30,"width":50,"height":20,"position":[0,0],"deltaY":0,"friction":0.03},{"billboard":true,"texture":"home/apple/leaf-6.png","maskTop":true,"maskBottom":true,"x":-373,"y":67,"z":-80,"width":23,"height":10,"position":[0,0],"deltaY":0,"friction":0.03},{"billboard":true,"texture":"home/apple/leaf-7.png","maskTop":true,"maskBottom":true,"x":-307,"y":70,"z":-20,"width":47,"height":34,"position":[0,0],"deltaY":0,"friction":0.04},{"billboard":true,"texture":"home/apple/leaf-8.png","maskTop":true,"maskBottom":true,"x":-60,"y":80,"z":5,"width":42,"height":32,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":true,"texture":"home/apple/leaf-9.png","maskTop":true,"maskBottom":true,"x":-87,"y":-232,"z":30,"width":34,"height":39,"position":[0,0],"deltaY":0,"friction":0.01}]},{"type":"small","subtitle":"products","color":[248,245,243],"title":"Direct supply from the finest producers","imgAlt":"illustration of two red peppers, feta and floating leaves on a wooden table","link":{"label":"Know more","closeLabel":"Close","href":""},"children":[{"billboard":true,"receiveShadow":false,"texture":"home/pepper/glow.png","maskTop":true,"maskBottom":true,"maskHorizontal":true,"x":-187,"y":-90,"z":-200,"width":787,"height":652,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":false,"texture":"home/pepper/ground.png","maskTop":true,"maskBottom":true,"x":-180,"y":-200,"z":-75,"width":600,"height":500,"position":[0,0],"deltaY":0,"friction":0.02,"rotation":[-1.22173,0,0]},{"billboard":true,"texture":"home/pepper/pepper-2.png","maskTop":true,"maskBottom":true,"x":-380,"y":-100,"z":-70,"width":268,"height":216,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/pepper-1.png","maskTop":true,"maskBottom":true,"x":-205,"y":-30,"z":-55,"width":274,"height":327,"position":[0,0],"deltaY":0,"friction":0.03},{"billboard":true,"texture":"home/pepper/pepper-1-face.png","maskTop":true,"maskBottom":true,"x":-200,"y":-30,"z":-50,"width":274,"height":327,"position":[0,0],"deltaY":0,"friction":0.03},{"billboard":true,"texture":"home/pepper/pepper-slices.png","maskTop":true,"maskBottom":false,"x":-30,"y":-230,"z":40,"width":320,"height":112,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/feta.png","maskTop":true,"maskBottom":true,"x":-380,"y":-210,"z":-20,"width":292,"height":91,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/feta-slice-3.png","maskTop":true,"maskBottom":false,"x":-490,"y":-240,"z":15,"width":70,"height":49,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/feta-slice-4.png","maskTop":true,"maskBottom":false,"x":-550,"y":-250,"z":30,"width":61,"height":50,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/feta-slice-2.png","maskTop":true,"maskBottom":false,"x":-406,"y":-260,"z":30,"width":80,"height":56,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/feta-slice-1.png","maskTop":true,"maskBottom":false,"x":-496,"y":-275,"z":30,"width":74,"height":61,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/leaves.png","maskTop":true,"maskBottom":true,"x":-200,"y":-220,"z":50,"width":115,"height":76,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/leaf-1.png","maskTop":false,"maskBottom":true,"x":-394,"y":188,"z":50,"width":121,"height":82,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/leaf-2.png","maskTop":false,"maskBottom":true,"x":-31,"y":146,"z":20,"width":63,"height":59,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/leaf-3.png","maskTop":false,"maskBottom":true,"x":-286,"y":300,"z":-20,"width":38,"height":63,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/leaf-4.png","maskTop":false,"maskBottom":true,"x":-148,"y":260,"z":-70,"width":20,"height":24,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/pepper/dots.png","maskTop":false,"maskBottom":true,"x":-500,"y":125,"z":-90,"width":20,"height":30,"position":[0,0],"deltaY":0,"friction":0.035}]},{"type":"small","subtitle":"homemade","color":[247,246,243],"title":"menu created by top chefs","imgAlt":"illustration of tomatoes, leaves and a knife on a wooden table","link":{"label":"Know more","closeLabel":"Close","href":""},"children":[{"billboard":true,"receiveShadow":false,"texture":"home/tomatoes/glow.png","maskTop":true,"maskBottom":true,"maskHorizontal":true,"x":-200,"y":150,"z":-300,"width":787,"height":652,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":false,"texture":"home/tomatoes/ground.png","maskTop":true,"maskBottom":true,"x":-120,"y":-200,"z":-75,"width":700,"height":500,"position":[0,0],"deltaY":0,"friction":0.02,"rotation":[-1.22173,0,0]},{"billboard":true,"texture":"home/tomatoes/slide-3-leaves-background-left.png","maskTop":true,"maskBottom":true,"x":-280,"y":0,"z":-160,"scale":1.2,"width":69,"height":198,"position":[0,0],"deltaY":0,"friction":0.06},{"billboard":true,"texture":"home/tomatoes/slide-3-leaves-background-right.png","maskTop":true,"maskBottom":true,"x":-130,"y":-40,"z":-130,"scale":1.2,"width":97,"height":182,"position":[0,0],"deltaY":0,"friction":0.06},{"billboard":true,"texture":"home/tomatoes/slide-3-tomatoes-background-2.png","maskTop":true,"maskBottom":true,"x":-230,"y":-100,"z":-150,"width":140,"height":140,"position":[0,0],"deltaY":0,"scale":1.3,"friction":0.06},{"billboard":true,"texture":"home/tomatoes/tomatoes-background.png","normal":"home/tomatoes/tomatoes-background-normal.png","shadingColor":[0.9568627451,0.3490196078,0.137254902],"maskTop":true,"maskBottom":true,"x":-335,"y":-100,"z":-140,"width":166,"height":149,"position":[0,0],"deltaY":0,"scale":1.15,"friction":0.06},{"billboard":true,"texture":"home/tomatoes/tomatoes-background-leaf.png","normal":"home/tomatoes/tomatoes-background-leaf-normal.png","shading":"home/tomatoes/tomatoes-background-leaf-shading.png","shadow":"home/tomatoes/tomatoes-background-leaf-shadow.png","maskTop":true,"maskBottom":true,"x":-380,"y":-95,"z":-140,"width":79,"height":79,"position":[0,0],"deltaY":0,"scale":1.15,"friction":0.06},{"billboard":true,"texture":"home/tomatoes/knife-flat.png","normal":"home/tomatoes/knife-normal.png","shadingColor":[0.8901960784,0.8509803922,0.8235294118],"maskBottom":true,"x":-200,"y":110,"z":-110,"width":99,"height":592,"position":[0,0],"deltaY":0,"scale":1.3,"friction":0.05},{"billboard":true,"texture":"home/tomatoes/slide-3-leaves-middleground.png","maskTop":true,"maskBottom":true,"x":0,"y":-70,"z":-70,"width":119,"height":187,"position":[0,0],"deltaY":0,"friction":0.035},{"billboard":true,"texture":"home/tomatoes/slide-3-tomatoes-middleground.png","maskTop":true,"maskBottom":true,"x":-100,"y":-110,"z":-50,"width":187,"height":191,"position":[0,0],"deltaY":0,"friction":0.03},{"billboard":true,"texture":"home/tomatoes/slide-3-tomatoes-foreground.png","maskTop":true,"maskBottom":true,"x":0,"y":-198,"z":45,"width":320,"height":90,"position":[0,0],"deltaY":0,"friction":0.02},{"billboard":true,"texture":"home/tomatoes/slide-3-leaves-foreground.png","maskTop":true,"maskBottom":true,"x":-205,"y":-225,"z":80,"width":110,"height":65,"position":[0,0],"deltaY":0,"friction":0.04}]},{"color":[239,243,240],"type":"large","subtitle":"Have a look to our","title":"menu","imgAlt":"illustration of an orange slice, garlic, onion, chives, parsley and berries","link":{"label":"Know more","closeLabel":"Close","href":""},"children":[{"x":0,"y":0,"width":1440,"height":900,"billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":true,"z":-11,"position":[0,0],"deltaY":0,"friction":0.08},{"x":255,"y":-207,"width":261,"height":240,"texture":"home/menu/5leaf-branch.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-137,"y":-210,"width":178,"height":146,"texture":"home/menu/branch-olive.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":507,"y":263,"width":147,"height":160,"texture":"home/menu/houx.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-412,"y":-169,"width":113,"height":256,"texture":"home/menu/left-mini-leaf.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":487,"y":0,"width":134,"height":111,"texture":"home/menu/medium-leaf.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":166,"y":254,"width":319,"height":99,"texture":"home/menu/mini-leaf.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":486,"y":-209,"width":128,"height":199,"texture":"home/menu/oignon.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-372,"y":57,"width":78,"height":89,"texture":"home/menu/olive.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-469,"y":211,"width":208,"height":159,"texture":"home/menu/orange.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-197,"y":258,"width":153,"height":108,"texture":"home/menu/persil.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-411,"y":-298,"width":526,"height":338,"texture":"home/menu/twig.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08},{"x":-361,"y":-133,"width":106,"height":97,"texture":"home/menu/ail.png","billboard":true,"receiveShadow":true,"maskTop":true,"maskBottom":false,"z":0,"position":[0,0],"deltaY":0,"friction":0.08}]}]'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"frames":{"about/branch-1.png":{"frame":{"x":830,"y":203,"w":114,"h":98},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":114,"h":98},"sourceSize":{"w":114,"h":98},"pivot":{"x":0.5,"y":0.5}},"about/branch-2.png":{"frame":{"x":161,"y":203,"w":75,"h":92},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":75,"h":92},"sourceSize":{"w":75,"h":92},"pivot":{"x":0.5,"y":0.5}},"about/branch-3.png":{"frame":{"x":270,"y":301,"w":102,"h":109},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":102,"h":109},"sourceSize":{"w":102,"h":109},"pivot":{"x":0.5,"y":0.5}},"about/leaf-1.png":{"frame":{"x":176,"y":0,"w":28,"h":24},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":28,"h":24},"sourceSize":{"w":28,"h":24},"pivot":{"x":0.5,"y":0.5}},"about/leaf-2.png":{"frame":{"x":244,"y":129,"w":61,"h":66},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":61,"h":66},"sourceSize":{"w":61,"h":66},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-background-leaf.png":{"frame":{"x":390,"y":203,"w":119,"h":97},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":119,"h":97},"sourceSize":{"w":119,"h":97},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf-flat.png":{"frame":{"x":605,"y":31,"w":53,"h":39},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":53,"h":39},"sourceSize":{"w":53,"h":39},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf-normal.png":{"frame":{"x":696,"y":31,"w":53,"h":39},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":53,"h":39},"sourceSize":{"w":53,"h":39},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf.png":{"frame":{"x":207,"y":73,"w":60,"h":45},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":60,"h":45},"sourceSize":{"w":60,"h":45},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-normal.png":{"frame":{"x":372,"y":301,"w":115,"h":112},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":115,"h":112},"sourceSize":{"w":115,"h":112},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple.png":{"frame":{"x":180,"y":417,"w":126,"h":122},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":126,"h":122},"sourceSize":{"w":126,"h":122},"pivot":{"x":0.5,"y":0.5}},"home/apple/background.png":{"frame":{"x":447,"y":31,"w":158,"h":38},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":158,"h":38},"sourceSize":{"w":158,"h":38},"pivot":{"x":0.5,"y":0.5}},"home/apple/cloud-1.png":{"frame":{"x":562,"y":0,"w":276,"h":31},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":276,"h":31},"sourceSize":{"w":276,"h":31},"pivot":{"x":0.5,"y":0.5}},"home/apple/cloud-2.png":{"frame":{"x":0,"y":31,"w":276,"h":31},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":276,"h":31},"sourceSize":{"w":276,"h":31},"pivot":{"x":0.5,"y":0.5}},"home/apple/glow.png":{"frame":{"x":487,"y":301,"w":224,"h":114},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":224,"h":114},"sourceSize":{"w":224,"h":114},"pivot":{"x":0.5,"y":0.5}},"home/apple/hand-flat.png":{"frame":{"x":450,"y":580,"w":193,"h":232},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":193,"h":232},"sourceSize":{"w":193,"h":232},"pivot":{"x":0.5,"y":0.5}},"home/apple/hand-normal.png":{"frame":{"x":643,"y":580,"w":193,"h":232},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":193,"h":232},"sourceSize":{"w":193,"h":232},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-1.png":{"frame":{"x":140,"y":0,"w":20,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":16},"sourceSize":{"w":20,"h":16},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-2.png":{"frame":{"x":787,"y":31,"w":137,"h":40},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":137,"h":40},"sourceSize":{"w":137,"h":40},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-3.png":{"frame":{"x":0,"y":0,"w":24,"h":4},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":24,"h":4},"sourceSize":{"w":24,"h":4},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-4.png":{"frame":{"x":35,"y":0,"w":23,"h":9},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":23,"h":9},"sourceSize":{"w":23,"h":9},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-5.png":{"frame":{"x":66,"y":0,"w":23,"h":9},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":23,"h":9},"sourceSize":{"w":23,"h":9},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-6.png":{"frame":{"x":24,"y":0,"w":11,"h":5},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":11,"h":5},"sourceSize":{"w":11,"h":5},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-7.png":{"frame":{"x":120,"y":0,"w":20,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":16},"sourceSize":{"w":20,"h":16},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-8.png":{"frame":{"x":100,"y":0,"w":20,"h":15},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":20,"h":15},"sourceSize":{"w":20,"h":15},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-9.png":{"frame":{"x":160,"y":0,"w":16,"h":19},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":19},"sourceSize":{"w":16,"h":19},"pivot":{"x":0.5,"y":0.5}},"home/intro/3roundleafs.png":{"frame":{"x":785,"y":301,"w":83,"h":116},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":83,"h":116},"sourceSize":{"w":83,"h":116},"pivot":{"x":0.5,"y":0.5}},"home/intro/5leafs-branche.png":{"frame":{"x":509,"y":203,"w":144,"h":97},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":144,"h":97},"sourceSize":{"w":144,"h":97},"pivot":{"x":0.5,"y":0.5}},"home/intro/balls-red-green.png":{"frame":{"x":283,"y":0,"w":54,"h":25},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":54,"h":25},"sourceSize":{"w":54,"h":25},"pivot":{"x":0.5,"y":0.5}},"home/intro/branch-ball.png":{"frame":{"x":379,"y":129,"w":74,"h":68},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":74,"h":68},"sourceSize":{"w":74,"h":68},"pivot":{"x":0.5,"y":0.5}},"home/intro/casserole.png":{"frame":{"x":128,"y":301,"w":142,"h":106},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":142,"h":106},"sourceSize":{"w":142,"h":106},"pivot":{"x":0.5,"y":0.5}},"home/intro/long-leaf.png":{"frame":{"x":48,"y":203,"w":113,"h":90},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":113,"h":90},"sourceSize":{"w":113,"h":90},"pivot":{"x":0.5,"y":0.5}},"home/intro/mini-leaf-orange.png":{"frame":{"x":425,"y":0,"w":70,"h":29},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":29},"sourceSize":{"w":70,"h":29},"pivot":{"x":0.5,"y":0.5}},"home/intro/mini-leaf.png":{"frame":{"x":495,"y":0,"w":30,"h":31},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":30,"h":31},"sourceSize":{"w":30,"h":31},"pivot":{"x":0.5,"y":0.5}},"home/intro/red-ball.png":{"frame":{"x":204,"y":0,"w":43,"h":25},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":43,"h":25},"sourceSize":{"w":43,"h":25},"pivot":{"x":0.5,"y":0.5}},"home/intro/spoon.png":{"frame":{"x":607,"y":417,"w":150,"h":158},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":150,"h":158},"sourceSize":{"w":150,"h":158},"pivot":{"x":0.5,"y":0.5}},"home/intro/tomato.png":{"frame":{"x":349,"y":31,"w":43,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":43,"h":35},"sourceSize":{"w":43,"h":35},"pivot":{"x":0.5,"y":0.5}},"home/menu/5leaf-branch.png":{"frame":{"x":686,"y":203,"w":144,"h":97},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":144,"h":97},"sourceSize":{"w":144,"h":97},"pivot":{"x":0.5,"y":0.5}},"home/menu/ail.png":{"frame":{"x":0,"y":73,"w":50,"h":45},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":45},"sourceSize":{"w":50,"h":45},"pivot":{"x":0.5,"y":0.5}},"home/menu/branch-olive.png":{"frame":{"x":453,"y":129,"w":83,"h":68},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":83,"h":68},"sourceSize":{"w":83,"h":68},"pivot":{"x":0.5,"y":0.5}},"home/menu/houx.png":{"frame":{"x":183,"y":129,"w":61,"h":66},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":61,"h":66},"sourceSize":{"w":61,"h":66},"pivot":{"x":0.5,"y":0.5}},"home/menu/left-mini-leaf.png":{"frame":{"x":0,"y":129,"w":116,"h":65},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":116,"h":65},"sourceSize":{"w":116,"h":65},"pivot":{"x":0.5,"y":0.5}},"home/menu/medium-leaf.png":{"frame":{"x":707,"y":73,"w":63,"h":52},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":63,"h":52},"sourceSize":{"w":63,"h":52},"pivot":{"x":0.5,"y":0.5}},"home/menu/mini-leaf.png":{"frame":{"x":414,"y":73,"w":149,"h":46},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":149,"h":46},"sourceSize":{"w":149,"h":46},"pivot":{"x":0.5,"y":0.5}},"home/menu/oignon.png":{"frame":{"x":236,"y":203,"w":60,"h":93},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":60,"h":93},"sourceSize":{"w":60,"h":93},"pivot":{"x":0.5,"y":0.5}},"home/menu/olive.png":{"frame":{"x":967,"y":31,"w":37,"h":42},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":37,"h":42},"sourceSize":{"w":37,"h":42},"pivot":{"x":0.5,"y":0.5}},"home/menu/orange.png":{"frame":{"x":865,"y":129,"w":97,"h":74},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":97,"h":74},"sourceSize":{"w":97,"h":74},"pivot":{"x":0.5,"y":0.5}},"home/menu/persil.png":{"frame":{"x":636,"y":73,"w":71,"h":51},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":71,"h":51},"sourceSize":{"w":71,"h":51},"pivot":{"x":0.5,"y":0.5}},"home/menu/twig.png":{"frame":{"x":204,"y":580,"w":246,"h":176},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":246,"h":176},"sourceSize":{"w":246,"h":176},"pivot":{"x":0.5,"y":0.5}},"home/pepper/dots.png":{"frame":{"x":89,"y":0,"w":11,"h":13},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":11,"h":13},"sourceSize":{"w":11,"h":13},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-1.png":{"frame":{"x":525,"y":0,"w":37,"h":31},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":37,"h":31},"sourceSize":{"w":37,"h":31},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-2.png":{"frame":{"x":384,"y":0,"w":41,"h":28},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":41,"h":28},"sourceSize":{"w":41,"h":28},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-3.png":{"frame":{"x":247,"y":0,"w":36,"h":25},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":36,"h":25},"sourceSize":{"w":36,"h":25},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-4.png":{"frame":{"x":337,"y":0,"w":31,"h":26},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":31,"h":26},"sourceSize":{"w":31,"h":26},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta.png":{"frame":{"x":267,"y":73,"w":147,"h":46},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":147,"h":46},"sourceSize":{"w":147,"h":46},"pivot":{"x":0.5,"y":0.5}},"home/pepper/glow.png":{"frame":{"x":757,"y":417,"w":197,"h":163},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":197,"h":163},"sourceSize":{"w":197,"h":163},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-1.png":{"frame":{"x":563,"y":73,"w":56,"h":46},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":56,"h":46},"sourceSize":{"w":56,"h":46},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-2.png":{"frame":{"x":116,"y":129,"w":67,"h":65},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":67,"h":65},"sourceSize":{"w":67,"h":65},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-3.png":{"frame":{"x":330,"y":31,"w":19,"h":32},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":19,"h":32},"sourceSize":{"w":19,"h":32},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-4.png":{"frame":{"x":58,"y":0,"w":8,"h":9},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":8,"h":9},"sourceSize":{"w":8,"h":9},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaves.png":{"frame":{"x":392,"y":31,"w":55,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":55,"h":36},"sourceSize":{"w":55,"h":36},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-1-face.png":{"frame":{"x":475,"y":417,"w":132,"h":157},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":132,"h":157},"sourceSize":{"w":132,"h":157},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-1.png":{"frame":{"x":306,"y":417,"w":111,"h":133},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":111,"h":133},"sourceSize":{"w":111,"h":133},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-2.png":{"frame":{"x":0,"y":301,"w":128,"h":104},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":104},"sourceSize":{"w":128,"h":104},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-slices.png":{"frame":{"x":830,"y":73,"w":159,"h":56},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":159,"h":56},"sourceSize":{"w":159,"h":56},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/glow.png":{"frame":{"x":0,"y":580,"w":204,"h":169},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":204,"h":169},"sourceSize":{"w":204,"h":169},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/knife-flat.png":{"frame":{"x":836,"y":580,"w":49,"h":291},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":49,"h":291},"sourceSize":{"w":49,"h":291},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/knife-normal.png":{"frame":{"x":885,"y":580,"w":49,"h":291},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":49,"h":291},"sourceSize":{"w":49,"h":291},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-1.png":{"frame":{"x":619,"y":73,"w":17,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":17,"h":49},"sourceSize":{"w":17,"h":49},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-2.png":{"frame":{"x":368,"y":0,"w":16,"h":26},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":26},"sourceSize":{"w":16,"h":26},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-left.png":{"frame":{"x":653,"y":203,"w":33,"h":97},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":33,"h":97},"sourceSize":{"w":33,"h":97},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-right.png":{"frame":{"x":0,"y":203,"w":48,"h":89},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":89},"sourceSize":{"w":48,"h":89},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-foreground.png":{"frame":{"x":276,"y":31,"w":54,"h":32},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":54,"h":32},"sourceSize":{"w":54,"h":32},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-middleground.png":{"frame":{"x":417,"y":417,"w":58,"h":140},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":58,"h":140},"sourceSize":{"w":58,"h":140},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-background-1.png":{"frame":{"x":924,"y":31,"w":43,"h":40},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":43,"h":40},"sourceSize":{"w":43,"h":40},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-background-2.png":{"frame":{"x":305,"y":129,"w":74,"h":66},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":74,"h":66},"sourceSize":{"w":74,"h":66},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-foreground.png":{"frame":{"x":50,"y":73,"w":157,"h":45},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":157,"h":45},"sourceSize":{"w":157,"h":45},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-middleground.png":{"frame":{"x":296,"y":203,"w":94,"h":93},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":94,"h":93},"sourceSize":{"w":94,"h":93},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-leaf-normal.png":{"frame":{"x":749,"y":31,"w":38,"h":39},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":38,"h":39},"sourceSize":{"w":38,"h":39},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-leaf.png":{"frame":{"x":658,"y":31,"w":38,"h":39},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":38,"h":39},"sourceSize":{"w":38,"h":39},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-normal.png":{"frame":{"x":783,"y":129,"w":82,"h":72},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":82,"h":72},"sourceSize":{"w":82,"h":72},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background.png":{"frame":{"x":701,"y":129,"w":82,"h":72},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":82,"h":72},"sourceSize":{"w":82,"h":72},"pivot":{"x":0.5,"y":0.5}},"order/ail.png":{"frame":{"x":770,"y":73,"w":60,"h":55},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":60,"h":55},"sourceSize":{"w":60,"h":55},"pivot":{"x":0.5,"y":0.5}},"order/leaves.png":{"frame":{"x":0,"y":417,"w":180,"h":119},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":180,"h":119},"sourceSize":{"w":180,"h":119},"pivot":{"x":0.5,"y":0.5}},"order/oignon.png":{"frame":{"x":711,"y":301,"w":74,"h":115},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":74,"h":115},"sourceSize":{"w":74,"h":115},"pivot":{"x":0.5,"y":0.5}},"order/olive.png":{"frame":{"x":536,"y":129,"w":62,"h":71},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":62,"h":71},"sourceSize":{"w":62,"h":71},"pivot":{"x":0.5,"y":0.5}},"order/orange.png":{"frame":{"x":598,"y":129,"w":103,"h":71},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":103,"h":71},"sourceSize":{"w":103,"h":71},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-0-720.png","format":"RGBA8888","size":{"w":1004,"h":871},"scale":"0.25","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-0-720.jpg","_alpha":"/assets/images/textures/atlas-0-720-alpha.jpg"}},{"frames":{"home/pepper/ground.png":{"frame":{"x":0,"y":0,"w":374,"h":374},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":374,"h":374},"sourceSize":{"w":374,"h":374},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/ground.png":{"frame":{"x":374,"y":0,"w":374,"h":374},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":374,"h":374},"sourceSize":{"w":374,"h":374},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-1-720.png","format":"RGBA8888","size":{"w":748,"h":374},"scale":"0.25","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-1-720.jpg","_alpha":"/assets/images/textures/atlas-1-720-alpha.jpg"}}]'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"frames":{"about/branch-1.png":{"frame":{"x":0,"y":588,"w":228,"h":197},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":228,"h":197},"sourceSize":{"w":228,"h":197},"pivot":{"x":0.5,"y":0.5}},"about/branch-2.png":{"frame":{"x":678,"y":394,"w":150,"h":183},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":150,"h":183},"sourceSize":{"w":150,"h":183},"pivot":{"x":0.5,"y":0.5}},"about/branch-3.png":{"frame":{"x":768,"y":588,"w":204,"h":218},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":204,"h":218},"sourceSize":{"w":204,"h":218},"pivot":{"x":0.5,"y":0.5}},"about/leaf-1.png":{"frame":{"x":349,"y":0,"w":56,"h":49},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":56,"h":49},"sourceSize":{"w":56,"h":49},"pivot":{"x":0.5,"y":0.5}},"about/leaf-2.png":{"frame":{"x":685,"y":250,"w":121,"h":133},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":121,"h":133},"sourceSize":{"w":121,"h":133},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-background-leaf.png":{"frame":{"x":1712,"y":394,"w":238,"h":194},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":238,"h":194},"sourceSize":{"w":238,"h":194},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf-flat.png":{"frame":{"x":1342,"y":61,"w":106,"h":78},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":106,"h":78},"sourceSize":{"w":106,"h":78},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf-normal.png":{"frame":{"x":1602,"y":61,"w":106,"h":78},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":106,"h":78},"sourceSize":{"w":106,"h":78},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf.png":{"frame":{"x":347,"y":140,"w":121,"h":89},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":121,"h":89},"sourceSize":{"w":121,"h":89},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-normal.png":{"frame":{"x":972,"y":588,"w":230,"h":224},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":230,"h":224},"sourceSize":{"w":230,"h":224},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple.png":{"frame":{"x":360,"y":820,"w":251,"h":244},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":251,"h":244},"sourceSize":{"w":251,"h":244},"pivot":{"x":0.5,"y":0.5}},"home/apple/background.png":{"frame":{"x":1026,"y":61,"w":316,"h":76},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":316,"h":76},"sourceSize":{"w":316,"h":76},"pivot":{"x":0.5,"y":0.5}},"home/apple/cloud-1.png":{"frame":{"x":988,"y":0,"w":552,"h":61},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":552,"h":61},"sourceSize":{"w":552,"h":61},"pivot":{"x":0.5,"y":0.5}},"home/apple/cloud-2.png":{"frame":{"x":0,"y":61,"w":552,"h":61},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":552,"h":61},"sourceSize":{"w":552,"h":61},"pivot":{"x":0.5,"y":0.5}},"home/apple/glow.png":{"frame":{"x":1202,"y":588,"w":448,"h":228},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":448,"h":228},"sourceSize":{"w":448,"h":228},"pivot":{"x":0.5,"y":0.5}},"home/apple/hand-flat.png":{"frame":{"x":898,"y":1146,"w":386,"h":465},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":386,"h":465},"sourceSize":{"w":386,"h":465},"pivot":{"x":0.5,"y":0.5}},"home/apple/hand-normal.png":{"frame":{"x":1284,"y":1146,"w":386,"h":465},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":386,"h":465},"sourceSize":{"w":386,"h":465},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-1.png":{"frame":{"x":239,"y":0,"w":39,"h":32},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":39,"h":32},"sourceSize":{"w":39,"h":32},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-2.png":{"frame":{"x":0,"y":140,"w":274,"h":80},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":274,"h":80},"sourceSize":{"w":274,"h":80},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-3.png":{"frame":{"x":0,"y":0,"w":48,"h":9},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":9},"sourceSize":{"w":48,"h":9},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-4.png":{"frame":{"x":69,"y":0,"w":47,"h":19},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":19},"sourceSize":{"w":47,"h":19},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-5.png":{"frame":{"x":116,"y":0,"w":47,"h":19},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":47,"h":19},"sourceSize":{"w":47,"h":19},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-6.png":{"frame":{"x":48,"y":0,"w":21,"h":10},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":21,"h":10},"sourceSize":{"w":21,"h":10},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-7.png":{"frame":{"x":278,"y":0,"w":39,"h":32},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":39,"h":32},"sourceSize":{"w":39,"h":32},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-8.png":{"frame":{"x":200,"y":0,"w":39,"h":30},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":39,"h":30},"sourceSize":{"w":39,"h":30},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-9.png":{"frame":{"x":317,"y":0,"w":32,"h":38},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":32,"h":38},"sourceSize":{"w":32,"h":38},"pivot":{"x":0.5,"y":0.5}},"home/intro/3roundleafs.png":{"frame":{"x":1799,"y":588,"w":165,"h":232},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":165,"h":232},"sourceSize":{"w":165,"h":232},"pivot":{"x":0.5,"y":0.5}},"home/intro/5leafs-branche.png":{"frame":{"x":1136,"y":394,"w":288,"h":193},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":288,"h":193},"sourceSize":{"w":288,"h":193},"pivot":{"x":0.5,"y":0.5}},"home/intro/balls-red-green.png":{"frame":{"x":562,"y":0,"w":108,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":108,"h":50},"sourceSize":{"w":108,"h":50},"pivot":{"x":0.5,"y":0.5}},"home/intro/branch-ball.png":{"frame":{"x":1243,"y":250,"w":148,"h":136},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":148,"h":136},"sourceSize":{"w":148,"h":136},"pivot":{"x":0.5,"y":0.5}},"home/intro/casserole.png":{"frame":{"x":485,"y":588,"w":283,"h":211},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":283,"h":211},"sourceSize":{"w":283,"h":211},"pivot":{"x":0.5,"y":0.5}},"home/intro/long-leaf.png":{"frame":{"x":452,"y":394,"w":226,"h":179},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":226,"h":179},"sourceSize":{"w":226,"h":179},"pivot":{"x":0.5,"y":0.5}},"home/intro/mini-leaf-orange.png":{"frame":{"x":847,"y":0,"w":141,"h":59},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":141,"h":59},"sourceSize":{"w":141,"h":59},"pivot":{"x":0.5,"y":0.5}},"home/intro/mini-leaf.png":{"frame":{"x":552,"y":61,"w":59,"h":62},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":59,"h":62},"sourceSize":{"w":59,"h":62},"pivot":{"x":0.5,"y":0.5}},"home/intro/red-ball.png":{"frame":{"x":476,"y":0,"w":86,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":86,"h":50},"sourceSize":{"w":86,"h":50},"pivot":{"x":0.5,"y":0.5}},"home/intro/spoon.png":{"frame":{"x":949,"y":820,"w":300,"h":315},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":300,"h":315},"sourceSize":{"w":300,"h":315},"pivot":{"x":0.5,"y":0.5}},"home/intro/tomato.png":{"frame":{"x":831,"y":61,"w":86,"h":71},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":86,"h":71},"sourceSize":{"w":86,"h":71},"pivot":{"x":0.5,"y":0.5}},"home/menu/5leaf-branch.png":{"frame":{"x":1424,"y":394,"w":288,"h":193},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":288,"h":193},"sourceSize":{"w":288,"h":193},"pivot":{"x":0.5,"y":0.5}},"home/menu/ail.png":{"frame":{"x":783,"y":140,"w":99,"h":91},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":99,"h":91},"sourceSize":{"w":99,"h":91},"pivot":{"x":0.5,"y":0.5}},"home/menu/branch-olive.png":{"frame":{"x":1076,"y":250,"w":167,"h":136},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":167,"h":136},"sourceSize":{"w":167,"h":136},"pivot":{"x":0.5,"y":0.5}},"home/menu/houx.png":{"frame":{"x":806,"y":250,"w":121,"h":133},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":121,"h":133},"sourceSize":{"w":121,"h":133},"pivot":{"x":0.5,"y":0.5}},"home/menu/left-mini-leaf.png":{"frame":{"x":319,"y":250,"w":232,"h":131},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":232,"h":131},"sourceSize":{"w":232,"h":131},"pivot":{"x":0.5,"y":0.5}},"home/menu/medium-leaf.png":{"frame":{"x":1765,"y":140,"w":126,"h":104},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":126,"h":104},"sourceSize":{"w":126,"h":104},"pivot":{"x":0.5,"y":0.5}},"home/menu/mini-leaf.png":{"frame":{"x":1289,"y":140,"w":298,"h":92},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":298,"h":92},"sourceSize":{"w":298,"h":92},"pivot":{"x":0.5,"y":0.5}},"home/menu/oignon.png":{"frame":{"x":828,"y":394,"w":120,"h":186},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":120,"h":186},"sourceSize":{"w":120,"h":186},"pivot":{"x":0.5,"y":0.5}},"home/menu/olive.png":{"frame":{"x":274,"y":140,"w":73,"h":84},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":73,"h":84},"sourceSize":{"w":73,"h":84},"pivot":{"x":0.5,"y":0.5}},"home/menu/orange.png":{"frame":{"x":163,"y":394,"w":194,"h":149},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":194,"h":149},"sourceSize":{"w":194,"h":149},"pivot":{"x":0.5,"y":0.5}},"home/menu/persil.png":{"frame":{"x":1622,"y":140,"w":143,"h":101},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":143,"h":101},"sourceSize":{"w":143,"h":101},"pivot":{"x":0.5,"y":0.5}},"home/menu/twig.png":{"frame":{"x":407,"y":1146,"w":491,"h":351},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":491,"h":351},"sourceSize":{"w":491,"h":351},"pivot":{"x":0.5,"y":0.5}},"home/pepper/dots.png":{"frame":{"x":179,"y":0,"w":21,"h":26},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":21,"h":26},"sourceSize":{"w":21,"h":26},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-1.png":{"frame":{"x":611,"y":61,"w":74,"h":62},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":74,"h":62},"sourceSize":{"w":74,"h":62},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-2.png":{"frame":{"x":765,"y":0,"w":82,"h":56},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":82,"h":56},"sourceSize":{"w":82,"h":56},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-3.png":{"frame":{"x":405,"y":0,"w":71,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":71,"h":50},"sourceSize":{"w":71,"h":50},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-4.png":{"frame":{"x":670,"y":0,"w":63,"h":52},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":63,"h":52},"sourceSize":{"w":63,"h":52},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta.png":{"frame":{"x":882,"y":140,"w":294,"h":92},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":294,"h":92},"sourceSize":{"w":294,"h":92},"pivot":{"x":0.5,"y":0.5}},"home/pepper/glow.png":{"frame":{"x":1513,"y":820,"w":394,"h":326},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":394,"h":326},"sourceSize":{"w":394,"h":326},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-1.png":{"frame":{"x":1176,"y":140,"w":113,"h":92},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":113,"h":92},"sourceSize":{"w":113,"h":92},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-2.png":{"frame":{"x":551,"y":250,"w":134,"h":131},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":134,"h":131},"sourceSize":{"w":134,"h":131},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-3.png":{"frame":{"x":793,"y":61,"w":38,"h":64},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":38,"h":64},"sourceSize":{"w":38,"h":64},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-4.png":{"frame":{"x":163,"y":0,"w":16,"h":19},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":16,"h":19},"sourceSize":{"w":16,"h":19},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaves.png":{"frame":{"x":917,"y":61,"w":109,"h":72},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":109,"h":72},"sourceSize":{"w":109,"h":72},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-1-face.png":{"frame":{"x":1249,"y":820,"w":264,"h":315},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":264,"h":315},"sourceSize":{"w":264,"h":315},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-1.png":{"frame":{"x":611,"y":820,"w":222,"h":265},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":222,"h":265},"sourceSize":{"w":222,"h":265},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-2.png":{"frame":{"x":228,"y":588,"w":257,"h":208},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":257,"h":208},"sourceSize":{"w":257,"h":208},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-slices.png":{"frame":{"x":0,"y":250,"w":319,"h":112},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":319,"h":112},"sourceSize":{"w":319,"h":112},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/glow.png":{"frame":{"x":0,"y":1146,"w":407,"h":337},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":407,"h":337},"sourceSize":{"w":407,"h":337},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/knife-flat.png":{"frame":{"x":1670,"y":1146,"w":98,"h":581},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":98,"h":581},"sourceSize":{"w":98,"h":581},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/knife-normal.png":{"frame":{"x":1768,"y":1146,"w":98,"h":581},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":98,"h":581},"sourceSize":{"w":98,"h":581},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-1.png":{"frame":{"x":1587,"y":140,"w":35,"h":99},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":99},"sourceSize":{"w":35,"h":99},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-2.png":{"frame":{"x":733,"y":0,"w":32,"h":53},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":32,"h":53},"sourceSize":{"w":32,"h":53},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-left.png":{"frame":{"x":1950,"y":394,"w":67,"h":194},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":67,"h":194},"sourceSize":{"w":67,"h":194},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-right.png":{"frame":{"x":357,"y":394,"w":95,"h":178},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":95,"h":178},"sourceSize":{"w":95,"h":178},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-foreground.png":{"frame":{"x":685,"y":61,"w":108,"h":64},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":108,"h":64},"sourceSize":{"w":108,"h":64},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-middleground.png":{"frame":{"x":833,"y":820,"w":116,"h":280},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":116,"h":280},"sourceSize":{"w":116,"h":280},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-background-1.png":{"frame":{"x":1708,"y":61,"w":85,"h":79},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":85,"h":79},"sourceSize":{"w":85,"h":79},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-background-2.png":{"frame":{"x":927,"y":250,"w":149,"h":133},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":149,"h":133},"sourceSize":{"w":149,"h":133},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-foreground.png":{"frame":{"x":468,"y":140,"w":315,"h":89},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":315,"h":89},"sourceSize":{"w":315,"h":89},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-middleground.png":{"frame":{"x":948,"y":394,"w":188,"h":186},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":188,"h":186},"sourceSize":{"w":188,"h":186},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-leaf-normal.png":{"frame":{"x":1525,"y":61,"w":77,"h":78},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":77,"h":78},"sourceSize":{"w":77,"h":78},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-leaf.png":{"frame":{"x":1448,"y":61,"w":77,"h":78},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":77,"h":78},"sourceSize":{"w":77,"h":78},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-normal.png":{"frame":{"x":0,"y":394,"w":163,"h":144},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":163,"h":144},"sourceSize":{"w":163,"h":144},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background.png":{"frame":{"x":1722,"y":250,"w":163,"h":144},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":163,"h":144},"sourceSize":{"w":163,"h":144},"pivot":{"x":0.5,"y":0.5}},"order/ail.png":{"frame":{"x":1891,"y":140,"w":120,"h":110},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":120,"h":110},"sourceSize":{"w":120,"h":110},"pivot":{"x":0.5,"y":0.5}},"order/leaves.png":{"frame":{"x":0,"y":820,"w":360,"h":237},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":360,"h":237},"sourceSize":{"w":360,"h":237},"pivot":{"x":0.5,"y":0.5}},"order/oignon.png":{"frame":{"x":1650,"y":588,"w":149,"h":230},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":149,"h":230},"sourceSize":{"w":149,"h":230},"pivot":{"x":0.5,"y":0.5}},"order/olive.png":{"frame":{"x":1391,"y":250,"w":125,"h":143},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":125,"h":143},"sourceSize":{"w":125,"h":143},"pivot":{"x":0.5,"y":0.5}},"order/orange.png":{"frame":{"x":1516,"y":250,"w":206,"h":143},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":206,"h":143},"sourceSize":{"w":206,"h":143},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-0-1440.png","format":"RGBA8888","size":{"w":2017,"h":1727},"scale":"0.5","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-0-1440.jpg","_alpha":"/assets/images/textures/atlas-0-1440-alpha.jpg"}},{"frames":{"home/pepper/ground.png":{"frame":{"x":0,"y":0,"w":747,"h":748},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":747,"h":748},"sourceSize":{"w":747,"h":748},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/ground.png":{"frame":{"x":747,"y":0,"w":747,"h":748},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":747,"h":748},"sourceSize":{"w":747,"h":748},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-1-1440.png","format":"RGBA8888","size":{"w":1494,"h":748},"scale":"0.5","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-1-1440.jpg","_alpha":"/assets/images/textures/atlas-1-1440-alpha.jpg"}}]'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '[{"frames":{"about/branch-1.png":{"frame":{"x":476,"y":2233,"w":456,"h":393},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":456,"h":393},"sourceSize":{"w":456,"h":393},"pivot":{"x":0.5,"y":0.5}},"about/branch-2.png":{"frame":{"x":1681,"y":1480,"w":300,"h":366},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":300,"h":366},"sourceSize":{"w":300,"h":366},"pivot":{"x":0.5,"y":0.5}},"about/branch-3.png":{"frame":{"x":0,"y":2655,"w":407,"h":436},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":407,"h":436},"sourceSize":{"w":407,"h":436},"pivot":{"x":0.5,"y":0.5}},"about/leaf-1.png":{"frame":{"x":695,"y":0,"w":112,"h":97},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":112,"h":97},"sourceSize":{"w":112,"h":97},"pivot":{"x":0.5,"y":0.5}},"about/leaf-2.png":{"frame":{"x":0,"y":1195,"w":242,"h":265},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":242,"h":265},"sourceSize":{"w":242,"h":265},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-background-leaf.png":{"frame":{"x":0,"y":2233,"w":476,"h":387},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":476,"h":387},"sourceSize":{"w":476,"h":387},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf-flat.png":{"frame":{"x":1156,"y":380,"w":212,"h":156},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":212,"h":156},"sourceSize":{"w":212,"h":156},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf-normal.png":{"frame":{"x":1368,"y":380,"w":212,"h":156},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":212,"h":156},"sourceSize":{"w":212,"h":156},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-leaf.png":{"frame":{"x":1322,"y":538,"w":241,"h":178},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":241,"h":178},"sourceSize":{"w":241,"h":178},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple-normal.png":{"frame":{"x":407,"y":2655,"w":460,"h":447},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":460,"h":447},"sourceSize":{"w":460,"h":447},"pivot":{"x":0.5,"y":0.5}},"home/apple/apple.png":{"frame":{"x":1347,"y":3111,"w":502,"h":488},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":502,"h":488},"sourceSize":{"w":502,"h":488},"pivot":{"x":0.5,"y":0.5}},"home/apple/background.png":{"frame":{"x":218,"y":380,"w":632,"h":152},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":632,"h":152},"sourceSize":{"w":632,"h":152},"pivot":{"x":0.5,"y":0.5}},"home/apple/cloud-1.png":{"frame":{"x":0,"y":117,"w":1103,"h":122},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1103,"h":122},"sourceSize":{"w":1103,"h":122},"pivot":{"x":0.5,"y":0.5}},"home/apple/cloud-2.png":{"frame":{"x":0,"y":239,"w":1103,"h":122},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1103,"h":122},"sourceSize":{"w":1103,"h":122},"pivot":{"x":0.5,"y":0.5}},"home/apple/glow.png":{"frame":{"x":867,"y":2655,"w":895,"h":456},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":895,"h":456},"sourceSize":{"w":895,"h":456},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-1.png":{"frame":{"x":475,"y":0,"w":78,"h":63},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":78,"h":63},"sourceSize":{"w":78,"h":63},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-2.png":{"frame":{"x":0,"y":538,"w":547,"h":160},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":547,"h":160},"sourceSize":{"w":547,"h":160},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-3.png":{"frame":{"x":0,"y":0,"w":96,"h":17},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":96,"h":17},"sourceSize":{"w":96,"h":17},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-4.png":{"frame":{"x":138,"y":0,"w":93,"h":37},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":93,"h":37},"sourceSize":{"w":93,"h":37},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-5.png":{"frame":{"x":262,"y":0,"w":93,"h":37},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":93,"h":37},"sourceSize":{"w":93,"h":37},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-6.png":{"frame":{"x":96,"y":0,"w":42,"h":19},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":42,"h":19},"sourceSize":{"w":42,"h":19},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-7.png":{"frame":{"x":553,"y":0,"w":78,"h":63},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":78,"h":63},"sourceSize":{"w":78,"h":63},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-8.png":{"frame":{"x":397,"y":0,"w":78,"h":59},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":78,"h":59},"sourceSize":{"w":78,"h":59},"pivot":{"x":0.5,"y":0.5}},"home/apple/leaf-9.png":{"frame":{"x":631,"y":0,"w":64,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":75},"sourceSize":{"w":64,"h":75},"pivot":{"x":0.5,"y":0.5}},"home/intro/3roundleafs.png":{"frame":{"x":297,"y":3111,"w":330,"h":464},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":330,"h":464},"sourceSize":{"w":330,"h":464},"pivot":{"x":0.5,"y":0.5}},"home/intro/5leafs-branche.png":{"frame":{"x":1191,"y":1846,"w":576,"h":386},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":576,"h":386},"sourceSize":{"w":576,"h":386},"pivot":{"x":0.5,"y":0.5}},"home/intro/balls-red-green.png":{"frame":{"x":978,"y":0,"w":215,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":215,"h":100},"sourceSize":{"w":215,"h":100},"pivot":{"x":0.5,"y":0.5}},"home/intro/branch-ball.png":{"frame":{"x":539,"y":1195,"w":295,"h":271},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":295,"h":271},"sourceSize":{"w":295,"h":271},"pivot":{"x":0.5,"y":0.5}},"home/intro/casserole.png":{"frame":{"x":1445,"y":2233,"w":566,"h":422},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":566,"h":422},"sourceSize":{"w":566,"h":422},"pivot":{"x":0.5,"y":0.5}},"home/intro/long-leaf.png":{"frame":{"x":1230,"y":1480,"w":451,"h":358},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":451,"h":358},"sourceSize":{"w":451,"h":358},"pivot":{"x":0.5,"y":0.5}},"home/intro/mini-leaf-orange.png":{"frame":{"x":1686,"y":0,"w":281,"h":117},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":281,"h":117},"sourceSize":{"w":281,"h":117},"pivot":{"x":0.5,"y":0.5}},"home/intro/mini-leaf.png":{"frame":{"x":1103,"y":239,"w":118,"h":124},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":118,"h":124},"sourceSize":{"w":118,"h":124},"pivot":{"x":0.5,"y":0.5}},"home/intro/red-ball.png":{"frame":{"x":807,"y":0,"w":171,"h":99},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":171,"h":99},"sourceSize":{"w":171,"h":99},"pivot":{"x":0.5,"y":0.5}},"home/intro/tomato.png":{"frame":{"x":1660,"y":239,"w":171,"h":141},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":171,"h":141},"sourceSize":{"w":171,"h":141},"pivot":{"x":0.5,"y":0.5}},"home/menu/5leaf-branch.png":{"frame":{"x":615,"y":1846,"w":576,"h":386},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":576,"h":386},"sourceSize":{"w":576,"h":386},"pivot":{"x":0.5,"y":0.5}},"home/menu/ail.png":{"frame":{"x":1563,"y":538,"w":198,"h":181},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":198,"h":181},"sourceSize":{"w":198,"h":181},"pivot":{"x":0.5,"y":0.5}},"home/menu/branch-olive.png":{"frame":{"x":834,"y":1195,"w":333,"h":272},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":333,"h":272},"sourceSize":{"w":333,"h":272},"pivot":{"x":0.5,"y":0.5}},"home/menu/houx.png":{"frame":{"x":1608,"y":930,"w":242,"h":265},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":242,"h":265},"sourceSize":{"w":242,"h":265},"pivot":{"x":0.5,"y":0.5}},"home/menu/left-mini-leaf.png":{"frame":{"x":877,"y":930,"w":463,"h":261},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":463,"h":261},"sourceSize":{"w":463,"h":261},"pivot":{"x":0.5,"y":0.5}},"home/menu/medium-leaf.png":{"frame":{"x":1536,"y":722,"w":251,"h":208},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":251,"h":208},"sourceSize":{"w":251,"h":208},"pivot":{"x":0.5,"y":0.5}},"home/menu/mini-leaf.png":{"frame":{"x":0,"y":722,"w":595,"h":184},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":595,"h":184},"sourceSize":{"w":595,"h":184},"pivot":{"x":0.5,"y":0.5}},"home/menu/oignon.png":{"frame":{"x":0,"y":1846,"w":239,"h":371},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":239,"h":371},"sourceSize":{"w":239,"h":371},"pivot":{"x":0.5,"y":0.5}},"home/menu/olive.png":{"frame":{"x":547,"y":538,"w":146,"h":167},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":146,"h":167},"sourceSize":{"w":146,"h":167},"pivot":{"x":0.5,"y":0.5}},"home/menu/orange.png":{"frame":{"x":652,"y":1480,"w":388,"h":297},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":388,"h":297},"sourceSize":{"w":388,"h":297},"pivot":{"x":0.5,"y":0.5}},"home/menu/persil.png":{"frame":{"x":1251,"y":722,"w":285,"h":202},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":285,"h":202},"sourceSize":{"w":285,"h":202},"pivot":{"x":0.5,"y":0.5}},"home/pepper/dots.png":{"frame":{"x":355,"y":0,"w":42,"h":52},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":42,"h":52},"sourceSize":{"w":42,"h":52},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-1.png":{"frame":{"x":1221,"y":239,"w":148,"h":124},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":148,"h":124},"sourceSize":{"w":148,"h":124},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-2.png":{"frame":{"x":1523,"y":0,"w":163,"h":112},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":163,"h":112},"sourceSize":{"w":163,"h":112},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-3.png":{"frame":{"x":1193,"y":0,"w":142,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":142,"h":100},"sourceSize":{"w":142,"h":100},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta-slice-4.png":{"frame":{"x":1335,"y":0,"w":125,"h":103},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":125,"h":103},"sourceSize":{"w":125,"h":103},"pivot":{"x":0.5,"y":0.5}},"home/pepper/feta.png":{"frame":{"x":595,"y":722,"w":587,"h":184},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":587,"h":184},"sourceSize":{"w":587,"h":184},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-1.png":{"frame":{"x":1761,"y":538,"w":225,"h":184},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":225,"h":184},"sourceSize":{"w":225,"h":184},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-2.png":{"frame":{"x":1340,"y":930,"w":268,"h":261},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":268,"h":261},"sourceSize":{"w":268,"h":261},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-3.png":{"frame":{"x":1584,"y":239,"w":76,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":76,"h":128},"sourceSize":{"w":76,"h":128},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaf-4.png":{"frame":{"x":231,"y":0,"w":31,"h":37},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":31,"h":37},"sourceSize":{"w":31,"h":37},"pivot":{"x":0.5,"y":0.5}},"home/pepper/leaves.png":{"frame":{"x":0,"y":380,"w":218,"h":143},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":218,"h":143},"sourceSize":{"w":218,"h":143},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-2.png":{"frame":{"x":932,"y":2233,"w":513,"h":415},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":513,"h":415},"sourceSize":{"w":513,"h":415},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-slices.png":{"frame":{"x":240,"y":930,"w":637,"h":223},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":637,"h":223},"sourceSize":{"w":637,"h":223},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-1.png":{"frame":{"x":1182,"y":722,"w":69,"h":197},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":69,"h":197},"sourceSize":{"w":69,"h":197},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-2.png":{"frame":{"x":1460,"y":0,"w":63,"h":105},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":63,"h":105},"sourceSize":{"w":63,"h":105},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-left.png":{"frame":{"x":1767,"y":1846,"w":133,"h":387},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":133,"h":387},"sourceSize":{"w":133,"h":387},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-background-right.png":{"frame":{"x":1040,"y":1480,"w":190,"h":356},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":190,"h":356},"sourceSize":{"w":190,"h":356},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-foreground.png":{"frame":{"x":1369,"y":239,"w":215,"h":127},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":215,"h":127},"sourceSize":{"w":215,"h":127},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-background-1.png":{"frame":{"x":1580,"y":380,"w":170,"h":158},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":170,"h":158},"sourceSize":{"w":170,"h":158},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-background-2.png":{"frame":{"x":242,"y":1195,"w":297,"h":265},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":297,"h":265},"sourceSize":{"w":297,"h":265},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-foreground.png":{"frame":{"x":693,"y":538,"w":629,"h":178},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":629,"h":178},"sourceSize":{"w":629,"h":178},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-tomatoes-middleground.png":{"frame":{"x":239,"y":1846,"w":376,"h":372},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":376,"h":372},"sourceSize":{"w":376,"h":372},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-leaf-normal.png":{"frame":{"x":1003,"y":380,"w":153,"h":156},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":153,"h":156},"sourceSize":{"w":153,"h":156},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-leaf.png":{"frame":{"x":850,"y":380,"w":153,"h":156},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":153,"h":156},"sourceSize":{"w":153,"h":156},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background-normal.png":{"frame":{"x":0,"y":1480,"w":326,"h":288},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":326,"h":288},"sourceSize":{"w":326,"h":288},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/tomatoes-background.png":{"frame":{"x":326,"y":1480,"w":326,"h":288},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":326,"h":288},"sourceSize":{"w":326,"h":288},"pivot":{"x":0.5,"y":0.5}},"order/ail.png":{"frame":{"x":0,"y":930,"w":240,"h":219},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":219},"sourceSize":{"w":240,"h":219},"pivot":{"x":0.5,"y":0.5}},"order/leaves.png":{"frame":{"x":627,"y":3111,"w":720,"h":474},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":720,"h":474},"sourceSize":{"w":720,"h":474},"pivot":{"x":0.5,"y":0.5}},"order/oignon.png":{"frame":{"x":0,"y":3111,"w":297,"h":459},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":297,"h":459},"sourceSize":{"w":297,"h":459},"pivot":{"x":0.5,"y":0.5}},"order/olive.png":{"frame":{"x":1167,"y":1195,"w":249,"h":285},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":249,"h":285},"sourceSize":{"w":249,"h":285},"pivot":{"x":0.5,"y":0.5}},"order/orange.png":{"frame":{"x":1416,"y":1195,"w":411,"h":285},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":411,"h":285},"sourceSize":{"w":411,"h":285},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-0-2880.png","format":"RGBA8888","size":{"w":2011,"h":3599},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-0-2880.jpg","_alpha":"/assets/images/textures/atlas-0-2880-alpha.jpg"}},{"frames":{"home/apple/hand-flat.png":{"frame":{"x":0,"y":0,"w":771,"h":929},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":771,"h":929},"sourceSize":{"w":771,"h":929},"pivot":{"x":0.5,"y":0.5}},"home/apple/hand-normal.png":{"frame":{"x":771,"y":0,"w":771,"h":929},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":771,"h":929},"sourceSize":{"w":771,"h":929},"pivot":{"x":0.5,"y":0.5}},"home/intro/spoon.png":{"frame":{"x":0,"y":929,"w":600,"h":630},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":600,"h":630},"sourceSize":{"w":600,"h":630},"pivot":{"x":0.5,"y":0.5}},"home/menu/twig.png":{"frame":{"x":600,"y":929,"w":982,"h":702},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":982,"h":702},"sourceSize":{"w":982,"h":702},"pivot":{"x":0.5,"y":0.5}},"home/pepper/glow.png":{"frame":{"x":0,"y":1631,"w":787,"h":652},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":787,"h":652},"sourceSize":{"w":787,"h":652},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-1-face.png":{"frame":{"x":787,"y":1631,"w":527,"h":629},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":527,"h":629},"sourceSize":{"w":527,"h":629},"pivot":{"x":0.5,"y":0.5}},"home/pepper/pepper-1.png":{"frame":{"x":1314,"y":1631,"w":443,"h":530},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":443,"h":530},"sourceSize":{"w":443,"h":530},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/glow.png":{"frame":{"x":0,"y":2283,"w":814,"h":674},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":814,"h":674},"sourceSize":{"w":814,"h":674},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/knife-flat.png":{"frame":{"x":814,"y":2283,"w":195,"h":1162},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":195,"h":1162},"sourceSize":{"w":195,"h":1162},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/knife-normal.png":{"frame":{"x":1009,"y":2283,"w":195,"h":1162},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":195,"h":1162},"sourceSize":{"w":195,"h":1162},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/slide-3-leaves-middleground.png":{"frame":{"x":1204,"y":2283,"w":231,"h":560},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":231,"h":560},"sourceSize":{"w":231,"h":560},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-1-2880.png","format":"RGBA8888","size":{"w":1757,"h":3445},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-1-2880.jpg","_alpha":"/assets/images/textures/atlas-1-2880-alpha.jpg"}},{"frames":{"home/pepper/ground.png":{"frame":{"x":0,"y":0,"w":1494,"h":1496},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1494,"h":1496},"sourceSize":{"w":1494,"h":1496},"pivot":{"x":0.5,"y":0.5}},"home/tomatoes/ground.png":{"frame":{"x":0,"y":1496,"w":1494,"h":1496},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1494,"h":1496},"sourceSize":{"w":1494,"h":1496},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"atlas-2-2880.png","format":"RGBA8888","size":{"w":1494,"h":2992},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$","_image":"/assets/images/textures/atlas-2-2880.jpg","_alpha":"/assets/images/textures/atlas-2-2880-alpha.jpg"}}]'
    );
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var r = i(0);
    t.default = () => {
      class e extends r.Component {
        get template() {
          return i(54);
        }
        get defaultProps() {
          return {
            onContentChange: { type: "fn", value: () => {} },
            onReady: { type: "fn", value: () => {} },
            globalContent: { type: "json", value: null },
            content: { type: "json", value: null },
            cdnRoot: "",
          };
        }
        ready() {
          this.props.onReady();
        }
        update() {
          this.props.scroll += 0.1 * (this._scroll - this.props.scroll);
        }
        resize() {
          this.props.onContentChange(0);
        }
      }
      Object(r.register)("page-404", e);
    };
  },
  function (e, t) {
    e.exports =
      '<div class="u-fixed u-pos-tl u-viewport-fit u-align-center u-relative o-wrapper--valign c-fill-frame">    <div class="u-inline-block u-fit-w  u-valign-middle o-wrapper--valign">        <h1 style="line-height:1"            class="c-title-giga u-marg-b-xs  u-color--brand u-relative">                                404        </h1>        <h1 class="u-pad-l-xs u-marg-b-md c-title--2 u-color--brand u-relative">                                Page not found        </h1>        <a href="/" class="c-link c-text--xlarge u-color--grey u-bold">Back to home</a>    </div></div>';
  },
  function (e, t) {
    e.exports =
      '<core-route aria-hidden="true" routes="{{routes}}" base="{{baseUrl}}" options="{{routeOptions}}" on-route-change="onRouteChange" class="u-hide"></core-route><core-ajax aria-hidden="true"src="{{globalDataUrl}}" on-success="_onGlobalDataLoaded" on-error="_onDataError"></core-ajax><template is="light-core-template" if="{{pageDataUrl !== null}}" remove-nodes>\t<core-ajax aria-hidden="true" src="{{pageDataUrl}}" on-success="_onPageDataLoaded" on-error="_onDataError"></core-ajax></template>\x3c!-- LOADER --\x3e<div    role="presentation" \t\tclass="u-pointer-none u-block u-fixed u-pos-tl u-viewport-fit {{overlayClass}}" \t\t$style="z-index:99997; height:{{winHeight}}px">\t<div class="u-overflow-h c-loader__white-bg u-absolute u-pos-tr u-bg--white u-fit"\t\t style="background: #fff">\t\t<div class="c-loader__white-bg__inner u-relative u-fit o-wrapper--valign">\t\t\t<svg style="fill:#225733;" width="160" height="54" enable-background="new 0 0 366.9 127.6" version="1.1" viewBox="0 0 373.00001 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(6.1 .4)" points="31.6 44.6 25.3 51 38 63.8 25.3 76.6 31.6 82.9 47.4 67 47.4 60.6"/><polygon transform="translate(6.1 .4)" points="0 63.8 63.2 0 75.9 0 12.6 63.8 75.9 127.6 63.2 127.6"/><path d="m221.2 0.4h-6.3l-38 38.3-38-38.3h-6.3l-60.1 60.6v6.4l60.1 60.6h6.3l38-38.3 38 38.3h6.3l60.1-60.6v-6.4zm-85.5 118-53.7-54.2 53.8-54.2 34.9 35.1-15.9 15.9v6.4l15.8 16zm41.2-66.9 12.7 12.7-12.7 12.8-12.6-12.8zm41.1 66.9-34.8-35 15.8-16v-6.4l-15.9-15.9 34.9-35.1 53.8 54.2z"/><path d="m284.4 128 60.1-60.6v-6.4l-60.1-60.6h-12.7l63.4 63.8-63.3 63.8z"/><path d="m373 128-63.3-63.8 63.3-63.8h-12.6l-60.1 60.6v6.4l60.1 60.6z"/><rect width="9.5" height="127.6"/></svg>\t\t</div>\t</div></div><header is="app-header" role="header" active="{{isNavActive && isReady}}" \t\t\tpage-component-id="{{pageComponentId}}"\t\tglobal-content="{{globalContent}}"\t\tstyle="z-index: 99999"\t\tclass="u-block u-force-3d u-fixed u-pos-tl u-fit-w c-header u-fix-repaint\t\t\t | u-hide@sm"></header>\x3c!-- KOOX Logo --\x3e<a href="/" class="u-block c-link u-fixed c-logo u-pad-a-md {{isNavActive && isReady ? \'is-active\' : \'\'}}"   style="z-index:99999;font-size:0;">   Koox   <svg class="u-inline-block u-valign-middle u-fit-w" style="fill:#fff;" enable-background="new 0 0 366.9 127.6" version="1.1" viewBox="0 0 373.00001 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(6.1 .4)" points="31.6 44.6 25.3 51 38 63.8 25.3 76.6 31.6 82.9 47.4 67 47.4 60.6"/><polygon transform="translate(6.1 .4)" points="0 63.8 63.2 0 75.9 0 12.6 63.8 75.9 127.6 63.2 127.6"/><path d="m221.2 0.4h-6.3l-38 38.3-38-38.3h-6.3l-60.1 60.6v6.4l60.1 60.6h6.3l38-38.3 38 38.3h6.3l60.1-60.6v-6.4zm-85.5 118-53.7-54.2 53.8-54.2 34.9 35.1-15.9 15.9v6.4l15.8 16zm41.2-66.9 12.7 12.7-12.7 12.8-12.6-12.8zm41.1 66.9-34.8-35 15.8-16v-6.4l-15.9-15.9 34.9-35.1 53.8 54.2z"/><path d="m284.4 128 60.1-60.6v-6.4l-60.1-60.6h-12.7l63.4 63.8-63.3 63.8z"/><path d="m373 128-63.3-63.8 63.3-63.8h-12.6l-60.1 60.6v6.4l60.1 60.6z"/><rect width="9.5" height="127.6"/></svg></a>\t\x3c!-- MENU BUTTON --\x3e<button type="button" aria-controls="menu" aria-expanded="{{showMenu}}"\t\taria-label="{{showMenu?\'Open menu\':\'Close menu\'}}"\t\tclass="c-btn c-menu-btn  {{ isNavActive && isReady ? \'is-active\' : \'\'}} {{showMenu?\'is-closed\':\'\'}}" on-click="_onMenuDown"        style="z-index:99999">    <span class="c-menu-btn__line"></span>    <span class="c-menu-btn__line"></span>    <span class="c-menu-btn__line"></span></button><div class="js-fake-scroll"></div>\x3c!-- PAGE WRAPPER --\x3e<main id="main" role="main" class="u-fixed u-pos-tl">\t<template is="light-core-template" if="{{pageComponentId !== null}}" remove-nodes="true">\t        <div is="{{pageComponentId}}" content="{{pageContent}}" global-content="{{globalContent}}"\t\t\t  on-ready="_onPageReady" on-content-change="_onContentChange" \t\t\t  show-frame="{{isNavActive && isReady}}" scroll="{{scrollTop}}"\t\t\t  cdn-root="{{cdnRoot}}"></div>\t</template></main>\x3c!-- MENU --\x3e<div id="menu" aria-hidden="{{!showMenu}}" \t style="z-index:99998"\t\tclass="u-align-center c-menu u-pos-tl u-fixed u-fit {{showMenu ? \'is-active\' : \'is-next\'}}">\t<div class="c-menu__inner u-fit o-wrapper--valign u-align-center u-bg--light ">\t\t<nav class="u-align-center u-inline-block u-valign-middle | u-hide@sm">\t\t\t<template is="light-core-template" repeat="{{cat in globalContent.menu}}">\t\t\t\t<a href="/menu#{{cat.slug}}" tabindex="{{showMenu?1:-1}}"\t\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?$index+1:globalContent.menu.length-1-$index}}">\t\t\t\t\t<span class="u-valign-top">{{cat.name}}</span><sup class="u-valign-top">{{cat.products<10?\'0\'+cat.products:cat.products}}</sup>\t\t\t\t</a><br/>\t\t\t</template>\t\t</nav>\t\t<nav    class="u-hide u-align-center u-inline-block u-valign-middle | u-inline-block@sm"\t\t\t\tstyle="margin-bottom:60px;margin-top:60px;">\t\t\t<a href="/about" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?1:globalContent.menu.length-1+5}}\t\t\t\t\t| u-marg-b-vh1of36@sm">\t\t\t\t<span class="u-valign-top">about</span>\t\t\t</a><br/>\t\t\t<a href="/menu" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?2:globalContent.menu.length-1+4}}\t\t\t\t\t| u-marg-b-vh1of36@sm">\t\t\t\t<span class="u-valign-top">menu</span>\t\t\t</a> <br/>\t\t\t<template is="light-core-template" repeat="{{cat in globalContent.menu}}">\t\t\t\t<a href="/menu#{{cat.slug}}" tabindex="{{showMenu?1:-1}}"\t\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--md c-anim--slide-y c-anim--{{showMenu?$index+3:globalContent.menu.length-1-$index+3}}\t\t\t\t\t\t| u-marg-b-xs">\t\t\t\t\t<span class="u-valign-top">{{cat.name}}</span>\t\t\t\t</a> <br/>\t\t\t</template>\t\t\t<a href="/order" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+1:3}}\t\t\t\t\t| u-marg-b-vh1of36@sm u-marg-t-vh1of36@sm"> \t\t\t\t<span class="u-valign-top">order now</span>\t\t\t</a><br/>\t\t\t<a href="/contact" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+1:3}}\t\t\t\t\t| u-marg-b-vh1of18@sm">\t\t\t\t<span class="u-valign-top">contact</span>\t\t\t</a>\t\t\t<div class="u-block u-valign-middle u-marg-b-sm c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+2:2}}">\t\t\t\t<a href="https://www.instagram.com/koox.london/" class="c-link u-inline-block u-vacuum " aria-label="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--instagram" \t\t\t\t\t\t\tversion="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \t\t\t\t\t\t\tx="0px" y="0px" viewBox="0 0 23.9 23.9"  >\t\t\t\t\t\t<path d="M11.9,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,11.9,2.2 \tM11.9,0C8.7,0,8.3,0,7,0.1C5.7,0.1,4.9,0.3,4.1,0.6C3.3,0.9,2.7,1.3,2,2C1.3,2.7,0.9,3.3,0.6,4.1C0.3,4.9,0.1,5.7,0.1,7 C0,8.3,0,8.7,0,11.9c0,3.2,0,3.6,0.1,4.9c0.1,1.3,0.3,2.1,0.6,2.9c0.3,0.8,0.7,1.5,1.4,2.1c0.7,0.7,1.3,1.1,2.1,1.4 c0.8,0.3,1.6,0.5,2.9,0.6c1.3,0.1,1.7,0.1,4.9,0.1s3.6,0,4.9-0.1c1.3-0.1,2.1-0.3,2.9-0.6c0.8-0.3,1.5-0.7,2.1-1.4 c0.7-0.7,1.1-1.3,1.4-2.1c0.3-0.8,0.5-1.6,0.6-2.9c0.1-1.3,0.1-1.7,0.1-4.9s0-3.6-0.1-4.9c-0.1-1.3-0.3-2.1-0.6-2.9 c-0.3-0.8-0.7-1.5-1.4-2.1c-0.7-0.7-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.9-0.6C15.6,0,15.2,0,11.9,0L11.9,0z"/>\t\t\t\t\t\t<path d="M11.9,5.8c-3.4,0-6.1,2.7-6.1,6.1s2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1S15.3,5.8,11.9,5.8z M11.9,15.9c-2.2,0-4-1.8-4-4 s1.8-4,4-4c2.2,0,4,1.8,4,4S14.1,15.9,11.9,15.9z"/>\t\t\t\t\t\t<circle cx="18.3" cy="5.6" r="1.4"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</div>\t\t\t<div class="c-text--small c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+2:1}}">\t\t\t\t<div class="u-marg-b-sm">\t\t\t\t\t<button on-click="_onCreditsDown" tabindex="{{showMenu?1:-1}}"\t\t\t\t\t\t\tclass="c-text--small u-color--grey u-inline-block c-btn u-underline" aria-label="Credits">Credits</button>\t\t\t\t\t&nbsp;•&nbsp;\t\t\t\t\t<a href="/legals" tabindex="{{showMenu?1:-1}}"\t\t\t\t\t   class="c-btn u-color--grey c-text--small u-inline-block u-underline" aria-label="legals">Legals</a>\t\t\t\t</div>\t\t\t\t<div class="u-inline-block">\t\t\t\t\t<span tabindex="{{showMenu?1:-1}}" class="u-color--grey u-inline-block">{{globalContent.footer.copyrights}}</span>\t\t\t\t</div>\t\t\t</div>\t\t\t</nav>\t</div></div>\x3c!-- CREDITS --\x3e<div aria-hidden="{{!showCredits}}" class="u-align-center c-menu u-pos-tl u-fixed u-fit {{showCredits ? \'is-active\' : \'is-next\'}}">\t<div class="c-menu__inner u-fit o-wrapper--valign u-align-center u-bg--light \t\t\t\tu-pad-x-vw1of12@sm">\t\t<div class="u-inline-block u-valign-middle">\t\t\t<h2 class="u-color--brand c-title-credits u-bold c-anim--slide-y c-anim--{{showCredits?1:7}}" style="margin-bottom:50px;font-size: 10vw;line-height: 1;">credits</h2>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?2:6}}" style="margin-bottom:20px;letter-spacing:0.1em;">Identity</h3>\t\t\t<p class="u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?3:5}}" style="margin-bottom:40px; color: #7c7c7c;">\t\t\t\t<a target="_blank"  tabindex="{{showCredits?1:-1}}" class="c-link--none u-color--grey" href="http://www.bluecheese.studio/">Blue Cheese studio</a> &amp; Nabil Duval\t\t\t</p>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?4:4}}" style="margin-bottom:20px;letter-spacing:0.1em;">Conception &amp; Art direction</h3>\t\t\t<p class="u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?5:3}}" style="margin-bottom:40px; color: #7c7c7c;">\t\t\t\t<a target="_blank" tabindex="{{showCredits?1:-1}}" class="c-link--none u-color--grey" href="http://www.bluecheese.studio/">Blue Cheese studio</a>  \t\t\t</p>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?4:4}}" style="margin-bottom:20px;letter-spacing:0.1em;">Development</h3>\t\t\t<p class="u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?5:3}}" style="margin-bottom:40px; color: #7c7c7c;">\t\t\t\t<a target="_blank" tabindex="{{showCredits?1:-1}}" class="c-link--none u-color--grey" href="https://twitter.com/@twodelab">Nicolas Riciotti</a>\t\t\t</p>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?6:2}}" style="margin-bottom:20px;letter-spacing:0.1em;">illustrations</h3>\t\t\t<div>\t\t\t\t<span class="c-link--none u-color--grey c-text--regular u-inline-block c-anim--slide-y c-anim--{{showCredits?7:1}}"\t\t\t\t\t   style="color: #7c7c7c;">Jeanne Morel  &amp;</span>\t\t\t\t<a target="_blank" tabindex="{{showCredits?1:-1}}" href="https://www.behance.net/tristan-gion"\t\t\t\t\tclass="c-link--none u-inline-block u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?7:1}}"\t\t\t\t\tstyle="color: #7c7c7c;">Tristan Dion</a>\t\t\t</div>\t\t</div>\t</div>\t<button aria-hidden="{{!showCredits}}" rel="close" role="button" aria-label="close credits"\t\t\tclass="u-hide c-btn u-fixed c-losange c-product__close {{showCredits ? \'is-active\':\'\'}}\t\t\t\t  | u-inline-block@sm"                        on-click="_onCreditsDown">        <div class="u-inline-block u-fit u-relative o-wrapper--valign">            <div class="c-losange__shape"></div>            <div class="o-wrapper--valign u-absolute u-fit u-pos-tl">                            <span class="c-losange__cross u-inline-block u-valign-middle"></span>                </div>        </div>\t</button>\t</div>\x3c!--<div class="u-align-center c-menu u-pos-tl u-fixed u-fit {{showVideo ? \'is-active\' : \'is-next\'}}"\tstyle="z-index:9999">\t<div class="c-menu__inner u-overflow-h u-fit o-wrapper--valign u-align-center u-bg--light ">\t\t<div class="u-absolute u-fit u-pos-tl" on-click="_hideVideo"></div>\t\t<button aria-label="close video" on-click="_hideVideo" \t\t\tclass="{{showVideo?\'u-pointer-auto\':\'u-pointer-none\'}} c-btn u-absolute c-close-btn u-offset-l-vw1of18 | u-hide@sm"\t\t\tstyle="top: 50%; padding-right: 0; transform: translateY(-50%)">\t\t\t<span class="c-close-btn__line"></span>\t\t\t<span class="c-close-btn__line"></span>\t\t</button>\t\t<button aria-hidden="true" on-click="_hideVideo" class="u-offset-r-vw3of36 u-offset-t-sm u-hide u-block@sm {{{{showVideo?\'u-pointer-auto\':\'u-pointer-none\'}} c-btn u-absolute c-close-btn"\t\t\tstyle="padding-right: 0; ">\t\t\t<span class="c-close-btn__line"></span>\t\t\t<span class="c-close-btn__line"></span>\t\t</button>\t\t \t\t\t<core-video on-start="_onVideoStart" on-ended="_onVideoEnd" active="{{showVideo}}" autoplay="false" preload="false" controls="true" loop="false"\t\t\tsrc="./assets/videos/site.mp4"\t\t\tposter="./assets/poster.jpg"\t\t\tclass="u-relative u-vw14of18 u-inline-block u-valign-middle u-bg--black | u-fit-w@sm" >\t\t</core-video> \t</div></div>--\x3e<footer style="z-index:999"\t\tclass="u-block u-force-3d  u-fixed  u-pos-bl u-fit-w c-footer u-vacuum\t\t\t\t| {{isNavActive && isReady ? \'is-active\':\'\'}}\t\t\t   | u-hide@sm">\t<div class="c-footer__outter">\t\t<div class="c-footer__inner">\t\t\t\t<div class="u-w1of2 u-inline-block">\t\t\t\t<span   class="u-color--grey  c-text--small u-inline-block">{{globalContent.footer.copyrights}}&nbsp;•&nbsp;</span>\t\t\t\t<button on-click="_onCreditsDown" class="c-btn u-color--grey c-link--none  c-text--small u-inline-block" title="credits">Credits</button>\t\t\t\t<a href="/legals" class="u-color--grey c-link--none c-text--small">&nbsp;•&nbsp;Legals</a>\t\t\t\t</div>\t\t\t<div class="u-w1of2 u-inline-block u-align-right">\t\t\t\t\x3c!-- \t<a href="/about#contact" class="u-color--grey c-link--none  c-text--small u-inline-block" title="Contact">Contact</a> --\x3e\t\t\t\t<a href="https://www.instagram.com/koox.london/" class="c-link u-inline-block u-vacuum u-marg-r-sm " title="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--instagram" \t\t\t\t\t\tversion="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \t\t\t\t\t\tx="0px" y="0px" viewBox="0 0 23.9 23.9"  >\t\t\t\t\t\t<path d="M11.9,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,11.9,2.2 \tM11.9,0C8.7,0,8.3,0,7,0.1C5.7,0.1,4.9,0.3,4.1,0.6C3.3,0.9,2.7,1.3,2,2C1.3,2.7,0.9,3.3,0.6,4.1C0.3,4.9,0.1,5.7,0.1,7 C0,8.3,0,8.7,0,11.9c0,3.2,0,3.6,0.1,4.9c0.1,1.3,0.3,2.1,0.6,2.9c0.3,0.8,0.7,1.5,1.4,2.1c0.7,0.7,1.3,1.1,2.1,1.4 c0.8,0.3,1.6,0.5,2.9,0.6c1.3,0.1,1.7,0.1,4.9,0.1s3.6,0,4.9-0.1c1.3-0.1,2.1-0.3,2.9-0.6c0.8-0.3,1.5-0.7,2.1-1.4 c0.7-0.7,1.1-1.3,1.4-2.1c0.3-0.8,0.5-1.6,0.6-2.9c0.1-1.3,0.1-1.7,0.1-4.9s0-3.6-0.1-4.9c-0.1-1.3-0.3-2.1-0.6-2.9 c-0.3-0.8-0.7-1.5-1.4-2.1c-0.7-0.7-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.9-0.6C15.6,0,15.2,0,11.9,0L11.9,0z"/>\t\t\t\t\t\t<path d="M11.9,5.8c-3.4,0-6.1,2.7-6.1,6.1s2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1S15.3,5.8,11.9,5.8z M11.9,15.9c-2.2,0-4-1.8-4-4 s1.8-4,4-4c2.2,0,4,1.8,4,4S14.1,15.9,11.9,15.9z"/>\t\t\t\t\t\t<circle cx="18.3" cy="5.6" r="1.4"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</div>\t\t\t</div>\t\t</div>\t\t\t\t\t\t</footer>\x3c!-- <div class="u-fixed u-viewport-fit u-pos-tl u-pointer-none" style="z-index: 2000">\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 0px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 45px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 90px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 135px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 180px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 180px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 135px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 90px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 45px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 0;    width: 1px; background: #00ffff;"></div></div>  --\x3e';
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var r = i(0),
      s = i.n(r),
      o = i(3),
      n = i.n(o);
    class a extends r.Component {
      get defaultProps() {
        return {
          routes: { type: "json", value: null },
          options: { type: "json", value: null },
          base: "",
          location: null,
          oldLocation: null,
          onRouteChange: { type: "func", value: function () {} },
          onOpenPopin: { type: "func", value: function () {} },
        };
      }
      attached() {
        for (var e in (n.a.base(this.props.base), this.props.routes))
          this.addRoute(e);
        n()("*", this.notFound.bind(this)), n.a.start(this.props.options);
      }
      addRoute(e) {
        n()(
          e,
          function (t, i) {
            this.onRoute(e, t, i);
          }.bind(this)
        );
      }
      onRoute(e, t, i) {
        (this.props.oldLocation =
          null == this.props.location
            ? { path: null, componentId: null }
            : this.props.location),
          (this.props.location = {
            regexp: e,
            path: t.pathname,
            componentId: this.props.routes[e].componentId,
            params: t.params,
            query: t.querystring,
            completePath: t.path,
          }),
          this.props.onRouteChange(this.props.location, this.props.oldLocation);
      }
      notFound() {
        setTimeout(() => {
          n()("/404");
        }, 10);
      }
    }
    Object(r.register)("core-route", a);
    var h = i(6),
      l = i.n(h);
    class p extends r.Component {
      get defaultProps() {
        return {
          src: { value: null, change: "onSrcChange" },
          method: "get",
          data: { type: "json", value: null, change: "onDataChange" },
          onSuccess: { type: "func", value: function () {} },
          onError: { type: "func", value: function () {} },
          contentType: { type: "string", value: "application/json" },
          auto: { type: "bool", value: !0 },
          headers: { type: "json", value: {} },
          reload: { type: "bool", value: !1, change: "_onReload" },
          sendOnSrcChange: { type: "bool", value: !0 },
          sendOnDataChange: { type: "bool", value: !0 },
        };
      }
      _onReload() {
        this.props.reload && this.load();
      }
      ready() {
        this.props.auto &&
          null != this.props.src &&
          "null" != this.props.src &&
          this.load();
      }
      onSrcChange() {
        this.props.sendOnSrcChange && this.load();
      }
      onDataChange() {
        this.props.sendOnDataChange && this.load();
      }
      load() {
        if (
          ((this.props.headers.Token = r.EventDispatcher.request("token:get")),
          this.props.src && "get" == this.props.method.toLowerCase())
        ) {
          var e = l.a.get(this.props.src);
          for (let t in this.props.data)
            if (this.props.data.hasOwnProperty(t))
              if (
                "[object Array]" ===
                Object.prototype.toString.call(this.props.data[t])
              )
                for (let i = 0; i < this.props.data[t].length; i++) {
                  let r = {};
                  (r[t + "[]"] = this.props.data[t][i]), e.query(r);
                }
              else {
                let i = {};
                (i[t] = this.props.data[t]), e.query(i);
              }
          e.set(this.props.headers).end((e, t) => {
            requestAnimationFrame(() => {
              e ? this.props.onError(e) : this.props.onSuccess(t);
            });
          });
        } else {
          if (!this.props.src) return;
          let e = l.a.post(this.props.src);
          if ("multipart/form-data" !== this.props.contentType)
            for (var t in (e.type(this.props.contentType), this.props.data))
              if (
                "[object Array]" ===
                Object.prototype.toString.call(this.props.data[t])
              ) {
                let i = {};
                (i[t + "[]"] = this.props.data[t]), e.send(i);
              } else {
                let i = {};
                (i[t] = this.props.data[t]), e.send(i);
              }
          else
            for (var t in this.props.data)
              if (this.props.data[t] instanceof File)
                e.attach(t, this.props.data[t], this.props.data[t].name);
              else if (
                "[object Array]" ===
                Object.prototype.toString.call(this.props.data[t])
              )
                for (let i = 0; i < this.props.data[t].length; i++) {
                  (({}[t + "[]"] = this.props.data[t][i]),
                    e.field(t + "[]", this.props.data[t][i]));
                }
              else e.field(t, this.props.data[t]);
          e.set(this.props.headers).end((e, t) => {
            if (!t.body)
              try {
                JSON.parse(t.text);
              } catch (e) {
                return void this.props.onError("internal server error");
              }
            requestAnimationFrame(() => {
              e ? this.props.onError(e) : this.props.onSuccess(t);
            });
          });
        }
      }
    }
    Object(r.register)("core-ajax", p);
    class c extends r.Component {
      get template() {
        return i(38);
      }
      get events() {
        return { submit: "onSubmit" };
      }
      get defaultProps() {
        return {
          onSuccess: { type: "func", value: function () {} },
          onError: { type: "func", value: function () {} },
          onSend: { type: "func", value: function () {} },
          action: window.location.href,
          method: "post",
          enctype: "application/x-www-form-urlencoded",
          formData: { value: null },
          classForm: "",
          headers: { type: "json", value: null },
          onCustomCheck: {
            type: "fn",
            value: function () {
              return !0;
            },
          },
          forceSubmit: {
            type: "bool",
            value: !1,
            change: "_onForceSubmitChange",
          },
          reset: { type: "bool", value: !0 },
          sendOnSrcChange: { type: "bool", value: !0 },
          useEmailjs: { type: "bool", value: !1 },
          emailjsId: "",
          emailjsTemplate: "",
        };
      }
      _onForceSubmitChange() {
        this.props.forceSubmit && this.onSubmit();
      }
      checkFields() {
        (this.$requiredField = this.querySelectorAll(".js-required")),
          (this.$emailFields = this.querySelectorAll(".js-email")),
          (this.$regFields = this.querySelectorAll("[data-regex]"));
        var e = this.props.onCustomCheck();
        for (let t = 0, i = this.$requiredField.length; t < i; t++)
          if ("radio" === this.$requiredField[t].type) {
            let i = !1;
            for (let e = 0, r = this.$requiredField.length; e < r; e++)
              if (
                "radio" == this.$requiredField[e].type &&
                this.$requiredField[t].name == this.$requiredField[e].name &&
                this.$requiredField[e].checked
              ) {
                i = !0;
                break;
              }
            i
              ? (this.$requiredField[t].classList.remove("is-error"),
                this.$requiredField[t].classList.add("is-success"))
              : ((e = !1),
                this.$requiredField[t].classList.add("is-error"),
                this.$requiredField[t].classList.remove("is-success"));
          } else
            (!this.$requiredField[t].value &&
              "checkbox" !== this.$requiredField[t].type) ||
            ("" == this.$requiredField[t].value &&
              "checkbox" !== this.$requiredField[t].type) ||
            ("checkbox" == this.$requiredField[t].type &&
              !this.$requiredField[t].checked)
              ? "file" == this.$requiredField[t].type &&
                this.$requiredField[t].getAttribute("value") &&
                "" !== this.$requiredField[t].getAttribute("value")
                ? (this.$requiredField[t].classList.remove("is-error"),
                  this.$requiredField[t].classList.add("is-success"))
                : ((e = !1),
                  this.$requiredField[t].classList.add("is-error"),
                  this.$requiredField[t].classList.remove("is-success"))
              : (this.$requiredField[t].classList.remove("is-error"),
                this.$requiredField[t].classList.add("is-success"));
        for (let t = 0, i = this.$emailFields.length; t < i; t++)
          this.$emailFields[t].value &&
          "" != this.$emailFields[t].value &&
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            this.$emailFields[t].value
          )
            ? (this.$emailFields[t].classList.remove("is-error"),
              this.$emailFields[t].classList.add("is-success"))
            : ((e = !1),
              this.$emailFields[t].classList.add("is-error"),
              this.$emailFields[t].classList.remove("is-success"));
        for (let t = 0, i = this.$regFields.length; t < i; t++)
          new RegExp(this.$regFields[t].getAttribute("data-regex"), "ig").test(
            this.$regFields[t].value
          )
            ? (this.$regFields[t].classList.remove("is-error"),
              this.$regFields[t].classList.add("is-success"))
            : ((e = !1),
              this.$regFields[t].classList.add("is-error"),
              this.$regFields[t].classList.remove("is-success"));
        return e;
      }
      onSubmit(e) {
        e && e.preventDefault(),
          this.checkFields() &&
            ((this.props.formData = this.serialize(
              this.querySelector(".js-form")
            )),
            this.props.onSend(),
            this.props.useEmailjs &&
              emailjs
                .send(
                  this.props.emailjsId,
                  this.props.emailjsTemplate,
                  this.props.formData
                )
                .then(
                  (e) => {
                    if ((this.props.onSuccess(e), this.props.reset)) {
                      let e = this.querySelector(".js-form");
                      e.reset();
                      for (let i = e.elements.length - 1; i >= 0; i--) {
                        if (document.createEventObject) {
                          var t = document.createEventObject();
                          e.elements[i].fireEvent("onchange", t);
                        } else {
                          (t = document.createEvent("HTMLEvents")).initEvent(
                            "change",
                            !0,
                            !0
                          ),
                            e.elements[i].dispatchEvent(t);
                        }
                        if (document.createEventObject) {
                          t = document.createEventObject();
                          e.elements[i].fireEvent("onreset", t);
                        } else {
                          (t = document.createEvent("HTMLEvents")).initEvent(
                            "reset",
                            !0,
                            !0
                          ),
                            e.elements[i].dispatchEvent(t);
                        }
                      }
                    }
                  },
                  (e) => {}
                ));
      }
      serialize(e) {
        let t,
          i = {};
        if ("object" == typeof e && "FORM" == e.nodeName) {
          var r = e.elements.length;
          for (let o = 0; o < r; o++) {
            if (
              ((t = e.elements[o]),
              t.name &&
                !t.disable &&
                "file" != t.type &&
                "reset" != t.type &&
                "submit" != t.type &&
                "button" != t.type)
            )
              if ("select-multiple" == t.type)
                for (j = e.elements[o].options.length - 1; j >= 0; j--)
                  t.options[j].selected &&
                    (i[t.name] = encodeURIComponent(t.options[j].value));
              else
                (("checkbox" != t.type && "radio" != t.type) || t.checked) &&
                  (void 0 !== i[t.name]
                    ? ("[object Array]" !==
                        Object.prototype.toString.call(i[t.name]) &&
                        (i[t.name] = new Array(i[t.name])),
                      i[t.name].push(encodeURIComponent(t.value)))
                    : (i[t.name] = encodeURIComponent(t.value)));
            if ("file" == t.type)
              for (var s in t.files)
                t.files.hasOwnProperty(s) &&
                  t.files[s] instanceof File &&
                  (i[t.name] = t.files[s]);
          }
        }
        return i;
      }
      onAjaxSuccess(e) {
        if (
          (e && "object" != typeof e && (e = JSON.parse(e)),
          this.props.onSuccess(e),
          this.props.reset)
        ) {
          let e = this.querySelector(".js-form");
          e.reset();
          for (let i = e.elements.length - 1; i >= 0; i--) {
            if (document.createEventObject) {
              var t = document.createEventObject();
              e.elements[i].fireEvent("onchange", t);
            } else {
              (t = document.createEvent("HTMLEvents")).initEvent(
                "change",
                !0,
                !0
              ),
                e.elements[i].dispatchEvent(t);
            }
            if (document.createEventObject) {
              t = document.createEventObject();
              e.elements[i].fireEvent("onreset", t);
            } else {
              (t = document.createEvent("HTMLEvents")).initEvent(
                "reset",
                !0,
                !0
              ),
                e.elements[i].dispatchEvent(t);
            }
          }
        }
      }
      onAjaxError(e) {
        this.props.onError(e);
      }
    }
    Object(r.register)("core-ajax-form", c);
    class u extends r.Component {
      get defaultProps() {
        return {
          width: { type: "float", value: 0, change: "resize" },
          height: { type: "float", value: 0, change: "resize" },
          type: { type: "str", value: "cover" },
        };
      }
      attached() {
        (this.aspect = "cover" != this.props.type), this.resize();
      }
      detached() {
        this.$img && null !== this.$img && (this.$img.onload = null);
      }
      ready() {
        (this.$img = this.querySelector(".js-img")),
          null !== this.$img &&
            (this.bindMethods(["forceImageLoad"]), this.forceImageLoad());
      }
      forceImageLoad() {
        let e = this,
          t = new Image();
        (t.onload = function () {
          (this.onload = null),
            (this.onerror = null),
            (e.props.width = this.width),
            (e.props.height = this.height),
            e.resize();
        }),
          (t.onerror = function () {
            (this.onload = null), (this.onerror = null);
          }),
          (t.src = this.$img.src);
      }
      resize() {
        var e, t, i, r, s, o;
        void 0 !== this.parentNode &&
          ((this.parentWidth = this.parentNode.clientWidth),
          (this.parentHeight = this.parentNode.clientHeight),
          (this.computedSize =
            ((e = this.props.width),
            (t = this.props.height),
            (i = this.parentWidth),
            (r = this.parentHeight),
            (s = this.aspect),
            (o = [i / e, r / t]),
            {
              width: e * (o = s ? Math.min(o[0], o[1]) : Math.max(o[0], o[1])),
              height: t * o,
            })),
          (this.offsetX =
            0.5 * Math.round(this.parentWidth - this.computedSize.width)),
          (this.offsetY =
            0.5 * Math.round(this.parentHeight - this.computedSize.height)),
          (this.style.position = "absolute"),
          (this.style.width = Math.round(this.computedSize.width) + "px"),
          (this.style.height = Math.round(this.computedSize.height) + "px"),
          (this.offsetX || this.offsetY) &&
            ((this.style.left = this.offsetX + "px"),
            (this.style.top = this.offsetY + "px")));
      }
    }
    Object(r.register)("core-object-fit", u);
    var d = {};
    class m extends r.Component {
      get template() {
        return i(39);
      }
      get defaultProps() {
        return {
          alt: "",
          src: "",
          hdSrc: "",
          alpha: { type: "f", value: 0 },
          imgClass: "u-fit-w",
          onLoaded: { type: "fn", value: function () {} },
          backgroundSize: "",
          backgroundPosition: "center center",
          width: 1,
          height: 1,
          cover: { type: "bool", value: !1 },
          debug: { type: "bool", value: !1 },
          lazy: { type: "bool", value: !1 },
          fallback: null,
        };
      }
      created() {
        (this._isLoaded = !1), (this._sources = []);
      }
      ready() {
        for (this.$parent = this.parentNode; this.$parent; ) {
          if ("SCROLL-OBJECT" == this.$parent.tagName && this.props.lazy) {
            this.preventLoad(), (this.$parent._img = this);
            break;
          }
          this.$parent = this.$parent.parentNode;
        }
        this._isInDom = !0;
      }
      load() {
        (this._prevent && this._isInDom) ||
          ((this._isLoading = !0),
          (this._isLoaded = !1),
          (this._loadTimer = setTimeout(() => {
            this.getSrcFromSources();
          }, 100)));
      }
      allowLoad() {
        (this._prevent = !1), this._isLoading || this.load();
      }
      preventLoad() {
        (this._prevent = !0),
          clearTimeout(this._loadTimer),
          (this._isLoading = !1);
      }
      getSrcFromSources() {
        let e = !1;
        for (let t = 0; t < this._sources.length; t++) {
          let i = this._sources[t].query,
            r = this._sources[t].src;
          if (window.matchMedia(i).matches) {
            if (((e = !0), null == d[r])) {
              let e = new Image();
              (e.onload = () => {
                (e.onload = null),
                  (e = null),
                  (this._isLoaded = !0),
                  (this._isLoading = !1),
                  (this.props.hdSrc = r),
                  (this.props.isReady = !0),
                  (d[r] = r);
              }),
                (e.src = r),
                console.log("new HAS MATCH", r, d[r]);
            } else
              (this._isLoaded = !0),
                (this.props.hdSrc = r),
                (this.props.isReady = !0),
                (this._isLoading = !1);
            break;
          }
        }
        e ||
          console.warn(
            "no query match found for specified source:",
            this._sources
          );
      }
      addSource(e, t) {
        return (
          this._sources.push({ query: t, src: e }), this._sources.length - 1
        );
      }
      updateSource(e, t, i) {
        void 0 !== this._sources[e] &&
          ((this._sources[e].src = t), (this._sources[e].query = i));
      }
      resize() {
        this.load();
      }
      update() {
        this._isLoaded && (this.props.alpha = 1);
      }
    }
    Object(r.register)("core-img", m);
    class f extends r.Component {
      get defaultProps() {
        return {
          src: { type: "string", value: null, change: "_updateSource" },
          wpSrc: { type: "json", value: null, change: "_updateSource" },
          query: { type: "string", value: null, change: "_updateSource" },
        };
      }
      resize() {
        this._winWidth = window.innerWidth;
      }
      getSrc() {
        let e = null;
        return (
          (e =
            null !== this.props.wpSrc
              ? this._winWidth <= 1280
                ? this.props.wpSrc.sizes.medium_large
                : this._winWidth <= 1920
                ? this.props.wpSrc.sizes.large
                : this.props.wpSrc.url
              : this.props.src),
          (e = e.replace(
            "https://kooxcoukeu.cluster020.hosting.ovh.net/",
            "https://koox.co.uk/"
          )),
          e
        );
      }
      ready() {
        for (this.resize(), this.$parent = this.parentNode; this.$parent; ) {
          if ("CORE-IMG" == this.$parent.tagName) {
            (this._parentNode = this.$parent),
              (this._index = this.$parent.addSource(
                this.getSrc(),
                this.props.query
              ));
            break;
          }
          this.$parent = this.$parent.parentNode;
        }
        this._updateSource();
      }
      _updateSource() {
        this._parentNode &&
          this._parentNode.updateSource(
            this._index,
            this.getSrc(),
            this.props.query
          );
      }
    }
    function g(e, t) {
      var i;
      return (
        e.currentStyle
          ? (i = e.currentStyle[t])
          : window.getComputedStyle &&
            (i = document.defaultView
              .getComputedStyle(e, null)
              .getPropertyValue(t)),
        i
      );
    }
    function v(e, t) {
      void 0 !== t || document;
      for (
        var i = e.offsetTop, r = e.offsetLeft;
        e && e.parentNode && e.parentNode != document && e !== document;

      )
        "static" != g(e.parentNode, "position") &&
          ((i += e.parentNode.offsetTop), (r += e.parentNode.offsetLeft)),
          (e = e.parentNode);
      return { top: i, left: r };
    }
    Object(r.register)("core-img-source", f);
    i(5);
    var y = i(1);
    i(40), i(41);
    class w extends r.Component {
      get defaultProps() {
        return {
          forceUpdate: {
            type: "bool",
            value: !1,
            change: "_onForceUpdateChange",
          },
          scroll: { type: "float", value: 0 },
          ratio: { type: "float", value: 1 },
          debug: { type: "bool", value: !1 },
          position: { type: "arr", value: [0, 0] },
          translate: { type: "arr", value: [0, 0] },
          rotation: { type: "f", value: 0 },
          z: { type: "f", value: 0 },
          setActive: { type: "bool", value: !0 },
          scale: { type: "f", value: 1 },
          delay: { type: "f", value: 0 },
          disableChildren: { type: "bool", value: !1 },
        };
      }
      _onForceUpdateChange() {
        this.props.forceUpdate && this.resize();
      }
      created() {
        (this._direction = 1),
          (this._smoothedScroll = 0),
          (this._offset = [0, 0]),
          (this._position = [0, 0]),
          (this._translate = [0, 0]),
          (this._worldPosition = [0, 0]),
          (this._screenPosition = [0, 0]),
          (this._lastScreenPosition = [0, 0]),
          (this._smoothedPosition = [0, 0]),
          (this._alpha = 1),
          (this._delta = 0),
          (this._updateObject = !0),
          (this._scrollChildObject = []);
      }
      enableObject() {
        if (!this._updateObject) {
          this._updateObject = !0;
          for (let e = 0; e < this._scrollChildObject.length; e++)
            this._scrollChildObject[e].enableObject();
        }
      }
      disableObject() {
        if (this._updateObject) {
          (this._updateObject = !1),
            (this.style.opacity = 0),
            (this.style.visibility = "hidden"),
            (this.style[r.support.transform] = "none");
          for (let e = 0; e < this._scrollChildObject.length; e++)
            this._scrollChildObject[e].disableObject();
        }
      }
      add(e) {
        let t = !1;
        for (let i = 0; i < this._scrollChildObject.length; i++)
          if (this._scrollChildObject[i] == e) {
            t = !0;
            break;
          }
        t || this._scrollChildObject.push(e);
      }
      _removeChild(e) {
        for (let t = 0; t < this._scrollChildObject.length; t++)
          if (this._scrollChildObject[t] == e) {
            this._scrollChildObject.splice(t, 1);
            break;
          }
      }
      detached() {
        this._scrollParent &&
          this._scrollParent._removeChild &&
          this._scrollParent._removeChild(this);
      }
      ready() {
        (this._scrollParent = this._getScrollParent()),
          this._scrollParent && this._scrollParent.add(this);
      }
      _getScrollParent() {
        for (var e = this.parentNode; e; ) {
          if ("SCROLL-OBJECT" == e.tagName) return e;
          e = e.parentNode;
        }
        return null;
      }
      update() {
        if (!this._updateObject)
          return void (this._img && this._img.preventLoad());
        (this._worldPosition[0] = 0),
          (this._worldPosition[1] = 0),
          this._scrollParent &&
            ((this._worldPosition[0] = this._scrollParent._worldPosition[0]),
            (this._worldPosition[1] = this._scrollParent._worldPosition[1])),
          (this._worldPosition[0] += this._offsetLeft),
          (this._worldPosition[1] += this._offsetTop),
          (this._position[0] = 0),
          (this._position[1] = 0),
          (this._worldPosition[0] += this.props.position[0]),
          (this._worldPosition[1] += this.props.position[1]),
          (this._worldPosition[0] +=
            (this.props.translate[0] * this._width) / 100),
          (this._worldPosition[1] +=
            (this.props.translate[1] * this._height) / 100),
          (this._smoothedPosition[0] +=
            (this._worldPosition[0] - this._smoothedPosition[0]) *
            this.props.ratio),
          (this._smoothedPosition[1] +=
            (this._worldPosition[1] - this._smoothedPosition[1]) *
            this.props.ratio),
          (this._position[0] +=
            this._smoothedPosition[0] - this._worldPosition[0]),
          (this._position[1] +=
            this._smoothedPosition[1] - this._worldPosition[1]);
        let e =
          this._screenPosition[1] + 0.5 * this._height - 0.5 * this._winHeight;
        (this._position[1] += (e / this._winHeight) * 0.5 * this.props.z),
          (this._worldPosition[0] += this._position[0]),
          (this._worldPosition[1] += this._position[1]),
          (this._position[0] += this.props.position[0]),
          (this._position[1] += this.props.position[1]),
          (this._position[0] += (this.props.translate[0] * this._width) / 100),
          (this._position[1] += (this.props.translate[1] * this._height) / 100),
          (this._screenPosition[0] = this._smoothedPosition[0]),
          (this._screenPosition[1] = this._smoothedPosition[1]),
          this._screenPosition[1] > this._lastScreenPosition[1]
            ? (this._direction = 1)
            : this._screenPosition[1] < this._lastScreenPosition[1] &&
              (this._direction = -1),
          (this._lastScreenPosition[1] = this._screenPosition[1]);
        let t = "";
        if (
          this._screenPosition[1] > 10 - this._height &&
          this._screenPosition[1] < this._winHeight - 10
        ) {
          //!this._isActive ? 0 : 1;
          if (
            ((t +=
              " translate(" +
              this._position[0] +
              "px, " +
              this._position[1] +
              "px) translateZ(0)"),
            0 !== this.props.rotation &&
              (t += " rotate(" + this.props.rotation + "deg)"),
            (1 === this.props.scale && 1 === this._zoom) ||
              (t += " scale(" + this.props.scale + ")"),
            (this.style.visibility = "visible"),
            (this.style.opacity = 1),
            this.props.disableChildren)
          )
            for (let e = 0; e < this._scrollChildObject.length; e++)
              this._scrollChildObject[e].enableObject();
          (this.style[r.support.transform] = t),
            this._screenPosition[1] < this._winDeltas
              ? (this._isActive ||
                  ((this._isActive = !0),
                  this.props.setActive &&
                    setTimeout(() => {
                      this.classList.add("is-active");
                    }, 300)),
                this._img && this._img.allowLoad())
              : this._img && this._img.preventLoad();
        } else if (
          ((this._isActive = !1),
          this.props.setActive &&
            (clearTimeout(this._setActiveTimer),
            this.classList.remove("is-active")),
          (this.style[r.support.transform] = "none"),
          (this.style.visibility = "hidden"),
          (this.style.opacity = 0),
          this._img && this._img.preventLoad(),
          this.props.disableChildren)
        )
          for (let e = 0; e < this._scrollChildObject.length; e++)
            this._scrollChildObject[e].disableObject();
      }
      resize() {
        (this._height = this.clientHeight),
          (this._width = this.clientWidth),
          (this._offsetTop = v(this, this._scrollParent || document).top),
          (this._offsetLeft = v(this, this._scrollParent || document).left),
          (this._winDeltas = window.innerHeight),
          (this._winHeight = window.innerHeight),
          (this._winWidth = window.innerWidth),
          (this._isMobile = window.innerWidth < 768);
      }
    }
    Object(r.register)("scroll-object", w);
    var _,
      x,
      b,
      S,
      C = 0,
      T = ["moz", "webkit", "", "ms", "o"],
      P = T.length;
    if (void 0 !== document.cancelFullscreen)
      (_ = "requestFullscreen"),
        (x = "exitFullscreen"),
        (b = "fullscreenchange");
    else
      for (; P--; )
        ("moz" == T[P] && !document.mozFullScreenEnabled) ||
          void 0 === document[T[P] + "CancelFullScreen"] ||
          ((_ = T[P] + "RequestFullScreen"),
          (x = T[P] + "CancelFullScreen"),
          (b = T[P] + "fullscreenchange"),
          (S = "webkit" == T[P] ? T[P] + "IsFullScreen" : T[P] + "FullScreen"));
    class z extends r.Component {
      get template() {
        return i(42);
      }
      get events() {
        return {
          "click .js-video-big-play": "togglePlay",
          "click .js-video-play": "togglePlay",
          "click .js-video-fullscreen": "toggleFullScreen",
          "pointerdown .js-volume": "_onVolumeDown",
          pointermove: "_onPointerMove",
          pointerup: "_onPointerUp",
        };
      }
      get defaultProps() {
        return {
          src: { type: "string", value: null, change: "_onSrcChange" },
          currentSrc: { type: "string", value: null },
          poster: { type: "string", value: "" },
          wmode: { type: "string", value: "transparent" },
          active: { type: "bool", value: !0, change: "onActiveChange" },
          forceStop: { type: "bool", value: !1, change: "onForceStop" },
          controls: { type: "bool", value: !0 },
          showBigPlay: { type: "bool", value: !0 },
          autoHideControls: { type: "bool", value: !0 },
          autoplay: { type: "bool", value: !1 },
          mute: { type: "bool", value: !1 },
          loop: { type: "bool", value: !1 },
          showinfo: { type: "bool", value: !1 },
          rel: { type: "int", value: 0 },
          uuid: { type: "string", value: "yt-" + C },
          quality: "auto",
          timelineValue: { type: "float", value: null },
          onReady: { type: "func", value: function () {} },
          onEnded: { type: "fn", value: function () {} },
          onPlay: { type: "fn", value: function () {} },
          onStart: { type: "fn", value: function () {} },
          onTimeupdate: { type: "fn", value: function () {} },
          currentTime: {
            type: "float",
            value: 0,
            change: "onCurrentTimeChange",
          },
          isPlaying: { type: "bool", value: !1 },
          preload: { type: "bool", value: !1 },
          load: { type: "bool", value: !0 },
          cover: { type: "bool", value: !1 },
          useStripe: { type: "bool", value: !0 },
          stripeColor: "#000000",
          volume: { type: "f", value: 1 },
          title: "",
          formatedDuration: "",
          currentTime: { type: "f", value: 1 },
        };
      }
      detached() {
        this.stopProgress(),
          document.removeEventListener(b, this.onFullScrenChange),
          this.HTMLplayer &&
            (this.HTMLplayer.removeEventListener(
              "loadedmetadata",
              this.onPlayerReady,
              !1
            ),
            this.HTMLplayer.removeEventListener(
              "play",
              this.onPlayerStateChange,
              !1
            ),
            this.HTMLplayer.removeEventListener(
              "pause",
              this.onPlayerStateChange,
              !1
            ),
            this.HTMLplayer.removeEventListener(
              "ended",
              this.onPlayerStateChange,
              !1
            ),
            this.HTMLplayer.removeEventListener(
              "progress",
              this.onPlayerStateChange,
              !1
            ),
            this.HTMLplayer.removeEventListener(
              "error",
              this.onPlayerError,
              !1
            )),
          (this.HTMLplayer = null),
          (this.$content = null),
          (this.$volumeHandler = null);
      }
      onCurrentTimeChange() {
        -1 !== this.props.currentTime && this.seek(this.props.currentTime);
      }
      created() {
        C++,
          (this.paused = null),
          (this.enabled = !0),
          this.classList.add("c-video-player"),
          (this.paused = !0),
          (this.muted = !1),
          (this.seeksliding = !1),
          (this.duration = 0),
          (this.currentTime = 0),
          (this.isFullScreen = !1),
          (this.progressTimer = null),
          (this.isFirstPlay = !0),
          (this.mouseMoveTimer = null),
          (this.isControlsHidden = !1),
          (this.onFullScrenChange = this.onFullScrenChange.bind(this)),
          (this.onPlayerReady = this.onPlayerReady.bind(this)),
          (this.onPlayerStateChange = this.onPlayerStateChange.bind(this)),
          (this.onPlayerError = this.onPlayerError.bind(this));
      }
      disable() {
        (this.enabled = !1),
          this.pause(),
          document.getElementById(this.props.uuid + "-video") &&
            (document.getElementById(this.props.uuid + "-video").style.display =
              "none");
      }
      enable() {
        (this.enabled = !0),
          this.props.autoplay && this.play(),
          document.getElementById(this.props.uuid + "-video") &&
            (document.getElementById(this.props.uuid + "-video").style.display =
              "block");
      }
      _onVolumeDown(e) {
        if (!this.props.controls) return !0;
        this.isPointerDown = !0;
        var t = r.support.touch
            ? e.touches[0].pageX || e.changedTouches[0].pageX
            : e.clientX,
          i = r.support.touch
            ? e.touches[0].pageY || e.changedTouches[0].pageY
            : e.clientY;
        this.track(t, i);
      }
      _onPointerMove(e) {
        if (
          (this.props.autoHideControls && this.toggleControls(),
          this.isPointerDown)
        ) {
          e && e.preventDefault();
          var t = r.support.touch
              ? e.touches[0].pageX || e.changedTouches[0].pageX
              : e.clientX,
            i = r.support.touch
              ? e.touches[0].pageY || e.changedTouches[0].pageY
              : e.clientY;
          this.track(t, i);
        }
      }
      _onPointerUp() {
        this.isPointerDown && (this.isPointerDown = !1);
      }
      track(e, t) {
        let i = e - this.volumeOffset.x;
        (i = Math.min(this.volumeHandlerWidth, Math.max(0, i))),
          (this.props.volume = i / this.volumeHandlerWidth),
          (this.HTMLplayer.volume = this.props.volume);
      }
      ready() {
        (this.$content = this.querySelector(".js-content")),
          (this.$volumeHandler = this.querySelector(".js-volume")),
          null !== this.props.src
            ? (_ && this.classList.add("is-support-fullscreen"),
              this._onSrcChange(),
              this.props.onReady(this))
            : this.props.onReady(this);
      }
      resize() {
        var e, t, i, s, o;
        if (
          (r.support.ipad && this.classList.add("is-ipad"),
          r.support.iphone && this.classList.add("is-iphone"),
          r.support.touch && this.classList.add("is-touch"),
          this.props.cover &&
            ((this._parentWidth = this.parentNode.clientWidth),
            (this._parentHeight = this.parentNode.clientHeight),
            (this._computedSize =
              ((e = 1280),
              (t = 720),
              (i = this._parentWidth),
              (s = this._parentHeight),
              (o = [i / e, s / t]),
              { width: e * (o = Math.max(o[0], o[1])), height: t * o })),
            (this._offsetX =
              0.5 * Math.round(this._parentWidth - this._computedSize.width)),
            (this._offsetY =
              0.5 * Math.round(this._parentHeight - this._computedSize.height)),
            (this.$content.style.width =
              Math.round(this._computedSize.width) + "px"),
            (this.$content.style.height =
              Math.round(this._computedSize.height) + "px"),
            (this._offsetX || this._offsetY) &&
              (this.$content.style[r.support.transform] =
                "translate(" +
                this._offsetX +
                "px, " +
                this._offsetY +
                "px) " +
                r.support.translateZ)),
          this.props.controls && null !== this.$volumeHandler)
        ) {
          (this.volumeHandlerWidth = this.$volumeHandler.clientWidth),
            (this.volumeHandlerHeight = this.$volumeHandler.clientHeight),
            (this.volumeHandlerHalfWidth = this.volumeHandlerWidth >> 1),
            (this.volumeHandlerHalfHeight = this.volumeHandlerHeight >> 1);
          this.getBoundingClientRect();
          (this.volumeOffset = this.volumeOffset || {}),
            (this.volumeOffset.x = 0),
            (this.volumeOffset.y = 0);
          let e = this.$volumeHandler;
          for (; e; )
            e.offsetLeft &&
              ((this.volumeOffset.x += e.offsetLeft),
              (this.volumeOffset.y += e.offsetTop)),
              (e = e.parentNode);
        }
      }
      _onSrcChange() {
        null !== this.props.src &&
          setTimeout(() => {
            (this.HTMLplayer = this.querySelector(".js-native-video")),
              this.createHTML5Player(),
              this.classList.add("is-native");
          }, 100);
      }
      onSliderSlide(e) {
        (this.seeksliding = !0), this.stopProgress();
      }
      onSliderStop(e) {
        (this.seeksliding = !1),
          this.seek(e * this.duration),
          this.startProgress();
      }
      getDashParams(e) {
        try {
          var t = e.querySelectorAll("BaseURL")[0].textContent.toString(),
            i = e.querySelectorAll("Representation"),
            r = i[0].getAttribute("mimeType"),
            s = i[0].getAttribute("codecs"),
            o = i[0].getAttribute("width"),
            n = i[0].getAttribute("height"),
            a = i[0].getAttribute("bandwidth"),
            h = e.querySelectorAll("Initialization")[0].getAttribute("range");
          e.querySelectorAll("SegmentURL"),
            e.querySelectorAll("Period")[0].getAttribute("duration"),
            e.querySelectorAll("SegmentList");
          return {
            file: t,
            type: r,
            codecs: s,
            width: o,
            height: n,
            bandwidth: a,
            range: h,
            segmentLength: 0,
            duration: 0,
          };
        } catch (e) {
          return void console.warn(e);
        }
      }
      setupDashVideo() {}
      _onDashVideoSourceUpdate() {}
      _dashGetStarted() {}
      initDashVideo() {
        var e = new XMLHttpRequest();
        if (this._dashParams.range || this._dashParams.file) {
          e.open("GET", this._dashParams.file),
            (this._dashSegCheck = (
              0.8 *
              ((t = this._dashParams.range),
              (i = this._dashParams.bandwidth),
              (r = t.split("-")),
              (8 * (r[1] - r[0])) / i)
            ).toFixed(3)),
            e.send(),
            (e.responseType = "arraybuffer");
          try {
            e.addEventListener(
              "readystatechange",
              () => {
                if (e.readyState == e.DONE)
                  try {
                    this._dashVideoSource.appendBuffer(
                      new Uint8Array(e.response)
                    ),
                      (this._onDashVideoSourceUpdate =
                        this._onDashVideoSourceUpdate.bind(this)),
                      this._dashVideoSource.addEventListener(
                        "update",
                        this._onDashVideoSourceUpdate,
                        !1
                      );
                  } catch (e) {}
              },
              !1
            );
          } catch (e) {
            console.warn(e);
          }
          var t, i, r;
        } else
          console.warn(
            'cannot init dash video because no "range" or "file" was found in dashParams'
          );
      }
      clearDashVars() {}
      createHTML5Player() {
        if (/\.mpd$/g.test(this.props.src)) {
          console.warn(
            "Dash MPEG4 detected " + this.props.src,
            this._dashPlayer
          );
          let t = this.props.src;
          if ("" !== t) {
            var e = new XMLHttpRequest();
            e.open("GET", t, !0),
              (e.responseType = "text"),
              e.send(),
              (e.onreadystatechange = () => {
                if (e.readyState == e.DONE) {
                  var t = e.response,
                    i = new DOMParser().parseFromString(t, "text/xml", 0);
                  (this._dashParams = this.getDashParams(i)),
                    (this._dashParams.file =
                      this.props.src.replace(/[^/]*\.mpd$/g, "") +
                      this._dashParams.file),
                    this.setupDashVideo(),
                    this.clearDashVars();
                }
              }),
              e.addEventListener(
                "error",
                function (e) {
                  log("Error: " + e + " Could not load url.");
                },
                !1
              );
          }
        } else
          (this.props.currentSrc = this.props.src),
            this.HTMLplayer &&
              (this.HTMLplayer.removeEventListener(
                "loadedmetadata",
                this.onPlayerReady,
                !1
              ),
              this.HTMLplayer.removeEventListener(
                "play",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.removeEventListener(
                "pause",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.removeEventListener(
                "ended",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.removeEventListener(
                "progress",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.removeEventListener(
                "error",
                this.onPlayerError,
                !1
              ),
              this.HTMLplayer.addEventListener(
                "loadedmetadata",
                this.onPlayerReady,
                !1
              ),
              this.HTMLplayer.addEventListener(
                "play",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.addEventListener(
                "pause",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.addEventListener(
                "ended",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.addEventListener(
                "progress",
                this.onPlayerStateChange,
                !1
              ),
              this.HTMLplayer.addEventListener(
                "error",
                this.onPlayerError,
                !1
              ));
      }
      onPlayerReady() {
        this.classList.add("is-ready"), (this.duration = this.getDuration());
        let e = (this.duration / 60) >> 0,
          t = (this.duration - 60 * e) >> 0;
        t < 10 && (t = "0" + t),
          (this.props.formatedDuration = e + "'" + t),
          this.addListenners(),
          this.fire("ready"),
          (r.support.touch && r.support.smallscreen) ||
            r.support.ipad ||
            (this.props.autoplay &&
              !1 !== this.paused &&
              this.enabled &&
              this.play(),
            this.props.preload && ((this._isPreload = !0), this.play()));
      }
      onPlayerError(e) {
        if (void 0 !== e.target.error) {
          switch (e.target.error.code) {
            case e.target.error.MEDIA_ERR_ABORTED:
              console.warn("You aborted the video playback.");
              break;
            case e.target.error.MEDIA_ERR_NETWORK:
              console.warn(
                "A network error caused the video download to fail part-way."
              );
              break;
            case e.target.error.MEDIA_ERR_DECODE:
              console.warn(
                "The video playback was aborted due to a corruption problem or because the video used features your browser did not support."
              );
              break;
            case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
              console.warn(
                "The video could not be loaded, either because the server or network failed or because the format is not supported."
              );
              break;
            default:
              console.warn("An unknown error occurred.");
          }
          this.fire("error");
        }
      }
      onPlayerStateChange(e) {
        this.ischangingQuality
          ? this.classList.add("is-loading")
          : (1 == this.props.mute && this.mute(),
            ("ended" != e.type && 0 != e.data) || this.onPlayerEnded(),
            ("play" != e.type && 1 != e.data) || this.onPlayerPlay(),
            ("pause" != e.type && 2 != e.data) || this.onPlayerPause(),
            "progress" == e.type && this.onPlayerBuffer());
      }
      onPlayerBuffer() {
        this.fire("buffer"), this.classList.add("is-loading");
      }
      addListenners() {
        this.props.controls &&
          r.EventDispatcher.on("key:escape", this.cancelFullScreen, this);
      }
      toggleControls() {
        clearTimeout(this.mouseMoveTimer),
          this.isControlsHidden &&
            ((this.isControlsHidden = !1),
            this.classList.remove("is-no-controls")),
          (this.mouseMoveTimer = setTimeout(() => {
            (this.isControlsHidden = !0), this.classList.add("is-no-controls");
          }, 2e3));
      }
      toggleSound(e) {
        this.muted ? this.unmute() : this.mute();
      }
      onPlayerPlay(e) {
        (this.duration = this.getDuration()),
          this.classList.add("is-playing"),
          this.classList.remove("is-paused"),
          (this._loadingTimer = setTimeout(() => {
            this.classList.remove("is-loading");
          }, 0)),
          (this.props.isPlaying = !0),
          (this.paused = !1),
          this.startProgress(),
          this.props.controls && this.toggleControls(),
          this.isFirstPlay &&
            ((this.isFirstPlay = !1), (this.duration = this.getDuration())),
          this.classList.add("has-started"),
          this.props.onStart(this),
          this._isPreload &&
            !this.props.autoplay &&
            ((this._isPreload = !1), this.pause()),
          this.fire("play");
      }
      onPlayerPause() {
        this.classList.remove("is-playing"),
          this.classList.add("is-paused"),
          (this.paused = !0),
          (this.props.isPlaying = !1),
          this.stopProgress(),
          this.fire("pause"),
          clearTimeout(this.mouseMoveTimer),
          this.isControlsHidden &&
            ((this.isControlsHidden = !1),
            this.classList.remove("is-no-controls"));
      }
      onPlayerEnded() {
        this.fire("ended"),
          this.props.onEnded(this),
          setTimeout(() => {
            this.onPlayerPause();
          }, 40);
      }
      togglePlay() {
        this[this.paused ? "play" : "pause"]();
      }
      toggleFullScreen() {
        this.isFullScreen ? this.cancelFullScreen() : this.requestFullScreen();
      }
      requestFullScreen() {
        (this.isFullScreen = !0),
          (this.isPausedBeforeFullScreen = this.paused),
          this.pause(),
          this.classList.add("is-fullscreen"),
          r.EventDispatcher.fire("video:enterfullscreen");
        for (var e = this; e.parentNode && e.parentNode.getAttribute; )
          e.parentNode.classList.add("is-branch"), (e = e.parentNode);
        _
          ? (document.addEventListener(b, this.onFullScrenChange), this[_]())
          : setTimeout(() => {
              1 == this.isPausedBeforeFullScreen ? this.pause() : this.play();
            }, 0),
          document
            .getElementsByTagName("body")[0]
            .classList.add("is-fullscreen");
      }
      onFullScrenChange() {
        document[S] ||
          (document.removeEventListener(b, this.onFullScrenChange),
          this.isFullScreen && this.cancelFullScreen()),
          1 == this.isPausedBeforeFullScreen ? this.pause() : this.play();
      }
      cancelFullScreen() {
        (this.isFullScreen = !1),
          (this.isPausedBeforeFullScreen = this.paused),
          this.pause(),
          this.classList.remove("is-fullscreen");
        for (var e = this; e.parentNode && e.parentNode.getAttribute; )
          e.parentNode.classList.remove("is-branch"), (e = e.parentNode);
        x
          ? document[x]()
          : setTimeout(() => {
              1 == this.isPausedBeforeFullScreen ? this.pause() : this.play();
            }, 0),
          document
            .getElementsByTagName("body")[0]
            .classList.remove("is-fullscreen"),
          r.EventDispatcher.fire("video:leavefullscreen");
      }
      play() {
        void 0 !== this._dashPlayer
          ? this._dashPlayer.play()
          : this.HTMLplayer && this.HTMLplayer.play();
      }
      pause() {
        this.paused ||
          (void 0 !== this._dashPlayer
            ? this._dashPlayer.pause()
            : this.HTMLplayer &&
              (this.stopProgress(), this.HTMLplayer.pause()));
      }
      onActiveChange() {
        this.props.active
          ? (this.seek(0, !1), this.play())
          : (this.pause(), this.seek(0));
      }
      onForceStop() {
        this.props.forceStop &&
          (this.seek(0, !0),
          setTimeout(() => {
            this.pause();
          }, 4));
      }
      onSeekChange() {
        this.seek(this.props.seekTo);
      }
      changePoster(e) {
        this.props.poster = e;
      }
      unmute() {
        this.HTMLplayer &&
          ((this.HTMLplayer.muted = !1),
          (this.muted = !1),
          this.classList.remove("is-muted"));
      }
      mute() {
        this.HTMLplayer &&
          ((this.HTMLplayer.muted = !0),
          (this.muted = !0),
          this.classList.add("is-muted"));
      }
      seek(e, t) {
        void 0 !== this._dashPlayer
          ? this._dashPlayer.seek(e)
          : this.HTMLplayer && (this.HTMLplayer.currentTime = e);
      }
      startProgress() {
        clearTimeout(this.progressTimer), this.updateTime();
      }
      stopProgress() {
        clearTimeout(this.progressTimer), (this.progressTimer = null);
      }
      updateTime(e, t) {
        this.currentTime = this.getCurrentTime();
        let i = ((this.duration - this.currentTime) / 60) >> 0,
          r = (this.duration - this.currentTime - 60 * i) >> 0;
        r < 10 && (r = "0" + r),
          (this.props.currentTime = i + "'" + r),
          this.props.controls &&
            (this.props.timelineValue = this.currentTime / this.duration),
          (this.progressTimer = setTimeout(() => {
            this.updateTime();
          }, 100)),
          this.props.loop &&
            this.currentTime >= this.duration - 0.5 &&
            this.seek(0),
          this.props.onTimeupdate(this, this.currentTime);
      }
      setTimeCount() {
        this.formatTime(1e3 * this.currentTime),
          this.formatTime(1e3 * this.duration);
      }
      formatTime(e) {
        var t = (e / 1e3 / 60) << 0,
          i = (e / 1e3) % 60 << 0,
          r = "";
        return (
          (r += t < 10 ? "0" : ""),
          (r += t + ":"),
          (r += i < 10 ? "0" : ""),
          (r += i)
        );
      }
      getCurrentTime() {
        return this.HTMLplayer.currentTime;
      }
      getDuration() {
        return this.HTMLplayer.duration;
      }
      destroy() {
        r.EventDispatcher.off("key:escape", this.cancelFullScreen, this);
      }
    }
    Object(r.register)("core-video", z);
    class E extends r.Component {
      get defaultProps() {
        return {
          delay: { type: "f", value: 0 },
          lines: { type: "arr", value: [] },
          minRatio: { type: "f", value: 0 },
          direction: { type: "i", value: 1 },
          useRatio: { type: "bool", value: !0 },
          useMask: { type: "bool", value: !1 },
          debug: { type: "bool", value: !1 },
          wordClass: "",
        };
      }
      get template() {
        return i(43);
      }
      created() {
        (this._lastWinWidth = 0), (this._winWidth = window.innerWidth);
      }
      ready() {
        (this._lines = []),
          (this._words = []),
          (this.$placeholder = this.querySelector(".js-placeholder")),
          (this.originalContent = this.querySelector(
            ".js-content"
          ).innerText.replace("-", "&#8209;")),
          (this._words = []),
          (this.originalContent = this.originalContent.replace(
            /\<\s?br\s?\/\>/g,
            " br "
          )),
          (this.originalContent = this.originalContent.replace(
            /(\n|\r)/g,
            " br "
          ));
        let e = this.originalContent.replace(/\s+/g, " ").split(" ");
        for (let t = 0; t < e.length; t++) {
          let i = document.createElement("span");
          if (/\*/g.test(e[t])) {
            let r = document.createElement("span");
            (r.innerHTML = e[t].replace(/\*/g, "")),
              r.classList.add("u-underline"),
              i.appendChild(r);
          } else if ("br" === e[t]) {
            let e = document.createElement("br");
            i.appendChild(e);
          } else i.innerHTML = e[t];
          if (
            (i.classList.add(this.props.wordClass),
            this._words.push(i),
            t < e.length - 1)
          ) {
            let e = document.createElement("span");
            (e.innerHTML = " "), this._words.push(e);
          }
        }
        setTimeout(() => {
          this.resize(!0);
        }, 1e3);
      }
      resize(e) {
        (this._winWidth = window.innerWidth),
          (this._isMobile = this._winWidth < 768);
        let t = [];
        if (
          e ||
          (this._isMobile && this._winWidth !== this._lastWinWidth) ||
          !this._isMobile
        ) {
          (this._lastWinWidth = this._winWidth), (this._words = []);
          let e = this.originalContent
            .replace(/(\n|\r)/g, " ")
            .replace(/\s+/g, " ")
            .split(" ");
          for (let t = 0; t < e.length; t++) {
            let i = document.createElement("span");
            if (/\*/g.test(e[t])) {
              let r = document.createElement("span");
              (r.innerHTML = e[t].replace(/\*/g, "")),
                r.classList.add("u-underline"),
                i.appendChild(r);
            } else if ("br" === e[t]) {
              let e = document.createElement("br");
              i.appendChild(e);
            } else i.innerHTML = e[t];
            if ((this._words.push(i), t < e.length - 1)) {
              let e = document.createElement("span");
              (e.innerHTML = " "), this._words.push(e);
            }
          }
          this.$placeholder.innerHTML = "";
          let r = 0,
            s = "";
          var i = document.createDocumentFragment();
          for (let e = 0; e < this._words.length; e++)
            i.appendChild(this._words[e]);
          this.$placeholder.appendChild(i);
          for (let e = 0; e < this._words.length; e++) {
            let i = this._words[e].getBoundingClientRect().top;
            0 == r && (r = i),
              i > r &&
                ("" !== s && " " !== s && "&nbsp;" !== s && t.push(s),
                (s = "")),
              (s += this._words[e].innerHTML),
              (r = i);
          }
          "" !== s && " " !== s && "&nbsp;" !== s && t.push(s),
            this.props.lines.splice(0, this.props.lines.length),
            Array.prototype.push.apply(this.props.lines, t);
        }
      }
    }
    Object(r.register)("app-multiline", E);
    class k extends r.Component {
      get events() {
        return {
          "pointerenter .js-slideshow-content": "_onPointerEnter",
          "pointerleave .js-slideshow-content": "_onPointerLeave",
        };
      }
      get template() {
        return i(44);
      }
      get defaultProps() {
        return {
          autoplay: { type: "bool", value: !1 },
          active: { type: "bool", value: !1 },
          currentIndex: {
            type: "int",
            value: 0,
            change: "_onCurrentIndexChange",
          },
          currentProgIndex: { type: "f", value: 0 },
          items: { type: "array", value: [] },
          controls: { type: "bool", value: !0 },
          useBackArrow: { type: "bool", value: !0 },
          loop: { type: "bool", value: !0 },
          bulletNav: { type: "bool", value: !1 },
          delay: { type: "f", value: 2e3 },
          debug: { type: "bool", value: !1 },
          force: { type: "bool", value: !1 },
          forceTheme: "dark",
          bulletNavClass: "u-inline-block u-relative u-valign-middle",
          slides: { type: "arr", value: [] },
          cursor: { type: "arr", value: [0, 0] },
          isPointerDown: { type: "bool", value: !1 },
          isTouch: { type: "bool", value: r.support.touch },
          prevent: { type: "bool", value: !1 },
          direction: { type: "f", value: 1 },
          cursorDirection: { type: "f", value: 1 },
          isPointerHover: { type: "bool", value: !1 },
          onCurrentIndexChange: { type: "fn", value: () => {} },
          hasTouch: { type: "bool", value: r.support.touch },
        };
      }
      _onPointerEnter() {
        this.props.isPointerHover = !0;
      }
      _onPointerLeave() {
        this.props.isPointerHover = !1;
      }
      _onBulletDown(e) {
        this.props.currentIndex = e;
      }
      created() {
        (this._items = []),
          (this._isPointerDown = !1),
          (this._oldIndex = 0),
          (this._direction = 1),
          (this._pointer = [0, 0]),
          (this._cursor = [0, 0]),
          (this._acc = 0),
          (this._onPointerMove = this._onPointerMove.bind(this)),
          (this._onPointerUp = this._onPointerUp.bind(this)),
          (this._canChange = !0);
      }
      attached() {
        (this._lastTime = Date.now()), (this._timeProgress = 0);
      }
      detached() {
        this.removeEventListener(
          r.support.pointerdown,
          this._onPointerDown,
          !1
        ),
          document.removeEventListener(
            r.support.pointermove,
            this._onPointerMove,
            !1
          ),
          document.removeEventListener(
            r.support.pointerup,
            this._onPointerUp,
            !1
          );
      }
      ready() {
        this.addEventListener(r.support.pointerdown, this._onPointerDown, !1),
          document.addEventListener(
            r.support.pointermove,
            this._onPointerMove,
            !1
          ),
          document.addEventListener(r.support.pointerup, this._onPointerUp, !1);
      }
      _onPointerDown(e) {
        this._canChange &&
          (1 == this.props.cursorDirection ? this._next() : this._prev());
      }
      _onPointerMove(e) {
        let t = r.support.touch ? e.touches[0] || e.changedTouches[0] : e,
          i = t.pageX,
          s = t.pageY;
        (i -= window.pageXOffset || document.documentElement.scrollLeft),
          (s -= window.pageYOffset || document.documentElement.scrollTop);
        window.pageYOffset || document.documentElement.scrollTop;
        (this._cursor[0] = i - this._left),
          (this._cursor[1] = s - this._top),
          (this.props.cursorDirection =
            this._cursor[0] < this._width / 2 ? -1 : 1);
      }
      _onPointerUp(e) {}
      resize() {
        (this._width = this.clientWidth), (this._height = this.clientHeight);
        let e = v(this, document);
        (this._left = e.left), (this._top = window.innerWidth < 700 ? 30 : 90);
      }
      update() {
        this.props.autoplay &&
          ((this._timeProgress += Date.now() - this._lastTime),
          (this._lastTime = Date.now()),
          this._timeProgress > this.props.delay && this._next()),
          this.props.bulletNav &&
            (this.props.currentProgIndex =
              this.props.currentIndex + this._timeProgress / this.props.delay),
          (this.props.cursor[0] +=
            0.5 * (this._cursor[0] - this.props.cursor[0])),
          (this.props.cursor[1] +=
            0.5 * (this._cursor[1] - this.props.cursor[1])),
          (this.props.hasTouch = r.support.touch);
      }
      _next() {
        this._canChange &&
          ((this._timeProgress = 0),
          this.props.currentIndex++,
          this.props.currentIndex > this._items.length - 1 &&
            (this.props.currentIndex = this.props.loop
              ? 0
              : this._items.length - 1));
      }
      _prev() {
        this._canChange &&
          ((this._timeProgress = 0),
          this.props.currentIndex--,
          this.props.currentIndex < 0 &&
            (this.props.currentIndex = this.props.loop
              ? this._items.length - 1
              : 0));
      }
      _onCurrentIndexChange() {
        if (
          ((this._canChange = !1),
          setTimeout(() => {
            this._canChange = !0;
          }, 700),
          this._items)
        ) {
          this.props.onCurrentIndexChange(
            this.props.currentIndex,
            this._oldIndex
          ),
            (this._direction =
              this._oldIndex < this.props.currentIndex ? 1 : -1),
            this._oldIndex == this._items.length - 1 &&
              0 == this.props.currentIndex &&
              (this._direction = 1),
            0 == this._oldIndex &&
              this.props.currentIndex == this._items.length - 1 &&
              (this._direction = -1);
          for (let e = 0, t = this._items.length; e < t; e++)
            (this._items[e].props.oldIndex = this._oldIndex),
              (this._items[e].props.currentIndex = this.props.currentIndex),
              (this._items[e].props.direction = this._direction);
          this._oldIndex = this.props.currentIndex;
        }
      }
      addItem(e, t, i) {
        (e.props.currentIndex = this.props.currentIndex),
          t
            ? ((this._items[t] = e),
              this.props.slides.splice(t, 0, {
                title: i || e.getAttribute("data-title") || "",
              }))
            : ((e.props.index = this._items.length),
              this._items.push(e),
              this.props.slides.push({
                title: i || e.getAttribute("data-title") || "",
              }));
      }
      removeItem(e, t) {
        this._items.splice(t, 1), this.props.slides.splice(t, 1);
        for (let e = 0, t = this._items.length; e < t; e++)
          this._items[e].props.index = e;
      }
    }
    Object(r.register)("app-slideshow", k);
    class M extends r.Component {
      get defaultProps() {
        return {
          index: { type: "int", value: 0 },
          currentIndex: { type: "int", value: 0, change: "_focusSlide" },
          oldIndex: { type: "int", value: -1 },
          direction: { type: "int", value: 1 },
          invert: { type: "bool", value: !1 },
          title: "",
          debug: { type: "bool", value: !1 },
        };
      }
      ready() {
        for (this.$parent = this.parentNode; this.$parent; ) {
          if ("APP-SLIDESHOW" == this.$parent.tagName) {
            this.$parent.addItem(this, this.props.index, this.props.title);
            break;
          }
          this.$parent = this.$parent.parentNode;
        }
        this._focusSlide();
      }
      detached() {
        this.$parent && this.$parent.removeItem(this, this.props.index);
      }
      _focusSlide() {
        this.classList.add("has-no-transition"),
          clearTimeout(this._timer),
          (this._timer = setTimeout(() => {
            this.props.index == this.props.oldIndex
              ? (this.classList.remove("is-next", "is-prev"),
                this.classList.add("is-active"),
                setTimeout(() => {
                  this.classList.remove("has-no-transition"),
                    this.classList.remove("is-active"),
                    this.classList.add(
                      1 == this.props.direction || this.props.invert
                        ? "is-prev"
                        : "is-next"
                    ),
                    (this._timer = setTimeout(() => {
                      (this.style.visibility = "hidden"),
                        this.classList.add("has-no-transition");
                    }, 1200));
                }, 100))
              : this.props.index == this.props.currentIndex
              ? ((this.style.visibility = "visible"),
                this.classList.remove("is-active", "is-next", "is-prev"),
                this.classList.add(
                  1 == this.props.direction || this.props.invert
                    ? "is-next"
                    : "is-prev"
                ),
                setTimeout(() => {
                  this.classList.remove("has-no-transition"),
                    this.classList.add("is-active"),
                    this.classList.remove("is-next", "is-prev"),
                    (this._timer = setTimeout(() => {
                      this.classList.add("has-no-transition");
                    }, 1200));
                }, 100))
              : (this.classList.remove("is-active", "is-next", "is-prev"),
                (this.style.visibility = "hidden"),
                this.classList.add("has-no-transition"));
          }, 50));
      }
    }
    Object(r.register)("app-slide", M);
    class A extends r.Component {
      get defaultProps() {
        return {
          marginLeft: { type: "float", value: 0 },
          marginTop: { type: "float", value: 0 },
          radius: { type: "float", value: 100 },
          active: { type: "bool", value: !0 },
          iconName: "",
        };
      }
      created() {
        (this._vect = [0, 0]),
          (this._vectLength = 0),
          (this._pointerX = 0),
          (this._pointerY = 0),
          (this._x = 0),
          (this._y = 0),
          (this._progress = 0),
          (this._offset = [0, 0]),
          this.bindMethods(["_onPointerMove"]);
      }
      ready() {
        (this._radiusSqrtSmall = this.props.radius * this.props.radius),
          (this._radiusSqrtLarge = 4 * this._radiusSqrtSmall),
          (this._radiusSqrt = this._radiusSqrtSmall),
          (this.$triggerParallax = this.querySelectorAll(
            ".js-trigger-parallax"
          )),
          (this.triggerParallaxRatio = []);
        for (let e = 0; e < this.$triggerParallax.length; e++)
          this.triggerParallaxRatio[e] = Number(
            this.$triggerParallax[e].getAttribute("ratio")
          );
      }
      detached() {
        document.removeEventListener(
          r.support.pointermove,
          this._onPointerMove,
          !1
        );
      }
      attached() {
        r.support.touch ||
          document.addEventListener(
            r.support.pointermove,
            this._onPointerMove,
            !1
          );
      }
      resize() {
        let e = v(this);
        (this._offset[0] = e.left + this.clientWidth / 2),
          (this._offset[1] = e.top + this.clientHeight / 2),
          this.setAttribute(
            "offset",
            "[" + this._offset[0] + "," + this._offset[1] + "]"
          );
      }
      _onPointerMove(e) {
        (this._touchEvent = r.support.touch
          ? e.touches[0] || e.changedTouches[0]
          : e),
          (this._pointerX = this._touchEvent.pageX),
          (this._pointerY = this._touchEvent.pageY),
          (this._pointerY -=
            window.pageYOffset || document.documentElement.scrollTop);
      }
      update() {
        if (this.props.active) {
          if (
            ((this._vect[0] = this._offset[0] - this._pointerX),
            (this._vect[1] = this._offset[1] - this._pointerY),
            (this._vectLength =
              this._vect[0] * this._vect[0] + this._vect[1] * this._vect[1]),
            this._vectLength < this._radiusSqrt && !r.support.touch)
          ) {
            (this._isActive = !0),
              this.classList.add("is-focused"),
              (this._radiusSqrt = this._radiusSqrtLarge),
              (this._x +=
                0.25 *
                (this._pointerX -
                  this._x -
                  this._offset[0] +
                  this.props.marginLeft)),
              (this._y +=
                0.25 *
                (this._pointerY -
                  this._y -
                  this._offset[1] +
                  this.props.marginTop)),
              (this._progress += 0.3 * (1 - this._progress));
            this._vectLength, this._radiusSqrt;
          } else
            (this._x += 0.2 * (0 - this._x)),
              (this._y += 0.2 * (0 - this._y)),
              (this._progress += 0.3 * (0 - this._progress)),
              this._isActive &&
                ((this._isActive = !1),
                r.EventDispatcher.fire("cursor:unfocus"),
                this.classList.remove("is-focused"),
                (this._radiusSqrt = this._radiusSqrtSmall));
          (this._x = Math.round(1e3 * this._x) / 1e3),
            (this._y = Math.round(1e3 * this._y) / 1e3);
          for (let e = 0; e < this.$triggerParallax.length; e++)
            this.$triggerParallax[e].style[r.support.transform] =
              "translate(" +
              this._x * this.triggerParallaxRatio[e] +
              "px, " +
              this._y * this.triggerParallaxRatio[e] +
              "px)" +
              r.support.translateZ;
        }
      }
    }
    Object(r.register)("app-trigger", A);
    class L extends r.Component {
      get defaultProps() {
        return {
          globalContent: { type: "obj", value: {} },
          linePosition: { type: "f", value: 0 },
          lineScale: { type: "f", value: 0 },
          linePosition2: { type: "f", value: 0 },
          lineScale2: { type: "f", value: 0 },
          active: { type: "bool", value: !0 },
          pageComponentId: {
            type: "string",
            value: "",
            change: "onPageChange",
          },
        };
      }
      onPageChange() {
        if (!this.props.globalContent || !this.props.globalContent.header)
          return;
        let e = this.props.pageComponentId;
        for (let t = 0; t < this.props.globalContent.header.links.length; t++)
          if (this.props.globalContent.header.links[t].pageComponentId == e) {
            this._currentIndex = t;
            break;
          }
      }
      _onLinkDown(e) {
        this._currentIndex = e.currentTarget.getAttribute("data-index") >> 0;
      }
      get template() {
        return i(45);
      }
      get events() {
        return {
          "pointerenter .js-link": "_onLinkEnter",
          "pointerenter .js-content": "_onPointerEnter",
          "pointerleave .js-content": "_onPointerLeave",
        };
      }
      _onLinkEnter(e) {
        this._hoverIndex = Number(e.currentTarget.getAttribute("data-index"));
      }
      _onPointerEnter() {
        (this._isHoverHeader = !0), this.resize();
      }
      _onPointerLeave() {
        (this._isHoverHeader = !1), (this._hoverIndex = this._currentIndex);
      }
      created() {
        (this._currentIndex = 0),
          (this._hoverIndex = 0),
          (this._isHoverHeader = !1);
      }
      ready() {
        (this._links = []),
          setTimeout(() => {
            this._$links = this.querySelectorAll(".js-link");
            for (let e = 0; e < this._$links.length; e++)
              this._links.push({ position: 0, width: 0 });
            this.resize();
          }, 500);
      }
      resize() {
        for (let e = 0; e < this._links.length; e++)
          (this._links[e].position = v(this._$links[e])),
            (this._links[e].width = this._$links[e].clientWidth);
      }
      update() {
        let e = this._currentIndex;
        this._isHoverHeader && (e = this._hoverIndex),
          this._links[e] &&
            ((this.props.linePosition +=
              0.2 * (this._links[e].position.left - this.props.linePosition)),
            (this.props.lineScale +=
              0.2 * (this._links[e].width / 100 - this.props.lineScale)),
            (this.props.linePosition2 +=
              0.12 * (this._links[e].position.left - this.props.linePosition2)),
            (this.props.lineScale2 +=
              0.12 * (this._links[e].width / 100 - this.props.lineScale2)));
      }
    }
    Object(r.register)("app-header", L, "header");
    var O = i(2),
      D = i(14),
      N = i.n(D),
      R = i(15),
      F = i.n(R);
    class I extends r.Component {
      get template() {
        return i(46);
      }
      get defaultProps() {
        return {
          height: { type: "int", value: window.innerHeight },
          width: { type: "int", value: window.innerWidth },
          position: { type: "arr", value: [0, 0] },
          scale: { type: "arr", value: [0, 0] },
          isFrameActive: { type: "bool", value: !0 },
        };
      }
      created() {
        (this._scroll = 0),
          (this._clearColor = [238 / 255, 238 / 255, 238 / 255]),
          (this._currClearColor = [238 / 255, 238 / 255, 238 / 255]),
          (this._frameSize = 90);
      }
      _onScroll(e) {}
      _onClearColorChange(e, t, i) {
        (this._clearColor[0] = e),
          (this._clearColor[1] = t),
          (this._clearColor[2] = i);
      }
      _onShowFrame() {
        (this._frameSize = 90), (this.props.isFrameActive = !0);
      }
      _onHideFrame() {
        (this._frameSize = 30), (this.props.isFrameActive = !1);
      }
      ready() {
        (this.$scene = this.querySelector(".js-scene")),
          r.EventDispatcher.on("background:scroll", this._onScroll, this),
          r.EventDispatcher.on(
            "background:clearcolor",
            this._onClearColorChange,
            this
          ),
          r.EventDispatcher.on("showframe", this._onShowFrame, this),
          r.EventDispatcher.on("hideframe", this._onHideFrame, this),
          (this._renderer = new y.i({ alpha: !0 })),
          (this._scene = new y.b()),
          (this._maskScene = new y.b()),
          (this._camera = new y.a({
            fov: 45,
            aspect: window.innerWidth / window.innerHeight,
            near: 1,
            far: 1e4,
            left: -window.innerWidth / 2,
            right: window.innerWidth / 2,
            top: window.innerHeight / 2,
            bottom: -window.innerHeight / 2,
            type: "ortho",
            orbitControl: !1,
          })),
          (this._camera.lookAt = y.l.create()),
          y.l.set(this._camera.lookAt, 0, 0, 0),
          (this._camera.position[2] = 1e3),
          this._renderer.setPixelRatio(1),
          this.$scene.appendChild(this._renderer.canvas);
        let e = new y.f();
        e.geometry = new y.g(this._renderer.gl, { width: 1440, height: 900 });
        let t = y.j.fromUrl(
          this._renderer.gl,
          "./assets/images/pattern-256x256.png"
        );
        (e.material = new y.e(this._renderer.gl, {
          uniforms: {
            margin: 45,
            aColor: this._currClearColor,
            tInput: t,
            resolution: [1 * window.innerWidth, 1 * window.innerHeight],
          },
          vertexShader: N.a,
          fragmentShader: F.a,
          blend: !0,
          defines: { USE_MASK_TOP: !0, USE_MASK_BOTTOM: !0 },
          depthTest: !1,
        })),
          (e.position[2] = -305),
          this._scene.add(e),
          (this.bg = e),
          setTimeout(() => {
            this._prevent = !0;
          }, 2e3);
      }
      detached() {}
      resize() {
        (this.props.width = window.innerWidth),
          (this.props.height = window.innerHeight),
          (this._parentWidth = this.props.width),
          (this._parentHeight = this.props.height),
          (this._computedSize = Object(O.a)(
            1440,
            900,
            this._parentWidth,
            this._parentHeight,
            !1
          )),
          (this._scene.scale[0] =
            this._scene.scale[1] =
            this._scene.scale[2] =
              this._computedSize.height / 900),
          this._renderer.resize(window.innerWidth, window.innerHeight),
          (this._camera.position[2] = 450 / Math.tan((45 * Math.PI) / 180)),
          (this._camera.left = -window.innerWidth / 2),
          (this._camera.right = window.innerWidth / 2),
          (this._camera.top = window.innerHeight / 2),
          (this._camera.bottom = -window.innerHeight / 2),
          this._camera.updateProjectionMatrix();
      }
      update() {
        this._prevent ||
          ((this.bg.position[1] += 0.1 * (this._scroll - this.bg.position[1])),
          (this.bg.quaternion = this._camera._quaternion),
          (this._currClearColor[0] +=
            0.1 * (this._clearColor[0] - this._currClearColor[0])),
          (this._currClearColor[1] +=
            0.1 * (this._clearColor[1] - this._currClearColor[1])),
          (this._currClearColor[2] +=
            0.1 * (this._clearColor[2] - this._currClearColor[2])),
          this._renderer.clearColor(1, 1, 1, 0),
          this._renderer.clear(),
          this._renderer.render(this._scene, this._camera));
      }
    }
    Object(r.register)("app-background", I);
    class U extends r.Component {
      get events() {
        return {};
      }
      get template() {
        return i(55);
      }
      get defaultProps() {
        return {
          overlayClass: "is-active has-no-transition",
          winHeight: { type: "int", value: 0 },
          winWidth: { type: "int", value: 0 },
          wsRoot: "",
          cdnRoot: "",
          lang: { type: "string", value: "en" },
          pageComponentId: null,
          pageDataUrl: null,
          pageContent: { type: "json", value: null },
          globalDataUrl: null,
          globalContent: { type: "json", value: null },
          baseUrl: "",
          routeOptions: { type: "json", value: { hashbang: !1, click: !0 } },
          routes: { "/": {}, "/404": {}, "/:page/*": {}, "/:page": {} },
          wsExtension: "/",
          isNavActive: { type: "bool", value: !0 },
          scrollTop: { type: "f", value: 0 },
          showMenu: { type: "bool", value: !1 },
          showCredits: { type: "bool", value: !1 },
          showVideo: { type: "bool", value: !1 },
          isReady: { type: "bool", value: !1 },
        };
      }
      _showVideo() {
        this.props.showVideo = !0;
      }
      _hideVideo() {
        this.props.showVideo = !1;
      }
      created() {
        (this._oldLocation = null),
          (this._scrollTop = 0),
          (this._onScroll = this._onScroll.bind(this)),
          (this._formScrollTop = 0);
      }
      attached() {
        document.addEventListener("scroll", this._onScroll, !1),
          this._onScroll(),
          s.a.touch
            ? document
                .getElementsByTagName("html")[0]
                .classList.add("has-touch")
            : document
                .getElementsByTagName("html")[0]
                .classList.add("has-not-touch");
      }
      _onScroll() {
        this._lastScroll > this.props.scrollTop && (this.props.direction = -1),
          this._lastScroll < this.props.scrollTop && (this.props.direction = 1),
          (this._lastScroll = this.props.scrollTop),
          (this._scrollTop =
            window.pageYOffset || document.documentElement.scrollTop);
      }
      ready() {
        (this.props.globalDataUrl =
          this.props.wsRoot.replace("{lang}", this.props.lang) +
          "global" +
          this.props.wsExtension),
          (this.onKeyDown = this.onKeyDown.bind(this)),
          document.addEventListener("keydown", this.onKeyDown, !1),
          r.EventDispatcher.on("showframe", this._showFrame, this),
          r.EventDispatcher.on("hideframe", this._hideFrame, this),
          r.EventDispatcher.on("video:show", this._showVideo, this),
          r.EventDispatcher.on("video:hide", this._hideVideo, this),
          (this.props.isNavActive = !0);
      }
      _onContentChange(e) {
        this.querySelector(".js-fake-scroll").style.height = e + "px";
      }
      _showFrame() {
        this.props.isNavActive = !0;
      }
      _hideFrame() {
        this.props.isNavActive = !1;
      }
      onKeyDown(e) {
        72 == e.which && (this.props.showGuides = !this.props.showGuides);
      }
      update() {
        this.props.scrollTop +=
          (this._scrollTop - this.props.scrollTop) *
          (this.props.isMobile ? 1 : 0.1);
      }
      resize() {
        (this.props.winHeight = window.innerHeight),
          (this.props.winWidth = window.innerWidth),
          (this.props.isMobile = window.innerWidth < 768),
          (this.props.isLarge =
            window.innerWidth > 700 &&
            (window.innerWidth >= 1920 || window.devicePixelRatio > 1)),
          (this.props.width = window.innerWidth),
          (this.props.height = window.innerHeight);
      }
      onRouteChange(e, t) {
        if ((console.log("N ROUTE CHNAGE"), void 0 === e.params.page)) {
          let t = "home";
          (e.params.page = t),
            (e.completePath = "/" + t + "/"),
            (e.path = "/" + t + "/");
        }
        if (e.path == t.path)
          return (this.props.showMenu = !1), void (this.props.showCredits = !1);
        this._loadPage(e);
      }
      _loadPage(e) {
        (this._oldLocation = e),
          (this.props.isPageLoading = !0),
          (this.props.overlayClass =
            "is-active has-no-transition" == this.props.overlayClass
              ? this.props.overlayClass
              : "is-prev has-no-transition"),
          "undefined" != typeof ga &&
            (ga("set", "page", e.path), ga("send", "pageview")),
          this.props.isMobile &&
            ((this.props.showMenu = !1), (this.props.showCredits = !1)),
          setTimeout(
            () => {
              (this.props.overlayClass = "is-active"),
                setTimeout(
                  () => {
                    (this.props.showMenu = !1),
                      (this.props.showCredits = !1),
                      window.scrollTo(0, 0),
                      (this._scrollTop = 0),
                      (this.props.scrollTop = 0),
                      (this.props.pageComponentId = null),
                      (this.props.pageDataUrl = null),
                      requestAnimationFrame(() => {
                        (this.props.pageDataUrl =
                          this.props.wsRoot +
                          e.path.replace(/^\//, "").replace(/\/$/, "") +
                          this.props.wsExtension),
                          (this._hasLoadedOnce = !0);
                      });
                  },
                  this._hasLoadedOnce ? 800 : 0
                );
            },
            this._hasLoadedOnce ? 100 : 0
          );
      }
      _onPageDataLoaded(e) {
        if (
          "page-home" == e.body["page-template"] ||
          "page-404" == e.body["page-template"]
        )
          (this.props.pageContent = e.body.content),
            (this.props.pageComponentId = e.body["page-template"]);
        else {
          function t(t) {
            console.log("ON PAGE TEMPLATE LOADED"),
              t.default(),
              (this.props.pageContent = e.body.content),
              (this.props.pageComponentId = e.body["page-template"]);
          }
          console.log("ON PAGE DATA LOADED"),
            (t = t.bind(this)),
            "page-about" == e.body["page-template"] &&
              i.e(3).then(i.bind(null, 110)).then(t),
            "page-contact" == e.body["page-template"] &&
              i.e(4).then(i.bind(null, 111)).then(t),
            "page-order" == e.body["page-template"] &&
              i.e(6).then(i.bind(null, 112)).then(t),
            "page-food" == e.body["page-template"] &&
              Promise.all([i.e(1), i.e(2)])
                .then(i.bind(null, 114))
                .then(t),
            "page-legals" == e.body["page-template"] &&
              i.e(5).then(i.bind(null, 113)).then(t);
        }
      }
      _onPageReady() {
        setTimeout(() => {
          (this.props.isReady = !0), (this.props.overlayClass = "is-next");
        }, 300);
      }
      _onDataError() {
        console.warn("Page Data Error: 404");
      }
      _onGlobalDataLoaded(e) {
        this.props.globalContent = e.body;
      }
      _onMenuDown() {
        (this.props.showMenu = !this.props.showMenu),
          (this.props.showCredits = !1);
      }
      _onCreditsDown() {
        (this.props.showCredits = !this.props.showCredits),
          (this.props.showMenu = !1);
      }
    }
    Object(r.register)("x-application", U),
      "function" != typeof Object.assign &&
        (Object.assign = function (e, t) {
          if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var i = Object(e), r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            if (null != s)
              for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (i[o] = s[o]);
          }
          return i;
        }),
      i(20),
      i(23),
      i(26),
      i(47).default(),
      i(53).default();
  },
]);
