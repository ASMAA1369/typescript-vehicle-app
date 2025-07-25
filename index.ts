// Définition de l'interface Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémentation de la classe Car
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Le moteur de la voiture a démarré");
  }
}

// Création d'une instance et appel de start()
const maVoiture = new Car("Toyota", "Corolla", 2022);
maVoiture.start();
