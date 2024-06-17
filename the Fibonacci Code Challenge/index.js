
function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    var output = [];
    var num1 = 0;
    var num2 = 1;

    for (var i = 0; i < n; i++) {
        var num3 = num2 + num1;
        output.push(num1);
        num1 = num2;
        num2 = num3;

    }

    //Return an array of fibonacci numbers starting from 0.
    return output;
    //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(5));


function fibonacciGenerator(n) {

    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
    }
    for (var i = 2; i < n; i++) {
        output.push(output[output.length - 2] +
            output[output.length - 1]);

    }

    return output;

}

output = fibonacciGenerator(245);
console.log(output)