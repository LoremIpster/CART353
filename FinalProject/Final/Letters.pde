
class Letters {
  int i=0, j=0;
  int x=10, y=15;
  int charCount;
  int inlineX = 10;
  int inlineY = 0;
  int textBounds = 55;
  String message;
  

/*
  void draw() {
    translate(0, 20);
    fill(0, 0, 0);
  }

  void mousePressed()
  {
    draw();
  }*/

  void type() {
    if (i<lines.length) {
      message = lines[i];
    }

    //println("inlineX " + inlineX + ", inlineY is " + inlineY);
    if (j < message.length()) {
      if (charCount > textBounds) {
        //println("beep");
        //y += 15;
        //x += 10;
        //inlineX += 10;
        inlineY += 15;
        charCount = 0;
      }
      text(message.charAt(j), x*charCount+inlineX, y*i+inlineY);
      j++;
      charCount++;
    } else { 
      j=0;
      i++;
    }
  }
}