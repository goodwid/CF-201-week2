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
    // console.log (a + ', ' + b + ', and '+c+' sum to ' + sumResult + '.');
    // console.log (a + ', ' + b + ', and '+c+' have a product of ' + prodResult + '.');
    return [sumResult,prodResult];
}
exports.sumAndMultiply = sumAndMultiply;

function sumArray (input) {
    var results = 0;
    for (var i=0;i < input.length;i++) {
        results += input[i];
    }
    //console.table (input);
    console.log (input + ' was passed in as an array of numbers and ' + results + ' is their sum.');
    return results;
}
exports.sumArray=sumArray;
