function Modal(option,type){
    var _ = this;
    _.type = type;
    _.$box = '';
    _.contenthtml=''
    var defaultOption = {
        prize: {},
        text:'',
        yesCallback:function(){},
        closeCallback:function(){}
    };
    var o = $.extend(defaultOption,option);

    function successHtml(){
       return $('<div class="bombBox success"><div class="close"></div><div class="boxContent"><div class="prizeName">'
        +o.prize.name+'</div><div class="imgs"><img class="prizeImg" src="'
        +o.prize.image+'"/><img class="sponsorImg" src="'
        +($.isEmptyObject(o.prize.sponsors)||o.prize.sponsors.length==0?'':o.prize.sponsors[Math.floor(Math.random()*o.prize.sponsors.length)].logo)+'"/></div><button>'+(o.text?o.text:'领取奖品')+'</button></div></div>');
    }
    function failHtml(){
        return $('<div class="bombBox fail"><div class="close"></div><div class="boxContent"><button>'+(o.text?o.text:'继续抽奖')+'</button></div></div>');
    }
    function addressHtml(){
        return $('<div class="bombBox address"><div class="close"></div><div class="boxContent"><h3>收货信息</h3><form><input type="text" name="name" placeholder="姓&nbsp;&nbsp;名"/><input type="text" name="mobile" placeholder="联系电话"/><input type="text" name="address" placeholder="地&nbsp;&nbsp;址"/><button>'+(o.text?o.text:'提交')+'</button></form></div></div>');
    }
    function fillInfoHtml(){
        var html = '<div class="bombBox fillInfo"><div class="close"></div><div class="boxContent"><h3>填写信息</h3><form>';
        $.each(o.prize.prize['fileds'],function(i,item){
            html += '<input type="text" class="fileds" data-field="'+item+'" name="fileds'+i+'" placeholder="'+item+'*"/>';
        });
        html += '<button>'+(o.text?o.text:'提交')+'</button></form></div></div>';
        return $(html);
    }
    function convertHtml(){
        return $('<div class="bombBox convert"><div class="close"></div><div class="boxContent"><h3>兑换码</h3><p style="font-size:.7rem;text-align:center;margin:.5rem 0 1.5rem;line-height:1.2rem;word-break:break-all;">'+o.prize.coupon+'</p><button id="convert" style="margin:.6rem auto 0">'+(o.text?o.text:'去兑换')+'</button></div></div>');
    }
    switch(_.type){
        case 'success':
            _.contenthtml = successHtml();
            break;
        case 'fail':
            _.contenthtml = failHtml();
            break;
        case 'address':
            _.contenthtml = addressHtml();
            break;
        case 'convert':
            _.contenthtml = convertHtml();
            break;
        case 'fillInfo':
            _.contenthtml = fillInfoHtml();
            break;
    }
    if(_.$box){
        _.$box.remove();
    }
    if(_.contenthtml){
        _.$box = _.contenthtml.appendTo('body');
    }
    _.$box.find('.close').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        _.close();
        o.closeCallback();
    });
    _.methods = {
        success: function(){
            o.yesCallback();
        },
        fail: function(){
            o.yesCallback();
        },
        convert: function(){
            o.yesCallback();
        },
        address: function(){
            var $name = _.$box.find('input[name=name]');
            var $mobile = _.$box.find('input[name=mobile]');
            var $address = _.$box.find('input[name=address]');
            var name = $.trim($name.val()?$name.val():$name.text());
            var mobile = $.trim($mobile.val()?$mobile.val():$mobile.text());
            var address =  $.trim($address.val()?$address.val():$address.text());
            var postData = {}
            if(window.isPrizes){
                postData = {name: name,mobile: mobile, address: address,prize_id:o.prize.prize.id,id:o.prize.id,act_id:o.prize.activity.id};
            }else{
                postData = {name: name,mobile: mobile, address: address,prize_id:o.prize.id,id:o.prize.draw_id};
            }
            postUserInfo(postData,function(){return true;},function(data){
                if (data.code == 200) {
                    setTimeout(function(){
                        $name.val('');
                        $mobile.val('');
                        $address.val('');
                        o.yesCallback();
                        _.close();
                    },1000);
                }
            });
        },
        fillInfo: function(){
            var inputs = $('.fillInfo input.fileds');
            var data = {id: o.prize.id,fileds: {}};
            var flag = true;
            inputs.each(function(i,item){
                if(!$(item).val()){
                    $.alert('所有字段必填');
                    flag = false;
                    return false;
                }else{
                    data.fileds[$(item).data('field')] = $(item).val();
                }
            });
            if(flag){
                postFillInfo(data,function(data){
                    if (data.code == 200) {
                        setTimeout(function(){
                            o.yesCallback();
                            _.close();
                        },1000);
                    }
                });
            }
        }
    }
    _.$box.find('button').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        _.methods[_.type]();
    });
    _.open = function(){
        _.$box = _.contenthtml.appendTo('body');
        _.$box.addClass('show');
    };
    _.close = function(){
        _.$box.removeClass('show');
        _.$box.remove();
    }
}