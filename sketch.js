var yTorus = 0;
var rot_x;
var rot_y;
var rot_z;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

}

function draw() {
  background(0);

  // mode selektor
  if (mouseX < width/2) { dx() } else { sx() }

    // cylinder pillar
        push();
        stroke(0);
        ambientMaterial(40,50,100);
        rotate(180);
        translate(0,0);
        cylinder(15,height, 24, 24);
        pop();

    // torus ring
        // x rotation
        if (rot_x < 180) {rot_x+=1} else {rot_x = 0}
        // y rotation
        if (rot_y < 90) {rot_y+=1} else {rot_y = 0}
        // z rotation
        if (rot_z < 360) {rot_z+=1} else {rot_z = 0}

        push();
        stroke(0);
        ambientMaterial(40,50,100);
        translate(0,yTorus);
        rotateX(90);
        rotateY(0);
        rotateZ(rot_z);
        torus(350,15, 24, 24);
        pop();

        // torus path
        if (yTorus < height) {
            yTorus+= 5;
        }
        else if (yTorus >= height) {
            yTorus= -height/2 - 200;
        }

}

function dx() {
  var mapX = map(mouseX, 0, width, 0, 255);
  background(mapX,mapX,mapX);

  ambientLight(mapX, 150, 0);
  directionalLight(mapX, 150, 0, 0, 1, 0);
  pointLight(255, 255, 255, -mouseX, mouseY, 0)

  emissiveMaterial(0, 255, 0);
}

function sx() {
  var mapX = map(mouseX, 0, width, 0, 255);
  background(mapX,mapX,mapX);

  ambientLight(mapX, 100, 0);
  directionalLight(mapX, 100, 0, 0, 1, 0);
  pointLight(255, 255, 255, mouseX, mouseY, 0)
}
