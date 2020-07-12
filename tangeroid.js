var five = require("johnny-five");
const {Board, Servo} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  console.log(board)
  const servo1 = new five.Servo({
    pin: 3,
    center: true
  });

  const servo2 = new five.Servo({
    pin: 5,
    center: true
  });


  servo1.to(90)
  servo2.to(90)

  setTimeout(() => {
    servo1.to(100)
    servo2.to(100)
  }, 2000)

  setTimeout(() => {
    servo1.to(80)
    servo2.to(80)
  }, 4000)

  setTimeout(() => {
    servo1.to(90)
    servo2.to(90)
  }, 6000)

  // setTimeout(() => {
  //   servo2.to(cal(150))
  // }, 8000)

  // setTimeout(() => {
  //   servo2.to(cal(90))
  // }, 10000)

});