const RESULTADO = document.getElementById("resultado");
const BUTTON = document.getElementById("button");

let persona = {
  nombre: "Agustin",
  edad: 20,
  sexo: "Masculino",
  peso: 100,
  altura: "1.90",
};

function mostrar() {
  RESULTADO.innerHTML = `El nombre es: ${persona.nombre} <br> La edad es: ${persona.edad} <br> El sexo es: ${persona.sexo} <br> El peso es: ${persona.peso} <br> La altura es: ${persona.altura}`;
}
