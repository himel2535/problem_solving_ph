
const isPalindrome=(str)=>{
    const reversedStr=str.split("").reverse().join("");
    if(str.toLowerCase()===reversedStr.toLowerCase()){
        return true
    }
    else{
        return false
    }
}
const result=isPalindrome("Madam")
console.log(result)