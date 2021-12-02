//2-AREA TRIÁNGULO

const inputEl = document.querySelector(".valor1");
const inputEl2 = document.querySelector(".valor2");
const formEl = document.querySelector(".form");
const btnCalcularArea = document.querySelector(".calcularAreaBtn");
const btnReset = document.querySelector(".reset");
const textoResultado = document.querySelector(".resultado");

//preventDefault

function prevDefault(event){
    event.prevDefault;
}

formEl.addEventListener("submit", prevDefault);


//sumar
function calcularAreaTriangulo() {
    const value1 = parseInt(inputEl.value);
    const value2 = parseInt(inputEl2.value);
  
    textoResultado.innerHTML = value1 * value2;
}


btnCalcularArea.addEventListener("click", calcularAreaTriangulo);



//reset
function reset() {
   
    inputEl.value = "";
    inputEl2.value= "";
    textoResultado.innerHTML= "";
}

btnReset.addEventListener("click", reset);






