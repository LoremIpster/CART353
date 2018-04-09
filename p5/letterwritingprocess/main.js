var rg;
var bg;
var ltr;
var timer;
var maxTime;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  rg = new RiGrammar();
  rg.loadFrom("grammar.json");
  result = rg.expand();

  bg = new Colors(2, 220, 500);
  ltr = new Letters(window.innerWidth/4, 200, 300);

  maxTime = 10;
  timer = maxTime;
}

function draw() {
  bg.update();
  bg.timer();
}

function keyPressed(){
  bg.randomize();
  ltr.type();
  timer = maxTime;
}

class Colors {

  constructor(alpha, gray, diameter){
    this.a = alpha;
    this.d = diameter;
    this.gray = gray;

    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  update(){
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipse(random(0,window.innerWidth), random(0,window.innerHeight),this.d);
  }

  randomize(){
    this.r = int(random(0,255));
    this.g = int(random(0,255));
    this.b = int(random(0,255));
  }

  timer(){
    if (timer <= 0) {
      bg.monochrome();
    } else if(frameCount % 60 == 0 && timer > 0){
      timer --;
    }
  }

  monochrome(){
    this.r = this.gray;
    this.g = this.gray;
    this.b = this.gray;
  }

}

class Letters {

  constructor(inlineX, inlineY, textBounds){
    this.i = 0;
    this.j = 0;
    this.x = 10;
    this.y = 10;

    this.inlineX = inlineX;
    this.inlineY = inlineY;
    this.textBounds = textBounds;
    this.charCount = 0;
    this.message = "";
    this.lines = [];
    this.str = "";
    this.lines0 = "Écoute ce que ça fait quand ça arrive ici. ";
    this.lines = split(this.lines0, '. ');
    //console.log(this.lines);

  }

  draw() {
    translate(0, 20);
  }

  type() {
    fill(0, 0, 0);
    if (this.i<this.lines.length) {
      this.message = this.lines[this.i];
    }
    if (this.j < this.message.length) {
      if (this.charCount > this.textBounds) {
        this.inlineY += 15;
        this.charCount = 0;
      }
      textSize(12);
      textFont('Helvetica Neue');
      textAlign(CENTER, CENTER);
      text(this.message.charAt(this.j),
          this.x*this.charCount+this.inlineX,
          this.y*this.i+this.inlineY);
          //console.log(this.x*this.charCount+this.inlineX);
          //console.log(this.y*this.i+this.inlineY);
      this.j++;
      this.charCount++;
    } else {
      this.j=0;
      this.i++;
    }
  }
}
