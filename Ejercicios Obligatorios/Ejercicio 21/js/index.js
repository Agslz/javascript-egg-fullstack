const Persona = {
  nombre: "nombre",
  edad: "edad",
  sexo: "sexo",
  peso: "peso",
  altura: "altura",
};

function mostrarDatos() {
  Swal.fire(`Los atributos son: <br> ${Object.values(Persona)}`);
}
