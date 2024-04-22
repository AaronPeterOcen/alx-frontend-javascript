export default function appendToEachArrayValue(array, appendString) {
  const array1 = array;
  for (const val of array) {
    const idx = array.indexOf(val);
    array1[idx] = appendString + val;
  }

  return array1;
}
