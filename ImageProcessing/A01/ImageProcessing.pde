/**
 * Simon-Albert Boudreault
 * Image Processing
 * 23/01/18
 **/
 
/**
DESCRIPTION
I started this assignment after following a PImage tutorial on youtube, made by Daniel
Shiffman (https://youtu.be/NbX3RnlAyGU). I was interested in the idea of not drawing the
actual image on screen, and only use it as a source of information to draw basic shapes.

CONTROLS
Left click: reveal
Right click: save picture
 **/
 
PImage sa1;
PImage sa2;
Particle[] particles;
int index1;  // index of the first image
int index2;  // index of the second image

void setup() {
  size(600, 900);
  background(255);
  sa1 = loadImage("sa1.jpg");
  sa2 = loadImage("sa2.jpg");

  index1 = 50;  // larger index for the first picture
  index2 = 20;  // smaller index for the second picture

  particles = new Particle[index1];
  for (int i=0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

void draw() {
  if (mousePressed && (mouseButton == RIGHT)) {
    save("newImage.jpg");
  }
  for (int i=0; i < index1; i++) {
    particles[i].display(); // i use a higher number of particles by default
  }


  if (mousePressed && (mouseButton == LEFT)) {  // juxtapose the second image when the user left clicks
    for (int i=0; i < index2; i++) {  // i use a smaller number of particles for the second image
      particles[i].isSecondImage = true;  // asking my class to change its pixel values
    }
  } else {
    for (int i=0; i < index2; i++) {
      particles[i].isSecondImage = false;
    }
  }
}