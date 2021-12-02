"use strict";

//PARA EL EJERCICIO HE ESTIMADO QUE LA NAVIDAD SE CELEBRA ENTRE EL 1 DE DICIEMBRE Y EL 6 DE ENERO.


const userFecha = prompt("Introduzca una fecha en formato dd/mm");

function isXmas(fecha){

    
   if (userFecha[3] === "1" && userFecha[4] === "2" || userFecha[3] === "0" && userFecha[4] === "1") {
       console.log("ha entrado en diciembre o enero");
        
        if (userFecha[4] === "1" && (parseInt(userFecha[0]) > 0 ||  parseInt(userFecha[1]) > 6 ))  {
    
            return alert ("No es Navidad");
        
        } else {
    
            return alert ("Es Navidad");
        }

    }
       
  else { 

         return alert("No es Navidad");
         
    }

    
}

isXmas(userFecha);