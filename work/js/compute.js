function sum(a,b) {
    var c=a+b;
    console.log('The sum of '+ a +' and ' + b +' is ' + c + '.');
    return c;

}

exports.sum = sum;

function multiply(a,b) {
    var c=a*b;
    console.log('The product of '+ a +' and ' + b +' is ' + c + '.');
    return c;
}
exports.multiply=multiply;
