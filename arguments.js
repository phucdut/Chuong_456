function writeLog() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function sumArray() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}


function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

writeLog(1, 3, 5, 7, 9);
console.log(sumArray(1, 2, 5, 4, 5, 7));
console.log(findMax(5, 153, 750, 750, 44, 88));