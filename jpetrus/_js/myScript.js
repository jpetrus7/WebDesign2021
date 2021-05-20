// Version 2.0
let player;
let mouseCoords = [];


 // Introducing objects
 //Function to draw a circle on the canvas
 var myCircle = {
  x: 100,
  y: 75,
  w: 100,
  radius: 50,
};

// Shows mouse position when clicked

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log( `
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
	mouseCoords =  [e.clientX, e.clientY];
  if ((myCircle.x - myCircle.radius+10) < mouseCoords[0] && (myCircle.x + myCircle.radius+10) > mouseCoords[0] && (myCircle.y - myCircle.radius+10) < mouseCoords[1] && (myCircle.y + myCircle.radius+10) > mouseCoords[1]){
    console.log("inside");

  }
}


//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//set choices
let choices =  ["rock", "paper", "scissors"];

function randChoice(x){
    return Math.floor(Math.random()*x);
}

let cpuChoice = 0;
// let cpuChoice = randChoice(choices.length);

console.log(choices[cpuChoice]);

// if (cpuChoice == 0){
//   drawCircle();
// }
// else if (cpuChoice == 1){
//   drawSquare();
// }
// else {
//   drawTriangle();
// }

//Function to draw a triangle on the canvas
function drawTriangle() {
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }

//Function to draw a square on the canvas
  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

 

console.log(myCircle.x);

  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
drawCircle();
  function main(){
  }

main();



// Anatomy of a webpage
// HTML, CSS, JS
// Using browser
// Debugging
// IDE and other resources

// Writing a program that creates rock paper scissors logic using a circle, square, and triangle
//global variables

 // Introducing objects
 //Function to draw a circle on the canvas
var canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');

// empty array to hold mouse cords
let mouseCoords = [];

// welcome to objects....

//player object with player 
let player = {
  name: "",
  choice: "",
};

var myCircle = {
  x: 75,
  y: 100,
  r: 50,
  vx: 0,
  vy: 0,
  color: 'blue'
};
var mySquare = {
  x: 150,
  y: 50,
  w: 100,
  h: 100,
  color: 'yellow'
};


player.name = prompt("give me your name...");
alert("Welcome " + player.name + "." + " Would you like to play a game?");

//set choices
let choices = ["rock", "paper", "scissors"];

function randChoice(x) {
  return Math.floor(Math.random() * x);
}

// Mouse position is found when clicked

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseCoords = [e.clientX, e.clientY];
  console.log("circle x is " + myCircle.x);

  if (myCircle.x - myCircle.r < mouseCoords[0] &&
    mouseCoords[0] < myCircle.x + myCircle.r &&
    myCircle.y - myCircle.r < mouseCoords[1] &&
    mouseCoords[1] < myCircle.y + myCircle.r
  ) {
    player.choice = "rock";
    if (myCircle.color == 'blue') {
      myCircle.color = 'red';
      myCircle.vx = 1;
    } else {
      myCircle.color = 'blue';
      myCircle.vx = 0;
    }
    // drawCircle();
    winner();
    console.log("inside circle");
  }
  if (mySquare.x < mouseCoords[0] &&
    mouseCoords[0] <= mySquare.x + mySquare.w &&
    mySquare.x <= mouseCoords[0] &&
    mySquare.y < mouseCoords[1] &&
    mouseCoords[1] < mySquare.y + mySquare.h
  ) {
    player.choice = "paper";
    if (mySquare.color == 'yellow') {
      mySquare.color = 'green';
    } else {
      mySquare.color = 'yellow'
    }
    winner();
    console.log("inside square");
  } else {
    console.log("outside");
  }
}

// Let cpuChoice = 0;

// Sets cpuChoice to some random selection from choices array
function cpuChoice() {
  let choice = choices[randChoice(choices.length)];
  console.log(choice);
  return choice;
}

console.log(choices[cpuChoice]);

function winner() {
  if (player.choice == "rock" && cpuChoice() == "scissors") {
    console.log("you've won");
  }
}

function update() {
  // console.log("updating...");
  myCircle.x += myCircle.vx;
  myCircle.r += myCircle.vx;

}

// Allows for text on the canvas

function drawText(color, font, align, base, text, x, y) {
  this.ctx.fillStyle = color
  this.ctx.font = font;
  this.ctx.textAlign = align;
  this.ctx.textBaseline = base;
  this.ctx.fillText(text, x, y);
}

//Function to draw a triangle on the canvas
function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}

function drawSquare() {
  ctx.fillStyle = mySquare.color;
  ctx.fillRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
  ctx.strokeRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
}

function drawCircle() {
  ctx.fillStyle = myCircle.color;
  ctx.beginPath();
  ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

function drawStuff() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText('black', "24px Helvetica", "left", "top", "FPS: " + fps, 0, 0);
  drawCircle();
  drawSquare();
}

let delta;
let fps;
let gameDelta;
let then = performance.now();
let now;

function main() {
  now = performance.now();
  delta = now - then;
  gameDelta = Math.min(delta, 0.25);
  fps = (Math.ceil(1000 / delta));
  update();
  drawStuff();
  then = now;
  requestAnimationFrame(main);
}