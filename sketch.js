let paint_mode = false

function setup() {

    // tell p5 to use the <div> tag you made in your html
    let canvas = createCanvas(400, 300)
    canvas.parent("p5")

    // draw frame, but leave room for the buttons on the left
    rect(50, 0, width-50, height)

    // set initial pen color
    stroke(0, 0, 0, 50)
    strokeWeight(1)

}

function draw() {

    // only execute this code if you've turn on paint_mode
    if (paint_mode == true) {
        line(mouseX-10, mouseY-10, mouseX+10, mouseY+10)
        line(mouseX+10, mouseY-10, mouseX-10, mouseY+10)        
    }

    // make a button on the canvas 
    // use push and pop to isolate any changes from the rest of your code
    push()
    stroke(0)

    // make the toolbar area
    fill(200, 200, 200)
    rect(0, 0, 50, height)

    // make the red button
    fill(255, 0, 0)
    rect(10, 10, 30, 30)

    // make the blue button
    fill(0, 0, 255)
    rect(10, 50, 30, 30)

    pop()

}

function mousePressed() {
    paint_mode = true
}

function mouseReleased() {
    paint_mode = false
}

function mouseClicked() {

    // check to see if the mouse click was within the red button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        stroke(255, 0, 0, 50)
    }

    // check to see if the mouse click was within the blue button coords
    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 90) {
        stroke(0, 0, 255, 50)
    }

}    


// call these functions from HTML 

function colorBlue() {
    stroke(0, 0, 255, 50)
}

function colorRed() {
    stroke(255, 0, 0, 50)
}
