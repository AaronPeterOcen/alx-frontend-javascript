export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const a of reportWithIterator) {
    for (const employee of a) {
      employeeNames += `${employee} | `;
    }
  }

  employeeNames = employeeNames.slice(0, -2);
  return employeeNames;
}
