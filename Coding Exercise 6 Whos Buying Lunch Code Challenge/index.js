
// My Solution
function whosPaying(names) {

    /******Don't change the code above*******/

    //Write your code here.
    var random = Math.floor(Math.random() * names.length)
    //console.log(Math.round(Math.random() * names.length));

    return names[random] + "is going to buy lunch today!"


    /******Don't change the code below*******/
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

console.log(whosPaying(names));


//Angela Solution

function whosPaying(names) {


    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";

}