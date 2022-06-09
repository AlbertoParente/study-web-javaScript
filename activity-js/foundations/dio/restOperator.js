function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
};

console.log(sum(5, 5, 5, 2, 3));

// rest operator
// string, arrays, literal objects e objects interable
function sum2(...args) {
    return args.reduce((acc, value) => acc + value, 0)
};

console.log(sum2(6, 6, 6, 3, 4));

const sum3 = (a, b, ...rest) => {
    console.log(a, b, rest);
};

console.log(sum3(5, 5, 5, 2, 3));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum4 = (...args) => {
    return multiply(...rest);
};

console.log(sum4(5, 5, 5, 2, 3));

// string, arrays, literal objects e objects interable

const str = 'Alberto Parente';

function logArgs(...args) {
    console.log(args);
};

logArgs(...str);
