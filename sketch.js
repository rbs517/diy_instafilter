var bg;
var rSlider, gSlider, bSlider;

function setup() {
  bg = loadImage("DSC_0940.jpg");
  createCanvas(200, 290);
  filters1 = createElement('h4',"Mayfair");
  filters1.position(240, 0);
  filters2 = createElement('h4',"Valencia");
  filters2.position(240, 30);
  filters3 = createElement('h4',"Clarendon");
  filters3.position(240, 60);
  
  
  // textSize(15);
  // noStroke();

  // create sliders
  rSlider = createSlider(200, 230, 0);
  rSlider.position(320, 20);
  gSlider = createSlider(200, 230, 0);
  gSlider.position(320, 50);
  bSlider = createSlider(200, 230, 0);
  bSlider.position(320, 80);
}

function draw() {	
  background(bg);
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  tint (r, g, b);
 // tint(255, 128, 200)
}
