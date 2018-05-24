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
        }
        var o = $.extend(defaultOption,option);
        if(type == 'alert'){
            _.modalContent = '<div class="alert-msg"><div>'+o.msg+'</div></div>'
        }else if(type == 'confirm'){
            _.detail = '';
            _.buttons='';
            _.bg = '<div class="confirm-bg"></div>';
            $.each(o.detail,function(i,item){
                _.detail += '<div class="confirm-detail">'+item+'</div>'
            })
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
        }
        _.confirm = function(){
            if($('.confirm-content').length == 0){
                _.$modalContent = $(_.modalContent).appendTo('body');
            }else{
                $('.confirm-content').remove();
                _.$modalContent = $(_.modalContent).appendTo('body');
            }
            _.$modalContent.css('marginTop',-_.$modalContent.height()/2);
            $('.confirm-bg').length == 0?$(_.bg).appendTo('body'):false;
        }
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
                })
                _.$modalContent.find('.confirm-buttons span').eq(1).click(function(){
                    o.cancelFun();
                    _.close();
                })
            }
        }
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
    }
    $.confirm = function(option){
        var confirm = new Modal(option,'confirm');
        confirm.open();
    }
})(Zepto);
