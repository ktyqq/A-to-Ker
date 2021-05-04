var font1;
var myText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var size = 32;

function preload(){
  font1 = loadFont('data/Montserrat-Light-copy.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font1);
  words=myText.split(' ');
  textLeading(size*1.5);
  textSize(size);
  fill(255);
}

function draw() {
  background(0);
  //text(myText, width/20, height/20, 0.9*width, 0.9*height); 
  //actual text, starting text location xy, and the text box size
  for (var i=0; i<words.length; i++){
    if (frameCount>50*i){
    text(words[i], 10, i*size);
    }
  }
}
