const VALOR_LIMITE = document.getElementById("limite");
const RESPUESTA = document.getElementById("resultado");

function calcular() {
  let suma = 0;
  while (suma < VALOR_LIMITE.value) {
    let limite = prompt("Ingrese numeros a sumar");
    suma = parseInt(suma) + parseInt(limite);
  }
  RESPUESTA.innerHTML = "La suma de los numeros ingresados es: " + suma;
}

function borrar() {
  let VALOR_LIMITE = document.getElementById("limite");
  let RESPUESTA = document.getElementById("resultado");
  VALOR_LIMITE.value = "";
  RESPUESTA.innerHTML = "";
}
