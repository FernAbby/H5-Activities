/**
 * Created by ashbringer on 16/5/20.
 */
+ function ($) {
    function Select(option,ele){
        var defaultOption = {
            options: false,
            title:'请选择',
            type:'(key,value) in object'//(value,key) in object or (id as name) in array id为value,name为text
        };
        var _ = this;
        _.option = $.extend(defaultOption,option);
        _.ele = ele;
        _.$dom = '';
        _.flag = false;
        _.top = 0;
        _.startY = 0;
        _.endY = 0;
        _.renderOptions = function(){
            _.options = '';
            _.option.type = _.option.type.replace(/\s{2,}/g,' ');
            if(_.option.type.indexOf('in object')){
                var $first = _.option.type.indexOf('key')<_.option.type.indexOf('value')?'key':'value';
                for(var k in _.option.options){
                    var $value = $first == 'key'?k:_.option.options[k];
                    var $text = $first == 'key' ?_.option.options[k]:k;
                        _.options += '<div class="ios-select-col-item" data-value="'+$value+'">'+$text+'</div>'
                }
            }else if(_.option.type.indexOf('in array')){
                _.option.type = _.option.type.slice(_.option.type.indexOf('(')+1,_.option.type.indexOf(')'));
                var $textKey = _.option.type.split('as')[1];
                var $valueKey = _.option.type.split('as')[0];
                $.each(_.option.options,function(i,item){
                    _.options += '<div class="ios-select-col-item" data-value="'+item[$valueKey]+'">'+item[$textKey]+'</div>'
                })
            }
        };
        _.render = function(){
            _.renderOptions();
            _.$dom += '<div class="ios-select"><div class="ios-select-header">'+_.option.title+'<button>确认</button></div><div class="ios-select-content"><div class="ios-select-col"><div class="ios-select-col-wrapper">'+_.options+'</div></div><div class="ios-select-highlight"></div></div></div>'
        };
        _.init = function(){
            var str = '<input type="hidden" name="'+$(_.ele).attr('name')+'" value="'+$(_.ele).attr('value')+'"/>';
            _.input = $(str).appendTo($(_.ele));
            _.render();
        };
        _.show = function(){
            var $dropdown = Select.prototype.show.call(_.$dom,_.ele);
            if($dropdown){
                _.$select = $dropdown;
                _.length = _.$select.find('.ios-select-col-item').length;
                _.$select.find('.ios-select-col')[0].addEventListener('touchstart',function(e){
                    _.startY = e.touches[0].pageY;
                    _.translate = 90-36*_.top;
                });

                _.$select.find('.ios-select-col')[0].addEventListener('touchmove',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    _.endY = e.touches[0].pageY;
                    var $translateY = _.translate -_.startY+_.endY;
                    _.top = Math.round((90-$translateY)/36);
                    if(_.top<0){
                        _.top = 0;
                    }else if(_.top>(_.length-1)){
                        _.top = _.length-1;
                    }
                    _.$select.find('.ios-select-col-item').removeClass('ios-select-col-item-selected');
                    _.$select.find('.ios-select-col-item').eq(_.top).addClass('ios-select-col-item-selected');
                    _.$select.find('.ios-select-col-wrapper').css({'-webkit-transform':'translate3d(0,'+$translateY+'px,0)','transform':'translate3d(0,'+$translateY+'px,0)','-webkit-transition-duration':'0ms','transition-duration':'0ms'})
                    var str =_.$select.find('.ios-select-col-item').eq(_.top).text() +'<input type="hidden" name="'+$(_.ele).attr('name')+'" value="'+_.$select.find('.ios-select-col-item').eq(_.top).attr('data-value')+'"/>';
                    $(_.ele).html(str);
                    $(_.ele).attr('value',_.$select.find('.ios-select-col-item').eq(_.top).attr('data-value'));
                });
                _.$select.find('.ios-select-col')[0].addEventListener('touchend',function(e){
                    var $translateY = 90-36*_.top;
                    _.$select.find('.ios-select-col-wrapper').css({'-webkit-transform':'translate3d(0,'+$translateY+'px,0)','transform':'translate3d(0,'+$translateY+'px,0)','-webkit-transition-duration':'300ms','transition-duration':'300ms'})
                })
            }
            _.$select.find('.ios-select-col-item').each(function (i,item) {
                if($(item).attr('data-value')==$(_.ele).attr('value')){
                    _.top = i;
                    $(item).addClass('ios-select-col-item-selected');
                    var $translateY = 90-36*_.top;
                    _.$select.find('.ios-select-col-wrapper').css({'-webkit-transform':'translate3d(0,'+$translateY+'px,0)','transform':'translate3d(0,'+$translateY+'px,0)','-webkit-transition-duration':'0ms','transition-duration':'0ms'})
                }
            })
        }
    }
    Select.prototype.idArray = [];
    Select.prototype.classArray = ['ios-select','ios-select-header','ios-select-content','ios-select-col','ios-select-col-wrapper','ios-select-col-item'];
    Select.prototype.documentClickFlag = true;
    Select.prototype.index = 0;
    Select.prototype.domId = '';
    Select.prototype.close = function(){
        var $this = $('.ios-select').removeClass('ios-select-in');
        Select.prototype.domId = '';
        setTimeout(function(){
            $this.remove();
        },400);
    };
    Select.prototype.clickTarget = function(e){
        var classNames = $(e.target).attr('class');
        var idName = $(e.target).attr('id');
        if(classNames){
            classNames = classNames.split(' ');
        }else{
            classNames = [];
        }
        var flag = false;
        $.each(classNames,function(i,item){
            if(Select.prototype.classArray.indexOf(item) != -1){
                flag = true;
            }
        });
        if(Select.prototype.idArray.indexOf(idName) != -1){
            flag = true;
        }
        return !flag;
    };
    Select.prototype.show = function(ele){
        if(Select.prototype.domId == ''){
            var $this = $(this).appendTo('body');
            $this[0].clientLeft;
            $this.addClass('ios-select-in');
            Select.prototype.domId = $(ele).attr('id');
        }else if(Select.prototype.domId != '' && Select.prototype.domId != $(ele).attr('id')){
            Select.prototype.close();
            var $this = $(this).appendTo('body');
            $this[0].clientLeft;
            $this.addClass('ios-select-in');
            Select.prototype.domId = $(ele).attr('id');
        }
        if($this) return $this;
    };
    $.fn.select = function(option){
        $(this).each(function(){
            var $select = new Select(option,$(this));
            $select.init();
            var $id = 'select'+Select.prototype.index+parseInt(Math.random()*10000);
            $(this).attr('id', $id);
            Select.prototype.idArray.push($id);
            // $(this).append(str);
            $(this).click(function(e){
                e.preventDefault();
                $select.show();
                // $select.toSelect();
            })
        });
        if(Select.prototype.documentClickFlag){
            $(document).tap(function(e){
                Select.prototype.clickTarget(e)?Select.prototype.close():false;
            });
            Select.prototype.documentClickFlag = false;
        }

    }
}(Zepto);