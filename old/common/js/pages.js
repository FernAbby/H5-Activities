// 分页切换组件
(function(){
    function Page(ele,option){
        var defaultOption = {
            initIndex : 1 ,//初始化哪一页
            dots : false ,
            router : false ,//router的className
            routerFun : function(){}
        };
        var _ = this;
        _.option = $.extend(defaultOption,option);
        _.ele = ele;
        //pages的zepto对象
        _.pages = _.ele.find('.page-wrap').length != 0 ?_.ele.find('.page-wrap') : _.ele.find('.page');
        //当前在哪一页
        _.currentIndex = parseInt(_.option.initIndex-1);
        //最后一页
        _.last = _.ele.find('.page-wrap').length - 1;
        //初始化dots,如果需要使用dot的class请使用page-dot
        if(_.option.dots){
            $('.page-dot').removeClass('active');
            $('.page-dot').eq(_.currentIndex).addClass('active');
        }
        _.ele.find('.page-wrap').eq(_.currentIndex).addClass('page-current');
        //如果开启路由,则创建history数组
        if(_.option.router){
            var historyArray = [];
            $(_.option.router).click(function(e){
                e.preventDefault();
                e.stopPropagation();
                _.to($(this).attr('href'));
            });
            $('.page-back').click(function(){
                _.option.routerFun();
            });
            window.addEventListener('popstate',function(){
                _.back(historyArray[historyArray.length-1].start,historyArray[historyArray.length-1].end)
            })
        }else{
            var startX,endX;
            document.addEventListener('touchstart',function(event){
                startX = event.touches[0].pageX;
                endX = event.touches[0].pageX;
            });
            document.addEventListener('touchmove',function(event){
                event.preventDefault();
                endX = event.touches[0].pageX;
            });
            document.addEventListener('touchend',function(event){
                if(Math.abs(startX-endX)>30 && (startX-endX)>0){
                    _.swipe('left');
                }else if(Math.abs(startX-endX)>30 && (startX-endX)<0){
                    _.swipe('right');
                }
            });
        }
        _.to = function(id){
            var $page = _.pages.filter('.page-current').removeClass('page-current').addClass('center-to-left');
            _.pages.filter(id).addClass('page-current');
            _.pages.filter(id)[0].clientLeft;
            _.pages.filter(id).addClass('right-to-center');
            setTimeout(function(){
                $page.removeClass('center-to-left');
                _.pages.filter(id).removeClass('right-to-center');
            },400);
            history.pushState(id,'','');
            historyArray.push({start:$page,end:_.pages.filter(id)});
        };
        _.back = function(start,end){
            end.removeClass('page-current').addClass('center-to-right');
            start.addClass('page-current');
            start[0].clientLeft;
            start.addClass('left-to-center');
            setTimeout(function(){
                start.removeClass('left-to-center');
                end.removeClass('center-to-right');
            },400);
            historyArray.pop();
        };
        _.swipe = function(dir){
            switch (dir) {
                //左滑事件
                case 'left':
                    if(_.last != _.currentIndex){
                        _.pages.eq(_.currentIndex).removeClass('page-current').addClass('center-to-left');
                        _.pages.eq(_.currentIndex+1).addClass('page-current');
                        var s = _.currentIndex;
                        if(_.option.dots){
                            $('.page-dot').removeClass('active');
                            $('.page-dot').eq(_.currentIndex+1).addClass('active');
                        }
                        _.pages.eq(s+1)[0].clientLeft;
                        _.pages.eq(s+1).addClass('right-to-center');
                        _.currentIndex += 1;
                        setTimeout(function(){
                            _.pages.eq(s).removeClass('center-to-left');
                            _.pages.eq(s+1).removeClass('right-to-center');
                        },400)
                    }
                    break;
                //右滑事件
                case 'right':
                    if(_.currentIndex != 0){
                        _.pages.eq(_.currentIndex).removeClass('page-current').addClass('center-to-right');
                        _.pages.eq(_.currentIndex-1).addClass('page-current');
                        // _.pages.eq(_.currentIndex-1).addClass('page-current left-to-center');
                        var s = _.currentIndex;
                        if(_.option.dots){
                            $('.page-dot').removeClass('active');
                            $('.page-dot').eq(_.currentIndex-1).addClass('active');
                        }
                        _.pages.eq(s-1)[0].clientLeft;
                        _.pages.eq(s-1).addClass('left-to-center');
                        _.currentIndex -= 1;
                        setTimeout(function(){
                            _.pages.eq(s).removeClass('center-to-right');
                            _.pages.eq(s-1).removeClass('left-to-center');
                        },400)
                    }
                    break;
            }
        }
    }
    $.fn.pageInit = function(option){
        var page = new Page(this,option);
        return page.currentIndex
    }
})(Zepto);