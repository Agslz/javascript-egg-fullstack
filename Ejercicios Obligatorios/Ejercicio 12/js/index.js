const INGRESO = document.getElementById("palabra");
const RESULTADO = document.getElementById("resultado");

const tipo = (INGRESO) => {
  return typeof INGRESO;
};

const mostrarMensaje = () => {
  return (RESULTADO.innerHTML = `El tipo de dato es ${tipo(INGRESO.value)}`);
};

function borrar() {
  let PALABRA = document.getElementById("palabra");
  let RESULTADO = document.getElementById("resultado");
  PALABRA.value = "";
  RESULTADO.innerHTML = "";
}
