function calculateGrade(mark) {
    if (mark > 79) {
        return "A"; //If mark is greater than 79, return 'A'
    } else if (mark >= 60 && mark <= 79) {
        return "B"; //If mark is between 60 and 79 (inclusive), return 'B'
    } else if (mark >= 50 && mark <= 59) {
        return "C"; //If mark is between 50 and 59 (inclusive), return 'C'
    } else if (mark >= 40 && mark <= 49) {
        return "D"; //If mark is between 40 and 49 (inclusive), return 'D'
    } else {
        return "E"; //Otherwise, return 'E'
    }
}
  //Main function to prompt user for input and dispaly the grade.
function main() {
    //Prompt the user to input student's mark.
    let mark = parseFloat(prompt("Enter student's mark (between 0 and 100):"));
     
    //Check if the input is a valid number between 0 and 100
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        //Calculate the grade using the calculateGrade function
        let grade = calculateGrade(mark);

        //Output the grade
        console.log("The grade for the mark", mark, "is", grade);
    } else {
        console.log("Invalid input! Mark must be between 0 and 100.");
    }
}
//Call the main function to start the program
main();
