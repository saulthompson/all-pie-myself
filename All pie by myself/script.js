

/*class Explosion {
    constructor(left, top, visibility, src) {
        this.left = 'left';
        this.top = 'top';
        this.visibility = 'visibility';
        this.src = 'src'
    }}


    let explosion1 = new Explosion (60, 15, visible, 'explosion.jpg');

    document.getElementById('experiment').appendChild(explosion1);
    */



;function explodeHat() {
    var exp = new Image;
    exp.src="explosion.jpg";
    exp.style.borderRadius = '50%';
    exp.style.position = 'absolute';
    exp.style.top = '-10%';
    exp.style.right = '-35%';
    exp.style.animationName = 'explosion';
    exp.style.animationDuration = '0.3s';
    exp.style.animationFillMode = 'forwards';
    document.getElementById('pie-hat-img').style.animationName = 'explosion';
    document.getElementById('pie-hat-img').style.animationDuration = '0.3s';
    document.getElementById('pie-hat').appendChild(exp);
   };

function explodeCastle() {
    var exp = new Image;
    exp.src="explosion.jpg";
    exp.style.borderRadius = '50%';
    exp.style.position = 'absolute';
    exp.style.animationName = 'explosion';
    exp.style.animationDuration = '0.3s';
    exp.style.animationFillMode = 'forwards';
    exp.style.top = '15%';
    exp.style.right = '35%';
    exp.style.zIndex = 2;
    document.getElementById('big-castle').appendChild(exp);
};

function explodeTurret() {
        var exp = new Image;
    exp.src="explosion.jpg";
    exp.style.borderRadius = '50%';
    exp.style.position = 'absolute';
    exp.style.animationName = 'explosion';
    exp.style.animationDuration = '0.3s';
    exp.style.animationFillMode = 'forwards';
    exp.style.top = '50%';
    exp.style.right = '50%';
    exp.style.zIndex = 2;
    document.getElementById('turret').appendChild(exp);
}


function randomExplosion() {
const a = Math.ceil(Math.random() * 3);
if (a === 3) {
explodeCastle();
} else if (a === 2) {
    explodeHat();
} else if (a === 1) {
    explodeTurret();
}
};


/*function draw() {
    const ctx = document.getElementById('gameTime').getContext('2d');
    ctx.canvas.width = window.innerWidth;
      const pinkPie = new Image();
      pinkPie.onload = () => {
        ctx.drawImage(pinkPie, 200, 440);
      }
    pinkPie.src = 'pink-pie.jpg'
  };
  draw(); */

  
  
 /* let raf;


  function draw() {
    const ctx = document.getElementById('gameTime').getContext('2d');
    //ctx.clearRect(0,0, canvas.width, canvas.clientHeight)
    ctx.canvas.width = window.innerWidth;
    const pinkPie = new Image();
    ctx.clearRect(0,0, canvas.width, canvas.height)
    pinkPie.onload.draw();
    pinkPie.x =+ pinkPie.vx;
    pinkPie.y =+ pinkPie.vy;
    raf = window.requestAnimationFrame(draw)
    
    

    pinkPie.src = 'pink-pie.jpg'
    pinkPie.x = 200;
    pinkPie.y = 440;
    pinkPie.vx = 5;
    pinkPie.vy = 2;
    pinkPie.draw() {
        ctx.
    }
  };

  pinkPie.draw() */


  /* let rectX = 0;
  let rectY = 0;

  function update() {
    rectX += 1;
    rectY += 1;
  }

  const ctx = document.getElementById('gameTime').getContext('2d');

  function gameLoop() {
    update();
    draw();

    window.requestAnimationFrame(gameLoop);
  }
  
 

  function draw() {
    ctx.drawIm;
};
 gameLoop(); */

/* attempt at creating a random loop let ctx;
const canvas = document.getElementById('gameTime');
canvas.style.border = '5px solid blue'; 
const timer = setInterval(gameLoop, 1000/60);


 function init() {
    ctx = document.getElementById('gameTime').getContext('2d');
    
 };

 function gameLoop(timeStamp) {
    draw();
    timer();
 };

 function draw(direction) {
    var pinkPie = document.getElementById('pinkPie');
    ctx.drawImage(pinkPie, xvar, yvar)
 };

let xvar = Math.random() * 300;
let yvar = Math.random() * 300;

init(); */

    function PieLaunch() {
             explodeHat();
             init();
        }
        
    let context;
    let dx = 1;
    let dy = 1;
    let x = 100;
    let y = 300;
    let score = 0;

    
    let pinkPie = document.getElementById('pinkPie');
   

    function init(){
        
        scoreBoard.textContent = 0
        context = canvas.getContext('2d');
        canvas.style.border = '5px solid blue'
        canvas.width = window.innerWidth;

        // Start the first frame request
        window.requestAnimationFrame(gameLoop);
    }

    function gameLoop(timeStamp){
        draw();

        // Keep requesting new frames
        window.requestAnimationFrame(gameLoop);
    }

    function draw(){
        let pinkPie = document.getElementById('pinkPie');
        pinkPie.style.width = '100px';
        pinkPie.style.height = '62px';
        pinkPie.addEventListener('mousedown', success);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(pinkPie, x, y);
        if (x + dx > canvas.width - 75 || x + dx < 0) {
            dx = -dx
        };
        if (y +dy > canvas.height - 31 || y +dy < 0) {
            dy = -dy
        };
        
        x += dx;
        y += dy;


    }

    
    
    
    const scoreBoard = document.querySelector('.score');

    function success(e) {
        if(!e.isTrusted) return;
        score++;
        scoreBoard.textContent = score
    }

    let canvasElem = document.querySelector('canvas');


    function getMousePos(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("click coordinate x:" + x, "click coordinate y:" + y);
    };

    canvasElem.addEventListener("mousedown", function(e) {
        getMousePos(canvasElem, e)
    });

    function getPiePos (canvas, pinkPie) {
        let rect = canvas.getBoundingClientRect();
        let x = pinkPie.clientX - rect.left;
        let y = pinkPie.clientY - rect.top;
        console.log("pie coordinate x:" + x, "pie coordinate y:" + y);
    }

