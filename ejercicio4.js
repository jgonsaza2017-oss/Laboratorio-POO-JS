function Libro(titulo, autor, paginas, prestado = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.prestado = prestado;

    this.prestar = function() {
        if (!this.prestado) {
            this.prestado = true;
            return `El libro "${this.titulo}" ha sido prestado exitosamente.`;
         } else {
             return `Alerta: El libro "${this.titulo}" ya se encuentra prestado actualmente.`;
        }
    };

    this.devolver = function() {
        if(this.prestado) {
            this.prestado = false;
            return ` El libreo "${this.titulo}" ha sido devuelto a la biblioteca correctamente.`;
        }else {
            return ` Alerta: Inconsistencia, el libro "${this.titulo}" no estaba prestado.`;
        }
    };
}

const milibro = new Libro("Cien años de soledad", "Gabriel Garcia Marquez, 417");

console.log(milibro.prestar());
console.log(milibro.prestar());
console.log(milibro.devolver());
console.log(milibro.devolver());