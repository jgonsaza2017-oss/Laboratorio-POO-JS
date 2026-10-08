// Moldeado de Inventario — Tienda de Tecnología

function computador(marca, procesador, ram, precio){
this.marca = marca;
this.procesador = procesador;
this.ram = ram;
this.precio = precio;
}

const computador1 = new computador("Asus", "Intel Core i7", 16, 3500000);
const computador2 = new computador("lenovo", "AMD Ryzen 5", 8, 2400000);
const computador3 = new computador("Apple", "Aplle M2", 16, 5200000);

console.log("Computador 1");
console.log(computador1);

console.log("Computador 2");
console.log(computador2);

console.log(" Computador 3");
console.log(computador3);




