
//Prompt for the user to input the cars speed
const speed =parseFloat(prompt("Input Car Speed:"));
//Exectutes the print when the value of the cars speed is equal to the value of the input
function calculateSpeed(speed){
    if (speed<=70){
        console.log("Ok");}
    if (speed <=75 && speed >=71){
        console.log("Points:0");
    }
    if (speed <=80 && speed >=76){
        console.log("Points:1");
    }
    if (speed <=85 && speed >=81){
        console.log("Points:2");
    }
    if (speed <=90 && speed >=86){
        console.log("Points:3");
    }
    if (speed <=95 && speed >=91){
        console.log("Points:4");
    }
    if (speed <=100 && speed >=96){
        console.log("Points:5");
    }
    if (speed <=105 && speed >=101){
        console.log("Points:6");
    }
    if (speed <=110 && speed >=106){
        console.log("Points:7");
    }
    if (speed <=115 && speed >=111){
        console.log("Points:8");
    }
    if (speed <=120 && speed >=116){
        console.log("Points:9");
    }
    if (speed <=125 && speed >=121){
        console.log("Points:10");
    }
    if (speed <=130 && speed >=126){
        console.log("Points:11");
    }
    if (speed <=135 && speed >=131){
        console.log("Points:12");
    }
    if (speed >135){
        console.log("Lisence suspended");
    }
    //Since the demerit points are a fixed value and not in decimal form it is better to specify the print when the value of the input is in a certain range to therefor give the points
}
//Calls out the function to confirm the cars speed and take further action
calculateSpeed(speed);
