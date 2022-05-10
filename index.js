var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);


var leftDicePicker ="images/dice" + randomNumber1 + ".png";
document.querySelector(".dice .img1").setAttribute("src", leftDicePicker);

var rightDicePicker = "images/dice" + randomNumber2+".png";
document.querySelector(".dice .img2").setAttribute("src", rightDicePicker);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 wins";
}
else{
  document.querySelector("h1").textContent="Draw";
}
