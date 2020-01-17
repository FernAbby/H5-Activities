import "./index.less";
import '../../assets/js/mobile-flexible.js';
import '../../assets/js/GeoUtils.js';
import $ from 'expose-loader?$!jquery';
import prizeImg from "../../assets/images/common/modal/prize2.png";

const SHAKE_THRESHOLD = 1250;
let last_update = 0;
let x = 0, y = 0, z = 0, last_x = 0, last_y = 0, last_z = 0;
let number = 0;

const GData = {
  lock: false,
  range: 1000,
  count: 5,
  isInCircle: false,
  centerPoint: {
    longitude: 116.331398,
    latitude: 39.897445
  }
};

$(function() {
  console.log(document.body);
  document.body.style.visibility = "visible";

  const $playMiu = $('#playMiu');
  $playMiu[0].pause();

  function deviceMotionHandler(eventData){
    console.log(eventData);
    const acceleration = eventData.accelerationIncludingGravity;
    const curTime = new Date().getTime();
    if ((curTime - last_update) > 100) {
      let diffTime = curTime - last_update;
      last_update = curTime;
      x = acceleration.x;
      y = acceleration.y;
      z = acceleration.z;
      let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
      if (speed > SHAKE_THRESHOLD) {
        $playMiu.get(0).play();
        if(number > 2 && !GData.lock){
          lottery();
        }
        number = number + 1;
      }
      last_x = x;
      last_y = y;
      last_z = z;
    }
  }

  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
  } else {
    alert('本设备不支持摇一摇');
  }

  function isPointInCircle(point) {
    const act_point = new BMap.Point(GData.centerPoint.longitude, GData.centerPoint.latitude);
    const circle = new BMap.Circle(act_point, GData.range, {
      fillColor: "blue",
      strokeWeight: 1,
      fillOpacity: 0.3,
      strokeOpacity: 0.3
    });
    return BMapLib.GeoUtils.isPointInCircle(point, circle);
  }

  // 百度地图定位
  if (navigator.geolocation) {
    // 百度地图API功能
    const map = new BMap.Map("BMap");
    const point = new BMap.Point(GData.centerPoint.longitude, GData.centerPoint.latitude);
    map.centerAndZoom(point, 12);
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        // const mk = new BMap.Marker(r.point);
        // map.panTo(r.point);
        GData.isInCircle = isPointInCircle(r.point)
      } else {
        alert('failed' + this.getStatus());
      }
    }, { enableHighAccuracy: true });
  }

  function lottery() {
    GData.lock = true;
    if(!GData.isInCircle){
      alert('不在范围内哦~~');
      return;
    }

    $.successModal({
      prizeImg: prizeImg,
    });

  }

});
