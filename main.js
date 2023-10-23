//Ipo calc


//Btn Event Listenher
document.getElementById("btn1").addEventListener("click", btn1clicked)

function btn1clicked() {
 //input 
let Radius = +document.getElementById("r-in").value;
let Height = +document.getElementById("h-in").value;
 //process
 let total = ((Radius)** 2 * 3.1415 * (Height));
 //ouput 
 document.getElementById("output").innerHTML = total;
}

//Btn Event Listenher
document.getElementById("btn2").addEventListener("click", btn2clicked)

function btn2clicked() {
 //input 
let Radius = document.getElementById("r-in").value;
let Height = document.getElementById("h-in").value;
 //process
 let total = (2) * (Radius** 2 * 3.1415) + (2) * (3.1415 * Radius * Height)
 //ouput 
 document.getElementById("output").innerHTML = total;
}