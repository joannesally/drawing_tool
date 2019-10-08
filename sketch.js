
let angle = 10
let paint_mode = false

function setup() {

	createCanvas(400, 300)
	rect(0, 0, width, height)

	angleMode(DEGREES)

}


function draw() {

	// ellipse(mouseX, mouseY, 50, 50)

	if (paint_mode == true) {
		fill(255, 0, 0, 100)
		noStroke()
		arc(mouseX, mouseY, 50, 50, angle, angle+50)
		angle += 1
	}

}

function mousePressed(){

	paint_mode = true


}

function mouseReleased(){

	paint_mode = false

}

function mouseClicked(){


}