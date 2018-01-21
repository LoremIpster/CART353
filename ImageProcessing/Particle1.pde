class Particle {
  float x;
  float y;

  float vx;
  float vy;

  color c;  // color
  float r;  // radius
  boolean isSecondImage;


  Particle() {
    r = 16;
    float a = random(TWO_PI);
    float speed = random(1, 2);
    vx = cos(a)*speed;
    vy = sin(a)*speed;

    isSecondImage = false;
    c = sa1.get(int(x), int(y));  // default is first picture
  }

  void display() {

    if (isSecondImage) {
      for (int i = 0; i < 100; i++) {
        c = sa2.get(int(x), int(y));  // i use the "get" function to access my second image's pixel values
        noStroke();
        fill(c, 50);
        ellipse(x, y, r, r);

        x = mouseX+(cos(random(TWO_PI)*random(1,2))*random(1, 100));
        y = mouseY+(sin(random(TWO_PI)*random(1,2))*random(1, 100));
        
        // x = mouseX+vx*random(1, 100);
        //y = mouseY+vy*random(1, 100);
      }
    } else {
      for (int i = 0; i < 100; i++) {
        c = sa1.get(int(x), int(y));
        noStroke();
        fill(c, 50);
        ellipse(x, y, r, r);

        x = random(width);
        y = random(height);
      }
    }
  }
}