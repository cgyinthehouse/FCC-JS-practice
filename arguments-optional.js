function addTogether() {
    if ([...arguments].every(item => typeof item == "number")) {
        if (arguments.length > 1) {
            return [...arguments].reduce((a, b) => a + b)
        } else {
            let num2 = arguments[0];
            return function sum(num) {
                return typeof num == 'number' ? num + num2 : undefined;
            }
        }
    } else {
        return undefined
    }
};
console.log(addTogether(1, 2, 3));
console.log(addTogether('4tsgd'));
console.log(addTogether(2, '3'));
console.log(addTogether(2)([3]));