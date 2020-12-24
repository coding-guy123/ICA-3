let img;

function preload() {
  img = loadImage('Assets/gaming skull.jpg')        //IMAGE IN ASSETS
}         //INSERTING IMAGE 

function setup() {
  img.resize(0, 500)    //RESIZING THE IMAGE ACCORDING

  createCanvas(img.width, img.height);
  img.loadPixels();                //LOAD IMAGE
}

function draw() {
 // background(220);

  for (let i = 0; i < 100; i++) {
    let x = random(0, width)
    let y = random(0, height);       //REPEATED LOOP
    //let r = random(3,mouseX*0.05)
    
    let c = img.get(x, y)
    fill(c[0], c[1], c[2], 150)
                                   //ARRANGING THE POINTS
    points(x, y, 8)
  }
}

function points(x, y, r) {

  let c = img.get(x, y)
  fill(c[0], c[1], c[2], 150)      //GENERATING THE DIMENSION OF POINTS
  noStroke()
  ellipse(x, y, r)
}