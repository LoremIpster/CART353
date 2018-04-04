import rita.*;
import java.util.*;

import fontastic.*;
import geomerative.*;

//Fontastic f = new Fontastic(this, "HelveticaNeue-Bold-02.ttf");

PFont font;
String[] lines;

Background bg;
Letters l;

boolean hasStarted;

void setup() {
  size(1024, 768);
  background(255);

  bg = new Background(500, 2);
  l = new Letters(width/4, 200, 55);

  font = loadFont("Meiryo-12.vlw");
  textFont(font, 12);
  String str = ""+"text.md";
  lines = loadStrings(str);
  textAlign(CENTER, CENTER);
}

void draw() {
  if (hasStarted) {
    bg.update();
  }
}

void keyPressed() {
  hasStarted = true;

  l.type();
  bg.randomize();
}