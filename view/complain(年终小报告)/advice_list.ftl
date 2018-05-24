<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>简途旅行</title>
    <meta name="format-detection" content="telephone=no" />
    <meta name="wap-font-scale" content="no">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <style>*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(255,255,255,0);font-family:Helvetica,sans-serif;-webkit-touch-callout:none;box-sizing:border-box}a:active,a:hover,a:link,a:visited{text-decoration:none;outline:0}html,body{width:100%;height:100%;font-size:20px}html{font-size:20px}.sidebar{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);z-index:1001;overflow:auto;position:fixed;top:0;left:5rem;right:0;bottom:0;background-color:#fff}.sidebar.sidebar-transition{-webkit-transition:.15s ease-out;transition:.15s ease-out}.sidebar.sidebar-in{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.sidebar .sidebar-content{position:relative}.sidebar .sidebar-title,.sidebar .sidebar-item{width:100%;height:3rem;line-height:3rem;border-bottom:1px solid #D8D8D8;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap}.sidebar .sidebar-title .left,.sidebar .sidebar-item .left{width:3.2rem;height:100%;background:url(/images/sidebar_user.png) no-repeat center;background-size:1.7rem}.sidebar .sidebar-title .right,.sidebar .sidebar-item .right{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:.8rem;color:#424242}.sidebar .sidebar-item{height:2.1rem}.sidebar .sidebar-item .right{color:#737373;font-size:.7rem;line-height:2.1rem}.sidebar .sidebar-item .left.sidebar-index{background:url(/images/sidebar_index.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-order{background:url(/images/sidebar_order.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-tourism{background:url(/images/sidebar_tourism.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-admin{background:url(/images/sidebar_admin.png) no-repeat center;background-size:1.3rem}.sidebar-backdrop{z-index:1000;position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;background-color:#000;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}.sidebar-backdrop.in{opacity:.42}header{position:absolute;height:2rem;width:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;background-color:#D71345;z-index:103;top:0}header .back{width:1.9rem;height:100%;background:url(/images/back.png) no-repeat center;background-size:.45rem .8rem;text-indent:-9999px}header .back.no-icon{background:0 0}header .center{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:.8rem;color:#fff;line-height:2rem;text-align:center}header .home{text-indent:-9999px;height:100%;width:1.9rem;background:url(/images/admin.png) no-repeat center;background-size:.85rem .85rem}header .home.no-icon{background:0 0}footer{position:absolute;height:2rem;width:100%;line-height:2rem;bottom:0}footer~.page-content{bottom:2rem}header~.page-content{top:2rem}.page,.page-group{position:absolute;overflow:hidden;width:100%;top:0;left:0;height:100%}.page{display:none;z-index:100}.page.page-current{display:block}.page-content{position:absolute;width:100%;top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch}.center-to-left{display:block;-webkit-animation:pageFromCenterToLeft 400ms forwards;animation:pageFromCenterToLeft 400ms forwards}.center-to-right{display:block;-webkit-animation:pageFromCenterToRight 400ms forwards;animation:pageFromCenterToRight 400ms forwards}.left-to-center{z-index:102;display:block;-webkit-animation:pageFromLeftToCenter 400ms forwards;animation:pageFromLeftToCenter 400ms forwards}.right-to-center{display:block;-webkit-animation:pageFromRightToCenter 400ms forwards;animation:pageFromRightToCenter 400ms forwards}@-webkit-keyframes pageFromRightToCenter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromRightToCenter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0);opacity:1}}@keyframes pageFromCenterToRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:1}}@keyframes pageFromCenterToLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:1}}@-webkit-keyframes pageFromLeftToCenter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromLeftToCenter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}.confirm-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10600;visibility:hidden;opacity:0;background-color:rgba(0,0,0,.4);-webkit-transition-duration:400ms;transition-duration:400ms}.confirm-content{background-color:#e8e8e8;border-radius:.2rem;width:14.5rem;position:absolute;z-index:11000;left:50%;box-sizing:border-box;margin-left:-7.25rem;top:50%;text-align:center;background-color:#fff;color:#535353;opacity:0;font-size:.9rem;-webkit-transform:translate3d(0,0,0) scale(1.185);transform:translate3d(0,0,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity}.confirm-content.in{opacity:1;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transfrom:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.confirm-content.out{opacity:0;z-index:10999;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}.confirm-content .confirm-inner{padding:1.25rem 1.25rem .95rem}.confirm-content .confirm-detail{font-size:.7rem;color:#535353;margin-top:.5rem}.confirm-content .confirm-buttons{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;border-top:1px solid #E4E4E4}.confirm-content .confirm-buttons span{display:block;-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:2.5rem;line-height:2.5rem;box-sizing:border-box}.confirm-content .confirm-buttons span:active{background-color:#d4d4d4}.confirm-content .confirm-buttons span+span{border-left:1px solid #E4E4E4}.confirm-bg.confirm-bg-visible{visibility:visible;opacity:1}.alert-msg{position:absolute;z-index:10000;top:40%;text-align:center;opacity:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:.15s ease-out;transition:.15s ease-out}.alert-msg.in{opacity:1;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.alert-msg div{background-color:rgba(63,63,63,.47);color:#fff;display:inline;margin:0 auto;font-size:.7rem;padding:.55rem 1.55rem;border-radius:1.6rem}@-webkit-keyframes rotate{from{-webkit-transform:rotate(360deg)}to{-webkit-transform:rotate(0deg)}}@keyframes rotate{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}.preloader-overlay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:10600;-webkit-transition-duration:400ms;transition-duration:400ms;visibility:visible;opacity:0;background:0 0}.preloader-modal{position:absolute;left:50%;top:45%;padding:.4rem;margin-left:-1.25rem;margin-top:-1.25rem;background:rgba(0,0,0,.8);z-index:11000;border-radius:.25rem}.preloader-modal .preloader{display:block;width:1.7rem;height:1.7rem;-webkit-transform-origin:50%;transform-origin:50%}.preloader-modal .preloader.preloader-animation{-webkit-animation:rotate .7s linear 0s normal none infinite;animation:rotate .7s linear 0s normal none infinite}.preloader-modal .preloader:after{display:block;content:"";width:100%;height:100%;background:url("data:image/png;base64,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") no-repeat center;background-position:50%;background-size:100%}body{font-size:0;background-color:#2e6014}.header-wrapper{width:100%}.header-wrapper img{width:100%}.header-title{width:90%;margin:.5rem auto}.header-title img{width:100%}.advice-lists{width:90%;background-color:#fff;margin:.5rem auto 0;border-radius:.2rem;padding:.1rem .5rem}.advice-lists .advice-wrapper{margin:1rem 0}.advice-lists .advice-wrapper .userName{color:#2e6014;font-size:.85rem;margin-bottom:.5rem;}.advice-lists .advice-wrapper .userName i{display:inline-block;width:.75rem;height:.8rem;background:url(https://images.simpletour.com/activity/complain/avatar_icon.png) no-repeat center;background-size:contain;vertical-align:text-top;margin-right:.5rem;margin-top:0.1rem}.advice-lists .advice-wrapper .advice{background-color:#f7f7f7;padding:.25rem}.advice-lists .advice-wrapper .advice .images .img-wp{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:4rem;height:4rem;margin-right:.45rem}.advice-lists .advice-wrapper .advice .images .img-wp:last-child{margin-right:0}.advice-lists .advice-wrapper .advice .images .img-wp img{width:100%}.advice-lists .advice-wrapper .advice p{color:#231f20;font-size:.65rem;line-height:1rem;word-break:break-all}.advice-lists .advice-wrapper .advice .bottom-btn{width:100%;height:1.5rem;line-height:1.5rem}.advice-lists .advice-wrapper .advice .bottom-btn div{float:right;font-size:.75rem;margin-left:.5rem}.advice-lists .advice-wrapper .advice .bottom-btn .zan:before{content:'';display:inline-block;width:1rem;height:1rem;background:url(/images/advice/zan_icon.png) no-repeat center;background-size:contain;margin-right:.25rem;vertical-align:text-bottom}.advice-lists .advice-wrapper .advice .bottom-btn .cai:before{content:'';display:inline-block;width:1rem;height:1rem;background:url(/images/advice/cai_icon.png) no-repeat center;background-size:contain;margin-right:.25rem;vertical-align:text-bottom}.advice-lists .advice-wrapper .advice p.hidden{max-height:6rem;overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical}.more-text{display:inline-block;font-size:.6rem;color:#ed8e16;margin:0.2rem 0}.advice-lists .advice-wrapper .advice .images{font-size:0;text-align:left;margin-left:-.35rem;margin-bottom:.2rem}.images img{width:3.98rem;height:3.98rem;display:inline-block;margin-left:.4rem;margin-top:.4rem}.advice-lists .advice-wrapper .advice .bottom-btn .zan.click:before{background:url(/images/advice/zan_click_icon.png) no-repeat center;background-size:contain;}.advice-lists .advice-wrapper .advice .bottom-btn .cai.click:before{background:url(/images/advice/cai_click_icon.png) no-repeat center;background-size:contain;}.alert-msg{position:absolute;z-index:10000;top:40%;margin-left:-6.75rem;text-align:center;opacity:0;left:50%;color:#fff;background-color:rgba(0,0,0,.65);padding:.7rem 1.6rem;-webkit-transition:.4s ease-out;transition:.4s ease-out;font-size:.7rem;border-radius:.15rem;-webkit-transform:translate3d(0,0,0) scale(1.185);transform:translate3d(0,0,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity;box-sizing:border-box}.alert-msg.in{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.alert-msg.out{opacity:0;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}.img-viewer-overlay{position:absolute;z-index:10200;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);visibility:hidden;opacity:0;-webkit-transition-duration:400ms;transition-duration:400ms}  .img-viewer-overlay.overlay-visible{visibility:visible;opacity:1}  .img-viewer{position:absolute;left:0;top:0;width:100%;height:100%;z-index:10400;background-color:#fff;box-sizing:border-box;display:none;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-transition-property:-webkit-transform;transition-property:transform;opacity:0;-webkit-transition:400ms;transition:400ms}  .img-viewer.visible{opacity:1}  .img-viewer-header,.img-viewer-footer{position:absolute;right:0;left:0;z-index:10;height:2.2rem;padding-right:.5rem;padding-left:.5rem;box-sizing:border-box;background-color:#f7f7f8;-webkit-backface-visibility:hidden;backface-visibility:hidden}  .img-viewer-content{position:absolute;top:2.2rem;right:0;left:0;bottom:0;overflow:hidden}  .img-viewer-content .img-viewer-swiper-container{-webkit-transition-duration:400ms;transition-duration:400ms;position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-property:-webkit-transform;transition-property:transform;box-sizing:content-box}  .img-viewer-content .img-viewer-swiper-item{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-flex-shrink:0;-ms-flex:0 0 auto;-webkit-flex-shrink:0;flex-shrink:0;position:relative;width:100%;height:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box}  .img-viewer-content .img-viewer-swiper-item img{width:auto;height:auto;max-width:100%;max-height:100%}  .img-viewer-header{top:0;height:2.2rem;line-height:2.2rem}  .img-viewer-header:after{content:'';position:absolute;left:0;bottom:0;right:auto;top:auto;height:1px;width:100%;background-color:#e7e7e7;display:block;z-index:15;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}  .img-viewer-header .img-viewer-header-text{color:#4F545B;font-size:.8rem;text-align:center}  .img-viewer-header a{position:absolute;width:1rem;height:100%;top:0;z-index:20;background:url(/images/left_red_arrow@2x.png) center no-repeat;background-size:.5rem}.infinite-scroll-preloader{margin-top:1rem}.infinite-scroll-preloader{margin:.5rem;text-align:center}.infinite-scroll-preloader .preloader{width:1.5rem;height:1.5rem}.infinite-scroll-preloader{height:2rem;line-height:2rem;text-align:center;font-weight:700;font-size:.6rem;color:#ababab;width:6rem;margin:0 auto}.infinite-scroll-preloader .pullUpIcon{display:block;float:left;width:1rem;height:.5rem;margin-top:.7rem;-webkit-transform:rotate(-180deg) translateZ(0)}.infinite-scroll-preloader.flip .pullUpIcon{-webkit-transform:rotate(0) translateZ(0)}.advice-lists .advice-wrapper .userName i.blue{background: url(/images/advice/avatar_blue_icon.png) no-repeat center;background-size: contain;}.advice-lists .advice-wrapper .userName i.yellow{background: url(/images/advice/avatar_yellow_icon.png) no-repeat center;background-size: contain;}.advice-lists .advice-wrapper .userName i.green{background: url(/images/advice/avatar_green_icon.png) no-repeat center;background-size: contain;}.advice-lists .advice-wrapper .userName i.red{background: url(/images/advice/avatar_red_icon.png) no-repeat center;background-size: contain;}.advice-lists .advice-wrapper .userName i.purple{background: url(/images/advice/avatar_purple_icon.png) no-repeat center;background-size: contain;}</style>
${pageStat}
</head>
<body>
<#assign colors=["blue", "green", "yellow", "red", "purple"]/>
<div class="page-group" style="visibility: hidden">
    <div class="page page-current">
        <div data-toggle="scroller" data-type="js" class="page-content content infinite-scroll infinite-scroll-bottom" data-distance="30">
            <div class="header-wrapper">
                <img src="https://images.simpletour.com/activity/complain/advice_header.png" alt="">
            </div>
            <div class="header-title">
                <img src="https://images.simpletour.com/activity/complain/advice_title.png" alt="">
            </div>
            <div>
                <div class="advice-lists">
                <#list adviceViews as advice>
                    <div class="advice-wrapper">
                        <div class="userName"><i class="${colors[random.nextInt(4)]}"></i>${advice.nickName}:</div>
                        <div class="advice">
                            <p class="adviseContent hidden">${advice.content}</p>
                            <#if advice.content?length gt 114 ><div class="more-text">全文</div></#if>
                            <#if advice.imgUrls?has_content>
                                <div class="images">
                                    <#list advice.imgUrls as img>
                                        <img src="${img}" alt="">
                                    </#list>
                                </div>
                            </#if>
                            <div class="bottom-btn" data-id="${advice.id}">
                                <div class="cai" data-id="${advice.id}">${advice.unstar}</div>
                                <div class="zan" data-id="${advice.id}">${advice.star}</div>
                            </div>
                        </div>
                    </div>
                </#list>
                </div>
            <#if adviceViews?size == 10>
                <div class="infinite-scroll-preloader">
                    <div id="pullUp" class="">
                        <span class="pullUpLabel">下滑加载更多…</span>
                    </div>
                </div>
            <#else>
                <div style="height:1rem;width:100%">

                </div>
            </#if>
            </div>
        </div>
    </div>
</div>
<script src="/js/zepto.min.5551012.js"></script>
<script src="/js/scroll.js"></script>
<script src="/js/base.js"></script>
<script src="/js/viewImg.js"></script>
<script>
    (function (doc, win) {

        var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    var style;
                    if (style = document.getElementById("forhtml")) {
                        style.parentNode.removeChild(style);
                    }
                    style = document.createElement("style");
                    style.id = "forhtml";
                    document.head.appendChild(style);
                    style.appendChild(document.createTextNode("html{font-size:" + 20 * (clientWidth / 320) + "px !important;}"));
                };
        recalc();
        doc.getElementsByClassName('page-group')[0].style.visibility = 'visible';
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
    $(document).ready(function() {
        var idArray = {};
        $('.more-text').on('touchend',function(e){
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this),$p=$this.siblings('.adviseContent');
            if($this.hasClass('open')){
                $p.addClass('hidden');
                $(this).text('全文').removeClass('open');
            }else{
                $p.removeClass('hidden');
                $(this).text('收起').addClass('open');
            }
            $.refreshScroller();
        });
        function sets(idArray){
            var $btns = $('.bottom-btn');
            for (var i = 0, l = $btns.length; i < l; i++) {
                for(var key in idArray){
                    if ($($btns[i]).attr('data-id') == key) {
                        var $zan = $($btns[i]).find('.zan');
                        var $cai =$($btns[i]).find('.cai');
                        if(idArray[key] == '1'){
                            $zan.addClass('click');
                        }else if(idArray[key] =='2'){
                            $cai.addClass('click');
                        }
                        $($btns[i]).attr('data-value',idArray[key]);
                    }
                }
            }
        }
        //点赞
        if (window.localStorage){
            if(localStorage.getItem("idArray")){
                idArray = JSON.parse(localStorage.getItem("idArray"));
                sets(idArray);
            }
        }else{
            alert('您的浏览器不支持localStorage.');
        }
        function zan(e,$this){
            var $cai = $this.siblings('.cai') ;
            var id = $this.attr("data-id");
            var zanbool = $this.hasClass('click');
            var caibool = $cai.hasClass('click');
            if(!$this.hasClass('disabled')){
                if(caibool){
                    $.alert({
                        msg: '请先取消踩！'
                    });
                }else{
                    $this.addClass('disabled');
                    $.ajax({
                        type:'GET',
                        url: '/mobile/gateway/${type}/activity/advice/star/'+!zanbool+'/'+id,
                        success: function(data){
                            $this.removeClass('disabled');
                            if (data.code == 0) {
                                if(zanbool){
                                    $this.removeClass('click').text(parseInt($this.text())-1);
                                    if (window.localStorage) {
                                        for(var key in idArray) {
                                            if (key == id) {
                                                delete idArray[key];
                                                break;
                                            }
                                        }
                                    }
                                }else{
                                    $this.addClass('click').text(parseInt($this.text())+1);
                                    idArray[id] = '1';
                                }
                                localStorage.setItem("idArray", JSON.stringify(idArray));
                            }
                        },
                        error: function(data){
                            $.alert({
                                msg: '网络异常,请重试'
                            });
                        }
                    });
                }
            }else{
                $.alert({
                    msg: '别急，休息一下！'
                });
            }
        }

        function cai(e,$this){
            var $zan = $this.siblings('.zan') ;
            var id = $this.attr("data-id");
            var caibool = $this.hasClass('click');
            var zanbool = $zan.hasClass('click');
            if(!$this.hasClass('disabled')){
                if(zanbool){
                    $.alert({
                        msg: '请先取消赞！'
                    });
                }else {
                    $this.addClass('disabled');
                    $.ajax({
                        type: 'GET',
                        url: '/mobile/gateway/${type}/activity/advice/unstar/' + !caibool + '/' + id,
                        success: function (data) {
                            $this.removeClass('disabled');
                            if (data.code == 0) {
                                if(caibool) {
                                    $this.removeClass('click').text(parseInt($this.text()) - 1);
                                    if (window.localStorage) {
                                        for (var key in idArray) {
                                            if (key == id) {
                                                delete idArray[key];
                                                break;
                                            }
                                        }
                                    }
                                }else {
                                    $this.addClass('click').text(parseInt($this.text()) + 1);
                                    idArray[id] = '2';
                                }
                                localStorage.setItem("idArray", JSON.stringify(idArray));
                            }
                        },
                        error: function (data) {
                            $.alert({
                                msg: '网络异常,请重试'
                            });
                        }
                    });
                }
            }else{
                $.alert({
                    msg: '别急，休息一下！'
                });
            }
        }

        $('.bottom-btn .zan').on('touchend',function(e){
            e.preventDefault();
            e.stopPropagation();
            zan(e,$(this));
        });

        $('.bottom-btn .cai').on('touchend',function(e){
            e.preventDefault();
            e.stopPropagation();
            cai(e,$(this));
        });

        /* ============================================
         **********   旅客评价下拉加载更多  **************
         ============================================== */
        // 初始化图片预览
        $('.images').on('click','img',function() {
            var $this = $(this),imgArray = [];
            var $siblings = $this.parents('.images').find('img');
            for(var i=0,len=$siblings.length;i<len;i++){
                imgArray.push($($siblings[i]).attr('src'));
            }
            $.viewImg(imgArray,$(this).index());
        });
        var loading = false;
        var indexFlag = 1;
        var colors = ['yellow','blue','red','green','purple'];
        function addItems(data) {
            var allhtml = '';
            $.each(data,function(i,item){
                var c_index = parseInt(Math.random()*5);
                var html = '<div class="advice-wrapper"><div class="userName"><i class="'
                +colors[c_index]+'"></i>'+item.nickName+':</div>'
                        +'<div class="advice"><p class="adviseContent hidden">'+item.content+'</p>';
                if(item.content.length>114){
                    html += '<div class="more-text">全文</div>';
                }
                if(item.imgUrls.length>0){
                    html += '<div class="images">';
                    for(var j=0;j<item.imgUrls.length;j++){
                        html += '<img src="'+item.imgUrls[j]+'" alt=""/>';
                    }
                    html += '</div>';
                }
                html += '<div class="bottom-btn" data-id="'+item.id+'"><div class="cai" data-id="'
                        +item.id+'">'+item.unstar+'</div><div class="zan" data-id="'+item.id+'">'+item.star+'</div></div></div></div>';
                allhtml += html;
            });
            $('.advice-lists').append(allhtml);
            $('.bottom-btn .zan').off().on('touchend',function(e){
                e.preventDefault();
                e.stopPropagation();
                zan(e,$(this));
            });

            $('.bottom-btn .cai').off().on('touchend',function(e){
                e.preventDefault();
                e.stopPropagation();
                cai(e,$(this));
            });
            //点赞
            if (window.localStorage){
                if(localStorage.getItem("idArray")){
                    idArray = JSON.parse(localStorage.getItem("idArray"));
                    sets(idArray);
                }
            }else{
                alert('您的浏览器不支持localStorage.');
            }
            $('.more-text').off().on('touchend',function(e){
                e.preventDefault();
                e.stopPropagation();
                var $this = $(this),$p=$this.siblings('.adviseContent');
                if($this.hasClass('open')){
                    $p.addClass('hidden');
                    $(this).text('全文').removeClass('open');
                }else{
                    $p.removeClass('hidden');
                    $(this).text('收起').addClass('open');
                }
                $.refreshScroller();
            });
            $('.images').off().on('click','img',function() {
                var $this = $(this),imgArray = [];
                var $siblings = $this.parents('.images').find('img');
                for(var i=0,len=$siblings.length;i<len;i++){
                    imgArray.push($($siblings[i]).attr('src'));
                }
                $.viewImg(imgArray,$(this).index());
            });
            $.refreshScroller();
        }
        function pull() {
            $.ajax({
                type: 'POST',
                url: '/mobile/gateway/${type}/activity/advice/list',
                contentType:'application/json',
                data: JSON.stringify({
                    index: lastIndex + 1,
                    size: 10,
                }),
                success: function (data) {
                    if (data.code == 0) {
                        if (data.data.length == 0) {
                            $('#pullUp .pullUpLabel').text('没有更多了…');
                            $.refreshScroller();
                            if(indexFlag == lastIndex) {
                                $('.no-line').show();
                            } else {
                                $('.no-line').hide();
                            }
                        } else {
                            loading = false;
                            addItems(data.data);
                            $('#pullUp .pullUpLabel').text('下滑加载更多…');
                            lastIndex++;
                        }
                    } else if (data.code == 2) {
                        // 加载完毕，则注销无限加载事件，以防不必要的加载
                        $.detachInfiniteScroll($('.infinite-scroll'));
                        // 删除加载提示符
//                        $('.infinite-scroll-preloader').remove();
                        $('#pullUp').text('没有更多了…');
                        $.refreshScroller();
                    }
                },
                error: function () {
                    loading = false;
                }
            });
        }
        // 上次加载的序号
        var lastIndex = 1;
        // 注册'infinite'事件处理函数
        $(document).on('infinite', '.infinite-scroll-bottom',function() {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            pull();
        });
    });
</script>
<#include "/mobile/common/wechat_share.ftl">
<#include "/mobile/common/page_footer.ftl">
</body>
</html>
