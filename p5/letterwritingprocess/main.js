var rg;
var bg;
var ltr;
var timer;
var maxTime;
var hasStarted;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  bg = new Colors(2, 220, 500);
  ltr = new Letters(window.innerWidth/4, 150, 55);

  maxTime = 10;
  timer = maxTime;
}

  /*
    once a key has been stroked, at every frame, i draw an ellipse, and
    start the inaction countdown.
  */
function draw() {
  if (hasStarted) {
    bg.update();
    bg.timer();
  }
}

  /*
    at each key pressed, I select another color for the ellipses,
    which gives the multicolour visuals if the user types too fast,
    or the saturated visuals if the user types slower. The timer measuring
    inaction is also reset at each key pressed.
  */
function keyPressed(){
  bg.shuffleColor();
  ltr.type();
  timer = maxTime;
  hasStarted = true;
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

  /*
    the background simply consists of a series of ellipses drawn
    with a very large diameter (500) and very low alpha (2).
  */
  update(){
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipse(random(0,window.innerWidth), random(0,window.innerHeight),this.d);
  }

  /*
    current color of the generated ellipses
  */
  shuffleColor(){
    this.r = int(random(0,255));
    this.g = int(random(0,255));
    this.b = int(random(0,255));
  }

  /*
    resets the canvas if the user is inactive for too long.
  */
  timer(){
    if (timer <= 0) {
      bg.monochrome();
    } else if(frameCount % 60 == 0 && timer > 0){
      timer --;
    }
  }

  /*
    fades out the canvas.
  */
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

    this.inlineX = inlineX;         // left indent
    this.inlineY = inlineY;         // space between each line
    this.textBounds = textBounds;   // number of words before incrementing indent
    this.charCount = 0;             // number of typed characters before indentation
    this.message = "";              // string that will be typed out char by char
    this.lines = [];                // group of strings required to type out the paragraph

    rg = new RiGrammar();           // variable that will hold my generated text

    /*
    the program will print out one out of nine possible paragraphs
    */
    rg.addRule('<start>','<1> | <2> | <3> | <4> | <5> | <6> | <7> | <8> | <9>');

    /*
      each paragraph contains a few sentences in which I removed most
      of the nouns, verbs and adjectives. The removed words have been
      replaced by a tag that refers to the section below.
    */
    rg.addRule('<1>','<v_impe> ce que ça fait quand ça arrive ici. <v_impe> à cette sensation des <n_fp> qui ramollissent en toi, profite de cette émotion délicieuse, <v_impe>. <v_impe>. Ce n’est pas fini. ça va <v_infi> encore.');
    rg.addRule('<2>','laisse ton ventre <v_infi> à ce <n_ms> <adj_ms> qui, depuis si longtemps, ne te tombait plus dessus, <v_impe> de ces <n_mp> de <n_fs> que tu n’<v2s_impa> plus et qui te donnent la chair de poule et qui ouvrent sans effort ton <n_ms> à cette <n_fs> qui est <adj_ms> et que tu ne <v2s_impa> plus, il n’est même plus question de <n_ms>, nous sommes de l’autre côté maintenant, tout ça ne fait que <v_infi> mais tu es déjà <v_pc> pour toujours, <v_impe>.');
    rg.addRule('<3>','n’essaie pas encore d’affirmer <n_ms>, <v_impe> plus loin encore, <v_impe>, voilà, tu es <adj_ms>, <v_impe>, <v_impe>, tu es <adj_ms>.');
    rg.addRule('<4>','maintenant surtout ne te retiens pas, laisse-toi <v_infi> par ce <n_ms> exquis qui valse de <n_mp> aussi colorés que les <n_mp> de la jungle, <v_impe> pendant des jours, <v_impe> en plein soleil, et quand tu en auras assez tu te <v2s_fut> encore et tu <v2s_fut> encore et tu <v2s_fut> encore. je n’en ai pas <v_pc> avec toi. tu vois ? Il y a plein de <n_fp> intéressantes sur le chemin.');
    rg.addRule('<5>','ne va pas te dépêcher à <v_infi>. une seule règle : ne pas <v_infi> par la <n_fs>. on regarde cet homme qu’on aime et il ne nous appartient pas et il ne nous appartiendra jamais et il s’appartient et il est <adj_ms> et <adj_ms>, il est <adj_ms>, maintenant, il est <adj_ms> et peut-être pas plus tard et c’est maintenant et pas demain qu’il nous faut <v_infi> de lui.');
    rg.addRule('<6>','il n’est pas un <n_ms> dans le salon de notre vie <adj_fs>, il n’est pas un <n_ms> dans notre parti, il n’est pas quelque chose qu’il faille <v_infi> et <v_infi> quelque part comme un <n_ms> empaillé. à quoi bon <v_infi> du futur en s’entourant de toutes sortes de <n_fp> si nous sommes incapables de <v_infi> de la présence de l’autre aujourd’hui.');
    rg.addRule('<7>','pourquoi vouloir être le <n_ms> ? Pourquoi t’en assurer jusqu’à <v_infi> secrètement dans mes <n_mp> comme si tu étais la NSA ? si je suis <adj_ms> et que je suis mes <n_mp>, tu me trouveras plus <adj_fs>, plus <adj_fs>, plus <adj_fs>. plus <adj_fs>. tu m’aimeras et me <v2s_fut> encore davantage. pourquoi me demander de rendre les armes et d’abandonner la <n_fs> que j’ai de te <v_infi>?');
    rg.addRule('<8>','les <n_fp> amoureuses dans lesquelles je <v2s_impa> répondaient toutes à ma quête d’un partage entre deux <n_mp> qui serait absolument <adj_ms> et <adj_ms>. au début, j’<v2s_impa> que cela était compatible avec le <n_ms>. mais puisque j’enchainais les <n_fp> de trois ans en trois ans, j’ai baissé mes <n_fp>, dans l’espoir que mes <n_fp> tiennent. et mon <n_ms> s’est tordu.');
    rg.addRule('<9>','ce n’est pas la <n_fs> de l’union qui est importante, encore moins sa <n_fs>. c’est sa <n_fs> dans le présent, c’est sa <n_fs> humaine, c’est cet aliment infiniment <adj_fs> à l’humain que l’union porte en elle, cet aliment de cohumanité, de <n_fs> qui se lie en direct, l’aliment les autres sans lequel nous ne serions pas des <n_mp>.');

    /*
      each tag refers to a group of words (n_ms == noun, masculine, singular).
      Each group of words defines the different possibilities that can populate the tag
    */
    rg.addRule('<n_ms>', 'rire | regard | courage | quelque chose | sommeil | meuble | atout | animal | seul et unique | couple | ventre');
    rg.addRule('<n_fs>', 'décompression | beauté | peur | force | nature | durée | richesse | touffeur | meute');
    rg.addRule('<n_mp>', 'soupirs | rêves | oiseaux | courriels | désirs | humains | couple');
    rg.addRule('<n_fp>', 'choses | règles | relations | faillites | attentes | frontières | couples');
    rg.addRule('<adj_ms>', 'libre | partout | magnifique | exquis | là | lucide | vrai');
    rg.addRule('<adj_fs>', 'organisée | libre | pleine | impressionnante | belle | déstabilisante | nécessaire');
    rg.addRule('<v_infi>', 'lever | s’abandonner | commencer | affirmer | avaler | arriver | se laisser emporter | jouir | arrêter | installer | s’assurer | profiter | fouiller | renverser | bouleverser');
    rg.addRule('<v_impe>', ' écoute | relâche | attache | délecte | abandonne | jouis | dors | attends');
    rg.addRule('<v_pc>', 'transformé | terminé');
    rg.addRule('<v2s_impa>', 'espérais | voyais | plongeais | croyais');
    rg.addRule('<v2s_fut>', 'nourriras |  jouiras | dormiras | respecteras');

    /*
      the expand() function generates a series of paragraphs with filled-out tags,
      I then assign the result (var rgResult) to the message to be typed (var message)
    */
    this.rgResult = rg.expand();
    console.log(this.rgResult);
    this.message = this.rgResult;
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
        /*
        when i hit the text bound (55 words), I reset the next
        word position, and indent the Y inline.
        */
        this.inlineY += 15;
        this.charCount = 0;
      }if (this.inlineY >= 500) {
        /*
        when the inline is close to the edge of the screen,
        I reset it closer to the top.
        */
        this.inlineY = 150;
        this.charCount = 0;
      }
      textSize(12);
      textFont('Helvetica Neue');
      /*
        put the current generated string's next character
        at position 'j', then increment the sentence count
        to load up the next character to be typed.
      */
      text(this.message.charAt(this.j),
          this.x*this.charCount+this.inlineX,
          this.y*this.i+this.inlineY);
      this.j++;
      this.charCount++;
    } else {
      /*
      this is detecting when then user is at the end of the paragraph.
      I re-expand my lexicon to create a new sentence and load it into
      the message string and reset the word count.
      */
      this.rgResult = rg.expand();
      this.message = this.rgResult;
      this.j=0;
      this.i++;
    }
  }
}
