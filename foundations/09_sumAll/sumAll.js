const sumAll = function(a, b) {
    let arr = [a,b].sort((x, y) => x - y);
    let newArr = [];
    
    if (Number.isInteger(a) && Number.isInteger(b) && a >=0 && b >= 0) {
        for (i = arr[0]; i <= arr[1]; i++) {
            newArr.push(i);
        }
        const sum = newArr.reduce((acc, currItem) => acc + currItem)
        return sum;

    } else {
        return "ERROR"
    }

    
};

// Do not edit below this line
module.exports = sumAll;
