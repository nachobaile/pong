function Pelota(x, y, speed,size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;

    this.element = $("<div>").attr("class", "pelota");
    this.element.css({ top: this.y, left: this.x });
    $("#pantalla").append(this.element);
  }

  Pelota.prototype.render = function() {
    this.element.css({ top: this.y });
  };
  //    Pelota.prototype.move = function(){
     
// }