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
    //I did this a bit differently, by storing sum(a,b) in a variable and then calling sum with that variable and c as arguments. Same with multiply(). Yours looks very clean.
    var sumResult = sum(sum(a,b),c);
    var prodResult = multiply(multiply(a,b),c);
    // console.log (a + ', ' + b + ', and '+c+' sum to ' + sumResult + '.');
    // console.log (a + ', ' + b + ', and '+c+' have a product of ' + prodResult + '.');
    return [sumResult,prodResult];
}
exports.sumAndMultiply = sumAndMultiply;

//Your sumArray function looks identical to mine!
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

function multiplyArray (input) {
    //Way to go setting results equal to 1 to start. Having just defined sumArray, it would have been tempting to set it equal to 0.
    var results = 1;
    for (var i=0;i < input.length;i++) {
    //results *= input[i] would have worked too.
        results = results * input[i];
    }
    //console.table (input);
    console.log ('The numbers ' + input + ' have a product of ' + results + '.');
    return results;
}
exports.multiplyArray=multiplyArray;
