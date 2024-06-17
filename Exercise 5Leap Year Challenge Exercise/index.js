
// My Solution
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap");
} else {
    console.log("Not Leap");
}

//Angela Solution
if (year % 4 === 0) {
    if (year % 100 !== 0) {
        if (year % 400 === 0) {
            return "Leap year.";
        } else {
            return "Not Leap year.";
        }
    }
    else {
        return "Not Leap year.";
    }
} else {
    return "Not Leap year.";
}
