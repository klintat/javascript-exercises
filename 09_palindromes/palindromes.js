const palindromes = function (string) {
    // let splitString = string.split("");
    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join("");
    // if(joinArray === string) {
    //     return true;
    // } else {
    //     return false;
    // }

    let processedStr = string.toLowerCase().replace(re, "");
    return processedStr == processedStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
