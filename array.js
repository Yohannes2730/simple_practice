function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
console.log(sum(1, 2, 3, 4, 5));
function multiply() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accumulator, current) { return accumulator * current; }, 1);
}
console.log(multiply(1, 2, 3, 4, 5));


