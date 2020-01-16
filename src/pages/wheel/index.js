import './index.less';
import '../../assets/js/mobile-flexible.js';
import $ from 'expose-loader?$!jquery';
import '../../assets/js/jquery.rotate.js';
import '../../assets/js/modal.js';
import prizeImg from "../../assets/images/common/modal/prize2.png";

const Prizes = ["超级豪华大礼", "50元现金红包", "20元现金红包", "超级豪华大礼", "100元现金红包", "谢谢参与~"]; // 中奖提示
const GData = {
  count: 5,
  lock: false,
  currentMark: 0,
};

$(function() {
  const $lottery = $('#lottery');
  const $count = $('#count');
  const $turntable = $(".prizes"); // 转盘

  $lottery.click(function () {
    if (GData.lock) return; // 如果在执行就退出
    GData.lock = true; // 标志为在执行
    if (GData.count <= 0) { // 当抽奖次数为0时
      $count.html(0); // 次数显示为0
      GData.lock = false;
      alert("没有次数了");
    } else { // 还有次数就执行
      GData.count --;
      GData.count <= 0 && (GData.count = 0);
      $count.html(GData.count); // 显示剩余次数
      $turntable.removeClass("running");
      randomPrize();
    }
  });

  function randomPrize() {
    const prizeIndex = Math.floor(Math.random() * 6);
    const prizeText = Prizes[prizeIndex];

    switch (prizeIndex) {
      case 0:
        rotateFn(prizeIndex, 0, prizeText);
        break;
      case 1:
        rotateFn(prizeIndex, 300, prizeText);
        break;
      case 2:
        rotateFn(prizeIndex, 240, prizeText);
        break;
      case 3:
        rotateFn(prizeIndex, 180, prizeText);
        break;
      case 4:
        rotateFn(prizeIndex, 120, prizeText);
        break;
      case 5:
        rotateFn(prizeIndex, 60, prizeText);
        break;
    }
  }

  function rotateFn(awards, angle, text) {
    $turntable.stopRotate();
    $turntable.rotate({
      angle: 0, // 旋转的角度数
      duration: 4000, // 旋转时间
      animateTo: angle + 1440, // 默认至少转四圈
      callback: function () {  // 执行完毕
        GData.lock = false;
        $.successModal({
          prizeImg: prizeImg,
        });
        console.log(text);
      }
    });
  }

});