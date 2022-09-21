const EDAD = document.getElementById("edad");
const RESPUESTA = document.getElementById("resultado");

function validar() {
  if (EDAD.value >= 18) {
    RESPUESTA.innerHTML = `<h3>Usted es mayor de edad</h3>`;
  } else {
    RESPUESTA.innerHTML = `<h3>Usted es menor de edad</h3>`;
  }
}

function borrar() {
  let edad = document.getElementById("edad");
  let respuesta = document.getElementById("resultado");
  edad.value = "";
  respuesta.innerHTML = "";
}
