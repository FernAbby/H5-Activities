/**
 * ���base64
 * @param {Object} obj
 * @param {Number} [obj.width] ͼƬ��Ҫѹ���Ŀ�ȣ��߶Ȼ�������
 * @param {Number} [obj.quality=0.8] ѹ����������ѹ��Ϊ1
 * @param {Function} [obj.before(this, blob, file)] ����ǰ����,thisָ�����input:file
 * @param {Function} obj.success(obj) �������
 * @example
 *
 */
$.fn.localResizeIMG = function(obj) {
    this.on('change', function() {
        var file = this.files[0];
        var URL = window.URL || window.webkitURL;
        var blob = URL.createObjectURL(file);

        // ִ��ǰ����
        if ($.isFunction(obj.before)) {
            obj.before(this, blob, file)
        };

        _create(blob, file);
        this.value = ''; // �����ʱ����
    });

    /**
     * ����base64
     * @param blob ͨ��file��õĶ�����
     */
    function _create(blob) {
        var img = new Image();
        img.src = blob;

        img.onload = function() {
            var that = this;

            //���ɱ���
            var w = that.width,
                h = that.height,
                scale = w / h;
            if (Object.prototype.toString.call(obj.height) === "[object Undefined]") {
                w = obj.width || w;
                h = w / scale;
            }else{
                scale=obj.width/obj.height;
                var scaleW=obj.width/w;
                var scaleH=obj.height/h;
                if(scaleW>scaleH){
                    w=w*scaleW;
                    h=h*scaleW;
                }else{
                    w=w*scaleH;
                    h=h*scaleH;
                }
            }
            //����canvas
            var canvas = document.getElementById('canvas');
            canvas.width = w;
            canvas.height = h;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(that, 0, 0,w,h);

            var newImage = new Image();
            newImage.src = canvas.toDataURL('image/png');
            newImage.onload = function() {
                var newImg = this;
                var canvas2 = document.getElementById('canvas2');
                canvas2.width = obj.width;
                canvas2.height = obj.height;
                var ctx2 = canvas2.getContext('2d');
                ctx2.drawImage(newImg, (w-obj.width)/2,(h-obj.height)/2,obj.oWidth*2.9,obj.oHeight*2.9,0,0,obj.width,obj.height);

                var base64 = canvas2.toDataURL('image/png');

                // �޸�IOS
                if (navigator.userAgent.match(/iphone/i)) {
                    var mpImg = new MegaPixImage(img);
                    // mpImg.render(canvas, {
                    //    maxWidth: obj.width,
                    //    maxHeight: obj.height,
                    //    quality: obj.quality || 0.8
                    // });
                    base64 = canvas2.toDataURL('image/png', obj.quality || 0.8);
                }

                // �޸�android
                if (navigator.userAgent.match(/Android/i)) {
                    var encoder = new JPEGEncoder();
                    base64 = canvas2.toDataURL('image/png', obj.quality || 0.8);
                }

                // ���ɽ��
                var result = {
                    base64: base64,
                    clearBase64: base64.substr(base64.indexOf(',') + 1),
                };

                // ִ�к���
                obj.success(result);

            };
        };
    }
};

