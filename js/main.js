
$(document).ready(function() {

  var size = {width:1300,height:750};

  var jugador1 = new Jugador(70, 0,25, [81,65],size); // Q,A
  var jugador2 = new Jugador(1200, 500, 25, [38,40],size); // Arrow UP, Aqrrow Down
  var pelota= new Pelota(650,350,8,8,size);
  $(document).keydown(function(e) {
     
      jugador1.key(e.keyCode);
      jugador2.key(e.keyCode);
  });
// function checkCollision(){

//   if (jugador1.x < pelota.x + pelota.width  && jugador1.x + jugador1.width  > pelota.x &&
//     jugador1.y < pelota.y + pelota.height && jugador1.y + jugador1.height > pelota.y) {
// // The objects are touching
// }
//   if(jugador2.x < pelota.x + pelota.width  && jugador2.x + jugador2.width  > pelota.x &&
//     jugador2.y < pelota.y + pelota.height && jugador2.y + jugador2.height > pelota.y) {
// // The objects are touching
// }
// }


  setInterval(update, 1000 / 60);
  function update() {
    jugador1.render();
    jugador2.render();
    pelota.move();
    pelota.render();
    // pelota.move();
  } 

});

