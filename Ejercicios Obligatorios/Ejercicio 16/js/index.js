function mostrarArrays() {
  let array1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  let array2 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

  Swal.fire(
    `El valor del primer Array es: ${array1} <br> El valor del segundo Array es: ${array2}`
  );
}
