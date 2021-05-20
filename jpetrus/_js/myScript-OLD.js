// I can initialize variables with booleans, number, strings, etc.
// let myNum = 6;
// const myName = "Josh";
// alert(myName);
// alert(myNum);
// myNum = 25;
// alert(myNum);
// Version 2.0


// Add a canvas to the page


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// Writing a program that creates rock paper scissors logic using circle, square, triangle

// Getting mouse position and runs the shoot function when I click
let player;
let mouseCoords = [];

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log( `
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
	mouseCoords =  [e.clientX, e.clientY];
  
	console.log(mouseCoords[0]);
  if (mouseCoords[0] < getRandomInt(300)){
    alert("I can click and get feedback from computer based on mouse position");
  }
}


//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let randNum = Math.random();

console.log(randNum);

if (true) {
  alert("hello world...");
  if(randNum > mouseCoords){
    alert("Winner winner, chicken dinner!!!");
  }
}

// let drawTri = true;
// let drawCir = false;

// let player = prompt("rock paper or scissors");
// let cpu = "paper";

// this function tests whether the player won the round
// this requires an entry from the player
function RPS(){
  if (player == "scissors" && cpu == "paper") {
    drawTriangle();
  }
  else if(player == "rock" && cpu == "scissors"){
    drawCircle();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Function to draw a triangle on the canvas
function drawTriangle() {
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }

//Function to draw a sqaure on the canvas
  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

  //Function to draw a circle on the canvas
  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }
  d = new Date();

  function main(){
  //  RPS();
  
  }

main();