// task 0
// import { taskFirst, taskNext } from "./0-constants.js";

// console.log(`${taskFirst()} ${taskNext()}`);
// //

// task-1
// import taskBlock from "./1-block-scoped.js";

// console.log(taskBlock(true));
// console.log(taskBlock(false));

// task-2 arrow functions
import getNeighborhoodsList from "./2-arrow.js";

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood("Noe Valley");
console.log(res);
