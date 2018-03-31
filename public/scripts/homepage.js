
var x;
var y;
var z;
var a;
var ans;

var v = document.querySelector("#two");
var easyButton = document.querySelector("#seven");
easyButton.addEventListener("click",easyMode);


var hardButton = document.querySelector("#eight");
hardButton.addEventListener("click",colorGen);




var guess = document.querySelector("#colordisp");

// var ans = "rgb(98, 155, 247)";
var colors = [];

var sq = document.querySelectorAll(".squares");

for(var i = 0;i<sq.length;i++)
{
sq[i].addEventListener("click", function(){
if(this.style.backgroundColor==ans)
{
	
	for(var j = 0;j<sq.length;j++){
		sq[j].style.backgroundColor = ans;
	}
}
else
{
	this.style.backgroundColor = "black";
}

});

}







colorGen();



var newcolors = document.querySelector("#two");
newcolors.addEventListener("click",colorGen);



function colorGen(){

x = Math.floor((Math.random()*255)+1);
y = Math.floor((Math.random()*255)+1);
z = Math.floor((Math.random()*255)+1);
a = Math.floor((Math.random()*6)+1);
ans = "rgb("+x+", "+y+", "+z+")";
guess.innerHTML = ans;
for(var i = 0;i<6;i++)
{
     if(i==(a-1))
  {
	colors[i] = ans;
  }
else
{
x = Math.floor((Math.random()*255)+1);
y = Math.floor((Math.random()*255)+1);
z = Math.floor((Math.random()*255)+1);


colors[i] = "rgb("+x+", "+y+", "+z+")";
}
}
for(var i = 0;i<sq.length;i++)
{
sq[i].style.backgroundColor = colors[i];



}
easyButton.classList.remove("ac");
hardButton.classList.add("ac");


}

function easyMode()
{

x = Math.floor((Math.random()*255)+1);
y = Math.floor((Math.random()*255)+1);
z = Math.floor((Math.random()*255)+1);
a = Math.floor((Math.random()*3)+1);
ans = "rgb("+x+", "+y+", "+z+")";
guess.innerHTML = ans;
for(var i = 0;i<3;i++)
{
     if(i==(a-1))
  {
	colors[i] = ans;
  }
else
{
x = Math.floor((Math.random()*255)+1);
y = Math.floor((Math.random()*255)+1);
z = Math.floor((Math.random()*255)+1);


colors[i] = "rgb("+x+", "+y+", "+z+")";
}
}
for(var i = 0;i<3;i++)
{
sq[i].style.backgroundColor = colors[i];
}

for(var i = 3;i<6;i++){
sq[i].style.backgroundColor = "black" ;
}


easyButton.classList.add("ac");
hardButton.classList.remove("ac");


}










































