!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var n = t || window.event
            , a = [].slice.call(arguments, 1)
            , r = 0
            , l = 0
            , s = 0
            , c = 0
            , c = 0;
        t = e.event.fix(n),
            t.type = "mousewheel",
        n.wheelDelta && (r = n.wheelDelta),
        n.detail && (r = -1 * n.detail),
        n.deltaY && (r = s = -1 * n.deltaY),
        n.deltaX && (l = n.deltaX,
            r = -1 * l),
        void 0 !== n.wheelDeltaY && (s = n.wheelDeltaY),
        void 0 !== n.wheelDeltaX && (l = -1 * n.wheelDeltaX),
            c = Math.abs(r),
        (!i || c < i) && (i = c),
            c = Math.max(Math.abs(s), Math.abs(l)),
        (!o || c < o) && (o = c),
            n = 0 < r ? "floor" : "ceil",
            r = Math[n](r / i),
            l = Math[n](l / o),
            s = Math[n](s / o);
        try {
            t.originalEvent.hasOwnProperty("wheelDelta")
        } catch (d) {
            s = r
        }
        return a.unshift(t, r, l, s),
            (e.event.dispatch || e.event.handle).apply(this, a)
    }
    var i, o, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (e.event.fixHooks)
        for (var r = n.length; r; )
            e.event.fixHooks[n[--r]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = a.length; e; )
                    this.addEventListener(a[--e], t, !1);
            else
                this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = a.length; e; )
                    this.removeEventListener(a[--e], t, !1);
            else
                this.onmousewheel = null
        }
    },
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
}),
    function(e, t, i, o) {
        var n = i("html")
            , a = i(e)
            , r = i(t)
            , l = i.fancybox = function() {
            l.open.apply(this, arguments)
        }
            , s = navigator.userAgent.match(/msie/i)
            , c = null
            , d = t.createTouch !== o
            , h = function(e) {
            return e && e.hasOwnProperty && e instanceof i
        }
            , p = function(e) {
            return e && "string" === i.type(e)
        }
            , f = function(e) {
            return p(e) && 0 < e.indexOf("%")
        }
            , u = function(e, t) {
            var i = parseInt(e, 10) || 0;
            return t && f(e) && (i *= l.getViewport()[t] / 100),
                Math.ceil(i)
        }
            , g = function(e, t) {
            return u(e, t) + "px"
        };
        i.extend(l, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !d,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                if (e && (i.isPlainObject(t) || (t = {}),
                    !1 !== l.close(!0)))
                    return i.isArray(e) || (e = h(e) ? i(e).get() : [e]),
                        i.each(e, function(n, a) {
                            var r, s, c, d, f, u = {};
                            "object" === i.type(a) && (a.nodeType && (a = i(a)),
                                h(a) ? (u = {
                                    href: a.data("fancybox-href") || a.attr("href"),
                                    title: i("<div/>").text(a.data("fancybox-title") || a.attr("title")).html(),
                                    isDom: !0,
                                    element: a
                                },
                                i.metadata && i.extend(!0, u, a.metadata())) : u = a),
                                r = t.href || u.href || (p(a) ? a : null),
                                s = t.title !== o ? t.title : u.title || "",
                                d = (c = t.content || u.content) ? "html" : t.type || u.type,
                            !d && u.isDom && (d = a.data("fancybox-type"),
                            d || (d = (d = a.prop("class").match(/fancybox\.(\w+)/)) ? d[1] : null)),
                            p(r) && (d || (l.isImage(r) ? d = "image" : l.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : p(a) && (d = "html",
                                c = a)),
                            "ajax" === d && (f = r.split(/\s+/, 2),
                                r = f.shift(),
                                f = f.shift())),
                            c || ("inline" === d ? r ? c = i(p(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : u.isDom && (c = a) : "html" === d ? c = r : d || r || !u.isDom || (d = "inline",
                                c = a)),
                                i.extend(u, {
                                    href: r,
                                    type: d,
                                    content: c,
                                    title: s,
                                    selector: f
                                }),
                                e[n] = u
                        }),
                        l.opts = i.extend(!0, {}, l.defaults, t),
                    t.keys !== o && (l.opts.keys = !!t.keys && i.extend({}, l.defaults.keys, t.keys)),
                        l.group = e,
                        l._start(l.opts.index)
            },
            cancel: function() {
                var e = l.coming;
                e && !1 === l.trigger("onCancel") || (l.hideLoading(),
                e && (l.ajaxLoad && l.ajaxLoad.abort(),
                    l.ajaxLoad = null,
                l.imgPreload && (l.imgPreload.onload = l.imgPreload.onerror = null),
                e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
                    l.coming = null,
                l.current || l._afterZoomOut(e)))
            },
            close: function(e) {
                l.cancel(),
                !1 !== l.trigger("beforeClose") && (l.unbindEvents(),
                l.isActive && (l.isOpen && !0 !== e ? (l.isOpen = l.isOpened = !1,
                    l.isClosing = !0,
                    i(".fancybox-item, .fancybox-nav").remove(),
                    l.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                    l.transitions[l.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                    l._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                    clearTimeout(l.player.timer)
                }
                    , i = function() {
                    t(),
                    l.current && l.player.isActive && (l.player.timer = setTimeout(l.next, l.current.playSpeed))
                }
                    , o = function() {
                    t(),
                        r.unbind(".player"),
                        l.player.isActive = !1,
                        l.trigger("onPlayEnd")
                };
                !0 === e || !l.player.isActive && !1 !== e ? l.current && (l.current.loop || l.current.index < l.group.length - 1) && (l.player.isActive = !0,
                    r.bind({
                        "onCancel.player beforeClose.player": o,
                        "onUpdate.player": i,
                        "beforeLoad.player": t
                    }),
                    i(),
                    l.trigger("onPlayStart")) : o()
            },
            next: function(e) {
                var t = l.current;
                t && (p(e) || (e = t.direction.next),
                    l.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = l.current;
                t && (p(e) || (e = t.direction.prev),
                    l.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, i) {
                var n = l.current;
                n && (e = u(e),
                    l.direction = t || n.direction[e >= n.index ? "next" : "prev"],
                    l.router = i || "jumpto",
                n.loop && (0 > e && (e = n.group.length + e % n.group.length),
                    e %= n.group.length),
                n.group[e] !== o && (l.cancel(),
                    l._start(e)))
            },
            reposition: function(e, t) {
                var o, n = l.current, a = n ? n.wrap : null;
                a && (o = l._getPosition(t),
                    e && "scroll" === e.type ? (delete o.position,
                        a.stop(!0, !0).animate(o, 200)) : (a.css(o),
                        n.pos = i.extend({}, n.dim, o)))
            },
            update: function(e) {
                var t = e && e.originalEvent && e.originalEvent.type
                    , i = !t || "orientationchange" === t;
                i && (clearTimeout(c),
                    c = null),
                l.isOpen && !c && (c = setTimeout(function() {
                    var o = l.current;
                    o && !l.isClosing && (l.wrap.removeClass("fancybox-tmp"),
                    (i || "load" === t || "resize" === t && o.autoResize) && l._setDimension(),
                    "scroll" === t && o.canShrink || l.reposition(e),
                        l.trigger("onUpdate"),
                        c = null)
                }, i && !d ? 0 : 300))
            },
            toggle: function(e) {
                l.isOpen && (l.current.fitToView = "boolean" === i.type(e) ? e : !l.current.fitToView,
                d && (l.wrap.removeAttr("style").addClass("fancybox-tmp"),
                    l.trigger("onUpdate")),
                    l.update())
            },
            hideLoading: function() {
                r.unbind(".loading"),
                    i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                l.hideLoading(),
                    e = i('<div id="fancybox-loading"><div></div></div>').click(l.cancel).appendTo("body"),
                    r.bind("keydown.loading", function(e) {
                        27 === (e.which || e.keyCode) && (e.preventDefault(),
                            l.cancel())
                    }),
                l.defaults.fixed || (t = l.getViewport(),
                    e.css({
                        position: "absolute",
                        top: .5 * t.h + t.y,
                        left: .5 * t.w + t.x
                    })),
                    l.trigger("onLoading")
            },
            getViewport: function() {
                var t = l.current && l.current.locked || !1
                    , i = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                };
                return t && t.length ? (i.w = t[0].clientWidth,
                    i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : a.width(),
                    i.h = d && e.innerHeight ? e.innerHeight : a.height()),
                    i
            },
            unbindEvents: function() {
                l.wrap && h(l.wrap) && l.wrap.unbind(".fb"),
                    r.unbind(".fb"),
                    a.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = l.current;
                t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), l.update),
                (e = t.keys) && r.bind("keydown.fb", function(n) {
                    var a = n.which || n.keyCode
                        , r = n.target || n.srcElement;
                    return (27 !== a || !l.coming) && void (n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || r && (r.type || i(r).is("[contenteditable]")) || i.each(e, function(e, r) {
                        return 1 < t.group.length && r[a] !== o ? (l[e](r[a]),
                            n.preventDefault(),
                            !1) : -1 < i.inArray(a, r) ? (l[e](),
                            n.preventDefault(),
                            !1) : void 0
                    }))
                }),
                i.fn.mousewheel && t.mouseWheel && l.wrap.bind("mousewheel.fb", function(e, o, n, a) {
                    for (var r = i(e.target || null), s = !1; r.length && !(s || r.is(".fancybox-skin") || r.is(".fancybox-wrap")); )
                        s = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight),
                            r = i(r).parent();
                    0 !== o && !s && 1 < l.group.length && !t.canShrink && (0 < a || 0 < n ? l.prev(0 < a ? "down" : "left") : (0 > a || 0 > n) && l.next(0 > a ? "up" : "right"),
                        e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var o, n = t || l.coming || l.current;
                if (n) {
                    if (i.isFunction(n[e]) && (o = n[e].apply(n, Array.prototype.slice.call(arguments, 1))),
                        !1 === o)
                        return !1;
                    n.helpers && i.each(n.helpers, function(t, o) {
                        o && l.helpers[t] && i.isFunction(l.helpers[t][e]) && l.helpers[t][e](i.extend(!0, {}, l.helpers[t].defaults, o), n)
                    })
                }
                r.trigger(e)
            },
            isImage: function(e) {
                return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, o, n = {};
                if (e = u(e),
                        t = l.group[e] || null,
                        !t)
                    return !1;
                if (n = i.extend(!0, {}, l.opts, t),
                        t = n.margin,
                        o = n.padding,
                    "number" === i.type(t) && (n.margin = [t, t, t, t]),
                    "number" === i.type(o) && (n.padding = [o, o, o, o]),
                    n.modal && i.extend(!0, n, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }),
                    n.autoSize && (n.autoWidth = n.autoHeight = !0),
                    "auto" === n.width && (n.autoWidth = !0),
                    "auto" === n.height && (n.autoHeight = !0),
                        n.group = l.group,
                        n.index = e,
                        l.coming = n,
                    !1 === l.trigger("beforeLoad"))
                    l.coming = null;
                else {
                    if (o = n.type,
                            t = n.href,
                            !o)
                        return l.coming = null,
                        !(!l.current || !l.router || "jumpto" === l.router) && (l.current.index = e,
                            l[l.router](l.direction));
                    if (l.isActive = !0,
                        "image" !== o && "swf" !== o || (n.autoHeight = n.autoWidth = !1,
                            n.scrolling = "visible"),
                        "image" === o && (n.aspectRatio = !0),
                        "iframe" === o && d && (n.scrolling = "scroll"),
                            n.wrap = i(n.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + n.wrapCSS).appendTo(n.parent || "body"),
                            i.extend(n, {
                                skin: i(".fancybox-skin", n.wrap),
                                outer: i(".fancybox-outer", n.wrap),
                                inner: i(".fancybox-inner", n.wrap)
                            }),
                            i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                                n.skin.css("padding" + t, g(n.padding[e]))
                            }),
                            l.trigger("onReady"),
                        "inline" === o || "html" === o) {
                        if (!n.content || !n.content.length)
                            return l._error("content")
                    } else if (!t)
                        return l._error("href");
                    "image" === o ? l._loadImage() : "ajax" === o ? l._loadAjax() : "iframe" === o ? l._loadIframe() : l._afterLoad()
                }
            },
            _error: function(e) {
                i.extend(l.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: l.coming.tpl.error
                }),
                    l._afterLoad()
            },
            _loadImage: function() {
                var e = l.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null,
                        l.coming.width = this.width / l.opts.pixelRatio,
                        l.coming.height = this.height / l.opts.pixelRatio,
                        l._afterLoad()
                }
                    ,
                    e.onerror = function() {
                        this.onload = this.onerror = null,
                            l._error("image")
                    }
                    ,
                    e.src = l.coming.href,
                !0 !== e.complete && l.showLoading()
            },
            _loadAjax: function() {
                var e = l.coming;
                l.showLoading(),
                    l.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                        url: e.href,
                        error: function(e, t) {
                            l.coming && "abort" !== t ? l._error("ajax", e) : l.hideLoading()
                        },
                        success: function(t, i) {
                            "success" === i && (e.content = t,
                                l._afterLoad())
                        }
                    }))
            },
            _loadIframe: function() {
                var e = l.coming
                    , t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
                i(e.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }),
                e.iframe.preload && (l.showLoading(),
                    t.one("load", function() {
                        i(this).data("ready", 1),
                        d || i(this).bind("load.fb", l.update),
                            i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),
                            l._afterLoad()
                    })),
                    e.content = t.appendTo(e.inner),
                e.iframe.preload || l._afterLoad()
            },
            _preloadImages: function() {
                var e, t, i = l.group, o = l.current, n = i.length, a = o.preload ? Math.min(o.preload, n - 1) : 0;
                for (t = 1; t <= a; t += 1)
                    e = i[(o.index + t) % n],
                    "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, o, n, a, r = l.coming, s = l.current;
                if (l.hideLoading(),
                    r && !1 !== l.isActive)
                    if (!1 === l.trigger("afterLoad", r, s))
                        r.wrap.stop(!0).trigger("onReset").remove(),
                            l.coming = null;
                    else {
                        switch (s && (l.trigger("beforeChange", s),
                            s.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),
                            l.unbindEvents(),
                            e = r.content,
                            t = r.type,
                            o = r.scrolling,
                            i.extend(l, {
                                wrap: r.wrap,
                                skin: r.skin,
                                outer: r.outer,
                                inner: r.inner,
                                current: r,
                                previous: s
                            }),
                            n = r.href,
                            t) {
                            case "inline":
                            case "ajax":
                            case "html":
                                r.selector ? e = i("<div>").html(e).find(r.selector) : h(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),
                                    e = e.show().detach(),
                                    r.wrap.bind("onReset", function() {
                                        i(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                    }));
                                break;
                            case "image":
                                e = r.tpl.image.replace(/\{href\}/g, n);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>',
                                    a = "",
                                    i.each(r.swf, function(t, i) {
                                        e += '<param name="' + t + '" value="' + i + '"></param>',
                                            a += " " + t + '="' + i + '"'
                                    }),
                                    e += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                        }
                        h(e) && e.parent().is(r.inner) || r.inner.append(e),
                            l.trigger("beforeShow"),
                            r.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o),
                            l._setDimension(),
                            l.reposition(),
                            l.isOpen = !1,
                            l.coming = null,
                            l.bindEvents(),
                            l.isOpened ? s.prevMethod && l.transitions[s.prevMethod]() : i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(),
                            l.transitions[l.isOpened ? r.nextMethod : r.openMethod](),
                            l._preloadImages()
                    }
            },
            _setDimension: function() {
                var e, t, o, n, a, r, s, c, d, h = l.getViewport(), p = 0, m = !1, y = !1, m = l.wrap, w = l.skin, v = l.inner, b = l.current, y = b.width, x = b.height, k = b.minWidth, C = b.minHeight, M = b.maxWidth, S = b.maxHeight, O = b.scrolling, j = b.scrollOutside ? b.scrollbarWidth : 0, P = b.margin, T = u(P[1] + P[3]), _ = u(P[0] + P[2]);
                if (m.add(w).add(v).width("auto").height("auto").removeClass("fancybox-tmp"),
                        P = u(w.outerWidth(!0) - w.width()),
                        e = u(w.outerHeight(!0) - w.height()),
                        t = T + P,
                        o = _ + e,
                        n = f(y) ? (h.w - t) * u(y) / 100 : y,
                        a = f(x) ? (h.h - o) * u(x) / 100 : x,
                    "iframe" === b.type) {
                    if (d = b.content,
                        b.autoHeight && 1 === d.data("ready"))
                        try {
                            d[0].contentWindow.document.location && (v.width(n).height(9999),
                                r = d.contents().find("body"),
                            j && r.css("overflow-x", "hidden"),
                                a = r.outerHeight(!0))
                        } catch (E) {}
                } else
                    (b.autoWidth || b.autoHeight) && (v.addClass("fancybox-tmp"),
                    b.autoWidth || v.width(n),
                    b.autoHeight || v.height(a),
                    b.autoWidth && (n = v.width()),
                    b.autoHeight && (a = v.height()),
                        v.removeClass("fancybox-tmp"));
                if (y = u(n),
                        x = u(a),
                        c = n / a,
                        k = u(f(k) ? u(k, "w") - t : k),
                        M = u(f(M) ? u(M, "w") - t : M),
                        C = u(f(C) ? u(C, "h") - o : C),
                        S = u(f(S) ? u(S, "h") - o : S),
                        r = M,
                        s = S,
                    b.fitToView && (M = Math.min(h.w - t, M),
                        S = Math.min(h.h - o, S)),
                        t = h.w - T,
                        _ = h.h - _,
                        b.aspectRatio ? (y > M && (y = M,
                            x = u(y / c)),
                        x > S && (x = S,
                            y = u(x * c)),
                        y < k && (y = k,
                            x = u(y / c)),
                        x < C && (x = C,
                            y = u(x * c))) : (y = Math.max(k, Math.min(y, M)),
                        b.autoHeight && "iframe" !== b.type && (v.width(y),
                            x = v.height()),
                            x = Math.max(C, Math.min(x, S))),
                        b.fitToView)
                    if (v.width(y).height(x),
                            m.width(y + P),
                            h = m.width(),
                            T = m.height(),
                            b.aspectRatio)
                        for (; (h > t || T > _) && y > k && x > C && !(19 < p++); )
                            x = Math.max(C, Math.min(S, x - 10)),
                                y = u(x * c),
                            y < k && (y = k,
                                x = u(y / c)),
                            y > M && (y = M,
                                x = u(y / c)),
                                v.width(y).height(x),
                                m.width(y + P),
                                h = m.width(),
                                T = m.height();
                    else
                        y = Math.max(k, Math.min(y, y - (h - t))),
                            x = Math.max(C, Math.min(x, x - (T - _)));
                j && "auto" === O && x < a && y + P + j < t && (y += j),
                    v.width(y).height(x),
                    m.width(y + P),
                    h = m.width(),
                    T = m.height(),
                    m = (h > t || T > _) && y > k && x > C,
                    y = b.aspectRatio ? y < r && x < s && y < n && x < a : (y < r || x < s) && (y < n || x < a),
                    i.extend(b, {
                        dim: {
                            width: g(h),
                            height: g(T)
                        },
                        origWidth: n,
                        origHeight: a,
                        canShrink: m,
                        canExpand: y,
                        wPadding: P,
                        hPadding: e,
                        wrapSpace: T - w.outerHeight(!0),
                        skinSpace: w.height() - x
                    }),
                !d && b.autoHeight && x > C && x < S && !y && v.height("auto")
            },
            _getPosition: function(e) {
                var t = l.current
                    , i = l.getViewport()
                    , o = t.margin
                    , n = l.wrap.width() + o[1] + o[3]
                    , a = l.wrap.height() + o[0] + o[2]
                    , o = {
                    position: "absolute",
                    top: o[0],
                    left: o[3]
                };
                return t.autoCenter && t.fixed && !e && a <= i.h && n <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y,
                    o.left += i.x),
                    o.top = g(Math.max(o.top, o.top + (i.h - a) * t.topRatio)),
                    o.left = g(Math.max(o.left, o.left + (i.w - n) * t.leftRatio)),
                    o
            },
            _afterZoomIn: function() {
                var e = l.current;
                e && (l.isOpen = l.isOpened = !0,
                    l.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                    l.update(),
                (e.closeClick || e.nextClick && 1 < l.group.length) && l.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(),
                        l[e.closeClick ? "close" : "next"]())
                }),
                e.closeBtn && i(e.tpl.closeBtn).appendTo(l.skin).bind("click.fb", function(e) {
                    e.preventDefault(),
                        l.close()
                }),
                e.arrows && 1 < l.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(l.outer).bind("click.fb", l.prev),
                (e.loop || e.index < l.group.length - 1) && i(e.tpl.next).appendTo(l.outer).bind("click.fb", l.next)),
                    l.trigger("afterShow"),
                    e.loop || e.index !== e.group.length - 1 ? l.opts.autoPlay && !l.player.isActive && (l.opts.autoPlay = !1,
                        l.play(!0)) : l.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || l.current,
                    i(".fancybox-wrap").trigger("onReset").remove(),
                    i.extend(l, {
                        group: {},
                        opts: {},
                        router: !1,
                        current: null,
                        isActive: !1,
                        isOpened: !1,
                        isOpen: !1,
                        isClosing: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    }),
                    l.trigger("afterClose", e)
            }
        }),
            l.transitions = {
                getOrigPosition: function() {
                    var e = l.current
                        , t = e.element
                        , i = e.orig
                        , o = {}
                        , n = 50
                        , a = 50
                        , r = e.hPadding
                        , s = e.wPadding
                        , c = l.getViewport();
                    return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"),
                    i.length || (i = t)),
                        h(i) ? (o = i.offset(),
                        i.is("img") && (n = i.outerWidth(),
                            a = i.outerHeight())) : (o.top = c.y + (c.h - a) * e.topRatio,
                            o.left = c.x + (c.w - n) * e.leftRatio),
                    ("fixed" === l.wrap.css("position") || e.locked) && (o.top -= c.y,
                        o.left -= c.x),
                        o = {
                            top: g(o.top - r * e.topRatio),
                            left: g(o.left - s * e.leftRatio),
                            width: g(n + s),
                            height: g(a + r)
                        }
                },
                step: function(e, t) {
                    var i, o, n = t.prop;
                    o = l.current;
                    var a = o.wrapSpace
                        , r = o.skinSpace;
                    "width" !== n && "height" !== n || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start),
                    l.isClosing && (i = 1 - i),
                        o = "width" === n ? o.wPadding : o.hPadding,
                        o = e - o,
                        l.skin[n](u("width" === n ? o : o - a * i)),
                        l.inner[n](u("width" === n ? o : o - a * i - r * i)))
                },
                zoomIn: function() {
                    var e = l.current
                        , t = e.pos
                        , o = e.openEffect
                        , n = "elastic" === o
                        , a = i.extend({
                        opacity: 1
                    }, t);
                    delete a.position,
                        n ? (t = this.getOrigPosition(),
                        e.openOpacity && (t.opacity = .1)) : "fade" === o && (t.opacity = .1),
                        l.wrap.css(t).animate(a, {
                            duration: "none" === o ? 0 : e.openSpeed,
                            easing: e.openEasing,
                            step: n ? this.step : null,
                            complete: l._afterZoomIn
                        })
                },
                zoomOut: function() {
                    var e = l.current
                        , t = e.closeEffect
                        , i = "elastic" === t
                        , o = {
                        opacity: .1
                    };
                    i && (o = this.getOrigPosition(),
                    e.closeOpacity && (o.opacity = .1)),
                        l.wrap.animate(o, {
                            duration: "none" === t ? 0 : e.closeSpeed,
                            easing: e.closeEasing,
                            step: i ? this.step : null,
                            complete: l._afterZoomOut
                        })
                },
                changeIn: function() {
                    var e, t = l.current, i = t.nextEffect, o = t.pos, n = {
                        opacity: 1
                    }, a = l.direction;
                    o.opacity = .1,
                    "elastic" === i && (e = "down" === a || "up" === a ? "top" : "left",
                        "down" === a || "right" === a ? (o[e] = g(u(o[e]) - 200),
                            n[e] = "+=200px") : (o[e] = g(u(o[e]) + 200),
                            n[e] = "-=200px")),
                        "none" === i ? l._afterZoomIn() : l.wrap.css(o).animate(n, {
                            duration: t.nextSpeed,
                            easing: t.nextEasing,
                            complete: l._afterZoomIn
                        })
                },
                changeOut: function() {
                    var e = l.previous
                        , t = e.prevEffect
                        , o = {
                        opacity: .1
                    }
                        , n = l.direction;
                    "elastic" === t && (o["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"),
                        e.wrap.animate(o, {
                            duration: "none" === t ? 0 : e.prevSpeed,
                            easing: e.prevEasing,
                            complete: function() {
                                i(this).trigger("onReset").remove()
                            }
                        })
                }
            },
            l.helpers.overlay = {
                defaults: {
                    closeClick: !0,
                    speedOut: 200,
                    showEarly: !0,
                    css: {},
                    locked: !d,
                    fixed: !0
                },
                overlay: null,
                fixed: !1,
                el: i("html"),
                create: function(e) {
                    var t;
                    e = i.extend({}, this.defaults, e),
                    this.overlay && this.close(),
                        t = l.coming ? l.coming.parent : e.parent,
                        this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(t && t.lenth ? t : "body"),
                        this.fixed = !1,
                    e.fixed && l.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
                        this.fixed = !0)
                },
                open: function(e) {
                    var t = this;
                    e = i.extend({}, this.defaults, e),
                        this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e),
                    this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)),
                        this.update()),
                    e.closeClick && this.overlay.bind("click.overlay", function(e) {
                        if (i(e.target).hasClass("fancybox-overlay"))
                            return l.isActive ? l.close() : t.close(),
                                !1
                    }),
                        this.overlay.css(e.css).show()
                },
                close: function() {
                    a.unbind("resize.overlay"),
                    this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"),
                        this.el.removeClass("fancybox-lock"),
                        a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
                        i(".fancybox-overlay").remove().hide(),
                        i.extend(this, {
                            overlay: null,
                            fixed: !1
                        })
                },
                update: function() {
                    var e, i = "100%";
                    this.overlay.width(i).height("100%"),
                        s ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth),
                        r.width() > e && (i = r.width())) : r.width() > a.width() && (i = r.width()),
                        this.overlay.width(i).height(r.height())
                },
                onReady: function(e, t) {
                    var o = this.overlay;
                    i(".fancybox-overlay").stop(!0, !0),
                    o || this.create(e),
                    e.locked && this.fixed && t.fixed && (t.locked = this.overlay.append(t.wrap),
                        t.fixed = !1),
                    !0 === e.showEarly && this.beforeShow.apply(this, arguments)
                },
                beforeShow: function(e, t) {
                    t.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && i("*").filter(function() {
                        return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin"),
                        this.el.addClass("fancybox-margin"),
                        this.scrollV = a.scrollTop(),
                        this.scrollH = a.scrollLeft(),
                        this.el.addClass("fancybox-lock"),
                        a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
                        this.open(e)
                },
                onUpdate: function() {
                    this.fixed || this.update()
                },
                afterClose: function(e) {
                    this.overlay && !l.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
                }
            },
            l.helpers.title = {
                defaults: {
                    type: "float",
                    position: "bottom"
                },
                beforeShow: function(e) {
                    var t = l.current
                        , o = t.title
                        , n = e.type;
                    if (i.isFunction(o) && (o = o.call(t.element, t)),
                        p(o) && "" !== i.trim(o)) {
                        switch (t = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + o + "</div>"),
                            n) {
                            case "inside":
                                n = l.skin;
                                break;
                            case "outside":
                                n = l.wrap;
                                break;
                            case "over":
                                n = l.inner;
                                break;
                            default:
                                n = l.skin,
                                    t.appendTo("body"),
                                s && t.width(t.width()),
                                    t.wrapInner('<span class="child"></span>'),
                                    l.current.margin[2] += Math.abs(u(t.css("margin-bottom")))
                        }
                        t["top" === e.position ? "prependTo" : "appendTo"](n)
                    }
                }
            },
            i.fn.fancybox = function(e) {
                var t, o = i(this), n = this.selector || "", a = function(a) {
                    var r, s, c = i(this).blur(), d = t;
                    a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group",
                        s = c.attr(r),
                    s || (r = "rel",
                        s = c.get(0)[r]),
                    s && "" !== s && "nofollow" !== s && (c = n.length ? i(n) : o,
                        c = c.filter("[" + r + '="' + s + '"]'),
                        d = c.index(this)),
                        e.index = d,
                    !1 !== l.open(c, e) && a.preventDefault())
                };
                return e = e || {},
                    t = e.index || 0,
                    n && !1 !== e.live ? r.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : o.unbind("click.fb-start").bind("click.fb-start", a),
                    this.filter("[data-fancybox-start=1]").trigger("click"),
                    this
            }
            ,
            r.ready(function() {
                var t, a;
                i.scrollbarWidth === o && (i.scrollbarWidth = function() {
                        var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
                            , t = e.children()
                            , t = t.innerWidth() - t.height(99).innerWidth();
                        return e.remove(),
                            t
                    }
                ),
                i.support.fixedPosition === o && (i.support.fixedPosition = function() {
                    var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body")
                        , t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                    return e.remove(),
                        t
                }()),
                    i.extend(l.defaults, {
                        scrollbarWidth: i.scrollbarWidth(),
                        fixed: i.support.fixedPosition,
                        parent: i("body")
                    }),
                    t = i(e).width(),
                    n.addClass("fancybox-lock-test"),
                    a = i(e).width(),
                    n.removeClass("fancybox-lock-test"),
                    i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
            })
    }(window, document, jQuery),
    function(e) {
        var t = e.fancybox;
        t.helpers.buttons = {
            defaults: {
                skipSingle: !1,
                position: "top",
                tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
            },
            list: null,
            buttons: null,
            beforeLoad: function(e, t) {
                return e.skipSingle && t.group.length < 2 ? (t.helpers.buttons = !1,
                    void (t.closeBtn = !0)) : void (t.margin["bottom" === e.position ? 2 : 0] += 30)
            },
            onPlayStart: function() {
                this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
            },
            onPlayEnd: function() {
                this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
            },
            afterShow: function(i, o) {
                var n = this.buttons;
                n || (this.list = e(i.tpl).addClass(i.position).appendTo("body"),
                    n = {
                        prev: this.list.find(".btnPrev").click(t.prev),
                        next: this.list.find(".btnNext").click(t.next),
                        play: this.list.find(".btnPlay").click(t.play),
                        toggle: this.list.find(".btnToggle").click(t.toggle),
                        close: this.list.find(".btnClose").click(t.close)
                    }),
                    o.index > 0 || o.loop ? n.prev.removeClass("btnDisabled") : n.prev.addClass("btnDisabled"),
                    o.loop || o.index < o.group.length - 1 ? (n.next.removeClass("btnDisabled"),
                        n.play.removeClass("btnDisabled")) : (n.next.addClass("btnDisabled"),
                        n.play.addClass("btnDisabled")),
                    this.buttons = n,
                    this.onUpdate(i, o)
            },
            onUpdate: function(e, t) {
                var i;
                this.buttons && (i = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),
                    t.canShrink ? i.addClass("btnToggleOn") : t.canExpand || i.addClass("btnDisabled"))
            },
            beforeClose: function() {
                this.list && this.list.remove(),
                    this.list = null,
                    this.buttons = null
            }
        }
    }(jQuery),
    function(e) {
        var t = e.fancybox;
        t.helpers.thumbs = {
            defaults: {
                width: 50,
                height: 50,
                position: "bottom",
                source: function(t) {
                    var i;
                    return t.element && (i = e(t.element).find("img").attr("src")),
                    !i && "image" === t.type && t.href && (i = t.href),
                        i
                }
            },
            wrap: null,
            list: null,
            width: 0,
            init: function(t, i) {
                var o, n = this, a = t.width, r = t.height, l = t.source;
                o = "";
                for (var s = 0; s < i.group.length; s++)
                    o += '<li><a style="width:' + a + "px;height:" + r + 'px;" href="javascript:jQuery.fancybox.jumpto(' + s + ');"></a></li>';
                this.wrap = e('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),
                    this.list = e("<ul>" + o + "</ul>").appendTo(this.wrap),
                    e.each(i.group, function(t) {
                        var o = i.group[t]
                            , s = l(o);
                        s && e("<img />").on("load", function() {
                            var i, o, l, s = this.width, c = this.height;
                            n.list && s && c && (i = s / a,
                                o = c / r,
                                l = n.list.children().eq(t).find("a"),
                            i >= 1 && o >= 1 && (i > o ? (s = Math.floor(s / o),
                                c = r) : (s = a,
                                c = Math.floor(c / i))),
                                e(this).css({
                                    width: s,
                                    height: c,
                                    top: Math.floor(r / 2 - c / 2),
                                    left: Math.floor(a / 2 - s / 2)
                                }),
                                l.width(a).height(r),
                                e(this).hide().appendTo(l).fadeIn(300))
                        }).attr("src", s).attr("title", o.title)
                    }),
                    this.width = this.list.children().eq(0).outerWidth(!0),
                    this.list.width(this.width * (i.group.length + 1)).css("left", Math.floor(.5 * e(window).width() - (i.index * this.width + .5 * this.width)))
            },
            beforeLoad: function(e, t) {
                return t.group.length < 2 ? void (t.helpers.thumbs = !1) : void (t.margin["top" === e.position ? 0 : 2] += e.height + 15)
            },
            afterShow: function(e, t) {
                this.list ? this.onUpdate(e, t) : this.init(e, t),
                    this.list.children().removeClass("active").eq(t.index).addClass("active")
            },
            onUpdate: function(t, i) {
                this.list && this.list.stop(!0).animate({
                    left: Math.floor(.5 * e(window).width() - (i.index * this.width + .5 * this.width))
                }, 150)
            },
            beforeClose: function() {
                this.wrap && this.wrap.remove(),
                    this.wrap = null,
                    this.list = null,
                    this.width = 0
            }
        }
    }(jQuery),
    function(e) {
        "use strict";
        var t = e.fancybox
            , i = function(t, i, o) {
            return o = o || "",
            "object" === e.type(o) && (o = e.param(o, !0)),
                e.each(i, function(e, i) {
                    t = t.replace("$" + e, i || "")
                }),
            o.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + o),
                t
        };
        t.helpers.media = {
            defaults: {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "opaque",
                        enablejsapi: 1,
                        ps: "docs",
                        controls: 1
                    },
                    type: "iframe",
                    url: "//www.youtube.com/embed/$3"
                },
                vimeo: {
                    matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    type: "iframe",
                    url: "//player.vimeo.com/video/$1"
                },
                metacafe: {
                    matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                    params: {
                        autoPlay: "yes"
                    },
                    type: "swf",
                    url: function(t, i, o) {
                        return o.swf.flashVars = "playerVars=" + e.param(i, !0),
                        "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
                    }
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "swf",
                    url: "//www.dailymotion.com/swf/video/$1"
                },
                twitvid: {
                    matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                    params: {
                        autoplay: 0
                    },
                    type: "iframe",
                    url: "//www.twitvid.com/embed.php?guid=$1"
                },
                twitpic: {
                    matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                    type: "image",
                    url: "//twitpic.com/show/full/$1/"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                google_maps: {
                    matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[1] + "/" + e[3] + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                }
            },
            beforeLoad: function(t, o) {
                var n, a, r, l, s = o.href || "", c = !1;
                for (n in t)
                    if (t.hasOwnProperty(n) && (a = t[n],
                            r = s.match(a.matcher))) {
                        c = a.type,
                            l = e.extend(!0, {}, a.params, o[n] || (e.isPlainObject(t[n]) ? t[n].params : null)),
                            s = "function" === e.type(a.url) ? a.url.call(this, r, l, o) : i(a.url, r, l);
                        break
                    }
                c && (o.href = s,
                    o.type = c,
                    o.autoHeight = !1)
            }
        }
    }(jQuery);
