const SUMA = document.getElementById("suma");
const MINIMO = document.getElementById("minimo");
const MAXIMO = document.getElementById("maximo");
const PROMEDIO = document.getElementById("promedio");

function comenzar() {
  let ingreso = prompt("Ingrese un numero");
  let maximo = ingreso;
  let minimo;
  if (ingreso != 0) {
    minimo = ingreso;
  }
  let contador = 0;
  let suma = ingreso;
  while (ingreso != 0) {
    ingreso = prompt("Ingrese un numero");
    if (ingreso > maximo) {
      maximo = ingreso;
    }
    if (ingreso < minimo && ingreso != 0) {
      minimo = ingreso;
    }
    contador++;
    suma = parseInt(suma) + parseInt(ingreso);
  }
  let promedio = suma / contador;
  MAXIMO.innerHTML = `El numero maximo ingresado fue ${maximo}`;
  MINIMO.innerHTML = `El numero minimo ingresado fue ${minimo}`;
  SUMA.innerHTML = `La suma de numeros ingresados es ${suma}`;
  PROMEDIO.innerHTML = `El promedio de los numeros ingresados es ${promedio}`;
}
