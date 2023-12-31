if (window.location.hostname.indexOf("example.com") > -1) {
} else if (typeof jQuery == "undefined") {
  (function (a, b) {
    function cy(a) {
      return f.isWindow(a)
        ? a
        : a.nodeType === 9
        ? a.defaultView || a.parentWindow
        : !1;
    }
    function cv(a) {
      if (!ck[a]) {
        var b = c.body,
          d = f("<" + a + ">").appendTo(b),
          e = d.css("display");
        d.remove();
        if (e === "none" || e === "") {
          cl ||
            ((cl = c.createElement("iframe")),
            (cl.frameBorder = cl.width = cl.height = 0)),
            b.appendChild(cl);
          if (!cm || !cl.createElement)
            (cm = (cl.contentWindow || cl.contentDocument).document),
              cm.write(
                (c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") +
                  "<html><body>"
              ),
              cm.close();
          (d = cm.createElement(a)),
            cm.body.appendChild(d),
            (e = f.css(d, "display")),
            b.removeChild(cl);
        }
        ck[a] = e;
      }
      return ck[a];
    }
    function cu(a, b) {
      var c = {};
      f.each(cq.concat.apply([], cq.slice(0, b)), function () {
        c[this] = a;
      });
      return c;
    }
    function ct() {
      cr = b;
    }
    function cs() {
      setTimeout(ct, 0);
      return (cr = f.now());
    }
    function cj() {
      try {
        return new a.ActiveXObject("Microsoft.XMLHTTP");
      } catch (b) {}
    }
    function ci() {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    }
    function cc(a, c) {
      a.dataFilter && (c = a.dataFilter(c, a.dataType));
      var d = a.dataTypes,
        e = {},
        g,
        h,
        i = d.length,
        j,
        k = d[0],
        l,
        m,
        n,
        o,
        p;
      for (g = 1; g < i; g++) {
        if (g === 1)
          for (h in a.converters)
            typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
        (l = k), (k = d[g]);
        if (k === "*") k = l;
        else if (l !== "*" && l !== k) {
          (m = l + " " + k), (n = e[m] || e["* " + k]);
          if (!n) {
            p = b;
            for (o in e) {
              j = o.split(" ");
              if (j[0] === l || j[0] === "*") {
                p = e[j[1] + " " + k];
                if (p) {
                  (o = e[o]), o === !0 ? (n = p) : p === !0 && (n = o);
                  break;
                }
              }
            }
          }
          !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
            n !== !0 && (c = n ? n(c) : p(o(c)));
        }
      }
      return c;
    }
    function cb(a, c, d) {
      var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h,
        i,
        j,
        k;
      for (i in g) i in d && (c[g[i]] = d[i]);
      while (f[0] === "*")
        f.shift(),
          h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
      if (h)
        for (i in e)
          if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break;
          }
      if (f[0] in d) j = f[0];
      else {
        for (i in d) {
          if (!f[0] || a.converters[i + " " + f[0]]) {
            j = i;
            break;
          }
          k || (k = i);
        }
        j = j || k;
      }
      if (j) {
        j !== f[0] && f.unshift(j);
        return d[j];
      }
    }
    function ca(a, b, c, d) {
      if (f.isArray(b))
        f.each(b, function (b, e) {
          c || bE.test(a)
            ? d(a, e)
            : ca(
                a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]",
                e,
                c,
                d
              );
        });
      else if (!c && b != null && typeof b == "object")
        for (var e in b) ca(a + "[" + e + "]", b[e], c, d);
      else d(a, b);
    }
    function b_(a, c) {
      var d,
        e,
        g = f.ajaxSettings.flatOptions || {};
      for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
      e && f.extend(!0, a, e);
    }
    function b$(a, c, d, e, f, g) {
      (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
      var h = a[f],
        i = 0,
        j = h ? h.length : 0,
        k = a === bT,
        l;
      for (; i < j && (k || !l); i++)
        (l = h[i](c, d, e)),
          typeof l == "string" &&
            (!k || g[l]
              ? (l = b)
              : (c.dataTypes.unshift(l), (l = b$(a, c, d, e, l, g))));
      (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
      return l;
    }
    function bZ(a) {
      return function (b, c) {
        typeof b != "string" && ((c = b), (b = "*"));
        if (f.isFunction(c)) {
          var d = b.toLowerCase().split(bP),
            e = 0,
            g = d.length,
            h,
            i,
            j;
          for (; e < g; e++)
            (h = d[e]),
              (j = /^\+/.test(h)),
              j && (h = h.substr(1) || "*"),
              (i = a[h] = a[h] || []),
              i[j ? "unshift" : "push"](c);
        }
      };
    }
    function bC(a, b, c) {
      var d = b === "width" ? a.offsetWidth : a.offsetHeight,
        e = b === "width" ? bx : by,
        g = 0,
        h = e.length;
      if (d > 0) {
        if (c !== "border")
          for (; g < h; g++)
            c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0),
              c === "margin"
                ? (d += parseFloat(f.css(a, c + e[g])) || 0)
                : (d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0);
        return d + "px";
      }
      d = bz(a, b, b);
      if (d < 0 || d == null) d = a.style[b] || 0;
      d = parseFloat(d) || 0;
      if (c)
        for (; g < h; g++)
          (d += parseFloat(f.css(a, "padding" + e[g])) || 0),
            c !== "padding" &&
              (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0),
            c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
      return d + "px";
    }
    function bp(a, b) {
      b.src
        ? f.ajax({ url: b.src, async: !1, dataType: "script" })
        : f.globalEval(
            (b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")
          ),
        b.parentNode && b.parentNode.removeChild(b);
    }
    function bo(a) {
      var b = c.createElement("div");
      bh.appendChild(b), (b.innerHTML = a.outerHTML);
      return b.firstChild;
    }
    function bn(a) {
      var b = (a.nodeName || "").toLowerCase();
      b === "input"
        ? bm(a)
        : b !== "script" &&
          typeof a.getElementsByTagName != "undefined" &&
          f.grep(a.getElementsByTagName("input"), bm);
    }
    function bm(a) {
      if (a.type === "checkbox" || a.type === "radio")
        a.defaultChecked = a.checked;
    }
    function bl(a) {
      return typeof a.getElementsByTagName != "undefined"
        ? a.getElementsByTagName("*")
        : typeof a.querySelectorAll != "undefined"
        ? a.querySelectorAll("*")
        : [];
    }
    function bk(a, b) {
      var c;
      if (b.nodeType === 1) {
        b.clearAttributes && b.clearAttributes(),
          b.mergeAttributes && b.mergeAttributes(a),
          (c = b.nodeName.toLowerCase());
        if (c === "object") b.outerHTML = a.outerHTML;
        else if (
          c !== "input" ||
          (a.type !== "checkbox" && a.type !== "radio")
        ) {
          if (c === "option") b.selected = a.defaultSelected;
          else if (c === "input" || c === "textarea")
            b.defaultValue = a.defaultValue;
        } else
          a.checked && (b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value);
        b.removeAttribute(f.expando);
      }
    }
    function bj(a, b) {
      if (b.nodeType === 1 && !!f.hasData(a)) {
        var c,
          d,
          e,
          g = f._data(a),
          h = f._data(b, g),
          i = g.events;
        if (i) {
          delete h.handle, (h.events = {});
          for (c in i)
            for (d = 0, e = i[c].length; d < e; d++)
              f.event.add(
                b,
                c + (i[c][d].namespace ? "." : "") + i[c][d].namespace,
                i[c][d],
                i[c][d].data
              );
        }
        h.data && (h.data = f.extend({}, h.data));
      }
    }
    function bi(a, b) {
      return f.nodeName(a, "table")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function U(a) {
      var b = V.split("|"),
        c = a.createDocumentFragment();
      if (c.createElement) while (b.length) c.createElement(b.pop());
      return c;
    }
    function T(a, b, c) {
      b = b || 0;
      if (f.isFunction(b))
        return f.grep(a, function (a, d) {
          var e = !!b.call(a, d, a);
          return e === c;
        });
      if (b.nodeType)
        return f.grep(a, function (a, d) {
          return (a === b) === c;
        });
      if (typeof b == "string") {
        var d = f.grep(a, function (a) {
          return a.nodeType === 1;
        });
        if (O.test(b)) return f.filter(b, d, !c);
        b = f.filter(b, d);
      }
      return f.grep(a, function (a, d) {
        return f.inArray(a, b) >= 0 === c;
      });
    }
    function S(a) {
      return !a || !a.parentNode || a.parentNode.nodeType === 11;
    }
    function K() {
      return !0;
    }
    function J() {
      return !1;
    }
    function n(a, b, c) {
      var d = b + "defer",
        e = b + "queue",
        g = b + "mark",
        h = f._data(a, d);
      h &&
        (c === "queue" || !f._data(a, e)) &&
        (c === "mark" || !f._data(a, g)) &&
        setTimeout(function () {
          !f._data(a, e) &&
            !f._data(a, g) &&
            (f.removeData(a, d, !0), h.fire());
        }, 0);
    }
    function m(a) {
      for (var b in a) {
        if (b === "data" && f.isEmptyObject(a[b])) continue;
        if (b !== "toJSON") return !1;
      }
      return !0;
    }
    function l(a, c, d) {
      if (d === b && a.nodeType === 1) {
        var e = "data-" + c.replace(k, "-$1").toLowerCase();
        d = a.getAttribute(e);
        if (typeof d == "string") {
          try {
            d =
              d === "true"
                ? !0
                : d === "false"
                ? !1
                : d === "null"
                ? null
                : f.isNumeric(d)
                ? parseFloat(d)
                : j.test(d)
                ? f.parseJSON(d)
                : d;
          } catch (g) {}
          f.data(a, c, d);
        } else d = b;
      }
      return d;
    }
    function h(a) {
      var b = (g[a] = {}),
        c,
        d;
      a = a.split(/\s+/);
      for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
      return b;
    }
    var c = a.document,
      d = a.navigator,
      e = a.location,
      f = (function () {
        function J() {
          if (!e.isReady) {
            try {
              c.documentElement.doScroll("left");
            } catch (a) {
              setTimeout(J, 1);
              return;
            }
            e.ready();
          }
        }
        var e = function (a, b) {
            return new e.fn.init(a, b, h);
          },
          f = a.jQuery,
          g = a.$,
          h,
          i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
          j = /\S/,
          k = /^\s+/,
          l = /\s+$/,
          m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
          n = /^[\],:{}\s]*$/,
          o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          p =
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          q = /(?:^|:|,)(?:\s*\[)+/g,
          r = /(webkit)[ \/]([\w.]+)/,
          s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
          t = /(msie) ([\w.]+)/,
          u = /(mozilla)(?:.*? rv:([\w.]+))?/,
          v = /-([a-z]|[0-9])/gi,
          w = /^-ms-/,
          x = function (a, b) {
            return (b + "").toUpperCase();
          },
          y = d.userAgent,
          z,
          A,
          B,
          C = Object.prototype.toString,
          D = Object.prototype.hasOwnProperty,
          E = Array.prototype.push,
          F = Array.prototype.slice,
          G = String.prototype.trim,
          H = Array.prototype.indexOf,
          I = {};
        (e.fn = e.prototype =
          {
            constructor: e,
            init: function (a, d, f) {
              var g, h, j, k;
              if (!a) return this;
              if (a.nodeType) {
                (this.context = this[0] = a), (this.length = 1);
                return this;
              }
              if (a === "body" && !d && c.body) {
                (this.context = c),
                  (this[0] = c.body),
                  (this.selector = a),
                  (this.length = 1);
                return this;
              }
              if (typeof a == "string") {
                a.charAt(0) !== "<" ||
                a.charAt(a.length - 1) !== ">" ||
                a.length < 3
                  ? (g = i.exec(a))
                  : (g = [null, a, null]);
                if (g && (g[1] || !d)) {
                  if (g[1]) {
                    (d = d instanceof e ? d[0] : d),
                      (k = d ? d.ownerDocument || d : c),
                      (j = m.exec(a)),
                      j
                        ? e.isPlainObject(d)
                          ? ((a = [c.createElement(j[1])]),
                            e.fn.attr.call(a, d, !0))
                          : (a = [k.createElement(j[1])])
                        : ((j = e.buildFragment([g[1]], [k])),
                          (a = (j.cacheable ? e.clone(j.fragment) : j.fragment)
                            .childNodes));
                    return e.merge(this, a);
                  }
                  h = c.getElementById(g[2]);
                  if (h && h.parentNode) {
                    if (h.id !== g[2]) return f.find(a);
                    (this.length = 1), (this[0] = h);
                  }
                  (this.context = c), (this.selector = a);
                  return this;
                }
                return !d || d.jquery
                  ? (d || f).find(a)
                  : this.constructor(d).find(a);
              }
              if (e.isFunction(a)) return f.ready(a);
              a.selector !== b &&
                ((this.selector = a.selector), (this.context = a.context));
              return e.makeArray(a, this);
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function () {
              return this.length;
            },
            toArray: function () {
              return F.call(this, 0);
            },
            get: function (a) {
              return a == null
                ? this.toArray()
                : a < 0
                ? this[this.length + a]
                : this[a];
            },
            pushStack: function (a, b, c) {
              var d = this.constructor();
              e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                (d.prevObject = this),
                (d.context = this.context),
                b === "find"
                  ? (d.selector =
                      this.selector + (this.selector ? " " : "") + c)
                  : b && (d.selector = this.selector + "." + b + "(" + c + ")");
              return d;
            },
            each: function (a, b) {
              return e.each(this, a, b);
            },
            ready: function (a) {
              e.bindReady(), A.add(a);
              return this;
            },
            eq: function (a) {
              a = +a;
              return a === -1 ? this.slice(a) : this.slice(a, a + 1);
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            slice: function () {
              return this.pushStack(
                F.apply(this, arguments),
                "slice",
                F.call(arguments).join(",")
              );
            },
            map: function (a) {
              return this.pushStack(
                e.map(this, function (b, c) {
                  return a.call(b, c, b);
                })
              );
            },
            end: function () {
              return this.prevObject || this.constructor(null);
            },
            push: E,
            sort: [].sort,
            splice: [].splice,
          }),
          (e.fn.init.prototype = e.fn),
          (e.extend = e.fn.extend =
            function () {
              var a,
                c,
                d,
                f,
                g,
                h,
                i = arguments[0] || {},
                j = 1,
                k = arguments.length,
                l = !1;
              typeof i == "boolean" &&
                ((l = i), (i = arguments[1] || {}), (j = 2)),
                typeof i != "object" && !e.isFunction(i) && (i = {}),
                k === j && ((i = this), --j);
              for (; j < k; j++)
                if ((a = arguments[j]) != null)
                  for (c in a) {
                    (d = i[c]), (f = a[c]);
                    if (i === f) continue;
                    l && f && (e.isPlainObject(f) || (g = e.isArray(f)))
                      ? (g
                          ? ((g = !1), (h = d && e.isArray(d) ? d : []))
                          : (h = d && e.isPlainObject(d) ? d : {}),
                        (i[c] = e.extend(l, h, f)))
                      : f !== b && (i[c] = f);
                  }
              return i;
            }),
          e.extend({
            noConflict: function (b) {
              a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
              return e;
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
              a ? e.readyWait++ : e.ready(!0);
            },
            ready: function (a) {
              if ((a === !0 && !--e.readyWait) || (a !== !0 && !e.isReady)) {
                if (!c.body) return setTimeout(e.ready, 1);
                e.isReady = !0;
                if (a !== !0 && --e.readyWait > 0) return;
                A.fireWith(c, [e]),
                  e.fn.trigger && e(c).trigger("ready").off("ready");
              }
            },
            bindReady: function () {
              if (!A) {
                A = e.Callbacks("once memory");
                if (c.readyState === "complete") return setTimeout(e.ready, 1);
                if (c.addEventListener)
                  c.addEventListener("DOMContentLoaded", B, !1),
                    a.addEventListener("load", e.ready, !1);
                else if (c.attachEvent) {
                  c.attachEvent("onreadystatechange", B),
                    a.attachEvent("onload", e.ready);
                  var b = !1;
                  try {
                    b = a.frameElement == null;
                  } catch (d) {}
                  c.documentElement.doScroll && b && J();
                }
              }
            },
            isFunction: function (a) {
              return e.type(a) === "function";
            },
            isArray:
              Array.isArray ||
              function (a) {
                return e.type(a) === "array";
              },
            isWindow: function (a) {
              return a && typeof a == "object" && "setInterval" in a;
            },
            isNumeric: function (a) {
              return !isNaN(parseFloat(a)) && isFinite(a);
            },
            type: function (a) {
              return a == null ? String(a) : I[C.call(a)] || "object";
            },
            isPlainObject: function (a) {
              if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
                return !1;
              try {
                if (
                  a.constructor &&
                  !D.call(a, "constructor") &&
                  !D.call(a.constructor.prototype, "isPrototypeOf")
                )
                  return !1;
              } catch (c) {
                return !1;
              }
              var d;
              for (d in a);
              return d === b || D.call(a, d);
            },
            isEmptyObject: function (a) {
              for (var b in a) return !1;
              return !0;
            },
            error: function (a) {
              throw new Error(a);
            },
            parseJSON: function (b) {
              if (typeof b != "string" || !b) return null;
              b = e.trim(b);
              if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
              if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
                return new Function("return " + b)();
              e.error("Invalid JSON: " + b);
            },
            parseXML: function (c) {
              var d, f;
              try {
                a.DOMParser
                  ? ((f = new DOMParser()),
                    (d = f.parseFromString(c, "text/xml")))
                  : ((d = new ActiveXObject("Microsoft.XMLDOM")),
                    (d.async = "false"),
                    d.loadXML(c));
              } catch (g) {
                d = b;
              }
              (!d ||
                !d.documentElement ||
                d.getElementsByTagName("parsererror").length) &&
                e.error("Invalid XML: " + c);
              return d;
            },
            noop: function () {},
            globalEval: function (b) {
              b &&
                j.test(b) &&
                (
                  a.execScript ||
                  function (b) {
                    a.eval.call(a, b);
                  }
                )(b);
            },
            camelCase: function (a) {
              return a.replace(w, "ms-").replace(v, x);
            },
            nodeName: function (a, b) {
              return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
            },
            each: function (a, c, d) {
              var f,
                g = 0,
                h = a.length,
                i = h === b || e.isFunction(a);
              if (d) {
                if (i) {
                  for (f in a) if (c.apply(a[f], d) === !1) break;
                } else for (; g < h; ) if (c.apply(a[g++], d) === !1) break;
              } else if (i) {
                for (f in a) if (c.call(a[f], f, a[f]) === !1) break;
              } else for (; g < h; ) if (c.call(a[g], g, a[g++]) === !1) break;
              return a;
            },
            trim: G
              ? function (a) {
                  return a == null ? "" : G.call(a);
                }
              : function (a) {
                  return a == null
                    ? ""
                    : (a + "").replace(k, "").replace(l, "");
                },
            makeArray: function (a, b) {
              var c = b || [];
              if (a != null) {
                var d = e.type(a);
                a.length == null ||
                d === "string" ||
                d === "function" ||
                d === "regexp" ||
                e.isWindow(a)
                  ? E.call(c, a)
                  : e.merge(c, a);
              }
              return c;
            },
            inArray: function (a, b, c) {
              var d;
              if (b) {
                if (H) return H.call(b, a, c);
                (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
                for (; c < d; c++) if (c in b && b[c] === a) return c;
              }
              return -1;
            },
            merge: function (a, c) {
              var d = a.length,
                e = 0;
              if (typeof c.length == "number")
                for (var f = c.length; e < f; e++) a[d++] = c[e];
              else while (c[e] !== b) a[d++] = c[e++];
              a.length = d;
              return a;
            },
            grep: function (a, b, c) {
              var d = [],
                e;
              c = !!c;
              for (var f = 0, g = a.length; f < g; f++)
                (e = !!b(a[f], f)), c !== e && d.push(a[f]);
              return d;
            },
            map: function (a, c, d) {
              var f,
                g,
                h = [],
                i = 0,
                j = a.length,
                k =
                  a instanceof e ||
                  (j !== b &&
                    typeof j == "number" &&
                    ((j > 0 && a[0] && a[j - 1]) || j === 0 || e.isArray(a)));
              if (k)
                for (; i < j; i++)
                  (f = c(a[i], i, d)), f != null && (h[h.length] = f);
              else
                for (g in a)
                  (f = c(a[g], g, d)), f != null && (h[h.length] = f);
              return h.concat.apply([], h);
            },
            guid: 1,
            proxy: function (a, c) {
              if (typeof c == "string") {
                var d = a[c];
                (c = a), (a = d);
              }
              if (!e.isFunction(a)) return b;
              var f = F.call(arguments, 2),
                g = function () {
                  return a.apply(c, f.concat(F.call(arguments)));
                };
              g.guid = a.guid = a.guid || g.guid || e.guid++;
              return g;
            },
            access: function (a, c, d, f, g, h) {
              var i = a.length;
              if (typeof c == "object") {
                for (var j in c) e.access(a, j, c[j], f, g, d);
                return a;
              }
              if (d !== b) {
                f = !h && f && e.isFunction(d);
                for (var k = 0; k < i; k++)
                  g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                return a;
              }
              return i ? g(a[0], c) : b;
            },
            now: function () {
              return new Date().getTime();
            },
            uaMatch: function (a) {
              a = a.toLowerCase();
              var b =
                r.exec(a) ||
                s.exec(a) ||
                t.exec(a) ||
                (a.indexOf("compatible") < 0 && u.exec(a)) ||
                [];
              return { browser: b[1] || "", version: b[2] || "0" };
            },
            sub: function () {
              function a(b, c) {
                return new a.fn.init(b, c);
              }
              e.extend(!0, a, this),
                (a.superclass = this),
                (a.fn = a.prototype = this()),
                (a.fn.constructor = a),
                (a.sub = this.sub),
                (a.fn.init = function (d, f) {
                  f && f instanceof e && !(f instanceof a) && (f = a(f));
                  return e.fn.init.call(this, d, f, b);
                }),
                (a.fn.init.prototype = a.fn);
              var b = a(c);
              return a;
            },
            browser: {},
          }),
          e.each(
            "Boolean Number String Function Array Date RegExp Object".split(
              " "
            ),
            function (a, b) {
              I["[object " + b + "]"] = b.toLowerCase();
            }
          ),
          (z = e.uaMatch(y)),
          z.browser &&
            ((e.browser[z.browser] = !0), (e.browser.version = z.version)),
          e.browser.webkit && (e.browser.safari = !0),
          j.test("Ãƒâ€š ") && ((k = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
          (h = e(c)),
          c.addEventListener
            ? (B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready();
              })
            : c.attachEvent &&
              (B = function () {
                c.readyState === "complete" &&
                  (c.detachEvent("onreadystatechange", B), e.ready());
              });
        return e;
      })(),
      g = {};
    f.Callbacks = function (a) {
      a = a ? g[a] || h(a) : {};
      var c = [],
        d = [],
        e,
        i,
        j,
        k,
        l,
        m = function (b) {
          var d, e, g, h, i;
          for (d = 0, e = b.length; d < e; d++)
            (g = b[d]),
              (h = f.type(g)),
              h === "array"
                ? m(g)
                : h === "function" && (!a.unique || !o.has(g)) && c.push(g);
        },
        n = function (b, f) {
          (f = f || []),
            (e = !a.memory || [b, f]),
            (i = !0),
            (l = j || 0),
            (j = 0),
            (k = c.length);
          for (; c && l < k; l++)
            if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
              e = !0;
              break;
            }
          (i = !1),
            c &&
              (a.once
                ? e === !0
                  ? o.disable()
                  : (c = [])
                : d && d.length && ((e = d.shift()), o.fireWith(e[0], e[1])));
        },
        o = {
          add: function () {
            if (c) {
              var a = c.length;
              m(arguments),
                i ? (k = c.length) : e && e !== !0 && ((j = a), n(e[0], e[1]));
            }
            return this;
          },
          remove: function () {
            if (c) {
              var b = arguments,
                d = 0,
                e = b.length;
              for (; d < e; d++)
                for (var f = 0; f < c.length; f++)
                  if (b[d] === c[f]) {
                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                    if (a.unique) break;
                  }
            }
            return this;
          },
          has: function (a) {
            if (c) {
              var b = 0,
                d = c.length;
              for (; b < d; b++) if (a === c[b]) return !0;
            }
            return !1;
          },
          empty: function () {
            c = [];
            return this;
          },
          disable: function () {
            c = d = e = b;
            return this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            (d = b), (!e || e === !0) && o.disable();
            return this;
          },
          locked: function () {
            return !d;
          },
          fireWith: function (b, c) {
            d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
            return this;
          },
          fire: function () {
            o.fireWith(this, arguments);
            return this;
          },
          fired: function () {
            return !!e;
          },
        };
      return o;
    };
    var i = [].slice;
    f.extend({
      Deferred: function (a) {
        var b = f.Callbacks("once memory"),
          c = f.Callbacks("once memory"),
          d = f.Callbacks("memory"),
          e = "pending",
          g = { resolve: b, reject: c, notify: d },
          h = {
            done: b.add,
            fail: c.add,
            progress: d.add,
            state: function () {
              return e;
            },
            isResolved: b.fired,
            isRejected: c.fired,
            then: function (a, b, c) {
              i.done(a).fail(b).progress(c);
              return this;
            },
            always: function () {
              i.done.apply(i, arguments).fail.apply(i, arguments);
              return this;
            },
            pipe: function (a, b, c) {
              return f
                .Deferred(function (d) {
                  f.each(
                    {
                      done: [a, "resolve"],
                      fail: [b, "reject"],
                      progress: [c, "notify"],
                    },
                    function (a, b) {
                      var c = b[0],
                        e = b[1],
                        g;
                      f.isFunction(c)
                        ? i[a](function () {
                            (g = c.apply(this, arguments)),
                              g && f.isFunction(g.promise)
                                ? g
                                    .promise()
                                    .then(d.resolve, d.reject, d.notify)
                                : d[e + "With"](this === i ? d : this, [g]);
                          })
                        : i[a](d[e]);
                    }
                  );
                })
                .promise();
            },
            promise: function (a) {
              if (a == null) a = h;
              else for (var b in h) a[b] = h[b];
              return a;
            },
          },
          i = h.promise({}),
          j;
        for (j in g) (i[j] = g[j].fire), (i[j + "With"] = g[j].fireWith);
        i
          .done(
            function () {
              e = "resolved";
            },
            c.disable,
            d.lock
          )
          .fail(
            function () {
              e = "rejected";
            },
            b.disable,
            d.lock
          ),
          a && a.call(i, i);
        return i;
      },
      when: function (a) {
        function m(a) {
          return function (b) {
            (e[a] = arguments.length > 1 ? i.call(arguments, 0) : b),
              j.notifyWith(k, e);
          };
        }
        function l(a) {
          return function (c) {
            (b[a] = arguments.length > 1 ? i.call(arguments, 0) : c),
              --g || j.resolveWith(j, b);
          };
        }
        var b = i.call(arguments, 0),
          c = 0,
          d = b.length,
          e = Array(d),
          g = d,
          h = d,
          j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
          k = j.promise();
        if (d > 1) {
          for (; c < d; c++)
            b[c] && b[c].promise && f.isFunction(b[c].promise)
              ? b[c].promise().then(l(c), j.reject, m(c))
              : --g;
          g || j.resolveWith(j, b);
        } else j !== a && j.resolveWith(j, d ? [a] : []);
        return k;
      },
    }),
      (f.support = (function () {
        var b,
          d,
          e,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = c.createElement("div"),
          r = c.documentElement;
        q.setAttribute("className", "t"),
          (q.innerHTML =
            "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
          (d = q.getElementsByTagName("*")),
          (e = q.getElementsByTagName("a")[0]);
        if (!d || !d.length || !e) return {};
        (g = c.createElement("select")),
          (h = g.appendChild(c.createElement("option"))),
          (i = q.getElementsByTagName("input")[0]),
          (b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone:
              c.createElement("nav").cloneNode(!0).outerHTML !==
              "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
          }),
          (i.checked = !0),
          (b.noCloneChecked = i.cloneNode(!0).checked),
          (g.disabled = !0),
          (b.optDisabled = !h.disabled);
        try {
          delete q.test;
        } catch (s) {
          b.deleteExpando = !1;
        }
        !q.addEventListener &&
          q.attachEvent &&
          q.fireEvent &&
          (q.attachEvent("onclick", function () {
            b.noCloneEvent = !1;
          }),
          q.cloneNode(!0).fireEvent("onclick")),
          (i = c.createElement("input")),
          (i.value = "t"),
          i.setAttribute("type", "radio"),
          (b.radioValue = i.value === "t"),
          i.setAttribute("checked", "checked"),
          q.appendChild(i),
          (k = c.createDocumentFragment()),
          k.appendChild(q.lastChild),
          (b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (b.appendChecked = i.checked),
          k.removeChild(i),
          k.appendChild(q),
          (q.innerHTML = ""),
          a.getComputedStyle &&
            ((j = c.createElement("div")),
            (j.style.width = "0"),
            (j.style.marginRight = "0"),
            (q.style.width = "2px"),
            q.appendChild(j),
            (b.reliableMarginRight =
              (parseInt(
                (a.getComputedStyle(j, null) || { marginRight: 0 }).marginRight,
                10
              ) || 0) === 0));
        if (q.attachEvent)
          for (o in { submit: 1, change: 1, focusin: 1 })
            (n = "on" + o),
              (p = n in q),
              p ||
                (q.setAttribute(n, "return;"), (p = typeof q[n] == "function")),
              (b[o + "Bubbles"] = p);
        k.removeChild(q),
          (k = g = h = j = q = i = null),
          f(function () {
            var a,
              d,
              e,
              g,
              h,
              i,
              j,
              k,
              m,
              n,
              o,
              r = c.getElementsByTagName("body")[0];
            !r ||
              ((j = 1),
              (k =
                "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;"),
              (m = "visibility:hidden;border:0;"),
              (n = "style='" + k + "border:5px solid #000;padding:0;'"),
              (o =
                "<div " +
                n +
                "><div></div></div>" +
                "<table " +
                n +
                " cellpadding='0' cellspacing='0'>" +
                "<tr><td></td></tr></table>"),
              (a = c.createElement("div")),
              (a.style.cssText =
                m +
                "width:0;height:0;position:static;top:0;margin-top:" +
                j +
                "px"),
              r.insertBefore(a, r.firstChild),
              (q = c.createElement("div")),
              a.appendChild(q),
              (q.innerHTML =
                "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
              (l = q.getElementsByTagName("td")),
              (p = l[0].offsetHeight === 0),
              (l[0].style.display = ""),
              (l[1].style.display = "none"),
              (b.reliableHiddenOffsets = p && l[0].offsetHeight === 0),
              (q.innerHTML = ""),
              (q.style.width = q.style.paddingLeft = "1px"),
              (f.boxModel = b.boxModel = q.offsetWidth === 2),
              typeof q.style.zoom != "undefined" &&
                ((q.style.display = "inline"),
                (q.style.zoom = 1),
                (b.inlineBlockNeedsLayout = q.offsetWidth === 2),
                (q.style.display = ""),
                (q.innerHTML = "<div style='width:4px;'></div>"),
                (b.shrinkWrapBlocks = q.offsetWidth !== 2)),
              (q.style.cssText = k + m),
              (q.innerHTML = o),
              (d = q.firstChild),
              (e = d.firstChild),
              (h = d.nextSibling.firstChild.firstChild),
              (i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5,
              }),
              (e.style.position = "fixed"),
              (e.style.top = "20px"),
              (i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15),
              (e.style.position = e.style.top = ""),
              (d.style.overflow = "hidden"),
              (d.style.position = "relative"),
              (i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5),
              (i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j),
              r.removeChild(a),
              (q = a = null),
              f.extend(b, i));
          });
        return b;
      })());
    var j = /^(?:\{.*\}|\[.*\])$/,
      k = /([A-Z])/g;
    f.extend({
      cache: {},
      uuid: 0,
      expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0,
      },
      hasData: function (a) {
        a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
        return !!a && !m(a);
      },
      data: function (a, c, d, e) {
        if (!!f.acceptData(a)) {
          var g,
            h,
            i,
            j = f.expando,
            k = typeof c == "string",
            l = a.nodeType,
            m = l ? f.cache : a,
            n = l ? a[j] : a[j] && j,
            o = c === "events";
          if ((!n || !m[n] || (!o && !e && !m[n].data)) && k && d === b) return;
          n || (l ? (a[j] = n = ++f.uuid) : (n = j)),
            m[n] || ((m[n] = {}), l || (m[n].toJSON = f.noop));
          if (typeof c == "object" || typeof c == "function")
            e
              ? (m[n] = f.extend(m[n], c))
              : (m[n].data = f.extend(m[n].data, c));
          (g = h = m[n]),
            e || (h.data || (h.data = {}), (h = h.data)),
            d !== b && (h[f.camelCase(c)] = d);
          if (o && !h[c]) return g.events;
          k ? ((i = h[c]), i == null && (i = h[f.camelCase(c)])) : (i = h);
          return i;
        }
      },
      removeData: function (a, b, c) {
        if (!!f.acceptData(a)) {
          var d,
            e,
            g,
            h = f.expando,
            i = a.nodeType,
            j = i ? f.cache : a,
            k = i ? a[h] : h;
          if (!j[k]) return;
          if (b) {
            d = c ? j[k] : j[k].data;
            if (d) {
              f.isArray(b) ||
                (b in d
                  ? (b = [b])
                  : ((b = f.camelCase(b)),
                    b in d ? (b = [b]) : (b = b.split(" "))));
              for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
              if (!(c ? m : f.isEmptyObject)(d)) return;
            }
          }
          if (!c) {
            delete j[k].data;
            if (!m(j[k])) return;
          }
          f.support.deleteExpando || !j.setInterval
            ? delete j[k]
            : (j[k] = null),
            i &&
              (f.support.deleteExpando
                ? delete a[h]
                : a.removeAttribute
                ? a.removeAttribute(h)
                : (a[h] = null));
        }
      },
      _data: function (a, b, c) {
        return f.data(a, b, c, !0);
      },
      acceptData: function (a) {
        if (a.nodeName) {
          var b = f.noData[a.nodeName.toLowerCase()];
          if (b) return b !== !0 && a.getAttribute("classid") === b;
        }
        return !0;
      },
    }),
      f.fn.extend({
        data: function (a, c) {
          var d,
            e,
            g,
            h = null;
          if (typeof a == "undefined") {
            if (this.length) {
              h = f.data(this[0]);
              if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                e = this[0].attributes;
                for (var i = 0, j = e.length; i < j; i++)
                  (g = e[i].name),
                    g.indexOf("data-") === 0 &&
                      ((g = f.camelCase(g.substring(5))), l(this[0], g, h[g]));
                f._data(this[0], "parsedAttrs", !0);
              }
            }
            return h;
          }
          if (typeof a == "object")
            return this.each(function () {
              f.data(this, a);
            });
          (d = a.split(".")), (d[1] = d[1] ? "." + d[1] : "");
          if (c === b) {
            (h = this.triggerHandler("getData" + d[1] + "!", [d[0]])),
              h === b &&
                this.length &&
                ((h = f.data(this[0], a)), (h = l(this[0], a, h)));
            return h === b && d[1] ? this.data(d[0]) : h;
          }
          return this.each(function () {
            var b = f(this),
              e = [d[0], c];
            b.triggerHandler("setData" + d[1] + "!", e),
              f.data(this, a, c),
              b.triggerHandler("changeData" + d[1] + "!", e);
          });
        },
        removeData: function (a) {
          return this.each(function () {
            f.removeData(this, a);
          });
        },
      }),
      f.extend({
        _mark: function (a, b) {
          a &&
            ((b = (b || "fx") + "mark"),
            f._data(a, b, (f._data(a, b) || 0) + 1));
        },
        _unmark: function (a, b, c) {
          a !== !0 && ((c = b), (b = a), (a = !1));
          if (b) {
            c = c || "fx";
            var d = c + "mark",
              e = a ? 0 : (f._data(b, d) || 1) - 1;
            e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"));
          }
        },
        queue: function (a, b, c) {
          var d;
          if (a) {
            (b = (b || "fx") + "queue"),
              (d = f._data(a, b)),
              c &&
                (!d || f.isArray(c)
                  ? (d = f._data(a, b, f.makeArray(c)))
                  : d.push(c));
            return d || [];
          }
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = f.queue(a, b),
            d = c.shift(),
            e = {};
          d === "inprogress" && (d = c.shift()),
            d &&
              (b === "fx" && c.unshift("inprogress"),
              f._data(a, b + ".run", e),
              d.call(
                a,
                function () {
                  f.dequeue(a, b);
                },
                e
              )),
            c.length ||
              (f.removeData(a, b + "queue " + b + ".run", !0),
              n(a, b, "queue"));
        },
      }),
      f.fn.extend({
        queue: function (a, c) {
          typeof a != "string" && ((c = a), (a = "fx"));
          if (c === b) return f.queue(this[0], a);
          return this.each(function () {
            var b = f.queue(this, a, c);
            a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a);
          });
        },
        dequeue: function (a) {
          return this.each(function () {
            f.dequeue(this, a);
          });
        },
        delay: function (a, b) {
          (a = f.fx ? f.fx.speeds[a] || a : a), (b = b || "fx");
          return this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, c) {
          function m() {
            --h || d.resolveWith(e, [e]);
          }
          typeof a != "string" && ((c = a), (a = b)), (a = a || "fx");
          var d = f.Deferred(),
            e = this,
            g = e.length,
            h = 1,
            i = a + "defer",
            j = a + "queue",
            k = a + "mark",
            l;
          while (g--)
            if (
              (l =
                f.data(e[g], i, b, !0) ||
                ((f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) &&
                  f.data(e[g], i, f.Callbacks("once memory"), !0)))
            )
              h++, l.add(m);
          m();
          return d.promise();
        },
      });
    var o = /[\n\t\r]/g,
      p = /\s+/,
      q = /\r/g,
      r = /^(?:button|input)$/i,
      s = /^(?:button|input|object|select|textarea)$/i,
      t = /^a(?:rea)?$/i,
      u =
        /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      v = f.support.getSetAttribute,
      w,
      x,
      y;
    f.fn.extend({
      attr: function (a, b) {
        return f.access(this, a, b, !0, f.attr);
      },
      removeAttr: function (a) {
        return this.each(function () {
          f.removeAttr(this, a);
        });
      },
      prop: function (a, b) {
        return f.access(this, a, b, !0, f.prop);
      },
      removeProp: function (a) {
        a = f.propFix[a] || a;
        return this.each(function () {
          try {
            (this[a] = b), delete this[a];
          } catch (c) {}
        });
      },
      addClass: function (a) {
        var b, c, d, e, g, h, i;
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).addClass(a.call(this, b, this.className));
          });
        if (a && typeof a == "string") {
          b = a.split(p);
          for (c = 0, d = this.length; c < d; c++) {
            e = this[c];
            if (e.nodeType === 1)
              if (!e.className && b.length === 1) e.className = a;
              else {
                g = " " + e.className + " ";
                for (h = 0, i = b.length; h < i; h++)
                  ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                e.className = f.trim(g);
              }
          }
        }
        return this;
      },
      removeClass: function (a) {
        var c, d, e, g, h, i, j;
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).removeClass(a.call(this, b, this.className));
          });
        if ((a && typeof a == "string") || a === b) {
          c = (a || "").split(p);
          for (d = 0, e = this.length; d < e; d++) {
            g = this[d];
            if (g.nodeType === 1 && g.className)
              if (a) {
                h = (" " + g.className + " ").replace(o, " ");
                for (i = 0, j = c.length; i < j; i++)
                  h = h.replace(" " + c[i] + " ", " ");
                g.className = f.trim(h);
              } else g.className = "";
          }
        }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a,
          d = typeof b == "boolean";
        if (f.isFunction(a))
          return this.each(function (c) {
            f(this).toggleClass(a.call(this, c, this.className, b), b);
          });
        return this.each(function () {
          if (c === "string") {
            var e,
              g = 0,
              h = f(this),
              i = b,
              j = a.split(p);
            while ((e = j[g++]))
              (i = d ? i : !h.hasClass(e)),
                h[i ? "addClass" : "removeClass"](e);
          } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "");
        });
      },
      hasClass: function (a) {
        var b = " " + a + " ",
          c = 0,
          d = this.length;
        for (; c < d; c++)
          if (
            this[c].nodeType === 1 &&
            (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1
          )
            return !0;
        return !1;
      },
      val: function (a) {
        var c,
          d,
          e,
          g = this[0];
        {
          if (!!arguments.length) {
            e = f.isFunction(a);
            return this.each(function (d) {
              var g = f(this),
                h;
              if (this.nodeType === 1) {
                e ? (h = a.call(this, d, g.val())) : (h = a),
                  h == null
                    ? (h = "")
                    : typeof h == "number"
                    ? (h += "")
                    : f.isArray(h) &&
                      (h = f.map(h, function (a) {
                        return a == null ? "" : a + "";
                      })),
                  (c =
                    f.valHooks[this.nodeName.toLowerCase()] ||
                    f.valHooks[this.type]);
                if (!c || !("set" in c) || c.set(this, h, "value") === b)
                  this.value = h;
              }
            });
          }
          if (g) {
            c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
            if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
            d = g.value;
            return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d;
          }
        }
      },
    }),
      f.extend({
        valHooks: {
          option: {
            get: function (a) {
              var b = a.attributes.value;
              return !b || b.specified ? a.value : a.text;
            },
          },
          select: {
            get: function (a) {
              var b,
                c,
                d,
                e,
                g = a.selectedIndex,
                h = [],
                i = a.options,
                j = a.type === "select-one";
              if (g < 0) return null;
              (c = j ? g : 0), (d = j ? g + 1 : i.length);
              for (; c < d; c++) {
                e = i[c];
                if (
                  e.selected &&
                  (f.support.optDisabled
                    ? !e.disabled
                    : e.getAttribute("disabled") === null) &&
                  (!e.parentNode.disabled ||
                    !f.nodeName(e.parentNode, "optgroup"))
                ) {
                  b = f(e).val();
                  if (j) return b;
                  h.push(b);
                }
              }
              if (j && !h.length && i.length) return f(i[g]).val();
              return h;
            },
            set: function (a, b) {
              var c = f.makeArray(b);
              f(a)
                .find("option")
                .each(function () {
                  this.selected = f.inArray(f(this).val(), c) >= 0;
                }),
                c.length || (a.selectedIndex = -1);
              return c;
            },
          },
        },
        attrFn: {
          val: !0,
          css: !0,
          html: !0,
          text: !0,
          data: !0,
          width: !0,
          height: !0,
          offset: !0,
        },
        attr: function (a, c, d, e) {
          var g,
            h,
            i,
            j = a.nodeType;
          if (!!a && j !== 3 && j !== 8 && j !== 2) {
            if (e && c in f.attrFn) return f(a)[c](d);
            if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
            (i = j !== 1 || !f.isXMLDoc(a)),
              i &&
                ((c = c.toLowerCase()),
                (h = f.attrHooks[c] || (u.test(c) ? x : w)));
            if (d !== b) {
              if (d === null) {
                f.removeAttr(a, c);
                return;
              }
              if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
              a.setAttribute(c, "" + d);
              return d;
            }
            if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
            g = a.getAttribute(c);
            return g === null ? b : g;
          }
        },
        removeAttr: function (a, b) {
          var c,
            d,
            e,
            g,
            h = 0;
          if (b && a.nodeType === 1) {
            (d = b.toLowerCase().split(p)), (g = d.length);
            for (; h < g; h++)
              (e = d[h]),
                e &&
                  ((c = f.propFix[e] || e),
                  f.attr(a, e, ""),
                  a.removeAttribute(v ? e : c),
                  u.test(e) && c in a && (a[c] = !1));
          }
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (r.test(a.nodeName) && a.parentNode)
                f.error("type property can't be changed");
              else if (
                !f.support.radioValue &&
                b === "radio" &&
                f.nodeName(a, "input")
              ) {
                var c = a.value;
                a.setAttribute("type", b), c && (a.value = c);
                return b;
              }
            },
          },
          value: {
            get: function (a, b) {
              if (w && f.nodeName(a, "button")) return w.get(a, b);
              return b in a ? a.value : null;
            },
            set: function (a, b, c) {
              if (w && f.nodeName(a, "button")) return w.set(a, b, c);
              a.value = b;
            },
          },
        },
        propFix: {
          tabindex: "tabIndex",
          readonly: "readOnly",
          for: "htmlFor",
          class: "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable",
        },
        prop: function (a, c, d) {
          var e,
            g,
            h,
            i = a.nodeType;
          if (!!a && i !== 3 && i !== 8 && i !== 2) {
            (h = i !== 1 || !f.isXMLDoc(a)),
              h && ((c = f.propFix[c] || c), (g = f.propHooks[c]));
            return d !== b
              ? g && "set" in g && (e = g.set(a, d, c)) !== b
                ? e
                : (a[c] = d)
              : g && "get" in g && (e = g.get(a, c)) !== null
              ? e
              : a[c];
          }
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var c = a.getAttributeNode("tabindex");
              return c && c.specified
                ? parseInt(c.value, 10)
                : s.test(a.nodeName) || (t.test(a.nodeName) && a.href)
                ? 0
                : b;
            },
          },
        },
      }),
      (f.attrHooks.tabindex = f.propHooks.tabIndex),
      (x = {
        get: function (a, c) {
          var d,
            e = f.prop(a, c);
          return e === !0 ||
            (typeof e != "boolean" &&
              (d = a.getAttributeNode(c)) &&
              d.nodeValue !== !1)
            ? c.toLowerCase()
            : b;
        },
        set: function (a, b, c) {
          var d;
          b === !1
            ? f.removeAttr(a, c)
            : ((d = f.propFix[c] || c),
              d in a && (a[d] = !0),
              a.setAttribute(c, c.toLowerCase()));
          return c;
        },
      }),
      v ||
        ((y = { name: !0, id: !0 }),
        (w = f.valHooks.button =
          {
            get: function (a, c) {
              var d;
              d = a.getAttributeNode(c);
              return d && (y[c] ? d.nodeValue !== "" : d.specified)
                ? d.nodeValue
                : b;
            },
            set: function (a, b, d) {
              var e = a.getAttributeNode(d);
              e || ((e = c.createAttribute(d)), a.setAttributeNode(e));
              return (e.nodeValue = b + "");
            },
          }),
        (f.attrHooks.tabindex.set = w.set),
        f.each(["width", "height"], function (a, b) {
          f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
              if (c === "") {
                a.setAttribute(b, "auto");
                return c;
              }
            },
          });
        }),
        (f.attrHooks.contenteditable = {
          get: w.get,
          set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c);
          },
        })),
      f.support.hrefNormalized ||
        f.each(["href", "src", "width", "height"], function (a, c) {
          f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
              var d = a.getAttribute(c, 2);
              return d === null ? b : d;
            },
          });
        }),
      f.support.style ||
        (f.attrHooks.style = {
          get: function (a) {
            return a.style.cssText.toLowerCase() || b;
          },
          set: function (a, b) {
            return (a.style.cssText = "" + b);
          },
        }),
      f.support.optSelected ||
        (f.propHooks.selected = f.extend(f.propHooks.selected, {
          get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null;
          },
        })),
      f.support.enctype || (f.propFix.enctype = "encoding"),
      f.support.checkOn ||
        f.each(["radio", "checkbox"], function () {
          f.valHooks[this] = {
            get: function (a) {
              return a.getAttribute("value") === null ? "on" : a.value;
            },
          };
        }),
      f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
          set: function (a, b) {
            if (f.isArray(b))
              return (a.checked = f.inArray(f(a).val(), b) >= 0);
          },
        });
      });
    var z = /^(?:textarea|input|select)$/i,
      A = /^([^\.]*)?(?:\.(.+))?$/,
      B = /\bhover(\.\S+)?\b/,
      C = /^key/,
      D = /^(?:mouse|contextmenu)|click/,
      E = /^(?:focusinfocus|focusoutblur)$/,
      F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
      G = function (a) {
        var b = F.exec(a);
        b &&
          ((b[1] = (b[1] || "").toLowerCase()),
          (b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")));
        return b;
      },
      H = function (a, b) {
        var c = a.attributes || {};
        return (
          (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
          (!b[2] || (c.id || {}).value === b[2]) &&
          (!b[3] || b[3].test((c["class"] || {}).value))
        );
      },
      I = function (a) {
        return f.event.special.hover
          ? a
          : a.replace(B, "mouseenter$1 mouseleave$1");
      };
    (f.event = {
      add: function (a, c, d, e, g) {
        var h, i, j, k, l, m, n, o, p, q, r, s;
        if (
          !(
            a.nodeType === 3 ||
            a.nodeType === 8 ||
            !c ||
            !d ||
            !(h = f._data(a))
          )
        ) {
          d.handler && ((p = d), (d = p.handler)),
            d.guid || (d.guid = f.guid++),
            (j = h.events),
            j || (h.events = j = {}),
            (i = h.handle),
            i ||
              ((h.handle = i =
                function (a) {
                  return typeof f != "undefined" &&
                    (!a || f.event.triggered !== a.type)
                    ? f.event.dispatch.apply(i.elem, arguments)
                    : b;
                }),
              (i.elem = a)),
            (c = f.trim(I(c)).split(" "));
          for (k = 0; k < c.length; k++) {
            (l = A.exec(c[k]) || []),
              (m = l[1]),
              (n = (l[2] || "").split(".").sort()),
              (s = f.event.special[m] || {}),
              (m = (g ? s.delegateType : s.bindType) || m),
              (s = f.event.special[m] || {}),
              (o = f.extend(
                {
                  type: m,
                  origType: l[1],
                  data: e,
                  handler: d,
                  guid: d.guid,
                  selector: g,
                  quick: G(g),
                  namespace: n.join("."),
                },
                p
              )),
              (r = j[m]);
            if (!r) {
              (r = j[m] = []), (r.delegateCount = 0);
              if (!s.setup || s.setup.call(a, e, n, i) === !1)
                a.addEventListener
                  ? a.addEventListener(m, i, !1)
                  : a.attachEvent && a.attachEvent("on" + m, i);
            }
            s.add &&
              (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
              g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
              (f.event.global[m] = !0);
          }
          a = null;
        }
      },
      global: {},
      remove: function (a, b, c, d, e) {
        var g = f.hasData(a) && f._data(a),
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s;
        if (!!g && !!(o = g.events)) {
          b = f.trim(I(b || "")).split(" ");
          for (h = 0; h < b.length; h++) {
            (i = A.exec(b[h]) || []), (j = k = i[1]), (l = i[2]);
            if (!j) {
              for (j in o) f.event.remove(a, j + b[h], c, d, !0);
              continue;
            }
            (p = f.event.special[j] || {}),
              (j = (d ? p.delegateType : p.bindType) || j),
              (r = o[j] || []),
              (m = r.length),
              (l = l
                ? new RegExp(
                    "(^|\\.)" +
                      l.split(".").sort().join("\\.(?:.*\\.)?") +
                      "(\\.|$)"
                  )
                : null);
            for (n = 0; n < r.length; n++)
              (s = r[n]),
                (e || k === s.origType) &&
                  (!c || c.guid === s.guid) &&
                  (!l || l.test(s.namespace)) &&
                  (!d || d === s.selector || (d === "**" && s.selector)) &&
                  (r.splice(n--, 1),
                  s.selector && r.delegateCount--,
                  p.remove && p.remove.call(a, s));
            r.length === 0 &&
              m !== r.length &&
              ((!p.teardown || p.teardown.call(a, l) === !1) &&
                f.removeEvent(a, j, g.handle),
              delete o[j]);
          }
          f.isEmptyObject(o) &&
            ((q = g.handle),
            q && (q.elem = null),
            f.removeData(a, ["events", "handle"], !0));
        }
      },
      customEvent: { getData: !0, setData: !0, changeData: !0 },
      trigger: function (c, d, e, g) {
        if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
          var h = c.type || c,
            i = [],
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s;
          if (E.test(h + f.event.triggered)) return;
          h.indexOf("!") >= 0 && ((h = h.slice(0, -1)), (k = !0)),
            h.indexOf(".") >= 0 &&
              ((i = h.split(".")), (h = i.shift()), i.sort());
          if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
          (c =
            typeof c == "object"
              ? c[f.expando]
                ? c
                : new f.Event(h, c)
              : new f.Event(h)),
            (c.type = h),
            (c.isTrigger = !0),
            (c.exclusive = k),
            (c.namespace = i.join(".")),
            (c.namespace_re = c.namespace
              ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)")
              : null),
            (o = h.indexOf(":") < 0 ? "on" + h : "");
          if (!e) {
            j = f.cache;
            for (l in j)
              j[l].events &&
                j[l].events[h] &&
                f.event.trigger(c, d, j[l].handle.elem, !0);
            return;
          }
          (c.result = b),
            c.target || (c.target = e),
            (d = d != null ? f.makeArray(d) : []),
            d.unshift(c),
            (p = f.event.special[h] || {});
          if (p.trigger && p.trigger.apply(e, d) === !1) return;
          r = [[e, p.bindType || h]];
          if (!g && !p.noBubble && !f.isWindow(e)) {
            (s = p.delegateType || h),
              (m = E.test(s + h) ? e : e.parentNode),
              (n = null);
            for (; m; m = m.parentNode) r.push([m, s]), (n = m);
            n &&
              n === e.ownerDocument &&
              r.push([n.defaultView || n.parentWindow || a, s]);
          }
          for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
            (m = r[l][0]),
              (c.type = r[l][1]),
              (q =
                (f._data(m, "events") || {})[c.type] && f._data(m, "handle")),
              q && q.apply(m, d),
              (q = o && m[o]),
              q &&
                f.acceptData(m) &&
                q.apply(m, d) === !1 &&
                c.preventDefault();
          (c.type = h),
            !g &&
              !c.isDefaultPrevented() &&
              (!p._default || p._default.apply(e.ownerDocument, d) === !1) &&
              (h !== "click" || !f.nodeName(e, "a")) &&
              f.acceptData(e) &&
              o &&
              e[h] &&
              ((h !== "focus" && h !== "blur") || c.target.offsetWidth !== 0) &&
              !f.isWindow(e) &&
              ((n = e[o]),
              n && (e[o] = null),
              (f.event.triggered = h),
              e[h](),
              (f.event.triggered = b),
              n && (e[o] = n));
          return c.result;
        }
      },
      dispatch: function (c) {
        c = f.event.fix(c || a.event);
        var d = (f._data(this, "events") || {})[c.type] || [],
          e = d.delegateCount,
          g = [].slice.call(arguments, 0),
          h = !c.exclusive && !c.namespace,
          i = [],
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t;
        (g[0] = c), (c.delegateTarget = this);
        if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
          (m = f(this)), (m.context = this.ownerDocument || this);
          for (l = c.target; l != this; l = l.parentNode || this) {
            (o = {}), (q = []), (m[0] = l);
            for (j = 0; j < e; j++)
              (r = d[j]),
                (s = r.selector),
                o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
                o[s] && q.push(r);
            q.length && i.push({ elem: l, matches: q });
          }
        }
        d.length > e && i.push({ elem: this, matches: d.slice(e) });
        for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
          (p = i[j]), (c.currentTarget = p.elem);
          for (
            k = 0;
            k < p.matches.length && !c.isImmediatePropagationStopped();
            k++
          ) {
            r = p.matches[k];
            if (
              h ||
              (!c.namespace && !r.namespace) ||
              (c.namespace_re && c.namespace_re.test(r.namespace))
            )
              (c.data = r.data),
                (c.handleObj = r),
                (n = (
                  (f.event.special[r.origType] || {}).handle || r.handler
                ).apply(p.elem, g)),
                n !== b &&
                  ((c.result = n),
                  n === !1 && (c.preventDefault(), c.stopPropagation()));
          }
        }
        return c.result;
      },
      props:
        "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (a, b) {
          a.which == null &&
            (a.which = b.charCode != null ? b.charCode : b.keyCode);
          return a;
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (a, d) {
          var e,
            f,
            g,
            h = d.button,
            i = d.fromElement;
          a.pageX == null &&
            d.clientX != null &&
            ((e = a.target.ownerDocument || c),
            (f = e.documentElement),
            (g = e.body),
            (a.pageX =
              d.clientX +
              ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
              ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
            (a.pageY =
              d.clientY +
              ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
              ((f && f.clientTop) || (g && g.clientTop) || 0))),
            !a.relatedTarget &&
              i &&
              (a.relatedTarget = i === a.target ? d.toElement : i),
            !a.which &&
              h !== b &&
              (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
          return a;
        },
      },
      fix: function (a) {
        if (a[f.expando]) return a;
        var d,
          e,
          g = a,
          h = f.event.fixHooks[a.type] || {},
          i = h.props ? this.props.concat(h.props) : this.props;
        a = f.Event(g);
        for (d = i.length; d; ) (e = i[--d]), (a[e] = g[e]);
        a.target || (a.target = g.srcElement || c),
          a.target.nodeType === 3 && (a.target = a.target.parentNode),
          a.metaKey === b && (a.metaKey = a.ctrlKey);
        return h.filter ? h.filter(a, g) : a;
      },
      special: {
        ready: { setup: f.bindReady },
        load: { noBubble: !0 },
        focus: { delegateType: "focusin" },
        blur: { delegateType: "focusout" },
        beforeunload: {
          setup: function (a, b, c) {
            f.isWindow(this) && (this.onbeforeunload = c);
          },
          teardown: function (a, b) {
            this.onbeforeunload === b && (this.onbeforeunload = null);
          },
        },
      },
      simulate: function (a, b, c, d) {
        var e = f.extend(new f.Event(), c, {
          type: a,
          isSimulated: !0,
          originalEvent: {},
        });
        d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
          e.isDefaultPrevented() && c.preventDefault();
      },
    }),
      (f.event.handle = f.event.dispatch),
      (f.removeEvent = c.removeEventListener
        ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1);
          }
        : function (a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c);
          }),
      (f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
              a.returnValue === !1 ||
              (a.getPreventDefault && a.getPreventDefault())
                ? K
                : J))
          : (this.type = a),
          b && f.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || f.now()),
          (this[f.expando] = !0);
      }),
      (f.Event.prototype = {
        preventDefault: function () {
          this.isDefaultPrevented = K;
          var a = this.originalEvent;
          !a || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
        },
        stopPropagation: function () {
          this.isPropagationStopped = K;
          var a = this.originalEvent;
          !a ||
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = K), this.stopPropagation();
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J,
      }),
      f.each(
        { mouseenter: "mouseover", mouseleave: "mouseout" },
        function (a, b) {
          f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
              var c = this,
                d = a.relatedTarget,
                e = a.handleObj,
                g = e.selector,
                h;
              if (!d || (d !== c && !f.contains(c, d)))
                (a.type = e.origType),
                  (h = e.handler.apply(this, arguments)),
                  (a.type = b);
              return h;
            },
          };
        }
      ),
      f.support.submitBubbles ||
        (f.event.special.submit = {
          setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
              var c = a.target,
                d =
                  f.nodeName(c, "input") || f.nodeName(c, "button")
                    ? c.form
                    : b;
              d &&
                !d._submit_attached &&
                (f.event.add(d, "submit._submit", function (a) {
                  this.parentNode &&
                    !a.isTrigger &&
                    f.event.simulate("submit", this.parentNode, a, !0);
                }),
                (d._submit_attached = !0));
            });
          },
          teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit");
          },
        }),
      f.support.changeBubbles ||
        (f.event.special.change = {
          setup: function () {
            if (z.test(this.nodeName)) {
              if (this.type === "checkbox" || this.type === "radio")
                f.event.add(this, "propertychange._change", function (a) {
                  a.originalEvent.propertyName === "checked" &&
                    (this._just_changed = !0);
                }),
                  f.event.add(this, "click._change", function (a) {
                    this._just_changed &&
                      !a.isTrigger &&
                      ((this._just_changed = !1),
                      f.event.simulate("change", this, a, !0));
                  });
              return !1;
            }
            f.event.add(this, "beforeactivate._change", function (a) {
              var b = a.target;
              z.test(b.nodeName) &&
                !b._change_attached &&
                (f.event.add(b, "change._change", function (a) {
                  this.parentNode &&
                    !a.isSimulated &&
                    !a.isTrigger &&
                    f.event.simulate("change", this.parentNode, a, !0);
                }),
                (b._change_attached = !0));
            });
          },
          handle: function (a) {
            var b = a.target;
            if (
              this !== b ||
              a.isSimulated ||
              a.isTrigger ||
              (b.type !== "radio" && b.type !== "checkbox")
            )
              return a.handleObj.handler.apply(this, arguments);
          },
          teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName);
          },
        }),
      f.support.focusinBubbles ||
        f.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
          var d = 0,
            e = function (a) {
              f.event.simulate(b, a.target, f.event.fix(a), !0);
            };
          f.event.special[b] = {
            setup: function () {
              d++ === 0 && c.addEventListener(a, e, !0);
            },
            teardown: function () {
              --d === 0 && c.removeEventListener(a, e, !0);
            },
          };
        }),
      f.fn.extend({
        on: function (a, c, d, e, g) {
          var h, i;
          if (typeof a == "object") {
            typeof c != "string" && ((d = c), (c = b));
            for (i in a) this.on(i, c, d, a[i], g);
            return this;
          }
          d == null && e == null
            ? ((e = c), (d = c = b))
            : e == null &&
              (typeof c == "string"
                ? ((e = d), (d = b))
                : ((e = d), (d = c), (c = b)));
          if (e === !1) e = J;
          else if (!e) return this;
          g === 1 &&
            ((h = e),
            (e = function (a) {
              f().off(a);
              return h.apply(this, arguments);
            }),
            (e.guid = h.guid || (h.guid = f.guid++)));
          return this.each(function () {
            f.event.add(this, a, e, d, c);
          });
        },
        one: function (a, b, c, d) {
          return this.on.call(this, a, b, c, d, 1);
        },
        off: function (a, c, d) {
          if (a && a.preventDefault && a.handleObj) {
            var e = a.handleObj;
            f(a.delegateTarget).off(
              e.namespace ? e.type + "." + e.namespace : e.type,
              e.selector,
              e.handler
            );
            return this;
          }
          if (typeof a == "object") {
            for (var g in a) this.off(g, c, a[g]);
            return this;
          }
          if (c === !1 || typeof c == "function") (d = c), (c = b);
          d === !1 && (d = J);
          return this.each(function () {
            f.event.remove(this, a, d, c);
          });
        },
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        live: function (a, b, c) {
          f(this.context).on(a, this.selector, b, c);
          return this;
        },
        die: function (a, b) {
          f(this.context).off(a, this.selector || "**", b);
          return this;
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c);
        },
        trigger: function (a, b) {
          return this.each(function () {
            f.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          if (this[0]) return f.event.trigger(a, b, this[0], !0);
        },
        toggle: function (a) {
          var b = arguments,
            c = a.guid || f.guid++,
            d = 0,
            e = function (c) {
              var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
              f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
              return b[e].apply(this, arguments) || !1;
            };
          e.guid = c;
          while (d < b.length) b[d++].guid = c;
          return this.click(e);
        },
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
      }),
      f.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (a, b) {
          (f.fn[b] = function (a, c) {
            c == null && ((c = a), (a = null));
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          }),
            f.attrFn && (f.attrFn[b] = !0),
            C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
            D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
        }
      ),
      (function () {
        function x(a, b, c, e, f, g) {
          for (var h = 0, i = e.length; h < i; h++) {
            var j = e[h];
            if (j) {
              var k = !1;
              j = j[a];
              while (j) {
                if (j[d] === c) {
                  k = e[j.sizset];
                  break;
                }
                if (j.nodeType === 1) {
                  g || ((j[d] = c), (j.sizset = h));
                  if (typeof b != "string") {
                    if (j === b) {
                      k = !0;
                      break;
                    }
                  } else if (m.filter(b, [j]).length > 0) {
                    k = j;
                    break;
                  }
                }
                j = j[a];
              }
              e[h] = k;
            }
          }
        }
        function w(a, b, c, e, f, g) {
          for (var h = 0, i = e.length; h < i; h++) {
            var j = e[h];
            if (j) {
              var k = !1;
              j = j[a];
              while (j) {
                if (j[d] === c) {
                  k = e[j.sizset];
                  break;
                }
                j.nodeType === 1 && !g && ((j[d] = c), (j.sizset = h));
                if (j.nodeName.toLowerCase() === b) {
                  k = j;
                  break;
                }
                j = j[a];
              }
              e[h] = k;
            }
          }
        }
        var a =
            /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
          d = "sizcache" + (Math.random() + "").replace(".", ""),
          e = 0,
          g = Object.prototype.toString,
          h = !1,
          i = !0,
          j = /\\/g,
          k = /\r\n/g,
          l = /\W/;
        [0, 0].sort(function () {
          i = !1;
          return 0;
        });
        var m = function (b, d, e, f) {
          (e = e || []), (d = d || c);
          var h = d;
          if (d.nodeType !== 1 && d.nodeType !== 9) return [];
          if (!b || typeof b != "string") return e;
          var i,
            j,
            k,
            l,
            n,
            q,
            r,
            t,
            u = !0,
            v = m.isXML(d),
            w = [],
            x = b;
          do {
            a.exec(""), (i = a.exec(x));
            if (i) {
              (x = i[3]), w.push(i[1]);
              if (i[2]) {
                l = i[3];
                break;
              }
            }
          } while (i);
          if (w.length > 1 && p.exec(b))
            if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
            else {
              j = o.relative[w[0]] ? [d] : m(w.shift(), d);
              while (w.length)
                (b = w.shift()),
                  o.relative[b] && (b += w.shift()),
                  (j = y(b, j, f));
            }
          else {
            !f &&
              w.length > 1 &&
              d.nodeType === 9 &&
              !v &&
              o.match.ID.test(w[0]) &&
              !o.match.ID.test(w[w.length - 1]) &&
              ((n = m.find(w.shift(), d, v)),
              (d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]));
            if (d) {
              (n = f
                ? { expr: w.pop(), set: s(f) }
                : m.find(
                    w.pop(),
                    w.length === 1 &&
                      (w[0] === "~" || w[0] === "+") &&
                      d.parentNode
                      ? d.parentNode
                      : d,
                    v
                  )),
                (j = n.expr ? m.filter(n.expr, n.set) : n.set),
                w.length > 0 ? (k = s(j)) : (u = !1);
              while (w.length)
                (q = w.pop()),
                  (r = q),
                  o.relative[q] ? (r = w.pop()) : (q = ""),
                  r == null && (r = d),
                  o.relative[q](k, r, v);
            } else k = w = [];
          }
          k || (k = j), k || m.error(q || b);
          if (g.call(k) === "[object Array]")
            if (!u) e.push.apply(e, k);
            else if (d && d.nodeType === 1)
              for (t = 0; k[t] != null; t++)
                k[t] &&
                  (k[t] === !0 ||
                    (k[t].nodeType === 1 && m.contains(d, k[t]))) &&
                  e.push(j[t]);
            else
              for (t = 0; k[t] != null; t++)
                k[t] && k[t].nodeType === 1 && e.push(j[t]);
          else s(k, e);
          l && (m(l, h, e, f), m.uniqueSort(e));
          return e;
        };
        (m.uniqueSort = function (a) {
          if (u) {
            (h = i), a.sort(u);
            if (h)
              for (var b = 1; b < a.length; b++)
                a[b] === a[b - 1] && a.splice(b--, 1);
          }
          return a;
        }),
          (m.matches = function (a, b) {
            return m(a, null, null, b);
          }),
          (m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0;
          }),
          (m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
              h = o.order[e];
              if ((g = o.leftMatch[h].exec(a))) {
                (i = g[1]), g.splice(1, 1);
                if (i.substr(i.length - 1) !== "\\") {
                  (g[1] = (g[1] || "").replace(j, "")),
                    (d = o.find[h](g, b, c));
                  if (d != null) {
                    a = a.replace(o.match[h], "");
                    break;
                  }
                }
              }
            }
            d ||
              (d =
                typeof b.getElementsByTagName != "undefined"
                  ? b.getElementsByTagName("*")
                  : []);
            return { set: d, expr: a };
          }),
          (m.filter = function (a, c, d, e) {
            var f,
              g,
              h,
              i,
              j,
              k,
              l,
              n,
              p,
              q = a,
              r = [],
              s = c,
              t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
              for (h in o.filter)
                if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                  (k = o.filter[h]), (l = f[1]), (g = !1), f.splice(1, 1);
                  if (l.substr(l.length - 1) === "\\") continue;
                  s === r && (r = []);
                  if (o.preFilter[h]) {
                    f = o.preFilter[h](f, s, d, r, e, t);
                    if (!f) g = i = !0;
                    else if (f === !0) continue;
                  }
                  if (f)
                    for (n = 0; (j = s[n]) != null; n++)
                      j &&
                        ((i = k(j, f, n, s)),
                        (p = e ^ i),
                        d && i != null
                          ? p
                            ? (g = !0)
                            : (s[n] = !1)
                          : p && (r.push(j), (g = !0)));
                  if (i !== b) {
                    d || (s = r), (a = a.replace(o.match[h], ""));
                    if (!g) return [];
                    break;
                  }
                }
              if (a === q)
                if (g == null) m.error(a);
                else break;
              q = a;
            }
            return s;
          }),
          (m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
          });
        var n = (m.getText = function (a) {
            var b,
              c,
              d = a.nodeType,
              e = "";
            if (d) {
              if (d === 1 || d === 9) {
                if (typeof a.textContent == "string") return a.textContent;
                if (typeof a.innerText == "string")
                  return a.innerText.replace(k, "");
                for (a = a.firstChild; a; a = a.nextSibling) e += n(a);
              } else if (d === 3 || d === 4) return a.nodeValue;
            } else for (b = 0; (c = a[b]); b++) c.nodeType !== 8 && (e += n(c));
            return e;
          }),
          o = (m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
              ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
              CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
              NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
              ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
              TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
              CHILD:
                /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
              POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
              PSEUDO:
                /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
            },
            leftMatch: {},
            attrMap: { class: "className", for: "htmlFor" },
            attrHandle: {
              href: function (a) {
                return a.getAttribute("href");
              },
              type: function (a) {
                return a.getAttribute("type");
              },
            },
            relative: {
              "+": function (a, b) {
                var c = typeof b == "string",
                  d = c && !l.test(b),
                  e = c && !d;
                d && (b = b.toLowerCase());
                for (var f = 0, g = a.length, h; f < g; f++)
                  if ((h = a[f])) {
                    while ((h = h.previousSibling) && h.nodeType !== 1);
                    a[f] =
                      e || (h && h.nodeName.toLowerCase() === b)
                        ? h || !1
                        : h === b;
                  }
                e && m.filter(b, a, !0);
              },
              ">": function (a, b) {
                var c,
                  d = typeof b == "string",
                  e = 0,
                  f = a.length;
                if (d && !l.test(b)) {
                  b = b.toLowerCase();
                  for (; e < f; e++) {
                    c = a[e];
                    if (c) {
                      var g = c.parentNode;
                      a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                    }
                  }
                } else {
                  for (; e < f; e++)
                    (c = a[e]),
                      c && (a[e] = d ? c.parentNode : c.parentNode === b);
                  d && m.filter(b, a, !0);
                }
              },
              "": function (a, b, c) {
                var d,
                  f = e++,
                  g = x;
                typeof b == "string" &&
                  !l.test(b) &&
                  ((b = b.toLowerCase()), (d = b), (g = w)),
                  g("parentNode", b, f, a, d, c);
              },
              "~": function (a, b, c) {
                var d,
                  f = e++,
                  g = x;
                typeof b == "string" &&
                  !l.test(b) &&
                  ((b = b.toLowerCase()), (d = b), (g = w)),
                  g("previousSibling", b, f, a, d, c);
              },
            },
            find: {
              ID: function (a, b, c) {
                if (typeof b.getElementById != "undefined" && !c) {
                  var d = b.getElementById(a[1]);
                  return d && d.parentNode ? [d] : [];
                }
              },
              NAME: function (a, b) {
                if (typeof b.getElementsByName != "undefined") {
                  var c = [],
                    d = b.getElementsByName(a[1]);
                  for (var e = 0, f = d.length; e < f; e++)
                    d[e].getAttribute("name") === a[1] && c.push(d[e]);
                  return c.length === 0 ? null : c;
                }
              },
              TAG: function (a, b) {
                if (typeof b.getElementsByTagName != "undefined")
                  return b.getElementsByTagName(a[1]);
              },
            },
            preFilter: {
              CLASS: function (a, b, c, d, e, f) {
                a = " " + a[1].replace(j, "") + " ";
                if (f) return a;
                for (var g = 0, h; (h = b[g]) != null; g++)
                  h &&
                    (e ^
                    (h.className &&
                      (" " + h.className + " ")
                        .replace(/[\t\n\r]/g, " ")
                        .indexOf(a) >= 0)
                      ? c || d.push(h)
                      : c && (b[g] = !1));
                return !1;
              },
              ID: function (a) {
                return a[1].replace(j, "");
              },
              TAG: function (a, b) {
                return a[1].replace(j, "").toLowerCase();
              },
              CHILD: function (a) {
                if (a[1] === "nth") {
                  a[2] || m.error(a[0]), (a[2] = a[2].replace(/^\+|\s*/g, ""));
                  var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                    (a[2] === "even" && "2n") ||
                      (a[2] === "odd" && "2n+1") ||
                      (!/\D/.test(a[2]) && "0n+" + a[2]) ||
                      a[2]
                  );
                  (a[2] = b[1] + (b[2] || 1) - 0), (a[3] = b[3] - 0);
                } else a[2] && m.error(a[0]);
                a[0] = e++;
                return a;
              },
              ATTR: function (a, b, c, d, e, f) {
                var g = (a[1] = a[1].replace(j, ""));
                !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                  (a[4] = (a[4] || a[5] || "").replace(j, "")),
                  a[2] === "~=" && (a[4] = " " + a[4] + " ");
                return a;
              },
              PSEUDO: function (b, c, d, e, f) {
                if (b[1] === "not")
                  if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                    b[3] = m(b[3], null, null, c);
                  else {
                    var g = m.filter(b[3], c, d, !0 ^ f);
                    d || e.push.apply(e, g);
                    return !1;
                  }
                else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                  return !0;
                return b;
              },
              POS: function (a) {
                a.unshift(!0);
                return a;
              },
            },
            filters: {
              enabled: function (a) {
                return a.disabled === !1 && a.type !== "hidden";
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                return a.checked === !0;
              },
              selected: function (a) {
                a.parentNode && a.parentNode.selectedIndex;
                return a.selected === !0;
              },
              parent: function (a) {
                return !!a.firstChild;
              },
              empty: function (a) {
                return !a.firstChild;
              },
              has: function (a, b, c) {
                return !!m(c[3], a).length;
              },
              header: function (a) {
                return /h\d/i.test(a.nodeName);
              },
              text: function (a) {
                var b = a.getAttribute("type"),
                  c = a.type;
                return (
                  a.nodeName.toLowerCase() === "input" &&
                  "text" === c &&
                  (b === c || b === null)
                );
              },
              radio: function (a) {
                return (
                  a.nodeName.toLowerCase() === "input" && "radio" === a.type
                );
              },
              checkbox: function (a) {
                return (
                  a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                );
              },
              file: function (a) {
                return (
                  a.nodeName.toLowerCase() === "input" && "file" === a.type
                );
              },
              password: function (a) {
                return (
                  a.nodeName.toLowerCase() === "input" && "password" === a.type
                );
              },
              submit: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" || b === "button") && "submit" === a.type;
              },
              image: function (a) {
                return (
                  a.nodeName.toLowerCase() === "input" && "image" === a.type
                );
              },
              reset: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" || b === "button") && "reset" === a.type;
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" && "button" === a.type) || b === "button";
              },
              input: function (a) {
                return /input|select|textarea|button/i.test(a.nodeName);
              },
              focus: function (a) {
                return a === a.ownerDocument.activeElement;
              },
            },
            setFilters: {
              first: function (a, b) {
                return b === 0;
              },
              last: function (a, b, c, d) {
                return b === d.length - 1;
              },
              even: function (a, b) {
                return b % 2 === 0;
              },
              odd: function (a, b) {
                return b % 2 === 1;
              },
              lt: function (a, b, c) {
                return b < c[3] - 0;
              },
              gt: function (a, b, c) {
                return b > c[3] - 0;
              },
              nth: function (a, b, c) {
                return c[3] - 0 === b;
              },
              eq: function (a, b, c) {
                return c[3] - 0 === b;
              },
            },
            filter: {
              PSEUDO: function (a, b, c, d) {
                var e = b[1],
                  f = o.filters[e];
                if (f) return f(a, c, b, d);
                if (e === "contains")
                  return (
                    (a.textContent || a.innerText || n([a]) || "").indexOf(
                      b[3]
                    ) >= 0
                  );
                if (e === "not") {
                  var g = b[3];
                  for (var h = 0, i = g.length; h < i; h++)
                    if (g[h] === a) return !1;
                  return !0;
                }
                m.error(e);
              },
              CHILD: function (a, b) {
                var c,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k = b[1],
                  l = a;
                switch (k) {
                  case "only":
                  case "first":
                    while ((l = l.previousSibling))
                      if (l.nodeType === 1) return !1;
                    if (k === "first") return !0;
                    l = a;
                  case "last":
                    while ((l = l.nextSibling)) if (l.nodeType === 1) return !1;
                    return !0;
                  case "nth":
                    (c = b[2]), (e = b[3]);
                    if (c === 1 && e === 0) return !0;
                    (f = b[0]), (g = a.parentNode);
                    if (g && (g[d] !== f || !a.nodeIndex)) {
                      i = 0;
                      for (l = g.firstChild; l; l = l.nextSibling)
                        l.nodeType === 1 && (l.nodeIndex = ++i);
                      g[d] = f;
                    }
                    j = a.nodeIndex - e;
                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
                }
              },
              ID: function (a, b) {
                return a.nodeType === 1 && a.getAttribute("id") === b;
              },
              TAG: function (a, b) {
                return (
                  (b === "*" && a.nodeType === 1) ||
                  (!!a.nodeName && a.nodeName.toLowerCase() === b)
                );
              },
              CLASS: function (a, b) {
                return (
                  (
                    " " +
                    (a.className || a.getAttribute("class")) +
                    " "
                  ).indexOf(b) > -1
                );
              },
              ATTR: function (a, b) {
                var c = b[1],
                  d = m.attr
                    ? m.attr(a, c)
                    : o.attrHandle[c]
                    ? o.attrHandle[c](a)
                    : a[c] != null
                    ? a[c]
                    : a.getAttribute(c),
                  e = d + "",
                  f = b[2],
                  g = b[4];
                return d == null
                  ? f === "!="
                  : !f && m.attr
                  ? d != null
                  : f === "="
                  ? e === g
                  : f === "*="
                  ? e.indexOf(g) >= 0
                  : f === "~="
                  ? (" " + e + " ").indexOf(g) >= 0
                  : g
                  ? f === "!="
                    ? e !== g
                    : f === "^="
                    ? e.indexOf(g) === 0
                    : f === "$="
                    ? e.substr(e.length - g.length) === g
                    : f === "|="
                    ? e === g || e.substr(0, g.length + 1) === g + "-"
                    : !1
                  : e && d !== !1;
              },
              POS: function (a, b, c, d) {
                var e = b[2],
                  f = o.setFilters[e];
                if (f) return f(a, c, b, d);
              },
            },
          }),
          p = o.match.POS,
          q = function (a, b) {
            return "\\" + (b - 0 + 1);
          };
        for (var r in o.match)
          (o.match[r] = new RegExp(
            o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source
          )),
            (o.leftMatch[r] = new RegExp(
              /(^(?:.|\r|\n)*?)/.source +
                o.match[r].source.replace(/\\(\d+)/g, q)
            ));
        var s = function (a, b) {
          a = Array.prototype.slice.call(a, 0);
          if (b) {
            b.push.apply(b, a);
            return b;
          }
          return a;
        };
        try {
          Array.prototype.slice.call(c.documentElement.childNodes, 0)[0]
            .nodeType;
        } catch (t) {
          s = function (a, b) {
            var c = 0,
              d = b || [];
            if (g.call(a) === "[object Array]")
              Array.prototype.push.apply(d, a);
            else if (typeof a.length == "number")
              for (var e = a.length; c < e; c++) d.push(a[c]);
            else for (; a[c]; c++) d.push(a[c]);
            return d;
          };
        }
        var u, v;
        c.documentElement.compareDocumentPosition
          ? (u = function (a, b) {
              if (a === b) {
                h = !0;
                return 0;
              }
              if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                return a.compareDocumentPosition ? -1 : 1;
              return a.compareDocumentPosition(b) & 4 ? -1 : 1;
            })
          : ((u = function (a, b) {
              if (a === b) {
                h = !0;
                return 0;
              }
              if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
              if (g === i) return v(a, b);
              if (!g) return -1;
              if (!i) return 1;
              while (j) e.unshift(j), (j = j.parentNode);
              j = i;
              while (j) f.unshift(j), (j = j.parentNode);
              (c = e.length), (d = f.length);
              for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k]) return v(e[k], f[k]);
              return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
            }),
            (v = function (a, b, c) {
              if (a === b) return c;
              var d = a.nextSibling;
              while (d) {
                if (d === b) return -1;
                d = d.nextSibling;
              }
              return 1;
            })),
          (function () {
            var a = c.createElement("div"),
              d = "script" + new Date().getTime(),
              e = c.documentElement;
            (a.innerHTML = "<a name='" + d + "'/>"),
              e.insertBefore(a, e.firstChild),
              c.getElementById(d) &&
                ((o.find.ID = function (a, c, d) {
                  if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e
                      ? e.id === a[1] ||
                        (typeof e.getAttributeNode != "undefined" &&
                          e.getAttributeNode("id").nodeValue === a[1])
                        ? [e]
                        : b
                      : [];
                  }
                }),
                (o.filter.ID = function (a, b) {
                  var c =
                    typeof a.getAttributeNode != "undefined" &&
                    a.getAttributeNode("id");
                  return a.nodeType === 1 && c && c.nodeValue === b;
                })),
              e.removeChild(a),
              (e = a = null);
          })(),
          (function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
              a.getElementsByTagName("*").length > 0 &&
                (o.find.TAG = function (a, b) {
                  var c = b.getElementsByTagName(a[1]);
                  if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++)
                      c[e].nodeType === 1 && d.push(c[e]);
                    c = d;
                  }
                  return c;
                }),
              (a.innerHTML = "<a href='#'></a>"),
              a.firstChild &&
                typeof a.firstChild.getAttribute != "undefined" &&
                a.firstChild.getAttribute("href") !== "#" &&
                (o.attrHandle.href = function (a) {
                  return a.getAttribute("href", 2);
                }),
              (a = null);
          })(),
          c.querySelectorAll &&
            (function () {
              var a = m,
                b = c.createElement("div"),
                d = "__sizzle__";
              b.innerHTML = "<p class='TEST'></p>";
              if (
                !b.querySelectorAll ||
                b.querySelectorAll(".TEST").length !== 0
              ) {
                m = function (b, e, f, g) {
                  e = e || c;
                  if (!g && !m.isXML(e)) {
                    var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                    if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                      if (h[1]) return s(e.getElementsByTagName(b), f);
                      if (h[2] && o.find.CLASS && e.getElementsByClassName)
                        return s(e.getElementsByClassName(h[2]), f);
                    }
                    if (e.nodeType === 9) {
                      if (b === "body" && e.body) return s([e.body], f);
                      if (h && h[3]) {
                        var i = e.getElementById(h[3]);
                        if (!i || !i.parentNode) return s([], f);
                        if (i.id === h[3]) return s([i], f);
                      }
                      try {
                        return s(e.querySelectorAll(b), f);
                      } catch (j) {}
                    } else if (
                      e.nodeType === 1 &&
                      e.nodeName.toLowerCase() !== "object"
                    ) {
                      var k = e,
                        l = e.getAttribute("id"),
                        n = l || d,
                        p = e.parentNode,
                        q = /^\s*[+~]/.test(b);
                      l
                        ? (n = n.replace(/'/g, "\\$&"))
                        : e.setAttribute("id", n),
                        q && p && (e = e.parentNode);
                      try {
                        if (!q || p)
                          return s(
                            e.querySelectorAll("[id='" + n + "'] " + b),
                            f
                          );
                      } catch (r) {
                      } finally {
                        l || k.removeAttribute("id");
                      }
                    }
                  }
                  return a(b, e, f, g);
                };
                for (var e in a) m[e] = a[e];
                b = null;
              }
            })(),
          (function () {
            var a = c.documentElement,
              b =
                a.matchesSelector ||
                a.mozMatchesSelector ||
                a.webkitMatchesSelector ||
                a.msMatchesSelector;
            if (b) {
              var d = !b.call(c.createElement("div"), "div"),
                e = !1;
              try {
                b.call(c.documentElement, "[test!='']:sizzle");
              } catch (f) {
                e = !0;
              }
              m.matchesSelector = function (a, c) {
                c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!m.isXML(a))
                  try {
                    if (e || (!o.match.PSEUDO.test(c) && !/!=/.test(c))) {
                      var f = b.call(a, c);
                      if (f || !d || (a.document && a.document.nodeType !== 11))
                        return f;
                    }
                  } catch (g) {}
                return m(c, null, null, [a]).length > 0;
              };
            }
          })(),
          (function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (
              !!a.getElementsByClassName &&
              a.getElementsByClassName("e").length !== 0
            ) {
              a.lastChild.className = "e";
              if (a.getElementsByClassName("e").length === 1) return;
              o.order.splice(1, 0, "CLASS"),
                (o.find.CLASS = function (a, b, c) {
                  if (typeof b.getElementsByClassName != "undefined" && !c)
                    return b.getElementsByClassName(a[1]);
                }),
                (a = null);
            }
          })(),
          c.documentElement.contains
            ? (m.contains = function (a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0);
              })
            : c.documentElement.compareDocumentPosition
            ? (m.contains = function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16);
              })
            : (m.contains = function () {
                return !1;
              }),
          (m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1;
          });
        var y = function (a, b, c) {
          var d,
            e = [],
            f = "",
            g = b.nodeType ? [b] : b;
          while ((d = o.match.PSEUDO.exec(a)))
            (f += d[0]), (a = a.replace(o.match.PSEUDO, ""));
          a = o.relative[a] ? a + "*" : a;
          for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
          return m.filter(f, e);
        };
        (m.attr = f.attr),
          (m.selectors.attrMap = {}),
          (f.find = m),
          (f.expr = m.selectors),
          (f.expr[":"] = f.expr.filters),
          (f.unique = m.uniqueSort),
          (f.text = m.getText),
          (f.isXMLDoc = m.isXML),
          (f.contains = m.contains);
      })();
    var L = /Until$/,
      M = /^(?:parents|prevUntil|prevAll)/,
      N = /,/,
      O = /^.[^:#\[\.,]*$/,
      P = Array.prototype.slice,
      Q = f.expr.match.POS,
      R = { children: !0, contents: !0, next: !0, prev: !0 };
    f.fn.extend({
      find: function (a) {
        var b = this,
          c,
          d;
        if (typeof a != "string")
          return f(a).filter(function () {
            for (c = 0, d = b.length; c < d; c++)
              if (f.contains(b[c], this)) return !0;
          });
        var e = this.pushStack("", "find", a),
          g,
          h,
          i;
        for (c = 0, d = this.length; c < d; c++) {
          (g = e.length), f.find(a, this[c], e);
          if (c > 0)
            for (h = g; h < e.length; h++)
              for (i = 0; i < g; i++)
                if (e[i] === e[h]) {
                  e.splice(h--, 1);
                  break;
                }
        }
        return e;
      },
      has: function (a) {
        var b = f(a);
        return this.filter(function () {
          for (var a = 0, c = b.length; a < c; a++)
            if (f.contains(this, b[a])) return !0;
        });
      },
      not: function (a) {
        return this.pushStack(T(this, a, !1), "not", a);
      },
      filter: function (a) {
        return this.pushStack(T(this, a, !0), "filter", a);
      },
      is: function (a) {
        return (
          !!a &&
          (typeof a == "string"
            ? Q.test(a)
              ? f(a, this.context).index(this[0]) >= 0
              : f.filter(a, this).length > 0
            : this.filter(a).length > 0)
        );
      },
      closest: function (a, b) {
        var c = [],
          d,
          e,
          g = this[0];
        if (f.isArray(a)) {
          var h = 1;
          while (g && g.ownerDocument && g !== b) {
            for (d = 0; d < a.length; d++)
              f(g).is(a[d]) && c.push({ selector: a[d], elem: g, level: h });
            (g = g.parentNode), h++;
          }
          return c;
        }
        var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
        for (d = 0, e = this.length; d < e; d++) {
          g = this[d];
          while (g) {
            if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
              c.push(g);
              break;
            }
            g = g.parentNode;
            if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break;
          }
        }
        c = c.length > 1 ? f.unique(c) : c;
        return this.pushStack(c, "closest", a);
      },
      index: function (a) {
        if (!a)
          return this[0] && this[0].parentNode ? this.prevAll().length : -1;
        if (typeof a == "string") return f.inArray(this[0], f(a));
        return f.inArray(a.jquery ? a[0] : a, this);
      },
      add: function (a, b) {
        var c =
            typeof a == "string"
              ? f(a, b)
              : f.makeArray(a && a.nodeType ? [a] : a),
          d = f.merge(this.get(), c);
        return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
      },
      andSelf: function () {
        return this.add(this.prevObject);
      },
    }),
      f.each(
        {
          parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
          },
          parents: function (a) {
            return f.dir(a, "parentNode");
          },
          parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c);
          },
          next: function (a) {
            return f.nth(a, 2, "nextSibling");
          },
          prev: function (a) {
            return f.nth(a, 2, "previousSibling");
          },
          nextAll: function (a) {
            return f.dir(a, "nextSibling");
          },
          prevAll: function (a) {
            return f.dir(a, "previousSibling");
          },
          nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c);
          },
          prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c);
          },
          siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a);
          },
          children: function (a) {
            return f.sibling(a.firstChild);
          },
          contents: function (a) {
            return f.nodeName(a, "iframe")
              ? a.contentDocument || a.contentWindow.document
              : f.makeArray(a.childNodes);
          },
        },
        function (a, b) {
          f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c),
              d && typeof d == "string" && (e = f.filter(d, e)),
              (e = this.length > 1 && !R[a] ? f.unique(e) : e),
              (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","));
          };
        }
      ),
      f.extend({
        filter: function (a, b, c) {
          c && (a = ":not(" + a + ")");
          return b.length === 1
            ? f.find.matchesSelector(b[0], a)
              ? [b[0]]
              : []
            : f.find.matches(a, b);
        },
        dir: function (a, c, d) {
          var e = [],
            g = a[c];
          while (
            g &&
            g.nodeType !== 9 &&
            (d === b || g.nodeType !== 1 || !f(g).is(d))
          )
            g.nodeType === 1 && e.push(g), (g = g[c]);
          return e;
        },
        nth: function (a, b, c, d) {
          b = b || 1;
          var e = 0;
          for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
          return a;
        },
        sibling: function (a, b) {
          var c = [];
          for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
          return c;
        },
      });
    var V =
        "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      W = / jQuery\d+="(?:\d+|null)"/g,
      X = /^\s+/,
      Y =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Z = /<([\w:]+)/,
      $ = /<tbody/i,
      _ = /<|&#?\w+;/,
      ba = /<(?:script|style)/i,
      bb = /<(?:script|object|embed|option|style)/i,
      bc = new RegExp("<(?:" + V + ")", "i"),
      bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
      be = /\/(java|ecma)script/i,
      bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
      bg = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""],
      },
      bh = U(c);
    (bg.optgroup = bg.option),
      (bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead),
      (bg.th = bg.td),
      f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
      f.fn.extend({
        text: function (a) {
          if (f.isFunction(a))
            return this.each(function (b) {
              var c = f(this);
              c.text(a.call(this, b, c.text()));
            });
          if (typeof a != "object" && a !== b)
            return this.empty().append(
              ((this[0] && this[0].ownerDocument) || c).createTextNode(a)
            );
          return f.text(this);
        },
        wrapAll: function (a) {
          if (f.isFunction(a))
            return this.each(function (b) {
              f(this).wrapAll(a.call(this, b));
            });
          if (this[0]) {
            var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  var a = this;
                  while (a.firstChild && a.firstChild.nodeType === 1)
                    a = a.firstChild;
                  return a;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (a) {
          if (f.isFunction(a))
            return this.each(function (b) {
              f(this).wrapInner(a.call(this, b));
            });
          return this.each(function () {
            var b = f(this),
              c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a);
          });
        },
        wrap: function (a) {
          var b = f.isFunction(a);
          return this.each(function (c) {
            f(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
            })
            .end();
        },
        append: function () {
          return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a);
          });
        },
        prepend: function () {
          return this.domManip(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild);
          });
        },
        before: function () {
          if (this[0] && this[0].parentNode)
            return this.domManip(arguments, !1, function (a) {
              this.parentNode.insertBefore(a, this);
            });
          if (arguments.length) {
            var a = f.clean(arguments);
            a.push.apply(a, this.toArray());
            return this.pushStack(a, "before", arguments);
          }
        },
        after: function () {
          if (this[0] && this[0].parentNode)
            return this.domManip(arguments, !1, function (a) {
              this.parentNode.insertBefore(a, this.nextSibling);
            });
          if (arguments.length) {
            var a = this.pushStack(this, "after", arguments);
            a.push.apply(a, f.clean(arguments));
            return a;
          }
        },
        remove: function (a, b) {
          for (var c = 0, d; (d = this[c]) != null; c++)
            if (!a || f.filter(a, [d]).length)
              !b &&
                d.nodeType === 1 &&
                (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
                d.parentNode && d.parentNode.removeChild(d);
          return this;
        },
        empty: function () {
          for (var a = 0, b; (b = this[a]) != null; a++) {
            b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
            while (b.firstChild) b.removeChild(b.firstChild);
          }
          return this;
        },
        clone: function (a, b) {
          (a = a == null ? !1 : a), (b = b == null ? a : b);
          return this.map(function () {
            return f.clone(this, a, b);
          });
        },
        html: function (a) {
          if (a === b)
            return this[0] && this[0].nodeType === 1
              ? this[0].innerHTML.replace(W, "")
              : null;
          if (
            typeof a == "string" &&
            !ba.test(a) &&
            (f.support.leadingWhitespace || !X.test(a)) &&
            !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]
          ) {
            a = a.replace(Y, "<$1></$2>");
            try {
              for (var c = 0, d = this.length; c < d; c++)
                this[c].nodeType === 1 &&
                  (f.cleanData(this[c].getElementsByTagName("*")),
                  (this[c].innerHTML = a));
            } catch (e) {
              this.empty().append(a);
            }
          } else
            f.isFunction(a)
              ? this.each(function (b) {
                  var c = f(this);
                  c.html(a.call(this, b, c.html()));
                })
              : this.empty().append(a);
          return this;
        },
        replaceWith: function (a) {
          if (this[0] && this[0].parentNode) {
            if (f.isFunction(a))
              return this.each(function (b) {
                var c = f(this),
                  d = c.html();
                c.replaceWith(a.call(this, b, d));
              });
            typeof a != "string" && (a = f(a).detach());
            return this.each(function () {
              var b = this.nextSibling,
                c = this.parentNode;
              f(this).remove(), b ? f(b).before(a) : f(c).append(a);
            });
          }
          return this.length
            ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a)
            : this;
        },
        detach: function (a) {
          return this.remove(a, !0);
        },
        domManip: function (a, c, d) {
          var e,
            g,
            h,
            i,
            j = a[0],
            k = [];
          if (
            !f.support.checkClone &&
            arguments.length === 3 &&
            typeof j == "string" &&
            bd.test(j)
          )
            return this.each(function () {
              f(this).domManip(a, c, d, !0);
            });
          if (f.isFunction(j))
            return this.each(function (e) {
              var g = f(this);
              (a[0] = j.call(this, e, c ? g.html() : b)), g.domManip(a, c, d);
            });
          if (this[0]) {
            (i = j && j.parentNode),
              f.support.parentNode &&
              i &&
              i.nodeType === 11 &&
              i.childNodes.length === this.length
                ? (e = { fragment: i })
                : (e = f.buildFragment(a, this, k)),
              (h = e.fragment),
              h.childNodes.length === 1
                ? (g = h = h.firstChild)
                : (g = h.firstChild);
            if (g) {
              c = c && f.nodeName(g, "tr");
              for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                d.call(
                  c ? bi(this[l], g) : this[l],
                  e.cacheable || (m > 1 && l < n) ? f.clone(h, !0, !0) : h
                );
            }
            k.length && f.each(k, bp);
          }
          return this;
        },
      }),
      (f.buildFragment = function (a, b, d) {
        var e,
          g,
          h,
          i,
          j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]),
          i.createDocumentFragment || (i = c),
          a.length === 1 &&
            typeof j == "string" &&
            j.length < 512 &&
            i === c &&
            j.charAt(0) === "<" &&
            !bb.test(j) &&
            (f.support.checkClone || !bd.test(j)) &&
            (f.support.html5Clone || !bc.test(j)) &&
            ((g = !0), (h = f.fragments[j]), h && h !== 1 && (e = h)),
          e || ((e = i.createDocumentFragment()), f.clean(a, i, e, d)),
          g && (f.fragments[j] = h ? e : 1);
        return { fragment: e, cacheable: g };
      }),
      (f.fragments = {}),
      f.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, b) {
          f.fn[a] = function (c) {
            var d = [],
              e = f(c),
              g = this.length === 1 && this[0].parentNode;
            if (
              g &&
              g.nodeType === 11 &&
              g.childNodes.length === 1 &&
              e.length === 1
            ) {
              e[b](this[0]);
              return this;
            }
            for (var h = 0, i = e.length; h < i; h++) {
              var j = (h > 0 ? this.clone(!0) : this).get();
              f(e[h])[b](j), (d = d.concat(j));
            }
            return this.pushStack(d, a, e.selector);
          };
        }
      ),
      f.extend({
        clone: function (a, b, c) {
          var d,
            e,
            g,
            h =
              f.support.html5Clone || !bc.test("<" + a.nodeName)
                ? a.cloneNode(!0)
                : bo(a);
          if (
            (!f.support.noCloneEvent || !f.support.noCloneChecked) &&
            (a.nodeType === 1 || a.nodeType === 11) &&
            !f.isXMLDoc(a)
          ) {
            bk(a, h), (d = bl(a)), (e = bl(h));
            for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]);
          }
          if (b) {
            bj(a, h);
            if (c) {
              (d = bl(a)), (e = bl(h));
              for (g = 0; d[g]; ++g) bj(d[g], e[g]);
            }
          }
          d = e = null;
          return h;
        },
        clean: function (a, b, d, e) {
          var g;
          (b = b || c),
            typeof b.createElement == "undefined" &&
              (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || c);
          var h = [],
            i;
          for (var j = 0, k; (k = a[j]) != null; j++) {
            typeof k == "number" && (k += "");
            if (!k) continue;
            if (typeof k == "string")
              if (!_.test(k)) k = b.createTextNode(k);
              else {
                k = k.replace(Y, "<$1></$2>");
                var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                  m = bg[l] || bg._default,
                  n = m[0],
                  o = b.createElement("div");
                b === c ? bh.appendChild(o) : U(b).appendChild(o),
                  (o.innerHTML = m[1] + k + m[2]);
                while (n--) o = o.lastChild;
                if (!f.support.tbody) {
                  var p = $.test(k),
                    q =
                      l === "table" && !p
                        ? o.firstChild && o.firstChild.childNodes
                        : m[1] === "<table>" && !p
                        ? o.childNodes
                        : [];
                  for (i = q.length - 1; i >= 0; --i)
                    f.nodeName(q[i], "tbody") &&
                      !q[i].childNodes.length &&
                      q[i].parentNode.removeChild(q[i]);
                }
                !f.support.leadingWhitespace &&
                  X.test(k) &&
                  o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild),
                  (k = o.childNodes);
              }
            var r;
            if (!f.support.appendChecked)
              if (k[0] && typeof (r = k.length) == "number")
                for (i = 0; i < r; i++) bn(k[i]);
              else bn(k);
            k.nodeType ? h.push(k) : (h = f.merge(h, k));
          }
          if (d) {
            g = function (a) {
              return !a.type || be.test(a.type);
            };
            for (j = 0; h[j]; j++)
              if (
                e &&
                f.nodeName(h[j], "script") &&
                (!h[j].type || h[j].type.toLowerCase() === "text/javascript")
              )
                e.push(
                  h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]
                );
              else {
                if (h[j].nodeType === 1) {
                  var s = f.grep(h[j].getElementsByTagName("script"), g);
                  h.splice.apply(h, [j + 1, 0].concat(s));
                }
                d.appendChild(h[j]);
              }
          }
          return h;
        },
        cleanData: function (a) {
          var b,
            c,
            d = f.cache,
            e = f.event.special,
            g = f.support.deleteExpando;
          for (var h = 0, i; (i = a[h]) != null; h++) {
            if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
            c = i[f.expando];
            if (c) {
              b = d[c];
              if (b && b.events) {
                for (var j in b.events)
                  e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                b.handle && (b.handle.elem = null);
              }
              g
                ? delete i[f.expando]
                : i.removeAttribute && i.removeAttribute(f.expando),
                delete d[c];
            }
          }
        },
      });
    var bq = /alpha\([^)]*\)/i,
      br = /opacity=([^)]*)/,
      bs = /([A-Z]|^ms)/g,
      bt = /^-?\d+(?:px)?$/i,
      bu = /^-?\d/,
      bv = /^([\-+])=([\-+.\de]+)/,
      bw = { position: "absolute", visibility: "hidden", display: "block" },
      bx = ["Left", "Right"],
      by = ["Top", "Bottom"],
      bz,
      bA,
      bB;
    (f.fn.css = function (a, c) {
      if (arguments.length === 2 && c === b) return this;
      return f.access(this, a, c, !0, function (a, c, d) {
        return d !== b ? f.style(a, c, d) : f.css(a, c);
      });
    }),
      f.extend({
        cssHooks: {
          opacity: {
            get: function (a, b) {
              if (b) {
                var c = bz(a, "opacity", "opacity");
                return c === "" ? "1" : c;
              }
              return a.style.opacity;
            },
          },
        },
        cssNumber: {
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: f.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (a, c, d, e) {
          if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
            var g,
              h,
              i = f.camelCase(c),
              j = a.style,
              k = f.cssHooks[i];
            c = f.cssProps[i] || i;
            if (d === b) {
              if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
              return j[c];
            }
            (h = typeof d),
              h === "string" &&
                (g = bv.exec(d)) &&
                ((d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c))),
                (h = "number"));
            if (d == null || (h === "number" && isNaN(d))) return;
            h === "number" && !f.cssNumber[i] && (d += "px");
            if (!k || !("set" in k) || (d = k.set(a, d)) !== b)
              try {
                j[c] = d;
              } catch (l) {}
          }
        },
        css: function (a, c, d) {
          var e, g;
          (c = f.camelCase(c)),
            (g = f.cssHooks[c]),
            (c = f.cssProps[c] || c),
            c === "cssFloat" && (c = "float");
          if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
          if (bz) return bz(a, c);
        },
        swap: function (a, b, c) {
          var d = {};
          for (var e in b) (d[e] = a.style[e]), (a.style[e] = b[e]);
          c.call(a);
          for (e in b) a.style[e] = d[e];
        },
      }),
      (f.curCSS = f.css),
      f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
          get: function (a, c, d) {
            var e;
            if (c) {
              if (a.offsetWidth !== 0) return bC(a, b, d);
              f.swap(a, bw, function () {
                e = bC(a, b, d);
              });
              return e;
            }
          },
          set: function (a, b) {
            if (!bt.test(b)) return b;
            b = parseFloat(b);
            if (b >= 0) return b + "px";
          },
        };
      }),
      f.support.opacity ||
        (f.cssHooks.opacity = {
          get: function (a, b) {
            return br.test(
              (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                ""
            )
              ? parseFloat(RegExp.$1) / 100 + ""
              : b
              ? "1"
              : "";
          },
          set: function (a, b) {
            var c = a.style,
              d = a.currentStyle,
              e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
              g = (d && d.filter) || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
              c.removeAttribute("filter");
              if (d && !d.filter) return;
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e;
          },
        }),
      f(function () {
        f.support.reliableMarginRight ||
          (f.cssHooks.marginRight = {
            get: function (a, b) {
              var c;
              f.swap(a, { display: "inline-block" }, function () {
                b
                  ? (c = bz(a, "margin-right", "marginRight"))
                  : (c = a.style.marginRight);
              });
              return c;
            },
          });
      }),
      c.defaultView &&
        c.defaultView.getComputedStyle &&
        (bA = function (a, b) {
          var c, d, e;
          (b = b.replace(bs, "-$1").toLowerCase()),
            (d = a.ownerDocument.defaultView) &&
              (e = d.getComputedStyle(a, null)) &&
              ((c = e.getPropertyValue(b)),
              c === "" &&
                !f.contains(a.ownerDocument.documentElement, a) &&
                (c = f.style(a, b)));
          return c;
        }),
      c.documentElement.currentStyle &&
        (bB = function (a, b) {
          var c,
            d,
            e,
            f = a.currentStyle && a.currentStyle[b],
            g = a.style;
          f === null && g && (e = g[b]) && (f = e),
            !bt.test(f) &&
              bu.test(f) &&
              ((c = g.left),
              (d = a.runtimeStyle && a.runtimeStyle.left),
              d && (a.runtimeStyle.left = a.currentStyle.left),
              (g.left = b === "fontSize" ? "1em" : f || 0),
              (f = g.pixelLeft + "px"),
              (g.left = c),
              d && (a.runtimeStyle.left = d));
          return f === "" ? "auto" : f;
        }),
      (bz = bA || bB),
      f.expr &&
        f.expr.filters &&
        ((f.expr.filters.hidden = function (a) {
          var b = a.offsetWidth,
            c = a.offsetHeight;
          return (
            (b === 0 && c === 0) ||
            (!f.support.reliableHiddenOffsets &&
              ((a.style && a.style.display) || f.css(a, "display")) === "none")
          );
        }),
        (f.expr.filters.visible = function (a) {
          return !f.expr.filters.hidden(a);
        }));
    var bD = /%20/g,
      bE = /\[\]$/,
      bF = /\r?\n/g,
      bG = /#.*$/,
      bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      bI =
        /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      bK = /^(?:GET|HEAD)$/,
      bL = /^\/\//,
      bM = /\?/,
      bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      bO = /^(?:select|textarea)/i,
      bP = /\s+/,
      bQ = /([?&])_=[^&]*/,
      bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
      bS = f.fn.load,
      bT = {},
      bU = {},
      bV,
      bW,
      bX = ["*/"] + ["*"];
    try {
      bV = e.href;
    } catch (bY) {
      (bV = c.createElement("a")), (bV.href = ""), (bV = bV.href);
    }
    (bW = bR.exec(bV.toLowerCase()) || []),
      f.fn.extend({
        load: function (a, c, d) {
          if (typeof a != "string" && bS) return bS.apply(this, arguments);
          if (!this.length) return this;
          var e = a.indexOf(" ");
          if (e >= 0) {
            var g = a.slice(e, a.length);
            a = a.slice(0, e);
          }
          var h = "GET";
          c &&
            (f.isFunction(c)
              ? ((d = c), (c = b))
              : typeof c == "object" &&
                ((c = f.param(c, f.ajaxSettings.traditional)), (h = "POST")));
          var i = this;
          f.ajax({
            url: a,
            type: h,
            dataType: "html",
            data: c,
            complete: function (a, b, c) {
              (c = a.responseText),
                a.isResolved() &&
                  (a.done(function (a) {
                    c = a;
                  }),
                  i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)),
                d && i.each(d, [c, b, a]);
            },
          });
          return this;
        },
        serialize: function () {
          return f.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            return this.elements ? f.makeArray(this.elements) : this;
          })
            .filter(function () {
              return (
                this.name &&
                !this.disabled &&
                (this.checked || bO.test(this.nodeName) || bI.test(this.type))
              );
            })
            .map(function (a, b) {
              var c = f(this).val();
              return c == null
                ? null
                : f.isArray(c)
                ? f.map(c, function (a, c) {
                    return { name: b.name, value: a.replace(bF, "\r\n") };
                  })
                : { name: b.name, value: c.replace(bF, "\r\n") };
            })
            .get();
        },
      }),
      f.each(
        "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
          " "
        ),
        function (a, b) {
          f.fn[b] = function (a) {
            return this.on(b, a);
          };
        }
      ),
      f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
          f.isFunction(d) && ((g = g || e), (e = d), (d = b));
          return f.ajax({ type: c, url: a, data: d, success: e, dataType: g });
        };
      }),
      f.extend({
        getScript: function (a, c) {
          return f.get(a, b, c, "script");
        },
        getJSON: function (a, b, c) {
          return f.get(a, b, c, "json");
        },
        ajaxSetup: function (a, b) {
          b ? b_(a, f.ajaxSettings) : ((b = a), (a = f.ajaxSettings)), b_(a, b);
          return a;
        },
        ajaxSettings: {
          url: bV,
          isLocal: bJ.test(bW[1]),
          global: !0,
          type: "GET",
          contentType: "application/x-www-form-urlencoded",
          processData: !0,
          async: !0,
          accepts: {
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain",
            json: "application/json, text/javascript",
            "*": bX,
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: { xml: "responseXML", text: "responseText" },
          converters: {
            "* text": a.String,
            "text html": !0,
            "text json": f.parseJSON,
            "text xml": f.parseXML,
          },
          flatOptions: { context: !0, url: !0 },
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function (a, c) {
          function w(a, c, l, m) {
            if (s !== 2) {
              (s = 2),
                q && clearTimeout(q),
                (p = b),
                (n = m || ""),
                (v.readyState = a > 0 ? 4 : 0);
              var o,
                r,
                u,
                w = c,
                x = l ? cb(d, v, l) : b,
                y,
                z;
              if ((a >= 200 && a < 300) || a === 304) {
                if (d.ifModified) {
                  if ((y = v.getResponseHeader("Last-Modified")))
                    f.lastModified[k] = y;
                  if ((z = v.getResponseHeader("Etag"))) f.etag[k] = z;
                }
                if (a === 304) (w = "notmodified"), (o = !0);
                else
                  try {
                    (r = cc(d, x)), (w = "success"), (o = !0);
                  } catch (A) {
                    (w = "parsererror"), (u = A);
                  }
              } else {
                u = w;
                if (!w || a) (w = "error"), a < 0 && (a = 0);
              }
              (v.status = a),
                (v.statusText = "" + (c || w)),
                o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
                v.statusCode(j),
                (j = b),
                t &&
                  g.trigger("ajax" + (o ? "Success" : "Error"), [
                    v,
                    d,
                    o ? r : u,
                  ]),
                i.fireWith(e, [v, w]),
                t &&
                  (g.trigger("ajaxComplete", [v, d]),
                  --f.active || f.event.trigger("ajaxStop"));
            }
          }
          typeof a == "object" && ((c = a), (a = b)), (c = c || {});
          var d = f.ajaxSetup({}, c),
            e = d.context || d,
            g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
            h = f.Deferred(),
            i = f.Callbacks("once memory"),
            j = d.statusCode || {},
            k,
            l = {},
            m = {},
            n,
            o,
            p,
            q,
            r,
            s = 0,
            t,
            u,
            v = {
              readyState: 0,
              setRequestHeader: function (a, b) {
                if (!s) {
                  var c = a.toLowerCase();
                  (a = m[c] = m[c] || a), (l[a] = b);
                }
                return this;
              },
              getAllResponseHeaders: function () {
                return s === 2 ? n : null;
              },
              getResponseHeader: function (a) {
                var c;
                if (s === 2) {
                  if (!o) {
                    o = {};
                    while ((c = bH.exec(n))) o[c[1].toLowerCase()] = c[2];
                  }
                  c = o[a.toLowerCase()];
                }
                return c === b ? null : c;
              },
              overrideMimeType: function (a) {
                s || (d.mimeType = a);
                return this;
              },
              abort: function (a) {
                (a = a || "abort"), p && p.abort(a), w(0, a);
                return this;
              },
            };
          h.promise(v),
            (v.success = v.done),
            (v.error = v.fail),
            (v.complete = i.add),
            (v.statusCode = function (a) {
              if (a) {
                var b;
                if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                else (b = a[v.status]), v.then(b, b);
              }
              return this;
            }),
            (d.url = ((a || d.url) + "")
              .replace(bG, "")
              .replace(bL, bW[1] + "//")),
            (d.dataTypes = f
              .trim(d.dataType || "*")
              .toLowerCase()
              .split(bP)),
            d.crossDomain == null &&
              ((r = bR.exec(d.url.toLowerCase())),
              (d.crossDomain = !(
                !r ||
                (r[1] == bW[1] &&
                  r[2] == bW[2] &&
                  (r[3] || (r[1] === "http:" ? 80 : 443)) ==
                    (bW[3] || (bW[1] === "http:" ? 80 : 443)))
              ))),
            d.data &&
              d.processData &&
              typeof d.data != "string" &&
              (d.data = f.param(d.data, d.traditional)),
            b$(bT, d, c, v);
          if (s === 2) return !1;
          (t = d.global),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !bK.test(d.type)),
            t && f.active++ === 0 && f.event.trigger("ajaxStart");
          if (!d.hasContent) {
            d.data &&
              ((d.url += (bM.test(d.url) ? "&" : "?") + d.data), delete d.data),
              (k = d.url);
            if (d.cache === !1) {
              var x = f.now(),
                y = d.url.replace(bQ, "$1_=" + x);
              d.url =
                y +
                (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "");
            }
          }
          ((d.data && d.hasContent && d.contentType !== !1) || c.contentType) &&
            v.setRequestHeader("Content-Type", d.contentType),
            d.ifModified &&
              ((k = k || d.url),
              f.lastModified[k] &&
                v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
              f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
            v.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "")
                : d.accepts["*"]
            );
          for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
          if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
            v.abort();
            return !1;
          }
          for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]);
          p = b$(bU, d, c, v);
          if (!p) w(-1, "No Transport");
          else {
            (v.readyState = 1),
              t && g.trigger("ajaxSend", [v, d]),
              d.async &&
                d.timeout > 0 &&
                (q = setTimeout(function () {
                  v.abort("timeout");
                }, d.timeout));
            try {
              (s = 1), p.send(l, w);
            } catch (z) {
              if (s < 2) w(-1, z);
              else throw z;
            }
          }
          return v;
        },
        param: function (a, c) {
          var d = [],
            e = function (a, b) {
              (b = f.isFunction(b) ? b() : b),
                (d[d.length] =
                  encodeURIComponent(a) + "=" + encodeURIComponent(b));
            };
          c === b && (c = f.ajaxSettings.traditional);
          if (f.isArray(a) || (a.jquery && !f.isPlainObject(a)))
            f.each(a, function () {
              e(this.name, this.value);
            });
          else for (var g in a) ca(g, a[g], c, e);
          return d.join("&").replace(bD, "+");
        },
      }),
      f.extend({ active: 0, lastModified: {}, etag: {} });
    var cd = f.now(),
      ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        return f.expando + "_" + cd++;
      },
    }),
      f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e =
          b.contentType === "application/x-www-form-urlencoded" &&
          typeof b.data == "string";
        if (
          b.dataTypes[0] === "jsonp" ||
          (b.jsonp !== !1 && (ce.test(b.url) || (e && ce.test(b.data))))
        ) {
          var g,
            h = (b.jsonpCallback = f.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2";
          b.jsonp !== !1 &&
            ((j = j.replace(ce, l)),
            b.url === j &&
              (e && (k = k.replace(ce, l)),
              b.data === k &&
                (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
            (b.url = j),
            (b.data = k),
            (a[h] = function (a) {
              g = [a];
            }),
            d.always(function () {
              (a[h] = i), g && f.isFunction(i) && a[h](g[0]);
            }),
            (b.converters["script json"] = function () {
              g || f.error(h + " was not called");
              return g[0];
            }),
            (b.dataTypes[0] = "json");
          return "script";
        }
      }),
      f.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /javascript|ecmascript/ },
        converters: {
          "text script": function (a) {
            f.globalEval(a);
            return a;
          },
        },
      }),
      f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1),
          a.crossDomain && ((a.type = "GET"), (a.global = !1));
      }),
      f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var d,
            e =
              c.head || c.getElementsByTagName("head")[0] || c.documentElement;
          return {
            send: function (f, g) {
              (d = c.createElement("script")),
                (d.async = "async"),
                a.scriptCharset && (d.charset = a.scriptCharset),
                (d.src = a.url),
                (d.onload = d.onreadystatechange =
                  function (a, c) {
                    if (
                      c ||
                      !d.readyState ||
                      /loaded|complete/.test(d.readyState)
                    )
                      (d.onload = d.onreadystatechange = null),
                        e && d.parentNode && e.removeChild(d),
                        (d = b),
                        c || g(200, "success");
                  }),
                e.insertBefore(d, e.firstChild);
            },
            abort: function () {
              d && d.onload(0, 1);
            },
          };
        }
      });
    var cf = a.ActiveXObject
        ? function () {
            for (var a in ch) ch[a](0, 1);
          }
        : !1,
      cg = 0,
      ch;
    (f.ajaxSettings.xhr = a.ActiveXObject
      ? function () {
          return (!this.isLocal && ci()) || cj();
        }
      : ci),
      (function (a) {
        f.extend(f.support, { ajax: !!a, cors: !!a && "withCredentials" in a });
      })(f.ajaxSettings.xhr()),
      f.support.ajax &&
        f.ajaxTransport(function (c) {
          if (!c.crossDomain || f.support.cors) {
            var d;
            return {
              send: function (e, g) {
                var h = c.xhr(),
                  i,
                  j;
                c.username
                  ? h.open(c.type, c.url, c.async, c.username, c.password)
                  : h.open(c.type, c.url, c.async);
                if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                c.mimeType &&
                  h.overrideMimeType &&
                  h.overrideMimeType(c.mimeType),
                  !c.crossDomain &&
                    !e["X-Requested-With"] &&
                    (e["X-Requested-With"] = "XMLHttpRequest");
                try {
                  for (j in e) h.setRequestHeader(j, e[j]);
                } catch (k) {}
                h.send((c.hasContent && c.data) || null),
                  (d = function (a, e) {
                    var j, k, l, m, n;
                    try {
                      if (d && (e || h.readyState === 4)) {
                        (d = b),
                          i &&
                            ((h.onreadystatechange = f.noop),
                            cf && delete ch[i]);
                        if (e) h.readyState !== 4 && h.abort();
                        else {
                          (j = h.status),
                            (l = h.getAllResponseHeaders()),
                            (m = {}),
                            (n = h.responseXML),
                            n && n.documentElement && (m.xml = n),
                            (m.text = h.responseText);
                          try {
                            k = h.statusText;
                          } catch (o) {
                            k = "";
                          }
                          !j && c.isLocal && !c.crossDomain
                            ? (j = m.text ? 200 : 404)
                            : j === 1223 && (j = 204);
                        }
                      }
                    } catch (p) {
                      e || g(-1, p);
                    }
                    m && g(j, k, m, l);
                  }),
                  !c.async || h.readyState === 4
                    ? d()
                    : ((i = ++cg),
                      cf && (ch || ((ch = {}), f(a).unload(cf)), (ch[i] = d)),
                      (h.onreadystatechange = d));
              },
              abort: function () {
                d && d(0, 1);
              },
            };
          }
        });
    var ck = {},
      cl,
      cm,
      cn = /^(?:toggle|show|hide)$/,
      co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
      cp,
      cq = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"],
      ],
      cr;
    f.fn.extend({
      show: function (a, b, c) {
        var d, e;
        if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
        for (var g = 0, h = this.length; g < h; g++)
          (d = this[g]),
            d.style &&
              ((e = d.style.display),
              !f._data(d, "olddisplay") &&
                e === "none" &&
                (e = d.style.display = ""),
              e === "" &&
                f.css(d, "display") === "none" &&
                f._data(d, "olddisplay", cv(d.nodeName)));
        for (g = 0; g < h; g++) {
          d = this[g];
          if (d.style) {
            e = d.style.display;
            if (e === "" || e === "none")
              d.style.display = f._data(d, "olddisplay") || "";
          }
        }
        return this;
      },
      hide: function (a, b, c) {
        if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
        var d,
          e,
          g = 0,
          h = this.length;
        for (; g < h; g++)
          (d = this[g]),
            d.style &&
              ((e = f.css(d, "display")),
              e !== "none" &&
                !f._data(d, "olddisplay") &&
                f._data(d, "olddisplay", e));
        for (g = 0; g < h; g++)
          this[g].style && (this[g].style.display = "none");
        return this;
      },
      _toggle: f.fn.toggle,
      toggle: function (a, b, c) {
        var d = typeof a == "boolean";
        f.isFunction(a) && f.isFunction(b)
          ? this._toggle.apply(this, arguments)
          : a == null || d
          ? this.each(function () {
              var b = d ? a : f(this).is(":hidden");
              f(this)[b ? "show" : "hide"]();
            })
          : this.animate(cu("toggle", 3), a, b, c);
        return this;
      },
      fadeTo: function (a, b, c, d) {
        return this.filter(":hidden")
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        function g() {
          e.queue === !1 && f._mark(this);
          var b = f.extend({}, e),
            c = this.nodeType === 1,
            d = c && f(this).is(":hidden"),
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o;
          b.animatedProperties = {};
          for (i in a) {
            (g = f.camelCase(i)),
              i !== g && ((a[g] = a[i]), delete a[i]),
              (h = a[g]),
              f.isArray(h)
                ? ((b.animatedProperties[g] = h[1]), (h = a[g] = h[0]))
                : (b.animatedProperties[g] =
                    (b.specialEasing && b.specialEasing[g]) ||
                    b.easing ||
                    "swing");
            if ((h === "hide" && d) || (h === "show" && !d))
              return b.complete.call(this);
            c &&
              (g === "height" || g === "width") &&
              ((b.overflow = [
                this.style.overflow,
                this.style.overflowX,
                this.style.overflowY,
              ]),
              f.css(this, "display") === "inline" &&
                f.css(this, "float") === "none" &&
                (!f.support.inlineBlockNeedsLayout ||
                cv(this.nodeName) === "inline"
                  ? (this.style.display = "inline-block")
                  : (this.style.zoom = 1)));
          }
          b.overflow != null && (this.style.overflow = "hidden");
          for (i in a)
            (j = new f.fx(this, b, i)),
              (h = a[i]),
              cn.test(h)
                ? ((o =
                    f._data(this, "toggle" + i) ||
                    (h === "toggle" ? (d ? "show" : "hide") : 0)),
                  o
                    ? (f._data(
                        this,
                        "toggle" + i,
                        o === "show" ? "hide" : "show"
                      ),
                      j[o]())
                    : j[h]())
                : ((k = co.exec(h)),
                  (l = j.cur()),
                  k
                    ? ((m = parseFloat(k[2])),
                      (n = k[3] || (f.cssNumber[i] ? "" : "px")),
                      n !== "px" &&
                        (f.style(this, i, (m || 1) + n),
                        (l = ((m || 1) / j.cur()) * l),
                        f.style(this, i, l + n)),
                      k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l),
                      j.custom(l, m, n))
                    : j.custom(l, h, ""));
          return !0;
        }
        var e = f.speed(b, c, d);
        if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
        a = f.extend({}, a);
        return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
      },
      stop: function (a, c, d) {
        typeof a != "string" && ((d = c), (c = a), (a = b)),
          c && a !== !1 && this.queue(a || "fx", []);
        return this.each(function () {
          function h(a, b, c) {
            var e = b[c];
            f.removeData(a, c, !0), e.stop(d);
          }
          var b,
            c = !1,
            e = f.timers,
            g = f._data(this);
          d || f._unmark(!0, this);
          if (a == null)
            for (b in g)
              g[b] &&
                g[b].stop &&
                b.indexOf(".run") === b.length - 4 &&
                h(this, g, b);
          else g[(b = a + ".run")] && g[b].stop && h(this, g, b);
          for (b = e.length; b--; )
            e[b].elem === this &&
              (a == null || e[b].queue === a) &&
              (d ? e[b](!0) : e[b].saveState(), (c = !0), e.splice(b, 1));
          (!d || !c) && f.dequeue(this, a);
        });
      },
    }),
      f.each(
        {
          slideDown: cu("show", 1),
          slideUp: cu("hide", 1),
          slideToggle: cu("toggle", 1),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (a, b) {
          f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      f.extend({
        speed: function (a, b, c) {
          var d =
            a && typeof a == "object"
              ? f.extend({}, a)
              : {
                  complete: c || (!c && b) || (f.isFunction(a) && a),
                  duration: a,
                  easing: (c && b) || (b && !f.isFunction(b) && b),
                };
          d.duration = f.fx.off
            ? 0
            : typeof d.duration == "number"
            ? d.duration
            : d.duration in f.fx.speeds
            ? f.fx.speeds[d.duration]
            : f.fx.speeds._default;
          if (d.queue == null || d.queue === !0) d.queue = "fx";
          (d.old = d.complete),
            (d.complete = function (a) {
              f.isFunction(d.old) && d.old.call(this),
                d.queue
                  ? f.dequeue(this, d.queue)
                  : a !== !1 && f._unmark(this);
            });
          return d;
        },
        easing: {
          linear: function (a, b, c, d) {
            return c + d * a;
          },
          swing: function (a, b, c, d) {
            return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c;
          },
        },
        timers: [],
        fx: function (a, b, c) {
          (this.options = b),
            (this.elem = a),
            (this.prop = c),
            (b.orig = b.orig || {});
        },
      }),
      (f.fx.prototype = {
        update: function () {
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
            (f.fx.step[this.prop] || f.fx.step._default)(this);
        },
        cur: function () {
          if (
            this.elem[this.prop] != null &&
            (!this.elem.style || this.elem.style[this.prop] == null)
          )
            return this.elem[this.prop];
          var a,
            b = f.css(this.elem, this.prop);
          return isNaN((a = parseFloat(b))) ? (!b || b === "auto" ? 0 : b) : a;
        },
        custom: function (a, c, d) {
          function h(a) {
            return e.step(a);
          }
          var e = this,
            g = f.fx;
          (this.startTime = cr || cs()),
            (this.end = c),
            (this.now = this.start = a),
            (this.pos = this.state = 0),
            (this.unit =
              d || this.unit || (f.cssNumber[this.prop] ? "" : "px")),
            (h.queue = this.options.queue),
            (h.elem = this.elem),
            (h.saveState = function () {
              e.options.hide &&
                f._data(e.elem, "fxshow" + e.prop) === b &&
                f._data(e.elem, "fxshow" + e.prop, e.start);
            }),
            h() &&
              f.timers.push(h) &&
              !cp &&
              (cp = setInterval(g.tick, g.interval));
        },
        show: function () {
          var a = f._data(this.elem, "fxshow" + this.prop);
          (this.options.orig[this.prop] = a || f.style(this.elem, this.prop)),
            (this.options.show = !0),
            a !== b
              ? this.custom(this.cur(), a)
              : this.custom(
                  this.prop === "width" || this.prop === "height" ? 1 : 0,
                  this.cur()
                ),
            f(this.elem).show();
        },
        hide: function () {
          (this.options.orig[this.prop] =
            f._data(this.elem, "fxshow" + this.prop) ||
            f.style(this.elem, this.prop)),
            (this.options.hide = !0),
            this.custom(this.cur(), 0);
        },
        step: function (a) {
          var b,
            c,
            d,
            e = cr || cs(),
            g = !0,
            h = this.elem,
            i = this.options;
          if (a || e >= i.duration + this.startTime) {
            (this.now = this.end),
              (this.pos = this.state = 1),
              this.update(),
              (i.animatedProperties[this.prop] = !0);
            for (b in i.animatedProperties)
              i.animatedProperties[b] !== !0 && (g = !1);
            if (g) {
              i.overflow != null &&
                !f.support.shrinkWrapBlocks &&
                f.each(["", "X", "Y"], function (a, b) {
                  h.style["overflow" + b] = i.overflow[a];
                }),
                i.hide && f(h).hide();
              if (i.hide || i.show)
                for (b in i.animatedProperties)
                  f.style(h, b, i.orig[b]),
                    f.removeData(h, "fxshow" + b, !0),
                    f.removeData(h, "toggle" + b, !0);
              (d = i.complete), d && ((i.complete = !1), d.call(h));
            }
            return !1;
          }
          i.duration == Infinity
            ? (this.now = e)
            : ((c = e - this.startTime),
              (this.state = c / i.duration),
              (this.pos = f.easing[i.animatedProperties[this.prop]](
                this.state,
                c,
                0,
                1,
                i.duration
              )),
              (this.now = this.start + (this.end - this.start) * this.pos)),
            this.update();
          return !0;
        },
      }),
      f.extend(f.fx, {
        tick: function () {
          var a,
            b = f.timers,
            c = 0;
          for (; c < b.length; c++)
            (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
          b.length || f.fx.stop();
        },
        interval: 13,
        stop: function () {
          clearInterval(cp), (cp = null);
        },
        speeds: { slow: 600, fast: 200, _default: 400 },
        step: {
          opacity: function (a) {
            f.style(a.elem, "opacity", a.now);
          },
          _default: function (a) {
            a.elem.style && a.elem.style[a.prop] != null
              ? (a.elem.style[a.prop] = a.now + a.unit)
              : (a.elem[a.prop] = a.now);
          },
        },
      }),
      f.each(["width", "height"], function (a, b) {
        f.fx.step[b] = function (a) {
          f.style(a.elem, b, Math.max(0, a.now) + a.unit);
        };
      }),
      f.expr &&
        f.expr.filters &&
        (f.expr.filters.animated = function (a) {
          return f.grep(f.timers, function (b) {
            return a === b.elem;
          }).length;
        });
    var cw = /^t(?:able|d|h)$/i,
      cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement
      ? (f.fn.offset = function (a) {
          var b = this[0],
            c;
          if (a)
            return this.each(function (b) {
              f.offset.setOffset(this, a, b);
            });
          if (!b || !b.ownerDocument) return null;
          if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
          try {
            c = b.getBoundingClientRect();
          } catch (d) {}
          var e = b.ownerDocument,
            g = e.documentElement;
          if (!c || !f.contains(g, b))
            return c ? { top: c.top, left: c.left } : { top: 0, left: 0 };
          var h = e.body,
            i = cy(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l =
              i.pageYOffset ||
              (f.support.boxModel && g.scrollTop) ||
              h.scrollTop,
            m =
              i.pageXOffset ||
              (f.support.boxModel && g.scrollLeft) ||
              h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
          return { top: n, left: o };
        })
      : (f.fn.offset = function (a) {
          var b = this[0];
          if (a)
            return this.each(function (b) {
              f.offset.setOffset(this, a, b);
            });
          if (!b || !b.ownerDocument) return null;
          if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
          var c,
            d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
          while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") break;
            (c = j ? j.getComputedStyle(b, null) : b.currentStyle),
              (l -= b.scrollTop),
              (m -= b.scrollLeft),
              b === d &&
                ((l += b.offsetTop),
                (m += b.offsetLeft),
                f.support.doesNotAddBorder &&
                  (!f.support.doesAddBorderForTableAndCells ||
                    !cw.test(b.nodeName)) &&
                  ((l += parseFloat(c.borderTopWidth) || 0),
                  (m += parseFloat(c.borderLeftWidth) || 0)),
                (e = d),
                (d = b.offsetParent)),
              f.support.subtractsBorderForOverflowNotVisible &&
                c.overflow !== "visible" &&
                ((l += parseFloat(c.borderTopWidth) || 0),
                (m += parseFloat(c.borderLeftWidth) || 0)),
              (k = c);
          }
          if (k.position === "relative" || k.position === "static")
            (l += i.offsetTop), (m += i.offsetLeft);
          f.support.fixedPosition &&
            k.position === "fixed" &&
            ((l += Math.max(h.scrollTop, i.scrollTop)),
            (m += Math.max(h.scrollLeft, i.scrollLeft)));
          return { top: l, left: m };
        }),
      (f.offset = {
        bodyOffset: function (a) {
          var b = a.offsetTop,
            c = a.offsetLeft;
          f.support.doesNotIncludeMarginInBodyOffset &&
            ((b += parseFloat(f.css(a, "marginTop")) || 0),
            (c += parseFloat(f.css(a, "marginLeft")) || 0));
          return { top: b, left: c };
        },
        setOffset: function (a, b, c) {
          var d = f.css(a, "position");
          d === "static" && (a.style.position = "relative");
          var e = f(a),
            g = e.offset(),
            h = f.css(a, "top"),
            i = f.css(a, "left"),
            j =
              (d === "absolute" || d === "fixed") &&
              f.inArray("auto", [h, i]) > -1,
            k = {},
            l = {},
            m,
            n;
          j
            ? ((l = e.position()), (m = l.top), (n = l.left))
            : ((m = parseFloat(h) || 0), (n = parseFloat(i) || 0)),
            f.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : e.css(k);
        },
      }),
      f.fn.extend({
        position: function () {
          if (!this[0]) return null;
          var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = cx.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
          (c.top -= parseFloat(f.css(a, "marginTop")) || 0),
            (c.left -= parseFloat(f.css(a, "marginLeft")) || 0),
            (d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0),
            (d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0);
          return { top: c.top - d.top, left: c.left - d.left };
        },
        offsetParent: function () {
          return this.map(function () {
            var a = this.offsetParent || c.body;
            while (
              a &&
              !cx.test(a.nodeName) &&
              f.css(a, "position") === "static"
            )
              a = a.offsetParent;
            return a;
          });
        },
      }),
      f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
          var e, g;
          if (c === b) {
            e = this[0];
            if (!e) return null;
            g = cy(e);
            return g
              ? "pageXOffset" in g
                ? g[a ? "pageYOffset" : "pageXOffset"]
                : (f.support.boxModel && g.document.documentElement[d]) ||
                  g.document.body[d]
              : e[d];
          }
          return this.each(function () {
            (g = cy(this)),
              g
                ? g.scrollTo(
                    a ? f(g).scrollLeft() : c,
                    a ? c : f(g).scrollTop()
                  )
                : (this[d] = c);
          });
        };
      }),
      f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        (f.fn["inner" + c] = function () {
          var a = this[0];
          return a
            ? a.style
              ? parseFloat(f.css(a, d, "padding"))
              : this[d]()
            : null;
        }),
          (f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b
              ? b.style
                ? parseFloat(f.css(b, d, a ? "margin" : "border"))
                : this[d]()
              : null;
          }),
          (f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a))
              return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()));
              });
            if (f.isWindow(e)) {
              var g = e.document.documentElement["client" + c],
                h = e.document.body;
              return (
                (e.document.compatMode === "CSS1Compat" && g) ||
                (h && h["client" + c]) ||
                g
              );
            }
            if (e.nodeType === 9)
              return Math.max(
                e.documentElement["client" + c],
                e.body["scroll" + c],
                e.documentElement["scroll" + c],
                e.body["offset" + c],
                e.documentElement["offset" + c]
              );
            if (a === b) {
              var i = f.css(e, d),
                j = parseFloat(i);
              return f.isNumeric(j) ? j : i;
            }
            return this.css(d, typeof a == "string" ? a : a + "px");
          });
      }),
      (a.jQuery = a.$ = f),
      typeof define == "function" &&
        define.amd &&
        define.amd.jQuery &&
        define("jquery", [], function () {
          return f;
        });
  })(window);
}
if (window.location.href === "https://nichesss.com") {
  // Redirect to "https://nichesss.com/home"
  window.location.href = "https://nichesss.com/home";
}
if (window.location.href === "https://www.closerscopy.com") {
  // Redirect to "https://nichesss.com/home"
  window.location.href = "https://www.closerscopy.com/dashboard";
}

if (window.location.hostname.indexOf("semrush") > -1) {
  $(".help-menu__button").remove();
  $(".srf-navbar .srf-navbar__primary").remove();
  $(".srf-navbar .srf-navbar__right").remove();
  $(".kwo-bulk-content-layout").remove();
  $("nav.s-row.srf-navigation").remove();
  $(".srf-layout__notification").remove();
  $("iframe ").remove();
}

if (window.location.hostname.indexOf("openai") > -1) {
  $(".scrollbar-trigger").remove();
  $(".bg-gray-900").remove();
}
if (window.location.hostname.indexOf("plugintheme") > -1) {
  /*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
  !(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat
        ? function (e) {
            return t.flat.call(e);
          }
        : function (e) {
            return t.concat.apply([], e);
          },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      y = n.hasOwnProperty,
      a = y.toString,
      l = a.call(Object),
      v = {},
      m = function (e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      },
      x = function (e) {
        return null != e && e === e.window;
      },
      E = C.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function b(e, t, n) {
      var r,
        i,
        o = (n = n || E).createElement("script");
      if (((o.text = e), t))
        for (r in c)
          (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? n[o.call(e)] || "object"
        : typeof e;
    }
    var f = "3.6.4",
      S = function (e, t) {
        return new S.fn.init(e, t);
      };
    function p(e) {
      var t = !!e && "length" in e && e.length,
        n = w(e);
      return (
        !m(e) &&
        !x(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (S.fn = S.prototype =
      {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = S.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return S.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            S.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            S.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice,
      }),
      (S.extend = S.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || m(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                      ? ((n = a[t]),
                        (o =
                          i && !Array.isArray(n)
                            ? []
                            : i || S.isPlainObject(n)
                            ? n
                            : {}),
                        (i = !1),
                        (a[t] = S.extend(l, o, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
      S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || "[object Object]" !== o.call(e)) &&
            (!(t = r(e)) ||
              ("function" ==
                typeof (n = y.call(t, "constructor") && t.constructor) &&
                a.call(n) === l))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          b(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (p(e)) {
            for (n = e.length; r < n; r++)
              if (!1 === t.call(e[r], r, e[r])) break;
          } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (p(Object(e))
                ? S.merge(n, "string" == typeof e ? [e] : e)
                : u.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : i.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
            e[i++] = t[r];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
            !t(e[i], i) !== a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            o = 0,
            a = [];
          if (p(e))
            for (r = e.length; o < r; o++)
              null != (i = t(e[o], o, n)) && a.push(i);
          else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return g(a);
        },
        guid: 1,
        support: v,
      }),
      "function" == typeof Symbol &&
        (S.fn[Symbol.iterator] = t[Symbol.iterator]),
      S.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          n["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var d = (function (n) {
      var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        y,
        s,
        c,
        v,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function (e, t) {
          return e === t && (l = !0), 0;
        },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        R =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          M +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W =
          "\\[" +
          M +
          "*(" +
          I +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          I +
          "))|)" +
          M +
          "*\\]",
        F =
          ":(" +
          I +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          W +
          ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
          ID: new RegExp("^#(" + I + ")"),
          CLASS: new RegExp("^\\.(" + I + ")"),
          TAG: new RegExp("^(" + I + "|[*])"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + R + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        ne = function (e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return (
            t ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t
            ? "\0" === e
              ? "\ufffd"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        oe = function () {
          T();
        },
        ae = be(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        H.apply((t = O.call(p.childNodes)), p.childNodes),
          t[p.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: t.length
            ? function (e, t) {
                L.apply(e, O.call(t));
              }
            : function (e, t) {
                var n = e.length,
                  r = 0;
                while ((e[n++] = t[r++]));
                e.length = n - 1;
              },
        };
      }
      function se(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
        )
          return n;
        if (!r && (T(e), (e = e || C), E)) {
          if (11 !== p && (u = Z.exec(t)))
            if ((i = u[1])) {
              if (9 === p) {
                if (!(a = e.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n;
              } else if (
                f &&
                (a = f.getElementById(i)) &&
                v(e, a) &&
                a.id === i
              )
                return n.push(a), n;
            } else {
              if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
              if (
                (i = u[3]) &&
                d.getElementsByClassName &&
                e.getElementsByClassName
              )
                return H.apply(n, e.getElementsByClassName(i)), n;
            }
          if (
            d.qsa &&
            !N[t + " "] &&
            (!y || !y.test(t)) &&
            (1 !== p || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
              ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
                ((s = e.getAttribute("id"))
                  ? (s = s.replace(re, ie))
                  : e.setAttribute("id", (s = S))),
                (o = (l = h(t)).length);
              while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
              c = l.join(",");
            }
            try {
              return H.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
              N(t, !0);
            } finally {
              s === S && e.removeAttribute("id");
            }
          }
        }
        return g(t.replace(B, "$1"), e, n, r);
      }
      function ue() {
        var r = [];
        return function e(t, n) {
          return (
            r.push(t + " ") > b.cacheLength && delete e[r.shift()],
            (e[t + " "] = n)
          );
        };
      }
      function le(e) {
        return (e[S] = !0), e;
      }
      function ce(e) {
        var t = C.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function fe(e, t) {
        var n = e.split("|"),
          r = n.length;
        while (r--) b.attrHandle[n[r]] = t;
      }
      function pe(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) while ((n = n.nextSibling)) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function de(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function ge(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function ye(a) {
        return le(function (o) {
          return (
            (o = +o),
            le(function (e, t) {
              var n,
                r = a([], e.length, o),
                i = r.length;
              while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function ve(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (e in ((d = se.support = {}),
      (i = se.isXML =
        function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || (n && n.nodeName) || "HTML");
        }),
      (T = se.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : p;
          return (
            r != C &&
              9 === r.nodeType &&
              r.documentElement &&
              ((a = (C = r).documentElement),
              (E = !i(C)),
              p != C &&
                (n = C.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", oe, !1)
                  : n.attachEvent && n.attachEvent("onunload", oe)),
              (d.scope = ce(function (e) {
                return (
                  a.appendChild(e).appendChild(C.createElement("div")),
                  "undefined" != typeof e.querySelectorAll &&
                    !e.querySelectorAll(":scope fieldset div").length
                );
              })),
              (d.cssHas = ce(function () {
                try {
                  return C.querySelector(":has(*,:jqfake)"), !1;
                } catch (e) {
                  return !0;
                }
              })),
              (d.attributes = ce(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (d.getElementsByTagName = ce(function (e) {
                return (
                  e.appendChild(C.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (d.getElementsByClassName = K.test(C.getElementsByClassName)),
              (d.getById = ce(function (e) {
                return (
                  (a.appendChild(e).id = S),
                  !C.getElementsByName || !C.getElementsByName(S).length
                );
              })),
              d.getById
                ? ((b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                      var t =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  }),
                  (b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (b.find.TAG = d.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (b.find.CLASS =
                d.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e);
                }),
              (s = []),
              (y = []),
              (d.qsa = K.test(C.querySelectorAll)) &&
                (ce(function (e) {
                  var t;
                  (a.appendChild(e).innerHTML =
                    "<a id='" +
                    S +
                    "'></a><select id='" +
                    S +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length ||
                      y.push("~="),
                    (t = C.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      y.push(
                        "\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"
                      ),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length ||
                      y.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    y.push("[\\r\\n\\f]");
                }),
                ce(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = C.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (a.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (d.matchesSelector = K.test(
                (c =
                  a.matches ||
                  a.webkitMatchesSelector ||
                  a.mozMatchesSelector ||
                  a.oMatchesSelector ||
                  a.msMatchesSelector)
              )) &&
                ce(function (e) {
                  (d.disconnectedMatch = c.call(e, "*")),
                    c.call(e, "[s!='']:x"),
                    s.push("!=", F);
                }),
              d.cssHas || y.push(":has"),
              (y = y.length && new RegExp(y.join("|"))),
              (s = s.length && new RegExp(s.join("|"))),
              (t = K.test(a.compareDocumentPosition)),
              (v =
                t || K.test(a.contains)
                  ? function (e, t) {
                      var n = (9 === e.nodeType && e.documentElement) || e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (j = t
                ? function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!d.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e == C || (e.ownerDocument == p && v(p, e))
                          ? -1
                          : t == C || (t.ownerDocument == p && v(p, t))
                          ? 1
                          : u
                          ? P(u, e) - P(u, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (l = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e == C
                        ? -1
                        : t == C
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? pe(a[r], s[r])
                      : a[r] == p
                      ? -1
                      : s[r] == p
                      ? 1
                      : 0;
                  })),
            C
          );
        }),
      (se.matches = function (e, t) {
        return se(e, null, null, t);
      }),
      (se.matchesSelector = function (e, t) {
        if (
          (T(e),
          d.matchesSelector &&
            E &&
            !N[t + " "] &&
            (!s || !s.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var n = c.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {
            N(t, !0);
          }
        return 0 < se(t, C, null, [e]).length;
      }),
      (se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), v(e, t);
      }),
      (se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r
          ? r
          : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (se.escape = function (e) {
        return (e + "").replace(re, ie);
      }),
      (se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (se.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((l = !d.detectDuplicates),
          (u = !d.sortStable && e.slice(0)),
          e.sort(j),
          l)
        ) {
          while ((t = e[i++])) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1);
        }
        return (u = null), e;
      }),
      (o = se.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else while ((t = e[r++])) n += o(t);
          return n;
        }),
      ((b = se.selectors =
        {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || se.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && se.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return G.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = h(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = m[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  m(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, r, i) {
              return function (e) {
                var t = se.attr(e, n);
                return null == t
                  ? "!=" === r
                  : !r ||
                      ((t += ""),
                      "=" === r
                        ? t === i
                        : "!=" === r
                        ? t !== i
                        : "^=" === r
                        ? i && 0 === t.indexOf(i)
                        : "*=" === r
                        ? i && -1 < t.indexOf(i)
                        : "$=" === r
                        ? i && t.slice(-i.length) === i
                        : "~=" === r
                        ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                        : "|=" === r &&
                          (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (h, e, t, g, y) {
              var v = "nth" !== h.slice(0, 3),
                m = "last" !== h.slice(-4),
                x = "of-type" === e;
              return 1 === g && 0 === y
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      u,
                      l = v !== m ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = x && e.nodeName.toLowerCase(),
                      p = !n && !x,
                      d = !1;
                    if (c) {
                      if (v) {
                        while (l) {
                          a = e;
                          while ((a = a[l]))
                            if (
                              x
                                ? a.nodeName.toLowerCase() === f
                                : 1 === a.nodeType
                            )
                              return !1;
                          u = l = "only" === h && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                        (d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1]) && r[2]),
                          (a = s && c.childNodes[s]);
                        while (
                          (a = (++s && a && a[l]) || (d = s = 0) || u.pop())
                        )
                          if (1 === a.nodeType && ++d && a === e) {
                            i[h] = [k, s, d];
                            break;
                          }
                      } else if (
                        (p &&
                          (d = s =
                            (r =
                              (i =
                                (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1]),
                        !1 === d)
                      )
                        while (
                          (a = (++s && a && a[l]) || (d = s = 0) || u.pop())
                        )
                          if (
                            (x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType) &&
                            ++d &&
                            (p &&
                              ((i =
                                (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] = [k, d]),
                            a === e)
                          )
                            break;
                      return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                a =
                  b.pseudos[e] ||
                  b.setFilters[e.toLowerCase()] ||
                  se.error("unsupported pseudo: " + e);
              return a[S]
                ? a(o)
                : 1 < a.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
            },
          },
          pseudos: {
            not: le(function (e) {
              var r = [],
                i = [],
                s = f(e.replace(B, "$1"));
              return s[S]
                ? le(function (e, t, n, r) {
                    var i,
                      o = s(e, null, r, []),
                      a = e.length;
                    while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                  })
                : function (e, t, n) {
                    return (
                      (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                    );
                  };
            }),
            has: le(function (t) {
              return function (e) {
                return 0 < se(t, e).length;
              };
            }),
            contains: le(function (t) {
              return (
                (t = t.replace(te, ne)),
                function (e) {
                  return -1 < (e.textContent || o(e)).indexOf(t);
                }
              );
            }),
            lang: le(function (n) {
              return (
                V.test(n || "") || se.error("unsupported lang: " + n),
                (n = n.replace(te, ne).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === a;
            },
            focus: function (e) {
              return (
                e === C.activeElement &&
                (!C.hasFocus || C.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !b.pseudos.empty(e);
            },
            header: function (e) {
              return J.test(e.nodeName);
            },
            input: function (e) {
              return Q.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ye(function () {
              return [0];
            }),
            last: ye(function (e, t) {
              return [t - 1];
            }),
            eq: ye(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ye(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ye(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = b.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        b.pseudos[e] = de(e);
      for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
      function me() {}
      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function be(s, e, t) {
        var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
        return e.first
          ? function (e, t, n) {
              while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
              return !1;
            }
          : function (e, t, n) {
              var r,
                i,
                o,
                a = [k, p];
              if (n) {
                while ((e = e[u]))
                  if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
              } else
                while ((e = e[u]))
                  if (1 === e.nodeType || f)
                    if (
                      ((i =
                        (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                        (o[e.uniqueID] = {})),
                      l && l === e.nodeName.toLowerCase())
                    )
                      e = e[u] || e;
                    else {
                      if ((r = i[c]) && r[0] === k && r[1] === p)
                        return (a[2] = r[2]);
                      if (((i[c] = a)[2] = s(e, t, n))) return !0;
                    }
              return !1;
            };
      }
      function we(i) {
        return 1 < i.length
          ? function (e, t, n) {
              var r = i.length;
              while (r--) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function Te(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
        return a;
      }
      function Ce(d, h, g, y, v, e) {
        return (
          y && !y[S] && (y = Ce(y)),
          v && !v[S] && (v = Ce(v, e)),
          le(function (e, t, n, r) {
            var i,
              o,
              a,
              s = [],
              u = [],
              l = t.length,
              c =
                e ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              f = !d || (!e && h) ? c : Te(c, s, d, n, r),
              p = g ? (v || (e ? d : l || y) ? [] : t) : f;
            if ((g && g(f, p, n, r), y)) {
              (i = Te(p, u)), y(i, [], n, r), (o = i.length);
              while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
            }
            if (e) {
              if (v || d) {
                if (v) {
                  (i = []), (o = p.length);
                  while (o--) (a = p[o]) && i.push((f[o] = a));
                  v(null, (p = []), i, r);
                }
                o = p.length;
                while (o--)
                  (a = p[o]) &&
                    -1 < (i = v ? P(e, a) : s[o]) &&
                    (e[i] = !(t[i] = a));
              }
            } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
          })
        );
      }
      function Ee(e) {
        for (
          var i,
            t,
            n,
            r = e.length,
            o = b.relative[e[0].type],
            a = o || b.relative[" "],
            s = o ? 1 : 0,
            u = be(
              function (e) {
                return e === i;
              },
              a,
              !0
            ),
            l = be(
              function (e) {
                return -1 < P(i, e);
              },
              a,
              !0
            ),
            c = [
              function (e, t, n) {
                var r =
                  (!o && (n || t !== w)) ||
                  ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return (i = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
          else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
              for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
              return Ce(
                1 < s && we(c),
                1 < s &&
                  xe(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(B, "$1"),
                t,
                s < n && Ee(e.slice(s, n)),
                n < r && Ee((e = e.slice(n))),
                n < r && xe(e)
              );
            }
            c.push(t);
          }
        return we(c);
      }
      return (
        (me.prototype = b.filters = b.pseudos),
        (b.setFilters = new me()),
        (h = se.tokenize =
          function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              u,
              l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            (a = e), (s = []), (u = b.preFilter);
            while (a) {
              for (o in ((n && !(r = _.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
              (n = !1),
              (r = z.exec(a)) &&
                ((n = r.shift()),
                i.push({ value: n, type: r[0].replace(B, " ") }),
                (a = a.slice(n.length))),
              b.filter))
                !(r = G[o].exec(a)) ||
                  (u[o] && !(r = u[o](r))) ||
                  ((n = r.shift()),
                  i.push({ value: n, type: o, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
          }),
        (f = se.compile =
          function (e, t) {
            var n,
              y,
              v,
              m,
              x,
              r,
              i = [],
              o = [],
              a = A[e + " "];
            if (!a) {
              t || (t = h(e)), (n = t.length);
              while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
              (a = A(
                e,
                ((y = o),
                (m = 0 < (v = i).length),
                (x = 0 < y.length),
                (r = function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || (x && b.find.TAG("*", i)),
                    h = (k += null == p ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    i && (w = t == C || t || i);
                    l !== g && null != (o = d[l]);
                    l++
                  ) {
                    if (x && o) {
                      (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                      while ((s = y[a++]))
                        if (s(o, t || C, n)) {
                          r.push(o);
                          break;
                        }
                      i && (k = h);
                    }
                    m && ((o = !s && o) && u--, e && c.push(o));
                  }
                  if (((u += l), m && l !== u)) {
                    a = 0;
                    while ((s = v[a++])) s(c, f, t, n);
                    if (e) {
                      if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                      f = Te(f);
                    }
                    H.apply(r, f),
                      i &&
                        !e &&
                        0 < f.length &&
                        1 < u + v.length &&
                        se.uniqueSort(r);
                  }
                  return i && ((k = h), (w = p)), c;
                }),
                m ? le(r) : r)
              )).selector = e;
            }
            return a;
          }),
        (g = se.select =
          function (e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = "function" == typeof e && e,
              c = !r && h((e = l.selector || e));
            if (((n = n || []), 1 === c.length)) {
              if (
                2 < (o = c[0] = c[0].slice(0)).length &&
                "ID" === (a = o[0]).type &&
                9 === t.nodeType &&
                E &&
                b.relative[o[1].type]
              ) {
                if (
                  !(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])
                )
                  return n;
                l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              i = G.needsContext.test(e) ? 0 : o.length;
              while (i--) {
                if (((a = o[i]), b.relative[(s = a.type)])) break;
                if (
                  (u = b.find[s]) &&
                  (r = u(
                    a.matches[0].replace(te, ne),
                    (ee.test(o[0].type) && ve(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(i, 1), !(e = r.length && xe(o))))
                    return H.apply(n, r), n;
                  break;
                }
              }
            }
            return (
              (l || f(e, c))(
                r,
                t,
                !E,
                n,
                !t || (ee.test(e) && ve(t.parentNode)) || t
              ),
              n
            );
          }),
        (d.sortStable = S.split("").sort(j).join("") === S),
        (d.detectDuplicates = !!l),
        T(),
        (d.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        })),
        ce(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          fe("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          ce(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        ce(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          fe(R, function (e, t, n) {
            var r;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
          }),
        se
      );
    })(C);
    (S.find = d),
      (S.expr = d.selectors),
      (S.expr[":"] = S.expr.pseudos),
      (S.uniqueSort = S.unique = d.uniqueSort),
      (S.text = d.getText),
      (S.isXMLDoc = d.isXML),
      (S.contains = d.contains),
      (S.escapeSelector = d.escape);
    var h = function (e, t, n) {
        var r = [],
          i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
          if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      T = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      k = S.expr.match.needsContext;
    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
      return m(n)
        ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r;
          })
        : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : "string" != typeof n
        ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r;
          })
        : S.filter(n, e, r);
    }
    (S.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType
          ? S.find.matchesSelector(r, e)
            ? [r]
            : []
          : S.find.matches(
              e,
              S.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      S.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e)
            return this.pushStack(
              S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
          return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(j(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(j(this, e || [], !0));
        },
        is: function (e) {
          return !!j(
            this,
            "string" == typeof e && k.test(e) ? S(e) : e || [],
            !1
          ).length;
        },
      });
    var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((S.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || D), "string" == typeof e)) {
        if (
          !(r =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : q.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof S ? t[0] : t),
            S.merge(
              this,
              S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
            ),
            N.test(r[1]) && S.isPlainObject(t))
          )
            for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
    }).prototype = S.fn),
      (D = S(E));
    var L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
    }
    S.fn.extend({
      has: function (e) {
        var t = S(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
        if (!k.test(e))
          for (; r < i; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? -1 < a.index(n)
                  : 1 === n.nodeType && S.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? i.call(S(e), this[0])
            : i.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      S.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return h(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n);
          },
          next: function (e) {
            return O(e, "nextSibling");
          },
          prev: function (e) {
            return O(e, "previousSibling");
          },
          nextAll: function (e) {
            return h(e, "nextSibling");
          },
          prevAll: function (e) {
            return h(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n);
          },
          siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return T(e.firstChild);
          },
          contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument)
              ? e.contentDocument
              : (A(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes));
          },
        },
        function (r, i) {
          S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return (
              "Until" !== r.slice(-5) && (t = e),
              t && "string" == typeof t && (n = S.filter(t, n)),
              1 < this.length &&
                (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
      return e;
    }
    function M(e) {
      throw e;
    }
    function I(e, t, n, r) {
      var i;
      try {
        e && m((i = e.promise))
          ? i.call(e).done(t).fail(n)
          : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (S.Callbacks = function (r) {
      var e, n;
      r =
        "string" == typeof r
          ? ((e = r),
            (n = {}),
            S.each(e.match(P) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : S.extend({}, r);
      var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
          for (a = a || r.once, o = i = !0; u.length; l = -1) {
            t = u.shift();
            while (++l < s.length)
              !1 === s[l].apply(t[0], t[1]) &&
                r.stopOnFalse &&
                ((l = s.length), (t = !1));
          }
          r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
        },
        f = {
          add: function () {
            return (
              s &&
                (t && !i && ((l = s.length - 1), u.push(t)),
                (function n(e) {
                  S.each(e, function (e, t) {
                    m(t)
                      ? (r.unique && f.has(t)) || s.push(t)
                      : t && t.length && "string" !== w(t) && n(t);
                  });
                })(arguments),
                t && !i && c()),
              this
            );
          },
          remove: function () {
            return (
              S.each(arguments, function (e, t) {
                var n;
                while (-1 < (n = S.inArray(t, s, n)))
                  s.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < S.inArray(e, s) : 0 < s.length;
          },
          empty: function () {
            return s && (s = []), this;
          },
          disable: function () {
            return (a = u = []), (s = t = ""), this;
          },
          disabled: function () {
            return !s;
          },
          lock: function () {
            return (a = u = []), t || i || (s = t = ""), this;
          },
          locked: function () {
            return !!a;
          },
          fireWith: function (e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                i || c()),
              this
            );
          },
          fire: function () {
            return f.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return f;
    }),
      S.extend({
        Deferred: function (e) {
          var o = [
              [
                "notify",
                "progress",
                S.Callbacks("memory"),
                S.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                S.Callbacks("once memory"),
                S.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            a = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return a.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return S.Deferred(function (r) {
                  S.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                }).promise();
              },
              then: function (t, n, r) {
                var u = 0;
                function l(i, o, a, s) {
                  return function () {
                    var n = this,
                      r = arguments,
                      e = function () {
                        var e, t;
                        if (!(i < u)) {
                          if ((e = a.apply(n, r)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            m(t)
                              ? s
                                ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                                : (u++,
                                  t.call(
                                    e,
                                    l(u, o, R, s),
                                    l(u, o, M, s),
                                    l(u, o, R, o.notifyWith)
                                  ))
                              : (a !== R && ((n = void 0), (r = [e])),
                                (s || o.resolveWith)(n, r));
                        }
                      },
                      t = s
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              S.Deferred.exceptionHook &&
                                S.Deferred.exceptionHook(e, t.stackTrace),
                                u <= i + 1 &&
                                  (a !== M && ((n = void 0), (r = [e])),
                                  o.rejectWith(n, r));
                            }
                          };
                    i
                      ? t()
                      : (S.Deferred.getStackHook &&
                          (t.stackTrace = S.Deferred.getStackHook()),
                        C.setTimeout(t));
                  };
                }
                return S.Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : R)),
                    o[2][3].add(l(0, e, m(n) ? n : M));
                }).promise();
              },
              promise: function (e) {
                return null != e ? S.extend(e, a) : a;
              },
            },
            s = {};
          return (
            S.each(o, function (e, t) {
              var n = t[2],
                r = t[5];
              (a[t[1]] = n.add),
                r &&
                  n.add(
                    function () {
                      i = r;
                    },
                    o[3 - e][2].disable,
                    o[3 - e][3].disable,
                    o[0][2].lock,
                    o[0][3].lock
                  ),
                n.add(t[3].fire),
                (s[t[0]] = function () {
                  return (
                    s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                  );
                }),
                (s[t[0] + "With"] = n.fireWith);
            }),
            a.promise(s),
            e && e.call(s, s),
            s
          );
        },
        when: function (e) {
          var n = arguments.length,
            t = n,
            r = Array(t),
            i = s.call(arguments),
            o = S.Deferred(),
            a = function (t) {
              return function (e) {
                (r[t] = this),
                  (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || o.resolveWith(r, i);
              };
            };
          if (
            n <= 1 &&
            (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then))
          )
            return o.then();
          while (t--) I(i[t], a(t), o.reject);
          return o.promise();
        },
      });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
      C.console &&
        C.console.warn &&
        e &&
        W.test(e.name) &&
        C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (S.readyException = function (e) {
        C.setTimeout(function () {
          throw e;
        });
      });
    var F = S.Deferred();
    function $() {
      E.removeEventListener("DOMContentLoaded", $),
        C.removeEventListener("load", $),
        S.ready();
    }
    (S.fn.ready = function (e) {
      return (
        F.then(e)["catch"](function (e) {
          S.readyException(e);
        }),
        this
      );
    }),
      S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --S.readyWait : S.isReady) ||
            ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
            F.resolveWith(E, [S]);
        },
      }),
      (S.ready.then = F.then),
      "complete" === E.readyState ||
      ("loading" !== E.readyState && !E.documentElement.doScroll)
        ? C.setTimeout(S.ready)
        : (E.addEventListener("DOMContentLoaded", $),
          C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === w(n))
          for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
        else if (
          void 0 !== r &&
          ((i = !0),
          m(r) || (a = !0),
          l &&
            (a
              ? (t.call(e, r), (t = null))
              : ((l = t),
                (t = function (e, t, n) {
                  return l.call(S(e), n);
                }))),
          t)
        )
          for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      _ = /^-ms-/,
      z = /-([a-z])/g;
    function U(e, t) {
      return t.toUpperCase();
    }
    function X(e) {
      return e.replace(_, "ms-").replace(z, U);
    }
    var V = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
      this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
      (G.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              V(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[X(t)] = n;
          else for (r in t) i[X(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][X(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(X)
                : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
              while (n--) delete r[t[n]];
            }
            (void 0 === t || S.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !S.isEmptyObject(t);
        },
      });
    var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;
    function Z(e, t, n) {
      var r, i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(r)))
        ) {
          try {
            n =
              "true" === (i = n) ||
              ("false" !== i &&
                ("null" === i
                  ? null
                  : i === +i + ""
                  ? +i
                  : J.test(i)
                  ? JSON.parse(i)
                  : i));
          } catch (e) {}
          Q.set(e, t, n);
        } else n = void 0;
      return n;
    }
    S.extend({
      hasData: function (e) {
        return Q.hasData(e) || Y.hasData(e);
      },
      data: function (e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function (e, t) {
        Q.remove(e, t);
      },
      _data: function (e, t, n) {
        return Y.access(e, t, n);
      },
      _removeData: function (e, t) {
        Y.remove(e, t);
      },
    }),
      S.fn.extend({
        data: function (n, e) {
          var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === n) {
            if (
              this.length &&
              ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
            ) {
              t = a.length;
              while (t--)
                a[t] &&
                  0 === (r = a[t].name).indexOf("data-") &&
                  ((r = X(r.slice(5))), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0);
            }
            return i;
          }
          return "object" == typeof n
            ? this.each(function () {
                Q.set(this, n);
              })
            : B(
                this,
                function (e) {
                  var t;
                  if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n))
                      ? t
                      : void 0 !== (t = Z(o, n))
                      ? t
                      : void 0;
                  this.each(function () {
                    Q.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e);
          });
        },
      }),
      S.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = Y.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = Y.access(e, t, S.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = S.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = S._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  S.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            Y.get(e, n) ||
            Y.access(e, n, {
              empty: S.Callbacks("once memory").add(function () {
                Y.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      S.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? S.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            S.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            i = S.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || i.resolveWith(o, [o]);
            };
          "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
          while (a--)
            (n = Y.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
          return s(), i.promise(t);
        },
      });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
        return S.contains(e.ownerDocument, e);
      },
      oe = { composed: !0 };
    re.getRootNode &&
      (ie = function (e) {
        return (
          S.contains(e.ownerDocument, e) ||
          e.getRootNode(oe) === e.ownerDocument
        );
      });
    var ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
      );
    };
    function se(e, t, n, r) {
      var i,
        o,
        a = 20,
        s = r
          ? function () {
              return r.cur();
            }
          : function () {
              return S.css(e, t, "");
            },
        u = s(),
        l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
        c =
          e.nodeType &&
          (S.cssNumber[t] || ("px" !== l && +u)) &&
          te.exec(S.css(e, t));
      if (c && c[3] !== l) {
        (u /= 2), (l = l || c[3]), (c = +u || 1);
        while (a--)
          S.style(e, t, c + l),
            (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
            (c /= o);
        (c *= 2), S.style(e, t, c + l), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +u || 0),
          (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = l), (r.start = c), (r.end = i))),
        i
      );
    }
    var ue = {};
    function le(e, t) {
      for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
        (r = e[c]).style &&
          ((n = r.style.display),
          t
            ? ("none" === n &&
                ((l[c] = Y.get(r, "display") || null),
                l[c] || (r.style.display = "")),
              "" === r.style.display &&
                ae(r) &&
                (l[c] =
                  ((u = a = o = void 0),
                  (a = (i = r).ownerDocument),
                  (s = i.nodeName),
                  (u = ue[s]) ||
                    ((o = a.body.appendChild(a.createElement(s))),
                    (u = S.css(o, "display")),
                    o.parentNode.removeChild(o),
                    "none" === u && (u = "block"),
                    (ue[s] = u)))))
            : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
      for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
      return e;
    }
    S.fn.extend({
      show: function () {
        return le(this, !0);
      },
      hide: function () {
        return le(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ae(this) ? S(this).show() : S(this).hide();
            });
      },
    });
    var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
      (fe = E.createElement("input")).setAttribute("type", "radio"),
      fe.setAttribute("checked", "checked"),
      fe.setAttribute("name", "t"),
      ce.appendChild(fe),
      (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (ce.innerHTML = "<textarea>x</textarea>"),
      (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
      (ce.innerHTML = "<option></option>"),
      (v.option = !!ce.lastChild);
    var ge = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function ye(e, t) {
      var n;
      return (
        (n =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
      );
    }
    function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
      (ge.th = ge.td),
      v.option ||
        (ge.optgroup = ge.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
      for (
        var o,
          a,
          s,
          u,
          l,
          c,
          f = t.createDocumentFragment(),
          p = [],
          d = 0,
          h = e.length;
        d < h;
        d++
      )
        if ((o = e[d]) || 0 === o)
          if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
          else if (me.test(o)) {
            (a = a || f.appendChild(t.createElement("div"))),
              (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
              (u = ge[s] || ge._default),
              (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
              (c = u[0]);
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
          } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
        if (r && -1 < S.inArray(o, r)) i && i.push(o);
        else if (
          ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
        ) {
          c = 0;
          while ((o = a[c++])) he.test(o.type || "") && n.push(o);
        }
      return f;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
      return !0;
    }
    function Te() {
      return !1;
    }
    function Ce(e, t) {
      return (
        (e ===
          (function () {
            try {
              return E.activeElement;
            } catch (e) {}
          })()) ==
        ("focus" === t)
      );
    }
    function Ee(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
          Ee(e, s, n, r, t[s], o);
        return e;
      }
      if (
        (null == r && null == i
          ? ((i = n), (r = n = void 0))
          : null == i &&
            ("string" == typeof n
              ? ((i = r), (r = void 0))
              : ((i = r), (r = n), (n = void 0))),
        !1 === i)
      )
        i = Te;
      else if (!i) return e;
      return (
        1 === o &&
          ((a = i),
          ((i = function (e) {
            return S().off(e), a.apply(this, arguments);
          }).guid = a.guid || (a.guid = S.guid++))),
        e.each(function () {
          S.event.add(this, t, i, r, n);
        })
      );
    }
    function Se(e, i, o) {
      o
        ? (Y.set(e, i, !1),
          S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
              var t,
                n,
                r = Y.get(this, i);
              if (1 & e.isTrigger && this[i]) {
                if (r.length)
                  (S.event.special[i] || {}).delegateType &&
                    e.stopPropagation();
                else if (
                  ((r = s.call(arguments)),
                  Y.set(this, i, r),
                  (t = o(this, i)),
                  this[i](),
                  r !== (n = Y.get(this, i)) || t
                    ? Y.set(this, i, !1)
                    : (n = {}),
                  r !== n)
                )
                  return (
                    e.stopImmediatePropagation(),
                    e.preventDefault(),
                    n && n.value
                  );
              } else
                r.length &&
                  (Y.set(this, i, {
                    value: S.event.trigger(
                      S.extend(r[0], S.Event.prototype),
                      r.slice(1),
                      this
                    ),
                  }),
                  e.stopImmediatePropagation());
            },
          }))
        : void 0 === Y.get(e, i) && S.event.add(e, i, we);
    }
    (S.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.get(t);
        if (V(t)) {
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && S.find.matchesSelector(re, i),
            n.guid || (n.guid = S.guid++),
            (u = y.events) || (u = y.events = Object.create(null)),
            (a = y.handle) ||
              (a = y.handle =
                function (e) {
                  return "undefined" != typeof S && S.event.triggered !== e.type
                    ? S.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            (l = (e = (e || "").match(P) || [""]).length);
          while (l--)
            (d = g = (s = be.exec(e[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d &&
                ((f = S.event.special[d] || {}),
                (d = (i ? f.delegateType : f.bindType) || d),
                (f = S.event.special[d] || {}),
                (c = S.extend(
                  {
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join("."),
                  },
                  o
                )),
                (p = u[d]) ||
                  (((p = u[d] = []).delegateCount = 0),
                  (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                    (t.addEventListener && t.addEventListener(d, a))),
                f.add &&
                  (f.add.call(t, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                (S.event.global[d] = !0));
        }
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.hasData(e) && Y.get(e);
        if (y && (u = y.events)) {
          l = (t = (t || "").match(P) || [""]).length;
          while (l--)
            if (
              ((d = g = (s = be.exec(t[l]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              d)
            ) {
              (f = S.event.special[d] || {}),
                (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
                (s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (a = o = p.length);
              while (o--)
                (c = p[o]),
                  (!i && g !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (s && !s.test(c.namespace)) ||
                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                    (p.splice(o, 1),
                    c.selector && p.delegateCount--,
                    f.remove && f.remove.call(e, c));
              a &&
                !p.length &&
                ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                  S.removeEvent(e, d, y.handle),
                delete u[d]);
            } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
          S.isEmptyObject(u) && Y.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};
        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, u))
        ) {
          (a = S.event.handlers.call(this, u, l)), (t = 0);
          while ((i = a[t++]) && !u.isPropagationStopped()) {
            (u.currentTarget = i.elem), (n = 0);
            while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
              (u.rnamespace &&
                !1 !== o.namespace &&
                !u.rnamespace.test(o.namespace)) ||
                ((u.handleObj = o),
                (u.data = o.data),
                void 0 !==
                  (r = (
                    (S.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, s)) &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
          }
          return c.postDispatch && c.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
        if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++)
                void 0 === a[(i = (r = t[n]).selector + " ")] &&
                  (a[i] = r.needsContext
                    ? -1 < S(i, this).index(l)
                    : S.find(i, this, null, [l]).length),
                  a[i] && o.push(r);
              o.length && s.push({ elem: l, handlers: o });
            }
        return (
          (l = this),
          u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
          s
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(S.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: m(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[S.expando] ? e : new S.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (pe.test(t.type) &&
                t.click &&
                A(t, "input") &&
                Y.get(t, "click")) ||
              A(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? we
                : Te),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && S.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[S.expando] = !0);
      }),
      (S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = we),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = we),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = we),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      S.each(
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
          code: !0,
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
          which: !0,
        },
        S.event.addProp
      ),
      S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        S.event.special[t] = {
          setup: function () {
            return Se(this, t, Ce), !1;
          },
          trigger: function () {
            return Se(this, t), !0;
          },
          _default: function (e) {
            return Y.get(e.target, t);
          },
          delegateType: e,
        };
      }),
      S.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, i) {
          S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                r = e.handleObj;
              return (
                (n && (n === this || S.contains(this, n))) ||
                  ((e.type = r.origType),
                  (t = r.handler.apply(this, arguments)),
                  (e.type = i)),
                t
              );
            },
          };
        }
      ),
      S.fn.extend({
        on: function (e, t, n, r) {
          return Ee(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Ee(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              S(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Te),
            this.each(function () {
              S.event.remove(this, e, n, t);
            })
          );
        },
      });
    var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
      return (
        (A(e, "table") &&
          A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          S(e).children("tbody")[0]) ||
        e
      );
    }
    function De(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function qe(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Le(e, t) {
      var n, r, i, o, a, s;
      if (1 === t.nodeType) {
        if (Y.hasData(e) && (s = Y.get(e).events))
          for (i in (Y.remove(t, "handle events"), s))
            for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
        Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
      }
    }
    function He(n, r, i, o) {
      r = g(r);
      var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
      if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
        return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
        });
      if (
        f &&
        ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || o)
      ) {
        for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
          (u = e),
            c !== p &&
              ((u = S.clone(u, !0, !0)), s && S.merge(a, ye(u, "script"))),
            i.call(n[c], u, c);
        if (s)
          for (
            l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0;
            c < s;
            c++
          )
            (u = a[c]),
              he.test(u.type || "") &&
                !Y.access(u, "globalEval") &&
                S.contains(l, u) &&
                (u.src && "module" !== (u.type || "").toLowerCase()
                  ? S._evalUrl &&
                    !u.noModule &&
                    S._evalUrl(
                      u.src,
                      { nonce: u.nonce || u.getAttribute("nonce") },
                      l
                    )
                  : b(u.textContent.replace(Ne, ""), u, l));
      }
      return n;
    }
    function Oe(e, t, n) {
      for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
        n || 1 !== r.nodeType || S.cleanData(ye(r)),
          r.parentNode &&
            (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    S.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
        if (
          !(
            v.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            S.isXMLDoc(e)
          )
        )
          for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
            (s = o[r]),
              (u = a[r]),
              void 0,
              "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
                ? (u.checked = s.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = s.defaultValue);
        if (t)
          if (n)
            for (
              o = o || ye(e), a = a || ye(c), r = 0, i = o.length;
              r < i;
              r++
            )
              Le(o[r], a[r]);
          else Le(e, c);
        return (
          0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, i = S.event.special, o = 0;
          void 0 !== (n = e[o]);
          o++
        )
          if (V(n)) {
            if ((t = n[Y.expando])) {
              if (t.events)
                for (r in t.events)
                  i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0;
            }
            n[Q.expando] && (n[Q.expando] = void 0);
          }
      },
    }),
      S.fn.extend({
        detach: function (e) {
          return Oe(this, e, !0);
        },
        remove: function (e) {
          return Oe(this, e);
        },
        text: function (e) {
          return B(
            this,
            function (e) {
              return void 0 === e
                ? S.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return He(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              je(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return He(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = je(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return He(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return He(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (S.cleanData(ye(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return S.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return B(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !ke.test(e) &&
                !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = S.htmlPrefilter(e);
                try {
                  for (; n < r; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (S.cleanData(ye(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return He(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              S.inArray(this, n) < 0 &&
                (S.cleanData(ye(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      S.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, a) {
          S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
              (t = o === i ? this : this.clone(!0)),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = /^--/,
      Me = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = C), t.getComputedStyle(e);
      },
      Ie = function (e, t, n) {
        var r,
          i,
          o = {};
        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
        return r;
      },
      We = new RegExp(ne.join("|"), "i"),
      Fe = "[\\x20\\t\\r\\n\\f]",
      $e = new RegExp(
        "^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$",
        "g"
      );
    function Be(e, t, n) {
      var r,
        i,
        o,
        a,
        s = Re.test(t),
        u = e.style;
      return (
        (n = n || Me(e)) &&
          ((a = n.getPropertyValue(t) || n[t]),
          s && a && (a = a.replace($e, "$1") || void 0),
          "" !== a || ie(e) || (a = S.style(e, t)),
          !v.pixelBoxStyles() &&
            Pe.test(a) &&
            We.test(t) &&
            ((r = u.width),
            (i = u.minWidth),
            (o = u.maxWidth),
            (u.minWidth = u.maxWidth = u.width = a),
            (a = n.width),
            (u.width = r),
            (u.minWidth = i),
            (u.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function _e(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    !(function () {
      function e() {
        if (l) {
          (u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            re.appendChild(u).appendChild(l);
          var e = C.getComputedStyle(l);
          (n = "1%" !== e.top),
            (s = 12 === t(e.marginLeft)),
            (l.style.right = "60%"),
            (o = 36 === t(e.right)),
            (r = 36 === t(e.width)),
            (l.style.position = "absolute"),
            (i = 12 === t(l.offsetWidth / 3)),
            re.removeChild(u),
            (l = null);
        }
      }
      function t(e) {
        return Math.round(parseFloat(e));
      }
      var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
      l.style &&
        ((l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
        S.extend(v, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), o;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), s;
          },
          scrollboxSize: function () {
            return e(), i;
          },
          reliableTrDimensions: function () {
            var e, t, n, r;
            return (
              null == a &&
                ((e = E.createElement("table")),
                (t = E.createElement("tr")),
                (n = E.createElement("div")),
                (e.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (t.style.cssText = "border:1px solid"),
                (t.style.height = "1px"),
                (n.style.height = "9px"),
                (n.style.display = "block"),
                re.appendChild(e).appendChild(t).appendChild(n),
                (r = C.getComputedStyle(t)),
                (a =
                  parseInt(r.height, 10) +
                    parseInt(r.borderTopWidth, 10) +
                    parseInt(r.borderBottomWidth, 10) ===
                  t.offsetHeight),
                re.removeChild(e)),
              a
            );
          },
        }));
    })();
    var ze = ["Webkit", "Moz", "ms"],
      Ue = E.createElement("div").style,
      Xe = {};
    function Ve(e) {
      var t = S.cssProps[e] || Xe[e];
      return (
        t ||
        (e in Ue
          ? e
          : (Xe[e] =
              (function (e) {
                var t = e[0].toUpperCase() + e.slice(1),
                  n = ze.length;
                while (n--) if ((e = ze[n] + t) in Ue) return e;
              })(e) || e))
      );
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
      Ye = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" };
    function Je(e, t, n) {
      var r = te.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
          r
            ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
              "margin" !== n &&
                (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
            : ((u += S.css(e, "padding" + ne[a], !0, i)),
              "padding" !== n
                ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
                : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
      return (
        !r &&
          0 <= o &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
              )
            ) || 0),
        u
      );
    }
    function Ze(e, t, n) {
      var r = Me(e),
        i =
          (!v.boxSizingReliable() || n) &&
          "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Pe.test(a)) {
        if (!n) return a;
        a = "auto";
      }
      return (
        ((!v.boxSizingReliable() && i) ||
          (!v.reliableTrDimensions() && A(e, "tr")) ||
          "auto" === a ||
          (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
          (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) +
          Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
          "px"
      );
    }
    function et(e, t, n, r, i) {
      return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Be(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
            o,
            a,
            s = X(t),
            u = Re.test(t),
            l = e.style;
          if (
            (u || (t = Ve(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]),
            void 0 === n)
          )
            return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
              ? i
              : l[t];
          "string" === (o = typeof n) &&
            (i = te.exec(n)) &&
            i[1] &&
            ((n = se(e, t, i)), (o = "number")),
            null != n &&
              n == n &&
              ("number" !== o ||
                u ||
                (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
              v.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                (u ? l.setProperty(t, n) : (l[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var i,
          o,
          a,
          s = X(t);
        return (
          Re.test(t) || (t = Ve(s)),
          (a = S.cssHooks[t] || S.cssHooks[s]) &&
            "get" in a &&
            (i = a.get(e, !0, n)),
          void 0 === i && (i = Be(e, t, r)),
          "normal" === i && t in Qe && (i = Qe[t]),
          "" === n || n
            ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
            : i
        );
      },
    }),
      S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
          get: function (e, t, n) {
            if (t)
              return !Ge.test(S.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? Ze(e, u, n)
                : Ie(e, Ye, function () {
                    return Ze(e, u, n);
                  });
          },
          set: function (e, t, n) {
            var r,
              i = Me(e),
              o = !v.scrollboxSize() && "absolute" === i.position,
              a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
              s = n ? Ke(e, u, n, a, i) : 0;
            return (
              a &&
                o &&
                (s -= Math.ceil(
                  e["offset" + u[0].toUpperCase() + u.slice(1)] -
                    parseFloat(i[u]) -
                    Ke(e, u, "border", !1, i) -
                    0.5
                )),
              s &&
                (r = te.exec(t)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[u] = t), (t = S.css(e, u))),
              Je(0, t, s)
            );
          },
        };
      }),
      (S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(Be(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Ie(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        (S.cssHooks[i + o] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          },
        }),
          "margin" !== i && (S.cssHooks[i + o].set = Je);
      }),
      S.fn.extend({
        css: function (e, t) {
          return B(
            this,
            function (e, t, n) {
              var r,
                i,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (r = Me(e), i = t.length; a < i; a++)
                  o[t[a]] = S.css(e, t[a], !1, r);
                return o;
              }
              return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((S.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || S.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (S.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = et.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  S.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = et.prototype),
      ((et.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            S.fx.step[e.prop]
              ? S.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (!S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = et.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (S.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (S.fx = et.prototype.init),
      (S.fx.step = {});
    var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;
    function st() {
      nt &&
        (!1 === E.hidden && C.requestAnimationFrame
          ? C.requestAnimationFrame(st)
          : C.setTimeout(st, S.fx.interval),
        S.fx.tick());
    }
    function ut() {
      return (
        C.setTimeout(function () {
          tt = void 0;
        }),
        (tt = Date.now())
      );
    }
    function lt(e, t) {
      var n,
        r = 0,
        i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        i["margin" + (n = ne[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
      for (
        var r,
          i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
          o = 0,
          a = i.length;
        o < a;
        o++
      )
        if ((r = i[o].call(n, t, e))) return r;
    }
    function ft(o, e, t) {
      var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (a) return !1;
          for (
            var e = tt || ut(),
              t = Math.max(0, l.startTime + l.duration - e),
              n = 1 - (t / l.duration || 0),
              r = 0,
              i = l.tweens.length;
            r < i;
            r++
          )
            l.tweens[r].run(n);
          return (
            s.notifyWith(o, [l, n, t]),
            n < 1 && i
              ? t
              : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
          );
        },
        l = s.promise({
          elem: o,
          props: S.extend({}, e),
          opts: S.extend(
            !0,
            { specialEasing: {}, easing: S.easing._default },
            t
          ),
          originalProperties: e,
          originalOptions: t,
          startTime: tt || ut(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = S.Tween(
              o,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            );
            return l.tweens.push(n), n;
          },
          stop: function (e) {
            var t = 0,
              n = e ? l.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < n; t++) l.tweens[t].run(1);
            return (
              e
                ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
                : s.rejectWith(o, [l, e]),
              this
            );
          },
        }),
        c = l.props;
      for (
        !(function (e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((i = t[(r = X(n))]),
              (o = e[n]),
              Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = S.cssHooks[r]) && ("expand" in a))
            )
              for (n in ((o = a.expand(o)), delete e[r], o))
                (n in e) || ((e[n] = o[n]), (t[n] = i));
            else t[r] = i;
        })(c, l.opts.specialEasing);
        r < i;
        r++
      )
        if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
          return (
            m(n.stop) &&
              (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        S.map(c, ct, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l
          .progress(l.opts.progress)
          .done(l.opts.done, l.opts.complete)
          .fail(l.opts.fail)
          .always(l.opts.always),
        S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
        l
      );
    }
    (S.Animation = S.extend(ft, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, te.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]),
            (ft.tweeners[n] = ft.tweeners[n] || []),
            ft.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = Y.get(e, "fxshow");
          for (r in (n.queue ||
            (null == (a = S._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function () {
                a.unqueued || s();
              })),
            a.unqueued++,
            p.always(function () {
              p.always(function () {
                a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
              });
            })),
          t))
            if (((i = t[r]), ot.test(i))) {
              if (
                (delete t[r],
                (o = o || "toggle" === i),
                i === (g ? "hide" : "show"))
              ) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0;
              }
              d[r] = (y && y[r]) || S.style(e, r);
            }
          if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
            for (r in (f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (l = y && y.display) && (l = Y.get(e, "display")),
              "none" === (c = S.css(e, "display")) &&
                (l
                  ? (c = l)
                  : (le([e], !0),
                    (l = e.style.display || l),
                    (c = S.css(e, "display")),
                    le([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                "none" === S.css(e, "float") &&
                (u ||
                  (p.done(function () {
                    h.display = l;
                  }),
                  null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (u = !1),
            d))
              u ||
                (y
                  ? "hidden" in y && (g = y.hidden)
                  : (y = Y.access(e, "fxshow", { display: l })),
                o && (y.hidden = !g),
                g && le([e], !0),
                p.done(function () {
                  for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                    S.style(e, r, d[r]);
                })),
                (u = ct(g ? y[r] : 0, r, p)),
                r in y ||
                  ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
      },
    })),
      (S.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? S.extend({}, e)
            : {
                complete: n || (!n && t) || (m(e) && e),
                duration: e,
                easing: (n && t) || (t && !m(t) && t),
              };
        return (
          S.fx.off
            ? (r.duration = 0)
            : "number" != typeof r.duration &&
              (r.duration in S.fx.speeds
                ? (r.duration = S.fx.speeds[r.duration])
                : (r.duration = S.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
          }),
          r
        );
      }),
      S.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ae)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (t, e, n, r) {
          var i = S.isEmptyObject(t),
            o = S.speed(e, n, r),
            a = function () {
              var e = ft(this, S.extend({}, t), o);
              (i || Y.get(this, "finish")) && e.stop(!0);
            };
          return (
            (a.finish = a),
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (i, e, o) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return (
            "string" != typeof i && ((o = e), (e = i), (i = void 0)),
            e && this.queue(i || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != i && i + "queueHooks",
                n = S.timers,
                r = Y.get(this);
              if (t) r[t] && r[t].stop && a(r[t]);
              else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != i && n[t].queue !== i) ||
                  (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
              (!e && o) || S.dequeue(this, i);
            })
          );
        },
        finish: function (a) {
          return (
            !1 !== a && (a = a || "fx"),
            this.each(function () {
              var e,
                t = Y.get(this),
                n = t[a + "queue"],
                r = t[a + "queueHooks"],
                i = S.timers,
                o = n ? n.length : 0;
              for (
                t.finish = !0,
                  S.queue(this, a, []),
                  r && r.stop && r.stop.call(this, !0),
                  e = i.length;
                e--;

              )
                i[e].elem === this &&
                  i[e].queue === a &&
                  (i[e].anim.stop(!0), i.splice(e, 1));
              for (e = 0; e < o; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? i.apply(this, arguments)
            : this.animate(lt(r, !0), e, t, n);
        };
      }),
      S.each(
        {
          slideDown: lt("show"),
          slideUp: lt("hide"),
          slideToggle: lt("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, r) {
          S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n);
          };
        }
      ),
      (S.timers = []),
      (S.fx.tick = function () {
        var e,
          t = 0,
          n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), (tt = void 0);
      }),
      (S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start();
      }),
      (S.fx.interval = 13),
      (S.fx.start = function () {
        nt || ((nt = !0), st());
      }),
      (S.fx.stop = function () {
        nt = null;
      }),
      (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (S.fn.delay = function (r, e) {
        return (
          (r = (S.fx && S.fx.speeds[r]) || r),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
              C.clearTimeout(n);
            };
          })
        );
      }),
      (rt = E.createElement("input")),
      (it = E.createElement("select").appendChild(E.createElement("option"))),
      (rt.type = "checkbox"),
      (v.checkOn = "" !== rt.value),
      (v.optSelected = it.selected),
      ((rt = E.createElement("input")).value = "t"),
      (rt.type = "radio"),
      (v.radioValue = "t" === rt.value);
    var pt,
      dt = S.expr.attrHandle;
    S.fn.extend({
      attr: function (e, t) {
        return B(this, S.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          S.removeAttr(this, e);
        });
      },
    }),
      S.extend({
        attr: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return "undefined" == typeof e.getAttribute
              ? S.prop(e, t, n)
              : ((1 === o && S.isXMLDoc(e)) ||
                  (i =
                    S.attrHooks[t.toLowerCase()] ||
                    (S.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void S.removeAttr(e, t)
                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!v.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            i = t && t.match(P);
          if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
        },
      }),
      (pt = {
        set: function (e, t, n) {
          return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
          var r,
            i,
            o = t.toLowerCase();
          return (
            n ||
              ((i = dt[o]),
              (dt[o] = r),
              (r = null != a(e, t, n) ? o : null),
              (dt[o] = i)),
            r
          );
        };
      });
    var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;
    function yt(e) {
      return (e.match(P) || []).join(" ");
    }
    function vt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function mt(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
    }
    S.fn.extend({
      prop: function (e, t) {
        return B(this, S.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[S.propFix[e] || e];
        });
      },
    }),
      S.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && S.isXMLDoc(e)) ||
                ((t = S.propFix[t] || t), (i = S.propHooks[t])),
              void 0 !== n
                ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e[t] = n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = S.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      v.optSelected ||
        (S.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      S.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          S.propFix[this.toLowerCase()] = this;
        }
      ),
      S.fn.extend({
        addClass: function (t) {
          var e, n, r, i, o, a;
          return m(t)
            ? this.each(function (e) {
                S(this).addClass(t.call(this, e, vt(this)));
              })
            : (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++)
                    (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this;
        },
        removeClass: function (t) {
          var e, n, r, i, o, a;
          return m(t)
            ? this.each(function (e) {
                S(this).removeClass(t.call(this, e, vt(this)));
              })
            : arguments.length
            ? (e = mt(t)).length
              ? this.each(function () {
                  if (
                    ((r = vt(this)),
                    (n = 1 === this.nodeType && " " + yt(r) + " "))
                  ) {
                    for (o = 0; o < e.length; o++) {
                      i = e[o];
                      while (-1 < n.indexOf(" " + i + " "))
                        n = n.replace(" " + i + " ", " ");
                    }
                    (a = yt(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this
            : this.attr("class", "");
        },
        toggleClass: function (t, n) {
          var e,
            r,
            i,
            o,
            a = typeof t,
            s = "string" === a || Array.isArray(t);
          return m(t)
            ? this.each(function (e) {
                S(this).toggleClass(t.call(this, e, vt(this), n), n);
              })
            : "boolean" == typeof n && s
            ? n
              ? this.addClass(t)
              : this.removeClass(t)
            : ((e = mt(t)),
              this.each(function () {
                if (s)
                  for (o = S(this), i = 0; i < e.length; i++)
                    (r = e[i]),
                      o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                  (void 0 !== t && "boolean" !== a) ||
                    ((r = vt(this)) && Y.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || !1 === t ? "" : Y.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          t = " " + e + " ";
          while ((n = this[r++]))
            if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var xt = /\r/g;
    S.fn.extend({
      val: function (n) {
        var r,
          e,
          i,
          t = this[0];
        return arguments.length
          ? ((i = m(n)),
            this.each(function (e) {
              var t;
              1 === this.nodeType &&
                (null == (t = i ? n.call(this, e, S(this).val()) : n)
                  ? (t = "")
                  : "number" == typeof t
                  ? (t += "")
                  : Array.isArray(t) &&
                    (t = S.map(t, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  S.valHooks[this.type] ||
                  S.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  void 0 !== r.set(this, t, "value")) ||
                  (this.value = t));
            }))
          : t
          ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
            "get" in r &&
            void 0 !== (e = r.get(t, "value"))
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(xt, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      S.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = S.find.attr(e, "value");
              return null != t ? t : yt(S.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                if (
                  ((n = i[r]).selected || r === o) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                ) {
                  if (((t = S(n).val()), a)) return t;
                  s.push(t);
                }
              return s;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                o = S.makeArray(t),
                a = i.length;
              while (a--)
                ((r = i[a]).selected =
                  -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      S.each(["radio", "checkbox"], function () {
        (S.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < S.inArray(S(e).val(), t));
          },
        }),
          v.checkOn ||
            (S.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      }),
      (v.focusin = "onfocusin" in C);
    var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
        e.stopPropagation();
      };
    S.extend(S.event, {
      trigger: function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = y.call(e, "type") ? e.type : e,
          h = y.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((o = f = a = n = n || E),
          3 !== n.nodeType &&
            8 !== n.nodeType &&
            !bt.test(d + S.event.triggered) &&
            (-1 < d.indexOf(".") &&
              ((d = (h = d.split(".")).shift()), h.sort()),
            (u = d.indexOf(":") < 0 && "on" + d),
            ((e = e[S.expando]
              ? e
              : new S.Event(d, "object" == typeof e && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = h.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : S.makeArray(t, [e])),
            (c = S.event.special[d] || {}),
            r || !c.trigger || !1 !== c.trigger.apply(n, t)))
        ) {
          if (!r && !c.noBubble && !x(n)) {
            for (
              s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              p.push(o), (a = o);
            a === (n.ownerDocument || E) &&
              p.push(a.defaultView || a.parentWindow || C);
          }
          i = 0;
          while ((o = p[i++]) && !e.isPropagationStopped())
            (f = o),
              (e.type = 1 < i ? s : c.bindType || d),
              (l =
                (Y.get(o, "events") || Object.create(null))[e.type] &&
                Y.get(o, "handle")) && l.apply(o, t),
              (l = u && o[u]) &&
                l.apply &&
                V(o) &&
                ((e.result = l.apply(o, t)),
                !1 === e.result && e.preventDefault());
          return (
            (e.type = d),
            r ||
              e.isDefaultPrevented() ||
              (c._default && !1 !== c._default.apply(p.pop(), t)) ||
              !V(n) ||
              (u &&
                m(n[d]) &&
                !x(n) &&
                ((a = n[u]) && (n[u] = null),
                (S.event.triggered = d),
                e.isPropagationStopped() && f.addEventListener(d, wt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, wt),
                (S.event.triggered = void 0),
                a && (n[u] = a))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
        S.event.trigger(r, null, t);
      },
    }),
      S.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            S.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return S.event.trigger(e, t, n, !0);
        },
      }),
      v.focusin ||
        S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
          var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e));
          };
          S.event.special[r] = {
            setup: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r);
              t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this.document || this,
                t = Y.access(e, r) - 1;
              t
                ? Y.access(e, r, t)
                : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            },
          };
        });
    var Tt = C.location,
      Ct = { guid: Date.now() },
      Et = /\?/;
    S.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        t = new C.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          S.error(
            "Invalid XML: " +
              (n
                ? S.map(n.childNodes, function (e) {
                    return e.textContent;
                  }).join("\n")
                : e)
          ),
        t
      );
    };
    var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
      var t;
      if (Array.isArray(e))
        S.each(e, function (e, t) {
          r || St.test(n)
            ? i(n, t)
            : jt(
                n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
                t,
                r,
                i
              );
        });
      else if (r || "object" !== w(e)) i(n, e);
      else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
    }
    (S.param = function (e, t) {
      var n,
        r = [],
        i = function (e, t) {
          var n = m(t) ? t() : t;
          r[r.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (null == e) return "";
      if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
        S.each(e, function () {
          i(this.name, this.value);
        });
      else for (n in e) jt(n, e[n], t, i);
      return r.join("&");
    }),
      S.fn.extend({
        serialize: function () {
          return S.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !S(this).is(":disabled") &&
                Nt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !pe.test(e))
              );
            })
            .map(function (e, t) {
              var n = S(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(kt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(kt, "\r\n") };
            })
            .get();
        },
      });
    var Dt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");
    function Ft(o) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
        if (m(t))
          while ((n = i[r++]))
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
              : (o[n] = o[n] || []).push(t);
      };
    }
    function $t(t, i, o, a) {
      var s = {},
        u = t === Mt;
      function l(e) {
        var r;
        return (
          (s[e] = !0),
          S.each(t[e] || [], function (e, t) {
            var n = t(i, o, a);
            return "string" != typeof n || u || s[n]
              ? u
                ? !(r = n)
                : void 0
              : (i.dataTypes.unshift(n), l(n), !1);
          }),
          r
        );
      }
      return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Bt(e, t) {
      var n,
        r,
        i = S.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && S.extend(!0, e, r), e;
    }
    (Wt.href = Tt.href),
      S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Tt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": It,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": S.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var c,
            f,
            p,
            n,
            d,
            r,
            h,
            g,
            i,
            o,
            y = S.ajaxSetup({}, t),
            v = y.context || y,
            m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
            x = S.Deferred(),
            b = S.Callbacks("once memory"),
            w = y.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n) {
                    n = {};
                    while ((t = Ht.exec(p)))
                      n[t[1].toLowerCase() + " "] = (
                        n[t[1].toLowerCase() + " "] || []
                      ).concat(t[2]);
                  }
                  t = n[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return h ? p : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                    (a[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (y.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) T.always(e[T.status]);
                  else for (t in e) w[t] = [w[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this;
              },
            };
          if (
            (x.promise(T),
            (y.url = ((e || y.url || Tt.href) + "").replace(
              Pt,
              Tt.protocol + "//"
            )),
            (y.type = t.method || t.type || y.method || y.type),
            (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
            null == y.crossDomain)
          ) {
            r = E.createElement("a");
            try {
              (r.href = y.url),
                (r.href = r.href),
                (y.crossDomain =
                  Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
            } catch (e) {
              y.crossDomain = !0;
            }
          }
          if (
            (y.data &&
              y.processData &&
              "string" != typeof y.data &&
              (y.data = S.param(y.data, y.traditional)),
            $t(Rt, y, t, T),
            h)
          )
            return T;
          for (i in ((g = S.event && y.global) &&
            0 == S.active++ &&
            S.event.trigger("ajaxStart"),
          (y.type = y.type.toUpperCase()),
          (y.hasContent = !Ot.test(y.type)),
          (f = y.url.replace(qt, "")),
          y.hasContent
            ? y.data &&
              y.processData &&
              0 ===
                (y.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (y.data = y.data.replace(Dt, "+"))
            : ((o = y.url.slice(f.length)),
              y.data &&
                (y.processData || "string" == typeof y.data) &&
                ((f += (Et.test(f) ? "&" : "?") + y.data), delete y.data),
              !1 === y.cache &&
                ((f = f.replace(Lt, "$1")),
                (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
              (y.url = f + o)),
          y.ifModified &&
            (S.lastModified[f] &&
              T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
          ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
            T.setRequestHeader("Content-Type", y.contentType),
          T.setRequestHeader(
            "Accept",
            y.dataTypes[0] && y.accepts[y.dataTypes[0]]
              ? y.accepts[y.dataTypes[0]] +
                  ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
              : y.accepts["*"]
          ),
          y.headers))
            T.setRequestHeader(i, y.headers[i]);
          if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
            return T.abort();
          if (
            ((u = "abort"),
            b.add(y.complete),
            T.done(y.success),
            T.fail(y.error),
            (c = $t(Mt, y, t, T)))
          ) {
            if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
              return T;
            y.async &&
              0 < y.timeout &&
              (d = C.setTimeout(function () {
                T.abort("timeout");
              }, y.timeout));
            try {
              (h = !1), c.send(a, l);
            } catch (e) {
              if (h) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = t;
            h ||
              ((h = !0),
              d && C.clearTimeout(d),
              (c = void 0),
              (p = r || ""),
              (T.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (s = (function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = e.contents,
                    u = e.dataTypes;
                  while ("*" === u[0])
                    u.shift(),
                      void 0 === r &&
                        (r = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (r)
                    for (i in s)
                      if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                      }
                  if (u[0] in n) o = u[0];
                  else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }
                      a || (a = i);
                    }
                    o = o || a;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                })(y, T, n)),
              !i &&
                -1 < S.inArray("script", y.dataTypes) &&
                S.inArray("json", y.dataTypes) < 0 &&
                (y.converters["text script"] = function () {}),
              (s = (function (e, t, n, r) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                o = c.shift();
                while (o)
                  if (
                    (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u &&
                      r &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
                  )
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                      if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                          if (
                            (s = i.split(" "))[1] === o &&
                            (a = l[u + " " + s[0]] || l["* " + s[0]])
                          ) {
                            !0 === a
                              ? (a = l[i])
                              : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a
                                ? e
                                : "No conversion from " + u + " to " + o,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(y, s, T, i)),
              i
                ? (y.ifModified &&
                    ((u = T.getResponseHeader("Last-Modified")) &&
                      (S.lastModified[f] = u),
                    (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                  204 === e || "HEAD" === y.type
                    ? (l = "nocontent")
                    : 304 === e
                    ? (l = "notmodified")
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
                : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (t || l) + ""),
              i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
              T.statusCode(w),
              (w = void 0),
              g &&
                m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
              b.fireWith(v, [T, l]),
              g &&
                (m.trigger("ajaxComplete", [T, y]),
                --S.active || S.event.trigger("ajaxStop")));
          }
          return T;
        },
        getJSON: function (e, t, n) {
          return S.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return S.get(e, void 0, t, "script");
        },
      }),
      S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
          return (
            m(t) && ((r = r || n), (n = t), (t = void 0)),
            S.ajax(
              S.extend(
                { url: e, type: i, dataType: r, data: t, success: n },
                S.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
      }),
      (S._evalUrl = function (e, t, n) {
        return S.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (e) {
            S.globalEval(e, t, n);
          },
        });
      }),
      S.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (m(e) && (e = e.call(this[0])),
              (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstElementChild) e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return m(n)
            ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = S(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = m(t);
          return this.each(function (e) {
            S(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                S(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e);
      }),
      (S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (S.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest();
        } catch (e) {}
      });
    var _t = { 0: 200, 1223: 204 },
      zt = S.ajaxSettings.xhr();
    (v.cors = !!zt && "withCredentials" in zt),
      (v.ajax = zt = !!zt),
      S.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || (zt && !i.crossDomain))
          return {
            send: function (e, t) {
              var n,
                r = i.xhr();
              if (
                (r.open(i.type, i.url, i.async, i.username, i.password),
                i.xhrFields)
              )
                for (n in i.xhrFields) r[n] = i.xhrFields[n];
              for (n in (i.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(i.mimeType),
              i.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (o = function (e) {
                return function () {
                  o &&
                    ((o =
                      a =
                      r.onload =
                      r.onerror =
                      r.onabort =
                      r.ontimeout =
                      r.onreadystatechange =
                        null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? "number" != typeof r.status
                        ? t(0, "error")
                        : t(r.status, r.statusText)
                      : t(
                          _t[r.status] || r.status,
                          r.statusText,
                          "text" !== (r.responseType || "text") ||
                            "string" != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = o()),
                (a = r.onerror = r.ontimeout = o("error")),
                void 0 !== r.onabort
                  ? (r.onabort = a)
                  : (r.onreadystatechange = function () {
                      4 === r.readyState &&
                        C.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                r.send((i.hasContent && i.data) || null);
              } catch (e) {
                if (o) throw e;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      S.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return S.globalEval(e), e;
          },
        },
      }),
      S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
          return {
            send: function (e, t) {
              (r = S("<script>")
                .attr(n.scriptAttrs || {})
                .prop({ charset: n.scriptCharset, src: n.url })
                .on(
                  "load error",
                  (i = function (e) {
                    r.remove(),
                      (i = null),
                      e && t("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                E.head.appendChild(r[0]);
            },
            abort: function () {
              i && i();
            },
          };
      });
    var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Xt.pop() || S.expando + "_" + Ct.guid++;
        return (this[e] = !0), e;
      },
    }),
      S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          i,
          o,
          a =
            !1 !== e.jsonp &&
            (Vt.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                0 ===
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Vt.test(e.data) &&
                "data");
        if (a || "jsonp" === e.dataTypes[0])
          return (
            (r = e.jsonpCallback =
              m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(Vt, "$1" + r))
              : !1 !== e.jsonp &&
                (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return o || S.error(r + " was not called"), o[0];
            }),
            (e.dataTypes[0] = "json"),
            (i = C[r]),
            (C[r] = function () {
              o = arguments;
            }),
            n.always(function () {
              void 0 === i ? S(C).removeProp(r) : (C[r] = i),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                o && m(i) && i(o[0]),
                (o = i = void 0);
            }),
            "script"
          );
      }),
      (v.createHTMLDocument =
        (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        2 === Ut.childNodes.length)),
      (S.parseHTML = function (e, t, n) {
        return "string" != typeof e
          ? []
          : ("boolean" == typeof t && ((n = t), (t = !1)),
            t ||
              (v.createHTMLDocument
                ? (((r = (t =
                    E.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = E.location.href),
                  t.head.appendChild(r))
                : (t = E)),
            (o = !n && []),
            (i = N.exec(e))
              ? [t.createElement(i[1])]
              : ((i = xe([e], t, o)),
                o && o.length && S(o).remove(),
                S.merge([], i.childNodes)));
        var r, i, o;
      }),
      (S.fn.load = function (e, t, n) {
        var r,
          i,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
          m(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (i = "POST"),
          0 < a.length &&
            S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      (S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      (S.offset = {
        setOffset: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l = S.css(e, "position"),
            c = S(e),
            f = {};
          "static" === l && (e.style.position = "relative"),
            (s = c.offset()),
            (o = S.css(e, "top")),
            (u = S.css(e, "left")),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
              ? ((a = (r = c.position()).top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : c.css(f);
        },
      }),
      S.fn.extend({
        offset: function (t) {
          if (arguments.length)
            return void 0 === t
              ? this
              : this.each(function (e) {
                  S.offset.setOffset(this, t, e);
                });
          var e,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((e = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              i = { top: 0, left: 0 };
            if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
            else {
              (t = this.offset()),
                (n = r.ownerDocument),
                (e = r.offsetParent || n.documentElement);
              while (
                e &&
                (e === n.body || e === n.documentElement) &&
                "static" === S.css(e, "position")
              )
                e = e.parentNode;
              e &&
                e !== r &&
                1 === e.nodeType &&
                (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
                (i.left += S.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - i.top - S.css(r, "marginTop", !0),
              left: t.left - i.left - S.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent;
            while (e && "static" === S.css(e, "position")) e = e.offsetParent;
            return e || re;
          });
        },
      }),
      S.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, i) {
          var o = "pageYOffset" === i;
          S.fn[t] = function (e) {
            return B(
              this,
              function (e, t, n) {
                var r;
                if (
                  (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === n)
                )
                  return r ? r[i] : e[t];
                r
                  ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                  : (e[t] = n);
              },
              t,
              e,
              arguments.length
            );
          };
        }
      ),
      S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
          if (t)
            return (t = Be(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
        });
      }),
      S.each({ Height: "height", Width: "width" }, function (a, s) {
        S.each(
          { padding: "inner" + a, content: s, "": "outer" + a },
          function (r, o) {
            S.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return B(
                this,
                function (e, t, n) {
                  var r;
                  return x(e)
                    ? 0 === o.indexOf("outer")
                      ? e["inner" + a]
                      : e.document.documentElement["client" + a]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + a],
                        r["scroll" + a],
                        e.body["offset" + a],
                        r["offset" + a],
                        r["client" + a]
                      ))
                    : void 0 === n
                    ? S.css(e, t, i)
                    : S.style(e, t, n, i);
                },
                s,
                n ? e : void 0,
                n
              );
            };
          }
        );
      }),
      S.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          S.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      S.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      S.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, n) {
          S.fn[n] = function (e, t) {
            return 0 < arguments.length
              ? this.on(n, null, e, t)
              : this.trigger(n);
          };
        }
      );
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || S.guid++),
          i
        );
    }),
      (S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0);
      }),
      (S.isArray = Array.isArray),
      (S.parseJSON = JSON.parse),
      (S.nodeName = A),
      (S.isFunction = m),
      (S.isWindow = x),
      (S.camelCase = X),
      (S.type = w),
      (S.now = Date.now),
      (S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      (S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1");
      }),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return S;
        });
    var Yt = C.jQuery,
      Qt = C.$;
    return (
      (S.noConflict = function (e) {
        return (
          C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
        );
      }),
      "undefined" == typeof e && (C.jQuery = C.$ = S),
      S
    );
  });
  $(".account-link").remove();
}
if (window.location.hostname.indexOf("canva") > -1) {
  function get_cookie_val(e) {
    var n = e + "=",
      o = decodeURIComponent(document.cookie).split(";");
    for (let t = 0; t < o.length; t++) {
      let e = o[t];
      for (; " " == e.charAt(0); ) e = e.substring(1);
      if (0 == e.indexOf(n)) return e.substring(n.length, e.length);
    }
    return "";
  }
  $(".pvf_dg.DwB3TQ").remove();
  $(".ok2g_v2i6KAtSX08ySuv7").remove();
  $('[aria-expanded="true"]').click();
  $(".pSH-3A").remove();
  $('a[href="https://www.canva.com/help"]').remove();
  $('a[href="https://www.canva.com/settings"]').remove();
  $(".EVWsgA").remove();
  $(".pvf_dg.mRLVxw").remove();
  $(".R3lH9w.mRLVxw").remove();
  $(".SSiHbw.RNFNIA.Ekl2FA.fFOiLQ").hide();
  $("._1cYWFA").remove();
  $('a[href="/learn/design-school"]').remove();
  $('a[href="/teams"]').remove();
  $("._2wrQ3QQxMpzu105bjNfRim").remove();
  $("._2k57_GeORGeXMRz2wk-qNs").remove();
  $("._23f99zyGZtlDWreJ5dNkE").remove();
  $("._2bpGdX5wP_sxV1BblwpVu8").remove();
  $("body").mouseover(function () {
    $(".pvf_dg.DwB3TQ").remove();
    $(".ok2g_v2i6KAtSX08ySuv7").remove();
    $(".EVWsgA").remove();
    $(".pvf_dg.mRLVxw").remove();
    $(".R3lH9w.mRLVxw").remove();
    $("._1cYWFA").remove();
    $('a[href="/learn/design-school"]').remove();
    $('a[href="/teams"]').remove();
    $('a[href="https://www.canva.com/help"]').remove();
    $('a[href="https://www.canva.com/settings"]').remove();
    $("._2wrQ3QQxMpzu105bjNfRim").remove();
    $("._2k57_GeORGeXMRz2wk-qNs").remove();
    $("._2bpGdX5wP_sxV1BblwpVu8").remove();
    $("._23f99zyGZtlDWreJ5dNkE").remove();
  });
  window.setInterval(function () {
    $('[aria-labelledby="__a11yId71"]').remove();
    $('[aria-describedby="rbd-hidden-text-0-hidden-text-0"]').remove();
    $(".EVWsgA").remove();
    $('a[href="https://www.canva.com/help"]').remove();
    $('a[href="https://www.canva.com/settings"]').remove();
    $("button > div:contains('Delete permanently')").parent().hide();
    $("button > div:contains('Delete')").parent().hide();
    $("button > div:contains('Move to Trash')").parent().hide();
    $("button > div:contains('Move to trash')").parent().hide();
    $("p:contains('Starred')").hide();
  }, 1);
} else if (window.location.hostname.indexOf("grammarly") > -1) {
  window.setInterval(function () {
    $("._8a1a56e9-index_navigation-main").remove();

    $('[data-name="proofread"]').remove();
    $('[href="https://support.grammarly.com/hc/en-us/requests/new"]').remove();
    $('[data-name="dropdown-help-support"]').remove();
    $('[data-name="dropdown-help-feedback"]').remove();
    $('[data-name="dropdown-help-policy"]').remove();
    $('[data-name="dropdown-help-terms"]').remove();
    $('[data-name="to-home"]').remove();
    $("body").mouseover(function () {
      // if (window.location.href == 'https://app.grammarly.com/'){
      //     window.location.replace("https://app.grammarly.com/docs/new");
      // }
      $('[data-name="proofread"]').remove();
      $('[data-name="dropdown-help/support"]').remove();
      $('[data-name="dropdown-help/feedback"]').remove();
      $('[data-name="dropdown-help/policy"]').remove();
      $('[data-name="dropdown-help/terms"]').remove();
      $('[data-name="to-home"]').remove();
      $("._bdf866a7-document_settings-userNameHeader").remove();
      $("._6afd8214-document_settings-emailHeader").remove();
      $("._ed69ac96-document_settings-header").remove();
      $('[data-name="documentSettings-myGrammarly"]').remove();
      $('[data-name="documentSettings-subscription"]').remove();
      $('[data-name="documentSettings-logout"]').remove();
      $('[data-name="documentSettings-support"]').remove();
      $('[data-name="documentSettings-feedback"]').remove();
      $('[data-name="documentSettings-switchToClassicEditor"]').remove();
      $('[data-name="documentSettings-privacyPolicy"]').remove();
      $('[data-name="documentSettings-termsOfService"]').remove();
    }, 1);
  });
} else if (window.location.host == "app.grammarly.com") {
  $(".ok2g_v2i6KAtSX08ySuv7").remove();
  $("body").mouseover(function () {
    $(".ok2g_v2i6KAtSX08ySuv7").remove();
  });
} else if (window.location.hostname.indexOf("skillshare") > -1) {
  $(".banner-content").remove();
  $(".gamification-banner").remove();
  $(".site-header-nav.site-header-nav-right").remove();
  $("#footer-tall").remove();
  $(".skills-prompt").remove();
  $(".community").remove();
  $(".nav-menu-groups.nav-item").remove();
  $('a[href="https://www.skillshare.com/home?via=header"]').remove();
  $(".class-menus-container").remove();
  $(".project-buttons").remove();
  $("#comments").remove();
  $(".js-abuse-flag-href.abuse-flag").remove();
  $(".site-header-logo").html(
    '<a href="https://www.skillshare.com/browse?via=header" class="site-header-logo-image js-site-header-logo"></a>'
  );
  $(".follow-button-wrapper-class-details").remove();
  $(".follow-button-wrapper").remove();
  $("body").mouseover(function () {
    $(".community").remove();
  });
} else if (window.location.hostname.indexOf("picmonkey.com") > -1) {
  $("body").mouseover(function () {
    $("div#helpMenuContainer").remove();
    $(".src-core-components-top_bar--styles-module-account-3f2H4").remove();
    $(
      ".src-hub-components-navigation--mobile_menu-module-greet-3GgsT"
    ).remove();
    $(".src-apps-picmonkey-components-top_bar--styles-account-2jBic").remove();
    $(".src-core-components-top_bar--styles-account-lgjr6").remove();
    $(
      ".src-hub-components--hub_page_desktop-module-banner_container-3KR7U.undefined"
    ).remove();
    $(".src-core-components--footer-footer-3GU5J").remove();
    $(".src-home-components--signed_in_home-sidebar-3yOaT").remove();
    $('a[href="/blog/new-picmonkey"]').remove();
    $('[data-name="more"]').remove();
    $("#ctrl-bar-share").remove();
    $(".src-home-components--gdpr_banner-gdpr_banner-3PB5v").remove();
    $("footer").remove();
  });
} else if (window.location.hostname.indexOf("elements.envato") > -1) {
  $(document).ready(function () {
    $(".F_Osdtvf").remove();
    $("[data-test-selector='header-switch-to-annual']").remove();
    $("[data-test-selector='collection-popup-button']").remove();
    $('[href="/pricing"]').remove();
    $('[href="/sign-up"]').remove();
    $('[href="/sign-in"]').remove();
    $("span:contains('Sign in')").parent().hide();
    $("._3ci18hZy").remove();
    $("ul._B3YJ2bp").remove();
    $("footer").remove();
    $("._31cnpkL4").remove();
    $('a[href$="/license-terms"]').remove();
    $("body").mouseover(function () {
      $(".F_Osdtvf").remove();
      $("[data-test-selector='header-switch-to-annual']").remove();
      $("[data-test-selector='collection-popup-button']").remove();
      $('[href="/pricing"]').remove();
      $("span:contains('Sign in')").parent().hide();
      $('[href="/sign-up"]').remove();
      $('[href="/sign-in"]').remove();
      $("._3ci18hZy").remove();
      $("ul._B3YJ2bp").remove();
      $("footer").remove();
      $("._31cnpkL4").remove();
      $('a[href$="/license-terms"]').remove();
    });
  });
} else if (window.location.hostname.indexOf("tutsplus") > -1) {
  $(document).ready(function () {
    $("#user_session_info").remove();
    $("footer").remove();
  });
} else if (window.location.hostname.indexOf("wordtracker") > -1) {
  $(document).ready(function () {
    $(".free-upsell-banner.ng-scope").remove();
    $(".feedback-button").remove();
    $(".has-menu.account-link").remove();
    $(".upgrade-in-nav.is-zuul-user").remove();
  });
} else if (window.location.hostname.indexOf("scribd") > -1) {
  $(document).ready(function () {
    $('div[data-e2e="flash-manager"]').remove();
    $('div[data-e2e="megamenu-top-bar-user-menu-button"]').remove();
    $("#global_footer").remove();
  });
} else if (window.location.hostname.indexOf("picsart") > -1) {
  $(document).ready(function () {
    $(".user").remove();
    $("footer").remove();
  });
  $("body").mouseover(function () {
    $(".user").remove();
    $("footer").remove();
  });
} else if (window.location.hostname.indexOf("placeit") > -1) {
  $(document).ready(function () {
    $(".account").remove();
    $(".footer-wrapper").remove();
    $(".src-core-components--footer-footer-3GU5J").remove();
    $(".src-home-components--signed_in_home-sidebar-3yOaT").remove();
    $('a[href="/blog/new-picmonkey"]').remove();
    $('[data-name="more"]').remove();
    $("#ctrl-bar-share").remove();
    $(".src-home-components--gdpr_banner-gdpr_banner-3PB5v").remove();
    $("footer").remove();
    $(".smcx-widget").remove();
  });
}
