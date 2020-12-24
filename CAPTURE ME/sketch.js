let capture;  //CAPTURING VIDEO INPUT
let smallPoint, largePoint; //TWO DIFFERENT POINTS


function setup() {
  createCanvas(600, 400);
  capture = createCapture(VIDEO);
  capture.size(600, 400);
  capture.hide();
   smallPoint = 10;
  largePoint = 10;       //SIZE OF THE POINTS TO BE DRAWN
  imageMode(CENTER);
  noStroke();
  background(255);             
  capture.loadPixels();  //PIXEL ACCORDING TO IMG
}

function draw() {
  //background(220);
  image(capture, 0, 0, 320, 240);
  
  //filter(INVERT);
  //filter(THRESHOLD);     //FILTER OPTIONS
  filter(GRAY);
  
   let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(capture.width));
  let y = floor(random(capture.height));
  let pix = capture.get(x, y);
  fill(pix, 128);                         //FILLING THE CIRCLES
  ellipse(x, y, pointillize, pointillize);
}
