function sum(a,b) {
    var c=a+b;
    // console.log('The sum of '+ a +' and ' + b +' is ' + c + '.');
    return c;

}

exports.sum = sum;

function multiply(a,b) {
    var c=a*b;
    //console.log('The product of '+ a +' and ' + b +' is ' + c + '.');
    return c;
}
exports.multiply=multiply;

function sumAndMultiply (a,b,c) {
    var sumResult = sum(sum(a,b),c);
    var prodResult = multiply(multiply(a,b),c);
    console.log (a + ', ' + b + ', and '+c+' sum to ' + sumResult + '.');
    console.log (a + ', ' + b + ', and '+c+' have a product of ' + prodResult + '.');
    return [sumResult,prodResult];
}
exports.sumAndMultiply = sumAndMultiply;
