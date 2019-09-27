import './index.less';
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';
import Swiper from 'swiper';

const globalData = {
  count: 5,
  lock: false, // 抽奖锁
  winIndex: null,
};

$(function() {
  const $behindBag = $(".moving-left"); // 后方运动盒子
  const $frontBag = $(".moving-right"); // 前方运动盒子
  const $hook = $("#hook"); // 钩子
  const $lottery = $("#lottery"); // 抽奖按钮
  const $count = $("#count");
  const $behindList = $(".behind ul li"); // 第一列福袋
  const $frontList = $(".front ul li"); // 第二列福袋
  const $topBag = $(".behind img"); // 第一列每个福袋
  const $bottomBag = $(".front img"); // 第二列每个福袋
  const $modal = $("#modal");
  const rem = 75;
  // parseFloat(window.document.documentElement.style.fontSize)*2

  let left = 0; // 后方福袋移动
  let right = 0; // 前方福袋移动
  let index = 0; //
  let timer = null;
  let hookTimer = null;

  const WIDTH = Math.floor(document.documentElement.clientWidth * 0.45); // 屏幕宽度*0.45来设置li的宽度
  $(".behind li,.front li").css("width", WIDTH + "px"); // 设置li的宽度

  const initAnimation = () => {
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
      return setTimeout(fn, 1000 / 60); //1000 / 60意思是一秒钟60帧
    };

    // cancelAnimationFrame是清除requestAnimationFrame
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

  // 判断钩子和福袋的距离
  const redPacket1 = () => {
    for (let i = 0; i < $behindList.length; i++) {
      if ($hook.find("img").length) break; // 如果钩子上已经有福袋跳出循环
      const b_left = $behindList.eq(i).position().left;

      if ($hook.position().left - 130 <= b_left && b_left <= $hook.position().left - 40) {
        !$hook.find("img").length && $hook.append($topBag.eq(i)); // 如果未抓取到福袋才抓取
        $topBag.eq(i).css({ // 重设福袋大小
          width: 91 / rem + "rem",
          height: 102 / rem + "rem"
        });

        globalData.winIndex = i;
        $hook.animate({ top: -220 / rem + "rem" }, 1200, function () {
          console.log('中奖了！！！');
          $modal.show();
          $modal.find('.modal-content').addClass('animation');
          // $behindList.eq(globalData.winIndex).append($topBag.eq(globalData.winIndex)); // 把福袋放回原位
          // index = undefined;
        });
      } else {
        setTimeout(function () {
          return redPacket1();
        });
      }
    }
  };
  const redPacket2 = () => {
    for (let i = 0; i < $frontList.length; i++) {
      if ($hook.find("img").length) break; // 如果钩子上已经有福袋跳出循环
      const b_left = $frontList.eq(i).position().left - (130 + 60);
      if ($hook.position().left - 130 <= b_left && b_left <= $hook.position().left) {
        !$hook.find("img").length && $hook.append($bottomBag.eq(i)); // 如果未抓取到福袋才抓取
        $bottomBag.eq(i).css({ // 重设福袋大小
          width: 139 / rem + "rem",
          height: 156 / rem + "rem"
        });

        globalData.winIndex = i;
        $hook.animate({ top: -220 / rem + "rem" }, 1200, function () {
          console.log('中奖了！！！');
          $modal.show();
          $modal.find('.modal-content').addClass('animation');
         /* $frontList.eq(i).append($bottomBag.eq(index)); // 把福袋放回原位
          index = undefined;*/
        });
      } else {
        setTimeout(function () {
          return redPacket2();
        });
      }
    }
  };

  // 按钮抽奖
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

    const random = Math.floor(Math.random()*(620 - 130) + 130); // 左右130-620边界值
    $(".left,.right").addClass("up"); // 张开钩子

    $hook.animate({left: random / rem + "rem"}, 1000); // 左右值

    clearTimeout(hookTimer);

    // 上下值
    if (random > 380) {
      $hook.animate({ top: -100 / rem + "rem"}, 1000);
      hookTimer = setTimeout(function () {
        redPacket1();
      }, 2000);
    } else {//下面
      $hook.animate({ top: 50 / rem + "rem"}, 1000 );
      hookTimer = setTimeout(function () {
        redPacket2();
      }, 2000);
    }
  });

  //奖品展示
  const show = new Swiper(".swiper-container", {
    direction: "horizontal", // 水平方向滑动 | vertical为垂直方向滑动
    loop: false, // 是否循环
    slidesPerView: "auto" // 自动根据slides的宽度来设定数量
  });
});