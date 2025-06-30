function showCardRandom() {
  let numeros = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
  let simbolos = ["♥", "♠", "♣", "♦"];
  
  let numero = numeros[Math.floor(Math.random() * numeros.length)];
  let simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];

  document.getElementById("number").textContent = numero;
  document.getElementById("symbolTop").textContent = simbolo;
  document.getElementById("symbolBottom").textContent = simbolo;

  if (simbolo === "♥" || simbolo === "♦") {
    document.getElementById("card").style.color = "red";
  }  else {
    document.getElementById("card").style.color = "black";
  }
}
