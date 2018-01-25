var marcador = 0;

$(document).ready(function() {
  var size = { width: 1300, height: 750 };

  var jugador1 = new Jugador(70, 0, 25, [81, 65], size); // Q,A
  var jugador2 = new Jugador(1200, 500, 25, [38, 40], size); // Arrow UP, Aqrrow Down
  var pelota = new Pelota(650, 350, 8, 8, size);
  var score = new Score(50, 50,"contador");
  var score1 = new Score(1230, 500,"contador1");
  $(document).keydown(function(e) {
    jugador1.key(e.keyCode);
    jugador2.key(e.keyCode);
  });

  setInterval(update, 1000 / 60);
  function update() {
    jugador1.render();
    jugador2.render();
    pelota.move();
    pelota.render();
    score.render();
    // score1.render();

    // if (pelota.x <= Jugador.width+Jugador.x) {
    //   if (pelota.y > jugador1.y &&
    //            pelota.y < jugador + jugador.height) {
    //       leftSpeedOfBall = -leftSpeedOfBall;
    //   } else {
    //       score++;
    // restart();

    // if("condición para que suba el marcador")

    checkGoal();
    checkCollision();
  }

  function checkGoal() {
    if (pelota.scoreGoal()) {
      score.goal();
    }
    if (pelota.scoreGoal1()) {
      console.log("pajarito");
      score1.goal1();
    }
  }

  function checkCollision() {
    if (
      jugador1.x < pelota.x + pelota.width &&
      jugador1.x + jugador1.width > pelota.x &&
      jugador1.y < pelota.y + pelota.height &&
      jugador1.y + jugador1.height > pelota.y
    ) {
      pelota.switchDirection();
    }
    if (
      jugador2.x < pelota.x + pelota.width &&
      jugador2.x + jugador2.width > pelota.x &&
      jugador2.y < pelota.y + pelota.height &&
      jugador2.y + jugador2.height > pelota.y
    ) {
      // The objects are touching
      pelota.switchDirection();
    }
    function start() {
      this.jugador1 = new Jugador(70, 0, 25, [81, 65], size);
      this.jugador2 = new Jugador(1200, 500, 25, [38, 40], size);
      this.pelota = new Pelota(650, 350, 8, 8, size);
    }

    function restart() {
      this.jugador1 = new Jugador(70, 0, 25, [81, 65], size);
      this.jugador2 = new Jugador(1200, 500, 25, [38, 40], size);
      this.pelota = new Pelota(650, 350, 8, 8, size);
    }
  }
});
