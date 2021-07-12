'use strict';

{

  let aX = 0, ay = 0, aZ = 0;
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d')
  let timer = window.setInterval(() => {
  displayDate();
  drawBall();
  }, 1000);


  function post_function( result_string ) {
  if ( result_string === "granted" ) {
    
  }
  else if ( result_string === "denied" ) {
    
  }
  }
  function permission_request() {
  if ( DeviceOrientationEvent
    && DeviceOrientationEvent.requestPermission
    && typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceMotionEvent.requestPermission().then( post_function );
      window.addEventListener( "devicemotion", function(e) {
        aX = e.accelerationIncludingGravity.x;
        aY = e.accelerationIncludingGravity.y;
        aZ = e.accelerationIncludingGravity.z;
      }, false );
    }
    if ( DeviceOrientationEvent
      && DeviceOrientationEvent.requestPermission
      && typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        DeviceOrientationEvent.requestPermission().then( postf_unction );
        window.addEventListener( "deviceorientation", function(e) {
          // 角度を変えたい時の処理
        }, false );
      }
    }
    function displayDate() {
      let txt = document.getElementById("txt");
      txt.innerHTML = "x:" + aX + "<br>"
      + "y:" + aY + "<br>"
      + "z:" + aZ;
      
    }
    
  }
    {
      function drawBall() {
        let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let ballRad = 50;
    let ballColor = "rbga(100, 100, 255, 0.6)";
    let g = 9.80665;
    let d = centerX / g;
    let os = navigator.platform;
    if (os === "iPhone" || os === "iPad" || os === "iPod") {
        aX *= -1;
        aY *= -1;
        aZ *= -1;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX - d * aX,
                centerY + d * aY,
                ballRad = 3 * aZ,
                0, 2 * Math.PI);
    context.fillstyle = ballColor;
    context.fill();
  }
}