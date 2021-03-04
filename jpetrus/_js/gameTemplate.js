//sources
// https://eloquentjavascript.net/code/chapter/17_canvas.js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

//Initialize GLOBAL variables to create a canvas
let canvasDiv;
let canvas;
let ctx;
let initialized = false;

// Mouse position is found when clicked
let mouseX = 0;
let mouseY = 0;
// Object setting the position of the mouse
let mousePos = {
  x: 0,
  y: 0
};
let mouseClicks = {
  x: 0,
  y: 0
};
let mouseClickX = 0;
let mouseClickY = 0;


function init() {
  // Creating a new div element
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  // Adding more content 
  canvas = document.createElement('canvas');
  // Adding the text node to div
  canvasDiv.appendChild(canvas);
  // Adding the element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = 500;
  canvas.height = 500;
  document.getElementById("chuck").style.width = canvas.width + 'px';
  document.getElementById("chuck").style.height = canvas.height + 'px';
  ctx = canvas.getContext('2d');
  initialized = true;
}

// Creating an object to hold attributes to be able to draw a shape on canvas
// More comments
let oSquare = {
  w: 50,
  h: 50,
  x: 300,
  y: 300,
  vx: 0.1,
  vy: 0.1,
  color: 'black'
};

// Creating a constructor function that allows you to create more that one type of object
function fSquare(w, h, x, y, vx, vy, c) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.color = c;
  this.draw = function () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.strokeRect(this.x, this.y, this.w, this.h);
    };
}

// Creating a JS Class that allows you to create more objects from a 'template' using 'new'
class cSquare {
  constructor(w, h, x, y, vx, vy, c) {
    this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.color = c;
  }
  moveinput() {
    if ('w' in keysDown || 'W' in keysDown) { // Player control
        this.vx = 0;
        this.vy = -1;
        console.log('w!!!');
    } else if ('s' in keysDown || 'S' in keysDown) { // Player control
        this.vx = 0;
        this.vy = 1;

    } else if ('a' in keysDown || 'A' in keysDown) { // Player control
        this.vy = 0;
        this.vx = -1;

    } else if ('d' in keysDown || 'D' in keysDown) { // Player control
        this.vy = 0;
        this.vx = 1;
    }
  update(){
    // Drawing using variables
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
}

// Creating a new object from an existing object oSquare
let newSquare = Object.create(oSquare);

// Creating an instance of a constructor FUNCTION fSquare
let oneSquare = new fSquare(25, 25, 0, 0, 0, 0, 'red');
let twoSquare = new fSquare(25, 25, 150, 25, 0, 0, 'green');
let threeSquare = new fSquare(25, 25, 0, 0, 0, 0, 'blue');
let fourSquare = new CSquare(25, 25, 0, 0, 0, 0, 'blue');


// Creating an instance of  a class cSquare
let anotherSquare = new CSquare(40, 40, 25, 25);


let myCircle = {
  r: 25,
  w: 50,
  h: 50,
  x: 150,
  y: 200,
  vx: 0.1,
  vy: 0.1,
  color: 'grey',
  draw: function () {
    ctx.fillStyle = myCircle.color;
    ctx.beginPath();
    ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
};

// Mouse position is found when clicked
addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}, Client X/Y: ${e.clientX}, ${e.clientY}`);
  mouseClickX = e.clientX;
  mouseClickY = e.clientY;
  mouseClicks = {
    x: mouseClickX,
    y: mouseClickY
  };
}
// Functions collide with variables a,b
function collide(a, b) {
  if (a.x <= b.x &&
    b.x <= a.x + a.w &&
    a.y <= b.y &&
    b.y <= a.y + a.h
  ) {
    console.log('collided');
    return true;
  }
}

// Udates all the elements on the canvas
function update(mod) {
    if (collide(mySquare, mousePos)) {
      mySquare.color = 'red';
    }
    else{
      mySquare.color = 'orange';
    }
  mySquare.x += mySquare.vx * mod;
  mySquare.y += mySquare.vy * mod;
  if (mySquare.x + mySquare.w >= canvas.width || mySquare.x <= 0) {
    mySquare.vx *= -1;
    mySquare.color = 'blue';
  }
  if (mySquare.y + mySquare.h >= canvas.height || mySquare.y <= 0) {
    mySquare.vy *= -1;
    mySquare.color = 'green';
  }

// Draws text on the canvas
function drawText(color, font, align, base, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

// Draws a square, circle, or rectangle
function drawSquare() {
  ctx.fillStyle = mySquare.color;
  ctx.fillRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
  ctx.strokeRect(mySquare.x, mySquare.y, mySquare.w, mySquare.h);
}

// function drawCircle() {
//   ctx.fillStyle = myCircle.color;
//   ctx.beginPath();
//   ctx.arc(myCircle.x, myCircle.y, myCircle.r, 0, 2 * Math.PI);
//   ctx.stroke();
//   ctx.fill();
// }

// Draws everything you want to draw
function draw() {
  // Clears the canvas before drawing any shapes
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText('black', "24px Helvetica", "left", "top", "FPS: " + fps, 400, 0);
  drawText('black', "24px Helvetica", "left", "top", "Delta: " + gDelta, 400, 32);
  drawText('black', "24px Helvetica", "left", "top", "mousepos: " + mouseX + " " + mouseY, 0, 0);
  drawText('black', "24px Helvetica", "left", "top", "mouseclick: " + mouseClickX + " " + mouseClickY, 0, 32);
  drawSquare();
  threeSquare.draw();
  oneSquare.draw();
  twoSquare.draw();
}

// Setting variables
let fps;
let now;
let delta;
let gDelta;
let then = performance.now();

// Loop of the game
function main() {
  now = performance.now();
  delta = now - then;
  gDelta = (Math.min(delta, 17));
  fps = Math.ceil(1000 / gDelta);
  if (initialized) {
    update(gDelta);
    draw();
  }
  then = now;
  requestAnimationFrame(main);
  }
}