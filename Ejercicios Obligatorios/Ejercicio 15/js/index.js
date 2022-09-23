class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
}

const CrearCirculo = () => {
  let formulario = document.getElementById("formulario");
  return new Circulo(formulario.radio.value);
};

function calcularArea(Circulo) {
  return Math.PI * Math.pow(Circulo, 2);
}

function calcularPerimetro(Circulo) {
  return 2 * Math.PI * Circulo;
}

function mostrarDatos() {
  const circ = CrearCirculo();
  Swal.fire(`El perimetro del circulo es: ${calcularPerimetro(circ.radio)} <br>
  El area del circulo es: ${calcularArea(circ.radio)}`);
}
