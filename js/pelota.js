function Pelota(x, y, sX, sY,size) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.size = size;
    this.element = $("<div>").attr("class", "pelota");
    this.element.css({ top: this.y, left: this.x});
    $("#pantalla").append(this.element);
  }

  Pelota.prototype.render = function() {
    this.element.css({ top: this.y });
  }

  // Pelota.prototype.move = function(){
  //   console.log('me muevo')
  //   this.element.css({top:this.y--,left: this.x++})
  // }
  Pelota.prototype.move = function(){
    if(this.x >= $("#pantalla").width() || this.x <= 0){
      this.speedX *= -1;
    }
    if(this.y >= $("#pantalla").height() || this.y <= 0){
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.element.css({top:this.y, left:this.x});
  }
  //    Pelota.prototype.move = function(){
     
// }