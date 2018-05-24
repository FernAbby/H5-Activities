window.parameter = GetRequest(window.location.href);
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
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    } else {
        theRequest[str.split("=")[0]] = unescape(str.split("=")[1]);
    }
    theRequest['vote_id'] = theRequest['act_id'];

    return theRequest;
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
            window.location.href = data.data.ios_url+location.search;//ios app协议
        }
        if (navigator.userAgent.match(/android/i)) {
            window.location.href = data.data.android_url+location.search;//android app协议
        }
        window.setTimeout(function () {
            window.location.href = '/act/common/download.html'+location.search;
        }, 2000)
    });
}