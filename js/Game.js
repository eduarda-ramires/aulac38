class Game {
  constructor() { }

  //Função para pegar (get) informações
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();

    });

  }
  //Função para escrever (white) informações
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  
  //Função para escrever (white) informações
  start() {

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    // posicao car1  width / 2 - 50, height - 100
    
    car1.addImage("car1", );
    car1.scale = ;

    // posicao car2  width / 2 + 100, height - 100
    car2.addImage("car2", );
    car2.scale = ;

    cars = [car1, car2];


  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play() {

    this.handleElements();

    drawSprites();
  }
}
