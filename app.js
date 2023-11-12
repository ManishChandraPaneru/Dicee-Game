let player1=Math.floor(Math.random()*6+1);
console.log(player1)
let player2=Math.floor(Math.random()*6+1);
console.log(player2)


if(player1==1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if (player1 == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (player1 == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (player1 == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (player1 == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}
if (player2 == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (player2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (player2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (player2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (player2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


if (player1 > player2) {
  document.querySelector("h1").innerHTML="Player One Wins!🎆🎊"
}
if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player Two Wins!🎆🎊";
}
if (player1 == player2) {
  document.querySelector("h1").innerHTML="Tie!!😶‍🌫️"
}