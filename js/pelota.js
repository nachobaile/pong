function Pelota(x, y, sX, sY,size) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.size = size;
    this.height=35;
    this.width=35;
    this.element = $("<img>").attr("class", "pelota");
    this.element.css({ top: this.y, left: this.x});
    $("#pantalla").append(this.element);
  }

  Pelota.prototype.render = function() {
    this.element.css({ top: this.y });
  }

  Pelota.prototype.switchDirection = function(){
    this.speedX *= -1
  }

  // Pelota.prototype.move = function(){
  //   console.log('me muevo')
  //   this.element.css({top:this.y--,left: this.x++})
  // }
  Pelota.prototype.move = function(){
    if(this.x >= $("#pantalla").width()-35 || this.x <= 0){
      this.switchDirection()
    }
    if(this.y >= $("#pantalla").height()-35 || this.y <= 0){
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
    this.element.css({top:this.y, left:this.x});
  }

  Pelota.prototype.scoreGoal = function (){
    return this.x < 1
  }
  Pelota.prototype.scoreGoal1 = function (){
    return this.x > ($("#pantalla").width() - this.width - 1)
  }
  
  //    Pelota.prototype.move = function(){
     
// }