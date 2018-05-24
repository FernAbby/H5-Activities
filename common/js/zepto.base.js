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
            _.modalContent = '<div class="alert-msg">'+o.msg+'</div>'
        }else if(type == 'confirm'){
            _.detail = '';
            _.buttons='';
            _.bg = '<div class="confirm-bg"></div>';
            $.each(o.detail,function(i,item){
                _.detail += '<p>'+item+'</p>'
            });
            _.buttons += o.cancel?'<div class="confirm-msg-btns"><span style="color:#4F545B">'+o.cancel+'</span><span style="color:#E61E4B">'+o.yes+'</span></div>':'<div class="confirm-msg-close"></div>';
            var $title = o.title ? '<div class="confirm-msg-title">'+o.title+'</div>' : '';
            var no_title_style = o.title ? '' : 'style="padding: 1rem .65rem;border-top-left-radius: .25rem;border-top-right-radius: .25rem;"';
            var $bts = o.cancel
                ?'<div class="confirm-msg-content has-btn" '+no_title_style+'>'+_.detail+'</div>'+_.buttons+'</div>'
                :'<div class="confirm-msg-content">'+_.detail+'</div>'+_.buttons+'</div>';
            _.modalContent = '<div class="confirm-msg">'+$title+$bts;
        }
        _.alert = function(){
            if($('.alert-msg').length == 0){
                _.$modalContent = $(_.modalContent).appendTo('body');
            }else{
                $('.alert-msg').remove();
                _.$modalContent = $(_.modalContent).appendTo('body');
            }
            // _.$modalContent[0].clientLeft;
        };
        _.confirm = function(){
            if($('.confirm-msg').length == 0){
                _.$modalContent = $(_.modalContent).appendTo('body');
            }else{
                $('.confirm-msg').remove();
                _.$modalContent = $(_.modalContent).appendTo('body');
            }
            if(_.type=='alert') {
                _.$modalContent.css('marginTop',-_.$modalContent.height()/2/1.185);
            } else {
                _.$modalContent.css({
                    '-webkit-transform': 'translate3d(0,'+-_.$modalContent.height()/2+'px,0)' ,
                    'transform': 'translate3d(0,'+-_.$modalContent.height()/2+'px,0)'
                });
            }
            $('.confirm-bg').length == 0?$(_.bg).appendTo('body'):false;
        };
        _.open = function(){
            _.type=='alert'?_.alert():_.confirm();
            var clientLeft = _.$modalContent[0].clientLeft;
            if(_.type=='alert') {
                _.$modalContent.css({'marginTop':-_.$modalContent.height()/2,'marginLeft':-_.$modalContent.width()/2/1.185});
            } else {
                _.$modalContent.css({
                    '-webkit-transform': 'translate3d(0,'+-_.$modalContent.height()/2+'px,0)' ,
                    'transform': 'translate3d(0,'+-_.$modalContent.height()/2+'px,0)'
                });
            }
            _.$modalContent.addClass('in');
            _.type == 'confirm'?$('.confirm-bg').addClass('confirm-bg-visible'):false;
            if(_.type == 'alert'){
                setTimeout(function(){
                    _.close();
                },2000)
            }else{
                _.$modalContent.find('.confirm-msg-close').click(function () {
                    o.yesFun();
                    _.close();
                });
                _.$modalContent.find('.confirm-msg-btns span').eq(0).click(function(){
                    o.cancelFun();
                    _.close();
                });
                _.$modalContent.find('.confirm-msg-btns span').eq(1).click(function(){
                    o.yesFun();
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