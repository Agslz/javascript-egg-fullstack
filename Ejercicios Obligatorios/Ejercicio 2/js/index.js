const RADIO = document.getElementById("radio");
const RESULTADO = document.getElementById("resultado");

function calcularArea(RADIO) {
  return Math.PI * Math.pow(RADIO.value, 2);
}

function calcularPerimetro(RADIO) {
  return 2 * Math.PI * RADIO.value;
}

function result() {
  RESULTADO.innerHTML = `<h3>El area es: ${calcularArea(RADIO)}</h3>
    <h3>El perimetro es: ${calcularPerimetro(RADIO)} </h3>`;
}

function borrar() {
  let radio = document.getElementById("radio");
  let resultado = document.getElementById("resultado");
  radio.value = "";
  resultado.innerHTML = "";
}
