
// My Solution

var output = [];
var number = 0;

function fizzBuzz() {
    number++;
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("fizzBuzz");
        output.push("fizzBuzz");
    } else if (number % 3 === 0) {
        console.log("fizz");
        output.push("fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
        output.push("Buzz");
    } else {
        output.push(number);
    }
    console.log(output);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

// Angela  Solution



var count = 1;

function fizzBuzz() {

    //write code here.

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    count++;
    console.log(count);
}