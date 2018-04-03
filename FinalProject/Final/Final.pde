PFont font;
String[] lines;

PShape s;

Letters l;

// bg
int top, left;
//int i;
int d = 500;
int r, g, b;
int limit = 10;


int i=0, j=0;
int x=10, y=15;
int charCount;
int inlineX = 10;
int inlineY = 0;
int textBounds = 55;
String message;

float addX, addY;


void setup() {
  size(1024, 768);
  //background(255);

  font = loadFont("Meiryo-12.vlw");
  textFont(font, 12);
  String str = ""+"text.md";
  lines = loadStrings(str);

  l = new Letters();

  r = 100;
  g = 200;
  b = 250;

  addX = random(100);
  addY = random(100);
}

void draw() {
  //background(255);

  noStroke();
  //fill(random(r), random(g), random(b), 1);
  fill(r, g, b, 2); //yellow
  ellipse(random(0, width), random(0, height), d, d);

  //fill(0, 0, 0, 100);
  //ellipse(random(width/2-limit, width/2+limit), random(height/2-limit, height/2+limit), 1, 1);
  //fill(r, g, b, 100);
  //ellipse(random(width/2-limit, width/2+limit), random(height/2-limit, height/2+limit), 1, 1);

  stroke(0);
  noFill();

  int numPoints = 360;
  PVector position = new PVector(width/2, height/2);
  float angle = 0.0;
  float angleStep = 1.0;
  float outsideRadius = 200.0;

/*
  beginShape(LINES);
  for (int i = 0; i < numPoints; i++ ) {

    float px = position.x + cos(radians(angle)) * outsideRadius + addX; // Make it live-like
    float py = position.y + sin(radians(angle)) * outsideRadius + addY;
    angle += angleStep;        
    vertex(px, py);
    px = position.x + cos(radians(angle));
    py = position.y + sin(radians(angle));
    angle+= angleStep;
  }
  endShape();  
  */

  translate(0, 20);
  fill(0, 0, 0);
}

void keyPressed() {
  //background(r,g,b, 10);
  l.type();

  r = int(random(0, 255));
  g = int(random(0, 255));
  b = int(random(0, 255));
  println("r " + r);
  println("g " + g);
  println("b " + b);

  limit += 10;

  addX = random(100);
  addY = random(100);
}