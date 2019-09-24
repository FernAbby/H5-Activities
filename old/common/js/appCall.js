function APPCall(responseCallback){
    var u = navigator.userAgent,
        app = navigator.appVersion;
    if(!window.parameter['mfSign']){
        responseCallback({});
    }else if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
        if(window.android && window.android.morefunObjcGetUserInfo){
            responseCallback(JSON.parse(window.android.morefunObjcGetUserInfo()));
        }else{
            responseCallback({});
        }
    }else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)|| u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1){
        function setupWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) {
                return callback(WebViewJavascriptBridge);
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback);
            }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
                document.documentElement.removeChild(WVJBIframe)
            }, 0)
        }

        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('morefunObjcGetUserInfo', {}, function (response) {
                responseCallback(JSON.parse(response));
            });
        });
    }
}