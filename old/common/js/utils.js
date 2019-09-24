//获取链接中参数列表
function GetRequest(url) {
    if (!url || url.indexOf('?') == -1) {
        return {};
    }
    var url = url.split('?')[1].split('#')[0]; //获取url中"?"符后"#"前的字串
    var theRequest = new Object();
    var str = decodeURI(url);
    var strs;
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
window.parameter = GetRequest(window.location.href);

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
    if(/(y+)/.test(time)){
        time = time.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
    }
    for (var key in obj){
        if (new RegExp("(" + key + ")").test(time)){
            time = time.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[key]) : (("00" + obj[key]).substr(("" + obj[key]).length)));
        }
    }
    return time;
}
function forbidShare() {
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
//移动终端浏览器版本信息
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
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
            weixin: u.toLowerCase().match(/MicroMessenger/i) == "micromessenger" ? true : false//判断是否为微信
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
var typeObject = {
    'no-times': '活动次数已用完',
    'paused': '活动已暂停',
    'act-end': '活动已经结束',
    'act-not-start': '活动还未开始',
    'not-found': '活动不存在',
    'no-login': '请登录再参与活动'
};

//验签
// -2:不在app内  -1：没登录  0：验签失败  1：验签成功
var isSignPass = -2,vote_token='';
function signCallBack(callback) {
    if(window.parameter.mfSign){
        if(window.parameter.userid || window.parameter.uid){
            $.ajax({
                url: '/api/app/sign/mf.php',
                data:window.parameter,
                type: 'get',
                success: function(ajaxData) {
                    if (ajaxData.code == 200) {
                        isSignPass = 1;
                        vote_token = ajaxData.vote_token;
                    } else {
                        alert('验签失败!');
                        isSignPass = 0;
                    }
                    callback();
                },
                error: function(){
                    alert('网络异常！');
                    isSignPass = 0;
                }
            });
        }else{
            isSignPass = -1;
        }
    }else{
        isSignPass = -2;
    }
}
function judgeSignPass(callback){
    if(window.parameter['ways']!='wechat'){
        signCallBack(callback);
    }else{
        isSignPass = 1;
        vote_token = window.parameter['vote_token'];
        callback();
    }
}
var allowed = {};//页面权限对象
var isShow=true;//页面是否展示
// var baseUrl = 'http://172.28.31.208:6699';
var baseUrl = '/lua';
//是否有机会
function requestAllowed(type,callback){
    $.ajax({
        type: 'GET',
        url: baseUrl+'/api/draw/allowed?_='+new Date().getTime(),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: {
            act_id: window.parameter['act_id'],
            uid:  window.parameter['uid'],
            vote_token: vote_token,
            ways: window.parameter['ways']
        },
        async: false,
        success: function (data) {
            allowed = data.data;
            if(data.data['type']=='paused'||data.data['type']=='act-end'||data.data['type']=='act-not-start'||data.data['type']=='not-found'){
                isShow = false;
                // $.alert(typeObject[data.data.type],function(){
                //     isShow = false;
                // });
            }else{
                callback(data);
            }
        }
    });
}
//请求活动信息
var act_info = '';
function requestActInfo(type,callback) {
    $.ajax({
        type: 'GET',
        url: baseUrl + '/api/draw/summary',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: {act_id: window.parameter['act_id'], type: type,uid:window.parameter['uid']},
        async: false,
        success: function (data) {
            if (data.code == 200) {
                callback(data.data);
                act_info = data.data;
                //是否定位
                if (data.data.activity.rules.is_spot) {
                    Geolocation(function (rPoint) {
                        isInCircle = isPointInCircle(rPoint, act_info.activity.rules);
                    });
                }
                //是否分享
                if (typeof wxshare != 'undefined' && (act_info.activity.shares.isopen == 'on' ||act_info.activity.shares.isopen == '1')) {
                    var shareLink = '';
                    if(window.parameter['ways']=='wechat'){
                        shareLink =window.location.origin+'/wechat/shares?id='+window.parameter.act_id;
                    }else{
                        shareLink = window.location.origin + location.pathname + '?act_id=' + wxshare.getUrlParam('act_id');
                    }
                    wxshare.share({
                        title: act_info.activity.shares.title,
                        desc: act_info.activity.shares.content,
                        link: shareLink,
                        imgUrl: act_info.activity.shares.thumb,
                    });
                }else{
                    forbidShare();
                }
            } else {
                $.alert(data.message);
            }
        }
    });
}

//获取活动奖品列表
function requestPrizes(callback){
    $.ajax({
        type: 'GET',
        url: baseUrl+'/api/draw/prizes',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: {act_id:window.parameter['act_id']},
        async: false,
        success: function (data) {
            if (data.code == 200) {
                callback(data.data);
            } else {
                $.alert(data.message);
            }
        }
    });
}
//抽奖
function requestDraw(params,success,fail){
    var postData = $.extend({},window.parameter,params);
    $.ajax({
        type: 'GET',
        url: baseUrl+'/api/draw/random',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: postData,
        async: false,
        success: function (data) {
            if (data.code == 200) {
                success(data.data);
            } else {
                $.alert(data.message);
                fail(data.data);
            }
        },
        error: function(data){
            console.log(data);
        }
    });
}

//获取用户奖品列表  @all 是否请求全部(已删除)
function requestWinners(all,callback){
    var actId = window.parameter['act_id'];
    if(!actId){
        actId = 'all';
    }
    $.ajax({
        type: 'GET',
        url: '/api/winnings/'+actId,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: {
            uid: window.parameter['uid'],
            open_id: window.parameter['open_id'],
            tenant_id: window.parameter['TenantID'],
            per_page: 1000,
            page: 1,
        },
        success: function (data) {
            if (data.code == 200) {
                callback(data.data);
            } else {
                $.alert(data.message);
            }
        }
    });
}
function postUserInfo(user,beforeSubmit,callback){
    if(!user.name){
        $.toast('姓名不能为空');
        return;
    }
    if(!user.mobile){
        $.toast('电话号码不能为空');
        return;
    }
    if(!(/^1[3456789]\d{9}$/.test(user.mobile))){
        $.toast('填入正确电话号码');
        return;
    }
    if(!user.address){
        $.toast('地址不能为空');
        return;
    }
    var postdata = {
        uid: window.parameter['uid'],
        name: user.name,
        mobile: user.mobile,
        address: user.address,
        act_id: window.parameter['act_id'],
        prize_id: user.prize_id,
        id: user.id
    };
    if(postdata.act_id == undefined && user.act_id){
        postdata.act_id = user.act_id;
    }
    if(beforeSubmit()){
        $.ajax({
            type: 'POST',
            url: baseUrl+'/api/draw/exchange',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(postdata),
            async: false,
            success: function (data) {
                $.toast(data.message=='success'?'提交成功':data.message);
                callback(data);
            },
            error: function(data){
                window.shake_start = true;
            }
        });
    }
}
//上传填写信息
function postFillInfo(postdata,callback){
    $.ajax({
        type: 'POST',
        url: '/api/exchange',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(postdata),
        async: false,
        success: function (data) {
            $.toast(data.message=='success'?'提交成功':data.message);
            callback(data);
        },
        error: function(data){
            window.shake_start = true;
        }
    });
}

//是否在范围内
var isInCircle = false;
function isPointInCircle(point,rules){
    var act_point = new BMap.Point(rules.longitude,rules.latitude);
    var circle = new BMap.Circle(act_point,rules.range,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
    return BMapLib.GeoUtils.isPointInCircle(point,circle);
}

function Geolocation(callback){
    //百度地图定位
    if(navigator.geolocation) {
        // 百度地图API功能
        var map = new BMap.Map("container");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                callback(r.point);
            }
            else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true});
    }
}
function QRCode(qrcode){
    var $mask = $('<div class="mask-layer">' +
        '             <div class="cover"></div>' +
        '             <div class="content">'+
        // '                 <div class="close icon"></div>' +
        '                 <div class="qr-code"></div>' +
        '                 <div class="slogan">扫描二维码,关注公众号后参与活动</div>' +
        '             </div>' +
        '         </div>');
    $mask.find('.close.icon').click(function(e){
        $mask.remove();
    });
    return {
        open: function(){
            if(qrcode){
                $mask.find('.qr-code').html('<img src="'+qrcode+'" alt="二维码"/>');
            }
            $('body').append($mask);
        },
        close: function(){
            $mask.remove();
        }
    }
}

//请求打开协议和链接
function getAPPScheme(postdata){
    $.ajax({
        type: 'GET',
        url: '/web/activity/package-url/'+postdata.act_id,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            if(data.code==200){
                $.toast(data.message);
            }
            callback(data);
        },
        error: function(data){
            console.log(data);
        }
    });
}
//打开App
function openApp() {
    getAPPScheme({
        act_id: window.parameter.act_id,
        tenant_id: window.parameter.tenant_id
    },function(data){
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            window.location.href = data.data.ios_url;//ios app协议
        }
        if (navigator.userAgent.match(/android/i)) {
            window.location.href = data.data.android_url;//android app协议
        }
        window.setTimeout(function () {
            window.location.href = '/act/common/download.html'+location.search;
        }, 2000)
    });
}