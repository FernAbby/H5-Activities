<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>简途旅行</title>
    <meta name="format-detection" content="telephone=no" />
    <meta name="wap-font-scale" content="no">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <style>*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(255,255,255,0);font-family:Helvetica,sans-serif;-webkit-touch-callout:none;box-sizing:border-box}a:active,a:hover,a:link,a:visited{text-decoration:none;outline:0}html,body{width:100%;height:100%;font-size:20px}html{font-size:20px}.sidebar{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);z-index:1001;overflow:auto;position:fixed;top:0;left:5rem;right:0;bottom:0;background-color:#fff}.sidebar.sidebar-transition{-webkit-transition:.15s ease-out;transition:.15s ease-out}.sidebar.sidebar-in{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.sidebar .sidebar-content{position:relative}.sidebar .sidebar-title,.sidebar .sidebar-item{width:100%;height:3rem;line-height:3rem;border-bottom:1px solid #D8D8D8;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap}.sidebar .sidebar-title .left,.sidebar .sidebar-item .left{width:3.2rem;height:100%;background:url(/images/sidebar_user.png) no-repeat center;background-size:1.7rem}.sidebar .sidebar-title .right,.sidebar .sidebar-item .right{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:.8rem;color:#424242}.sidebar .sidebar-item{height:2.1rem}.sidebar .sidebar-item .right{color:#737373;font-size:.7rem;line-height:2.1rem}.sidebar .sidebar-item .left.sidebar-index{background:url(/images/sidebar_index.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-order{background:url(/images/sidebar_order.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-tourism{background:url(/images/sidebar_tourism.png) no-repeat center;background-size:1.3rem}.sidebar .sidebar-item .left.sidebar-admin{background:url(/images/sidebar_admin.png) no-repeat center;background-size:1.3rem}.sidebar-backdrop{z-index:1000;position:fixed;top:0;bottom:0;left:0;right:0;opacity:0;background-color:#000;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}.sidebar-backdrop.in{opacity:.42}header{position:absolute;height:2rem;width:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;background-color:#D71345;z-index:103;top:0}header .back{width:1.9rem;height:100%;background:url(/images/back.png) no-repeat center;background-size:.45rem .8rem;text-indent:-9999px}header .back.no-icon{background:0 0}header .center{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:.8rem;color:#fff;line-height:2rem;text-align:center}header .home{text-indent:-9999px;height:100%;width:1.9rem;background:url(/images/admin.png) no-repeat center;background-size:.85rem .85rem}header .home.no-icon{background:0 0}footer{position:absolute;height:2rem;width:100%;line-height:2rem;bottom:0}footer~.page-content{bottom:2rem}header~.page-content{top:2rem}.page,.page-group{position:absolute;overflow:hidden;width:100%;top:0;left:0;height:100%}.page{display:none;z-index:100}.page.page-current{display:block}.page-content{position:absolute;width:100%;top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch}.center-to-left{display:block;-webkit-animation:pageFromCenterToLeft 400ms forwards;animation:pageFromCenterToLeft 400ms forwards}.center-to-right{display:block;-webkit-animation:pageFromCenterToRight 400ms forwards;animation:pageFromCenterToRight 400ms forwards}.left-to-center{z-index:102;display:block;-webkit-animation:pageFromLeftToCenter 400ms forwards;animation:pageFromLeftToCenter 400ms forwards}.right-to-center{display:block;-webkit-animation:pageFromRightToCenter 400ms forwards;animation:pageFromRightToCenter 400ms forwards}@-webkit-keyframes pageFromRightToCenter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromRightToCenter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0);opacity:1}}@keyframes pageFromCenterToRight{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(20%,0,0);transform:translate3d(20%,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:1}}@keyframes pageFromCenterToLeft{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0);opacity:1}}@-webkit-keyframes pageFromLeftToCenter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromLeftToCenter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);opacity:.9}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}.confirm-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10600;visibility:hidden;opacity:0;background-color:rgba(0,0,0,.4);-webkit-transition-duration:400ms;transition-duration:400ms}.confirm-content{background-color:#e8e8e8;border-radius:.2rem;width:14.5rem;position:absolute;z-index:11000;left:50%;box-sizing:border-box;margin-left:-7.25rem;top:50%;text-align:center;background-color:#fff;color:#535353;opacity:0;font-size:.9rem;-webkit-transform:translate3d(0,0,0) scale(1.185);transform:translate3d(0,0,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity}.confirm-content.in{opacity:1;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transfrom:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.confirm-content.out{opacity:0;z-index:10999;-webkit-transition-duration:400ms;transition-duration:400ms;-webkit-transform:translate3d(0,0,0) scale(0.815);transform:translate3d(0,0,0) scale(0.815)}.confirm-content .confirm-inner{padding:1.25rem 1.25rem .95rem}.confirm-content .confirm-detail{font-size:.7rem;color:#535353;margin-top:.5rem}.confirm-content .confirm-buttons{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-ms-box-orient:horizontal;-moz-box-orient:horizontal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;-moz-flex-flow:row nowrap;flex-flow:row nowrap;border-top:1px solid #E4E4E4}.confirm-content .confirm-buttons span{display:block;-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:2.5rem;line-height:2.5rem;box-sizing:border-box}.confirm-content .confirm-buttons span:active{background-color:#d4d4d4}.confirm-content .confirm-buttons span+span{border-left:1px solid #E4E4E4}.confirm-bg.confirm-bg-visible{visibility:visible;opacity:1}.alert-msg{position:absolute;z-index:10000;top:40%;width:100%;text-align:center;opacity:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:.15s ease-out;transition:.15s ease-out}.alert-msg.in{opacity:1;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.alert-msg div{background-color:rgba(63,63,63,.47);color:#fff;display:inline;margin:0 auto;font-size:.7rem;padding:.55rem 1.55rem;border-radius:1.6rem}@-webkit-keyframes rotate{from{-webkit-transform:rotate(360deg)}to{-webkit-transform:rotate(0deg)}}@keyframes rotate{from{transform:rotate(360deg)}to{transform:rotate(0deg)}}.preloader-overlay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:10600;-webkit-transition-duration:400ms;transition-duration:400ms;visibility:visible;opacity:0;background:0 0}.preloader-modal{position:absolute;left:50%;top:45%;padding:.4rem;margin-left:-1.25rem;margin-top:-1.25rem;background:rgba(0,0,0,.8);z-index:11000;border-radius:.25rem}.preloader-modal .preloader{display:block;width:1.7rem;height:1.7rem;-webkit-transform-origin:50%;transform-origin:50%}.preloader-modal .preloader.preloader-animation{-webkit-animation:rotate .7s linear 0s normal none infinite;animation:rotate .7s linear 0s normal none infinite}.preloader-modal .preloader:after{display:block;content:"";width:100%;height:100%;background:url("data:image/png;base64,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") no-repeat center;background-position:50%;background-size:100%}body{font-size:0}.header-wrapper{background-color:#ec2a53;width:100%;padding-bottom:1rem}.header-wrapper img{width:100%}.header-wrapper .aTag{width:60%;margin:.5rem auto}.header-wrapper .aTag.toRank{width:50%;margin-top:1rem;margin-bottom:0}.show-prices{background-color:#ffe7b4;width:100%;padding-bottom:1rem}.show-prices .title{width:90%;margin:0 auto;padding-top:1rem}.show-prices .title img{width:100%}.show-prices .price-wrapper{width:90%;margin:.5rem auto}.show-prices .price-wrapper img{width:100%}.show-prices .aTag{width:60%;margin:.5rem auto 0}.show-prices .aTag img{width:100%}.join-way{background-color:#ec2a53;width:100%;padding-bottom:1rem}.join-way .title{width:90%;margin:0 auto;padding-top:1rem}.join-way .title img{width:100%}.join-way .describe{width:90%;margin:.25rem auto;background-color:#fff;border:.1rem solid #d10e37;border-radius:.2rem}.join-way .describe .total{width:80%;margin:.5rem auto}.join-way .describe .total section{position:relative;font-size:.6rem;color:#000;line-height:1rem}.join-way .describe .total section span{display:inline-block;position:absolute;top:.1rem;left:-1rem;width:.7rem;height:.7rem;line-height:.7rem;border-radius:.7rem;color:#fff;background-color:#ea1542;text-align:center}.join-way .describe .total section .wechatNum{width:100%;font-size:.6rem;font-weight:300}.join-way .describe .total section .wechatNum p:last-child{text-align:center}.join-way .describe .total section .wechatImg{width:100%;text-align:center}.join-way .describe .total section .wechatImg img{width:80%}.join-way .describe .total .price-intro{border-top:.05rem dashed #ea1542;border-bottom:.05rem dashed #ea1542;position:relative;margin-top:.5rem;margin-bottom:.5rem;padding:0 0 .8rem}.join-way .describe .total .price-intro .intro-title{position:absolute;top:-.46rem;left:50%;margin-left:-1.75rem;display:inline-block;width:3.5rem;background-color:#ea1542;padding:0 .25rem;color:#fff;font-size:.65rem;border-radius:.2rem;text-align:center}.join-way .describe .total .price-intro h5{position:relative;font-size:.7rem;color:#ea1542;line-height:1rem;margin-top:1rem}.join-way .describe .total .price-intro h5 span{display:inline-block;position:absolute;top:.2rem;left:-1rem;font-size:.5rem;width:.6rem;height:.6rem;line-height:.6rem;border-radius:.6rem;color:#ea1542;border:.05rem solid #ea1542;text-align:center}.join-way .describe .total .price-intro p{font-size:.6rem;color:#000;line-height:1rem}.join-way .join-now{width:60%;margin:1rem auto 0}.join-way .join-now img{width:100%}.bottom-logo{width:40%;margin:1rem auto}.bottom-logo img{width:100%}</style>
${pageStat}
</head>
<body>
<div class="page-group" style="visibility: hidden">
    <div class="page page-current">
        <div class="page-content">
            <!--头部模块-->
            <div class="header-wrapper">
                <!--头图黑板报-->
                <img src="https://images.simpletour.com/activity/complain/header.png" alt="">
                <!--头图文案-->
                <img src="https://images.simpletour.com/activity/complain/header_text.png" alt="">
                <!--"去打小报告"按钮-->
                <div class="aTag toForm">
                    <img src="https://images.simpletour.com/activity/complain/header_btn.png" alt="">
                </div>
                <!--"听听大家怎么说"按钮-->
                <div class="aTag toRank">
                    <img src="https://images.simpletour.com/activity/complain/header_to_rank.png" alt="">
                </div>

            </div>

            <!--奖品展示模块-->
            <div class="show-prices">
                <!--奖品展示title-->
                <div class="title">
                    <img src="https://images.simpletour.com/activity/complain/show_prices_title.png" alt="">
                </div>

                <!--简途万元旅行基金-->
                <div class="price-wrapper" style="width: 97%;">
                    <img src="https://images.simpletour.com/activity/complain/NO1.png" alt="">
                </div>

                <!--简途豪华礼包-->
            <#if requestByApp=='true' || type=='app'>
                <div class="price-wrapper" style="width: 97%;" data-url="simpletour://app/gift?id=297">
                    <img src="https://images.simpletour.com/activity/complain/NO2.png" alt="">
                </div>
            <#else>
                <div class="price-wrapper" style="width: 97%;" data-url="https://m.simpletour.com/mobile/gateway/wechat/resource/gift/297">
                    <img src="https://images.simpletour.com/activity/complain/NO2.png" alt="">
                </div>
            </#if>

                <!--简途免费巴士直通车-->
                <div class="price-wrapper" data-url="https://m.simpletour.com/mobile/gateway/wechat/tourism/1">
                    <img src="https://images.simpletour.com/activity/complain/NO3.png" alt="">
                </div>

                <!--简途小礼包-->
                <div class="price-wrapper">
                    <img src="https://images.simpletour.com/activity/complain/NO4.png" alt="">
                </div>

                <!--简途会员专属特权-->
                <div class="price-wrapper" data-url="http://form.mikecrm.com/zWwRKw">
                    <img src="https://images.simpletour.com/activity/complain/NO5.png" alt="">
                </div>

                <!--"去打小报告"按钮-->
                <div class="aTag toForm">
                    <img src="https://images.simpletour.com/activity/complain/header_btn.png" alt="">
                </div>
            </div>

            <!--参与方式-->
            <div class="join-way">
                <div class="title">
                    <img src="https://images.simpletour.com/activity/complain/join_title.png" alt="">
                </div>
                <div class="describe">
                    <article class="total">
                        <section><span>1</span>打开简途旅行APP或微站，参加《年终“小报告”》活动，提出对简途旅行APP及微站的使用建议。</section>
                        <section><span>2</span>打“小报告”的童靴需提交点评及建议10字以上，简途路友局将评选出40名“简途荣誉顾问”发放奖励。</section>
                        <div class="price-intro">
                            <div class="intro-title">奖品介绍</div>

                            <h5><span>1</span>简途路友局【荣誉局长】——1名：</h5>
                            <p>简途过年大礼包——万元旅行基金（简途限量年卡1张）+简途限量2017年日历1份+简途定制行李牌1个+钥匙扣1个</p>
                            <p style="font-weight: 300">（限量年卡：绑定之后的1年内，可以兑换四川、云南、重庆的任意巴士车位产品，不包含套餐产品和途中玩乐产品）</p>

                            <h5><span>2</span>路友局【首席顾问】——3名：</h5>
                            <p>简途旅行礼包——简途限量2017年日历1份+四川特产大礼包伴手礼1份+简途定制行李牌1个+钥匙扣1个</p>

                            <h5><span>3</span>路友局【资深顾问】——6名：</h5>
                            <p>简途免费巴士直通车1个（10条线路任选其一）+简途限量2017年日历1份+简途定制行李牌1个+钥匙扣1个</p>

                            <h5><span>4</span>路友局【高级顾问】——30名</h5>
                            <p>简途定制行李牌1个+钥匙扣1个</p>

                            <h5><span>5</span>路友局【酱油顾问】</h5>
                            <p>“小报告”被点赞超过3次以上即有机会获得会员专属特权</p>
                        </div>
                        <section>
                            <span>3</span>
                            活动奖品将在活动结束后30个工作日内发放，请凭本人手机号码及身份证号领取。
                            <div class="qrcode">
                                <div class="wechatNum">
                                    <p>获奖通知及兑换奖品请加微信：</p>
                                    <p>Hotmingcheng<br/>Zttloveme713</p>
                                </div>
                                <div class="wechatImg">
                                    <img src="https://images.simpletour.com/activity/complain/qrcode.png" alt="">
                                </div>
                            </div>
                        </section>
                        <section><span>4</span>本活动最终解释权归成都简途旅行社有限公司所有。</section>
                        <section><span>5</span>获奖名单将于2017年2月15日在APP首页公布，敬请期待！</section>
                    </article>
                </div>
                <div class="join-now">
                    <img src="https://images.simpletour.com/activity/complain/join_btn.png" alt="">
                </div>
            </div>
            
            <!--底部logo-->
            <div class="bottom-logo">
                <img src="https://images.simpletour.com/activity/complain/bottom_logo.png" alt="">
            </div>
        </div>
    </div>
</div>
<script src="/js/zepto.min.5551012.js"></script>
<script src="/js/base.js"></script>
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
        $('.toForm,.join-now').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            location.href = '/mobile/gateway/${type}/activity/advice/form';
        });
        $('.toRank').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            location.href = '/mobile/gateway/${type}/activity/advice/list';
        });
        $('.price-wrapper').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if($(this).attr("data-url")) {
                location.href = $(this).attr("data-url");
            }
        });
    });
</script>
<#include "/mobile/common/wechat_share.ftl">
<#include "/mobile/common/page_footer.ftl">
</body>
</html>
