// let hr = 0;
// let min = 0;
// let sec = 0;
// let milisec = 0;

// let timer = false;

// // function start() {
// //   timer = true;
// //   stopWatch();
// // }

// function start() {
//   if (timer == true) {
//     return;
//   } else {
//     timer = true;
//     stopWatch();
//   }
// }

// function stop() {
//   timer = false;
// }

// function reset() {
//   timer = false;

//   hr = 0;
//   min = 0;
//   sec = 0;
//   milisec = 0;

//   document.getElementById("hr").innerText = "00";
//   document.getElementById("min").innerText = "00";
//   document.getElementById("sec").innerText = "00";
//   document.getElementById("count").innerText = "00";
// }

// function stopWatch() {
//   if (timer === true) {
//     milisec = milisec + 1;

//     if (milisec === 100) {
//       sec = sec + 1;
//       milisec = 0;
//     }

//     if (sec === 60) {
//       min = min + 1;
//       sec = 0;
//     }

//     if (min === 60) {
//       hr = hr + 1;
//       min = 0;
//       sec = 0;
//     }

//     document.getElementById("count").innerHTML = milisec;
//     document.getElementById("sec").innerHTML = sec;
//     document.getElementById("min").innerHTML = min;
//     document.getElementById("hr").innerHTML = hr;

//     setTimeout(stopWatch, 10);
//   }
// }

let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let timer = false;

function start() {
  if (timer === true) {
    return;
  } else {
    timer = true;
    stopWatch();
  }
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;

  hr = 0;
  min = 0;
  sec = 0;
  milisec = 0;

  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
}

function stopWatch() {
  if (timer === true) {
    milisec = milisec + 1;

    if (milisec === 100) {
      sec = sec + 1;
      milisec = 0;
    }

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }

    if (min === 60) {
      hr = hr + 1;

      min = 0;
      sec = 0;
    }

    document.getElementById("count").innerHTML = milisec;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hr").innerHTML = hr;

    setTimeout(stopWatch, 10);
  }
}
