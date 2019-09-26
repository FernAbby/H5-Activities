import './index.less';
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';

$(function() {
  const globalData = {
    count: 0,
  };

  const $behindBag = $(".moving-left"); // 后方运动盒子
  const $frontBag = $(".moving-right"); // 前方运动盒子

  let left = 0; // 后方福袋移动
  let right = 0; // 前方福袋移动
  let index = 0; //
  let timer = null;



  const WIDTH = Math.floor(document.documentElement.clientWidth * 0.45); //屏幕宽度*0.45来设置li的宽度
  $(".behind li,.front li").css("width", WIDTH + "px"); // 设置li的宽度

  const initAnimation = () => {
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
      return setTimeout(fn, 1000 / 60); //1000 / 60意思是一秒钟60帧
    };

    //cancelAnimationFrame是清除requestAnimationFrame
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

    const move = () => {
      // 后方福袋的运动
      left = parseFloat($behindBag.css("margin-left")); // 获取margin-left并去掉单位
      left = left - 1.5;
      $behindBag.css("margin-left", left + "px");
      if (left <= -WIDTH) {
        $behindBag.css("margin-left", "0");
      }

      //前方福袋的运动
      right = parseFloat($frontBag.css("margin-right")); // 获取margin-right并去掉单位
      right = right - 1.5;
      $frontBag.css("margin-right", right + "px");
      if (right <= -WIDTH) {
        $frontBag.css("margin-right", "0");
      }

      console.log(left, right);

      timer = requestAnimationFrame(move);
    };
    move();
  };

  initAnimation();
});