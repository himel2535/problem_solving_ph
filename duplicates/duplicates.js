// const removeDuplicates=(arr)=>{
//     let newArr=[...arr]
//     return [...new Set(newArr)];
// }
// const numbers=[1,2,2,3,4,4,5,5,5,6];
// console.log("Array after removing duplicates:--",removeDuplicates(numbers));

const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let num of arr) {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  }
  return uniqueArr;
};
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
console.log("Array after removing duplicates:--", removeDuplicates(numbers));