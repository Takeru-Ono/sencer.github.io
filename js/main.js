'use strict';

let aX = 0, aY = 0, aZ = 0;
let bX = 0, bY = 0, bZ = 0;
let txt = document.getElementById("txt");
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let txt3 = document.getElementById("txt3");
let ac = (bX * bX + bY * bY + bZ * bZ) ** 0.5
let array = [0];
let array1 = [0];
let array2 = [0];
let s = 0.033;
let table = document.getElementById("table");
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let canvas1 = document.getElementById('canvas1');
let context1 = canvas1.getContext('2d');
let timer = window.setInterval(() => {
  displayData();
  displayData1();
  displayData2();
  // displayData3();
  drawBall();
  drawBall1();

}, 33); 


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
        bX = e.acceleration.x;
        bY = e.acceleration.y;
        bZ = e.acceleration.z;
        let os1 = navigator.platform;
        if (os1 === "iPhone" || os1 === "iPad" || os1 === "iPod") {
          aX *= -1;
          aY *= -1;
          aZ *= -1;
          bX *= -1;
          bY *= -1;
          bZ *= -1;
        }
        
      }, false );
    }
    if ( DeviceOrientationEvent
    && DeviceOrientationEvent.requestPermission
    && typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceOrientationEvent.requestPermission().then( post_function );
      window.addEventListener( "deviceorientation", function(e) {
        // 角度を変えたい時の処理
      }, false );
    }
}

function displayData() {
  txt.innerHTML = "x:" + aX + "m/s<sup>2</sup>" + "<br>"
                + "y:" + aY + "m/s<sup>2</sup>" + "<br>"
                + "z:" + aZ + "m/s<sup>2</sup>";
}
function displayData1() {
  txt1.innerHTML = "x:" + bX + "m/s<sup>2</sup>" + "<br>"
                 + "y:" + bY + "m/s<sup>2</sup>" + "<br>"
                 + "z:" + bZ + "m/s<sup>2</sup>";
}
function displayData2() {
  txt2.innerHTML = ac + "m/s<sup>2</sup>";
}
// function displayData3() {
//   txt3.innerHTML = v + "m/s";
// }

function drawBall() {
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
  let ballRad = 50;
  // let ballColor = "rgb(100, 100, 255)";
  let g = 9.80665;
  let d = centerX / g;
  // let os = navigator.platform;
  // if (os === "iPhone" || os === "iPad" || os === "iPod") {
    //     aX *= -1;
    //     aY *= -1;
    //     aZ *= -1;
    //   }
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(centerX - d * aX,
              centerY + d * aY,
              ballRad = 3 * aZ,
  0, 2 * Math.PI);
  // context.fillStyle = "rgba(0, 0, 255, 0.5)";
  context.fill();
}
  
  
function drawBall1() {
  let centerX1 = canvas1.width / 2;
  let centerY1 = canvas1.height / 2;
  // let ballRad1 = 30;
  // let ballColor1 = "rgb(255, 0, 0)";
  let g = 9.80665;
  let d1 = centerX1 / g;
  let os1 = navigator.platform;
  if (os1 === "iPhone" || os1 === "iPad" || os1 === "iPod") {
    bX *= -1;
    bY *= -1;
    bZ *= -1;
  }
  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  context1.beginPath();
  context1.rect(centerX1 - d1 * bX,
  centerY1 + d1 * bY, 50, 50);
  context1.fillStyle = "orange";
  context1.fill();
}

// function startButton() {
  // intervalID = setInterval(() => {
    // array.push(ac);
    // for(let i = 0; i < 1000; i ++) {
    //   let acc = array[i + 1] - array[i];
    //   array1.push(acc);
  //     let v = acc * 0.033;

    //   let second = s * i;
    //   array2.push(second);
    // }

    // displayData();
    // displayData1();
    // displayData2();
    // displayData3();
    // drawBall();
    // drawBall1();
    // let row = table.insertRow(-1);
    // let cell1 = row.insertCell(-1);
    // let cell2 = row.insertCell(-1);
    // cell1.textContent = second;
    // cell2.textContent = ac;
  // }, 33);
  
// }
// function stopButton() {
//   clearInterval(timer);

// }
// function resetButton() {
//   numberreset = "x:" + 0.00 + "m/s<sup>2</sup>" + "<br>"
//               + "y:" + 0.00 + "m/s<sup>2</sup>" + "<br>"
//               + "z:" + 0.00 + "m/s<sup>2</sup>";
//   txt.innerHTML = numberreset;
//   txt1.innerHTML = numberreset;

// }