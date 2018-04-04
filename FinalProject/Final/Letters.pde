class Letters {

  int i, j, x, y;
  int charCount;
  int inlineX;
  int inlineY;
  int textBounds;
  String message;

  PFont font;
  String[] lines;
  String str;

  Letters(int newInlineX, int newInlineY, int newTextBounds) {
    i = 0;
    j = 0;
    x = 10;
    y = 10;

    inlineX = newInlineX;
    inlineY = newInlineY;
    textBounds = newTextBounds;

    font = loadFont("Meiryo-12.vlw");
    textFont(font, 12);
    str = ""+"text.md";
    lines = loadStrings(str);
    textAlign(CENTER, CENTER);
  }

  void draw() {
    translate(0, 20);
  }

  void type() {
    fill(0, 0, 0);
    if (i<lines.length) {
      message = lines[i];
    }
    if (j < message.length()) {
      if (charCount > textBounds) {
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