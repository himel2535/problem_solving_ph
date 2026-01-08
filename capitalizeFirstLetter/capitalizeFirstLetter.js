
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const inputString = "hello world";
console.log(capitalizeFirstLetter(inputString));
