class PongGame {
  constructor() {
    this.ball = document.querySelector(".ball");
    this.paddle1 = document.querySelector(".paddle1");
    this.paddle2 = document.querySelector(".paddle2");
    this.scoreA = 0;
    this.scoreB = 0;
  }
  load_ball(dir) {
    this.ball.style.left = centeralLeftBall;
    this.ball.style.top = centeralTopBall;
    this.Vx = 5 * dir;
    this.Vy = -1.6;
  }
  move() {
    this.ball.style.left = parseInt(this.ball.style.left) + this.Vx + "px";
    this.ball.style.top = parseInt(this.ball.style.top) + this.Vy + "px";
  }
  strike_Paddle1() {
    let ballCoords = this.ball.getBoundingClientRect();
    let paddleCoords = this.paddle1.getBoundingClientRect();

    if (ballCoords.left < paddleCoords.right) {
      let Lcollision =
        ballCoords.top > paddleCoords.top &&
        ballCoords.top < paddleCoords.bottom;
      let Ucollision =
        ballCoords.bottom > paddleCoords.top &&
        ballCoords.bottom < paddleCoords.bottom;

      if (Lcollision || Ucollision) {
        let ballCenter = ballCoords.bottom - this.ball.offsetHeight / 2;
        let paddleCenter = paddleCoords.bottom - this.paddle1.offsetHeight / 2;
        this.offset = (ballCenter - paddleCenter) / paddleCenter;
        this.Vx = this.Vx * -1.1;
        this.Vy = 1.1 * this.Vy + this.offset;
      }
    }
  }
  strike_Paddle2() {
    let ballCoords = this.ball.getBoundingClientRect();
    let paddleCoords = this.paddle2.getBoundingClientRect();

    if (ballCoords.right > paddleCoords.left) {
      let Lcollision =
        ballCoords.top > paddleCoords.top &&
        ballCoords.top < paddleCoords.bottom;
      let Ucollision =
        ballCoords.bottom > paddleCoords.top &&
        ballCoords.bottom < paddleCoords.bottom;

      if (Lcollision || Ucollision) {
        let ballCenter = ballCoords.bottom - this.ball.offsetHeight / 2;
        let paddleCenter = paddleCoords.bottom - this.paddle2.offsetHeight / 2;
        this.offset = (ballCenter - paddleCenter) / paddleCenter;

        this.Vx = this.Vx * -1.1;
        this.Vy = 1.1 * this.Vy + this.offset;
      }
    }
  }

  update() {
    this.move();

    this.strike_Paddle1();
    this.strike_Paddle2();

    let ballCoords = this.ball.getBoundingClientRect();
    if (
      ballCoords.top < 0 ||
      ballCoords.top > document.documentElement.clientHeight
    ) {
      this.Vy = this.Vy * -1;
    }
    if (ballCoords.left < 0) {
      this.scoreB += 1;
      document.querySelector(".scoreB").innerHTML = `${this.scoreB}`;
      this.load_ball(1);
    }
    if (ballCoords.right > document.documentElement.clientWidth) {
      this.scoreA += 1;
      document.querySelector(".scoreA").innerHTML = `${this.scoreA}`;
      this.load_ball(-1);
    }
  }
}
let start = function () {
  let game = new PongGame();
  game.load_ball(1);
  let interval = setInterval(game.update.bind(game), 1000 / 60);
  document.querySelector(".label").remove();
  document.removeEventListener("keydown", start);
};
document.addEventListener("keydown", start);
