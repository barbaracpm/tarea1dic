
//

const precioHora = document.querySelector(".precioHora");
const horasRealizadas = document.querySelector(".horasRealizadas");
const formEl = document.querySelector(".form");
const btnCalcularSalario = document.querySelector(".calcularSalario");
const btnReset = document.querySelector(".reset");
let textoResultado = document.querySelector(".resultado");

//preventDefault

function prevDefault(event){
    event.prevDefault;
}

formEl.addEventListener("submit", prevDefault);


function calculateSalary() {


    const extraHours = parseInt(horasRealizadas.value) - 40;
    console.log(extraHours);

    if (extraHours > 0) {
        let extraSalary; 

        if (extraHours <= 8) {

            extraSalary = (parseInt(precioHora.value) * 2)  * extraHours; 
            textoResultado.innerHTML  = `Recibirás ${extraSalary} por tus ${extraHours} horas extra`;

        } else {

            const doubleHoursSalary = (parseInt(precioHora.value) * 2)  * 8; 
            const tripleHoursSalary =  (parseInt(precioHora.value) * 3) * (extraHours - 8); 
            extraSalary = doubleHoursSalary + tripleHoursSalary;
            textoResultado.innerHTML  = `Recibirás ${extraSalary} por tus ${extraHours} horas extra`;
        }
    } else {

        textoResultado.innerHTML = "No has hecho horas extra";

    }

}

btnCalcularSalario.addEventListener("click", calculateSalary);



//reset
function reset() {
   
    precioHora.value = "";
    horasRealizadas.value= "";
    textoResultado.innerHTML= "";

}

btnReset.addEventListener("click", reset);




