<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>简途旅行</title>
    <meta name="format-detection" content="telephone=no" />
    <meta name="wap-font-scale" content="no">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <style>*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(255,255,255,0);font-family:Helvetica,sans-serif;-webkit-touch-callout:none;box-sizing:border-box}a:active,a:hover,a:link,a:visited{text-decoration:none;outline:0}html,body{width:100%;height:100%;font-size:20px}html{font-size:20px}.sidebar{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);z-index:1001;overflow:auto;position:fixed;top:0;left:5rem;right:0;bottom:0;background-color:#fff}.sidebar.sidebar-transition{-webkit-transition:.15s ease-out;transition:.15s ease-out}.sidebar.sidebar-in{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.sidebar .sidebar-content{position:relative}.sidebar .sidebar-title,.sidebar .sidebar-item{width:100%;height:3rem;line-height:3rem;border-bottom:1px solid #D8D8D8;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap}.sidebar .sidebar-title .left,.sidebar .sidebar-item .left{width:3.2rem;height:100%;background:url(/images/sidebar_user.png) no-repeat center;background-size:1.7rem}.sidebar .sidebar-title .right,.sidebar .sidebar-item .right{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:.8rem;color:#424242}.sidebar .sidebar-item{height:2.1rem}.sidebar .sidebar-item .right{color:#737373;font-size:.7rem;line-height:2.1rem}.sidebar .sidebar-item .left.sidebar-index{background:url(/images/sidebar_index.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-order{background:url(/images/sidebar_order.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-tourism{background:url(/images/sidebar_tourism.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-admin{background:url(/images/sidebar_admin.png) no-repeat center;background-size:1.3rem}.sidebar-backdrop{z-index:1000;position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;background-color:#000;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}.sidebar-backdrop.in{opacity:.42}header{position:absolute;height:2rem;width:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;background-color:#D71345;z-index:103;top:0}header .back{width:1.9rem;height:100%;background:url(/images/back.png) no-repeat center;background-size:.45rem .8rem;text-indent:-9999px}header .back.no-icon{background:0 0}header .center{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:.8rem;color:#fff;line-height:2rem;text-align:center}header .home{text-indent:-9999px;height:100%;width:1.9rem;background:url(/images/admin.png) no-repeat center;background-size:.85rem .85rem}header .home.no-icon{background:0 0}footer{position:absolute;height:2rem;width:100%;line-height:2rem;bottom:0}footer~.page-content{bottom:2rem}header~.page-content{top:2rem}.page,.page-group{position:absolute;overflow:hidden;width:100%;top:0;left:0;height:100%}.page{display:none;z-index:100}.page.page-current{display:block}.page-content{position:absolute;width:100%;top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch}.center-to-left{display:block;-webkit-animation:pageFromCenterToLeft 400ms forwards;animation:pageFromCenterToLeft 400ms forwards}.center-to-right{display:block;-webkit-animation:pageFromCenterToRight 400ms forwards;animation:pageFromCenterToRight 400ms forwards}.left-to-center{z-index:102;display:block;-webkit-animation:pageFromLeftToCenter 400ms forwards;animation:pageFromLeftToCenter 400ms forwards}.right-to-center{display:block;-webkit-animation:pageFromRightToCenter 400ms forwards;animation:pageFromRightToCenter 400ms forwards}@-webkit-keyframes pageFromRightToCenter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromRightToCenter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0);opacity:1}}@keyframes pageFromCenterToRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:1}}@keyframes pageFromCenterToLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:1}}@-webkit-keyframes pageFromLeftToCenter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromLeftToCenter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}.confirm-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10600;visibility:hidden;opacity:0;background-color:rgba(0,0,0,.4);-webkit-transition-duration:400ms;transition-duration:400ms}.confirm-content{background-color:#e8e8e8;border-radius:.2rem;width:14.5rem;position:absolute;z-index:11000;left:50%;box-sizing:border-box;margin-left:-7.25rem;top:50%;text-align:center;background-color:#fff;color:#535353;opacity:0;font-size:.9rem;-webkit-transform:translate3d(0,0,0) scale(1.185);transform:translate3d(0,0,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity}.confirm-content.in{opacity:1;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transfrom:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.confirm-content.out{opacity:0;z-index:10999;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}.confirm-content .confirm-inner{padding:1.25rem 1.25rem .95rem}.confirm-content .confirm-detail{font-size:.7rem;color:#535353;margin-top:.5rem}.confirm-content .confirm-buttons{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;border-top:1px solid #E4E4E4}.confirm-content .confirm-buttons span{display:block;-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:2.5rem;line-height:2.5rem;box-sizing:border-box}.confirm-content .confirm-buttons span:active{background-color:#d4d4d4}.confirm-content .confirm-buttons span+span{border-left:1px solid #E4E4E4}.confirm-bg.confirm-bg-visible{visibility:visible;opacity:1}.alert-msg{position:absolute;z-index:10000;top:40%;text-align:center;opacity:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:.15s ease-out;transition:.15s ease-out}.alert-msg.in{opacity:1;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.alert-msg div{background-color:rgba(63,63,63,.47);color:#fff;display:inline;margin:0 auto;font-size:.7rem;padding:.55rem 1.55rem;border-radius:1.6rem}@-webkit-keyframes rotate{from{-webkit-transform:rotate(360deg)}to{-webkit-transform:rotate(0deg)}}@keyframes rotate{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}.preloader-overlay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:10600;-webkit-transition-duration:400ms;transition-duration:400ms;visibility:visible;opacity:0;background:0 0}.preloader-modal{position:absolute;left:50%;top:45%;padding:.4rem;margin-left:-1.25rem;margin-top:-1.25rem;background:rgba(0,0,0,.8);z-index:11000;border-radius:.25rem}.preloader-modal .preloader{display:block;width:1.7rem;height:1.7rem;-webkit-transform-origin:50%;transform-origin:50%}.preloader-modal .preloader.preloader-animation{-webkit-animation:rotate .7s linear 0s normal none infinite;animation:rotate .7s linear 0s normal none infinite}.preloader-modal .preloader:after{display:block;content:"";width:100%;height:100%;background:url("data:image/png;base64,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") no-repeat center;background-position:50%;background-size:100%}body{font-size:0;background-color:#ec2a53}.header-wrapper{position:relative;width:100%;z-index:11}.header-wrapper img{width:100%}.report-content{position:relative;top:-1.5rem;width:90%;border:.2rem solid #fff;z-index:10;margin:0 auto;padding-top:1rem;text-align:center}.report-content .input-group{width:90%;margin:.5rem auto;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap}.report-content .input-group label{width:3rem;height:1.4rem;line-height:1.4rem;font-size:.7rem;color:#fff;text-align:right;padding-right:.5rem}.report-content .input-group input{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:1.4rem;line-height:.7rem;font-size:.7rem;padding-left:.2rem;outline:none;border:none;border-radius: .1rem;}.report-content .tips{width:90%;color:#fff;font-size:.6rem;text-align:right}.report-content h5{margin-top:.75rem;color:#fff;font-size:.7rem;text-align:center}.report-content textarea{width:100%;padding:.3rem;font-size:.6rem}.report-content .photo-wrapper{position:relative;width:90%;margin:.5rem auto;height:9.25rem;border-radius:.25rem;background-color:#fff}.report-content .submit{width:60%;margin:1rem auto}.report-content .submit img{width:100%}.confirm-modal-bg{position:absolute;left:0;top:0;bottom:0;right:0;z-index:9998;background-color:rgba(69,69,69,.8);visibility:hidden;opacity:0;-webkit-transition-duration:400ms;transition-duration:400ms}.confirm-modal-bg.confirm-bg-visible{visibility:visible;opacity:1}.confirm-modal{visibility:hidden;opacity:0;-webkit-transform:translate3d(0,-50%,0) scale(1);transform:translate3d(0,-50%,0) scale(1);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity;left:50%;top:40%;margin-left:-7.5rem;z-index:9999;position:absolute;width:15rem}.confirm-modal.in{visibility:visible;opacity:1;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transfrom:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.confirm-modal.out{opacity:0;visibility:hidden;z-index:10999;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}.confirm-modal-content{width:100%;position:relative}.confirm-modal-content img{width:100%}.confirm-modal-btns{position:absolute;width:74%;bottom:1.2rem;left:50%;margin-left:-37%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap}.confirm-modal-btns div{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center}.confirm-modal-btns div img{width:84%}.alert-msg{position:absolute;z-index:10000;top:40%;margin-left:-6.75rem;text-align:center;opacity:0;left:50%;color:#fff;background-color:rgba(0,0,0,.65);padding:.7rem 1.6rem;-webkit-transition:.4s ease-out;transition:.4s ease-out;font-size:.7rem;border-radius:.15rem;-webkit-transform:translate3d(0,0,0) scale(1.185);transform:translate3d(0,0,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity;box-sizing:border-box}.alert-msg.in{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.alert-msg.out{opacity:0;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}
    .webuploader-pick-hover {
        background: transparent;
    }
    .webuploader-pick{
        background: transparent;
        height:100%;
        width: 100%;
        overflow: hidden;
    }input[type=file]{display:none;}.comment{margin:.5rem auto;padding:.3rem;width:90%;background-color: #fff;}.comment textarea{outline:none;min-height:4.25rem;height:auto;max-height:12.5rem;line-height:1rem;font-size:.7rem;color:#4F545B;resize:none;border:0;padding:0 0 .3rem 0;}.comment .add_img{position:relative;width:3.76rem;height:3.76rem;background:url(/images/add_photo@2x.png) no-repeat center;background-size:contain;padding:0;} .comment .albums{font-size:0;text-align:left;margin-left:-.35rem}.comment .albums .img{position:relative;width:3.76rem;height:3.76rem;display:inline-block;margin-left:.35rem;margin-top:.35rem}.comment .albums .img img{width:100%;height:100%}.comment .albums .img .delete{block;width:.9rem;height:.9rem;position:absolute;right:0;top:0;background:url(/images/advice/red_close@2x.png) no-repeat center;background-size:100%}.img-viewer-overlay{position:absolute;z-index:10200;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);visibility:hidden;opacity:0;-webkit-transition-duration:400ms;transition-duration:400ms}  .img-viewer-overlay.overlay-visible{visibility:visible;opacity:1}  .img-viewer{position:absolute;left:0;top:0;width:100%;height:100%;z-index:10400;background-color:#fff;box-sizing:border-box;display:none;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-transition-property:-webkit-transform;transition-property:transform;opacity:0;-webkit-transition:400ms;transition:400ms}  .img-viewer.visible{opacity:1}  .img-viewer-header,.img-viewer-footer{position:absolute;right:0;left:0;z-index:10;height:2.2rem;padding-right:.5rem;padding-left:.5rem;box-sizing:border-box;background-color:#f7f7f8;-webkit-backface-visibility:hidden;backface-visibility:hidden}  .img-viewer-content{position:absolute;top:2.2rem;right:0;left:0;bottom:0;overflow:hidden}  .img-viewer-content .img-viewer-swiper-container{-webkit-transition-duration:400ms;transition-duration:400ms;position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-property:-webkit-transform;transition-property:transform;box-sizing:content-box}  .img-viewer-content .img-viewer-swiper-item{-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-flex-shrink:0;-ms-flex:0 0 auto;-webkit-flex-shrink:0;flex-shrink:0;position:relative;width:100%;height:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box}  .img-viewer-content .img-viewer-swiper-item img{width:auto;height:auto;max-width:100%;max-height:100%}  .img-viewer-header{top:0;height:2.2rem;line-height:2.2rem}  .img-viewer-header:after{content:'';position:absolute;left:0;bottom:0;right:auto;top:auto;height:1px;width:100%;background-color:#e7e7e7;display:block;z-index:15;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}  .img-viewer-header .img-viewer-header-text{color:#4F545B;font-size:.8rem;text-align:center}  .img-viewer-header a{position:absolute;width:1rem;height:100%;top:0;z-index:20;background:url(/images/left_red_arrow@2x.png) center no-repeat;background-size:.5rem}.confirm-bg{position:absolute;left:0;top:0;bottom:0;right:0;z-index:9998;background-color:rgba(69,69,69,.6);visibility:hidden;opacity:0;-webkit-transition-duration:400ms;transition-duration:400ms}.confirm-bg.confirm-bg-visible{visibility:visible;opacity:1}.confirm-msg{opacity:0;-webkit-transform:translate3d(0,-50%,0) scale(1.185);transform:translate3d(0,-50%,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity;left:50%;top:50%;margin-left:-6.25rem;z-index:9999;position:absolute;width:12.5rem}.confirm-msg.in{opacity:1;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transfrom:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.confirm-msg.out{opacity:0;z-index:10999;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}.confirm-msg .confirm-msg-title{border-top-left-radius:.25rem;border-top-right-radius:.25rem;background-color:#fff;height:1.725rem;border-bottom:1px solid #EBEBF5;line-height:1.725rem;text-align:center;font-size:.85rem;color:#E61E4B}.confirm-msg .confirm-msg-content{background-color:#fff;padding:.5rem .65rem;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom:.25rem solid #E61E4B}.confirm-msg .confirm-msg-content.has-btn{border:0;border-radius:0}.confirm-msg .confirm-msg-content p{color:#4F545B;font-size:.7rem;}.confirm-msg .confirm-msg-btns{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;border-top:1px solid #E4E4E4;padding:.175rem 0;background:#fff;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.confirm-msg .confirm-msg-btns span{display:block;-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:1.85rem;line-height:1.85rem;font-size:.7rem;text-align:center;box-sizing:border-box;color:#4F545B;}.confirm-msg .confirm-msg-btns span:first-child{color:#E61E4B}.confirm-msg .confirm-msg-btns span+span{border-left:1px solid #E4E4E4}.confirm-msg .confirm-msg-close{margin:1.5rem auto 0;width:1.45rem;height:1.45rem;background:url(/images/close.png) no-repeat;background-size:1.45rem}
    </style>
${pageStat}
</head>
<body>
<div class="page-group" style="visibility: hidden">
    <div class="page page-current">
        <div class="page-content">
            <div class="header-wrapper">
                <img src="https://images.simpletour.com/activity/complain/report_header.png" alt="">
            </div>
            <div class="report-content">
                <div class="input-group">
                    <label for="">昵称</label>
                    <input type="text" name="nickName" value="" placeholder="必填"/>
                </div>

                <div class="input-group">
                    <label for="">手机号</label>
                    <input type="tel" name="mobile" value="" placeholder="必填"/>
                </div>

                <div class="input-group">
                    <label for="">微信号</label>
                    <input type="text" name="wechat" value="" placeholder="非必填，填写有惊喜哦~"/>
                </div>
                <div class="tips">*请填写微信号,而不是微信昵称</div>
                
                <h5>您对简途旅行APP以及微站的使用建议</h5>
                <div class="comment">
                    <textarea placeholder="写下对简途巴士旅行的体验感受吧，对我们的帮助很大哟～～" name="advise" id="" cols="30" rows="10"></textarea>
                    <div class="add_img"></div>
                    <div class="albums">
                        <#--<div class="img">-->
                            <#--<img src="https://images.simpletour.com/simpletour/images/survey/3464679a7d277857ad61bbc742a586a6.png!wechatQ3146146"-->
                                 <#--alt="">-->
                            <#--<div class="delete"></div>-->
                        <#--</div>-->
                    </div>
                </div>
                <div class="submit">
                    <img src="https://images.simpletour.com/activity/complain/submit.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
<div class="confirm-modal" >
    <div class="confirm-modal-content">
        <img src="https://images.simpletour.com/activity/complain/modal.png" alt="">
    </div>
    <div class="confirm-modal-btns">
        <#if requestByApp == 'true' || type == 'app'>
            <div data-href="simpletour://app/lines">
            <#else >
            <div data-href="/mobile/gateway/wechat/line">
        </#if>
            <img src="https://images.simpletour.com/activity/complain/modal_view.png" alt="">
        </div>
        <div data-href="/mobile/gateway/${type}/activity/advice/list">
            <img src="https://images.simpletour.com/activity/complain/modal_ok.png" alt="">
        </div>
    </div>
</div>
<div class="confirm-modal-bg"></div>
<img style="display: none" src="https://images.simpletour.com/activity/complain/modal.png" alt="">
<img style="display: none" src="https://images.simpletour.com/activity/complain/modal_ok.png" alt="">
<img style="display: none" src="https://images.simpletour.com/activity/complain/modal_view.png" alt="">
<script src="/js/zepto.min.5551012.js"></script>
<script type="text/javascript" src="/js/callback.zepto.js"></script>
<script type="text/javascript" src="/js/deferred.zepto.js"></script>
<script type="text/javascript" src="/js/base.js"></script>
<script type="text/javascript" src="/js/viewImg.js"></script>
<script type="text/javascript" src="/js/webuploader/webuploader.html5only.min.js"></script>
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
        $('.confirm-modal-btns div').on('click',function(e){
            if($(this).attr('data-href')){
                e.preventDefault();
                e.stopPropagation();
                location.replace($(this).attr('data-href'));
            }
        });
        var imgUrls = [];
        $('.submit').click(function(e) {
            var $this = $(this);
            var nickName = $.trim($('input[name=nickName]').val());
            var mobile = $.trim($('input[name=mobile]').val());
            var wechat = $.trim($('input[name=wechat]').val());
            var content = $.trim($('textarea[name=advise]').val());

            if($this.hasClass('disabled')){
                $.alert({
                    msg: '数据提交中，请勿重复提交'
                });
            }else if(!nickName){
                $.alert({
                    msg: '请输入昵称'
                });
            }else if(!(/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\-\u4e00-\u9fa5]+?$/.test(nickName))){
                $.alert({
                    msg: "昵称必须以字母或汉字开头,可以输入中文 英文 数字 '-' '_'"
                });
            }else if(!(/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\-\u4e00-\u9fa5]{0,14}$/.test(nickName))){
                $.alert({
                    msg: '昵称不能超过15个字符'
                });
            }else if(!mobile){
                $.alert({
                    msg: '手机号不能为空'
                });
            }else if(!(/(^0?(13|14|15|17|18)[0-9]{9}$)/.test(mobile))){
                $.alert({
                    msg: '手机号格式错误'
                });
            }else if(wechat && !(/^[a-zA-Z][a-zA-Z0-9_\-]{0,19}$/.test(wechat))){
                $.alert({
                    msg: '微信号格式错误'
                });
            }else if(!content){
                $.alert({
                    msg: '点评不能为空'
                });
            }else if(content.length<10){
                $.alert({
                    msg: '点评不能少于10个字符'
                });
            }else if(content.length>500){
                $.alert({
                    msg: '点评不能大于500个字符'
                });
            }else{
                $this.addClass('disabled');
                $.ajax({
                    type: 'POST',
                    url: '/mobile/gateway/${type}/activity/advice/form',
                    dataType: 'json',
                    contentType: "application/json",
                    data: JSON.stringify({nickName: nickName, mobile: mobile, wechatNo: wechat,content:content,imgUrls: imgUrls.join(',')}),
                    success:function(data){
                        if (data.code == 0) {
                            $('.confirm-modal').addClass('in').css({
                                '-webkit-transform': 'translate3d(0,' + -$('.confirm-modal').height() / 2 + 'px,0)',
                                'transform': 'translate3d(0,' + -$('.confirm-modal').height() / 2 + 'px,0)'
                            });
                            $('.confirm-modal-bg').addClass('confirm-bg-visible');
                            $this.removeClass('disabled');
                        }else if(data.code == 1){
                            $.confirm({
                                title:'提交失败',
                                detail : [data.msg],
                                yes : '确认',
                                yesFun:function(){
                                    location.replace('/mobile/gateway/wechat/activity/advice/home');
                                }
                            });
                            $this.removeClass('disabled');
                        }else{
                            $.alert({
                                msg: data.msg || '提交失败'
                            });
                            $this.removeClass('disabled');
                        }
                    },
                    error:function(data){
                        $this.removeClass('disabled');
                        $.alert({
                            msg: '网络异常,请重试'
                        });
                    }
                });
            }
        });
        //上传图片
        function generateMixed(n) {
            var jschars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            var res = "";
            for (var i = 0; i < n; i++) {
                var id = Math.ceil(Math.random() * 35);
                res += jschars[id];
            }
            return res;
        }
        var img_nums = 0,$albums = $('.comment .albums'),flag = false;
        $('.add_img').click(function(e){
            if(img_nums>=9){
                e.preventDefault();
                e.stopPropagation();
                $.alert({
                    msg: '图片最多上传9张'
                });
//                uploader.destroy();
            }else{
                flag = false;
            }
        });
        var uploader = WebUploader.create({
            auto: true,
            // 文件接收服务端。
            server: 'https://tools.simpletour.com/upload/image/resize/complain',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: {id:$('.add_img'),multiple:true},
            formData: {"randomCode": generateMixed(16)},
            fileSingleSizeLimit: 10 * 1024 * 1024,
            duplicate: true,
            compress: false,
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/gif,image/jpg,image/jpeg,image/bmp,image/png'
            },
        });
        uploader.on('error', function (type) {
            if ("F_EXCEED_SIZE" == type) {
                $.confirm({
                    title: '上传失败',
                    detail: ['图片大小必须小于10M'],
                    yes: '确定',
                });
            } else if ('F_DUPLICATE' == type) {
                $.confirm({
                    title: '上传失败',
                    detail: ['图片不能重复上传'],
                    yes: '确定',
                });
            }else if('Q_TYPE_DENIED' == type){
                $.confirm({
                    title: '上传失败',
                    detail: ['不支持上传图片类型'],
                    yes: '确定',
                });
            }
        });
        uploader.on('uploadSuccess', function (file, response) {
            if (response.code == 0) {
                var url = response.data.saveHost + response.data.savePath + '/' + response.data.saveName;
                if(img_nums<9){
                    img_nums++;
                    imgUrls.push(url);
                    $albums.append('<div class="img"><img src="'+ url +'!wechatQ3146146" alt=""/><span class="delete"></span></div>');
                    $albums.show();
                    $albums.find('img').off().on('click',function(e){
                        $.viewImg(imgUrls,$(this).parents('.img').index());
                    });
                    $albums.find('.delete').off().on('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        var $this = $(this);
                        var index = $this.parents('.img').index();
                        imgUrls.splice(index,1);
                        $albums.find('.img').eq(index).remove();
                        img_nums--;
                    });
                }else if(!flag){
                    $.alert({
                        msg: '图片最多上传9张'
                    });
                    flag = true;
                }
            } else {
                $.alert({
//                    msg: response.msg || '上传失败,请重试'
                    msg: '上传失败,请重试'
                });
            }
        });
    });
</script>
<#include "/mobile/common/wechat_share.ftl">
<#include "/mobile/common/page_footer.ftl">
</body>
</html>
