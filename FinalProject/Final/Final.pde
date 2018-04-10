import rita.*;
import java.util.*;
import fontastic.*;
import geomerative.*;

Background bg;
Letters ltr;

boolean hasStarted;
void setup() {
  size(1024, 768);
  background(255);

  bg = new Background(500, 2, 220);
  ltr = new Letters(width/4, 200, 55);

}

void draw() {
  if (hasStarted) {
    bg.update();
  }
}

void keyPressed() {
  hasStarted = true;

  ltr.type();
  bg.randomize();
}

void mousePressed(){
  bg.monochrome();
}