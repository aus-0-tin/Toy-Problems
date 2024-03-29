
function calculateNetSalary(){
    //The following prompt will ask the user to input the basic salary and benefits
    const prompt = require("prompt-sync")({sigint: true});

    let basicSalary = parseInt(prompt('Input basic salary'));
    //calculate gross salary
    
    //calculate payee
    let payee;
    if(basicSalary <=24000){
       payee=0.01*24000 }
    else if (basicSalary <= 32333){
        payee = 2400 + (0.25*(basicSalary-24000))}
    else if (basicSalary <= 500000){
       payee = 4483.25 + (0.3*(basicSalary-32333))}
    else if (basicSalary<= 800000){
        payee = 144783.35 +(0.325*(basicSalary-500000))}
    else if (basicSalary>800000){
        payee = 237800.1 +(0.35*(basicSalary-800000))}
       
    //calculate NHIF deductions
    let nhifDeductions;
    if (basicSalary<=5999){
        nhifDeductions=150 ;
    }
    if (basicSalary<=7999 && basicSalary >=6000){
        nhifDeductions=300 ;
    }
    if (basicSalary<=11999 && basicSalary >=8000){
        nhifDeductions=400 ;
    }
    if (basicSalary<=14999 && basicSalary >=12000){
        nhifDeductions=500 ;
    }
    if (basicSalary<=19999 && basicSalary >=15000){
        nhifDeductions=600 ;
    }
    if (basicSalary<=24999 && basicSalary >=20000){
        nhifDeductions=750 ;
    }
    if (basicSalary<=29999 && basicSalary >=25000){
        nhifDeductions=850 ;
    }
    if (basicSalary<=34999 && basicSalary >=30000){
        nhifDeductions=900 ;
    }
    if (basicSalary<=39999 && basicSalary >=35000){
        nhifDeductions=950 ;
    }
    if (basicSalary<=44999 && basicSalary >=40000){
        nhifDeductions=1000 ;
    }
    if (basicSalary<=49999 && basicSalary >=45000){
        nhifDeductions=1100 ;
    }
    if (basicSalary<=59999 && basicSalary >=50000){
        nhifDeductions=1200 ;
    }
    if (basicSalary<=69999 && basicSalary >=60000){
        nhifDeductions=1300 ;
    }
    if (basicSalary<=79999 && basicSalary >=70000){
        nhifDeductions=1400 ;
    }
    if (basicSalary<= 89999 && basicSalary >=80000){
        nhifDeductions=1500 ;
    }
    if (basicSalary<=99999 && basicSalary >=90000){
        nhifDeductions=1600 ;
    }
    if (basicSalary>=100000){
        nhifDeductions= 1700;
    }
    //calculate NSSF deduction which is 6%
    const nssfDeductions = 0.06*basicSalary;
    
    //calculations for the net salary
    const netSalary =(basicSalary - payee - nhifDeductions - nssfDeductions );
    
    //Display the calculated values to the user
    console.log("Gross Salary:",+ basicSalary);
    console.log("Payee (Tax): ",+ payee);
    console.log("NHIF Deduction: ",+ nhifDeductions);
    console.log("NSSF Deductions: ",+ nssfDeductions);
    console.log("Net Salary: ",+ netSalary);
    }
    
    //Call the function to calculate and display the salary details
   console.log(calculateNetSalary());
 
    
