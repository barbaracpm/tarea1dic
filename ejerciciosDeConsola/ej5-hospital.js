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
const textoResultado = document.querySelector(".resultado");

//preventDefault
function prevDefault(event){
    event.prevDefault;
}

formEl.addEventListener("submit", prevDefault);



function calcularPresu() {
    const porPediatria = parseInt(pediatriaInput.value);
    const porUrgencias = parseInt(urgenciasInput.value);
    const porTrauma = parseInt(traumatologiaInput.value);

    const presuTotal = parseInt(presuTotalInput.value);

    const presuPediatria = calcularPorcentaje(porPediatria, presuTotal);
    const presuUrgencias = calcularPorcentaje(porUrgencias, presuTotal);
    const presuTrauma = calcularPorcentaje(porTrauma, presuTotal);

        textoResultado += `-> El presupuesto para ${areaName} es de ${budget}$.\n`;
    
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


