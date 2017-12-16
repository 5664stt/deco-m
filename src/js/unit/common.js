// 动态设置meta标签 --> 设置根节点rem值  Start
(function(){
  var scale = 1 / window.devicePixelRatio; //   1/像素比
  document.getElementById('meta')['content'] = 'width=device-width, user-scalable=no, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale;
  var coefficient = document.documentElement.clientWidth / 12; // 屏幕宽/12
  console.log(document.documentElement.clientWidth);
  document.getElementsByTagName("html")[0].style.fontSize = coefficient + "px"; //设置根字号
}());
// 动态设置meta标签 --> 设置根节点rem值  End

// 禁止用户缩放界面  Start
(function(){
document.addEventListener("touchstart",function (event) {
  if(event.touches.length>1){
    event.preventDefault();
  }
});
var lastTouchEnd=0;
document.addEventListener("touchend",function (event) {
  var now=(new Date()).getTime();
  if(now-lastTouchEnd<=300){
    event.preventDefault();
  }
  lastTouchEnd=now;
},false);
}());
// 禁止用户缩放界面  End
