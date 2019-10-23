import "./index.less";
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';
import Swiper from 'swiper';
import '../../assets/js/modal.js';

import prizeImg from "../../assets/images/common/modal/prize2.png";

const randomArray = [1, 2, 3, 4, 5, 6, 7, 8]; // 抽奖概率

const GData = {
  count: 5,
  lock: false,
  currentMark: 0,
};

$(function() {
  const $prizes = $('.prizes li').not('#lottery');
  const $light = $('.light');
  const $lottery = $('#lottery');
  const $count = $('#count');
  const $rules = $('.rules');
  let length = $prizes.length; // 奖品总数

  function lottery() {
    let random = randomArray[Math.floor(Math.random() * randomArray.length)]; // 1-8的随机数
    GData.currentMark += random;
    GData.currentMark %= 8;

    random += 6 * 8; // 圈数 * 奖品总数  // 默认先转6圈

    for (let i = 1; i <= random; i++) {
      setTimeout(function() {
        $light.toggleClass("blink"); // 彩灯动画
        length ++;
        length %= 8;
        $prizes.removeClass("selected");
        $prizes.eq(length).addClass("selected");
      }, 2 * i * i); // 第二个值越大，慢速旋转时间越长
    }

    // 停止旋转动画
    setTimeout(function () {
      GData.lock = false;
      $.successModal({
        prizeImg: prizeImg,
      });
    }, 7000);
  }

  // 点击抽奖
  $lottery.on('click', function () {
    if (!GData.lock && GData.count > 0) {
      GData.lock = true;
      GData.count --;
      $count.text(GData.count);
      lottery();
    } else if(GData.count <= 0){
      alert("您剩余抽奖次数为0，不能抽奖~");
    }
  });

  $rules.click(function (e) {
    $.ruleModal({
      content: `<p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>
                <p>活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明活动规则说明</p>`
    });
  });

  //奖品展示
  const show = new Swiper(".swiper-container", {
    direction: "horizontal",//水平方向滑动。 vertical为垂直方向滑动
    loop: false,//是否循环
    slidesPerView: "auto"//自动根据slides的宽度来设定数量
  });
});