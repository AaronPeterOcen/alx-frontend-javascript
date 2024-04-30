export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // if (!weakMap.has(endpoint)) {
  //   weakMap.set(endpoint, 0);
  // }
  // weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  // if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
  //   throw new Error("Endpoint load is high");
  // }
  let called = weakMap.get(endpoint) || 0;

  called += 1;

  weakMap.set(endpoint, called);

  if (called >= 5) {
    throw Error("Endpoint load is high");
  }
  return called;
}
