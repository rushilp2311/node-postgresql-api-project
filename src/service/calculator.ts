
const add = (counter: number, valueToIncrementWith: number): number => {
  return counter + valueToIncrementWith;
}
const subtract = (counter: number, valueToDecrementWith: number): number => {
  return counter - valueToDecrementWith;
}
const getTime = (): number => {
  return new Date().getTime();
}

module.exports = { add, subtract, getTime };