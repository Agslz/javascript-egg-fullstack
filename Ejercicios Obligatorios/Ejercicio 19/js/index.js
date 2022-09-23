var arrayA = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));
var arrayB = new Array(20);

function mostrarArrayA() {
  Swal.fire(`El array A es: ${arrayA}`);
}

function mostrarArrayAOrdenado() {
  Swal.fire(
    `El array A ordenado es: ${arrayA.sort(function (a, b) {
      return a - b;
    })}`
  );
}

let obtenerDiezValores = () => arrayA.slice(0, 10);

function unirArrays() {
  for (let i = 0; i < arrayB.length; i++) {
    if (i < 10) {
      arrayB[i] = arrayA[i];
    } else {
      arrayB[i] = 0.5;
    }
  }
  return arrayB;
}

function mostrarArrayB() {
  Swal.fire(`El array A es: ${unirArrays()}`);

}
