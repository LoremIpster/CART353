var rg;
var bg;
var ltr;
var timer;
var maxTime;
var start;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  bg = new Colors(2, 220, 500);
  ltr = new Letters(window.innerWidth/4, 150, 55);

  maxTime = 10;
  timer = maxTime;

  rg = new RiGrammar();
  rg.addRule('<start>','<1> | <2> | <3> | <4> | <5> | <6>');

  rg.addRule('<1>','<v_impe> ce que ça fait quand ça arrive ici. <v_impe> à cette sensation des <n_fp> qui ramollissent en toi, profite de cette émotion délicieuse, <v_impe>. <v_impe>. Ce n’est pas fini. ça va <v_infi> encore.');
  rg.addRule('<2>','laisse ton ventre <v_infi> à ce <n_ms> <adj_ms> qui, depuis si longtemps, ne te tombait plus dessus, <v_impe> de ces <n_mp> de <n_fs> que tu n’<v2s_impa> plus et qui te donnent la chair de poule et qui ouvrent sans effort ton <n_ms> à cette <n_fs> qui est <adj_ms> et que tu ne <v2s_impa> plus, il n’est même plus question de <n_ms>, nous sommes de l’autre côté maintenant, tout ça ne fait que <v_infi> mais tu es déjà <v_pc> pour toujours, <v_impe>.');
  rg.addRule('<3>','n’essaie pas encore d’affirmer <n_ms>, <v_impe> plus loin encore, <v_impe>, voilà, tu es <adj_ms>, <v_impe>, <v_impe>, tu es <adj_ms>.');
  rg.addRule('<4>','maintenant surtout ne te retiens pas, laisse-toi <v_infi> par ce <n_ms> exquis qui valse de <n_mp> aussi colorés que les <n_mp> de la jungle, <v_impe> pendant des jours, <v_impe> en plein soleil, et quand tu en auras assez tu te <v2s_fut> encore et tu <v2s_fut> encore et tu <v2s_fut> encore. je n’en ai pas <v_pc> avec toi. tu vois ? Il y a plein de <n_fp> intéressantes sur le chemin.');
  rg.addRule('<5>','ne va pas te dépêcher à <v_infi>. une seule règle : ne pas <v_infi> par la <n_fs>. on regarde cet homme qu’on aime et il ne nous appartient pas et il ne nous appartiendra jamais et il s’appartient et il est <adj_ms> et <adj_ms>, il est <adj_ms>, maintenant, il est <adj_ms> et peut-être pas plus tard et c’est maintenant et pas demain qu’il nous faut <v_infi> de lui.');
  rg.addRule('<6>','il n’est pas un <n_ms> dans le salon de notre vie <adj_fs>, il n’est pas un <n_ms> dans notre parti, il n’est pas quelque chose qu’il faille <v_infi> et <v_infi> quelque part comme un <n_ms> empaillé. à quoi bon <v_infi> du futur en s’entourant de toutes sortes de <n_fp> si nous sommes incapables de <v_infi> de la présence de l’autre aujourd’hui.');
  rg.addRule('<7>','pourquoi vouloir être le <n_ms> ? Pourquoi t’en assurer jusqu’à <v_infi> secrètement dans mes <n_mp> comme si tu étais la NSA ? si je suis <adj_ms> et que je suis mes <n_mp>, tu me trouveras plus <adj_fs>, plus <adj_fs>, plus <adj_fs>. plus <adj_fs>. tu m’aimeras et me <v2s_fut> encore davantage. pourquoi me demander de rendre les armes et d’abandonner la <n_fs> que j’ai de te <v_infi>?');
  rg.addRule('<8>','les <n_fp> amoureuses dans lesquelles je <v2s_impa> répondaient toutes à ma quête d’un partage entre deux <n_mp> qui serait absolument <adj_ms> et <adj_ms>. au début, j’<v2s_impa> que cela était compatible avec le <n_ms>. mais puisque j’enchainais les <n_fp> de trois ans en trois ans, j’ai baissé mes <n_fp>, dans l’espoir que mes <n_fp> tiennent. et mon <n_ms> s’est tordu.');
  rg.addRule('<9>','ce n’est pas la <n_fs> de l’union qui est importante, encore moins sa <n_fs>. c’est sa <n_fs> dans le présent, c’est sa <n_fs> humaine, c’est cet aliment infiniment <adj_fs> à l’humain que l’union porte en elle, cet aliment de cohumanité, de <n_fs> qui se lie en direct, l’aliment les autres sans lequel nous ne serions pas des <n_mp>.');

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

  rgResult = rg.expand();
  console.log(rgResult);
}

function draw() {
  if (start) {
    bg.update();
    bg.timer();
  }
}

function keyPressed(){
  bg.randomize();
  ltr.type();
  timer = maxTime;
  start = true;
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
    //this.rgResult;
    this.lines = [];

    rg = new RiGrammar();
    rg.addRule('<start>','<1> | <2> | <3> | <4> | <5> | <6>');

    rg.addRule('<1>','<v_impe> ce que ça fait quand ça arrive ici. <v_impe> à cette sensation des <n_fp> qui ramollissent en toi, profite de cette émotion délicieuse, <v_impe>. <v_impe>. Ce n’est pas fini. ça va <v_infi> encore.');
    rg.addRule('<2>','laisse ton ventre <v_infi> à ce <n_ms> <adj_ms> qui, depuis si longtemps, ne te tombait plus dessus, <v_impe> de ces <n_mp> de <n_fs> que tu n’<v2s_impa> plus et qui te donnent la chair de poule et qui ouvrent sans effort ton <n_ms> à cette <n_fs> qui est <adj_ms> et que tu ne <v2s_impa> plus, il n’est même plus question de <n_ms>, nous sommes de l’autre côté maintenant, tout ça ne fait que <v_infi> mais tu es déjà <v_pc> pour toujours, <v_impe>.');
    rg.addRule('<3>','n’essaie pas encore d’affirmer <n_ms>, <v_impe> plus loin encore, <v_impe>, voilà, tu es <adj_ms>, <v_impe>, <v_impe>, tu es <adj_ms>.');
    rg.addRule('<4>','maintenant surtout ne te retiens pas, laisse-toi <v_infi> par ce <n_ms> exquis qui valse de <n_mp> aussi colorés que les <n_mp> de la jungle, <v_impe> pendant des jours, <v_impe> en plein soleil, et quand tu en auras assez tu te <v2s_fut> encore et tu <v2s_fut> encore et tu <v2s_fut> encore. je n’en ai pas <v_pc> avec toi. tu vois ? Il y a plein de <n_fp> intéressantes sur le chemin.');
    rg.addRule('<5>','ne va pas te dépêcher à <v_infi>. une seule règle : ne pas <v_infi> par la <n_fs>. on regarde cet homme qu’on aime et il ne nous appartient pas et il ne nous appartiendra jamais et il s’appartient et il est <adj_ms> et <adj_ms>, il est <adj_ms>, maintenant, il est <adj_ms> et peut-être pas plus tard et c’est maintenant et pas demain qu’il nous faut <v_infi> de lui.');
    rg.addRule('<6>','il n’est pas un <n_ms> dans le salon de notre vie <adj_fs>, il n’est pas un <n_ms> dans notre parti, il n’est pas quelque chose qu’il faille <v_infi> et <v_infi> quelque part comme un <n_ms> empaillé. à quoi bon <v_infi> du futur en s’entourant de toutes sortes de <n_fp> si nous sommes incapables de <v_infi> de la présence de l’autre aujourd’hui.');
    rg.addRule('<7>','pourquoi vouloir être le <n_ms> ? Pourquoi t’en assurer jusqu’à <v_infi> secrètement dans mes <n_mp> comme si tu étais la NSA ? si je suis <adj_ms> et que je suis mes <n_mp>, tu me trouveras plus <adj_fs>, plus <adj_fs>, plus <adj_fs>. plus <adj_fs>. tu m’aimeras et me <v2s_fut> encore davantage. pourquoi me demander de rendre les armes et d’abandonner la <n_fs> que j’ai de te <v_infi>?');
    rg.addRule('<8>','les <n_fp> amoureuses dans lesquelles je <v2s_impa> répondaient toutes à ma quête d’un partage entre deux <n_mp> qui serait absolument <adj_ms> et <adj_ms>. au début, j’<v2s_impa> que cela était compatible avec le <n_ms>. mais puisque j’enchainais les <n_fp> de trois ans en trois ans, j’ai baissé mes <n_fp>, dans l’espoir que mes <n_fp> tiennent. et mon <n_ms> s’est tordu.');
    rg.addRule('<9>','ce n’est pas la <n_fs> de l’union qui est importante, encore moins sa <n_fs>. c’est sa <n_fs> dans le présent, c’est sa <n_fs> humaine, c’est cet aliment infiniment <adj_fs> à l’humain que l’union porte en elle, cet aliment de cohumanité, de <n_fs> qui se lie en direct, l’aliment les autres sans lequel nous ne serions pas des <n_mp>.');

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
        console.log(this.inlineY);
        this.inlineY += 15;
        this.charCount = 0;
      }if (this.inlineY >= 500) {
        this.inlineY = 150;
        this.charCount = 0;

        console.log(this.rgResult);
      }
      textSize(12);
      textFont('Helvetica Neue');
      text(this.message.charAt(this.j),
          this.x*this.charCount+this.inlineX,
          this.y*this.i+this.inlineY);
      this.j++;
      this.charCount++;
    } else {
      this.rgResult = rg.expand();
      this.message = this.rgResult;

      this.j=0;
      this.i++;
    }
  }
}
