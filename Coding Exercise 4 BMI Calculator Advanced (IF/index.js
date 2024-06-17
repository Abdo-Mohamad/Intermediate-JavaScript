
// My Solution
function bmiCalculator(weight, height) {
    // Calculate the BMI
    var bmi = weight / (height * height);
    var roundedBmi = Math.round(bmi);  // Round BMI to the nearest integer

    // Determine the interpretation based on the rounded BMI value
    var interpretation;
    if (roundedBmi < 18.5) {
        interpretation = "Your BMI is " + roundedBmi + ", so you are underweight.";
    } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        interpretation = "Your BMI is " + roundedBmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + roundedBmi + ", so you are overweight.";
    }
    
    // Return the interpretation
    console.log(interpretation);
    return interpretation;
}


console.log(bmiCalculator(83, 173));
//Angela Solution

