"use strict";
// Implémentation de la classe Car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Le moteur de la voiture a démarré");
    }
}
// Création d'une instance et appel de start()
const maVoiture = new Car("Toyota", "Corolla", 2022);
maVoiture.start();
