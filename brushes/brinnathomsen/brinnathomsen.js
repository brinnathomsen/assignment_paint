////////////////////////////////////////////////////////////////////
// brinnathomsen.js
//
// basic brinnathomsen tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var brinnathomsen = new Brush("p", "./brushes/brinnathomsen/brinnathomsen.svg");
brushes.push(brinnathomsen);



////////////////////////////////////////////////////////////////////
// define brush behavior

var centerX = 0;
var centerY = 0;
var drawColor = forecolor;

brinnathomsen.draw = function() {



	//	black hole brush
	//	brinnathomsen.draw = function() {

	var colorF = random(0, 200);
	stroke(red(forecolor) + random(0, 150), green(forecolor) + random(0, 150),
		blue(forecolor) + random(0, 150));
	strokeWeight(2);
	fill(255);
	tint(forecolor);
	if (mouseIsPressed) {
		bezier(mouseX, mouseY, mouseX + 10, mouseY + 10, mouseX, mouseY, centerX,
			centerY);
	}


};

function mousePressed() {
	centerX = mouseX;
	centerY = mouseY;
}

// netting brush
//brinnathomsen.draw = function() {
//	colorMode(HSB, 100);
//	stroke(random(0, 100), 100, 50, 10);
//	strokeWeight(5);
//	if (mouseIsPressed) {
//		line(random(200, 500), 0, mouseX, mouseY);
//		line(random(200, 500), 1000, mouseX, mouseY + 10);
//	}
//};

// curtain brush?
//brinnathomsen.draw = function() {
//	colorMode(HSB, 100);
//	stroke(random(0, 100), 100, 50, 10);
//	strokeWeight(5);
//	if (mouseIsPressed) {
//		line(mouseX + random(10, 50), 0, mouseX, mouseY);
//		line(mouseX - random(10, 50), 0, mouseX, mouseY);
//	}

// tube brush?
//brinnathomsen.draw = function() {
//colorMode(HSB, 100);
//stroke(random(0, 100), random(0, 100), 50, 10);
//strokeWeight(50);
//if (mouseIsPressed) {
//	line(pmouseX, pmouseY, mouseX, mouseY);
//	}
//};
