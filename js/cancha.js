function Score(x, y, name) {
  this.x = x;
  this.y = y;
  this.countUp = marcador;
  this.score=0;
  this.score1=0;
  this.element = $("<div>")
    .attr("class",name)
    .text(this.countUp);
  $("#pantalla").append(this.element);
  // this.element1 = $("<div>")
  //   .attr("class", "contador1")
  //   .text(this.countUp);
  // $("#pantalla").append(this.element1);

}

Score.prototype.render = function() {
  this.element.css({ top: this.x, left: this.y });
};
// Score.prototype.render = function() {
//   this.element1.css({ top: this.x, left: this.y });
// };
Score.prototype.goal1 = function() {
  $(".contador").text((this.score1 += 1));
};

Score.prototype.goal = function() {
  $(".contador1").text((this.score += 1));
};
