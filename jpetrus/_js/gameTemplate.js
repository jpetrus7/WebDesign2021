//sources
// https://eloquentjavascript.net/code/chapter/17_canvas.js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

//Initialize GLOBAL variables to create a canvas
let canvasDiv;
let canvas;
let ctx;
let WIDTH = 500;
let HEIGHT= 500;

//Container array for mobs or enemies
let mobs = [];

// Lets you know if game is initialized or not
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

// Creating object with keys being pressed

let keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.key] = true;
}, false);

addEventListener("keyup", function (e) {
    // if (e.key == " ") {
    //     player.canjump = true;
    //     player.jumps++;
    // }
    delete keysDown[e.key];

}, false);


function init() {
  // Creatin a new div element
  canvasDiv = document.createElement("div");
  canvasDiv.id = "chuck";
  // Giving the object some content
  canvas = document.createElement('canvas');
  // Adding the text node to the newly created div element
  canvasDiv.appendChild(canvas);
  // Adding the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(canvasDiv, currentDiv);
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.getElementById("chuck").style.width = canvas.width + 'px';
  document.getElementById("chuck").style.height = canvas.height + 'px';
  ctx = canvas.getContext('2d');
  initialized = true;
}

class Sprite {
  constructor(w, h, x, y, c) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.color = c;
    this.spliced = false;
    }
    collide(obj) {
      if (this.x <= obj.x + obj.w &&
        obj.x <= this.x + this.w &&
        this.y <= obj.y + obj.h &&
        obj.y <= this.y + this.h
      ) {
        console.log('collided with ' + obj);
        return true;
      }
    }
}

class Player extends Sprite {
  constructor(w, h, x, y, c, vx, vy) {
  super(w, h, x, y, c, vx, vy);
  this.vx = vx;
  this.vy = vy;
  this.speed = 3;
  }
  moveinput() {
    if ('w' in keysDown || 'W' in keysDown) { // Player control
        this.vx = 0;
        this.vy = -this.speed;
        console.log('w!!!');
    } else if ('s' in keysDown || 'S' in keysDown) { // Player control
        this.vx = 0;
        this.vy = this.speed;

    } else if ('a' in keysDown || 'A' in keysDown) { // Player control
        this.vy = 0;
        this.vx = -this.speed;

    } else if ('d' in keysDown || 'D' in keysDown) { // Player control
        this.vy = 0;
        this.vx = this.speed;
    }
    else{
      this.vx = 0;
      this.vy = 0;
    }
}
  update(){
    this.moveinput();
    this.x += this.vx;
    this.y += this.vy;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
}

class Mob extends Sprite {
  constructor(w, h, x, y, c, vx, vy) {
    super(w, h, x, y, c);
    this.vx = vx;
    this.vy = vy;
    this.speed = 3;
    }
    update(){
      this.x += this.vx;
      this.y += this.vy;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}


// Creating an instance of the class
let player = new Player(25, 25, WIDTH/2, HEIGHT/2, 'red', 0, 0);

// Adding two different sets of mobs to the mobs' array
for (i = 0; i < 10; i++){
  mobs.push(new Mob(60,60, 200, 100, 'pink', Math.random()*-2, Math.random()*-2));
  console.log(mobs);
}

while (mobs.length < 20){
  mobs.push(new Mob(10,10, 250, 200, 'purple', Math.random()*-2, Math.random()*-2));
}


// Getting the mouse position when clicked
addEventListener('mousemove', e => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  // Using x and y variables for mouse position
  mousePos = {
    x: mouseX,
    y: mouseY
  };
});

// Getting mouse position when clicked
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

// Drawing the text on the  canvas
function drawText(color, font, align, base, text, x, y) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
}

// ########## Updates all the elements on canvas ##########
function update(mod) {
  player.update();


  // Updating all the mobs in a group
  for (let m of mobs){
    m.update();
    if (player.collide(m)){
      m.spliced = true
    }
    
  }
  for (let m in mobs){
    if (mobs[m].spliced){
      mobs.splice(m, 1);
    }
  }

}

// Draws all the stuff on the canvas that you want to draw
function draw() {

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