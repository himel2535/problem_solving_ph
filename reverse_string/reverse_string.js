
const readline=require("readline");

const reverse_string = (str) => {
  return str.split("").reverse().join("");
};

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter a string to Reverse:-- ",(input)=>{
    const result=reverse_string(input);
    console.log("Reversed String is :-- ",result);
    rl.close()
})