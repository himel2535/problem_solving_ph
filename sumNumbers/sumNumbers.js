
const sumNumbers=()=>{
    const numbers=[1,2,4,6,2,5];
    let sum=0;
    for(let number of numbers){
        sum=sum+number;
    }
    return sum;
}
console.log(sumNumbers())