function Score(x,y){
this.x=x;
this.y=y;
this.countUp=0;
this.element=$("<div>").attr("class","contador").text(this.countUp);
$("#pantalla").append(this.element);
}

Score.prototype.render=function(){

this.element.css({top:this.x,left:this.y});

}

Score.prototype.goal=function(){
    $(".contador").text(this.countUp += 1);
}