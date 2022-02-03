class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    
    this.greeting = createElement("h2");

    this.title = createElement("h1");
  }

  setElementsPosition() {
    
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.title.position(width / 2 - 290, height / 2 - 300);
    this.title.html("Robber's Escape");
  }

  setElementsStyle() {
    
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.title.class("title");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.title.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
