"Use strict";
//PRESUPUESTO AREAS DE UN HOSPITAL

//Constantes globales del html
const pediatriaInput = document.querySelector(".valor1");
const urgenciasInput= document.querySelector(".valor2");
const traumatologiaInput= document.querySelector(".valor3");
const presuTotalInput= document.querySelector(".valor4");
const formEl = document.querySelector(".form");
const btnCalcularPresu = document.querySelector(".calcularPresu");
const btnReset = document.querySelector(".reset");
let textoResultado = document.querySelector(".resultado");

//preventDefault
function prevDefault(event){
    event.prevDefault;
}

formEl.addEventListener("submit", prevDefault);



function calcularPresu() {
    
    const presuPediatria = calcularPorcentaje(parseInt(pediatriaInput.value), parseInt(presuTotalInput.value));
    const presuUrgencias = calcularPorcentaje(parseInt(urgenciasInput.value), parseInt(presuTotalInput.value));
    const presuTrauma = calcularPorcentaje(parseInt(traumatologiaInput.value), parseInt(presuTotalInput.value));


        textoResultado.innerHTML += 
        `<h5> El presupuesto para pediatría es de ${presuPediatria}$.</h5>
        <h5>El presupuesto para Urgencias es de ${presuUrgencias}$.</h5> 
        <h5>El presupuesto para Traumatología es de ${presuTrauma}$.</h5>`;
}


function calcularPorcentaje(porcentaje, total) {

    const result = total * porcentaje / 100;

    return result;
}



btnCalcularPresu.addEventListener("click", calcularPresu);



//reset
function reset() {
   
    inputEl.value = "";
    inputEl2.value= "";
    textoResultado.innerHTML= "";
}

btnReset.addEventListener("click", reset);
