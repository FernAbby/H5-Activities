import "./index.less";
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';
import Swiper from 'swiper';
import '../../assets/js/modal.js';

import prizeImg from "../../assets/images/common/modal/prize2.png";

const GData = {
  count: 5,
};

$(function() {
  const $canvas = $('#canvas'); // canvas
  const $canvasMask = $('#canvas-mask');
  const $fetch = $('#fetch');
  const $count = $('#count');
  const $rules = $('.rules');
  const clientWidth = document.documentElement.clientWidth;
  const canvasWidth = Math.floor((clientWidth / 750) * 562 ); // canvas宽 = 设计稿里canvas宽 * (屏幕宽 / 750)
  const canvasHeight = Math.floor((clientWidth / 750) * 308); // canvas高 = 设计稿里canvas宽 * (屏幕高 / 750)
  const context =  $canvas[0].getContext("2d"); // 获取canvas的2d绘制对象
  let bool = false; // 判断是否按下去，true为按下，false未按下
  let empty = false;
  let x = 0, y = 0;

  function initCanvas() {
    //设置canvas宽高
    $canvas.attr('width', canvasWidth);
    $canvas.attr('height', canvasHeight);

    // canvas绘图
    context.beginPath();
    // context.fillStyle = 'transparent';
    context.fillStyle = '#ccc'; // 刮刮乐图层的填充色
    context.lineCap = "round"; // 绘制的线结束时为圆形
    context.lineJoin = "round"; // 当两条线交汇时创建圆形边角
    context.lineWidth = 20; // 单次刮开面积
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.closePath();

    context.globalCompositeOperation = 'destination-out'; // 新图像和原图像重合部分变透明
    // 下面3行代码是为了修复部分手机浏览器不支持destination-out
    $canvas.css("display", "none");
    $canvas.outerHeight();
    $canvas.css("display", "inherit");
  }

  initCanvas();

  $count.text(GData.count);

  // 点击开始刮奖按钮
  $fetch.click(function () {
    if (GData.count > 0) {
      GData.count --; // 设定中奖的图片
      $canvas.css("background-image", `url(${prizeImg})`);
      $canvasMask.hide();
      $count.text(GData.count);
    } else {
      alert("没有次数了");
    }
  });

  $rules.click(function (e) {
    $.ruleModal({
      content: `<p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
                <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>`
    });
  });

  // pc端
  $canvas.on({
    // 鼠标按下
    mousedown: function (e) {
      e = e || window.event;
      e.preventDefault();
      bool = true;
      x = e.pageX - $(this).offset().left; // 鼠标距离该页面left的值 - 元素左侧距离文档的left
      y = e.pageY - $(this).offset().top;
      context.moveTo(x, y);

      /*// 鼠标移动
      $canvas.on('mousemove', function (e) {
        if (bool) {
          x = e.pageX - $(this).offset().left;
          y = e.pageY - $(this).offset().top;
          context.lineTo(x, y);
          context.stroke();
          clear();
        }
      });*/
    },
    mousemove: function(e) {
      if (bool) {
        const x = e.pageX - $(this).offset().left;
        const y = e.pageY - $(this).offset().top;
        context.lineTo(x, y);
        context.stroke();
        clear();
      }
    },
    // 鼠标按键抬起
    mouseup: function () {
      bool = false;
    }
  });

  //移动端
  $canvas.on("touchstart", function (e) {
    e = e || window.event;
    e.preventDefault();
    if (typeof e.touches !== 'undefined') {
      e = e.touches[0];//获取触点
    }
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    context.moveTo(x, y);
  });

  // 移动事件
  $canvas.on('touchmove', function(e) {
    e = e || window.event;
    e.preventDefault();
    if (typeof e.touches !== 'undefined') {
      e = e.touches[0];
    }
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    context.lineTo(x, y);
    context.stroke();
    clear();
  });

  // 清除画布
  function clear() {
    if (empty) return;
    const data = context.getImageData(0, 0, canvasWidth, canvasHeight).data; // 得到canvas的全部数据
    let half = 0;

    // length = canvasWidth * canvasHeight * 4，一个像素块是一个对象rgba四个值，a范围为0~255
    for (let i = 3, length = data.length; i < length; i += 4) { // 因为有rgba四个值，下标0开始，所以初始i=3
      data[i] === 0 && half++; // 存在imageData对象时half加1  PS:该像素区域透明即为不存在该对象
    }
    // 当刮开的区域大于等于30%时，则可以开始处理结果
    if (half >= canvasWidth * canvasHeight * 0.3) {
      context.clearRect(0, 0, canvasWidth, canvasHeight); // 清空画布
      empty = true;
      $.successModal({
        prizeImg: prizeImg,
        close: function() {
          $canvasMask.show();
          empty = false;
          initCanvas();
        }
      });
    }
  }

  //奖品展示
  const show = new Swiper(".swiper-container", {
    direction: "horizontal",//水平方向滑动。 vertical为垂直方向滑动
    loop: false,//是否循环
    slidesPerView: "auto"//自动根据slides的宽度来设定数量
  });
});