export default {
  caculate() {
    const html = document.querySelector('html');
    function changeRem() {
      html.style.fontSize =  html.getBoundingClientRect().width / 10 + 'px';
    }
    changeRem();
    window.addEventListener('resize', changeRem);
  }
}