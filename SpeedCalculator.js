
//Prompt for the user to input the cars speed
const prompt = require("prompt-sync")({sigint: true});
 
//ParseInt => is a function that converts a string into a number.
let speed = parseInt(prompt('Input speed '));
 
let output;//will appear everytime

let demeritPoint;
  
if (speed < 70){
    output = "Ok"; //if speed is less than 70, it should print "Ok"
}else{
    let speedLimit = Math.floor(((speed - 70) / 5));
    demeritPoint = speedLimit
    if(demeritPoint > 12){
        output  = "Liscence suspended"; //if the demerits points exceed 12, it should print "Liscence suspended"
    }else{
        output = demeritPoint;//if the speed is exceedingly great.
    }
}
console.log(output);//what the user sees

   