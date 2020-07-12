var five = require("johnny-five");
const {Board, Servo, Motor} = require("johnny-five");
const board = new Board();

const PWM_RANGE_MIN = 560
const PWM_RANGE_MAX = 2480

const TB6612_AIN1 = 0
const TB6612_AIN2 = 1
const TB6612_BIN1 = 2
const TB6612_BIN2 = 3
const TB6612_STBY = 8

const cal = (x) => five.Fn.map(x, 0, 320, 0, 288)

board.on("ready", () => {

  board.pinMode(TB6612_AIN1, board.MODES.OUTPUT);
  board.pinMode(TB6612_AIN2, board.MODES.OUTPUT);
  board.pinMode(TB6612_BIN1, board.MODES.OUTPUT);
  board.pinMode(TB6612_BIN2, board.MODES.OUTPUT);
  board.pinMode(TB6612_STBY, board.MODES.OUTPUT);

  console.log(board)
  const servo1 = new Servo({
    controller: "PCA9685",
    pin: 0,
    pwmRange: [PWM_RANGE_MIN, PWM_RANGE_MAX],
  });

  const servo2 = new Servo({
    controller: "PCA9685",
    pin: 1,
    pwmRange: [PWM_RANGE_MIN, PWM_RANGE_MAX],
  });

  console.log(cal(90))

  servo1.to(cal(90))
  servo2.to(cal(90))

  setTimeout(() => {
    servo2.to(cal(80))
  }, 2000)

  setTimeout(() => {
    servo2.to(cal(85))
  }, 4000)

  setTimeout(() => {
    servo2.to(cal(90))
  }, 6000)

  setTimeout(() => {
    servo2.to(cal(95))
  }, 8000)

  setTimeout(() => {
    servo2.to(cal(100))
  }, 10000)

  const leftMotor = new Motor({
    pin: 6,
    controller: "PCA9685",
  });

  const rightMotor = new Motor({
    pin: 7,
    controller: "PCA9685",
  });

  board.digitalWrite(TB6612_AIN1, 0);
  board.digitalWrite(TB6612_AIN2, 1);
  leftMotor.speed(150);

  board.digitalWrite(TB6612_BIN1, 1);
  board.digitalWrite(TB6612_BIN2, 0);
  rightMotor.speed(150);
  board.digitalWrite(TB6612_STBY, 1);

  setTimeout(() => {
    leftMotor.stop();
    rightMotor.stop();
  }, 2000)

  setTimeout(() => {
    board.digitalWrite(TB6612_AIN1, 1);
    board.digitalWrite(TB6612_AIN2, 0);
    leftMotor.speed(100);
    board.digitalWrite(TB6612_BIN1, 0);
    board.digitalWrite(TB6612_BIN2, 1);
    rightMotor.speed(150);
  }, 4000)

  setTimeout(() => {
    leftMotor.stop();
    rightMotor.stop();
  }, 6000)

});