let rndm1 = Math.random();
let rndm2 = Math.random(); 
let num1 = Math.floor((rndm1*6)+1)
let num2 = Math.floor((rndm2*6)+1)
let str1 = "./images/dice"+ num1 +".png";
let str2 = "./images/dice"+ num2 +".png";
const diece1 = document.querySelector(".img1");
const diece2 = document.querySelector(".img2");
const msg = document.querySelector("h1");
diece1.setAttribute("src", str1);
diece2.setAttribute("src", str2);
if(num1>num2){
    msg.innerHTML = "player 1 is Winner";
}else if(num1 == num2){
    msg.innerHTML = "Draw match";
}else {
    msg.innerHTML = "player 2 is Winner";
}
