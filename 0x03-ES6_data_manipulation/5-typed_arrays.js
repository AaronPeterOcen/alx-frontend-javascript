export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arr = new ArrayBuffer(length);
  const val = new DataView(arr);
  val.setInt8(position, value);
  return val;
}
