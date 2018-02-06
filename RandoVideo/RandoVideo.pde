/**
 * Simon-Albert Boudreault
 * Rando Video
 * 06/02/18
 **/
 
/**
DESCRIPTION
A variant of my PImage assignment. I keep drawing ellipse based on pixel data, but
this time using the webcam alongside random functions.
 **/

import processing.video.*;

Capture video;

float x;
float y;
color c;  // color
float t;  // time (for noise)

void setup() {
  size(displayWidth, displayHeight);
  video = new Capture(this, displayWidth, displayHeight, 30);
  video.start();
}

void captureEvent(Capture video) {
  video.read();
}

void draw() {
  background(255);
  for (int i = 0; i < 10000; i++) {
    c = video.get(int(x), int(y));  // using the value of webcam for color
    noStroke();
    fill(c, 50);
    ellipse(x, y, 16, 16);

    t = t + 0.01;  // making the time progress so that the elippses move sideways
    //y++;

    x = noise(t);  // the position on the ellipse on the x-axis is based on perlin noise
    y = montecarlo();  // the position of the ellipse is based on a custom distribution

    x = map(x, 0, 1, 1, width);
    y = map(y, 1, 0, height, 0);
  }
}

float montecarlo() {
  while (true) {
    float r1 = random(1);
    float p = r1;
    float r2 = random(1);
    if (r2<p) {
      return r1;
    }
  }
}