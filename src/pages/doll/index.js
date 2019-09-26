import './index.less';
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';

const globalData = {
  count: 5,
  lock: false, // 抽奖锁
};

$(function() {
  const $behindBag = $(".moving-left"); // 后方运动盒子
  const $frontBag = $(".moving-right"); // 前方运动盒子
  const $hook = $("#hook"); // 钩子
  const $lottery = $("#lottery"); // 抽奖按钮
  const $count = $("#count");
  const rem = 75;
  // parseFloat(window.document.documentElement.style.fontSize)*2

  let left = 0; // 后方福袋移动
  let right = 0; // 前方福袋移动
  let index = 0; //
  let timer = null;

  const WIDTH = Math.floor(document.documentElement.clientWidth * 0.45); // 屏幕宽度*0.45来设置li的宽度
  $(".behind li,.front li").css("width", WIDTH + "px"); // 设置li的宽度



  const initAnimation = () => {
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
      return setTimeout(fn, 1000 / 60); //1000 / 60意思是一秒钟60帧
    };

    //cancelAnimationFrame是清除requestAnimationFrame
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

    const lineMove = () => {
      // 后方福袋的运动
      left = parseFloat($behindBag.css("margin-left")); // 获取margin-left并去掉单位
      left = left - 1.5;
      $behindBag.css("margin-left", left + "px");
      if (left <= -WIDTH) {
        $behindBag.css("margin-left", "0");
      }

      // 前方福袋的运动
      right = parseFloat($frontBag.css("margin-right")); // 获取margin-right并去掉单位
      right = right - 1.5;
      $frontBag.css("margin-right", right + "px");
      if (right <= -WIDTH) {
        $frontBag.css("margin-right", "0");
      }

      timer = requestAnimationFrame(lineMove);
    };
    lineMove();
  };

  initAnimation();

  $lottery.on("click", function() {
    const { lock, count } = globalData;
    if (lock) return;

    if (count <= 0) {
      alert("没有次数了!");
      return;
    }

    globalData.lock = true;
    globalData.count--;

    $count.html(globalData.count);

    const random = Math.floor(Math.random()*(620 - 130) + 130); // 130-620边界值
    $(".left,.right").addClass("up"); // 张开钩子

    $hook.animate({left: random / rem + "rem"}, 1000);//左右值



  });
});