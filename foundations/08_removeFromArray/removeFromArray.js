const removeFromArray = function(arr) {
    for (n =  1; n < arguments.length; n++) {
        for (i = arr.length -1; i >= 0; i--) {
            if (arr[i] === arguments[n]) {
                arr.splice(i, 1);
            }
        }
        
    }    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;