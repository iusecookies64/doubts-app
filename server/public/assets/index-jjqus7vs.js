(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver((i) => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : i.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
function Mf(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var sa = { exports: {} },
    $i = {},
    la = { exports: {} },
    I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = Symbol.for("react.element"),
    Ff = Symbol.for("react.portal"),
    $f = Symbol.for("react.fragment"),
    Uf = Symbol.for("react.strict_mode"),
    Vf = Symbol.for("react.profiler"),
    Hf = Symbol.for("react.provider"),
    Wf = Symbol.for("react.context"),
    Qf = Symbol.for("react.forward_ref"),
    Kf = Symbol.for("react.suspense"),
    qf = Symbol.for("react.memo"),
    Yf = Symbol.for("react.lazy"),
    Bl = Symbol.iterator;
function Xf(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Bl && e[Bl]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var ua = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    aa = Object.assign,
    ca = {};
function Rn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = ca),
        (this.updater = n || ua);
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Rn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fa() {}
fa.prototype = Rn.prototype;
function Bs(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = ca),
        (this.updater = n || ua);
}
var Ms = (Bs.prototype = new fa());
Ms.constructor = Bs;
aa(Ms, Rn.prototype);
Ms.isPureReactComponent = !0;
var Ml = Array.isArray,
    da = Object.prototype.hasOwnProperty,
    Fs = { current: null },
    pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ha(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            da.call(t, r) && !pa.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
        i.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Sr,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Fs.current,
    };
}
function Gf(e, t) {
    return {
        $$typeof: Sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function $s(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Sr;
}
function Jf(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Fl = /\/+/g;
function so(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Jf("" + e.key)
        : t.toString(36);
}
function Zr(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Sr:
                    case Ff:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = r === "" ? "." + so(s, 0) : r),
            Ml(i)
                ? ((n = ""),
                  e != null && (n = e.replace(Fl, "$&/") + "/"),
                  Zr(i, t, n, "", function (a) {
                      return a;
                  }))
                : i != null &&
                  ($s(i) &&
                      (i = Gf(
                          i,
                          n +
                              (!i.key || (s && s.key === i.key)
                                  ? ""
                                  : ("" + i.key).replace(Fl, "$&/") + "/") +
                              e
                      )),
                  t.push(i)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Ml(e)))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var u = r + so(o, l);
            s += Zr(o, t, n, u, i);
        }
    else if (((u = Xf(e)), typeof u == "function"))
        for (e = u.call(e), l = 0; !(o = e.next()).done; )
            (o = o.value), (u = r + so(o, l++)), (s += Zr(o, t, n, u, i));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function Lr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        Zr(e, r, "", "", function (o) {
            return t.call(n, o, i++);
        }),
        r
    );
}
function Zf(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ve = { current: null },
    br = { transition: null },
    bf = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: br,
        ReactCurrentOwner: Fs,
    };
I.Children = {
    map: Lr,
    forEach: function (e, t, n) {
        Lr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Lr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Lr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!$s(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
I.Component = Rn;
I.Fragment = $f;
I.Profiler = Vf;
I.PureComponent = Bs;
I.StrictMode = Uf;
I.Suspense = Kf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf;
I.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = aa({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (s = Fs.current)),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (u in t)
            da.call(t, u) &&
                !pa.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
        r.children = l;
    }
    return { $$typeof: Sr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
I.createContext = function (e) {
    return (
        (e = {
            $$typeof: Wf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Hf, _context: e }),
        (e.Consumer = e)
    );
};
I.createElement = ha;
I.createFactory = function (e) {
    var t = ha.bind(null, e);
    return (t.type = e), t;
};
I.createRef = function () {
    return { current: null };
};
I.forwardRef = function (e) {
    return { $$typeof: Qf, render: e };
};
I.isValidElement = $s;
I.lazy = function (e) {
    return { $$typeof: Yf, _payload: { _status: -1, _result: e }, _init: Zf };
};
I.memo = function (e, t) {
    return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
    var t = br.transition;
    br.transition = {};
    try {
        e();
    } finally {
        br.transition = t;
    }
};
I.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
    return ve.current.useCallback(e, t);
};
I.useContext = function (e) {
    return ve.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
    return ve.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
    return ve.current.useEffect(e, t);
};
I.useId = function () {
    return ve.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
    return ve.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
    return ve.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
    return ve.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
    return ve.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
    return ve.current.useReducer(e, t, n);
};
I.useRef = function (e) {
    return ve.current.useRef(e);
};
I.useState = function (e) {
    return ve.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
    return ve.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
    return ve.current.useTransition();
};
I.version = "18.2.0";
la.exports = I;
var L = la.exports;
const F = Mf(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = L,
    td = Symbol.for("react.element"),
    nd = Symbol.for("react.fragment"),
    rd = Object.prototype.hasOwnProperty,
    id =
        ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    od = { key: !0, ref: !0, __self: !0, __source: !0 };
function ma(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) rd.call(t, r) && !od.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: td,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: id.current,
    };
}
$i.Fragment = nd;
$i.jsx = ma;
$i.jsxs = ma;
sa.exports = $i;
var k = sa.exports,
    Mo = {},
    ya = { exports: {} },
    Oe = {},
    va = { exports: {} },
    ga = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(C, P) {
        var z = C.length;
        C.push(P);
        e: for (; 0 < z; ) {
            var Y = (z - 1) >>> 1,
                ne = C[Y];
            if (0 < i(ne, P)) (C[Y] = P), (C[z] = ne), (z = Y);
            else break e;
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0];
    }
    function r(C) {
        if (C.length === 0) return null;
        var P = C[0],
            z = C.pop();
        if (z !== P) {
            C[0] = z;
            e: for (var Y = 0, ne = C.length, Nr = ne >>> 1; Y < Nr; ) {
                var Dt = 2 * (Y + 1) - 1,
                    oo = C[Dt],
                    Bt = Dt + 1,
                    Rr = C[Bt];
                if (0 > i(oo, z))
                    Bt < ne && 0 > i(Rr, oo)
                        ? ((C[Y] = Rr), (C[Bt] = z), (Y = Bt))
                        : ((C[Y] = oo), (C[Dt] = z), (Y = Dt));
                else if (Bt < ne && 0 > i(Rr, z))
                    (C[Y] = Rr), (C[Bt] = z), (Y = Bt);
                else break e;
            }
        }
        return P;
    }
    function i(C, P) {
        var z = C.sortIndex - P.sortIndex;
        return z !== 0 ? z : C.id - P.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function () {
            return s.now() - l;
        };
    }
    var u = [],
        a = [],
        h = 1,
        m = null,
        p = 3,
        v = !1,
        y = !1,
        g = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(C) {
        for (var P = n(a); P !== null; ) {
            if (P.callback === null) r(a);
            else if (P.startTime <= C)
                r(a), (P.sortIndex = P.expirationTime), t(u, P);
            else break;
            P = n(a);
        }
    }
    function w(C) {
        if (((g = !1), d(C), !y))
            if (n(u) !== null) (y = !0), oe(S);
            else {
                var P = n(a);
                P !== null && xe(w, P.startTime - C);
            }
    }
    function S(C, P) {
        (y = !1), g && ((g = !1), f(x), (x = -1)), (v = !0);
        var z = p;
        try {
            for (
                d(P), m = n(u);
                m !== null && (!(m.expirationTime > P) || (C && !Z()));

            ) {
                var Y = m.callback;
                if (typeof Y == "function") {
                    (m.callback = null), (p = m.priorityLevel);
                    var ne = Y(m.expirationTime <= P);
                    (P = e.unstable_now()),
                        typeof ne == "function"
                            ? (m.callback = ne)
                            : m === n(u) && r(u),
                        d(P);
                } else r(u);
                m = n(u);
            }
            if (m !== null) var Nr = !0;
            else {
                var Dt = n(a);
                Dt !== null && xe(w, Dt.startTime - P), (Nr = !1);
            }
            return Nr;
        } finally {
            (m = null), (p = z), (v = !1);
        }
    }
    var T = !1,
        N = null,
        x = -1,
        B = 5,
        O = -1;
    function Z() {
        return !(e.unstable_now() - O < B);
    }
    function te() {
        if (N !== null) {
            var C = e.unstable_now();
            O = C;
            var P = !0;
            try {
                P = N(!0, C);
            } finally {
                P ? he() : ((T = !1), (N = null));
            }
        } else T = !1;
    }
    var he;
    if (typeof c == "function")
        he = function () {
            c(te);
        };
    else if (typeof MessageChannel < "u") {
        var ae = new MessageChannel(),
            rt = ae.port2;
        (ae.port1.onmessage = te),
            (he = function () {
                rt.postMessage(null);
            });
    } else
        he = function () {
            _(te, 0);
        };
    function oe(C) {
        (N = C), T || ((T = !0), he());
    }
    function xe(C, P) {
        x = _(function () {
            C(e.unstable_now());
        }, P);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (C) {
            C.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || v || ((y = !0), oe(S));
        }),
        (e.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (B = 0 < C ? Math.floor(1e3 / C) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (C) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = p;
            }
            var z = p;
            p = P;
            try {
                return C();
            } finally {
                p = z;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (C, P) {
            switch (C) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    C = 3;
            }
            var z = p;
            p = C;
            try {
                return P();
            } finally {
                p = z;
            }
        }),
        (e.unstable_scheduleCallback = function (C, P, z) {
            var Y = e.unstable_now();
            switch (
                (typeof z == "object" && z !== null
                    ? ((z = z.delay),
                      (z = typeof z == "number" && 0 < z ? Y + z : Y))
                    : (z = Y),
                C)
            ) {
                case 1:
                    var ne = -1;
                    break;
                case 2:
                    ne = 250;
                    break;
                case 5:
                    ne = 1073741823;
                    break;
                case 4:
                    ne = 1e4;
                    break;
                default:
                    ne = 5e3;
            }
            return (
                (ne = z + ne),
                (C = {
                    id: h++,
                    callback: P,
                    priorityLevel: C,
                    startTime: z,
                    expirationTime: ne,
                    sortIndex: -1,
                }),
                z > Y
                    ? ((C.sortIndex = z),
                      t(a, C),
                      n(u) === null &&
                          C === n(a) &&
                          (g ? (f(x), (x = -1)) : (g = !0), xe(w, z - Y)))
                    : ((C.sortIndex = ne),
                      t(u, C),
                      y || v || ((y = !0), oe(S))),
                C
            );
        }),
        (e.unstable_shouldYield = Z),
        (e.unstable_wrapCallback = function (C) {
            var P = p;
            return function () {
                var z = p;
                p = P;
                try {
                    return C.apply(this, arguments);
                } finally {
                    p = z;
                }
            };
        });
})(ga);
va.exports = ga;
var sd = va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wa = L,
    Pe = sd;
function E(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var ka = new Set(),
    or = {};
function Zt(e, t) {
    En(e, t), En(e + "Capture", t);
}
function En(e, t) {
    for (or[e] = t, e = 0; e < t.length; e++) ka.add(t[e]);
}
var at = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Fo = Object.prototype.hasOwnProperty,
    ld =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    $l = {},
    Ul = {};
function ud(e) {
    return Fo.call(Ul, e)
        ? !0
        : Fo.call($l, e)
        ? !1
        : ld.test(e)
        ? (Ul[e] = !0)
        : (($l[e] = !0), !1);
}
function ad(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function cd(e, t, n, r) {
    if (t === null || typeof t > "u" || ad(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function ge(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = s);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ue[e] = new ge(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ue[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ue[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ue[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ue[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Us = /[\-:]([a-z])/g;
function Vs(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Us, Vs);
        ue[t] = new ge(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Us, Vs);
        ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Us, Vs);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ge(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hs(e, t, n, r) {
    var i = ue.hasOwnProperty(t) ? ue[t] : null;
    (i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (cd(t, n, i, r) && (n = null),
        r || i === null
            ? ud(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pr = Symbol.for("react.element"),
    nn = Symbol.for("react.portal"),
    rn = Symbol.for("react.fragment"),
    Ws = Symbol.for("react.strict_mode"),
    $o = Symbol.for("react.profiler"),
    Ea = Symbol.for("react.provider"),
    Sa = Symbol.for("react.context"),
    Qs = Symbol.for("react.forward_ref"),
    Uo = Symbol.for("react.suspense"),
    Vo = Symbol.for("react.suspense_list"),
    Ks = Symbol.for("react.memo"),
    yt = Symbol.for("react.lazy"),
    _a = Symbol.for("react.offscreen"),
    Vl = Symbol.iterator;
function zn(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Vl && e[Vl]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var K = Object.assign,
    lo;
function Un(e) {
    if (lo === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            lo = (t && t[1]) || "";
        }
    return (
        `
` +
        lo +
        e
    );
}
var uo = !1;
function ao(e, t) {
    if (!e || uo) return "";
    uo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (a) {
                r = a;
            }
            e();
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (
                var i = a.stack.split(`
`),
                    o = r.stack.split(`
`),
                    s = i.length - 1,
                    l = o.length - 1;
                1 <= s && 0 <= l && i[s] !== o[l];

            )
                l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if ((s--, l--, 0 > l || i[s] !== o[l])) {
                                var u =
                                    `
` + i[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    u
                                );
                            }
                        while (1 <= s && 0 <= l);
                    break;
                }
        }
    } finally {
        (uo = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Un(e) : "";
}
function fd(e) {
    switch (e.tag) {
        case 5:
            return Un(e.type);
        case 16:
            return Un("Lazy");
        case 13:
            return Un("Suspense");
        case 19:
            return Un("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ao(e.type, !1)), e;
        case 11:
            return (e = ao(e.type.render, !1)), e;
        case 1:
            return (e = ao(e.type, !0)), e;
        default:
            return "";
    }
}
function Ho(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case rn:
            return "Fragment";
        case nn:
            return "Portal";
        case $o:
            return "Profiler";
        case Ws:
            return "StrictMode";
        case Uo:
            return "Suspense";
        case Vo:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Sa:
                return (e.displayName || "Context") + ".Consumer";
            case Ea:
                return (e._context.displayName || "Context") + ".Provider";
            case Qs:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Ks:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Ho(e.type) || "Memo"
                );
            case yt:
                (t = e._payload), (e = e._init);
                try {
                    return Ho(e(t));
                } catch {}
        }
    return null;
}
function dd(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ho(t);
        case 8:
            return t === Ws ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Ot(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Ca(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function pd(e) {
    var t = Ca(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = "" + s), o.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Or(e) {
    e._valueTracker || (e._valueTracker = pd(e));
}
function xa(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = Ca(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function hi(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Wo(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Hl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Ot(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function Ta(e, t) {
    (t = t.checked), t != null && Hs(e, "checked", t, !1);
}
function Qo(e, t) {
    Ta(e, t);
    var n = Ot(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Ko(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ko(e, t.type, Ot(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Wl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Ko(e, t, n) {
    (t !== "number" || hi(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function mn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Ot(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function qo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Ql(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(E(92));
            if (Vn(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Ot(n) };
}
function Na(e, t) {
    var n = Ot(t.value),
        r = Ot(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Kl(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function Ra(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Yo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Ra(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var zr,
    La = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                zr = zr || document.createElement("div"),
                    zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = zr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function sr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var qn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function (e) {
    hd.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e]);
    });
});
function Pa(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (qn.hasOwnProperty(e) && qn[e])
        ? ("" + t).trim()
        : t + "px";
}
function Oa(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Pa(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var md = K(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Xo(e, t) {
    if (t) {
        if (md[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(E(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62));
    }
}
function Go(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Jo = null;
function qs(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Zo = null,
    yn = null,
    vn = null;
function ql(e) {
    if ((e = xr(e))) {
        if (typeof Zo != "function") throw Error(E(280));
        var t = e.stateNode;
        t && ((t = Qi(t)), Zo(e.stateNode, e.type, t));
    }
}
function za(e) {
    yn ? (vn ? vn.push(e) : (vn = [e])) : (yn = e);
}
function Aa() {
    if (yn) {
        var e = yn,
            t = vn;
        if (((vn = yn = null), ql(e), t))
            for (e = 0; e < t.length; e++) ql(t[e]);
    }
}
function Ia(e, t) {
    return e(t);
}
function ja() {}
var co = !1;
function Da(e, t, n) {
    if (co) return e(t, n);
    co = !0;
    try {
        return Ia(e, t, n);
    } finally {
        (co = !1), (yn !== null || vn !== null) && (ja(), Aa());
    }
}
function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n;
}
var bo = !1;
if (at)
    try {
        var An = {};
        Object.defineProperty(An, "passive", {
            get: function () {
                bo = !0;
            },
        }),
            window.addEventListener("test", An, An),
            window.removeEventListener("test", An, An);
    } catch {
        bo = !1;
    }
function yd(e, t, n, r, i, o, s, l, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a);
    } catch (h) {
        this.onError(h);
    }
}
var Yn = !1,
    mi = null,
    yi = !1,
    es = null,
    vd = {
        onError: function (e) {
            (Yn = !0), (mi = e);
        },
    };
function gd(e, t, n, r, i, o, s, l, u) {
    (Yn = !1), (mi = null), yd.apply(vd, arguments);
}
function wd(e, t, n, r, i, o, s, l, u) {
    if ((gd.apply(this, arguments), Yn)) {
        if (Yn) {
            var a = mi;
            (Yn = !1), (mi = null);
        } else throw Error(E(198));
        yi || ((yi = !0), (es = a));
    }
}
function bt(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Ba(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Yl(e) {
    if (bt(e) !== e) throw Error(E(188));
}
function kd(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = bt(e)), t === null)) throw Error(E(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Yl(i), e;
                if (o === r) return Yl(i), t;
                o = o.sibling;
            }
            throw Error(E(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                }
                if (l === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                }
                l = l.sibling;
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                    }
                    if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                    }
                    l = l.sibling;
                }
                if (!s) throw Error(E(189));
            }
        }
        if (n.alternate !== r) throw Error(E(190));
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t;
}
function Ma(e) {
    return (e = kd(e)), e !== null ? Fa(e) : null;
}
function Fa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Fa(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var $a = Pe.unstable_scheduleCallback,
    Xl = Pe.unstable_cancelCallback,
    Ed = Pe.unstable_shouldYield,
    Sd = Pe.unstable_requestPaint,
    X = Pe.unstable_now,
    _d = Pe.unstable_getCurrentPriorityLevel,
    Ys = Pe.unstable_ImmediatePriority,
    Ua = Pe.unstable_UserBlockingPriority,
    vi = Pe.unstable_NormalPriority,
    Cd = Pe.unstable_LowPriority,
    Va = Pe.unstable_IdlePriority,
    Ui = null,
    be = null;
function xd(e) {
    if (be && typeof be.onCommitFiberRoot == "function")
        try {
            be.onCommitFiberRoot(
                Ui,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Rd,
    Td = Math.log,
    Nd = Math.LN2;
function Rd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Td(e) / Nd) | 0)) | 0;
}
var Ar = 64,
    Ir = 4194304;
function Hn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function gi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? (r = Hn(l)) : ((o &= s), o !== 0 && (r = Hn(o)));
    } else (s = n & ~i), s !== 0 ? (r = Hn(s)) : o !== 0 && (r = Hn(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & i) &&
        ((i = r & -r),
        (o = t & -t),
        i >= o || (i === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function Ld(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Pd(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var s = 31 - qe(o),
            l = 1 << s,
            u = i[s];
        u === -1
            ? (!(l & n) || l & r) && (i[s] = Ld(l, t))
            : u <= t && (e.expiredLanes |= l),
            (o &= ~l);
    }
}
function ts(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ha() {
    var e = Ar;
    return (Ar <<= 1), !(Ar & 4194240) && (Ar = 64), e;
}
function fo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function _r(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - qe(t)),
        (e[t] = n);
}
function Od(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - qe(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function Xs(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - qe(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var M = 0;
function Wa(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Qa,
    Gs,
    Ka,
    qa,
    Ya,
    ns = !1,
    jr = [],
    _t = null,
    Ct = null,
    xt = null,
    ur = new Map(),
    ar = new Map(),
    gt = [],
    zd =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Gl(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            _t = null;
            break;
        case "dragenter":
        case "dragleave":
            Ct = null;
            break;
        case "mouseover":
        case "mouseout":
            xt = null;
            break;
        case "pointerover":
        case "pointerout":
            ur.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ar.delete(t.pointerId);
    }
}
function In(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [i],
          }),
          t !== null && ((t = xr(t)), t !== null && Gs(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
}
function Ad(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (_t = In(_t, e, t, n, r, i)), !0;
        case "dragenter":
            return (Ct = In(Ct, e, t, n, r, i)), !0;
        case "mouseover":
            return (xt = In(xt, e, t, n, r, i)), !0;
        case "pointerover":
            var o = i.pointerId;
            return ur.set(o, In(ur.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (
                (o = i.pointerId),
                ar.set(o, In(ar.get(o) || null, e, t, n, r, i)),
                !0
            );
    }
    return !1;
}
function Xa(e) {
    var t = Ut(e.target);
    if (t !== null) {
        var n = bt(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Ba(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ya(e.priority, function () {
                            Ka(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Jo = r), n.target.dispatchEvent(r), (Jo = null);
        } else return (t = xr(n)), t !== null && Gs(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Jl(e, t, n) {
    ei(e) && n.delete(t);
}
function Id() {
    (ns = !1),
        _t !== null && ei(_t) && (_t = null),
        Ct !== null && ei(Ct) && (Ct = null),
        xt !== null && ei(xt) && (xt = null),
        ur.forEach(Jl),
        ar.forEach(Jl);
}
function jn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        ns ||
            ((ns = !0),
            Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Id)));
}
function cr(e) {
    function t(i) {
        return jn(i, e);
    }
    if (0 < jr.length) {
        jn(jr[0], e);
        for (var n = 1; n < jr.length; n++) {
            var r = jr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        _t !== null && jn(_t, e),
            Ct !== null && jn(Ct, e),
            xt !== null && jn(xt, e),
            ur.forEach(t),
            ar.forEach(t),
            n = 0;
        n < gt.length;
        n++
    )
        (r = gt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < gt.length && ((n = gt[0]), n.blockedOn === null); )
        Xa(n), n.blockedOn === null && gt.shift();
}
var gn = ht.ReactCurrentBatchConfig,
    wi = !0;
function jd(e, t, n, r) {
    var i = M,
        o = gn.transition;
    gn.transition = null;
    try {
        (M = 1), Js(e, t, n, r);
    } finally {
        (M = i), (gn.transition = o);
    }
}
function Dd(e, t, n, r) {
    var i = M,
        o = gn.transition;
    gn.transition = null;
    try {
        (M = 4), Js(e, t, n, r);
    } finally {
        (M = i), (gn.transition = o);
    }
}
function Js(e, t, n, r) {
    if (wi) {
        var i = rs(e, t, n, r);
        if (i === null) So(e, t, r, ki, n), Gl(e, r);
        else if (Ad(i, e, t, n, r)) r.stopPropagation();
        else if ((Gl(e, r), t & 4 && -1 < zd.indexOf(e))) {
            for (; i !== null; ) {
                var o = xr(i);
                if (
                    (o !== null && Qa(o),
                    (o = rs(e, t, n, r)),
                    o === null && So(e, t, r, ki, n),
                    o === i)
                )
                    break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else So(e, t, r, null, n);
    }
}
var ki = null;
function rs(e, t, n, r) {
    if (((ki = null), (e = qs(r)), (e = Ut(e)), e !== null))
        if (((t = bt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Ba(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ki = e), null;
}
function Ga(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (_d()) {
                case Ys:
                    return 1;
                case Ua:
                    return 4;
                case vi:
                case Cd:
                    return 16;
                case Va:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var kt = null,
    Zs = null,
    ti = null;
function Ja() {
    if (ti) return ti;
    var e,
        t = Zs,
        n = t.length,
        r,
        i = "value" in kt ? kt.value : kt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (ti = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ni(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Dr() {
    return !0;
}
function Zl() {
    return !1;
}
function ze(e) {
    function t(n, r, i, o, s) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = s),
            (this.currentTarget = null);
        for (var l in e)
            e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? Dr
                : Zl),
            (this.isPropagationStopped = Zl),
            this
        );
    }
    return (
        K(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Dr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Dr));
            },
            persist: function () {},
            isPersistent: Dr,
        }),
        t
    );
}
var Ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    bs = ze(Ln),
    Cr = K({}, Ln, { view: 0, detail: 0 }),
    Bd = ze(Cr),
    po,
    ho,
    Dn,
    Vi = K({}, Cr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: el,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Dn &&
                      (Dn && e.type === "mousemove"
                          ? ((po = e.screenX - Dn.screenX),
                            (ho = e.screenY - Dn.screenY))
                          : (ho = po = 0),
                      (Dn = e)),
                  po);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ho;
        },
    }),
    bl = ze(Vi),
    Md = K({}, Vi, { dataTransfer: 0 }),
    Fd = ze(Md),
    $d = K({}, Cr, { relatedTarget: 0 }),
    mo = ze($d),
    Ud = K({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vd = ze(Ud),
    Hd = K({}, Ln, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Wd = ze(Hd),
    Qd = K({}, Ln, { data: 0 }),
    eu = ze(Qd),
    Kd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    qd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Yd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Xd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Yd[e])
        ? !!t[e]
        : !1;
}
function el() {
    return Xd;
}
var Gd = K({}, Cr, {
        key: function (e) {
            if (e.key) {
                var t = Kd[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? qd[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: el,
        charCode: function (e) {
            return e.type === "keypress" ? ni(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? ni(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Jd = ze(Gd),
    Zd = K({}, Vi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    tu = ze(Zd),
    bd = K({}, Cr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: el,
    }),
    ep = ze(bd),
    tp = K({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    np = ze(tp),
    rp = K({}, Vi, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    ip = ze(rp),
    op = [9, 13, 27, 32],
    tl = at && "CompositionEvent" in window,
    Xn = null;
at && "documentMode" in document && (Xn = document.documentMode);
var sp = at && "TextEvent" in window && !Xn,
    Za = at && (!tl || (Xn && 8 < Xn && 11 >= Xn)),
    nu = " ",
    ru = !1;
function ba(e, t) {
    switch (e) {
        case "keyup":
            return op.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function ec(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function lp(e, t) {
    switch (e) {
        case "compositionend":
            return ec(t);
        case "keypress":
            return t.which !== 32 ? null : ((ru = !0), nu);
        case "textInput":
            return (e = t.data), e === nu && ru ? null : e;
        default:
            return null;
    }
}
function up(e, t) {
    if (on)
        return e === "compositionend" || (!tl && ba(e, t))
            ? ((e = Ja()), (ti = Zs = kt = null), (on = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Za && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var ap = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ap[e.type] : t === "textarea";
}
function tc(e, t, n, r) {
    za(r),
        (t = Ei(t, "onChange")),
        0 < t.length &&
            ((n = new bs("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Gn = null,
    fr = null;
function cp(e) {
    dc(e, 0);
}
function Hi(e) {
    var t = un(e);
    if (xa(t)) return e;
}
function fp(e, t) {
    if (e === "change") return t;
}
var nc = !1;
if (at) {
    var yo;
    if (at) {
        var vo = "oninput" in document;
        if (!vo) {
            var ou = document.createElement("div");
            ou.setAttribute("oninput", "return;"),
                (vo = typeof ou.oninput == "function");
        }
        yo = vo;
    } else yo = !1;
    nc = yo && (!document.documentMode || 9 < document.documentMode);
}
function su() {
    Gn && (Gn.detachEvent("onpropertychange", rc), (fr = Gn = null));
}
function rc(e) {
    if (e.propertyName === "value" && Hi(fr)) {
        var t = [];
        tc(t, fr, e, qs(e)), Da(cp, t);
    }
}
function dp(e, t, n) {
    e === "focusin"
        ? (su(), (Gn = t), (fr = n), Gn.attachEvent("onpropertychange", rc))
        : e === "focusout" && su();
}
function pp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Hi(fr);
}
function hp(e, t) {
    if (e === "click") return Hi(t);
}
function mp(e, t) {
    if (e === "input" || e === "change") return Hi(t);
}
function yp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : yp;
function dr(e, t) {
    if (Xe(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Fo.call(t, i) || !Xe(e[i], t[i])) return !1;
    }
    return !0;
}
function lu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function uu(e, t) {
    var n = lu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = lu(n);
    }
}
function ic(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? ic(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function oc() {
    for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = hi(e.document);
    }
    return t;
}
function nl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function vp(e) {
    var t = oc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        ic(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && nl(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = uu(n, o));
                var s = uu(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var gp = at && "documentMode" in document && 11 >= document.documentMode,
    sn = null,
    is = null,
    Jn = null,
    os = !1;
function au(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    os ||
        sn == null ||
        sn !== hi(r) ||
        ((r = sn),
        "selectionStart" in r && nl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Jn && dr(Jn, r)) ||
            ((Jn = r),
            (r = Ei(is, "onSelect")),
            0 < r.length &&
                ((t = new bs("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = sn))));
}
function Br(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var ln = {
        animationend: Br("Animation", "AnimationEnd"),
        animationiteration: Br("Animation", "AnimationIteration"),
        animationstart: Br("Animation", "AnimationStart"),
        transitionend: Br("Transition", "TransitionEnd"),
    },
    go = {},
    sc = {};
at &&
    ((sc = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete ln.animationend.animation,
        delete ln.animationiteration.animation,
        delete ln.animationstart.animation),
    "TransitionEvent" in window || delete ln.transitionend.transition);
function Wi(e) {
    if (go[e]) return go[e];
    if (!ln[e]) return e;
    var t = ln[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in sc) return (go[e] = t[n]);
    return e;
}
var lc = Wi("animationend"),
    uc = Wi("animationiteration"),
    ac = Wi("animationstart"),
    cc = Wi("transitionend"),
    fc = new Map(),
    cu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function At(e, t) {
    fc.set(e, t), Zt(t, [e]);
}
for (var wo = 0; wo < cu.length; wo++) {
    var ko = cu[wo],
        wp = ko.toLowerCase(),
        kp = ko[0].toUpperCase() + ko.slice(1);
    At(wp, "on" + kp);
}
At(lc, "onAnimationEnd");
At(uc, "onAnimationIteration");
At(ac, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(cc, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
Zt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
Zt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    Ep = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Wn)
    );
function fu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), wd(r, t, void 0, e), (e.currentTarget = null);
}
function dc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        u = l.instance,
                        a = l.currentTarget;
                    if (((l = l.listener), u !== o && i.isPropagationStopped()))
                        break e;
                    fu(i, l, a), (o = u);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((l = r[s]),
                        (u = l.instance),
                        (a = l.currentTarget),
                        (l = l.listener),
                        u !== o && i.isPropagationStopped())
                    )
                        break e;
                    fu(i, l, a), (o = u);
                }
        }
    }
    if (yi) throw ((e = es), (yi = !1), (es = null), e);
}
function U(e, t) {
    var n = t[cs];
    n === void 0 && (n = t[cs] = new Set());
    var r = e + "__bubble";
    n.has(r) || (pc(t, e, 2, !1), n.add(r));
}
function Eo(e, t, n) {
    var r = 0;
    t && (r |= 4), pc(n, e, r, t);
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function pr(e) {
    if (!e[Mr]) {
        (e[Mr] = !0),
            ka.forEach(function (n) {
                n !== "selectionchange" &&
                    (Ep.has(n) || Eo(n, !1, e), Eo(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Mr] || ((t[Mr] = !0), Eo("selectionchange", !1, t));
    }
}
function pc(e, t, n, r) {
    switch (Ga(t)) {
        case 1:
            var i = jd;
            break;
        case 4:
            i = Dd;
            break;
        default:
            i = Js;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !bo ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function So(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var u = s.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = s.stateNode.containerInfo),
                            u === i || (u.nodeType === 8 && u.parentNode === i))
                        )
                            return;
                        s = s.return;
                    }
                for (; l !== null; ) {
                    if (((s = Ut(l)), s === null)) return;
                    if (((u = s.tag), u === 5 || u === 6)) {
                        r = o = s;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            r = r.return;
        }
    Da(function () {
        var a = o,
            h = qs(n),
            m = [];
        e: {
            var p = fc.get(e);
            if (p !== void 0) {
                var v = bs,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (ni(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = Jd;
                        break;
                    case "focusin":
                        (y = "focus"), (v = mo);
                        break;
                    case "focusout":
                        (y = "blur"), (v = mo);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = mo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = bl;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Fd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = ep;
                        break;
                    case lc:
                    case uc:
                    case ac:
                        v = Vd;
                        break;
                    case cc:
                        v = np;
                        break;
                    case "scroll":
                        v = Bd;
                        break;
                    case "wheel":
                        v = ip;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = Wd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = tu;
                }
                var g = (t & 4) !== 0,
                    _ = !g && e === "scroll",
                    f = g ? (p !== null ? p + "Capture" : null) : p;
                g = [];
                for (var c = a, d; c !== null; ) {
                    d = c;
                    var w = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            w !== null &&
                            ((d = w),
                            f !== null &&
                                ((w = lr(c, f)),
                                w != null && g.push(hr(c, w, d)))),
                        _)
                    )
                        break;
                    c = c.return;
                }
                0 < g.length &&
                    ((p = new v(p, y, null, n, h)),
                    m.push({ event: p, listeners: g }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (v = e === "mouseout" || e === "pointerout"),
                    p &&
                        n !== Jo &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Ut(y) || y[ct]))
                )
                    break e;
                if (
                    (v || p) &&
                    ((p =
                        h.window === h
                            ? h
                            : (p = h.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    v
                        ? ((y = n.relatedTarget || n.toElement),
                          (v = a),
                          (y = y ? Ut(y) : null),
                          y !== null &&
                              ((_ = bt(y)),
                              y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((v = null), (y = a)),
                    v !== y)
                ) {
                    if (
                        ((g = bl),
                        (w = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((g = tu),
                            (w = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (c = "pointer")),
                        (_ = v == null ? p : un(v)),
                        (d = y == null ? p : un(y)),
                        (p = new g(w, c + "leave", v, n, h)),
                        (p.target = _),
                        (p.relatedTarget = d),
                        (w = null),
                        Ut(h) === a &&
                            ((g = new g(f, c + "enter", y, n, h)),
                            (g.target = d),
                            (g.relatedTarget = _),
                            (w = g)),
                        (_ = w),
                        v && y)
                    )
                        t: {
                            for (g = v, f = y, c = 0, d = g; d; d = en(d)) c++;
                            for (d = 0, w = f; w; w = en(w)) d++;
                            for (; 0 < c - d; ) (g = en(g)), c--;
                            for (; 0 < d - c; ) (f = en(f)), d--;
                            for (; c--; ) {
                                if (
                                    g === f ||
                                    (f !== null && g === f.alternate)
                                )
                                    break t;
                                (g = en(g)), (f = en(f));
                            }
                            g = null;
                        }
                    else g = null;
                    v !== null && du(m, p, v, g, !1),
                        y !== null && _ !== null && du(m, _, y, g, !0);
                }
            }
            e: {
                if (
                    ((p = a ? un(a) : window),
                    (v = p.nodeName && p.nodeName.toLowerCase()),
                    v === "select" || (v === "input" && p.type === "file"))
                )
                    var S = fp;
                else if (iu(p))
                    if (nc) S = mp;
                    else {
                        S = pp;
                        var T = dp;
                    }
                else
                    (v = p.nodeName) &&
                        v.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (S = hp);
                if (S && (S = S(e, a))) {
                    tc(m, S, n, h);
                    break e;
                }
                T && T(e, p, a),
                    e === "focusout" &&
                        (T = p._wrapperState) &&
                        T.controlled &&
                        p.type === "number" &&
                        Ko(p, "number", p.value);
            }
            switch (((T = a ? un(a) : window), e)) {
                case "focusin":
                    (iu(T) || T.contentEditable === "true") &&
                        ((sn = T), (is = a), (Jn = null));
                    break;
                case "focusout":
                    Jn = is = sn = null;
                    break;
                case "mousedown":
                    os = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (os = !1), au(m, n, h);
                    break;
                case "selectionchange":
                    if (gp) break;
                case "keydown":
                case "keyup":
                    au(m, n, h);
            }
            var N;
            if (tl)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var x = "onCompositionStart";
                            break e;
                        case "compositionend":
                            x = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            x = "onCompositionUpdate";
                            break e;
                    }
                    x = void 0;
                }
            else
                on
                    ? ba(e, n) && (x = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (x = "onCompositionStart");
            x &&
                (Za &&
                    n.locale !== "ko" &&
                    (on || x !== "onCompositionStart"
                        ? x === "onCompositionEnd" && on && (N = Ja())
                        : ((kt = h),
                          (Zs = "value" in kt ? kt.value : kt.textContent),
                          (on = !0))),
                (T = Ei(a, x)),
                0 < T.length &&
                    ((x = new eu(x, e, null, n, h)),
                    m.push({ event: x, listeners: T }),
                    N
                        ? (x.data = N)
                        : ((N = ec(n)), N !== null && (x.data = N)))),
                (N = sp ? lp(e, n) : up(e, n)) &&
                    ((a = Ei(a, "onBeforeInput")),
                    0 < a.length &&
                        ((h = new eu(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            h
                        )),
                        m.push({ event: h, listeners: a }),
                        (h.data = N)));
        }
        dc(m, t);
    });
}
function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ei(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 &&
            o !== null &&
            ((i = o),
            (o = lr(e, n)),
            o != null && r.unshift(hr(e, o, i)),
            (o = lr(e, t)),
            o != null && r.push(hr(e, o, i))),
            (e = e.return);
    }
    return r;
}
function en(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function du(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n,
            u = l.alternate,
            a = l.stateNode;
        if (u !== null && u === r) break;
        l.tag === 5 &&
            a !== null &&
            ((l = a),
            i
                ? ((u = lr(n, o)), u != null && s.unshift(hr(n, u, l)))
                : i || ((u = lr(n, o)), u != null && s.push(hr(n, u, l)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var Sp = /\r\n?/g,
    _p = /\u0000|\uFFFD/g;
function pu(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Sp,
            `
`
        )
        .replace(_p, "");
}
function Fr(e, t, n) {
    if (((t = pu(t)), pu(e) !== t && n)) throw Error(E(425));
}
function Si() {}
var ss = null,
    ls = null;
function us(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var as = typeof setTimeout == "function" ? setTimeout : void 0,
    Cp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hu = typeof Promise == "function" ? Promise : void 0,
    xp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof hu < "u"
            ? function (e) {
                  return hu.resolve(null).then(e).catch(Tp);
              }
            : as;
function Tp(e) {
    setTimeout(function () {
        throw e;
    });
}
function _o(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), cr(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    cr(t);
}
function Tt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function mu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var Pn = Math.random().toString(36).slice(2),
    Ze = "__reactFiber$" + Pn,
    mr = "__reactProps$" + Pn,
    ct = "__reactContainer$" + Pn,
    cs = "__reactEvents$" + Pn,
    Np = "__reactListeners$" + Pn,
    Rp = "__reactHandles$" + Pn;
function Ut(e) {
    var t = e[Ze];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ct] || n[Ze])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = mu(e); e !== null; ) {
                    if ((n = e[Ze])) return n;
                    e = mu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function xr(e) {
    return (
        (e = e[Ze] || e[ct]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33));
}
function Qi(e) {
    return e[mr] || null;
}
var fs = [],
    an = -1;
function It(e) {
    return { current: e };
}
function V(e) {
    0 > an || ((e.current = fs[an]), (fs[an] = null), an--);
}
function $(e, t) {
    an++, (fs[an] = e.current), (e.current = t);
}
var zt = {},
    pe = It(zt),
    Se = It(!1),
    Kt = zt;
function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function _e(e) {
    return (e = e.childContextTypes), e != null;
}
function _i() {
    V(Se), V(pe);
}
function yu(e, t, n) {
    if (pe.current !== zt) throw Error(E(168));
    $(pe, t), $(Se, n);
}
function hc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(E(108, dd(e) || "Unknown", i));
    return K({}, n, r);
}
function Ci(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            zt),
        (Kt = pe.current),
        $(pe, e),
        $(Se, Se.current),
        !0
    );
}
function vu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n
        ? ((e = hc(e, t, Kt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          V(Se),
          V(pe),
          $(pe, e))
        : V(Se),
        $(Se, n);
}
var ot = null,
    Ki = !1,
    Co = !1;
function mc(e) {
    ot === null ? (ot = [e]) : ot.push(e);
}
function Lp(e) {
    (Ki = !0), mc(e);
}
function jt() {
    if (!Co && ot !== null) {
        Co = !0;
        var e = 0,
            t = M;
        try {
            var n = ot;
            for (M = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (ot = null), (Ki = !1);
        } catch (i) {
            throw (ot !== null && (ot = ot.slice(e + 1)), $a(Ys, jt), i);
        } finally {
            (M = t), (Co = !1);
        }
    }
    return null;
}
var cn = [],
    fn = 0,
    xi = null,
    Ti = 0,
    je = [],
    De = 0,
    qt = null,
    st = 1,
    lt = "";
function Mt(e, t) {
    (cn[fn++] = Ti), (cn[fn++] = xi), (xi = e), (Ti = t);
}
function yc(e, t, n) {
    (je[De++] = st), (je[De++] = lt), (je[De++] = qt), (qt = e);
    var r = st;
    e = lt;
    var i = 32 - qe(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - qe(t) + i;
    if (30 < o) {
        var s = i - (i % 5);
        (o = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (i -= s),
            (st = (1 << (32 - qe(t) + i)) | (n << i) | r),
            (lt = o + e);
    } else (st = (1 << o) | (n << i) | r), (lt = e);
}
function rl(e) {
    e.return !== null && (Mt(e, 1), yc(e, 1, 0));
}
function il(e) {
    for (; e === xi; )
        (xi = cn[--fn]), (cn[fn] = null), (Ti = cn[--fn]), (cn[fn] = null);
    for (; e === qt; )
        (qt = je[--De]),
            (je[De] = null),
            (lt = je[--De]),
            (je[De] = null),
            (st = je[--De]),
            (je[De] = null);
}
var Le = null,
    Ne = null,
    H = !1,
    Ke = null;
function vc(e, t) {
    var n = Me(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Le = e), (Ne = Tt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Le = e), (Ne = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = qt !== null ? { id: st, overflow: lt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Me(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Le = e),
                      (Ne = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ds(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ps(e) {
    if (H) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!gu(e, t)) {
                if (ds(e)) throw Error(E(418));
                t = Tt(n.nextSibling);
                var r = Le;
                t && gu(e, t)
                    ? vc(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e));
            }
        } else {
            if (ds(e)) throw Error(E(418));
            (e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e);
        }
    }
}
function wu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Le = e;
}
function $r(e) {
    if (e !== Le) return !1;
    if (!H) return wu(e), (H = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !us(e.type, e.memoizedProps))),
        t && (t = Ne))
    ) {
        if (ds(e)) throw (gc(), Error(E(418)));
        for (; t; ) vc(e, t), (t = Tt(t.nextSibling));
    }
    if ((wu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = Tt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ne = null;
        }
    } else Ne = Le ? Tt(e.stateNode.nextSibling) : null;
    return !0;
}
function gc() {
    for (var e = Ne; e; ) e = Tt(e.nextSibling);
}
function _n() {
    (Ne = Le = null), (H = !1);
}
function ol(e) {
    Ke === null ? (Ke = [e]) : Ke.push(e);
}
var Pp = ht.ReactCurrentBatchConfig;
function He(e, t) {
    if (e && e.defaultProps) {
        (t = K({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Ni = It(null),
    Ri = null,
    dn = null,
    sl = null;
function ll() {
    sl = dn = Ri = null;
}
function ul(e) {
    var t = Ni.current;
    V(Ni), (e._currentValue = t);
}
function hs(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function wn(e, t) {
    (Ri = e),
        (sl = dn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function $e(e) {
    var t = e._currentValue;
    if (sl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
            if (Ri === null) throw Error(E(308));
            (dn = e), (Ri.dependencies = { lanes: 0, firstContext: e });
        } else dn = dn.next = e;
    return t;
}
var Vt = null;
function al(e) {
    Vt === null ? (Vt = [e]) : Vt.push(e);
}
function wc(e, t, n, r) {
    var i = t.interleaved;
    return (
        i === null ? ((n.next = n), al(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        ft(e, r)
    );
}
function ft(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function cl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function kc(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Nt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), D & 2)) {
        var i = r.pending;
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            ft(e, n)
        );
    }
    return (
        (i = r.interleaved),
        i === null ? ((t.next = t), al(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        ft(e, n)
    );
}
function ri(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xs(e, n);
    }
}
function ku(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Li(e, t, n, r) {
    var i = e.updateQueue;
    vt = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l,
            a = u.next;
        (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
            (l = h.lastBaseUpdate),
            l !== s &&
                (l === null ? (h.firstBaseUpdate = a) : (l.next = a),
                (h.lastBaseUpdate = u)));
    }
    if (o !== null) {
        var m = i.baseState;
        (s = 0), (h = a = u = null), (l = o);
        do {
            var p = l.lane,
                v = l.eventTime;
            if ((r & p) === p) {
                h !== null &&
                    (h = h.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null,
                        });
                e: {
                    var y = e,
                        g = l;
                    switch (((p = t), (v = n), g.tag)) {
                        case 1:
                            if (((y = g.payload), typeof y == "function")) {
                                m = y.call(v, m, p);
                                break e;
                            }
                            m = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = g.payload),
                                (p =
                                    typeof y == "function"
                                        ? y.call(v, m, p)
                                        : y),
                                p == null)
                            )
                                break e;
                            m = K({}, m, p);
                            break e;
                        case 2:
                            vt = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = i.effects),
                    p === null ? (i.effects = [l]) : p.push(l));
            } else
                (v = {
                    eventTime: v,
                    lane: p,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                }),
                    h === null ? ((a = h = v), (u = m)) : (h = h.next = v),
                    (s |= p);
            if (((l = l.next), l === null)) {
                if (((l = i.shared.pending), l === null)) break;
                (p = l),
                    (l = p.next),
                    (p.next = null),
                    (i.lastBaseUpdate = p),
                    (i.shared.pending = null);
            }
        } while (!0);
        if (
            (h === null && (u = m),
            (i.baseState = u),
            (i.firstBaseUpdate = a),
            (i.lastBaseUpdate = h),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (Xt |= s), (e.lanes = s), (e.memoizedState = m);
    }
}
function Eu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function"))
                    throw Error(E(191, i));
                i.call(r);
            }
        }
}
var Ec = new wa.Component().refs;
function ms(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : K({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? bt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            i = Lt(e),
            o = ut(r, i);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = Nt(e, o, i)),
            t !== null && (Ye(t, e, i, r), ri(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            i = Lt(e),
            o = ut(r, i);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = Nt(e, o, i)),
            t !== null && (Ye(t, e, i, r), ri(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ye(),
            r = Lt(e),
            i = ut(n, r);
        (i.tag = 2),
            t != null && (i.callback = t),
            (t = Nt(e, i, r)),
            t !== null && (Ye(t, e, r, n), ri(t, e, r));
    },
};
function Su(e, t, n, r, i, o, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !dr(n, r) || !dr(i, o)
            : !0
    );
}
function Sc(e, t, n) {
    var r = !1,
        i = zt,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = $e(o))
            : ((i = _e(t) ? Kt : pe.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? Sn(e, i) : zt)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = qi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function _u(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && qi.enqueueReplaceState(t, t.state, null);
}
function ys(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Ec), cl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (i.context = $e(o))
        : ((o = _e(t) ? Kt : pe.current), (i.context = Sn(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (ms(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && qi.enqueueReplaceState(i, i.state, null),
            Li(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(E(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(E(147, e));
            var i = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (s) {
                      var l = i.refs;
                      l === Ec && (l = i.refs = {}),
                          s === null ? delete l[o] : (l[o] = s);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e));
    }
    return e;
}
function Ur(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            E(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function Cu(e) {
    var t = e._init;
    return t(e._payload);
}
function _c(e) {
    function t(f, c) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
        }
    }
    function n(f, c) {
        if (!e) return null;
        for (; c !== null; ) t(f, c), (c = c.sibling);
        return null;
    }
    function r(f, c) {
        for (f = new Map(); c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
                (c = c.sibling);
        return f;
    }
    function i(f, c) {
        return (f = Pt(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, c, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
                      : ((f.flags |= 2), c))
                : ((f.flags |= 1048576), c)
        );
    }
    function s(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function l(f, c, d, w) {
        return c === null || c.tag !== 6
            ? ((c = Oo(d, f.mode, w)), (c.return = f), c)
            : ((c = i(c, d)), (c.return = f), c);
    }
    function u(f, c, d, w) {
        var S = d.type;
        return S === rn
            ? h(f, c, d.props.children, w, d.key)
            : c !== null &&
              (c.elementType === S ||
                  (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === yt &&
                      Cu(S) === c.type))
            ? ((w = i(c, d.props)), (w.ref = Bn(f, c, d)), (w.return = f), w)
            : ((w = ai(d.type, d.key, d.props, null, f.mode, w)),
              (w.ref = Bn(f, c, d)),
              (w.return = f),
              w);
    }
    function a(f, c, d, w) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== d.containerInfo ||
            c.stateNode.implementation !== d.implementation
            ? ((c = zo(d, f.mode, w)), (c.return = f), c)
            : ((c = i(c, d.children || [])), (c.return = f), c);
    }
    function h(f, c, d, w, S) {
        return c === null || c.tag !== 7
            ? ((c = Qt(d, f.mode, w, S)), (c.return = f), c)
            : ((c = i(c, d)), (c.return = f), c);
    }
    function m(f, c, d) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = Oo("" + c, f.mode, d)), (c.return = f), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Pr:
                    return (
                        (d = ai(c.type, c.key, c.props, null, f.mode, d)),
                        (d.ref = Bn(f, null, c)),
                        (d.return = f),
                        d
                    );
                case nn:
                    return (c = zo(c, f.mode, d)), (c.return = f), c;
                case yt:
                    var w = c._init;
                    return m(f, w(c._payload), d);
            }
            if (Vn(c) || zn(c))
                return (c = Qt(c, f.mode, d, null)), (c.return = f), c;
            Ur(f, c);
        }
        return null;
    }
    function p(f, c, d, w) {
        var S = c !== null ? c.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return S !== null ? null : l(f, c, "" + d, w);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Pr:
                    return d.key === S ? u(f, c, d, w) : null;
                case nn:
                    return d.key === S ? a(f, c, d, w) : null;
                case yt:
                    return (S = d._init), p(f, c, S(d._payload), w);
            }
            if (Vn(d) || zn(d)) return S !== null ? null : h(f, c, d, w, null);
            Ur(f, d);
        }
        return null;
    }
    function v(f, c, d, w, S) {
        if ((typeof w == "string" && w !== "") || typeof w == "number")
            return (f = f.get(d) || null), l(c, f, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Pr:
                    return (
                        (f = f.get(w.key === null ? d : w.key) || null),
                        u(c, f, w, S)
                    );
                case nn:
                    return (
                        (f = f.get(w.key === null ? d : w.key) || null),
                        a(c, f, w, S)
                    );
                case yt:
                    var T = w._init;
                    return v(f, c, d, T(w._payload), S);
            }
            if (Vn(w) || zn(w))
                return (f = f.get(d) || null), h(c, f, w, S, null);
            Ur(c, w);
        }
        return null;
    }
    function y(f, c, d, w) {
        for (
            var S = null, T = null, N = c, x = (c = 0), B = null;
            N !== null && x < d.length;
            x++
        ) {
            N.index > x ? ((B = N), (N = null)) : (B = N.sibling);
            var O = p(f, N, d[x], w);
            if (O === null) {
                N === null && (N = B);
                break;
            }
            e && N && O.alternate === null && t(f, N),
                (c = o(O, c, x)),
                T === null ? (S = O) : (T.sibling = O),
                (T = O),
                (N = B);
        }
        if (x === d.length) return n(f, N), H && Mt(f, x), S;
        if (N === null) {
            for (; x < d.length; x++)
                (N = m(f, d[x], w)),
                    N !== null &&
                        ((c = o(N, c, x)),
                        T === null ? (S = N) : (T.sibling = N),
                        (T = N));
            return H && Mt(f, x), S;
        }
        for (N = r(f, N); x < d.length; x++)
            (B = v(N, f, x, d[x], w)),
                B !== null &&
                    (e &&
                        B.alternate !== null &&
                        N.delete(B.key === null ? x : B.key),
                    (c = o(B, c, x)),
                    T === null ? (S = B) : (T.sibling = B),
                    (T = B));
        return (
            e &&
                N.forEach(function (Z) {
                    return t(f, Z);
                }),
            H && Mt(f, x),
            S
        );
    }
    function g(f, c, d, w) {
        var S = zn(d);
        if (typeof S != "function") throw Error(E(150));
        if (((d = S.call(d)), d == null)) throw Error(E(151));
        for (
            var T = (S = null), N = c, x = (c = 0), B = null, O = d.next();
            N !== null && !O.done;
            x++, O = d.next()
        ) {
            N.index > x ? ((B = N), (N = null)) : (B = N.sibling);
            var Z = p(f, N, O.value, w);
            if (Z === null) {
                N === null && (N = B);
                break;
            }
            e && N && Z.alternate === null && t(f, N),
                (c = o(Z, c, x)),
                T === null ? (S = Z) : (T.sibling = Z),
                (T = Z),
                (N = B);
        }
        if (O.done) return n(f, N), H && Mt(f, x), S;
        if (N === null) {
            for (; !O.done; x++, O = d.next())
                (O = m(f, O.value, w)),
                    O !== null &&
                        ((c = o(O, c, x)),
                        T === null ? (S = O) : (T.sibling = O),
                        (T = O));
            return H && Mt(f, x), S;
        }
        for (N = r(f, N); !O.done; x++, O = d.next())
            (O = v(N, f, x, O.value, w)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        N.delete(O.key === null ? x : O.key),
                    (c = o(O, c, x)),
                    T === null ? (S = O) : (T.sibling = O),
                    (T = O));
        return (
            e &&
                N.forEach(function (te) {
                    return t(f, te);
                }),
            H && Mt(f, x),
            S
        );
    }
    function _(f, c, d, w) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === rn &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case Pr:
                    e: {
                        for (var S = d.key, T = c; T !== null; ) {
                            if (T.key === S) {
                                if (((S = d.type), S === rn)) {
                                    if (T.tag === 7) {
                                        n(f, T.sibling),
                                            (c = i(T, d.props.children)),
                                            (c.return = f),
                                            (f = c);
                                        break e;
                                    }
                                } else if (
                                    T.elementType === S ||
                                    (typeof S == "object" &&
                                        S !== null &&
                                        S.$$typeof === yt &&
                                        Cu(S) === T.type)
                                ) {
                                    n(f, T.sibling),
                                        (c = i(T, d.props)),
                                        (c.ref = Bn(f, T, d)),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                }
                                n(f, T);
                                break;
                            } else t(f, T);
                            T = T.sibling;
                        }
                        d.type === rn
                            ? ((c = Qt(d.props.children, f.mode, w, d.key)),
                              (c.return = f),
                              (f = c))
                            : ((w = ai(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  w
                              )),
                              (w.ref = Bn(f, c, d)),
                              (w.return = f),
                              (f = w));
                    }
                    return s(f);
                case nn:
                    e: {
                        for (T = d.key; c !== null; ) {
                            if (c.key === T)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    c.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, c.sibling),
                                        (c = i(c, d.children || [])),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                            else t(f, c);
                            c = c.sibling;
                        }
                        (c = zo(d, f.mode, w)), (c.return = f), (f = c);
                    }
                    return s(f);
                case yt:
                    return (T = d._init), _(f, c, T(d._payload), w);
            }
            if (Vn(d)) return y(f, c, d, w);
            if (zn(d)) return g(f, c, d, w);
            Ur(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              c !== null && c.tag === 6
                  ? (n(f, c.sibling), (c = i(c, d)), (c.return = f), (f = c))
                  : (n(f, c), (c = Oo(d, f.mode, w)), (c.return = f), (f = c)),
              s(f))
            : n(f, c);
    }
    return _;
}
var Cn = _c(!0),
    Cc = _c(!1),
    Tr = {},
    et = It(Tr),
    yr = It(Tr),
    vr = It(Tr);
function Ht(e) {
    if (e === Tr) throw Error(E(174));
    return e;
}
function fl(e, t) {
    switch (($(vr, t), $(yr, e), $(et, Tr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Yo(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Yo(t, e));
    }
    V(et), $(et, t);
}
function xn() {
    V(et), V(yr), V(vr);
}
function xc(e) {
    Ht(vr.current);
    var t = Ht(et.current),
        n = Yo(t, e.type);
    t !== n && ($(yr, e), $(et, n));
}
function dl(e) {
    yr.current === e && (V(et), V(yr));
}
var W = It(0);
function Pi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var xo = [];
function pl() {
    for (var e = 0; e < xo.length; e++)
        xo[e]._workInProgressVersionPrimary = null;
    xo.length = 0;
}
var ii = ht.ReactCurrentDispatcher,
    To = ht.ReactCurrentBatchConfig,
    Yt = 0,
    Q = null,
    b = null,
    re = null,
    Oi = !1,
    Zn = !1,
    gr = 0,
    Op = 0;
function ce() {
    throw Error(E(321));
}
function hl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Xe(e[n], t[n])) return !1;
    return !0;
}
function ml(e, t, n, r, i, o) {
    if (
        ((Yt = o),
        (Q = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ii.current = e === null || e.memoizedState === null ? jp : Dp),
        (e = n(r, i)),
        Zn)
    ) {
        o = 0;
        do {
            if (((Zn = !1), (gr = 0), 25 <= o)) throw Error(E(301));
            (o += 1),
                (re = b = null),
                (t.updateQueue = null),
                (ii.current = Bp),
                (e = n(r, i));
        } while (Zn);
    }
    if (
        ((ii.current = zi),
        (t = b !== null && b.next !== null),
        (Yt = 0),
        (re = b = Q = null),
        (Oi = !1),
        t)
    )
        throw Error(E(300));
    return e;
}
function yl() {
    var e = gr !== 0;
    return (gr = 0), e;
}
function Je() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return re === null ? (Q.memoizedState = re = e) : (re = re.next = e), re;
}
function Ue() {
    if (b === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = b.next;
    var t = re === null ? Q.memoizedState : re.next;
    if (t !== null) (re = t), (b = e);
    else {
        if (e === null) throw Error(E(310));
        (b = e),
            (e = {
                memoizedState: b.memoizedState,
                baseState: b.baseState,
                baseQueue: b.baseQueue,
                queue: b.queue,
                next: null,
            }),
            re === null ? (Q.memoizedState = re = e) : (re = re.next = e);
    }
    return re;
}
function wr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function No(e) {
    var t = Ue(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = b,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var l = (s = null),
            u = null,
            a = o;
        do {
            var h = a.lane;
            if ((Yt & h) === h)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        }),
                    (r = a.hasEagerState ? a.eagerState : e(r, a.action));
            else {
                var m = {
                    lane: h,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                };
                u === null ? ((l = u = m), (s = r)) : (u = u.next = m),
                    (Q.lanes |= h),
                    (Xt |= h);
            }
            a = a.next;
        } while (a !== null && a !== o);
        u === null ? (s = r) : (u.next = l),
            Xe(r, t.memoizedState) || (ke = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), (Q.lanes |= o), (Xt |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Ro(e) {
    var t = Ue(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== i);
        Xe(o, t.memoizedState) || (ke = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function Tc() {}
function Nc(e, t) {
    var n = Q,
        r = Ue(),
        i = t(),
        o = !Xe(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (ke = !0)),
        (r = r.queue),
        vl(Pc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            kr(9, Lc.bind(null, n, r, i, t), void 0, null),
            ie === null)
        )
            throw Error(E(349));
        Yt & 30 || Rc(n, t, i);
    }
    return i;
}
function Rc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Q.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Q.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Oc(t) && zc(e);
}
function Pc(e, t, n) {
    return n(function () {
        Oc(t) && zc(e);
    });
}
function Oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Xe(e, n);
    } catch {
        return !0;
    }
}
function zc(e) {
    var t = ft(e, 1);
    t !== null && Ye(t, e, 1, -1);
}
function xu(e) {
    var t = Je();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: wr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Ip.bind(null, Q, e)),
        [t.memoizedState, e]
    );
}
function kr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = Q.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Q.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function Ac() {
    return Ue().memoizedState;
}
function oi(e, t, n, r) {
    var i = Je();
    (Q.flags |= e),
        (i.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yi(e, t, n, r) {
    var i = Ue();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (b !== null) {
        var s = b.memoizedState;
        if (((o = s.destroy), r !== null && hl(r, s.deps))) {
            i.memoizedState = kr(t, n, o, r);
            return;
        }
    }
    (Q.flags |= e), (i.memoizedState = kr(1 | t, n, o, r));
}
function Tu(e, t) {
    return oi(8390656, 8, e, t);
}
function vl(e, t) {
    return Yi(2048, 8, e, t);
}
function Ic(e, t) {
    return Yi(4, 2, e, t);
}
function jc(e, t) {
    return Yi(4, 4, e, t);
}
function Dc(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Bc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Yi(4, 4, Dc.bind(null, t, e), n)
    );
}
function gl() {}
function Mc(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hl(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Fc(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hl(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $c(e, t, n) {
    return Yt & 21
        ? (Xe(n, t) ||
              ((n = Ha()), (Q.lanes |= n), (Xt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (ke = !0)),
          (e.memoizedState = n));
}
function zp(e, t) {
    var n = M;
    (M = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = To.transition;
    To.transition = {};
    try {
        e(!1), t();
    } finally {
        (M = n), (To.transition = r);
    }
}
function Uc() {
    return Ue().memoizedState;
}
function Ap(e, t, n) {
    var r = Lt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Vc(e))
    )
        Hc(t, n);
    else if (((n = wc(e, t, n, r)), n !== null)) {
        var i = ye();
        Ye(n, e, r, i), Wc(n, t, r);
    }
}
function Ip(e, t, n) {
    var r = Lt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Vc(e)) Hc(t, i);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var s = t.lastRenderedState,
                    l = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), Xe(l, s))) {
                    var u = t.interleaved;
                    u === null
                        ? ((i.next = i), al(t))
                        : ((i.next = u.next), (u.next = i)),
                        (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = wc(e, t, i, r)),
            n !== null && ((i = ye()), Ye(n, e, r, i), Wc(n, t, r));
    }
}
function Vc(e) {
    var t = e.alternate;
    return e === Q || (t !== null && t === Q);
}
function Hc(e, t) {
    Zn = Oi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Wc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xs(e, n);
    }
}
var zi = {
        readContext: $e,
        useCallback: ce,
        useContext: ce,
        useEffect: ce,
        useImperativeHandle: ce,
        useInsertionEffect: ce,
        useLayoutEffect: ce,
        useMemo: ce,
        useReducer: ce,
        useRef: ce,
        useState: ce,
        useDebugValue: ce,
        useDeferredValue: ce,
        useTransition: ce,
        useMutableSource: ce,
        useSyncExternalStore: ce,
        useId: ce,
        unstable_isNewReconciler: !1,
    },
    jp = {
        readContext: $e,
        useCallback: function (e, t) {
            return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: $e,
        useEffect: Tu,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                oi(4194308, 4, Dc.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return oi(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return oi(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Je();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Je();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Ap.bind(null, Q, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Je();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: xu,
        useDebugValue: gl,
        useDeferredValue: function (e) {
            return (Je().memoizedState = e);
        },
        useTransition: function () {
            var e = xu(!1),
                t = e[0];
            return (e = zp.bind(null, e[1])), (Je().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Q,
                i = Je();
            if (H) {
                if (n === void 0) throw Error(E(407));
                n = n();
            } else {
                if (((n = t()), ie === null)) throw Error(E(349));
                Yt & 30 || Rc(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                Tu(Pc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                kr(9, Lc.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Je(),
                t = ie.identifierPrefix;
            if (H) {
                var n = lt,
                    r = st;
                (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = gr++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Op++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Dp = {
        readContext: $e,
        useCallback: Mc,
        useContext: $e,
        useEffect: vl,
        useImperativeHandle: Bc,
        useInsertionEffect: Ic,
        useLayoutEffect: jc,
        useMemo: Fc,
        useReducer: No,
        useRef: Ac,
        useState: function () {
            return No(wr);
        },
        useDebugValue: gl,
        useDeferredValue: function (e) {
            var t = Ue();
            return $c(t, b.memoizedState, e);
        },
        useTransition: function () {
            var e = No(wr)[0],
                t = Ue().memoizedState;
            return [e, t];
        },
        useMutableSource: Tc,
        useSyncExternalStore: Nc,
        useId: Uc,
        unstable_isNewReconciler: !1,
    },
    Bp = {
        readContext: $e,
        useCallback: Mc,
        useContext: $e,
        useEffect: vl,
        useImperativeHandle: Bc,
        useInsertionEffect: Ic,
        useLayoutEffect: jc,
        useMemo: Fc,
        useReducer: Ro,
        useRef: Ac,
        useState: function () {
            return Ro(wr);
        },
        useDebugValue: gl,
        useDeferredValue: function (e) {
            var t = Ue();
            return b === null
                ? (t.memoizedState = e)
                : $c(t, b.memoizedState, e);
        },
        useTransition: function () {
            var e = Ro(wr)[0],
                t = Ue().memoizedState;
            return [e, t];
        },
        useMutableSource: Tc,
        useSyncExternalStore: Nc,
        useId: Uc,
        unstable_isNewReconciler: !1,
    };
function Tn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += fd(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function Lo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vs(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Mp = typeof WeakMap == "function" ? WeakMap : Map;
function Qc(e, t, n) {
    (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Ii || ((Ii = !0), (Ns = r)), vs(e, t);
        }),
        n
    );
}
function Kc(e, t, n) {
    (n = ut(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                vs(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                vs(e, t),
                    typeof r != "function" &&
                        (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : "",
                });
            }),
        n
    );
}
function Nu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Mp();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Zp.bind(null, e, t, n)), t.then(e, e));
}
function Ru(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Lu(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = ut(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Fp = ht.ReactCurrentOwner,
    ke = !1;
function me(e, t, n, r) {
    t.child = e === null ? Cc(t, null, n, r) : Cn(t, e.child, n, r);
}
function Pu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        wn(t, i),
        (r = ml(e, t, n, r, o, i)),
        (n = yl()),
        e !== null && !ke
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              dt(e, t, i))
            : (H && n && rl(t), (t.flags |= 1), me(e, t, r, i), t.child)
    );
}
function Ou(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !Tl(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), qc(e, t, o, r, i))
            : ((e = ai(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var s = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : dr),
            n(s, r) && e.ref === t.ref)
        )
            return dt(e, t, i);
    }
    return (
        (t.flags |= 1),
        (e = Pt(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function qc(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (dr(o, r) && e.ref === t.ref)
            if (((ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
                e.flags & 131072 && (ke = !0);
            else return (t.lanes = e.lanes), dt(e, t, i);
    }
    return gs(e, t, n, r, i);
}
function Yc(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                $(hn, Te),
                (Te |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    $(hn, Te),
                    (Te |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                $(hn, Te),
                (Te |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            $(hn, Te),
            (Te |= r);
    return me(e, t, i, n), t.child;
}
function Xc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function gs(e, t, n, r, i) {
    var o = _e(n) ? Kt : pe.current;
    return (
        (o = Sn(t, o)),
        wn(t, i),
        (n = ml(e, t, n, r, o, i)),
        (r = yl()),
        e !== null && !ke
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              dt(e, t, i))
            : (H && r && rl(t), (t.flags |= 1), me(e, t, n, i), t.child)
    );
}
function zu(e, t, n, r, i) {
    if (_e(n)) {
        var o = !0;
        Ci(t);
    } else o = !1;
    if ((wn(t, i), t.stateNode === null))
        si(e, t), Sc(t, n, r), ys(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var u = s.context,
            a = n.contextType;
        typeof a == "object" && a !== null
            ? (a = $e(a))
            : ((a = _e(n) ? Kt : pe.current), (a = Sn(t, a)));
        var h = n.getDerivedStateFromProps,
            m =
                typeof h == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((l !== r || u !== a) && _u(t, s, r, a)),
            (vt = !1);
        var p = t.memoizedState;
        (s.state = p),
            Li(t, r, s, i),
            (u = t.memoizedState),
            l !== r || p !== u || Se.current || vt
                ? (typeof h == "function" &&
                      (ms(t, n, h, r), (u = t.memoizedState)),
                  (l = vt || Su(t, n, l, r, p, u, a))
                      ? (m ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (s.props = r),
                  (s.state = u),
                  (s.context = a),
                  (r = l))
                : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            kc(e, t),
            (l = t.memoizedProps),
            (a = t.type === t.elementType ? l : He(t.type, l)),
            (s.props = a),
            (m = t.pendingProps),
            (p = s.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = $e(u))
                : ((u = _e(n) ? Kt : pe.current), (u = Sn(t, u)));
        var v = n.getDerivedStateFromProps;
        (h =
            typeof v == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((l !== m || p !== u) && _u(t, s, r, u)),
            (vt = !1),
            (p = t.memoizedState),
            (s.state = p),
            Li(t, r, s, i);
        var y = t.memoizedState;
        l !== m || p !== y || Se.current || vt
            ? (typeof v == "function" &&
                  (ms(t, n, v, r), (y = t.memoizedState)),
              (a = vt || Su(t, n, a, r, p, y, u) || !1)
                  ? (h ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" &&
                            s.componentWillUpdate(r, y, u),
                        typeof s.UNSAFE_componentWillUpdate == "function" &&
                            s.UNSAFE_componentWillUpdate(r, y, u)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (l === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (l === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (s.props = r),
              (s.state = y),
              (s.context = u),
              (r = a))
            : (typeof s.componentDidUpdate != "function" ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ws(e, t, n, r, o, i);
}
function ws(e, t, n, r, i, o) {
    Xc(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && vu(t, n, !1), dt(e, t, o);
    (r = t.stateNode), (Fp.current = t);
    var l =
        s && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = Cn(t, e.child, null, o)),
              (t.child = Cn(t, null, l, o)))
            : me(e, t, l, o),
        (t.memoizedState = r.state),
        i && vu(t, n, !0),
        t.child
    );
}
function Gc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? yu(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && yu(e, t.context, !1),
        fl(e, t.containerInfo);
}
function Au(e, t, n, r, i) {
    return _n(), ol(i), (t.flags |= 256), me(e, t, n, r), t.child;
}
var ks = { dehydrated: null, treeContext: null, retryLane: 0 };
function Es(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Jc(e, t, n) {
    var r = t.pendingProps,
        i = W.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        l;
    if (
        ((l = s) ||
            (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        l
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        $(W, i & 1),
        e === null)
    )
        return (
            ps(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = s))
                            : (o = Ji(s, r, 0, null)),
                        (e = Qt(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Es(n)),
                        (t.memoizedState = ks),
                        e)
                      : wl(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
        return $p(e, t, s, r, l, i, n);
    if (o) {
        (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== i
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = Pt(i, u)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            l !== null
                ? (o = Pt(l, o))
                : ((o = Qt(o, s, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? Es(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (o.memoizedState = s),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = ks),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = Pt(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function wl(e, t) {
    return (
        (t = Ji({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Vr(e, t, n, r) {
    return (
        r !== null && ol(r),
        Cn(t, e.child, null, n),
        (e = wl(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function $p(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Lo(Error(E(422)))), Vr(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = Ji({ mode: "visible", children: r.children }, i, 0, null)),
              (o = Qt(o, i, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && Cn(t, e.child, null, s),
              (t.child.memoizedState = Es(s)),
              (t.memoizedState = ks),
              o);
    if (!(t.mode & 1)) return Vr(e, t, s, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
        return (
            (r = l), (o = Error(E(419))), (r = Lo(o, r, void 0)), Vr(e, t, s, r)
        );
    }
    if (((l = (s & e.childLanes) !== 0), ke || l)) {
        if (((r = ie), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i),
                i !== 0 &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), ft(e, i), Ye(r, e, i, -1));
        }
        return xl(), (r = Lo(Error(E(421)))), Vr(e, t, s, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = bp.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Ne = Tt(i.nextSibling)),
          (Le = t),
          (H = !0),
          (Ke = null),
          e !== null &&
              ((je[De++] = st),
              (je[De++] = lt),
              (je[De++] = qt),
              (st = e.id),
              (lt = e.overflow),
              (qt = t)),
          (t = wl(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Iu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hs(e.return, t, n);
}
function Po(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i));
}
function Zc(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((me(e, t, r.children, n), (r = W.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t);
                else if (e.tag === 19) Iu(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if (($(W, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Pi(e) === null && (i = n),
                        (n = n.sibling);
                (n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    Po(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Pi(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Po(t, !0, n, null, o);
                break;
            case "together":
                Po(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function si(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Xt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (
            e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Pt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Up(e, t, n) {
    switch (t.tag) {
        case 3:
            Gc(t), _n();
            break;
        case 5:
            xc(t);
            break;
        case 1:
            _e(t.type) && Ci(t);
            break;
        case 4:
            fl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            $(Ni, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? ($(W, W.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Jc(e, t, n)
                    : ($(W, W.current & 1),
                      (e = dt(e, t, n)),
                      e !== null ? e.sibling : null);
            $(W, W.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Zc(e, t, n);
                t.flags |= 128;
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                $(W, W.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Yc(e, t, n);
    }
    return dt(e, t, n);
}
var bc, Ss, ef, tf;
bc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Ss = function () {};
ef = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), Ht(et.current);
        var o = null;
        switch (n) {
            case "input":
                (i = Wo(e, i)), (r = Wo(e, r)), (o = []);
                break;
            case "select":
                (i = K({}, i, { value: void 0 })),
                    (r = K({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (i = qo(e, i)), (r = qo(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Si);
        }
        Xo(n, r);
        var s;
        n = null;
        for (a in i)
            if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
                if (a === "style") {
                    var l = i[a];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    a !== "dangerouslySetInnerHTML" &&
                        a !== "children" &&
                        a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (or.hasOwnProperty(a)
                            ? o || (o = [])
                            : (o = o || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (
                ((l = i != null ? i[a] : void 0),
                r.hasOwnProperty(a) && u !== l && (u != null || l != null))
            )
                if (a === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) ||
                                (u && u.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ""));
                        for (s in u)
                            u.hasOwnProperty(s) &&
                                l[s] !== u[s] &&
                                (n || (n = {}), (n[s] = u[s]));
                    } else n || (o || (o = []), o.push(a, n)), (n = u);
                else
                    a === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (l = l ? l.__html : void 0),
                          u != null && l !== u && (o = o || []).push(a, u))
                        : a === "children"
                        ? (typeof u != "string" && typeof u != "number") ||
                          (o = o || []).push(a, "" + u)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          (or.hasOwnProperty(a)
                              ? (u != null &&
                                    a === "onScroll" &&
                                    U("scroll", e),
                                o || l === u || (o = []))
                              : (o = o || []).push(a, u));
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4);
    }
};
tf = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Mn(e, t) {
    if (!H)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Vp(e, t, n) {
    var r = t.pendingProps;
    switch ((il(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return fe(t), null;
        case 1:
            return _e(t.type) && _i(), fe(t), null;
        case 3:
            return (
                (r = t.stateNode),
                xn(),
                V(Se),
                V(pe),
                pl(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    ($r(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ke !== null && (Ps(Ke), (Ke = null)))),
                Ss(e, t),
                fe(t),
                null
            );
        case 5:
            dl(t);
            var i = Ht(vr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                ef(e, t, n, r, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166));
                    return fe(t), null;
                }
                if (((e = Ht(et.current)), $r(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[Ze] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            U("cancel", r), U("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            U("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Wn.length; i++) U(Wn[i], r);
                            break;
                        case "source":
                            U("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            U("error", r), U("load", r);
                            break;
                        case "details":
                            U("toggle", r);
                            break;
                        case "input":
                            Hl(r, o), U("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                U("invalid", r);
                            break;
                        case "textarea":
                            Ql(r, o), U("invalid", r);
                    }
                    Xo(n, o), (i = null);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children"
                                ? typeof l == "string"
                                    ? r.textContent !== l &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Fr(r.textContent, l, e),
                                      (i = ["children", l]))
                                    : typeof l == "number" &&
                                      r.textContent !== "" + l &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Fr(r.textContent, l, e),
                                      (i = ["children", "" + l]))
                                : or.hasOwnProperty(s) &&
                                  l != null &&
                                  s === "onScroll" &&
                                  U("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Or(r), Wl(r, o, !0);
                            break;
                        case "textarea":
                            Or(r), Kl(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Si);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Ra(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === "select" &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Ze] = t),
                        (e[mr] = r),
                        bc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Go(n, r)), n)) {
                            case "dialog":
                                U("cancel", e), U("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                U("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Wn.length; i++) U(Wn[i], e);
                                i = r;
                                break;
                            case "source":
                                U("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                U("error", e), U("load", e), (i = r);
                                break;
                            case "details":
                                U("toggle", e), (i = r);
                                break;
                            case "input":
                                Hl(e, r), (i = Wo(e, r)), U("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = K({}, r, { value: void 0 })),
                                    U("invalid", e);
                                break;
                            case "textarea":
                                Ql(e, r), (i = qo(e, r)), U("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Xo(n, i), (l = i);
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var u = l[o];
                                o === "style"
                                    ? Oa(e, u)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && La(e, u))
                                    : o === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          sr(e, u)
                                        : typeof u == "number" && sr(e, "" + u)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (or.hasOwnProperty(o)
                                          ? u != null &&
                                            o === "onScroll" &&
                                            U("scroll", e)
                                          : u != null && Hs(e, o, u, s));
                            }
                        switch (n) {
                            case "input":
                                Or(e), Wl(e, r, !1);
                                break;
                            case "textarea":
                                Or(e), Kl(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Ot(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? mn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          mn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof i.onClick == "function" &&
                                    (e.onclick = Si);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return fe(t), null;
        case 6:
            if (e && t.stateNode != null) tf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(E(166));
                if (((n = Ht(vr.current)), Ht(et.current), $r(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ze] = t),
                        (o = r.nodeValue !== n) && ((e = Le), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Fr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Ze] = t),
                        (t.stateNode = r);
            }
            return fe(t), null;
        case 13:
            if (
                (V(W),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (H && Ne !== null && t.mode & 1 && !(t.flags & 128))
                    gc(), _n(), (t.flags |= 98560), (o = !1);
                else if (((o = $r(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(E(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(E(317));
                        o[Ze] = t;
                    } else
                        _n(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    fe(t), (o = !1);
                } else Ke !== null && (Ps(Ke), (Ke = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || W.current & 1
                              ? ee === 0 && (ee = 3)
                              : xl())),
                  t.updateQueue !== null && (t.flags |= 4),
                  fe(t),
                  null);
        case 4:
            return (
                xn(),
                Ss(e, t),
                e === null && pr(t.stateNode.containerInfo),
                fe(t),
                null
            );
        case 10:
            return ul(t.type._context), fe(t), null;
        case 17:
            return _e(t.type) && _i(), fe(t), null;
        case 19:
            if ((V(W), (o = t.memoizedState), o === null)) return fe(t), null;
            if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                if (r) Mn(o, !1);
                else {
                    if (ee !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Pi(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Mn(o, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (s = o.alternate),
                                        s === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = s.childLanes),
                                              (o.lanes = s.lanes),
                                              (o.child = s.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  s.memoizedProps),
                                              (o.memoizedState =
                                                  s.memoizedState),
                                              (o.updateQueue = s.updateQueue),
                                              (o.type = s.type),
                                              (e = s.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return $(W, (W.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        X() > Nn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Mn(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Pi(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Mn(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !s.alternate &&
                                !H)
                        )
                            return fe(t), null;
                    } else
                        2 * X() - o.renderingStartTime > Nn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Mn(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = o.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (o.last = s));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = X()),
                  (t.sibling = null),
                  (n = W.current),
                  $(W, r ? (n & 1) | 2 : n & 1),
                  t)
                : (fe(t), null);
        case 22:
        case 23:
            return (
                Cl(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Te & 1073741824 &&
                      (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : fe(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(E(156, t.tag));
}
function Hp(e, t) {
    switch ((il(t), t.tag)) {
        case 1:
            return (
                _e(t.type) && _i(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                xn(),
                V(Se),
                V(pe),
                pl(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return dl(t), null;
        case 13:
            if (
                (V(W),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(E(340));
                _n();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return V(W), null;
        case 4:
            return xn(), null;
        case 10:
            return ul(t.type._context), null;
        case 22:
        case 23:
            return Cl(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Hr = !1,
    de = !1,
    Wp = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;
function pn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                q(e, t, r);
            }
        else n.current = null;
}
function _s(e, t, n) {
    try {
        n();
    } catch (r) {
        q(e, t, r);
    }
}
var ju = !1;
function Qp(e, t) {
    if (((ss = wi), (e = oc()), nl(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        l = -1,
                        u = -1,
                        a = 0,
                        h = 0,
                        m = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var v;
                            m !== n ||
                                (i !== 0 && m.nodeType !== 3) ||
                                (l = s + i),
                                m !== o ||
                                    (r !== 0 && m.nodeType !== 3) ||
                                    (u = s + r),
                                m.nodeType === 3 && (s += m.nodeValue.length),
                                (v = m.firstChild) !== null;

                        )
                            (p = m), (m = v);
                        for (;;) {
                            if (m === e) break t;
                            if (
                                (p === n && ++a === i && (l = s),
                                p === o && ++h === r && (u = s),
                                (v = m.nextSibling) !== null)
                            )
                                break;
                            (m = p), (p = m.parentNode);
                        }
                        m = v;
                    }
                    n = l === -1 || u === -1 ? null : { start: l, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        ls = { focusedElem: e, selectionRange: n }, wi = !1, R = t;
        R !== null;

    )
        if (
            ((t = R),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (R = e);
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var g = y.memoizedProps,
                                        _ = y.memoizedState,
                                        f = t.stateNode,
                                        c = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? g
                                                : He(t.type, g),
                                            _
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(E(163));
                        }
                } catch (w) {
                    q(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (R = e);
                    break;
                }
                R = t.return;
            }
    return (y = ju), (ju = !1), y;
}
function bn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && _s(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Xi(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Cs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function nf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), nf(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Ze],
                delete t[mr],
                delete t[cs],
                delete t[Np],
                delete t[Rp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || rf(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function xs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Si));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (xs(e, t, n), e = e.sibling; e !== null; )
            xs(e, t, n), (e = e.sibling);
}
function Ts(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Ts(e, t, n), e = e.sibling; e !== null; )
            Ts(e, t, n), (e = e.sibling);
}
var se = null,
    We = !1;
function mt(e, t, n) {
    for (n = n.child; n !== null; ) of(e, t, n), (n = n.sibling);
}
function of(e, t, n) {
    if (be && typeof be.onCommitFiberUnmount == "function")
        try {
            be.onCommitFiberUnmount(Ui, n);
        } catch {}
    switch (n.tag) {
        case 5:
            de || pn(n, t);
        case 6:
            var r = se,
                i = We;
            (se = null),
                mt(e, t, n),
                (se = r),
                (We = i),
                se !== null &&
                    (We
                        ? ((e = se),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : se.removeChild(n.stateNode));
            break;
        case 18:
            se !== null &&
                (We
                    ? ((e = se),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? _o(e.parentNode, n)
                          : e.nodeType === 1 && _o(e, n),
                      cr(e))
                    : _o(se, n.stateNode));
            break;
        case 4:
            (r = se),
                (i = We),
                (se = n.stateNode.containerInfo),
                (We = !0),
                mt(e, t, n),
                (se = r),
                (We = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !de &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    (o = o.tag),
                        s !== void 0 && (o & 2 || o & 4) && _s(n, t, s),
                        (i = i.next);
                } while (i !== r);
            }
            mt(e, t, n);
            break;
        case 1:
            if (
                !de &&
                (pn(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (l) {
                    q(n, t, l);
                }
            mt(e, t, n);
            break;
        case 21:
            mt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((de = (r = de) || n.memoizedState !== null),
                  mt(e, t, n),
                  (de = r))
                : mt(e, t, n);
            break;
        default:
            mt(e, t, n);
    }
}
function Bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Wp()),
            t.forEach(function (r) {
                var i = eh.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Ve(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (se = l.stateNode), (We = !1);
                            break e;
                        case 3:
                            (se = l.stateNode.containerInfo), (We = !0);
                            break e;
                        case 4:
                            (se = l.stateNode.containerInfo), (We = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (se === null) throw Error(E(160));
                of(o, s, i), (se = null), (We = !1);
                var u = i.alternate;
                u !== null && (u.return = null), (i.return = null);
            } catch (a) {
                q(i, t, a);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) sf(t, e), (t = t.sibling);
}
function sf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ve(t, e), Ge(e), r & 4)) {
                try {
                    bn(3, e, e.return), Xi(3, e);
                } catch (g) {
                    q(e, e.return, g);
                }
                try {
                    bn(5, e, e.return);
                } catch (g) {
                    q(e, e.return, g);
                }
            }
            break;
        case 1:
            Ve(t, e), Ge(e), r & 512 && n !== null && pn(n, n.return);
            break;
        case 5:
            if (
                (Ve(t, e),
                Ge(e),
                r & 512 && n !== null && pn(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode;
                try {
                    sr(i, "");
                } catch (g) {
                    q(e, e.return, g);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    l = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        l === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            Ta(i, o),
                            Go(l, s);
                        var a = Go(l, o);
                        for (s = 0; s < u.length; s += 2) {
                            var h = u[s],
                                m = u[s + 1];
                            h === "style"
                                ? Oa(i, m)
                                : h === "dangerouslySetInnerHTML"
                                ? La(i, m)
                                : h === "children"
                                ? sr(i, m)
                                : Hs(i, h, m, a);
                        }
                        switch (l) {
                            case "input":
                                Qo(i, o);
                                break;
                            case "textarea":
                                Na(i, o);
                                break;
                            case "select":
                                var p = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var v = o.value;
                                v != null
                                    ? mn(i, !!o.multiple, v, !1)
                                    : p !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? mn(
                                                i,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : mn(
                                                i,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        i[mr] = o;
                    } catch (g) {
                        q(e, e.return, g);
                    }
            }
            break;
        case 6:
            if ((Ve(t, e), Ge(e), r & 4)) {
                if (e.stateNode === null) throw Error(E(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (g) {
                    q(e, e.return, g);
                }
            }
            break;
        case 3:
            if (
                (Ve(t, e),
                Ge(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    cr(t.containerInfo);
                } catch (g) {
                    q(e, e.return, g);
                }
            break;
        case 4:
            Ve(t, e), Ge(e);
            break;
        case 13:
            Ve(t, e),
                Ge(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((o = i.memoizedState !== null),
                    (i.stateNode.isHidden = o),
                    !o ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (Sl = X())),
                r & 4 && Bu(e);
            break;
        case 22:
            if (
                ((h = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((de = (a = de) || h), Ve(t, e), (de = a))
                    : Ve(t, e),
                Ge(e),
                r & 8192)
            ) {
                if (
                    ((a = e.memoizedState !== null),
                    (e.stateNode.isHidden = a) && !h && e.mode & 1)
                )
                    for (R = e, h = e.child; h !== null; ) {
                        for (m = R = h; R !== null; ) {
                            switch (((p = R), (v = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    bn(4, p, p.return);
                                    break;
                                case 1:
                                    pn(p, p.return);
                                    var y = p.stateNode;
                                    if (
                                        typeof y.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (g) {
                                            q(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    pn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Fu(m);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = p), (R = v)) : Fu(m);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                (i = m.stateNode),
                                    a
                                        ? ((o = i.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((l = m.stateNode),
                                          (u = m.memoizedProps.style),
                                          (s =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (l.style.display = Pa("display", s)));
                            } catch (g) {
                                q(e, e.return, g);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null)
                            try {
                                m.stateNode.nodeValue = a
                                    ? ""
                                    : m.memoizedProps;
                            } catch (g) {
                                q(e, e.return, g);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), (m = m.return);
                    }
                    h === m && (h = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling);
                }
            }
            break;
        case 19:
            Ve(t, e), Ge(e), r & 4 && Bu(e);
            break;
        case 21:
            break;
        default:
            Ve(t, e), Ge(e);
    }
}
function Ge(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (rf(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(E(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (sr(i, ""), (r.flags &= -33));
                    var o = Du(e);
                    Ts(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = Du(e);
                    xs(e, l, s);
                    break;
                default:
                    throw Error(E(161));
            }
        } catch (u) {
            q(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Kp(e, t, n) {
    (R = e), lf(e);
}
function lf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var i = R,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Hr;
            if (!s) {
                var l = i.alternate,
                    u = (l !== null && l.memoizedState !== null) || de;
                l = Hr;
                var a = de;
                if (((Hr = s), (de = u) && !a))
                    for (R = i; R !== null; )
                        (s = R),
                            (u = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? $u(i)
                                : u !== null
                                ? ((u.return = s), (R = u))
                                : $u(i);
                for (; o !== null; ) (R = o), lf(o), (o = o.sibling);
                (R = i), (Hr = l), (de = a);
            }
            Mu(e);
        } else
            i.subtreeFlags & 8772 && o !== null
                ? ((o.return = i), (R = o))
                : Mu(e);
    }
}
function Mu(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            de || Xi(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !de)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : He(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && Eu(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Eu(t, s, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var a = t.alternate;
                                if (a !== null) {
                                    var h = a.memoizedState;
                                    if (h !== null) {
                                        var m = h.dehydrated;
                                        m !== null && cr(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(E(163));
                    }
                de || (t.flags & 512 && Cs(t));
            } catch (p) {
                q(t, t.return, p);
            }
        }
        if (t === e) {
            R = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (R = n);
            break;
        }
        R = t.return;
    }
}
function Fu(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (R = n);
            break;
        }
        R = t.return;
    }
}
function $u(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Xi(4, t);
                    } catch (u) {
                        q(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            q(t, i, u);
                        }
                    }
                    var o = t.return;
                    try {
                        Cs(t);
                    } catch (u) {
                        q(t, o, u);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Cs(t);
                    } catch (u) {
                        q(t, s, u);
                    }
            }
        } catch (u) {
            q(t, t.return, u);
        }
        if (t === e) {
            R = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (R = l);
            break;
        }
        R = t.return;
    }
}
var qp = Math.ceil,
    Ai = ht.ReactCurrentDispatcher,
    kl = ht.ReactCurrentOwner,
    Fe = ht.ReactCurrentBatchConfig,
    D = 0,
    ie = null,
    G = null,
    le = 0,
    Te = 0,
    hn = It(0),
    ee = 0,
    Er = null,
    Xt = 0,
    Gi = 0,
    El = 0,
    er = null,
    we = null,
    Sl = 0,
    Nn = 1 / 0,
    it = null,
    Ii = !1,
    Ns = null,
    Rt = null,
    Wr = !1,
    Et = null,
    ji = 0,
    tr = 0,
    Rs = null,
    li = -1,
    ui = 0;
function ye() {
    return D & 6 ? X() : li !== -1 ? li : (li = X());
}
function Lt(e) {
    return e.mode & 1
        ? D & 2 && le !== 0
            ? le & -le
            : Pp.transition !== null
            ? (ui === 0 && (ui = Ha()), ui)
            : ((e = M),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Ga(e.type))),
              e)
        : 1;
}
function Ye(e, t, n, r) {
    if (50 < tr) throw ((tr = 0), (Rs = null), Error(E(185)));
    _r(e, n, r),
        (!(D & 2) || e !== ie) &&
            (e === ie && (!(D & 2) && (Gi |= n), ee === 4 && wt(e, le)),
            Ce(e, r),
            n === 1 &&
                D === 0 &&
                !(t.mode & 1) &&
                ((Nn = X() + 500), Ki && jt()));
}
function Ce(e, t) {
    var n = e.callbackNode;
    Pd(e, t);
    var r = gi(e, e === ie ? le : 0);
    if (r === 0)
        n !== null && Xl(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Xl(n), t === 1))
            e.tag === 0 ? Lp(Uu.bind(null, e)) : mc(Uu.bind(null, e)),
                xp(function () {
                    !(D & 6) && jt();
                }),
                (n = null);
        else {
            switch (Wa(r)) {
                case 1:
                    n = Ys;
                    break;
                case 4:
                    n = Ua;
                    break;
                case 16:
                    n = vi;
                    break;
                case 536870912:
                    n = Va;
                    break;
                default:
                    n = vi;
            }
            n = mf(n, uf.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function uf(e, t) {
    if (((li = -1), (ui = 0), D & 6)) throw Error(E(327));
    var n = e.callbackNode;
    if (kn() && e.callbackNode !== n) return null;
    var r = gi(e, e === ie ? le : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Di(e, r);
    else {
        t = r;
        var i = D;
        D |= 2;
        var o = cf();
        (ie !== e || le !== t) && ((it = null), (Nn = X() + 500), Wt(e, t));
        do
            try {
                Gp();
                break;
            } catch (l) {
                af(e, l);
            }
        while (!0);
        ll(),
            (Ai.current = o),
            (D = i),
            G !== null ? (t = 0) : ((ie = null), (le = 0), (t = ee));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = ts(e)), i !== 0 && ((r = i), (t = Ls(e, i)))),
            t === 1)
        )
            throw ((n = Er), Wt(e, 0), wt(e, r), Ce(e, X()), n);
        if (t === 6) wt(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !Yp(i) &&
                    ((t = Di(e, r)),
                    t === 2 &&
                        ((o = ts(e)), o !== 0 && ((r = o), (t = Ls(e, o)))),
                    t === 1))
            )
                throw ((n = Er), Wt(e, 0), wt(e, r), Ce(e, X()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    Ft(e, we, it);
                    break;
                case 3:
                    if (
                        (wt(e, r),
                        (r & 130023424) === r && ((t = Sl + 500 - X()), 10 < t))
                    ) {
                        if (gi(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            ye(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = as(Ft.bind(null, e, we, it), t);
                        break;
                    }
                    Ft(e, we, it);
                    break;
                case 4:
                    if ((wt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - qe(r);
                        (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                    }
                    if (
                        ((r = i),
                        (r = X() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * qp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = as(Ft.bind(null, e, we, it), r);
                        break;
                    }
                    Ft(e, we, it);
                    break;
                case 5:
                    Ft(e, we, it);
                    break;
                default:
                    throw Error(E(329));
            }
        }
    }
    return Ce(e, X()), e.callbackNode === n ? uf.bind(null, e) : null;
}
function Ls(e, t) {
    var n = er;
    return (
        e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
        (e = Di(e, t)),
        e !== 2 && ((t = we), (we = n), t !== null && Ps(t)),
        e
    );
}
function Ps(e) {
    we === null ? (we = e) : we.push.apply(we, e);
}
function Yp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Xe(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function wt(e, t) {
    for (
        t &= ~El,
            t &= ~Gi,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - qe(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Uu(e) {
    if (D & 6) throw Error(E(327));
    kn();
    var t = gi(e, 0);
    if (!(t & 1)) return Ce(e, X()), null;
    var n = Di(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ts(e);
        r !== 0 && ((t = r), (n = Ls(e, r)));
    }
    if (n === 1) throw ((n = Er), Wt(e, 0), wt(e, t), Ce(e, X()), n);
    if (n === 6) throw Error(E(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ft(e, we, it),
        Ce(e, X()),
        null
    );
}
function _l(e, t) {
    var n = D;
    D |= 1;
    try {
        return e(t);
    } finally {
        (D = n), D === 0 && ((Nn = X() + 500), Ki && jt());
    }
}
function Gt(e) {
    Et !== null && Et.tag === 0 && !(D & 6) && kn();
    var t = D;
    D |= 1;
    var n = Fe.transition,
        r = M;
    try {
        if (((Fe.transition = null), (M = 1), e)) return e();
    } finally {
        (M = r), (Fe.transition = n), (D = t), !(D & 6) && jt();
    }
}
function Cl() {
    (Te = hn.current), V(hn);
}
function Wt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Cp(n)), G !== null))
        for (n = G.return; n !== null; ) {
            var r = n;
            switch ((il(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && _i();
                    break;
                case 3:
                    xn(), V(Se), V(pe), pl();
                    break;
                case 5:
                    dl(r);
                    break;
                case 4:
                    xn();
                    break;
                case 13:
                    V(W);
                    break;
                case 19:
                    V(W);
                    break;
                case 10:
                    ul(r.type._context);
                    break;
                case 22:
                case 23:
                    Cl();
            }
            n = n.return;
        }
    if (
        ((ie = e),
        (G = e = Pt(e.current, null)),
        (le = Te = t),
        (ee = 0),
        (Er = null),
        (El = Gi = Xt = 0),
        (we = er = null),
        Vt !== null)
    ) {
        for (t = 0; t < Vt.length; t++)
            if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    (o.next = i), (r.next = s);
                }
                n.pending = r;
            }
        Vt = null;
    }
    return e;
}
function af(e, t) {
    do {
        var n = G;
        try {
            if ((ll(), (ii.current = zi), Oi)) {
                for (var r = Q.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Oi = !1;
            }
            if (
                ((Yt = 0),
                (re = b = Q = null),
                (Zn = !1),
                (gr = 0),
                (kl.current = null),
                n === null || n.return === null)
            ) {
                (ee = 1), (Er = t), (G = null);
                break;
            }
            e: {
                var o = e,
                    s = n.return,
                    l = n,
                    u = t;
                if (
                    ((t = le),
                    (l.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var a = u,
                        h = l,
                        m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var p = h.alternate;
                        p
                            ? ((h.updateQueue = p.updateQueue),
                              (h.memoizedState = p.memoizedState),
                              (h.lanes = p.lanes))
                            : ((h.updateQueue = null),
                              (h.memoizedState = null));
                    }
                    var v = Ru(s);
                    if (v !== null) {
                        (v.flags &= -257),
                            Lu(v, s, l, o, t),
                            v.mode & 1 && Nu(o, a, t),
                            (t = v),
                            (u = a);
                        var y = t.updateQueue;
                        if (y === null) {
                            var g = new Set();
                            g.add(u), (t.updateQueue = g);
                        } else y.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Nu(o, a, t), xl();
                            break e;
                        }
                        u = Error(E(426));
                    }
                } else if (H && l.mode & 1) {
                    var _ = Ru(s);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                            Lu(_, s, l, o, t),
                            ol(Tn(u, l));
                        break e;
                    }
                }
                (o = u = Tn(u, l)),
                    ee !== 4 && (ee = 2),
                    er === null ? (er = [o]) : er.push(o),
                    (o = s);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var f = Qc(o, u, t);
                            ku(o, f);
                            break e;
                        case 1:
                            l = u;
                            var c = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (Rt === null || !Rt.has(d))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var w = Kc(o, l, t);
                                ku(o, w);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            df(n);
        } catch (S) {
            (t = S), G === n && n !== null && (G = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function cf() {
    var e = Ai.current;
    return (Ai.current = zi), e === null ? zi : e;
}
function xl() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
        ie === null || (!(Xt & 268435455) && !(Gi & 268435455)) || wt(ie, le);
}
function Di(e, t) {
    var n = D;
    D |= 2;
    var r = cf();
    (ie !== e || le !== t) && ((it = null), Wt(e, t));
    do
        try {
            Xp();
            break;
        } catch (i) {
            af(e, i);
        }
    while (!0);
    if ((ll(), (D = n), (Ai.current = r), G !== null)) throw Error(E(261));
    return (ie = null), (le = 0), ee;
}
function Xp() {
    for (; G !== null; ) ff(G);
}
function Gp() {
    for (; G !== null && !Ed(); ) ff(G);
}
function ff(e) {
    var t = hf(e.alternate, e, Te);
    (e.memoizedProps = e.pendingProps),
        t === null ? df(e) : (G = t),
        (kl.current = null);
}
function df(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Hp(n, t)), n !== null)) {
                (n.flags &= 32767), (G = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ee = 6), (G = null);
                return;
            }
        } else if (((n = Vp(n, t, Te)), n !== null)) {
            G = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            G = t;
            return;
        }
        G = t = e;
    } while (t !== null);
    ee === 0 && (ee = 5);
}
function Ft(e, t, n) {
    var r = M,
        i = Fe.transition;
    try {
        (Fe.transition = null), (M = 1), Jp(e, t, n, r);
    } finally {
        (Fe.transition = i), (M = r);
    }
    return null;
}
function Jp(e, t, n, r) {
    do kn();
    while (Et !== null);
    if (D & 6) throw Error(E(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(E(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (Od(e, o),
        e === ie && ((G = ie = null), (le = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Wr ||
            ((Wr = !0),
            mf(vi, function () {
                return kn(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Fe.transition), (Fe.transition = null);
        var s = M;
        M = 1;
        var l = D;
        (D |= 4),
            (kl.current = null),
            Qp(e, n),
            sf(n, e),
            vp(ls),
            (wi = !!ss),
            (ls = ss = null),
            (e.current = n),
            Kp(n),
            Sd(),
            (D = l),
            (M = s),
            (Fe.transition = o);
    } else e.current = n;
    if (
        (Wr && ((Wr = !1), (Et = e), (ji = i)),
        (o = e.pendingLanes),
        o === 0 && (Rt = null),
        xd(n.stateNode),
        Ce(e, X()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Ii) throw ((Ii = !1), (e = Ns), (Ns = null), e);
    return (
        ji & 1 && e.tag !== 0 && kn(),
        (o = e.pendingLanes),
        o & 1 ? (e === Rs ? tr++ : ((tr = 0), (Rs = e))) : (tr = 0),
        jt(),
        null
    );
}
function kn() {
    if (Et !== null) {
        var e = Wa(ji),
            t = Fe.transition,
            n = M;
        try {
            if (((Fe.transition = null), (M = 16 > e ? 16 : e), Et === null))
                var r = !1;
            else {
                if (((e = Et), (Et = null), (ji = 0), D & 6))
                    throw Error(E(331));
                var i = D;
                for (D |= 4, R = e.current; R !== null; ) {
                    var o = R,
                        s = o.child;
                    if (R.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var a = l[u];
                                for (R = a; R !== null; ) {
                                    var h = R;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            bn(8, h, o);
                                    }
                                    var m = h.child;
                                    if (m !== null) (m.return = h), (R = m);
                                    else
                                        for (; R !== null; ) {
                                            h = R;
                                            var p = h.sibling,
                                                v = h.return;
                                            if ((nf(h), h === a)) {
                                                R = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = v), (R = p);
                                                break;
                                            }
                                            R = v;
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var _ = g.sibling;
                                        (g.sibling = null), (g = _);
                                    } while (g !== null);
                                }
                            }
                            R = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        (s.return = o), (R = s);
                    else
                        e: for (; R !== null; ) {
                            if (((o = R), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bn(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (R = f);
                                break e;
                            }
                            R = o.return;
                        }
                }
                var c = e.current;
                for (R = c; R !== null; ) {
                    s = R;
                    var d = s.child;
                    if (s.subtreeFlags & 2064 && d !== null)
                        (d.return = s), (R = d);
                    else
                        e: for (s = c; R !== null; ) {
                            if (((l = R), l.flags & 2048))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Xi(9, l);
                                    }
                                } catch (S) {
                                    q(l, l.return, S);
                                }
                            if (l === s) {
                                R = null;
                                break e;
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                (w.return = l.return), (R = w);
                                break e;
                            }
                            R = l.return;
                        }
                }
                if (
                    ((D = i),
                    jt(),
                    be && typeof be.onPostCommitFiberRoot == "function")
                )
                    try {
                        be.onPostCommitFiberRoot(Ui, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (M = n), (Fe.transition = t);
        }
    }
    return !1;
}
function Vu(e, t, n) {
    (t = Tn(n, t)),
        (t = Qc(e, t, 1)),
        (e = Nt(e, t, 1)),
        (t = ye()),
        e !== null && (_r(e, 1, t), Ce(e, t));
}
function q(e, t, n) {
    if (e.tag === 3) Vu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Rt === null || !Rt.has(r)))
                ) {
                    (e = Tn(n, e)),
                        (e = Kc(t, e, 1)),
                        (t = Nt(t, e, 1)),
                        (e = ye()),
                        t !== null && (_r(t, 1, e), Ce(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Zp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ye()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ie === e &&
            (le & n) === n &&
            (ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > X() - Sl)
                ? Wt(e, 0)
                : (El |= n)),
        Ce(e, t);
}
function pf(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Ir), (Ir <<= 1), !(Ir & 130023424) && (Ir = 4194304))
            : (t = 1));
    var n = ye();
    (e = ft(e, t)), e !== null && (_r(e, t, n), Ce(e, n));
}
function bp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), pf(e, n);
}
function eh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314));
    }
    r !== null && r.delete(t), pf(e, n);
}
var hf;
hf = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Se.current) ke = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (ke = !1), Up(e, t, n);
            ke = !!(e.flags & 131072);
        }
    else (ke = !1), H && t.flags & 1048576 && yc(t, Ti, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            si(e, t), (e = t.pendingProps);
            var i = Sn(t, pe.current);
            wn(t, n), (i = ml(null, t, r, e, i, n));
            var o = yl();
            return (
                (t.flags |= 1),
                typeof i == "object" &&
                i !== null &&
                typeof i.render == "function" &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      _e(r) ? ((o = !0), Ci(t)) : (o = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      cl(t),
                      (i.updater = qi),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      ys(t, r, e, n),
                      (t = ws(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      H && o && rl(t),
                      me(null, t, i, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (si(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = nh(r)),
                    (e = He(r, e)),
                    i)
                ) {
                    case 0:
                        t = gs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = zu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Pu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ou(null, t, r, He(r.type, e), n);
                        break e;
                }
                throw Error(E(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : He(r, i)),
                gs(e, t, r, i, n)
            );
        case 1:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : He(r, i)),
                zu(e, t, r, i, n)
            );
        case 3:
            e: {
                if ((Gc(t), e === null)) throw Error(E(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (i = o.element),
                    kc(e, t),
                    Li(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (i = Tn(Error(E(423)), t)), (t = Au(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = Tn(Error(E(424)), t)), (t = Au(e, t, r, n, i));
                        break e;
                    } else
                        for (
                            Ne = Tt(t.stateNode.containerInfo.firstChild),
                                Le = t,
                                H = !0,
                                Ke = null,
                                n = Cc(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((_n(), r === i)) {
                        t = dt(e, t, n);
                        break e;
                    }
                    me(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                xc(t),
                e === null && ps(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (s = i.children),
                us(r, i)
                    ? (s = null)
                    : o !== null && us(r, o) && (t.flags |= 32),
                Xc(e, t),
                me(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ps(t), null;
        case 13:
            return Jc(e, t, n);
        case 4:
            return (
                fl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Cn(t, null, r, n)) : me(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : He(r, i)),
                Pu(e, t, r, i, n)
            );
        case 7:
            return me(e, t, t.pendingProps, n), t.child;
        case 8:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (s = i.value),
                    $(Ni, r._currentValue),
                    (r._currentValue = s),
                    o !== null)
                )
                    if (Xe(o.value, s)) {
                        if (o.children === i.children && !Se.current) {
                            t = dt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var u = l.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            (u = ut(-1, n & -n)), (u.tag = 2);
                                            var a = o.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var h = a.pending;
                                                h === null
                                                    ? (u.next = u)
                                                    : ((u.next = h.next),
                                                      (h.next = u)),
                                                    (a.pending = u);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (u = o.alternate),
                                            u !== null && (u.lanes |= n),
                                            hs(o.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (o.tag === 10)
                                s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((s = o.return), s === null))
                                    throw Error(E(341));
                                (s.lanes |= n),
                                    (l = s.alternate),
                                    l !== null && (l.lanes |= n),
                                    hs(s, n, t),
                                    (s = o.sibling);
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((o = s.sibling), o !== null)) {
                                        (o.return = s.return), (s = o);
                                        break;
                                    }
                                    s = s.return;
                                }
                            o = s;
                        }
                me(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                wn(t, n),
                (i = $e(i)),
                (r = r(i)),
                (t.flags |= 1),
                me(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (i = He(r, t.pendingProps)),
                (i = He(r.type, i)),
                Ou(e, t, r, i, n)
            );
        case 15:
            return qc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : He(r, i)),
                si(e, t),
                (t.tag = 1),
                _e(r) ? ((e = !0), Ci(t)) : (e = !1),
                wn(t, n),
                Sc(t, r, i),
                ys(t, r, i, n),
                ws(null, t, r, !0, e, n)
            );
        case 19:
            return Zc(e, t, n);
        case 22:
            return Yc(e, t, n);
    }
    throw Error(E(156, t.tag));
};
function mf(e, t) {
    return $a(e, t);
}
function th(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Me(e, t, n, r) {
    return new th(e, t, n, r);
}
function Tl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nh(e) {
    if (typeof e == "function") return Tl(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Qs)) return 11;
        if (e === Ks) return 14;
    }
    return 2;
}
function Pt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Me(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ai(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Tl(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case rn:
                return Qt(n.children, i, o, t);
            case Ws:
                (s = 8), (i |= 8);
                break;
            case $o:
                return (
                    (e = Me(12, n, t, i | 2)),
                    (e.elementType = $o),
                    (e.lanes = o),
                    e
                );
            case Uo:
                return (
                    (e = Me(13, n, t, i)),
                    (e.elementType = Uo),
                    (e.lanes = o),
                    e
                );
            case Vo:
                return (
                    (e = Me(19, n, t, i)),
                    (e.elementType = Vo),
                    (e.lanes = o),
                    e
                );
            case _a:
                return Ji(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Ea:
                            s = 10;
                            break e;
                        case Sa:
                            s = 9;
                            break e;
                        case Qs:
                            s = 11;
                            break e;
                        case Ks:
                            s = 14;
                            break e;
                        case yt:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(E(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Me(s, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function Qt(e, t, n, r) {
    return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function Ji(e, t, n, r) {
    return (
        (e = Me(22, e, r, t)),
        (e.elementType = _a),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Oo(e, t, n) {
    return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function zo(e, t, n) {
    return (
        (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function rh(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = fo(0)),
        (this.expirationTimes = fo(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = fo(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Nl(e, t, n, r, i, o, s, l, u) {
    return (
        (e = new rh(e, t, n, l, u)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Me(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        cl(o),
        e
    );
}
function ih(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: nn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function yf(e) {
    if (!e) return zt;
    e = e._reactInternals;
    e: {
        if (bt(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (_e(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(E(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_e(n)) return hc(e, n, t);
    }
    return t;
}
function vf(e, t, n, r, i, o, s, l, u) {
    return (
        (e = Nl(n, r, !0, e, i, o, s, l, u)),
        (e.context = yf(null)),
        (n = e.current),
        (r = ye()),
        (i = Lt(n)),
        (o = ut(r, i)),
        (o.callback = t ?? null),
        Nt(n, o, i),
        (e.current.lanes = i),
        _r(e, i, r),
        Ce(e, r),
        e
    );
}
function Zi(e, t, n, r) {
    var i = t.current,
        o = ye(),
        s = Lt(i);
    return (
        (n = yf(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = ut(o, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Nt(i, t, s)),
        e !== null && (Ye(e, i, s, o), ri(e, i, s)),
        s
    );
}
function Bi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Hu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Rl(e, t) {
    Hu(e, t), (e = e.alternate) && Hu(e, t);
}
function oh() {
    return null;
}
var gf =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Ll(e) {
    this._internalRoot = e;
}
bi.prototype.render = Ll.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Zi(e, t, null, null);
};
bi.prototype.unmount = Ll.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Gt(function () {
            Zi(null, e, null, null);
        }),
            (t[ct] = null);
    }
};
function bi(e) {
    this._internalRoot = e;
}
bi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = qa();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
        gt.splice(n, 0, e), n === 0 && Xa(e);
    }
};
function Pl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function eo(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Wu() {}
function sh(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var a = Bi(s);
                o.call(a);
            };
        }
        var s = vf(t, r, e, 0, null, !1, !1, "", Wu);
        return (
            (e._reactRootContainer = s),
            (e[ct] = s.current),
            pr(e.nodeType === 8 ? e.parentNode : e),
            Gt(),
            s
        );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var a = Bi(u);
            l.call(a);
        };
    }
    var u = Nl(e, 0, !1, null, null, !1, !1, "", Wu);
    return (
        (e._reactRootContainer = u),
        (e[ct] = u.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        Gt(function () {
            Zi(t, u, n, r);
        }),
        u
    );
}
function to(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function () {
                var u = Bi(s);
                l.call(u);
            };
        }
        Zi(t, s, e, i);
    } else s = sh(n, t, e, i, r);
    return Bi(s);
}
Qa = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Hn(t.pendingLanes);
                n !== 0 &&
                    (Xs(t, n | 1),
                    Ce(t, X()),
                    !(D & 6) && ((Nn = X() + 500), jt()));
            }
            break;
        case 13:
            Gt(function () {
                var r = ft(e, 1);
                if (r !== null) {
                    var i = ye();
                    Ye(r, e, 1, i);
                }
            }),
                Rl(e, 1);
    }
};
Gs = function (e) {
    if (e.tag === 13) {
        var t = ft(e, 134217728);
        if (t !== null) {
            var n = ye();
            Ye(t, e, 134217728, n);
        }
        Rl(e, 134217728);
    }
};
Ka = function (e) {
    if (e.tag === 13) {
        var t = Lt(e),
            n = ft(e, t);
        if (n !== null) {
            var r = ye();
            Ye(n, e, t, r);
        }
        Rl(e, t);
    }
};
qa = function () {
    return M;
};
Ya = function (e, t) {
    var n = M;
    try {
        return (M = e), t();
    } finally {
        M = n;
    }
};
Zo = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Qi(r);
                        if (!i) throw Error(E(90));
                        xa(r), Qo(r, i);
                    }
                }
            }
            break;
        case "textarea":
            Na(e, n);
            break;
        case "select":
            (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
    }
};
Ia = _l;
ja = Gt;
var lh = { usingClientEntryPoint: !1, Events: [xr, un, Qi, za, Aa, _l] },
    Fn = {
        findFiberByHostInstance: Ut,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    uh = {
        bundleType: Fn.bundleType,
        version: Fn.version,
        rendererPackageName: Fn.rendererPackageName,
        rendererConfig: Fn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ht.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Ma(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Fn.findFiberByHostInstance || oh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qr.isDisabled && Qr.supportsFiber)
        try {
            (Ui = Qr.inject(uh)), (be = Qr);
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lh;
Oe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pl(t)) throw Error(E(200));
    return ih(e, t, null, n);
};
Oe.createRoot = function (e, t) {
    if (!Pl(e)) throw Error(E(299));
    var n = !1,
        r = "",
        i = gf;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Nl(e, 1, !1, null, null, n, !1, r, i)),
        (e[ct] = t.current),
        pr(e.nodeType === 8 ? e.parentNode : e),
        new Ll(t)
    );
};
Oe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(E(188))
            : ((e = Object.keys(e).join(",")), Error(E(268, e)));
    return (e = Ma(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
    return Gt(e);
};
Oe.hydrate = function (e, t, n) {
    if (!eo(t)) throw Error(E(200));
    return to(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
    if (!Pl(e)) throw Error(E(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = gf;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = vf(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[ct] = t.current),
        pr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new bi(t);
};
Oe.render = function (e, t, n) {
    if (!eo(t)) throw Error(E(200));
    return to(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
    if (!eo(e)) throw Error(E(40));
    return e._reactRootContainer
        ? (Gt(function () {
              to(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ct] = null);
              });
          }),
          !0)
        : !1;
};
Oe.unstable_batchedUpdates = _l;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!eo(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return to(e, t, n, !1, r);
};
Oe.version = "18.2.0-next-9e3b772b8-20220608";
function wf() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf);
        } catch (e) {
            console.error(e);
        }
}
wf(), (ya.exports = Oe);
var ah = ya.exports,
    Qu = ah;
(Mo.createRoot = Qu.createRoot), (Mo.hydrateRoot = Qu.hydrateRoot);
function kf(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = kf(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
}
function St() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = kf(e)) && (r && (r += " "), (r += t));
    return r;
}
const nr = (e) => typeof e == "number" && !isNaN(e),
    Jt = (e) => typeof e == "string",
    Ee = (e) => typeof e == "function",
    ci = (e) => (Jt(e) || Ee(e) ? e : null),
    Ao = (e) => L.isValidElement(e) || Jt(e) || Ee(e) || nr(e);
function ch(e, t, n) {
    n === void 0 && (n = 300);
    const { scrollHeight: r, style: i } = e;
    requestAnimationFrame(() => {
        (i.minHeight = "initial"),
            (i.height = r + "px"),
            (i.transition = `all ${n}ms`),
            requestAnimationFrame(() => {
                (i.height = "0"),
                    (i.padding = "0"),
                    (i.margin = "0"),
                    setTimeout(t, n);
            });
    });
}
function no(e) {
    let {
        enter: t,
        exit: n,
        appendPosition: r = !1,
        collapse: i = !0,
        collapseDuration: o = 300,
    } = e;
    return function (s) {
        let {
            children: l,
            position: u,
            preventExitTransition: a,
            done: h,
            nodeRef: m,
            isIn: p,
        } = s;
        const v = r ? `${t}--${u}` : t,
            y = r ? `${n}--${u}` : n,
            g = L.useRef(0);
        return (
            L.useLayoutEffect(() => {
                const _ = m.current,
                    f = v.split(" "),
                    c = (d) => {
                        d.target === m.current &&
                            (_.dispatchEvent(new Event("d")),
                            _.removeEventListener("animationend", c),
                            _.removeEventListener("animationcancel", c),
                            g.current === 0 &&
                                d.type !== "animationcancel" &&
                                _.classList.remove(...f));
                    };
                _.classList.add(...f),
                    _.addEventListener("animationend", c),
                    _.addEventListener("animationcancel", c);
            }, []),
            L.useEffect(() => {
                const _ = m.current,
                    f = () => {
                        _.removeEventListener("animationend", f),
                            i ? ch(_, h, o) : h();
                    };
                p ||
                    (a
                        ? f()
                        : ((g.current = 1),
                          (_.className += ` ${y}`),
                          _.addEventListener("animationend", f)));
            }, [p]),
            F.createElement(F.Fragment, null, l)
        );
    };
}
function Ku(e, t) {
    return e != null
        ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
          }
        : {};
}
const Ie = {
        list: new Map(),
        emitQueue: new Map(),
        on(e, t) {
            return (
                this.list.has(e) || this.list.set(e, []),
                this.list.get(e).push(t),
                this
            );
        },
        off(e, t) {
            if (t) {
                const n = this.list.get(e).filter((r) => r !== t);
                return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
        },
        cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return (
                t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
            );
        },
        emit(e) {
            this.list.has(e) &&
                this.list.get(e).forEach((t) => {
                    const n = setTimeout(() => {
                        t(...[].slice.call(arguments, 1));
                    }, 0);
                    this.emitQueue.has(e) || this.emitQueue.set(e, []),
                        this.emitQueue.get(e).push(n);
                });
        },
    },
    Kr = (e) => {
        let { theme: t, type: n, ...r } = e;
        return F.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
                t === "colored"
                    ? "currentColor"
                    : `var(--toastify-icon-color-${n})`,
            ...r,
        });
    },
    Io = {
        info: function (e) {
            return F.createElement(
                Kr,
                { ...e },
                F.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
                })
            );
        },
        warning: function (e) {
            return F.createElement(
                Kr,
                { ...e },
                F.createElement("path", {
                    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
                })
            );
        },
        success: function (e) {
            return F.createElement(
                Kr,
                { ...e },
                F.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
                })
            );
        },
        error: function (e) {
            return F.createElement(
                Kr,
                { ...e },
                F.createElement("path", {
                    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
                })
            );
        },
        spinner: function () {
            return F.createElement("div", { className: "Toastify__spinner" });
        },
    };
function fh(e) {
    const [, t] = L.useReducer((v) => v + 1, 0),
        [n, r] = L.useState([]),
        i = L.useRef(null),
        o = L.useRef(new Map()).current,
        s = (v) => n.indexOf(v) !== -1,
        l = L.useRef({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: s,
            getToast: (v) => o.get(v),
        }).current;
    function u(v) {
        let { containerId: y } = v;
        const { limit: g } = l.props;
        !g ||
            (y && l.containerId !== y) ||
            ((l.count -= l.queue.length), (l.queue = []));
    }
    function a(v) {
        r((y) => (v == null ? [] : y.filter((g) => g !== v)));
    }
    function h() {
        const { toastContent: v, toastProps: y, staleId: g } = l.queue.shift();
        p(v, y, g);
    }
    function m(v, y) {
        let { delay: g, staleId: _, ...f } = y;
        if (
            !Ao(v) ||
            (function (te) {
                return (
                    !i.current ||
                    (l.props.enableMultiContainer &&
                        te.containerId !== l.props.containerId) ||
                    (o.has(te.toastId) && te.updateId == null)
                );
            })(f)
        )
            return;
        const { toastId: c, updateId: d, data: w } = f,
            { props: S } = l,
            T = () => a(c),
            N = d == null;
        N && l.count++;
        const x = {
            ...S,
            style: S.toastStyle,
            key: l.toastKey++,
            ...Object.fromEntries(
                Object.entries(f).filter((te) => {
                    let [he, ae] = te;
                    return ae != null;
                })
            ),
            toastId: c,
            updateId: d,
            data: w,
            closeToast: T,
            isIn: !1,
            className: ci(f.className || S.toastClassName),
            bodyClassName: ci(f.bodyClassName || S.bodyClassName),
            progressClassName: ci(f.progressClassName || S.progressClassName),
            autoClose:
                !f.isLoading &&
                ((B = f.autoClose),
                (O = S.autoClose),
                B === !1 || (nr(B) && B > 0) ? B : O),
            deleteToast() {
                const te = Ku(o.get(c), "removed");
                o.delete(c), Ie.emit(4, te);
                const he = l.queue.length;
                if (
                    ((l.count =
                        c == null ? l.count - l.displayedToast : l.count - 1),
                    l.count < 0 && (l.count = 0),
                    he > 0)
                ) {
                    const ae = c == null ? l.props.limit : 1;
                    if (he === 1 || ae === 1) l.displayedToast++, h();
                    else {
                        const rt = ae > he ? he : ae;
                        l.displayedToast = rt;
                        for (let oe = 0; oe < rt; oe++) h();
                    }
                } else t();
            },
        };
        var B, O;
        (x.iconOut = (function (te) {
            let { theme: he, type: ae, isLoading: rt, icon: oe } = te,
                xe = null;
            const C = { theme: he, type: ae };
            return (
                oe === !1 ||
                    (Ee(oe)
                        ? (xe = oe(C))
                        : L.isValidElement(oe)
                        ? (xe = L.cloneElement(oe, C))
                        : Jt(oe) || nr(oe)
                        ? (xe = oe)
                        : rt
                        ? (xe = Io.spinner())
                        : ((P) => P in Io)(ae) && (xe = Io[ae](C))),
                xe
            );
        })(x)),
            Ee(f.onOpen) && (x.onOpen = f.onOpen),
            Ee(f.onClose) && (x.onClose = f.onClose),
            (x.closeButton = S.closeButton),
            f.closeButton === !1 || Ao(f.closeButton)
                ? (x.closeButton = f.closeButton)
                : f.closeButton === !0 &&
                  (x.closeButton = !Ao(S.closeButton) || S.closeButton);
        let Z = v;
        L.isValidElement(v) && !Jt(v.type)
            ? (Z = L.cloneElement(v, { closeToast: T, toastProps: x, data: w }))
            : Ee(v) && (Z = v({ closeToast: T, toastProps: x, data: w })),
            S.limit && S.limit > 0 && l.count > S.limit && N
                ? l.queue.push({ toastContent: Z, toastProps: x, staleId: _ })
                : nr(g)
                ? setTimeout(() => {
                      p(Z, x, _);
                  }, g)
                : p(Z, x, _);
    }
    function p(v, y, g) {
        const { toastId: _ } = y;
        g && o.delete(g);
        const f = { content: v, props: y };
        o.set(_, f),
            r((c) => [...c, _].filter((d) => d !== g)),
            Ie.emit(4, Ku(f, f.props.updateId == null ? "added" : "updated"));
    }
    return (
        L.useEffect(
            () => (
                (l.containerId = e.containerId),
                Ie.cancelEmit(3)
                    .on(0, m)
                    .on(1, (v) => i.current && a(v))
                    .on(5, u)
                    .emit(2, l),
                () => {
                    o.clear(), Ie.emit(3, l);
                }
            ),
            []
        ),
        L.useEffect(() => {
            (l.props = e), (l.isToastActive = s), (l.displayedToast = n.length);
        }),
        {
            getToastToRender: function (v) {
                const y = new Map(),
                    g = Array.from(o.values());
                return (
                    e.newestOnTop && g.reverse(),
                    g.forEach((_) => {
                        const { position: f } = _.props;
                        y.has(f) || y.set(f, []), y.get(f).push(_);
                    }),
                    Array.from(y, (_) => v(_[0], _[1]))
                );
            },
            containerRef: i,
            isToastActive: s,
        }
    );
}
function qu(e) {
    return e.targetTouches && e.targetTouches.length >= 1
        ? e.targetTouches[0].clientX
        : e.clientX;
}
function Yu(e) {
    return e.targetTouches && e.targetTouches.length >= 1
        ? e.targetTouches[0].clientY
        : e.clientY;
}
function dh(e) {
    const [t, n] = L.useState(!1),
        [r, i] = L.useState(!1),
        o = L.useRef(null),
        s = L.useRef({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
        }).current,
        l = L.useRef(e),
        {
            autoClose: u,
            pauseOnHover: a,
            closeToast: h,
            onClick: m,
            closeOnClick: p,
        } = e;
    function v(w) {
        if (e.draggable) {
            w.nativeEvent.type === "touchstart" &&
                w.nativeEvent.preventDefault(),
                (s.didMove = !1),
                document.addEventListener("mousemove", f),
                document.addEventListener("mouseup", c),
                document.addEventListener("touchmove", f),
                document.addEventListener("touchend", c);
            const S = o.current;
            (s.canCloseOnClick = !0),
                (s.canDrag = !0),
                (s.boundingRect = S.getBoundingClientRect()),
                (S.style.transition = ""),
                (s.x = qu(w.nativeEvent)),
                (s.y = Yu(w.nativeEvent)),
                e.draggableDirection === "x"
                    ? ((s.start = s.x),
                      (s.removalDistance =
                          S.offsetWidth * (e.draggablePercent / 100)))
                    : ((s.start = s.y),
                      (s.removalDistance =
                          S.offsetHeight *
                          (e.draggablePercent === 80
                              ? 1.5 * e.draggablePercent
                              : e.draggablePercent / 100)));
        }
    }
    function y(w) {
        if (s.boundingRect) {
            const { top: S, bottom: T, left: N, right: x } = s.boundingRect;
            w.nativeEvent.type !== "touchend" &&
            e.pauseOnHover &&
            s.x >= N &&
            s.x <= x &&
            s.y >= S &&
            s.y <= T
                ? _()
                : g();
        }
    }
    function g() {
        n(!0);
    }
    function _() {
        n(!1);
    }
    function f(w) {
        const S = o.current;
        s.canDrag &&
            S &&
            ((s.didMove = !0),
            t && _(),
            (s.x = qu(w)),
            (s.y = Yu(w)),
            (s.delta =
                e.draggableDirection === "x" ? s.x - s.start : s.y - s.start),
            s.start !== s.x && (s.canCloseOnClick = !1),
            (S.style.transform = `translate${e.draggableDirection}(${s.delta}px)`),
            (S.style.opacity =
                "" + (1 - Math.abs(s.delta / s.removalDistance))));
    }
    function c() {
        document.removeEventListener("mousemove", f),
            document.removeEventListener("mouseup", c),
            document.removeEventListener("touchmove", f),
            document.removeEventListener("touchend", c);
        const w = o.current;
        if (s.canDrag && s.didMove && w) {
            if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
                return i(!0), void e.closeToast();
            (w.style.transition = "transform 0.2s, opacity 0.2s"),
                (w.style.transform = `translate${e.draggableDirection}(0)`),
                (w.style.opacity = "1");
        }
    }
    L.useEffect(() => {
        l.current = e;
    }),
        L.useEffect(
            () => (
                o.current && o.current.addEventListener("d", g, { once: !0 }),
                Ee(e.onOpen) &&
                    e.onOpen(L.isValidElement(e.children) && e.children.props),
                () => {
                    const w = l.current;
                    Ee(w.onClose) &&
                        w.onClose(
                            L.isValidElement(w.children) && w.children.props
                        );
                }
            ),
            []
        ),
        L.useEffect(
            () => (
                e.pauseOnFocusLoss &&
                    (document.hasFocus() || _(),
                    window.addEventListener("focus", g),
                    window.addEventListener("blur", _)),
                () => {
                    e.pauseOnFocusLoss &&
                        (window.removeEventListener("focus", g),
                        window.removeEventListener("blur", _));
                }
            ),
            [e.pauseOnFocusLoss]
        );
    const d = { onMouseDown: v, onTouchStart: v, onMouseUp: y, onTouchEnd: y };
    return (
        u && a && ((d.onMouseEnter = _), (d.onMouseLeave = g)),
        p &&
            (d.onClick = (w) => {
                m && m(w), s.canCloseOnClick && h();
            }),
        {
            playToast: g,
            pauseToast: _,
            isRunning: t,
            preventExitTransition: r,
            toastRef: o,
            eventHandlers: d,
        }
    );
}
function Ef(e) {
    let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
    return F.createElement(
        "button",
        {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: "button",
            onClick: (i) => {
                i.stopPropagation(), t(i);
            },
            "aria-label": r,
        },
        F.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            F.createElement("path", {
                fillRule: "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            })
        )
    );
}
function ph(e) {
    let {
        delay: t,
        isRunning: n,
        closeToast: r,
        type: i = "default",
        hide: o,
        className: s,
        style: l,
        controlledProgress: u,
        progress: a,
        rtl: h,
        isIn: m,
        theme: p,
    } = e;
    const v = o || (u && a === 0),
        y = {
            ...l,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: v ? 0 : 1,
        };
    u && (y.transform = `scaleX(${a})`);
    const g = St(
            "Toastify__progress-bar",
            u
                ? "Toastify__progress-bar--controlled"
                : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${p}`,
            `Toastify__progress-bar--${i}`,
            { "Toastify__progress-bar--rtl": h }
        ),
        _ = Ee(s) ? s({ rtl: h, type: i, defaultClassName: g }) : St(g, s);
    return F.createElement("div", {
        role: "progressbar",
        "aria-hidden": v ? "true" : "false",
        "aria-label": "notification timer",
        className: _,
        style: y,
        [u && a >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
            u && a < 1
                ? null
                : () => {
                      m && r();
                  },
    });
}
const hh = (e) => {
        const {
                isRunning: t,
                preventExitTransition: n,
                toastRef: r,
                eventHandlers: i,
            } = dh(e),
            {
                closeButton: o,
                children: s,
                autoClose: l,
                onClick: u,
                type: a,
                hideProgressBar: h,
                closeToast: m,
                transition: p,
                position: v,
                className: y,
                style: g,
                bodyClassName: _,
                bodyStyle: f,
                progressClassName: c,
                progressStyle: d,
                updateId: w,
                role: S,
                progress: T,
                rtl: N,
                toastId: x,
                deleteToast: B,
                isIn: O,
                isLoading: Z,
                iconOut: te,
                closeOnClick: he,
                theme: ae,
            } = e,
            rt = St(
                "Toastify__toast",
                `Toastify__toast-theme--${ae}`,
                `Toastify__toast--${a}`,
                { "Toastify__toast--rtl": N },
                { "Toastify__toast--close-on-click": he }
            ),
            oe = Ee(y)
                ? y({ rtl: N, position: v, type: a, defaultClassName: rt })
                : St(rt, y),
            xe = !!T || !l,
            C = { closeToast: m, type: a, theme: ae };
        let P = null;
        return (
            o === !1 ||
                (P = Ee(o)
                    ? o(C)
                    : L.isValidElement(o)
                    ? L.cloneElement(o, C)
                    : Ef(C)),
            F.createElement(
                p,
                {
                    isIn: O,
                    done: B,
                    position: v,
                    preventExitTransition: n,
                    nodeRef: r,
                },
                F.createElement(
                    "div",
                    {
                        id: x,
                        onClick: u,
                        className: oe,
                        ...i,
                        style: g,
                        ref: r,
                    },
                    F.createElement(
                        "div",
                        {
                            ...(O && { role: S }),
                            className: Ee(_)
                                ? _({ type: a })
                                : St("Toastify__toast-body", _),
                            style: f,
                        },
                        te != null &&
                            F.createElement(
                                "div",
                                {
                                    className: St("Toastify__toast-icon", {
                                        "Toastify--animate-icon Toastify__zoom-enter":
                                            !Z,
                                    }),
                                },
                                te
                            ),
                        F.createElement("div", null, s)
                    ),
                    P,
                    F.createElement(ph, {
                        ...(w && !xe ? { key: `pb-${w}` } : {}),
                        rtl: N,
                        theme: ae,
                        delay: l,
                        isRunning: t,
                        isIn: O,
                        closeToast: m,
                        hide: h,
                        type: a,
                        style: d,
                        className: c,
                        controlledProgress: xe,
                        progress: T || 0,
                    })
                )
            )
        );
    },
    ro = function (e, t) {
        return (
            t === void 0 && (t = !1),
            {
                enter: `Toastify--animate Toastify__${e}-enter`,
                exit: `Toastify--animate Toastify__${e}-exit`,
                appendPosition: t,
            }
        );
    },
    mh = no(ro("bounce", !0));
no(ro("slide", !0));
no(ro("zoom"));
no(ro("flip"));
const Mi = L.forwardRef((e, t) => {
    const { getToastToRender: n, containerRef: r, isToastActive: i } = fh(e),
        { className: o, style: s, rtl: l, containerId: u } = e;
    function a(h) {
        const m = St(
            "Toastify__toast-container",
            `Toastify__toast-container--${h}`,
            { "Toastify__toast-container--rtl": l }
        );
        return Ee(o)
            ? o({ position: h, rtl: l, defaultClassName: m })
            : St(m, ci(o));
    }
    return (
        L.useEffect(() => {
            t && (t.current = r.current);
        }, []),
        F.createElement(
            "div",
            { ref: r, className: "Toastify", id: u },
            n((h, m) => {
                const p = m.length ? { ...s } : { ...s, pointerEvents: "none" };
                return F.createElement(
                    "div",
                    { className: a(h), style: p, key: `container-${h}` },
                    m.map((v, y) => {
                        let { content: g, props: _ } = v;
                        return F.createElement(
                            hh,
                            {
                                ..._,
                                isIn: i(_.toastId),
                                style: {
                                    ..._.style,
                                    "--nth": y + 1,
                                    "--len": m.length,
                                },
                                key: `toast-${_.key}`,
                            },
                            g
                        );
                    })
                );
            })
        )
    );
});
(Mi.displayName = "ToastContainer"),
    (Mi.defaultProps = {
        position: "top-right",
        transition: mh,
        autoClose: 5e3,
        closeButton: Ef,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        closeOnClick: !0,
        draggable: !0,
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light",
    });
let jo,
    $t = new Map(),
    Qn = [],
    yh = 1;
function Sf() {
    return "" + yh++;
}
function vh(e) {
    return e && (Jt(e.toastId) || nr(e.toastId)) ? e.toastId : Sf();
}
function rr(e, t) {
    return (
        $t.size > 0 ? Ie.emit(0, e, t) : Qn.push({ content: e, options: t }),
        t.toastId
    );
}
function Fi(e, t) {
    return { ...t, type: (t && t.type) || e, toastId: vh(t) };
}
function qr(e) {
    return (t, n) => rr(t, Fi(e, n));
}
function A(e, t) {
    return rr(e, Fi("default", t));
}
(A.loading = (e, t) =>
    rr(
        e,
        Fi("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
        })
    )),
    (A.promise = function (e, t, n) {
        let r,
            { pending: i, error: o, success: s } = t;
        i &&
            (r = Jt(i) ? A.loading(i, n) : A.loading(i.render, { ...n, ...i }));
        const l = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null,
            },
            u = (h, m, p) => {
                if (m == null) return void A.dismiss(r);
                const v = { type: h, ...l, ...n, data: p },
                    y = Jt(m) ? { render: m } : m;
                return (
                    r
                        ? A.update(r, { ...v, ...y })
                        : A(y.render, { ...v, ...y }),
                    p
                );
            },
            a = Ee(e) ? e() : e;
        return (
            a.then((h) => u("success", s, h)).catch((h) => u("error", o, h)), a
        );
    }),
    (A.success = qr("success")),
    (A.info = qr("info")),
    (A.error = qr("error")),
    (A.warning = qr("warning")),
    (A.warn = A.warning),
    (A.dark = (e, t) => rr(e, Fi("default", { theme: "dark", ...t }))),
    (A.dismiss = (e) => {
        $t.size > 0
            ? Ie.emit(1, e)
            : (Qn = Qn.filter((t) => e != null && t.options.toastId !== e));
    }),
    (A.clearWaitingQueue = function (e) {
        return e === void 0 && (e = {}), Ie.emit(5, e);
    }),
    (A.isActive = (e) => {
        let t = !1;
        return (
            $t.forEach((n) => {
                n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
        );
    }),
    (A.update = function (e, t) {
        t === void 0 && (t = {}),
            setTimeout(() => {
                const n = (function (r, i) {
                    let { containerId: o } = i;
                    const s = $t.get(o || jo);
                    return s && s.getToast(r);
                })(e, t);
                if (n) {
                    const { props: r, content: i } = n,
                        o = {
                            delay: 100,
                            ...r,
                            ...t,
                            toastId: t.toastId || e,
                            updateId: Sf(),
                        };
                    o.toastId !== e && (o.staleId = e);
                    const s = o.render || i;
                    delete o.render, rr(s, o);
                }
            }, 0);
    }),
    (A.done = (e) => {
        A.update(e, { progress: 1 });
    }),
    (A.onChange = (e) => (
        Ie.on(4, e),
        () => {
            Ie.off(4, e);
        }
    )),
    (A.POSITION = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        TOP_CENTER: "top-center",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right",
        BOTTOM_CENTER: "bottom-center",
    }),
    (A.TYPE = {
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        ERROR: "error",
        DEFAULT: "default",
    }),
    Ie.on(2, (e) => {
        (jo = e.containerId || e),
            $t.set(jo, e),
            Qn.forEach((t) => {
                Ie.emit(0, t.content, t.options);
            }),
            (Qn = []);
    }).on(3, (e) => {
        $t.delete(e.containerId || e), $t.size === 0 && Ie.off(0).off(1).off(5);
    });
function Xu({ list: e, title: t, toggleSideBar: n }) {
    const { state: r, setState: i } = L.useContext(pt);
    function o(a) {
        n(), i((h) => ({ ...h, activeRoom: a }));
    }
    async function s(a) {
        if (!window.confirm("Delete This Room")) return;
        if (
            !(
                await (
                    await fetch(`${r.url}/rooms/${a}`, {
                        method: "DELETE",
                        headers: { authorization: r.token },
                    })
                ).json()
            ).success
        ) {
            A.error("Error In Deleting Room", {
                theme: "dark",
                autoClose: 1500,
            });
            return;
        }
        A.success("Room Deleted Successfully", {
            theme: "dark",
            autoClose: 1500,
        }),
            i((p) => {
                const v = p.rooms.findIndex((y) => y._id === a);
                return v === -1
                    ? p
                    : (p.rooms.splice(v, 1),
                      p.activeRoom === a && (p.activeRoom = ""),
                      { ...p });
            });
    }
    function l(a) {
        const h = a.target.querySelector("i");
        h && h.classList.remove("invisible");
    }
    function u(a) {
        const h = a.target.querySelector("i");
        h && h.classList.add("invisible");
    }
    return k.jsxs("div", {
        className: "drop-down-list",
        children: [
            k.jsx("div", {
                className: "list-item list-title",
                children: t.toUpperCase(),
            }),
            k.jsx("div", {
                className: "list-container",
                children:
                    e.length === 0
                        ? k.jsx("div", {
                              className: "list-item",
                              children: "No Rooms Yet",
                          })
                        : e.map((a) =>
                              k.jsxs(
                                  "div",
                                  {
                                      className: "list-item hover",
                                      onClick: () => {
                                          o(a._id);
                                      },
                                      onMouseEnter: l,
                                      onMouseLeave: u,
                                      children: [
                                          a.title[0].toUpperCase() +
                                              a.title.slice(1),
                                          k.jsx("i", {
                                              className:
                                                  "fa-solid fa-trash-can invisible",
                                              onClick: () => s(a._id),
                                          }),
                                      ],
                                  },
                                  a._id
                              )
                          ),
            }),
        ],
    });
}
function Re({ content: e, onClick: t, className: n }) {
    return k.jsx("div", {
        className: `custom-button button ${n}`,
        onClick: t,
        children: e,
    });
}
function _f() {
    const [e, t] = L.useState(!1),
        { state: n, setState: r } = L.useContext(pt);
    function i() {
        t(!e);
    }
    async function o(s) {
        s.preventDefault();
        const l = s.target.parentElement.children[0].value,
            u = s.target.parentElement.children[1].value;
        if (!l || !u) return;
        const h = await (
            await fetch(`${n.url}/rooms/create-room/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: n.token,
                },
                body: JSON.stringify({ title: l, topic: u }),
            })
        ).json();
        h.success
            ? (A.success("Room Created Successfully", { theme: "dark" }),
              r(
                  (m) => (
                      m.rooms.push(h.room), { ...m, activeRoom: h.room._id }
                  )
              ))
            : A.error("Error In Creating Room", { theme: "dark" });
    }
    return k.jsx("div", {
        className: "create-room",
        children: e
            ? k.jsxs("form", {
                  className: "create-room-form",
                  children: [
                      k.jsx("input", {
                          id: "create-room-title",
                          type: "text",
                          placeholder: "Room Name",
                      }),
                      k.jsx("input", {
                          id: "create-room-subroom",
                          type: "text",
                          placeholder: "Topic 1",
                      }),
                      k.jsx(Re, { content: "Create New Room", onClick: o }),
                  ],
              })
            : k.jsx(Re, { content: "Create Room", onClick: i }),
    });
}
function ir({ alignment: e }) {
    return k.jsx("div", { className: `divider ${e}-divider` });
}
function gh({ rooms: e, userName: t, activeRoom: n, width: r }) {
    const { state: i, setState: o } = L.useContext(pt),
        s = e.filter((g) => g.createdBy !== t),
        l = e.filter((g) => g.createdBy === t),
        u = k.jsx("i", { className: "fa-solid fa-bars" }),
        a = k.jsx("i", { className: "fa-solid fa-xmark" });
    let h = "";
    r < 950 && (h = "sidebar-float display-none");
    const m = k.jsx(Re, {
            content: a,
            onClick: y,
            className: "sidebar-button float-right",
        }),
        p = k.jsx(Re, {
            content: u,
            onClick: y,
            className: "sidebar-button float-left",
        });
    async function v() {
        const g = document.getElementById("join-room-id"),
            _ = g.value;
        if (((g.value = ""), !_)) return;
        const c = await (
            await fetch(`${i.url}/rooms/join/${_}`, {
                method: "POST",
                headers: { authorization: i.token },
            })
        ).json();
        if (c.success)
            A.success("Joined Room Successfully", { theme: "dark" }),
                r < 950 && y();
        else {
            A.error("Room Not Found", { theme: "dark" });
            return;
        }
        o((d) => (d.rooms.push(c.room), { ...d, activeRoom: c.room._id }));
    }
    function y() {
        if (r > 950) return;
        document.getElementById("sidebar").classList.toggle("display-none");
    }
    return k.jsxs(k.Fragment, {
        children: [
            r < 950 ? p : null,
            k.jsxs("div", {
                id: "sidebar",
                className: `sidebar ${h}`,
                children: [
                    r < 950 ? m : null,
                    k.jsx("div", { className: "logo", children: "Doubts App" }),
                    k.jsx(ir, { alignment: "horizontal" }),
                    k.jsxs("div", {
                        className: "sidebar-content",
                        children: [
                            k.jsx(Xu, {
                                list: s,
                                title: "Previous Rooms",
                                toggleSideBar: y,
                            }),
                            k.jsx(ir, { alignment: "horizontal" }),
                            k.jsx(Xu, {
                                list: l,
                                title: "My Rooms",
                                toggleSideBar: y,
                            }),
                            n ? k.jsx(_f, {}) : null,
                        ],
                    }),
                    k.jsxs("div", {
                        className: "join-room",
                        children: [
                            k.jsx("input", {
                                id: "join-room-id",
                                type: "text",
                                placeholder: "Room Id",
                            }),
                            k.jsx(Re, { content: "Join Room", onClick: v }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const nt = Object.create(null);
nt.open = "0";
nt.close = "1";
nt.ping = "2";
nt.pong = "3";
nt.message = "4";
nt.upgrade = "5";
nt.noop = "6";
const fi = Object.create(null);
Object.keys(nt).forEach((e) => {
    fi[nt[e]] = e;
});
const Os = { type: "error", data: "parser error" },
    Cf =
        typeof Blob == "function" ||
        (typeof Blob < "u" &&
            Object.prototype.toString.call(Blob) ===
                "[object BlobConstructor]"),
    xf = typeof ArrayBuffer == "function",
    Tf = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
    Ol = ({ type: e, data: t }, n, r) =>
        Cf && t instanceof Blob
            ? n
                ? r(t)
                : Gu(t, r)
            : xf && (t instanceof ArrayBuffer || Tf(t))
            ? n
                ? r(t)
                : Gu(new Blob([t]), r)
            : r(nt[e] + (t || "")),
    Gu = (e, t) => {
        const n = new FileReader();
        return (
            (n.onload = function () {
                const r = n.result.split(",")[1];
                t("b" + (r || ""));
            }),
            n.readAsDataURL(e)
        );
    };
function Ju(e) {
    return e instanceof Uint8Array
        ? e
        : e instanceof ArrayBuffer
        ? new Uint8Array(e)
        : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Do;
function wh(e, t) {
    if (Cf && e.data instanceof Blob)
        return e.data.arrayBuffer().then(Ju).then(t);
    if (xf && (e.data instanceof ArrayBuffer || Tf(e.data)))
        return t(Ju(e.data));
    Ol(e, !1, (n) => {
        Do || (Do = new TextEncoder()), t(Do.encode(n));
    });
}
const Zu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Kn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Zu.length; e++) Kn[Zu.charCodeAt(e)] = e;
const kh = (e) => {
        let t = e.length * 0.75,
            n = e.length,
            r,
            i = 0,
            o,
            s,
            l,
            u;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const a = new ArrayBuffer(t),
            h = new Uint8Array(a);
        for (r = 0; r < n; r += 4)
            (o = Kn[e.charCodeAt(r)]),
                (s = Kn[e.charCodeAt(r + 1)]),
                (l = Kn[e.charCodeAt(r + 2)]),
                (u = Kn[e.charCodeAt(r + 3)]),
                (h[i++] = (o << 2) | (s >> 4)),
                (h[i++] = ((s & 15) << 4) | (l >> 2)),
                (h[i++] = ((l & 3) << 6) | (u & 63));
        return a;
    },
    Eh = typeof ArrayBuffer == "function",
    zl = (e, t) => {
        if (typeof e != "string") return { type: "message", data: Nf(e, t) };
        const n = e.charAt(0);
        return n === "b"
            ? { type: "message", data: Sh(e.substring(1), t) }
            : fi[n]
            ? e.length > 1
                ? { type: fi[n], data: e.substring(1) }
                : { type: fi[n] }
            : Os;
    },
    Sh = (e, t) => {
        if (Eh) {
            const n = kh(e);
            return Nf(n, t);
        } else return { base64: !0, data: e };
    },
    Nf = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof Blob ? e : new Blob([e]);
            case "arraybuffer":
            default:
                return e instanceof ArrayBuffer ? e : e.buffer;
        }
    },
    Rf = "",
    _h = (e, t) => {
        const n = e.length,
            r = new Array(n);
        let i = 0;
        e.forEach((o, s) => {
            Ol(o, !1, (l) => {
                (r[s] = l), ++i === n && t(r.join(Rf));
            });
        });
    },
    Ch = (e, t) => {
        const n = e.split(Rf),
            r = [];
        for (let i = 0; i < n.length; i++) {
            const o = zl(n[i], t);
            if ((r.push(o), o.type === "error")) break;
        }
        return r;
    };
function xh() {
    return new TransformStream({
        transform(e, t) {
            wh(e, (n) => {
                const r = n.length;
                let i;
                if (r < 126)
                    (i = new Uint8Array(1)),
                        new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    const o = new DataView(i.buffer);
                    o.setUint8(0, 126), o.setUint16(1, r);
                } else {
                    i = new Uint8Array(9);
                    const o = new DataView(i.buffer);
                    o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
                }
                e.data && typeof e.data != "string" && (i[0] |= 128),
                    t.enqueue(i),
                    t.enqueue(n);
            });
        },
    });
}
let Bo;
function Yr(e) {
    return e.reduce((t, n) => t + n.length, 0);
}
function Xr(e, t) {
    if (e[0].length === t) return e.shift();
    const n = new Uint8Array(t);
    let r = 0;
    for (let i = 0; i < t; i++)
        (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function Th(e, t) {
    Bo || (Bo = new TextDecoder());
    const n = [];
    let r = 0,
        i = -1,
        o = !1;
    return new TransformStream({
        transform(s, l) {
            for (n.push(s); ; ) {
                if (r === 0) {
                    if (Yr(n) < 1) break;
                    const u = Xr(n, 1);
                    (o = (u[0] & 128) === 128),
                        (i = u[0] & 127),
                        i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
                } else if (r === 1) {
                    if (Yr(n) < 2) break;
                    const u = Xr(n, 2);
                    (i = new DataView(
                        u.buffer,
                        u.byteOffset,
                        u.length
                    ).getUint16(0)),
                        (r = 3);
                } else if (r === 2) {
                    if (Yr(n) < 8) break;
                    const u = Xr(n, 8),
                        a = new DataView(u.buffer, u.byteOffset, u.length),
                        h = a.getUint32(0);
                    if (h > Math.pow(2, 21) - 1) {
                        l.enqueue(Os);
                        break;
                    }
                    (i = h * Math.pow(2, 32) + a.getUint32(4)), (r = 3);
                } else {
                    if (Yr(n) < i) break;
                    const u = Xr(n, i);
                    l.enqueue(zl(o ? u : Bo.decode(u), t)), (r = 0);
                }
                if (i === 0 || i > e) {
                    l.enqueue(Os);
                    break;
                }
            }
        },
    });
}
const Lf = 4;
function J(e) {
    if (e) return Nh(e);
}
function Nh(e) {
    for (var t in J.prototype) e[t] = J.prototype[t];
    return e;
}
J.prototype.on = J.prototype.addEventListener = function (e, t) {
    return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    );
};
J.prototype.once = function (e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments);
    }
    return (n.fn = t), this.on(e, n), this;
};
J.prototype.off =
    J.prototype.removeListener =
    J.prototype.removeAllListeners =
    J.prototype.removeEventListener =
        function (e, t) {
            if (
                ((this._callbacks = this._callbacks || {}),
                arguments.length == 0)
            )
                return (this._callbacks = {}), this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (arguments.length == 1)
                return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++)
                if (((r = n[i]), r === t || r.fn === t)) {
                    n.splice(i, 1);
                    break;
                }
            return n.length === 0 && delete this._callbacks["$" + e], this;
        };
J.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
        var t = new Array(arguments.length - 1),
            n = this._callbacks["$" + e],
            r = 1;
        r < arguments.length;
        r++
    )
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
    }
    return this;
};
J.prototype.emitReserved = J.prototype.emit;
J.prototype.listeners = function (e) {
    return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
    );
};
J.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
};
const Be =
    typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : Function("return this")();
function Pf(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const Rh = Be.setTimeout,
    Lh = Be.clearTimeout;
function io(e, t) {
    t.useNativeTimers
        ? ((e.setTimeoutFn = Rh.bind(Be)), (e.clearTimeoutFn = Lh.bind(Be)))
        : ((e.setTimeoutFn = Be.setTimeout.bind(Be)),
          (e.clearTimeoutFn = Be.clearTimeout.bind(Be)));
}
const Ph = 1.33;
function Oh(e) {
    return typeof e == "string"
        ? zh(e)
        : Math.ceil((e.byteLength || e.size) * Ph);
}
function zh(e) {
    let t = 0,
        n = 0;
    for (let r = 0, i = e.length; r < i; r++)
        (t = e.charCodeAt(r)),
            t < 128
                ? (n += 1)
                : t < 2048
                ? (n += 2)
                : t < 55296 || t >= 57344
                ? (n += 3)
                : (r++, (n += 4));
    return n;
}
function Ah(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
    return t;
}
function Ih(e) {
    let t = {},
        n = e.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let o = n[r].split("=");
        t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
    }
    return t;
}
class jh extends Error {
    constructor(t, n, r) {
        super(t),
            (this.description = n),
            (this.context = r),
            (this.type = "TransportError");
    }
}
class Al extends J {
    constructor(t) {
        super(),
            (this.writable = !1),
            io(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.socket = t.socket);
    }
    onError(t, n, r) {
        return super.emitReserved("error", new jh(t, n, r)), this;
    }
    open() {
        return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                (this.doClose(), this.onClose()),
            this
        );
    }
    send(t) {
        this.readyState === "open" && this.write(t);
    }
    onOpen() {
        (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
    }
    onData(t) {
        const n = zl(t, this.socket.binaryType);
        this.onPacket(n);
    }
    onPacket(t) {
        super.emitReserved("packet", t);
    }
    onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
    }
    pause(t) {}
    createUri(t, n = {}) {
        return (
            t +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(n)
        );
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]";
    }
    _port() {
        return this.opts.port &&
            ((this.opts.secure && +(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))
            ? ":" + this.opts.port
            : "";
    }
    _query(t) {
        const n = Ah(t);
        return n.length ? "?" + n : "";
    }
}
const Of =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
        ),
    zs = 64,
    Dh = {};
let bu = 0,
    Gr = 0,
    ea;
function ta(e) {
    let t = "";
    do (t = Of[e % zs] + t), (e = Math.floor(e / zs));
    while (e > 0);
    return t;
}
function zf() {
    const e = ta(+new Date());
    return e !== ea ? ((bu = 0), (ea = e)) : e + "." + ta(bu++);
}
for (; Gr < zs; Gr++) Dh[Of[Gr]] = Gr;
let Af = !1;
try {
    Af =
        typeof XMLHttpRequest < "u" &&
        "withCredentials" in new XMLHttpRequest();
} catch {}
const Bh = Af;
function If(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || Bh))
            return new XMLHttpRequest();
    } catch {}
    if (!t)
        try {
            return new Be[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
            );
        } catch {}
}
function Mh() {}
const Fh = (function () {
    return new If({ xdomain: !1 }).responseType != null;
})();
class $h extends Al {
    constructor(t) {
        if ((super(t), (this.polling = !1), typeof location < "u")) {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
                (this.xd =
                    (typeof location < "u" &&
                        t.hostname !== location.hostname) ||
                    i !== t.port);
        }
        const n = t && t.forceBase64;
        (this.supportsBinary = Fh && !n),
            this.opts.withCredentials && (this.cookieJar = void 0);
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this.poll();
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            (this.readyState = "paused"), t();
        };
        if (this.polling || !this.writable) {
            let r = 0;
            this.polling &&
                (r++,
                this.once("pollComplete", function () {
                    --r || n();
                })),
                this.writable ||
                    (r++,
                    this.once("drain", function () {
                        --r || n();
                    }));
        } else n();
    }
    poll() {
        (this.polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(t) {
        const n = (r) => {
            if (
                (this.readyState === "opening" &&
                    r.type === "open" &&
                    this.onOpen(),
                r.type === "close")
            )
                return (
                    this.onClose({
                        description: "transport closed by the server",
                    }),
                    !1
                );
            this.onPacket(r);
        };
        Ch(t, this.socket.binaryType).forEach(n),
            this.readyState !== "closed" &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                this.readyState === "open" && this.poll());
    }
    doClose() {
        const t = () => {
            this.write([{ type: "close" }]);
        };
        this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
        (this.writable = !1),
            _h(t, (n) => {
                this.doWrite(n, () => {
                    (this.writable = !0), this.emitReserved("drain");
                });
            });
    }
    uri() {
        const t = this.opts.secure ? "https" : "http",
            n = this.query || {};
        return (
            this.opts.timestampRequests !== !1 &&
                (n[this.opts.timestampParam] = zf()),
            !this.supportsBinary && !n.sid && (n.b64 = 1),
            this.createUri(t, n)
        );
    }
    request(t = {}) {
        return (
            Object.assign(
                t,
                { xd: this.xd, cookieJar: this.cookieJar },
                this.opts
            ),
            new tt(this.uri(), t)
        );
    }
    doWrite(t, n) {
        const r = this.request({ method: "POST", data: t });
        r.on("success", n),
            r.on("error", (i, o) => {
                this.onError("xhr post error", i, o);
            });
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
            t.on("error", (n, r) => {
                this.onError("xhr poll error", n, r);
            }),
            (this.pollXhr = t);
    }
}
class tt extends J {
    constructor(t, n) {
        super(),
            io(this, n),
            (this.opts = n),
            (this.method = n.method || "GET"),
            (this.uri = t),
            (this.data = n.data !== void 0 ? n.data : null),
            this.create();
    }
    create() {
        var t;
        const n = Pf(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
        );
        n.xdomain = !!this.opts.xd;
        const r = (this.xhr = new If(n));
        try {
            r.open(this.method, this.uri, !0);
            try {
                if (this.opts.extraHeaders) {
                    r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                    for (let i in this.opts.extraHeaders)
                        this.opts.extraHeaders.hasOwnProperty(i) &&
                            r.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch {}
            if (this.method === "POST")
                try {
                    r.setRequestHeader(
                        "Content-type",
                        "text/plain;charset=UTF-8"
                    );
                } catch {}
            try {
                r.setRequestHeader("Accept", "*/*");
            } catch {}
            (t = this.opts.cookieJar) === null ||
                t === void 0 ||
                t.addCookies(r),
                "withCredentials" in r &&
                    (r.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                    (r.timeout = this.opts.requestTimeout),
                (r.onreadystatechange = () => {
                    var i;
                    r.readyState === 3 &&
                        ((i = this.opts.cookieJar) === null ||
                            i === void 0 ||
                            i.parseCookies(r)),
                        r.readyState === 4 &&
                            (r.status === 200 || r.status === 1223
                                ? this.onLoad()
                                : this.setTimeoutFn(() => {
                                      this.onError(
                                          typeof r.status == "number"
                                              ? r.status
                                              : 0
                                      );
                                  }, 0));
                }),
                r.send(this.data);
        } catch (i) {
            this.setTimeoutFn(() => {
                this.onError(i);
            }, 0);
            return;
        }
        typeof document < "u" &&
            ((this.index = tt.requestsCount++),
            (tt.requests[this.index] = this));
    }
    onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
    }
    cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (((this.xhr.onreadystatechange = Mh), t))
                try {
                    this.xhr.abort();
                } catch {}
            typeof document < "u" && delete tt.requests[this.index],
                (this.xhr = null);
        }
    }
    onLoad() {
        const t = this.xhr.responseText;
        t !== null &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this.cleanup());
    }
    abort() {
        this.cleanup();
    }
}
tt.requestsCount = 0;
tt.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", na);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in Be ? "pagehide" : "unload";
        addEventListener(e, na, !1);
    }
}
function na() {
    for (let e in tt.requests)
        tt.requests.hasOwnProperty(e) && tt.requests[e].abort();
}
const Il =
        typeof Promise == "function" && typeof Promise.resolve == "function"
            ? (t) => Promise.resolve().then(t)
            : (t, n) => n(t, 0),
    Jr = Be.WebSocket || Be.MozWebSocket,
    ra = !0,
    Uh = "arraybuffer",
    ia =
        typeof navigator < "u" &&
        typeof navigator.product == "string" &&
        navigator.product.toLowerCase() === "reactnative";
class Vh extends Al {
    constructor(t) {
        super(t), (this.supportsBinary = !t.forceBase64);
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) return;
        const t = this.uri(),
            n = this.opts.protocols,
            r = ia
                ? {}
                : Pf(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                  );
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws =
                ra && !ia ? (n ? new Jr(t, n) : new Jr(t)) : new Jr(t, n, r);
        } catch (i) {
            return this.emitReserved("error", i);
        }
        (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
    }
    addEventListeners() {
        (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
            (this.ws.onclose = (t) =>
                this.onClose({
                    description: "websocket connection closed",
                    context: t,
                })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            Ol(r, this.supportsBinary, (o) => {
                const s = {};
                try {
                    ra && this.ws.send(o);
                } catch {}
                i &&
                    Il(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws",
            n = this.query || {};
        return (
            this.opts.timestampRequests && (n[this.opts.timestampParam] = zf()),
            this.supportsBinary || (n.b64 = 1),
            this.createUri(t, n)
        );
    }
    check() {
        return !!Jr;
    }
}
class Hh extends Al {
    get name() {
        return "webtransport";
    }
    doOpen() {
        typeof WebTransport == "function" &&
            ((this.transport = new WebTransport(
                this.createUri("https"),
                this.opts.transportOptions[this.name]
            )),
            this.transport.closed
                .then(() => {
                    this.onClose();
                })
                .catch((t) => {
                    this.onError("webtransport error", t);
                }),
            this.transport.ready.then(() => {
                this.transport.createBidirectionalStream().then((t) => {
                    const n = Th(
                            Number.MAX_SAFE_INTEGER,
                            this.socket.binaryType
                        ),
                        r = t.readable.pipeThrough(n).getReader(),
                        i = xh();
                    i.readable.pipeTo(t.writable),
                        (this.writer = i.writable.getWriter());
                    const o = () => {
                        r.read()
                            .then(({ done: l, value: u }) => {
                                l || (this.onPacket(u), o());
                            })
                            .catch((l) => {});
                    };
                    o();
                    const s = { type: "open" };
                    this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
                        this.writer.write(s).then(() => this.onOpen());
                });
            }));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            this.writer.write(r).then(() => {
                i &&
                    Il(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var t;
        (t = this.transport) === null || t === void 0 || t.close();
    }
}
const Wh = { websocket: Vh, webtransport: Hh, polling: $h },
    Qh =
        /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Kh = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
    ];
function As(e) {
    if (e.length > 2e3) throw "URI too long";
    const t = e,
        n = e.indexOf("["),
        r = e.indexOf("]");
    n != -1 &&
        r != -1 &&
        (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
    let i = Qh.exec(e || ""),
        o = {},
        s = 14;
    for (; s--; ) o[Kh[s]] = i[s] || "";
    return (
        n != -1 &&
            r != -1 &&
            ((o.source = t),
            (o.host = o.host
                .substring(1, o.host.length - 1)
                .replace(/;/g, ":")),
            (o.authority = o.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
            (o.ipv6uri = !0)),
        (o.pathNames = qh(o, o.path)),
        (o.queryKey = Yh(o, o.query)),
        o
    );
}
function qh(e, t) {
    const n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (
        (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
        t.slice(-1) == "/" && r.splice(r.length - 1, 1),
        r
    );
}
function Yh(e, t) {
    const n = {};
    return (
        t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
            i && (n[i] = o);
        }),
        n
    );
}
let jf = class tn extends J {
    constructor(t, n = {}) {
        super(),
            (this.binaryType = Uh),
            (this.writeBuffer = []),
            t && typeof t == "object" && ((n = t), (t = null)),
            t
                ? ((t = As(t)),
                  (n.hostname = t.host),
                  (n.secure = t.protocol === "https" || t.protocol === "wss"),
                  (n.port = t.port),
                  t.query && (n.query = t.query))
                : n.host && (n.hostname = As(n.host).host),
            io(this, n),
            (this.secure =
                n.secure != null
                    ? n.secure
                    : typeof location < "u" && location.protocol === "https:"),
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            (this.hostname =
                n.hostname ||
                (typeof location < "u" ? location.hostname : "localhost")),
            (this.port =
                n.port ||
                (typeof location < "u" && location.port
                    ? location.port
                    : this.secure
                    ? "443"
                    : "80")),
            (this.transports = n.transports || [
                "polling",
                "websocket",
                "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
                {
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    addTrailingSlash: !0,
                    rejectUnauthorized: !0,
                    perMessageDeflate: { threshold: 1024 },
                    transportOptions: {},
                    closeOnBeforeunload: !1,
                },
                n
            )),
            (this.opts.path =
                this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "")),
            typeof this.opts.query == "string" &&
                (this.opts.query = Ih(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            typeof addEventListener == "function" &&
                (this.opts.closeOnBeforeunload &&
                    ((this.beforeunloadEventListener = () => {
                        this.transport &&
                            (this.transport.removeAllListeners(),
                            this.transport.close());
                    }),
                    addEventListener(
                        "beforeunload",
                        this.beforeunloadEventListener,
                        !1
                    )),
                this.hostname !== "localhost" &&
                    ((this.offlineEventListener = () => {
                        this.onClose("transport close", {
                            description: "network connection lost",
                        });
                    }),
                    addEventListener(
                        "offline",
                        this.offlineEventListener,
                        !1
                    ))),
            this.open();
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        (n.EIO = Lf), (n.transport = t), this.id && (n.sid = this.id);
        const r = Object.assign(
            {},
            this.opts,
            {
                query: n,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
            },
            this.opts.transportOptions[t]
        );
        return new Wh[t](r);
    }
    open() {
        let t;
        if (
            this.opts.rememberUpgrade &&
            tn.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
        )
            t = "websocket";
        else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t);
        } catch {
            this.transports.shift(), this.open();
            return;
        }
        t.open(), this.setTransport(t);
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (n) => this.onClose("transport close", n));
    }
    probe(t) {
        let n = this.createTransport(t),
            r = !1;
        tn.priorWebsocketSuccess = !1;
        const i = () => {
            r ||
                (n.send([{ type: "ping", data: "probe" }]),
                n.once("packet", (m) => {
                    if (!r)
                        if (m.type === "pong" && m.data === "probe") {
                            if (
                                ((this.upgrading = !0),
                                this.emitReserved("upgrading", n),
                                !n)
                            )
                                return;
                            (tn.priorWebsocketSuccess = n.name === "websocket"),
                                this.transport.pause(() => {
                                    r ||
                                        (this.readyState !== "closed" &&
                                            (h(),
                                            this.setTransport(n),
                                            n.send([{ type: "upgrade" }]),
                                            this.emitReserved("upgrade", n),
                                            (n = null),
                                            (this.upgrading = !1),
                                            this.flush()));
                                });
                        } else {
                            const p = new Error("probe error");
                            (p.transport = n.name),
                                this.emitReserved("upgradeError", p);
                        }
                }));
        };
        function o() {
            r || ((r = !0), h(), n.close(), (n = null));
        }
        const s = (m) => {
            const p = new Error("probe error: " + m);
            (p.transport = n.name), o(), this.emitReserved("upgradeError", p);
        };
        function l() {
            s("transport closed");
        }
        function u() {
            s("socket closed");
        }
        function a(m) {
            n && m.name !== n.name && o();
        }
        const h = () => {
            n.removeListener("open", i),
                n.removeListener("error", s),
                n.removeListener("close", l),
                this.off("close", u),
                this.off("upgrading", a);
        };
        n.once("open", i),
            n.once("error", s),
            n.once("close", l),
            this.once("close", u),
            this.once("upgrading", a),
            this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
                ? this.setTimeoutFn(() => {
                      r || n.open();
                  }, 200)
                : n.open();
    }
    onOpen() {
        if (
            ((this.readyState = "open"),
            (tn.priorWebsocketSuccess = this.transport.name === "websocket"),
            this.emitReserved("open"),
            this.flush(),
            this.readyState === "open" && this.opts.upgrade)
        ) {
            let t = 0;
            const n = this.upgrades.length;
            for (; t < n; t++) this.probe(this.upgrades[t]);
        }
    }
    onPacket(t) {
        if (
            this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing"
        )
            switch (
                (this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                this.resetPingTimeout(),
                t.type)
            ) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "ping":
                    this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                    break;
                case "error":
                    const n = new Error("server error");
                    (n.code = t.data), this.onError(n);
                    break;
                case "message":
                    this.emitReserved("data", t.data),
                        this.emitReserved("message", t.data);
                    break;
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            this.writeBuffer.length === 0
                ? this.emitReserved("drain")
                : this.flush();
    }
    flush() {
        if (
            this.readyState !== "closed" &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
        ) {
            const t = this.getWritablePackets();
            this.transport.send(t),
                (this.prevBufferLen = t.length),
                this.emitReserved("flush");
        }
    }
    getWritablePackets() {
        if (
            !(
                this.maxPayload &&
                this.transport.name === "polling" &&
                this.writeBuffer.length > 1
            )
        )
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const i = this.writeBuffer[r].data;
            if ((i && (n += Oh(i)), r > 0 && n > this.maxPayload))
                return this.writeBuffer.slice(0, r);
            n += 2;
        }
        return this.writeBuffer;
    }
    write(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    send(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    sendPacket(t, n, r, i) {
        if (
            (typeof n == "function" && ((i = n), (n = void 0)),
            typeof r == "function" && ((i = r), (r = null)),
            this.readyState === "closing" || this.readyState === "closed")
        )
            return;
        (r = r || {}), (r.compress = r.compress !== !1);
        const o = { type: t, data: n, options: r };
        this.emitReserved("packetCreate", o),
            this.writeBuffer.push(o),
            i && this.once("flush", i),
            this.flush();
    }
    close() {
        const t = () => {
                this.onClose("forced close"), this.transport.close();
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t();
            },
            r = () => {
                this.once("upgrade", n), this.once("upgradeError", n);
            };
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                ((this.readyState = "closing"),
                this.writeBuffer.length
                    ? this.once("drain", () => {
                          this.upgrading ? r() : t();
                      })
                    : this.upgrading
                    ? r()
                    : t()),
            this
        );
    }
    onError(t) {
        (tn.priorWebsocketSuccess = !1),
            this.emitReserved("error", t),
            this.onClose("transport error", t);
    }
    onClose(t, n) {
        (this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing") &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            typeof removeEventListener == "function" &&
                (removeEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, n),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
    }
    filterUpgrades(t) {
        const n = [];
        let r = 0;
        const i = t.length;
        for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n;
    }
};
jf.protocol = Lf;
function Xh(e, t = "", n) {
    let r = e;
    (n = n || (typeof location < "u" && location)),
        e == null && (e = n.protocol + "//" + n.host),
        typeof e == "string" &&
            (e.charAt(0) === "/" &&
                (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
            /^(https?|wss?):\/\//.test(e) ||
                (typeof n < "u"
                    ? (e = n.protocol + "//" + e)
                    : (e = "https://" + e)),
            (r = As(e))),
        r.port ||
            (/^(http|ws)$/.test(r.protocol)
                ? (r.port = "80")
                : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
        (r.path = r.path || "/");
    const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return (
        (r.id = r.protocol + "://" + o + ":" + r.port + t),
        (r.href =
            r.protocol +
            "://" +
            o +
            (n && n.port === r.port ? "" : ":" + r.port)),
        r
    );
}
const Gh = typeof ArrayBuffer == "function",
    Jh = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
    Df = Object.prototype.toString,
    Zh =
        typeof Blob == "function" ||
        (typeof Blob < "u" && Df.call(Blob) === "[object BlobConstructor]"),
    bh =
        typeof File == "function" ||
        (typeof File < "u" && Df.call(File) === "[object FileConstructor]");
function jl(e) {
    return (
        (Gh && (e instanceof ArrayBuffer || Jh(e))) ||
        (Zh && e instanceof Blob) ||
        (bh && e instanceof File)
    );
}
function di(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++) if (di(e[n])) return !0;
        return !1;
    }
    if (jl(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return di(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && di(e[n])) return !0;
    return !1;
}
function em(e) {
    const t = [],
        n = e.data,
        r = e;
    return (
        (r.data = Is(n, t)),
        (r.attachments = t.length),
        { packet: r, buffers: t }
    );
}
function Is(e, t) {
    if (!e) return e;
    if (jl(e)) {
        const n = { _placeholder: !0, num: t.length };
        return t.push(e), n;
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = Is(e[r], t);
        return n;
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Is(e[r], t));
        return n;
    }
    return e;
}
function tm(e, t) {
    return (e.data = js(e.data, t)), delete e.attachments, e;
}
function js(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = js(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = js(e[n], t));
    return e;
}
const nm = [
        "connect",
        "connect_error",
        "disconnect",
        "disconnecting",
        "newListener",
        "removeListener",
    ],
    rm = 5;
var j;
(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
        (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
        (e[(e.EVENT = 2)] = "EVENT"),
        (e[(e.ACK = 3)] = "ACK"),
        (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(j || (j = {}));
class im {
    constructor(t) {
        this.replacer = t;
    }
    encode(t) {
        return (t.type === j.EVENT || t.type === j.ACK) && di(t)
            ? this.encodeAsBinary({
                  type: t.type === j.EVENT ? j.BINARY_EVENT : j.BINARY_ACK,
                  nsp: t.nsp,
                  data: t.data,
                  id: t.id,
              })
            : [this.encodeAsString(t)];
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (
            (t.type === j.BINARY_EVENT || t.type === j.BINARY_ACK) &&
                (n += t.attachments + "-"),
            t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
            t.id != null && (n += t.id),
            t.data != null && (n += JSON.stringify(t.data, this.replacer)),
            n
        );
    }
    encodeAsBinary(t) {
        const n = em(t),
            r = this.encodeAsString(n.packet),
            i = n.buffers;
        return i.unshift(r), i;
    }
}
function oa(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
class Dl extends J {
    constructor(t) {
        super(), (this.reviver = t);
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error(
                    "got plaintext data when reconstructing a packet"
                );
            n = this.decodeString(t);
            const r = n.type === j.BINARY_EVENT;
            r || n.type === j.BINARY_ACK
                ? ((n.type = r ? j.EVENT : j.ACK),
                  (this.reconstructor = new om(n)),
                  n.attachments === 0 && super.emitReserved("decoded", n))
                : super.emitReserved("decoded", n);
        } else if (jl(t) || t.base64)
            if (this.reconstructor)
                (n = this.reconstructor.takeBinaryData(t)),
                    n &&
                        ((this.reconstructor = null),
                        super.emitReserved("decoded", n));
            else
                throw new Error(
                    "got binary data when not reconstructing a packet"
                );
        else throw new Error("Unknown type: " + t);
    }
    decodeString(t) {
        let n = 0;
        const r = { type: Number(t.charAt(0)) };
        if (j[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === j.BINARY_EVENT || r.type === j.BINARY_ACK) {
            const o = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; );
            const s = t.substring(o, n);
            if (s != Number(s) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(s);
        }
        if (t.charAt(n + 1) === "/") {
            const o = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); );
            r.nsp = t.substring(o, n);
        } else r.nsp = "/";
        const i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const o = n + 1;
            for (; ++n; ) {
                const s = t.charAt(n);
                if (s == null || Number(s) != s) {
                    --n;
                    break;
                }
                if (n === t.length) break;
            }
            r.id = Number(t.substring(o, n + 1));
        }
        if (t.charAt(++n)) {
            const o = this.tryParse(t.substr(n));
            if (Dl.isPayloadValid(r.type, o)) r.data = o;
            else throw new Error("invalid payload");
        }
        return r;
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver);
        } catch {
            return !1;
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case j.CONNECT:
                return oa(n);
            case j.DISCONNECT:
                return n === void 0;
            case j.CONNECT_ERROR:
                return typeof n == "string" || oa(n);
            case j.EVENT:
            case j.BINARY_EVENT:
                return (
                    Array.isArray(n) &&
                    (typeof n[0] == "number" ||
                        (typeof n[0] == "string" && nm.indexOf(n[0]) === -1))
                );
            case j.ACK:
            case j.BINARY_ACK:
                return Array.isArray(n);
        }
    }
    destroy() {
        this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
    }
}
class om {
    constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
        if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
        ) {
            const n = tm(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n;
        }
        return null;
    }
    finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
    }
}
const sm = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            Decoder: Dl,
            Encoder: im,
            get PacketType() {
                return j;
            },
            protocol: rm,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
function Qe(e, t, n) {
    return (
        e.on(t, n),
        function () {
            e.off(t, n);
        }
    );
}
const lm = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
});
class Bf extends J {
    constructor(t, n, r) {
        super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = n),
            r && r.auth && (this.auth = r.auth),
            (this._opts = Object.assign({}, r)),
            this.io._autoConnect && this.open();
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
            Qe(t, "open", this.onopen.bind(this)),
            Qe(t, "packet", this.onpacket.bind(this)),
            Qe(t, "error", this.onerror.bind(this)),
            Qe(t, "close", this.onclose.bind(this)),
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        return this.connected
            ? this
            : (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              this.io._readyState === "open" && this.onopen(),
              this);
    }
    open() {
        return this.connect();
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(t, ...n) {
        if (lm.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (
            (n.unshift(t),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        )
            return this._addToQueue(n), this;
        const r = { type: j.EVENT, data: n };
        if (
            ((r.options = {}),
            (r.options.compress = this.flags.compress !== !1),
            typeof n[n.length - 1] == "function")
        ) {
            const s = this.ids++,
                l = n.pop();
            this._registerAckCallback(s, l), (r.id = s);
        }
        const i =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        return (
            (this.flags.volatile && (!i || !this.connected)) ||
                (this.connected
                    ? (this.notifyOutgoingListeners(r), this.packet(r))
                    : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
        );
    }
    _registerAckCallback(t, n) {
        var r;
        const i =
            (r = this.flags.timeout) !== null && r !== void 0
                ? r
                : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return;
        }
        const o = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let s = 0; s < this.sendBuffer.length; s++)
                this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
            n.call(this, new Error("operation has timed out"));
        }, i);
        this.acks[t] = (...s) => {
            this.io.clearTimeoutFn(o), n.apply(this, [null, ...s]);
        };
    }
    emitWithAck(t, ...n) {
        const r =
            this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
        return new Promise((i, o) => {
            n.push((s, l) => (r ? (s ? o(s) : i(l)) : i(s))),
                this.emit(t, ...n);
        });
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
        };
        t.push((i, ...o) =>
            r !== this._queue[0]
                ? void 0
                : (i !== null
                      ? r.tryCount > this._opts.retries &&
                        (this._queue.shift(), n && n(i))
                      : (this._queue.shift(), n && n(null, ...o)),
                  (r.pending = !1),
                  this._drainQueue())
        ),
            this._queue.push(r),
            this._drainQueue();
    }
    _drainQueue(t = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const n = this._queue[0];
        (n.pending && !t) ||
            ((n.pending = !0),
            n.tryCount++,
            (this.flags = n.flags),
            this.emit.apply(this, n.args));
    }
    packet(t) {
        (t.nsp = this.nsp), this.io._packet(t);
    }
    onopen() {
        typeof this.auth == "function"
            ? this.auth((t) => {
                  this._sendConnectPacket(t);
              })
            : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(t) {
        this.packet({
            type: j.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
                : t,
        });
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
    }
    onclose(t, n) {
        (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, n);
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
                case j.CONNECT:
                    t.data && t.data.sid
                        ? this.onconnect(t.data.sid, t.data.pid)
                        : this.emitReserved(
                              "connect_error",
                              new Error(
                                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                              )
                          );
                    break;
                case j.EVENT:
                case j.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case j.ACK:
                case j.BINARY_ACK:
                    this.onack(t);
                    break;
                case j.DISCONNECT:
                    this.ondisconnect();
                    break;
                case j.CONNECT_ERROR:
                    this.destroy();
                    const r = new Error(t.data.message);
                    (r.data = t.data.data),
                        this.emitReserved("connect_error", r);
                    break;
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
            this.connected
                ? this.emitEvent(n)
                : this.receiveBuffer.push(Object.freeze(n));
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t);
        }
        super.emit.apply(this, t),
            this._pid &&
                t.length &&
                typeof t[t.length - 1] == "string" &&
                (this._lastOffset = t[t.length - 1]);
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function (...i) {
            r || ((r = !0), n.packet({ type: j.ACK, id: t, data: i }));
        };
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" &&
            (n.apply(this, t.data), delete this.acks[t.id]);
    }
    onconnect(t, n) {
        (this.id = t),
            (this.recovered = n && this._pid === n),
            (this._pid = n),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
    }
    emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
                this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
    }
    disconnect() {
        return (
            this.connected && this.packet({ type: j.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        );
    }
    close() {
        return this.disconnect();
    }
    compress(t) {
        return (this.flags.compress = t), this;
    }
    get volatile() {
        return (this.flags.volatile = !0), this;
    }
    timeout(t) {
        return (this.flags.timeout = t), this;
    }
    onAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
        );
    }
    prependAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
        );
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyListeners = [];
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
        );
    }
    prependAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
        );
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyOutgoingListeners = [];
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data);
        }
    }
}
function On(e) {
    (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
}
On.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n;
    }
    return Math.min(e, this.max) | 0;
};
On.prototype.reset = function () {
    this.attempts = 0;
};
On.prototype.setMin = function (e) {
    this.ms = e;
};
On.prototype.setMax = function (e) {
    this.max = e;
};
On.prototype.setJitter = function (e) {
    this.jitter = e;
};
class Ds extends J {
    constructor(t, n) {
        var r;
        super(),
            (this.nsps = {}),
            (this.subs = []),
            t && typeof t == "object" && ((n = t), (t = void 0)),
            (n = n || {}),
            (n.path = n.path || "/socket.io"),
            (this.opts = n),
            io(this, n),
            this.reconnection(n.reconnection !== !1),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
                (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
            ),
            (this.backoff = new On({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
            })),
            this.timeout(n.timeout == null ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
        const i = n.parser || sm;
        (this.encoder = new i.Encoder()),
            (this.decoder = new i.Decoder()),
            (this._autoConnect = n.autoConnect !== !1),
            this._autoConnect && this.open();
    }
    reconnection(t) {
        return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
    }
    reconnectionAttempts(t) {
        return t === void 0
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              (n = this.backoff) === null || n === void 0 || n.setMin(t),
              this);
    }
    randomizationFactor(t) {
        var n;
        return t === void 0
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              (n = this.backoff) === null || n === void 0 || n.setJitter(t),
              this);
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              (n = this.backoff) === null || n === void 0 || n.setMax(t),
              this);
    }
    timeout(t) {
        return arguments.length ? ((this._timeout = t), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
        !this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0 &&
            this.reconnect();
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new jf(this.uri, this.opts);
        const n = this.engine,
            r = this;
        (this._readyState = "opening"), (this.skipReconnect = !1);
        const i = Qe(n, "open", function () {
                r.onopen(), t && t();
            }),
            o = (l) => {
                this.cleanup(),
                    (this._readyState = "closed"),
                    this.emitReserved("error", l),
                    t ? t(l) : this.maybeReconnectOnOpen();
            },
            s = Qe(n, "error", o);
        if (this._timeout !== !1) {
            const l = this._timeout,
                u = this.setTimeoutFn(() => {
                    i(), o(new Error("timeout")), n.close();
                }, l);
            this.opts.autoUnref && u.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(u);
                });
        }
        return this.subs.push(i), this.subs.push(s), this;
    }
    connect(t) {
        return this.open(t);
    }
    onopen() {
        this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
            Qe(t, "ping", this.onping.bind(this)),
            Qe(t, "data", this.ondata.bind(this)),
            Qe(t, "error", this.onerror.bind(this)),
            Qe(t, "close", this.onclose.bind(this)),
            Qe(this.decoder, "decoded", this.ondecoded.bind(this))
        );
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(t) {
        try {
            this.decoder.add(t);
        } catch (n) {
            this.onclose("parse error", n);
        }
    }
    ondecoded(t) {
        Il(() => {
            this.emitReserved("packet", t);
        }, this.setTimeoutFn);
    }
    onerror(t) {
        this.emitReserved("error", t);
    }
    socket(t, n) {
        let r = this.nsps[t];
        return (
            r
                ? this._autoConnect && !r.active && r.connect()
                : ((r = new Bf(this, t, n)), (this.nsps[t] = r)),
            r
        );
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n) if (this.nsps[r].active) return;
        this._close();
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
    }
    cleanup() {
        this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
    }
    _close() {
        (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
    }
    disconnect() {
        return this._close();
    }
    onclose(t, n) {
        this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, n),
            this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect ||
                    (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                    !t.skipReconnect &&
                        t.open((i) => {
                            i
                                ? ((t._reconnecting = !1),
                                  t.reconnect(),
                                  this.emitReserved("reconnect_error", i))
                                : t.onreconnect();
                        }));
            }, n);
            this.opts.autoUnref && r.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(r);
                });
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
    }
}
const $n = {};
function pi(e, t) {
    typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
    const n = Xh(e, t.path || "/socket.io"),
        r = n.source,
        i = n.id,
        o = n.path,
        s = $n[i] && o in $n[i].nsps,
        l = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
    let u;
    return (
        l ? (u = new Ds(r, t)) : ($n[i] || ($n[i] = new Ds(r, t)), (u = $n[i])),
        n.query && !t.query && (t.query = n.queryKey),
        u.socket(n.path, t)
    );
}
Object.assign(pi, { Manager: Ds, Socket: Bf, io: pi, connect: pi });
let Ae;
function um({ topicId: e }) {
    const [t, n] = L.useState(!1),
        [r, i] = L.useState([]),
        { state: o } = L.useContext(pt);
    L.useEffect(
        () => (
            (Ae = pi(`${o.url}`)),
            Ae.on("connect", () => {
                n(!0), Ae.emit("JoinRoom", e), Ae.emit("GetDoubts", e);
            }),
            Ae.on("DoubtsData", (u) => {
                i(u);
            }),
            Ae.on("NewDoubt", (u) => {
                i((a) => [...a, u]);
            }),
            Ae.on("vote", (u, a, h) => {
                i((m) => {
                    const p = m.findIndex((v) => v._id === u);
                    return p === -1
                        ? m
                        : (document
                              .getElementById(u)
                              .classList.remove("disabled"),
                          (m[p].upvotes = a),
                          (m[p].downvotes = h),
                          [...m]);
                });
            }),
            Ae.on("error", (u) => {
                console.log(u);
            }),
            () => {
                Ae.disconnect();
            }
        ),
        [e]
    );
    function s() {
        const u = document.getElementById("ask-doubt"),
            a = u.value;
        (u.value = ""),
            a &&
                Ae.emit("CreateDoubt", {
                    description: a,
                    userName: o.userName,
                    topicId: e,
                });
    }
    function l(u, a, h) {
        const m = document.getElementById(a);
        if (m.classList.contains("disabled")) return;
        const p = u.parentElement;
        if (u.classList.contains("voted")) {
            u.classList.remove("voted"),
                Ae.emit("vote", {
                    doubtId: a,
                    topicId: e,
                    isUpvote: h,
                    previousVote: !0,
                    unVote: !0,
                });
            return;
        }
        u.classList.add("voted");
        let v;
        h ? (v = p.nextElementSibling) : (v = p.previousElementSibling);
        let y = !1;
        v.querySelector("i").classList.contains("voted") &&
            (v.querySelector("i").classList.remove("voted"), (y = !0)),
            Ae.emit("vote", {
                doubtId: a,
                topicId: e,
                isUpvote: h,
                previousVote: y,
                unVote: !1,
            }),
            m.classList.add("disabled");
    }
    return t
        ? (r.sort((u, a) => (u.upvotes > a.upvotes ? -1 : 1)),
          k.jsxs("div", {
              className: "doubt-container",
              children: [
                  k.jsx("div", {
                      className: "active-doubts",
                      children: r.map((u) =>
                          k.jsxs(
                              "div",
                              {
                                  className: "doubt",
                                  id: u._id,
                                  children: [
                                      k.jsxs("div", {
                                          className: "doubt-sidebar",
                                          children: [
                                              k.jsxs("div", {
                                                  className: "votes",
                                                  children: [
                                                      u.upvotes,
                                                      k.jsx("i", {
                                                          className:
                                                              "fa-solid fa-up-long",
                                                          onClick: (a) => {
                                                              l(
                                                                  a.target,
                                                                  u._id,
                                                                  !0
                                                              );
                                                          },
                                                      }),
                                                  ],
                                              }),
                                              k.jsxs("div", {
                                                  className: "votes",
                                                  children: [
                                                      u.downvotes,
                                                      k.jsx("i", {
                                                          className:
                                                              "fa-solid fa-down-long",
                                                          onClick: (a) => {
                                                              l(
                                                                  a.target,
                                                                  u._id,
                                                                  !1
                                                              );
                                                          },
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      k.jsx("div", {
                                          className: "doubt-content",
                                          children: u.description,
                                      }),
                                  ],
                              },
                              u._id
                          )
                      ),
                  }),
                  k.jsxs("div", {
                      className: "doubt-input",
                      children: [
                          k.jsx("input", {
                              id: "ask-doubt",
                              type: "text",
                              placeholder: "Ask Doubt",
                              onKeyDown: (u) => {
                                  u.key === "Enter" && s();
                              },
                          }),
                          k.jsx(Re, { content: "Ask", onClick: s }),
                      ],
                  }),
              ],
          }))
        : k.jsx("div", {
              className: "doubt-container",
              children: "Connecting To Room",
          });
}
function am({ roomId: e }) {
    const { state: t } = L.useContext(pt),
        [n, r] = L.useState(""),
        [i, o] = L.useState(""),
        [s, l] = L.useState("");
    L.useEffect(() => {
        async function y() {
            const _ = await (
                await fetch(`${t.url}/rooms/${e}`, {
                    method: "GET",
                    headers: { authorization: t.token },
                })
            ).json();
            if (!_.success) {
                console.log("failed to get room data");
                return;
            }
            o(_.room), l(_.room.topics[0]._id);
        }
        y();
    }, [e]);
    async function u() {
        const g = `New Topic ${i.topics.length + 1}`,
            f = await (
                await fetch(`${t.url}/topics/create`, {
                    method: "POST",
                    headers: {
                        authorization: t.token,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title: g, roomId: e }),
                })
            ).json();
        if (!f.success) {
            console.log("failed to create topic");
            return;
        }
        i.topics.push(f.topic), o((c) => ({ ...c }));
    }
    function a(y) {
        const g = y.target.parentElement.getAttribute("id");
        r(g);
    }
    async function h(y) {
        const g = y.target.parentElement.getAttribute("id"),
            _ = y.target.parentElement.children[0].value;
        if (!_) {
            r("");
            return;
        }
        const f = i.topics.findIndex((w) => w._id === g);
        if (
            !(
                await (
                    await fetch(`${t.url}/topics/update`, {
                        method: "POST",
                        headers: {
                            authorization: t.token,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ topicId: g, newTitle: _ }),
                    })
                ).json()
            ).success
        ) {
            console.log("failed to update topic name");
            return;
        }
        (i.topics[f].title = _), r(""), o((w) => ({ ...w }));
    }
    function m(y) {
        const g = y.target.querySelector("i");
        g && g.classList.remove("invisible");
    }
    function p(y) {
        const g = y.target.querySelector("i");
        g && g.classList.add("invisible");
    }
    function v() {
        A.success("Copied To Clipboard", { theme: "dark", autoClose: 1500 });
    }
    return i
        ? k.jsxs("div", {
              id: i._id,
              className: "room-container",
              children: [
                  k.jsx(
                      "div",
                      { className: "room-title", children: i.title },
                      i._id
                  ),
                  k.jsx(ir, { alignment: "horizontal" }),
                  k.jsxs("div", {
                      className: "bar",
                      children: [
                          k.jsxs("div", {
                              className: "topics-container",
                              children: [
                                  i.topics.map((y) => {
                                      let g = "";
                                      return (
                                          s === y._id && (g = "active-tab"),
                                          n !== y._id
                                              ? k.jsxs(
                                                    "div",
                                                    {
                                                        className: `topic-tab ${g}`,
                                                        id: y._id,
                                                        onClick: () => {
                                                            l(y._id);
                                                        },
                                                        onMouseEnter: m,
                                                        onMouseLeave: p,
                                                        children: [
                                                            k.jsx("div", {
                                                                className:
                                                                    "topic-name",
                                                                children:
                                                                    y.title,
                                                            }),
                                                            k.jsx("i", {
                                                                className:
                                                                    "fa-solid fa-pencil invisible",
                                                                onClick: a,
                                                            }),
                                                        ],
                                                    },
                                                    y._id
                                                )
                                              : k.jsxs(k.Fragment, {
                                                    children: [
                                                        k.jsxs(
                                                            "div",
                                                            {
                                                                className: `topic-tab ${g}`,
                                                                id: y._id,
                                                                children: [
                                                                    k.jsx(
                                                                        "input",
                                                                        {
                                                                            className:
                                                                                "edit-topic-name",
                                                                            placeholder:
                                                                                y.title,
                                                                            type: "text",
                                                                            autoFocus:
                                                                                !0,
                                                                        }
                                                                    ),
                                                                    k.jsx("i", {
                                                                        className:
                                                                            "fa-solid fa-check",
                                                                        onClick:
                                                                            h,
                                                                    }),
                                                                ],
                                                            },
                                                            y._id
                                                        ),
                                                        k.jsx(ir, {
                                                            alignment:
                                                                "vertical",
                                                        }),
                                                    ],
                                                })
                                      );
                                  }),
                                  k.jsx(Re, { content: "Add", onClick: u }),
                              ],
                          }),
                          k.jsx(Re, {
                              content: "Share Room Id",
                              onClick: v,
                              className: "share-room",
                          }),
                      ],
                  }),
                  k.jsx(ir, { alignment: "horizontal" }),
                  k.jsx(um, { topicId: s }),
              ],
          })
        : k.jsx("div", {
              className: "room-container",
              children: k.jsx("div", { children: "Loading..." }),
          });
}
function cm() {
    const { state: e } = L.useContext(pt);
    return e.activeRoom
        ? k.jsx("div", {
              className: "main-section",
              children: k.jsx(am, { roomId: e.activeRoom }),
          })
        : k.jsx("div", { className: "main-section", children: k.jsx(_f, {}) });
}
function fm() {
    const [e, t] = L.useState(!1),
        { state: n, setState: r } = L.useContext(pt);
    function i() {
        t(!e);
    }
    async function o() {
        const l = document.getElementById("userName").value,
            u = document.getElementById("email").value,
            a = document.getElementById("password").value,
            h = { userName: l, email: u, password: a },
            p = await (
                await fetch(`${n.url}/users/signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(h),
                })
            ).json();
        p.success
            ? (t(!e),
              A.success("Account Created Successfully", {
                  theme: "dark",
                  autoClose: 1500,
              }))
            : A.error(p.message, { theme: "dark", autoClose: 1500 });
    }
    async function s() {
        const l = document.getElementById("userId").value,
            u = document.getElementById("password").value,
            a = { userId: l, password: u },
            h = `${n.url}/users/signin`,
            p = await (
                await fetch(h, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(a),
                })
            ).json();
        p.success
            ? ((window.localStorage.doubtsAppToken = p.token),
              A.success("Login Successful", { theme: "dark", autoClose: 1500 }),
              r((v) => ({
                  ...v,
                  token: p.token,
                  userName: p.userName,
                  userId: p.userId,
                  rooms: p.rooms,
              })))
            : A.error(p.message, { theme: "dark", autoClose: 1500 });
    }
    return e
        ? k.jsxs("div", {
              className: "userComponent",
              children: [
                  k.jsx("div", { className: "title", children: "Sign Up" }),
                  k.jsx("input", {
                      type: "text",
                      placeholder: "Username",
                      id: "userName",
                  }),
                  k.jsx("input", {
                      type: "text",
                      placeholder: "Email",
                      id: "email",
                  }),
                  k.jsx("input", {
                      type: "password",
                      placeholder: "Password",
                      id: "password",
                  }),
                  k.jsxs("div", {
                      className: "controls",
                      children: [
                          k.jsx(Re, { content: "Create Account", onClick: o }),
                          k.jsx(Re, { content: "Sign In", onClick: i }),
                      ],
                  }),
              ],
          })
        : k.jsxs("div", {
              className: "userComponent",
              children: [
                  k.jsx("div", { className: "title", children: "Sign In" }),
                  k.jsx("input", {
                      type: "text",
                      placeholder: "Email Or Username",
                      id: "userId",
                  }),
                  k.jsx("input", {
                      type: "password",
                      placeholder: "Password",
                      id: "password",
                  }),
                  k.jsxs("div", {
                      className: "controls",
                      children: [
                          k.jsx(Re, { content: "Log In", onClick: s }),
                          k.jsx(Re, { content: "Sign Up", onClick: i }),
                      ],
                  }),
              ],
          });
}
const pt = L.createContext();
function dm() {
    const [e, t] = L.useState({
            url: "https://iusecookies64.xyz",
            rooms: [],
            activeRoom: null,
            token: window.localStorage.doubtsAppToken,
            userName: "",
            toast: A,
        }),
        [n, r] = L.useState(window.innerWidth);
    window.addEventListener("resize", () => {
        r(window.innerWidth);
    });
    function i() {
        (window.localStorage.doubtsAppToken = ""),
            t((s) => ({
                ...s,
                token: window.localStorage.doubtsAppToken,
                userName: "",
                activeRoom: "",
            })),
            A.success("Logged Out");
    }
    async function o() {
        const l = await (
            await fetch(`${e.url}/rooms/user-rooms`, {
                method: "GET",
                headers: { authorization: e.token },
            })
        ).json();
        l.success
            ? t((u) => ({ ...u, rooms: l.rooms, userName: l.userName }))
            : ((window.localStorage.doubtsAppToken = ""),
              t((u) => ({ ...u, token: window.localStorage.doubtsAppToken })));
    }
    return (
        L.useEffect(() => {
            e.token && o();
        }, []),
        e.token
            ? k.jsxs(pt.Provider, {
                  value: { state: e, setState: t },
                  children: [
                      k.jsxs("div", {
                          className: "app",
                          children: [
                              k.jsxs("div", {
                                  className: "user-details",
                                  children: [
                                      n > 700
                                          ? k.jsxs("div", {
                                                className: "user-name",
                                                children: [
                                                    "Hello, ",
                                                    e.userName,
                                                ],
                                            })
                                          : null,
                                      k.jsx(Re, {
                                          content: "Logout",
                                          onClick: i,
                                      }),
                                  ],
                              }),
                              k.jsx(gh, {
                                  rooms: e.rooms,
                                  userName: e.userName,
                                  activeRoom: e.activeRoom,
                                  width: n,
                              }),
                              k.jsx(cm, {}),
                          ],
                      }),
                      k.jsx(Mi, { containerId: "a" }),
                  ],
              })
            : k.jsxs(pt.Provider, {
                  value: { state: e, setState: t },
                  children: [
                      k.jsx("div", {
                          className: "app",
                          children: k.jsx(fm, {}),
                      }),
                      k.jsx(Mi, {
                          position: "top-right",
                          autoClose: 2e3,
                          hideProgressBar: !1,
                          newestOnTop: !1,
                          closeOnClick: !0,
                          rtl: !1,
                          pauseOnFocusLoss: !0,
                          draggable: !0,
                          pauseOnHover: !0,
                          theme: "dark",
                      }),
                  ],
              })
    );
}
Mo.createRoot(document.getElementById("root")).render(
    k.jsx(F.StrictMode, { children: k.jsx(dm, {}) })
);
