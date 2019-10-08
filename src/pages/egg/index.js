import "./index.less";
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';
import Swiper from 'swiper';

$(function() {
  const $hammer =  $("#hammer");
  const $eggList = $(".eggs-wrap li");
  const $count = $("#count");

  const brokenList = [];
  let tipIndex = 0;

  setInterval(function () {
    $eggList.removeClass('jump');
    while(brokenList.length < 9 && brokenList.includes(tipIndex)) {
      tipIndex ++;
    }
    if ($eggList.eq(tipIndex).hasClass('broken')) {
      brokenList.push(tipIndex);
    }
    $eggList.eq(tipIndex).addClass('jump');
    tipIndex = tipIndex < $eggList.length ?  tipIndex + 1 : 0;
  }, 1000);


  //奖品展示
  const show = new Swiper(".swiper-container", {
    direction: "horizontal",//水平方向滑动。 vertical为垂直方向滑动
    loop: false,//是否循环
    slidesPerView: "auto"//自动根据slides的宽度来设定数量
  });
});