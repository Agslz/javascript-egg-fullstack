const NUMERO1 = document.getElementById("n1");
const NUMERO2 = document.getElementById("n2");
const LETRA = document.getElementById("letra");
const RESPUESTA = document.getElementById("resultado");

function calcular() {
  switch (LETRA.value) {
    case "s":
    case "S":
      RESPUESTA.innerHTML = `La suma de ambos numeros es ${suma(
        NUMERO1,
        NUMERO2
      )}`;
      break;
    case "r":
    case "R":
      RESPUESTA.innerHTML = `La resta de ambos numeros es ${resta(
        NUMERO1,
        NUMERO2
      )}`;
      break;
    case "m":
    case "M":
      RESPUESTA.innerHTML = `La multiplicación de ambos numeros es ${multiplicar(
        NUMERO1,
        NUMERO2
      )}`;
      break;
    case "d":
    case "D":
      RESPUESTA.innerHTML = `${dividir(NUMERO1, NUMERO2)}`;
      break;
    default:
      RESPUESTA.innerHTML = "<h3>Opción ingresada invalida</h3>";
  }
}

function suma(NUMERO1, NUMERO2) {
  return parseInt(NUMERO1.value) + parseInt(NUMERO2.value);
}

function resta(NUMERO1, NUMERO2) {
  return NUMERO1.value - NUMERO2.value;
}

function multiplicar(NUMERO1, NUMERO2) {
  return NUMERO1.value * NUMERO2.value;
}

function dividir(NUMERO1, NUMERO2) {
  if (NUMERO1.value < 0 || NUMERO2.value < 0) {
    return "<h2> No puede ingresar numeros menores a 0</h2>";
  } else {
    return "La división de ambos numeros es " + NUMERO1.value / NUMERO2.value;
  }
}

function borrar() {
  let NUMERO1 = document.getElementById("n1");
  let NUMERO2 = document.getElementById("n2");
  let LETRA = document.getElementById("letra");
  let RESPUESTA = document.getElementById("resultado");
  NUMERO1.value = "";
  NUMERO2.value = "";
  LETRA.value = "";
  RESPUESTA.innerHTML = "";
}
