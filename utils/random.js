// returns a random object from an array
export default function pickRandomItem(array) {
  const max = array.length;
  const randomIndex = Math.round(Math.random() * max);
  const item = array[randomIndex];
  return item;
}
