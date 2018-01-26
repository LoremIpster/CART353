class Particle {
  float x;
  float y;

  color c;  // color
  float r;  // radius
  float a;  // alpha
  boolean isSecondImage;


  Particle() {
    r = 16;
    a = 50;
    isSecondImage = false;
    c = sa1.get(int(x), int(y));  // default is first picture
  }

  void display() {

    if (isSecondImage) {
      for (int i = 0; i < 100; i++) {
        c = sa2.get(int(x), int(y));  // i use the "get" function to access my second image's pixel values
        noStroke();
        fill(c, a);
        ellipse(x, y, r, r);

        x = mouseX+random(1,100)*cos(random(TWO_PI));  // by adding a random number multiplicated by PI, i'm able to achieve a soft rectangular shape
        y = mouseY+random(1,100)*sin(random(TWO_PI));  
        
        // the commented code below was written by Sam Bourgault, who showed me the formula if i wanted an ellipse-shaped mask instead
        // you can uncomment it to see what it does!
        
        /*
        while (sqrt((x-mouseX)*(x-mouseX) + (y-mouseY)*(y-mouseY)) >= 100){
        x = mouseX+random(1,100)*cos(random(TWO_PI));
        y = mouseY+random(1,100)*sin(random(TWO_PI));
        }
        */

      }
    } else {
      for (int i = 0; i < 100; i++) {
        c = sa1.get(int(x), int(y));  // again, i use the "get" function to access the first image's data
        noStroke();
        fill(c, 50);
        ellipse(x, y, r, r);  // an array of 50 ellipses (or "Particles") is refreshing every frames to random x & y coordinates

        x = random(width);
        y = random(height);
      }
    }
  }
}