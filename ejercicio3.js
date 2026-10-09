// Lógica de Negocio Automática — Plataforma de Cursos

function Estudiante(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;

    this.aprobado = this.nota >=3.0;

    this.mostrarResultado = function() {
        if (this.aprobado) {
            return `El/la estudiante ${this.nombre} ha aprobado el curso de ${this.curso} con una nota de ${this.nota}.`;
           } else {
            return `El/la estudiante ${this.nombre} NO ha aprobado el curso de ${this.curso} con una nota de ${this.nota}.`;
        }
    }
}

const estudiante1 = new Estudiante("Laura", "JavaScript", 4.5);
const estudiante2 = new Estudiante("Carlos", "Java", 2.8);
const estudiante3 = new Estudiante("Ana", "Bases de datos", 3.0);
const estudiante4 = new Estudiante("David", "Git y GitHub", 1.9);

console.log(estudiante1.mostrarResultado());
console.log(estudiante2.mostrarResultado());
console.log(estudiante3.mostrarResultado());
console.log(estudiante4.mostrarResultado());
