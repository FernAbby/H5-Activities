/**
 * Created by ashbringer on 16/5/18.
 */


//sidebar.js
(function($){
    $.fn.sidebar = function(tel){
        var $name = tel?tel:"用户";
        if($('.sidebar').length == 0){
            $('<div class="sidebar"><div class="sidebar-content"><div class="sidebar-title"><div class="left"></div><div class="right" style="font-size: 0.8rem">'+$name+'</div></div>'
                +'<div data-href="/mobile/gateway/wechat/home/home" class="sidebar-item"><div class="left sidebar-index"></div><div class="right">首页</div></div>'
                +'<div data-href="/mobile/gateway/wechat/order/order/list" class="sidebar-item"><div class="left sidebar-order"></div><div class="right">我的订单</div></div>'
                +'<div data-href="/mobile/gateway/wechat/tourism/list"  class="sidebar-item"><div class="left sidebar-tourism"></div><div class="right">我的行程</div></div>'
                +'<div data-href="/mobile/gateway/wechat/personal/profile" class="sidebar-item"><div class="left sidebar-admin"></div><div class="right">个人中心</div></div>'
                +'</div></div>').appendTo('body');
            $('.sidebar-content .sidebar-item').click(function(e){
                e.preventDefault();
                location.href = $(this).attr('data-href');
            })
        }
        $(this).click(function(){
            $('<div class="sidebar-backdrop"></div>').appendTo('body');
            setTimeout(function(){
                $('.sidebar-backdrop').addClass('in');
                $('.sidebar').addClass('sidebar-in sidebar-transition');
            },10);
            $('.sidebar-backdrop').click(function(){
                $('.sidebar-backdrop').removeClass("in");
                $('.sidebar').removeClass('sidebar-in');
                setTimeout(function(){
                    $('.sidebar-backdrop').remove();
                },150)
            })
        });
    }
})(Zepto);

//alert.js
(function($){
    function Modal(option,type){
        var _ = this;
        _.type = type;
        var defaultOption = {
            msg : '这里是错误提示',
            title:'这里是标题',
            detail : ['这里是描述'],
            yes : '确定',
            cancel: false,
            yesFun:function(){},
            cancelFun:function(){}
        };
        var o = $.extend(defaultOption,option);
        if(type == 'alert'){
            _.modalContent = '<div class="alert-msg"><div>'+o.msg+'</div></div>'
        }else if(type == 'confirm'){
            _.detail = '';
            _.buttons='';
            _.bg = '<div class="confirm-bg"></div>';
            $.each(o.detail,function(i,item){
                _.detail += '<div class="confirm-detail">'+item+'</div>'
            });
            _.buttons += o.cancel?'<span>'+o.yes+'</span><span>'+o.cancel+'</span>':'<span>'+o.yes+'</span>';
            _.modalContent = '<div class="confirm-content"><div class="confirm-inner"><div class="confirm-title">'+o.title+'</div>'+_.detail+'</div><div class="confirm-buttons">'+_.buttons+'</div></div>';
        }
        _.alert = function(){
            if($('.alert-msg').length == 0){
                _.$modalContent = $(_.modalContent).appendTo('body');
            }else{
                $('.alert-msg').remove();
                _.$modalContent = $(_.modalContent).appendTo('body');
            }
        };
        _.confirm = function(){
            if($('.confirm-content').length == 0){
                _.$modalContent = $(_.modalContent).appendTo('body');
            }else{
                $('.confirm-content').remove();
                _.$modalContent = $(_.modalContent).appendTo('body');
            }
            _.$modalContent.css('marginTop',-_.$modalContent.height()/2);
            $('.confirm-bg').length == 0?$(_.bg).appendTo('body'):false;
        };
        _.open = function(){
            _.type=='alert'?_.alert():_.confirm();
            var clientLeft = _.$modalContent[0].clientLeft;
            _.$modalContent.addClass('in');
            _.type == 'confirm'?$('.confirm-bg').addClass('confirm-bg-visible'):false;
            if(_.type == 'alert'){
                setTimeout(function(){
                    _.close();
                },2000)
            }else{
                _.$modalContent.find('.confirm-buttons span').eq(0).click(function(){
                    o.yesFun();
                    _.close();
                });
                _.$modalContent.find('.confirm-buttons span').eq(1).click(function(){
                    o.cancelFun();
                    _.close();
                })
            }
        };
        _.close = function(){
            _.$modalContent.removeClass('in').addClass('out');
            _.type=='confirm'?$('.confirm-bg').removeClass('confirm-bg-visible'):false;
            var timer = _.type == 'alert'?150:400;
            setTimeout(function(){
                _.$modalContent.remove();
            },timer)
        }
    }
    $.alert = function(option){
        var alert = new Modal(option,'alert');
        alert.open();
    };
    $.confirm = function(option){
        var confirm = new Modal(option,'confirm');
        confirm.open();
    }
})(Zepto);

//防误触click事件

+function($){
    $.aClick = function(option){
        var defaultOption = {
            clickNode:false,
            parentNode : 'body',
            clickFun : function($this){
                //$this为当前点击dom的zepto对象
            }
        };
        var o = $.extend(defaultOption,option);
        var startObj = {x: 0, y: 0};
        var endObj = {x: 0, y: 0};
        document.addEventListener('touchstart', function (event) {
            startObj.x = event.touches[0].pageX;
            startObj.y = event.touches[0].pageY;
            endObj.x = 0;
            endObj.y = 0;
        });
        document.addEventListener('touchmove', function (event) {
            endObj.x = event.touches[0].pageX - startObj.x;
            endObj.y = event.touches[0].pageY - startObj.y;
        });
        $(o.parentNode).on('tap',o.clickNode,function(e){
            var $this = $(this);
            e.preventDefault();
            if (Math.abs(endObj.x) < 2 && Math.abs(endObj.y) < 2) {
                o.clickFun($this);
            }
        });
    }
}(Zepto);
// preloader
(function($) {
    function Preloader() {
        this.show = function() {
            var preloaderHtml = '<div class="preloader-overlay"></div>' +
                '<div class="preloader-modal">' +
                '<span class="preloader"></span>' +
                '</div>';
            if ($('.preloader-modal')[0]) return;
            var $preloader = $(preloaderHtml).appendTo('body');
            $preloader.find('.preloader').addClass('preloader-animation');
        };
        this.hide = function() {
            $('.preloader-overlay, .preloader-modal').remove();
        }
    }
    var preloader = new Preloader();
    $.preloader = {
        show : preloader.show,
        hide : preloader.hide
    }
})(Zepto);
