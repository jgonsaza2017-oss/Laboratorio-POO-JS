//  Encapsulamiento de Comportamiento — Veterinaria

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function() {
        return `Hola soy ${this.nombre}, un/a ${this.especie} de ${this.edad} años y peso ${this.peso} kg.`;
    };
}

const mascota1 = new Mascota("Toto", "Perro", 4, 15.5);
const mascota2 = new Mascota("Luna", "Gato", 2, 4.2);
const mascota3 = new Mascota("Roco", "Perro", 6, 28.0);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());