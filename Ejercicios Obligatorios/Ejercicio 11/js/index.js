const PALABRA = document.getElementById("palabra");
const RESULTADO = document.getElementById("resultado");

function palabraMasLarga(string) {
  var palabraMasLarga = string
    .split(" ")
    .reduce(function (longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
  return palabraMasLarga;
}

function mostrar() {
  RESULTADO.innerHTML = `La palabra mas larga es: ${palabraMasLarga(
    PALABRA.value
  )}`;
}

function borrar() {
  let PALABRA = document.getElementById("palabra");
  let RESULTADO = document.getElementById("resultado");
  PALABRA.value = "";
  RESULTADO.innerHTML = "";
}
