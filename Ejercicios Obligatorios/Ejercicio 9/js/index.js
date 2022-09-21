const PALABRA = document.getElementById("palabra");
const RESULTADO = document.getElementById("resultado");

const ponerEspacios = (string) => {
  return string.split("").join(" ");
};

function resultado() {
  RESULTADO.innerHTML = ponerEspacios(PALABRA.value);
}

function borrar() {
  let PALABRA = document.getElementById("palabra");
  let RESULTADO = document.getElementById("resultado");
  PALABRA.value = "";
  RESULTADO.innerHTML = "";
}
