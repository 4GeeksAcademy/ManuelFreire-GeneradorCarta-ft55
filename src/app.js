//import "bootstrap";
//import "./style.css";


//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";


function showCardRandom() {
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let simbolos = ["♥", "♠", "♣", "♦"];

  let numero = numeros[Math.floor(Math.random() * numeros.length)];
  let simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];

  document.getElementById("number").textContent = numero;
  document.getElementById("symbolTop").textContent = simbolo;
  document.getElementById("symbolBottom").textContent = simbolo;

  (simbolo === "♥") || (simbolo === "♦") ? document.getElementById("card").style.color = "red" : document.getElementById("card").style.color = "black";
}

function stopInterval() {
  clearInterval(detenerCambio);
}
let counter = 11;
function startInterval() {
  detenerCambio = setInterval(() => {
    counter--;
    document.querySelector("#regresiva").innerHTML = "Cambio de Carta en " + counter

    if (counter === 0) {
      showCardRandom()
      counter = 11;
    } 
  }, 1000);
}
    
let detenerCambio;
let running = true;
let bgColorBtnTime = 

document.querySelector("#btnTime").classList.add("bg-info")
document.getElementById("btnTime").addEventListener("click", () => {
    
  (running) ?  
  (startInterval(),  
  document.querySelector("#btnTime").textContent = "Presiona para Detener") 
  :
  (stopInterval(),
  document.querySelector("#btnTime").textContent = "Presiona para Iniciar")
    
  running = !running;
});

window.onload = () => { 
  showCardRandom()
  stopInterval()
}

function changeDimension() {

  let calcWidth = document.querySelector("#lblWidth")
  let calcHeight = document.querySelector("#lblHeigth")

  document.querySelector("#card").style.width = calcWidth.value + 'px'
  document.querySelector("#card").style.height = calcHeight.value + 'px'

}
