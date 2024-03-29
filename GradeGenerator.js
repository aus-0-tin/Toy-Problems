//prompt user to input students marks
const prompt = require("prompt-sync")({sigint: true});

let mark = parseInt(prompt('Input students marks'));

 function calculateGrade(mark) {
    let output;

    if (mark >= 80 && mark <= 100 ) {
        output = "A"; //If mark is greater than 79, return 'A'
    } else if (mark >= 60 && mark <= 79) {
        output = "B"; //If mark is between 60 and 79 (inclusive), return 'B'
    } else if (mark >= 50 && mark <= 59) {
        output = "C"; //If mark is between 50 and 59 (inclusive), return 'C'
    } else if (mark >= 40 && mark <= 49) {
        output = "D"; //If mark is between 40 and 49 (inclusive), return 'D'
    } else if ( mark >= 0 && mark <= 39) {
        output= "E"; //Otherwise, return 'E'
    } else {
        output = "Invalid input"// if input is not a number or greater than 100
    } return  output
}

//start program
console.log(calculateGrade(mark));