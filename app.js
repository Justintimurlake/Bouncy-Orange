const canvasEl = document.querySelector("canvas");
const canvasContext = canvasEl.getContext("2d");


const FPS = 60;
let radius = 50;
let xP, yP;
let xV, yV;

xP = canvasEl.width / 2;
yP = canvasEl.height / 2;

xV = Math.floor(Math.random() * 2999 + 99) / FPS;
yV = Math.floor(Math.random() * 2999 + 99) / FPS;


// coin toss situation


if(Math.floor(Math.random() * 2) === 0) {
  xV = -xV;
} 


if(Math.floor(Math.random() * 2) === 0) {
  yV = -yV;
} 

// The Game Loop is
function runGame() {
// moving the ball from its currrent position
xP += xV;
yP += yV;

//clearing the canvas
canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

// colosion Detection
//bottom boundary

if(yV > 0 && yP >= canvasEl.height - radius) {
  yV = -yV;
}

// right boundary
if(xV > 0 && xP >= canvasEl.width - radius) {
xV = -xV;
}

if(yV < 0 && yP <= radius) {
  yV = -yV;
}
if (xV < 0 && xP <= radius) {
  xV = -xV;
}






  //Drawing the ball
  canvasContext.beginPath();
  canvasContext.fillStyle = "white";
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

//srt interval for
setInterval(runGame, 1000 / FPS);