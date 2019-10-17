import "./index.less";
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';
import Swiper from 'swiper';
import '../../assets/js/modal.js';
import BrokenEgg from '../../assets/images/egg/break-egg.png';
import prizeImg from "../../assets/images/common/modal/prize2.png";

const rem = 75;

const GData = {
  count: 5,
};

$(function() {
  const $hammer =  $("#hammer");
  const $eggList = $(".eggs-wrap li");
  const $count = $("#count");

  const brokenList = [];
  let tipIndex = 0;

  // 小提示
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


  // 砸金蛋
  $eggList.on('click', function(e) {
    const $this = $(this);
    if (!$this.hasClass('broken') && GData.count > 0) {
      $this.addClass('broken');
      brokenList.push($this.index());
      GData.count --;
      $count.html(GData.count);
      $hammer.removeClass("shake"); // 清除锤子晃动动画

      const position = $this.position();
      const width = $this.width();

      $hammer.css({
        left: `${position.left + width}px`,
        top: `${position.top - 6}px`
      });

      $hammer.addClass("hit");

      setTimeout(function () {
        $this.find('.gold-egg').prop("src", BrokenEgg);
        $this.find('.gold-egg').addClass('broken');
      }, 1200);

      setTimeout(function() {
        $hammer.removeClass('hit').addClass('shake');
        $hammer.css({
          left: `${665 / rem}rem`,
          top: `${30 / rem}rem`
        });
        $.successModal({
          prizeImg: prizeImg,
        });
      }, 1300);
    }
  });

  //奖品展示
  const show = new Swiper(".swiper-container", {
    direction: "horizontal",//水平方向滑动。 vertical为垂直方向滑动
    loop: false,//是否循环
    slidesPerView: "auto"//自动根据slides的宽度来设定数量
  });
});