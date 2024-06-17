
// My Solution
function getRandomInt(max) {
    firestName = prompt("What is the name of the firest person");
    secondName = prompt("What is the name of the secound person");
    stringToPesrson = firestName + " " + Math.floor(Math.random() * max + 1) + "%" + " " + secondName + " of love";
    return stringToPesrson;
}

alert(getRandomInt(100));
// Expected output:  1  to 100



//Angela Solution

prompt("What is your name?");
prompt("What is ther name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 100) {
    alert("your Love score is " + loveScore + "%" + " You love each other like Kany loves Kanye.");
} else {

    alert("your Love score is " + loveScore + "%")
}



