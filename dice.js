var randonNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randonNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randonNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randonNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML = "🚩Naveen Wins"
}
else if(randonNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML = "Neeraj Wins🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
} 