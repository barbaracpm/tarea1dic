"use strict";



function calculateSalary(workedHours, standardHourlyWage) {

    let string= "No has hecho horas extra";

    const extraHours = workedHours - 40;
    let extraSalary; 

    if (extraHours > 0) {
        if (extraHours <= 8) {

            extraSalary = (standardHourlyWage * 2)  * extraHours; 
            string = `Recibirás ${extraSalary} por tus ${extraHours} horas extra`;

        } else {

            const doubleHoursSalary = (standardHourlyWage * 2)  * 8; 
            const tripleHoursSalary =  (standardHourlyWage * 3) * (extraHours - 8); 
            extraSalary = doubleHoursSalary + tripleHoursSalary;
            string = `Recibirás ${extraSalary} por tus ${extraHours} horas extra`;
        }
    }

    return string;


}

console.log(calculateSalary(60, 15));