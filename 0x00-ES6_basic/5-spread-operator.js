export default function concatArrays(array1, array2, string) {
  const added = [...array1, ...array2, ...string];
  return added;
}
