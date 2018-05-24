;(function() {

    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'; // 确定窗口变化或是移动端横竖屏

    // 获取img
    function getImages() {
        return {
            img: document.getElementsByTagName('img'),
            backgroundImg: document.getElementsByClassName('lazyLoad')
        }
    }
    // 获取浏览器可视区域
    function getViewVisibleZone() {
        return {
            top : document.documentElement.scrollTop||document.body.scrollTop,
            left : document.documentElement.scrollLeft||document.body.scrollLeft,
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        };
    }

    // 获取待加载资源的区域
    function getResourceZone(obj){
        return {
            left : obj.offsetLeft,
            top : obj.offsetTop,
            width : obj.offsetWidth,
            height : obj.offsetHeight
        };
    }

    // 判断待加载资源是否出现在可视区域
    function isContains(visibleZone,resourceZone){

        var visibleW = visibleZone.left + visibleZone.width/2,
            resourceW = resourceZone.left + resourceZone.width/2,
            visibleH = visibleZone.top + visibleZone.height/2,
            resourceH = resourceZone.top + resourceZone.height/2;

        var wid = (visibleZone.width + resourceZone.width)/2,
            hei = (visibleZone.height + resourceZone.height)/2;

        return Math.abs(visibleW - resourceW) < wid && Math.abs(visibleH - resourceH) < hei;
    }
    var imagesObj = getImages();
    function winScroll(e){
        var visibleZone = getViewVisibleZone(),
            resourceZone;

        for(var i = 0, bgImg; bgImg = imagesObj.backgroundImg[i++];) {

            resourceZone = getResourceZone(bgImg);

            if( isContains(visibleZone,resourceZone) ) {

                bgImg.style.background = bgImg.style.background.replace(/\([^\)]*\)/g,'('+bgImg.getAttribute("data-src")+')');

                delete imagesObj.backgroundImg[i];
            }
        }

        for(var j = 0, img; img = imagesObj.img[j++];) {

            resourceZone = getResourceZone(img);

            if( isContains(visibleZone,resourceZone) ) {

                img.src = img.getAttribute("data-src");

                delete imagesObj.img[j];
            }
        }
    }
    winScroll();
    document.addEventListener('scroll', winScroll, false); // 监听滚动事件
    window.addEventListener(resizeEvt, winScroll, false); // 监听窗口变化
})();
