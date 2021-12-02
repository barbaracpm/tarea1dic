"use strict";

function calculateGenderPercentage(girls, boys) {

    const totalStudents = girls + boys;
    const girlsPercentage = Math.floor((girls * 100) /totalStudents);
    const boysPercentage = 100 - girlsPercentage;

    return `En la clase hay un ${girlsPercentage}% de mujeres y un ${boysPercentage}% de hombres`;

}

console.log(calculateGenderPercentage(15, 10));