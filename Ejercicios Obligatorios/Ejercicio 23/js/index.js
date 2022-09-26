let PARRAFO = document.getElementById("parrafoASeleccionar");
let texto = PARRAFO.innerText;
let textovalue = texto.split(/[\s,\.,\"]+/);

let marcarTexto = () => (
  textovalue.forEach((palabra) => {
    if (palabra.length > 8) {
      texto = texto.split(palabra).join(`<u>${palabra}</u>`);
    }
  }),
  (PARRAFO.innerHTML = texto)
);
