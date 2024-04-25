// import Car from "./10-car";

// class TestCar extends Car {}

// const tc1 = new TestCar("Nissan", "Turbo", "Pink");
// const tc2 = tc1.cloneCar();

// console.log(tc1);
// console.log(tc1 instanceof TestCar);

// console.log(tc2);
// console.log(tc2 instanceof TestCar);

// console.log(tc1 === tc2);

// import EVCar from './100-evcar';

// const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
// console.log(ec1);

// const ec2 = ec1.cloneCar();
// console.log(ec2);

// import ClassRoom from "./0-classroom";

// const room = new ClassRoom(10);
// console.log(room._maxStudentsSize);

// import initializeRooms from "./1-make_classrooms";

// console.log(initializeRooms());

import HolbertonCourse from "./2-hbtn_course";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch (err) {
  console.log(err);
}
