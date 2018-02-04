import processing.video.*;

Capture video;

float x;
float y;
color c;
float t = 0;

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
    c = video.get(int(x), int(y));
    noStroke();
    fill(c, 50);
    ellipse(x, y, 16, 16);

    t = t + 0.01;
    y++;

    x = noise(t);
    y = montecarlo();

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