const fibonacci = function(num) {
    // let num1 = 0;
    // let num2 = 1;
    // let sum;
    // let i = 0;
    // for (i = 0; i < num; i++) {
    //     sum = num1 + num2;
    //     num1 = num2;
    //     num2 = sum;
    // }
    // return num2;

    const fib = [0, 1];
    for (let i = 2; i <= count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
        return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
