const array1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
const array2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

function mostrarArrays() {
  Swal.fire(
    `El valor del primer Array es: ${array1} <br> El valor del segundo Array es: ${array2}`
  );
}

function deleteLast2() {
  array1.splice(8, 10);
  array2.splice(8, 10);
  Swal.fire(
    `El valor del primer Array es: ${array1} <br> El valor del segundo Array es: ${array2}`
  );
}
