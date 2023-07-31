window.__require = function t(e, o, n) {
    function i(a, c) {
        if (!o[a]) {
            if (!e[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(s, !0);
                    if (r) return r(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = s
            }
            var u = o[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function (t) {
                return i(e[a][1][t] || t)
            }, u, u.exports, t, e, o, n)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
    return i
}({
    AudioMng: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "40fe1UgmNVLiarb3UPR1wOI", "AudioMng");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = t("./Define"),
            u = t("./Facebook"),
            p = cc._decorator,
            d = p.ccclass,
            h = (p.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._lstAudio = [], e._lstPlaying = [], e._onSound = !1, e
                }
                var o;
                return i(e, t), o = e, e.prototype.onLoad = function () {
                    return a(this, void 0, void 0, function () {
                        var t;
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return o._inst = this, window.FBInstant ? [4, u.Facebook.getInst().getData(["onSound"])] : [3, 2];
                                case 1:
                                    return t = e.sent(), this._onSound = u.Facebook.getInst().initData("onSound", !0), this.loadAudios(), [3, 3];
                                case 2:
                                    this.loadAudios(), e.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.loadAudios = function () {
                    var t = this;
                    cc.resources.loadDir("sounds", cc.AudioClip, function (e, o) {
                        if (!e) {
                            for (var n = 0, i = o; n < i.length; n++) {
                                var r = i[n];
                                t._lstAudio[r.name] = r
                            }
                            t.updateSound()
                        }
                    })
                }, e.prototype.playSound = function (t, e, o) {
                    if (void 0 === e && (e = 1), void 0 === o && (o = !1), this._onSound && this._lstAudio[t]) try {
                        this._lstPlaying[t] = cc.audioEngine.play(this._lstAudio[t], o, e)
                    } catch (n) { }
                }, e.prototype.playSoundBg = function () {
                    this._onSound
                }, e.prototype.stopSound = function (t) {
                    (this._lstPlaying[t] || 0 === this._lstPlaying[t]) && cc.audioEngine.stopEffect(this._lstPlaying[t])
                }, e.prototype.stopSoundBg = function () { }, e.getInst = function () {
                    return o._inst
                }, e.prototype.updateSound = function () {
                    s.default.inst.home.updateSound(), u.Facebook.getInst().saveData("onSound", this._onSound), this._onSound ? this.playSoundBg() : this.stopSoundBg()
                }, e.prototype.playSoundClick = function () {
                    this._onSound && this.playSound(l.AudioConfig.TOUCH, .5)
                }, e._inst = null, o = r([d], e)
            }(cc.Component));
        o.default = h, cc._RF.pop()
    }, {
        "../gameManager": "gameManager",
        "./Define": "Define",
        "./Facebook": "Facebook"
    }],
    BannerAds: [function (t, e) {
        "use strict";
        cc._RF.push(e, "f4a18a0AxVKEoriL0x9MX9F", "BannerAds"), cc.Class({
            extends: cc.Component,
            isAvailable: !1,
            isInitialized: !1,
            onLoad: function () {
               
            },
            show: function () { },
            hide: function () { }
        }), cc._RF.pop()
    }, {}],
    Define: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "22737hQ7OFM0oeyBXLzUloC", "Define"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Item = o.Coin = o.Velocity = o.LoopLevel = o.AudioConfig = o.FacebookConfig = o.SelectLevelConfig = o.RankConfig = o.SceneName = void 0,
            function (t) {
                t.POPUP_RANK = "PopupRank", t.SELECT_LEVEL = "SelectLevel"
            }(o.SceneName || (o.SceneName = {})),
            function (t) {
                t[t.MAX_PERSON_SHOW_RANK = 25] = "MAX_PERSON_SHOW_RANK"
            }(o.RankConfig || (o.RankConfig = {})),
            function (t) {
                t[t.MAX_LEVEL = 100] = "MAX_LEVEL", t[t.NUM_LEVEL_PER_PAGE = 20] = "NUM_LEVEL_PER_PAGE", t[t.TIME_MOVE_PAGE = .5] = "TIME_MOVE_PAGE", t[t.TIME_MOVE_BACK = .5] = "TIME_MOVE_BACK"
            }(o.SelectLevelConfig || (o.SelectLevelConfig = {})),
            function (t) {
                t.ID_ADS_INTER = "621245265869716_634506161210293", t.ID_ADS_VIDEO = "621245265869716_634506231210286", t.ID_ADS_BANNER = "621245265869716_634506077876968", t[t.SHOW_INTER = 1] = "SHOW_INTER", t[t.SHOW_VIDEO = 1] = "SHOW_VIDEO", t[t.SHORTCUT_ASK = 5] = "SHORTCUT_ASK", t[t.SUB_BOT_ASK = 5] = "SUB_BOT_ASK"
            }(o.FacebookConfig || (o.FacebookConfig = {})),
            function (t) {
                t.TOUCH = "sound_tap", t.LOSE = "sound_lose", t.WIN = "sound_win", t.FAllING = "sound_body_fall", t.BOUNCE = "sound_bounce", t.ROCK_HIT = "sound_rock_hit", t.BODY_HIT = "sound_body_hit", t.WOOD_HIT = "sound_wood_hit", t.TNT = "sound_tnt", t.SHOOT = "sound_shoot", t.DIE1 = "sound_human_die1", t.DIE2 = "sound_human_die2", t.DIE3 = "sound_human_die3", t.CHANGE_PAGE = "sound_slide_level"
            }(o.AudioConfig || (o.AudioConfig = {})),
            function (t) {
                t[t.LOOP_LEVEL = 40] = "LOOP_LEVEL"
            }(o.LoopLevel || (o.LoopLevel = {})),
            function (t) {
                t[t.BULLET = 3e3] = "BULLET"
            }(o.Velocity || (o.Velocity = {})),
            function (t) {
                t[t.LEVEL_UP = 30] = "LEVEL_UP", t[t.TREASURE = 200] = "TREASURE", t[t.STAR1 = 10] = "STAR1", t[t.STAR2 = 20] = "STAR2", t[t.STAR3 = 30] = "STAR3", t[t.WATCH_VIDEO = 150] = "WATCH_VIDEO"
            }(o.Coin || (o.Coin = {})),
            function (t) {
                t[t.ITEM1 = 100] = "ITEM1", t[t.ITEM2 = 200] = "ITEM2", t[t.ITEM3 = 300] = "ITEM3", t[t.ITEM4 = 1e3] = "ITEM4", t[t.ITEM5 = 1200] = "ITEM5", t[t.ITEM6 = 1500] = "ITEM6", t[t.ITEM7 = 200] = "ITEM7", t[t.ITEM8 = 1e3] = "ITEM8", t[t.ITEM9 = 1500] = "ITEM9"
            }(o.Item || (o.Item = {})), cc._RF.pop()
    }, {}],
    FBImage: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a4bda5vVltEpKd1IMhLrJVS", "FBImage");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.img_share = null, e
                }
                return i(e, t), e.prototype.init = function () {
                    this.img_share
                }, r([s(cc.Node)], e.prototype, "img_share", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    Facebook: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "77d9ecjjyBKwY6pIzKCOWbA", "Facebook");
        var n = this && this.__awaiter || function (t, e, o, n) {
            return new (o || (o = Promise))(function (i, r) {
                function a(t) {
                    try {
                        s(n.next(t))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(t) {
                    try {
                        s(n.throw(t))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                        t(e)
                    })).then(a, c)
                }
                s((n = n.apply(t, e || [])).next())
            })
        },
            i = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Facebook = void 0;
        var r = t("./Define"),
            a = t("./User"),
            c = function () {
                function t() {
                    this._adsInter = null, this._adsVideo = null, this._isShowingVideo = !1, this._isLoadingInter = !1, this._isShowingInter = !1, this._askShortCut = null, this._askSubBot = null, this._isSharing = !1, this._isInviting = !1, this._isCreatingContext = !1
                }
                return t.prototype.saveData = function (t, e) {
                    cc.sys.localStorage.setItem(t, JSON.stringify(e))
                    // window.FBInstant && FBInstant.player.setDataAsync(t).then(function () {
                    //     console.log("save data success")
                    // }).catch(function (t) {
                    //     console.log("Save data fail " + t.message)
                    // })
                }, t.prototype.saveUserData = function (e) {
                    var o;
                    if ("undefined" != typeof FBInstant) {
                        var n = a.User[e];
                        t.getInst().saveData(((o = {})[e] = n, o))
                    }
                }, t.prototype.getData = function (t) {
                    // return n(this, void 0, void 0, function () {
                    //     var e;
                    //     return i(this, function (o) {
                    //         switch (o.label) {
                    //             case 0:
                    //                 return window.FBInstant ? (e = [], [4, FBInstant.player.getDataAsync(t).then(function (t) {
                    //                     e = t
                    //                 }).catch(function (t) {
                    //                     console.log(t)
                    //                 })]) : [2];
                    //             case 1:
                    //                 return o.sent(), [2, e]
                    //         }
                    //     })
                    // })
                }, t.prototype.initData = function (t, e) {
                    var data = cc.sys.localStorage.getItem(t);
                    if (data) {
                        return JSON.parse(data)
                    } else {
                        return e
                    }
                }, t.prototype.share = function (t, e) {
                    return n(this, void 0, void 0, function () {
                        var o;
                        return i(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return !window.FBInstant || this._isSharing ? [2] : (this._isSharing = !0, o = {
                                        image: t,
                                        text: "",
                                        data: {
                                            shareCode: e
                                        }
                                    }, [4, FBInstant.shareAsync(o).then(function () { }).catch(function (t) {
                                        console.log(t)
                                    })]);
                                case 1:
                                    return n.sent(), this._isSharing = !1, [2]
                            }
                        })
                    })
                }, t.prototype.invite = function (t, e) {
                    return n(this, void 0, void 0, function () {
                        return i(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return !window.FBInstant || this._isInviting ? [2] : (this._isInviting = !0, [4, FBInstant.context.chooseAsync().then(function () {
                                        var o = {
                                            action: "CUSTOM",
                                            cta: "Play",
                                            image: t,
                                            text: a.User.getInst()._userName + " invited you to play this game! Play now!",
                                            template: "play_turn",
                                            data: {
                                                inviteCode: e
                                            },
                                            notification: "NO_PUSH"
                                        };
                                        FBInstant.updateAsync(o).then(function () {
                                            console.log("send message success!")
                                        }).catch(function (t) {
                                            console.log(t)
                                        })
                                    }).catch(function (t) {
                                        console.log(t)
                                    })]);
                                case 1:
                                    return o.sent(), this._isInviting = !1, [2]
                            }
                        })
                    })
                }, t.prototype.createContext = function (t, e) {
                    return n(this, void 0, void 0, function () {
                        return i(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return !window.FBInstant || this._isCreatingContext ? [2] : (this._isCreatingContext = !0, [4, FBInstant.context.createAsync(t).then(function () {
                                        var t = {
                                            action: "CUSTOM",
                                            cta: "Join The Fight",
                                            image: e,
                                            text: "",
                                            template: "VILLAGE_INVASION",
                                            data: null,
                                            notification: "NO_PUSH"
                                        };
                                        FBInstant.updateAsync(t).then(function () {
                                            console.log("send message success!")
                                        }).catch(function (t) {
                                            console.log(t)
                                        })
                                    }).catch(function (t) {
                                        console.log(t)
                                    })]);
                                case 1:
                                    return o.sent(), this._isCreatingContext = !1, [2]
                            }
                        })
                    })
                }, t.prototype.showAdsBanner = function () {
                    if (window.FBInstant && !(cc.winSize.height < 1150)) {
                        var t = FBInstant.getSupportedAPIs().includes("loadBannerAdAsync");
                        console.log(" loadBannerAdAsync >> isSupported = " + t + " "), t && FBInstant.loadBannerAdAsync(r.FacebookConfig.ID_ADS_BANNER).then(function () {
                            console.log("FBInstant.loadBannerAdAsync >> success")
                        }).catch(function (t) {
                            console.log("FBInstant.loadBannerAdAsync >> error ", t)
                        })
                    }
                }, t.prototype.preLoadAdsVideo = function () {
                    return n(this, void 0, void 0, function () {
                        var t, e;
                        return i(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    if (!window.FBInstant || !r.FacebookConfig.SHOW_VIDEO) return [2];
                                    o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 5]), [4, FBInstant.getRewardedVideoAsync(r.FacebookConfig.ID_ADS_VIDEO)];
                                case 2:
                                    return [4, (t = o.sent()).loadAsync()];
                                case 3:
                                    return o.sent(), this._adsVideo = t, console.log("load video success"), [3, 5];
                                case 4:
                                    return e = o.sent(), this._adsVideo = null, console.log("load video fail: ", e), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.preLoadAdsInter = function () {
                    return n(this, void 0, void 0, function () {
                        var t, e;
                        return i(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    if (!window.FBInstant || !r.FacebookConfig.SHOW_INTER || this._isLoadingInter) return [2];
                                    this._isLoadingInter = !0, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 5]), [4, FBInstant.getInterstitialAdAsync(r.FacebookConfig.ID_ADS_INTER)];
                                case 2:
                                    return [4, (t = o.sent()).loadAsync()];
                                case 3:
                                    return o.sent(), this._adsInter = t, console.log("load inter success"), [3, 5];
                                case 4:
                                    return e = o.sent(), this._adsInter = null, console.log("load inter fail: ", e), [3, 5];
                                case 5:
                                    return this._isLoadingInter = !1, [2]
                            }
                        })
                    })
                }, t.prototype.showAdsInter = function (t) {
                    return n(this, void 0, void 0, function () {
                        var e, o = this;
                        return i(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    if (!window.FBInstant || !r.FacebookConfig.SHOW_INTER || this._isShowingInter) return [2];
                                    if (this._isShowingInter = !0, !FBInstant.getSupportedAPIs().indexOf("showAsync")) return [3, 5];
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this._adsInter.showAsync().then(function () {
                                        return n(o, void 0, void 0, function () {
                                            return i(this, function () {
                                                return console.log("show ads inter success"), this.logEvent("Ads-Total", 1, {}), this.logEvent("Ads-Total-Inter", 1, {
                                                    value: t
                                                }), this.preLoadAdsInter(), [2]
                                            })
                                        })
                                    }).catch(function (t) {
                                        return n(o, void 0, void 0, function () {
                                            return i(this, function () {
                                                return console.log("show ads inter fail: ", t), this.logEvent("ads_inter_error", 1, {
                                                    value: t
                                                }), "RATE_LIMITED" != t.code && this.preLoadAdsInter(), [2]
                                            })
                                        })
                                    })];
                                case 2:
                                    return a.sent(), [3, 4];
                                case 3:
                                    return e = a.sent(), console.log("show ads inter fail: ", e), this.logEvent("ads_inter_error", 1, {
                                        value: e
                                    }), this.preLoadAdsInter(), [3, 4];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    console.log("client not supported show ads inter"), a.label = 6;
                                case 6:
                                    return this._isShowingInter = !1, [2]
                            }
                        })
                    })
                }, t.prototype.showAdsVideo = function (t, e) {
                    return n(this, void 0, void 0, function () {
                        var o, n;
                        return i(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    if (!window.FBInstant) return e(), [2];
                                    if (!r.FacebookConfig.SHOW_VIDEO || this._isShowingVideo) return [2];
                                    if (this._isShowingVideo = !0, o = this, !FBInstant.getSupportedAPIs().indexOf("showAsync")) return [3, 6];
                                    i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, o._adsVideo.showAsync().then(function () {
                                        console.log("show ads video success"), o.logEvent("Ads-Total", 1, {}), o.logEvent("Ads-Total-Video", 1, {
                                            value: t
                                        }), e()
                                    }).catch(function (t) {
                                        console.log("show ads video fail: ", t), o.logEvent("ads_video_error", 1, {
                                            value: t
                                        })
                                    })];
                                case 2:
                                    return i.sent(), [3, 4];
                                case 3:
                                    return n = i.sent(), console.log("show ads video fail: ", n), o.logEvent("ads_video_error", 1, {
                                        value: n
                                    }), [3, 4];
                                case 4:
                                    return [4, this.preLoadAdsVideo()];
                                case 5:
                                    return i.sent(), [3, 7];
                                case 6:
                                    console.log("client not supported show ads video"), i.label = 7;
                                case 7:
                                    return this._isShowingVideo = !1, [2]
                            }
                        })
                    })
                }, t.prototype.onStartGame = function () {
                    return n(this, void 0, void 0, function () {
                        return i(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return window.FBInstant ? (this.checkEntryPoint(), [4, Promise.all([this.preLoadAdsStartGame(), this.requestShortCutAndSubBot()])]) : [2];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.preLoadAdsStartGame = function () {
                    return n(this, void 0, void 0, function () {
                        return i(this, function () {
                            return this.preLoadAdsInter(), [2]
                        })
                    })
                }, t.prototype.getDataStartGame = function () {
                    return n(this, void 0, void 0, function () {
                        return i(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getData(["newUser"])];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.requestShortCutAndSubBot = function () {
                    return n(this, void 0, void 0, function () {
                        var t;
                        return i(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getData(["askShortCut", "askSubBot"])];
                                case 1:
                                    return t = e.sent(), this._askShortCut = this.initData("askShortCut", 0), this._askSubBot = this.initData("askSubBot", 0), [4, this.requestShortCut(this._askShortCut)];
                                case 2:
                                    return e.sent(), [4, this.requestSubBot(this._askSubBot)];
                                case 3:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.requestShortCut = function (t) {
                    return n(this, void 0, void 0, function () {
                        var e, o = this;
                        return i(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return window.FBInstant ? null == t || t >= r.FacebookConfig.SHORTCUT_ASK ? [2] : (e = this, [4, FBInstant.canCreateShortcutAsync().then(function (a) {
                                        return n(o, void 0, void 0, function () {
                                            return i(this, function (o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return a ? (t++, [4, FBInstant.createShortcutAsync().then(function () {
                                                            console.log("shortcut is created"), e.logEvent("ev_subcribe_bot", 1, {
                                                                value: "accept"
                                                            }), t = r.FacebookConfig.SHORTCUT_ASK
                                                        }).catch(function (t) {
                                                            console.log("shortcut not created: ", t), e.logEvent("ev_subcribe_bot", 1, {
                                                                value: "deny"
                                                            })
                                                        })]) : [3, 2];
                                                    case 1:
                                                        return o.sent(), e.saveData("askShortCut", t), [3, 3];
                                                    case 2:
                                                        console.log("shortcut can't create!"), o.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    })]) : [2];
                                case 1:
                                    return a.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.requestSubBot = function (t) {
                    return n(this, void 0, void 0, function () {
                        var e, o = this;
                        return i(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return window.FBInstant ? null == t || t >= r.FacebookConfig.SUB_BOT_ASK ? [2] : (e = this, [4, FBInstant.player.canSubscribeBotAsync().then(function (a) {
                                        return n(o, void 0, void 0, function () {
                                            return i(this, function (o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return a ? (t++, [4, FBInstant.player.subscribeBotAsync().then(function () {
                                                            console.log("subscribed bot"), e.logEvent("ev_shortcut", 1, {
                                                                value: "accept"
                                                            }), t = r.FacebookConfig.SUB_BOT_ASK
                                                        }).catch(function (t) {
                                                            console.log("not subscribed bot: ", t), e.logEvent("ev_shortcut", 1, {
                                                                value: "deny"
                                                            })
                                                        })]) : [3, 2];
                                                    case 1:
                                                        return o.sent(), e.saveData("askSubBot", t), [3, 3];
                                                    case 2:
                                                        console.log("can't subscribe bot"), o.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }).catch(function (t) {
                                        console.log(t)
                                    })]) : [2];
                                case 1:
                                    return a.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.logEvent = function (t, e, o) {
                    window.FBInstant && FBInstant.logEvent(t, e, o)
                }, t.prototype.checkEntryPoint = function () {
                    var t = this;
                    window.FBInstant && FBInstant.getEntryPointAsync().then(function (e) {
                        switch (e) {
                            case "feed":
                                t.joinFromFeed();
                                break;
                            case "admin_message":
                                t.logEvent("ev_user_from_invite_", 1, {})
                        }
                    })
                }, t.prototype.joinFromFeed = function () {
                    var t = FBInstant.getEntryPointData();
                    null != t && t.shareCode && this.logEvent("ev_user_from_share_", 1, {
                        shareCode: t.shareCode
                    })
                }, t.prototype.joinFromInvite = function () {
                    var t = FBInstant.getEntryPointData();
                    null != t && t.inviteCode && this.logEvent("ev_user_from_invite_", 1, {
                        shareCode: t.inviteCode
                    })
                }, t.prototype.postSessionScore = function (t) {
                    window.FBInstant && (console.log("post session score"), t > (window.bestSessionScore || 0) && (window.bestSessionScore = t, FBInstant.postSessionScoreAsync(window.bestSessionScore).then(function () {
                        console.log("post bestScore in session Done  ------- ", window.bestSessionScore)
                    })))
                }, t.prototype.switchGame = function (t, e, o) {
                    if (window.FBInstant) {
                        var n = this;
                        FBInstant.switchGameAsync(t).then(function () {
                            console.log("switch game cuccess!")
                        }).catch(function () {
                            var t = o + "_Cancel";
                            n.logEvent(e, 1, {
                                value: t
                            })
                        })
                    }
                }, t.getInst = function () {
                    return null == t._inst && (t._inst = new t), t._inst
                }, t._inst = null, t
            }();
        o.Facebook = c, cc._RF.pop()
    }, {
        "./Define": "Define",
        "./User": "User"
    }],
    FreeButtonComp: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ff9b1Plp5pGX5mubMh+jnn2", "FreeButtonComp");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.freeHandler = function (t) {
                    t.target.freeButtonHandlerFunc && t.target.freeButtonHandlerFunc(t.target)
                }, r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    ItemLeaderBoard: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "13a2aFaHjtPgYW0UgXf0Gio", "ItemLeaderBoard");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lblIndex = null, e.lblName = null, e.lblScore = null, e.sprAvatar = null, e.rank1 = null, e.rank2 = null, e.rank3 = null, e
                }
                return i(e, t), e.prototype.initInfo = function (t, e) {
                    var o = this;
                    this.lblIndex.string = (e + 1).toString(), "1" == this.lblIndex.string ? (this.rank1.active = !0, this.lblIndex.string = "") : "2" == this.lblIndex.string ? (this.rank2.active = !0, this.lblIndex.string = "") : "3" == this.lblIndex.string && (this.rank3.active = !0, this.lblIndex.string = ""), this.lblName.string = t.name, this.lblScore.string = "Level " + t.level, t.avatar && 0 != t.avatar.length && cc.assetManager.loadRemote(t.avatar, function (t, e) {
                        if (!t) {
                            var n = new cc.SpriteFrame(e);
                            o.sprAvatar.spriteFrame = n
                        }
                    })
                }, r([s(cc.Label)], e.prototype, "lblIndex", void 0), r([s(cc.Label)], e.prototype, "lblName", void 0), r([s(cc.Label)], e.prototype, "lblScore", void 0), r([s(cc.Sprite)], e.prototype, "sprAvatar", void 0), r([s(cc.Node)], e.prototype, "rank1", void 0), r([s(cc.Node)], e.prototype, "rank2", void 0), r([s(cc.Node)], e.prototype, "rank3", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    ItemSelectLevel: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "06121McMLZDTrG4Wttm7E1i", "ItemSelectLevel");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../Core/AudioMng"),
            l = t("../Core/Define"),
            u = t("../Core/User"),
            p = t("../gameManager"),
            d = t("../Slave"),
            h = cc._decorator,
            f = h.ccclass,
            y = h.property,
            g = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.nLock = null, e.nUnLock = null, e.lblLevel = null, e.nGlow = null, e.star1_light = null, e.star2_light = null, e.star3_light = null, e._indexLevel = -1, e
                }
                return i(e, t), e.prototype.initItem = function (t) {
                    this.lblLevel.string = t.toString(), this.updateInfo(t), this._indexLevel = t
                }, e.prototype.findLevelTemp = function () {
                    for (var t = u.User.getInst()._level; t - l.SelectLevelConfig.MAX_LEVEL > 0;) t -= l.SelectLevelConfig.MAX_LEVEL;
                    return t
                }, e.prototype.updateInfo = function (t) {
                    this.nLock.active = u.User.getInst()._level < t, this.nUnLock.active = u.User.getInst()._level >= t;
                    var e = this.findLevelTemp();
                    this.glowLevel(e == t), this.showStar(this._indexLevel), this.node.getComponent(cc.Button).interactable = u.User.getInst()._level >= t, this.lblLevel.node.color = this.getColorLevel(t)
                }, e.prototype.getColorLevel = function (t) {
                    var e = null;
                    return u.User.getInst()._level < t ? e = this.convertColorFromHex("#000000") : u.User.getInst()._level == t ? e = this.convertColorFromHex("#ff6485") : u.User.getInst()._level > t && (e = this.convertColorFromHex("#650000")), e
                }, e.prototype.convertColorFromHex = function (t) {
                    return cc.Color.fromHEX(cc.color(255, 255, 255, 255), t)
                }, e.prototype.glowLevel = function (t) {
                    this.nGlow.stopAllActions(), this.nGlow.active = t, this.nGlow.opacity = 255, t && cc.tween(this.nGlow).repeatForever(cc.tween().to(.5, {
                        opacity: 0
                    }).to(.5, {
                        opacity: 255
                    })).start()
                }, e.prototype.onClickLevel = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return s.default.getInst().playSoundClick(), p.default.inst.PopupWin.active = !1, p.default.inst.popupLose.active = !1, [4, d.Slave.hidePopup(p.default.inst.selectLevel.node)];
                                case 1:
                                    return t.sent(), p.default.inst.selectLevel.node.active = !1, p.default.inst.home.node.active = !1, p.default.inst.gamePlay.node.active = !0, p.default.inst.boardController.resetBoard(), p.default.inst.gamePlay.loadLevel(this._indexLevel), [2]
                            }
                        })
                    })
                }, e.prototype.showStar = function (t) {
                    for (var e = 0; e < u.User.getInst()._star.length; e++)
                        if (t == u.User.getInst()._star[e].level) switch (u.User.getInst()._star[e].starCount) {
                            case 1:
                                this.star1_light.active = !0, this.star2_light.active = !1, this.star3_light.active = !1;
                                break;
                            case 2:
                                this.star1_light.active = !0, this.star2_light.active = !0, this.star3_light.active = !1;
                                break;
                            case 3:
                                this.star1_light.active = !0, this.star2_light.active = !0, this.star3_light.active = !0
                        }
                }, r([y(cc.Node)], e.prototype, "nLock", void 0), r([y(cc.Node)], e.prototype, "nUnLock", void 0), r([y(cc.Label)], e.prototype, "lblLevel", void 0), r([y(cc.Node)], e.prototype, "nGlow", void 0), r([y(cc.Node)], e.prototype, "star1_light", void 0), r([y(cc.Node)], e.prototype, "star2_light", void 0), r([y(cc.Node)], e.prototype, "star3_light", void 0), r([f], e)
            }(cc.Component);
        o.default = g, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../Core/User": "User",
        "../Slave": "Slave",
        "../gameManager": "gameManager"
    }],
    ItemShop: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "eb81619GJFFGazrIwDqEpUK", "ItemShop");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../gameManager"),
            c = t("../Core/AudioMng"),
            s = t("../Core/User"),
            l = t("../Core/Facebook"),
            u = t("../PopupWin/PopupWin"),
            p = cc._decorator,
            d = p.ccclass,
            h = p.property,
            f = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.item = null, e.shadow = null, e.itemCost = null, e.cost = null, e.spr_coin = null, e.btn_buy = null, e.btn_choose = null, e.btn_used = null, e.normalMat = null, e.grayMat = null, e.indexItem = -1, e.prize = 0, e.isBuy = !1, e
                }
                var o;
                return i(e, t), o = e, e.prototype.onLoad = function () {
                    o.inst = this
                }, e.prototype.init = function (t) {
                    switch (a.default.inst.Shop.item_choice) {
                        case 1:
                            this.showItemHair(t);
                            break;
                        case 2:
                            this.showItemClothes(t);
                            break;
                        case 3:
                            this.showItemWp(t)
                    }
                }, e.prototype.showItemHair = function (t) {
                    this.item.getComponent(cc.Sprite).spriteFrame = a.default.inst.Shop.hair_list[t], this.prize = a.default.inst.Shop.hairPrize[t], this.itemCost.string = this.prize.toString(), this.indexItem = t + 1, a.default.inst.Shop.checkSkinHairStart(this.indexItem) && (this.isBuy = !0), 1 == this.indexItem && (this.isBuy = !0, a.default.inst.Shop.lstHairBought.push(1), this.spr_coin.active = !1, this.cost.active = !1);
                    for (var e = 0; e < a.default.inst.Shop.lstHairBought.length; e++) {
                        var o = a.default.inst.Shop.lstHairBought[e];
                        this.indexItem == o && (this.isBuy = !0)
                    }
                    a.default.inst.boardController.skinChoiceHair == this.indexItem && (this.btn_choose.getComponent(cc.Button).interactable = !1, this.btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Used"), this.isBuy ? (this.btn_choose.active = !0, this.btn_buy.active = !1, this.spr_coin.active = !1, this.cost.active = !1) : (this.btn_buy.active = !0, this.btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Use")
                }, e.prototype.showItemClothes = function (t) {
                    this.item.getComponent(cc.Sprite).spriteFrame = a.default.inst.Shop.clothes_list[t], this.prize = a.default.inst.Shop.hatPrize[t], this.itemCost.string = this.prize.toString(), this.indexItem = t + 1, a.default.inst.Shop.checkSkinHatStart(this.indexItem) && (this.isBuy = !0);
                    for (var e = 0; e < a.default.inst.Shop.lstHatBought.length; e++) {
                        var o = a.default.inst.Shop.lstHatBought[e];
                        this.indexItem == o - 6 && (this.isBuy = !0)
                    }
                    this.isBuy ? (this.btn_choose.active = !0, this.btn_buy.active = !1, this.spr_coin.active = !1, this.cost.active = !1) : (this.btn_buy.active = !0, this.btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Use"), a.default.inst.boardController.skinChoiceClothes - 6 == this.indexItem && (this.btn_choose.getComponent(cc.Button).interactable = !1, this.btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Used", this.item.getComponent(cc.Sprite).setMaterial(0, this.grayMat))
                }, e.prototype.showItemWp = function (t) {
                    this.item.getComponent(cc.Sprite).spriteFrame = a.default.inst.Shop.wp_list[t]
                }, e.prototype.onClickItem = function () {
                    if (c.default.getInst().playSoundClick(), 1 == a.default.inst.Shop.item_choice) {
                        for (var t = 0; t < a.default.inst.Shop.lstItemHair.length; t++) a.default.inst.Shop.lstItemHair[t].getComponent(o).shadow.active = !1, a.default.inst.Shop.lstItemHair[t].getComponent(o).item.y = 0, a.default.inst.Shop.lstItemHair[t].getComponent(o).btn_buy.active = !1, a.default.inst.Shop.lstItemHair[t].getComponent(o).btn_choose.active = !1;
                        this.indexItem < 7 && (this.shadow.active = !0), this.item.y += 60, this.isBuy ? this.btn_choose.active = !0 : this.btn_buy.active = !0
                    } else if (2 == a.default.inst.Shop.item_choice) {
                        for (t = 0; t < a.default.inst.Shop.lstItemClothes.length; t++) a.default.inst.Shop.lstItemClothes[t].getComponent(o).item.y = 0, a.default.inst.Shop.lstItemClothes[t].getComponent(o).btn_buy.active = !1, a.default.inst.Shop.lstItemClothes[t].getComponent(o).btn_choose.active = !1;
                        this.item.y += 60, this.isBuy ? this.btn_choose.active = !0 : this.btn_buy.active = !0
                    }
                }, e.prototype.onClickBuy = function () {
                    c.default.getInst().playSoundClick(), this.prize > a.default.inst.gamePlay.coin ? a.default.inst.PopupMoreCoin.node.active = !0 : 1 == a.default.inst.Shop.item_choice ? (s.User.getInst().skinHairList.push(this.indexItem), l.Facebook.getInst().saveData("skinHairList", s.User.getInst().skinHairList), a.default.inst.Shop.lstHairBought.push(this.indexItem), this.isBuy = !0, a.default.inst.gamePlay.coin -= this.prize, a.default.inst.Shop.total_coin.string = a.default.inst.gamePlay.coin.toString(), this.btn_buy.active = !1, this.btn_choose.active = !0, this.spr_coin.active = !1, this.cost.active = !1) : 2 == a.default.inst.Shop.item_choice && (s.User.getInst().skinHatList.push(this.indexItem + 6), l.Facebook.getInst().saveData("skinHatList", s.User.getInst().skinHatList), a.default.inst.Shop.lstHatBought.push(this.indexItem + 6), this.isBuy = !0, a.default.inst.gamePlay.coin -= this.prize, a.default.inst.Shop.total_coin.string = a.default.inst.gamePlay.coin.toString(), this.btn_buy.active = !1, this.btn_choose.active = !0, this.spr_coin.active = !1, this.cost.active = !1)
                }, e.prototype.onClickChoose = function () {
                    if (c.default.getInst().playSoundClick(), 1 == a.default.inst.Shop.item_choice) {
                        a.default.inst.Shop.changeSkinFX(), a.default.inst.Shop.model.getComponent(sp.Skeleton).setSkin(this.indexItem.toString()), a.default.inst.home.homeChar.getComponent(sp.Skeleton).setSkin(this.indexItem.toString()), a.default.inst.PopupWin.getComponent(u.default).winChar.getComponent(sp.Skeleton).setSkin(this.indexItem.toString()), a.default.inst.boardController.skinChoiceHair = this.indexItem, s.User.getInst().skinHairChoice = a.default.inst.boardController.skinChoiceHair, l.Facebook.getInst().saveData("skinHairChoice", s.User.getInst().skinHairChoice);
                        for (var t = 0; t < a.default.inst.Shop.lstItemHair.length; t++) a.default.inst.Shop.lstItemHair[t].getComponent(o).btn_choose.getComponent(cc.Button).interactable = !0, a.default.inst.Shop.lstItemHair[t].getComponent(o).btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Use", a.default.inst.Shop.lstItemHair[t].getComponent(o).item.getComponent(cc.Sprite).setMaterial(0, this.normalMat);
                        this.btn_choose.getComponent(cc.Button).interactable = !1, this.btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Used", this.item.getComponent(cc.Sprite).setMaterial(0, this.grayMat), a.default.inst.boardController.skinChoiceClothes > 0 && (a.default.inst.Shop.modelClothes.setSkin(a.default.inst.boardController.skinChoiceClothes.toString()), this.changeHat())
                    } else if (2 == a.default.inst.Shop.item_choice) {
                        for (a.default.inst.Shop.changeSkinFX(), a.default.inst.boardController.skinChoiceClothes = this.indexItem + 6, s.User.getInst().skinHatChoice = a.default.inst.boardController.skinChoiceClothes, l.Facebook.getInst().saveData("skinHatChoice", s.User.getInst().skinHatChoice), a.default.inst.Shop.modelClothes.setSkin(a.default.inst.boardController.skinChoiceClothes.toString()), this.changeHat(), t = 0; t < a.default.inst.Shop.lstItemClothes.length; t++) a.default.inst.Shop.lstItemClothes[t].getComponent(o).btn_choose.getComponent(cc.Button).interactable = !0, a.default.inst.Shop.lstItemClothes[t].getComponent(o).btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Use", a.default.inst.Shop.lstItemClothes[t].getComponent(o).item.getComponent(cc.Sprite).setMaterial(0, this.normalMat);
                        this.btn_choose.getComponent(cc.Button).interactable = !1, this.btn_choose.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "Used", this.item.getComponent(cc.Sprite).setMaterial(0, this.grayMat)
                    }
                }, e.prototype.changeHat = function () {
                    for (var t = ["Hat", "Hat2"], e = 0; e < t.length; e++) {
                        var o = a.default.inst.Shop.model.getComponent(sp.Skeleton).findSlot(t[e]),
                            n = a.default.inst.home.homeChar.getComponent(sp.Skeleton).findSlot(t[e]),
                            i = a.default.inst.Shop.modelClothes.findSlot(t[e]).getAttachment();
                        o.setAttachment(i), n.setAttachment(i)
                    }
                }, e.inst = null, r([h(cc.Node)], e.prototype, "item", void 0), r([h(cc.Node)], e.prototype, "shadow", void 0), r([h(cc.Label)], e.prototype, "itemCost", void 0), r([h(cc.Node)], e.prototype, "cost", void 0), r([h(cc.Node)], e.prototype, "spr_coin", void 0), r([h(cc.Node)], e.prototype, "btn_buy", void 0), r([h(cc.Node)], e.prototype, "btn_choose", void 0), r([h(cc.Node)], e.prototype, "btn_used", void 0), r([h(cc.Material)], e.prototype, "normalMat", void 0), r([h(cc.Material)], e.prototype, "grayMat", void 0), o = r([d], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Facebook": "Facebook",
        "../Core/User": "User",
        "../PopupWin/PopupWin": "PopupWin",
        "../gameManager": "gameManager"
    }],
    PopupDaily: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fda15ZjX7RPQp1+Zr2Yqc+L", "PopupDaily");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = t("../Slave"),
            u = t("../Core/AudioMng"),
            p = t("../Core/User"),
            d = t("../Core/Facebook"),
            h = cc._decorator,
            f = h.ccclass,
            y = h.property,
            g = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e.day1 = null, e.day2 = null, e.day3 = null, e.day4 = null, e.day5 = null, e.day6 = null, e.day7 = null, e.day = null, e.dayClaim = 0, e.lastDay = 0, e.lastMonth = 0, e.lastYear = 0, e.getDate = 0, e.getMonth = 0, e.getYear = 0, e.isFull = !1, e.day6Claimed = !1, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.onEnable = function () { }, e.prototype.onClickClaim = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return u.default.getInst().playSoundClick(), this.claimDaily(), [4, l.Slave.hidePopup(this.popup)];
                                case 1:
                                    return t.sent(), this.node.active = !1, this.dayClaim++, 7 == this.dayClaim && (this.isFull = !0), p.User.getInst().dailyReward = this.dayClaim, d.Facebook.getInst().saveData("dailyReward", p.User.getInst().dailyReward), d.Facebook.getInst().saveData("lastYear", p.User.getInst().lastYear), d.Facebook.getInst().saveData("lastMonth", p.User.getInst().lastMonth), d.Facebook.getInst().saveData("lastDay", p.User.getInst().lastDay), [2]
                            }
                        })
                    })
                }, e.prototype.onClickX2 = function () {
                    return a(this, void 0, void 0, function () {
                        var t = this;
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return u.default.getInst().playSoundClick(),
                                        //     window.FBInstant ? (d.Facebook.getInst().showAdsVideo("daily_reward", function () {
                                        //     return a(t, void 0, void 0, function () {
                                        //         return c(this, function () {
                                        //             return this.claimDailyX2(), this.node.active = !1, this.dayClaim++, 7 == this.dayClaim && (this.isFull = !0), p.User.getInst().dailyReward = this.dayClaim, d.Facebook.getInst().saveData("dailyReward", p.User.getInst().dailyReward), d.Facebook.getInst().saveData("lastYear", p.User.getInst().lastYear), d.Facebook.getInst().saveData("lastMonth", p.User.getInst().lastMonth), d.Facebook.getInst().saveData("lastDay", p.User.getInst().lastDay), [2]
                                        //         })
                                        //     })
                                        // }), [3, 3]) : [3, 1];
                                        showVideoMini((res) => {
                                            if (res) {
                                                [3, 1]
                                            }
                                        })
                                case 1:
                                    return [4, l.Slave.hidePopup(this.popup)];
                                case 2:
                                    e.sent(), this.claimDailyX2(), this.node.active = !1, this.dayClaim++, 7 == this.dayClaim && (this.isFull = !0), p.User.getInst().dailyReward = this.dayClaim, d.Facebook.getInst().saveData("dailyReward", p.User.getInst().dailyReward), d.Facebook.getInst().saveData("lastYear", p.User.getInst().lastYear), d.Facebook.getInst().saveData("lastMonth", p.User.getInst().lastMonth), d.Facebook.getInst().saveData("lastDay", p.User.getInst().lastDay), e.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.checkDaily = function () {
                    !this.isFull && p.User.getInst().dailyReward < 7 && (this.day = new Date, this.getDate = this.day.getDate(), this.getMonth = this.day.getMonth(), this.getYear = this.day.getFullYear(), this.dayClaim = p.User.getInst().dailyReward, 0 == this.dayClaim ? (p.User.getInst().lastYear = this.getYear, p.User.getInst().lastMonth = this.getMonth, p.User.getInst().lastDay = this.getDate, d.Facebook.getInst().saveData("lastYear", p.User.getInst().lastYear), d.Facebook.getInst().saveData("lastMonth", p.User.getInst().lastMonth), d.Facebook.getInst().saveData("lastDay", p.User.getInst().lastDay), this.showPopup()) : this.dayClaim > 0 && this.checkWhatDays() && (this.showPopup(), this.hideClaimed()))
                }, e.prototype.showPopup = function () {
                    l.Slave.showPopup(this.popup), this.node.active = !0
                }, e.prototype.checkWhatDays = function () {
                    if (!window.FBInstant) return !0;
                    if (p.User.getInst().lastYear == this.getYear) {
                        if (p.User.getInst().lastMonth == this.getMonth) {
                            if (p.User.getInst().lastDay == this.getDate) return !1;
                            if (p.User.getInst().lastDay < this.getDate) return !0
                        } else if (p.User.getInst().lastDay < this.getDate) return !0
                    } else if (p.User.getInst().lastYear < this.getYear) return !0
                }, e.prototype.hideClaimed = function () {
                    switch (this.dayClaim) {
                        case 0:
                            break;
                        case 1:
                            this.day1.getChildByName("on").active = !1, this.day1.getChildByName("shadow").active = !0, this.day1.getChildByName("tick").active = !0;
                            break;
                        case 2:
                            this.day1.getChildByName("on").active = !1, this.day1.getChildByName("shadow").active = !0, this.day2.getChildByName("on").active = !1, this.day2.getChildByName("shadow").active = !0, this.day1.getChildByName("tick").active = !0, this.day2.getChildByName("tick").active = !0;
                            break;
                        case 3:
                            this.day1.getChildByName("on").active = !1, this.day1.getChildByName("shadow").active = !0, this.day2.getChildByName("on").active = !1, this.day2.getChildByName("shadow").active = !0, this.day3.getChildByName("on").active = !1, this.day3.getChildByName("shadow").active = !0, this.day1.getChildByName("tick").active = !0, this.day2.getChildByName("tick").active = !0, this.day3.getChildByName("tick").active = !0;
                            break;
                        case 4:
                            this.day1.getChildByName("on").active = !1, this.day1.getChildByName("shadow").active = !0, this.day2.getChildByName("on").active = !1, this.day2.getChildByName("shadow").active = !0, this.day3.getChildByName("on").active = !1, this.day3.getChildByName("shadow").active = !0, this.day4.getChildByName("on").active = !1, this.day4.getChildByName("shadow").active = !0, this.day1.getChildByName("tick").active = !0, this.day2.getChildByName("tick").active = !0, this.day3.getChildByName("tick").active = !0, this.day4.getChildByName("tick").active = !0;
                            break;
                        case 5:
                            this.day1.getChildByName("on").active = !1, this.day1.getChildByName("shadow").active = !0, this.day2.getChildByName("on").active = !1, this.day2.getChildByName("shadow").active = !0, this.day3.getChildByName("on").active = !1, this.day3.getChildByName("shadow").active = !0, this.day4.getChildByName("on").active = !1, this.day4.getChildByName("shadow").active = !0, this.day5.getChildByName("on").active = !1, this.day5.getChildByName("shadow").active = !0, this.day1.getChildByName("tick").active = !0, this.day2.getChildByName("tick").active = !0, this.day3.getChildByName("tick").active = !0, this.day4.getChildByName("tick").active = !0, this.day5.getChildByName("tick").active = !0;
                            break;
                        case 6:
                            this.day1.getChildByName("on").active = !1, this.day1.getChildByName("shadow").active = !0, this.day2.getChildByName("on").active = !1, this.day2.getChildByName("shadow").active = !0, this.day3.getChildByName("on").active = !1, this.day3.getChildByName("shadow").active = !0, this.day4.getChildByName("on").active = !1, this.day4.getChildByName("shadow").active = !0, this.day5.getChildByName("on").active = !1, this.day5.getChildByName("shadow").active = !0, this.day6.getChildByName("on").active = !1, this.day6.getChildByName("shadow").active = !0, this.day1.getChildByName("tick").active = !0, this.day2.getChildByName("tick").active = !0, this.day3.getChildByName("tick").active = !0, this.day4.getChildByName("tick").active = !0, this.day5.getChildByName("tick").active = !0, this.day6.getChildByName("tick").active = !0
                    }
                }, e.prototype.claimDaily = function () {
                    switch (this.dayClaim) {
                        case 0:
                            s.default.inst.gamePlay.coin += 10, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin);
                            break;
                        case 1:
                            s.default.inst.gamePlay.coin += 20, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin);
                            break;
                        case 2:
                            s.default.inst.gamePlay.doubleMode = !0, p.User.getInst().doubleMode = !0, d.Facebook.getInst().saveData("doubleMode", p.User.getInst().doubleMode);
                            var t = (new Date).getTime();
                            s.default.inst.gamePlay.timeLeft = t + 36e5, p.User.getInst().timeLeft = s.default.inst.gamePlay.timeLeft, d.Facebook.getInst().saveData("timeLeft", p.User.getInst().timeLeft);
                            break;
                        case 3:
                            s.default.inst.gamePlay.coin += 30, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin)
                            break;
                        case 4:
                            s.default.inst.gamePlay.doubleMode = !0, p.User.getInst().doubleMode = !0, d.Facebook.getInst().saveData("doubleMode", p.User.getInst().doubleMode);
                            var e = (new Date).getTime();
                            s.default.inst.gamePlay.timeLeft = e + 36e5, p.User.getInst().timeLeft = s.default.inst.gamePlay.timeLeft, d.Facebook.getInst().saveData("timeLeft", p.User.getInst().timeLeft);
                            break;
                        case 5:
                            this.day6Claimed = !0;
                            break;
                        case 6:
                            s.default.inst.gamePlay.coin += 100, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin)
                    }
                }, e.prototype.claimDailyX2 = function () {
                    switch (this.dayClaim) {
                        case 0:
                            s.default.inst.gamePlay.coin += 20, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin)
                            break;
                        case 1:
                            s.default.inst.gamePlay.coin += 40, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin)
                            break;
                        case 2:
                            s.default.inst.gamePlay.doubleMode = !0, p.User.getInst().doubleMode = !0, d.Facebook.getInst().saveData("doubleMode", p.User.getInst().doubleMode);
                            var t = (new Date).getTime();
                            s.default.inst.gamePlay.timeLeft = t + 72e5, p.User.getInst().timeLeft = s.default.inst.gamePlay.timeLeft, d.Facebook.getInst().saveData("timeLeft", p.User.getInst().timeLeft);
                            break;
                        case 3:
                            s.default.inst.gamePlay.coin += 60, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin)
                            break;
                        case 4:
                            s.default.inst.gamePlay.doubleMode = !0, p.User.getInst().doubleMode = !0, d.Facebook.getInst().saveData("doubleMode", p.User.getInst().doubleMode);
                            var e = (new Date).getTime();
                            s.default.inst.gamePlay.timeLeft = e + 72e5, p.User.getInst().timeLeft = s.default.inst.gamePlay.timeLeft, d.Facebook.getInst().saveData("timeLeft", p.User.getInst().timeLeft);
                            break;
                        case 5:
                            this.day6Claimed = !0;
                            break;
                        case 6:
                            s.default.inst.gamePlay.coin += 200, d.Facebook.getInst().saveData("coin", s.default.inst.gamePlay.coin)
                    }
                }, r([y(cc.Node)], e.prototype, "popup", void 0), r([y(cc.Node)], e.prototype, "day1", void 0), r([y(cc.Node)], e.prototype, "day2", void 0), r([y(cc.Node)], e.prototype, "day3", void 0), r([y(cc.Node)], e.prototype, "day4", void 0), r([y(cc.Node)], e.prototype, "day5", void 0), r([y(cc.Node)], e.prototype, "day6", void 0), r([y(cc.Node)], e.prototype, "day7", void 0), r([f], e)
            }(cc.Component);
        o.default = g, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Facebook": "Facebook",
        "../Core/User": "User",
        "../Slave": "Slave",
        "../gameManager": "gameManager"
    }],
    PopupItem: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a94e0Fyw5FAEYx7WTtcYc2M", "PopupItem");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../Core/AudioMng"),
            l = t("../Core/Facebook"),
            u = t("../Core/ScreenCapture"),
            p = t("../Slave"),
            d = cc._decorator,
            h = d.ccclass,
            f = d.property,
            y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemShow = null, e.popup = null, e.itemList = [], e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    console.log(this)
                }, e.prototype.onEnable = function () {
                    p.Slave.showPopup(this.popup)
                }, e.prototype.onClickInvite = function () {
                    s.default.getInst().playSoundClick(), l.Facebook.getInst().logEvent("ev_click_invite_gameover", 1, {});
                    var t = u.default.inst.captureMessageImg();
                    l.Facebook.getInst().invite(t, "gameover")
                }, e.prototype.onClickShare = function () {
                    s.default.getInst().playSoundClick(), l.Facebook.getInst().logEvent("ev_click_share_gameover", 1, {});
                    var t = u.default.inst.captureShareImg();
                    l.Facebook.getInst().share(t, "gameover")
                }, e.prototype.onClickQuit = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return s.default.getInst().playSoundClick(), [4, p.Slave.hidePopup(this.popup)];
                                case 1:
                                    return t.sent(), this.node.active = !1, [2]
                            }
                        })
                    })
                }, r([f(cc.Node)], e.prototype, "itemShow", void 0), r([f(cc.Node)], e.prototype, "popup", void 0), r([f(cc.SpriteFrame)], e.prototype, "itemList", void 0), r([h], e)
            }(cc.Component);
        o.default = y, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Facebook": "Facebook",
        "../Core/ScreenCapture": "ScreenCapture",
        "../Slave": "Slave"
    }],
    PopupLose: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "caa6eU1kddBVYIdAESAN/0v", "PopupLose");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = t("../Core/Facebook"),
            u = t("../Core/AudioMng"),
            p = t("../Core/Define"),
            d = t("../Core/Define"),
            h = t("../SplashCoin"),
            f = cc._decorator,
            y = f.ccclass,
            g = f.property,
            v = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e.lblLevel = null, e.loseChar = null, e.total_coin = null, e
                }
                return i(e, t), e.prototype.onEnable = function () {
                    s.default.inst.gamePlay.isLose = !0, u.default.getInst().playSound(p.AudioConfig.LOSE), this.node.active = !0, this.lblLevel.string = "Level " + s.default.inst.gamePlay.level, this.total_coin.string = s.default.inst.gamePlay.coin.toString(), s.default.inst.Tutorial.hideTut(), s.default.inst.boardController.unscheduleAllCallbacks(), this.loadSkinEndGame()
                }, e.prototype.onClickReplay = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function () {
                            return u.default.getInst().stopSound(p.AudioConfig.LOSE), u.default.getInst().playSoundClick(), this.node.active = !1, s.default.inst.boardController.resetBoard(), s.default.inst.gamePlay.loadLevel(s.default.inst.gamePlay.level), [2]
                        })
                    })
                }, e.prototype.onClickHome = function () {
                    u.default.getInst().playSoundClick(), s.default.inst.boardController.unscheduleAllCallbacks(), s.default.inst.boardController.resetBoard(), this.node.active = !1, s.default.inst.gamePlay.node.active = !1, s.default.inst.Tutorial.hideTut(), s.default.inst.home.node.active = !0
                }, e.prototype.onClickTut = function () {
                    u.default.getInst().playSoundClick(), s.default.inst.PopupTut.node.active = !0
                }, e.prototype.onClickMap = function () {
                    u.default.getInst().playSoundClick(), s.default.inst.selectLevel.node.active = !0
                }, e.prototype.onClickWatch = function () {
                    var t = this;
                    u.default.getInst().playSoundClick(),
                        showVideoMini((res) => {
                            if (res) {
                                (s.default.inst.gamePlay.coin += d.Coin.WATCH_VIDEO, h.default.inst.splashCoin(this.total_coin.node, null)), this.total_coin.string = s.default.inst.gamePlay.coin.toString(), s.default.inst.Shop.total_coin.string = s.default.inst.gamePlay.coin.toString()
                            }
                        })

                }, e.prototype.loadSkinEndGame = function () {
                    this.loseChar.getComponent(sp.Skeleton).setSkin(s.default.inst.boardController.skinChoiceHair.toString()), s.default.inst.boardController.skinChoiceClothes > 0 && s.default.inst.Shop.modelClothes.setSkin(s.default.inst.boardController.skinChoiceClothes.toString());
                    for (var t = ["Hat", "Hat2"], e = 0; e < t.length; e++) {
                        var o = this.loseChar.getComponent(sp.Skeleton).findSlot(t[e]),
                            n = s.default.inst.Shop.modelClothes.findSlot(t[e]).getAttachment();
                        o.setAttachment(n)
                    }
                    this.loseChar.getComponent(sp.Skeleton).setAnimation(1, "LoseStart", !1), this.loseChar.getComponent(sp.Skeleton).addAnimation(1, "LoseLoop", !0)
                }, r([g(cc.Node)], e.prototype, "popup", void 0), r([g(cc.Label)], e.prototype, "lblLevel", void 0), r([g(cc.Node)], e.prototype, "loseChar", void 0), r([g(cc.Label)], e.prototype, "total_coin", void 0), r([y], e)
            }(cc.Component);
        o.default = v, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../Core/Facebook": "Facebook",
        "../SplashCoin": "SplashCoin",
        "../gameManager": "gameManager"
    }],
    PopupMoreCoin: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "488f9c+Qi9K+rSkLFmoiZSQ", "PopupMoreCoin");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = t("../Slave"),
            u = t("../Core/AudioMng"),
            p = t("../Core/Facebook"),
            d = t("../Core/Define"),
            h = t("../SplashCoin"),
            f = cc._decorator,
            y = f.ccclass,
            g = f.property,
            v = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e
                }
                return i(e, t), e.prototype.onEnable = function () {
                    l.Slave.showPopup(this.popup)
                }, e.prototype.onClickQuit = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return u.default.getInst().playSoundClick(), [4, l.Slave.hidePopup(this.popup)];
                                case 1:
                                    return t.sent(), this.node.active = !1, [2]
                            }
                        })
                    })
                }, e.prototype.onClickWatch = function () {
                    var t = this;
                    u.default.getInst().playSoundClick(),
                        showVideoMini((res) => {
                            if (res) {
                                (s.default.inst.gamePlay.coin += d.Coin.WATCH_VIDEO, h.default.inst.splashCoin(s.default.inst.Shop.coinDes, null)), s.default.inst.Shop.total_coin.string = s.default.inst.gamePlay.coin.toString(), this.node.active = !1
                            }
                        })

                }, r([g(cc.Node)], e.prototype, "popup", void 0), r([y], e)
            }(cc.Component);
        o.default = v, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../Core/Facebook": "Facebook",
        "../Slave": "Slave",
        "../SplashCoin": "SplashCoin",
        "../gameManager": "gameManager"
    }],
    PopupRank: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a8dc22/PQxCqJVLDREkt1F+", "PopupRank");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Slave"),
            c = cc._decorator,
            s = c.ccclass,
            l = c.property,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e.itemLeaderBoard = null, e.top1 = null, e.top2 = null, e.top3 = null, e.scrollView = null, e.contentScrollF = null, e.contentScrollG = null, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.onEnable = function () {
                    a.Slave.showPopup(this.popup), this.scrollView.scrollToTop(0)
                }, r([l(cc.Node)], e.prototype, "popup", void 0), r([l(cc.Prefab)], e.prototype, "itemLeaderBoard", void 0), r([l(cc.Node)], e.prototype, "top1", void 0), r([l(cc.Node)], e.prototype, "top2", void 0), r([l(cc.Node)], e.prototype, "top3", void 0), r([l(cc.ScrollView)], e.prototype, "scrollView", void 0), r([l(cc.Node)], e.prototype, "contentScrollF", void 0), r([l(cc.Node)], e.prototype, "contentScrollG", void 0), r([s], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../Slave": "Slave"
    }],
    PopupTut: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "dcb1cM/8xxMNaxfyRYZAZQU", "PopupTut");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("./Slave"),
            l = t("./Core/AudioMng"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e
                }
                return i(e, t), e.prototype.onEnable = function () {
                    s.Slave.showPopup(this.popup), this.node.active = !0
                }, e.prototype.onClickQuit = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return l.default.getInst().playSoundClick(), [4, s.Slave.hidePopup(this.popup)];
                                case 1:
                                    return t.sent(), this.node.active = !1, [2]
                            }
                        })
                    })
                }, r([d(cc.Node)], e.prototype, "popup", void 0), r([p], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "./Core/AudioMng": "AudioMng",
        "./Slave": "Slave"
    }],
    PopupWin: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "756e1UGwq9H8K8184hhb1LZ", "PopupWin");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = t("../Core/User"),
            u = t("../Core/Facebook"),
            p = t("../Core/AudioMng"),
            d = t("../Core/Define"),
            h = t("../Core/ScreenCapture"),
            f = t("../Core/Define"),
            y = t("../SplashCoin"),
            g = cc._decorator,
            v = g.ccclass,
            m = g.property,
            _ = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e.win1 = null, e.win2 = null, e.win3 = null, e.winText1 = null, e.winText2 = null, e.winText3 = null, e.star1 = null, e.star2 = null, e.star3 = null, e.totalCoin = null, e.coinBonus = null, e.firework = null, e.fwNode = null, e.winChar = null, e._countNumWin = 0, e._level = 0, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    console.log(this)
                    this.popup.getChildByName("homeBoad").active = false;
                    this.popup.getChildByName("homeBoad copy").active = false;
                }, e.prototype.onEnable = function () {
                    s.default.inst.gamePlay.isWin = !0, p.default.getInst().playSound(d.AudioConfig.WIN, .6), this.totalCoin.string = s.default.inst.gamePlay.coin.toString(), s.default.inst.boardController.unscheduleAllCallbacks(), this.checkStarWin(), this.showFirework(), this.loadSkinEndGame()
                }, e.prototype.onClickNext = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function () {
                            return p.default.getInst().stopSound(d.AudioConfig.WIN),p.default.getInst().playSoundClick(), this.stopAction(), this.fwNode.removeAllChildren(), this.node.active = !1, s.default.inst.boardController.resetBoard(), s.default.inst.gamePlay.loadLevel(s.default.inst.gamePlay.level), [2]
                        })
                    })
                }, e.prototype.checkStarWin = function () {
                    this.win1.active = !1, this.win2.active = !1, this.win3.active = !1, s.default.inst.gamePlay.totalBullet >= 2 ? (this.win1.active = !0, this.showWinFX(), this.checkStarPush(3), this.coinBonus.string = "+" + f.Coin.STAR3) : 1 == s.default.inst.gamePlay.totalBullet ? (this.win2.active = !0, this.showWinFX(), this.checkStarPush(2), this.coinBonus.string = "+" + f.Coin.STAR2) : 0 == s.default.inst.gamePlay.totalBullet && (this.win3.active = !0, this.showWinFX(), this.checkStarPush(1), this.coinBonus.string = "+" + f.Coin.STAR1)
                }, e.prototype.checkStarPush = function (t) {
                    for (var e = {
                        level: s.default.inst.gamePlay.level - 1,
                        starCount: t
                    }, o = !1, n = 0; n < l.User.getInst()._star.length; n++) s.default.inst.gamePlay.level - 1 == l.User.getInst()._star[n].level && (o = !0, t > l.User.getInst()._star[n].starCount && (l.User.getInst()._star[n].starCount = t));
                    0 == o && l.User.getInst()._star.push(e), u.Facebook.getInst().saveData("star", l.User.getInst()._star)
                }, e.prototype.onClickReplay = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function () {
                            return p.default.getInst().playSoundClick(), this.stopAction(), this.fwNode.removeAllChildren(), this.node.active = !1, s.default.inst.boardController.resetBoard(), s.default.inst.gamePlay.loadLevel(s.default.inst.gamePlay.level - 1), [2]
                        })
                    })
                }, e.prototype.onClickMap = function () {
                    p.default.getInst().playSoundClick(), s.default.inst.selectLevel.node.active = !0
                }, e.prototype.showWinFX = function () {
                    s.default.inst.gamePlay.totalBullet >= 2 ? (cc.tween(this.star1.getChildByName("starL")).set({
                        scale: 0
                    }).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.star1.getChildByName("star")).set({
                        scale: 0
                    }).delay(.2).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.star1.getChildByName("starR")).set({
                        scale: 0
                    }).delay(.4).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.winText1).set({
                        opacity: 0
                    }).delay(.9).to(.5, {
                        opacity: 255
                    }).start()) : 1 == s.default.inst.gamePlay.totalBullet ? (cc.tween(this.star2.getChildByName("starL")).set({
                        scale: 0
                    }).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.star2.getChildByName("star")).set({
                        scale: 0
                    }).delay(.2).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.star2.getChildByName("starR")).set({
                        scale: 0
                    }).delay(.4).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.winText2).set({
                        opacity: 0
                    }).delay(.9).to(.5, {
                        opacity: 255
                    }).start()) : 0 == s.default.inst.gamePlay.totalBullet && (cc.tween(this.star3.getChildByName("starL")).set({
                        scale: 0
                    }).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.star3.getChildByName("star")).set({
                        scale: 0
                    }).delay(.2).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.star3.getChildByName("starR")).set({
                        scale: 0
                    }).delay(.4).to(.5, {
                        scale: 1
                    }).start(), cc.tween(this.winText3).set({
                        opacity: 0
                    }).delay(.9).to(.5, {
                        opacity: 255
                    }).start())
                }, e.prototype.stopAction = function () {
                    this.star1.getChildByName("starL").stopAllActions(), this.star1.getChildByName("star").stopAllActions(), this.star1.getChildByName("starR").stopAllActions(), this.winText1.stopAllActions(), this.star2.getChildByName("starL").stopAllActions(), this.star2.getChildByName("star").stopAllActions(), this.star2.getChildByName("starR").stopAllActions(), this.winText2.stopAllActions(), this.star3.getChildByName("starL").stopAllActions(), this.star3.getChildByName("star").stopAllActions(), this.star3.getChildByName("starR").stopAllActions(), this.winText3.stopAllActions()
                }, e.prototype.checkShowAdsInter = function () {
                    showInterstitialMini();
                    this._countNumWin++, (this._countNumWin - 1) % 2 == 0 && s.default.inst.gamePlay.level - 1 != 1 && u.Facebook.getInst().showAdsInter("winlevel")
                }, e.prototype.showFirework = function () {
                    var t = cc.instantiate(this.firework);
                    this.fwNode.addChild(t)
                }, e.prototype.onClickShare = function () {
                    p.default.getInst().playSoundClick(), u.Facebook.getInst().logEvent("ev_click_share_gameover", 1, {});
                    var t = h.default.inst.captureShareImg();
                    u.Facebook.getInst().share(t, "gameover")
                }, e.prototype.onClickInvite = function () {
                    p.default.getInst().playSoundClick(), u.Facebook.getInst().logEvent("ev_click_invite_gameover", 1, {});
                    var t = h.default.inst.captureMessageImg();
                    u.Facebook.getInst().invite(t, "gameover")
                }, e.prototype.onClickWatch = function () {
                    var t = this;

                    p.default.getInst().playSoundClick(),
                        showVideoMini((res) => {
                            if (res) {
                                s.default.inst.gamePlay.coin += f.Coin.WATCH_VIDEO, y.default.inst.splashCoin(this.totalCoin.node, null),
                                    this.totalCoin.string = s.default.inst.gamePlay.coin.toString(),
                                    s.default.inst.Shop.total_coin.string = s.default.inst.gamePlay.coin.toString()
                            }
                        })

                }, e.prototype.onClickHome = function () {
                    p.default.getInst().playSoundClick(), this.stopAction(), this.node.active = !1, s.default.inst.boardController.unscheduleAllCallbacks(), s.default.inst.boardController.resetBoard(), s.default.inst.gamePlay.node.active = !1, s.default.inst.Tutorial.hideTut(), s.default.inst.home.node.active = !0
                }, e.prototype.loadSkinEndGame = function () {
                    this.winChar.getComponent(sp.Skeleton).setSkin(s.default.inst.boardController.skinChoiceHair.toString()), s.default.inst.boardController.skinChoiceClothes > 0 && s.default.inst.Shop.modelClothes.setSkin(s.default.inst.boardController.skinChoiceClothes.toString());
                    for (var t = ["Hat", "Hat2"], e = 0; e < t.length; e++) {
                        var o = this.winChar.getComponent(sp.Skeleton).findSlot(t[e]),
                            n = s.default.inst.Shop.modelClothes.findSlot(t[e]).getAttachment();
                        o.setAttachment(n)
                    }
                }, r([m(cc.Node)], e.prototype, "popup", void 0), r([m(cc.Node)], e.prototype, "win1", void 0), r([m(cc.Node)], e.prototype, "win2", void 0), r([m(cc.Node)], e.prototype, "win3", void 0), r([m(cc.Node)], e.prototype, "winText1", void 0), r([m(cc.Node)], e.prototype, "winText2", void 0), r([m(cc.Node)], e.prototype, "winText3", void 0), r([m(cc.Node)], e.prototype, "star1", void 0), r([m(cc.Node)], e.prototype, "star2", void 0), r([m(cc.Node)], e.prototype, "star3", void 0), r([m(cc.Label)], e.prototype, "totalCoin", void 0), r([m(cc.Label)], e.prototype, "coinBonus", void 0), r([m(cc.Prefab)], e.prototype, "firework", void 0), r([m(cc.Node)], e.prototype, "fwNode", void 0), r([m(cc.Node)], e.prototype, "winChar", void 0), r([v], e)
            }(cc.Component);
        o.default = _, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../Core/Facebook": "Facebook",
        "../Core/ScreenCapture": "ScreenCapture",
        "../Core/User": "User",
        "../SplashCoin": "SplashCoin",
        "../gameManager": "gameManager"
    }],
    ScreenCapture: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "0134aCL4vhIkahYxm/CCKhY", "ScreenCapture");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Social/FBImage"),
            c = cc._decorator,
            s = c.ccclass,
            l = c.property,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.shareImg = null, e.messageImg = null, e.shareHelp = null, e.messageHelp = null, e
                }
                var o;
                return i(e, t), o = e, e.prototype.onLoad = function () {
                    o.inst = this, this.shareImg.active = !1, this.messageImg.active = !1
                }, e.prototype.captureShareImg = function () {
                    var t;
                    return this.shareImg.active = !0, this.shareImg.getComponent(a.default).init(), t = this.capture(this.shareImg), this.shareImg.active = !1, t
                }, e.prototype.captureMessageImg = function () {
                    var t;
                    return this.messageImg.active = !0, this.messageImg.getComponent(a.default).init(), t = this.capture(this.messageImg), this.messageImg.active = !1, t
                }, e.prototype.capture = function (t) {
                    var e = new cc.Node;
                    e.parent = t.parent, e.position = t.position;
                    var o = e.addComponent(cc.Camera);
                    o.cullingMask = 4294967295, o.alignWithScreen = !1, o.orthoSize = t.height / 2;
                    var n = new cc.RenderTexture;
                    n.initWithSize(t.width, t.height, 36168), o.targetTexture = n, o.render();
                    var i = n.readPixels(),
                        r = document.createElement("canvas"),
                        a = r.getContext("2d"),
                        c = r.width = n.width,
                        s = r.height = n.height;
                    r.width = n.width, r.height = n.height;
                    for (var l = 4 * c, u = 0; u < s; u++) {
                        for (var p = s - 1 - u, d = a.createImageData(c, 1), h = p * c * 4, f = 0; f < l; f++) d.data[f] = i[h + f];
                        a.putImageData(d, 0, u)
                    }
                    return e.destroy(), r.toDataURL("image/png")
                }, e.prototype.createImg = function (t) {
                    var e = this.capture(t),
                        o = document.createElement("img");
                    return o.src = e, o
                }, e.prototype.captureToSpriteFrame = function (t) {
                    var e = this.createImg(t),
                        o = new cc.Texture2D;
                    o.initWithElement(e);
                    var n = new cc.SpriteFrame;
                    return n.setTexture(o), n
                }, e.inst = null, r([l(cc.Node)], e.prototype, "shareImg", void 0), r([l(cc.Node)], e.prototype, "messageImg", void 0), r([l(cc.Node)], e.prototype, "shareHelp", void 0), r([l(cc.Node)], e.prototype, "messageHelp", void 0), o = r([s], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../Social/FBImage": "FBImage"
    }],
    SelectLevel: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5c7db2S+7JOCKv1NzsY5NOD", "SelectLevel");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../Core/AudioMng"),
            l = t("../Core/Define"),
            u = t("../Core/Define"),
            p = t("../Core/User"),
            d = t("../gameManager"),
            h = t("../Slave"),
            f = t("./ItemSelectLevel"),
            y = cc._decorator,
            g = y.ccclass,
            v = y.property,
            m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.nContent = null, e.prfItemSelectLevel = null, e.pgvLevel = null, e.btnNextPage = null, e.btnPrevPage = null, e.nTop = null, e._lstLevel = [], e._curPageIndex = 0, e._maxPage = 0, e._levelTemp = 0, e._indexMaxLevel = 0, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    this._curPageIndex = 0, this._levelTemp = 1, this.pgvLevel.node.on("page-turning", this.handlePageTurning, this), this._indexMaxLevel = Math.floor((p.User.getInst()._level - 1) / u.SelectLevelConfig.MAX_LEVEL)
                }, e.prototype.onEnable = function () {
                    var t = this._indexMaxLevel;
                    this._levelTemp = this.findLevelTemp(), this._indexMaxLevel = Math.floor((p.User.getInst()._level - 1) / u.SelectLevelConfig.MAX_LEVEL), t != this._indexMaxLevel && this.drawSelectLevel(), this.movePageToCurLevel(), this.updateListLevel(), this.update2Button(), h.Slave.showPopup(this.node)
                }, e.prototype.moveIn = function () {
                    this.nTop.y = cc.winSize.height;
                    var t = cc.winSize.height / 2 - this.nTop.height / 2;
                    h.Slave.fxMoveY(this.nTop, t, .5), this.pgvLevel.node.y = -cc.winSize.height, h.Slave.fxMoveY(this.pgvLevel.node, -25, .5)
                }, e.prototype.moveBack = function () {
                    h.Slave.fxMoveY(this.nTop, cc.winSize.height, .5), h.Slave.fxMoveY(this.pgvLevel.node, -cc.winSize.height, .5)
                }, e.prototype.findLevelTemp = function () {
                    for (var t = p.User.getInst()._level; t - u.SelectLevelConfig.MAX_LEVEL > 0;) t -= u.SelectLevelConfig.MAX_LEVEL;
                    return t
                }, e.prototype.handlePageTurning = function (t) {
                    s.default.getInst().playSound(l.AudioConfig.CHANGE_PAGE), this._curPageIndex = t.getCurrentPageIndex(), this.update2Button()
                }, e.prototype.drawSelectLevel = function () {
                    this._indexMaxLevel = Math.floor((p.User.getInst()._level - 1) / u.SelectLevelConfig.MAX_LEVEL);
                    var t = 1 + this._indexMaxLevel * u.SelectLevelConfig.MAX_LEVEL,
                        e = u.SelectLevelConfig.MAX_LEVEL / u.SelectLevelConfig.NUM_LEVEL_PER_PAGE;
                    this._maxPage = e - 1, this.nContent.removeAllChildren(), this._lstLevel.length = 0;
                    for (var o = 0; o < e; o++) {
                        var n = new cc.Node;
                        n.width = this.pgvLevel.node.width;
                        var i = n.addComponent(cc.Layout);
                        i.type = cc.Layout.Type.GRID, i.resizeMode = cc.Layout.ResizeMode.CONTAINER, i.startAxis = cc.Layout.AxisDirection.HORIZONTAL, i.paddingTop = 10, i.paddingBottom = 10, i.paddingLeft = 45, i.paddingRight = 40, i.spacingX = 30, i.spacingY = 42;
                        for (var r = 0; r < u.SelectLevelConfig.NUM_LEVEL_PER_PAGE; r++) {
                            var a = cc.instantiate(this.prfItemSelectLevel);
                            a.getComponent(f.default).initItem(t), n.addChild(a), this._lstLevel.push(a), t++
                        }
                        this.nContent.addChild(n)
                    }
                }, e.prototype.updateListLevel = function () {
                    for (var t = 0; t < this._levelTemp; t++) this._lstLevel[t].getComponent(f.default).updateInfo(t + 1)
                }, e.prototype.movePageToCurLevel = function () {
                    var t = Math.floor((this._levelTemp - 1) / u.SelectLevelConfig.NUM_LEVEL_PER_PAGE);
                    this.movePageToLevelWant(t, 0), this._curPageIndex = t
                }, e.prototype.movePageToLevelWant = function (t, e) {
                    void 0 === e && (e = u.SelectLevelConfig.TIME_MOVE_PAGE), this.pgvLevel.scrollToPage(t, e)
                }, e.prototype.onClickNextPage = function () {
                    this._curPageIndex++, this.movePageToLevelWant(this._curPageIndex), this.update2Button()
                }, e.prototype.onClickPrevPage = function () {
                    this._curPageIndex--, this.movePageToLevelWant(this._curPageIndex), this.update2Button()
                }, e.prototype.update2Button = function () {
                    this.btnPrevPage.active = this._curPageIndex > 0, this.btnNextPage.active = this._curPageIndex < this._maxPage
                }, e.prototype.onClickBackHome = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return s.default.getInst().playSoundClick(), [4, h.Slave.hidePopup(this.node)];
                                case 1:
                                    return t.sent(), this.node.active = !1, [2]
                            }
                        })
                    })
                }, e.prototype.onClickShop = function () {
                    s.default.getInst().playSoundClick(), d.default.inst.Shop.node.active = !0
                }, r([v(cc.Node)], e.prototype, "nContent", void 0), r([v(cc.Prefab)], e.prototype, "prfItemSelectLevel", void 0), r([v(cc.PageView)], e.prototype, "pgvLevel", void 0), r([v(cc.Node)], e.prototype, "btnNextPage", void 0), r([v(cc.Node)], e.prototype, "btnPrevPage", void 0), r([v(cc.Node)], e.prototype, "nTop", void 0), r([g], e)
            }(cc.Component);
        o.default = m, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../Core/User": "User",
        "../Slave": "Slave",
        "../gameManager": "gameManager",
        "./ItemSelectLevel": "ItemSelectLevel"
    }],
    Services: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e879aM8e3ROyrYyy5yOpkYo", "Services"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Services = void 0;
        var n = t("../Core/User"),
            i = "https://fbServices.zonmob.com/",
            r = "621245265869716",
            a = "admin",
            c = "VHVhbmxkMTUxMCE=";
        o.Services = {
            urlGetCurrentPlayer: {
                url: i + "lb/getMainPlayer",
                method: "GET"
            },
            urlGetLeaderboard: {
                url: i + "lb/leaderBoardByGame",
                method: "POST"
            },
            urlPostHighScore: {
                url: i + "lb/postPoint",
                method: "POST"
            },
            urlDelHighScore: {
                url: i + "lb/dropPlayer",
                method: "GET"
            },
            init: function () { },
            obStoreTime: {},
            onServerRespond: function (t, e, o) {
                if (200 == t.status) {
                    var n = void 0;
                    try {
                        n = JSON.parse(t.responseText)
                    } catch (i) { }
                    "object" == typeof n && null !== n || (n = {}), e && e(n)
                } else o && o(t.responseText)
            },
            queryServerApi: function (t, e, o, n) {
                var i = this,
                    r = t.url;
                if ("GET" == t.method) {
                    var a = "";
                    for (var c in e) a += "&" + c + "=" + encodeURIComponent(e[c]);
                    r += "?" + a.replace("&", "")
                }
                var s = cc.loader.getXMLHttpRequest();
                s.open(t.method, r), s.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), window._accessToken && s.setRequestHeader("X-Access-Token", window._accessToken), "GET" == t.method ? s.send() : s.send(JSON.stringify(e)), s.onreadystatechange = function () {
                    4 == s.readyState && i.onServerRespond(s, o, n, t.url)
                }
            },
            getLeaderBoardFriend: function (t, e, o) {
                var n = this;
                if (window.FBInstant) {
                    var i = this.genID(),
                        s = new Date;
                    this.obStoreTime[i] = {
                        start: s.getTime()
                    }, t || (t = "");
                    var l = {
                        listFriend: t,
                        gameId: r,
                        name: a,
                        pwd: c
                    };
                    this.queryServerApi(this.urlGetLeaderboard, l, function (t) {
                        var o = new Date;
                        n.obStoreTime[i].start, n.obStoreTime[i].end = o.getTime(), e && e(t)
                    }, function () {
                        o && o()
                    })
                }
            },
            pushCurrentHighScore: function (t, e, o, i) {
                var s = this;
                if (window.FBInstant) {
                    var l = this.genID(),
                        u = new Date;
                    this.obStoreTime[l] = {
                        start: u.getTime()
                    }, this.queryServerApi(this.urlPostHighScore, {
                        gameId: r,
                        playerId: t,
                        playerName: n.User.getInst()._userName,
                        playerPhoto: n.User.getInst()._photo,
                        score: e,
                        name: a,
                        pwd: c
                    }, function (t) {
                        var e = new Date;
                        s.obStoreTime[l].start, s.obStoreTime[l].end = e.getTime(), o && o(t)
                    }, function () {
                        i && i()
                    })
                }
            },
            getCurrentPlayer: function (t, e) {
                if (window.FBInstant) {
                    var o = this.genID(),
                        n = new Date;
                    this.obStoreTime[o] = {
                        start: n.getTime()
                    }, this.queryServerApi(this.urlGetCurrentPlayer, {
                        playerId: FBInstant.player.getID(),
                        gameId: r,
                        name: a,
                        pwd: c
                    }, function (e) {
                        t && t(e)
                    }, function () {
                        e && e()
                    })
                }
            },
            delHighScore: function (t, e, o) {
                if (window.FBInstant) {
                    var n = this.genID(),
                        i = new Date;
                    this.obStoreTime[n] = {
                        start: i.getTime()
                    }, this.queryServerApi(this.urlDelHighScore, {
                        gameId: r,
                        playerId: FBInstant.player.getID(),
                        name: a,
                        pwd: c
                    }, function (t) {
                        e && e(t)
                    }, function () {
                        o && o()
                    })
                }
            },
            genID: function () {
                return "_" + Math.random().toString(36).substr(2, 9)
            }
        }, cc._RF.pop()
    }, {
        "../Core/User": "User"
    }],
    Shop: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "67c8eLmB3FNEIrHNiucfD74", "Shop");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = t("../Slave"),
            u = t("../Core/AudioMng"),
            p = t("./ItemShop"),
            d = t("../Core/Define"),
            h = t("../Core/User"),
            f = t("../Core/Facebook"),
            y = t("../Core/Define"),
            g = t("../SplashCoin"),
            v = cc._decorator,
            m = v.ccclass,
            _ = v.property,
            b = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.popup = null, e.pageView = null, e.itemShop = null, e.content = null, e.model = null, e.btn_hair = null, e.btn_clothe = null, e.btn_wp = null, e.total_coin = null, e.next = null, e.prev = null, e.modelClothes = null, e.smoke = null, e.prf_smoke = null, e.coinDes = null, e.buttonStatus = [], e.hair_list = [], e.clothes_list = [], e.wp_list = [], e.item_choice = 0, e.indexMaxItem = 0, e.maxPage = 0, e.curPageIndex = 0, e.hairPrize = [d.Item.ITEM1, d.Item.ITEM2, d.Item.ITEM3, d.Item.ITEM4, d.Item.ITEM5, d.Item.ITEM6], e.hatPrize = [d.Item.ITEM7, d.Item.ITEM8, d.Item.ITEM9], e.lstItemHair = [], e.lstItemClothes = [], e.lstHairBought = [], e.lstHatBought = [], e.hairCurrent = -1, e.hatCurrent = -1, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    this.item_choice = 1, this.changeButtonStatus(), this.curPageIndex = 0, this.pageView.node.on("page-turning", this.handlePageTurning, this);
                    var t = 0,
                        e = this.hair_list.length / 3;
                    this.maxPage = e - 1, this.content.removeAllChildren(), this.lstItemHair.length = 0;
                    for (var o = 0; o < e; o++) {
                        var n = new cc.Node;
                        n.width = this.pageView.node.width;
                        var i = n.addComponent(cc.Layout);
                        i.type = cc.Layout.Type.HORIZONTAL, i.resizeMode = cc.Layout.ResizeMode.CONTAINER, i.paddingLeft = 20, i.paddingRight = 0, i.spacingX = 10, i.spacingY = 0;
                        for (var r = 0; r < 3; r++) {
                            var a = cc.instantiate(this.itemShop);
                            a.getComponent(p.default).init(t), n.addChild(a), this.lstItemHair.push(a), t++
                        }
                        this.content.addChild(n)
                    }
                    for (s.default.inst.Shop.lstItemHair[0].getComponent(p.default).item.getComponent(cc.Sprite).setMaterial(0, s.default.inst.Shop.lstItemHair[0].getComponent(p.default).grayMat), this.total_coin.string = s.default.inst.gamePlay.coin.toString(), o = 0; o < h.User.getInst().skinHairList.length; o++) this.lstHairBought.push(h.User.getInst().skinHairList[o]);
                    for (o = 0; o < h.User.getInst().skinHatList.length; o++) this.lstHatBought.push(h.User.getInst().skinHatList[o])
                }, e.prototype.onEnable = function () {
                    l.Slave.showPopup(this.popup), s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceHair - 1].getComponent(p.default).item.getComponent(cc.Sprite).setMaterial(0, s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceHair - 1].getComponent(p.default).grayMat), s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceHair - 1].getComponent(p.default).btn_choose.getComponent(cc.Button).interactable = !1, null != s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceClothes - 1] && (s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceClothes - 1].getComponent(p.default).btn_choose.getComponent(cc.Button).interactable = !1, s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceClothes - 1].getComponent(p.default).btn_buy.active = !1), this.loadHairItem(), this.total_coin.string = s.default.inst.gamePlay.coin.toString(), this.update2Button()
                }, e.prototype.onClickHair = function () {
                    u.default.getInst().playSoundClick(), this.loadHairItem()
                }, e.prototype.loadHairItem = function () {
                    this.item_choice = 1;
                    var t = 0,
                        e = this.hair_list.length / 3;
                    this.maxPage = e - 1, this.content.removeAllChildren(), this.lstItemHair.length = 0;
                    for (var o = 0; o < e; o++) {
                        var n = new cc.Node;
                        n.width = this.pageView.node.width;
                        var i = n.addComponent(cc.Layout);
                        i.type = cc.Layout.Type.HORIZONTAL, i.resizeMode = cc.Layout.ResizeMode.CONTAINER, i.paddingLeft = 20, i.paddingRight = 0, i.spacingX = 10, i.spacingY = 0;
                        for (var r = 0; r < 3; r++) {
                            var a = cc.instantiate(this.itemShop);
                            a.getComponent(p.default).init(t), n.addChild(a), this.lstItemHair.push(a), t++
                        }
                        this.content.addChild(n)
                    }
                    s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceHair - 1].getComponent(p.default).item.getComponent(cc.Sprite).setMaterial(0, s.default.inst.Shop.lstItemHair[s.default.inst.boardController.skinChoiceHair - 1].getComponent(p.default).grayMat), this.changeButtonStatus()
                }, e.prototype.onClickClothes = function () {
                    u.default.getInst().playSoundClick(), this.item_choice = 2;
                    var t = 0,
                        e = this.clothes_list.length / 3;
                    this.maxPage = e - 1, this.content.removeAllChildren(), this.lstItemClothes.length = 0, this.curPageIndex = 0;
                    for (var o = 0; o < e; o++) {
                        var n = new cc.Node;
                        n.width = this.pageView.node.width;
                        var i = n.addComponent(cc.Layout);
                        i.type = cc.Layout.Type.HORIZONTAL, i.resizeMode = cc.Layout.ResizeMode.CONTAINER, i.paddingLeft = 7, i.paddingRight = 0, i.spacingX = 7, i.spacingY = 0;
                        for (var r = 0; r < 3; r++) {
                            var a = cc.instantiate(this.itemShop);
                            a.getComponent(p.default).init(t), n.addChild(a), this.lstItemClothes.push(a), t++
                        }
                        this.content.addChild(n)
                    }
                    this.changeButtonStatus()
                }, e.prototype.onClickWp = function () {
                    u.default.getInst().playSoundClick(), this.item_choice = 3, this.changeButtonStatus()
                }, e.prototype.changeButtonStatus = function () {
                    switch (this.item_choice) {
                        case 1:
                            this.btn_hair.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[1], this.btn_clothe.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[0], this.btn_wp.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[0], this.update2Button();
                            break;
                        case 2:
                            this.btn_hair.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[0], this.btn_clothe.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[1], this.btn_wp.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[0], this.update2Button();
                            break;
                        case 3:
                            this.btn_hair.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[0], this.btn_clothe.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[0], this.btn_wp.getComponent(cc.Sprite).spriteFrame = this.buttonStatus[1], this.update2Button()
                    }
                }, e.prototype.update2Button = function () {
                    this.prev.active = !1, this.next.active = !1, this.prev.active = this.curPageIndex > 0, this.next.active = this.curPageIndex < this.maxPage
                }, e.prototype.onClickQuit = function () {
                    return a(this, void 0, void 0, function () {
                        var t;
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return u.default.getInst().playSoundClick(), [4, l.Slave.hidePopup(this.popup)];
                                case 1:
                                    for (e.sent(), t = 0; t < s.default.inst.Shop.lstItemHair.length; t++) s.default.inst.Shop.lstItemHair[t].getComponent(p.default).item.getComponent(cc.Sprite).setMaterial(0, s.default.inst.Shop.lstItemHair[t].getComponent(p.default).normalMat), s.default.inst.Shop.lstItemHair[t].getComponent(p.default).item.y = 0, s.default.inst.Shop.lstItemHair[t].getComponent(p.default).btn_buy.active = !1, s.default.inst.Shop.lstItemHair[t].getComponent(p.default).btn_choose.active = !1;
                                    for (t = 0; t < s.default.inst.Shop.lstItemClothes.length; t++) s.default.inst.Shop.lstItemClothes[t].getComponent(p.default).item.y = 0, s.default.inst.Shop.lstItemClothes[t].getComponent(p.default).btn_buy.active = !1, s.default.inst.Shop.lstItemClothes[t].getComponent(p.default).btn_choose.active = !1;
                                    return this.node.active = !1, [2]
                            }
                        })
                    })
                }, e.prototype.onClickNext = function () {
                    u.default.getInst().playSoundClick(), this.curPageIndex++, this.pageView.scrollToPage(this.curPageIndex, .5), this.update2Button()
                }, e.prototype.onClickPrev = function () {
                    u.default.getInst().playSoundClick(), this.curPageIndex--, this.pageView.scrollToPage(this.curPageIndex, .5), this.update2Button()
                }, e.prototype.handlePageTurning = function (t) {
                    this.curPageIndex = t.getCurrentPageIndex(), this.update2Button()
                }, e.prototype.checkSkinHairStart = function (t) {
                    if (window.FBInstant)
                        for (var e = 0; e < h.User.getInst().skinHairList.length; e++)
                            if (h.User.getInst().skinHairList[e] == t) return !0
                }, e.prototype.checkSkinHatStart = function (t) {
                    if (window.FBInstant)
                        for (var e = 0; e < h.User.getInst().skinHatList.length; e++)
                            if (h.User.getInst().skinHatList[e] == t) return !0
                }, e.prototype.loadSkinStart = function () {
                    window.FBInstant && (s.default.inst.boardController.skinChoiceHair = h.User.getInst().skinHairChoice, s.default.inst.boardController.skinChoiceClothes = h.User.getInst().skinHatChoice)
                }, e.prototype.changeSkinFX = function () {
                    var t = cc.instantiate(this.prf_smoke);
                    this.smoke.addChild(t)
                }, e.prototype.onClickWatch = function () {
                    var t = this;
                    u.default.getInst().playSoundClick(),
                        showVideoMini((res) => {
                            if (res) {
                                (s.default.inst.gamePlay.coin += y.Coin.WATCH_VIDEO, g.default.inst.splashCoin(this.coinDes, null)), this.total_coin.string = s.default.inst.gamePlay.coin.toString()
                            }
                        })

                }, r([_(cc.Node)], e.prototype, "popup", void 0), r([_(cc.PageView)], e.prototype, "pageView", void 0), r([_(cc.Prefab)], e.prototype, "itemShop", void 0), r([_(cc.Node)], e.prototype, "content", void 0), r([_(cc.Node)], e.prototype, "model", void 0), r([_(cc.Node)], e.prototype, "btn_hair", void 0), r([_(cc.Node)], e.prototype, "btn_clothe", void 0), r([_(cc.Node)], e.prototype, "btn_wp", void 0), r([_(cc.Label)], e.prototype, "total_coin", void 0), r([_(cc.Node)], e.prototype, "next", void 0), r([_(cc.Node)], e.prototype, "prev", void 0), r([_(sp.Skeleton)], e.prototype, "modelClothes", void 0), r([_(cc.Node)], e.prototype, "smoke", void 0), r([_(cc.Prefab)], e.prototype, "prf_smoke", void 0), r([_(cc.Node)], e.prototype, "coinDes", void 0), r([_(cc.SpriteFrame)], e.prototype, "buttonStatus", void 0), r([_(cc.SpriteFrame)], e.prototype, "hair_list", void 0), r([_(cc.SpriteFrame)], e.prototype, "clothes_list", void 0), r([_(cc.SpriteFrame)], e.prototype, "wp_list", void 0), r([m], e)
            }(cc.Component);
        o.default = b, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../Core/Facebook": "Facebook",
        "../Core/User": "User",
        "../Slave": "Slave",
        "../SplashCoin": "SplashCoin",
        "../gameManager": "gameManager",
        "./ItemShop": "ItemShop"
    }],
    Slave: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a1035zrKTVBJJbq/WATyMDn", "Slave"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Slave = void 0;
        var n = function () {
            function t() { }
            return t.scrambleList = function (e, o) {
                for (var n = 0; n < o; n++) e.push(t.popRandomElement(e))
            }, t.pickRandomElement = function (t) {
                return t[Math.floor(Math.random() * t.length)]
            }, t.popRandomElement = function (t) {
                var e = Math.floor(Math.random() * t.length);
                return t.splice(e, 1)[0]
            }, t.compareListTo2DList = function (t, e) {
                for (var o = [], n = t.length, i = 0, r = 0; n > 0;) {
                    0 == r && o.push([]);
                    var a = t[t.length - n];
                    o[i].push(a), n--, ++r == e && (r = 0, i++)
                }
                return o
            }, t.showPopup = function (t) {
                return t.active = !0, t.scale = .25, t.stopAllActions(), new Promise(function (e) {
                    cc.tween(t).to(.25 * (1.15 - .25), {
                        scale: 1.15
                    }).to(.25 * (1.15 - 1), {
                        scale: 1
                    }).call(e).start()
                })
            }, t.hidePopup = function (t) {
                return t.active = !0, t.scale = 1, t.stopAllActions(), new Promise(function (e) {
                    cc.tween(t).to(.25 * (1.15 - 1), {
                        scale: 1.15
                    }).to(.25 * (1.15 - .25), {
                        scale: .25
                    }).set({
                        active: !1
                    }).call(e).start()
                })
            }, t.showOut = function (t) {
                return t.active = !0, t.scale = .25, t.stopAllActions(), new Promise(function (e) {
                    cc.tween(t).to(.25, {
                        scale: 1
                    }).call(e).start()
                })
            }, t.showIn = function (t) {
                return t.active = !0, t.scale = 1, t.stopAllActions(), new Promise(function (e) {
                    cc.tween(t).to(.25, {
                        scale: .25
                    }).call(e).start()
                })
            }, t.fadeOutIn = function (t) {
                t.active = !0, t.stopAllActions(), cc.tween(t).set({
                    opacity: 255
                }).repeatForever(cc.tween().to(.3, {
                    opacity: 100
                }).to(.3, {
                    opacity: 255
                })).start()
            }, t.fadeOut = function (t) {
                return t.active = !0, t.stopAllActions(), new Promise(function (e) {
                    cc.tween(t).set({
                        opacity: 0
                    }).to(.3, {
                        opacity: 255
                    }).call(e).start()
                })
            }, t.fadeIn = function (t) {
                return t.active = !0, t.stopAllActions(), new Promise(function (e) {
                    cc.tween(t).set({
                        opacity: 255
                    }).to(.3, {
                        opacity: 0
                    }).call(e).start()
                })
            }, t.spinForever = function (t, e) {
                t.active = !0, t.stopAllActions(), cc.tween(t).by(e, {
                    angle: -360
                }).repeatForever().start()
            }, t.runNumber = function (e, o, n) {
                var i = (n - o) / 10;
                e.node.stopAllActions(), cc.tween(e.node).call(function () {
                    e.string = t.formatNumberWithDot(Math.round(o)), o += i
                }).repeat(10, cc.tween().to(.75 * .05, {
                    scale: 1.3
                }).to(.0125, {
                    scale: 1
                }).call(function () {
                    e.string = t.formatNumberWithDot(Math.round(o)), o += i
                })).set({
                    scale: 1
                }).start()
            }, t.formatNumberWithDot = function (t) {
                var e = "en_US";
                try {
                    e = FBInstant.getLocale()
                } catch (n) { }
                var o = ".";
                switch (e) {
                    case "en_US":
                    case "en_GB":
                    case "th_TH":
                        o = ",";
                        break;
                    case "fr_FR":
                    case "fr_CA":
                    case "ru_RU":
                        o = " ";
                        break;
                    case "pl_PL":
                    case "it_IT":
                    case "hu_HU":
                        o = ""
                }
                return t.toString().split(".")[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, o)
            }, t.delay = function (t) {
                return new Promise(function (e) {
                    cc.tween(cc.Canvas.instance).delay(t).call(e).start()
                })
            }, t.fxMoveY = function (t, e, o) {
                cc.tween(t).to(o, {
                    y: e
                }).start()
            }, t
        }();
        o.Slave = n, cc._RF.pop()
    }, {}],
    SplashCoin: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "514a9tX9U5NUrgIChbuGhIq", "SplashCoin");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./gameManager"),
            c = cc._decorator,
            s = c.ccclass,
            l = c.property,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.coinPrefab = null, e
                }
                var o;
                return i(e, t), o = e, e.prototype.onLoad = function () {
                    o.inst = this
                }, e.prototype.splashCoin = function (t, e) {
                    for (var o = t.parent.convertToWorldSpaceAR(t.position), n = a.default.inst.node.convertToNodeSpaceAR(o), i = 0; i < 10; i++) {
                        var r = cc.instantiate(this.coinPrefab);
                        this.node.addChild(r), this.splash(r, n, i, e)
                    }
                }, e.prototype.splash = function (t, e, o, n) {
                    var i = -this.node.width / 2 + Math.random() * this.node.width,
                        r = -this.node.height / 2 + Math.random() * this.node.height,
                        a = .3 * Math.random();
                    cc.tween(t).to(.5, {
                        position: cc.v2(i, r)
                    }, {
                        easing: "circOut"
                    }).delay(a).to(.5, {
                        position: cc.v2(e.x, e.y)
                    }).call(function () {
                        9 == o && n && n(), t.destroy()
                    }).start()
                }, e.inst = null, r([l(cc.Prefab)], e.prototype, "coinPrefab", void 0), o = r([s], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "./gameManager": "gameManager"
    }],
    TNT: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "5616c24vEtMtYWDhyHE5hXc", "TNT");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Core/AudioMng"),
            c = t("../Core/Define"),
            s = t("../gameManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.explosion = null, e.tntNode = null, e.boomFX = null, e.isBoom = !1, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e) {
                    this.node.x = t, this.node.y = e
                }, e.prototype.onBeginContact = function (t, e, o) {
                    var n = this,
                        i = t.getWorldManifold();
                    if (0 != i.points.length) {
                        var r = e.body.getLinearVelocityFromWorldPoint(i.points[0]),
                            s = o.body.getLinearVelocityFromWorldPoint(i.points[0]),
                            l = r.sub(s);
                        Math.sqrt(l.x * l.x + l.y * l.y) > 400 && 99 != o.tag && 98 != o.tag && (this.tntNode.active = !1, this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1, a.default.getInst().playSound(c.AudioConfig.TNT, .5), this.explosion.active = !0, this.showBoomFX(), this.isBoom = !0)
                    } (99 == o.tag || 30 == o.tag && o.node != this.node) && (this.tntNode.active = !1, this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1, a.default.getInst().playSound(c.AudioConfig.TNT, .5), this.explosion.active = !0, this.showBoomFX(), this.isBoom = !0), this.isBoom && (this.isBoom = !1, this.scheduleOnce(function () {
                        n.node.active = !1
                    }, .1))
                }, e.prototype.showBoomFX = function () {
                    var t = cc.instantiate(this.boomFX);
                    t.x = this.node.x, t.y = this.node.y + this.node.height / 2, s.default.inst.boardController.node.addChild(t)
                }, r([p(cc.Node)], e.prototype, "explosion", void 0), r([p(cc.Node)], e.prototype, "tntNode", void 0), r([p(cc.Prefab)], e.prototype, "boomFX", void 0), r([u], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../gameManager": "gameManager"
    }],
    Tutorial: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "89456srMjlCPo7pTfzaigYm", "Tutorial");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./gameManager"),
            c = cc._decorator,
            s = c.ccclass,
            l = c.property,
            u = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hand = null, e.tut1 = null, e.tut2 = null, e.tut3 = null, e.isDoneTut1 = !1, e.isDoneTut2 = !1, e.isDoneTut3 = !1, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    this.tut1.active = !1, this.tut2.active = !1, this.tut3.active = !1
                }, e.prototype.checkShowTut = function () {
                    switch (a.default.inst.gamePlay.level) {
                        case 1:
                            this.showTut1();
                            break;
                        case 2:
                            this.showTut2();
                            break;
                        case 3:
                            this.showTut3()
                    }
                }, e.prototype.showTut1 = function () {
                    1 == a.default.inst.gamePlay.level && (console.log("show tut 1"), this.node.active = !0, this.tut1.active = !0, this.tut2.active = !1, this.tut3.active = !1, this.showHand())
                }, e.prototype.showTut2 = function () {
                    2 == a.default.inst.gamePlay.level && (console.log("show tut 2"), this.node.active = !0, this.tut1.active = !1, this.tut2.active = !0, this.tut3.active = !1)
                }, e.prototype.showTut3 = function () {
                    3 == a.default.inst.gamePlay.level && (console.log("show tut 3"), this.node.active = !0, this.tut1.active = !1, this.tut2.active = !1, this.tut3.active = !0)
                }, e.prototype.hideHand = function () {
                    this.hand.active = !1
                }, e.prototype.showHand = function () {
                    this.hand.active = !0, this.animationHand()
                }, e.prototype.animationHand = function () {
                    cc.tween(this.hand).repeatForever(cc.tween().set({
                        scale: 1,
                        opacity: 255,
                        position: cc.v2(52, -192)
                    }).to(.3, {
                        scale: .8
                    }).to(1.5, {
                        position: cc.v2(210, 150)
                    }).to(.15, {
                        scale: 1.1
                    }).to(0, {
                        opacity: 0
                    }).delay(.5)).start()
                }, e.prototype.hideTut = function () {
                    this.node.active = !1, this.hand.active = !1, this.unscheduleAllCallbacks(), this.hand.stopAllActions()
                }, r([l(cc.Node)], e.prototype, "hand", void 0), r([l(cc.Node)], e.prototype, "tut1", void 0), r([l(cc.Node)], e.prototype, "tut2", void 0), r([l(cc.Node)], e.prototype, "tut3", void 0), r([s], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "./gameManager": "gameManager"
    }],
    User: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "87e7afz1cdOH7mcP7vD58Sw", "User");
        var n = this && this.__awaiter || function (t, e, o, n) {
            return new (o || (o = Promise))(function (i, r) {
                function a(t) {
                    try {
                        s(n.next(t))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(t) {
                    try {
                        s(n.throw(t))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                        t(e)
                    })).then(a, c)
                }
                s((n = n.apply(t, e || [])).next())
            })
        },
            i = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.User = o.Star = o.PlayerInfo = void 0;
        var r = t("./Facebook");
        o.PlayerInfo = function () {
            this.id = null, this.name = null, this.avatar = null, this.photo = null, this.level = null
        };
        o.Star = function () {
            this.level = null, this.starCount = null
        };
        var a = function () {
            function t() {
                this._level = -1, this._coin = 0, this.isShowedTutorial = !0, this.skinHairChoice = 0, this.skinHatChoice = 0, this.skinHairList = [], this.skinHatList = [], this.dailyReward = 0, this.lastDay = 1, this.lastMonth = 1, this.lastYear = 2022, this.doubleMode = !1, this.timeLeft = 0, this._star = [], this._userId = null, this._userName = null, this._userAvatar = null, this._photo = null, this._locale = "", this._lstRank = [], this._level = 97, this._coin = 250
            }
            return t.prototype.init = function () {
                return n(this, void 0, void 0, function () {
                    return i(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (t.getInst().initInfoUser(), [4, t.getInst().getDataStartGame()]);
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, t.prototype.getDataStartGame = function () {
                return n(this, void 0, void 0, function () {
                    var e;
                    return i(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, r.Facebook.getInst().getData(["isShowedTutorial", "level", "coin", "star", "skinHairChoice", "skinHatChoice", "skinHairList", "skinHatList", "dailyReward", "lastDay", "lastMonth", "lastYear", "doubleMode", "timeLeft"])];
                            case 1:
                                return console.log(o.sent()), (e = this), (t.getInst().isShowedTutorial = r.Facebook.getInst().initData("isShowedTutorial", !0), t.getInst()._level = r.Facebook.getInst().initData("level", 1), t.getInst()._coin = r.Facebook.getInst().initData("coin", 0), t.getInst()._star = r.Facebook.getInst().initData("star", []), t.getInst().skinHairChoice = r.Facebook.getInst().initData("skinHairChoice", 1), t.getInst().skinHatChoice = r.Facebook.getInst().initData("skinHatChoice", 0), t.getInst().skinHairList = r.Facebook.getInst().initData("skinHairList", []), t.getInst().skinHatList = r.Facebook.getInst().initData("skinHatList", []), t.getInst().dailyReward = r.Facebook.getInst().initData("dailyReward", 0), t.getInst().lastDay = r.Facebook.getInst().initData("lastDay", 0), t.getInst().lastMonth = r.Facebook.getInst().initData("lastMonth", 0), t.getInst().lastYear = r.Facebook.getInst().initData("lastYear", 0), t.getInst().doubleMode = r.Facebook.getInst().initData("doubleMode", !1), t.getInst().timeLeft = r.Facebook.getInst().initData("timeLeft", 0), [2])
                        }
                    })
                })
            }, t.prototype.initInfoUser = function () {
                var t = this;
                window.FBInstant && (this._locale = FBInstant.getLocale(), this._userId = FBInstant.player.getID(), this._userName = FBInstant.player.getName(), this._photo = FBInstant.player.getPhoto(), cc.assetManager.loadRemote(this._photo, function (e, o) {
                    e ? console.log(e) : t._userAvatar = new cc.SpriteFrame(o)
                }))
            }, t.getInst = function () {
                return null == t._inst && (t._inst = new t), t._inst
            }, t._inst = null, t
        }();
        o.User = a, cc._RF.pop()
    }, {
        "./Facebook": "Facebook"
    }],
    bar: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "95b4eumYtlCCqtrWyzr7oei", "bar");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var o;
                return i(e, t), o = e, e.prototype.onLoad = function () {
                    o.inst = this
                }, e.prototype.onBeginContact = function () { }, e.prototype.changeToDynamic = function () {
                    this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic
                }, e.inst = null, o = r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    block2hp: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fa6f8hKVVBAXqq/4JGBFrZA", "block2hp");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Core/AudioMng"),
            c = t("../Core/Define"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.FX = null, e.FX2 = null, e.frame = [], e.state = 0, e
                }
                return i(e, t), e.prototype.init = function (t, e, o) {
                    this.node.x = t, this.node.y = e, this.node.getComponent(cc.PhysicsBoxCollider).size.width = 72, this.node.getComponent(cc.PhysicsBoxCollider).size.height = 72, this.state = o, this.changeState(this.state)
                }, e.prototype.onBeginContact = function (t, e, o) {
                    99 == o.tag && (a.default.getInst().playSound(c.AudioConfig.ROCK_HIT), 0 == this.state ? (this.changeState(1), this.FX.active = !0) : 1 == this.state && (this.offNode(), this.FX2.active = !0)), 20 == o.tag && (a.default.getInst().playSound(c.AudioConfig.ROCK_HIT), 0 == this.state ? (this.offNode(), this.FX2.active = !0) : 1 == this.state && (this.offNode(), this.FX2.active = !0)), 30 == o.tag && (this.offNode(), this.FX2.active = !0)
                }, e.prototype.changeState = function (t) {
                    this.node.getComponent(cc.Sprite).spriteFrame = this.frame[t], this.state = t
                }, e.prototype.offNode = function () {
                    this.node.getComponent(cc.Sprite).spriteFrame = null, this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1
                }, r([u(cc.Node)], e.prototype, "FX", void 0), r([u(cc.Node)], e.prototype, "FX2", void 0), r([u(cc.SpriteFrame)], e.prototype, "frame", void 0), r([l], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define"
    }],
    blockCircle: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f1780FWTsVOg6+4KpgsWyIx", "blockCircle");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../gameManager"),
            c = t("../Core/AudioMng"),
            s = t("../Core/Define"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.anchor = null, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e, o, n, i) {
                    this.node.x = t, this.node.y = e, this.node.width = o, this.node.height = o, this.node.getComponent(cc.PhysicsCircleCollider).radius = o / 2, this.node.getComponent(cc.CircleCollider).radius = o / 2 + 5, this.anchor.active = !1, n && (this.anchor.active = !0, this.node.addComponent(cc.RevoluteJoint), this.node.getComponent(cc.RevoluteJoint).connectedBody = a.default.inst.boardController.ropeList[i].children[a.default.inst.boardController.ropeList[0].childrenCount - 1].getComponent(cc.RigidBody))
                }, e.prototype.onBeginContact = function (t, e, o) {
                    99 == o.tag && c.default.getInst().playSound(s.AudioConfig.ROCK_HIT)
                }, r([p(cc.Node)], e.prototype, "anchor", void 0), r([u], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../gameManager": "gameManager"
    }],
    blockMoving: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "56282hvIQJPWaF5NwZhSOpE", "blockMoving");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.xA = null, e.yA = null, e.xB = null, e.yB = null, e.speed = null, e.normal = null, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e, o, n, i, r, a) {
                    this.node.x = t, this.node.y = e, this.node.width = o, this.node.height = n, this.node.getComponent(cc.PhysicsBoxCollider).size.width = o, this.node.getComponent(cc.PhysicsBoxCollider).size.height = n, this.node.getComponent(cc.BoxCollider).size.width = o + 10, this.node.getComponent(cc.BoxCollider).size.height = n + 10, this.xA = t, this.xB = r, this.yA = e, this.yB = a, this.speed = i;
                    var c = cc.v2(this.xB - this.xA, this.yB - this.yA).normalizeSelf();
                    this.normal = c.mulSelf(this.speed), this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(c.x, c.y)
                }, e.prototype.movingFunc = function () {
                    this.xA == this.xB && this.yA != this.yB ? this.yB > this.yA ? this.node.y >= this.yB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.y <= this.yA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.node.y <= this.yB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.y >= this.yA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.yA == this.yB && this.xA != this.xB ? this.xB > this.xA ? this.node.x >= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x <= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.node.x <= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x >= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.yA != this.yB && this.xA != this.xB && (this.xB > this.xA ? this.node.x >= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x <= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.xB < this.xA && (this.node.x <= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x >= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y))))
                }, e.prototype.update = function () {
                    this.movingFunc()
                }, e.prototype.onBeginContact = function () { }, r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    blockRectangle: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "20038ucnYFB9LWs/wHe6wMD", "blockRectangle");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../gameManager"),
            c = t("../Core/AudioMng"),
            s = t("../Core/Define"),
            l = cc._decorator,
            u = l.ccclass,
            p = (l.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e, o, n, i, r) {
                    this.node.x = t, this.node.y = e, this.node.width = o, this.node.height = n, this.node.getComponent(cc.PhysicsBoxCollider).size.width = o, this.node.getComponent(cc.PhysicsBoxCollider).size.height = n, this.node.getComponent(cc.BoxCollider).size.width = o + 10, this.node.getComponent(cc.BoxCollider).size.height = n + 10, i && (this.node.addComponent(cc.RevoluteJoint), this.node.getComponent(cc.RevoluteJoint).connectedBody = a.default.inst.boardController.ropeList[r].children[a.default.inst.boardController.ropeList[0].childrenCount - 1].getComponent(cc.RigidBody))
                }, e.prototype.onBeginContact = function (t, e, o) {
                    99 == o.tag && c.default.getInst().playSound(s.AudioConfig.ROCK_HIT)
                }, r([u], e)
            }(cc.Component));
        o.default = p, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../gameManager": "gameManager"
    }],
    blockRotation: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f271ctJbqhPoKD8pqmj41Sq", "blockRotation");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Core/AudioMng"),
            c = t("../Core/Define"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dot = null, e.dot_img = null, e.bar = null, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e, o, n, i, r) {
                    this.dot.x = i, this.dot.y = r, this.dot_img.x = this.dot.x, this.dot_img.y = this.dot.y, this.node.x = t, this.node.y = e, this.node.width = o, this.node.height = n, this.bar.width = o, this.bar.height = n, this.bar.getComponent(cc.PhysicsBoxCollider).size.width = o, this.bar.getComponent(cc.PhysicsBoxCollider).size.height = n, this.bar.getComponent(cc.BoxCollider).size.width = 0, this.bar.getComponent(cc.BoxCollider).size.height = 0, this.bar.getComponent(cc.RevoluteJoint).anchor.x = i, this.bar.getComponent(cc.RevoluteJoint).anchor.y = r
                }, e.prototype.onBeginContact = function (t, e, o) {
                    99 == o.tag && a.default.getInst().playSound(c.AudioConfig.ROCK_HIT)
                }, r([u(cc.Node)], e.prototype, "dot", void 0), r([u(cc.Node)], e.prototype, "dot_img", void 0), r([u(cc.Node)], e.prototype, "bar", void 0), r([l], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define"
    }],
    boardController: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "80983/yu4RDVrxQllb4k922", "boardController");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./gameManager"),
            c = t("./Core/Define"),
            s = t("./Character/mainChar"),
            l = t("./Element/bullet"),
            u = t("./Character/enemy"),
            p = t("./Element/woodBox"),
            d = t("./Element/blockRectangle"),
            h = t("./Element/blockCircle"),
            f = t("./Element/TNT"),
            y = t("./Element/ropeLine"),
            g = t("./Element/blockRotation"),
            v = t("./Element/blockMoving"),
            m = t("./Element/button"),
            _ = t("./Element/transBlock"),
            b = t("./Element/treasure"),
            C = t("./Element/block2hp"),
            w = t("./Element/bar"),
            S = cc._decorator,
            I = S.ccclass,
            P = S.property,
            k = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mousePos = null, e.mainChar = null, e.enemy = null, e.bullet = null, e.woodBox = null, e.blockRectangle = null, e.blockCircle = null, e.TNT = null, e.ropeLine = null, e.blockRotation = null, e.blockMoving = null, e.button = null, e.transBlock = null, e.treasure = null, e.block2hp = null, e.mapList = [], e.skinChoiceHair = 1, e.skinChoiceClothes = -1, e.ropeList = [], e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    this.onEvent()
                }, e.prototype.init = function () {
                    this.createMap(), this.createMain(), this.createEnemy(), this.createItem(), this.addChildFromMap(), this.changeSkinMain()
                }, e.prototype.resetBoard = function () {
                    this.node.removeAllChildren(), this.ropeList = []
                }, e.prototype.createMap = function () {
                    var t = cc.instantiate(this.mapList[a.default.inst.gamePlay.levelConfig - 1]);
                    this.node.addChild(t)
                }, e.prototype.createMain = function () {
                    var t = cc.instantiate(this.mainChar);
                    t.getComponent(s.default).init(a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].mainChar[0].x, a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].mainChar[0].y, a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].mainChar[0].isLeft), this.node.addChild(t)
                }, e.prototype.createEnemy = function () {
                    for (var t = 0; t < a.default.inst.gamePlay.totalEnemy; t++) {
                        var e = cc.instantiate(this.enemy);
                        e.getComponent(u.default).init(a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].enemy[t].x, a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].enemy[t].y, a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].enemy[t].isLeft), this.node.addChild(e)
                    }
                }, e.prototype.createBullet = function () {
                    var t = cc.instantiate(this.bullet),
                        e = null;
                    e = t.getComponent(l.default);
                    var o = this.node.children[1].getComponent(s.default).gunPos;
                    this.armAngle = this.node.children[1].getComponent(s.default).testAngle, e.init(o.x, o.y, c.Velocity.BULLET, this.armAngle, this.node.children[1].getComponent(s.default).isLeft), this.node.addChild(t)
                }, e.prototype.createItem = function () {
                    for (var t = 0; t < a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].item.length; t++) {
                        var e = a.default.inst.gamePlay.mapConfigAsset.json[a.default.inst.gamePlay.levelConfig].item[t];
                        0 == e.id ? this.createRope(e) : 1 == e.id ? this.createWoodBlock(e) : 2 == e.id ? this.createBlockRect(e) : 3 == e.id ? this.createTNT(e) : 4 == e.id ? this.createBlockCircle(e) : 5 == e.id ? this.createBlockRotation(e) : 6 == e.id ? this.createBlockMoving(e) : 7 == e.id ? this.createButton(e) : 8 == e.id ? this.createTransBlock(e) : 9 == e.id ? this.createTreasure(e) : 10 == e.id && this.createBlock2HP(e)
                    }
                }, e.prototype.addChildFromMap = function () {
                    if (this.node.children[0].childrenCount > 2)
                        for (var t = 2; t < this.node.children[0].childrenCount; t++) this.node.children[0].children[t].parent = this.node;
                    this.node.children[0].childrenCount > 2 && "map" != this.node.children[0].children[2].name && (this.node.children[0].children[2].parent = this.node)
                }, e.prototype.changeSkinMain = function () {
                    this.node.children[1].getComponent(s.default).spineNode.setSkin(this.skinChoiceHair.toString()), this.skinChoiceClothes > 0 && (this.node.children[1].getComponent(s.default).changeModel.setSkin(this.skinChoiceClothes.toString()), console.log("this.skinChoiceClothes  ", this.skinChoiceClothes), this.node.children[1].getComponent(s.default).changeHat())
                }, e.prototype.createWoodBlock = function (t) {
                    var e = cc.instantiate(this.woodBox);
                    e.getComponent(p.default).init(t.x, t.y, t.w), this.node.addChild(e)
                }, e.prototype.createBlockRect = function (t) {
                    var e = cc.instantiate(this.blockRectangle);
                    e.getComponent(d.default).init(t.x, t.y, t.w, t.h, t.rope, t.ropeID), this.node.addChild(e)
                }, e.prototype.createBlockCircle = function (t) {
                    var e = cc.instantiate(this.blockCircle);
                    e.getComponent(h.default).init(t.x, t.y, t.w, t.rope, t.ropeID), this.node.addChild(e)
                }, e.prototype.createTNT = function (t) {
                    var e = cc.instantiate(this.TNT);
                    e.getComponent(f.default).init(t.x, t.y), this.node.addChild(e)
                }, e.prototype.createRope = function (t) {
                    var e = cc.instantiate(this.ropeLine);
                    e.getComponent(y.default).init(t.x1, t.y1, t.x2, t.y2, t.length), this.ropeList.push(e), this.node.addChild(e)
                }, e.prototype.createBlockRotation = function (t) {
                    var e = cc.instantiate(this.blockRotation);
                    e.getComponent(g.default).init(t.x, t.y, t.w, t.h, t.dotX, t.dotY), this.node.addChild(e)
                }, e.prototype.createBlockMoving = function (t) {
                    var e = cc.instantiate(this.blockMoving);
                    e.getComponent(v.default).init(t.x, t.y, t.w, t.h, t.speed, t.xB, t.yB), this.node.addChild(e)
                }, e.prototype.createButton = function (t) {
                    var e = cc.instantiate(this.button);
                    e.getComponent(m.default).init(t.x, t.y, t.r, t.event, t.event_item), this.node.addChild(e)
                }, e.prototype.createTransBlock = function (t) {
                    var e = cc.instantiate(this.transBlock);
                    e.getComponent(_.default).init(t.x, t.y, t.w, t.h, t.isStatic), this.node.addChild(e)
                }, e.prototype.createTreasure = function (t) {
                    var e = cc.instantiate(this.treasure);
                    e.getComponent(b.default).init(t.x, t.y, t.w, t.h), this.node.addChild(e)
                }, e.prototype.createBlock2HP = function (t) {
                    var e = cc.instantiate(this.block2hp);
                    e.getComponent(C.default).init(t.x, t.y, t.state), this.node.addChild(e)
                }, e.prototype.onEvent = function () {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.handleTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.handleTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.handleTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.handleTouchEnd, this)
                }, e.prototype.handleTouchStart = function (t) {
                    var e = t.getLocation(),
                        o = this.node.parent.convertToNodeSpaceAR(e);
                    this.mousePos.active = !0, this.mousePos.setPosition(o.x, o.y);
                    var n = this.node.children[1].getComponent(s.default).spineNode.node.convertToNodeSpaceAR(e);
                    this.node.children[1].getComponent(s.default).rotateArm(n.x, n.y), n = this.node.children[1].getComponent(s.default).spineNode.node.convertToNodeSpaceAR(e), this.node.children[1].getComponent(s.default).rotateArm(n.x, n.y), this.node.children[1].getComponent(s.default).laser.active = !0, this.node.children[1].getComponent(s.default).target.active = !0, 1 == a.default.inst.gamePlay.level && 0 == a.default.inst.Tutorial.isDoneTut1 && a.default.inst.Tutorial.hideHand()
                }, e.prototype.handleTouchMove = function (t) {
                    var e = t.getLocation(),
                        o = this.node.parent.convertToNodeSpaceAR(e);
                    this.mousePos.setPosition(o.x, o.y);
                    var n = this.node.children[1].getComponent(s.default).spineNode.node.convertToNodeSpaceAR(e);
                    this.node.children[1].getComponent(s.default).rotateArm(n.x, n.y)
                }, e.prototype.handleTouchEnd = function (t) {
                    var e = t.getLocation(),
                        o = this.node.children[1].getComponent(s.default).spineNode.node.convertToNodeSpaceAR(e);
                    this.node.children[1].getComponent(s.default).rotateArm(o.x, o.y), this.mousePos.active = !1, this.node.children[1].getComponent(s.default).laser.active = !1, this.node.children[1].getComponent(s.default).target.active = !1, null != w.default.inst && w.default.inst.changeToDynamic(), a.default.inst.gamePlay.totalBullet > 0 && (this.node.children[1].getComponent(s.default).spineNode.getComponent(sp.Skeleton).setAnimation(1, "Attack", !1), this.node.children[1].getComponent(s.default).changeModel.getComponent(sp.Skeleton).setAnimation(1, "Attack", !1), this.node.children[1].getComponent(s.default).spineNode.getComponent(sp.Skeleton).addAnimation(1, "Idle", !0, 0), this.node.children[1].getComponent(s.default).changeModel.getComponent(sp.Skeleton).addAnimation(1, "Idle", !0, 0), this.createBullet(), a.default.inst.gamePlay.bulletBar.children[a.default.inst.gamePlay.totalBullet - 1].getComponent(cc.Sprite).spriteFrame = a.default.inst.gamePlay.bulletColor[2], a.default.inst.gamePlay.totalBullet--), 0 == a.default.inst.gamePlay.totalBullet && this.scheduleOnce(function () {
                        a.default.inst.gamePlay.totalEnemy > 0 && 0 == a.default.inst.gamePlay.isWin && (console.log("lose"), a.default.inst.popupLose.active = !0)
                    }, 2)
                }, e.prototype.getPosMouse = function () {
                    this.mousePos.getPosition()
                }, r([P(cc.Node)], e.prototype, "mousePos", void 0), r([P(cc.Prefab)], e.prototype, "mainChar", void 0), r([P(cc.Prefab)], e.prototype, "enemy", void 0), r([P(cc.Prefab)], e.prototype, "bullet", void 0), r([P(cc.Prefab)], e.prototype, "woodBox", void 0), r([P(cc.Prefab)], e.prototype, "blockRectangle", void 0), r([P(cc.Prefab)], e.prototype, "blockCircle", void 0), r([P(cc.Prefab)], e.prototype, "TNT", void 0), r([P(cc.Prefab)], e.prototype, "ropeLine", void 0), r([P(cc.Prefab)], e.prototype, "blockRotation", void 0), r([P(cc.Prefab)], e.prototype, "blockMoving", void 0), r([P(cc.Prefab)], e.prototype, "button", void 0), r([P(cc.Prefab)], e.prototype, "transBlock", void 0), r([P(cc.Prefab)], e.prototype, "treasure", void 0), r([P(cc.Prefab)], e.prototype, "block2hp", void 0), r([P(cc.Prefab)], e.prototype, "mapList", void 0), r([I], e)
            }(cc.Component);
        o.default = k, cc._RF.pop()
    }, {
        "./Character/enemy": "enemy",
        "./Character/mainChar": "mainChar",
        "./Core/Define": "Define",
        "./Element/TNT": "TNT",
        "./Element/bar": "bar",
        "./Element/block2hp": "block2hp",
        "./Element/blockCircle": "blockCircle",
        "./Element/blockMoving": "blockMoving",
        "./Element/blockRectangle": "blockRectangle",
        "./Element/blockRotation": "blockRotation",
        "./Element/bullet": "bullet",
        "./Element/button": "button",
        "./Element/ropeLine": "ropeLine",
        "./Element/transBlock": "transBlock",
        "./Element/treasure": "treasure",
        "./Element/woodBox": "woodBox",
        "./gameManager": "gameManager"
    }],
    bullet: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ff4f50bIMJNAozNz4+Y0oyV", "bullet");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Core/Define"),
            c = t("../Core/AudioMng"),
            s = t("../Core/Define"),
            l = t("../gameManager"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hitFX = null, e.timeToLive = 4e3, e.lifeTime = 0, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    this.node.getComponent(cc.RigidBody).gravityScale = 0
                }, e.prototype.init = function (t, e, o, n) {
                    c.default.getInst().playSound(s.AudioConfig.SHOOT), this.node.setPosition(t, e), this.node.angle = n, this.flyFunc(o, n)
                }, e.prototype.flyFunc = function (t, e) {
                    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(t * Math.cos(e / 180 * Math.PI), t * Math.sin(e / 180 * Math.PI))
                }, e.prototype.update = function (t) {
                    this.lifeTime += 1e3 * t;
                    var e = this.node.getComponent(cc.RigidBody).linearVelocity.x,
                        o = this.node.getComponent(cc.RigidBody).linearVelocity.y;
                    this.node.angle = Math.atan(o / e) * (180 / Math.PI);
                    var n = this.node.getComponent(cc.RigidBody).linearVelocity.normalizeSelf();
                    n.mulSelf(a.Velocity.BULLET), this.node.getComponent(cc.RigidBody).linearVelocity = n, this.lifeTime >= this.timeToLive && this.node.destroy()
                }, e.prototype.onBeginContact = function (t, e, o) {
                    0 == o.tag && 0 == l.default.inst.gamePlay.isWin && c.default.getInst().playSound(s.AudioConfig.BOUNCE, .2)
                }, e.prototype.onCollisionEnter = function (t) {
                    10 == t.tag && this.showFXOnHit()
                }, e.prototype.showFXOnHit = function () {
                    var t = cc.instantiate(this.hitFX);
                    t.x = this.node.x, t.y = this.node.y, l.default.inst.boardController.node.addChild(t)
                }, r([d(cc.Prefab)], e.prototype, "hitFX", void 0), r([p], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../gameManager": "gameManager"
    }],
    button_event: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "42441GP9UlKxoP3Sg2LuGEa", "button_event");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.event_id = 0, e
                }
                return i(e, t), r([s(Option)], e.prototype, "event_id", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    button: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "73a99g8XqxAJYik+6XCxFXH", "button");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./button_event"),
            c = t("../gameManager"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnOn = null, e.btnOff = null, e.detonator = null, e.event = null, e.event_item = null, e
                }
                return i(e, t), e.prototype.init = function (t, e, o, n, i) {
                    this.node.x = t, this.node.y = e, this.node.angle = -o, this.event = n, this.event_item = i
                }, e.prototype.onBeginContact = function (t, e, o) {
                    0 != o.tag && (this.btnOn.active = !1, this.btnOff.active = !0, this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1, this.triggerEvent(this.event))
                }, e.prototype.triggerEvent = function (t) {
                    switch (t) {
                        case 1:
                            this.enableBlock();
                            break;
                        case 2:
                            this.disableBlock();
                            break;
                        case 3:
                            this.explodeBomb()
                    }
                }, e.prototype.enableBlock = function () {
                    for (var t = 0; t < c.default.inst.boardController.node.childrenCount; t++) {
                        var e = c.default.inst.boardController.node.children[t];
                        "event1" == e.name && this.event_item == e.getComponent(a.default).event_id && (e.active = !0)
                    }
                }, e.prototype.disableBlock = function () {
                    for (var t = 0; t < c.default.inst.boardController.node.childrenCount; t++) {
                        var e = c.default.inst.boardController.node.children[t];
                        "event2" == e.name && this.event_item == e.getComponent(a.default).event_id && (e.active = !1)
                    }
                }, e.prototype.explodeBomb = function () {
                    for (var t = function (t) {
                        var o = c.default.inst.boardController.node.children[t];
                        if ("event3" == o.name && e.event_item == o.getComponent(a.default).event_id) {
                            var n = cc.instantiate(e.detonator);
                            n.setPosition(o.x, o.y + n.height + 1), c.default.inst.boardController.node.addChild(n), e.scheduleOnce(function () {
                                c.default.inst.boardController.node.removeChild(n)
                            }, .1)
                        }
                    }, e = this, o = 0; o < c.default.inst.boardController.node.childrenCount; o++) t(o)
                }, r([u(cc.Node)], e.prototype, "btnOn", void 0), r([u(cc.Node)], e.prototype, "btnOff", void 0), r([u(cc.Prefab)], e.prototype, "detonator", void 0), r([l], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../gameManager": "gameManager",
        "./button_event": "button_event"
    }],
    detonator: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f1aadS7xZRAcJ0/fh8nhqcW", "detonator");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    enemy: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "01d93c1rCpBP60m+ucd9lIX", "enemy");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../gameManager"),
            c = t("../Core/AudioMng"),
            s = t("../Core/Define"),
            l = t("../PopupWin/PopupWin"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.enemy = null, e.deadEnemy = null, e.sprEnemy = null, e.sprDeadEnemy = null, e.id = 0, e.posX = 10, e.posY = 10, e
                }
                return i(e, t), e.prototype.onload = function () { }, e.prototype.init = function (t, e, o) {
                    this.node.x = t, this.node.y = e, o ? (this.sprEnemy.scaleX = 1, this.sprDeadEnemy.scaleX = 1) : (this.sprEnemy.scaleX = -1, this.sprDeadEnemy.scaleX = -1)
                }, e.prototype.onCollisionEnter = function (t) {
                    99 != t.tag && 20 != t.tag || (this.enemy.active = !1, this.deadEnemy.active = !0, c.default.getInst().playSound(s.AudioConfig.BODY_HIT, .2), this.soundDie(), this.sprDeadEnemy.getComponent(sp.Skeleton).setAnimation(1, "DieEnd", !1), this.sprDeadEnemy.getComponent(sp.Skeleton).addAnimation(1, "", !1, 0), this.deadEnemy.getComponent(cc.RigidBody).linearVelocity = cc.v2(t.getComponent(cc.RigidBody).linearVelocity.x / 20, t.getComponent(cc.RigidBody).linearVelocity.y / 20), a.default.inst.gamePlay.totalEnemy--, 1 == a.default.inst.gamePlay.level ? (a.default.inst.Tutorial.hideTut(), a.default.inst.Tutorial.isDoneTut1 = !0) : 2 == a.default.inst.gamePlay.level ? (a.default.inst.Tutorial.hideTut(), a.default.inst.Tutorial.isDoneTut2 = !0) : 3 == a.default.inst.gamePlay.level && (a.default.inst.Tutorial.hideTut(), a.default.inst.Tutorial.isDoneTut3 = !0), this.checkWin())
                }, e.prototype.onBeginContact = function (t, e, o) {
                    var n = this;
                    30 == o.tag && (this.enemy.active = !1, this.deadEnemy.active = !0, this.soundDie(), this.sprDeadEnemy.getComponent(sp.Skeleton).addAnimation(1, "DieMiddle", !1, 0), this.scheduleOnce(function () {
                        n.sprDeadEnemy.getComponent(sp.Skeleton).setAnimation(1, "DieEnd", !1)
                    }, .1), a.default.inst.gamePlay.totalEnemy--, this.checkWin());
                    var i = t.getWorldManifold();
                    if (0 != i.points.length) {
                        var r = e.body.getLinearVelocityFromWorldPoint(i.points[0]),
                            l = o.body.getLinearVelocityFromWorldPoint(i.points[0]),
                            u = r.sub(l);
                        Math.sqrt(u.x * u.x + u.y * u.y) > 300 && 1 == this.enemy.active && 99 != o && (this.enemy.active = !1, this.deadEnemy.x = this.enemy.x, this.deadEnemy.y = this.enemy.y, this.deadEnemy.angle = this.enemy.angle, this.deadEnemy.active = !0, c.default.getInst().playSound(s.AudioConfig.FAllING), this.soundDie(), this.sprDeadEnemy.getComponent(sp.Skeleton).setAnimation(1, "DieEnd", !1), a.default.inst.gamePlay.totalEnemy--, this.checkWin())
                    }
                }, e.prototype.checkWin = function () {
                    0 == a.default.inst.gamePlay.totalEnemy && 0 == a.default.inst.gamePlay.isLose && (a.default.inst.gamePlay.handleLevelUp(), cc.find("Canvas/blockScreen").active = !0, this.scheduleOnce(function () {
                        a.default.inst.PopupWin.getComponent(l.default).checkShowAdsInter(), a.default.inst.PopupWin.active = !0, cc.find("Canvas/blockScreen").active = !1
                    }, 1))
                }, e.prototype.soundDie = function () {
                    switch (Math.floor(3 * Math.random())) {
                        case 0:
                            c.default.getInst().playSound(s.AudioConfig.DIE1);
                            break;
                        case 1:
                            c.default.getInst().playSound(s.AudioConfig.DIE2);
                            break;
                        case 2:
                            c.default.getInst().playSound(s.AudioConfig.DIE3)
                    }
                }, r([d(cc.Node)], e.prototype, "enemy", void 0), r([d(cc.Node)], e.prototype, "deadEnemy", void 0), r([d(cc.Node)], e.prototype, "sprEnemy", void 0), r([d(cc.Node)], e.prototype, "sprDeadEnemy", void 0), r([p], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../PopupWin/PopupWin": "PopupWin",
        "../gameManager": "gameManager"
    }],
    explosion_force: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "4cc7bfQhPpIRYMVk9yCxKdC", "explosion_force");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e
                }
                return i(e, t), e.prototype.onBeginContact = function (t, e, o) {
                    if (o.body.type == cc.RigidBodyType.Dynamic && o.node != this.root || 35 == o.tag) {
                        var n = o.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                            i = this.root.convertToWorldSpaceAR(cc.v2(0, 0)),
                            r = n.sub(i);
                        r.normalizeSelf(), r.mulSelf(5e4), o.body.applyForceToCenter(cc.v2(r.x, r.y))
                    }
                }, r([s(cc.Node)], e.prototype, "root", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    gameManager: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ac64e+Wbj5Kh5sZTQOc2qaY", "gameManager");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("./Core/Facebook"),
            l = t("./Core/User"),
            u = t("./boardController"),
            p = t("./Shop/Shop"),
            d = t("./SelectLevel/SelectLevel"),
            h = t("./gameplayController"),
            f = t("./homeController"),
            y = t("./Tutorial"),
            g = t("./PopupTut"),
            v = t("./leaderboard/leaderboard"),
            m = t("./PopupItem/PopupItem"),
            _ = t("./PopupDaily/PopupDaily"),
            b = t("./PopupMoreCoin/PopupMoreCoin"),
            C = cc._decorator,
            w = C.ccclass,
            S = C.property,
            I = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.home = null, e.boardController = null, e.gamePlay = null, e.selectLevel = null, e.PopupWin = null, e.popupLose = null, e.Tutorial = null, e.PopupTut = null, e.Shop = null, e.PopupItem = null, e.PopupDaily = null, e.PopupMoreCoin = null, e.isTool = !1, e
                }
                var o;
                return i(e, t), o = e, e.prototype.onLoad = function () {
                    return a(this, void 0, void 0, function () {
                        var t;
                        return c(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return this.checkDeviceIpad(), o.inst = this, this.home.node.active = !0, o.inst.isTool = !1, cc.director.getPhysicsManager().gravity = cc.v2(0, -900), cc.director.getPhysicsManager().enabled = !0, cc.director.getCollisionManager().enabled = !0, s.Facebook.getInst().onStartGame(), (t = document.getElementById("htmlLoadingBackground")) && (t.style.display = "none"), [4, l.User.getInst().init()];
                                case 1:
                                    return e.sent(), v.LeaderBoard.init(), v.LeaderBoard.getDataByLevel(l.User.getInst()._level), this.selectLevel.drawSelectLevel(), this.gamePlay.coin = l.User.getInst()._coin, this.Shop.loadSkinStart(), this.Shop.node.active = !0, this.Shop.node.active = !1, window.isStartGameAsyncCalled = !0, [2]
                            }
                        })
                    })
                }, e.prototype.checkDeviceIpad = function () {
                    var t = cc.winSize.width / cc.winSize.height;
                    if (console.log("ratioScreen: ", t), t <= .7) return this.home.decorIpad1.active = !1, void (this.home.decorIpad2.active = !1);
                    this.node.getComponent(cc.Canvas).fitHeight = !0, this.home.decorIpad1.active = !0, this.home.decorIpad2.active = !0
                }, e.inst = null, r([S(f.default)], e.prototype, "home", void 0), r([S(u.default)], e.prototype, "boardController", void 0), r([S(h.default)], e.prototype, "gamePlay", void 0), r([S(d.default)], e.prototype, "selectLevel", void 0), r([S(cc.Node)], e.prototype, "PopupWin", void 0), r([S(cc.Node)], e.prototype, "popupLose", void 0), r([S(y.default)], e.prototype, "Tutorial", void 0), r([S(g.default)], e.prototype, "PopupTut", void 0), r([S(p.default)], e.prototype, "Shop", void 0), r([S(m.default)], e.prototype, "PopupItem", void 0), r([S(_.default)], e.prototype, "PopupDaily", void 0), r([S(b.default)], e.prototype, "PopupMoreCoin", void 0), o = r([w], e)
            }(cc.Component);
        o.default = I, cc._RF.pop()
    }, {
        "./Core/Facebook": "Facebook",
        "./Core/User": "User",
        "./PopupDaily/PopupDaily": "PopupDaily",
        "./PopupItem/PopupItem": "PopupItem",
        "./PopupMoreCoin/PopupMoreCoin": "PopupMoreCoin",
        "./PopupTut": "PopupTut",
        "./SelectLevel/SelectLevel": "SelectLevel",
        "./Shop/Shop": "Shop",
        "./Tutorial": "Tutorial",
        "./boardController": "boardController",
        "./gameplayController": "gameplayController",
        "./homeController": "homeController",
        "./leaderboard/leaderboard": "leaderboard"
    }],
    gameplayController: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "bf13fD6JIJI7q9FoSC9hugE", "gameplayController");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("./Core/AudioMng"),
            l = t("./Core/Facebook"),
            u = t("./Core/User"),
            p = t("./gameManager"),
            d = t("./leaderboard/leaderboard"),
            h = t("./Core/Define"),
            f = t("./Core/Define"),
            y = cc._decorator,
            g = y.ccclass,
            v = y.property,
            m = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mapConfigAsset = null, e.lblLevel = null, e.bulletCount = null, e.bulletBar = null, e.btn_skip = null, e.bulletColor = [], e.maxLevel = 0, e.level = 1, e.map = 0, e.totalEnemy = 0, e.levelConfig = 0, e.bonusBullet = 0, e.totalBullet = 0, e.coin = 0, e.doubleMode = !1, e.timeLeft = 0, e.isWin = !1, e.isLose = !1, e
                }
                return i(e, t), e.prototype.onEnable = function () {
                    console.log("loaded !!"), this.level = u.User.getInst()._level, this.loadLevel(this.level)
                }, e.prototype.loadLevel = function (t) {
                    this.level = t, this.loadConfig(this.level), this.lblLevel.string = "Level: " + t, this.isWin = !1, this.isLose = !1, p.default.inst.boardController.init(), this.refreshUI(), this.showTotalBullet(), p.default.inst.Tutorial.hideTut(), p.default.inst.Tutorial.checkShowTut(), this.level > 3 ? this.btn_skip.active = !0 : this.btn_skip.active = !1
                }, e.prototype.loadConfig = function (t) {
                    var e = Object.keys(this.mapConfigAsset.json).length;
                    this.maxLevel = e, this.levelConfig = t > e ? e - f.LoopLevel.LOOP_LEVEL + 1 + (t - e - 1) % f.LoopLevel.LOOP_LEVEL : t, this.map = this.mapConfigAsset.json[this.levelConfig].map, this.totalEnemy = this.mapConfigAsset.json[this.levelConfig].enemy.length, this.bonusBullet = this.mapConfigAsset.json[this.levelConfig].bullet, this.totalBullet = this.bonusBullet + 2
                }, e.prototype.showTotalBullet = function () {
                    for (var t = 0; t < this.totalBullet; t++) {
                        var e = cc.instantiate(this.bulletCount);
                        e.x = 40 * t, e.name = t.toString(), e.getComponent(cc.Sprite).spriteFrame = t > 2 ? this.bulletColor[1] : this.bulletColor[0], this.bulletBar.addChild(e)
                    }
                    this.adjustCenter()
                }, e.prototype.adjustCenter = function () {
                    this.bulletBar.x = 0;
                    var t = Math.floor(this.totalBullet / 2);
                    this.totalBullet % 2 != 0 && this.totalBullet > 0 ? this.bulletBar.x -= this.bulletBar.children[t].x : this.totalBullet > 0 && (this.bulletBar.x -= this.bulletBar.children[t].x - 20)
                }, e.prototype.refreshUI = function () {
                    this.bulletBar.x = 0, this.bulletBar.removeAllChildren()
                }, e.prototype.handleLevelUp = function () {
                    this.level += 1, this.totalBullet >= 2 ? this.coin += h.Coin.STAR3 : 1 == p.default.inst.gamePlay.totalBullet ? this.coin += h.Coin.STAR2 : 0 == p.default.inst.gamePlay.totalBullet && (this.coin += h.Coin.STAR1), l.Facebook.getInst().saveData("coin", this.coin), this.level > u.User.getInst()._level && (u.User.getInst()._level = this.level, l.Facebook.getInst().saveData("level", this.level), d.LeaderBoard.pushScoreToDB(u.User.getInst()._level))
                }, e.prototype.onClickPause = function () {
                    s.default.getInst().playSoundClick(), p.default.inst.boardController.unscheduleAllCallbacks(), p.default.inst.boardController.resetBoard(), this.node.active = !1, p.default.inst.Tutorial.hideTut(), p.default.inst.home.node.active = !0
                }, e.prototype.onClickSkip = function () {
                    var t = this;
                    s.default.getInst().playSoundClick(),
                        showVideoMini((res) => {
                            if (res) {
                                (this.handleLevelUp(), this.totalBullet >= 2 ? this.coin -= h.Coin.STAR3 : 1 == p.default.inst.gamePlay.totalBullet ? this.coin -= h.Coin.STAR2 : 0 == p.default.inst.gamePlay.totalBullet && (this.coin -= h.Coin.STAR1), p.default.inst.boardController.resetBoard(), p.default.inst.boardController.unscheduleAllCallbacks(), this.loadLevel(this.level))
                            }
                        })

                }, e.prototype.onClickReplay = function () {
                    s.default.getInst().playSoundClick(), p.default.inst.boardController.unscheduleAllCallbacks(), p.default.inst.boardController.resetBoard(), this.loadLevel(this.level)
                }, e.prototype.onClickTut = function () {
                    s.default.getInst().playSoundClick(), p.default.inst.PopupTut.node.active = !0
                }, e.prototype.onClickMap = function () {
                    s.default.getInst().playSoundClick(), p.default.inst.selectLevel.node.active = !0
                }, e.prototype.update = function () {
                    (new Date).getTime() > this.timeLeft && (this.doubleMode = !1, u.User.getInst().doubleMode = !1, l.Facebook.getInst().saveData("doubleMode", u.User.getInst().doubleMode), p.default.inst.gamePlay.timeLeft = 0, u.User.getInst().timeLeft = p.default.inst.gamePlay.timeLeft, l.Facebook.getInst().saveData("timeLeft", u.User.getInst().timeLeft))
                }, r([v(cc.JsonAsset)], e.prototype, "mapConfigAsset", void 0), r([v(cc.Label)], e.prototype, "lblLevel", void 0), r([v(cc.Prefab)], e.prototype, "bulletCount", void 0), r([v(cc.Node)], e.prototype, "bulletBar", void 0), r([v(cc.Node)], e.prototype, "btn_skip", void 0), r([v(cc.SpriteFrame)], e.prototype, "bulletColor", void 0), r([g], e)
            }(cc.Component);
        o.default = m, cc._RF.pop()
    }, {
        "./Core/AudioMng": "AudioMng",
        "./Core/Define": "Define",
        "./Core/Facebook": "Facebook",
        "./Core/User": "User",
        "./gameManager": "gameManager",
        "./leaderboard/leaderboard": "leaderboard"
    }],
    homeController: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "33fcdbY2cZHz5lbvtefCKZq", "homeController");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("./Core/AudioMng"),
            l = t("./Core/Facebook"),
            u = t("./Core/ScreenCapture"),
            p = t("./gameManager"),
            d = cc._decorator,
            h = d.ccclass,
            f = d.property,
            y = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.leaderboard = null, e.nButton = null, e.sprSound = null, e.lstSprfSound = [], e.decorIpad1 = null, e.decorIpad2 = null, e.homeChar = null, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    console.log(this)
                    this.node.getChildByName("homeBoad").active = false;
                    this.node.getChildByName("homeBoad copy").active = false;
                    this.node.getChildByName("btn_list").getChildByName("btn_leaderboard").active = false;
                    showBannerMini();
                }, e.prototype.onEnable = function () { }, e.prototype.onClickGameplay = function () {
                    return a(this, void 0, void 0, function () {
                        return c(this, function () {
                            return s.default.getInst().playSoundClick(), p.default.inst.gamePlay.node.active = !0, p.default.inst.selectLevel.node.active = !0, p.default.inst.selectLevel.node.active = !1, this.node.active = !1, [2]
                        })
                    })
                }, e.prototype.onClickSound = function () {
                    s.default.getInst().playSoundClick(), s.default.getInst()._onSound = !s.default.getInst()._onSound, s.default.getInst().updateSound()
                }, e.prototype.updateSound = function () {
                    var t = s.default.getInst()._onSound ? 1 : 0;
                    this.sprSound.spriteFrame = this.lstSprfSound[t]
                }, e.prototype.onClickLeaderboard = function () {
                    s.default.getInst().playSoundClick(), this.leaderboard.active = !0
                }, e.prototype.onClickShare = function () {
                    s.default.getInst().playSoundClick(), l.Facebook.getInst().logEvent("ev_click_share_gameover", 1, {});
                    var t = u.default.inst.captureShareImg();
                    l.Facebook.getInst().share(t, "gameover")
                }, e.prototype.onClickInvite = function () {
                    s.default.getInst().playSoundClick(), l.Facebook.getInst().logEvent("ev_click_invite_gameover", 1, {});
                    var t = u.default.inst.captureMessageImg();
                    l.Facebook.getInst().invite(t, "gameover")
                }, e.prototype.onClickShop = function () {
                    s.default.getInst().playSoundClick(), p.default.inst.Shop.node.active = !0
                }, r([f(cc.Node)], e.prototype, "leaderboard", void 0), r([f(cc.Node)], e.prototype, "nButton", void 0), r([f(cc.Sprite)], e.prototype, "sprSound", void 0), r([f(cc.SpriteFrame)], e.prototype, "lstSprfSound", void 0), r([f(cc.Node)], e.prototype, "decorIpad1", void 0), r([f(cc.Node)], e.prototype, "decorIpad2", void 0), r([f(cc.Node)], e.prototype, "homeChar", void 0), r([h], e)
            }(cc.Component);
        o.default = y, cc._RF.pop()
    }, {
        "./Core/AudioMng": "AudioMng",
        "./Core/Facebook": "Facebook",
        "./Core/ScreenCapture": "ScreenCapture",
        "./gameManager": "gameManager"
    }],
    itemDrop: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "2d558DeWkRG6KbusbWaD9wT", "itemDrop");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.onEvent = function () {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.handleTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.handleTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.handleTouchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.handleTouchEnd, this)
                }, e.prototype.handleTouchStart = function () {
                    console.log("take !!")
                }, e.prototype.handleTouchMove = function () { }, e.prototype.handleTouchEnd = function () { }, r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    leaderboard: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "59457Ah8f5FQYFFrZaXxG/e", "leaderboard");
        var n = this && this.__awaiter || function (t, e, o, n) {
            return new (o || (o = Promise))(function (i, r) {
                function a(t) {
                    try {
                        s(n.next(t))
                    } catch (e) {
                        r(e)
                    }
                }

                function c(t) {
                    try {
                        s(n.throw(t))
                    } catch (e) {
                        r(e)
                    }
                }

                function s(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                        t(e)
                    })).then(a, c)
                }
                s((n = n.apply(t, e || [])).next())
            })
        },
            i = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.LeaderBoard = o.PlayerInfo = void 0;
        var r = t("./Services"),
            a = t("./ItemLeaderBoard"),
            c = t("../Core/User"),
            s = t("../Slave"),
            l = t("../Core/AudioMng"),
            u = function () {
                this.id = null, this.name = null, this.avatar = null, this.level = null
            };
        o.PlayerInfo = u, o.LeaderBoard = {
            _oldLevel: -1,
            _leaderBoardInfoG: [],
            _leaderBoardInfoF: [],
            PopupRankComponent: null,
            currentTypeLeaderBoard: "G",
            init: function () {
                this.initButton(), this.PopupRankComponent = cc.find("Canvas/PopupRank").getComponent("PopupRank")
            },
            drawRank: function (t, e) {
                var o = this,
                    n = "F" == t ? this.PopupRankComponent.contentScrollF : this.PopupRankComponent.contentScrollG;
                n.removeAllChildren();
                var i = "F" == t ? this._leaderBoardInfoF : this._leaderBoardInfoG;
                i.forEach(function (t, e) {
                    var i = cc.instantiate(o.PopupRankComponent.itemLeaderBoard);
                    i.parent = n, i.getComponent(a.default).initInfo(t, e)
                }), n.height = i.length * this.PopupRankComponent.itemLeaderBoard.data.height + (i.length - 1) * n.getComponent(cc.Layout).spacingY + 10, this.currentTypeLeaderBoard == t && (this.initPersonHighRank(i), e && e())
            },
            initPersonHighRank: function (t) {
                var e = this;
                this.PopupRankComponent.top1.active = !1, this.PopupRankComponent.top2.active = !1, this.PopupRankComponent.top3.active = !1, t.map(function (t, o) {
                    if (!(o >= 3)) {
                        var n = null;
                        (n = 0 == o ? e.PopupRankComponent.top1 : 1 == o ? e.PopupRankComponent.top2 : e.PopupRankComponent.top3).getChildByName("lblName").getComponent(cc.Label).string = t.name ? t.name : "TOP " + (parseInt(o) + 1) + "}", n.active = !0, t.avatar && 0 != t.avatar.length && cc.assetManager.loadRemote(t.avatar, function (t, e) {
                            if (!t) {
                                var o = new cc.SpriteFrame(e);
                                n.getChildByName("mask").getChildByName("sprAvatar").getComponent(cc.Sprite).spriteFrame = o
                            }
                        })
                    }
                })
            },
            initButton: function () {
                var t = this;
                this.addButtonComp(cc.find("Canvas/PopupRank/popup/btnExit"), function () {
                    return n(t, void 0, void 0, function () {
                        return i(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return l.default.getInst().playSoundClick(), [4, s.Slave.hidePopup(cc.find("Canvas/PopupRank/popup"))];
                                case 1:
                                    return t.sent(), cc.find("Canvas/PopupRank").active = !1, [2]
                            }
                        })
                    })
                }), this.addButtonComp(cc.find("Canvas/PopupRank/popup/btnFriend"), function () {
                    l.default.getInst().playSoundClick(), t.updateButton("F")
                }, !1), this.addButtonComp(cc.find("Canvas/PopupRank/popup/btnGlobal"), function () {
                    l.default.getInst().playSoundClick(), t.updateButton("G")
                }, !1)
            },
            updateButton: function (t) {
                this.currentTypeLeaderBoard = t;
                var e = null;
                switch (t) {
                    case "F":
                        this.PopupRankComponent.contentScrollG.active = !1, this.PopupRankComponent.contentScrollF.active = !0, e = this.PopupRankComponent.contentScrollF, this.initPersonHighRank(this._leaderBoardInfoF), cc.find("Canvas/PopupRank/popup/btnFriend").getChildByName("mask").active = !1, cc.find("Canvas/PopupRank/popup/btnGlobal").getChildByName("mask").active = !0, cc.find("Canvas/PopupRank/popup/btnFriend").getChildByName("gray_bg").active = !1, cc.find("Canvas/PopupRank/popup/btnGlobal").getChildByName("gray_bg").active = !0, cc.find("Canvas/PopupRank/popup/btnGlobal").getChildByName("block_sc").active = !1, cc.find("Canvas/PopupRank/popup/btnFriend").getChildByName("block_sc").active = !0;
                        break;
                    case "G":
                        this.PopupRankComponent.contentScrollG.active = !0, this.PopupRankComponent.contentScrollF.active = !1, e = this.PopupRankComponent.contentScrollG, this.initPersonHighRank(this._leaderBoardInfoG), cc.find("Canvas/PopupRank/popup/btnFriend").getChildByName("mask").active = !0, cc.find("Canvas/PopupRank/popup/btnGlobal").getChildByName("mask").active = !1, cc.find("Canvas/PopupRank/popup/btnFriend").getChildByName("gray_bg").active = !0, cc.find("Canvas/PopupRank/popup/btnGlobal").getChildByName("gray_bg").active = !1, cc.find("Canvas/PopupRank/popup/btnGlobal").getChildByName("block_sc").active = !0, cc.find("Canvas/PopupRank/popup/btnFriend").getChildByName("block_sc").active = !1
                }
                this.PopupRankComponent.scrollView.content = e
            },
            getDataByLevel: function (t) {
                var e = this;
                t ? this.getUserScore() : this.dellUserDeleteData(), this.loadDataFriend(function () {
                    e.updateButton("G")
                })
            },
            loadDataFriend: function (t) {
                var e = this;
                this._leaderBoardInfoG = [], this._leaderBoardInfoF = [];
                var n = [],
                    i = new u;
                i.id = c.User.getInst()._userId, i.name = c.User.getInst()._userName, i.level = c.User.getInst()._level, i.avatar = c.User.getInst()._photo, this._leaderBoardInfoG.push(i), this._leaderBoardInfoF.push(i);
                var r = function (o, n) {
                    var r = null;
                    "F" == n ? (r = e._leaderBoardInfoF, o.map(function (t) {
                        var e = r.find(function (e) {
                            return e.id == t.id
                        });
                        e ? e.level = t.level : r.push(t)
                    }), e._leaderBoardInfoF = r) : (r = e._leaderBoardInfoG, 0 != o.length && ((r = []).push(i), o.map(function (t) {
                        var e = r.find(function (e) {
                            return e.id == t.id
                        });
                        e ? e.level = t.level : r.push(t)
                    }), e._leaderBoardInfoG = r), e._leaderBoardInfoG = r), e.sortRank(n), e.drawRank(n, t)
                };
                window.FBInstant ? FBInstant.player.getConnectedPlayersAsync().then(function (t) {
                    t.map(function (t) {
                        n.push(t.getID());
                        var e = o.LeaderBoard.createPlayerInfo(t);
                        i.id != e.id && (o.LeaderBoard._leaderBoardInfoG.push(e), o.LeaderBoard._leaderBoardInfoF.push(e))
                    }), o.LeaderBoard.getLeaderBoardFriend(n, "F", r), o.LeaderBoard.getLeaderBoardFriend([], "G", r)
                }) : (this._leaderBoardInfoG = this._leaderBoardInfoG.concat([{
                    id: "xxxxaa111",
                    photo: "",
                    name: "Global 123",
                    level: 222
                }, {
                    id: "xxxxaa2",
                    photo: "",
                    name: "Global 456",
                    level: 676
                }, {
                    id: "xxxxaa3",
                    photo: "",
                    name: "Global",
                    level: 1235
                }, {
                    id: "xxxxaa4",
                    photo: "",
                    name: "Global 789",
                    level: 4354
                }, {
                    id: "xxxxaa5",
                    photo: "",
                    name: "Global 100",
                    level: 3455
                }]), this._leaderBoardInfoF = this._leaderBoardInfoF.concat([{
                    id: "xxxxaa111",
                    photo: "",
                    name: "Friend 123",
                    level: 222
                }, {
                    id: "xxxxaa2",
                    photo: "",
                    name: "Friend 456",
                    level: 676
                }, {
                    id: "xxxxaa3",
                    photo: "",
                    name: "Friend",
                    level: 1235
                }, {
                    id: "xxxxaa4",
                    photo: "",
                    name: "Friend 789",
                    level: 4354
                }, {
                    id: "xxxxaa5",
                    photo: "",
                    name: "Friend 100",
                    level: 3455
                }]), this.getLeaderBoardFriend(n, "F", r), this.getLeaderBoardFriend([], "G", r))
            },
            sortRank: function (t) {
                "F" == t ? this._leaderBoardInfoF.sort(function (t, e) {
                    return e.level - t.level
                }) : this._leaderBoardInfoG.sort(function (t, e) {
                    return e.level - t.level
                })
            },
            createPlayerInfo: function (t) {
                var e = new u;
                return e.id = t.getID(), e.name = t.getName(), e.level = 1, e.avatar = t.getPhoto(), e
            },
            updateLeaderBoard: function () {
                console.log("UserData.level +1   ", c.User.getInst()._level + 1), this._leaderBoardInfoG.map(function (t) {
                    t.id == c.User.getInst()._userId && (t.level = c.User.getInst()._level)
                }), this._leaderBoardInfoF.map(function (t) {
                    t.id == c.User.getInst()._userId && (t.level = c.User.getInst()._level)
                }), this.sortRank("F"), this.sortRank("G"), this.drawRank("F"), this.drawRank("G")
            },
            pushScoreToDB: function (t) {
                var e = this;
                r.Services.pushCurrentHighScore(c.User.getInst()._userId, t, function () {
                    console.log("push score success"), e.updateLeaderBoard()
                })
            },
            getLeaderBoardFriend: function (t, e, o) {
                if (window.FBInstant) {
                    var n = new u;
                    n.id = c.User.getInst()._userId, n.name = c.User.getInst()._userName, n.level = c.User.getInst()._level, n.avatar = c.User.getInst()._photo;
                    var i = [];
                    i.push(n), r.Services.getLeaderBoardFriend(t.toString(), function (t) {
                        t.forEach(function (t) {
                            var e = new u;
                            e.id = t.playerId, e.name = t.playerName, e.level = t.score, e.avatar = t.playerPhoto, c.User.getInst()._userId != e.id && i.push(e)
                        }), o && o(i, e)
                    }, function () {
                        console.log("get leaderboard fail")
                    })
                } else o && o([], e)
            },
            getUserScore: function () {
                var t = new u;
                t.id = c.User.getInst()._userId, t.name = c.User.getInst()._userName, t.level = c.User.getInst()._level, t.avatar = c.User.getInst()._photo, r.Services.getCurrentPlayer(function (e) {
                    e.length > 0 ? e[0].score > t.level ? t.level = e[0].score : (e[0].score < t.level || 0 == e[0].playerName.length) && r.Services.pushCurrentHighScore(c.User.getInst()._userId, c.User.getInst()._level, function () {
                        console.log("push score success")
                    }) : r.Services.pushCurrentHighScore(c.User.getInst()._userId, c.User.getInst()._level, function () {
                        console.log("push score success")
                    })
                }, function () {
                    console.log("Get fail")
                })
            },
            dellUserDeleteData: function () {
                r.Services.delHighScore(function (t) {
                    console.warn(t)
                }, function () {
                    console.log("Get fail")
                })
            },
            addButtonComp: function (t, e, o, n) {
                void 0 === o && (o = !0), void 0 === n && (n = !0), setTimeout(function () {
                    t.getComponent("FreeButtonComp") || t.addComponent("FreeButtonComp");
                    var n = t.addComponent(cc.Button);
                    n.transition = o ? cc.Button.Transition.SCALE : null;
                    var i = new cc.Component.EventHandler;
                    i.target = t, i.component = "FreeButtonComp", i.handler = "freeHandler", n.clickEvents.push(i), t.freeButtonHandlerFunc = function () {
                        e()
                    }
                })
            }
        }, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/User": "User",
        "../Slave": "Slave",
        "./ItemLeaderBoard": "ItemLeaderBoard",
        "./Services": "Services"
    }],
    mainChar: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "925baljByZBXKg6IfSqmMNo", "mainChar");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function (t, e, o, n) {
                return new (o || (o = Promise))(function (i, r) {
                    function a(t) {
                        try {
                            s(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            s(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
                            t(e)
                        })).then(a, c)
                    }
                    s((n = n.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function (t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                    return this
                }), r;

                function c(t) {
                    return function (e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                            o = i = 0
                        }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../gameManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.arm = null, e.gun = null, e.laser = null, e.detect = null, e.target = null, e.spineNode = null, e.changeModel = null, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    this.testSpine(), this.spineNode.getComponent(sp.Skeleton).setAnimation(1, "Idle", !0), this.changeModel.getComponent(sp.Skeleton).setAnimation(1, "Idle", !0)
                }, e.prototype.onEnable = function () { }, e.prototype.init = function (t, e, o) {
                    return a(this, void 0, void 0, function () {
                        return c(this, function () {
                            return this.node.x = t, this.node.y = e, this.arm.angle = 270, this.node.scaleX = o ? -1 : 1, [2]
                        })
                    })
                }, e.prototype.rotateArm = function (t, e) {
                    var o = this.arm.parent.parent.convertToWorldSpaceAR(cc.v2(0, 0)),
                        n = s.default.inst.boardController.node.convertToNodeSpaceAR(o),
                        i = Math.atan2(s.default.inst.boardController.mousePos.y - n.y - this.arm.y, n.x - s.default.inst.boardController.mousePos.x + this.arm.x) * (180 / Math.PI);
                    i >= 90 || i >= -180 && i < -90 ? (this.node.scaleX = 1, this.arm.angle = 180 - i, this.isLeft = !1) : i >= -90 && i < 90 && (this.node.scaleX = -1, this.arm.angle = i, this.isLeft = !0), this.targetAim.x = t, this.targetAim.y = e, this.targetAim2.x = t, this.targetAim2.y = e;
                    var r = this.gun.convertToWorldSpaceAR(cc.v2(0, 0)),
                        a = s.default.inst.boardController.node.convertToNodeSpaceAR(r);
                    this.gunPos = a;
                    var c = this.detect.convertToWorldSpaceAR(cc.v2(0, 0));
                    this.testAngle = Math.atan2(c.y - r.y, c.x - r.x) * (180 / Math.PI)
                }, e.prototype.testSpine = function () {
                    this.targetAim = this.spineNode.findBone("target2"), this.targetAim2 = this.changeModel.findBone("target2")
                }, e.prototype.changeHat = function () {
                    for (var t = ["Hat", "Hat2"], e = 0; e < t.length; e++) {
                        var o = this.spineNode.findSlot(t[e]),
                            n = this.changeModel.findSlot(t[e]).getAttachment();
                        o.setAttachment(n)
                    }
                }, r([p(cc.Node)], e.prototype, "arm", void 0), r([p(cc.Node)], e.prototype, "gun", void 0), r([p(cc.Node)], e.prototype, "laser", void 0), r([p(cc.Node)], e.prototype, "detect", void 0), r([p(cc.Node)], e.prototype, "target", void 0), r([p(sp.Skeleton)], e.prototype, "spineNode", void 0), r([p(sp.Skeleton)], e.prototype, "changeModel", void 0), r([u], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../gameManager": "gameManager"
    }],
    moving_func: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "820463hxr5BTL3IOov9vkl/", "moving_func");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.xA = 0, e.yA = 0, e.xB = 0, e.yB = 0, e.speed = 0, e.normal = null, e
                }
                return i(e, t), e.prototype.onLoad = function () {
                    var t = cc.v2(this.xB - this.xA, this.yB - this.yA).normalizeSelf();
                    this.normal = t.mulSelf(this.speed), this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(t.x, t.y)
                }, e.prototype.movingFunc = function () {
                    this.xA == this.xB && this.yA != this.yB ? this.yB > this.yA ? this.node.y >= this.yB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.y <= this.yA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.node.y <= this.yB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.y >= this.yA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.yA == this.yB && this.xA != this.xB ? this.xB > this.xA ? this.node.x >= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x <= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.node.x <= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x >= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.yA != this.yB && this.xA != this.xB && (this.xB > this.xA ? this.node.x >= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x <= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y)) : this.xB < this.xA && (this.node.x <= this.xB ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-this.normal.x, -this.normal.y) : this.node.x >= this.xA && (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.normal.x, this.normal.y))))
                }, e.prototype.update = function () {
                    this.movingFunc()
                }, r([s(Option)], e.prototype, "xA", void 0), r([s(Option)], e.prototype, "yA", void 0), r([s(Option)], e.prototype, "xB", void 0), r([s(Option)], e.prototype, "yB", void 0), r([s(Option)], e.prototype, "speed", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    nail: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "dee74wOoIhGY7sMRO1PL5xI", "nail");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    ropeLine: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "6d9c41Gi0xK26wHiDI6KfZ0", "ropeLine");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ropePart = null, e.nail = null, e
                }
                return i(e, t), e.prototype.init = function (t, e, o, n, i) {
                    this.addNail(0, 9), this.nailStart = this.node.children[0];
                    for (var r = this.nailStart, a = 0; a < i; a++) {
                        var c = cc.instantiate(this.ropePart);
                        c.y = -18 * a, c.getComponent(cc.RevoluteJoint).connectedBody = 0 == a ? this.nailStart.getComponent(cc.RigidBody) : r.getComponent(cc.RigidBody), r = c, c.name = (a + 1).toString(), this.node.addChild(c)
                    }
                    this.addNail(0, -18 * i - 9), this.nailEnd = this.node.children[this.node.childrenCount - 1], this.nailEnd.addComponent(cc.RevoluteJoint), this.nailEnd.getComponent(cc.RevoluteJoint).connectedBody = r.getComponent(cc.RigidBody), this.nailEnd.getComponent(cc.RevoluteJoint).connectedAnchor.y = -9, this.nailEnd.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic, this.node.x = t, this.node.y = e - 9, this.nailStart.zIndex = 999
                }, e.prototype.addNail = function (t, e) {
                    var o = cc.instantiate(this.nail);
                    o.x = t, o.y = e, this.node.addChild(o)
                }, r([s(cc.Prefab)], e.prototype, "ropePart", void 0), r([s(cc.Prefab)], e.prototype, "nail", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    transBlock: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9d71aG6JftDI7glnUOfaYNe", "transBlock");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = (a.property, function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.init = function (t, e, o, n, i) {
                    this.node.x = t, this.node.y = e, this.node.width = o, this.node.height = n, this.node.getComponent(cc.PhysicsBoxCollider).size.width = o, this.node.getComponent(cc.PhysicsBoxCollider).size.height = n, this.node.getComponent(cc.RigidBody).type = i ? cc.RigidBodyType.Static : cc.RigidBodyType.Dynamic
                }, r([c], e)
            }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    treasure: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "402d3UNbehICJebmnVqz91a", "treasure");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Core/Define"),
            c = t("../gameManager"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemDrop = null, e.coinDrop = null, e.tresureFX = null, e.isHit = !1, e.coinArr = [], e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e, o, n) {
                    this.node.x = t, this.node.y = e, this.node.width = o, this.node.height = n, this.node.getComponent(cc.PhysicsBoxCollider).size.width = o, this.node.getComponent(cc.PhysicsBoxCollider).size.height = n
                }, e.prototype.onBeginContact = function (t, e, o) {
                    var n = this;
                    99 != o.tag && 30 != o.tag || (console.log("treasure get !!!!"), this.showFXOnHit(), this.dropCoin(3), this.isHit = !0, this.getCoin());
                    var i = t.getWorldManifold();
                    if (0 != i.points.length) {
                        var r = e.body.getLinearVelocityFromWorldPoint(i.points[0]),
                            a = o.body.getLinearVelocityFromWorldPoint(i.points[0]),
                            c = r.sub(a);
                        Math.sqrt(c.x * c.x + c.y * c.y) > 300 && 1 == this.node.active && 99 != o.tag && (console.log("treasure get !!!!"), this.showFXOnHit(), this.dropCoin(3), this.isHit = !0, this.getCoin())
                    }
                    this.isHit && (this.isHit = !1, this.scheduleOnce(function () {
                        n.node.active = !1
                    }, .1))
                }, e.prototype.getCoin = function () {
                    c.default.inst.gamePlay.coin += a.Coin.TREASURE
                }, e.prototype.dropItem = function () {
                    var t = cc.instantiate(this.itemDrop);
                    t.x = this.node.x, t.y = this.node.y, this.itemFX(t), c.default.inst.boardController.node.addChild(t)
                }, e.prototype.dropCoin = function (t) {
                    for (var e = 0; e < t; e++) {
                        var o = cc.instantiate(this.coinDrop);
                        o.x = this.node.x + 40 * e, o.y = this.node.y, cc.tween(o).set({
                            opacity: 0
                        }).to(1, {
                            opacity: 255
                        }).start(), this.coinArr.push(o), c.default.inst.boardController.node.addChild(o)
                    }
                    this.showPopupItem()
                }, e.prototype.coinFX = function () {
                    Math.random()
                }, e.prototype.itemFX = function (t) {
                    cc.tween(t).by(1.5, {
                        position: cc.v3(0, 50)
                    }).start()
                }, e.prototype.showFXOnHit = function () {
                    var t = cc.instantiate(this.tresureFX);
                    t.x = this.node.x, t.y = this.node.y, c.default.inst.boardController.node.addChild(t)
                }, e.prototype.showPopupItem = function () {
                    c.default.inst.PopupItem.node.active = !0
                }, r([u(cc.Prefab)], e.prototype, "itemDrop", void 0), r([u(cc.Prefab)], e.prototype, "coinDrop", void 0), r([u(cc.Prefab)], e.prototype, "tresureFX", void 0), r([l], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../Core/Define": "Define",
        "../gameManager": "gameManager"
    }],
    woodBoxFake: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "c87adgsQfBDyKc4iufyf/pQ", "woodBoxFake");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            c = a.ccclass,
            s = a.property,
            l = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.onBeginContact = function (t, e, o) {
                    99 == o.tag && (this.root.active = !1)
                }, r([s(cc.Node)], e.prototype, "root", void 0), r([c], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    woodBox: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "34e2ahIqExDoZBY0JtDJk1m", "woodBox");
        var n, i = this && this.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        }, function (t, e) {
            function o() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
            r = this && this.__decorate || function (t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../Core/AudioMng"),
            c = t("../Core/Define"),
            s = t("../gameManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.brokenFX = null, e
                }
                return i(e, t), e.prototype.onLoad = function () { }, e.prototype.init = function (t, e, o) {
                    this.node.x = t, this.node.y = e, this.node.width = this.node.height = o, this.node.getComponent(cc.PhysicsBoxCollider).size.width = o, this.node.getComponent(cc.PhysicsBoxCollider).size.height = o, this.node.getComponent(cc.PhysicsBoxCollider).offset.y = .5 * o
                }, e.prototype.onBeginContact = function (t, e, o) {
                    99 == o.tag && (a.default.getInst().playSound(c.AudioConfig.WOOD_HIT), this.showBrokenFX(), this.node.active = !1)
                }, e.prototype.showBrokenFX = function () {
                    var t = cc.instantiate(this.brokenFX);
                    t.x = this.node.x, t.y = this.node.y + this.node.height / 2, s.default.inst.boardController.node.addChild(t)
                }, r([p(cc.Prefab)], e.prototype, "brokenFX", void 0), r([u], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../Core/AudioMng": "AudioMng",
        "../Core/Define": "Define",
        "../gameManager": "gameManager"
    }]
}, {}, ["BannerAds", "enemy", "mainChar", "AudioMng", "Define", "Facebook", "ScreenCapture", "User", "TNT", "bar", "block2hp", "blockCircle", "blockMoving", "blockRectangle", "blockRotation", "bullet", "button", "button_event", "detonator", "explosion_force", "itemDrop", "moving_func", "nail", "ropeLine", "transBlock", "treasure", "woodBox", "woodBoxFake", "PopupDaily", "PopupItem", "PopupLose", "PopupMoreCoin", "PopupTut", "PopupWin", "ItemSelectLevel", "SelectLevel", "ItemShop", "Shop", "Slave", "FBImage", "SplashCoin", "Tutorial", "boardController", "gameManager", "gameplayController", "homeController", "FreeButtonComp", "ItemLeaderBoard", "PopupRank", "Services", "leaderboard"]);