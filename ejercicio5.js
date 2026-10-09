const prompt = require('prompt-sync')();

function Vehiculo(marca, modelo, anio, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.precio = precio;

    this.encender = function() {
        return `El vehículo ${this.marca} ${this.modelo} (${this.anio}) ha encendido el motor.`;
    };

    this.conducir = function() {
        return `Conduciendo el ${this.marca} ${this.modelo} de color ${this.color}.`;
    };

    this.pintar = function(nuevoColor) {
        this.color = nuevoColor;
        return `El vehículo ha sido pintado y ahora su color es ${this.color}.`;
    };
}

const flotaVehiculos = [];

console.log("--- Registro de vehículos ---");
for (let i = 1; i <= 3; i++) {
    console.log(`\nVehículo #${i}`);
    const marca = prompt("Ingresa la marca: ");
    const modelo = prompt("Ingresa el modelo: ");
    const anio = prompt("Ingresa el año: ");
    const color = prompt("Ingresa el color: ");
    const precio = prompt("Ingresa el precio: ");

    const miVehiculo = new Vehiculo(marca, modelo, anio, color, precio);
    flotaVehiculos.push(miVehiculo);
}

console.log("\n--- Resultados de los vehículos ---");
for (let i = 0; i < flotaVehiculos.length; i++) {
    console.log(`\nMostrando información del vehículo ${i + 1}:`);
    console.log(flotaVehiculos[i].encender());
    console.log(flotaVehiculos[i].conducir());
    console.log(flotaVehiculos[i].pintar("Negro"));
    console.log("Precio: " + flotaVehiculos[i].precio);
}