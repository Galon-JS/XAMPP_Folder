"use strict"
const palindrome = (str) => {
    
    let strReverse = str.split(" ").reverse().join("").toLowerCase();
    console.log('str: ', str);

    if (str === strReverse) {
        return true
    } else {
        return false
    }
}
let result = palindrome("not a palindrome")
console.log('result: ', result);
