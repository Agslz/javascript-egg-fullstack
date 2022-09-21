const PALABRA = document.getElementById("palabra");
const RESULTADO = document.getElementById("resultado");

const invertirCadena = (string) => {
  return string.split("").reverse().join("");
};

function mostrar() {
  RESULTADO.innerHTML = invertirCadena(PALABRA.value);
}

function borrar() {
  let PALABRA = document.getElementById("palabra");
  let RESULTADO = document.getElementById("resultado");
  PALABRA.value = "";
  RESULTADO.innerHTML = "";
}
