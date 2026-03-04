const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArr = splitString.reverse()
    let joinReverse = reverseArr.join("")
    return joinReverse
};

// Do not edit below this line
module.exports = reverseString;

reverseString("Hello")
