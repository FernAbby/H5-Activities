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
