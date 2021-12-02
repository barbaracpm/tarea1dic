//2-AREA TRIÁNGULO

const inputEl = document.querySelector(".valor1");
const inputEl2 = document.querySelector(".valor2");
const formEl = document.querySelector(".form");
const btnCalcularPerimetro = document.querySelector(".calcularPerimetroBtn");
const btnReset = document.querySelector(".reset");
const textoResultado = document.querySelector(".resultado");

//preventDefault

function prevDefault(event){
    event.prevDefault;
}

formEl.addEventListener("submit", prevDefault);


//sumar
function calcularPerimetroRectangulo() {
    const value1 = parseInt(inputEl.value);
    const value2 = parseInt(inputEl2.value);
  
    textoResultado.innerHTML = (value1 * 2) + (value2 * 2);
}


btnCalcularPerimetro.addEventListener("click", calcularPerimetroRectangulo);



//reset
function reset() {
   
    inputEl.value = "";
    inputEl2.value= "";
    textoResultado.innerHTML= "";
}

btnReset.addEventListener("click", reset);


