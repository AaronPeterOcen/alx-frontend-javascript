export default function getSumOfHoods(
  initialNumber = undefined,
  expansion1989 = 89,
  expansion2019 = 19,
) {
  if (expansion1989 === undefined && expansion2019 === undefined) {
    return initialNumber + expansion1989 + expansion2019;
  }

  return getSumOfHoods;
}
