const NUMERO = document.getElementById("numero");
const RESULTADO = document.getElementById("resultado");

function calcular() {
    if (NUMERO.value % 2 == 0){
        RESULTADO.innerHTML = "El numero ingresado es par"
    }else{
        RESULTADO.innerHTML = "El numero ingresado es impar"
    }
}

function borrar() {
  let NUMERO = document.getElementById("numero");
  let RESULTADO = document.getElementById("resultado");
  NUMERO.value = "";
  RESULTADO.innerHTML = "";
}
