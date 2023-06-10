function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  translate(width/2, height/2);
  stroke(5);
  noFill();
  beginShape();  
  for (let a = 0; a < TWO_PI; a+=.01){
    let r = random(50, 1000);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);  
  
}