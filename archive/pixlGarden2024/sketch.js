p5.disableFriendlyErrors = true;
let pg1, canvas, bufferCanvas;
let img;
let bufferDensity;
let bufferX, bufferY;
let tilesX = 68;
let tilesY = 68;
let tileW, tileH;
let speed = 6;
let minimumSize = 0;
let displayHeightRatio = .93;
let canvasHeight, canvasWidth;
let backgroundColor = '#739786'
let pixelColor = '384a42'

function preload() {
  img = loadImage("sgb.png");
}

function calculateGridSize() {
  canvasHeight = windowHeight * displayHeightRatio;
  canvasWidth = windowWidth;

  let ratio = canvasWidth / canvasHeight;

  console.log("displayHeight: " + windowHeight + " displayWidth: " + windowWidth + " ratio: " + ratio);

  if (ratio > 1) {
    //Desktop
    bufferY = 10;
    bufferX = floor((((tilesX + (bufferY * 2)) * ratio) - tilesX) / 2);

  } else {
    //Mobile
    bufferX = 0;
    bufferY = floor((((tilesY + (bufferX * 2)) / ratio) - tilesY) / 2);
  }
  console.log(bufferX + " " + bufferY);
}

let textContent = "Scrolling Text Behind Pixels";
let textX, textY;
let textSpeed = 2; // Speed of text scrolling

function setup() {
    calculateGridSize();
    pixelDensity(1); 
    let cnv = createCanvas(windowWidth, windowHeight * displayHeightRatio);
    cnv.parent('canvas-container');
    pg1 = createGraphics(tilesX, tilesY, WEBGL);
    canvas = createGraphics(tilesX, tilesY, WEBGL);
    bufferCanvas = createGraphics(width, height);
    frameRate(60);

    tileW = Math.floor(width / (tilesX + (bufferX * 2)));
    tileH = Math.floor(height / (tilesY + (bufferY * 2)));

    textX = width; // Start off-screen to the right
    textY = height / 2; // Center vertically

    drawBuffer();
}

function drawBuffer() {
  bufferCanvas.background(backgroundColor);

  // Draw the pixel grid
  bufferCanvas.fill(pixelColor);
  bufferCanvas.noStroke();
  for (let y = 0; y < tilesY + (bufferY*2); y++) {
      for (let x = 0; x < tilesX + (bufferX*2); x++) {
          let xPos = x * tileW;
          let yPos = y * tileH;
          if(x <= bufferX || x >= tilesX + bufferX || y <= bufferY || y >= tilesY + bufferY){
              bufferCanvas.push();
              bufferCanvas.translate(xPos + 4, yPos + 4);
              bufferCanvas.ellipse(0, 0, bufferDensity, bufferDensity);
              bufferCanvas.pop();
          }
      }
  }
}


// function draw() {
//   background('#FFFFFF');
//   image(bufferCanvas, 0, 0);

//   pg1.clear();
//   pg1.background(220);
//   pg1.push();
//   pg1.imageMode(CENTER);
//   pg1.scale(1, -1); 
//   img.resize(50, 0);
//   pg1.rotateY(radians(millis() * speed * .01));
//   // pg1.rotateZ(radians(millis() * speed * .01));
//   pg1.image(img, 0, 0);
//   pg1.pop();

//   canvas.imageMode(CENTER);
//   canvas.background(0);
//   canvas.push();
//   canvas.image(pg1, 0, 0);
//   canvas.pop();
//   canvas.loadPixels();

//   fill(pixelColor);
//   noStroke();

//   for (let y = bufferY + 1; y < tilesY + bufferY; y++) {
//     for (let x = bufferX + 1; x < tilesX + bufferX; x++) {
//       let xPos = x * tileW;
//       let yPos = y * tileH;

//       let i = 4 * ((y - bufferY) * canvas.width + (x - bufferX)); 
//       // console.log(canvas.pixels.length)

//       let r = 255 - canvas.pixels[i];
//       let g = 255 - canvas.pixels[i + 1];
//       let b = 255 - canvas.pixels[i + 2];
//       let a = canvas.pixels[i + 3];

//       let c = color(r, g, b, a);
//       let brightnessVal = brightness(c);
//       let s = map(brightnessVal, 0, 255, 0, 3.2);
//       s < .18 ? s = 0 : s = s;

//       push();
//       translate(xPos + 4, yPos + 4);
//       square(1, 1, tileW * s);
//       pop();
//     }
//   }
// }

function draw() {
  background('#FFFFFF');
  image(bufferCanvas, 0, 0);

  bufferCanvas.background(backgroundColor);
  bufferCanvas.fill(255);  // Ensure text color is set right before drawing
  bufferCanvas.textSize(24);
  let textRows = 30;
  for (let i = 0; i < textRows; i++) {
      bufferCanvas.text(textContent, textX, textY + (i * 24));
  }
  textX -= textSpeed;

  if (textX < -bufferCanvas.textWidth(textContent)) {
      textX = width;
  }

  pg1.clear();
  pg1.background(220);
  pg1.push();
  pg1.imageMode(CENTER);
  pg1.scale(1, -1); 
  img.resize(50, 0);
  pg1.rotateY(radians(millis() * speed * .01));
  pg1.image(img, 0, 0);
  pg1.pop();

  canvas.imageMode(CENTER);
  canvas.background(0);
  canvas.push();
  canvas.image(pg1, 0, 0);
  canvas.pop();
  canvas.loadPixels();

  noStroke();

  for (let y = bufferY + 1; y < tilesY + bufferY; y++) {
    for (let x = bufferX + 1; x < tilesX + bufferX; x++) {
      let xPos = x * tileW;
      let yPos = y * tileH;

      let i = 4 * ((y - bufferY) * canvas.width + (x - bufferX));

      let r = 255 - canvas.pixels[i];
      let g = 255 - canvas.pixels[i + 1];
      let b = 255 - canvas.pixels[i + 2];
      let a = canvas.pixels[i + 3];

      let c = color(r, g, b);
      let brightnessVal = brightness(c);
      brightnessVal = brightnessVal < 50 ? 0 : brightnessVal * 2.5;
      let alphaVal = map(brightnessVal, 0, 255, 0, 255); // Map brightness to alpha range

      fill(39, 53, 46, alphaVal); // Set the fill color with variable alpha

      push();
      translate(xPos + 4, yPos + 4);
      square(1, 1, tileH); // Draw the square at full size, but with varying transparency
      pop();
    }
  }
}