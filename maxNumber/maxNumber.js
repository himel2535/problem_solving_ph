const maxNumber = (numbers) => {
  let max = numbers[0];
  for (let number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};
const numbers = [5,1,9,3];
console.log(maxNumber(numbers));
