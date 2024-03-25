
function calculateNetSalary(){
    //The following prompt will ask the user to input the basic salary and benefits
    const basicSalary=parseFloat(prompt("Enter basic salary:"));
    const benefits=parseFloat(prompt("Enter benefits:"));
    
    //calculate gross salary
    const grossSalary= basicSalary + benefits;
    
    //calculate payee
    let payee;
    if(grossSalary <=24000){
       payee=0.01*24000 }
    else if (grossSalary <= 32333){
        payee = 2400 + (0.25*(grossSalary-24000))}
    else if (grossSalary <= 500000){
       payee = 4483.25 + (0.3*(grossSalary-32333))}
    else if (grossSalary<= 800000){
        payee = 144783.35 +(0.325*(grossSalary-500000))}
    else if (grossSalary>800000){
        payee = 237800.1 +(0.35*(grossSalary-800000))}
       
    //calculate NHIF deductions
    let nhifDeductions;
    if (grossSalary<=5999){
        nhifDeductions=150 ;
    }
    if (grossSalary<=7999 && grossSalary >=6000){
        nhifDeductions=300 ;
    }
    if (grossSalary<=11999 && grossSalary >=8000){
        nhifDeductions=400 ;
    }
    if (grossSalary<=14999 && grossSalary >=12000){
        nhifDeductions=500 ;
    }
    if (grossSalary<=19999 && grossSalary >=15000){
        nhifDeductions=600 ;
    }
    if (grossSalary<=24999 && grossSalary >=20000){
        nhifDeductions=750 ;
    }
    if (grossSalary<=29999 && grossSalary >=25000){
        nhifDeductions=850 ;
    }
    if (grossSalary<=34999 && grossSalary >=30000){
        nhifDeductions=900 ;
    }
    if (grossSalary<=39999 && grossSalary >=35000){
        nhifDeductions=950 ;
    }
    if (grossSalary<=44999 && grossSalary >=40000){
        nhifDeductions=1000 ;
    }
    if (grossSalary<=49999 && grossSalary >=45000){
        nhifDeductions=1100 ;
    }
    if (grossSalary<=59999 && grossSalary >=50000){
        nhifDeductions=1200 ;
    }
    if (grossSalary<=69999 && grossSalary >=60000){
        nhifDeductions=1300 ;
    }
    if (grossSalary<=79999 && grossSalary >=70000){
        nhifDeductions=1400 ;
    }
    if (grossSalary<= 89999 && grossSalary >=80000){
        nhifDeductions=1500 ;
    }
    if (grossSalary<=99999 && grossSalary >=90000){
        nhifDeductions=1600 ;
    }
    if (grossSalary>=100000){
        nhifDeductions= 1700;
    }
    //calculate NSSF deduction which is 6%
    const nssfDeductions = 0.06*grossSalary;
    
    //calculations for the net salary
    const netSalary =(grossSalary - payee - nhifDeductions - nssfDeductions );
    
    //Display the calculated values to the user
    console.log("Gross Salary:",+ grossSalary);
    console.log("Payee (Tax): ",+ payee);
    console.log("NHIF Deduction: ",+ nhifDeductions);
    console.log("NSSF Deductions: ",+ nssfDeductions);
    console.log("Net Salary: ",+ netSalary);
    }
    
    //Call the function to calculate and display the salary details
    calculateNetSalary();
    
