int i=0;
void setup() {
  size(900, 900);
  background(255);
}
void draw() {
  noStroke();
  fill(i%333, i%92, 125, 10);
  translate(450, 450);
  rotate(i++);
  for (int j = 0; j < 10000; j++) {
    rect(i%333, 0, i%33, 5+i%10);
  }
  println(i);
}