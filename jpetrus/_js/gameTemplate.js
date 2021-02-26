//sources
// https://eloquentjavascript.net/code/chapter/17_canvas.js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

//Initialize variables to create a canvas
let canvasDiv;
let canvas;
let ctx;
let initialized = false;

// Mouse position is found when clicked
let mouseX = 0;
let mouseY = 0;
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
  // Create a new element
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  // Adding more content 
  canvas = document.createElement('canvas');
  // Add the text node to div
  canvasDiv.appendChild(canvas);
  // Add the element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = 500;
  canvas.height = 500;
  document.getElementById("chuck").style.width = canvas.width + 'px';
  document.getElementById("chuck").style.height = canvas.height + 'px';
  ctx = canvas.getContext('2d');
  initialized = true;
}

// Create an object to hold attributes in order to draw a shape on the canvas
// More comments
let mySquare = {
  w: 50,
  h: 50,
  x: 150,
  y: 200,
  vx: 0.1,
  vy: 0.1,
  color: 'black'
};

// Mouse position is found when clicked
addEventListener('mousemove', e => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  mousePos = {
    x: mouseX,
    y: mouseY
  };
});

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
    mySquare.color = 'red';
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