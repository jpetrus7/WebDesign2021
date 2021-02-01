// test code

// let myNum = 6;
// const myName = "Chris";
// alert(myName);
// alert(myNum);
// myNum = 25;
// alert(myNum);

// add a canvas to the page


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      console.log("this thinng evaluated to true...")
      var ctx = canvas.getContext('2d');
  
      ctx.beginpath();
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
      ctx.fill();
    }
  }
  draw();

