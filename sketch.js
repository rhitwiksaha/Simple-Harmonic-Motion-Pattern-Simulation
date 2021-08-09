let angle = 0;
let w = 28;
let rotationX;
let maxDistance;
let boxHeight = 280;
let boxWidth = 280;
let boxLength = 600;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  rotationX = atan(cos(QUARTER_PI));
  maxDistance = dist(0, 0, 200, 200);
}

function draw() {
  background(255);
  ortho(-400, 400, 400, -400, 0, 1000);
  noStroke();
  directionalLight(235,254,158,0,-1,0);
  directionalLight(255,153,210,0,0,-1);
  directionalLight(208,255,123,-1,0,0);
  rotateX(PI/3);
  rotateY(frameCount * 0.005);

  let offset = 0;
  for (let z = 0; z < boxHeight; z += w) {
    for (let x = 0; x < boxWidth; x += w) {
      push();
      let distance = dist(x, z, boxWidth / 2, boxHeight / 2);
      let offset = map(distance, 0, maxDistance, -PI, PI);
      // let h = floor(map(sin(angle + offset), -1, 1, 100, boxLength));
      translate(x - boxWidth / 2, 0, z - boxHeight / 2);
      box(w, boxLength, w);
      pop();
    }
  }
  angle -= 0.1;
}
