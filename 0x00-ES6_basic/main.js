// task 0
// import { taskFirst, taskNext } from "./0-constants.js";

// console.log(`${taskFirst()} ${taskNext()}`);
// //

// task-1
// import taskBlock from "./1-block-scoped.js";

// console.log(taskBlock(true));
// console.log(taskBlock(false));

// task-2 arrow functions
// import getNeighborhoodsList from "./2-arrow.js";

// const neighborhoodsList = new getNeighborhoodsList();
// const res = neighborhoodsList.addNeighborhood("Noe Valley");
// console.log(res);

// task 3
// import getSumOfHoods from "./3-default-parameter.js";

// console.log(getSumOfHoods(34));
// console.log(getSumOfHoods(34, 3));
// console.log(getSumOfHoods(34, 3, 4));

// task 4 spread(...a) operator
import returnHowManyArguments from "./4-rest-parameter.js";

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
