
const evenNumbers = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,12];
    let evenNumbers=[]
    for(let number of numbers){
        if(number%2===0){
            evenNumbers.push(number)
        }
    }
    return evenNumbers;
}
console.log(evenNumbers());