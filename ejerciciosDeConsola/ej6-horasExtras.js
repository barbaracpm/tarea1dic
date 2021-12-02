"use strict";

//Devolver nombre de todos
//Devolver nombre del que tenga mayor sueldo


const employees = [

    empleado1 = {
        name: "Pepe",
        sueldo: 3000
    },

    empleado2 = {
        name: "Luis",
        sueldo: 3000
    },

    empleado3 =  {
        name: "Elena",
        sueldo: 5000
    },

    empleado4 = {
        name: "MariCarmen",
        sueldo: 2500
    },

    empleado5 = {
        name: "Marta",
        sueldo: 4000
    }

];




function reviewEmployees(array){

    let mayorSueldo= array[0].sueldo;
    let nombre;

   for (let i= 0; i < array.length; i++) {

       if (array[i].sueldo >= mayorSueldo) {
           mayorSueldo = array[i].sueldo;
           nombre= array[i].name;
           
       }

   }
    
   return ` ${nombre} es la persona que más gana y cobra ${mayorSueldo}$ al mes`;

} 

console.log(reviewEmployees(employees));