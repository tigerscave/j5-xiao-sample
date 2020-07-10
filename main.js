var five = require("johnny-five");
const {Board, Servo, Motor} = require("johnny-five");
const board = new Board();

const PWM_RANGE_MIN = 560
const PWM_RANGE_MAX = 2480

const cal = (x) => five.Fn.map(x, 0, 320, 0, 288)

board.on("ready", () => {
  console.log(board)
  const servo1 = new five.Servo({
    controller: "PCA9685",
    pin: 0,
    pwmRange: [PWM_RANGE_MIN, PWM_RANGE_MAX],
    range: [0, 300],
    degreeRange: [0, 300],
  });

  const servo2 = new five.Servo({
    controller: "PCA9685",
    pin: 1,
    // pwmRange: [PWM_RANGE_MIN, PWM_RANGE_MAX],
    // range: [-150, 150],
    // degreeRange: [-150, 150],
    // center: true,
  });

  console.log(cal(90))

  servo1.to(cal(90))
  servo2.to(cal(90))

  setTimeout(() => {
    servo2.to(cal(0))
  }, 2000)

  setTimeout(() => {
    servo2.to(cal(45))
  }, 4000)

  setTimeout(() => {
    servo2.to(cal(90))
  }, 6000)

  setTimeout(() => {
    servo2.to(cal(150))
  }, 8000)

  setTimeout(() => {
    servo2.to(cal(90))
  }, 10000)

});