class Libro {
  constructor(isbn, titulo, autor, nPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.nPaginas = nPaginas;
  }
}

const CrearLibro = () => {
  let formulario = document.getElementById("formulario");
  return new Libro(
    formulario.isbn.value,
    formulario.titulo.value,
    formulario.autor.value,
    formulario.nPaginas.value
  );
};

function mostrarDatos() {
  const Librito = CrearLibro();
  Swal.fire(
    `El numero de ISBN es: ${Librito.isbn} <br> El titulo del libro es: ${Librito.titulo} <br> El autor del libro es: ${Librito.autor} <br> La cantidad de paginas es: ${Librito.nPaginas}`
  );
}