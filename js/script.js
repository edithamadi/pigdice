var p1='';
var p2='';

//business logic
var Roller=function(dieFace,score,totalScore)
{
  this.score=0;
  this.dieFace=0;
  this.totalScore=0;
}
Roller.prototype.RandomNumber= function ()
{
  return Math.floor((Math.random()*6)+1);
}
Roller.prototype.SumUp= function()
{
  if (this.dieFace===1)
  {
    this.rollOne();
    this.score=0;
   $("#total1").text("The total score is:"+p1.rollOne());
  }
  else {
    return this.score+=this.dieFace;
  }
}
Roller.prototype.rollOne= function ()
{
  return this.totalScore+=this.score;
}
//user interface
$(document).ready(function(){
  $("#begin").click(function () {
    p1= new Roller();
    p2= new Roller();
    alert("Welcome to Pig Dice you can now play!")
  });
  $("#roll1").click(function (event) {
    event.preventDefault();
    p1.dieFace=p1.RandomNumber();
    $("#face1").text("You have rolled:"+p1.dieFace);
    $("#score1").text("The score is:"+p1.SumUp());
  });
  $("#roll2").click(function (event) {
    event.preventDefault();
    p2.dieFace=p2.RandomNumber();
    $("#face2").text("You have rolled:"+p2.dieFace);
    $("#score2").text("The score is:"+p2.SumUp());
  });
  $("#ct").click(function (event) {
    event.preventDefault();
    alert("Your current total is"+ p1.currentTotal());
  });
});
