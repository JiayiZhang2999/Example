let mic;

function setup() {
  createCanvas(600, 600);
  mic = new p5.AudioIn();
  mic.start();
	 background(200);
}

function draw() {
	background(255)
	let c = color(0,0,100);
 

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, 200, height); //let's talk about map function

  if (h < 100) {
		c = color(0,0,100);
	} else if ((h >= 100) && (h < 300)) {
		c = color(0,100,0)
	} else if (h > 300) {
		c = color(100,0,0);
	}
		fill(c)
	  ellipse(width/2, h, 50, 50);
	  ellipse(200,200,h,h)
}