const LETRA = document.getElementById("letra");
const RESPUESTA = document.getElementById("resultado");

function validar() {
  if (LETRA.value === "S" || LETRA.value === "N" || LETRA.value === "s" || LETRA.value === "n") {
    RESPUESTA.innerHTML = `<h3>Correcto!</h3>`;
  } else {
    RESPUESTA.innerHTML = `<h3>Incorrecto!</h3>`;
  }
}

function borrar() {
  let edad = document.getElementById("letra");
  let respuesta = document.getElementById("resultado");
  edad.value = "";
  respuesta.innerHTML = "";
}
