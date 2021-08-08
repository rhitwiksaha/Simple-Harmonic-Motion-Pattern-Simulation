let len = 50;
let wid = 20;
let angle = 0;
let resolution = 200;
let num;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
  num = resolution / wid;
}

function draw() {
  background(255);

  angle+=2;

  for(let i = 0; i < num ; i++){
    
    box(wid, 2*len + len * sin(angle), wid);
  }
}
