let matriz = [[3], [6], [9], [12], [15]];

matriz.splice(0, 1);
matriz.splice(4, 0, "18");


function mostrarArray() {
  Swal.fire(`El array es: ${matriz}`);
}
