let cor;
let poaicaoHorizontal;// x
let posicaoVertical;// y

function setup() {
  createCanvas(400, 400);
  background("#0B1F90");
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0,100));
}
  posicaoHorizontal = 200; 
  posicaoVertical = 200;


function draw() {
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical, 30);
  if(mouseX < posicaoHorizontal) {
   posicaoHorizontal--;
}
  if(mouseX > posicaoHorizontal) { 
    posicaoHorizontal++;
  } 
  
  if(mouseY < posicaoVertical) {
   posicaoVertical--;
}
  if(mouseY > posicaoVertical) { 
    posicaoVertical++;
  }  
  
  if(mouseIsPressed) { 
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0,100));
 }
  
}
