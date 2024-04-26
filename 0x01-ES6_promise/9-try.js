// export default function divideFunction(numerator, denominator) {
//   try {
//     if (denominator === 0) {
//       throw new Error();
//     }
//     return numerator / denominator;
//   } catch (error) {
//     throw Error('cannot divide by 0');
//   }
// }

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const returnedValue = mathFunction();
    queue.push(returnedValue);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(String(error));
    queue.push('Guardrail was processed');
  }
  return queue;
}
