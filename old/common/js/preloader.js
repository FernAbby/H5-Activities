;(function($) {
    function Preloader() {
        this.show = function() {
            var preloaderHtml = '<div class="preloader-overlay"></div>' +
                '<div class="preloader-modal">' +
                '<span class="preloader"></span>' +
                '</div>';
            if ($('.preloader-modal')[0]) return;
            var $preloader = $(preloaderHtml).appendTo('body');
            $preloader.find('.preloader').addClass('preloader-animation');
        };
        this.hide = function() {
            $('.preloader-overlay, .preloader-modal').remove();
        }
    }
    var preloader = new Preloader();
    $.preloader = {
        show : preloader.show,
        hide : preloader.hide
    }
})(Zepto);