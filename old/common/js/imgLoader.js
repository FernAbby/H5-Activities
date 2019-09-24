(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(factory);
    } else if (typeof exports === 'object') {
        //Node, CommonJS之类的
        module.exports = factory();
    } else {
        //浏览器全局变量(root 即 window)
        root.imgLoader = factory(root);
    }
}(this, function () {
    var isFunc = function(f){
        return typeof f === 'function';
    }
    //构造器函数
    function imgLoader(config){
        this.option = {
            backgroundResources : [], //背景图资源路径数组
            // imgResources : [], //资源路径数组
            onStart : null, //加载开始回调函数，传入参数total
            onProgress : null, //正在加载回调函数，传入参数currentIndex, total
            onComplete : null //加载完毕回调函数，传入参数total
        }
        if(config){
            for(i in config){
                this.option[i] = config[i];
            }
        }
        else{
            alert('参数错误！');
            return;
        }
        this.status = 0; //加载器的状态，0：未启动   1：正在加载   2：加载完毕
        // this.total = this.option.resources.length || 0; //资源总数
        this.total = $('img[data-src]').length + this.option.backgroundResources.length || 0; //资源总数
        this.currentIndex = 0; //当前正在加载的资源索引
    };

    imgLoader.prototype.start = function(){
        this.status = 1;
        var _this = this;
        var baseUrl = this.option.baseUrl;
        var imgs = $('img[data-src]');
        for(var i=0,l=this.option.backgroundResources.length; i<l; i++){
            var url = this.option.backgroundResources[i];

            var bcImage = new Image();
            bcImage.onload = function(){_this.loaded();};
            bcImage.onerror = function(){_this.loaded();};
            bcImage.src = url;
        }
        for(var j = 0, len = imgs.length; j < len;j++) {
            var image = new Image();
            image.onload = function(){
                _this.loaded();
            };
            image.onerror = function(){_this.loaded();};
            image.src = $(imgs[j]).attr('data-src');
            $(imgs[j]).attr('src',$(imgs[j]).attr('data-src'));
        }
        if(isFunc(this.option.onStart)){
            this.option.onStart(this.total);
        }
    }

    imgLoader.prototype.loaded = function(){
        if(isFunc(this.option.onProgress)){
            this.option.onProgress(++this.currentIndex, this.total);
        }
        //加载完毕
        if(this.currentIndex===this.total){
            if(isFunc(this.option.onComplete)){
                this.option.onComplete(this.total);
            }
        }
    }

    //暴露公共方法
    return imgLoader;
}));