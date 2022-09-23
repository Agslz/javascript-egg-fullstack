const array = [true, 5, false, "hola", "adios", 2];

let textoMayor = () => (array[3].length > array[4] ? array[3] : array[4]);
let booleanTrue = () => (array[0] || array[2] ? true : false);
let booleanFalse = () => (array[0] && array[2] ? true : false);
let suma = () => array[1] + array[5];
let resta = () => array[1] - array[5];
let division = () => array[1] / array[5];
let multiplicacion = () => array[1] * array[5];

function mostrarDatos() {
  Swal.fire(`El texto mayor es: ${textoMayor()}<br>
  Operadores necesarios ${booleanTrue()} y ${booleanFalse()} <br>
  La suma es: ${suma()} <br>
  La resta es: ${resta()} <br>
  La división es: ${division()} <br>
  La multiplicación es: ${multiplicacion()}`);
}

function mostrarArray() {
  Swal.fire(`El array es: [${array}]`);
}
