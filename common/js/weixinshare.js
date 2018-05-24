var wxshare = {};
wxshare.config = {};
wxshare.options = {};
wxshare.apiList = {};
wxshare.apiurl = '/api/configurations/wechat/js-sdk';
wxshare.getUrlParam = function(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}

wxshare.init = function(params){
	if(typeof(params) == 'string'){
		wxshare.options[params] = wxshare.getUrlParam(params) ? wxshare.getUrlParam(params) : 0;

	};
	if(typeof(params) == 'object'){
		for(var i in params){
			wxshare.options[params[i]] = wxshare.getUrlParam(params[i]) ? wxshare.getUrlParam(params[i]) : 0;
		}
	};
}

wxshare.register = function(config){
	var data = {};
	var params = {};
    data['method'] = 'getJSsdkInfo';
    params['WeChatID'] = wxshare.options.WeChatID;
    params['weburl'] = window.location.href;
    data['parameter'] = JSON.stringify(params);
    $.post(wxshare.apiurl,{url:location.href},function(returnData){
    	if (returnData.code == 200) {
    		wxshare.config.appId = returnData.data.appId;
    		wxshare.config.timestamp = returnData.data.timestamp;
    		wxshare.config.nonceStr = returnData.data.nonceStr;
    		wxshare.config.signature = returnData.data.signature;

    		wxshare.config.debug  = config.debug ? config.debug : false;
    		var apiList = 
			wxshare.config.jsApiList = config.jsApiList ? config.jsApiList : [
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone',
					'checkJsApi',
				];
			for(var i in wxshare.config.jsApiList){
				wxshare.apiList[wxshare.config.jsApiList[i]] = wxshare.config.jsApiList[i];
			}
			wx.config(wxshare.config);
			wxshare.ready();
    	}else{
    		console.log("获取配置失败");
    		return false;
    	}
    },'json');
}
//检测接口
wxshare.checkJsApi = function(params){
	wxshare.checkJsApi = {
		jsApiList:params.jsApiList ? params.jsApiList : [
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo',
			'onMenuShareQZone',
			'checkJsApi',
		],
		success:params.success ? params.success : function(res){
			console.log("验证成功");
		},
	};
}
//分享到朋友圈
wxshare.onMenuShareTimeline = function(params){
	wxshare.onMenuShareTimeline = {
		title:params.title ? params.title : '',
		link:params.link ? params.link : '',
		imgUrl:params.imgUrl ? params.imgUrl : '',
		success:params.success ? params.success : function(){
			console.log("分享成功");
		},
		cancel:params.cancel ? params.cancel : function(){
			console.log("取消分享");
		},
	};
}
wxshare.onMenuShareAppMessage = function(params){
	wxshare.onMenuShareAppMessage = {
		title: params.title ? params.title : '', // 分享标题
	    desc: params.desc ? params.desc : '', // 分享描述
	    link: params.link ? params.link : '', // 分享链接
	    imgUrl: params.imgUrl ? params.imgUrl : '', // 分享图标
	    type: params.type ? params.type : 'link', // 分享类型,music、video或link，不填默认为link
	    dataUrl: params.dataUrl ? params.dataUrl : '', // 如果type是music或video，则要提供数据链接，默认为空
	    success: function () { 
	    	console.log("分享成功");
	    },
	    cancel: function () { 
	        console.log("取消分享");
	    },
	};
}
//分享到QQ
wxshare.onMenuShareQQ = function(params){
	wxshare.onMenuShareQQ = {
		title:params.title ? params.title : "",
		desc:params.desc ? params.desc : "",
		link:params.link ? params.link : "",
		imgUrl:params.imgUrl ? params.imgUrl : "",
		success:params.success ? params.success : function(){
			console.log('分享成功');
		},
		cancel:params.cancel ? params.cancel : function(){
			console.log("取消分享");
		},
		fail: function (res) {
	    	console.log(JSON.stringify(res));
	    }
	};
}
//分享到QQ微博
wxshare.onMenuShareWeibo = function(params){
	wxshare.onMenuShareWeibo = {
		title:params.title ? params.title : '',
	    desc: params.desc ? params.desc : '',
	    link: params.link ? params.link : '',
	    imgUrl: params.imgUrl ? params.imgUrl : '',
	    success: function () {
	    	console.log("分享成功");
	    },
	    cancel: function () { 
	    	console.log("取消分享");
	    },
	};
}
//分享到QQ空间
wxshare.onMenuShareQZone = function(params){
	wxshare.onMenuShareQZone = {
		title: params.title ? params.title : '',
	    desc: params.desc ? params.desc : '',
	    link: params.link ? params.desc : '',
	    imgUrl: params.imgUrl ? params.imgUrl : '',
	    success: function () { 
	       console.log('分享成功');
	    },
	    cancel: function () { 
	        console.log("取消分享");
	    },
	};
}
wxshare.ready = function(){
	console.log(wxshare.apiList);
	wx.ready(function () {
		for(var i in wxshare.apiList){
			var apiName = wxshare.apiList[i];
			wx[apiName](wxshare[apiName]);
		}
	});
}

wx.error(function(res){
	console.log("出错啦:");
	console.log(res);
});

wxshare.share = function(options){
    var that = this;
    var shareParams = {
        title:options.title,
        desc:options.desc,
        link:options.link,
        imgUrl:options.imgUrl,
    };
    var jsApiList = [
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
    ];
    //测试分享给朋友
    that.onMenuShareAppMessage(shareParams);
    //分享到朋友圈
    that.onMenuShareTimeline(shareParams);
    //分享到QQ
    that.onMenuShareQQ(shareParams);
    //分享到腾讯微博
    that.onMenuShareWeibo(shareParams);
    //分享到QQ空间
    that.onMenuShareQZone(shareParams);
    that.checkJsApi({
        jsApiList:jsApiList,
        success:function(res){
            console.log(res);
        }
    });
    jsApiList.push('checkJsApi');
    that.register({
        jsApiList:jsApiList,
    });
}