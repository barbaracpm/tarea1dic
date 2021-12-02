"use strict";

const listado = document.querySelector(".lista");
const resultado = document.querySelector(".resultado");

//Devolver nombre y sueldo de todos
//Devolver nombre del que tenga mayor sueldo



const employees = [

    {
        name: "Pepe",
        sueldo: 3000
    },

    {
        name: "Luis",
        sueldo: 3000
    },

    {
        name: "Elena",
        sueldo: 5000
    },

    {
        name: "Mari Carmen",
        sueldo: 2500
    },

    {
        name: "Marta",
        sueldo: 4000
    }

];


//pintar listado de empleados
    for (let i =0; i < employees.length; i++) {

        listado.innerHTML += `<li> Nombre: ${employees[i].name} / Sueldo: ${employees[i].sueldo} </li>`;
    }




    function reviewEmployees(array){

        let mayorSueldo= array[0].sueldo;
        let nombre;

        for (let i= 0; i < array.length; i++) {

             if (array[i].sueldo >= mayorSueldo) {
                mayorSueldo = array[i].sueldo;
                nombre= array[i].name;
           
            }

        }
    
   resultado.innerHTML = ` ${nombre} es la persona que más gana y cobra ${mayorSueldo}$ al mes`;

} 

reviewEmployees(employees);