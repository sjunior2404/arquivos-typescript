"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return Number(input1) + Number(input2);
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('ola', ' , tudo bmem?'));
console.log(somarValores('1', 5));
