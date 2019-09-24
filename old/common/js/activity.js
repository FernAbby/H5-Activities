'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Activity = function () {
    function Activity() {
        _classCallCheck(this, Activity);

        var baseUrl = '/lua',
            _ = this;
        var types = {
            'paused': '活动已暂停',
            'act-end': '活动已经结束',
            'act-not-start': '活动还未开始',
            'not-found': '活动不存在'
        };
        _.utils();
        _.params = {
            urlParameter: _.GetRequest(location.href),
            isSignPass: -2, // -2:不在app内  -1：没登录  0：验签失败  1：验签成功
            allow: {}, //requestAllowed响应值
            isActExist: false, //活动是否展示
            actInfo: {}, //活动信息
            actPrizes: [], //活动奖品
            isInCircle: true //是否在范围内
        };
        _.interface = {
            mfsign: function mfsign(callback) {
                if (_.params.urlParameter.mfSign) {
                    if (_.params.urlParameter.userid || _.params.urlParameter.uid) {
                        $.ajax({
                            url: '/api/app/sign/mf.php',
                            data: _.params.urlParameter,
                            type: 'get',
                            success: function success(data) {
                                if (data.code == 200) {
                                    _.params.isSignPass = 1;
                                    _.params.vote_token = data.vote_token;
                                } else {
                                    alert(data.message);
                                    _.params.isSignPass = 0;
                                }
                                callback();
                            },
                            error: function error() {
                                alert('网络异常！');
                                _.params.isSignPass = 0;
                            }
                        });
                    } else {
                        _.params.isSignPass = -1;
                    }
                } else {
                    _.params.isSignPass = -2;
                }
            },
            //@param callback(Function):回调函数
            requestAllowed: function requestAllowed(callback) {
                var postData = {
                    act_id: _.params.urlParameter['act_id'],
                    uid: _.params.urlParameter['uid'],
                    vote_token: _.params.vote_token,
                    ways: _.params.urlParameter['ways']
                };
                postData = $.extend({},postData,_.params.urlParameter);
                $.ajax({
                    type: 'GET',
                    url: baseUrl + '/api/draw/allowed?_=' + new Date().getTime(),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: postData,
                    async: false,
                    success: function success(data) {
                        _.params.allowed = data.data;
                        _.params.allowed.message = data.message;
                        if (types.hasOwnProperty(data.data['type']) && data.data['type'] in types) {
                            _.params.isActExist = false;
                            // $.alert(types[data.data.type], function () {
                            //     _.params.isActExist = false;
                            // });
                        } else {
                            callback(data);
                        }
                    }
                });
            },
            //@param type(String):活动类型
            requestActInfo: function requestActInfo(type, callback) {
                $.ajax({
                    type: 'GET',
                    url: baseUrl + '/api/draw/summary',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: { act_id: _.params.urlParameter['act_id'], type: type ,uid: _.params.urlParameter['uid'] },
                    async: false,
                    success: function success(data) {
                        if (data.code == 200) {
                            callback(data.data);
                            //状态初始化=======================================
                            _.params.actInfo = data.data;
                            _.params.isWechat = _.params.urlParameter['ways'] == 'wechat'; //是否开启微信
                            // _.params.isAPP = (_.params.actInfo.activity.publishing.app.is_open =='on');//是否开启APP
                            _.params.isWechat = _.params.urlParameter['following'] != 1; //是否关注
                            _.params.isCode = Boolean(_.params.actInfo.activity.publishing.wechat.qr_code[0]); //是否上传二维码
                            if (_.params.isWechat) {
                                if (_.params.isWechat) {
                                    _.params.isPart = true;
                                } else {
                                    if (isCode) {
                                        _.qrCode = _.QRCode(_.params.actInfo.activity.publishing.wechat.qr_code[0]).open();
                                    } else {
                                        _.params.isPart = true;
                                    }
                                }
                            } else {}
                            //APP

                            // =============================================
                            //是否定位
                            if (data.data.activity.rules.is_spot) {
                                _.Geolocation(function (rPoint) {
                                    _.params.isInCircle = _.isPointInCircle(rPoint, data.data.activity.rules);
                                });
                            }
                            //是否分享
                            if (typeof wxshare != 'undefined' && (data.data.activity.shares.isopen == 'on' || data.data.activity.shares.isopen == '1')) {
                                var shareLink = '';
                                if (_.params.isWechat) {
                                    shareLink = window.location.origin + '/wechat/shares?id=' + _.params.urlParameter.act_id;
                                } else {
                                    shareLink = window.location.origin + location.pathname + '?act_id=' + wxshare.getUrlParam('act_id') + '&ways=' + _.params.urlParameter.ways;
                                }
                                wxshare.share({
                                    title: data.data.activity.shares.title,
                                    desc: data.data.activity.shares.content,
                                    link: shareLink,
                                    imgUrl: data.data.activity.shares.thumb
                                });
                            }else{
                                _.ForbidShare();
                            }
                        } else {
                            $.alert(data.message);
                        }
                    }
                });
            },
            requestActPrizes: function requestActPrizes(callback) {
                $.ajax({
                    type: 'GET',
                    url: baseUrl + '/api/draw/prizes',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: { act_id: _.params.urlParameter['act_id'] },
                    success: function success(data) {
                        if (data.code == 200) {
                            _.params.actPrizes = data.data;
                            callback(data.data);
                        } else {
                            $.alert(data.message);
                        }
                    }
                });
            },
            requestDraw: function requestDraw(params, successFn, failFn, errorFn) {
                var postData = $.extend({}, _.params.urlParameter, params);
                $.ajax({
                    type: 'GET',
                    url: baseUrl + '/api/draw/random',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: postData,
                    async: false,
                    success: function success(data) {
                        if (data.code == 200) {
                            _.params.prize = data.data.prize;
                            successFn(data.data);
                        } else {
                            $.alert(data.message);
                            failFn(data.data);
                        }
                    },
                    error: function error(data) {
                        console.log(data);
                        errorFn(data);
                    }
                });
            },

            //@params all:是否请求全部中奖奖品
            requestWinPrizes: function requestWinPrizes(all, callback) {
                $.ajax({
                    type: 'GET',
                    url: '/api/winnings/' + _.params.urlParameter['act_id'],
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: {
                        uid: all ? '' : _.params.urlParameter['uid'],
                        open_id: all ? '' : _.params.urlParameter['open_id'],
                        tenant_id : _.params.urlParameter['TenantID'],
                        per_page: 1000,
                        page: 1
                    },
                    success: function success(data) {
                        if (data.code == 200) {
                            callback(data.data);
                        } else {
                            $.alert(data.message);
                        }
                    }
                });
            },

            postUserInfo: function postUserInfo(user, beforeSubmit, callback, errorFn) {
                if (!user.name) {
                    $.toast('姓名不能为空');
                    return;
                }
                if (!user.mobile) {
                    $.toast('电话号码不能为空');
                    return;
                }
                if (!/^1[3456789]\d{9}$/.test(user.mobile)) {
                    $.toast('填入正确电话号码');
                    return;
                }
                if (!user.address) {
                    $.toast('地址不能为空');
                    return;
                }
                var postdata = {
                    uid: _.params.urlParameter['uid'],
                    name: user.name,
                    mobile: user.mobile,
                    address: user.address,
                    act_id: _.params.urlParameter['act_id'],
                    prize_id: _.params.prize.id, //奖品id
                    id: _.params.prize.draw_id //奖品绑定id
                };
                if (beforeSubmit()) {
                    $.ajax({
                        type: 'POST',
                        url: baseUrl + '/api/draw/exchange',
                        dataType: 'json',
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(postdata),
                        async: false,
                        success: function success(data) {
                            $.toast(data.message == 'success' ? '提交成功' : data.message);
                            callback(data);
                        },
                        error: function error(data) {
                            errorFn(data);
                        }
                    });
                }
            }
        };
    }

    _createClass(Activity, [{
        key: 'GetRequest',
        value: function GetRequest(url) {
            if (!url || url.indexOf('?') == -1) {
                return {};
            }
            var url = url.split('?')[1].split('#')[0]; //获取url中"?"符后"#"前的字串
            var theRequest = new Object();
            var str = decodeURI(url);
            var strs = void 0;
            if (str.indexOf("&") != -1) {
                strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
                }
            } else {
                theRequest[str.split("=")[0]] = decodeURIComponent(str.split("=")[1]);
            }

            return theRequest;
        }
    }, {
        key: 'browser',
        value: function browser() {
            return {
                versions: function () {
                    var u = navigator.userAgent,
                        app = navigator.appVersion;
                    return { //移动终端浏览器版本信息
                        trident: u.indexOf('Trident') > -1, //IE内核
                        presto: u.indexOf('Presto') > -1, //opera内核
                        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1, //是否iPad
                        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                        weixin: u.toLowerCase().match(/MicroMessenger/i) == "micromessenger" ? true : false //判断是否为微信
                    };
                }(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            };
        }
    }, {
        key: 'utils',
        value: function utils() {
            //时间格式化
            Date.prototype.Format = function (time) {
                var obj = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S": this.getMilliseconds()
                };
                if (/(y+)/.test(time)) {
                    time = time.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var key in obj) {
                    if (new RegExp("(" + key + ")").test(time)) {
                        time = time.replace(RegExp.$1, RegExp.$1.length == 1 ? obj[key] : ("00" + obj[key]).substr(("" + obj[key]).length));
                    }
                }
                return time;
            };
        }
    }, {
        key: 'Geolocation',
        value: function Geolocation(callback) {
            //百度地图定位
            if (navigator.geolocation) {
                // 百度地图API功能
                var map = new BMap.Map("container");
                var point = new BMap.Point(116.331398, 39.897445);
                map.centerAndZoom(point, 12);
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        callback(r.point);
                    } else {
                        alert('failed' + this.getStatus());
                    }
                }, { enableHighAccuracy: true });
            }
        }

        //@point:当前位置经纬度  @rules:活动定位规则

    }, {
        key: 'isPointInCircle',
        value: function isPointInCircle(point, rules) {
            var act_point = new BMap.Point(rules.longitude, rules.latitude);
            var circle = new BMap.Circle(act_point, rules.range, {
                fillColor: "blue",
                strokeWeight: 1,
                fillOpacity: 0.3,
                strokeOpacity: 0.3
            });
            return BMapLib.GeoUtils.isPointInCircle(point, circle);
        }
        //@qrcode:二维码图片路径

    }, {
        key: 'QRCode',
        value: function QRCode(qrcode) {
            var $mask = $('<div class="mask-layer">' + '             <div class="cover"></div>' + '             <div class="content">' +
                // '                 <div class="close icon"></div>' +
                '                 <div class="qr-code"></div>' + '                 <div class="slogan">扫描二维码,关注公众号后参与活动</div>' + '             </div>' + '         </div>');
            $mask.find('.close.icon').click(function (e) {
                $mask.remove();
            });
            return {
                open: function open() {
                    if (qrcode) {
                        $mask.find('.qr-code').html('<img src="' + qrcode + '" alt="二维码"/>');
                    }
                    $('body').append($mask);
                },
                close: function close() {
                    $mask.remove();
                }
            };
        }
    }, {
        key: 'ForbidShare',
        value: function ForbidShare() {
            function onBridgeReady() {
                WeixinJSBridge.call('hideOptionMenu');
            }

            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                }
            } else {
                onBridgeReady();
            }
        }
    }]);

    return Activity;
}();