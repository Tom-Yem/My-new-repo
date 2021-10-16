let centralWidth = document.documentElement.clientWidth / 2;
let centralHeight = document.documentElement.clientHeight / 2;
document.querySelector(".center").style.cssText = `left:${centralWidth}px;`;

let ballStyle = getComputedStyle(document.querySelector(".ball"));
let centeralLeftBall = centralWidth - parseInt(ballStyle.width) / 2 + "px";
let centeralTopBall = centralHeight - parseInt(ballStyle.height) / 2 + "px";

document.querySelector(".ball").style.left = centeralLeftBall;
document.querySelector(".ball").style.top = centeralTopBall;

document.querySelector(".scoreA").style.left =
  parseInt(centeralLeftBall) - 30 + "px";
document.querySelector(".scoreA").style.top =
  parseInt(centeralTopBall) - 30 + "px";
document.querySelector(".scoreB").style.left =
  parseInt(centeralLeftBall) + 30 + "px";
document.querySelector(".scoreB").style.top =
  parseInt(centeralTopBall) - 30 + "px";
document.querySelector(".label").style.left = centralWidth / 2 + "px";
document.querySelector(".label").style.top =
  parseInt(centeralTopBall) / 2 + "px";
