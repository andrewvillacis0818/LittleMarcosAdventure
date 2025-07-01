var bello=250;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(188,139,139); //an RGB color for the canvas' background
  //circle
  stroke(60,45,200) // an RGB color for the circle's border
  fill(75,88,127,250); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,25,25,17,38); // center of canvas, 20px dia
  fill(mouseX,34,69);
  rect(bello,200,50,mouseX);
  fill(20,50,175);
  triangle(30,75,58,20,86,75);
  line(123, 230, 332, 90);
  rect(400, 200, 100, 100);
  
  textSize(10);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Little Marco loves turning shapes into cool stuff with his imagination', 100, 100);
}
