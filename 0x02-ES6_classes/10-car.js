// export default class Car {
//   constructor(brand, motor, color) {
//     this._brand = brand;
//     this._motor = motor;
//     this._color = color;
//   }

//   static get [Symbol.species]() {
//     return this;
//   }

//   clonedCar() {
//     const ModelCar = this.constructor[Symbol.species];
//     return new ModelCar();
//   }
// }

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new Car(...Object.values(this));
  }
}
