let imgM, imgN, imgO;        //IMG VARIABLES
//INSERTING IMAGES
function preload() {
  imgM = loadImage('Assets/doctor strange endgame.jpg')
  imgN = loadImage('Assets/iron man endgame.jpg')
  imgO = loadImage('Assets/spider man.jpg')
}

function setup() {
  imgM.resize(0, 500)        //RESIZING IMAGE ACCORDING TO THE CANVAS
  imgN.resize(0, 500)
  imgO.resize(0, 500)

  createCanvas(700,700);

  imgM.loadPixels()
  imgN.loadPixels()           //LOADING IMAGE IN THE CANVAS
  imgO.loadPixels()
}

function draw() {
  for (let i = 0; i < 10; i++) {
    let x = random(0, width);        //CREATING REPEATED SWATCHES
    let y = random(0, height);
    swatch(x, y, 50);
  }
}

function swatch(x, y, c) {
  let pic, picA, picB;
  let k = random(3);              //RANDOMISING PIXELS
  k = floor(k);
  switch (k) {
    case 0:
      pic = imgO.get(x, y, c, c);
      break;
    case 1:
      pic = imgM.get(x, y, c, c);
      break;

    case 2:
      pic = imgN.get(x, y, c, c);
      break;
  }
  image(pic, x, y);

}