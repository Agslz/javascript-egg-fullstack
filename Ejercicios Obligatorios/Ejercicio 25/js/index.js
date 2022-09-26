const NOMBRE = document.getElementById("nombre");
const APELLIDO = document.getElementById("apellido");

function mostrarDatos() {
  Swal.fire(`El nombre ingresado es: ${NOMBRE.value} y el apellido es: ${APELLIDO.value}`);
}
